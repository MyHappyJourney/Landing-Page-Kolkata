import { PackageItem, ItineraryDay, Review, FAQItem, TrustItem } from '../types';

export const PHONE_NUMBER = "+918197417772";
export const DISPLAY_PHONE = "+91 81974 17772";
export const WHATSAPP_NUMBER = "918197417772";
export const ENQUIRY_EMAIL = "mhjenquiry@gmail.com";
export const WHATSAPP_DEFAULT_MSG = encodeURIComponent("Hi MyHappyJourney, I am interested in your Kerala Tour Packages. Please share more details and a quote.");

export const PACKAGES: PackageItem[] = [
  {
    id: "pkg-4n5d",
    title: "4N / 5D Kerala Delight",
    durationBadge: "4 NIGHTS / 5 DAYS",
    nights: 4,
    days: 5,
    route: "2N Munnar • 1N Thekkady • 1N Alleppey",
    locations: ["Munnar (2N)", "Thekkady (1N)", "Alleppey (1N)"],
    price: 14999,
    originalPrice: 18999,
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "2 Nights in scenic Munnar Hill Station",
      "Periyar Wildlife Sanctuary in Thekkady",
      "Overnight Houseboat Cruise in Alleppey with all meals",
      "Private AC vehicle for all transfers & sightseeing",
      "Daily breakfast & handpicked 3-star accommodations"
    ]
  },
  {
    id: "pkg-5n6d",
    title: "5N / 6D Kerala Explorer",
    durationBadge: "5 NIGHTS / 6 DAYS",
    nights: 5,
    days: 6,
    route: "2N Munnar • 1N Thekkady • 1N Alleppey • 1N Kovalam",
    locations: ["Munnar (2N)", "Thekkady (1N)", "Alleppey (1N)", "Kovalam (1N)"],
    price: 17999,
    originalPrice: 22499,
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Munnar Tea Gardens & Waterfalls",
      "Thekkady Spice Plantations & Boat Safari",
      "Traditional Alleppey Deluxe Houseboat Stay",
      "Beach relaxation at Kovalam Lighthouse Beach",
      "Private AC Sedan/SUV driver throughout"
    ]
  },
  {
    id: "pkg-6n7d",
    title: "6N / 7D Complete Kerala Package",
    durationBadge: "6 NIGHTS / 7 DAYS",
    nights: 6,
    days: 7,
    route: "2N Munnar • 1N Thekkady • 1N Alleppey • 2N Kovalam",
    locations: ["Munnar (2N)", "Thekkady (1N)", "Alleppey (1N)", "Kovalam (2N)"],
    price: 18999,
    originalPrice: 24999,
    isPopular: true,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Comprehensive God's Own Country tour",
      "2 Nights Munnar Hill station & Tea Museum",
      "1 Night Thekkady Spice Garden & Lake Cruise",
      "1 Night Luxury Private Houseboat in Backwaters",
      "2 Nights Beachside luxury at Kovalam & Poovar Island trip"
    ]
  },
  {
    id: "pkg-7n8d",
    title: "7N / 8D Grand Kerala Odyssey",
    durationBadge: "7 NIGHTS / 8 DAYS",
    nights: 7,
    days: 8,
    route: "2N Munnar • 1N Thekkady • 1N Alleppey • 2N Kovalam • 1N Trivandrum",
    locations: ["Munnar (2N)", "Thekkady (1N)", "Alleppey (1N)", "Kovalam (2N)", "Trivandrum (1N)"],
    price: 22999,
    originalPrice: 29999,
    image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Complete end-to-end Kerala experience",
      "All major hill stations, sanctuaries, backwaters & beaches",
      "Visit Padmanabhaswamy Temple & Trivandrum heritage",
      "Poovar Golden Sand Beach & Backwater Boating",
      "24x7 Dedicated Travel Manager Assistance"
    ]
  }
];

