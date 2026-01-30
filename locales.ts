

import { SiteContent } from './types';

// ==========================================
// ENGLISH CONTENT (FULL RESTORE)
// ==========================================
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
      "With a client-centric approach, we prioritize professionalism, integrity, and efficiency in every case we handle. Whether you are seeking legal representation, corporate advisory, or dispute resolution, Dagrand Law Office is your trusted legal partner in Cambodia. Based in Phnom Penh, Cambodia, our clients include multinational companies, international investors, real estate agents and developpers, and locally incorporated companies in diverse sectors."
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
        name: "Mr. CHAN Sokyana",
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
        name: "Mr. FU Tianxin",
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
        shortDesc: "Managing employees in today’s dynamic market environment goes beyond meeting payroll—it requires navigating well-established and evolving labour law and regulations.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
          "Behind every successful business is a workforce that feels valued, protected, and empowered. Your workforce, which drives productivity, innovation, and growth, is your greatest asset—and protecting that asset begins with sound legal foundations. Managing employees in today’s dynamic market environment goes beyond meeting payroll—it requires navigating well-established and evolving labour law and regulations, ensuring compliance, and creating a framework where both your business and your workforce can thrive.",
          "At Dagrand Law Office, we handle this complexity across the entire employment cycle, so you can focus on building a successful business backed by a secured and satisfied workforce. From recruitment and onboarding to termination compliance, our proactive approach ensures that every employment contract, workplace policy, and recruitment process is not only legally sound but strategically aligned with your business objectives. With deep expertise in Cambodian labour law, we help you manage your workforce with confidence, minimize legal risks before they escalate, and foster work environment that is fair, productive, and fully compliant with statutory requirements."
        ],
        serviceDetails: [
            {
                title: "Employment Contracts & Internal Policies",
                content: [
                    "Clear, well-drafted employment documentation is the backbone of a healthy employer-employee relationship. We draft and review employment agreements and internal policies that are tailored to your company’s needs while ensuring compliance with Cambodian labour law and regulations."
                ]
            },
            {
                title: "Registration & Filings",
                content: [
                    "Navigating Cambodia’s labour compliance framework can be complex—but non-compliance is costly. We assist with regulatory requirements for registration of changes within the company, and filing of notification and other mandatory documents with the Ministry of Labour and Vocational Training (MLVT) and the National Social Security Funds (NSSF)."
                ]
            },
            {
                title: "Foreign Workforce & Labour Permits",
                content: [
                    "Hiring foreign talent requires meticulous attention to both labour and immigration requirements. We provide legal guidance and assist employers through the process from start to finish for hiring foreign employees, obtaining foreign employment quota, work permits and employment card, and provide other necessary legal assistance for a smooth hiring of foreign talents that complies with Cambodian labour law and regulations."
                ]
            },
            {
                title: "Labour Advisory & Training",
                content: [
                    "At Dagrand Law Office, we provide comprehensive and high standard labour advice and training services designed to support employers, human resources professionals, and businesses in navigating complex workplace regulations. We offer expert guidance on employment standards, workplace policies, collective agreements, disciplinary procedures, and compliance with the Cambodian labour law to reduce legal risks and foster healthy employer-employee relationships.",
                    "In addition, our labour law experts deliver tailored training programs and workshops on topics such as workplace rights, health and safety, conflict resolution, and effective management practices, ensuring that organizations are well-equipped to handle labour-related challenges proactively and in accordance with the Cambodian labour law and regulations."
                ]
            }
        ]
      },
      {
        id: "corporate",
        title: "CORPORATE AND COMMERCIAL",
        shortDesc: "Your business vision is our priority. Whether you are entering Cambodia for the first time or expanding your existing footprint, Dagrand Law Office ensures your business journey is structured, compliant, and strategically positioned for success.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
          "Your business vision is our priority. Whether you are entering Cambodia for the first time or expanding your existing footprint, Dagrand Law Office ensures your business journey is structured, compliant, and strategically positioned for success.",
          "From business inception, securing licenses, restructuring for growth, to winding down operations, each step comes with its own legal challenges and compliance obligations that play a critical role in safeguarding your business and ensuring sustainable success.",
          "This is where Dagrand Law Office comes in. Our legal team combines deep expertise in Cambodian laws with practical business insight to deliver tailored strategies for every phase of your corporate journey. We help you start on the right foundation, stay compliant as you grow, adapt to new market realities, and exit or transition on favorable terms."
        ],
        serviceDetails: [
            {
                title: "Commercial Agreements",
                content: [
                    "Our team provides comprehensive legal support in drafting, reviewing, and negotiating commercial agreements to help businesses operate smoothly and securely. We assist clients with a wide range of contracts, including but not limited to supply and distribution agreements, joint ventures, service contracts, licensing, franchising, and partnership agreements. Our focus is on ensuring clarity, compliance with Cambodian laws, and risk mitigation, while protecting our clients’ interests in every transaction. By tailoring agreements to meet the specific needs of each business, we aim to foster strong commercial relationships and prevent disputes, giving our clients confidence and security in their contractual dealings."
                ]
            },
            {
                title: "Setting Up Businesses",
                content: [
                    "Dagrand Law Office provides comprehensive legal support to both local and foreign investors seeking to establish business operations in Cambodia. Our services include advising on suitable business structures—such as a private limited liability company, branch office, or representative office—while ensuring compliance with Cambodian laws and regulations. Our professionals assist with company registration at the Ministry of Commerce, tax registration at the General Department of Taxation, labour registration at the Ministry of Labour and Vocational Training and social securities registration at the National Social Security Fund. We also offer services for obtaining necessary licenses and permits, drafting and reviewing corporate documents, and navigating tax and labour law requirements.",
                    "Additionally, our team offers guidance on foreign ownership rules, investment incentives, and industry-specific regulations, enabling clients to start their ventures smoothly and with minimized legal risks."
                ]
            },
            {
                title: "Qualified Investment Projects (QIP)",
                content: [
                    "Our experienced team provides comprehensive legal services to assist clients in registering Qualified Investment Projects (QIPs) with the Council for the Development of Cambodia (CDC). We guide investors through every stage of the application process, from preparing and reviewing required documentation to ensuring compliance with Cambodian investment laws and regulations.",
                    "Dagrand Law Office also advise investors on tax and customs duties incentives, investment guarantees, and on-going regulatory compliance required under Cambodian investment law and regulations. With in-depth knowledge of regulatory frameworks and practical experience in handling cross-border investments, we help clients secure the legal and administrative approvals necessary to successfully establish and operate their projects in Cambodia."
                ]
            },
            {
                title: "Licensing & Regulatory Fillings",
                content: [
                    "After establishing a legal entity, some businesses are required to obtain a business license, permit or approval prior to the commencement of commercial operation. We provide comprehensive legal support in obtaining business licenses, permits, and regulatory approvals from relevant ministries and authorities in Cambodia, ensuring full compliance with local laws and sector-specific regulations. We assist clients across a wide range of industries—including pharmaceuticals, healthcare, manufacturing, mining, energy, tourism, and hospitality—by navigating complex administrative processes, preparing and submitting required documentation. With an in-depth understanding of Cambodia’s regulatory landscape, our team streamline procedures and help businesses establish and operate smoothly within their respective sectors."
                ]
            },
            {
                title: "Corporate Restructuring & Exit Planning",
                content: [
                    "As business evolve, restructuring or exiting the market can become a strategic necessity. Whether your goal is to optimize operations, adapt to new market conditions, or close a chapter in Cambodia, we provide end-to-end support to ensure legal compliance and minimize risks.",
                    "Dagrand Law Office provides comprehensive legal support for corporate restructuring and exit planning, ensuring businesses can smoothly transition through each stage of the process. Our services include careful drafting and thorough review of all necessary legal documents to safeguard our clients’ interests, along with preparing and submitting required notifications and registration to relevant regulatory authorities. We also handle company deregistration and related formalities, helping clients conclude operations in full compliance with Cambodian laws. With our expertise, we streamline complex legal procedures, minimize risks, and provide clients with clarity and confidence as they navigate restructuring or winding down their business."
                ]
            },
            {
                title: "Mergers & Acquisitions",
                content: [
                    "Dagrand Law Office provides comprehensive legal services for mergers and acquisitions, guiding clients through every stage of complex business transactions. Our expertise includes conducting thorough legal due diligence to assess potential risks, verify corporate compliance, review contracts, and identify liabilities. We provide legal professional to draft, negotiate, and review key transactional documents, such as share purchase agreements, asset transfer agreements, and merger contracts, ensuring that clients’ interests are fully protected. Additionally, Dagrand Law Office advises on regulatory compliance, antitrust considerations, and corporate governance matters, helping clients navigate legal requirements and achieve smooth, efficient transactions."
                ]
            }
        ]
      },
      {
        id: "tax",
        title: "TAX",
        shortDesc: "Effective tax management is the cornerstone of building and sustaining a successful business in Cambodia’s dynamic market.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
          "Effective tax management is the cornerstone of building and sustaining a successful business in Cambodia’s dynamic market. From corporate income tax, value-added tax, patent tax, and withholding tax, to name a few, companies face a wide range of tax obligations. At the same time, Cambodia also offers a variety of tax incentives and opportunities for specific sectors and businesses. Navigating these requirements, incentives, and exemptions is not only essential for compliance but also critical for avoiding tax liabilities. Our tax services include the followings:"
        ],
        serviceDetails: [
            {
                title: "Tax Registration & Filings",
                content: [
                    "Dagrand Law Office provides tax registration and filing services in Cambodia, catering to both private companies and non-governmental organizations. The firm assists clients with tax registration with the General Department of Taxation, ensuring compliance with the Cambodian tax law from the outset. Our services also cover registration of value added tax, patent tax and tax identification number, filing tax updates, and assistance with both monthly and annual tax filings."
                ]
            },
            {
                title: "Tax Advice",
                content: [
                    "Dagrand Law Office provides comprehensive tax advisory services tailored to meet the diverse needs of individuals and businesses. Our service covers income tax planning and compliance, ensuring clients navigate complex tax regulations efficiently. We offer guidance on capital gains tax, helping optimize tax obligations arising from asset sales. We also advise on double taxation agreements, assisting clients in minimizing tax liabilities across multiple jurisdictions. Property tax matters are handled with precision, and Dagrand Law Office supports clients in leveraging tax incentives for qualified investment projects (QIPs), maximizing benefits for strategic investments. With an focus on clarity, compliance, and strategic planning, our services can help clients to make informed financial decisions while staying fully aligned with legal requirements."
                ]
            },
            {
                title: "Tax Disputes",
                content: [
                    "Dagrand Law Office provides expert legal services for individuals and businesses facing tax disputes, whether under a limited tax audit or a comprehensive tax audit. Our team specializes in navigating complex tax regulations, helping clients respond effectively to tax audit inquiries, and ensuring full compliance while protecting their rights. We provide expert guidance and representation to resolve tax disputes throughout the dispute resolution procedure."
                ]
            }
        ]
      },
      {
        id: "trade",
        title: "INTERNATIONAL TRADES",
        shortDesc: "We take the complexity out of trade compliance by managing customs permits, certificates of origin, and regulatory requirements.",
        image: "https://images.unsplash.com/photo-1516937941344-00b4ec7330f5?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
            "Every shipment counts in business, and non-compliance with trade regulations can lead to costly delays, penalties, and reputational risks. At Dagrand Law Office, we take the complexity out of trade compliance by managing customs permits, certificates of origin, anti-circumvention measures, import/export licensing, and all regulatory requirements.",
            "Our team provide strategic guidance on trade regulations, helping businesses navigate Cambodia’s evolving customs and regulatory landscape and maintain full compliance with local and international rules. Our services include advise on customs related matters, filing for import/export permits or licenses, filing for certificates of origin, and legal assistance on trade remedies."
        ]
      },
      {
        id: "capital-market",
        title: "CAPITAL MARKET",
        shortDesc: "Understanding how to navigate the legal procedures, regulatory requirements, and strategic benefits of listing or issuing securities.",
        image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
            "In today’s rapidly evolving financial landscape, traditional lending is no longer the only path to raising capital. The Cambodian government has been actively promoting the capital market sector to provide businesses with access to different financing methods through equity offerings, bonds, and other structured instruments. Thus, understanding how to navigate the legal procedures, regulatory requirements, and strategic benefits of listing or issuing securities is essential for companies to make informed decisions in accessing more efficient ways to gain capital. We provide legal due diligence, draft and review agreements, and offer advice to companies who wish to enter the capital market in Cambodia."
        ]
      },
      {
        id: "ip",
        title: "INTELLECTUAL PROPERTY",
        shortDesc: "Securing and managing intellectual property rights is critical to drive growth, secure investments, and enhance your competitive advantage.",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
            "You build your brand and creations. We safeguard them. In today’s knowledge-driven economy, intellectual property has emerged as a cornerstone of commercial success and innovation. From trademark that distinguishes your brand in the market, to patents that protect your inventions, to copyrighted works that express your creativity—securing and managing intellectual property right is critical to drive growth, secure investments, and enhance your competitive advantage. Navigating Cambodia’s system of protecting intellectual property rights demands a clear understanding of adherence to proper registration procedures, duty to meet documentary, formality and renewal requirements.",
            "Dagrand Law Office offers various legal assistance such as conducting intellectual property searches and due diligence, drafting and filing patent and trademark applications, negotiating licensing agreements, handling intellectual property transactions, and representing clients in disputes or infringement cases. By combining technical expertise with deep legal knowledge, Dagrand Law Office ensures that clients’ intellectual property rights are secured, maximized, and effectively defended."
        ]
      },
      {
        id: "dispute-resolution",
        title: "DISPUTE RESOLUTION",
        shortDesc: "Our team of experienced attorneys specializes in litigation and alternative dispute resolution, providing tailored strategies.",
        image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
            "Dagrand Law Office offers comprehensive dispute resolution services designed to help clients resolve conflicts efficiently and effectively. Our team of experienced attorneys specializes in litigation and alternative dispute resolution, providing tailored strategies that prioritize both legal rights and practical outcomes. Whether the dispute involves commercial matters or contractual disagreements, our attorneys guide clients through every step of the resolution process, aiming to achieve fair and mutually satisfactory solutions. By combining in-depth legal knowledge with strong communication and problem-solving skills, we ensure that disputes are addressed professionally, minimizing prolonged litigation and fostering constructive resolutions."
        ],
        serviceDetails: [
            {
                title: "Commercial Arbitration",
                content: [
                    "Harness the power of arbitration—a private, efficient, and flexible forum for resolving commercial disputes— provides faster timelines and less procedural complexity than the court system. It allows parties to choose arbitrators with relevant expertise, keep sensitive business information confidential, and craft procedures tailored to their needs. Our attorneys at Dagrand Law Office help you draft robust arbitration agreements, represent parties in hearings, and navigate complex commercial disputes with a focus on achieving favorable outcomes. Our attorneys emphasize strategic advocacy, ensuring that each case is handled with meticulous attention to detail, practical solutions pursuant to the applicable arbitration rules."
                ]
            },
            {
                title: "Litigation",
                content: [
                    "Our team of experienced attorneys handles a wide range of civil and commercial cases, including contract disputes, property conflicts, and commercial litigation. From filing claims and handling pre-trial procedures to representing clients in court hearings and appeals, Dagrand Law Office emphasizes a thorough understanding of Cambodian law and local court practices. Our attorneys also prioritize clear communication, keeping clients informed of case developments while tailoring strategies to meet each client’s specific objectives, whether in dispute resolution, contract enforcement, or complex commercial litigation. By combining deep legal knowledge with practical experience at all levels of courts in Cambodia including the Cambodian Supreme Court, our attorneys guide clients through the complexities of the litigation process."
                ]
            },
            {
                title: "Enforcement of Foreign Arbitral Awards",
                content: [
                    "Dagrand Law Office offers comprehensive legal services for the enforcement of arbitral awards in Cambodia, catering to both domestic and international clients. Leveraging Cambodia's adherence to the New York Convention and the robust framework provided by the Law on Commercial Arbitration and the Code of Civil Procedure, our attorneys assist clients in navigating the procedural requirements for enforcing foreign arbitral awards. This includes preparing and submitting applications to the Court of Appeal, ensuring compliance with necessary documentation such as certified translations of awards and arbitration agreements, and representing clients in potential appeals to the Supreme Court. With a deep understanding of Cambodia's arbitration landscape, Dagrand Law Office is well-equipped to guide clients through the complexities of enforcing arbitral awards, ensuring that their rights are upheld in the Cambodian legal system."
                ]
            }
        ]
      },
      {
        id: "energy-mining",
        title: "ENERGY AND MINING",
        shortDesc: "We help energy and mining companies cut through legal complexity, ensuring compliance while empowering sustainable growth.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [],
        serviceDetails: [
            {
                title: "Energy Sector",
                content: [
                    "Cambodia’s energy sector is on the rise, offering vast potential across renewables, hydro, solar, and traditional power generation. Yet, capitalizing on these opportunities demands more than investment—it requires a deep understanding of regulatory frameworks, licensing processes, and evolving environmental standards. At Dagrand Law Office, we help energy companies cut through legal complexity, ensuring compliance while empowering you to focus on innovation, efficiency, and sustainable growth.",
                    "Our expertise includes applying for licenses and approvals essential for energy projects, advising on compliance with environmental regulations, and navigating complex energy related agreements."
                ]
            },
            {
                title: "Mining Sector",
                content: [
                    "Cambodia’s mining sector holds equally significant promise, from mineral exploration to large-scale production. However, its potential is matched by strict legal requirements. With our expertise, mining companies can confidently navigate the regulatory landscape, secure and maintain the necessary licenses, and implement sustainable practices that meet both operational goals and regulatory expectations.",
                    "Our expertise includes applying for licenses and approvals essential for mining projects, advising on compliance with environmental regulations, and navigating complex mining related agreements."
                ]
            }
        ]
      },
      {
        id: "real-estate",
        title: "REAL ESTATE",
        shortDesc: "Comprehensive legal services tailored to the real estate sector, assisting clients in navigating the complex legal landscape.",
        image: "https://images.unsplash.com/photo-1486406140926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
            "From skyline-defining condos to thriving Borey communities, Cambodia’s real estate scene is shaping the future of both urban and suburban living. Behind every successful property deal—whether a lease, sale, or large-scale development—lies a series of legal steps that safeguard clarity, security, and long-term value. From conducting thorough title searches to ensure clean ownership history, to drafting lease or sale agreements, managing co-ownership or strata title issues, and obtaining the required construction or development permits—each stage requires careful legal oversight.",
            "Dagrand Law Office provides comprehensive legal services tailored to the real estate sector, assisting clients in navigating the complex legal landscape of property transactions. Our services include drafting, reviewing, and negotiating purchase and sale agreements, lease contracts, assist our clients throughout the transaction and ensure compliance with Cambodian laws and regulations. We also handle due diligence, title searches, lien searches and property transfer registration, mitigating potential legal risks for buyers, sellers, and investors. By combining legal expertise with practical insights into the real estate market, we provide our clients with effective solutions that protect their investments and facilitate smooth property transactions."
        ]
      },
      {
        id: "construction",
        title: "CONSTRUCTION",
        shortDesc: "From contract negotiation to regulatory compliance, a rock-solid legal foundation is essential to keep developments moving forward.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
            "In construction, success is measured not only by exceptional architectural designs and skilled workmanship, but by the strength of the legal framework supporting every project. From contract negotiation to regulatory compliance, a rock-solid legal foundation is essential to keep developments moving forward and protect the interests of all parties involved.",
            "Dagrand Law Office provides comprehensive legal services tailored specifically for the construction sector, assisting contractors, developers, suppliers, and project owners in navigating the complex regulatory and contractual landscape of the industry. Our services include drafting and reviewing construction contracts, subcontractor agreements, and ensuring compliance with the Cambodian construction law and its regulations. We also handle dispute resolution, representing clients in claims related to delays, defects, payment issues, and construction litigation. Additionally, our team offers guidance on labour and employment matters, insurance coverage disputes, and regulatory approvals, ensuring that construction projects proceed smoothly while minimizing legal exposure. Our expertise ensures that every aspect of a construction project—from planning and regulatory approvals to execution and post-construction issues—is supported by solid legal protection."
        ]
      },
      {
        id: "healthcare",
        title: "HEALTHCARE AND PHARMACEUTICALS",
        shortDesc: "We handle the legal complexities so that you can focus on your core mission—delivering quality healthcare solutions.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
            "Your compliance challenges are our priority. As you grow and expand your healthcare or pharmaceutical business in Cambodia, we handle the legal complexities so that you can focus on your core mission—delivering quality healthcare solutions. Whether you are establishing manufacturing operations, introducing new medical products to the Cambodian market, or broadening your pharmaceutical distribution network, our team at Dagrand Law Office provides ongoing legal support that safeguards your compliance while upholding rigorous medical and regulatory standards.",
            "Our expertise covers drafting and reviewing distribution and licensing agreements, applying for business licenses, and guiding clients throughout the product registration processes at the Department of Drugs and Foods of the Ministry of Health. Additionally, our team provide legal support for product laboratory testing, as well as obtaining import and export permits, ensuring that all legal and regulatory requirements are met.",
            "By combining in-depth industry knowledge with practical legal solutions, Dagrand Law Office helps healthcare and pharmaceutical companies navigate complex regulatory landscapes with confidence and precision."
        ]
      }
    ]
  },
  testimonials: {
    title: "Client Testimonials",
    items: [
        { quote: "Dagrand's team provided exceptional legal advice that was crucial for our market entry into Cambodia.", author: "International Investor", role: "Real Estate Sector" },
        { quote: "Professional, responsive, and deeply knowledgeable about local regulations. Highly recommended.", author: "General Manager", role: "Manufacturing Company" },
        { quote: "They handled our dispute resolution with integrity and strategic brilliance.", author: "Director", role: "Construction Firm" }
    ]
  },
  ctaSection: {
    title: "Ready to Secure Your Legal Success?",
    subtitle: "Partner with Dagrand Law Office for strategic, integrity-driven legal solutions tailored to your needs.",
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

// ==========================================
// CHINESE CONTENT (PARTIAL UPDATE FOR COMPATIBILITY)
// ==========================================
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
    subtitle: "专业、诚信、高效。您在柬埔寨值得信赖的法律合作伙伴。",
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
    subtitle: "我们结合本地专业知识与国际标准，为您提供卓越的服务。",
    items: [
        { title: "多语言专业能力", desc: "精通英语、中文和法语，为多元化的国际客户提供服务。" },
        { title: "战略性方案", desc: "我们提供具有商业可行性的法律解决方案，而不只是理论建议。" },
        { title: "诚信与信任", desc: "在处理每一个案件中始终秉持最高的职业道德标准。" }
    ]
  },
  about: {
    title: "关于 Dagrand",
    content: [
      "Dagrand Law Office 是一家在柬埔寨王国律师协会注册的精品律师事务所，致力于提供高质量的法律服务。我们的专业领域涵盖争议解决、公司和商业事务、劳动、投资、知识产权、证券、并购、税务和国际贸易。",
      "我们的团队由高素质且经验丰富的律师组成，兼具本地和国际经验，确保为客户提供具有洞察力、战略性且符合全球标准法律解决方案。",
      "通过以客户为中心的方法，我们在处理的每一个案件中都优先考虑专业精神、诚信和效率。无论您是在寻找法律代表、企业咨询还是争议解决，Dagrand Law Office 都是您在柬埔寨值得信赖的法律合作伙伴。",
    ]
  },
  team: {
    title: "专业团队",
    subtitle: "拥有高素质且经验丰富的法律专家",
    intro: [
      "在 Dagrand Law Office，我们的团队由经验丰富的律师和法律专业人士组成，他们拥有柬埔寨、法国和中国知名大学的学历。",
      "我们的团队体现了国际化的专业水平，提供符合全球标准的高质量法律服务。"
    ],
    members: [
      {
        id: "chan-sokyana",
        name: "CHAN Sokyana 先生",
        role: "合伙人",
        languages: "英语、法语",
        bio: [
          "CHAN Sokyana 是柬埔寨执业律师，也是 Dagrand Law Office 的合伙人。他擅长处理公司和商业案件、投资、资本市场、税务和争议解决。他是柬埔寨东盟法律协会（NCCALA）成员。",
          "他曾为多家本地和跨国公司提供法律援助。他深厚的学术背景为处理复杂的商业法律问题提供了强有力的支持。",
          "CHAN Sokyana 在巴黎政治学院完成了博士前预科课程，获得了巴黎政治学院经济法硕士学位。"
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
        name: "傅天心 先生",
        role: "法律顾问",
        languages: "中文、英语、西班牙语",
        bio: [
          "作为中国律师，傅天心是 Dagrand Law Office 的法律顾问。他在柬埔寨和其他东盟国家提供法律服务方面拥有丰富经验。",
          "他的主要执业领域包括中国企业海外投资、柬埔寨房地产开发、能源、贸易救济和争议解决。",
          "傅天心拥有对外经济贸易大学国际经济法硕士学位。他能够无缝对接中国投资者与柬埔寨法律之间的需求。"
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
        shortDesc: "从合同制定、内部政策到法规合规的全方位雇佣周期管理。",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
          "每一个成功的企业背后都有一个感到被重视、被保护和被赋权的团队。您的员工是您最大的资产——保护这些资产始于坚实的法律基础。",
          "在 Dagrand Law Office，我们处理整个雇佣周期中的复杂问题，以便您可以专注于建立成功的业务。"
        ],
        serviceDetails: [
             { title: "雇佣合同与内部政策", content: ["清晰、起草完善的雇佣文件是健康雇主与雇员关系的支柱。"] },
             { title: "劳工部与社会保障基金 (NSSF) 注册与申报", content: ["协助公司内部变更的监管要求，以及向劳工和职业培训部（MLVT）和国家社会保障基金（NSSF）提交通知和其他强制性文件。"] }
        ]
      },
      {
        id: "corporate",
        title: "公司与商业",
        shortDesc: "从设立、许可到重组和并购的全方位公司法律支持。",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
          "您的业务愿景是我们的首要任务。无论您是首次进入柬埔寨还是扩大现有规模，Dagrand Law Office 确保您的业务旅程结构合理、合规。"
        ],
        serviceDetails: [
            { title: "商业协议", content: ["我们协助客户处理各种合同，包括但不限于供应和分销协议、合资企业、服务合同、许可、特许经营和合伙协议。"] },
            { title: "设立公司", content: ["Dagrand Law Office 为寻求在柬埔寨开展业务的本地和外国投资者提供全面的法律支持。"] }
        ]
      },
      {
        id: "tax",
        title: "税务",
        shortDesc: "战略税务管理，包括注册、合规申报和争议代理。",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
          "有效的税务管理是在柬埔寨充满活力的市场中建立和维持成功企业的基石。"
        ],
        serviceDetails: [
             { title: "税务注册与申报", content: ["Dagrand Law Office 在柬埔寨提供税务登记和申报服务。"] },
             { title: "税务建议", content: ["Dagrand Law Office 提供全面的税务咨询服务，旨在满足个人和企业的各种需求。"] }
        ]
      }
    ]
  },
  testimonials: {
    title: "客户评价",
    items: [
        { quote: "Dagrand 团队提供了出色的法律建议，这对我们进入柬埔寨市场至关重要。", author: "国际投资者", role: "房地产行业" },
        { quote: "专业、高效，对当地法规有深刻理解。强烈推荐。", author: "总经理", role: "制造公司" },
        { quote: "他们以诚信和战略性的智慧处理了我们的争议解决。", author: "董事", role: "建筑公司" }
    ]
  },
  ctaSection: {
    title: "准备好保障您的法律权益了吗？",
    subtitle: "与 Dagrand Law Office 合作，获得为您量身定制的战略性、诚信驱动的法律解决方案。",
    buttonText: "预约咨询"
  },
  updates: {
    title: "法律动态",
    subtitle: "随时了解柬埔寨最新的法律进展。",
    comingSoon: "新文章和法律警报即将发布。",
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
