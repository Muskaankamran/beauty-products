var foreverProducts = {
    skincare: {
        CeraVe: {
            ' Lotion': {
                img: "https://www.cerave.com/-/media/project/loreal/bran…n-us&w=1024&hash=31BCD8A509C801DBEA011177A6FEEE78",
                price: "$17.99",
                description: "CeraVe Intensive Moisturizing Lotion is a gentle, lightweight formula that works to repair and maintain the skin barrier. The formula also features 5% Hydro-Urea to help replenish the skin's natural moisturizing factors that are essential to attracting and retaining optimal moisture to deeply hydrate dry and very dry, itchy skin."
            },
            'Facial serums': {
                img: "https://www.cerave.com/-/media/project/loreal/bran…140a&w=1024&hash=27F14DC5E5C7746BEA2F7B1A346600F4",
                price: "$21.99",
                description: "Developed with dermatologists, CeraVe Resurfacing Retinol Serum helps smooth your skin's texture by reducing the appearance of post-acne marks, minimizing the look of pores and improving your skin’s surface."
            },
            'Sun screens': {
                img: "https://www.cerave.com/-/media/project/loreal/bran…1cea&w=1024&hash=4EE999FC71524F74629A8F246EB09377",
                price: "$17.99",
                description: "Developed with dermatologists, CeraVe Hydrating Sheer Sunscreen Broad Spectrum SPF 30 combines mineral and chemical sun filters to help effectively reflect and absorb the sun's damaging rays.",
            },
        },



        Bathnbody: {
            'body wash': {
                img: " https://www.bathandbodyworks.com/dw/image/v2/BBDL_…efault/dw74b45243/hires/028005114.jpg?sw=400&q=60",
                price: "$16.95",
                description: "Warm your heart a thousand times over with this dazzling scent. Like raising a glass of bubbly in celebration, this fragrance is both captivating and joyful. So, let the effervescent energy flow over you and take a moment to revel in this light, bright floral beauty.",
            }
        },
        ' Face wash': {
            img: "https://www.bathandbodyworks.com/dw/image/v2/BBDL_…efault/dwc88a3f9d/hires/026661312.jpg?sw=400&q=60",
            price: "$13.95",
            description: "What it smells like: a breath of fresh, clean and calming air.",
        },
        ' Hand soap': {
            img: "https://www.bathandbodyworks.com/dw/image/v2/BBDL_…efault/dw4e79b8fc/hires/028023429.jpg?sw=400&q=60",
            price: "$8.95",
            description: 'Savor the softness of lush florals, and immerse yourself in the luxury of a thousand rose petals at your fingertips'
        },

        lorealparis: {
            'mosturizer': {
                img: "https://www.lorealparisusa.com/-/media/project/lor…care_rvl_tp_day_48g__primary_071249696057_av1.png",
                price: "$29.99",
                description: "Revitalift Anti-Aging Face Moisturizer immediately hydrates skin, while working overtime to visibly reduce wrinkles, firm skin and brighten in 1 week. Powered with not just 1, but 3 derm-recommended ingredients: Pro-Retinol, Hyaluronic Acid and Vitamin C."
            },
            'powder': {
                img: "https://www.lorealparisusa.com/-/media/project/lor…atural-beige-warm/08-11-23-en/071249016442-t1.png",
                price: "$12.99",
                description: `A pressed powder that provides buildable coverage while minimizing pores and fine lines. This powder foundation is non-cakey, oil-free and non-comedogenic.
Get a perfect match with True Match Super- Blendable Oil Free Makeup Powder.This micro- fine pressed powder provides buildable, long- lasting coverage.Choose your True Match shade to find one that best complements your skin tone and undertone." ,
           `},
        'serum': {
             img: "https://www.lorealparisusa.com/-/media/project/lor…idnight-serum/atf-v2-2024/071249630167_t1-new.png",
                 price: "$43.99",
             description: "A lightweight facial serum that’s setting a new standard for luxury serums. The formula is non-greasy, non-sticky, paraben-free, mineral oil-free, allergy tested, suitable for sensitive skin and won’t clog pores." ,
        }


    },

},
}
for(product in foreverProducts){
    // console.log(product);
    for(brand in foreverProducts[product]){
        console.log(foreverProducts[product][brand.Bathnbody]);
        // var allProducts = document.getElementById("allProducts")
    }
}