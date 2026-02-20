"use client";

import { useState } from "react";

type Occasion = "College" | "Party" | "Interview" | "Casual Outing" | "Date";
type Weather = "Sunny" | "Rainy" | "Cold" | "Hot" | "Cloudy";
type Mood = "Confident" | "Chill" | "Elegant" | "Bold" | "Comfortable";

interface Suggestion {
  outfit: string;
  footwear: string;
  accessories: string;
  tip: string;
  emoji: string;
}

const suggestions: Record<Occasion, Record<Weather, Record<Mood, Suggestion>>> = {
  College: {
    Sunny: {
      Confident: {
        outfit: "White fitted tee + dark blue straight-fit jeans",
        footwear: "White sneakers",
        accessories: "Watch + small backpack",
        tip: "Tuck in your tee halfway for a relaxed-smart look.",
        emoji: "📚",
      },
      Chill: {
        outfit: "Pastel oversized hoodie + light grey joggers",
        footwear: "Slip-on canvas shoes",
        accessories: "Cap + tote bag",
        tip: "Roll your jogger cuffs once for an effortless vibe.",
        emoji: "😎",
      },
      Elegant: {
        outfit: "Light blue button-down shirt + beige chinos",
        footwear: "Brown loafers",
        accessories: "Minimal watch + leather belt",
        tip: "Keep the shirt slightly untucked at the front for balance.",
        emoji: "✨",
      },
      Bold: {
        outfit: "Graphic tee + ripped black jeans",
        footwear: "High-top sneakers",
        accessories: "Chain necklace + cool cap",
        tip: "Layer a flannel shirt tied around your waist for extra flair.",
        emoji: "🔥",
      },
      Comfortable: {
        outfit: "Soft cotton crew-neck tee + relaxed khaki pants",
        footwear: "White sneakers",
        accessories: "Crossbody bag",
        tip: "Pick breathable fabrics like cotton to stay cool all day.",
        emoji: "🌿",
      },
    },
    Rainy: {
      Confident: {
        outfit: "Navy blue full-sleeve tee + dark jeans",
        footwear: "White rubber-sole sneakers or rain boots",
        accessories: "Compact umbrella + small backpack",
        tip: "Avoid light colors — rain stains show easily.",
        emoji: "🌧️",
      },
      Chill: {
        outfit: "Grey hoodie + dark grey joggers",
        footwear: "Waterproof sneakers",
        accessories: "Hood or beanie + tote bag",
        tip: "Wear your hoodie — it's your built-in rain shield!",
        emoji: "🌂",
      },
      Elegant: {
        outfit: "Full-sleeve polo shirt + dark slim trousers",
        footwear: "Chelsea boots",
        accessories: "Umbrella + leather watch",
        tip: "Chelsea boots look sleek and handle puddles like a pro.",
        emoji: "☔",
      },
      Bold: {
        outfit: "Dark graphic tee + black cargo pants",
        footwear: "Black high-top sneakers",
        accessories: "Cap + bold umbrella",
        tip: "Go for dark, moody colors that look great even when wet.",
        emoji: "⚡",
      },
      Comfortable: {
        outfit: "Soft zip-up jacket + comfortable leggings or joggers",
        footwear: "Waterproof slip-ons",
        accessories: "Umbrella + crossbody bag",
        tip: "A zip-up jacket is easy to take on and off between classes.",
        emoji: "🧥",
      },
    },
    Cold: {
      Confident: {
        outfit: "Layered turtleneck under a blazer + straight jeans",
        footwear: "Ankle boots",
        accessories: "Scarf + structured bag",
        tip: "A blazer over a turtleneck looks polished and keeps you warm.",
        emoji: "❄️",
      },
      Chill: {
        outfit: "Oversized knit sweater + sweatpants",
        footwear: "Chunky sneakers",
        accessories: "Beanie + cozy tote bag",
        tip: "Pick a fun color sweater to brighten a cold day.",
        emoji: "🧶",
      },
      Elegant: {
        outfit: "Camel-colored coat + black slim pants + inner turtleneck",
        footwear: "Brown chelsea boots",
        accessories: "Cashmere scarf + watch",
        tip: "A camel coat is timeless — it works with everything.",
        emoji: "🍂",
      },
      Bold: {
        outfit: "Oversized puffer jacket + black jeans",
        footwear: "Bold chunky boots",
        accessories: "Beanie + fingerless gloves",
        tip: "A brightly colored puffer jacket makes a statement on cold days.",
        emoji: "🧊",
      },
      Comfortable: {
        outfit: "Fleece sweatshirt + warm leggings or comfort pants",
        footwear: "Warm lined sneakers",
        accessories: "Scarf + hat",
        tip: "Layer up with a matching set for a cozy, put-together look.",
        emoji: "🔥",
      },
    },
    Hot: {
      Confident: {
        outfit: "White linen shirt (half-tucked) + beige shorts",
        footwear: "Clean white sneakers",
        accessories: "Sunglasses + minimal watch",
        tip: "Linen breathes well and still looks sharp in the heat.",
        emoji: "☀️",
      },
      Chill: {
        outfit: "Breezy oversized tee + shorts",
        footwear: "Sandals or flip-flops",
        accessories: "Cap + sunglasses",
        tip: "Light and loose fits are your best friends in the heat.",
        emoji: "🌴",
      },
      Elegant: {
        outfit: "Pastel button-down (loose fit) + white trousers",
        footwear: "Loafers",
        accessories: "Minimal sunglasses + small wristlet",
        tip: "Pastels stay coo and look polished without effort.",
        emoji: "🌸",
      },
      Bold: {
        outfit: "Color-block tee + bright shorts",
        footwear: "Colorful sneakers",
        accessories: "Bold sunglasses + cap",
        tip: "Contrasting colors make a strong visual impact in the sun.",
        emoji: "🌈",
      },
      Comfortable: {
        outfit: "Soft jersey tee + elastic-waist cotton shorts",
        footwear: "Slides or sandals",
        accessories: "Cap + crossbody pouch",
        tip: "Natural fabrics like cotton keep you cool and itch-free.",
        emoji: "🌿",
      },
    },
    Cloudy: {
      Confident: {
        outfit: "Dark jeans + striped full-sleeve tee",
        footwear: "White sneakers",
        accessories: "Watch + backpack",
        tip: "Stripes add structure — a clean, confident look.",
        emoji: "⛅",
      },
      Chill: {
        outfit: "Grey sweatshirt + joggers",
        footwear: "Sneakers",
        accessories: "Tote bag",
        tip: "A matching grey set looks effortlessly cool on cloudy days.",
        emoji: "🌫️",
      },
      Elegant: {
        outfit: "White sneakers, light blue jeans, soft pastel blazer",
        footwear: "Loafers",
        accessories: "Minimal watch + chain bracelet",
        tip: "A pastel blazer elevates any casual base quickly.",
        emoji: "💼",
      },
      Bold: {
        outfit: "Black tee + bold printed pants",
        footwear: "Statement sneakers",
        accessories: "Bold rings or chain",
        tip: "Let your pants do the talking — keep the top simple.",
        emoji: "🎨",
      },
      Comfortable: {
        outfit: "Oversized tee + relaxed wide-leg pants",
        footwear: "Slip-ons",
        accessories: "Lightweight bag",
        tip: "Wide-leg pants look relaxed but feel very comfortable.",
        emoji: "🌤️",
      },
    },
  },
  Party: {
    Sunny: {
      Confident: { outfit: "Tailored shorts + crisp linen shirt (open collar)", footwear: "Clean leather mules", accessories: "Sunglasses + elegant watch", tip: "Roll your sleeves for a casual-confident party look.", emoji: "🎉" },
      Chill: { outfit: "Breezy printed matching set", footwear: "White sneakers", accessories: "Minimal chain + cap", tip: "Matching sets look effortless and totally party-ready.", emoji: "🥳" },
      Elegant: { outfit: "Flowy midi dress or pressed chinos + silk shirt", footwear: "Heeled sandals or loafers", accessories: "Delicate necklace + clutch", tip: "Silk adds instant glamour to any outdoor gathering.", emoji: "🌟" },
      Bold: { outfit: "Bright patterned shirt + white trousers", footwear: "Colorful sneakers or mules", accessories: "Statement earrings or bold watch", tip: "Own the room with a pattern that pops in sunlight.", emoji: "🔥" },
      Comfortable: { outfit: "Flowy sundress or loose linen set", footwear: "Flat sandals", accessories: "Tote + sunglasses", tip: "Comfort at a party means you actually enjoy it!", emoji: "😊" },
    },
    Rainy: {
      Confident: { outfit: "Dark slim trousers + fitted turtleneck", footwear: "Ankle boots", accessories: "Sleek umbrella + minimalist watch", tip: "Monochrome dark tones look sophisticated in the rain.", emoji: "🎊" },
      Chill: { outfit: "Relaxed trousers + cozy knit sweater", footwear: "Chunky sneakers", accessories: "Umbrella + casual bag", tip: "A textured knit keeps you warm and stylish indoors.", emoji: "🧸" },
      Elegant: { outfit: "Wrap dress or pressed dress pants + blazer", footwear: "Chelsea boots", accessories: "Pearl studs + small clutch", tip: "A blazer-and-boots combo looks chic at any rainy event.", emoji: "💫" },
      Bold: { outfit: "Vinyl or faux leather trousers + bold top", footwear: "High ankle boots", accessories: "Statement bag + choker", tip: "Faux leather actually shines in the rain — literally!", emoji: "⚡" },
      Comfortable: { outfit: "Stretchy nice pants + soft blouse or sweater", footwear: "Low-heeled boots", accessories: "Compact umbrella", tip: "Choose wrinkle-resistant fabric so you look fresh all night.", emoji: "🌧️" },
    },
    Cold: {
      Confident: { outfit: "Black skinny jeans + fitted blazer + inner turtleneck", footwear: "Heeled ankle boots", accessories: "Minimal chain + structured bag", tip: "A blazer instantly makes you look 10x more put-together.", emoji: "❄️" },
      Chill: { outfit: "Velvet joggers + cozy oversized top", footwear: "Chunky sneakers or boots", accessories: "Beanie + rings", tip: "Velvet is cozy AND looks luxe — perfect combo.", emoji: "🎿" },
      Elegant: { outfit: "Long slip dress + faux fur shrug or long coat", footwear: "Block-heel boots", accessories: "Drop earrings + clutch", tip: "A faux fur detail makes any look instantly festive.", emoji: "🌙" },
      Bold: { outfit: "Plaid blazer + solid turtleneck + dark jeans", footwear: "Bold platform boots", accessories: "Statement belt + rings", tip: "Plaid is bold but classy — mix it with solid pieces.", emoji: "🎭" },
      Comfortable: { outfit: "Soft knit dress or matching loungewear set (elevated)", footwear: "Low ankle boots", accessories: "Cozy scarf + minimal earrings", tip: "Elevated loungewear is the secret to party comfort.", emoji: "🧣" },
    },
    Hot: {
      Confident: { outfit: "White linen trousers + sleeveless fitted top", footwear: "Strappy heeled sandals", accessories: "Gold bangles + sunglasses", tip: "White reflects heat and always looks crisp at parties.", emoji: "🌅" },
      Chill: { outfit: "Flowy shorts + off-shoulder top", footwear: "Wedge sandals", accessories: "Layered bracelets + tote", tip: "Off-shoulder is breezy and festive — easy win.", emoji: "🍹" },
      Elegant: { outfit: "Chiffon midi dress in a solid jewel tone", footwear: "Strappy heels", accessories: "Slim clutch + small earrings", tip: "Chiffon flows beautifully and keeps you cool at night parties.", emoji: "💎" },
      Bold: { outfit: "Bright neon or color-block two-piece set", footwear: "Bold heeled mules", accessories: "Fun statement jewelry", tip: "Neon pops under party lights — stand out and own it.", emoji: "🌈" },
      Comfortable: { outfit: "Loose palazzo pants + flowy crop top", footwear: "Flat strappy sandals", accessories: "Light bag + simple earrings", tip: "Palazzo pants look so elegant — no one will know how comfy you are.", emoji: "🌺" },
    },
    Cloudy: {
      Confident: { outfit: "Dark trousers + structured top + blazer", footwear: "Loafers or low heels", accessories: "Watch + chain", tip: "A blazer is your best party layer for unpredictable weather.", emoji: "🎶" },
      Chill: { outfit: "Flared jeans + casual nice top", footwear: "Platform sneakers", accessories: "Fun earrings + tote", tip: "Flared jeans are making a comeback — wear them boldly.", emoji: "🎵" },
      Elegant: { outfit: "Satin blouse + wide-leg tailored pants", footwear: "Block heels", accessories: "Pearl necklace + clutch", tip: "Satin always photographs beautifully at parties.", emoji: "✨" },
      Bold: { outfit: "Loud printed co-ord set", footwear: "Bold chunky heels", accessories: "Matching bag + big earrings", tip: "A co-ord set means you look put-together without trying.", emoji: "🎨" },
      Comfortable: { outfit: "Stretchy nice dress or jumper", footwear: "Ankle boots", accessories: "Minimal jewelry", tip: "A well-fitted jumper is the ultimate party comfort piece.", emoji: "🌤️" },
    },
  },
  Interview: {
    Sunny: {
      Confident: { outfit: "Navy blue blazer + white shirt + black or grey trousers", footwear: "Black Oxford shoes", accessories: "Subtle watch + leather belt", tip: "Wear your most confident color — many people swear by navy blue.", emoji: "💼" },
      Chill: { outfit: "Light grey chinos + white polo shirt", footwear: "Clean white sneakers (smart-casual jobs)", accessories: "Simple watch", tip: "Smart casual works well for creative or tech roles.", emoji: "🙂" },
      Elegant: { outfit: "Pencil skirt or tailored trousers + silk blouse", footwear: "Pointed-toe flats or low heels", accessories: "Small stud earrings + slim watch", tip: "Avoid too much jewelry — it can distract the interviewer.", emoji: "👔" },
      Bold: { outfit: "Burgundy blazer + white shirt + dark trousers", footwear: "Smart Oxford shoes", accessories: "Pocket square + watch", tip: "A bold blazer color shows personality — keep the rest neutral.", emoji: "🏆" },
      Comfortable: { outfit: "Well-fitted straight-leg pants + a neat tucked-in blouse", footwear: "Comfortable low heels or clean loafers", accessories: "Minimal — just a watch", tip: "Dress comfortably so you can focus on your answers, not your clothes.", emoji: "✅" },
    },
    Rainy: {
      Confident: { outfit: "Dark charcoal suit or formal trousers + blazer", footwear: "Waterproof dress shoes", accessories: "Compact umbrella + clean bag", tip: "Arrive 15 mins early so you're not rushed or wet before the interview.", emoji: "☔" },
      Chill: { outfit: "Navy chinos + clean button-up shirt", footwear: "Leather-look shoes", accessories: "Umbrella", tip: "Avoid light colors on rainy days — they stain and show water marks.", emoji: "🌧️" },
      Elegant: { outfit: "Dark tailored dress or formal trouser suit", footwear: "Chelsea boots", accessories: "Umbrella + understated bag", tip: "Chelsea boots are smart AND waterproof — a smart choice for rainy interviews.", emoji: "💧" },
      Bold: { outfit: "Bold color blazer (e.g., forest green) + neutral trousers", footwear: "Smart waterproof boots", accessories: "Compact umbrella", tip: "A distinctive blazer helps you stand out memorably.", emoji: "🌿" },
      Comfortable: { outfit: "Dark stretch trousers + neat cardigan or blazer", footwear: "Clean flats or loafers", accessories: "Compact umbrella", tip: "Stretch trousers + smart top = flexible and interview-appropriate.", emoji: "🌂" },
    },
    Cold: {
      Confident: { outfit: "Full suit (grey, navy, or black) with an inner turtleneck", footwear: "Black leather Oxford shoes", accessories: "Scarf (removable before interview) + watch", tip: "Remove your coat and scarf before entering the room — first impressions matter.", emoji: "🧊" },
      Chill: { outfit: "Smart chinos + cashmere/knit sweater layered over Oxford shirt", footwear: "Smart loafers", accessories: "Scarf + watch", tip: "A neat sweater over a collar looks polished without being stiff.", emoji: "🌨️" },
      Elegant: { outfit: "Tailored dress + structured overcoat", footwear: "Ankle boots", accessories: "Delicate earrings + professional bag", tip: "A good overcoat elevates any outfit immediately.", emoji: "❄️" },
      Bold: { outfit: "Plaid or herringbone blazer + solid turtleneck + dress trousers", footwear: "Smart brogue shoes", accessories: "Subtle pocket square", tip: "Patterned blazers work well if the rest of the outfit is clean and simple.", emoji: "🎯" },
      Comfortable: { outfit: "Soft tailored trousers + fitted turtleneck + blazer on top", footwear: "Low-heel boots or smart shoes", accessories: "Simple scarf", tip: "A turtleneck + blazer is one of the most universally flattering combinations.", emoji: "🧥" },
    },
    Hot: {
      Confident: { outfit: "Light linen blazer + formal trousers + crisp white shirt", footwear: "Light leather shoes", accessories: "Minimal watch + leather belt", tip: "Linen keeps you cool while looking very professional.", emoji: "☀️" },
      Chill: { outfit: "Cotton button-down (tucked) + neat chinos", footwear: "Clean loafers", accessories: "Simple watch", tip: "Light, breathable fabrics help you stay focused and unflustered.", emoji: "🌤️" },
      Elegant: { outfit: "Sleeveless formal dress or formal blouse + dress trousers", footwear: "Heeled sandals or flats", accessories: "Subtle jewelry + small professional bag", tip: "Keep necklines conservative for most interviews.", emoji: "💫" },
      Bold: { outfit: "Jewel-tone top (no pattern) + neat dark trousers", footwear: "Smart flat sandals or shoes", accessories: "Minimal gold jewelry + professional bag", tip: "A bold solid color stands out without being distracting.", emoji: "🌟" },
      Comfortable: { outfit: "Well-fitted cool cotton dress or neat trousers + breathable blouse", footwear: "Comfortable formal flats", accessories: "Minimal jewelry", tip: "If you're comfortable, you'll present yourself with more confidence.", emoji: "🌿" },
    },
    Cloudy: {
      Confident: { outfit: "Charcoal or navy blazer + white formal shirt + neat trousers", footwear: "Oxford or Derby shoes", accessories: "Leather watch + subtle belt", tip: "A well-pressed outfit always impresses — iron your clothes the night before.", emoji: "⛅" },
      Chill: { outfit: "Smart chinos + a neat half-zip or polo shirt", footwear: "Clean sneakers or loafers", accessories: "Watch", tip: "Know your office culture — check if smart-casual is appropriate.", emoji: "🌫️" },
      Elegant: { outfit: "Tailored blazer + neat blouse + trouser or pencil skirt", footwear: "Elegant low heels", accessories: "Small studs + slim professional bag", tip: "Stick to two colors maximum for a clean, elegant look.", emoji: "💼" },
      Bold: { outfit: "Statement blazer (deep red, forest green) + neutral bottom", footwear: "Smart shoes", accessories: "Pocket square or tasteful pin", tip: "A powerful blazer color signals confidence and authority.", emoji: "🎯" },
      Comfortable: { outfit: "Soft tailored trousers + neat cardigan + inner blouse", footwear: "Comfortable professional shoes", accessories: "Simple watch", tip: "Layers are great for cloudy days — easy to adjust to room temperature.", emoji: "☁️" },
    },
  },
  "Casual Outing": {
    Sunny: {
      Confident: { outfit: "White t-shirt + light wash jeans + denim jacket (tied around waist)", footwear: "Fresh white sneakers", accessories: "Sunglasses + simple watch", tip: "Tie the jacket at your waist when it gets warm — instantly stylish.", emoji: "🌞" },
      Chill: { outfit: "Flowy printed shorts + graphic tee", footwear: "Slip-on sandals", accessories: "Cap + crossbody bag", tip: "Go for fun prints — casual outings are the perfect time to experiment.", emoji: "😎" },
      Elegant: { outfit: "Linen wide-leg pants + simple fitted tee + light blazer", footwear: "Espadrilles or loafers", accessories: "Delicate necklace + sunglasses", tip: "Wide-leg linen pants are relaxed AND look effortlessly elegant.", emoji: "🌿" },
      Bold: { outfit: "Bright jogger set or color-pop outfit", footwear: "Bold colorful sneakers", accessories: "Statement sunglasses", tip: "Go full monochrome in a bright color — it's a bold power move.", emoji: "🌈" },
      Comfortable: { outfit: "Loose cotton tee + drawstring shorts", footwear: "Slides or comfy sandals", accessories: "Light bag + sunglasses", tip: "Dress for the activity — wear what lets you move freely.", emoji: "🌺" },
    },
    Rainy: {
      Confident: { outfit: "Dark jeans + fitted top + water-resistant jacket", footwear: "Waterproof sneakers or ankle boots", accessories: "Compact umbrella + crossbody bag", tip: "A sleek rain jacket pulls a casual look together instantly.", emoji: "🌂" },
      Chill: { outfit: "Hoodie + joggers + rain jacket", footwear: "Waterproof shoes", accessories: "Cap + tote bag", tip: "Stack your hood over a cap to stay extra dry.", emoji: "☔" },
      Elegant: { outfit: "Trench coat over a simple outfit (jeans + light sweater)", footwear: "Chelsea boots", accessories: "Compact umbrella + structured bag", tip: "A trench coat is the most timeless rainy-day piece ever.", emoji: "🌧️" },
      Bold: { outfit: "Bright raincoat or colorful windbreaker + dark jeans", footwear: "Bright rain boots or waterproof sneakers", accessories: "Bold umbrella", tip: "A colorful rain jacket turns a grey day into a style moment.", emoji: "⚡" },
      Comfortable: { outfit: "Zip-up sweatshirt + comfy pants + rain jacket", footwear: "Waterproof slip-ons", accessories: "Umbrella + backpack", tip: "Zip-ups are perfect for layering — on or off easily indoors/outdoors.", emoji: "🧥" },
    },
    Cold: {
      Confident: { outfit: "Mom jeans + fitted turtleneck + long coat", footwear: "Ankle boots", accessories: "Scarf + structured tote", tip: "A long coat instantly makes any casual outfit look intentional.", emoji: "❄️" },
      Chill: { outfit: "Cozy oversized sweater + leggings or skinny jeans", footwear: "Chunky boots or warm sneakers", accessories: "Beanie + cozy bag", tip: "An oversized sweater as a dress with tights is the coziest combo.", emoji: "☃️" },
      Elegant: { outfit: "Camel trousers + cream turtleneck + belted coat", footwear: "Brown leather boots", accessories: "Scarf + leather gloves", tip: "Neutral tones in winter create the most sophisticated looks.", emoji: "🍂" },
      Bold: { outfit: "Bright or patterned puffer jacket + black fitted outfit underneath", footwear: "Bold high boots", accessories: "Chunky scarf + beanie", tip: "A fun puffer is the most practical way to be bold in winter.", emoji: "🌟" },
      Comfortable: { outfit: "Fleece-lined leggings + long cozy cardigan + inner layer", footwear: "Lined sneakers or warm boots", accessories: "Hat + bag", tip: "Layer thin pieces rather than one thick one — easy to adjust throughout the day.", emoji: "🧣" },
    },
    Hot: {
      Confident: { outfit: "Cropped linen shirt + high-waisted wide shorts", footwear: "Strappy sandals", accessories: "Sunglasses + tote bag", tip: "High-waisted pieces elongate your silhouette and look very chic.", emoji: "☀️" },
      Chill: { outfit: "Breezy floral dress or loose t-shirt + shorts", footwear: "Slides or sandals", accessories: "Fan + small bag + sunglasses", tip: "Loose floral dresses require zero effort and look amazing in heat.", emoji: "🌻" },
      Elegant: { outfit: "Maxi dress in a solid, muted tone", footwear: "Wedge sandals", accessories: "Woven bag + minimal jewelry", tip: "A well-chosen maxi dress is the most effortlessly elegant summer outfit.", emoji: "🌸" },
      Bold: { outfit: "Two-piece matching set in a bright or bold pattern", footwear: "Bold colorful sandals", accessories: "Statement sunglasses + bag to match", tip: "Bold co-ords are hot-weather icons — super practical and visually loud.", emoji: "🔥" },
      Comfortable: { outfit: "Loose button-through linen dress or easy shorts + flowy top", footwear: "Flat comfortable sandals", accessories: "Sunhat + tote", tip: "A sun hat is functional AND adds charm — never skip it in the heat.", emoji: "🌴" },
    },
    Cloudy: {
      Confident: { outfit: "Slim jeans + crisp jacket or blazer + basic tee", footwear: "Clean sneakers or loafers", accessories: "Watch + crossbody bag", tip: "Cloudy days are perfect for layering — start with a tee and add as needed.", emoji: "⛅" },
      Chill: { outfit: "Oversized crew-neck + baggy pants or wide jeans", footwear: "Chunky sneakers", accessories: "Tote bag", tip: "Baggy top + fitted pants OR fitted top + baggy pants — pick one.", emoji: "🌫️" },
      Elegant: { outfit: "Tailored trousers + silk camisole + light blazer", footwear: "Loafers", accessories: "Delicate bracelet + pendant necklace", tip: "A silk cami peeking out of a blazer is a classic elegant combo.", emoji: "💫" },
      Bold: { outfit: "Contrasting two-tone outfit or bold print top + neutral bottom", footwear: "Statement shoes", accessories: "Bold bag", tip: "Cloudy skies make colors pop more — go bolder than you think.", emoji: "🎨" },
      Comfortable: { outfit: "Relaxed matching loungewear set", footwear: "Slip-on sneakers", accessories: "Light bag", tip: "Matching sets look intentional, not lazy — a great casual trick.", emoji: "🌤️" },
    },
  },
  Date: {
    Sunny: {
      Confident: { outfit: "White open-collar shirt + light chinos or fitted jeans", footwear: "Clean white sneakers or loafers", accessories: "Watch + light cologne/perfume", tip: "Casual confidence is incredibly attractive — be comfortable in what you wear.", emoji: "❤️" },
      Chill: { outfit: "Flowy sundress or relaxed jeans + cute top", footwear: "Sandals or white sneakers", accessories: "Sunglasses + small bag", tip: "A sundress on a sunny date is always a winning choice.", emoji: "💛" },
      Elegant: { outfit: "Midi dress or tailored trousers + silk blouse", footwear: "Strappy heels or loafers", accessories: "Delicate jewelry + small clutch", tip: "Understated elegance makes a powerful impression on a first date.", emoji: "🌹" },
      Bold: { outfit: "Statement top + solid fitted trousers", footwear: "Eye-catching shoes", accessories: "Unique jewelry piece", tip: "Wear something that sparks a conversation — it's a great icebreaker!", emoji: "💥" },
      Comfortable: { outfit: "Cute casual dress or nice jeans + flattering blouse", footwear: "Comfortable flats or clean sneakers", accessories: "Light bag + simple jewelry", tip: "If you're comfortable, your natural personality shines through — that's the goal.", emoji: "🌼" },
    },
    Rainy: {
      Confident: { outfit: "Dark jeans + elegant fitted top + stylish trench coat", footwear: "Ankle boots", accessories: "Compact umbrella + small bag", tip: "A trench coat in the rain is effortlessly romantic and pulled-together.", emoji: "🌧️" },
      Chill: { outfit: "Cozy knit sweater + straight jeans", footwear: "Chelsea boots or ankle boots", accessories: "Umbrella + casual bag", tip: "A cozy sweater + boots combo feels warm and inviting on a rainy date.", emoji: "☕" },
      Elegant: { outfit: "Silk-look blouse + tailored trousers + fitted blazer", footwear: "Heeled Chelsea boots", accessories: "Elegant umbrella + small clutch", tip: "Even in rain, elegance is a choice — a nice umbrella completes the look.", emoji: "🌹" },
      Bold: { outfit: "Vibrant-colored or printed wrap dress + stylish waterproof layer", footwear: "Bold ankle boots", accessories: "Statement earrings + compact umbrella", tip: "A wrap dress flatters all body types and looks great in moody weather.", emoji: "💜" },
      Comfortable: { outfit: "Soft fitted jeans + cozy but cute top + light cardigan", footwear: "Comfortable ankle boots", accessories: "Umbrella + tote bag", tip: "A cardigan is perfect for rainy dates — cozy, easy to remove, still cute.", emoji: "🌂" },
    },
    Cold: {
      Confident: { outfit: "Elegant turtleneck + fitted trousers + structured coat", footwear: "Clean leather ankle boots", accessories: "Simple scarf + watch", tip: "A turtleneck in a rich color (burgundy, forest green) looks very attractive.", emoji: "❄️" },
      Chill: { outfit: "Chunky knit cardigan + jeans + simple inner top", footwear: "Chunky boots", accessories: "Beanie + crossbody bag", tip: "A cozy cardigan on a cold date is charming and approachable.", emoji: "🧣" },
      Elegant: { outfit: "Sleek wrap coat + tailored trousers + classy top", footwear: "Heeled boots", accessories: "Elegant scarf + small clutch", tip: "A wrap coat is always sophisticated and protective in the cold.", emoji: "🌙" },
      Bold: { outfit: "Leather-look jacket + statement top + dark jeans", footwear: "Bold heeled boots", accessories: "Layered necklaces + edgy bag", tip: "Faux leather jackets look incredibly cool and bold on cold days.", emoji: "💫" },
      Comfortable: { outfit: "Soft knit dress + opaque tights + long cozy cardigan", footwear: "Ankle boots", accessories: "Simple scarf + minimal jewelry", tip: "A knit dress is the most comfortable-yet-chic cold-date outfit.", emoji: "🔥" },
    },
    Hot: {
      Confident: { outfit: "Linen shirt (light color) + fitted shorts or trousers", footwear: "Strappy sandals or clean loafers", accessories: "Light watch + sunglasses", tip: "Feeling cool keeps you relaxed — and relaxed energy is very attractive.", emoji: "🌅" },
      Chill: { outfit: "Flirty floral dress or cute shorts + breezy top", footwear: "Flat sandals", accessories: "Sunglasses + small bag", tip: "Go light, go flirty — hot date nights call for breezy and fun.", emoji: "🌺" },
      Elegant: { outfit: "Elegant slip dress in a jewel tone", footwear: "Heeled sandals", accessories: "Delicate necklace + small metallic clutch", tip: "A slip dress is one of the most elegant hot-weather choices.", emoji: "💎" },
      Bold: { outfit: "Bright color-block or bold patterned outfit", footwear: "Colorful heeled sandals or espadrilles", accessories: "Bold earrings + fun bag", tip: "Hot weather = perfect excuse for bright, bold colors. Own the look.", emoji: "🌈" },
      Comfortable: { outfit: "Soft linen co-ord set or comfortable stylish dress", footwear: "Comfortable flat sandals", accessories: "Light bag + simple earrings", tip: "Comfort builds confidence — and confidence is the most attractive quality.", emoji: "🌸" },
    },
    Cloudy: {
      Confident: { outfit: "Dark well-fitted jeans + structured shirt or blouse + light jacket", footwear: "Ankle boots or clean loafers", accessories: "Subtle watch + crossbody", tip: "A light jacket adds just enough polish for a date on a cloudy day.", emoji: "⛅" },
      Chill: { outfit: "Oversized sweater dress or jeans + cute knit top", footwear: "Chunky sneakers or boots", accessories: "Mini bag + simple jewelry", tip: "Sweater dresses are incredibly cute for casual cloudy-day dates.", emoji: "🌫️" },
      Elegant: { outfit: "Satin blouse + tailored wide-leg pants + blazer", footwear: "Elegant mules", accessories: "Gold hoop earrings + clutch", tip: "Wide-leg trousers look impressively elegant with minimal effort.", emoji: "💫" },
      Bold: { outfit: "Printed wrap top + solid high-waist trousers", footwear: "Statement heels or boots", accessories: "Bold earrings + matching bag", tip: "A wrap top flatters beautifully — a safe bet for a bold date look.", emoji: "🎨" },
      Comfortable: { outfit: "Knit co-ord set or stretchy stylish outfit", footwear: "Comfortable ankle boots", accessories: "Simple jewelry + crossbody", tip: "Matching knitwear sets feel luxurious and look effortlessly chic.", emoji: "🌤️" },
    },
  },
};

