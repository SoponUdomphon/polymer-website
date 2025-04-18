export interface Author {
  name: string;
  role?: string;
  laboratory?: string;
}

export interface Content {
  id: string;
  title: string;
  description: string;
  content: string;
  author: Author;
  date: string;
  images: string[];
  category: string;
}

export interface Presentation {
  id: string;
  topic: string;
  presenter: Author;
  date: string;
  location: string;
  abstract: string;
  content: string;
  slides?: string;
  category: "seminar" | "thesis defense";
}

export const news: Content[] = [
  {
    id: "news-021",
    title: "Industrial Visit Activity",
    description: "A big thank you to Labtech Engineering for this amazing learning opportunity!",
    content: `🚀 Industrial Visit Activity 🚀

On February 20, 2025, our faculty members and students from the Polymer Science and Technology graduate programs, along with undergraduate chemistry students from the Faculty of Science, Mahidol University, had the incredible opportunity to visit Labtech Engineering at the Bangpoo Industrial Estate, Samut Prakan.

💡 Labtech Engineering is a world-renowned manufacturer of laboratory and pilot-scale polymer processing equipment, famous for its iconic yellow machines! This visit provided our students with firsthand experience of real-world manufacturing processes, enhancing their knowledge and practical understanding of the industry.

🎯 A big thank you to Labtech Engineering for this amazing learning opportunity!`,
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University"
    },
    date: "20 February 2025",
    images: [
      "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/489493182_1111712140758302_7917854353664013565_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGscYpYYewfmakeOv13Ku3rfZ8azkQrIuN9nxrORCsi44jqdDUr46AHm8RbTwapxaU&_nc_ohc=3jTfCG6IE5cQ7kNvwGzfs0W&_nc_oc=AdlsKdVE_8f7WPcdkkZrCnXIDdvLFNP_gknJJ5LJh5cs0jM_VbXMK4n1ilB0ZDwDk8k&_nc_zt=23&_nc_ht=scontent.fbkk29-1.fna&_nc_gid=ysk4zuyiFqqzyK3XsVYz9w&oh=00_AfG0Ci655ZOVIS1JjGWwoCkDYwBvefA4zdj4sTwN_U7tuA&oe=68046293",
      "https://scontent.fbkk29-6.fna.fbcdn.net/v/t39.30808-6/489826034_1111712147424968_714149230005545382_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFx0jXxkc62SHfNq89E98d7rcI_IBVoUx-twj8gFWhTH2fjNIq6XHKBmBoC7YSvMOQ&_nc_ohc=UL24ugJwB0wQ7kNvwHYUMWI&_nc_oc=AdlU7Ff941zOAE4XHAHDahEb4e92dJIdb7sYjEu1_VIZYdwZJ4dUmd0gC_-fRFAADuQ&_nc_zt=23&_nc_ht=scontent.fbkk29-6.fna&_nc_gid=FAR3F2h775dyGlYzkTsPQA&oh=00_AfEg2WWy7curakdQu1_TgbhcUxYMMSZ1I-H6qC47CfTfQw&oe=68046D4D",
      "https://scontent.fbkk29-9.fna.fbcdn.net/v/t39.30808-6/488921608_1111712020758314_5121550573056554418_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEkNJ4ulebImc57sDRiRUGgJd1GU_aRlHgl3UZT9pGUeGDp26hEQCo3tD00fVNfTf4&_nc_ohc=A-AW5f7OgyQQ7kNvwGG1A0j&_nc_oc=AdmbGlQAB_8hJpt3hNnTdGp5NFGZTrCF6dUtpKBxvBdPWBP0-RvK7nyuH1hhFur_XkQ&_nc_zt=23&_nc_ht=scontent.fbkk29-9.fna&_nc_gid=0OjLtYddfWEDn7nczXoqiw&oh=00_AfGI3F1b7mnPYNd63DsFZ_e0_PeyE7R55k_NwdzfFC4fxA&oe=6804727D"
    ],
    category: "Education"
  },
  {
    id: "news-022",
    title: "NRCT Awards Gold Medal to Mahidol University's PiPreg-R Innovation",
    description: "Assoc. Prof. Taweechai Amornsakchai and team receive prestigious recognition for sustainable rubber innovation.",
    content: `🎉 Congratulations! 🎉
The National Research Council of Thailand (NRCT), via the 2025 Bangkok International Intellectual Property, Invention, Innovation and Technology Exposition (IPITEx2025), has awarded a Gold Medal to Assoc. Prof. Taweechai Amornsakchai and his research team, including Assoc. Prof. Sombat Thanawat, Prof. Pranee Phinyocheep, Mr. Satit Thaiwattananon, Asst. Prof. Preeyanuch Junkong, Mr. Sorn Duangsuwan, and Mr. Wongsathon Saitrong. These esteemed instructors and students from the Polymer Science and Technology Program, Department of Chemistry, Faculty of Science, Mahidol University were recognized for their outstanding invention, "PiPreg-R".

This innovative work was showcased at the Bangkok International Intellectual Property, Invention, Innovation, and Technology Exposition during Thailand Inventors' Day 2025 (February 2–6, 2025).

🔹 What is PiPreg-R?
PiPreg-R is a sustainable reinforced rubber innovation that integrates pineapple leaf fibers with natural rubber to create a low-carbon, eco-friendly material. It enhances flexibility, elasticity, and reinforcement without requiring energy-intensive processes. Delivered as unidirectional tapes compatible with standard manufacturing equipment, PiPreg-R offers versatile applications—from handicrafts to high-performance engineering—aligning with modern sustainability goals.

📌 Learn more about PiPreg-R here:
🔗 Watch the video: https://youtu.be/s9hbZY-jdvg
💻 Visit our website: https://evergentech.co/

👏 Congratulations once again to the research team for this remarkable achievement!`,
    author: {
      name: "Polymer Science and Technology Program",
      role: "Research Team"
    },
    date: "6 February 2025",
    images: [
      "https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/486871669_1103663188229864_1045638608012285737_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFvQAkRp9bD9Gi_4xwsEgJ-kSoW4CKWf62RKhbgIpZ_rTH2NBaGPupfOyNQeglpLt0&_nc_ohc=NtSZqUZ8z5UQ7kNvwFogtAb&_nc_oc=AdkEfsN7QkO35FrGFyXg1n5RKVivpUXIJ5DUVQzvW4evmtVSsdatseM0Som3D1dF7po&_nc_zt=23&_nc_ht=scontent.fbkk29-1.fna&_nc_gid=1ChVnVxvHa3KyhkiGWKg2Q&oh=00_AfFuYJzQ0hhxSZj8DbQHvJlYHlo-tRC8gIiPkaYxD9x9IA&oe=6804509A"
    ,"https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/487313339_1103663181563198_8247998136303224664_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEiuDLEVOEPE4Jf7rgYhJgncsRc4oj80CdyxFziiPzQJ1iQ56xH1EEOGw2_IxhSuKI&_nc_ohc=xuHOR6GZyjUQ7kNvwFsfBR4&_nc_oc=AdnOxsm27ux-7R1HxDKs7iYR3FEdQQvFfFpMsiI1lH87Qtg1Wm2xgaQ-uXq8Dw_g63w&_nc_zt=23&_nc_ht=scontent.fbkk29-1.fna&_nc_gid=9Pqy8K22YdhC0LAXEJKkkA&oh=00_AfFTlNvJIV_91XcekIXDsEq1r2NoBzq8s-VHzQCIFOjrpw&oe=68044A5F"
    ,"https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/487298890_1103663161563200_5864652339307688741_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFER_IRwoP4RzlynTZB_isHqbdghtmxBzept2CG2bEHN4iBJHX5ThqsLHf53dt4nGI&_nc_ohc=IGc-ifmd3GUQ7kNvwHbgiw9&_nc_oc=Adlhbp_iWTMNMGDRDry6wmPP28zxmKeoi_wMMeNf3OkY7GdNbZoYTAV-If96NL06jaM&_nc_zt=23&_nc_ht=scontent.fbkk29-1.fna&_nc_gid=YVggDqUOM-A9m8VQoqCaAQ&oh=00_AfFaej0zsnrhLTeObyRlknptOnRFFxP4wycrXPvoY4NmdQ&oe=680464B6"  
    ,"https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/487828466_1103663144896535_3073103285930862_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEWDCb6YJq6paspAKsquFgBfJQsGJlFI0V8lCwYmUUjRXZbaoXhmDJzKQD66nYSgSM&_nc_ohc=7x_glAAzBb0Q7kNvwE-oORu&_nc_oc=AdlZl58JHMNsOLF9Nc921-k6B8H0H9blhiCon1VRdFwUQlwYBe4mEdddlkDve-k-U8I&_nc_zt=23&_nc_ht=scontent.fbkk29-1.fna&_nc_gid=wD0K7nzw_s9nLny3uZ0spw&oh=00_AfEsibdbWv1cwzwuClOnRrdID6Bmd9uywkE8bdyzI_jCYw&oe=68044D41"
    ,"https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/487815071_1103663141563202_836623049590979971_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH-Q7ixb9A_LsB2onHMgHRXaIF-AwnvrB5ogX4DCe-sHv3Z8-qr19OnP9OqJz0O9-Q&_nc_ohc=AalR-WKqEgkQ7kNvwGVDrZW&_nc_oc=AdlHe_x1vBLjT11Wy_99yAFjMuIX4Y9eyxNyKePQWklCL2oPz_f8eCCJW3sPw_HFZTA&_nc_zt=23&_nc_ht=scontent.fbkk29-4.fna&_nc_gid=yd-JrXohSiP7ZQ4XoBoXvQ&oh=00_AfEE4BMSc54LjV-naspaaXHlcDFC_yv5mQ-rnVkz-W0rqg&oe=68045CB3"
  ],
    category: "Research"
  },
  {
    id: "news-023",
    title: "Master Student Receives Excellence Award from The Professor Dr.Tab Nilanidhi Foundation",
    description: "Kattareen Boonchuay recognized for outstanding academic performance in Polymer Science and Technology Programme.",
    content: `🎉 Congratulations to Kattareen Boonchuay, our Master student in Polymer Science and Technology Programme, Mahidol University under supervision of Prof. Chakrit Sirisinha 🥳 for receiving "Excellent academic performance for MSc students" from The Professor Dr.Tab Nilanidhi Foundation. 😍`,
    author: {
      name: "Polymer Science and Technology Program",
      role: "Faculty of Science, Mahidol University"
    },
    date: "15 February 2025",
    images: [
      "https://scontent.fbkk29-9.fna.fbcdn.net/v/t39.30808-6/484850173_1115984756995883_7951929141609008876_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeETQvL7s-q0-EhSvbcNXynt9oP5uz6UpjP2g_m7PpSmM7CuXjq1S20fizy7Rp6xZYA&_nc_ohc=nHckTGnAHbsQ7kNvwEp8xif&_nc_oc=AdmIyEaW5HahCjoRmVmuqc3QVaDxsl-2Y3c5k-8gJz2fqXHNY4glCZgPaVFIi5NGRc8&_nc_zt=23&_nc_ht=scontent.fbkk29-9.fna&_nc_gid=2ozl-amDBgh0vYAf48IUFA&oh=00_AfF9txgkkVX7GWkx7p5J7BIAqJBoiUiLI3WygztcrMi7Tw&oe=680464EA",
    ],
    category: "Education"
  },
  {
    id: "news-020",
    title: "Digital Health Revolution",
    description: "New technologies transforming healthcare delivery.",
    content: "Digital health technologies are revolutionizing patient care...",
    author: {
      name: "Health Tech",
      role: "Healthcare Reporter"
    },
    date: "5 July 2024",
    images: [],
    category: "Healthcare"
  },
  {
    id: "news-019",
    title: "Renewable Energy Investment Surge",
    description: "Record investments in clean energy projects.",
    content: "Global investment in renewable energy has reached new heights...",
    author: {
      name: "Energy Finance",
      role: "Financial Reporter"
    },
    date: "30 June 2024",
    images: [],
    category: "Energy"
  },
  {
    id: "news-018",
    title: "Artificial Intelligence Ethics Guidelines",
    description: "New framework for responsible AI development.",
    content: "International guidelines for AI ethics have been released...",
    author: {
      name: "AI Ethics",
      role: "Technology Analyst"
    },
    date: "25 June 2024",
    images: [],
    category: "Technology"
  },
  {
    id: "news-017",
    title: "Space Tourism Milestone",
    description: "First commercial space flight achieves success.",
    content: "A major milestone in space tourism has been reached...",
    author: {
      name: "Space News",
      role: "Space Correspondent"
    },
    date: "20 June 2024",
    images: [],
    category: "Science"
  },
  {
    id: "news-016",
    title: "Sustainable Business Awards",
    description: "Companies recognized for environmental initiatives.",
    content: "The annual Sustainable Business Awards have been announced...",
    author: {
      name: "Business Green",
      role: "Business Reporter"
    },
    date: "15 June 2024",
    images: [],
    category: "Business"
  },
  {
    id: "news-015",
    title: "Education Technology Innovations",
    description: "New tools transforming classroom learning.",
    content: "Educational technology is evolving rapidly...",
    author: {
      name: "Edu Tech",
      role: "Education Reporter"
    },
    date: "10 June 2024",
    images: [],
    category: "Education"
  },
  {
    id: "news-014",
    title: "Medical Breakthrough in Disease Treatment",
    description: "New treatment method shows promising results.",
    content: "Researchers have discovered a potential breakthrough...",
    author: {
      name: "Health News",
      role: "Medical Correspondent"
    },
    date: "5 June 2024",
    images: [],
    category: "Health"
  },
  {
    id: "news-013",
    title: "New Environmental Protection Policies",
    description: "Governments announce stricter environmental regulations.",
    content: "New environmental protection measures have been announced...",
    author: {
      name: "Eco News",
      role: "Environmental Reporter"
    },
    date: "30 May 2024",
    images: [],
    category: "Environment"
  },
  {
    id: "news-012",
    title: "Global Tech Summit Results",
    description: "Major announcements from the annual technology conference.",
    content: "The Global Tech Summit has concluded with significant announcements...",
    author: {
      name: "Tech News",
      role: "Technology Editor"
    },
    date: "25 May 2024",
    images: [],
    category: "Technology"
  },
  {
    id: "news-011",
    title: "Breakthrough in Renewable Energy Storage",
    description: "New battery technology promises longer storage capacity.",
    content: "Scientists have developed a revolutionary energy storage system...",
    author: {
      name: "Energy Reporter",
      role: "Science Correspondent"
    },
    date: "20 May 2024",
    images: [],
    category: "Energy"
  },
  {
    id: "news-010",
    title: "New Educational Technology Initiatives",
    description: "Schools implement innovative digital learning solutions.",
    content: "Educational institutions are adopting new technologies...",
    author: {
      name: "Mary Education",
      role: "Education Reporter"
    },
    date: "15 May 2024",
    images: [],
    category: "Education"
  },
  {
    id: "news-009",
    title: "Breakthrough in Artificial Intelligence",
    description: "New AI model achieves unprecedented performance levels.",
    content: "Researchers have developed a groundbreaking AI model...",
    author: {
      name: "Alex Tech",
      role: "Technology Editor"
    },
    date: "10 May 2024",
    images: [],
    category: "Technology"
  },
  {
    id: "news-008",
    title: "Advancements in Space Exploration",
    description: "New technologies enable deeper space exploration missions.",
    content: "Space agencies announce new missions to explore distant planets...",
    author: {
      name: "Tom Space",
      role: "Space Correspondent"
    },
    date: "5 May 2024",
    images: [],
    category: "Science"
  },
  {
    id: "news-007",
    title: "Global Climate Change Summit Results",
    description: "World leaders reach agreement on new climate initiatives.",
    content: "The latest climate summit has resulted in significant agreements...",
    author: {
      name: "Lisa Green",
      role: "Environmental Reporter"
    },
    date: "30 April 2024",
    images: [],
    category: "Environment"
  },
  {
    id: "news-006",
    title: "Major Breakthrough in Cancer Research",
    description: "New treatment approach shows promising results in clinical trials.",
    content: "Researchers have discovered a potential breakthrough in cancer treatment...",
    author: {
      name: "Dr. James Wilson",
      role: "Medical Research Correspondent"
    },
    date: "25 April 2024",
    images: [],
    category: "Health"
  },
  {
    id: "news-005",
    title: "Innovative Approach to Renewable Energy",
    description: "New method promises more efficient solar energy conversion.",
    content: "Scientists have developed a novel approach to solar energy conversion...",
    author: {
      name: "Emma Wilson",
      role: "Energy Correspondent"
    },
    date: "20 April 2024",
    images: [],
    category: "Energy"
  },
  {
    id: "news-004",
    title: "New Sustainable Materials Discovered",
    description: "Researchers develop eco-friendly materials with remarkable properties.",
    content: "A breakthrough in sustainable materials research has led to the discovery...",
    author: {
      name: "David Chen",
      role: "Environmental Science Editor"
    },
    date: "15 April 2024",
    images: [],
    category: "Science"
  },
  {
    id: "news-003",
    title: "Breakthrough in Quantum Computing Research",
    description: "Scientists achieve significant milestone in quantum computing technology.",
    content: "A team of researchers has made a major breakthrough in quantum computing...",
    author: {
      name: "Sarah Johnson",
      role: "Technology Reporter"
    },
    date: "10 April 2024",
    images: [],
    category: "Technology"
  },
  {
    id: "news-002",
    title: "Pellentesque mollis eros quis massa interdum porta et vel",
    description: "New research findings in molecular biology reveal interesting patterns.",
    content: "[Detailed content would go here...]",
    author: {
      name: "Mark Freeman",
      role: "Science Journalist"
    },
    date: "23 May 2017",
    images: [],
    category: "Research"
  },
  {
    id: "news-001",
    title: "LATEST NEWS AT WRAPKIT: Breakthrough in Exoplanet Research",
    description: "Scientists at WRAPKIT have made a groundbreaking discovery in exoplanet research, potentially identifying habitable conditions on a distant planet.",
    content: `
      <p>In a significant advancement for space exploration, researchers at WRAPKIT have identified potential signs of habitability on a newly discovered exoplanet. The findings, published in the latest issue of Space Science Journal, could revolutionize our understanding of life beyond Earth.</p>
      
      <p>The team, led by Dr. Sarah Johnson, used advanced spectroscopic analysis to detect atmospheric signatures that suggest the presence of water vapor and other key elements necessary for life. "This discovery opens up new possibilities for finding habitable worlds," said Dr. Johnson.</p>
      
      <p>The research was conducted using data from the James Webb Space Telescope, combined with innovative analysis techniques developed at WRAPKIT. The findings have already sparked international interest and could lead to new missions to study this promising exoplanet.</p>
      
      <p><a href="http://localhost:3000/news" target="_blank">View all news at WRAPKIT</a></p>
    `,
    author: {
      name: "WRAPKIT Research Team",
      role: "Space Exploration Division"
    },
    date: "2024-03-15",
    images: [
      "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/internal_resources/details/original/1795_1585_what-is-exoplanet-banner.jpg",
      "https://images.newscientist.com/wp-content/uploads/2022/01/10172214/PRI_217554656.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkDu_fpinaZ03pMX9cVqzK9Hh92DWiMlSCTQ&s"
    ],
    category: "Space Exploration"
  }
];

