let filterBtn_mob = document.getElementById("filterBtn_mob");
window.addEventListener("scroll", () =>{
    if (window.matchMedia("(max-width: 700px)").matches) {
        let currentScroll = window.scrollY; 
        if (currentScroll < scrollPos){
            filterBtn_mob.classList.add("active");
        }else{
            filterBtn_mob.classList.remove("active");
        }
        scrollPos = currentScroll;
    }
});


const allProducts = [
    {
        name: "ADVANCED HYDRATING SYSTEM", 
        line: "haircare",
        rPrice: 171.00,
        vipPrice: 145.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/ADVANCED-HYDRATING-SYSTEM_ecomm-.png", 
        shopLink: "/shop/products/advanced-hydrating-system-6000003139", 
        use: "FOR DRY FINE TO MEDIUM&nbsp;HAIR",
        discount: "EXTRA 20% OFF WITH PURCHASE+&trade;",
        category: "systems | dry hair",
        newP: false,
    },
    {
        name: "RENEW™ HYDRATING SYSTEM", 
        line: "haircare",
        rPrice: 157.00,
        vipPrice: 133.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/RENEW-HYDRATING-SYSTEM_ecomm.png", 
        shopLink: "/shop/products/renew-hydrating-system-6000003138", 
        use: "FOR DRY MEDIUM TO THICK&nbsp;HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | dry hair",
        newP: false,
    },
    {
        name: "REVIVE™ VOLUMIZING SYSTEM", 
        line: "haircare",
        rPrice: 149.00,
        vipPrice: 127.00,   
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/REVIVE-VOLUMIZING-SYSTEM_ecomm-.png", 
        shopLink: "/shop/products/volumizing-revive-system", 
        use: "FOR FLAT FINE TO MEDIUM&nbsp;HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | volume",
        newP: false,
    },
    {
        name: "IR CLINICAL™ SYSTEM", 
        line: "haircare",
        rPrice: 190.00,
        vipPrice: 161.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/08/IR-Clinical-SYSTEM-_ecomm-2022.png", 
        shopLink: "/shop/products/ir-clinical-system/ir-clinical-system-6000003460", 
        use: "FOR THINNING OF ALL HAIR&nbsp;TEXTURES",
        discount: "EXTRA 20% OFF WITH PURCHASE+&trade;",
        category: "systems | densifying | thinning",
        newP: false,
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ SYSTEM I", 
        line: "haircare",
        rPrice: 153.00,
        vipPrice: 130.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/SMOOTHING-ANTI-FRIZZ-SYSTEM-I_ecomm.png", 
        shopLink: "/shop/products/smoothing-anti-frizz-system-i-6000003142", 
        use: "MINIMIZES FRIZZ FOR FINE TO MEDIUM&nbsp;HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | frizz",
        newP: false,
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ SYSTEM II", 
        line: "haircare",
        rPrice: 153.00,
        vipPrice: 130.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/SMOOTHING-ANTI-FRIZZ-SYSTEM-II_ecomm.png", 
        shopLink: "/shop/products/smoothing-anti-frizz-system-ii-6000003242", 
        use: "MINIMIZES FRIZZ FOR MEDIUM TO THICK&nbsp;HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | frizz",
        newP: false,
    },
    {
        name: "DAMAGE REPAIR SYSTEM", 
        line: "haircare",
        rPrice: 209.00,
        vipPrice: 178.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/DAMAGE-REPAIR-SYSTEM_ecomm.png", 
        shopLink: "/shop/products/damage-repair-system-6000003143", 
        use: "REPAIRS DAMAGE FOR ALL HAIR&nbsp;TYPES",
        discount: "EXTRA 20% OFF WITH PURCHASE+&trade;",
        category: "systems | damage, breakage, and split ends",
        newP: false,
    },
    {
        name: "SCALP PURIFYING SYSTEM", 
        line: "haircare",
        rPrice: 152.00,
        vipPrice: 130.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/Sclap-Purifying-System-ecomm.png", 
        shopLink: "/scalp-purifying-system-6000003144", 
        use: "FOR OILY SCALP AND&nbsp;HAIR",
        discount: "EXTRA 15% OFF WITH PURCHASE+&trade;",
        category: "systems | scalp care",
        newP: false,
    },
    {
        name: "VIOLET LIGHTS™ ANTI-BRASS SHAMPOO", 
        line: "haircare",
        rPrice: 45.00,
        vipPrice: 38.00, 
        url: "/violet-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2023/02/Violet-Lights-Anti-Brass-Toning-Masque-ecomm-2022_all_prods-min.png",
        shopLink: "/shop/products/violet-lights-anti-brass-shampoo-6000001481/?globallanguage=en&globalmarket=us", 
        category: "color care | shampoos",
        newP: false,
    },
    
    {
        name: "VIOLET LIGHTS™ ANTI-BRASS TONING MASQUE", 
        line: "haircare",
        rPrice: 50.00,
        vipPrice: 43.00, 
        url: "/violet-masque/", 
        img: "https://monatglobal.com/wp-content/uploads/2023/02/Violet-Lights-Anti-Brass-Toning-Masque-ecomm-2022_all-prods-min.png",
        shopLink: "/shop/products/violet-lights-anti-brass-toning-masque-6000002408?globallanguage=en&globalmarket=us", 
        category: "color care | masques & treatments",
        newP: false,
    },
    {
        name: "REJUVENIQE® OIL INTENSIVE", 
        line: "haircare",
        rPrice: 116.00,
        vipPrice: 99.00, 
        url: "/rejuveniqe-tm-oil-intensive/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/REJUVENIQE®-OIL-INTENSIVE.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2000/10/The_REJUVENIQE™_Story_HEADER_v1.jpg",
        shopLink: "/shop/products/rejuveniqe-oil-intensive", 
        category: "curls, coils, and waves | dry hair | frizz | shine | best sellers | leave-in care | masques & treatments",
        newP: false,
    },
    {
        name: "REJUVENIQE LIGHT BY MONAT™", 
        line: "haircare",
        rPrice: 116.00,
        vipPrice: 99.00, 
        url: "/rejuveniqe-light/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/REJUVENIQE-LIGHT-BY-MONAT™.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2000/10/The_REJUVENIQE™_Story_HEADER.jpg",
        shopLink: "/shop/products/rejuveniqe-light", 
        category: "curls, coils, and waves | dry hair | frizz | shine | best sellers | leave-in care | masques & treatments",
        newP: false,
    },
    {
        name: "REJUVABEADS® BY MONAT", 
        line: "haircare",
        rPrice: 65.00,
        vipPrice: 55.00, 
        url: "/rejuvabeads/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/REJUVABEADS®-BY-MONAT.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2022/12/rejuvabeads-banner-mobile.jpg",
        shopLink: "/shop/products/rejuvabeads", 
        category: "damage, breakage, and split ends | best sellers | leave-in care | masques & treatments",
        newP: false,
    },
    //{
    //    name: "COLOUR ENHANCE PERFECTLY PLATINUM SHAMPOO", 
    //    line: "haircare",
    //    rPrice: 32.00,
    //    vipPrice: 27.00, 
    //    url: "/colour-enhance-perfectly-platinum-shampoo/", 
    //    img: "https://monatglobal.com/wp-content/uploads/2021/07/PERFECTLY-PLATINUM-SHAMPOO.png", 
    //    shopLink: "/shop/products/perfectly-platinum-shampoo-fgplatsha", 
    //    category: "color care | shampoos",
    //    newP: false,
    //},
    {
        name: "MONAT STUDIO ONE™ CURL DEFINING CREAM", 
        line: "haircare",
        rPrice: 46.00,
        vipPrice: 39.00, 
        url: "/curl-cream/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/CURL-DEFINING-CREAM.png", 
        shopLink: "/shop/products/curl-cream", 
        category: "curls, coils, and waves | dry hair | frizz | shine | styling | leave-in care",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ FLEXIBLE HOLD GEL", 
        line: "haircare",
        rPrice: 38.00,
        vipPrice: 32.00, 
        url: "/flexible-hold-gel/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/05/FLEXIBLE-HOLD-GEL-ecomm-pic.png", 
        shopLink: "/shop/products/flexible-hold-gel-5-0-oz", 
        category: "curls, coils, and waves | frizz | volume | texture | styling",
        newP: false,
    },
    {
        name: "REPLENISH MASQUE", 
        line: "haircare",
        rPrice: 64.00,
        vipPrice: 54.00, 
        url: "/replenish-masque/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/05/REPLENISH-MASQUE-ecomm-pic.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2022/06/replenish-directions.jpg",
        shopLink: "/shop/products/replenish-masque", 
        category: "curls, coils, and waves | dry hair | best sellers | masques & treatments",
        newP: false,
    },
    {
        name: "RESTYLE INSTANT SCULPTING TAFFY", 
        line: "haircare",
        rPrice: 39.00,
        vipPrice: 33.00, 
        url: "/restyle-instant-sculpting-taffy/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/RESTYLE-INSTANT-SCULPTING-TAFFY.png", 
        shopLink: "/shop/products/restyle-sculpting-taffy", 
        category: "curls, coils, and waves | volume | texture | styling",
        newP: false,
    },
    {
        name: "SUPER MOISTURE MASQUE", 
        line: "haircare",
        rPrice: 64.00,
        vipPrice: 54.00, 
        url: "/super-moisture-masque/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/08/SUPER-MOISTURE-MASQUE-ecomm-small.png", 
        shopLink: "/shop/products/super-moisture-masque/", 
        category: "curls, coils, and waves | dry hair | masques & treatments",
        newP: false,
    },
    {
        name: "MONAT SUPER NOURISH™ OIL CRÈME CONDITIONER", 
        line: "haircare",
        rPrice: 52.00,
        vipPrice: 44.00, 
        url: "/super-nourish-oil-creme-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/OIL-CRE%CC%80ME-CONDITIONER.png", 
        shopLink: "/shop/products/monat-super-nourish-oil-creme-conditioner", 
        category: "curls, coils, and waves | dry hair | conditioners",
        newP: false,
    },
    {
        name: "MONAT SUPER NOURISH™ OIL CRÈME SHAMPOO", 
        line: "haircare",
        rPrice: 45.00,
        vipPrice: 38.00, 
        url: "/super-nourish-oil-creme-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/OIL-CRE%CC%80ME-SHAMPOO.png", 
        shopLink: "/shop/products/nourishing-oil-creme-shampoo", 
        category: "curls, coils, and waves | dry hair | shampoos",
        newP: false,
    },
    {
        name: "DAMAGE REPAIR BOND SUPPORT MASQUE", 
        line: "haircare",
        rPrice: 66.00,
        vipPrice: 56.00, 
        url: "/hair-damage-repair-masque/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/09/ADVANCED-HYDRATING-masque_allprod.png", 
        shopLink: "/shop/products/damage-repair-bond-support-masque", 
        category: "damage, breakage, and split ends | masques & treatments",
        newP: false,
    },
    {
        name: "DAMAGE REPAIR BOND SUPPORT SHAMPOO", 
        line: "haircare",
        rPrice: 49.00,
        vipPrice: 42.00, 
        url: "/hair-damage-repair-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/09/ADVANCED-HYDRATING-SHAMPOO-all-prod.png", 
        shopLink: "/shop/products/damage-repair-bond-support-shampoo", 
        category: "damage, breakage, and split ends | shampoos",
        newP: false,
    },
    {
        name: "DAMAGE REPAIR BOND-BUILDING HAIR TREATMENT", 
        line: "haircare",
        rPrice: 51.00,
        vipPrice: 43.00, 
        url: "/hair-damage-repair-treatment/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/09/ADVANCED-HYDRATING-Tratment-all-prod.png", 
        shopLink: "/shop/products/damage-repair-bond-building-treatment", 
        category: "damage, breakage, and split ends | masques & treatments",
        newP: false,
    },
    {
        name: "DAMAGE REPAIR BOND-FORTIFYING HAIR LEAVE-IN CRÈME", 
        line: "haircare",
        rPrice: 43.00,
        vipPrice: 37.00, 
        url: "/hair-damage-repair/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/09/ADVANCED-HYDRATING-creme_all-prod.png", 
        shopLink: "/shop/products/damage-repair-bond-fortifying-hair-leave-in-creme", 
        category: "damage, breakage, and split ends | leave-in care",
        newP: false,
    },
    {
        name: "HAIR TRANSFORMATION MASQUE WITH REJUVENIQE S™", 
        line: "haircare",
        rPrice: 72.00,
        vipPrice: 61.00, 
        url: "/hair-transformation-masque/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/HAIR-TRANSFORMATION-MASQUE.png", 
        shopLink: "/shop/products/hair-transformation-masque", 
        category: "damage, breakage, and split ends | masques & treatments",
        newP: false,
    },
    {
        name: "MONAT JUNIOR GENTLE SHAMPOO", 
        line: "haircare",
        rPrice: 30.00,
        vipPrice: 26.00, 
        url: "/monat-junior-gentle-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/MONAT-JUNIOR-GENTLE-SHAMPOO.png", 
        shopLink: "/shop/products/junior-gentle-shampoo-8-oz", 
        category: "damage, breakage & split ends | kids",
        newP: false,
    },
    {
        name: "MONAT JUNIOR GENTLE CONDITIONER", 
        line: "haircare",
        rPrice: 30.00,
        vipPrice: 26.00, 
        url: "/monat-junior-gentle-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/09/MONAT-JUNIOR-GENTLE-CONDITIONER-ecomm-hair.png", 
        shopLink: "/shop/products/junior-gentle-conditioner-6-oz", 
        category: "damage, breakage, and split ends | kids",
        newP: false,
    },
    {
        name: "MONAT JUNIOR GENTLE DETANGLER", 
        line: "haircare",
        rPrice: 33.00,
        vipPrice: 28.00, 
        url: "/junior-gentle-detangler/",
        img: "https://monatglobal.com/wp-content/uploads/2021/07/MONAT-JUNIOR-GENTLE-DETANGLER.png", 
        shopLink: "/shop/products/junior-gentle-detangler-spray-6-oz", 
        category: "damage, breakage, and split ends | dry hair | kids",
        newP: false,
    },
    {
        name: "UNKNOT DETANGLER", 
        line: "haircare",
        rPrice: 41.00,
        vipPrice: 35.00, 
        url: "/unknot-detangler/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/UNKNOT-DETANGLER.png", 
        shopLink: "/shop/products/unknot-detangler", 
        category: "damage, breakage, and split ends | dry hair | leave-in care",
        newP: false,
    },
    {
        name: "IR CLINICAL™ THICKENING CONDITIONER", 
        line: "haircare",
        rPrice: 57.00,
        vipPrice: 48.00, 
        url: "/intense-repair-treatment-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/08/IR-CLINICAL-THICKENING-CONDITIONER_ecomm-2022.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2022/08/IR-Clinical-Conditioner-directions.jpg",
        shopLink: "/shop/products/ir-clinical-thickening-conditioner-6000002977", 
        category: "densifying | scalp Care | thinning | best sellers | conditioners",
        newP: false,
    },
    {
        name: "IR CLINICAL™ THICKENING SHAMPOO", 
        line: "haircare",
        rPrice: 51.00,
        vipPrice: 43.00, 
        url: "/irt-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/08/IR-CLINICAL-THICKENING-SHAMPOO_ecomm-2022.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2022/08/IR-Clinical-Conditioner-directions.jpg",
        shopLink: "/shop/products/ir-clinical-thickening-shampoo-6000002975", 
        category: "densifying | scalp Care | thinning | best sellers | shampoos",
        newP: false,
    },
    {
        name: "IR CLINICAL™ HAIR THINNING DEFENSE", 
        line: "haircare",
        rPrice: 82.00,
        vipPrice: 70.00, 
        url: "/intense-repair-serum/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/08/IR-CLINICAL-HAIR-THINNING-DEFENSE-SERUM_ecomm-2022.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/ir-clinical-hair-thinning-defense", 
        category: "densifying | scalp Care | thinning | best sellers | leave-in care",
        newP: false,
    },
    {
        name: "LASH & BROW ENHANCING SERUM BY MONAT™️", 
        line: "haircare",
        rPrice: 71.00,
        vipPrice: 60.00, 
        url: "/lash-brow-enhancing-serum/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/09/LASH-BROW-ENHANCING-SERUM_ecomm-hair.png", 
        shopLink: "/shop/products/eye-wonder-eyelash-enhancer-10ml", 
        category: "densifying | thinning | volume | specialties",
        newP: false,
    },
    {
        name: "MONAT BLACK SHAMPOO + CONDITIONER", 
        line: "haircare",
        rPrice: 51.00,
        vipPrice: 43.00, 
        url: "/monat-black-shampoo-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/05/BLACK-2-in-1-Shampoo-Conditioner-ecomm-pic-.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/black-men-s-2-in-1", 
        category: "densifying | oily hair and scalp | best sellers | shampoos | conditioners | men",
        newP: false,
    },
    {
        name: "MONAT FOR MEN™ MATTE STYLING CLAY", 
        line: "haircare",
        rPrice: 35.00,
        vipPrice: 30.00, 
        url: "/men-styling-clay/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/02/MONAT-FOR-MEN-Matte-Styling-Clay-ecomm-2022.png", 
        shopLink: "/shop/products/monat-for-men-matte-styling-clay", 
        category: "densifying | texture | styling | men",
        newP: false,
    },
    {
        name: "ADVANCED HYDRATING CONDITIONER", 
        line: "haircare",
        rPrice: 57.00,
        vipPrice: 48.00, 
        url: "/advanced-hydrating-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/ADVANCED-HYDRATING-CONDITIONER.png", 
        shopLink: "/shop/products/advanced-hydrating-conditioner", 
        category: "dry hair | conditioners",
        newP: false,
    },
    {
        name: "ADVANCED HYDRATING IN-SHOWER MASQUE", 
        line: "haircare",
        rPrice: 64.00,
        vipPrice: 54.00, 
        url: "/in-shower-hair-masque/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/ADVANCED-HYDRATING-IN-SHOWER-MASQUE.png", 
        shopLink: "/shop/products/advanced-hydrating-in-shower-masque", 
        category: "dry hair | masques & treatments",
        newP: false,
    },
    {
        name: "ADVANCED HYDRATING SHAMPOO WITH REJUVENIQE S™", 
        line: "haircare",
        rPrice: 50.00,
        vipPrice: 43.00, 
        url: "/advanced-hydrating-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/ADVANCED-HYDRATING-SHAMPOO.png", 
        shopLink: "/shop/products/advanced-hydrating-shampoo", 
        category: "dry hair | shampoos",
        newP: false,
    },
    {
        name: "RENEW SHAMPOO", 
        line: "haircare",
        rPrice: 49.00,
        vipPrice: 42.00, 
        url: "/renew-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/05/RENEW-SHAMPOO-ecomm-pic.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/renew-shampoo", 
        category: "dry hair | shine | best sellers | shampoos",
        newP: false,
    },
    {
        name: "RESTORE LEAVE-IN CONDITIONER", 
        line: "haircare",
        rPrice: 44.00,
        vipPrice: 37.00, 
        url: "/restore-leave-in-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/05/RESTORE-LEAVE-IN-CONDITIONER-ecomm-pic.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/restore-leave-in-conditioner", 
        category: "dry hair | best sellers | leave-in care",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ AIR DRY CREAM", 
        line: "haircare",
        rPrice: 46.00,
        vipPrice: 39.00, 
        url: "/air-dry-cream/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/AIR-DRY-CREAM.png", 
        shopLink: "/shop/products/air-dry-cream-6-oz", 
        category: "curls, coils & waves | dry hair | frizz | shine | styling",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ BLOW OUT CREAM INFUSED WITH REJUVENIQE™", 
        line: "haircare",
        rPrice: 46.00,
        vipPrice: 39.00, 
        url: "/blow-out-cream/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/BLOW-OUT-CREAM-1.png", 
        shopLink: "/shop/products/blow-out-cream", 
        category: "frizz | thermal protection | styling",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ FLEX CONTROL HAIRSPRAY", 
        line: "haircare",
        rPrice: 50.00,
        vipPrice: 43.00, 
        url: "/flex-control-hairspray/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/STUDIO-ONE-FLEX-CONTROL-HAIRSPRAY.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/flex-control-hairspray", 
        category: "frizz | volume | texture | best sellers | styling",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ FRIZZ-FIX SMOOTHING HAIR PRIMER", 
        line: "haircare",
        rPrice: 41.00,
        vipPrice: 35.00, 
        url: "/frizz-fix-smoothing-hair-primer/", 
        img: "https://monatglobal.com/wp-content/uploads/2018/12/studio-one-frizz-fix-1.png", 
        shopLink: "/shop/products/frizz-fix-smoothing-primer-4-3-oz", 
        category: "dry hair | frizz | shine | styling | leave-in care",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ SUPER STRONG HOLD FINISHING HAIRSPRAY", 
        line: "haircare",
        rPrice: 50.00,
        vipPrice: 43.00, 
        url: "/strong-hold-hairspray/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/STUDIO-ONE-STRONG-FLEXI-HOLD.png", 
        shopLink: "/shop/products/monat-studio-one-super-strong-hold-finishing-hairspray-6000001306", 
        category: "frizz | volume | texture | styling",
        newP: false,
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ BLOW OUT SPRAY", 
        line: "haircare",
        rPrice: 46.00,
        vipPrice: 39.00, 
        url: "/smoothing-anti-frizz-spray/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/smoothing-anti-frizz-blow-out-spray_all-prod-.png", 
        shopLink: "/shop/products/smoothing-anti-frizz-blow-out-spray", 
        category: "frizz | thermal protection | shine | styling",
        newP: false,
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ DEEP INTENSIVE TREATMENT", 
        line: "haircare",
        rPrice: 57.00,
        vipPrice: 48.00, 
        url: " /smoothing-anti-frizz-treatment/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/smoothing-anti-flizz-deep-treatment_all-prod-.png", 
        shopLink: "/shop/products/smoothing-anti-frizz-deep-intensive-treatment", 
        category: "frizz | shine | conditioners",
        newP: false,
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ DEEP CONDITIONER", 
        line: "haircare",
        rPrice: 57.00,
        vipPrice: 48.00, 
        url: "/smoothing-deep-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/smoothing-anti-frizz-deep-conditioner_all-prod-.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/smoothing-anti-frizz-deep-conditioner", 
        category: "frizz | shine | best sellers | conditioners",
        newP: false,
    },
    {
        name: "SMOOTHING ANTI-FRIZZ™ SHAMPOO", 
        line: "haircare",
        rPrice: 50.00,
        vipPrice: 43.00, 
        url: "/smoothing-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/smoothing-anti-frizz-shampoo-all-prod.png", 
        shopLink: "/shop/products/smoothing-anti-frizz-shampoo", 
        category: "frizz | shine | shampoos",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ THE CHAMP™ CONDITIONING DRY SHAMPOO INFUSED WITH REJUVENIQE™", 
        line: "haircare",
        rPrice: 46.00,
        vipPrice: 39.00, 
        url: "/conditioning-dry-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/CONDITIONING-DRY-SHAMPOO.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/the-champ-conditioning-dry-shampoo", 
        category: "oily hair and scalp | volume | texture | best sellers | shampoos | styling",
        newP: false,
    },
    {
        name: "PURIFYING VINEGAR RINSE", 
        line: "haircare",
        rPrice: 42.00,
        vipPrice: 36.00, 
        url: "/vinegar-rinse/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/04/Purifying-Vinegar-Rinset-all-prod.png", 
        shopLink: "/shop/products/purifying-vinegar-rinse-6000001827", 
        category: "oily hair and scalp | scalp Care | masques & treatments",
        newP: false,
    },
    {
        name: "PURIFYING VINEGAR SHAMPOO", 
        line: "haircare",
        rPrice: 50.00,
        vipPrice: 43.00, 
        url: "/vinegar-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/PURIFYING-VINEGAR-SHAMPOO.png", 
        shopLink: "/shop/products/purifying-vinegar-shampoo", 
        category: "oily hair and scalp | scalp care | shampoos",
        newP: false,
    },
    {
        name: "SCALP PURIFYING SCRUB", 
        line: "haircare",
        rPrice: 61.00,
        vipPrice: 52.00, 
        url: "/vinegar-scrub-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/SCALP-PURIFYING-SCRUB.png", 
        shopLink: "/shop/products/scalp-purifying-scrub", 
        category: "oily hair and scalp | scalp care | masques & treatments",
        newP: false,
    },
    {
        name: "SOOTHING MICELLAR SHAMPOO", 
        line: "haircare",
        rPrice: 30.00,
        vipPrice: 26.00, 
        url: "/soothing-micellar-shampoo/", 
        img: "https://monatglobal.com/ca/wp-content/uploads/sites/5/2021/04/soothing-micellar-shampoo_876x1000-800x913.png", 
        shopLink: "/shop/products/soothing-micellar-shampoo", 
        category: "oily hair and scalp | scalp care | shampoos",
        newP: false,
    },
    {
        name: "MONAT FOR MEN™ MOLDING SHINE POMADE", 
        line: "haircare",
        rPrice: 35.00,
        vipPrice: 30.00, 
        url: "/men-hair-molding-pomade/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/02/monat-men-molding-shine-pomade-ecomm-2022.png", 
        shopLink: "/shop/products/men-molding-shine-pomade", 
        category: "frizz | shine | styling | men",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ GLOSSY SHINE MIST", 
        line: "haircare",
        rPrice: 39.00,
        vipPrice: 33.00, 
        url: "/hair-glossy-shine-mist/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/GLOSSY-SHINE-MIST.png", 
        shopLink: "/shop/products/monat-studio-one-glossy-shine-mist", 
        category: "shine | styling",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ DRY TEXTURIZING SPRAY INFUSED WITH REJUVENIQE™", 
        line: "haircare",
        rPrice: 41.00,
        vipPrice: 35.00, 
        url: "/dry-texturizing-spray/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/05/DRY-TEXTURIZING-SPRAY-ecomm-pic.png", 
        shopLink: "/shop/products/dry-texturizing-spray-6000000418", 
        category: "thinning | volume | texture | styling",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ HEAT PROTECTANT SPRAY", 
        line: "haircare",
        rPrice: 47.00,
        vipPrice: 40.00, 
        url: "/hair-thermal-protectant/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/HEAT-PROTECTANT-SPRAY.png", 
        shopLink: "/shop/products/monat-studio-one-heat-protectant-spray", 
        category: "thermal protection | styling",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ THE MOXIE MAGNIFYING MOUSSE", 
        line: "haircare",
        rPrice: 49.00,
        vipPrice: 42.00, 
        url: "/moxie-magnifying-mousse/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/THE-MOXIE-MAGNIFYING-MOUSSE.png", 
        shopLink: "/shop/products/monat-studio-one-the-moxie-mouse", 
        category: "curls, coils & waves | volume | texture | styling",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ VOLUME & LIFT SPRAY", 
        line: "haircare",
        rPrice: 43.00,
        vipPrice: 37.00, 
        url: "/volume-spray/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/VOLUME-LIFT-SPRAY.png", 
        shopLink: "/shop/products/new-volume-lift-spray", 
        category: "volume | styling",
        newP: false,
    },
    {
        name: "VOLUMIZING REVITALIZE™ CONDITIONER", 
        line: "haircare",
        rPrice: 57.00,
        vipPrice: 48.00, 
        url: "/volumizing-revitalize-conditioner/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/VOLUMIZING-REVITALIZE%E2%84%A2-CONDITIONER.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/revitalize-conditioner",
        category: "volume | shine | best sellers | conditioners",
        newP: false,
    },
    {
        name: "VOLUMIZING REVIVE™ SHAMPOO", 
        line: "haircare",
        rPrice: 49.00,
        vipPrice: 42.00, 
        url: "/volumizing-revive-shampoo/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/VOLUMIZING-REVIVE%E2%84%A2-SHAMPOO.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/revive-shampoo", 
        category: "volume | shine | best sellers | shampoos",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ WAVE SPRAY", 
        line: "haircare",
        rPrice: 36.00,
        vipPrice: 31.00, 
        url: "/wave-spray/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/07/studio-one-wave-spray_876x1000.png", 
        shopLink: "https://corp.mymonat.com/shop/products/wave-spray-product?taxon_id=21", 
        category: "styling",
        newP: false,
    },
    {
        name: "MONAT STUDIO ONE™ THERMAL PROTECT STYLING SHIELD", 
        line: "haircare",
        rPrice: 41.00,
        vipPrice: 35.00, 
        url: "/thermal-protect-styling-shield/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/09/THERMAL-PROTECT-STYLING-SHIELD-ecomm-hair.png", 
        shopLink: "/shop/products/thermal-protect-styling-shield", 
        category: "styling",
        newP: false,
    },
    
    
    





    {
        name: "TRIPLE TOUCH 3-IN-1 CURLING WAND", 
        line: "haircare",
        rPrice: 97.00,
        vipPrice: 80.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2023/04/3-In-1-Curling-Wand_ecomm-.png", 
        shopLink: "/shop/products/3-in-1-interchang-curl-wand-3000000465", 
        category: "tools",
        newP: false,
    },
    {
        name: "MONAT ENDLESS CURLS 3-IN-1 INTERCHANGEABLE STYLING WAND", 
        line: "haircare",
        rPrice: 97.00,
        vipPrice: 80.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2023/04/ENDLESS-CURLS-ecomm-.png", 
        shopLink: "/shop/products/endless-curls-interchangeable-styling-wand-3000000633", 
        category: "tools",
        newP: false,
    },
    {
        name: "PERFECT TOUCH MEN’S HANDHELD BRUSH DRYER", 
        line: "haircare",
        rPrice: 83.00,
        vipPrice: 70.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2023/04/Mens-Handheld-Brush-Dryer_ecomm.png", 
        shopLink: "/shop/products/men-s-grooming-blow-dryer-3000000468", 
        category: "tools",
        newP: false,
    },
    {
        name: "ONE-STEP WONDER INTERCHANGEABLE HOT AIR BRUSH", 
        line: "haircare",
        rPrice: 97.00,
        vipPrice: 80.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2023/04/One-Step-Wonder-Hot-Air-Brush_ecomm-.png", 
        shopLink: "/shop/products/one-step-wonder-interchangeable-hot-air-brush-3000000649", 
        category: "tools",
        newP: false,
    },
    {
        name: "BODY & STYLE INTERCHANGEABLE THERMAL BLOWOUT BRUSH", 
        line: "haircare",
        rPrice: 97.00,
        vipPrice: 80.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2023/04/Thermal-Brush_ecomm.png", 
        shopLink: "/shop/products/perfect-blowout-interchangeable-thermal-brush-3000000466", 
        category: "tools",
        newP: false,
    },
    {
        name: "MONAT VA-VA-VOLUME HAIR LIFTER", 
        line: "haircare",
        rPrice: 83.00,
        vipPrice: 70.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2023/04/Va-Va-Volume-ecomm-1.png", 
        shopLink: "/shop/products/va-va-volume-hair-lifter-3000000635", 
        category: "tools",
        newP: false,
    },




    
    
    
    
    
    
    
    {
        name: "MONAT BE CLARIFIED™ SYSTEM", 
        line: "skincare",
        rPrice: 192.00,
        vipPrice: 163.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2023/03/BE-CLARIFIED-SYSTEM_ecomm-min.png", 
        shopLink: "/shop/products/be-clarified-acne-system-6000004246", 
        use: "For Acne & Blemish Prone Skin",
        discount: "EXTRA 20% OFF WITH PURCHASE+&trade;",
        category: "systems | acne",
        newP: true,
    },
    {
        name: "BE PURIFIED™ SYSTEM", 
        line: "skincare",
        rPrice: 231.00,
        vipPrice: 196.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/BE-PURIFIED-SYSTEM_ecomm.png", 
        shopLink: "/shop/products/be-purified-routine", 
        use: "FOR OILY SKIN&nbsp;TYPES",
        discount: "EXTRA 20% OFF WITH PURCHASE+&trade;",
        category: "systems",
        newP: false,
    },
    {
        name: "BE BALANCED™ System", 
        line: "skincare",
        rPrice: 321.00,
        vipPrice: 273.00, 
        url: "/be-balanced-routine/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/be-balanced-routine-skincare.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/be-balanced-routine", 
        use: "FOR NORMAL / COMBINATION&nbsp;SKIN",
        discount: "EXTRA 25% OFF WITH PURCHASE+&trade;",
        category: "systems | best sellers | routines | moisturizers | cleansers & scrubs",
        newP: false,
    },
    {
        name: "BE GENTLE™ System", 
        line: "skincare",
        rPrice: 321.00,
        vipPrice: 273.00, 
        url: "/be-gentle-routine/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/be-gentle-routine-1.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/be-gentle-routine", 
        use: "FOR DRY / SENSITIVE&nbsp;SKIN",
        discount: "EXTRA 25% OFF WITH PURCHASE+&trade;",
        category: "systems | sensitive skin | best sellers | routines | moisturizers | cleansers & scrubs",
        newP: false,
    },
    {
        name: "MONAT BE CLARIFIED™ ACNE GEL-CREAM CLEANSER", 
        line: "skincare",
        rPrice: 53.00,
        vipPrice: 45.00, 
        url: "/acne-gel-cleanser/", 
        img: "https://monatglobal.com/wp-content/uploads/2023/03/be-clarified-Acne-Gel-Cream-Cleanser-all-products.png", 
        shopLink: "/shop/products/be-clarified-acne-gel-cream-cleanser/", 
        category: "acne | oil control | pores | prevention and protection | sensitive skin | routines | cleansers & scrubs",
        newP: true,
    },
    {
        name: "MAKEUP VANISHING BALM™", 
        line: "skincare",
        rPrice: 67.00,
        vipPrice: 57.00, 
        url: "/makeup-vanishing-balm/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/06/Makeup-Vanishing-Balm_web_.png", 
        shopLink: "/shop/products/makeup-vanishing-balm/", 
        category: "sensitive skin | cleansers & scrubs",
        newP: false,
    },
    {
        name: "BE GENTLE™ CREAMY CLEANSER", 
        line: "skincare",
        rPrice: 53.00,
        vipPrice: 45.00, 
        url: "/creamy-cleanser/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/monat-Be-Gentle-Cleanser-Skincare-1.png", 
        shopLink: "/shop/products/creamy-cleanser", 
        category: "dryness & dehydration | sensitive skin | cleansers & scrubs",
        newP: false,
    },
    {
        name: "BE BALANCED™ FOAMY CLEANSER", 
        line: "skincare",
        rPrice: 53.00,
        vipPrice: 45.00, 
        url: "/foamy-cleanser/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/be-balanced-foamy-cleanser-.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/be-balanced-foamy-cleanser", 
        category: "dryness & dehydration | best sellers | cleansers & scrubs",
        newP: false,
    },
    {
        name: "BE PURIFIED™ CLARIFYING CLEANSER", 
        line: "skincare",
        rPrice: 53.00,
        vipPrice: 45.00,
        url: "/skin-clarifying-cleanser/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/02/be-pcc.png", 
        shopLink: "/shop/products/be-purified-clarifying-cleanser", 
        category: "oil control | pores | cleansers & scrubs",
        newP: false,
    },
    {
        name: "BERRY REFINED SCRUB™", 
        line: "skincare",
        rPrice: 65.00,
        vipPrice: 55.00, 
        url: "/refined-skin-scrub/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/berry-refined-scrub.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/berry-refined-scrub", 
        category: "dark spots | dullness | oil control | pores | uneven tone & texture | best sellers | cleansers & scrubs | serums, treatments, and masks",
        newP: false,
    },
    {
        name: "BE PURIFIED™ COLD CHARCOAL MASK", 
        line: "skincare",
        rPrice: 44.00,
        vipPrice: 37.00, 
        url: "/charcoal-mask/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/02/be-pcharcoal-1.png", 
        shopLink: "/shop/products/be-purified-cold-charcoal-mask", 
        category: "oil control | pores | serums, treatments, and masks",
        newP: false,
    },
    {
        name: "MONAT BE CLARIFIED™ BLEMISH CARE TONER", 
        line: "skincare",
        rPrice: 46.00,
        vipPrice: 39.00, 
        url: "/acne-blemish-toner/", 
        img: "https://monatglobal.com/wp-content/uploads/2023/03/Be-Clarified-Blemish-Care-Toner-all-products.png", 
        shopLink: "/shop/products/be-clarified-blemish-care-toner-6000002764/", 
        category: "acne | dullness | oil control | pores | prevention and protection | sensitive skin | routines | essence & toners",
        newP: true,
    },
    {
        name: "SKIN REVITALIZING ESSENCE™", 
        line: "skincare",
        rPrice: 53.00,
        vipPrice: 45.00, 
        url: "/skin-revitalizing/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/sking-revitalizing-essence.png", 
        shopLink: "/shop/products/skin-revitalizing-essence", 
        category: "dullness | dryness & dehydration | fine lines & wrinkles | oil control | sensitive skin | essence & toners",
        newP: false,
    },
    {
        name: "MONAT BE CLARIFIED™ SPOT TREATMENT", 
        line: "skincare",
        rPrice: 35.00,
        vipPrice: 30.00, 
        url: "/acne-spot-treatment/", 
        img: "https://monatglobal.com/wp-content/uploads/2023/03/spot-treatment-all-products.png", 
        shopLink: "/shop/products/be-clarified-spot-treatment-6000002766/", 
        category: "acne",
        newP: true,
    },
    {
        name: "C. RADIANCE™ ILLUMINATING SERUM", 
        line: "skincare",
        rPrice: 104.00,
        vipPrice: 88.00, 
        url: "/skincare-c-radiance/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/11/c-radiance.png", 
        shopLink: "/shop/products/c-radiance-illuminating-serum", 
        category: "dark spots | dullness | uneven tone & texture | serums, treatments, and masks",
        newP: false,
    },
    {
        name: "REWIND™ AGE CONTROL NECTAR", 
        line: "skincare",
        rPrice: 134.00,
        vipPrice: 114.00, 
        url: "/age-control-nectar/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/rewind-age-control-nectar-1.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/rewind-age-control-nectar", 
        category: "dryness & dehydration | fine lines & wrinkles | prevention and protection | sensitive skin | best sellers | serums, treatments, and masks",
        newP: false,
    },
    {
        name: "BOTANIC BAKUCHIOL VEGAN RETINOL ALTERNATIVE LOTION", 
        line: "skincare",
        rPrice: 100.00,
        vipPrice: 85.00, 
        url: "/bakuchiol/", 
        img: "https://monatglobal.com/wp-content/uploads/2020/11/bbvr.png", 
        shopLink: "/shop/products/botanic-bakuchiol", 
        category: "dark spots | dullness | sensitive skin | uneven tone & texture",
        newP: false,
    },
    {
        name: "EYE SMOOTH™", 
        line: "skincare",
        rPrice: 89.00,
        vipPrice: 76.00, 
        url: "/eye-smooth/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/eye-smooth-nourishing-eye-cream.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/eye-smooth", 
        category: "eye care | best sellers | serums, treatments, and masks",
        newP: false,
    },
    {
        name: "30 SECOND MIRACLE™ INSTANT PERFECTOR", 
        line: "skincare",
        rPrice: 90.00,
        vipPrice: 77.00, 
        url: "/skincare-perfector/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/11/30-second-miracle.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/30-second-miracle-instant-eye-protector", 
        category: "eye care | fine lines & wrinkles | best sellers | serums, treatments, and masks",
        newP: false,
    },
    {
        name: "HYDRATION BOOSTER™ HYALURONIC SERUM PLUS", 
        line: "skincare",
        rPrice: 81.00,
        vipPrice: 69.00, 
        url: "/hyaluronic-serum/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/Hydration-Booster-Hyaluronic-Serum-Plus_ecomm.png", 
        shopLink: "/shop/products/hydration-booster-serum", 
        category: "dullness | dryness & dehydration | fine lines & wrinkles | prevention and protection | sensitive skin",
        newP: false,
    },
    {
        name: "MONAT BE CLARIFIED™ ACNE-CLEARING MOISTURIZER", 
        line: "skincare",
        rPrice: 58.00,
        vipPrice: 49.00, 
        url: "/acne-clearing-moisturizer/", 
        img: "https://monatglobal.com/wp-content/uploads/2023/03/Be-Clarified-Acne-Clearing-Moisturizer-all-products.png", 
        shopLink: "/shop/products/be-clarified-acne-clearing-moisturizer-6000002765", 
        category: "acne | dryness & dehydration | oil control | pores | prevention and protection | sensitive skin | routines | moisturizers",
        newP: true,
    },
    // {
    //     name: "MONAT BB CREAM SPF 40™ BROAD-SPECTRUM MOISTURIZER", 
    //     line: "skincare",
    //     rPrice: 52.00,
    //     vipPrice: 44.00, 
    //     url: "/bb-creme/#sand", 
    //     img: "https://monatglobal.com/wp-content/uploads/2022/08/bb-cream-sand-ecomm.png", 
    //     shopLink: "/shop/products/monat-bb-cream-sand-us-6000002474", 
    //     category: "dryness & dehydration | prevention and protection | sensitive skin | uneven tone & texture | best sellers | specialties",
    //     newP: false,
    // },
    {
        name: "BE GENTLE™ NOURISHING MOISTURIZER", 
        line: "skincare",
        rPrice: 81.00,
        vipPrice: 69.00, 
        url: "/nourishing-moisturizer/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/be-gentle-nurishing-moisturizer-1-1.png", 
        shopLink: "/shop/products/nourishing-moisturizer", 
        category: "dryness & dehydration | fine lines & wrinkles | sensitive skin | moisturizers",
        newP: false,
    },
    {
        name: "BE BALANCED™ LIGHTWEIGHT MOISTURIZER", 
        line: "skincare",
        rPrice: 81.00,
        vipPrice: 69.00,
        url: "/lightweight-moisturizer/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/09/be-balanced-lightweight-moisturizer.png", 
        shopLink: "/shop/products/lightweight-moisturizer/", 
        category: "fine lines & wrinkles | moisturizers",
        newP: false,
    },
    {
        name: "BE PURIFIED™ OIL-FREE MOISTURIZER", 
        line: "skincare",
        rPrice: 81.00,
        vipPrice: 69.00,
        url: "/skin-oil-free-moisturizer/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/02/be-pmois-1.png", 
        shopLink: "/shop/products/be-purified-oil-free-moisturizer", 
        category: "fine lines & wrinkles | oil control | pores | moisturizers",
        newP: false,
    },
    {
        name: "NIGHT HAVEN™ OVERNIGHT AGE CONTROL CREAM", 
        line: "skincare",
        rPrice: 94.00,
        vipPrice: 80.00, 
        url: "/skincare-night-age-control-cream/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/11/night-haven.png", 
        shopLink: "/shop/products/night-heaven-overnight-age-control-cream", 
        category: "dryness & dehydration | fine lines & wrinkles | prevention and protection | sensitive skin | moisturizers",
        newP: false,
    },
    {
        name: "SUN VEIL™ DAILY MINERAL PROTECTION SPF 30", 
        line: "skincare",
        rPrice: 42.00,
        vipPrice: 36.00, 
        url: "/sun-veil-sunscreen/", 
        img: "https://monatglobal.com/wp-content/uploads/2020/08/sv-prod-1.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/sun-veil-daily-mineral-protection", 
        category: "dark spots | dryness & dehydration | prevention and protection | uneven tone & texture | best sellers | specialties",
        newP: false,
    },
    {
        name: "HYDRATE & REFRESH™ FACE MIST", 
        line: "skincare",
        rPrice: 46.00,
        vipPrice: 39.00, 
        url: "/face-mist/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/MONAT_HYDRATE-REFRESH_ecomm-optimized.png", 
        shopLink: "/shop/products/hydrate-refresh-face-mist", 
        category: "sensitive skin",
        newP: false,
    },
    {
        name: "BRIGHTEN AND RECOVER", 
        line: "skincare",
        rPrice: 186.00,
        vipPrice: 158.00, 
        url: "/skincare-duo/", 
        img: "https://monatglobal.com/wp-content/uploads/2019/11/Brighten-Recover-Duo-1.png", 
        shopLink: "/shop/products/brighten-recover-duo", 
        category: "routines",
        newP: false,
    },
    {
        name: "MONAT BODY CARE™ MOISTURIZE & REPLENISH BODY WASH", 
        line: "skincare",
        rPrice: 45.00,
        vipPrice: 38.00, 
        url: "/body-wash/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/Moistturizw-replenish-body-wash-ecomm.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/monat-body-care-moisture-replenish-body-wash-6000001819", 
        category: "dryness & dehydration | best sellers | body care | cleansers & scrubs",
        newP: false,
    },
    {
        name: "MONAT BODY CARE™ EXFOLIATE & REFINE BODY POLISH", 
        line: "skincare",
        rPrice: 52.00,
        vipPrice: 44.00, 
        url: "/body-exfoliator/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/exfoliate-refine-body-polish-ecomm.png", 
        shopLink: "/shop/products/monat-body-care-exfoliate-refine-body-polish-6000001821", 
        category: "uneven tone & texture | body care | cleansers & scrubs",
        newP: false,
    },
    {
        name: "MONAT BODY CARE™ HYDRATE & REPAIR BODY SERUM", 
        line: "skincare",
        rPrice: 67.00,
        vipPrice: 57.00, 
        url: "/body-hydrate-serum/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/HYDRATE-REPAIR-BODY-SERUM-ecomm.png", 
        shopLink: "/shop/products/monat-body-care-hydrate-repair-serum-6000001822", 
        category: "dullness | dryness & dehydration | prevention and protection | body care | serums, treatments, and masks",
        newP: false,
    },
    {
        name: "MONAT BODY CARE™ SMOOTH & RENEW BODY LOTION", 
        line: "skincare",
        rPrice: 58.00,
        vipPrice: 49.00, 
        url: "/body-lotion/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/SMOOTH-RENEW-BODY-LOTION-ecomm-1.png", 
        shopLink: "/shop/products/monat-body-care-smooth-renew-body-lotion-6000001820", 
        category: "dryness & dehydration | prevention and protection | body care | moisturizers",
        newP: false,
    },
    {
        name: "MONAT BODY CARE™ SILKY & SOOTHING HAND CREAM", 
        line: "skincare",
        rPrice: 29.00,
        vipPrice: 25.00, 
        url: "/hand-cream/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/SILKY-SOOTHING-HAND-CREAM-ecomm.png", 
        shopLink: "/shop/products/monat-body-care-silky-soothing-hand-cream-6000001963", 
        category: "dryness & dehydration | prevention and protection | body care | moisturizers",
        newP: false,
    },
    {
        name: "MONAT FOR MEN™ ESSENTIAL FACE WASH", 
        line: "skincare",
        rPrice: 35.00,
        vipPrice: 30.00, 
        url: "/men-face-wash/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/02/MB-ESSENTIAL-FACE-WASH-401x500.png", 
        shopLink: "/shop/products/essential-face-wash", 
        category: "oil control | men skincare | cleansers & scrubs",
        newP: false,
    },
    {
        name: "MONAT FOR MEN™ ESSENTIAL FACE SCRUB", 
        line: "skincare",
        rPrice: 37.00,
        vipPrice: 31.00, 
        url: "/men-face-scrub/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/02/MB-ESSENTIAL-FACE-SCRUB-401x500.png", 
        shopLink: "/shop/products/essential-face-scrub", 
        category: "dullness | oil control | uneven tone & texture | men skincare | cleansers & scrubs",
        newP: false,
    },
    {
        name: "MONAT FOR MEN™ ESSENTIAL FACE MOISTURIZER", 
        line: "skincare",
        rPrice: 45.00,
        vipPrice: 38.00, 
        url: "/men-face-moisturizer/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/01/MB-ESSENTIAL-FACE-MOISTURIZER-1.7oz_eccom-1.png", 
        shopLink: "/shop/products/essential-face-moisturizer", 
        category: "fine lines & wrinkles | oil control | men skincare | moisturizers",
        newP: false,
    },
    {
        name: "MONAT FOR MEN™ ESSENTIAL SHAVING CREAM", 
        line: "skincare",
        rPrice: 29.00,
        vipPrice: 25.00, 
        url: "/men-shaving-cream/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/10/essential-shaving-cream.png", 
        shopLink: "/shop/products/men-essential-shaving-cream", 
        category: "men skincare | specialties",
        newP: false,
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    {
        name: "MONAT VEGAN OMEGA", 
        line: "wellness",
        rPrice: 49.00,
        vipPrice: 42.00, 
        url: "/vegan-omega/", 
        img: "https://monatglobal.com/wp-content/uploads/2023/01/vegan-omega-all-prod-ecomm.png", 
        shopLink: "/shop/products/monat-vegan-omega-6000001751", 
        category: "cognitive health | brain health",
        newP: false,
    },
    {
        name: "WELLNESS STARTER SYSTEM", 
        line: "wellness",
        rPrice: 207.00,
        vipPrice: 173.00, 
        url: "", 
        img: "https://monatglobal.com/wp-content/uploads/2022/06/WELLNESS-STARTER-SYSTEM-ecomm.png", 
        shopLink: "/shop/products/wellness-starter-system-6000003042", 
        use: "beauty from within",
        discount: "EXTRA 20% OFF WITH PURCHASE+&trade;",
        category: "systems",
        newP: false,
    },
    {
        name: "MONAT APPLE CIDER VINEGAR GUMMIES", 
        line: "wellness",
        rPrice: 46.00,
        vipPrice: 39.00, 
        url: "/apple-cider-vinegar-gummies/", 
        img: "https://monatglobal.com/wp-content/uploads/2022/04/Apple-Cider-Vinegar-Gummies-comm-1.png", 
        shopLink: "/shop/products/monat-apple-cider-vinegar-gummies-6000002126", 
        category: "focus and productivity | skin, hair, and nail health | beauty from within | brain health",
        newP: false,
    },
    {
        name: "MONAT VEGAN PROTEIN", 
        line: "wellness",
        rPrice: 85.00,
        vipPrice: 72.00, 
        url: "/vegan-protein/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/08/VEGAN-PROTEIN-POWDER-ECOM_-2021.png", 
        shopLink: "/shop/products/monat-vegan-protein", 
        category: "focus and productivity | healthy aging | mood support | sleep support | active | brain health | nutrition",
        newP: false,
    },
    {
        name: "TOTAL GREENS™", 
        line: "wellness",
        rPrice: 65.00,
        vipPrice: 55.00, 
        url: "/total-greens/", 
        img: "https://monatglobal.com/wp-content/uploads/2020/12/total-greens-E-comm.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/total-greens", 
        category: "digestive support | energy support | mood support | brain health | best sellers",
        newP: false,
    },
    {
        name: "COLLAGEN KEY™", 
        line: "wellness",
        rPrice: 69.00,
        vipPrice: 59.00, 
        url: "/collagen/", 
        img: "https://monatglobal.com/wp-content/uploads/2020/12/MONAT-Collagen-key-E-comm-1.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/collagen_key", 
        category: "healthy aging | skin, hair, and nail health | beauty from within | best sellers",
        newP: false,
    },
    {
        name: "MONAT BALANCE™", 
        line: "wellness",
        rPrice: 73.00,
        vipPrice: 62.00,   
        url: "/balance/", 
        img: "https://monatglobal.com/wp-content/uploads/2020/12/Balance-E-comm.png", 
        hoverImg: "https://monatglobal.com/wp-content/uploads/2021/08/grey-image-placeholder.jpg",
        shopLink: "/shop/products/monat-balance", 
        category: "digestive support | immune support | skin, hair, and nail health | beauty from within | brain health | best sellers",
        newP: false,
    },
    {
        name: "MONAT ENERGY™", 
        line: "wellness",
        rPrice: 69.00,
        vipPrice: 59.00, 
        url: "/energy/", 
        img: "https://monatglobal.com/wp-content/uploads/2020/12/Energy-Ecomm-2.png", 
        shopLink: "/shop/products/monat-energy-berry", 
        category: "energy support | focus and productivity | mood support | active | brain health",
        newP: false,
    },
    {
        name: "SLEEP DROPS", 
        line: "wellness",
        rPrice: 69.00,
        vipPrice: 59.00, 
        url: "/sleep-drops/", 
        img: "https://monatglobal.com/wp-content/uploads/2020/12/Sleep-drops-E-comm.png", 
        shopLink: "/shop/products/monat-sleep-drops-6000001060", 
        category: "mood support | sleep support",
        newP: false,
    },
    {
        name: "immune support*", 
        line: "wellness",
        rPrice: 58.00,
        vipPrice: 49.00, 
        url: "/immune-support/", 
        img: "https://monatglobal.com/wp-content/uploads/2021/04/I-s-APR-2021-1.png", 
        shopLink: "/shop/products/monat-immunity-support", 
        category: "immune support | skin, hair, and nail health | nutrition",
        newP: false,
    },





    
    {
        name: "MONAT BB Cream SPF 40™ Broad-Spectrum Moisturizer️", 
        line: "skincare",
        rPrice: 52.00,
        vipPrice: 44.00, 
        url: "/bb-creme/", 
        category: "tones",
        newP: false,
        defaultTone: "sand",
        inputName: "bbCream",
        tones: {
            porcelain: {
                color: "#ecd0b2",
                colorName: "Porcelain – LIGHT",
                shopLink: "https://corp.mymonat.com/shop/products/monat-bb-cream-porcelain-us-6000002470?taxon_id=127",
                ecomm: {
                    img: "https://monatglobal.com/wp-content/uploads/2022/08/bb-cream-porcelain-ecomm.png",
                    alt: "MONAT BB Cream SPF 40™️ Porcelain – LIGHT"
                }
            },
            vanilla: {
                color: "#e6bf9c",
                colorName: "Vanilla – LIGHT",
                shopLink: "https://corp.mymonat.com/shop/products/monat-bb-cream-vanilla-us-6000002471?taxon_id=127", 
                ecomm: {
                    img: "https://monatglobal.com/wp-content/uploads/2022/08/bb-cream-vanilla-ecomm.png",
                    alt: "MONAT BB Cream SPF 40™️ Vanilla – LIGHT"
                }
            },
            cashmere: {
                color: "#ddaf87",
                colorName: "Cashmere – LIGHT",
                shopLink: "https://corp.mymonat.com/shop/products/monat-bb-cream-cashmere-us-6000002472?taxon_id=127",
                ecomm: {
                    img: "https://monatglobal.com/wp-content/uploads/2022/08/bb-cream-cashmere-ecomm.png",
                    alt: "MONAT BB Cream SPF 40™️ Cashmere – LIGHT"
                }
            },
            nude: {
                color: "#dba27e",
                colorName: "Nude – MEDIUM",
                shopLink: "https://corp.mymonat.com/shop/products/monat-bb-cream-nude-us-6000002473?taxon_id=127",
                ecomm: {
                    img: "https://monatglobal.com/wp-content/uploads/2022/08/bb-cream-nude-ecomm.png",
                    alt: "MONAT BB Cream SPF 40™️ Nude – MEDIUM"
                }
            },
            sand: {
                color: "#d3a376",
                colorName: "Sand - MEDIUM",
                shopLink: "https://corp.mymonat.com/shop/products/monat-bb-cream-sand-us-6000002474?taxon_id=127",
                ecomm: {
                    img: "https://monatglobal.com/wp-content/uploads/2022/08/bb-cream-sand-ecomm.png",
                    alt: "MONAT BB Cream SPF 40™️ Sand - MEDIUM"
                }
            },
            toastedAlmond: {
                color: "#d19660",
                colorName: "Toasted Almond - MEDIUM",
                shopLink: "https://corp.mymonat.com/shop/products/monat-bb-cream-toasted-almond-us-6000002475?taxon_id=127",
                ecomm: {
                    img: "https://monatglobal.com/wp-content/uploads/2022/08/bb-cream-toasted-almond-ecomm.png",
                    alt: "MONAT BB Cream SPF 40™️ Toasted Almond - MEDIUM"
                }
            },
            caramel: {
                color: "#c48353",
                colorName: "Caramel - DARK",
                shopLink: "https://corp.mymonat.com/shop/products/monat-bb-cream-caramel-us-6000002641?taxon_id=127",
                ecomm: {
                    img: "https://monatglobal.com/wp-content/uploads/2022/08/bb-cream-caramel-ecomm.png",
                    alt: "MONAT BB Cream SPF 40™️ Caramel - DARK"
                }
            },
            cappuccino: {
                color: "#ac6837",
                colorName: "Cappuccino – DARK",
                shopLink: "https://corp.mymonat.com/shop/products/monat-bb-cream-cappuccino-us-6000002642?taxon_id=127",
                ecomm: {
                    img: "https://monatglobal.com/wp-content/uploads/2022/08/bb-cream-capuccino-ecomm.png",
                    alt: "MONAT BB Cream SPF 40™️ Cappuccino – DARK"
                }
            },
            cedar: {
                color: "#8c4b2f",
                colorName: "Cedar – DARK",
                shopLink: "https://corp.mymonat.com/shop/products/monat-bb-cream-cedar-us-6000002643?taxon_id=127",
                ecomm: {
                    img: "https://monatglobal.com/wp-content/uploads/2022/08/bb-cream-cedar-ecomm.png",
                    alt: "MONAT BB Cream SPF 40™️ Cedar – DARK"
                }
            }
        }
    },
    {
        name: "MONAT Perfecting Translucent Loose Powder™️", 
        line: "skincare",
        rPrice: 58.00,
        vipPrice: 49.00, 
        url: "/loose-powder/", 
        category: "tones",
        newP: false,
        defaultTone: "translucentShade",
        inputName: "loosePowder",
        tones: {
            translucentShade: {
                color: "#ecd0b2",
                colorName: "Translucent Shade",
                shopLink: "https://corp.mymonat.com/shop/products/monat-bb-cream-porcelain-us-6000002470?taxon_id=127",
                ecomm: {
                    img: "https://monatglobal.com/wp-content/uploads/2022/08/bb-cream-porcelain-ecomm.png",
                    alt: "MONAT Perfecting Translucent Loose Powder™ Translucent Shade"
                }
            },
            honeyShade: {
                color: "#e6bf9c",
                colorName: "Honey Shade",
                shopLink: "https://corp.mymonat.com/shop/products/monat-bb-cream-vanilla-us-6000002471?taxon_id=127", 
                ecomm: {
                    img: "https://monatglobal.com/wp-content/uploads/2022/08/bb-cream-vanilla-ecomm.png",
                    alt: "MONAT Perfecting Translucent Loose Powder™ Honey Shade"
                }
            }
        }
    }

]; 

const isMobile = () => window.matchMedia("(max-width: 700px)").matches;

// Creacion de los arrays para cada linea de producto
let allHair = [];
let allSkin = [];
let allWellness = [];

allProducts.forEach(p =>{
    if(p.line === "haircare"){
        allHair.push(p);
    }else if(p.line === "skincare"){
        allSkin.push(p);
    }else{
        allWellness.push(p);
    }
});

// Funcion que imprime el numero total de productos de cada linea
function setAllP_Counts(className, array) {
    let spans = document.querySelectorAll("."+className);
    // Asigna la cantidad de elementos del array a los spans con la clase dada
    spans.forEach(span => span.innerText = "( " + array.length + " )");
}

// Llama a la función con los diferentes nombres de clase y arrays
setAllP_Counts('allHair_count', allHair);
setAllP_Counts('allSkin_count', allSkin);
setAllP_Counts('allWellness_count', allWellness);

window.addEventListener("hashchange", () =>{
    location.reload();
})

//declaracion de variables
let filterPBox = document.getElementById("filterPBox");
let filterInputs = document.querySelectorAll("#filterBox input");
let hairInputs = document.querySelectorAll("#hairInputs input");
let skinInputs = document.querySelectorAll("#skinInputs input");
let wellnessInputs = document.querySelectorAll("#wellnessInputs input");
let filterBtns = document.querySelectorAll(".filterBtns");
let containerShop = document.getElementById("containerShop");
let containerPage = document.getElementById("containerPage");





let filterBar = document.getElementById("filterBar");
let filterBox = document.getElementById("filterBox");



filterBtns.forEach(btn =>{
    btn.addEventListener("click", () =>{
        filterBtns[0].classList.toggle("active"); 
        filterBox.classList.toggle("active"); 
        containerShop.classList.toggle("active");
        
        (window.scrollY < containerBanners.offsetHeight && filterBtns[0].className.includes("active")) && window.scrollTo(0, containerBanners.offsetHeight + 1)
    });
})

// Funcion que activa la caja de filtros
// filterBtns.addEventListener("click", () =>{
//     filterBtns.classList.toggle("active"); 
//     filterBox.classList.toggle("active"); 
//     containerShop.classList.toggle("active");
    
//     (window.scrollY < containerBanners.offsetHeight && filterBtns.className.includes("active")) && window.scrollTo(0, containerBanners.offsetHeight + 1)
// });


//Funcion para los acordeones de filterbox 
let filterAccordion = document.querySelectorAll(".filterSection > p");
filterAccordion.forEach(accordion =>{
    accordion.addEventListener("click", () =>{
        accordion.classList.toggle("active");
        accordion.nextElementSibling.classList.toggle("active");
    });
});

let closeFilter = document.querySelectorAll(".closeFilter");
//Funcion para cerrar el filtro
closeFilter.forEach(close =>{
    close.addEventListener("click", () =>{
        filterBtns[0].classList.remove("active"); 
        filterBox.classList.remove("active");
        containerShop.classList.remove("active");
        
        // cerrar dropdowns
        // filterAccordion.forEach(accordion =>{
        //     accordion.classList.remove("active");
        //     document.querySelector("#" + accordion.id + "+ ul").classList.remove("active");
        // });
    });
});

// Funcion que elimina comas y reemplaza espacios por "-" del value de los imputs
const valueFormat = (i) =>{
    return i.value.replace(/,/g, "").replace(/ /g,"-")
}

// Funcion que activa el sticky del filtro
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




const setArrow = (card, inputs) =>{
    const arrow1 = card.querySelector(".arrow1Tone");
    const arrow2 = card.querySelector(".arrow2Tone");
    
    // si el primer input está chequeado, se añade la clase arrow_disabled al primer elemento, y si no, se quita
    arrow1.classList.toggle("arrow_disabled", inputs[0].checked); 
    // si el último input está chequeado, se añade la clase arrow_disabled al segundo elemento, y si no, se quita
    arrow2.classList.toggle("arrow_disabled", inputs[inputs.length - 1].checked); 
}

const handleArrowClick = (card, inputs, direction) =>{
    const step = (direction === "prev") ? -1 : 1;
    const inputArray = [...inputs]; // Convierte la NodeList en un array
    const index = inputArray.findIndex(input => input.checked);
    
    inputs[index + step].click(); // hace click en el input siguiente o anterior según la dirección
    setArrow(card, inputs); // llama a la función setArrow
}

const setInputs = (card, obj) =>{
    const inputs = card.querySelectorAll(".boxTones input")

    setArrow(card, inputs);
    card.querySelector(".arrow1Tone").addEventListener("click", () => handleArrowClick(card, inputs, "prev"));
    card.querySelector(".arrow2Tone").addEventListener("click", () => handleArrowClick(card, inputs, "next"));
    
    const toneName = card.querySelector(".toneName");
    const EcommImg = card.querySelector(".img_product");
    const fadeTone = card.querySelectorAll(".fade_tone");
    const toneBtn = card.querySelector(".clasic_btn_MONAT");
    const toneLink = card.querySelector(".toneLink");
    
    inputs.forEach(input => {
        const tone = obj["tones"][input.classList[0]];
        input.style.backgroundColor = tone.color;
        input.style.borderColor = tone.color;
        
        input.addEventListener("input", () => {
          const { colorName, shopLink, ecomm } = tone;
          let toneHash = "#" + colorName.replace(/[^a-zA-Z]+/g, '-').toLowerCase();

            EcommImg.src = ecomm.img;
            // reinicia la animacion de fadein cuando cambia la imagen
            fadeTone.forEach(img => img.style.animation = "none");
            setTimeout(() => fadeTone.forEach(fade => fade.style.animation = "fade-in 1.2s"), 10);
            
            toneName.innerText = colorName;
            EcommImg.alt = ecomm.alt;
            toneBtn.href = shopLink;
            // toneLink.forEach(a => a.href = "https://monatglobal.com/bb-creme/#" + url);
            // console.log(location.origin + urlMarket + obj.url + toneHash)
            toneLink.href = location.origin + obj.url + toneHash;
            setArrow(card, inputs);
        });
    });
}


// Funcion que muestra los productos
// box = se refiere al grid, antes tienia varios grids pero ahora es solo uno y lo que cambian son las cards asi que eventualmente podria eliminarlo
// resetArr = si es true borra el contenido del array de las cards vivas, si es false agrega nuevos elementos a dicho array
// showInfoTag = Cuando empiezo a filtrar los tags del infoBtn los que no estan en la categoria/concern filtrado estaran mas opacas respecto a los que si estan
const showP = (arr, box, resetArr, showInfoTag) =>{
    
    // Cambia el estado de activeItems (cards activas dentro del grid)
    if(resetArr) activeItems = [];
    activeItems = [...arr, ...activeItems];
    
    // Crea los arrays del filter by
    let lowToH = [...activeItems].sort((a, b) => a.rPrice - b.rPrice);
    let highToL = [...activeItems].sort((a, b) => b.rPrice - a.rPrice);
    
    // Segun el order by que se tenga, se le asigna el valor a "array"
    if(orderSelected.innerText == "LOWER - HIGHER"){
        array = lowToH;
    }else if(orderSelected.innerText == "HIGHER - LOWER"){
        array = highToL
    }else{
        array = activeItems;
    }
    
    // limpia el grid
    filterPBox.innerHTML = "";
    
    // console.log(array);
    
    array.forEach(p => {
        let newItem = document.createElement("div");
        newItem.className = "card_product";
 
        // infoCard es el div que contiene todas las tags de las categorias/concerns a la que pertenece el producto
        let infoCard = document.createElement("div");
        infoCard.className = "infoCard";
        

        let inputsLine;
        (p.line === "haircare") ? inputsLine = hairInputs : (p.line === "skincare") ? inputsLine = skinInputs : inputsLine = wellnessInputs;
        
        let categories = p.category.split(" | ");
        categories.forEach(cat =>{
            if(cat == "systems"){
                (showInfoTag) ? infoCard.innerHTML += `<p>${cat}</p>` : infoCard.innerHTML += `<p class="off">${cat}</p>`;
            }else{
                inputsLine.forEach(inp => {
                    if(cat == inp.value){
                        (inp.checked || showInfoTag) ? infoCard.innerHTML += `<p>${cat}</p>` : infoCard.innerHTML += `<p class="off">${cat}</p>`;
                    }
                });
            }
        })
        
        newItem.prepend(infoCard);
        
        if(p.category.includes("systems")){
            newItem.innerHTML += `
                <div class="head_card">
                    <div class="right display_flex a_i_center">
                        <div class="infoBtn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            
                <div class="card_content events_none">
                        <div class="display_flex flex_center">
                            <p class="system_label margin_top_30">${p.use}</p>
                        </div>
                        <div class="container_img_product display_flex j_c_center"><img class="img_product" src="${p.img}" alt="${p.name}"></div>

                    <div class="module_text_product">
                        <p class="product_name">${p.name}</p>
                        <p class="retail_price ">$${p.rPrice.toFixed(2)} <span class="vip_price">VIP $${p.vipPrice.toFixed(2)}</span></p>
                        
                        <div class="display_flex ">
                             <p class="purchase_label">${p.discount}</p>
                        </div>
                    </div>
                </div>
                
                <a class="clasic_btn_MONAT" target="_blank" href="https://corp.mymonat.com${p.shopLink}"  aria-label="Go to ${p.name} shop">shop now</a>
            `;
        } else if(p.tones){
            newItem.innerHTML += `
            
                <div class="head_card">
                    <div class="right display_flex a_i_center">
                        <div class="infoBtn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                
                <div class="card_content tonesCard">
                    <p class="toneName a_s_center fade_tone"></p> 
                    <div class="display_flex flex_center p_relative">
                        <a class="toneLink" href="${location.origin}${p.url}" aria-label="Go to ${p.name} page">
                            <div class="container_img_product fade_tone display_flex flex_center"> 
                                <img class="img_product" src="" alt="${p.name}""> 
                            </div>
                        </a>
                
                        <div class="tone_arrows col_100 display_flex j_c_space_between">
                            <img class="arrow1Tone arrow_disabled" src="https://monatglobal.com/wp-content/uploads/2023/08/prev-arrow.svg">
                            <img class="arrow2Tone" src="https://monatglobal.com/wp-content/uploads/2023/08/next-arrow.svg">
                        </div>
                    </div>
                   
                    <div class="boxTones display_flex j_c_center"></div>
                    
                    <div class="module_text_product">
                        <p class="product_name">${p.name}️</p>
                        <p class="retail_price">$${p.rPrice} / <span class="vip_price">VIP $${p.vipPrice} </span></p> 
                    </div>
                </div> 
                
                <a class="clasic_btn_MONAT" target="_blank" href="" aria-label="Go to ${p.name} shop">shop now</a> 
            `;
            
            let boxInputs = newItem.querySelector(".boxTones");
            for (var tono in p.tones) {
                boxInputs.innerHTML += `<label><input class="${tono}" type="radio" name="${p.inputName}"></label>`;
            }
            
            setInputs(newItem, p);
            // newItem.querySelector(".boxTones input." + p.defaultTone).click();
        } else{
            newItem.innerHTML += `
                <div class="head_card">
                    <div class="right display_flex a_i_center">
                        <div class="infoBtn">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            
                <a class="card_content" href="${p.url}" aria-label="Go to ${p.name} page">

                        <div class="container_img_product display_flex j_c_center"><img class="img_product" src="${p.img}" alt="${p.name}"></div>

                    <div class="module_text_product">

                        <p class="view_details_btn hide_desktop">VIEW DETAILS</p>

                        <p class="product_name">${p.name}</p>
                        <p class="retail_price ">$${p.rPrice.toFixed(2)} <span class="vip_price">VIP $${p.vipPrice.toFixed(2)}</span></p>

                    </div>
                </a>
                
                <a class="clasic_btn_MONAT" target="_blank" href="https://corp.mymonat.com${p.shopLink}"  aria-label="Go to ${p.name} shop">shop now</a>
            `;   
        }
        
        // si el producto es un nuevo se agrega el label de new
        if (p.newP) {
            let newLabel = document.createElement("div");
            newLabel.className = "new_product_label_small";
            newLabel.innerText = "NEW"
            newItem.querySelector(".head_card").prepend(newLabel);
        } 

        // si el producto es un best seller se le agrega un label e imagen de fondo
        if (p.category.includes("best sellers")) {
            newItem.classList.add("BScard");
            newItem.style.backgroundImage = `url('${p.hoverImg}')`;
            
            let BSLabel = document.createElement("p");
            BSLabel.className = "BSLabel";
            BSLabel.innerText = "BEST SELLER"
            
            newItem.querySelector(".head_card > .right").prepend(BSLabel);
        } 
        
        box.appendChild(newItem);
        (p.category.includes("tones")) && newItem.querySelector(".boxTones input." + p.defaultTone).click();
    });
    
    
    
    // Se le agrega funcionalidad al boton de la infocard
    let btns = document.querySelectorAll(".infoBtn");
    let info = document.querySelectorAll(".infoCard");
    btns.forEach((btn, index) =>{
        btn.onmouseenter = () =>{
            if (!isMobile()) {
                btn.classList.add("active")
                info[index].classList.add("active")
            }
        }
        
        info[index].onmouseleave = () =>{
            btn.classList.remove("active")
            info[index].classList.remove("active")
        }
        
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

let loaderOverlay = document.getElementById("loaderP");
let loaderGif = document.querySelector("#loaderP > img");

// esto no estoy muy seguro que hace... revisar
// window.addEventListener("scroll", () =>{
//     if(loaderOverlay.className.includes("active") && window.scrollY > containerBanners.offsetHeight){
//         window.scrollTo(0, containerBanners.offsetHeight + 1)
//         document.documentElement.style.overflowY = "hidden";
//         console.log("paso")
//     }
// });

// Funcion que hace la animacion del loader
const loader = () =>{
    if (window.matchMedia("(min-width: 700px)").matches) {
        loaderOverlay.classList.add("active");
        // el Math.random() es para que cada vez que se active el loader el gif carge desde el principio
        loaderGif.src = "https://monatglobal.com/wp-content/uploads/2022/04/drop-preloader-11.gif"+"?a="+Math.random();
        
        // if(window.scrollY > containerBanners.offsetHeight) {
            document.documentElement.style.overflowY = "hidden";
        // }
        
        setTimeout(() =>{
            loaderOverlay.classList.remove("active");
            document.documentElement.style.overflowY = "visible";
        }, 800)
    }
    if(window.scrollY > containerBanners.offsetHeight) window.scrollTo(0, containerBanners.offsetHeight + 1)
}

const resetInputs = () =>{
    filterInputs.forEach(input => (input.checked) && input.click());
}

// funcion para ver todos los productos
const seeAll = (array) =>{
    loader();
    resetInputs();
    showP(array, filterPBox, true, true)
    // esto es para que se despues usar esta funcion, cuando volvamos a tocar una tab if(activeTab != previousTab) siempre sea true
    previousTab = ""
}

document.getElementById("seeAllBtn").addEventListener("click", () => seeAll(allProducts));

// Order by
let orderByBtn = document.querySelector("#orderBy > p");
let orderSelected = document.querySelector("#orderBy > p span");
let orderList = document.querySelector("#orderBy > div");
let orderOptions = document.querySelectorAll("#orderBy > div p");

orderByBtn.addEventListener("click", () =>{
    orderByBtn.classList.toggle("active")
    orderList.classList.toggle("active")
})

// Funcion que cierra del dropdown de orderby si hace click fuera de este
document.addEventListener("click", (e) => {
    // La condicion se cumple si el dropdown esta abierto y si hace click por fuera del orderByBtn y orderList
    if (orderByBtn.classList.contains("active") && !orderByBtn.contains(e.target) && !orderList.contains(e.target)) {
        orderByBtn.classList.remove("active");
        orderList.classList.remove("active");
    }
});

orderOptions.forEach(option =>{
    option.addEventListener("click", () =>{
        orderByBtn.classList.remove("active")
        orderList.classList.remove("active")
        
        if(orderSelected.innerText != option.innerText){
            orderSelected.innerText = option.innerText;
            
            showP([], filterPBox, false, true);
            
            option.classList.add("selected");
            
            orderOptions.forEach(op =>{
                if(option != op){
                    op.classList.remove("selected");
                }
            });
        }
    })
});


let activeItems = [];
// let activeItems;

let activeTab = "";
let previousTab = "";

let clearSearchBar = document.getElementById("clearSearchBar");
let clearSearch = document.getElementById("clearSearch");
let filterInitial = document.getElementById("state1_filter");
let containerBanners = document.getElementById("containerBanners");
let banners = document.querySelectorAll("#containerBanners > div");
let filterTabs = document.querySelectorAll("#state1_filter > li:not(.not_a_tab) > p");
let backState1 = document.querySelectorAll(".head_state2 > span");

// Funcion que le da funcion a las tabs de cada linea de producto dentro del filtro
filterTabs.forEach((tab, i) =>{
    tab.addEventListener("click", () =>{
        filterInitial.classList.add("tabActive");
        tab.nextElementSibling.style.display = "block";
        // nextElementSibling devuelve el elemento inmediatamente posterior al especificado (en este caso el ul con los inputs)
        activeTab = tab.id.replace('Tab_f', '');
        
        // Si el tab que seleccionaste es diferente al que estabas antes, borra todos los inpus seleccionados anteriormente y te muestra todos los productos de la linea seleccionada 
        if(activeTab != previousTab){
            loader();
            clearSearchBar.classList.remove("active");
            resetInputs();
            // let inputsLine = document.querySelectorAll("#state1_filter > li > p:not(#"+ tab.id +") + ul input");
            let arr;
            
            // inputsLine.forEach(i => {
            //     if(i.checked) i.click();
            // });
            
            (tab.id === "haircareTab_f") ? arr = allHair : (tab.id === "skincareTab_f") ? arr = allSkin : arr = allWellness ;
            
            banners.forEach(banner => (tab.id.includes(banner.id.slice(0, 4))) ? banner.classList.add("active") : banner.classList.remove("active"));
            
            showP(arr, filterPBox, true, true);
            
            // if(window.scrollY > containerBanners.offsetHeight) window.scrollTo(0, containerBanners.offsetHeight);
        }
        
        previousTab = tab.id.replace('Tab_f', '');
    });
    
    // Dentro de cada linea de producto se le da la funcionalidad al boton de volver al estado inicial del filtro
    backState1[i].addEventListener("click", () =>{
        filterInitial.classList.remove("tabActive");
        setTimeout(() =>{document.querySelector("#" + tab.id + " + ul").style.display = "none"}, 301);
    });
});

// Funcion que muestra los systemas dentro de cada linea
let systemBtn = document.querySelectorAll(".not_a_tab.systems");

systemBtn.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        loader();
        resetInputs();
        
        let arr = []
        allProducts.forEach(p =>{
            if(p.line === activeTab && p.category.includes("systems")){
                arr.push(p);
            }
        });

        showP(arr, filterPBox, true, true);
    });
});


