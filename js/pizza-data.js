const pizzaPlaces = [
  {
    name: "Via Tevere",
    neighbourhood: "Grandview-Woodland",
    style: ["Neapolitan"],
    address: "1190 Victoria Dr, Vancouver, BC V5L 4G5",
    description: "A well-known East Van Neapolitan spot with wood-fired pizzas and a classic soft, airy crust."
  },
  {
    name: "Nicli Antica",
    neighbourhood: "UBC / Wesbrook Village",
    style: ["Neapolitan"],
    address: "3338 Wesbrook Mall, Vancouver, BC",
    description: "A stylish Neapolitan pizzeria serving wood-fired pies in the Wesbrook Village area."
  },
  {
    name: "Sopra Sotto",
    neighbourhood: "Commercial Drive",
    style: ["Neapolitan"],
    address: "1510 Commercial Dr, Vancouver, BC V5L 2Y7",
    description: "A popular Little Italy restaurant known for Neapolitan-style pizza in a lively sit-down setting."
  },
  {
    name: "Famoso",
    neighbourhood: "Commercial Drive",
    style: ["Neapolitan"],
    address: "1380 Commercial Dr, Vancouver, BC V5L 3X6",
    description: "A Neapolitan chain location that appears to have been the Commercial Drive branch; reports indicate it closed in January 2026."
  },
  {
    name: "Carano",
    neighbourhood: "Fraserhood",
    style: ["Neapolitan"],
    address: "4241 Fraser St, Vancouver, BC V5F 4G1",
    description: "A Fraserhood pizza shop with a neighbourhood feel and quality pies made with a more artisan approach."
  },
  {
    name: "Marcelo’s",
    neighbourhood: "Commercial Drive",
    style: ["Neapolitan"],
    address: "1404 Commercial Dr, Vancouver, BC V5L 3X9",
    description: "A long-running Commercial Drive Italian restaurant and pizzeria with a traditional neighbourhood vibe."
  },
  {
    name: "Novo",
    neighbourhood: "Fairview / Kitsilano border",
    style: ["Neapolitan"],
    address: "2118 Burrard St, Vancouver, BC V6J 3H6",
    description: "An Italian pizzeria and wine bar serving brick-oven pizzas near Burrard and West 6th."
  },

  {
    name: "Straight Outta Brooklyn",
    neighbourhood: "Downtown",
    style: ["New York", "By the Slice"],
    address: "350 Robson St, Vancouver, BC",
    description: "A Vancouver favourite for New York-style pizza with big foldable slices and a casual grab-and-go feel."
  },
  {
    name: "AJ’s Brooklyn Pizza Joint",
    neighbourhood: "Mount Pleasant",
    style: ["New York", "By the Slice", "Modern"],
    address: "325 E Broadway, Vancouver, BC V5T 1W5",
    description: "A popular Broadway pizza shop known for Brooklyn-style pies, slices, and a more modern pizza-shop feel."
  },
  {
    name: "Nat’s New York Pizzeria",
    neighbourhood: "Kitsilano / West Broadway",
    style: ["New York", "By the Slice", "Modern"],
    address: "2684 W Broadway, Vancouver, BC V6K 2G3",
    description: "A longtime local favourite for classic New York-style pizza and quick slices on West Broadway."
  },
  {
    name: "Don’t Argue",
    neighbourhood: "Commercial Drive",
    style: ["New York", "Modern"],
    address: "1321 Commercial Dr, Vancouver, BC V5L 3X5",
    description: "A revived Vancouver pizza name now operating from Commercial Drive with a slice-focused, modern feel."
  },

  {
    name: "Fresh Slice",
    neighbourhood: "Downtown",
    style: ["By the Slice"],
    address: "768 Robson St, Vancouver, BC V6Z 1A1",
    description: "A fast, affordable slice chain that is easy to find downtown and popular for quick takeaway pizza."
  },
  {
    name: "Uncle Fatih’s",
    neighbourhood: "Gastown / Stadium District",
    style: ["By the Slice"],
    address: "638 Abbott St, Vancouver, BC V6B 6N7",
    description: "A local slice chain known for late-night pizza, big portions, and easy downtown pickup."
  },
  {
    name: "Pizza Garden",
    neighbourhood: "Downtown",
    style: ["By the Slice", "Neapolitan"],
    address: "675 Smithe St, Vancouver, BC V6B 2C9",
    description: "A local chain offering artisan-inspired pizza that blends quick-service slices with Neapolitan influence."
  },
  {
    name: "Ragazzi",
    neighbourhood: "East Vancouver / Renfrew-Collingwood",
    style: ["By the Slice", "Neapolitan"],
    address: "2996 E 22nd Ave, Vancouver, BC",
    description: "An East Van pizza shop serving stone-baked pies with a more old-school neighbourhood approach."
  },
  {
    name: "Rubato",
    neighbourhood: "Mount Pleasant / Broadway",
    style: ["By the Slice", "Modern", "Neapolitan"],
    address: "561 W Broadway, Vancouver, BC V5Z 1E6",
    description: "A newer pizza spot combining Neapolitan roots with creative toppings and a more modern menu style."
  },
  {
    name: "La Pache",
    neighbourhood: "Commercial Drive",
    style: ["By the Slice"],
    address: "2082 Commercial Dr, Vancouver, BC V5N 4B2",
    description: "A casual Commercial Drive pizza shop focused on convenient slices, takeout, and delivery."
  },
  {
    name: "Romilano",
    neighbourhood: "Renfrew",
    style: ["By the Slice"],
    address: "1637 Renfrew St, Vancouver, BC V5K 4E1",
    description: "A neighbourhood pizza place serving a broad menu of familiar crowd-pleasing slice options."
  },
  {
    name: "Ignite",
    neighbourhood: "Mount Pleasant",
    style: ["By the Slice", "Neapolitan"],
    address: "2588 Main St, Vancouver, BC V5T 3E6",
    description: "A Main Street pizzeria known for serving both whole pies and slices in a bright, modern setting."
  },
  {
    name: "Fire Pizza",
    neighbourhood: "Commercial Drive",
    style: ["By the Slice", "Modern"],
    address: "1918 Commercial Dr, Vancouver, BC V5N 4A6",
    description: "A casual Commercial Drive slice shop with quick service and a straightforward menu."
  },
  {
    name: "Hot Pie Pizza",
    neighbourhood: "",
    style: ["By the Slice"],
    address: "",
    description: "You may want to verify the current Vancouver location details for this one before adding it."
  },

  {
    name: "Rocky Mountain Flatbread",
    neighbourhood: "Riley Park / Main Street",
    style: ["Modern"],
    address: "4186 Main St, Vancouver, BC",
    description: "A family-friendly Main Street restaurant known for flatbread-style pizzas and local ingredients."
  },
  {
    name: "Just Pizza",
    neighbourhood: "East Vancouver / Kensington-Cedar Cottage",
    style: ["Modern"],
    address: "1629 Kingsway, Vancouver, BC",
    description: "A newer Vancouver pizza spot making sourdough-crust pizzas with both classic and more creative toppings."
  },
  {
    name: "Virtuous Pie",
    neighbourhood: "Chinatown / Stadium District",
    style: ["Modern"],
    address: "583 Main St, Vancouver, BC V6A 2V1",
    description: "A modern plant-based pizza restaurant known for vegan pies and house-made dairy-free ice cream."
  },
  {
    name: "The Parlour",
    neighbourhood: "Yaletown",
    style: ["Modern"],
    address: "1011 Hamilton St, Vancouver, BC V6B 5T4",
    description: "A stylish Yaletown restaurant pairing handcrafted pizzas with cocktails and a lounge-like atmosphere."
  },
  {
    name: "Nook",
    neighbourhood: "Kitsilano",
    style: ["Modern", "Neapolitan"],
    address: "1525 Yew St, Vancouver, BC V6K 3E5",
    description: "A cozy neighbourhood Italian restaurant known for rustic pizzas, pasta, and a relaxed atmosphere."
  },
  {
    name: "Industry Apizza",
    neighbourhood: "Commercial Drive",
    style: ["Modern"],
    address: "2360 Commercial Dr, Vancouver, BC V5N 4B5",
    description: "A Commercial Drive spot specializing in New Haven-style apizza with thinner, charred crusts."
  },
  {
    name: "R&B Ale & Pizza House",
    neighbourhood: "Mount Pleasant / Brewery Creek",
    style: ["Modern"],
    address: "54 E 4th Ave, Vancouver, BC V5T 1E8",
    description: "A brewery-pizza hybrid serving creative pies alongside house beer in a relaxed industrial setting."
  },
  {
    name: "Luppolo Brewing Co.",
    neighbourhood: "East Vancouver / Yeast Van",
    style: ["Modern"],
    address: "1123 Venables St, Vancouver, BC V6A 2E3",
    description: "A brewery destination in East Van known for beer and pizza in a warm Italian-inspired setting."
  },

  {
    name: "Di Beppe",
    neighbourhood: "Gastown",
    style: ["Taglio", "By the Slice"],
    address: "8 W Cordova St, Vancouver, BC V6B 1C9",
    description: "A Gastown Italian café and restaurant offering Roman-style pizza al taglio along with other casual Italian fare."
  },
  {
    name: "Caffè Soccavo",
    neighbourhood: "Commercial Drive",
    style: ["Taglio", "By the Slice"],
    address: "1321 Commercial Dr, Vancouver, BC V5L 3X5",
    description: "A Little Italy café offering espresso, sandwiches, and pizza by the slice in a casual social setting."
  }
];