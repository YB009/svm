import express from "express";
const router = express.Router();

/**
 * Basic site data.
 * Reviews are from your provided screenshots.
 * Map coordinates use your link.
 */

const site = {
  name: "Slick Mobile Valets & Detailing",
  short: "S.M.V",
  socials: {
    facebook: "https://facebook.com/slickmobilevalets",
    instagram:
      "https://www.instagram.com/slickmobilevaletsanddetailing?igsh=cGRsNjJsNGNucTRp",
  },
  map: {
    lat: 54.989337,
    lng: -1.44432,
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.1234567890123!2d-1.44432!3d54.989337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDU5JzIxLjYiTiAxwrAyNiczOS42Ilc!5e0!3m2!1sen!2suk!4v1234567890123",
  },
  usp: [
    "Mobile service, we come to you",
    "Attention to detail is second to none",
    "Competitive pricing",
    "Cars, vans & work vehicles",
  ],
  services: [
    "Full exterior wash",
    "Interior vacuum & shampoo",
    "Wheel & tyre care",
    "Waxing & paint care",
    "Interior scenting",
  ],
  reviews: [
    {
      author: "ben webb",
      rating: 5,
      ago: "—",
      text: `I’ve been using slick mobile valets for a while now.
He regularly valets my car and work van for me. Can’t fault the quality of service every single visit — the attention to detail is second to none! I’ve passed on details and recommended to a lot of family and friends! Highly recommend!`,
    },
    {
      author: "Michelle Berry",
      rating: 5,
      ago: "—",
      text: `Wouldn't use any other mobile valet service but S.M.V.
The attention to detail is second to none. Very responsive when booking, he's efficient and prices are very competitive. Was like my car was fresh out of the show room. 100% recommended.`,
    },
    { author: "Gary", rating: 5, ago: "—", text: `Excellent service — will use again.` },
  ],

  // ===== Gallery images (put your files in /public/images/gallery/) =====
  gallery: Array.from({ length: 15 }).map((_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: `/images/gallery/${n}.jpg`,
      alt: `SMV detailing work ${n}`,
    };
  }),
};

router.get("/", (_req, res) => {
  res.render("index", { site });
});

export default router;
