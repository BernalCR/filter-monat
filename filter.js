const allProducts = [
    {
        name: "ADVANCED HYDRATING SYSTEM", 
        rPrice: "155.00",
        vipPrice: "131.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/ADVANCED-HYDRATING-SYSTEM_ecomm-.png", 
        shopLink: "/shop/products/advanced-hydrating-system-6000003139", 
        use: "FOR DRY FINE TO MEDIUM HAIR",
        discount: "EXTRA 20% OFF WITH PURCHASE+&trade;",
        category: "systems | dry hair",
        newP: "hide",
    },
    {
        name: "RENEW™ HYDRATING SYSTEM", 
        rPrice: "143.00",
        vipPrice: "121.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/RENEW-HYDRATING-SYSTEM_ecomm.png", 
        shopLink: "/shop/products/renew-hydrating-system-6000003138", 
        use: "FOR DRY MEDIUM TO THICK HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | dry hair",
        newP: "hide",
    },
    {
        name: "REVIVE™ VOLUMIZING SYSTEM", 
        rPrice: "137.00",
        vipPrice: "116.00",   
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/REVIVE-VOLUMIZING-SYSTEM_ecomm-.png", 
        shopLink: "/shop/products/volumizing-revive-system", 
        use: "FOR FLAT FINE TO MEDIUM HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | volume",
        newP: "hide",
    },
    {
        name: "IR CLINICAL™ SYSTEM", 
        rPrice: "176.00",
        vipPrice: "149.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/08/IR-Clinical-SYSTEM-_ecomm-2022.png", 
        shopLink: "/shop/products/ir-clinical-system/ir-clinical-system-6000003460", 
        use: "FOR THINNING OF ALL HAIR TEXTURES",
        discount: "EXTRA 20% OFF WITH PURCHASE+&trade;",
        category: "systems | densifying | thinning",
        newP: "hide",
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ SYSTEM I", 
        rPrice: "139.00",
        vipPrice: "118.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/SMOOTHING-ANTI-FRIZZ-SYSTEM-I_ecomm.png", 
        shopLink: "/shop/products/smoothing-anti-frizz-system-i-6000003142", 
        use: "MINIMIZES FRIZZ FOR FINE TO MEDIUM HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | frizz",
        newP: "hide",
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ SYSTEM II", 
        rPrice: "139.00",
        vipPrice: "118.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/SMOOTHING-ANTI-FRIZZ-SYSTEM-II_ecomm.png", 
        shopLink: "/shop/products/smoothing-anti-frizz-system-ii-6000003242", 
        use: "MINIMIZES FRIZZ FOR MEDIUM TO THICK HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | frizz",
        newP: "hide",
    },
    {
        name: "DAMAGE REPAIR SYSTEM", 
        rPrice: "191.00",
        vipPrice: "162.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/DAMAGE-REPAIR-SYSTEM_ecomm.png", 
        shopLink: "/shop/products/damage-repair-system-6000003143", 
        use: "REPAIRS DAMAGE FOR ALL HAIR TYPES",
        discount: "EXTRA 20% OFF WITH PURCHASE+&trade;",
        category: "systems | damage, breakage, and split ends",
        newP: "hide",
    },
    {
        name: "SCALP PURIFYING SYSTEM", 
        rPrice: "141.00",
        vipPrice: "119.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/Sclap-Purifying-System-ecomm.png", 
        shopLink: "/scalp-purifying-system-6000003144", 
        use: "FOR OILY SCALP AND HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | scalp care",
        newP: "hide",
    },
    {
        name: "REJUVENIQE® OIL INTENSIVE", 
        rPrice: "105.00",
        vipPrice: "89.00", 
        url: "/rejuveniqe-tm-oil-intensive/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/REJUVENIQE®-OIL-INTENSIVE.png", 
        shopLink: "/shop/products/rejuveniqe-oil-intensive", 
        category: "bestseller | curls, coils, and waves | dry hair | frizz | shine",
        newP: "hide",
    },
    {
        name: "REJUVENIQE LIGHT BY MONAT™", 
        rPrice: "105 .00",
        vipPrice: "89.00", 
        url: "/rejuveniqe-light/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/REJUVENIQE-LIGHT-BY-MONAT™.png", 
        shopLink: "/shop/products/rejuveniqe-light", 
        category: "bestseller | curls, coils, and waves | dry hair | frizz | shine",
        newP: "hide",
    },
    {
        name: "REJUVABEADS® BY MONAT", 
        rPrice: "59.00",
        vipPrice: "50.00", 
        url: "/rejuvabeads-by-monat/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/REJUVABEADS®-BY-MONAT.png", 
        shopLink: "/shop/products/rejuvabeads", 
        category: "bestseller | damage, breakage, and split ends",
        newP: "hide",
    },
    {
        name: "COLOUR ENHANCE PERFECTLY PLATINUM SHAMPOO", 
        rPrice: "32.00",
        vipPrice: "27.00", 
        url: "/colour-enhance-perfectly-platinum-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/PERFECTLY-PLATINUM-SHAMPOO.png", 
        shopLink: "/shop/products/perfectly-platinum-shampoo-fgplatsha", 
        category: "color care",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ CURL DEFINING CREAM", 
        rPrice: "42.00",
        vipPrice: "36.00", 
        url: "/curl-cream/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/CURL-DEFINING-CREAM.png", 
        shopLink: "/shop/products/curl-cream", 
        category: "curls, coils, and waves | styling",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ FLEXIBLE HOLD GEL", 
        rPrice: "38.00",
        vipPrice: "32.00", 
        url: "/flexible-hold-gel/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/05/FLEXIBLE-HOLD-GEL-ecomm-pic.png", 
        shopLink: "/shop/products/flexible-hold-gel-5-0-oz?taxon_id=21", 
        category: "curls, coils, and waves | frizz | styling",
        newP: "hide",
    },
    {
        name: "REPLENISH MASQUE", 
        rPrice: "58.00",
        vipPrice: "49.00", 
        url: "/replenish-masque/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/05/REPLENISH-MASQUE-ecomm-pic.png", 
        shopLink: "/shop/products/replenish-masque", 
        category: "curls, coils, and waves | dry hair",
        newP: "hide",
    },
    {
        name: "RESTYLE INSTANT SCULPTING TAFFY", 
        rPrice: "38.00",
        vipPrice: "32.00", 
        url: "/restyle-instant-sculpting-taffy/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/RESTYLE-INSTANT-SCULPTING-TAFFY.png", 
        shopLink: "/shop/products/restyle-sculpting-taffy", 
        category: "curls, coils, and waves",
        newP: "hide",
    },
    {
        name: "SUPER MOISTURE MASQUE", 
        rPrice: "58.00",
        vipPrice: "49.00", 
        url: "/super-moisture-masque/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/08/SUPER-MOISTURE-MASQUE-ecomm-small.png", 
        shopLink: "/shop/products/super-moisture-masque", 
        category: "curls, coils, and waves",
        newP: "hide",
    },
    {
        name: "MONAT SUPER NOURISH™ OIL CRÈME CONDITIONER", 
        rPrice: "52.00",
        vipPrice: "44.00", 
        url: "/super-nourish-oil-creme-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/OIL-CRE%CC%80ME-CONDITIONER.png", 
        shopLink: "/shop/products/monat-super-nourish-oil-creme-conditioner?taxon_id=30", 
        category: "curls, coils, and waves",
        newP: "hide",
    },
    {
        name: "MONAT SUPER NOURISH™ OIL CRÈME SHAMPOO", 
        rPrice: "52.00",
        vipPrice: "44.00", 
        url: "/super-nourish-oil-creme-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/OIL-CRE%CC%80ME-SHAMPOO.png", 
        shopLink: "/shop/products/nourishing-oil-creme-shampoo?taxon_id=30", 
        category: "curls, coils, and waves",
        newP: "hide",
    },
    {
        name: "DAMAGE REPAIR BOND SUPPORT MASQUE", 
        rPrice: "60.00",
        vipPrice: "51.00", 
        url: "/hair-damage-repair-masque/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/09/ADVANCED-HYDRATING-masque_allprod.png", 
        shopLink: "/shop/products/damage-repair-bond-support-masque", 
        category: "damage, breakage, and split ends",
        newP: "hide",
    },
    {
        name: "DAMAGE REPAIR BOND SUPPORT SHAMPOO", 
        rPrice: "46.00",
        vipPrice: "39.00", 
        url: "/hair-damage-repair-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/09/ADVANCED-HYDRATING-SHAMPOO-all-prod.png", 
        shopLink: "/shop/products/damage-repair-bond-support-shampoo", 
        category: "damage, breakage, and split ends",
        newP: "hide",
    },
    {
        name: "DAMAGE REPAIR BOND-BUILDING HAIR TREATMENT", 
        rPrice: "46.00",
        vipPrice: "39.00", 
        url: "/hair-damage-repair-treatment/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/09/ADVANCED-HYDRATING-Tratment-all-prod.png", 
        shopLink: "/shop/products/damage-repair-bond-building-treatment", 
        category: "damage, breakage, and split ends",
        newP: "hide",
    },
    {
        name: "DAMAGE REPAIR BOND-FORTIFYING HAIR LEAVE-IN CRÈME", 
        rPrice: "42.00 ",
        vipPrice: "36.00", 
        url: "/hair-damage-repair/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/09/ADVANCED-HYDRATING-creme_all-prod.png", 
        shopLink: "/shop/products/damage-repair-bond-fortifying-hair-leave-in-creme", 
        category: "damage, breakage, and split ends",
        newP: "hide",
    },
    {
        name: "HAIR TRANSFORMATION MASQUE WITH REJUVENIQE S™", 
        rPrice: "65.00",
        vipPrice: "55.00", 
        url: "/hair-transformation-masque/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/HAIR-TRANSFORMATION-MASQUE.png", 
        shopLink: "/shop/products/hair-transformation-masque?taxon_id=30", 
        category: "damage, breakage, and split ends",
        newP: "hide",
    },
    {
        name: "MONAT JUNIOR GENTLE SHAMPOO", 
        rPrice: "27.00",
        vipPrice: "23.00", 
        url: "/monat-junior-gentle-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/MONAT-JUNIOR-GENTLE-SHAMPOO.png", 
        shopLink: "/shop/products/junior-gentle-shampoo-8-oz", 
        category: "monat junior",
        newP: "hide",
    },
    {
        name: "MONAT JUNIOR GENTLE CONDITIONER", 
        rPrice: "27.00",
        vipPrice: "23.00", 
        url: "/monat-junior-gentle-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/09/MONAT-JUNIOR-GENTLE-CONDITIONER-ecomm-hair.png", 
        shopLink: "/shop/products/junior-gentle-conditioner-6-oz", 
        category: "damage, breakage, and split ends | monat junior",
        newP: "hide",
    },
    {
        name: "MONAT JUNIOR GENTLE DETANGLER", 
        rPrice: "26.00",
        vipPrice: "22.00", 
        url: "/junior-gentle-detangler/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/MONAT-JUNIOR-GENTLE-DETANGLER.png", 
        shopLink: "/shop/products/junior-gentle-detangler-spray-6-oz", 
        category: "damage, breakage, and split ends | dry hair | monat junior",
        newP: "hide",
    },
    {
        name: "UNKNOT DETANGLER", 
        rPrice: "38.00",
        vipPrice: "32.00", 
        url: "/unknot-detangler/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/UNKNOT-DETANGLER.png", 
        shopLink: "/shop/products/unknot-detangler", 
        category: "damage, breakage, and split ends | dry hair",
        newP: "hide",
    },
    {
        name: "IR CLINICAL™ THICKENING CONDITIONER", 
        rPrice: "52.00",
        vipPrice: "44.00", 
        url: "/intense-repair-treatment-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/08/IR-CLINICAL-THICKENING-CONDITIONER_ecomm-2022.png", 
        shopLink: "/shop/products/ir-clinical-thickening-conditioner-6000002977", 
        category: "densifying | dry hair | thinning",
        newP: "hide",
    },
    {
        name: "IR CLINICAL™ THICKENING SHAMPOO", 
        rPrice: "46.00",
        vipPrice: "39.00", 
        url: "/irt-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/08/IR-CLINICAL-THICKENING-SHAMPOO_ecomm-2022.png", 
        shopLink: "/shop/products/ir-clinical-thickening-shampoo-6000002975", 
        category: "densifying | dry hair | thinning",
        newP: "hide",
    },
    {
        name: "IR CLINICAL™ HAIR THINNING DEFENSE", 
        rPrice: "78.00",
        vipPrice: "66.00", 
        url: "/intense-repair-serum/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/08/IR-CLINICAL-HAIR-THINNING-DEFENSE-SERUM_ecomm-2022.png", 
        shopLink: "/shop/products/ir-clinical-hair-thinning-defense", 
        category: "densifying | dry hair | thinning",
        newP: "hide",
    },
    {
        name: "LASH & BROW ENHANCING SERUM BY MONAT™️", 
        rPrice: "67.00",
        vipPrice: "57.00", 
        url: "/lash-brow-enhancing-serum/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/09/LASH-BROW-ENHANCING-SERUM_ecomm-hair.png", 
        shopLink: "/shop/products/eye-wonder-eyelash-enhancer-10ml", 
        category: "densifying",
        newP: "hide",
    },
    {
        name: "MONAT BLACK SHAMPOO + CONDITIONER", 
        rPrice: "46.00",
        vipPrice: "39.00", 
        url: "/monat-black-shampoo-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/05/BLACK-2-in-1-Shampoo-Conditioner-ecomm-pic-.png", 
        shopLink: "/shop/products/black-men-s-2-in-1", 
        category: "densifying | oily hair and scalp",
        newP: "hide",
    },
    {
        name: "MONAT FOR MEN™ MATTE STYLING CLAY", 
        rPrice: "35.00",
        vipPrice: "30.00", 
        url: "/men-styling-clay/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/02/MONAT-FOR-MEN-Matte-Styling-Clay-ecomm-2022.png", 
        shopLink: "/shop/products/monat-for-men-matte-styling-clay", 
        category: "densifying | monat for men",
        newP: "hide",
    },
    {
        name: "ADVANCED HYDRATING CONDITIONER", 
        rPrice: "52.00 ",
        vipPrice: "44.00", 
        url: "/advanced-hydrating-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/ADVANCED-HYDRATING-CONDITIONER.png", 
        shopLink: "/shop/products/advanced-hydrating-conditioner", 
        category: "dry hair",
        newP: "hide",
    },
    {
        name: "ADVANCED HYDRATING IN-SHOWER MASQUE", 
        rPrice: "58.00",
        vipPrice: "49.00", 
        url: "/in-shower-hair-masque/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/ADVANCED-HYDRATING-IN-SHOWER-MASQUE.png", 
        shopLink: "/shop/products/advanced-hydrating-in-shower-masque", 
        category: "dry hair",
        newP: "hide",
    },
    {
        name: "ADVANCED HYDRATING SHAMPOO WITH REJUVENIQE S™", 
        rPrice: "45.00",
        vipPrice: "38.00", 
        url: "/advanced-hydrating-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/ADVANCED-HYDRATING-SHAMPOO.png", 
        shopLink: "/shop/products/advanced-hydrating-shampoo", 
        category: "dry hair",
        newP: "hide",
    },
    {
        name: "RENEW SHAMPOO", 
        rPrice: "45.00",
        vipPrice: "38.00", 
        url: "/renew-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/05/RENEW-SHAMPOO-ecomm-pic.png", 
        shopLink: "/shop/products/renew-shampoo", 
        category: "dry hair",
        newP: "hide",
    },
    {
        name: "RESTORE LEAVE-IN CONDITIONER", 
        rPrice: "40.00",
        vipPrice: "34.00", 
        url: "/restore-leave-in-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/05/RESTORE-LEAVE-IN-CONDITIONER-ecomm-pic.png", 
        shopLink: "/shop/products/restore-leave-in-conditioner?taxon_id=30", 
        category: "dry hair",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ AIR DRY CREAM", 
        rPrice: "42.00",
        vipPrice: "36.00", 
        url: "/air-dry-cream/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/AIR-DRY-CREAM.png", 
        shopLink: "/shop/products/air-dry-cream-6-oz", 
        category: "frizz | styling",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ BLOW OUT CREAM INFUSED WITH REJUVENIQE™", 
        rPrice: "42.00",
        vipPrice: "36.00", 
        url: "/blow-out-cream/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/BLOW-OUT-CREAM-1.png", 
        shopLink: "/shop/products/blow-out-cream", 
        category: "frizz | styling",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ FLEX CONTROL HAIRSPRAY", 
        rPrice: "48.00",
        vipPrice: "41.00", 
        url: "/control-hairspray/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/STUDIO-ONE-FLEX-CONTROL-HAIRSPRAY.png", 
        shopLink: "/shop/products/flex-control-hairspray", 
        category: "frizz | styling",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ FRIZZ-FIX SMOOTHING HAIR PRIMER", 
        rPrice: "39.00",
        vipPrice: "33.00", 
        url: "/frizz-fix-smoothing-hair-primer/", 
        img: "https://monatglobal.com/wp-content/uploads/2018/12/studio-one-frizz-fix-1.png", 
        shopLink: "/shop/products/frizz-fix-smoothing-primer-4-3-oz", 
        category: "frizz | styling",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ SUPER STRONG HOLD FINISHING HAIRSPRAY", 
        rPrice: "48.00",
        vipPrice: "41.00", 
        url: "/strong-hold-hairspray/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/STUDIO-ONE-STRONG-FLEXI-HOLD.png", 
        shopLink: "/shop/products/monat-studio-one-super-strong-hold-finishing-hairspray-6000001306", 
        category: "frizz | styling",
        newP: "hide",
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ BLOW OUT SPRAY", 
        rPrice: "42.00",
        vipPrice: "36.00", 
        url: "/smoothing-anti-frizz-spray/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/smoothing-anti-frizz-blow-out-spray_all-prod-.png", 
        shopLink: "/shop/products/smoothing-anti-frizz-blow-out-spray", 
        category: "frizz",
        newP: "hide",
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ DEEP INTENSIVE TREATMENT", 
        rPrice: "52.00",
        vipPrice: "44.00", 
        url: " /smoothing-anti-frizz-treatment/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/smoothing-anti-flizz-deep-treatment_all-prod-.png", 
        shopLink: "/shop/products/smoothing-anti-frizz-deep-intensive-treatment", 
        category: "frizz",
        newP: "hide",
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ DEEP CONDITIONER", 
        rPrice: "52.00",
        vipPrice: "44.00", 
        url: "/smoothing-deep-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/smoothing-anti-frizz-deep-conditioner_all-prod-.png", 
        shopLink: "/shop/products/smoothing-anti-frizz-deep-conditioner", 
        category: "frizz",
        newP: "hide",
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ SHAMPOO", 
        rPrice: "45.00",
        vipPrice: "38.00", 
        url: "/smoothing-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/smoothing-anti-frizz-shampoo-all-prod.png", 
        shopLink: "/shop/products/smoothing-anti-frizz-shampoo", 
        category: "frizz",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE THE CHAMP™ CONDITIONING DRY SHAMPOO INFUSED WITH REJUVENIQE™", 
        rPrice: "42.00",
        vipPrice: "36.00", 
        url: "/the-champ-dry-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/CONDITIONING-DRY-SHAMPOO.png", 
        shopLink: "/shop/products/the-champ-conditioning-dry-shampoo", 
        category: "oily hair and scalp | volume | styling",
        newP: "hide",
    },
    {
        name: "PURIFYING VINEGAR RINSE", 
        rPrice: "40.00",
        vipPrice: "34.00", 
        url: "/vinegar-rinse/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/04/Purifying-Vinegar-Rinset-all-prod.png", 
        shopLink: "/shop/products/purifying-vinegar-rinse-6000001827?taxon_id=30", 
        category: "oily hair and scalp",
        newP: "hide",
    },
    {
        name: "PURIFYING VINEGAR SHAMPOO", 
        rPrice: "45.00",
        vipPrice: "38.00", 
        url: "/vinegar-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/PURIFYING-VINEGAR-SHAMPOO.png", 
        shopLink: "/shop/products/purifying-vinegar-shampoo", 
        category: "oily hair and scalp | scalp care",
        newP: "hide",
    },
    {
        name: "SCALP PURIFYING SCRUB", 
        rPrice: "58.00",
        vipPrice: "49.00", 
        url: "/vinegar-scrub-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/SCALP-PURIFYING-SCRUB.png", 
        shopLink: "/shop/products/scalp-purifying-scrub", 
        category: "oily hair and scalp | scalp care",
        newP: "hide",
    },
    {
        name: "SOOTHING MICELLAR SHAMPOO", 
        rPrice: "30.00",
        vipPrice: "26.00", 
        url: "/soothing-micellar-shampoo/", 
        img: "https://monatglobal.com/ca/wp-content/uploads/sites/5/2021/04/soothing-micellar-shampoo_876x1000-800x913.png", 
        shopLink: "/shop/products/soothing-micellar-shampoo", 
        category: "oily hair and scalp | scalp care",
        newP: "hide",
    },
    {
        name: "MONAT FOR MEN™ MOLDING SHINE POMADE", 
        rPrice: "35.00",
        vipPrice: "30.00", 
        url: "/men-hair-molding-pomade/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/02/monat-men-molding-shine-pomade-ecomm-2022.png", 
        shopLink: "/shop/products/men-molding-shine-pomade", 
        category: "shine | monat for men",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ GLOSSY SHINE MIST", 
        rPrice: "39.00",
        vipPrice: "33.00", 
        url: "/hair-glossy-shine-mist/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/GLOSSY-SHINE-MIST.png", 
        shopLink: "/shop/products/monat-studio-one-glossy-shine-mist", 
        category: "shine | styling",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ DRY TEXTURIZING SPRAY INFUSED WITH REJUVENIQE™", 
        rPrice: "35.00",
        vipPrice: "30.00", 
        url: "/dry-texturizing-spray/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/05/DRY-TEXTURIZING-SPRAY-ecomm-pic.png", 
        shopLink: "/shop/products/dry-texturizing-spray-6000000418", 
        category: "texture | styling",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ HEAT PROTECTANT SPRAY", 
        rPrice: "45.00",
        vipPrice: "38.00", 
        url: "/hair-thermal-protectant/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/HEAT-PROTECTANT-SPRAY.png", 
        shopLink: "/shop/products/monat-studio-one-heat-protectant-spray", 
        category: "thermal protection | styling",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ THE MOXIE MAGNIFYING MOUSSE", 
        rPrice: "45.00",
        vipPrice: "38.00", 
        url: "/moxie-mousse/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/THE-MOXIE-MAGNIFYING-MOUSSE.png", 
        shopLink: "/shop/products/monat-studio-one-the-moxie-mouse", 
        category: "volume | styling",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ VOLUME & LIFT SPRAY", 
        rPrice: "40.00",
        vipPrice: "34.00", 
        url: "/volume-spray/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/VOLUME-LIFT-SPRAY.png", 
        shopLink: "/shop/products/new-volume-lift-spray", 
        category: "volume | styling",
        newP: "hide",
    },
    {
        name: "VOLUMIZING REVITALIZE™ CONDITIONER", 
        rPrice: "52.00",
        vipPrice: "44.00", 
        url: "/volumizing-revitalize-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/VOLUMIZING-REVITALIZE%E2%84%A2-CONDITIONER.png", 
        shopLink: "/shop/products/revitalize-conditioner?taxon_id=30", 
        category: "volume",
        newP: "hide",
    },
    {
        name: "VOLUMIZING REVIVE™ SHAMPOO", 
        rPrice: "45.00",
        vipPrice: "38.00", 
        url: "/volumizing-revive-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/VOLUMIZING-REVIVE%E2%84%A2-SHAMPOO.png", 
        shopLink: "/shop/products/revive-shampoo", 
        category: "volume",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ WAVE SPRAY", 
        rPrice: "34.00",
        vipPrice: "29.00", 
        url: "/wave-spray/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/studio-one-wave-spray_876x1000.png", 
        shopLink: "https://corp.mymonat.com/shop/products/wave-spray-product?taxon_id=21", 
        category: "styling",
        newP: "hide",
    },
    {
        name: "MONAT STUDIO ONE™ THERMAL PROTECT STYLING SHIELD", 
        rPrice: "39.00",
        vipPrice: "33.00", 
        url: "/thermal-protect-styling-shield/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/09/THERMAL-PROTECT-STYLING-SHIELD-ecomm-hair.png", 
        shopLink: "/shop/products/thermal-protect-styling-shield?taxon_id=21", 
        category: "styling",
        newP: "hide",
    },
    // {
    //     name: "", 
    //     rPrice: ".00",
    //     vipPrice: ".00", 
    //     url: "", 
    //     img: "", 
    //     shopLink: "", 
    //     category: "",
    //     newP: "hide",
    // }

];

