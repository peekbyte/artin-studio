import { readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export interface Photo {
  file: string;
  readonly fullFile: string;
  title: string;
  story: string;
  location: string;
  date: string;
  category: string;
}

/**
 * Business-category groups shown as tabs in the Photography section.
 */
export const photoCategories = [
  { id: "all",       label: "All Work",     emoji: "✦" },
  { id: "bakery",    label: "Bakery",        emoji: "🥐" },
  { id: "food",      label: "Food & Drink",  emoji: "🍽️" },
  { id: "cosmetics", label: "Cosmetics",     emoji: "💄" },
  { id: "retail",    label: "Retail & Shop", emoji: "🛍️" },
  { id: "brand",     label: "Brand Content", emoji: "🎯" },
];

const storyData: Record<string, Partial<Omit<Photo, "file" | "fullFile">>> = {
  "01034900.webp": {
    title: "Artisan Loaves",
    story: "Product photography for a Warsaw sourdough bakery — clean, appetising shots for their online shop and Instagram.",
    location: "Bakery Client · Warsaw",
    date: "2024",
    category: "bakery",
  },
  "11035239.webp": {
    title: "Morning Pastry Series",
    story: "A full product shoot for a café chain's new pastry menu — hero shots for their menu boards and social ads.",
    location: "Café Client · Warsaw",
    date: "2024",
    category: "bakery",
  },
  "11035312.webp": {
    title: "Coffee & Cream",
    story: "Beverage photography for a specialty coffee brand — designed for their packaging and Meta ad campaigns.",
    location: "Coffee Brand · Warsaw",
    date: "2024",
    category: "food",
  },
  "11045319.webp": {
    title: "Farm-to-Table",
    story: "Editorial food photography for a restaurant's seasonal menu launch — lifestyle imagery that tells the story of the ingredients.",
    location: "Restaurant Client",
    date: "2024",
    category: "food",
  },
  "11045368.webp": {
    title: "Serum Collection",
    story: "Flat-lay and hero shots for a skincare brand's new serum line — used across their e-commerce site and paid ads.",
    location: "Cosmetics Brand",
    date: "2024",
    category: "cosmetics",
  },
  "11045382.webp": {
    title: "Natural Beauty",
    story: "Brand content for a natural cosmetics label — warm, clean imagery aligned with their eco positioning.",
    location: "Beauty Brand",
    date: "2024",
    category: "cosmetics",
  },
  "11045397.webp": {
    title: "Shelf-Ready Packaging",
    story: "Packaging photography for a new beverage line — shots designed for both Amazon listings and retail shelf display.",
    location: "FMCG Brand",
    date: "2024",
    category: "retail",
  },
  "11045397 2.webp": {
    title: "Boutique Lookbook",
    story: "Lookbook shoot for a Warsaw fashion boutique — product-on-model and flat-lay content for their online store.",
    location: "Fashion Boutique · Warsaw",
    date: "2024",
    category: "retail",
  },
  "11045406.webp": {
    title: "Brand Atmosphere",
    story: "Lifestyle brand content for a wellness company — imagery used in their homepage hero, social bio and press kit.",
    location: "Wellness Brand",
    date: "2024",
    category: "brand",
  },
  "11045412.webp": {
    title: "Founder Portrait",
    story: "Personal brand shoot for a business founder — professional yet warm imagery for LinkedIn, press and their website About page.",
    location: "Brand Portrait Session",
    date: "2024",
    category: "brand",
  },
  "11045412 2.webp": {
    title: "Candle Label Shoot",
    story: "Product photography for a handmade candle label — moody, warm shots used on Etsy and Instagram.",
    location: "Artisan Candles Brand",
    date: "2024",
    category: "retail",
  },
  "11045418.webp": {
    title: "Deli Counter",
    story: "In-situ food photography for a deli and catering brand — showcasing their products in a real-world retail environment.",
    location: "Deli Client · Warsaw",
    date: "2024",
    category: "food",
  },
  "11045420.webp": {
    title: "Bakery Interior",
    story: "Atmospheric brand photography for a bakery opening — used across Google My Business, social media and press.",
    location: "Bakery Client",
    date: "2024",
    category: "bakery",
  },
  "11045421.webp": {
    title: "Cream & Berries",
    story: "Hero product shot for a patisserie's signature cake — used as the main image on their delivery app listing.",
    location: "Patisserie Client",
    date: "2024",
    category: "bakery",
  },
  "11045421 2.webp": {
    title: "Vitamin C Serum",
    story: "Studio product photography for a cosmetics label relaunch — stark white background shots for e-commerce and coloured lifestyle shots for ads.",
    location: "Cosmetics Brand",
    date: "2024",
    category: "cosmetics",
  },
  "11045421 3.webp": {
    title: "Campaign Shot",
    story: "Key visual for a seasonal marketing campaign — one image used across email, social, paid ads and in-store print.",
    location: "Brand Campaign",
    date: "2024",
    category: "brand",
  },
  "11045440.webp": {
    title: "Product Flatlay",
    story: "Styled flatlay photography for an online gift shop — product-range imagery for their homepage banner and catalogue.",
    location: "Gift Shop Client",
    date: "2024",
    category: "retail",
  },
};

function toFullFile(webpFile: string): string {
  return webpFile.replace(".webp", ".JPG");
}

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
    date: meta.date ?? "2024",
    category: meta.category ?? "brand",
  };
});
