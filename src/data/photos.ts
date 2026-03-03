import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export interface Photo {
  /** Filename inside /images/optimized/ (WebP thumbnail) */
  file: string;
  /** Full-size filename inside /images/ (JPG original), derived automatically */
  readonly fullFile: string;
  title: string;
  story: string;
  location: string;
  date: string;
}

/**
 * Story metadata keyed by WebP filename.
 * Add an entry here when you want a custom title/story for a specific photo.
 * Any file in public/images/optimized/ that is NOT listed here will still
 * appear in the gallery with sensible defaults.
 */
const storyData: Record<string, Partial<Omit<Photo, "file" | "fullFile">>> = {
  "01034900.webp": {
    title: "First Light",
    story: "The morning sun painted everything in gold. She stood there, lost in thought, unaware of the magic surrounding her.",
    location: "Warsaw, Poland",
    date: "2024",
  },
  "11035239.webp": {
    title: "Silent Whispers",
    story: "In the quiet of the studio, emotions speak louder than words. This was the moment she let her guard down.",
    location: "Kraków",
    date: "2024",
  },
  "11035312.webp": {
    title: "Timeless",
    story: "Some moments exist outside of time. This was one of them — pure, unfiltered authenticity.",
    location: "Studio Session",
    date: "2024",
  },
  "11045319.webp": {
    title: "The Calm",
    story: "Before the storm of the day, there's always this peaceful stillness. We captured it here.",
    location: "Morning Light",
    date: "2024",
  },
  "11045368.webp": {
    title: "Unveiled",
    story: "Every portrait is a collaboration between the seen and the unseen — what we show and what we hide.",
    location: "Natural Light",
    date: "2024",
  },
  "11045382.webp": {
    title: "Grace",
    story: "There's an elegance in simplicity. No props, no distractions — just presence.",
    location: "Studio Session",
    date: "2024",
  },
  "11045397.webp": {
    title: "Reflection",
    story: "She looked past the lens, past the camera, into something only she could see.",
    location: "Warsaw",
    date: "2024",
  },
  "11045397 2.webp": {
    title: "Between Frames",
    story: "The best shots often happen between the poses, in those unguarded moments of truth.",
    location: "Studio Session",
    date: "2024",
  },
  "11045406.webp": {
    title: "Softness",
    story: "Strength doesn't always roar. Sometimes it's in the gentle curve of a smile.",
    location: "Portrait Session",
    date: "2024",
  },
  "11045412.webp": {
    title: "Essence",
    story: "Stripped of all artifice, what remains is pure essence — and that's what we captured here.",
    location: "Studio Light",
    date: "2024",
  },
  "11045412 2.webp": {
    title: "Duality",
    story: "Light and shadow, strength and vulnerability — every person contains multitudes.",
    location: "Artistic Portrait",
    date: "2024",
  },
  "11045418.webp": {
    title: "Stillness",
    story: "In the chaos of modern life, finding stillness is an act of rebellion. She found it here.",
    location: "Studio Session",
    date: "2024",
  },
  "11045420.webp": {
    title: "Authentic",
    story: "No retouching of the soul — just honest portraiture that tells the real story.",
    location: "Natural Portrait",
    date: "2024",
  },
  "11045421.webp": {
    title: "Moment",
    story: "Photography is hunting for moments. This one was worth the wait.",
    location: "Portrait Session",
    date: "2024",
  },
  "11045421 2.webp": {
    title: "Layers",
    story: "Every person has layers. The art is knowing which one to reveal.",
    location: "Studio Work",
    date: "2024",
  },
  "11045421 3.webp": {
    title: "Connection",
    story: "The camera becomes invisible when the connection is real. That's when the magic happens.",
    location: "Portrait Session",
    date: "2024",
  },
  "11045440.webp": {
    title: "Epilogue",
    story: "Every ending is a new beginning. This final frame held all the stories of the day.",
    location: "Golden Hour",
    date: "2024",
  },
};

/** Derive the full-size JPG path from the WebP thumbnail filename */
function toFullFile(webpFile: string): string {
  return webpFile.replace(".webp", ".JPG");
}

// ── Dynamic discovery ───────────────────────────────────────────────────────
// At build time, read every .webp file from public/images/optimized/ and
// merge with the storyData map above. Drop a new image in that folder and
// it will appear in the gallery automatically on the next build/dev-reload.

const optimizedDir = join(
  dirname(fileURLToPath(import.meta.url)),
  "../../public/images/optimized"
);

const webpFiles = readdirSync(optimizedDir)
  .filter((f: string) => f.endsWith(".webp"))
  .sort();

export const photos: Photo[] = webpFiles.map((file: string) => {
  const meta = storyData[file] ?? {};
  return {
    file,
    fullFile: toFullFile(file),
    title: meta.title ?? file.replace(".webp", ""),
    story: meta.story ?? "",
    location: meta.location ?? "",
    date: meta.date ?? "",
  };
});