let activeItems = [];

window.addEventListener("hashchange", () =>{
    location.reload();
})

//declaracion de variables
let filterPBox = document.getElementById("filterPBox");
let allPBox = document.getElementById("allPBox");
let filterInputs = document.querySelectorAll("#filterBox input");
let filterBtn = document.getElementById("filterBtn");
let containerShop = document.getElementById("containerShop");
let containerPage = document.getElementById("containerPage");














let filterBar = document.getElementById("filterBar");
let filterBox = document.getElementById("filterBox");
// Funcion que activa la caja de filtros
filterBtn.addEventListener("click", () =>{
    filterBtn.classList.toggle("active"); 
    filterBox.classList.toggle("active"); 
    containerShop.classList.toggle("active");
});


//Funcion para los acordeones de filterbox 
let filterAccordion = document.querySelectorAll(".filterSection > p");
filterAccordion.forEach(accordion =>{
    accordion.addEventListener("click", () =>{
        accordion.classList.toggle("active");
        document.querySelector(`#${accordion.id} + ul`).classList.toggle("active");
        
    });
});


//Funcion para cerrar el filtro
let closeFilter = document.querySelectorAll(".closeFilter");
closeFilter.forEach(close =>{
    close.addEventListener("click", () =>{
        filterBox.classList.remove("active");
        containerShop.classList.remove("active");
        
        // cerrar dropdowns
        filterAccordion.forEach(accordion =>{
            accordion.classList.remove("active");
            document.querySelector(`#${accordion.id} + ul`).classList.remove("active");
        });
    });
});