export const ITINERARY_DAYS: ItineraryDay[] = [
  {
    dayNumber: 1,
    title: "Cochin → Munnar",
    route: "Arrival & Transfer to Hill Station",
    image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Munnar",
    highlights: [
      "Cheeyappara & Valara Waterfalls",
      "Lush Green Tea Gardens",
      "Aromatic Spice Plantation Tour"
    ],
    description: "Arrive at Cochin Airport/Railway station where our private AC driver greets you. Drive through breathtaking misty mountain winding roads towards Munnar. En route visit Cheeyappara and Valara waterfalls and organic spice plantations."
  },
  {
    dayNumber: 2,
    title: "Munnar Sightseeing",
    route: "Full Day Tea Country Exploration",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Munnar",
    highlights: [
      "Eravikulam National Park (Nilgiri Tahr)",
      "Mattupetty Dam & Lake Boating",
      "Echo Point Scenic View",
      "Tata Tea Museum & Tasting"
    ],
    description: "After a delicious breakfast, set off to explore Eravikulam National Park, home to the endangered Nilgiri Tahr. Visit Mattupetty Dam, Echo Point, Kundala Lake and learn about tea processing at the Tata Tea Museum."
  },
  {
    dayNumber: 3,
    title: "Munnar → Thekkady",
    route: "Wildlife Sanctuary & Spice Valley",
    image: "https://images.unsplash.com/photo-1581852017103-68accd5509b6?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Thekkady",
    highlights: [
      "Periyar Wildlife Sanctuary Lake Cruise",
      "Elephant Safari & Interaction",
      "Cardamom & Pepper Spice Walk",
      "Traditional Kathakali Cultural Show"
    ],
    description: "Drive through scenic cardamon hills to Thekkady (Periyar). Take a boating trip on Periyar Lake inside the wildlife reserve to spot wild elephants, gaur, and exotic birds. In the evening enjoy Kathakali dance and Kalaripayattu martial arts performance."
  },
  {
    dayNumber: 4,
    title: "Thekkady → Alleppey",
    route: "Overnight Houseboat Experience",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Alleppey Houseboat",
    highlights: [
      "Private Deluxe Houseboat Cruise",
      "Freshly Cooked Traditional Kerala Lunch",
      "Sunset over Palm-Fringed Canals",
      "Candlelight Dinner & Breakfast Onboard"
    ],
    description: "Board your private traditional Kerala Kettuvallam (Houseboat) at noon. Cruise gently along serene palm-fringed backwater canals, village shorelines and paddy fields. Enjoy authentic Kerala lunch, tea snacks, dinner and breakfast prepared by your onboard chef."
  },
  {
    dayNumber: 5,
    title: "Alleppey → Kovalam",
    route: "Backwaters to Golden Beaches",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Kovalam",
    highlights: [
      "Lighthouse Beach Walk",
      "Hawa Beach & Crescent Bay",
      "Panoramic Sunset View at Kovalam Pier"
    ],
    description: "Disembark from the houseboat after breakfast and drive to Kovalam beach town. Check into your beach resort. Spend the afternoon relaxing on the golden sands of Lighthouse Beach, Hawa Beach, and watching the magnificent Arabian Sea sunset."
  },
  {
    dayNumber: 6,
    title: "Kovalam & Poovar Island",
    route: "Coastal Paradise & Mangrove Boating",
    image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Kovalam",
    highlights: [
      "Poovar Island Mangrove Forest Boating (Optional)",
      "Golden Sand Beach Estuary",
      "Sree Padmanabhaswamy Temple Visit"
    ],
    description: "Visit the magical Poovar Island where river, lake, sea, and beach meet. Enjoy backwater motorboating through dense mangrove forests. Return to Trivandrum to seek blessings at the world-famous Padmanabhaswamy Temple."
  },
  {
    dayNumber: 7,
    title: "Trivandrum Departure",
    route: "Sree Padmanabhaswamy Temple & Drop",
    image: "https://images.unsplash.com/photo-1600100397608-f020f7e43950?auto=format&fit=crop&w=800&q=80",
    stayLocation: "Homebound",
    highlights: [
      "Sree Padmanabhaswamy Temple Heritage Visit",
      "Trivandrum Handicrafts & Spice Shopping",
      "Transfer to Trivandrum Airport / Railway Station"
    ],
    description: "Enjoy breakfast at your resort. Visit the sacred Sree Padmanabhaswamy Temple in Trivandrum. Time permitting, indulge in souvenir shopping for spices, banana chips, and handicrafts. Our driver drops you at Trivandrum Airport/Railway Station with wonderful memories."
  }
];

