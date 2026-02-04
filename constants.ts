
import { PracticeArea, TeamMember, LegalUpdate } from './types';

export const SITE_NAME = "Dagrand Law Office";

// UI Dictionary for static text
export const TRANSLATIONS = {
  en: {
    home: "Home",
    about: "About",
    team: "Team",
    practice: "Practice Areas",
    updates: "Legal Updates",
    contact: "Contact",
    welcome: "Welcome to Dagrand",
    readStory: "Read Our Story",
    contactTeam: "Contact Our Team",
    latestInsights: "Latest Legal Insights",
    viewAll: "View All Updates",
    readMore: "Read More",
    scrollDown: "Scroll Down",
    firmTitle: "Dagrand Law Office",
    slogan: "Insightful. Strategic. Globally Informed.",
    trusted: "Trusted Legal Excellence in Cambodia",
    methodology: "Methodology",
    approach: "Our Approach",
    knowledgeHub: "Knowledge Hub"
  },
  cn: {
    home: "首页",
    about: "关于我们",
    team: "律师团队",
    practice: "业务领域",
    updates: "法律动态",
    contact: "联系我们",
    welcome: "欢迎来到达观",
    readStory: "阅读我们的故事",
    contactTeam: "联系我们的团队",
    latestInsights: "最新法律见解",
    viewAll: "查看所有动态",
    readMore: "阅读更多",
    scrollDown: "向下滚动",
    firmTitle: "柬埔寨达观律师事务所",
    slogan: "洞察力。战略性。全球视野。",
    trusted: "柬埔寨值得信赖的卓越法律服务",
    methodology: "方法论",
    approach: "我们的方法",
    knowledgeHub: "知识中心"
  }
};

export const ABOUT_TEXT = [
  "Dagrand Law Office is a boutique firm registered with the Bar Association of the Kingdom of Cambodia, dedicated to delivering high-quality legal services. Our expertise spans dispute resolution, corporate and commercial matters, employment, investment, intellectual property rights, securities, mergers and acquisitions, taxation, and international trade.",
  "Our team of highly skilled lawyers brings both local and international experience, ensuring that our clients receive insightful, strategic, and globally informed legal solutions. At Dagrand Law Office, we cater to a diverse clientele of different nationalities by offering our services in Khmer, English, French, and Chinese, allowing us to meet the unique needs of both local and foreign businesses, investors, and individuals.",
  "With a client-centric approach, we prioritize professionalism, integrity, and efficiency in every case we handle. Whether you are seeking legal representation, corporate advisory, or dispute resolution, Dagrand Law Office is your trusted legal partner in Cambodia.",
  "Based in Phnom Penh, Cambodia, our clients include multinational companies, international investors, real estate agents and developers, and locally incorporated companies in diverse sectors."
];

// Example of adding Chinese content (Optional fields)
export const TEAM_INTRO = [
  "At Dagrand Law Office, our team comprises highly skilled and experienced lawyers and legal professionals who hold academic qualifications from internationally recognized universities in Cambodia, France, and China.",
  "With many years of experience in dispute resolution, legal assistance, and advisory services, our team has successfully represented and supported clients across a wide range of industries and legal matters. From corporate and commercial transactions to dispute resolution and regulatory compliance, we are committed to delivering strategic and effective legal solutions tailored to the unique needs of each client.",
  "Our team embodies international professionalism, ensuring high-quality legal services that meet global standards while remaining deeply rooted in the Cambodian legal framework. Whether advising local enterprises, multinational corporations, or individual clients, we strive to provide clear, practical, and results-driven legal guidance with integrity and excellence."
];

