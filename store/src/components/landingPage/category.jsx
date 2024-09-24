import Link from "next/link";
import { useEffect, useRef, useState } from "react";


export   const cards = [
  {
    image:
      "https://shinewine.co/cdn/shop/products/moonshine-diamond-925-silver-necklace-626970_1000x1000.jpg?v=1701247711",
    heading: "Pendants",
    description:
      " Each pendant carries with it a unique charm, often reflecting the wearer’s tastes, beliefs, and life experiences. ",
    label: "shop now",
    href: "/",
  },
  {
    image:
      "https://ontique.in/cdn/shop/products/1_1200x1200.jpg?v=1682594166",
    heading: "Earrings",
    description:
      "Each pair of earrings, whether they dangle gracefully or hug the earlobe, serves as a canvas for self-expression, framing the face with a touch of elegance .",
    label: "shop now",
    href: "/",
  },
  {
    image:
      "https://www.shinez.in/cdn/shop/files/055A8764copy_1.jpg?v=1714382121",
    heading: "rings",
    description:
      "Rings, with their intricate designs and symbolic meanings, represent commitments and milestones, encircling our fingers with stories of love, friendship, and personal triumphs.",
    label: "shop now",
    href: "/",
  },
  {
    image:
      "https://kajalnaina.com/wp-content/uploads/2021/11/kajal_naina_Bracelet_Diamond_Gold_Model_Shining-Star.jpg",
    heading: "Bracelets",
    description:
      " Each bracelet tells a tale, whether it's a delicate chain that whispers elegance or a chunky cuff that boldly declares strength. ",
    label: "shop now",
    href: "/",
  },

  {
    image:
      "https://www.aegte.in/cdn/shop/products/PremiumStepCutFauxDiamondStatementNecklace_BossLadyDiamondChain_01.jpg?v=1658902006",
    heading: "Necklaces",
    description:
      "necklaces drape elegantly around our necks, drawing the eye and inviting admiration; they can be simple, or elaborate masterpieces that command attention.",
    label: "shop now",
    href: "/",
  },
  {
    image:
      "https://ae01.alicdn.com/kf/Hcc091e59d7064b0cb5c6238e30e06f73d.jpg?width=800&height=800&hash=1600",
    heading: "personalized jewellery",
    description:
      "In a world where everything feels mass-produced and impersonal, personalized jewelry emerges as a timeless testament to individuality and emotion.",
    label: "shop now",
    href: "/",
  },
  {
    image:
      "https://www.truesilver.co.in/cdn/shop/files/AN1340S_600x.jpg?v=1704456066",
    heading: "anklets",
    description:
      "anklets dance around the ankles, adding a touch of whimsy and femininity, capturing the essence of free spirits and sunlit days. ",
    label: "shop now",
    href: "/",
  },
];

export default function Category() {
  // Array of card data with heading and description
  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 max-w-screen-xl w-full">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-lg shadow-lg group h-96 bg-white"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            />

            {/* Gradient overlay for hover effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-75 transition-opacity duration-500 ease-out" />

            {/* Content section */}
            <div className="relative z-10 flex flex-col text-center justify-end h-full p-3 transition-transform duration-500 ease-out group-hover:translate-y-[-20%]">
              {/* Heading positioned at the bottom left and moves up on hover */}
              <h1 className="absolute bottom-3  left-1/2 transform -translate-x-1/2 text-center text-[19px]  font-extrabold uppercase tracking-widest text-white transition-transform duration-500 ease-out group-hover:translate-y-[-190px]">
                {card.heading}
              </h1>

              {/* Description initially hidden, shown on hover */}
              <p className="italic text-white transition-opacity duration-500 ease-out opacity-0 group-hover:opacity-100 text-center">
                "{card.description}"
              </p>

              {/* Link button initially hidden, shown on hover */}
              <div className="flex justify-center">
                <Link
                  className="text-center text-black bg-white uppercase w-fit hover:text-white hover:bg-black text-base py-2 px-4 mt-4 rounded-md transition-opacity duration-500 ease-out opacity-0 group-hover:opacity-100"
                  href={card.href}
                >
                  {card.label}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
