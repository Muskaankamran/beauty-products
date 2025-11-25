var foreverProducts = {
    skincare: {
        bdy: {
            "Lotion": {
                img: "https://bdy.treehutshea.com/cdn/shop/files/BDY148.jpg?v=1745510707&width=1000",
                price: "$17.99",
                description: "Restoring Weightless Body Lotion."
            },
            "Facial serums": {
                img: "https://bdy.treehutshea.com/cdn/shop/files/BDY146.jpg?v=1745510547&width=1000",
                price: "$21.99",
                description: "Brightening Dual Phase Body Serum Mist."
            },
            "oil body wash": {
                img: "https://bdy.treehutshea.com/cdn/shop/files/BDY138.jpg?v=1745510678&width=1000",
                price: "$20.00",
                description: "Foaming Oil Hydrating Body Wash."
            }
        },
        Sephora: {
            "lotion": {
                img: "https://www.sephora.com/productimages/sku/s2767168-main-zoom.jpg?imwidth=315",
                price: "$33.44",
                description: "Healing lotion boosts skin barrier with a fast-absorbing formula that's lightweight and leaves no greasy residue; provides 24-hour hydration",
            },
            "facial essence": {
                img: "https://www.sephora.com/productimages/sku/s2898419-main-zoom.jpg?imwidth=612",
                price: "$32.00",
                description: "This fragrance free moisturizer is specially formulated for sensitive skin with a lightweight formula that absorbs quickly",
            },
            "face serum": {
                img: "https://www.sephora.com/productimages/sku/s2031391-main-zoom.jpg?imwidth=315",
                price: "$6.00",
                description: "A water-based serum that helps to enhance skin brightness, improve texture, reduce excess oil, and strengthen the skin’s moisture barrier.",
            },
        },
        anfisaskin: {
            "serum": {
                img: "https://anfisaskin.com/cdn/shop/files/Large_Serum.webp?v=1722410068&width=900",
                price: "$196.00",
                description: "Meet ÂN-DEW: an award-winning, comprehensive skin-brightening serum designed to enhance, clarify, and gently exfoliate the skin.",
            },
            "lip treatment": {
                img: "	https://anfisaskin.com/cdn/shop/files/Anfisa-An-Gl…493c-bdf2-0ce8425349bc.jpg?v=1756912074&width=900"
                ,
                price: "$45.00",
                description: "Meet ÂN-GLOSS: The award-winning formula, in a universal sheer lip treatment.",
            },
            "hydra balm": {
                img: "https://anfisaskin.com/cdn/shop/files/ANFISASKIN_An-Balm-50ml.webp?v=1710256232&width=900",
                price: "$150.00",
                description: "Meet ÂN-BALM: A concentrated, waxless balm that reimagines facial oils. Its unique balm-to-oil formula delivers profound hydration, balancing your skin's natural oils and calming your complexion for a radiant glow. ",
            }
        }
    },


    haircare: {
        sephora: {
            "shampoo": {
                img: "https://www.sephora.com/productimages/sku/s2319820-main-zoom.jpg?imwidth=612",
                price: "$34.00",
                description: "Detox Clarifying Shampoo with Apple Cider Vinegar"
            },
            "conditioner": {
                img: "https://www.sephora.com/productimages/sku/s2390821-main-zoom.jpg?imwidth=315",
                price: "$37.00",
                description: "Hydrate Sheer Conditioner for Fine Hair"
            },
            "scalp scrub": {
                img: "https://www.sephora.com/productimages/sku/s2815132-main-zoom.jpg?imwidth=315",
                price: "$40.00",
                description: "A clarifying shampoo that revitalizes scalp..."
            }
        },

        tresemme: {
            "shampoo": {
                img: "https://assets.unileversolutions.com/v1/132852805.png",
                price: "$6.98",
                description: "Keratin Smooth Blowout Heat Protect Spray..."
            },
            "conditioner": {
                img: "https://assets.unileversolutions.com/v1/133276357.png",
                price: "$12.45",
                description: "Deep conditioning hair treatment..."
            },
            "hair mousse": {
                img: "https://assets.unileversolutions.com/v1/132563504.png",
                price: "$13.45",
                description: "Provides 72H frizz defense..."
            }
        },

        seen: {
            "hydrating shampoo": {
                img: "https://helloseen.com/cdn/shop/files/0034_Shampoo_FragranceFree_Front-_REG_720x.webp?v=1746082555",
                price: "$29.75",
                description: "Luxurious lather for stronger, smoother hair."
            },
            "magic serum": {
                img: "https://helloseen.com/cdn/shop/files/0063_MagicSerum_Front_720x.webp?v=1746080061",
                price: "$37.20",
                description: "Reduces frizz, adds shine..."
            },
            "conditioner": {
                img: "https://helloseen.com/cdn/shop/files/0045_Leave-InConditioner_Front_720x.webp?v=1748261699",
                price: "$24.80",
                description: "Lightweight hydration with UV protection."
            }
        },

        dove: {
            "shampoo": {
                img: "https://assets.unileversolutions.com/v1/130260752.png",
                price: "$1.31",
                description: "For manageable and silky hair..."
            },
            "conditioner": {
                img: "https://assets.unileversolutions.com/v1/130260715.png",
                price: "$2.96",
                description: "Made with Oxyfusion ingredients."
            },
            "hair treatment": {
                img: "https://assets.unileversolutions.com/v1/113805421.png",
                price: "$2.59",
                description: "1 Minute Super Conditioner for damaged hair."
            }
        }
    },

    babycare: {},
    fragrance: {}
};

var productMenu = document.getElementById("productMenu");

for (let category in foreverProducts) {
    for (let brand in foreverProducts[category]) {
        for (let item in foreverProducts[category][brand]) {

            let product = foreverProducts[category][brand][item];

            productMenu.innerHTML += `
                <div class="col">
                    <div class="card">
                        <img src="${product.img}" class="card-img-top" alt="${item}">
                        <div class="card-body">
                            <h5 class="card-title">${item}</h5>
                            <p class="card-text">${product.description}</p>
                        </div>
                        <div class="card-footer">
                            <h5 class="price">${product.price}</h5>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}