const valueFormat = (i) =>{
    return i.value.replace(/,/g, "").replace(/ /g,"-")
}

// Funcion que activa el sticky
let stickyFilter = filterBar.offsetTop;
window.addEventListener("scroll", () =>{
    if(window.pageYOffset >= stickyFilter){
        filterBar.classList.add("stickyFilterBar")
        filterBox.classList.add("stickyFilterBox")
    }else{
        filterBar.classList.remove("stickyFilterBar");
        filterBox.classList.remove("stickyFilterBox");
    }
});

// Funcion que muestra los productos
const showP = (arr, box, selected, normalOrder) =>{
    
    (normalOrder) ? array = arr : array = arr.reverse();
    
    array.forEach(p => {
        let newItem = document.createElement("div");
        (selected) ? newItem.className = "card_product " + selected  : newItem.className = "card_product";
    
        let categories = p.category.split(" | ");
        
        let infoCard = document.createElement("div");
        infoCard.className = "infoCard";
        
        categories.forEach(cat =>{
            infoCard.innerHTML += `<p>${cat}</p>`;
        })
        
        newItem.prepend(infoCard);
        
        if(p.category.includes("systems")){
            newItem.innerHTML += `
                   <div class="infoBtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            
                    <div class="new_product_label_small a_s_flex_start ${p.newP}">NEW</div>
                    <a>
                        <div class="display_flex flex_center">
                            <p class="system_label margin_top_30">${p.use}</p>
                        </div>
                        <div class="container_img_product display_flex j_c_center"><img class="img_product" src="${p.img}" alt="${p.name}"></div>
                    </a> 
                    <div class="module_text_product">
                        <p class="product_name">${p.name}</p>
                        <p class="retail_price ">$${p.rPrice} / <span class="vip_price">VIP $${p.vipPrice}</span></p>
                        
                        <div class="display_flex ">
                             <p class="purchase_label">${p.discount}</p>
                        </div>
                    </div>
                    <a class="clasic_btn_MONAT" target="_blank" href="https://corp.mymonat.com${p.shopLink}"  aria-label="Go to ${p.name} shop">shop now</a>
            `;
        }else{
            newItem.innerHTML += `
                    <div class="infoBtn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    
                    <div class="new_product_label_small a_s_flex_start ${p.newP}">NEW</div>
                    <a href="${p.url}"  aria-label="Go to ${p.name} page">
                        <div class="container_img_product display_flex j_c_center"><img class="img_product" src="${p.img}" alt="${p.name}"></div>
                    </a> 
                    <div class="module_text_product">
                        <a href="${p.url}"  aria-label="Go to ${p.name} page">
                            <p class="view_details_btn hide_desktop">VIEW DETAILS</p>
                        </a>
                        <p class="product_name">${p.name}</p>
                        <p class="retail_price ">$${p.rPrice} / <span class="vip_price">VIP $${p.vipPrice}</span></p>
                    </div>
                    <a class="clasic_btn_MONAT" target="_blank" href="https://corp.mymonat.com${p.shopLink}"  aria-label="Go to ${p.name} shop">shop now</a>
            `;  
        }
        
        (normalOrder) ? box.appendChild(newItem) : box.prepend(newItem);

    });
    
}

