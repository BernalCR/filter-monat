const allProducts = [
    {
        name: "ADVANCED HYDRATING SYSTEM", 
        line: "haircare",
        rPrice: "155.00",
        vipPrice: "131.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/ADVANCED-HYDRATING-SYSTEM_ecomm-.png", 
        shopLink: "/shop/products/advanced-hydrating-system-6000003139", 
        use: "FOR DRY FINE TO MEDIUM&nbsp;HAIR",
        discount: "EXTRA 20% OFF WITH PURCHASE+&trade;",
        category: "systems | dry hair",
        newP: "hide",
    },
    {
        name: "RENEW™ HYDRATING SYSTEM", 
        line: "haircare",
        rPrice: "143.00",
        vipPrice: "121.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/RENEW-HYDRATING-SYSTEM_ecomm.png", 
        shopLink: "/shop/products/renew-hydrating-system-6000003138", 
        use: "FOR DRY MEDIUM TO THICK&nbsp;HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | dry hair",
        newP: "hide",
    },
    {
        name: "REVIVE™ VOLUMIZING SYSTEM", 
        line: "haircare",
        rPrice: "137.00",
        vipPrice: "116.00",   
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/REVIVE-VOLUMIZING-SYSTEM_ecomm-.png", 
        shopLink: "/shop/products/volumizing-revive-system", 
        use: "FOR FLAT FINE TO MEDIUM&nbsp;HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | volume",
        newP: "hide",
    },
    {
        name: "IR CLINICAL™ SYSTEM", 
        line: "haircare",
        rPrice: "176.00",
        vipPrice: "149.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/08/IR-Clinical-SYSTEM-_ecomm-2022.png", 
        shopLink: "/shop/products/ir-clinical-system/ir-clinical-system-6000003460", 
        use: "FOR THINNING OF ALL HAIR&nbsp;TEXTURES",
        discount: "EXTRA 20% OFF WITH PURCHASE+&trade;",
        category: "systems | densifying | thinning",
        newP: "hide",
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ SYSTEM I", 
        line: "haircare",
        rPrice: "139.00",
        vipPrice: "118.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/SMOOTHING-ANTI-FRIZZ-SYSTEM-I_ecomm.png", 
        shopLink: "/shop/products/smoothing-anti-frizz-system-i-6000003142", 
        use: "MINIMIZES FRIZZ FOR FINE TO MEDIUM&nbsp;HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | frizz",
        newP: "hide",
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ SYSTEM II", 
        line: "haircare",
        rPrice: "139.00",
        vipPrice: "118.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/SMOOTHING-ANTI-FRIZZ-SYSTEM-II_ecomm.png", 
        shopLink: "/shop/products/smoothing-anti-frizz-system-ii-6000003242", 
        use: "MINIMIZES FRIZZ FOR MEDIUM TO THICK&nbsp;HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | frizz",
        newP: "hide",
    },
    {
        name: "DAMAGE REPAIR SYSTEM", 
        line: "haircare",
        rPrice: "191.00",
        vipPrice: "162.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/DAMAGE-REPAIR-SYSTEM_ecomm.png", 
        shopLink: "/shop/products/damage-repair-system-6000003143", 
        use: "REPAIRS DAMAGE FOR ALL HAIR&nbsp;TYPES",
        discount: "EXTRA 20% OFF WITH PURCHASE+&trade;",
        category: "systems | damage, breakage, and split ends",
        newP: "hide",
    },
    {
        name: "SCALP PURIFYING SYSTEM", 
        line: "haircare",
        rPrice: "141.00",
        vipPrice: "119.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/Sclap-Purifying-System-ecomm.png", 
        shopLink: "/scalp-purifying-system-6000003144", 
        use: "FOR OILY SCALP AND&nbsp;HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | scalp care",
        newP: "hide",
    },
    {
        name: "REJUVENIQE® OIL INTENSIVE", 
        line: "haircare",
        rPrice: "105.00",
        vipPrice: "89.00", 
        url: "/rejuveniqe-tm-oil-intensive/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/REJUVENIQE®-OIL-INTENSIVE.png", 
        shopLink: "/shop/products/rejuveniqe-oil-intensive", 
        category: "best sellers | curls, coils, and waves | dry hair | frizz | shine",
        newP: "hide",
    },
    {
        name: "REJUVENIQE LIGHT BY MONAT™", 
        line: "haircare",
        rPrice: "105 .00",
        vipPrice: "89.00", 
        url: "/rejuveniqe-light/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/REJUVENIQE-LIGHT-BY-MONAT™.png", 
        shopLink: "/shop/products/rejuveniqe-light", 
        category: "best sellers | curls, coils, and waves | dry hair | frizz | shine",
        newP: "hide",
    },
    {
        name: "REJUVABEADS® BY MONAT", 
        line: "haircare",
        rPrice: "59.00",
        vipPrice: "50.00", 
        url: "/rejuvabeads-by-monat/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/REJUVABEADS®-BY-MONAT.png", 
        shopLink: "/shop/products/rejuvabeads", 
        category: "best sellers | damage, breakage, and split ends",
        newP: "hide",
    },
    {
        name: "COLOUR ENHANCE PERFECTLY PLATINUM SHAMPOO", 
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
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
        line: "haircare",
        rPrice: "39.00",
        vipPrice: "33.00", 
        url: "/thermal-protect-styling-shield/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/09/THERMAL-PROTECT-STYLING-SHIELD-ecomm-hair.png", 
        shopLink: "/shop/products/thermal-protect-styling-shield?taxon_id=21", 
        category: "styling",
        newP: "hide",
    },
    
    
    
    
    
    
    
    
    
    
    {
        name: "BE PURIFIED™ SYSTEM", 
        line: "skincare",
        rPrice: "218.00",
        vipPrice: "186.00", 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/BE-PURIFIED-SYSTEM_ecomm.png ", 
        shopLink: "/shop/products/be-purified-routine", 
        use: "FOR OILY SKIN&nbsp;TYPES",
        discount: "EXTRA 20% OFF WITH PURCHASE+&trade;",
        category: "systems",
        newP: "hide",
    },
    {
        name: "BE BALANCED™ System", 
        line: "skincare",
        rPrice: "302.00",
        vipPrice: "258.00", 
        url: "/be-balanced-routine/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/be-balanced-routine-skincare.png", 
        shopLink: "/shop/products/be-balanced-routine?taxon_id=30", 
        use: "FOR NORMAL/COMBINATION&nbsp;SKIN",
        discount: "EXTRA 25% OFF WITH PURCHASE+&trade;",
        category: "systems | best sellers | routines | moisturizers | cleansers & scrubs",
        newP: "hide",
    },
    {
        name: "BE GENTLE™ System", 
        line: "skincare",
        rPrice: "302.00",
        vipPrice: "258.00", 
        url: "/be-gentle-routine/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/be-gentle-routine-1.png", 
        shopLink: "/shop/products/be-gentle-routine?taxon_id=30", 
        use: "FOR DRY / SENSITIVE&nbsp;SKIN",
        discount: "EXTRA 25% OFF WITH PURCHASE+&trade;",
        category: "systems | sensitive skin | best sellers | routines | moisturizers | cleansers & scrubs",
        newP: "hide",
    },
    {
        name: "MAKEUP VANISHING BALM™", 
        line: "skincare",
        rPrice: "67.00",
        vipPrice: "57.00", 
        url: "/makeup-vanishing-balm/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/06/Makeup-Vanishing-Balm_web_.png", 
        shopLink: "/shop/products/makeup-vanishing-balm/", 
        category: "sensitive skin | cleansers & scrubs",
        newP: "hide",
    },
    {
        name: "BE GENTLE™ CREAMY CLEANSER", 
        line: "skincare",
        rPrice: "50.00",
        vipPrice: "43.00", 
        url: "/creamy-cleanser/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/monat-Be-Gentle-Cleanser-Skincare-1.png", 
        shopLink: "/shop/products/creamy-cleanser", 
        category: "dryness & dehydration | sensitive skin | cleansers & scrubs",
        newP: "hide",
    },
    {
        name: "BE BALANCED™ FOAMY CLEANSER", 
        line: "skincare",
        rPrice: "50.00",
        vipPrice: "43.00", 
        url: "/foamy-cleanser/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/be-balanced-foamy-cleanser-.png", 
        shopLink: "/shop/products/be-balanced-foamy-cleanser", 
        category: "dryness & dehydration | best sellers | cleansers & scrubs",
        newP: "hide",
    },
    {
        name: "BE PURIFIED™ CLARIFYING CLEANSER", 
        line: "skincare",
        rPrice: "50.00",
        vipPrice: "43.00",
        url: "/skin-clarifying-cleanser/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/02/be-pcc.png", 
        shopLink: "/shop/products/be-purified-clarifying-cleanser", 
        category: "oil control | pores | cleansers & scrubs",
        newP: "hide",
    },
    {
        name: "BERRY REFINED SCRUB™", 
        line: "skincare",
        rPrice: "62.00",
        vipPrice: "53.00", 
        url: "/refined-skin-scrub/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/berry-refined-scrub.png", 
        shopLink: "/shop/products/berry-refined-scrub", 
        category: "dark Spots | dullness | oil control | pores | uneven tone & texture | best sellers | cleansers & scrubs | serums, treatments, and masks",
        newP: "hide",
    },
    {
        name: "BE PURIFIED™ COLD CHARCOAL MASK", 
        line: "skincare",
        rPrice: "44.00",
        vipPrice: "37.00", 
        url: "/charcoal-mask/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/02/be-pcharcoal-1.png", 
        shopLink: "/shop/products/be-purified-cold-charcoal-mask", 
        category: "oil control | pores | serums, treatments, and masks",
        newP: "hide",
    },
    {
        name: "SKIN REVITALIZING ESSENCE™", 
        line: "skincare",
        rPrice: "48.00",
        vipPrice: "41.00", 
        url: "/skin-revitalizing/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/sking-revitalizing-essence.png", 
        shopLink: "/shop/products/skin-revitalizing-essence", 
        category: "dullness | dryness & dehydration | fine lines & wrinkles | oil control | sensitive skin | essence & toners",
        newP: "hide",
    },
    {
        name: "C. RADIANCE™ ILLUMINATING SERUM", 
        line: "skincare",
        rPrice: "99.00",
        vipPrice: "84.00", 
        url: "/skincare-c-radiance/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/11/c-radiance.png", 
        shopLink: "/shop/products/c-radiance-illuminating-serum", 
        category: "dark Spots | dullness | uneven tone & texture | serums, treatments, and masks",
        newP: "hide",
    },
    {
        name: "REWIND™ AGE CONTROL NECTAR", 
        line: "skincare",
        rPrice: "128.00",
        vipPrice: "109.00", 
        url: "/age-control-nectar/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/rewind-age-control-nectar-1.png", 
        shopLink: "/shop/products/rewind-age-control-nectar", 
        category: "dryness & dehydration | fine lines & wrinkles | prevention and protection | sensitive skin | best sellers | serums, treatments, and masks",
        newP: "hide",
    },
    {
        name: "BOTANIC BAKUCHIOL VEGAN RETINOL ALTERNATIVE LOTION", 
        line: "skincare",
        rPrice: "95.00",
        vipPrice: "81.00", 
        url: "/bakuchiol/", 
        img: "https://monatglobal.com/wp-content/uploads/2020/11/bbvr.png", 
        shopLink: "/shop/products/botanic-bakuchiol", 
        category: "dark Spots | dullness | sensitive skin | uneven tone & texture",
        newP: "hide",
    },
    {
        name: "EYE SMOOTH™", 
        line: "skincare",
        rPrice: "84.00",
        vipPrice: "71.00", 
        url: "/eye-smooth/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/eye-smooth-nourishing-eye-cream.png", 
        shopLink: "/shop/products/eye-smooth", 
        category: "eye care | best sellers | serums, treatments, and masks",
        newP: "hide",
    },
    {
        name: "30 SECOND MIRACLE™ INSTANT PERFECTOR", 
        line: "skincare",
        rPrice: "90.00",
        vipPrice: "77.00", 
        url: "/skincare-perfector/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/11/30-second-miracle.png", 
        shopLink: "/shop/products/30-second-miracle-instant-eye-protector", 
        category: "eye care | fine lines & wrinkles | best sellers | serums, treatments, and masks",
        newP: "hide",
    },
    {
        name: "HYDRATION BOOSTER™ HYALURONIC SERUM PLUS", 
        line: "skincare",
        rPrice: "77.00",
        vipPrice: "65.00", 
        url: "/hyaluronic-serum/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/Hydration-Booster-Hyaluronic-Serum-Plus_ecomm.png", 
        shopLink: "/shop/products/hydration-booster-serum", 
        category: "dullness | dryness & dehydration | fine lines & wrinkles | prevention and protection | sensitive skin",
        newP: "hide",
    },
    {
        name: "BE GENTLE™ NOURISHING MOISTURIZER", 
        line: "skincare",
        rPrice: "76.00",
        vipPrice: "65.00", 
        url: "/nourishing-moisturizer/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/be-gentle-nurishing-moisturizer-1-1.png", 
        shopLink: "/shop/products/nourishing-moisturizer", 
        category: "dryness & dehydration | fine lines & wrinkles | sensitive skin | moisturizers",
        newP: "hide",
    },
    {
        name: "BE BALANCED™ LIGHTWEIGHT MOISTURIZER", 
        line: "skincare",
        rPrice: "76.00",
        vipPrice: "65.00",
        url: "/lightweight-moisturizer/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/be-balanced-lightweight-moisturizer.png", 
        shopLink: "/shop/products/lightweight-moisturizer/", 
        category: "fine lines & wrinkles | moisturizers",
        newP: "hide",
    },
    {
        name: "BE PURIFIED™ OIL-FREE MOISTURIZER", 
        line: "skincare",
        rPrice: "76.00",
        vipPrice: "65.00",
        url: "/skin-oil-free-moisturizer/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/02/be-pmois-1.png", 
        shopLink: "/shop/products/be-purified-oil-free-moisturizer", 
        category: "fine lines & wrinkles | oil control | pores | moisturizers",
        newP: "hide",
    },
    {
        name: "NIGHT HAVEN™ OVERNIGHT AGE CONTROL CREAM", 
        line: "skincare",
        rPrice: "87.00",
        vipPrice: "74.00", 
        url: "/skincare-night-age-control-cream/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/11/night-haven.png", 
        shopLink: "/shop/products/night-heaven-overnight-age-control-cream", 
        category: "dryness & dehydration | fine lines & wrinkles | prevention and protection | sensitive skin | moisturizers",
        newP: "hide",
    },
    {
        name: "SUN VEIL™ DAILY MINERAL PROTECTION SPF 30", 
        line: "skincare",
        rPrice: "40.00",
        vipPrice: "34.00", 
        url: "/sun-veil-sunscreen/", 
        img: "https://monatglobal.com/wp-content/uploads/2020/08/sv-prod-1.png", 
        shopLink: "/shop/products/sun-veil-daily-mineral-protection", 
        category: "dark Spots | dryness & dehydration | prevention and protection | uneven tone & texture | best sellers | specialties",
        newP: "hide",
    },
    {
        name: "HYDRATE & REFRESH™ FACE MIST", 
        line: "skincare",
        rPrice: "44.00",
        vipPrice: "37.00", 
        url: "/face-mist/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/MONAT_HYDRATE-REFRESH_ecomm-optimized.png", 
        shopLink: "/shop/products/hydrate-refresh-face-mist", 
        category: "sensitive skin",
        newP: "hide",
    },
    {
        name: "BRIGHTEN AND RECOVER", 
        line: "skincare",
        rPrice: "186.00",
        vipPrice: "158.00", 
        url: "/skincare-duo/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/11/Brighten-Recover-Duo-1.png", 
        shopLink: "/shop/products/brighten-recover-duo", 
        category: "routines",
        newP: "hide",
    },
    {
        name: "MONAT BODY CARE™ MOISTURIZE & REPLENISH BODY WASH", 
        line: "skincare",
        rPrice: "42.00",
        vipPrice: "36.00", 
        url: "/body-wash/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/Moistturizw-replenish-body-wash-ecomm.png", 
        shopLink: "/shop/products/monat-body-care-moisture-replenish-body-wash-6000001819", 
        category: "dryness & dehydration | best sellers | body care | cleansers & scrubs",
        newP: "hide",
    },
    {
        name: "MONAT BODY CARE™ EXFOLIATE & REFINE BODY POLISH", 
        line: "skincare",
        rPrice: "52.00",
        vipPrice: "44.00", 
        url: "/body-exfoliator/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/exfoliate-refine-body-polish-ecomm.png", 
        shopLink: "/shop/products/monat-body-care-exfoliate-refine-body-polish-6000001821", 
        category: "uneven tone & texture | body care | cleansers & scrubs",
        newP: "hide",
    },
    {
        name: "MONAT BODY CARE™ HYDRATE & REPAIR BODY SERUM", 
        line: "skincare",
        rPrice: "67.00",
        vipPrice: "57.00", 
        url: "/body-hydrate-serum/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/HYDRATE-REPAIR-BODY-SERUM-ecomm.png", 
        shopLink: "/shop/products/monat-body-care-hydrate-repair-serum-6000001822", 
        category: "dullness | dryness & dehydration | prevention and protection | body care | serums, treatments, and masks",
        newP: "hide",
    },
    {
        name: "MONAT BODY CARE™ SMOOTH & RENEW BODY LOTION", 
        line: "skincare",
        rPrice: "57.00",
        vipPrice: "48.00", 
        url: "/body-lotion/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/SMOOTH-RENEW-BODY-LOTION-ecomm-1.png", 
        shopLink: "/shop/products/monat-body-care-smooth-renew-body-lotion-6000001820", 
        category: "dryness & dehydration | prevention and protection | body care | moisturizers",
        newP: "hide",
    },
    {
        name: "MONAT BODY CARE™ SILKY & SOOTHING HAND CREAM", 
        line: "skincare",
        rPrice: "23.00",
        vipPrice: "20.00", 
        url: "/hand-cream/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/SILKY-SOOTHING-HAND-CREAM-ecomm.png", 
        shopLink: "/shop/products/monat-body-care-silky-soothing-hand-cream-6000001963", 
        category: "dryness & dehydration | prevention and protection | body care | moisturizers",
        newP: "hide",
    },
    {
        name: "MONAT FOR MEN™ ESSENTIAL FACE WASH", 
        line: "skincare",
        rPrice: "35.00",
        vipPrice: "30.00", 
        url: "/men-face-wash/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/02/MB-ESSENTIAL-FACE-WASH-401x500.png", 
        shopLink: "/shop/products/essential-face-wash", 
        category: "oil control | men skincare | cleansers & scrubs",
        newP: "hide",
    },
    {
        name: "MONAT FOR MEN™ ESSENTIAL FACE SCRUB", 
        line: "skincare",
        rPrice: "37.00",
        vipPrice: "31.00", 
        url: "/men-face-scrub/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/02/MB-ESSENTIAL-FACE-SCRUB-401x500.png", 
        shopLink: "/shop/products/essential-face-scrub", 
        category: "dullness | oil control | uneven tone & texture | men skincare | cleansers & scrubs",
        newP: "hide",
    },
    {
        name: "MONAT FOR MEN™ ESSENTIAL FACE MOISTURIZER", 
        line: "skincare",
        rPrice: "45.00",
        vipPrice: "38.00", 
        url: "/men-face-moisturizer/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/01/MB-ESSENTIAL-FACE-MOISTURIZER-1.7oz_eccom-1.png", 
        shopLink: "/shop/products/essential-face-moisturizer", 
        category: "fine lines & wrinkles | oil control | men skincare | moisturizers",
        newP: "hide",
    },
    {
        name: "MONAT FOR MEN™ ESSENTIAL SHAVING CREAM", 
        line: "skincare",
        rPrice: "29.00",
        vipPrice: "25.00", 
        url: "/men-shaving-cream/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/10/essential-shaving-cream.png", 
        shopLink: "/shop/products/men-essential-shaving-cream", 
        category: "men skincare | specialties",
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
    // },


];

let allHair = [];
let allSkin = [];

allProducts.forEach(p =>{
    if(p.line === "haircare"){
        allHair.push(p);
    }else{
        allSkin.push(p);
    }
});


window.addEventListener("hashchange", () =>{
    location.reload();
})

//declaracion de variables
let filterPBox = document.getElementById("filterPBox");
let filterInputs = document.querySelectorAll("#filterBox input");
let hairInputs = document.querySelectorAll("#hairInputs input");
let skinInputs = document.querySelectorAll("#skinInputs input");
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
        accordion.nextElementSibling.classList.toggle("active");
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
const showP = (arr, box, showInfoTag) =>{

    if(arr == allProducts || arr == allHair || arr == allSkin) activeItems = [];
    
    activeItems = [...arr, ...activeItems];
    array = activeItems;
    
    filterPBox.innerHTML = "";
    
    array.forEach(p => {
        let newItem = document.createElement("div");
        newItem.className = "card_product";
    
        let categories = p.category.split(" | ");
        
        let infoCard = document.createElement("div");
        infoCard.className = "infoCard";

        if(p.line === "haircare"){
            categories.forEach(cat =>{
                hairInputs.forEach(inp => {
                    if(inp.value == cat){
                        (inp.checked || showInfoTag) ? infoCard.innerHTML += `<p>${cat}</p>` : infoCard.innerHTML += `<p class="off">${cat}</p>`;
                    }
                });
            })
        }else{
            categories.forEach(cat =>{
                skinInputs.forEach(inp => {
                    if(inp.value == cat){
                        (inp.checked && inp.value == cat) ? infoCard.innerHTML += `<p>${cat}</p>` : infoCard.innerHTML += `<p class="off">${cat}</p>`;
                    }
                });
            }) 
        }
        

        
        newItem.prepend(infoCard);
        
        if(p.category.includes("systems")){
            newItem.innerHTML += `
            
                <div class="infoBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            
                <div class="card_content events_none">
                    <div class="new_product_label_small a_s_flex_start ${p.newP}">NEW</div>

                        <div class="display_flex flex_center">
                            <p class="system_label margin_top_30">${p.use}</p>
                        </div>
                        <div class="container_img_product display_flex j_c_center"><img class="img_product" src="${p.img}" alt="${p.name}"></div>

                    <div class="module_text_product">
                        <p class="product_name">${p.name}</p>
                        <p class="retail_price ">$${p.rPrice} / <span class="vip_price">VIP $${p.vipPrice}</span></p>
                        
                        <div class="display_flex ">
                             <p class="purchase_label">${p.discount}</p>
                        </div>
                    </div>
                </div>
                
                <div class="shop_btn"><a class="clasic_btn_MONAT" target="_blank" href="https://corp.mymonat.com${p.shopLink}"  aria-label="Go to ${p.name} shop">shop now</a></div>
            `;
        }else{
            newItem.innerHTML += `
            
                <div class="infoBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            
                <a class="card_content" href="${p.url}"  aria-label="Go to ${p.name} page">
                    <div class="new_product_label_small a_s_flex_start ${p.newP}">NEW</div>

                        <div class="container_img_product display_flex j_c_center"><img class="img_product" src="${p.img}" alt="${p.name}"></div>

                    <div class="module_text_product">

                            <p class="view_details_btn hide_desktop">VIEW DETAILS</p>

                        <p class="product_name">${p.name}</p>
                        <p class="retail_price ">$${p.rPrice} / <span class="vip_price">VIP $${p.vipPrice}</span></p>
                    </div>
                </a>
                
                <div class="shop_btn"><a class="clasic_btn_MONAT" target="_blank" href="https://corp.mymonat.com${p.shopLink}"  aria-label="Go to ${p.name} shop">shop now</a></div>
            `;   
        }
        
        box.appendChild(newItem)

    });
    
}

const infoEvents = () =>{
    let btns = document.querySelectorAll(".infoBtn");
    let info = document.querySelectorAll(".infoCard");
    btns.forEach((btn, index) =>{
        btn.onclick = () =>{
            btn.classList.toggle("active")
            info[index].classList.toggle("active")
        }
        
        info[index].onclick = (e) =>{
            if(e.target.tagName != "P"){
                btn.classList.remove("active")
                info[index].classList.remove("active")
            }
        }
    })
}

let activeItems = [];
let activeTab = "";
let previousTab = "";


let filterInitial = document.getElementById("state1_filter");
let filterTabs = document.querySelectorAll("#state1_filter > li > p");
let backState1 = document.querySelectorAll(".head_state2 span");

filterTabs.forEach((tab, i) =>{
    tab.addEventListener("click", () =>{
        filterInitial.classList.add("tabActive");
        tab.nextElementSibling.style.display = "block";
        activeTab = tab.id;
        
        if(activeTab != previousTab){
            
            if(tab.id === "haircareTab_f"){
                skinInputs.forEach(i => {
                    if(i.checked) i.click();
                });
                showP(allHair, filterPBox, true);
            }else{
                hairInputs.forEach(i => {
                    if(i.checked) i.click()
                });
                showP(allSkin, filterPBox, true);
            }
            infoEvents();
        }
        
        previousTab = tab.id;
    });
    
    backState1[i].addEventListener("click", () =>{
        filterInitial.classList.remove("tabActive");
        setTimeout(() =>{document.querySelector("#" + tab.id + " + ul").style.display = "none"}, 301);
    });
});

// Si no hay filtro se muestran todos los productos
if (location.hash == ""){
    showP(allProducts, filterPBox, true);
    infoEvents();
}


let boxTags = document.getElementById("boxTags");
let tagsBar = document.getElementById("tagsBar");
let loaderOverlay = document.getElementById("loaderP");
let loaderGif = document.querySelector("#loaderP > img");
let filtersCount = document.querySelectorAll(".filtersCount");
let concernHCount = document.getElementById("concernHCount");
let categoryHCount = document.getElementById("categoryHCount");
let concernSCount = document.getElementById("concernSCount");
let categorySCount = document.getElementById("categorySCount");

// Se le da funcionalidad a cada input
filterInputs.forEach(input => {
    
    input.addEventListener("input", () =>{
        
        
        let checked = 0;
        let checkConcernH = 0;
        let checkCategoryH = 0;
        
        let checkConcernS = 0;
        let checkCategoryS = 0;
        
        filterInputs.forEach(i =>{

            if(i.checked) {
                checked ++;
                
                switch(i.name) {
                  case "concernH":
                    checkConcernH++;
                    break;
                  case "concernS":
                    checkConcernS++;
                    break;
                  case "categoryH":
                    checkCategoryH++;
                    break;
                  case "categoryS":
                    checkCategoryS++;
                    break;
                }
            } 
            
        });
        
        // if (window.matchMedia("(min-width: 700px)").matches) {
        //     loaderOverlay.classList.add("active");
        //     loaderGif.src = "https://monatglobal.com/wp-content/uploads/2022/04/drop-preloader-11.gif"+"?a="+Math.random();
        //     document.body.style.overflowY = "hidden";
            
        //     setTimeout(() =>{
        //         loaderOverlay.classList.remove("active");
        //         document.body.style.overflowY = "visible";
        //     }, 1700)
        // }
        
        
        if(input.checked === true){
            
            if(checked === 1) activeItems = [];
            
            let dinamicArray = [];
            
            allProducts.forEach(p => {
                if(p.category.includes(input.value) && activeTab.includes(p.line)){
                    
                    let pass = true;
                    
                    activeItems.forEach(item =>{
                        if(p.name == item.name) pass = false;
                    });
                    
                    if(pass) dinamicArray.push(p);
                }
            });
            
            showP(dinamicArray, filterPBox);
            
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
            document.getElementById(`filterTag_${valueFormat(input)}`).remove();

            if(!checked){
                    activeItems = [];
            }else{
                for (let i = 0; i < activeItems.length; i++) {
                    let deleteItem = true;
                    
                    filterInputs.forEach(inp => {
                        if(inp.checked && activeItems[i].category.includes(inp.value) && inp != input){
                            deleteItem = false;
                        }
                    });  
                    
                    if(deleteItem){
                        activeItems.splice(i, 1);
                        --i;
                    }
                }
            }
                

            showP([], filterPBox);
            infoEvents();
        }
        
        console.log(activeItems);

        if(checked){
            tagsBar.classList.add("active");
        }else{
            if(activeTab === "haircareTab_f"){
                showP(allHair, filterPBox);
            }else{
                showP(allSkin, filterPBox);
            }

            infoEvents();
            tagsBar.classList.remove("active");
        }
        
        filtersCount.forEach(count => {
            (checked) ? count.innerText = "( " + checked + " )" : count.innerText = "";
        });
        
        (checkConcernH) ? concernHCount.innerText = "( " + checkConcernH + " )" : concernHCount.innerText = "";
        (checkCategoryH) ? categoryHCount.innerText = "( " + checkCategoryH + " )" : categoryHCount.innerText = "";
        (checkConcernS) ? concernSCount.innerText = "( " + checkConcernS + " )" : concernSCount.innerText = "";
        (checkCategoryS) ? categorySCount.innerText = "( " + checkCategoryS + " )" : categorySCount.innerText = "";
        
        window.scrollTo(0, containerShop.offsetTop - filterBar.offsetHeight);
    });
    
    if(location.hash.includes(valueFormat(input))){
        input.click();
    }
});

let searchBar = document.getElementById("searchBar");
let overlayFilter = document.getElementById("overlayFilter");
let searchValue = document.querySelector("#searchBar input");
let searchBtn = document.querySelector("#searchBar > button");

const overlayTrigger = (trigger) => {
    if(trigger){
        searchBar.classList.add("focus");
        overlayFilter.classList.add("active"); 
    }else{
        searchBar.classList.remove("focus");
        overlayFilter.classList.remove("active"); 
    }
}

overlayFilter.addEventListener("click", () =>{
    closeAllLists();
    overlayTrigger(false);
});

searchValue.addEventListener("click", () => overlayTrigger(true));

const closeAllLists = () =>{
    let list = document.getElementById("autocomplete-list");
    if(list) list.remove();
}
    
searchBar.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    let dinamicArray = [];
    allProducts.forEach(p => {
        
        if(p.name.toLowerCase().includes(searchValue.value.toLowerCase())){
            dinamicArray.push(p);
        }
    });
    
    filterInputs.forEach(input => {
        if(input.checked) input.click();
    });

    // filterInputs.forEach(input => {
    //     if(input.checked) input.checked = false;
    // });

    // boxTags.innerHTML = "";
    
    activeItems = [];
    
    showP(dinamicArray, filterPBox);
    infoEvents();
    searchBar.reset();
    
    closeAllLists();
    overlayTrigger(false);
});

function autocomplete(inp, arr) {
    let currentFocus;
    //Execute a function when someone writes in the text field:
    inp.addEventListener("input", function(e) {
        overlayTrigger(true);
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
                    // closeAllLists();
                    // overlayTrigger(false);
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
            if (currentFocus > -1 && list){
                e.preventDefault();
                list[currentFocus].click();
            }
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

