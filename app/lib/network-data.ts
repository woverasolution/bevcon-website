export type ProfileLevel = 'A' | 'B' | 'C';

export interface NetworkProfile {
  id: string;
  name: string;
  role: string;
  level: ProfileLevel;
  teaserServices: string;
  fullProfile?: string;
  services: string[];
  image?: string;
  imagePosition?: string; // CSS object-position value, e.g., 'center 20%' to position face in circular crop
  isAnonymous?: boolean; // If true, name and company details are hidden on the network page
  anonymousLabel?: string; // Placeholder name for anonymous profiles, e.g. "Senior Technical Director"
  clickable?: boolean; // If false, the profile card does not link to a detail page. Defaults to true.
}

// Helper function to create slug from name
function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// A-LEVEL – LEADERSHIP
const aLevelProfiles: NetworkProfile[] = [
  {
    id: 'johannes-bier',
    name: 'Johannes Bier',
    role: 'Managing Director',
    level: 'A',
    image: '/portraits/BierJohannes_light.png',
    imagePosition: 'center 15%',
    teaserServices: 'Strategy · Project Development · Finance · Contracts',
    services: ['Beverage Concept', 'Beverage Construction', 'Beverage Contracts', 'Beverage Control', 'Beverage Confidence', 'Beverage Connect'],
    fullProfile: `Johannes Bier is the Managing Director of BevCon and an experienced international project developer, strategy consultant, and FIDIC contract expert with a strong track record in large-scale beverage and industrial investments worldwide. He holds a degree in Economics from Humboldt University Berlin and completed advanced executive studies at HEC Lausanne.

Johannes combines strategic advisory, project finance structuring, contract management, and hands-on project leadership. He has led complex greenfield and expansion projects from early feasibility through financing, international tendering, construction, commissioning, and handover, frequently acting at steering committee level and as Employer's Representative for investors, lenders, and project sponsors.

A flagship reference is Kegna Beverages Share Company (Ethiopia), a greenfield brewery with an initial capacity of 3 million hectolitres, expandable to 6 million hectolitres, and a total investment volume of approximately USD 250 million. Johannes designed the complete project implementation framework and led a comprehensive feasibility study that formed the basis for a USD 150 million project loan. He managed a World Bank-compliant two-stage international tender structured under FIDIC Red Book (civil works), Yellow Book (PEB works), and Silver Book (process technology) contracts and was responsible for full contract administration and project governance.

Another key project is Société Nouvelle de Boissons (Togo), a 300,000 hectolitre brewery for beer and soft drinks. Johannes led the feasibility study, structured a consortium of local and international investors, facilitated project financing with regional banks supported by guarantee institutions, and acted as overall project manager through construction, commissioning, and handover.

Before focusing exclusively on beverage projects, Johannes spent eight years with PricewaterhouseCoopers and Capgemini Strategy Consulting, advising clients in automotive, pharmaceutical, technology, and software sectors across Europe, China, North Africa, and the United States.

Johannes is a recognised FIDIC contract specialist with extensive experience in World Bank procurement standards, prequalification procedures, single-stage and two-stage tenders, drafting of Particular Conditions, contract administration, claim management, and DAAB procedures. He has applied FIDIC Silver, Yellow, and Red Books on industrial projects exceeding USD 100 million.`,
  },
  {
    id: 'piet-sierens',
    name: 'Piet Sierens',
    role: 'Technical Director',
    level: 'A',
    isAnonymous: true,
    anonymousLabel: 'Senior Technical Director',
    clickable: false,
    // image removed for anonymity
    teaserServices: 'Engineering · Operations · Project Execution',
    services: ['Beverage Concept', 'Beverage Construction', 'Beverage Confidence', 'Beverage Control', 'Beverage Consulting', 'Beverage Connect'],
    fullProfile: `A senior industrial engineer with extensive international experience in engineering, procurement, operations, and large-scale beverage project execution. He holds a degree in Industrial Engineering in Biochemistry (with distinction) and an MBA (USA). Together with the Managing Director, he co-leads technical and operational activities, acting as technical authority and Employer's Representative on complex investments.

He has acted as Senior On-Site Project Manager for major greenfield projects in Ethiopia and Togo, coordinating civil works, process suppliers, utilities, commissioning, and ramp-up.

Previously, he served as Procurement Director for a major beverage group, responsible for technical procurement and engineering standards across 70 beverage plants in 21 African countries. As General Manager in Ukraine, he led operational optimisation, KPI systems, and SPC implementation. Earlier roles include Production Manager and Board Member where he led the construction of a 1 million hectolitre greenfield brewery and transformed operations.

He is a professional auditor in quality systems, maintenance, asset care, OPEX optimisation, and performance management, supporting investors with audits, turnaround support, and operational readiness.`,
  },
];