export const INCLUSIONS = [
  "Accommodation in Handpicked 3-Star / 4-Star Hotels",
  "Daily Breakfast at all Hotels & Resorts",
  "Houseboat Stay with All Meals (Lunch, Evening Tea, Dinner, Breakfast)",
  "Private AC Vehicle (Sedan / SUV) for All Transfers & Sightseeing",
  "Toll, Parking, Fuel, Driver Allowance & Interstate Taxes",
  "Pickup from Cochin / Trivandrum Airport or Railway Station",
  "Drop at Trivandrum / Cochin Airport or Railway Station",
  "Sightseeing as per the customized itinerary",
  "24×7 Travel Assistance & Dedicated Relationship Manager"
];

export const EXCLUSIONS = [
  "Airfare or Train Tickets to/from Kerala",
  "Lunch & Dinner (except during Houseboat stay)",
  "Entry tickets for Monuments, Parks, Shows & Boating fees",
  "Personal expenses like laundry, phone calls, room service, tips",
  "GST / Taxes if applicable as per government norms",
  "Anything not specifically mentioned in the inclusions list"
];

export const WHY_BOOK_ITEMS = [
  {
    title: "Kerala Specialists",
    subtitle: "18+ Years Experience crafting handpicked itineraries",
    icon: "Award"
  },
  {
    title: "Private & Comfortable",
    subtitle: "No Sharing, Private AC Cab dedicated just for your family",
    icon: "Car"
  },
  {
    title: "Best Price Guarantee",
    subtitle: "Direct local rates with zero hidden charges or extra fees",
    icon: "ShieldCheck"
  },
  {
    title: "24×7 Local Support",
    subtitle: "Our ground operations team in Kerala is always with you",
    icon: "Headphones"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Sourav & Debjani Banerjee",
    location: "Salt Lake, Kolkata",
    rating: 5,
    comment: "Booked our 6N/7D Kerala trip from Kolkata. MyHappyJourney handled everything seamlessly from flight timings to Cochin pickup. Dedicated AC cab was spotless and Bengali phone support made it stress-free for our elderly parents!",
    date: "2 weeks ago"
  },
  {
    id: "rev-2",
    name: "Anirban Mukherjee",
    location: "Ballygunge, Kolkata",
    rating: 5,
    comment: "The Alleppey houseboat was unforgettable! They specially arranged delicious fresh fish fry & Bengali-friendly meals on board. Munnar tea gardens and Kovalam sunsets were breathtaking. 10/10 service!",
    date: "1 month ago"
  },
  {
    id: "rev-3",
    name: "Rajarshi & Piyali Das",
    location: "Howrah, West Bengal",
    rating: 5,
    comment: "Got our customized Kerala quote in just 10 minutes. Pricing was completely transparent with zero hidden costs. Driver Prasad was polite and helpful. Highly recommended to all Bengali families!",
    date: "1 month ago"
  },
  {
    id: "rev-4",
    name: "Dr. Subhashish Roy",
    location: "New Town, Kolkata",
    rating: 5,
    comment: "Third time travelling with MyHappyJourney. Their 24x7 phone assistance and hotel selections in Munnar & Thekkady were top notch. Best Kerala tour planner for Kolkata travellers!",
    date: "2 months ago"
  },
  {
    id: "rev-5",
    name: "Swagata Sen",
    location: "Siliguri, West Bengal",
    rating: 5,
    comment: "We had a memorable family tour from Siliguri. Private vehicle was always on time, resort rooms had stunning valley views, and food arrangements were excellent. Truly memorable trip!",
    date: "2 months ago"
  },
  {
    id: "rev-6",
    name: "Indranil & Sharmila Ghosh",
    location: "Durgapur, West Bengal",
    rating: 5,
    comment: "Outstanding arrangements from start to finish. Fresh fish meals on the backwaters houseboat, great sightseeing, and warm hospitality throughout. 5-star experience!",
    date: "3 months ago"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is included in this package?",
    answer: "Our standard Kerala tour package includes handpicked hotel/resort accommodations, daily breakfast, a private AC cab with dedicated driver for all sightseeing & transfers, a private houseboat stay in Alleppey with all meals (lunch, dinner, breakfast), toll taxes, driver allowance, and 24x7 local travel support."
  },
  {
    id: "faq-2",
    question: "Is this package customizable?",
    answer: "Yes, 100%! All our packages can be fully customized according to your arrival point (Cochin or Trivandrum), travel dates, budget preference, hotel categories (3-Star, 4-Star, or Luxury Resorts), and specific places you wish to visit."
  },
  {
    id: "faq-3",
    question: "What kind of vehicle will be provided?",
    answer: "We provide dedicated, clean, private AC vehicles based on your group size: Sedan (Swift Dzire/Etios) for 2-3 guests, SUV (Innova/Ertiga) for 4-6 guests, and Tempo Traveller for groups of 7 or more. The vehicle remains exclusively with your family throughout the tour."
  },
  {
    id: "faq-4",
    question: "Are flights included?",
    answer: "Airfare / train tickets are generally not included in the standard base package price, but our travel experts can easily assist you in booking flight or train tickets from your city at competitive prices upon request."
  },
  {
    id: "faq-5",
    question: "What is the best time to visit Kerala?",
    answer: "Kerala is a year-round destination! September to March offers pleasant weather ideal for hill stations, wildlife, and beaches. Monsoons (June to August) are world-famous for lush greenery and Ayurvedic wellness treatments."
  },
  {
    id: "faq-6",
    question: "Is the houseboat stay private?",
    answer: "Yes, absolutely! The houseboat provided in your package is 100% private with air-conditioned bedrooms, attached bathrooms, a private sitting deck, and a dedicated crew (captain, chef, and guide) serving fresh authentic Kerala cuisine."
  },
  {
    id: "faq-7",
    question: "What is your cancellation policy?",
    answer: "We offer guest-friendly, flexible cancellation policies. Depending on how far in advance you cancel prior to your travel date, partial or full refunds are processed promptly. Full details are provided in your booking voucher."
  },
  {
    id: "faq-8",
    question: "Do you provide airport pickup and drop?",
    answer: "Yes, seamless door-to-door airport/railway station pickup and drop are included. Usually pickup is from Cochin International Airport (COK) and drop at Trivandrum International Airport (TRV), or vice versa according to your route."
  }
];

export const TRUST_ITEMS: TrustItem[] = [
  {
    iconName: "Google",
    title: "Google 4.9 / 5 ⭐",
    subtitle: "2,500+ Reviews"
  },
  {
    iconName: "ShieldCheck",
    title: "ISO Certified",
    subtitle: "ISO 9001:2015 Quality"
  },
  {
    iconName: "Award",
    title: "Kerala Experts",
    subtitle: "18+ Years Experience"
  },
  {
    iconName: "Users",
    title: "5000+",
    subtitle: "Happy Families"
  },
  {
    iconName: "Tag",
    title: "Best Price",
    subtitle: "Guarantee"
  },
  {
    iconName: "Sliders",
    title: "Customisable",
    subtitle: "Tour Packages"
  },
  {
    iconName: "Headphones",
    title: "24×7",
    subtitle: "Customer Support"
  }
];