export const TESTIMONIALS = [
  {
    quote: "Dagrand Law Office provided exceptional legal counsel during our complex market entry. Their deep understanding of both local regulations and international standards was invaluable.",
    author: "CEO",
    company: "Multinational Construction Firm"
  },
  {
    quote: "Their strategic approach to dispute resolution saved us both time and resources. Truly a partner we can rely on for critical legal matters in Cambodia.",
    author: "Director",
    company: "Foreign Investment Group"
  },
  {
    quote: "Professional, responsive, and incredibly knowledgeable. They navigated the regulatory landscape for our real estate development with absolute precision.",
    author: "General Manager",
    company: "Luxury Real Estate Developer"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "MR. CHAN SOKYANA",
    role: "Partner",
    languages: "Khmer, English and French",
    bio: [
      "CHAN Sokyana is a Cambodian lawyer and Partner of Dagrand Law Office. He specializes in corporate and commercial cases, investment, capital market, tax and dispute resolution. He is a member of the National Committee of Cambodia ASEAN Law Association (NCCALA), and a law lecturer at the Royal University of Law and Economics in Phnom Penh, Cambodia. He has provided legal assistance to various clients, both local and multinational companies.",
      "With a strong academic foundation, CHAN Sokyana completed the pre-doctoral preparation program at Sciences Po in Paris, earned a Master’s degree in Economic Law from Sciences Po in Paris, and graduated with the top ranking with a Bachelor of Laws from the Royal University of Law and Economics in Phnom Penh."
    ],
    education: "Master’s degree in Economic Law from Sciences Po in Paris",
    contact: {
      phone: "+855 (0)98 539 910",
      email: "sokyana.chan@dagrand.net"
    },
    image: "https://picsum.photos/id/1005/400/500"
  },
  {
    name: "MR. FU TIANXIN",
    role: "Legal Consultant",
    role_cn: "法律顾问", // Example CN override
    languages: "Chinese, English and Spanish",
    languages_cn: "中文，英文，西班牙文",
    bio: [
      "As a Chinese lawyer, FU Tianxin is a legal consultant at Dagrand Law Office. He has extensive experience in providing legal services in Cambodia and other ASEAN countries. His main practice areas are overseas investment by Chinese enterprises, real estate development in Cambodia, energy, trade remedies and dispute resolution. He has provided legal assistance to various clients, both local and multinational companies.",
      "FU Tianxin holds a Master’s degree in International Economic Law from the University of International Business and Economics."
    ],
    bio_cn: [ // Example CN override
      "作为一名中国律师，付天新是达观律师事务所的法律顾问。他在柬埔寨和其他东盟国家提供法律服务方面拥有丰富的经验。他的主要执业领域是中国企业的海外投资、柬埔寨的房地产开发、能源、贸易救济和争议解决。他曾为各种客户提供法律援助，包括本地和跨国公司。",
      "付天新拥有对外经济贸易大学国际经济法硕士学位。"
    ],
    education: "Master’s degree in International Economic Law",
    contact: {
      phone: "+855 (0)96 866 8508",
      email: "tianxin.fu@dagrand.net"
    },
    image: "https://picsum.photos/id/1012/400/500"
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "employment",
    title: "EMPLOYMENT AND BENEFITS",
    title_cn: "就业与福利",
    shortDescription: "Managing employees in today’s dynamic market environment goes beyond meeting payroll.",
    shortDescription_cn: "在当今充满活力的市场环境中管理员工不仅仅是支付工资。",
    fullContent: [
      "Behind every successful business is a workforce that feels valued, protected, and empowered. Your workforce, which drives productivity, innovation, and growth, is your greatest asset—and protecting that asset begins with sound legal foundations. Managing employees in today’s dynamic market environment goes beyond meeting payroll—it requires navigating well-established and evolving labour law and regulations, ensuring compliance, and creating a framework where both your business and your workforce can thrive.",
      "At Dagrand Law Office, we handle this complexity across the entire employment cycle, so you can focus on building a successful business backed by a secured and satisfied workforce. From recruitment and onboarding to termination compliance, our proactive approach ensures that every employment contract, workplace policy, and recruitment process is not only legally sound but strategically aligned with your business objectives. With deep expertise in Cambodian labour law, we help you manage your workforce with confidence, minimize legal risks before they escalate, and foster work environment that is fair, productive, and fully compliant with statutory requirements. Our services include:",
      "**Employment Contracts & Internal Policies:** Clear, well-drafted employment documentation is the backbone of a healthy employer-employee relationship. We draft and review employment agreements and internal policies that are tailored to your company’s needs while ensuring compliance with Cambodian labour law and regulations.",
      "**Registration & Filings:** Navigating Cambodia’s labour compliance framework can be complex—but non-compliance is costly. We assist with regulatory requirements for registration of changes within the company, and filing of notification and other mandatory documents with the Ministry of Labour and Vocational Training (MLVT) and the National Social Security Funds (NSSF).",
      "**Foreign Workforce & Labour Permits:** Hiring foreign talent requires meticulous attention to both labour and immigration requirements. We provide legal guidance and assist employers through the process from start to finish for hiring foreign employees, obtaining foreign employment quota, work permits and employment card, and provide other necessary legal assistance for a smooth hiring of foreign talents that complies with Cambodian labour law and regulations.",
      "**Labour Advisory & Training:** At Dagrand Law Office, we provide comprehensive and high standard labour advice and training services designed to support employers, human resources professionals, and businesses in navigating complex workplace regulations. We offer expert guidance on employment standards, workplace policies, collective agreements, disciplinary procedures, and compliance with the Cambodian labour law to reduce legal risks and foster healthy employer-employee relationships.",
      "In addition, our labour law experts deliver tailored training programs and workshops on topics such as workplace rights, health and safety, conflict resolution, and effective management practices, ensuring that organizations are well-equipped to handle labour-related challenges proactively and in accordance with the Cambodian labour law and regulations."
    ]
  },
  {
    id: "corporate",
    title: "CORPORATE AND COMMERCIAL",
    shortDescription: "Your business vision is our priority. Whether you are entering Cambodia for the first time or expanding your existing footprint.",
    fullContent: [
      "Your business vision is our priority. Whether you are entering Cambodia for the first time or expanding your existing footprint, Dagrand Law Office ensures your business journey is structured, compliant, and strategically positioned for success.",
      "From business inception, securing licenses, restructuring for growth, to winding down operations, each step comes with its own legal challenges and compliance obligations that play a critical role in safeguarding your business and ensuring sustainable success.",
      "This is where Dagrand Law Office comes in. Our legal team combines deep expertise in Cambodian laws with practical business insight to deliver tailored strategies for every phase of your corporate journey. We help you start on the right foundation, stay compliant as you grow, adapt to new market realities, and exit or transition on favorable terms. Our services include:",
      "**Commercial Agreements:** Our team provides comprehensive legal support in drafting, reviewing, and negotiating commercial agreements to help businesses operate smoothly and securely. We assist clients with a wide range of contracts, including but not limited to supply and distribution agreements, joint ventures, service contracts, licensing, franchising, and partnership agreements. Our focus is on ensuring clarity, compliance with Cambodian laws, and risk mitigation, while protecting our clients’ interests in every transaction. By tailoring agreements to meet the specific needs of each business, we aim to foster strong commercial relationships and prevent disputes, giving our clients confidence and security in their contractual dealings.",
      "**Setting Up Businesses:** Dagrand Law Office provides comprehensive legal support to both local and foreign investors seeking to establish business operations in Cambodia. Our services include advising on suitable business structures—such as a private limited liability company, branch office, or representative office—while ensuring compliance with Cambodian laws and regulations. Our professionals assist with company registration at the Ministry of Commerce, tax registration at the General Department of Taxation, labour registration at the Ministry of Labour and Vocational Training and social securities registration at the National Social Security Fund. We also offer services for obtaining necessary licenses and permits, drafting and reviewing corporate documents, and navigating tax and labour law requirements.",
      "Additionally, our team offers guidance on foreign ownership rules, investment incentives, and industry-specific regulations, enabling clients to start their ventures smoothly and with minimized legal risks.",
      "**Qualified Investment Projects (QIP):** Our experienced team provides comprehensive legal services to assist clients in registering Qualified Investment Projects (QIPs) with the Council for the Development of Cambodia (CDC). We guide investors through every stage of the application process, from preparing and reviewing required documentation to ensuring compliance with Cambodian investment laws and regulations.",
      "Dagrand Law Office also advise investors on tax and customs duties incentives, investment guarantees, and on-going regulatory compliance required under Cambodian investment law and regulations. With in-depth knowledge of regulatory frameworks and practical experience in handling cross-border investments, we help clients secure the legal and administrative approvals necessary to successfully establish and operate their projects in Cambodia.",
      "**Licensing & Regulatory Fillings:** After establishing a legal entity, some businesses are required to obtain a business license, permit or approval prior to the commencement of commercial operation. We provide comprehensive legal support in obtaining business licenses, permits, and regulatory approvals from relevant ministries and authorities in Cambodia, ensuring full compliance with local laws and sector-specific regulations. We assist clients across a wide range of industries—including pharmaceuticals, healthcare, manufacturing, mining, energy, tourism, and hospitality—by navigating complex administrative processes, preparing and submitting required documentation. With an in-depth understanding of Cambodia’s regulatory landscape, our team streamline procedures and help businesses establish and operate smoothly within their respective sectors.",
      "**Corporate Restructuring & Exit Planning:** As business evolve, restructuring or exiting the market can become a strategic necessity. Whether your goal is to optimize operations, adapt to new market conditions, or close a chapter in Cambodia, we provide end-to-end support to ensure legal compliance and minimize risks.",
      "Dagrand Law Office provides comprehensive legal support for corporate restructuring and exit planning, ensuring businesses can smoothly transition through each stage of the process. Our services include careful drafting and thorough review of all necessary legal documents to safeguard our clients’ interests, along with preparing and submitting required notifications and registration to relevant regulatory authorities. We also handle company deregistration and related formalities, helping clients conclude operations in full compliance with Cambodian laws. With our expertise, we streamline complex legal procedures, minimize risks, and provide clients with clarity and confidence as they navigate restructuring or winding down their business.",
      "**Mergers & Acquisitions:** Dagrand Law Office provides comprehensive legal services for mergers and acquisitions, guiding clients through every stage of complex business transactions. Our expertise includes conducting thorough legal due diligence to assess potential risks, verify corporate compliance, review contracts, and identify liabilities. We provide legal professional to draft, negotiate, and review key transactional documents, such as share purchase agreements, asset transfer agreements, and merger contracts, ensuring that clients’ interests are fully protected. Additionally, Dagrand Law Office advises on regulatory compliance, antitrust considerations, and corporate governance matters, helping clients navigate legal requirements and achieve smooth, efficient transactions."
    ]
  },
  {
    id: "tax",
    title: "TAX",
    shortDescription: "Effective tax management is the cornerstone of building and sustaining a successful business.",
    fullContent: [
      "Effective tax management is the cornerstone of building and sustaining a successful business in Cambodia’s dynamic market. From corporate income tax, value-added tax, patent tax, and withholding tax, to name a few, companies face a wide range of tax obligations. At the same time, Cambodia also offers a variety of tax incentives and opportunities for specific sectors and businesses. Navigating these requirements, incentives, and exemptions is not only essential for compliance but also critical for avoiding tax liabilities. Our tax services include the followings:",
      "**Tax Registration & Filings:** Dagrand Law Office provides tax registration and filing services in Cambodia, catering to both private companies and non-governmental organizations. The firm assists clients with tax registration with the General Department of Taxation, ensuring compliance with the Cambodian tax law from the outset. Our services also cover registration of value added tax, patent tax and tax identification number, filing tax updates, and assistance with both monthly and annual tax filings.",
      "**Tax Advice:** Dagrand Law Office provides comprehensive tax advisory services tailored to meet the diverse needs of individuals and businesses. Our service covers income tax planning and compliance, ensuring clients navigate complex tax regulations efficiently. We offer guidance on capital gains tax, helping optimize tax obligations arising from asset sales. We also advise on double taxation agreements, assisting clients in minimizing tax liabilities across multiple jurisdictions. Property tax matters are handled with precision, and Dagrand Law Office supports clients in leveraging tax incentives for qualified investment projects (QIPs), maximizing benefits for strategic investments. With a focus on clarity, compliance, and strategic planning, our services can help clients to make informed financial decisions while staying fully aligned with legal requirements.",
      "**Tax Disputes:** Dagrand Law Office provides expert legal services for individuals and businesses facing tax disputes, whether under a limited tax audit or a comprehensive tax audit. Our team specializes in navigating complex tax regulations, helping clients respond effectively to tax audit inquiries, and ensuring full compliance while protecting their rights. We provide expert guidance and representation to resolve tax disputes throughout the dispute resolution procedure."
    ]
  },
  {
    id: "trade",
    title: "INTERNATIONAL TRADES",
    shortDescription: "Every shipment counts in business, and non-compliance with trade regulations can lead to costly delays.",
    fullContent: [
      "Every shipment counts in business, and non-compliance with trade regulations can lead to costly delays, penalties, and reputational risks. At Dagrand Law Office, we take the complexity out of trade compliance by managing customs permits, certificates of origin, anti-circumvention measures, import/export licensing, and all regulatory requirements.",
      "Our team provide strategic guidance on trade regulations, helping businesses navigate Cambodia’s evolving customs and regulatory landscape and maintain full compliance with local and international rules. Our services include advise on customs related matters, filing for import/export permits or licenses, filing for certificates of origin, and legal assistance on trade remedies."
    ]
  },
  {
    id: "capital-market",
    title: "CAPITAL MARKET",
    shortDescription: "Traditional lending is no longer the only path to raising capital.",
    fullContent: [
      "In today’s rapidly evolving financial landscape, traditional lending is no longer the only path to raising capital. The Cambodian government has been actively promoting the capital market sector to provide businesses with access to different financing methods through equity offerings, bonds, and other structured instruments. Thus, understanding how to navigate the legal procedures, regulatory requirements, and strategic benefits of listing or issuing securities is essential for companies to make informed decisions in accessing more efficient ways to gain capital. We provide legal due diligence, draft and review agreements, and offer advice to companies who wish to enter the capital market in Cambodia."
    ]
  },
  {
    id: "ip",
    title: "INTELLECTUAL PROPERTY",
    shortDescription: "You build your brand and creations. We safeguard them.",
    fullContent: [
      "You build your brand and creations. We safeguard them. In today’s knowledge-driven economy, intellectual property has emerged as a cornerstone of commercial success and innovation. From trademark that distinguishes your brand in the market, to patents that protect your inventions, to copyrighted works that express your creativity—securing and managing intellectual property right is critical to drive growth, secure investments, and enhance your competitive advantage. Navigating Cambodia’s system of protecting intellectual property rights demands a clear understanding of adherence to proper registration procedures, duty to meet documentary, formality and renewal requirements.",
      "Dagrand Law Office offers various legal assistance such as conducting intellectual property searches and due diligence, drafting and filing patent and trademark applications, negotiating licensing agreements, handling intellectual property transactions, and representing clients in disputes or infringement cases. By combining technical expertise with deep legal knowledge, Dagrand Law Office ensures that clients’ intellectual property rights are secured, maximized, and effectively defended."
    ]
  },
  {
    id: "dispute",
    title: "DISPUTE RESOLUTION",
    shortDescription: "We offer comprehensive dispute resolution services designed to help clients resolve conflicts efficiently.",
    fullContent: [
      "Dagrand Law Office offers comprehensive dispute resolution services designed to help clients resolve conflicts efficiently and effectively. Our team of experienced attorneys specializes in litigation and alternative dispute resolution, providing tailored strategies that prioritize both legal rights and practical outcomes. Whether the dispute involves commercial matters or contractual disagreements, our attorneys guide clients through every step of the resolution process, aiming to achieve fair and mutually satisfactory solutions. By combining in-depth legal knowledge with strong communication and problem-solving skills, we ensure that disputes are addressed professionally, minimizing prolonged litigation and fostering constructive resolutions.",
      "**Commercial Arbitration:** Harness the power of arbitration—a private, efficient, and flexible forum for resolving commercial disputes— provides faster timelines and less procedural complexity than the court system. It allows parties to choose arbitrators with relevant expertise, keep sensitive business information confidential, and craft procedures tailored to their needs. Our attorneys at Dagrand Law Office help you draft robust arbitration agreements, represent parties in hearings, and navigate complex commercial disputes with a focus on achieving favorable outcomes. Our attorneys emphasize strategic advocacy, ensuring that each case is handled with meticulous attention to detail, practical solutions pursuant to the applicable arbitration rules.",
      "**Litigation:** Our team of experienced attorneys handles a wide range of civil and commercial cases, including contract disputes, property conflicts, and commercial litigation. From filing claims and handling pre-trial procedures to representing clients in court hearings and appeals, Dagrand Law Office emphasizes a thorough understanding of Cambodian law and local court practices. Our attorneys also prioritize clear communication, keeping clients informed of case developments while tailoring strategies to meet each client’s specific objectives, whether in dispute resolution, contract enforcement, or complex commercial litigation. By combining deep legal knowledge with practical experience at all levels of courts in Cambodia including the Cambodian Supreme Court, our attorneys guide clients through the complexities of the litigation process.",
      "**Enforcement of Foreign Arbitral Awards:** Dagrand Law Office offers comprehensive legal services for the enforcement of arbitral awards in Cambodia, catering to both domestic and international clients. Leveraging Cambodia's adherence to the New York Convention and the robust framework provided by the Law on Commercial Arbitration and the Code of Civil Procedure, our attorneys assist clients in navigating the procedural requirements for enforcing foreign arbitral awards. This includes preparing and submitting applications to the Court of Appeal, ensuring compliance with necessary documentation such as certified translations of awards and arbitration agreements, and representing clients in potential appeals to the Supreme Court. With a deep understanding of Cambodia's arbitration landscape, Dagrand Law Office is well-equipped to guide clients through the complexities of enforcing arbitral awards, ensuring that their rights are upheld in the Cambodian legal system."
    ]
  },
  {
    id: "energy",
    title: "ENERGY AND MINING",
    shortDescription: "Capitalizing on opportunities in Energy and Mining demands a deep understanding of regulatory frameworks.",
    fullContent: [
      "**Energy Sector:** Cambodia’s energy sector is on the rise, offering vast potential across renewables, hydro, solar, and traditional power generation. Yet, capitalizing on these opportunities demands more than investment—it requires a deep understanding of regulatory frameworks, licensing processes, and evolving environmental standards. At Dagrand Law Office, we help energy companies cut through legal complexity, ensuring compliance while empowering you to focus on innovation, efficiency, and sustainable growth.",
      "Our expertise includes applying for licenses and approvals essential for energy projects, advising on compliance with environmental regulations, and navigating complex energy related agreements.",
      "**Mining Sector:** Cambodia’s mining sector holds equally significant promise, from mineral exploration to large-scale production. However, its potential is matched by strict legal requirements. With our expertise, mining companies can confidently navigate the regulatory landscape, secure and maintain the necessary licenses, and implement sustainable practices that meet both operational goals and regulatory expectations.",
      "Our expertise includes applying for licenses and approvals essential for mining projects, advising on compliance with environmental regulations, and navigating complex mining related agreements."
    ]
  },
  {
    id: "real-estate",
    title: "REAL ESTATE",
    shortDescription: "Cambodia’s real estate scene is shaping the future of both urban and suburban living.",
    fullContent: [
      "From skyline-defining condos to thriving Borey communities, Cambodia’s real estate scene is shaping the future of both urban and suburban living. Behind every successful property deal—whether a lease, sale, or large-scale development—lies a series of legal steps that safeguard clarity, security, and long-term value. From conducting thorough title searches to ensure clean ownership history, to drafting lease or sale agreements, managing co-ownership or strata title issues, and obtaining the required construction or development permits—each stage requires careful legal oversight.",
      "Dagrand Law Office provides comprehensive legal services tailored to the real estate sector, assisting clients in navigating the complex legal landscape of property transactions. Our services include drafting, reviewing, and negotiating purchase and sale agreements, lease contracts, assist our clients throughout the transaction and ensure compliance with Cambodian laws and regulations. We also handle due diligence, title searches, lien searches and property transfer registration, mitigating potential legal risks for buyers, sellers, and investors. By combining legal expertise with practical insights into the real estate market, we provide our clients with effective solutions that protect their investments and facilitate smooth property transactions."
    ]
  },
  {
    id: "construction",
    title: "CONSTRUCTION",
    shortDescription: "Success is measured by the strength of the legal framework supporting every project.",
    fullContent: [
      "In construction, success is measured not only by exceptional architectural designs and skilled workmanship, but by the strength of the legal framework supporting every project. From contract negotiation to regulatory compliance, a rock-solid legal foundation is essential to keep developments moving forward and protect the interests of all parties involved.",
      "Dagrand Law Office provides comprehensive legal services tailored specifically for the construction sector, assisting contractors, developers, suppliers, and project owners in navigating the complex regulatory and contractual landscape of the industry. Our services include drafting and reviewing construction contracts, subcontractor agreements, and ensuring compliance with the Cambodian construction law and its regulations. We also handle dispute resolution, representing clients in claims related to delays, defects, payment issues, and construction litigation. Additionally, our team offers guidance on labour and employment matters, insurance coverage disputes, and regulatory approvals, ensuring that construction projects proceed smoothly while minimizing legal exposure. Our expertise ensures that every aspect of a construction project—from planning and regulatory approvals to execution and post-construction issues—is supported by solid legal protection."
    ]
  },
  {
    id: "healthcare",
    title: "HEALTHCARE AND PHARMACEUTICALS",
    shortDescription: "We handle the legal complexities so that you can focus on your core mission—delivering quality healthcare.",
    fullContent: [
      "Your compliance challenges are our priority. As you grow and expand your healthcare or pharmaceutical business in Cambodia, we handle the legal complexities so that you can focus on your core mission—delivering quality healthcare solutions. Whether you are establishing manufacturing operations, introducing new medical products to the Cambodian market, or broadening your pharmaceutical distribution network, our team at Dagrand Law Office provides ongoing legal support that safeguards your compliance while upholding rigorous medical and regulatory standards.",
      "Our expertise covers drafting and reviewing distribution and licensing agreements, applying for business licenses, and guiding clients throughout the product registration processes at the Department of Drugs and Foods of the Ministry of Health. Additionally, our team provide legal support for product laboratory testing, as well as obtaining import and export permits, ensuring that all legal and regulatory requirements are met.",
      "By combining in-depth industry knowledge with practical legal solutions, Dagrand Law Office helps healthcare and pharmaceutical companies navigate complex regulatory landscapes with confidence and precision."
    ]
  }
];