const infoEvents = () =>{
    console.log("paso infoEvents();");
    let btns = document.querySelectorAll(".infoBtn");
    let info = document.querySelectorAll(".infoCard");
    btns.forEach((btn, index) =>{
        btn.onclick = () =>{
            btn.classList.toggle("active")
            info[index].classList.toggle("active")
        }
    })
}

// Si no hay filtro se muestran todos los productos
if (location.hash == ""){
    showP(allProducts, allPBox, false, true);
    infoEvents();
}

// Funcion que filtra la seccion a mostrar
const showFiltered = (input, normalOrder, box) =>{
    let dinamicArray = [];
    
    allProducts.forEach(p => {
        if(p.category.includes(input.value)){
            dinamicArray.push(p);
        }
    });
    
    showP(dinamicArray, box, valueFormat(input), normalOrder);
}


let boxTags = document.getElementById("boxTags");
let tagsBar = document.getElementById("tagsBar");
let loaderOverlay = document.getElementById("loaderP");
let loaderGif = document.querySelector("#loaderP > img");
let filtersCount = document.querySelectorAll(".filtersCount");
let concernCount = document.getElementById("concernCount");
let categoryCount = document.getElementById("categoryCount");

// Se le da funcionalidad a cada input
filterInputs.forEach(input => {
    input.addEventListener("input", () =>{
        
        // if (window.matchMedia("(min-width: 700px)").matches) {
        //     loaderOverlay.classList.add("active");
        //     loaderGif.src = "https://monatglobal.com/wp-content/uploads/2022/04/drop-preloader-11.gif"+"?a="+Math.random();
        //     document.body.style.overflowY = "hidden";
            
        //     setTimeout(() =>{
        //         loaderOverlay.classList.remove("active");
        //         document.body.style.overflowY = "visible";
        //     }, 1700)
        // }
        
        allPBox.innerHTML = "";
        
        if(input.checked == true){
            showFiltered(input, false, filterPBox);
            infoEvents();

            let newTag = document.createElement("div");
            newTag.id = "filterTag_" + valueFormat(input);
            
            newTag.innerHTML = `
                <p>${input.value}</p>
                <span id="closeTag_${valueFormat(input)}">✕</span>
            `;
            
            boxTags.appendChild(newTag);
            
            let closeTag = document.getElementById(`closeTag_${valueFormat(input)}`);

            closeTag.addEventListener("click", () =>{
                input.click();
            });  

        }else{
            document.querySelectorAll(`.${valueFormat(input)}`).forEach(card => card.remove());
            document.getElementById(`filterTag_${valueFormat(input)}`).remove();
        }
        
        let checked = 0;
        let checkConcern = 0;
        let checkCategory = 0;
        
        filterInputs.forEach(i =>{
            if(i.checked) {
                checked ++;
                if(i.name === "concerns"){
                    checkConcern++;
                }else if(i.name === "categories"){
                    checkCategory++;
                }
            } 
        });
        
        if(checked){
            tagsBar.classList.add("active");
        }else{
            showP(allProducts, allPBox, false, true);
            tagsBar.classList.remove("active");
        }
        
        filtersCount.forEach(count => {
            (checked) ? count.innerText = "( " + checked + " )" : count.innerText = "";
        });
        
        (checkConcern) ? concernCount.innerText = "( " + checkConcern + " )" : concernCount.innerText = "";
        (checkCategory) ? categoryCount.innerText = "( " + checkCategory + " )" : categoryCount.innerText = "";
        
        window.scrollTo(0, containerShop.offsetTop - filterBar.offsetHeight);
    });
    
    if(location.hash.includes(valueFormat(input))){
        input.click();
    }
});

