
import { SiteContent } from './types';

const en: SiteContent = {
  nav: {
    home: "Home",
    about: "About Firm",
    team: "Our Team",
    practices: "Practice Areas",
    updates: "Legal Updates",
    contact: "Contact",
  },
  hero: {
    title: "Dagrand Law Office",
    subtitle: "Professionalism. Integrity. Efficiency. Your trusted legal partner in Cambodia.",
    cta: "Contact Us",
  },
  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "100%", label: "Client Dedication" },
    { value: "4", label: "Languages Spoken" },
    { value: "24/7", label: "Legal Support" }
  ],
  whyUs: {
    title: "Why Choose Dagrand",
    subtitle: "We combine local expertise with international standards to deliver exceptional results.",
    items: [
        { title: "Multilingual Expertise", desc: "Fluent in English, Chinese, and French to serve diverse international clients." },
        { title: "Strategic Approach", desc: "We provide commercially viable legal solutions, not just theoretical advice." },
        { title: "Integrity & Trust", desc: "Upholding the highest ethical standards in every case we handle." }
    ]
  },
  about: {
    title: "About Dagrand",
    content: [
      "Dagrand Law Office is a boutique firm registered with the Bar Association of the Kingdom of Cambodia, dedicated to delivering high-quality legal services. Our expertise spans dispute resolution, corporate and commercial matters, employment, investment, intellectual property rights, securities, mergers and acquisitions, taxation, and international trade.",
      "Our team of highly skilled lawyers brings both local and international experience, ensuring that our clients receive insightful, strategic, and globally informed legal solutions. At Dagrand Law Office, we cater to a diverse clientele of different nationalities by offering our services in Khmer, English, French, and Chinese, allowing us to meet the unique needs of both local and foreign businesses, investors, and individuals.",
      "With a client-centric approach, we prioritize professionalism, integrity, and efficiency in every case we handle. Whether you are seeking legal representation, corporate advisory, or dispute resolution, Dagrand Law Office is your trusted legal partner in Cambodia.",
      "Based in Phnom Penh, Cambodia, our clients include multinational companies, international investors, real estate agents and developers, and locally incorporated companies in diverse sectors."
    ]
  },
  team: {
    title: "Our Team",
    subtitle: "Highly skilled and experienced legal professionals",
    intro: [
      "At Dagrand Law Office, our team comprises highly skilled and experienced lawyers and legal professionals who hold academic qualifications from internationally recognized universities in Cambodia, France, and China.",
      "With many years of experience in dispute resolution, legal assistance, and advisory services, our team has successfully represented and supported clients across a wide range of industries and legal matters. From corporate and commercial transactions to dispute resolution and regulatory compliance, we are committed to delivering strategic and effective legal solutions tailored to the unique needs of each client.",
      "Our team embodies international professionalism, ensuring high-quality legal services that meet global standards while remaining deeply rooted in the Cambodian legal framework. Whether advising local enterprises, multinational corporations, or individual clients, we strive to provide clear, practical, and results-driven legal guidance with integrity and excellence."
    ],
    members: [
      {
        id: "chan-sokyana",
        name: "MR. CHAN SOKYANA",
        role: "Partner",
        languages: "Khmer, English and French",
        bio: [
          "CHAN Sokyana is a Cambodian lawyer and Partner of Dagrand Law Office. He specializes in corporate and commercial cases, investment, capital market, tax and dispute resolution. He is a member of the National Committee of Cambodia ASEAN Law Association (NCCALA), and a law lecturer at the Royal University of Law and Economics in Phnom Penh, Cambodia. He has provided legal assistance to various clients, both local and multinational companies.",
          "With a strong academic foundation, CHAN Sokyana completed the pre-doctoral preparation program at Sciences Po in Paris, earned a Master’s degree in Economic Law from Sciences Po in Paris, and graduated with the top ranking with a Bachelor of Laws from the Royal University of Law and Economics in Phnom Penh."
        ],
        education: "Master’s degree in Economic Law (Sciences Po, Paris)",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
        contacts: {
            phone: "+855 (0)98 539 910",
            email: "sokyana.chan@dagrand.net"
        }
      },
      {
        id: "fu-tianxin",
        name: "MR. FU TIANXIN",
        role: "Legal Consultant",
        languages: "Chinese, English and Spanish",
        bio: [
          "As a Chinese lawyer, FU Tianxin is a legal consultant at Dagrand Law Office. He has extensive experience in providing legal services in Cambodia and other ASEAN countries. His main practice areas are overseas investment by Chinese enterprises, real estate development in Cambodia, energy, trade remedies and dispute resolution. He has provided legal assistance to various clients, both local and multinational companies.",
          "FU Tianxin holds a Master’s degree in International Economic Law from the University of International Business and Economics."
        ],
        education: "Master’s degree in International Economic Law (University of International Business and Economics)",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
        contacts: {
            phone: "+855 (0)96 866 8508",
            email: "tianxin.fu@dagrand.net"
        }
      }
    ]
  },
  practices: {
    title: "Practice Areas & Industries",
    subtitle: "Comprehensive legal solutions for your business needs in Cambodia",
    items: [
      {
        id: "employment",
        title: "EMPLOYMENT AND BENEFITS",
        shortDesc: "Managing employees in today’s dynamic market environment requires navigating labour law and regulations.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: [
          "Behind every successful business is a workforce that feels valued, protected, and empowered. Your workforce, which drives productivity, innovation, and growth, is your greatest asset—and protecting that asset begins with sound legal foundations.",
          "Managing employees in today’s dynamic market environment goes beyond meeting payroll—it requires navigating well-established and evolving labour law and regulations, ensuring compliance, and creating a framework where both your business and your workforce can thrive.",
          "At Dagrand Law Office, we handle this complexity across the entire employment cycle, so you can focus on building a successful business backed by a secured and satisfied workforce. From recruitment and onboarding to termination compliance, our proactive approach ensures that every employment contract, workplace policy, and recruitment process is not only legally sound but strategically aligned with your business objectives."
        ],
        serviceDetails: [
            {
                title: "Employment Contracts & Internal Policies",
                content: ["Clear, well-drafted employment documentation is the backbone of a healthy employer-employee relationship. We draft and review employment agreements and internal policies that are tailored to your company’s needs while ensuring compliance with Cambodian labour law and regulations."]
            },
            {
                title: "Registration & Filings",
                content: ["Navigating Cambodia’s labour compliance framework can be complex—but non-compliance is costly. We assist with regulatory requirements for registration of changes within the company, and filing of notification and other mandatory documents with the Ministry of Labour and Vocational Training (MLVT) and the National Social Security Funds (NSSF)."]
            },
            {
                title: "Foreign Workforce & Labour Permits",
                content: ["Hiring foreign talent requires meticulous attention to both labour and immigration requirements. We provide legal guidance and assist employers through the process from start to finish for hiring foreign employees, obtaining foreign employment quota, work permits and employment card, and provide other necessary legal assistance for a smooth hiring of foreign talents that complies with Cambodian labour law and regulations."]
            },
            {
                title: "Labour Advisory & Training",
                content: [
                    "We provide comprehensive and high standard labour advice and training services designed to support employers, human resources professionals, and businesses in navigating complex workplace regulations. We offer expert guidance on employment standards, workplace policies, collective agreements, disciplinary procedures, and compliance with the Cambodian labour law to reduce legal risks and foster healthy employer-employee relationships.",
                    "Our labour law experts deliver tailored training programs and workshops on topics such as workplace rights, health and safety, conflict resolution, and effective management practices, ensuring that organizations are well-equipped to handle labour-related challenges proactively and in accordance with the Cambodian labour law and regulations."
                ]
            }
        ]
      },
      {
        id: "corporate",
        title: "CORPORATE AND COMMERCIAL",
        shortDesc: "End-to-end corporate advisory, including company formation, compliance, and commercial contracting.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: [
          "Your business vision is our priority. Whether you are entering Cambodia for the first time or expanding your existing footprint, Dagrand Law Office ensures your business journey is structured, compliant, and strategically positioned for success.",
          "From business inception, securing licenses, restructuring for growth, to winding down operations, each step comes with its own legal challenges and compliance obligations that play a critical role in safeguarding your business and ensuring sustainable success.",
          "Our legal team combines deep expertise in Cambodian laws with practical business insight to deliver tailored strategies for every phase of your corporate journey. We help you start on the right foundation, stay compliant as you grow, adapt to new market realities, and exit or transition on favorable terms."
        ],
        serviceDetails: [
          { 
              title: "Commercial Agreements", 
              content: ["Our team provides comprehensive legal support in drafting, reviewing, and negotiating commercial agreements to help businesses operate smoothly and securely. We assist clients with a wide range of contracts, including but not limited to supply and distribution agreements, joint ventures, service contracts, licensing, franchising, and partnership agreements."] 
          },
          { 
              title: "Setting Up Businesses", 
              content: [
                  "Dagrand Law Office provides comprehensive legal support to both local and foreign investors seeking to establish business operations in Cambodia. Our services include advising on suitable business structures—such as a private limited liability company, branch office, or representative office—while ensuring compliance with Cambodian laws and regulations.",
                  "Our professionals assist with company registration at the Ministry of Commerce, tax registration at the General Department of Taxation, labour registration at the Ministry of Labour and Vocational Training and social securities registration at the National Social Security Fund."
              ] 
          },
          { 
              title: "Qualified Investment Projects (QIP)", 
              content: [
                  "Our experienced team provides comprehensive legal services to assist clients in registering Qualified Investment Projects (QIPs) with the Council for the Development of Cambodia (CDC). We guide investors through every stage of the application process, from preparing and reviewing required documentation to ensuring compliance with Cambodian investment laws and regulations.",
                  "Dagrand Law Office also advise investors on tax and customs duties incentives, investment guarantees, and on-going regulatory compliance required under Cambodian investment law and regulations."
              ] 
          },
          { 
              title: "Licensing & Regulatory Filings", 
              content: ["We provide comprehensive legal support in obtaining business licenses, permits, and regulatory approvals from relevant ministries and authorities in Cambodia, ensuring full compliance with local laws and sector-specific regulations. We assist clients across a wide range of industries—including pharmaceuticals, healthcare, manufacturing, mining, energy, tourism, and hospitality."] 
          },
          { 
              title: "Corporate Restructuring & Exit Planning", 
              content: ["As business evolve, restructuring or exiting the market can become a strategic necessity. Dagrand Law Office provides comprehensive legal support for corporate restructuring and exit planning, ensuring businesses can smoothly transition through each stage of the process."] 
          },
          { 
              title: "Mergers & Acquisitions", 
              content: ["Dagrand Law Office provides comprehensive legal services for mergers and acquisitions, guiding clients through every stage of complex business transactions. Our expertise includes conducting thorough legal due diligence to assess potential risks, verify corporate compliance, review contracts, and identify liabilities."] 
          }
        ]
      },
      {
        id: "tax",
        title: "TAX",
        shortDesc: "Effective tax management is the cornerstone of building and sustaining a successful business in Cambodia.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: [
          "Effective tax management is the cornerstone of building and sustaining a successful business in Cambodia’s dynamic market. From corporate income tax, value-added tax, patent tax, and withholding tax, to name a few, companies face a wide range of tax obligations.",
          "At the same time, Cambodia also offers a variety of tax incentives and opportunities for specific sectors and businesses. Navigating these requirements, incentives, and exemptions is not only essential for compliance but also critical for avoiding tax liabilities."
        ],
        serviceDetails: [
          { title: "Tax Registration & Filings", content: ["Dagrand Law Office provides tax registration and filing services in Cambodia, catering to both private companies and non-governmental organizations. The firm assists clients with tax registration with the General Department of Taxation, ensuring compliance with the Cambodian tax law from the outset."] },
          { title: "Tax Advice", content: ["We provide comprehensive tax advisory services tailored to meet the diverse needs of individuals and businesses. Our service covers income tax planning and compliance, guidance on capital gains tax, double taxation agreements, property tax, and QIP incentives."] },
          { title: "Tax Disputes", content: ["Expert legal services for individuals and businesses facing tax disputes, whether under a limited tax audit or a comprehensive tax audit. Our team specializes in navigating complex regulations and protecting your rights throughout the dispute resolution procedure."] }
        ]
      },
      {
        id: "international-trade",
        title: "INTERNATIONAL TRADES",
        shortDesc: "Strategic guidance on trade regulations, customs permits, and compliance with local and international rules.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: [
          "Every shipment counts in business, and non-compliance with trade regulations can lead to costly delays, penalties, and reputational risks. At Dagrand Law Office, we take the complexity out of trade compliance by managing customs permits, certificates of origin, anti-circumvention measures, import/export licensing, and all regulatory requirements.",
          "Our team provide strategic guidance on trade regulations, helping businesses navigate Cambodia’s evolving customs and regulatory landscape and maintain full compliance with local and international rules. Our services include advise on customs related matters, filing for import/export permits or licenses, filing for certificates of origin, and legal assistance on trade remedies."
        ]
      },
      {
        id: "capital-market",
        title: "CAPITAL MARKET",
        shortDesc: "Accessing capital through equity offerings, bonds, and other structured instruments in Cambodia's evolving landscape.",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: [
          "In today’s rapidly evolving financial landscape, traditional lending is no longer the only path to raising capital. The Cambodian government has been actively promoting the capital market sector to provide businesses with access to different financing methods through equity offerings, bonds, and other structured instruments.",
          "Understanding how to navigate the legal procedures, regulatory requirements, and strategic benefits of listing or issuing securities is essential for companies to make informed decisions in accessing more efficient ways to gain capital. We provide legal due diligence, draft and review agreements, and offer advice to companies who wish to enter the capital market in Cambodia."
        ]
      },
      {
        id: "intellectual-property",
        title: "INTELLECTUAL PROPERTY",
        shortDesc: "Safeguarding your brand and creations through trademark, patent, and copyright protection.",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: [
          "You build your brand and creations. We safeguard them. In today’s knowledge-driven economy, intellectual property has emerged as a cornerstone of commercial success and innovation. From trademark that distinguishes your brand in the market, to patents that protect your inventions, to copyrighted works that express your creativity.",
          "Securing and managing intellectual property right is critical to drive growth, secure investments, and enhance your competitive advantage. Navigating Cambodia’s system of protecting intellectual property rights demands a clear understanding of adherence to proper registration procedures, duty to meet documentary, formality and renewal requirements.",
          "Dagrand Law Office offers various legal assistance such as conducting intellectual property searches and due diligence, drafting and filing patent and trademark applications, negotiating licensing agreements, handling intellectual property transactions, and representing clients in disputes or infringement cases."
        ]
      },
      {
        id: "dispute-resolution",
        title: "DISPUTE RESOLUTION",
        shortDesc: "Specializing in litigation and alternative dispute resolution for commercial matters and contractual disagreements.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: [
          "Dagrand Law Office offers comprehensive dispute resolution services designed to help clients resolve conflicts efficiently and effectively. Our team of experienced attorneys specializes in litigation and alternative dispute resolution, providing tailored strategies that prioritize both legal rights and practical outcomes.",
          "Whether the dispute involves commercial matters or contractual disagreements, our attorneys guide clients through every step of the resolution process, aiming to achieve fair and mutually satisfactory solutions."
        ],
        serviceDetails: [
          { 
              title: "Commercial Arbitration", 
              content: [
                  "Harness the power of arbitration—a private, efficient, and flexible forum for resolving commercial disputes— provides faster timelines and less procedural complexity than the court system. It allows parties to choose arbitrators with relevant expertise, keep sensitive business information confidential, and craft procedures tailored to their needs.",
                  "Our attorneys at Dagrand Law Office help you draft robust arbitration agreements, represent parties in hearings, and navigate complex commercial disputes with a focus on achieving favorable outcomes."
              ] 
          },
          { 
              title: "Litigation", 
              content: ["Our team of experienced attorneys handles a wide range of civil and commercial cases, including contract disputes, property conflicts, and commercial litigation. By combining deep legal knowledge with practical experience at all levels of courts in Cambodia including the Cambodian Supreme Court, our attorneys guide clients through the complexities of the litigation process."] 
          },
          { 
              title: "Enforcement of Foreign Arbitral Awards", 
              content: ["Dagrand Law Office offers comprehensive legal services for the enforcement of arbitral awards in Cambodia, catering to both domestic and international clients. Leveraging Cambodia's adherence to the New York Convention, we assist clients in navigating the procedural requirements for enforcing foreign arbitral awards through the Court of Appeal and Supreme Court."] 
          }
        ]
      },
      {
        id: "energy-mining",
        title: "ENERGY AND MINING",
        shortDesc: "Navigating regulatory frameworks, licensing, and environmental standards in the energy and mining sectors.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: [
          "Energy Sector: Cambodia’s energy sector is on the rise, offering vast potential across renewables, hydro, solar, and traditional power generation. Yet, capitalizing on these opportunities demands more than investment—it requires a deep understanding of regulatory frameworks, licensing processes, and evolving environmental standards.",
          "Mining Sector: Cambodia’s mining sector holds equally significant promise, from mineral exploration to large-scale production. With our expertise, mining companies can confidently navigate the regulatory landscape, secure and maintain the necessary licenses, and implement sustainable practices that meet both operational goals and regulatory expectations."
        ]
      },
      {
        id: "real-estate",
        title: "REAL ESTATE",
        shortDesc: "Comprehensive legal services for property transactions, title searches, and development permits.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: [
          "From skyline-defining condos to thriving Borey communities, Cambodia’s real estate scene is shaping the future of both urban and suburban living. Behind every successful property deal—whether a lease, sale, or large-scale development—lies a series of legal steps that safeguard clarity, security, and long-term value.",
          "Dagrand Law Office provides comprehensive legal services tailored to the real estate sector, assisting clients in navigating the complex legal landscape of property transactions. Our services include drafting, reviewing, and negotiating purchase and sale agreements, lease contracts, title searches, and property transfer registration."
        ]
      },
      {
        id: "construction",
        title: "CONSTRUCTION",
        shortDesc: "Solid legal frameworks for construction projects, from contract negotiation to regulatory compliance.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: [
          "In construction, success is measured not only by exceptional architectural designs and skilled workmanship, but by the strength of the legal framework supporting every project.",
          "Dagrand Law Office provides comprehensive legal services tailored specifically for the construction sector, assisting contractors, developers, suppliers, and project owners. Our services include drafting and reviewing construction contracts, subcontractor agreements, and ensuring compliance with the Cambodian construction law and its regulations."
        ]
      },
      {
        id: "healthcare",
        title: "HEALTHCARE AND PHARMACEUTICALS",
        shortDesc: "Ongoing legal support for healthcare businesses, medical product registration, and distribution networks.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: [
          "Your compliance challenges are our priority. As you grow and expand your healthcare or pharmaceutical business in Cambodia, we handle the legal complexities so that you can focus on your core mission—delivering quality healthcare solutions.",
          "Our expertise covers drafting and reviewing distribution and licensing agreements, applying for business licenses, and guiding clients throughout the product registration processes at the Department of Drugs and Foods of the Ministry of Health."
        ]
      }
    ]
  },
  testimonials: {
    title: "Client Testimonials",
    items: [
        { quote: "Dagrand's team provided exceptional legal advice that was crucial for our market entry.", author: "International Investor", role: "Real Estate Sector" },
        { quote: "Professional, responsive, and deeply knowledgeable. Highly recommended.", author: "General Manager", role: "Manufacturing Company" }
    ]
  },
  ctaSection: {
    title: "Ready to Secure Your Legal Success?",
    subtitle: "Partner with Dagrand Law Office for strategic, integrity-driven legal solutions.",
    buttonText: "Schedule a Consultation"
  },
  updates: {
    title: "Legal Updates",
    subtitle: "Stay informed with the latest legal developments in Cambodia.",
    comingSoon: "New articles and legal alerts coming soon.",
    readMore: "Read Article",
    categories: {
        all: "All",
        tax: "Tax Law",
        corporate: "Corporate",
        labor: "Labor Law",
        realEstate: "Real Estate"
    }
  },
  contact: {
    title: "Contacts",
    addressLabel: "Address",
    hoursLabel: "Business Hours",
    hoursValue: "Mondays – Fridays, 9am – 5pm",
    phoneLabel: "Telephone",
    emailLabel: "Email",
    khmerEngFr: "+855 (0)98 539 910",
    chinese: "+855 (0)96 866 8508"
  },
  footer: {
    rights: "All Rights Reserved."
  }
};