// B-LEVEL – SENIOR EXPERTS
const bLevelProfiles: NetworkProfile[] = [
  {
    id: 'andre-urdaneta',
    name: 'Andre Urdaneta',
    role: 'Automation & Process Control Expert',
    level: 'B',
    image: '/portraits/UrdanetaAndre_light.png',
    imagePosition: 'center 20%',
    teaserServices: 'Brewing automation · SCADA · Process control',
    services: ['Beverage Construction', 'Beverage Confidence', 'Beverage Control', 'Beverage Consulting', 'Beverage Connect'],
    fullProfile: `Andre Urdaneta is a senior automation and process control specialist with more than 23 years of international experience in the food and beverage industry, with a strong focus on brewery automation and industrial control systems. He combines deep technical expertise with project leadership and commercial understanding, supporting clients from system design through commissioning and stable operation.

Andre has extensive hands-on experience with Siemens automation platforms, including SIMATIC S5 and S7, TIA Portal, WinCC, BRAUMAT, SISTAR, ProfiBus, ProfiNet, and Industrial Ethernet architectures. In addition, he is highly experienced with leading brewery-specific process control systems such as BREWMAXX (ProLeiT) and BOTEC (Syskron), as well as a range of SCADA solutions including iFIX, FIX32, and ONSPEC32. This breadth allows him to work flexibly across different OEM environments and legacy systems.

As Managing Director of ControleX LLC, Andre has delivered automation projects for breweries and beverage producers worldwide, covering greenfield installations, system migrations, upgrades, and performance optimisation. His scope typically includes automation architecture design, PLC and SCADA configuration, batch control implementation, integration of instrumentation and field devices, FAT/SAT support, commissioning, and operator training.

Andre is particularly effective in complex project environments involving multiple international OEMs, vendors, and system integrators. He supports project scheduling, resource planning, and coordination between automation, process, mechanical, and electrical disciplines, ensuring that automation systems align with overall project timelines and operational objectives.

Beyond technical execution, Andre brings strong managerial and commercial skills, including experience in sales activities, client advisory, and solution positioning. He works comfortably within international standards frameworks such as ISA-88, GAMP, and Six Sigma, supporting structured, compliant, and scalable automation solutions.

Within BevCon, Andre strengthens automation strategy, process control standardisation, commissioning readiness, and operational reliability across beverage construction and optimisation projects.`,
  },
  {
    id: 'bereket-teshale',
    name: 'Bereket Teshale',
    role: 'Senior Architect',
    level: 'B',
    image: '/portraits/TeshaleBereket_light.png',
    imagePosition: 'center 30%',
    teaserServices: 'Industrial & brewery design',
    services: ['Beverage Construction', 'Beverage Concept', 'Beverage Consulting', 'Beverage Connect'],
    fullProfile: `Bereket Teshale is a senior architect and design unit leader with strong experience in industrial and brewery-related construction projects. He supports projects from concept development and detailed design through construction execution, ensuring architectural solutions are buildable, compliant, and aligned with engineering and operational requirements.

His scope typically includes design development, construction documentation, BOQs, material approvals, and on-site coordination with engineers, contractors, suppliers, and clients. Bereket brings practical construction management insight, helping reduce late-stage changes by ensuring that design decisions reflect real site constraints, sequencing, and safety considerations. He is experienced working within multidisciplinary project teams where architectural works must integrate cleanly with civil structures, utilities buildings, process areas, and operational flows.

On brewery-related projects, Bereket contributes to the coordination of industrial buildings, offices, welfare areas, and site infrastructure interfaces, supporting efficient execution and consistent quality. He is effective in managing documentation clarity and ensuring that contractors work from aligned drawings, specifications, and material approvals, reducing rework and implementation risk.

Within BevCon, Bereket supports Beverage Construction and Beverage Concept assignments where architectural leadership and site coordination are needed to translate industrial layouts into practical, well-executed facilities. He also contributes to consulting assignments requiring reliable documentation, interface coordination, and strong construction-stage communication.`,
  },
  {
    id: 'carlos-weinberger',
    name: 'Carlos Weinberger',
    role: 'Senior Brewmaster & Plant Manager',
    level: 'B',
    image: '/portraits/WeinbergerCarlos_light.png',
    imagePosition: 'center 20%',
    teaserServices: 'Large-scale brewery operations',
    services: ['Beverage Confidence', 'Beverage Construction', 'Beverage Consulting', 'Beverage Connect'],
    fullProfile: `Carlos Weinberger is a senior brewmaster and plant manager with more than 35 years of international experience in industrial brewing and large-scale brewery leadership. He has held senior technical and operational management roles in high-capacity breweries across Latin America, Europe, Africa, Central Asia, and the Middle East, including sites with annual outputs exceeding 8 million hectolitres.

His professional scope covers full end-to-end brewery operations, including brewing, fermentation, filtration, packaging interfaces, utilities coordination, quality systems, maintenance alignment, and organisational leadership. Carlos is frequently engaged in situations where operational stability and performance recovery are critical—such as post-commissioning ramp-up phases, rapid capacity expansion, operational restructuring, or persistent quality and efficiency challenges.

A core strength of Carlos’ work lies in diagnosing complex operational issues and translating them into practical, executable improvement programmes. His experience includes brewhouse efficiency optimisation, fermentation and maturation stabilisation, loss reduction, packaging performance improvement, and the establishment of robust operational routines and KPI systems. He is particularly effective at embedding improvements into daily operations so that results remain sustainable beyond short-term interventions.

Carlos has led large, multicultural teams in demanding industrial environments, often under tight production, quality, and cost constraints. His leadership style combines strong brewing fundamentals with pragmatic management, focusing on clarity, accountability, and disciplined execution on the shop floor.

Within BevCon, Carlos supports operational audits, ramp-up and stabilisation assignments, performance recovery programmes, and interim senior operations leadership. He provides hands-on, experience-driven support to management and production teams, helping large and complex breweries achieve stable quality, reliable output, and sustained performance.`,
  },
  {
    id: 'christian-mueller',
    name: 'Christian Mueller',
    role: 'Senior Brewmaster',
    level: 'B',
    image: '/portraits/MuellerChristian_industrial.png',
    imagePosition: 'center 20%',
    teaserServices: 'Operational optimisation · Training',
    services: ['Beverage Confidence', 'Beverage Construction', 'Beverage Consulting', 'Beverage Connect'],
    fullProfile: `Christian Mueller brings more than 25 years of international brewing experience across small breweries, mid-sized operations, and large industrial groups. He supports brewery management teams and shop-floor brewers in improving operational performance, reducing losses, and reaching KPI-driven targets—especially when plants need practical coaching and a fresh external view.

Christian's focus areas include brewhouse efficiency, fermentation and maturation stability, filtration performance, and cleaning/CIP routines. A key part of his work is identifying hidden loss drivers—extract loss, beer and wort losses, time losses, energy and water inefficiencies, raw material overconsumption—and converting those findings into practical process improvements and standard operating routines. He is valued for "de-biasing" teams that have become operationally blind to recurring issues and for modernising established processes without unnecessary complexity.

Christian is also frequently engaged during commissioning and ramp-up phases. He supports both equipment suppliers and brewery operators when "plug and play" is desired but not realistic—helping bridge the gap between installation completion and stable, confident autonomous operation. This includes on-site support, training, and follow-up troubleshooting after OEM teams have left.

Within BevCon, Christian supports Beverage Confidence and Beverage Consulting assignments through operational audits, coaching, loss reduction programs, and ramp-up support. His style is hands-on and pragmatic, with a clear focus on measurable performance improvement and capability building inside the client's team.`,
  },
  {
    id: 'evert-boersma',
    name: 'Evert Boersma',
    role: 'Commercial & Marketing Manager',
    level: 'B',
    image: '/portraits/BoersmaEvert_light.png',
    imagePosition: 'center 35%',
    teaserServices: 'Route-to-Market · Trade Activation · Sales Force Excellence',
    services: ['Beverage Concept', 'Beverage Confidence', 'Beverage Control', 'Beverage Connect'],
    fullProfile: `Evert Boersma is an international commercial and marketing leader with extensive experience building and improving route-to-market, trade marketing, and sales execution across Africa, the Middle East, Europe, and the Caribbean. He supports beverage companies as an interim manager and consultant, strengthening commercial organisations through sales force assessments, capability building, coaching, and practical in-store execution programs.

Evert previously served as Commercial Director at a leading brewery in Rwanda, delivering strong volume growth and implementing distributor planning, reporting structures, and direct store delivery initiatives. He also held regional roles with Heineken focused on sales execution and trade marketing development across multiple OpCos, including building sales academies and training hundreds of commercial staff.`,
  },
  {
    id: 'hardeep-singh-bajwa',
    name: 'Hardeep Singh Bajwa',
    role: 'Brewmaster & Plant Manager',
    level: 'B',
    // No light image available, reverting to industrial as preferred alternative
    image: '/portraits/SingHardeep_industrial.png',
    imagePosition: 'center 25%',
    teaserServices: 'Industrial brewery leadership',
    services: ['Beverage Confidence', 'Beverage Construction', 'Beverage Consulting', 'Beverage Connect'],
    fullProfile: `Hardeep Singh Bajwa is a senior brewmaster and plant leader with more than 25 years of international experience in industrial brewery operations across Africa and Asia. He has held senior roles including Plant Head, Brewery Manager / Site Director, Site Technical Manager, and senior brewing leadership positions within global and regional brewing groups. Across these assignments, he has combined strong operational discipline with people leadership, delivering stable performance in complex, high-volume environments.

Hardeep's scope typically spans full end-to-end operations: brewing, packaging, utilities, quality, safety, maintenance coordination, and performance management. He is particularly effective during ramp-up, stabilisation, and step-change improvement phases—when new equipment, changing product mixes, or organisational transitions require clear routines, tight process control, and confident leadership on the shop floor. He is known for building capable teams, aligning departments around KPIs, and driving continuous improvement without compromising safety or quality standards.

His background includes long-term senior roles with SABMiller and AB InBev, followed by site leadership positions in Ethiopia where he managed major brewery operations and technical functions. Most recently, he serves as Plant Head in Angola, overseeing full plant operations and ensuring stable output, compliance, and team development.

Within BevCon, Hardeep supports owners and operating teams with operational leadership, performance recovery, ramp-up support, and site management capability building—bringing hands-on experience that translates quickly into practical results.`,
  },
  {
    id: 'hubert-de-halleux',
    name: 'Hubert de Halleux',
    role: 'Brewing & Process Engineer',
    level: 'B',
    image: '/portraits/deHalleuxHubert_light.png',
    imagePosition: 'center 20%',
    teaserServices: 'CAPEX · Feasibility · Process design',
    services: ['Beverage Concept', 'Beverage Construction', 'Beverage Contracts', 'Beverage Consulting', 'Beverage Connect'],
    fullProfile: `Hubert de Halleux is a brewing and process engineer with more than 20 years of international experience in brewery project development, process design, and CAPEX front-end planning. He supports global brewing groups and independent breweries in translating technical requirements into robust process concepts that are practical to build, commission, and operate. His work bridges early-stage investment decisions and execution readiness.

Hubert's core strengths include feasibility studies, process and layout development, capacity calculations, technical specification writing, and alignment of designs with operational objectives and budget constraints. He has contributed to multiple CAPEX planning missions using global technical standards, supporting clients with structured engineering deliverables that reduce risk and improve decision quality. He is experienced in evaluating supplier offers, aligning contractors, and converting competing technical solutions into clear recommendations that support commercial negotiations.

In execution phases, Hubert supports project follow-up by identifying process risks early, clarifying scope boundaries, and ensuring that engineering decisions reflect operational realities. He is comfortable working across stakeholders—investors, brewery operations, OEMs, EPC partners, and procurement—ensuring that the project maintains technical integrity while staying buildable and cost-effective.

Within BevCon, Hubert contributes to Beverage Concept and Beverage Construction assignments through process engineering, tender support, contractor alignment, and technical due diligence. His value is particularly high when complex interfaces must be clarified early to avoid late-stage changes, commissioning delays, and performance shortfalls after start-up.`,
  },
  {
    id: 'rainer-haag',
    name: 'Rainer Haag',
    role: 'Quality Control & Quality Assurance Expert',
    level: 'B',
    image: '/portraits/HaagRainer_light.png',
    imagePosition: 'center 20%',
    teaserServices: 'Quality Audits · Certification (IFS/FSSC/ISO) · Lab Management',
    services: ['Beverage Confidence', 'Beverage Consulting', 'Beverage Control', 'Beverage Connect'],
    fullProfile: `Rainer Haag is a senior quality assurance and quality control expert with more than 40 years of international experience across food, beverage, brewing, and nutraceutical environments. He has led QA/QC teams, laboratories, and compliance programs in industrial settings and is valued for translating standards into practical systems that work on real production floors.

Rainer’s expertise spans quality management systems, laboratory setup and leadership, analytical method validation, and certification readiness. He has strong experience with certification and audit frameworks including IFS Food, FSSC 22000, ISO 22000, GMP and HACCP, as well as additional compliance requirements such as Food Fraud/Food Defense programs and specialised certification environments (e.g., Kosher and others as required by market). He supports first-time certifications, re-certifications, and audit recovery situations where systems must be stabilised quickly and sustainably.

In addition to audits, Rainer supports operational quality improvement: shelf-life programs, incoming goods control, process hygiene optimisation, and training of laboratory and production teams. He is particularly effective at building routines, clarifying responsibilities, and establishing robust documentation and control plans without creating unnecessary bureaucracy.

Within BevCon, Rainer supports Beverage Confidence and Beverage Control assignments through quality audits, compliance roadmaps, lab optimisation, and capability building. His contribution is most valuable when quality systems must be strengthened fast—either to protect brand and product integrity, to satisfy customer requirements, or to prepare a plant for external certification and regulatory scrutiny.`,
  },
  {
    id: 'stefan-schlepphorst',
    name: 'Stefan Schlepphorst',
    role: 'Brewing Engineer & Sensory Expert',
    level: 'B',
    image: '/portraits/SchlepphorstStefan_light.png',
    imagePosition: 'center 20%',
    teaserServices: 'Brewing technology · Quality · Data',
    services: ['Beverage Confidence', 'Beverage Construction', 'Beverage Consulting', 'Beverage Connect'],
    fullProfile: `Stefan Schlepphorst is a brewing engineer and beverage specialist combining brewing science, sensory expertise, and analytical thinking. He holds formal qualifications in brewing engineering and business administration and has developed a profile that connects process understanding with quality evaluation and data-driven improvement.

Stefan has worked for Brewtech GmbH and AMS Beverage Engineering and Services GmbH and gained more than three years of practical experience as Brewmaster, supporting breweries during commissioning, optimisation, and stabilisation. His hands-on scope includes brewhouse and cellar operations, recipe development, process troubleshooting, quality routines, and supporting plant teams to achieve consistent output. He is particularly effective in translating complex technical issues into practical corrective actions and training.

Internationally, Stefan has worked in and with breweries across the Caribbean, Cameroon, Laos, and Vietnam, bringing experience with different raw materials, climates, operational constraints, and organisational cultures. He has also supported projects and customers including Coca-Cola, Carlsberg, and other international beverage groups, giving him broad exposure across beer and soft drink environments.

A key strength is his sensory and microbiological focus: structured sensory evaluation, quality interpretation, and linking sensory outcomes to process causes. In parallel, Stefan builds value through data analysis—supporting process monitoring, performance evaluation, and evidence-based improvement initiatives.

Within BevCon, Stefan contributes to Beverage Construction and Beverage Confidence assignments, particularly where quality stability, sensory capability, commissioning support, and data-driven operational optimisation are critical.`,
  },
  {
    id: 'wolfgang-haeslich',
    name: 'Wolfgang Haeslich',
    role: 'Beverage Technologist',
    level: 'B',
    image: '/portraits/HaeslichWolfgang_light.png',
    imagePosition: 'center 15%',
    teaserServices: 'Juice · Dairy · Soft drinks',
    services: ['Beverage Concept', 'Beverage Construction', 'Beverage Confidence', 'Beverage Consulting', 'Beverage Connect'],
    fullProfile: `Wolfgang Haeslich is a senior beverage technologist with more than 30 years of international experience in fruit processing, juice, dairy-based beverages, and soft drinks. His background combines engineering understanding with deep beverage-technology practice, spanning product development, industrial implementation, and global customer support across Europe, Africa, the Middle East, Latin America, and Asia.

Wolfgang's expertise includes recipe management and optimisation, blending and filling technology selection, microbiology and shelf-life assurance, incoming and outgoing goods control, and line start-up support. He has supported producers with practical training for laboratory teams and operators, including microbiology routines, shelf-life testing methods, traceability practices, and stable production handover. He is also experienced in translating product requirements into equipment and supplier choices, enabling clients to select solutions that match both market goals and operational capabilities.

Formerly working in an international technical key account environment, Wolfgang advised major beverage groups and regional players on production technologies and process improvements. His experience covers both concept-to-launch product development and real-world troubleshooting when quality, stability, or efficiency issues arise in production or filling.

Within BevCon, Wolfgang strengthens the non-beer beverage scope—supporting Beverage Concept, Beverage Construction, and Beverage Confidence assignments for juice, dairy, and soft drink projects. He brings a practical, execution-focused perspective that helps clients turn product ideas into stable industrial processes and reliable market-ready output.`,
  },
  {
    id: 'yishak-adane-zewdie',
    name: 'Yishak Adane Zewdie',
    role: 'Construction Manager',
    level: 'B',
    image: '/portraits/ZewdieYishak_light.png',
    imagePosition: 'center 25%',
    teaserServices: 'Site execution · Scheduling',
    services: ['Beverage Construction', 'Beverage Consulting', 'Beverage Connect'],
    fullProfile: `Yishak Adane Zewdie is a construction manager and resident engineer with more than 15 years of experience delivering industrial and commercial construction projects from planning through completion. He provides strong on-site leadership, coordinating contractors, consultants, and suppliers to deliver works safely, on schedule, within budget, and to specification.

Yishak's strengths include construction planning, progress control, contract administration support, quality assurance coordination, and practical site supervision. He is particularly strong in MS Project-based scheduling: building and maintaining work programs, tracking milestones, identifying slippages early, and supporting clear reporting for management and stakeholders. This makes him valuable on projects where schedule discipline and transparent communication are critical.

On site, Yishak works closely with construction teams to resolve issues quickly, manage interfaces between trades, and ensure that corrective actions are implemented effectively. He supports inspections, quality documentation, and coordination of approvals, while maintaining a strong focus on safety and execution reliability.

Within BevCon, Yishak supports Beverage Construction and Beverage Connect assignments by strengthening resident engineering presence, contractor coordination, and schedule control. He helps reduce execution risk and improves predictability of delivery in multi-contractor environments, particularly during intensive construction and installation phases.`,
  },
  {
    id: 'etienne-thabiso-rouge',
    name: 'Etienne Thabiso Rouge',
    role: 'CEO / General Manager',
    level: 'B',
    isAnonymous: true,
    anonymousLabel: 'Senior Executive & CEO',
    // image removed for anonymity
    teaserServices: 'Turnaround · Market Entry · Distribution & Partnerships',
    services: ['Beverage Concept', 'Beverage Control', 'Beverage Confidence', 'Beverage Connect'],
    fullProfile: `A seasoned CEO with 20+ years of general management, strategy, and commercial leadership across the beverage and food sectors in Africa, the Middle East, and Asia. He is recognised for stabilising complex businesses, building scalable go-to-market models, and delivering growth through strong partnerships, disciplined execution, and resilient operating structures.

Most recently, he was appointed CEO of a large greenfield brewery investment to support the recovery and accelerated turnaround of the project. His work has focused on funding mobilisation, commissioning and production readiness, cost and cash control, leadership restructuring, and compliance-driven governance, while preparing the business for full-scale market expansion.

His background includes senior leadership roles in foods (MEA), strategic consulting and partnership development, and commercial leadership with global FMCG groups. He brings strong capability in distribution network development, brand market entry, B2B relationship management, and financial management.`,
  },
  {
    id: 'floris-delee',
    name: 'Floris Delée',
    role: 'Principal Consultant & Design Engineer',
    level: 'B',
    isAnonymous: true,
    anonymousLabel: 'Principal Consultant & Design Engineer',
    teaserServices: 'Craft Brewery Design & Brewing Technology',
    services: ['Beverage Concept', 'Beverage Construction', 'Beverage Consulting', 'Beverage Confidence', 'Beverage Connect'],
    fullProfile: `This senior principal consultant and design engineer is a highly experienced brewery specialist with more than 25 years of international experience in the design, engineering, and execution of breweries, with a strong focus on craft and specialty operations. His background uniquely combines hands-on brewing leadership with deep engineering and design expertise, enabling him to support projects from early concept through commissioning and stable operation.

He specialises in the conceptual and detailed design of breweries that balance European brewing traditions with modern process technology and the operational realities of today’s craft brewing industry. His work places strong emphasis on sustainability, energy efficiency, raw material optimisation, and brewer-centric layouts that support both quality and long-term operational efficiency. In addition, he is experienced in designing “transparent” breweries that integrate production, visitor experience, and brand storytelling.

Beyond consulting and design, this expert has held senior operational and technical leadership roles in established breweries, including responsibility for brewing, packaging, product development, master planning, and large-scale expansion projects. Earlier in his career, he managed brewhouse projects internationally on the supplier side, giving him strong insight into OEM coordination, constructability, and commissioning risks.

Within the BevCon Network, this expert supports craft and specialty brewery projects through confidential concept development, layout and process design, feasibility support, and execution advisory. He is particularly valuable where creative brewery concepts must be translated into technically sound, buildable, and economically viable facilities.`,
  },
];