export const articles: Content[] = [
  {
    id: "article-021",
    title: "Advanced Materials for Space Exploration: Innovations in Polymer Composites",
    description: "Exploring novel polymer composite materials for space applications, focusing on durability and performance in extreme environments.",
    content: `In a groundbreaking study published in Composites Science and Technology, researchers have developed innovative polymer composite materials specifically designed for space exploration applications. The study, titled "Advanced Polymer Composites for Space Applications," presents significant advancements in material science that could revolutionize spacecraft construction and space equipment.

Key findings include:
- Development of high-performance polymer composites with enhanced thermal stability
- Improved resistance to radiation and extreme temperature fluctuations
- Novel manufacturing techniques for space-grade materials
- Potential applications in spacecraft components and space station modules

The research team utilized advanced characterization techniques to evaluate the materials' performance under simulated space conditions, demonstrating remarkable durability and reliability.

🔗 Read the full article: https://www.sciencedirect.com/science/article/pii/S0008622324009242`,
    author: {
      name: "Anyarat Watthanaphanit ",
      role: "Advanced Materials Laboratory"
    },
    date: "January 2025",
    images: [
      "https://ars.els-cdn.com/content/image/1-s2.0-S0008622324009242-ga1.jpg"
    ],
    category: "nanotechnology"
  },
  {
    id: "article-022",
    title: "Sustainable Polymers: The Next Generation",
    description: "Revolutionary approaches to eco-friendly material development.",
    content: "The field of sustainable polymers is evolving rapidly. This article examines the latest breakthroughs in biodegradable materials and their potential to transform the packaging industry.",
    author: {
      name: "Dr. Polymer Science",
      role: "Materials Research Director"
    },
    date: "10 July 2024",
    images: ["https://www.researchgate.net/publication/389353727/figure/fig1/AS:11431281312154346@1740589288688/Image-for-non-rubber-components-in-gGR.png"],
    category: "natural-rubber"
  },
  {
    id: "article-023",
    title: "AI in Materials Science: A New Era of Discovery",
    description: "How artificial intelligence is accelerating material innovation.",
    content: "Artificial intelligence is revolutionizing the way we discover and develop new materials. This article explores how machine learning algorithms are helping scientists predict material properties and accelerate research.",
    author: {
      name: "Dr. AI Research",
      role: "Computational Materials Scientist"
    },
    date: "8 July 2024",
    images: [],
    category: "advanced-composite"
  },
  {
    id: "article-020",
    title: "Smart Cities and Urban Development",
    description: "Technology-driven solutions for modern cities.",
    content: "Cities are becoming smarter with technology...",
    author: {
      name: "Urban Tech",
      role: "Smart City Consultant"
    },
    date: "20 June 2024",
    images: [],
    category: "applied-industry"
  },
  {
    id: "article-019",
    title: "The Future of Digital Payments",
    description: "Emerging trends in financial technology.",
    content: "Digital payments are evolving rapidly...",
    author: {
      name: "Fin Tech",
      role: "Payment Systems Expert"
    },
    date: "15 June 2024",
    images: [],
    category: "Technology"
  },
  {
    id: "article-018",
    title: "Sustainable Transportation Solutions",
    description: "Innovations in eco-friendly transport.",
    content: "The transportation sector is going green...",
    author: {
      name: "Eco Transport",
      role: "Transportation Analyst"
    },
    date: "10 June 2024",
    images: [],
    category: "Sustainability"
  },
  {
    id: "article-001",
    title: "How to Improve Your Project Management Skills",
    description: "Learn the essential skills needed for effective project management in today's fast-paced environment.",
    content: "Project management is a critical skill in today's business world...",
    author: {
      name: "Dr. Michael Chen",
      role: "Senior Project Manager"
    },
    date: "7 Feb 2023",
    images: [],
    category: "Business"
  },
  {
    id: "article-002",
    title: "Modern Cybersecurity Trends to Watch in 2023",
    description: "Stay ahead of the curve with these emerging cybersecurity trends and technologies.",
    content: "The cybersecurity landscape is constantly evolving...",
    author: {
      name: "Sarah Williams",
      role: "Cybersecurity Analyst"
    },
    date: "12 Aug 2023",
    images: [],
    category: "Technology"
  },
  {
    id: "article-003",
    title: "The Future of Artificial Intelligence in Healthcare",
    description: "Exploring how AI is transforming the healthcare industry.",
    content: "Artificial Intelligence is revolutionizing healthcare in unprecedented ways...",
    author: {
      name: "Dr. Jennifer Lee",
      role: "Healthcare Technology Expert"
    },
    date: "25 March 2024",
    images: [],
    category: "Healthcare"
  },
  {
    id: "article-004",
    title: "Sustainable Business Practices for the Modern Enterprise",
    description: "How companies can implement eco-friendly practices while maintaining profitability.",
    content: "Sustainability is no longer just a buzzword in the business world...",
    author: {
      name: "Robert Green",
      role: "Sustainability Consultant"
    },
    date: "1 April 2024",
    images: [],
    category: "Business"
  },
  {
    id: "article-005",
    title: "The Impact of 5G Technology on Mobile Applications",
    description: "Understanding how 5G is changing the landscape of mobile app development.",
    content: "The advent of 5G technology is bringing significant changes to mobile applications...",
    author: {
      name: "Alex Thompson",
      role: "Mobile Technology Analyst"
    },
    date: "5 April 2024",
    images: [],
    category: "Technology"
  },
  {
    id: "article-006",
    title: "Blockchain Technology in Supply Chain Management",
    description: "How blockchain is revolutionizing supply chain transparency and efficiency.",
    content: "Blockchain technology is transforming supply chain management...",
    author: {
      name: "Dr. Lisa Wong",
      role: "Supply Chain Expert"
    },
    date: "10 April 2024",
    images: [],
    category: "Technology"
  },
  {
    id: "article-007",
    title: "The Role of Big Data in Modern Marketing",
    description: "Leveraging data analytics for effective marketing strategies.",
    content: "Big data is reshaping the marketing landscape...",
    author: {
      name: "John Smith",
      role: "Marketing Analytics Director"
    },
    date: "15 April 2024",
    images: [],
    category: "Marketing"
  },
  {
    id: "article-008",
    title: "Cloud Computing Security Best Practices",
    description: "Essential security measures for cloud-based systems.",
    content: "Cloud security is a critical concern for modern businesses...",
    author: {
      name: "Emily Davis",
      role: "Cloud Security Specialist"
    },
    date: "20 April 2024",
    images: [],
    category: "Technology"
  },
  {
    id: "article-009",
    title: "The Future of Remote Work",
    description: "Trends and strategies for successful remote work environments.",
    content: "Remote work is becoming the new norm...",
    author: {
      name: "Michael Brown",
      role: "Workplace Strategy Consultant"
    },
    date: "25 April 2024",
    images: [],
    category: "Business"
  },
  {
    id: "article-010",
    title: "Sustainable Energy Solutions for Businesses",
    description: "Implementing green energy practices in corporate environments.",
    content: "Sustainable energy is key to future business success...",
    author: {
      name: "Sarah Green",
      role: "Energy Consultant"
    },
    date: "30 April 2024",
    images: [],
    category: "Sustainability"
  },
  {
    id: "article-011",
    title: "The Future of E-commerce",
    description: "Emerging trends and technologies shaping online retail.",
    content: "E-commerce continues to evolve with new technologies...",
    author: {
      name: "David Retail",
      role: "E-commerce Analyst"
    },
    date: "5 May 2024",
    images: [],
    category: "Business"
  },
  {
    id: "article-012",
    title: "Cybersecurity in the Age of IoT",
    description: "Protecting connected devices in a digital world.",
    content: "The Internet of Things presents new security challenges...",
    author: {
      name: "Sarah Security",
      role: "IoT Security Specialist"
    },
    date: "10 May 2024",
    images: [],
    category: "Technology"
  },
  {
    id: "article-013",
    title: "Sustainable Agriculture Practices",
    description: "Innovative farming methods for a greener future.",
    content: "Modern agriculture is embracing sustainable practices...",
    author: {
      name: "Dr. Green",
      role: "Agricultural Scientist"
    },
    date: "15 May 2024",
    images: [],
    category: "Sustainability"
  },
  {
    id: "article-014",
    title: "The Impact of Social Media on Business",
    description: "How social platforms are transforming marketing strategies.",
    content: "Social media continues to reshape business marketing...",
    author: {
      name: "Lisa Social",
      role: "Social Media Strategist"
    },
    date: "20 May 2024",
    images: [],
    category: "Marketing"
  },
  {
    id: "article-015",
    title: "Digital Transformation in Healthcare",
    description: "How technology is revolutionizing patient care.",
    content: "Healthcare is undergoing significant digital transformation...",
    author: {
      name: "Dr. Tech",
      role: "Healthcare Technology Director"
    },
    date: "25 May 2024",
    images: [],
    category: "Healthcare"
  },
  {
    id: "article-016",
    title: "The Future of Work: Hybrid Models",
    description: "Balancing remote and in-office work environments.",
    content: "Hybrid work models are becoming the new standard...",
    author: {
      name: "Mike Work",
      role: "Workplace Innovation Lead"
    },
    date: "30 May 2024",
    images: [],
    category: "Business"
  },
  {
    id: "article-017",
    title: "Artificial Intelligence in Education",
    description: "How AI is transforming learning experiences.",
    content: "AI is revolutionizing the education sector...",
    author: {
      name: "Dr. Learn",
      role: "Educational Technology Expert"
    },
    date: "5 June 2024",
    images: [],
    category: "Education"
  }
];

