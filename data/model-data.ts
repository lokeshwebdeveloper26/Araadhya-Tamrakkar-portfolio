import type { ModelData } from "./types"

/**
 * ============================================================
 *  EDIT THIS FILE WHEN CREATING A NEW MODEL
 * ============================================================
 *
 * This is the single source of truth for everything about the
 * model shown on the site. No model information is hard-coded
 * inside components — change the values below and the entire
 * site updates.
 *
 * HOW TO REUSE THIS TEMPLATE FOR A NEW MODEL:
 *   1. Replace the text fields (name, title, bio, details...).
 *   2. Drop new images into /public and update the image paths.
 *   3. Update the gallery and videos arrays.
 *   4. Update the Instagram handle.
 *   5. Update company details in `data/company-data.ts`.
 *   6. Build & deploy.
 *
 * PRIVACY NOTE (junior models):
 *   Any field left as an empty string OR removed is automatically
 *   hidden from the UI. Only include information you are comfortable
 *   making public. Bookings always route through the company/agency,
 *   never directly to the model.
 */
export const modelData: ModelData = {
  name: "Araadhya Tamrakar",
  title: "Junior Fashion & Commercial Model",
  profileImage: "/portfolio/profile.JPG",
  heroImage: "/portfolio/hero.JPG",

  intro:
    "A young and talented junior model with a passion for fashion, commercial shoots and creative campaigns.",

  bio: "Araadhya is a confident young talent with a natural presence and an interest in fashion, commercial and lifestyle shoots. Available for professional projects through agency management.",

  availability: "Available for professional bookings — enquire via the agency",

  // Optional fields left blank are automatically hidden.
  details: {
    age: "11 years" ,
    dateOfBirth: "28 Mar 2015",
    height: "58 inches",
    weight: "36.45 kg ",
    Bust: "29",
    skinTone: "Fair",
    hairColor: "Blonde Brown",
    eyeColor: "Black",
    ShoeSize: "6 (US)",
    Hips: "29",
    Waist: "28",
    location: "Jabalpur, MP, India",
  },

  // Parent/guardian names are optional and often kept private.
  // Leave blank to hide them entirely.
  parents: {
    fatherName: "Mr. Ashwani Tamrakar",
    motherName: "Miss. Richa Tamrakar",
  },

  // Instagram handle WITHOUT the @ (managed by parents/agency).
  instagram: "xdap482",

  ecommerce: [
  {
    name: "Flipkart",
    url: "https://www.flipkart.com/product/p/itme?pid=KTBHQYJVQWZU7KFA",
    description: "Shop featured products and collections. Cubby Boys Printed Cotton Blend Regular T Shirt (Black, Pack of 1)",
  },
],

  /**
   * GALLERY — supports 10–20+ images across categories:
   * "Fashion" | "Commercial" | "Studio" | "Outdoor" | "Casual" | "Campaign"
   * Mark up to a couple of images as `featured: true` for the editorial layout.
   */
  gallery: [
     {
      src: "/portfolio/gallery-1.JPG",
      alt: "Araadhya Tamrakar fashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-2.JPG",
      alt: "Araadhya Tamrakar fashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-3.JPG",
      alt: "Araadhya Tamrakar studio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-4.JPG",
      alt: "Araadhya Tamrakar outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-5.JPG",
      alt: "Araadhya Tamrakar commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-6.JPG",
      alt: "Araadhya Tamrakar lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-7.JPG",
      alt: "Araadhya Tamrakar fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-8.JPG",
      alt: "Araadhya Tamrakar campaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-9.JPG",
      alt: "Araadhya Tamrakar editorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/hero.JPG",
      alt: "Araadhya Tamrakar hero portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/profile.JPG",
      alt: "Araadhya Tamrakar profile portrait",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-10.JPG",
      alt: "Araadhya Tamrakar commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-11.JPG",
      alt: "Araadhya Tamrakar lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-12.JPG",
      alt: "Araadhya Tamrakar fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-13.JPG",
      alt: "Araadhya Tamrakar fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-14.JPG",
      alt: "Araadhya Tamrakar campaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-15.JPG",
      alt: "Araadhya Tamrakar editorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-16.JPG",
      alt: "Araadhya Tamrakar commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-17.JPG",
      alt: "Araadhya Tamrakar lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-18.JPG",
      alt: "Araadhya Tamrakar fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-19.JPG",
      alt: "Araadhya Tamrakar fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-20.JPG",
      alt: "Araadhya Tamrakar fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-21.JPG",
      alt: "Araadhya Tamrakar fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-22.JPG",
      alt: "Araadhya Tamrakar fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-23.JPG",
      alt: "Araadhya Tamrakar fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-24.JPG",
      alt: "Araadhya Tamrakar fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-25.JPG",
      alt: "Araadhya Tamrakar fashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-26.JPG",
      alt: "Araadhya Tamrakar fashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-27.JPG",
      alt: "Araadhya Tamrakar studio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-28.JPG",
      alt: "Araadhya Tamrakar outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-29.JPG",
      alt: "Araadhya Tamrakar commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-30.JPG",
      alt: "Araadhya Tamrakar lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-31.JPG",
      alt: "Araadhya Tamrakar fashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-32.JPG",
      alt: "Araadhya Tamrakar fashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-33.JPG",
      alt: "Araadhya Tamrakar studio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-34.JPG",
      alt: "Araadhya Tamrakar outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-35.JPG",
      alt: "Araadhya Tamrakar commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-36.JPG",
      alt: "Araadhya Tamrakar lifestyle portrait",
      category: "Casual",
    },
    
  ],

  /**
   * VIDEOS / REELS
   * type: "mp4"   -> plays inline from a local or remote MP4 file
   * type: "embed" -> plays an external URL (YouTube/Vimeo) in the modal
   * Videos never autoplay with sound.
   */
  videos: [
  {
    title: "Araadhya  Model Shoot",
    category: "Fashion",
    thumbnail: "/portfolio/profile.jpg",
    src: "/portfolio/videos/Araadhya-compressed.mp4",
    type: "mp4",
  },  
  {
    title: "Araadhya Tamrakar Model Shoot",
    category: "LIVE ADVERTISEMENT RECORDING FOOTAGE",
    thumbnail: "/portfolio/profile.JPG",
    src: "/portfolio/videos/Aradhy tamarokar (1).mp4",
    type: "mp4",
  },
  {
    title: "Araadhya Tamrakar Model Shoot",
    category: "RAW Video FOOTAGE",
    thumbnail: "/portfolio/profile.JPG",
    src: "/portfolio/videos/Aradhy tamarokar.mp4",
    type: "mp4",
  },
],

   
/**{
    name: "Flipkart",
    description: "Featured e-commerce and commercial work.",
    url: "https://www.flipkart.com/",
  },
  {
    name: "Amazon",
    description: "Commercial and e-commerce collaboration.",
    url: "https://www.amazon.in/",
  },*/
  
  
}