export default function Home() {
  const [occasion, setOccasion] = useState<Occasion | "">("");
  const [weather, setWeather] = useState<Weather | "">("");
  const [mood, setMood] = useState<Mood | "">("");
  const [result, setResult] = useState<Suggestion | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSuggest = () => {
    if (!occasion || !weather || !mood) {
      setError(true);
      setResult(null);
      return;
    }
    setError(false);
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      const suggestion = suggestions[occasion as Occasion][weather as Weather][mood as Mood];
      setResult(suggestion);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="page-wrapper">
      <div className="card">
        {/* Header */}
        <div className="header">
          <div className="header-icon">👗</div>
          <h1 className="title">Dress Right</h1>
          <p className="subtitle">Tell us about your day, we&apos;ll style you perfectly.</p>
        </div>

        {/* Form */}
        <div className="form-section">
          <div className="field">
            <label className="label">🎯 Occasion</label>
            <select
              className="select"
              value={occasion}
              onChange={(e) => { setOccasion(e.target.value as Occasion); setError(false); }}
            >
              <option value="">Select occasion...</option>
              <option value="College">🎒 College</option>
              <option value="Party">🎉 Party</option>
              <option value="Interview">💼 Interview</option>
              <option value="Casual Outing">🌟 Casual Outing</option>
              <option value="Date">❤️ Date</option>
            </select>
          </div>

          <div className="field">
            <label className="label">🌤️ Weather</label>
            <select
              className="select"
              value={weather}
              onChange={(e) => { setWeather(e.target.value as Weather); setError(false); }}
            >
              <option value="">Select weather...</option>
              <option value="Sunny">☀️ Sunny</option>
              <option value="Rainy">🌧️ Rainy</option>
              <option value="Cold">❄️ Cold</option>
              <option value="Hot">🔥 Hot</option>
              <option value="Cloudy">⛅ Cloudy</option>
            </select>
          </div>

          <div className="field">
            <label className="label">💫 Mood</label>
            <select
              className="select"
              value={mood}
              onChange={(e) => { setMood(e.target.value as Mood); setError(false); }}
            >
              <option value="">Select mood...</option>
              <option value="Confident">💪 Confident</option>
              <option value="Chill">😎 Chill</option>
              <option value="Elegant">✨ Elegant</option>
              <option value="Bold">🔥 Bold</option>
              <option value="Comfortable">🌿 Comfortable</option>
            </select>
          </div>

          {error && (
            <div className="error-msg">
              ⚠️ Please select all three options before clicking suggest!
            </div>
          )}

          <button className="btn" onClick={handleSuggest} disabled={loading}>
            {loading ? "✨ Styling you..." : "✨ Suggest My Outfit"}
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="result-card">
            <div className="result-header">
              <span className="result-emoji">{result.emoji}</span>
              <h2 className="result-title">Your Outfit</h2>
            </div>

            <div className="result-grid">
              <div className="result-item">
                <div className="result-icon">👕</div>
                <div>
                  <div className="result-label">Outfit</div>
                  <div className="result-value">{result.outfit}</div>
                </div>
              </div>
              <div className="result-item">
                <div className="result-icon">👟</div>
                <div>
                  <div className="result-label">Footwear</div>
                  <div className="result-value">{result.footwear}</div>
                </div>
              </div>
              <div className="result-item">
                <div className="result-icon">💍</div>
                <div>
                  <div className="result-label">Accessories</div>
                  <div className="result-value">{result.accessories}</div>
                </div>
              </div>
              <div className="tip-box">
                <div className="tip-icon">💡</div>
                <div>
                  <div className="result-label">Style Tip</div>
                  <div className="result-value">{result.tip}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <p className="footer-note">Made with ♥ to help you dress your best every day.</p>
      </div>
    </div>
  );
}