// C-LEVEL – EXECUTION / SITE ROLES
const cLevelProfiles: NetworkProfile[] = [
  {
    id: 'josef-puc',
    name: 'Josef Puc',
    role: 'Mechanical Supervisor',
    level: 'C',
    image: '/portraits/PucJosef_light.png',
    imagePosition: 'center 20%',
    teaserServices: 'Piping systems · Tank installation · Mechanical assembly',
    services: ['Beverage Construction', 'Beverage Confidence', 'Beverage Connect'],
    fullProfile: `Josef Puc is a senior mechanical supervisor with more than 35 years of international experience in brewery construction, mechanical installation, and piping systems. Trained as an industrial mechanic, he has worked extensively on greenfield and brownfield brewery projects across Europe, Africa, Asia, and North America, supporting installation, supervision, and commissioning activities.

Josef specialises in stainless-steel piping, tank installation, CIP systems, steel construction, and mechanical assembly within brewhouse, fermentation, utilities, and packaging interface areas. He has led and coordinated mechanical installation teams on complex sites, ensuring correct execution in accordance with drawings, specifications, hygiene requirements, and safety standards.

He is particularly valued during critical installation and commissioning phases, where precise workmanship, interface coordination, and rapid problem-solving are essential to maintain schedule and quality. Josef works closely with process suppliers, civil contractors, and site management to resolve clashes, implement practical adjustments, and prepare systems for smooth commissioning and handover.

Within BevCon projects, Josef provides reliable mechanical supervision that reduces rework, improves installation quality, and supports efficient transition from construction to commissioning. His calm site presence and hands-on expertise make him a trusted execution partner on demanding industrial projects.`,
  },
  {
    id: 'omar-bernal',
    name: 'Omar Bernal',
    role: 'Electrical Supervisor',
    level: 'C',
    image: '/portraits/BernalOmar_grey.png',
    imagePosition: 'center 20%',
    teaserServices: 'Industrial installations',
    services: ['Beverage Construction', 'Beverage Confidence', 'Beverage Connect'],
    fullProfile: `Omar Bernal is an electrical supervisor with more than 10 years of international experience in electrical installation and commissioning for large-scale brewery and industrial projects. He has supervised sizeable on-site teams in complex environments, ensuring safe execution, quality workmanship, and adherence to project schedules.

Omar's expertise covers electrical installation of power distribution systems, process and packaging equipment, control cabinets, structured cabling, and commissioning support. He is experienced in coordinating electrical works with mechanical, automation, and civil activities, ensuring that interfaces are resolved efficiently and without delay to overall progress.

He has worked on projects across Africa, Latin America, and the United States, often within multinational project teams and under demanding site conditions. Omar is valued for his structured approach to site coordination, clear communication with contractors and suppliers, and strong focus on safety compliance and documentation.

Within BevCon projects, Omar supports installation and commissioning phases by providing reliable electrical supervision, reducing execution risk, and supporting smooth start-up and handover to operations.`,
  },
  {
    id: 'patrick-laval',
    name: 'Patrick Laval',
    role: 'Utility Expert',
    level: 'C',
    image: '/portraits/LavalPatrick_industrial.png',
    imagePosition: 'center 20%',
    teaserServices: 'CO₂ recovery · Cooling · Energy',
    services: ['Beverage Construction', 'Beverage Confidence', 'Beverage Consulting', 'Beverage Control', 'Beverage Connect'],
    fullProfile: `Patrick Laval is a senior utilities specialist with more than 30 years of international experience in the design, audit, installation follow-up, and optimisation of CO₂ recovery and CO₂ production plants, as well as industrial cooling and refrigeration systems for beverage and agro-food operations.

With a background including maintenance leadership within large brewery networks, Patrick brings deep hands-on expertise across NH₃ and CO₂ refrigeration, CO₂ liquefaction and recovery systems, safety and compliance, and energy optimisation. He is frequently engaged to diagnose availability issues, reduce utility-related downtime, and improve operational efficiency through practical modifications and better operating routines. His work typically includes utility audits, debottlenecking, maintenance strategy improvement, and operator training.

Patrick supports projects from early concept design through commissioning and stable operation. He can review utility capacities, specify equipment, assess supplier offers, and ensure integration with brewing and packaging demands. In operating plants, he focuses on performance and reliability: improving energy consumption, availability, and safety, while reducing OPEX and dependency on external CO₂ supply where recovery solutions are feasible.

Within BevCon, Patrick strengthens Beverage Construction and Beverage Confidence assignments, particularly for utilities concept design, commissioning support, and performance improvement programs. He provides a clear, practical utility perspective that helps investors and operators protect production continuity and reduce operating cost volatility.`,
  },
  {
    id: 'peter-kindts',
    name: 'Peter Kindts',
    role: 'Brewing Engineer',
    level: 'C',
    teaserServices: 'Maintenance · Revamps · Optimisation',
    services: ['Beverage Construction', 'Beverage Confidence', 'Beverage Consulting', 'Beverage Connect'],
    fullProfile: `Peter Kindts is a senior brewing engineer and maintenance specialist with more than 40 years of hands-on experience in brewery production, engineering, construction, and technical optimisation. His career spans roles as brewer, production and technical manager, and independent consultant, giving him both operational credibility and deep practical engineering capability across craft, mid-sized, and large industrial breweries.

Peter specialises in brewhouse and cellar engineering, piping and CIP systems, filtration support, bottling interfaces, and maintenance optimisation. He is frequently engaged to assess underperforming plants, identify bottlenecks and loss drivers, and implement robust solutions that improve reliability and yield. His work typically focuses on practical outcomes: stabilising operations, reducing downtime, improving hygienic design and cleaning effectiveness, and increasing throughput without compromising beer quality.

He has extensive international experience across Europe, Africa, and Asia, including challenging site environments where logistics, skills availability, and schedule pressure demand disciplined execution and pragmatic decisions. Peter is known for hands-on troubleshooting, clear recommendations, and the ability to work effectively with suppliers, contractors, and brewery teams to deliver workable improvements.

Within BevCon, Peter supports Beverage Construction and Beverage Confidence assignments, particularly for revamps, audits, and life-extension projects. He adds value during both execution and operational phases—helping clients translate engineering intent into reliable day-to-day production performance.`,
  },
  {
    id: 'sanjay-kumar-singh',
    name: 'Sanjay Kumar Singh',
    role: 'Project & Engineering Manager',
    level: 'C',
    image: '/portraits/SingSanjay_maintenance.png',
    imagePosition: 'center 20%',
    teaserServices: 'Asset care · Utilities · OPEX',
    services: ['Beverage Construction', 'Beverage Confidence', 'Beverage Control', 'Beverage Consulting', 'Beverage Connect'],
    fullProfile: `Sanjay Kumar Singh is an experienced electrical engineer and engineering manager with more than 25 years of international experience in brewery projects, manufacturing operations, asset care maintenance, and utilities management. He has held senior roles with global beverage groups including Diageo (Serengeti Breweries Ltd., Tanzania) and Coca-Cola, operating at both plant management and project execution level.

Sanjay has led capacity expansion and upgrade projects as Project Manager on major sites, delivering packaging, brewing, and utilities improvements under global standards. His expertise covers utilities (refrigeration, boilers, CO₂ recovery, power distribution, water treatment and RO, effluent treatment), packaging support, and asset care systems. He is strong in preventive and predictive maintenance planning, spares and inventory structuring, KPI-based performance improvement, and OEE enhancement.

In operational leadership roles, Sanjay has been accountable for maintenance budgets, engineering compliance, safety and environmental adherence, and the systematic implementation of best-practice asset care frameworks. He has managed large teams, driven root-cause problem solving, and delivered measurable improvements in energy and water consumption, line performance, and reliability.

He is also experienced with SAP-based maintenance systems and structured reporting, enabling transparent cost control and decision support for management teams. His training background includes PLC and automation exposure, leadership programs, and multiple HSE and quality frameworks.

Within BevCon, Sanjay supports Beverage Construction, Beverage Confidence, and Beverage Control assignments—particularly where strong utilities integration, asset care systems, and practical project delivery under international standards are required.`,
  },
  {
    id: 'victor-makhoul',
    name: 'Victor Makhoul',
    role: 'Civil Engineer / Civil Site Manager',
    level: 'C',
    image: '/portraits/MakhoulViktor_grey.png',
    imagePosition: 'center 20%',
    teaserServices: 'Construction Execution · BOQs · Cost Control',
    services: ['Beverage Construction', 'Beverage Consulting', 'Beverage Connect'],
    fullProfile: `Victor Makhoul is a senior civil engineer and site manager with over 30 years of experience delivering construction projects from on-site execution through close-out. Based in Beirut, he supports clients as an independent consultant and has a long track record managing contractors, subcontractors, schedules, and quality across multi-trade projects.

Victor's core strengths include site supervision and coordination, inspection and snagging, and the preparation of BOQs, priced tender documents, quantity take-offs, and structural shop drawings, backed by strong capability in cost control and procurement support. He is known for practical problem-solving on site, clear communication with stakeholders, and disciplined follow-up on progress and payment certifications.

Languages: Arabic (excellent), English (very good), French (very good)`,
  },
];

export const allProfiles: NetworkProfile[] = [
  ...aLevelProfiles,
  ...bLevelProfiles,
  ...cLevelProfiles,
];

export function getProfileById(id: string): NetworkProfile | undefined {
  return allProfiles.find((profile) => profile.id === id);
}

export function getProfilesByLevel(level: ProfileLevel): NetworkProfile[] {
  return allProfiles.filter((profile) => profile.level === level);
}
