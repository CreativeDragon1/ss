/* ============================================
   Plant Data & Garden Logic
   Edit this file to add/update plants!
   ============================================ */

const PLANTS = [
  {
    code: "PLANT-001",
    name: "Tulsi (Holy Basil)",
    scientific: "Ocimum tenuiflorum",
    emoji: "🌿",
    description: "Tulsi, also known as Holy Basil, is a sacred plant in Indian culture revered for its medicinal properties. It is an aromatic perennial plant that has been used in Ayurvedic medicine for thousands of years. Tulsi is known to boost immunity, reduce stress, and has powerful anti-inflammatory and antioxidant properties.",
    origin: "Indian Subcontinent",
    sunlight: "Full Sun (6-8 hours)",
    watering: "Moderate – Water when topsoil is dry",
    benefits: ["Air Purification", "Mosquito Repellent", "Medicinal Properties", "Pollinator Friendly"],
    funFact: "Tulsi releases oxygen for 20 hours a day and also absorbs harmful gases like carbon monoxide and sulfur dioxide. In many Indian homes, it is considered sacred and worshipped daily!"
  },
  {
    code: "PLANT-002",
    name: "Money Plant",
    scientific: "Epipremnum aureum",
    emoji: "🪴",
    description: "The Money Plant is one of the most popular indoor plants worldwide, known for its heart-shaped leaves and air-purifying abilities. It's an excellent beginner plant as it thrives in various conditions and requires minimal maintenance. NASA has listed it among the top air-purifying plants.",
    origin: "Southeast Asia (French Polynesia)",
    sunlight: "Low to Bright Indirect Light",
    watering: "Low – Water once a week",
    benefits: ["Air Purification", "Removes Toxins", "Low Maintenance", "Humidity Control"],
    funFact: "According to Feng Shui, placing a Money Plant in the southeast corner of your home is believed to attract wealth and prosperity. It can also grow in just water without any soil!"
  },
  {
    code: "PLANT-003",
    name: "Aloe Vera",
    scientific: "Aloe barbadensis miller",
    emoji: "🌵",
    description: "Aloe Vera is a succulent plant species known for its thick, fleshy leaves containing a gel-like substance. This remarkable plant has been used for medicinal purposes for thousands of years across various cultures. It's excellent for skin care, wound healing, and can even be consumed as a health drink.",
    origin: "Arabian Peninsula",
    sunlight: "Bright Indirect Light",
    watering: "Low – Water every 2-3 weeks",
    benefits: ["Medicinal Gel", "Air Purification", "Skin Healing", "Drought Tolerant"],
    funFact: "Aloe Vera is often called the 'Plant of Immortality' because the ancient Egyptians used it in their embalming process. Cleopatra reportedly used Aloe Vera gel as part of her daily beauty routine!"
  },
  {
    code: "PLANT-004",
    name: "Snake Plant",
    scientific: "Dracaena trifasciata",
    emoji: "🌿",
    description: "The Snake Plant, also known as Mother-in-law's Tongue, is a remarkably resilient plant famous for its upright, sword-like leaves. It's one of the best air-purifying plants and is unique because it converts CO₂ to oxygen at night, making it perfect for bedrooms.",
    origin: "West Africa (Nigeria, Congo)",
    sunlight: "Low to Bright Indirect Light",
    watering: "Very Low – Water every 2-4 weeks",
    benefits: ["Night Oxygen Production", "Air Purification", "Removes Formaldehyde", "Very Low Maintenance"],
    funFact: "Unlike most plants that release CO₂ at night, the Snake Plant continues to produce oxygen even in the dark! NASA's Clean Air Study found it to be one of the best plants for filtering indoor air pollutants."
  },
  {
    code: "PLANT-005",
    name: "Peace Lily",
    scientific: "Spathiphyllum wallisii",
    emoji: "🌸",
    description: "The Peace Lily is an elegant tropical plant known for its stunning white flowers (spathes) and glossy dark green leaves. It's a powerful air purifier that can remove ammonia, benzene, formaldehyde, and trichloroethylene from indoor air. Despite its name, it's not a true lily.",
    origin: "Tropical Americas & Southeast Asia",
    sunlight: "Low to Medium Indirect Light",
    watering: "Moderate – Keep soil slightly moist",
    benefits: ["Air Purification", "Removes Mold Spores", "Aesthetic Beauty", "Absorbs Acetone"],
    funFact: "Peace Lilies will dramatically droop when they need water but will perk back up within hours of being watered — almost like they're communicating with you! They're also one of the few plants that bloom reliably indoors."
  },
  {
    code: "PLANT-006",
    name: "Spider Plant",
    scientific: "Chlorophytum comosum",
    emoji: "🌱",
    description: "The Spider Plant is a popular houseplant known for its arching leaves and small baby plants (spiderettes) that dangle from the mother plant like spiders on a web. It's incredibly adaptable, thriving in a wide range of conditions, and is one of the easiest plants to propagate.",
    origin: "Southern & Eastern Africa",
    sunlight: "Bright Indirect Light",
    watering: "Moderate – Water when top inch is dry",
    benefits: ["Air Purification", "Easy Propagation", "Pet Safe", "Humidity Addition"],
    funFact: "A single Spider Plant can produce over 200 baby plants in its lifetime! It was one of the first plants tested in NASA's Clean Air Study and was found to remove 95% of formaldehyde from a sealed chamber in just 24 hours."
  },
  {
    code: "PLANT-007",
    name: "Jade Plant",
    scientific: "Crassula ovata",
    emoji: "🌳",
    description: "The Jade Plant is a popular succulent with thick, oval-shaped leaves and sturdy woody stems. With proper care, it can live for decades and develop a beautiful tree-like structure. It's often associated with good luck and prosperity in many cultures around the world.",
    origin: "South Africa & Mozambique",
    sunlight: "Bright Direct to Indirect Light",
    watering: "Low – Water when soil is completely dry",
    benefits: ["Air Purification", "Long-lived Plant", "CO₂ Absorption", "Low Water Usage"],
    funFact: "Jade Plants can live for over 100 years and are often passed down through generations as family heirlooms! In some cultures, they're placed near the entrance of businesses to attract prosperity and success."
  },
  {
    code: "PLANT-008",
    name: "Neem Tree",
    scientific: "Azadirachta indica",
    emoji: "🌳",
    description: "The Neem Tree is one of the most versatile and useful trees on Earth, often called the 'Village Pharmacy' due to its countless medicinal applications. Every part of the tree — leaves, bark, seeds, and flowers — has beneficial properties. It's also an excellent natural pesticide.",
    origin: "Indian Subcontinent",
    sunlight: "Full Sun (8+ hours)",
    watering: "Low to Moderate – Drought tolerant",
    benefits: ["Natural Pesticide", "Medicinal Properties", "Air Purification", "Soil Improvement"],
    funFact: "The Neem tree can purify up to 4 tons of CO₂ per year! Ancient Indian texts describe over 50 different medicinal uses for Neem. The UN has declared Neem as 'The Tree of the 21st Century' due to its incredible versatility."
  },
  {
    code: "PLANT-009",
    name: "Bamboo Palm",
    scientific: "Chamaedorea seifrizii",
    emoji: "🎋",
    description: "The Bamboo Palm is an elegant tropical palm that brings a lush, tropical feel to any space. Despite its name, it's not actually a bamboo — it belongs to the palm family. It's rated as one of the top air-purifying plants and is excellent at adding moisture to dry indoor environments.",
    origin: "Central America (Mexico, Guatemala)",
    sunlight: "Low to Bright Indirect Light",
    watering: "Moderate – Keep soil evenly moist",
    benefits: ["Air Purification", "Natural Humidifier", "Removes Benzene", "Pet Friendly"],
    funFact: "The Bamboo Palm can transpire up to 1 liter of water per day into the surrounding air, acting as a natural humidifier! It was rated #3 in NASA's study of the 50 best air-purifying houseplants."
  },
  {
    code: "PLANT-010",
    name: "Marigold",
    scientific: "Tagetes erecta",
    emoji: "🌼",
    description: "Marigolds are vibrant, cheerful flowering plants known for their bright yellow, orange, and red blooms. They are incredibly easy to grow, bloom prolifically, and have a distinctive fragrance that naturally repels many garden pests. They hold cultural significance in many traditions.",
    origin: "Mexico & Central America",
    sunlight: "Full Sun (6+ hours)",
    watering: "Moderate – Regular watering",
    benefits: ["Pest Repellent", "Pollinator Attraction", "Soil Health", "Companion Planting"],
    funFact: "Marigolds are used extensively during the Indian festival of Diwali and the Mexican celebration of Día de los Muertos (Day of the Dead). Their roots release a substance that kills harmful nematodes in the soil!"
  },
  {
    code: "PLANT-011",
    name: "Lavender",
    scientific: "Lavandula angustifolia",
    emoji: "💜",
    description: "Lavender is a beloved aromatic herb famous for its beautiful purple flowers and calming fragrance. Used for centuries in aromatherapy, cooking, and medicine, this Mediterranean plant is drought-tolerant and attracts beneficial pollinators like bees and butterflies to gardens.",
    origin: "Mediterranean Region",
    sunlight: "Full Sun (6-8 hours)",
    watering: "Low – Drought tolerant",
    benefits: ["Stress Relief", "Pollinator Friendly", "Natural Insect Repellent", "Aromatic Properties"],
    funFact: "Ancient Romans used Lavender to scent their bathwater — the word 'lavender' actually comes from the Latin word 'lavare' meaning 'to wash.' Just the scent of lavender has been scientifically proven to reduce anxiety and promote better sleep!"
  },
  {
    code: "PLANT-012",
    name: "Rubber Plant",
    scientific: "Ficus elastica",
    emoji: "🌿",
    description: "The Rubber Plant is a striking indoor tree with large, glossy, dark green leaves (sometimes with burgundy tones). Once used to make rubber latex, it's now primarily grown as an ornamental houseplant. It can grow up to 10 feet indoors and is an excellent air purifier.",
    origin: "Southeast Asia (India, Indonesia)",
    sunlight: "Bright Indirect Light",
    watering: "Moderate – Water when top soil is dry",
    benefits: ["Air Purification", "CO₂ Absorption", "Removes Toxins", "Aesthetic Impact"],
    funFact: "In its native habitat, the Rubber Plant can grow up to 100 feet tall! Its leaves are so large and waxy that they were historically used as natural plates in parts of Southeast Asia."
  }
];

// Make plants accessible globally
window.PLANTS = PLANTS;