let boxTags = document.getElementById("boxTags");
let tagsBar = document.getElementById("tagsBar");
let filtersCount = document.querySelectorAll(".filtersCount");

const counterChecks = {
  hair: { concern: 0, category: 0 },
  skin: { concern: 0, category: 0 },
  wellness: { concern: 0, category: 0 },
  total: 0
};

let nameMap = {
    "concernH": "hair.concern",
    "concernS": "skin.concern",
    "concernW": "wellness.concern",
    "categoryH": "hair.category",
    "categoryS": "skin.category",
    "categoryW": "wellness.category"
};

let tabToArrays = {
    "haircare": allHair,
    "skincare": allSkin,
    "wellness": allWellness
};

// Se le da funcionalidad a cada input
filterInputs.forEach(input => {
    input.addEventListener("input", () =>{
            
        if(input.checked) {
            counterChecks.total++;
            
            // Obtener la propiedad del objeto counterChecks usando el nombre del elemento
            let prop = nameMap[input.name];
            
            // Separar la propiedad en dos partes: el objeto y la subpropiedad
            let [obj, subprop] = prop.split(".");
            
            // Incrementar el valor de la subpropiedad usando la notación de corchetes
            counterChecks[obj][subprop]++;
        } else {
            counterChecks.total--;
            // Lo mismo que antes, pero decrementando el valor
            let prop = nameMap[input.name];
            let [obj, subprop] = prop.split(".");
            counterChecks[obj][subprop]--;
        }
        
        loader();
        
        if(input.checked === true){
            // si counterChecks.total = 1 quiere decir que es el primer input seleccionado, activeItems de momento tiene todos los productos de la linea dentro asi que toca borrar todos sus datos para agregar los que cumplan con las condiciones del filtro
            if(counterChecks.total === 1) activeItems = [];
            let dinamicArray = [];
            
            
            allProducts.forEach(p => {
                let categories = p.category.split(" | ");
                categories.forEach(cat =>{
                    // si un producto tiene alguna categoria/concern que coincida con el input seleccionado y el producto pertenece a la linea en la cual se esta filtrando, entonces se le habilita el paso para que entre a dinamicArray
                    if(cat == input.value && activeTab == p.line){
                        let pass = true;
                        
                        // si el producto ya habia sido agregado anteriormente a dinamicArray entonces no se le permite el paso nuevamente
                        activeItems.forEach(item =>{
                            if(p.name == item.name) pass = false;
                        });
                        
                        if(pass) dinamicArray.push(p);
                    }
                });

            });
            
            // Se ejecuta la funcion de mostrar productos con los que cumplieron las condiciones anteriormente para entrar a dinamicArray
            showP(dinamicArray, filterPBox);

            let newTag = document.createElement("div");
            newTag.id = "filterTag_" + valueFormat(input);
            
            newTag.innerHTML = `
                <p>${input.value}</p>
                <span id="closeTag_${valueFormat(input)}">✕</span>
            `;
            
            boxTags.appendChild(newTag);
            
            let closeTag = document.getElementById(`closeTag_${valueFormat(input)}`);

            closeTag.addEventListener("click", () => input.click());  

        }else{
            document.getElementById(`filterTag_${valueFormat(input)}`).remove();
            
            if(!counterChecks.total){
                showP(tabToArrays[activeTab], filterPBox, true, true);
                tagsBar.classList.remove("active");
                // aqui
            }else{
                for (let i = 0; i < activeItems.length; i++) {
                    let deleteItem = true;
                    
                    filterInputs.forEach(inp => {
                        if(inp.checked && activeItems[i].category.includes(inp.value)){
                            deleteItem = false;
                        }
                    });  
                    
                    if(deleteItem){
                        activeItems.splice(i, 1);
                        --i;
                    }
                }
            }
            
            // como el array que se pasa como parametro esta vacio, se muestran los productos que quedaron en activeItems
            showP([], filterPBox);
        }
        
        // si el contador de checks es mayor a 0, revela la tagsBar y oculta la clearSearchBar (en claso de ser necesario)
        if(counterChecks.total){
            tagsBar.classList.add("active");
            clearSearchBar.classList.remove("active");
        }
        
        // imprimir el valor de los contadores en el HTML
        filtersCount.forEach(count => {
            (counterChecks.total) ? count.innerText = "( " + counterChecks.total + " )" : count.innerText = "";
        });
        
        for (let prop in counterChecks) {
            if (prop === "total") {
                filtersCount.forEach(count => {
                    if (counterChecks.total) {
                        (count.classList.contains("onlyNum")) ? count.innerText = counterChecks.total : count.innerText = "( " + counterChecks.total + " )" ;
                    } else{
                        count.innerText = "";
                    } 
                });
            }
            // if (prop === "total") continue;
            
            // obtener el objeto interno (hair, skin o wellness)
            let obj = counterChecks[prop];
            let pLine = prop.charAt(0).toUpperCase()
            // recorrer las subpropiedades (concern o category)
            for (let subprop in obj) {
                let value = obj[subprop];
                // obtener el id del elemento HTML
                let id = subprop + pLine + "Count";  // ej concern + H + Count
                document.getElementById(id).innerText = value ? "( " + value + " )" : "";
            }
        }
        
        // if(window.scrollY > containerBanners.offsetHeight) window.scrollTo(0, containerBanners.offsetHeight);
    });
});