const zh: SiteContent = {
   nav: {
    home: "首页",
    about: "关于我们",
    team: "专业团队",
    practices: "业务领域",
    updates: "法律动态",
    contact: "联系我们",
  },
  hero: {
    title: "Dagrand Law Office",
    subtitle: "专业、诚信、高效。您在柬埔寨值得信赖的合作伙伴。",
    cta: "联系我们",
  },
  stats: [
    { value: "10+", label: "多年行业经验" },
    { value: "100%", label: "客户奉献" },
    { value: "4", label: "多语种服务" },
    { value: "24/7", label: "法律支持" }
  ],
  whyUs: {
    title: "为什么选择 Dagrand",
    subtitle: "我们结合本地专业知识与国际标准，提供卓越的服务。",
    items: [
        { title: "多语言能力", desc: "精通英语、中文和法语，为多元化客户提供服务。" },
        { title: "战略性方案", desc: "提供具有商业可行性的法律解决方案。" },
        { title: "诚信与信任", desc: "秉持最高的职业道德标准。" }
    ]
  },
  about: {
    title: "关于 Dagrand",
    content: [
      "Dagrand Law Office 是一家在柬埔寨注册的精品律师事务所，致力于提供高质量的法律服务。我们的专业领域涵盖争议解决、公司与商业事务、劳工、投资、知识产权、证券、并购、税务和国际贸易。",
      "我们的团队兼具本地和国际经验，确保客户获得深入、具有战略意义且符合国际标准的法律解决方案。在 Dagrand Law Office，我们通过提供高棉语、英语、法语和中文服务，满足多元化客户的需求。",
      "无论您是寻求法律代理、企业咨询还是争议解决，Dagrand Law Office 都是您在柬埔寨值得信赖的法律合作伙伴。",
      "总部位于柬埔寨金边，我们的客户包括跨国公司、国际投资者、房地产代理和开发商以及各领域的本地企业。"
    ]
  },
  team: {
    title: "专业团队",
    subtitle: "拥有高素质且经验丰富的法律专家",
    intro: [
      "我们的团队由经验丰富的律师和法律专业人士组成，拥有来自柬埔寨、法国和中国国际知名大学的学术资格。",
      "我们的团队在争议解决、法律援助和咨询服务方面拥有多年经验，成功代理并支持了各行各业的客户。",
      "我们体现了国际化的专业水平，确保提供符合全球标准的高质量法律服务，同时深植于柬埔寨的法律框架。"
    ],
    members: [
      {
        id: "chan-sokyana",
        name: "CHAN SOKYANA 先生",
        role: "合伙人",
        languages: "高棉语、英语、法语",
        bio: [
          "CHAN Sokyana 是柬埔寨律师和 Dagrand Law Office 的合伙人。他擅长处理公司与商业案件、投资、资本市场、税务和争议解决。他是东盟法律协会柬埔寨国家委员会 (NCCALA) 的成员。",
          "他曾就读于巴黎政治学院 (Sciences Po)，并获得经济法硕士学位。他以法律学士第一名的身份毕业于金边皇家法律经济大学。"
        ],
        education: "经济法硕士 (巴黎政治学院)",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
        contacts: {
            phone: "+855 (0)98 539 910",
            email: "sokyana.chan@dagrand.net"
        }
      },
      {
        id: "fu-tianxin",
        name: "付天心 先生 (FU TIANXIN)",
        role: "法律顾问",
        languages: "中文、英语、西班牙语",
        bio: [
          "作为一名中国律师，付天心先生是 Dagrand Law Office 的法律顾问。他在柬埔寨及其他东盟国家提供法律服务方面拥有丰富的经验。",
          "他的主要执业领域是中国企业的海外投资、柬埔寨的房地产开发、能源、贸易救济和争议解决。他拥有对外经济贸易大学国际经济法硕士学位。"
        ],
        education: "国际经济法硕士 (对外经济贸易大学)",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
        contacts: {
            phone: "+855 (0)96 866 8508",
            email: "tianxin.fu@dagrand.net"
        }
      }
    ]
  },
  practices: {
    title: "业务领域",
    subtitle: "为您的业务需求提供全面的法律解决方案",
    items: [
      {
        id: "employment",
        title: "劳工与福利",
        shortDesc: "在当今动态的市场环境下管理员工需要熟悉劳工法律法规。",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: [
          "成功的企业背后是感到被重视、被保护和被赋能的员工。您的员工是您最大的资产。",
          "在 Dagrand Law Office，我们处理整个雇佣周期的复杂事务，让您可以专注于业务发展。"
        ],
        serviceDetails: [
          { title: "雇佣合同与内部政策", content: ["起草和审查符合柬埔寨劳工法律的雇佣协议。"] },
          { title: "注册与申报", content: ["协助完成劳工部 (MLVT) 和国家社会保障基金 (NSSF) 的申报。"] }
        ]
      },
      {
        id: "corporate",
        title: "公司与商业",
        shortDesc: "端到端的企业咨询，包括公司成立、合规和商业合同。",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: ["无论您是首次进入柬埔寨还是扩展版图，我们确保您的旅程合规且具有战略优势。"],
        serviceDetails: [
          { title: "商业协议", content: ["起草、审查和谈判各类商业合同。"] },
          { title: "设立企业", content: ["协助在柬埔寨注册各类法律实体。"] },
          { title: "合格投资项目 (QIP)", content: ["向柬埔寨发展委员会 (CDC) 注册 QIP。"] }
        ]
      },
      {
        id: "tax",
        title: "税务",
        shortDesc: "有效的税务管理是在柬埔寨动态市场中建立和维持成功企业的基石。",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: ["从企业所得税、增值税到专利税，企业面临着广泛的税务义务。"],
        serviceDetails: [
          { title: "税务注册与申报", content: ["协助在税务总局进行税务登记和月度/年度申报。"] }
        ]
      },
      {
        id: "international-trade",
        title: "国际贸易",
        shortDesc: "关于贸易法规、海关许可以及遵守当地和国际规则的战略指导。",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: ["在业务中，每一批货物都至关重要。不遵守贸易法规可能会导致代价高昂的延误。"]
      },
      {
        id: "capital-market",
        title: "资本市场",
        shortDesc: "在柬埔寨不断发展的格局中，通过股权发行、债券和其他结构化工具获取资本。",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: ["我们为希望进入柬埔寨资本市场的公司提供法律尽职调查、起草和审查协议。"]
      },
      {
        id: "intellectual-property",
        title: "知识产权",
        shortDesc: "通过商标、专利和版权保护您的品牌和创作。",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: ["保护和管理知识产权对于推动增长、确保投资和增强竞争优势至关重要。"]
      },
      {
        id: "dispute-resolution",
        title: "争议解决",
        shortDesc: "专注于商业事务和合同纠纷的诉讼和替代性争议解决。",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: ["Dagrand Law Office 提供全面的争议解决服务，旨在帮助客户高效、有效地解决冲突。"]
      },
      {
        id: "energy-mining",
        title: "能源与矿业",
        shortDesc: "在能源和矿业领域导航监管框架、许可和环境标准。",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: ["柬埔寨的能源和矿业部门正在崛起。我们帮助企业理清法律复杂性，确保合规。"]
      },
      {
        id: "real-estate",
        title: "房地产",
        shortDesc: "为房产交易、权属搜索和开发许可提供全面的法律服务。",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: ["从公寓到社区开发，我们为每一步房产交易提供法律保障。"]
      },
      {
        id: "construction",
        title: "建筑",
        shortDesc: "为建筑项目提供坚实的法律框架，从合同谈判到监管合规。",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: ["坚实的法律基础对于推进开发项目并保护所有相关方的利益至关重要。"]
      },
      {
        id: "healthcare",
        title: "医疗保健与制药",
        shortDesc: "为医疗保健业务、医疗产品注册和分销网络提供持续的法律支持。",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&h=900&q=80",
        fullDesc: ["我们处理复杂的法律问题，让您可以专注于提供优质的医疗保健解决方案。"]
      }
    ]
  },
  testimonials: {
    title: "客户评价",
    items: [
        { quote: "Dagrand 团队提供了出色的建议，这对我们进入柬埔寨市场至关重要。", author: "国际投资者", role: "房地产行业" }
    ]
  },
  ctaSection: {
    title: "准备好保障您的权益了吗？",
    subtitle: "与 Dagrand Law Office 合作，获得战略性法律解决方案。",
    buttonText: "预约咨询"
  },
  updates: {
    title: "法律动态",
    subtitle: "随时了解柬埔寨最新的法律进展。",
    comingSoon: "新文章即将发布。",
    readMore: "阅读文章",
    categories: {
        all: "全部",
        tax: "税法",
        corporate: "公司法",
        labor: "劳动法",
        realEstate: "房地产"
    }
  },
  contact: {
    title: "联系我们",
    addressLabel: "地址",
    hoursLabel: "营业时间",
    hoursValue: "周一至周五，上午 9 点至下午 5 点",
    phoneLabel: "电话",
    emailLabel: "邮箱",
    khmerEngFr: "+855 (0)98 539 910",
    chinese: "+855 (0)96 866 8508"
  },
  footer: {
    rights: "版权所有。"
  }
};

export const locales = { en, zh };