export const presentations: Presentation[] = [
  {
    id: "pres-021",
    topic: "Special Seminar by Professor Changwoon NAH",
    presenter: {
      name: "Professor Changwoon NAH",
      role: "Department of Polymer-Nano Science and Technology",
      laboratory: "College of Engineering, Jeonbuk National University"
    },
    date: "29 October 2024",
    location: "Room SC4-407, Faculty of Science, Mahidol University, Salaya Campus",
    abstract: "A special seminar by a distinguished expert from Jeonbuk National University, Republic of Korea.",
    content: `📢 Special Seminar Announcement 📢

The Polymer Science and Technology Program is excited to present an upcoming seminar by Professor Changwoon NAH, a distinguished expert from the Department of Polymer-Nano Science and Technology, College of Engineering, Jeonbuk National University, Republic of Korea. 

🗓 Date: Tuesday, October 29, 2024
🕒 Time: 1:30 PM - 3:30 PM
📍 Location: Room SC4-407, Faculty of Science, Mahidol University, Salaya Campus

We invite students, faculty, and anyone interested in polymer science to join us for this unique opportunity to learn and engage with an esteemed leader in the field.

Don't miss out—mark your calendars!`,
    slides: "/presentations/special-seminar-2024.pdf",
    category: "seminar"
  },
  {
    id: "pres-022",
    topic: "Sustainable Polymer Development",
    presenter: {
      name: "Dr. Green Polymer",
      role: "Lead Researcher",
      laboratory: "Sustainable Materials Lab"
    },
    date: "12 July 2024",
    location: "WRAPKIT Materials Science Center",
    abstract: "New approaches to developing biodegradable polymers with enhanced properties for various applications.",
    content: "[Detailed presentation content about sustainable polymers...]",
    slides: "/presentations/sustainable-polymers-2024.pdf",
    category: "seminar"
  },
  {
    id: "pres-023",
    topic: "AI-Driven Materials Discovery",
    presenter: {
      name: "Dr. AI Materials",
      role: "Research Director",
      laboratory: "Computational Materials Lab"
    },
    date: "10 July 2024",
    location: "WRAPKIT AI Research Center",
    abstract: "Utilizing artificial intelligence to accelerate the discovery and development of new materials.",
    content: "[Detailed presentation content about AI in materials science...]",
    slides: "/presentations/ai-materials-2024.pdf",
    category: "seminar"
  },
  {
    id: "pres-020",
    topic: "Sustainable Agriculture Technologies",
    presenter: {
      name: "Dr. Ag Tech",
      role: "Agricultural Scientist",
      laboratory: "Sustainable Agriculture Lab"
    },
    date: "20 June 2024",
    location: "Agricultural Research Center",
    abstract: "Technological innovations in sustainable agriculture...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/ag-tech-2024.pdf",
    category: "seminar"
  },
  {
    id: "pres-019",
    topic: "Artificial Intelligence in Business",
    presenter: {
      name: "Dr. AI Business",
      role: "AI Strategist",
      laboratory: "Business AI Lab"
    },
    date: "15 June 2024",
    location: "Business Innovation Center",
    abstract: "AI applications in business operations...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/ai-business-2024.pdf",
    category: "seminar"
  },
  {
    id: "pres-018",
    topic: "Advanced Materials for Electronics",
    presenter: {
      name: "Dr. Electronics",
      role: "Materials Scientist",
      laboratory: "Electronics Materials Lab"
    },
    date: "10 June 2024",
    location: "Electronics Research Center",
    abstract: "New materials for electronic devices...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/electronics-materials-2024.pdf",
    category: "seminar"
  },
  {
    id: "pres-001",
    topic: "Development of Novel Biodegradable Polymers for Sustainable Packaging Applications",
    presenter: {
      name: "Dr. Sarah Johnson",
      role: "Principal Investigator",
      laboratory: "Polymer Synthesis and Characterization Laboratory"
    },
    date: "15 March 2024",
    location: "Room 301, Science Building",
    abstract: "This presentation explores the development of new biodegradable polymer materials...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/biodegradable-polymers-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-002",
    topic: "Advanced Materials for Energy Storage Applications",
    presenter: {
      name: "Dr. James Wilson",
      role: "Research Scientist",
      laboratory: "Energy Materials Laboratory"
    },
    date: "20 March 2024",
    location: "Virtual Meeting",
    abstract: "A comprehensive overview of recent advances in materials science...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/energy-storage-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-003",
    topic: "Nanotechnology in Drug Delivery Systems",
    presenter: {
      name: "Dr. Emily Chen",
      role: "Senior Researcher",
      laboratory: "Nanomedicine Research Center"
    },
    date: "25 March 2024",
    location: "Main Auditorium",
    abstract: "Exploring the latest developments in nanotechnology for targeted drug delivery...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/nanotech-drug-delivery-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-004",
    topic: "Sustainable Energy Solutions for Urban Environments",
    presenter: {
      name: "Dr. Robert Martinez",
      role: "Research Director",
      laboratory: "Urban Sustainability Lab"
    },
    date: "30 March 2024",
    location: "Conference Room A",
    abstract: "Innovative approaches to sustainable energy in urban settings...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/sustainable-energy-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-005",
    topic: "Artificial Intelligence in Materials Science",
    presenter: {
      name: "Dr. Lisa Thompson",
      role: "AI Research Lead",
      laboratory: "Computational Materials Lab"
    },
    date: "5 April 2024",
    location: "Virtual Meeting",
    abstract: "Applications of AI in materials discovery and characterization...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/ai-materials-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-006",
    topic: "Advanced Robotics in Manufacturing",
    presenter: {
      name: "Dr. Michael Brown",
      role: "Robotics Engineer",
      laboratory: "Advanced Manufacturing Lab"
    },
    date: "10 April 2024",
    location: "Engineering Building",
    abstract: "Latest developments in industrial robotics and automation...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/robotics-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-007",
    topic: "Quantum Computing Applications",
    presenter: {
      name: "Dr. Alan Turing",
      role: "Quantum Computing Specialist",
      laboratory: "Quantum Research Center"
    },
    date: "15 April 2024",
    location: "Physics Department",
    abstract: "Practical applications of quantum computing in various fields...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/quantum-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-008",
    topic: "Biomedical Engineering Innovations",
    presenter: {
      name: "Dr. Maria Garcia",
      role: "Biomedical Engineer",
      laboratory: "Medical Devices Lab"
    },
    date: "20 April 2024",
    location: "Medical Center",
    abstract: "Recent advances in biomedical engineering and medical devices...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/biomedical-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-009",
    topic: "Environmental Impact Assessment Methods",
    presenter: {
      name: "Dr. John Green",
      role: "Environmental Scientist",
      laboratory: "Environmental Research Center"
    },
    date: "25 April 2024",
    location: "Environmental Studies Building",
    abstract: "New methodologies for environmental impact assessment...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/environmental-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-010",
    topic: "Data Science in Healthcare",
    presenter: {
      name: "Dr. Sarah Lee",
      role: "Data Scientist",
      laboratory: "Healthcare Analytics Lab"
    },
    date: "30 April 2024",
    location: "Health Sciences Center",
    abstract: "Applications of data science in healthcare and medicine...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/healthcare-data-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-011",
    topic: "Advanced Materials for Space Exploration",
    presenter: {
      name: "Dr. Space Materials",
      role: "Materials Scientist",
      laboratory: "Space Materials Research Lab"
    },
    date: "5 May 2024",
    location: "Space Research Center",
    abstract: "New materials for space applications...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/space-materials-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-012",
    topic: "Sustainable Urban Planning",
    presenter: {
      name: "Dr. Urban Design",
      role: "Urban Planner",
      laboratory: "Sustainable Cities Institute"
    },
    date: "10 May 2024",
    location: "Urban Development Center",
    abstract: "Innovative approaches to sustainable urban development...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/urban-planning-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-013",
    topic: "Advanced Robotics in Healthcare",
    presenter: {
      name: "Dr. Medical Robotics",
      role: "Robotics Engineer",
      laboratory: "Medical Robotics Lab"
    },
    date: "15 May 2024",
    location: "Medical Technology Center",
    abstract: "Robotics applications in medical procedures...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/medical-robotics-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-014",
    topic: "Climate Change Mitigation Strategies",
    presenter: {
      name: "Dr. Climate Science",
      role: "Climate Researcher",
      laboratory: "Climate Research Center"
    },
    date: "20 May 2024",
    location: "Environmental Studies Building",
    abstract: "Effective strategies for climate change mitigation...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/climate-mitigation-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-015",
    topic: "Advanced Manufacturing Technologies",
    presenter: {
      name: "Dr. Manufacturing",
      role: "Industrial Engineer",
      laboratory: "Advanced Manufacturing Lab"
    },
    date: "25 May 2024",
    location: "Engineering Complex",
    abstract: "Latest developments in manufacturing technology...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/manufacturing-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-016",
    topic: "Digital Transformation in Education",
    presenter: {
      name: "Dr. Ed Tech",
      role: "Educational Technologist",
      laboratory: "Digital Learning Center"
    },
    date: "30 May 2024",
    location: "Education Technology Center",
    abstract: "Digital tools transforming education...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/ed-tech-2024.pdf",
    category: "thesis defense"
  },
  {
    id: "pres-017",
    topic: "Sustainable Energy Solutions",
    presenter: {
      name: "Dr. Energy",
      role: "Energy Researcher",
      laboratory: "Sustainable Energy Lab"
    },
    date: "5 June 2024",
    location: "Energy Research Center",
    abstract: "Innovative solutions for sustainable energy...",
    content: "[Detailed presentation content would go here...]",
    slides: "/presentations/sustainable-energy-2024.pdf",
    category: "thesis defense"
  }
];

export const getArticleById = (id: string): Content | undefined => {
  return articles.find(article => article.id === id);
};

export const getNewsById = (id: string): Content | undefined => {
  return news.find(newsItem => newsItem.id === id);
};

export const getPresentationById = (id: string): Presentation | undefined => {
  return presentations.find(presentation => presentation.id === id);
}; 