// Se le da funcionalidad al boton de borrar los filtros aplicados
let clearFilter = document.querySelectorAll(".clearFilter")
clearFilter.forEach(btn =>{
    btn.addEventListener("click", resetInputs);
})


// Si no hay filtro se muestran todos los productos
window.addEventListener("load", ()=>{
if (location.hash == ""){
    showP(allProducts, filterPBox, true, true);
}else{
    let hash = location.hash;
    
    // esto creo que es para cuando quiero que me muestre all-hair, all-skin... pero tengo que hacerle unos ajustes
    // if(hash.includes("-hair")){
    //     activeTab = "haircare"
    //     hash = hash.replace('-hair', '');
    // }else if(hash.includes("-skin")){
    //     activeTab = "skincare"
    //     hash = hash.replace('-skin', '');
    // }else if (hash.includes("-wellness")){
    //     activeTab = "wellness"
    //     hash = hash.replace('-wellness', ''); 
    // }
    
    // El substring(1) es para quitar el #
    hash = hash.replace(/-/g, ' ').substring(1);

    let selectInput = document.querySelector("input[value='"+ hash +"']");
    let tabMap = {
        "H": "haircare",
        "S": "skincare",
        "W": "wellness"
    };

    if (!activeTab) {
        let lastLetter = selectInput.name.slice(-1);
        activeTab = tabMap[lastLetter];
    }
    
    selectInput.click();
    if (window.scrollY < containerBanners.offsetHeight) {
        window.scrollTo(0, containerBanners.offsetHeight + 1);
    } 
}
})





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

searchValue.addEventListener("click", () => {
    overlayTrigger(true);
    (window.scrollY < containerBanners.offsetHeight) && window.scrollTo(0, containerBanners.offsetHeight + 1)
});

const closeAllLists = () =>{
    let list = document.getElementById("autocomplete-list");
    if(list) list.remove();
}

clearSearch.addEventListener("click", () =>{
    clearSearchBar.classList.remove("active");
    seeAll(tabToArrays[activeTab]);
});

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
    
    activeItems = [];
    loader();
    clearSearchBar.classList.add("active");
    showP(dinamicArray, filterPBox, false, true);

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
                });
                
                autoList.appendChild(matchItem);
            }
        });
    });
    
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        let list = document.getElementById("autocomplete-list");
        if (list) list = list.querySelectorAll("div");
        
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


// let clearFilter = document.querySelectorAll(".clearFilter")
// //Funcion para borrar todos los filtros
// clearFilter.forEach(btn =>{
//     btn.addEventListener("click", () =>{
//         filterInputs.forEach(input => (input.checked) && input.click());
//     });
// })


   