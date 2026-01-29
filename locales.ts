
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
      "Our team of highly skilled lawyers brings both local and international experience, ensuring that our clients receive insightful, strategic, and globally informed legal solutions. At Dagrand Law Office, we cater to a diverse clientele of different nationalities by offering our services in English, French, and Chinese, allowing us to meet the unique needs of both local and foreign businesses, investors, and individuals.",
      "With a client-centric approach, we prioritize professionalism, integrity, and efficiency in every case we handle. Whether you are seeking legal representation, corporate advisory, or dispute resolution, Dagrand Law Office is your trusted legal partner in Cambodia.",
    ]
  },
  team: {
    title: "Our Team",
    subtitle: "Highly skilled and experienced legal professionals",
    intro: [
      "At Dagrand Law Office, our team comprises highly skilled and experienced lawyers and legal professionals who hold academic qualifications from internationally recognized universities in Cambodia, France, and China.",
      "Our team embodies international professionalism, ensuring high-quality legal services that meet global standards while remaining deeply rooted in the Cambodian legal framework."
    ],
    members: [
      {
        id: "chan-sokyana",
        name: "Mr. CHAN Sokyana",
        role: "Partner",
        languages: "English and French",
        bio: [
          "CHAN Sokyana is a Cambodian lawyer and Partner of Dagrand Law Office. He specializes in corporate and commercial cases, investment, capital market, tax and dispute resolution. He is a member of the National Committee of Cambodia ASEAN Law Association (NCCALA), and a law lecturer at the Royal University of Law and Economics in Phnom Penh, Cambodia.",
          "He has provided legal assistance to various clients, both local and multinational companies. His strategic insight helps clients navigate complex regulatory environments with ease.",
          "With a strong academic foundation, CHAN Sokyana completed the pre-doctoral preparation program at Sciences Po in Paris, earned a Master’s degree in Economic Law from Sciences Po in Paris, and graduated with the top ranking with a Bachelor of Laws from the Royal University of Law and Economics in Phnom Penh."
        ],
        education: "Master’s degree in Economic Law (Sciences Po, Paris)",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "fu-tianxin",
        name: "Mr. FU Tianxin",
        role: "Legal Consultant",
        languages: "Chinese, English and Spanish",
        bio: [
          "As a Chinese lawyer, FU Tianxin is a legal consultant at Dagrand Law Office. He has extensive experience in providing legal services in Cambodia and other ASEAN countries.",
          "His main practice areas are overseas investment by Chinese enterprises, real estate development in Cambodia, energy, trade remedies and dispute resolution. He has provided legal assistance to various clients, both local and multinational companies.",
          "FU Tianxin holds a Master’s degree in International Economic Law from the University of International Business and Economics. He bridges the gap between Chinese investors and Cambodian law seamlessly."
        ],
        education: "Master’s degree in International Economic Law",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  practices: {
    title: "Practice Areas",
    subtitle: "Comprehensive legal solutions for your business needs in Cambodia",
    items: [
      {
        id: "employment",
        title: "Employment & Benefits",
        shortDesc: "Comprehensive management of the employment cycle, from contracts and policies to regulatory compliance.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
          "Behind every successful business is a workforce that feels valued, protected, and empowered. Your workforce, which drives productivity, innovation, and growth, is your greatest asset—and protecting that asset begins with sound legal foundations.",
          "At Dagrand Law Office, we handle this complexity across the entire employment cycle, so you can focus on building a successful business backed by a secured and satisfied workforce.",
          "We assist with drafting employment contracts that comply with the Labor Law of Cambodia, ensuring both employer and employee interests are balanced and legally sound."
        ],
        subServices: [
            "Employment Contracts & Internal Policies",
            "Registration & Filings (MLVT & NSSF)",
            "Foreign Workforce & Labour Permits",
            "Labour Advisory & Training"
        ]
      },
      {
        id: "corporate",
        title: "Corporate & Commercial",
        shortDesc: "End-to-end corporate legal support from setup and licensing to restructuring and M&A.",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
          "Your business vision is our priority. Whether you are entering Cambodia for the first time or expanding your existing footprint, Dagrand Law Office ensures your business journey is structured, compliant, and strategically positioned for success.",
          "We offer expert advice on business structure selection, whether it be a Private Limited Company, a Branch Office, or a Representative Office, tailored to your commercial objectives."
        ],
        subServices: [
            "Commercial Agreements",
            "Setting Up Businesses",
            "Qualified Investment Projects (QIP)",
            "Licensing & Regulatory Fillings"
        ]
      },
      {
        id: "tax",
        title: "Tax",
        shortDesc: "Strategic tax management including registration, compliance filings, and representation in disputes.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
        fullDesc: [
          "Effective tax management is the cornerstone of building and sustaining a successful business in Cambodia’s dynamic market.",
          "Our team provides comprehensive tax advisory services, helping clients optimize their tax position while ensuring full compliance with the General Department of Taxation (GDT)."
        ],
        subServices: [
            "Tax Registration & Filings",
            "Tax Advice",
            "Tax Disputes & Audit Representation"
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
    title: "Contact Us",
    addressLabel: "Address",
    hoursLabel: "Business Hours",
    hoursValue: "Mondays – Fridays, 9am – 5pm",
    phoneLabel: "Telephone",
    emailLabel: "Email"
  },
  footer: {
    rights: "All Rights Reserved."
  }
};

// ==========================================
// CHINESE CONTENT (FULL RESTORE)
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
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
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
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
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
        subServices: [
            "雇佣合同与内部政策",
            "劳工部与社会保障基金 (NSSF) 注册与申报",
            "外籍劳工管理与劳工证",
            "劳工法咨询与培训"
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
        subServices: [
            "商业协议",
            "设立公司",
            "合格投资项目 (QIP)",
            "许可与监管备案"
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
        subServices: [
            "税务注册与申报",
            "税务建议",
            "税务纠纷与审计代理"
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
    emailLabel: "邮箱"
  },
  footer: {
    rights: "版权所有。"
  }
};

export const locales = { en, zh };