let searchBar = document.getElementById("searchBar");
let searchValue = document.querySelector("#searchBar input");
let searchBtn = document.querySelector("#searchBar > button");

searchBar.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    let dinamicArray = [];
    allProducts.forEach(p => {
        
        if(p.name.toLowerCase().includes(searchValue.value.toLowerCase())){
            dinamicArray.push(p);
        }
    });
    
    
    filterInputs.forEach(input => {
        (input.checked) && input.click();
    });
    
    allPBox.innerHTML = "";
    
    showP(dinamicArray, allPBox, false, false);
    
    searchBar.reset();
    infoEvents();
});


function autocomplete(inp, arr) {
    let currentFocus;
    //Execute a function when someone writes in the text field:
    inp.addEventListener("input", function(e) {
        let autoList, matchItem, val = this.value;
        closeAllLists();
        
        //if the imput value is empty, the function is canceled
        if (!val) { return false;}

        currentFocus = -1;
        
        /*create a DIV element that will contain the items (values):*/
        autoList = document.createElement("DIV");
        autoList.setAttribute("id", "autocomplete-list");
        
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(autoList);
        
        arr.forEach(item =>{
            let posA = item.name.toUpperCase().indexOf(val.toUpperCase());
            let posB = posA + val.length;
            
            //If no match is found, indexOf returns -1
            if (posA > -1) {
                /*create a DIV element for each matching element:*/
                matchItem = document.createElement("DIV");
                /*make the matching letters bold:*/
                matchItem.innerHTML = item.name.substring(0, posA);
                matchItem.innerHTML += "<strong>" + item.name.substring(posA, posB) + "</strong>";
                matchItem.innerHTML += item.name.substring(posB);
    
                matchItem.addEventListener("click", function(e) {
                    //insert the value for the autocomplete text field
                    inp.value = item.name;
                    searchBtn.click();
                    closeAllLists();
                });
                
                autoList.appendChild(matchItem);
            }
        });
    });
    
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        let list = document.getElementById("autocomplete-list");
        if (list) list = list.getElementsByTagName("div");
        
        if (e.keyCode == 40) {
            //If the arrow DOWN key is pressed, increase the currentFocus variable
            currentFocus++;
            addActive(list);
        } else if (e.keyCode == 38) { 
            //If the arrow UP key is pressed, decrease the currentFocus variable
            currentFocus--;
            addActive(list);
        } else if (e.keyCode == 13) {
            //If the ENTER key is pressed, prevent the form from being submitted
            e.preventDefault();
            if (currentFocus > -1 && list) list[currentFocus].click();
        }
    });
    
    //Function to add the "active" class
    const addActive = list =>{
        //If there are no suggestions, the function is canceled
        if (!list) return false;

        removeActive(list);
        if (currentFocus >= list.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (list.length - 1);
        
        list[currentFocus].classList.add("autocomplete-active");
    }
    
    //Function to remove the "active" class from all autocomplete items:
    const removeActive = list => list.forEach(div => div.classList.remove("autocomplete-active"));
    
    //Function to remove the autocomplete-list element
    const closeAllLists = elmnt =>{
        let list = document.getElementById("autocomplete-list");
        if (elmnt != inp && list != undefined) list.remove();
    }
    
    /*Execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
  
/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(searchValue, allProducts);


let clearFilter = document.querySelectorAll(".clearFilter")
//Funcion para borrar todos los filtros
clearFilter.forEach(btn =>{
    btn.addEventListener("click", () =>{
        filterInputs.forEach(input => (input.checked) && input.click());
    });
})



 