export const CONTACT_INFO = {
  address: "Dagrand Law Office, Floor 1, Building No. 162, Street 51 corner Street 334, Sangkat Boeung Keng Kang 1, Khan Chamkarmon, Phnom Penh, Cambodia",
  businessHours: "Mondays – Fridays, 9am – 5pm",
  phones: [
    { label: "Khmer, English and French", number: "+855 (0)98 539 910" },
    { label: "Chinese", number: "+855 (0)96 866 8508" }
  ],
  email: "info@dagrand.net",
  linkedin: "https://kh.linkedin.com/company/dagrand-law-office",
  wechat: "Our WeChat page" 
};

export const MOCK_UPDATES: LegalUpdate[] = [
  {
    id: "1",
    date: "OCTOBER 24, 2024",
    title: "New Regulation on Taxation of Digital Goods in Cambodia",
    category: "TAX",
    summary: "The General Department of Taxation has issued new guidelines regarding VAT on digital goods and services provided by non-resident entities...",
    content: [
        "In a significant move to modernize its tax framework, the General Department of Taxation (GDT) of Cambodia has issued new detailed guidelines regarding the implementation of Value Added Tax (VAT) on digital goods and services provided by non-resident entities. This regulation aims to level the playing field between local and international digital service providers and capture revenue from the growing digital economy.",
        "The new regulation defines 'digital goods' to include software, applications, digital media (such as music, movies, and e-books), and online games. 'Digital services' cover a broad range of activities, including data hosting, online advertising, cloud computing services, and streaming platforms. Non-resident entities that do not have a permanent establishment in Cambodia but supply these goods or services to consumers in Cambodia are now required to register for Simplified VAT if their annual turnover exceeds the threshold set by the GDT.",
        "Under the simplified mechanism, non-resident suppliers must file VAT returns and pay the tax monthly. However, unlike the standard VAT regime, they are not allowed to claim input VAT credits. This measure simplifies the compliance burden for foreign companies while ensuring that VAT is collected on consumption within Cambodia.",
        "For Cambodian businesses (B2B transactions), the reverse charge mechanism applies. This means that if a local registered taxpayer purchases digital services from a non-resident, the local company must declare and pay the 10% VAT on behalf of the supplier. This ensures that the tax burden does not fall solely on the consumer but is integrated into the broader tax system.",
        "We advise all clients engaged in digital commerce to review their obligations under this new regulation. Failure to comply may result in penalties and interest. Our tax team is available to assist with registration, filing, and advisory services to ensure full compliance with the Cambodian tax laws."
    ],
    image: "https://picsum.photos/id/20/600/400",
    author: {
      id: "u1",
      name: "Mr. CHAN Sokyana",
      avatar: "https://ui-avatars.com/api/?name=Soky&background=b49b67&color=fff",
      role: "Partner"
    }
  },
  {
    id: "2",
    date: "SEPTEMBER 10, 2024",
    title: "Updates to the Labour Law: Pension Scheme Implementation",
    category: "EMPLOYMENT AND BENEFITS",
    summary: "Key changes to the National Social Security Fund (NSSF) pension scheme have been announced, affecting both employers and employees...",
    content: [
        "The Ministry of Labour and Vocational Training, in conjunction with the National Social Security Fund (NSSF), has announced key updates to the implementation of the pension scheme for private sector employees. This development marks a major step towards providing long-term social security and financial stability for the Cambodian workforce.",
        "The new pension scheme is mandatory for all enterprises registered under the Labour Law. Both employers and employees are required to make monthly contributions to the pension fund. The contribution rate is set as a percentage of the employee's contributory wage, with the cost shared equally between the employer and the employee. The funds collected will be managed by the NSSF to provide retirement benefits, invalidity pensions, and survivor benefits.",
        "Employers must ensure that they are registered with the NSSF for the pension scheme and that they deduct the correct amount from their employees' salaries. The contributions must be remitted to the NSSF by the deadline each month. Failure to register or pay contributions on time can lead to fines and legal action.",
        "The implementation will be rolled out in phases. The first phase focuses on compulsory contributions for all registered enterprises. Future phases may introduce voluntary contributions for self-employed individuals and additional benefits. This scheme is designed to replace the seniority indemnity payment for retirement, although transition rules apply for existing seniority payments.",
        "Dagrand Law Office recommends that all employers review their payroll systems and communicate these changes to their employees. Understanding the calculation methods and contribution caps is crucial for compliance. We offer training and advisory services to help your HR department navigate these new requirements seamlessly."
    ],
    image: "https://picsum.photos/id/24/600/400",
    author: {
      id: "u2",
      name: "Mr. FU Tianxin",
      avatar: "https://ui-avatars.com/api/?name=Tianxin&background=153c63&color=fff",
      role: "Legal Consultant"
    }
  },
  {
    id: "3",
    date: "AUGUST 15, 2024",
    title: "Investment Law: New Incentives for Green Energy Projects",
    category: "ENERGY AND MINING",
    summary: "The Council for the Development of Cambodia (CDC) has released a sub-decree detailing specific tax incentives for renewable energy investments...",
    content: [
        "Reaffirming its commitment to sustainable development, the Council for the Development of Cambodia (CDC) has released a new sub-decree detailing specific tax incentives for investments in green energy and renewable resources. This initiative supports the Royal Government of Cambodia’s strategic plan to increase the share of renewable energy in the national grid and reduce carbon emissions.",
        "The incentives apply to Qualified Investment Projects (QIPs) involved in solar energy, wind power, biomass, and hydro energy, as well as projects focused on energy efficiency and waste-to-energy solutions. Eligible projects can benefit from a tax holiday on income tax for up to 9 years, followed by a reduced tax rate for a specified period. Additionally, import duties on construction materials and equipment used for these projects are exempted.",
        "To qualify, investors must demonstrate that their projects meet specific environmental standards and contribute to technology transfer and local capacity building. The application process has been streamlined through the CDC’s online portal, allowing for faster approval times.",
        "Beyond tax breaks, the government is also working on improving the regulatory framework for Power Purchase Agreements (PPAs) to ensure a stable market for independent power producers (IPPs). This creates a favorable environment for both foreign and local investors looking to enter the Cambodian energy market.",
        "Investors interested in the green energy sector should consult with legal experts to understand the full scope of benefits and the application procedure. Dagrand Law Office has a dedicated Energy and Mining practice that can assist with QIP registration, environmental compliance, and contract negotiations."
    ],
    image: "https://picsum.photos/id/48/600/400",
    author: {
      id: "u1",
      name: "Mr. CHAN Sokyana",
      avatar: "https://ui-avatars.com/api/?name=Soky&background=b49b67&color=fff",
      role: "Partner"
    }
  }
];