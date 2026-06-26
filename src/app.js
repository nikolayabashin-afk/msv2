const page = document.body.dataset.page || "home";
const root = document.querySelector("#site-root");
let lang = localStorage.getItem("mss-lang") || "en";

const t = {
  en: {
    nav: ["Home", "About Us", "MSS Smart Solutions", "Partners", "Newsroom", "Resources", "Contacts"],
    contact: "Contact",
    explore: "Explore",
    homeHeroTitle: "See beneath the surface before the first cut",
    homeHeroLead: "MSS combines remote sensing, adaptive seismic evaluation, magnetic aerotomography, and geoscience expertise to reduce geological uncertainty, exploration risk, cost, and time.",
    scroll: "Scroll to evaluate",
    aboutTitle: "MSS: Redefining Remote Sensing",
    aboutLead: "A truly innovative technology company solving practical engineering and geological exploration challenges worldwide.",
    servicesTitle: "MSS Smart Solutions",
    servicesLead: "Reliable. Cost-efficient. Integrated technologies for modern mineral exploration and field development.",
    partnersTitle: "Our Trusted Partners",
    partnersLead: "Built on trust, our partnerships expand global opportunities.",
    newsroomTitle: "Newsroom",
    newsroomLead: "Company updates, technical notes, events, bulletins, and selected case studies.",
    resourcesTitle: "Resources",
    resourcesLead: "Technical resources, service summaries, exploration notes, and downloadable materials.",
    contactsTitle: "Connect with Our Experts",
    contactsLead: "What can we do for you? Start the conversation with the MSS team.",
    challenge: "Exploration: high costs, risks, and uncertainty.",
    challengeBody: "Traditional methods are often costly, time-consuming, and environmentally disruptive. Inaccessible terrains, high exploration risks, and data limitations slow down progress and increase uncertainty. MSS technologies help companies move beyond conventional approaches with precise, scalable, and cost-effective solutions.",
    founded: "Minerals Spectrum Survey Company was founded in 2022 after we were introduced to a groundbreaking Earth remote sensing technology. Impressed by its efficiency and capabilities, we spent a year collaborating with scientists to rigorously test and validate its performance.",
    team: "We are a unique blend of experience and enthusiasm, responsibility and talent, efficiency and a continuous desire to learn and innovate.",
    tech: "Innovation is not just a word for us. It is the driving force behind the company and the standard we apply to every technology we bring to market.",
    served: "We provide high-tech solutions for exploring all types of minerals, designed for companies seeking efficient technologies with a measurable reduction in risk and cost.",
    bottomCta: "Reduce uncertainty before committing capital",
    bottomBody: "Share your area of interest, data availability, and exploration objective. MSS will recommend the most efficient technology pathway.",
    form: ["First Name*", "Last Name*", "Business e-mail*", "Phone number", "Job Title", "Company*", "Comments*", "Contact Us"]
  },
  ru: {
    nav: ["Главная", "О нас", "Интеллектуальные решения MSS", "Партнёры", "Новости", "Ресурсы", "Контакты"],
    contact: "Контакты",
    explore: "Исследовать",
    homeHeroTitle: "Увидеть скрытое до первого разреза",
    homeHeroLead: "MSS объединяет дистанционное зондирование, адаптивную оценку сейсмических данных, магнитную аэротомографию и геолого-геофизическую экспертизу для снижения геологической неопределённости, рисков, затрат и сроков.",
    scroll: "Прокрутите для анализа",
    aboutTitle: "MSS: Меняя подход к поиску полезных ископаемых",
    aboutLead: "Инновационная технологическая компания, решающая практические инженерные и геологоразведочные задачи по всему миру.",
    servicesTitle: "Интеллектуальные решения MSS",
    servicesLead: "Оперативно. Надёжно. Эффективно. Интегрированные технологии для современной разведки и разработки месторождений.",
    partnersTitle: "Наши надёжные партнёры",
    partnersLead: "Доверие и партнёрство расширяют глобальные возможности.",
    newsroomTitle: "Новости",
    newsroomLead: "События, статьи, бюллетени и избранные примеры работ MSS.",
    resourcesTitle: "Ресурсы",
    resourcesLead: "Технические материалы, описания услуг, заметки по разведке и загружаемые материалы.",
    contactsTitle: "Обратитесь к нашим экспертам",
    contactsLead: "Что мы можем для вас сделать? Давайте обсудим задачу с командой MSS.",
    challenge: "Главные препятствия геологоразведки: высокая стоимость, риски и неопределённость.",
    challengeBody: "Традиционные методы часто затратны, отнимают много времени и требуют значительных ресурсов. Труднодоступные территории, высокие риски и ограниченные данные замедляют развитие. Технологии MSS помогают выйти за рамки традиционных подходов и получать точные, масштабируемые и экономически эффективные решения.",
    founded: "Компания Minerals Spectrum Survey была основана в 2022 году после знакомства с уникальной технологией дистанционного зондирования Земли. Мы провели год в тесном сотрудничестве с учёными, чтобы убедиться, что технология действительно работает.",
    team: "Мы - уникальный сплав опыта и энтузиазма, ответственности и таланта, работоспособности и непрерывного стремления к знаниям и инновациям.",
    tech: "Инновации для нас - не просто слово, а движущая сила компании и стандарт, который мы применяем к каждой технологии.",
    served: "Мы предлагаем высокотехнологичные решения для поиска всех видов полезных ископаемых компаниям, заинтересованным в эффективности, достоверности и снижении себестоимости.",
    bottomCta: "Снизьте неопределённость до вложения капитала",
    bottomBody: "Опишите участок, доступные данные и цель разведки. MSS предложит наиболее эффективный технологический маршрут.",
    form: ["Имя*", "Фамилия*", "Рабочий e-mail*", "Номер телефона", "Должность", "Компания*", "Комментарии*", "Связаться с нами"]
  }
};

const services = [
  {
    key: "ers",
    code: "ERS",
    en: {
      title: "MSS Earth Remote Sensing",
      lead: "World-class technology for remote identification of minerals, gases, fluids, and underground water.",
      overview: "A fully remote, high-precision technology for identifying hydrocarbons, minerals, and underground water. Unlike traditional workflows, MSS ERS directly detects specific resources with up to 90% confidence in presence and 60-70% anomaly assessment accuracy.",
      benefits: ["Unambiguous identification of mineral presence", "Effective narrowing of exploration area", "Significant reduction in overall exploration costs", "Short lead time, ranging from 3 to 6 months", "No environmental and HSE risks"],
      applications: ["Oil and gas deposits down to 6,000 m and more", "Metal ore deposit occurrences to 500 m and beyond", "Fresh, saline, and geothermal underground waters", "Natural hydrogen exploration as a clean energy source"],
      deliverables: ["Target resource presence assessment", "Anomaly maps and priority zones", "Depth estimates and ranked targets", "Exploration recommendation package"],
      input: ["Area of interest coordinates", "Target mineral or fluid type", "Available geological maps and reports", "Chemical composition for minerals where applicable"]
    },
    ru: {
      title: "MSS Дистанционное зондирование Земли",
      lead: "Передовая технология мирового уровня для удалённой идентификации полезных ископаемых, газов, жидкостей и подземных вод.",
      overview: "Полностью дистанционная высокоточная технология для выявления углеводородов, полезных ископаемых и подземных вод. MSS ERS напрямую выявляет ресурсы с достоверностью наличия до 90% и точностью оценки аномалий 60-70%.",
      benefits: ["Однозначное выявление наличия полезных ископаемых", "Эффективное сужение зоны поиска", "Значительное снижение общих затрат на разведку", "Короткие сроки выполнения - от 3 до 6 месяцев", "Отсутствие экологических и производственных рисков"],
      applications: ["Поиск углеводородных аномалий до 6 000 м и более", "Выявление рудных проявлений до 500 м и глубже", "Пресные, солёные и геотермальные подземные воды", "Разведка природного водорода"],
      deliverables: ["Оценка наличия целевого ресурса", "Карты аномалий и приоритетные зоны", "Оценка глубин и ранжирование целей", "Рекомендации для дальнейшей разведки"],
      input: ["Координаты участка", "Тип целевого минерала или флюида", "Геологические карты и отчёты", "Химический состав для минералов при наличии"]
    }
  },
  {
    key: "asda",
    code: "ASDA",
    en: {
      title: "MSS Adaptive Seismic Data Evaluation",
      lead: "AI-powered interpretation of 3D seismic data to identify missed hydrocarbon intervals, bypassed pools, and optimal drilling orientation.",
      overview: "MSS ASDA helps evaluate seismic and well data where hydrocarbon presence, pay intervals, or maximum reservoir thickness remain uncertain.",
      benefits: ["Search for missed beds and pools", "Identification of maximum reservoir thickness", "Well orientation prior to drilling", "Re-interpretation of seismic data with business-focused outputs"],
      applications: ["Oil and gas exploration", "Mature field redevelopment", "Reservoir characterization", "Pre-drill uncertainty reduction"],
      deliverables: ["Detailed exploration portfolio analysis", "2D/3D seismic processing and interpretation", "Static and dynamic reservoir modeling", "Petrophysical and production analysis"],
      input: ["SEGY seismic data", "Well reports and logs in LAS format", "Core analysis and well tests", "Correlation panels and interpreted logs"]
    },
    ru: {
      title: "MSS Адаптивная оценка сейсмических данных",
      lead: "Анализ 3D-сейсмических данных на основе ИИ для выявления пропущенных интервалов, залежей и оптимальной ориентации скважин.",
      overview: "MSS ASDA помогает оценивать сейсмические данные и данные скважин, когда наличие углеводородов, продуктивные интервалы или максимальная толщина пласта остаются неопределёнными.",
      benefits: ["Поиск пропущенных пластов и залежей", "Выявление максимальной толщины коллектора", "Ориентация скважин до бурения", "Переинтерпретация сейсмики с прикладными результатами"],
      applications: ["Нефтегазовая разведка", "Доразработка зрелых месторождений", "Характеризация резервуаров", "Снижение неопределённости до бурения"],
      deliverables: ["Комплексный анализ портфеля проектов", "Обработка и интерпретация 2D/3D сейсмики", "Статическое и динамическое моделирование", "Петрофизический и производственный анализ"],
      input: ["Сейсмические данные SEGY", "Отчёты по бурению и LAS-каротаж", "Керн и данные испытаний", "Корреляционные панели и интерпретированные кривые"]
    }
  },
  {
    key: "ma",
    code: "MA",
    en: {
      title: "MSS Magnetic Aerotomography",
      lead: "A vector-based magnetic survey method for 3D delineation of geological bodies over difficult terrain.",
      overview: "Magnetic aerotomography supports mining and near-surface geophysics by turning airborne magnetic survey data into practical 3D exploration targets.",
      benefits: ["Operation over inaccessible terrain", "3D volumetric description of the field", "Delineation of ore anomalies to 500 m and beyond", "Fast deployment with drone-based survey methods"],
      applications: ["Gold, copper-molybdenum, diamonds, and polymetallic targets", "Archaeology and engineering geophysics", "Regional prospect ranking", "Target generation for drilling campaigns"],
      deliverables: ["3D anomaly model", "Priority target maps", "Magnetic survey interpretation", "Drilling and follow-up recommendations"],
      input: ["Area conditions and logistics", "Survey scale such as 1:5000 or 1:10000", "Target mineral chemistry", "Drone access for magnetic survey"]
    },
    ru: {
      title: "MSS Магнитная аэротомография",
      lead: "Уникальный векторный метод магнитной съёмки для 3D-выделения геологических тел на сложной местности.",
      overview: "Магнитная аэротомография поддерживает горную разведку и прикладную геофизику, превращая данные аэромагнитной съёмки в практические 3D-цели.",
      benefits: ["Работа на труднодоступной местности", "Томографическое 3D-описание объекта", "Выделение рудных аномалий до 500 м и более", "Быстрое развертывание с использованием дронов"],
      applications: ["Золото, медно-молибденовые объекты, алмазы и полиметаллы", "Археология и инженерная геофизика", "Региональное ранжирование перспектив", "Формирование целей для бурения"],
      deliverables: ["3D-модель аномалий", "Карты приоритетных целей", "Интерпретация магнитной съёмки", "Рекомендации для бурения и доизучения"],
      input: ["Условия участка и логистика", "Масштаб съёмки 1:5000 или 1:10000", "Химический состав целевого минерала", "Дрон для магнитной съёмки"]
    }
  },
  {
    key: "ggs",
    code: "GGS",
    en: {
      title: "MSS Geology & Geophysics Services",
      lead: "Comprehensive G&G services and expert consulting for reserves, modeling, and development planning.",
      overview: "For over two decades, the team has specialized in reserves evaluation and audit, geological research, field development planning, enhanced recovery methods, and economic analysis.",
      benefits: ["25+ years average professional experience", "Reserves evaluation and classification under SPE/WPC standards", "Reservoir modeling and field development design", "Technical and economic justifications for drilling and development"],
      applications: ["Oil and gas industry", "Independent reserves evaluation", "Mature asset optimization", "Exploration portfolio review"],
      deliverables: ["Technical and economic portfolio analysis", "Static and dynamic reservoir modeling", "Independent hydrocarbon volume evaluation", "Marketing policy and reserves management assessment"],
      input: ["Geological and geophysical reports", "Well and production history", "Existing models and interpretations", "Commercial assumptions and development constraints"]
    },
    ru: {
      title: "MSS Геолого-геофизические услуги",
      lead: "Комплексная экспертиза в оценке запасов, моделировании и проектировании разработки месторождений.",
      overview: "Более двух десятилетий команда специализируется на оценке и аудите запасов, геологических исследованиях, проектировании разработки, методах увеличения нефтеотдачи и экономическом анализе.",
      benefits: ["Более 25 лет среднего профессионального опыта", "Оценка и классификация запасов по SPE/WPC", "Моделирование пластов и проектирование разработки", "ТЭО бурения и разработки"],
      applications: ["Нефтегазовая отрасль", "Независимая оценка запасов", "Оптимизация зрелых активов", "Анализ разведочного портфеля"],
      deliverables: ["Технический и экономический анализ портфеля", "Статическое и динамическое моделирование", "Независимая оценка объёмов углеводородов", "Анализ стратегии управления запасами"],
      input: ["Геолого-геофизические отчёты", "История скважин и добычи", "Существующие модели и интерпретации", "Коммерческие вводные и ограничения разработки"]
    }
  },
  {
    key: "integrated",
    code: "INT",
    en: {
      title: "MSS Integrated Solutions",
      lead: "Synergy of integrated solutions for maximum efficiency in exploration and field development.",
      overview: "MSS Integrated Solutions combine remote sensing, seismic, well data, and expert G&G workflows to identify resources, estimate volumes, and optimize exploration and extraction processes.",
      benefits: ["Technology pairing by exploration scenario", "Cross-validation of independent datasets", "Reduced dry-hole risk and narrowed drilling targets", "Practical recommendations for the next capital decision"],
      applications: ["AOI with seismic coverage and no drilling", "AOI with seismic coverage and drilled wells", "Mining targets where ERS locates mineral presence and MA provides 3D body geometry"],
      deliverables: ["Scenario-specific technology roadmap", "Integrated interpretation report", "Priority target register", "Data gaps and next-step plan"],
      input: ["Seismic data and geological maps", "Well data where available", "Target mineral or hydrocarbon objective", "Drone survey access for magnetic aerotomography"]
    },
    ru: {
      title: "MSS Интегрированные решения",
      lead: "Синергия интегрированных решений для максимальной эффективности поиска и разработки месторождений.",
      overview: "Интегрированные решения MSS объединяют дистанционное зондирование, сейсмику, данные скважин и экспертные G&G-процессы для определения ресурсов, оценки объёмов и оптимизации разведки.",
      benefits: ["Подбор технологий под сценарий разведки", "Перекрёстная проверка независимых данных", "Снижение риска сухих скважин и уточнение целей", "Практические рекомендации для следующего инвестиционного решения"],
      applications: ["Участки с сейсмикой без скважин", "Участки с сейсмикой и скважинами", "Горные объекты, где ERS выявляет ресурс, а MA описывает 3D-геометрию тела"],
      deliverables: ["Технологическая дорожная карта", "Интегрированный отчёт интерпретации", "Реестр приоритетных целей", "План недостающих данных и следующих шагов"],
      input: ["Сейсмика и геологические карты", "Данные скважин при наличии", "Цель по минералу или углеводородам", "Доступ для магнитной аэротомографии"]
    }
  }
];

const caseStudies = [
  "Remote Sensing + 2D Seismic Data Processing",
  "Remote Identification of Nickel Anomalies",
  "Remote Identification of Mineralized Water Deposits",
  "Coal bed methane migration pathways and gas accumulation anomalies",
  "Gold, 2024, Eastern Siberia, Russia",
  "Cu-Mo object, 2024, West Siberia, Russia",
  "Diamonds, 2014, Eastern Siberia, Yakutia",
  "Gold, 2020, Transbaikalia",
  "Archaeology, 2018, Novosibirsk region"
];

const partners = [
  ["Al Ghaith Energy LLC", "Strategic partner in the Middle East with local presence and business development expertise."],
  ["Neural Oilfield Services NOSSB", "Malaysia partner helping the oil and gas industry reach a new level of exploration efficiency."],
  ["PT BAHANA SELARAS ALAM", "Indonesia partner focused on advanced technologies in solid mineral exploration."],
  ["Truong Dinh Petroleum", "Key Southeast Asia partner promoting MSS technologies across the region."],
  ["BLACK SEA ENERJI", "Turkey partner for oil and gas industry and geothermal energy exploration."]
];

const routes = [
  ["index.html", "home"],
  ["about.html", "about"],
  ["services.html", "services"],
  ["partners.html", "partners"],
  ["newsroom.html", "newsroom"],
  ["resources.html", "resources"],
  ["contacts.html", "contacts"]
];

function L(key) { return t[lang][key]; }

function shell(content) {
  root.innerHTML = `
    <header class="site-header">
      <div class="nav">
        <a class="brand" href="/index.html" aria-label="MSS home">
          <span class="mark">MSS</span>
          <span><strong>MSS</strong><span>Minerals Spectrum Survey</span></span>
        </a>
        <nav class="nav-links" id="nav-links">
          ${routes.map(([href, key], i) => `<a href="/${href}" ${page === key ? 'aria-current="page"' : ""}>${L("nav")[i]}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <button class="lang-toggle" type="button" aria-label="Switch language">${lang === "en" ? "RU" : "EN"}</button>
          <a class="primary-button" href="/contacts.html">${L("contact")}</a>
          <button class="menu-toggle" type="button" aria-label="Open menu">☰</button>
        </div>
      </div>
    </header>
    <main>${content}</main>
    ${footer()}
  `;
  bindShell();
}

function footer() {
  return `<footer class="footer"><div class="wrap footer-grid">
    <div><div class="brand"><span class="mark">MSS</span><span><strong>MSS</strong><span>Minerals Spectrum Survey</span></span></div><p>${L("bottomBody")}</p></div>
    <nav>${routes.map(([href], i) => `<a href="/${href}">${L("nav")[i]}</a>`).join("")}</nav>
  </div></footer>`;
}

function bindShell() {
  document.querySelector(".lang-toggle").addEventListener("click", () => {
    lang = lang === "en" ? "ru" : "en";
    localStorage.setItem("mss-lang", lang);
    document.documentElement.lang = lang;
    render();
  });
  document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector("#nav-links").classList.toggle("open");
  });
}

function pageHero(title, lead, crumb = "MSS") {
  return `<section class="page-hero"><div class="wrap"><div><div class="breadcrumb">${crumb}</div><h1>${title}</h1></div><p>${lead}</p></div></section>`;
}

function serviceCards() {
  return `<div class="grid cols-3">${services.map((s) => {
    const item = s[lang];
    return `<article class="card service-card"><div><small>${s.code}</small><h3>${item.title}</h3><p>${item.lead}</p></div><a href="/services.html#${s.key}">${L("explore")} →</a></article>`;
  }).join("")}</div>`;
}

function bullets(items) {
  return `<ul class="technical-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function home() {
  shell(`
    <section class="hero-scrub" id="scrub">
      <div class="hero-pin">
        <video class="hero-video" muted playsinline preload="auto" src="/assets/top-scroll-animation.mp4"></video>
        <div class="hero-content">
          <div>
            <p class="eyebrow">Earth remote sensing / geoscience technology</p>
            <h1>${L("homeHeroTitle")}</h1>
            <p class="hero-lede">${L("homeHeroLead")}</p>
          </div>
          <div class="hero-metrics">
            <div class="metric"><strong>3x</strong><span>${lang === "en" ? "lower exploration costs" : "снижение затрат"}</span></div>
            <div class="metric"><strong>90%</strong><span>${lang === "en" ? "presence confidence in ERS workflows" : "достоверность ERS"}</span></div>
            <div class="metric"><strong>0</strong><span>${lang === "en" ? "environmental footprint for remote sensing" : "экологический след ERS"}</span></div>
          </div>
        </div>
        <div class="scroll-cue">${L("scroll")}</div>
      </div>
    </section>
    <section class="section steel"><div class="wrap section-head"><h2>${L("challenge")}</h2><p>${L("challengeBody")}</p></div></section>
    <section class="section dark"><div class="wrap"><div class="section-head"><h2>${L("servicesTitle")}</h2><p>${L("servicesLead")}</p></div>${serviceCards()}</div></section>
    <section class="section steel"><div class="wrap"><div class="impact"><div><strong>3x</strong><span>${lang === "en" ? "reduced exploration cost" : "снижение стоимости"}</span></div><div><strong>3-6</strong><span>${lang === "en" ? "months typical ERS lead time" : "месяцев на ERS"}</span></div><div><strong>500m+</strong><span>${lang === "en" ? "ore anomaly depth range" : "глубина рудных аномалий"}</span></div><div><strong>6000m+</strong><span>${lang === "en" ? "hydrocarbon target depth" : "глубина УВ-целей"}</span></div></div></div></section>
    <section class="section light"><div class="wrap"><div class="section-head"><h2>${lang === "en" ? "Success in action" : "Наш опыт"}</h2><p>${lang === "en" ? "Selected study types from the MSS portfolio." : "Избранные типы проектов из портфеля MSS."}</p></div><div class="grid cols-3">${caseStudies.map((c) => `<article class="card"><h3>${c}</h3><p>${lang === "en" ? "Exploration objective, data constraint, and technology pathway prepared for technical review." : "Цель разведки, ограничения данных и технологический маршрут для технической оценки."}</p></article>`).join("")}</div></div></section>
    ${cta()}
  `);
  setupScrub();
}

function about() {
  shell(`${pageHero(L("aboutTitle"), L("aboutLead"), "About MSS")}
    <section class="section light"><div class="wrap split"><div><p class="kicker">Founded in 2022</p><h2>${lang === "en" ? "Validated before launch" : "Проверено до запуска"}</h2></div><p>${L("founded")}</p></div></section>
    <section class="section dark"><div class="wrap grid cols-3"><article class="card"><h3>${lang === "en" ? "Our Team" : "Наша команда"}</h3><p>${L("team")}</p></article><article class="card"><h3>${lang === "en" ? "Our Technologies" : "Наши технологии"}</h3><p>${L("tech")}</p></article><article class="card"><h3>${lang === "en" ? "Who We Serve" : "Для кого мы работаем"}</h3><p>${L("served")}</p></article></div></section>
    <section class="section steel"><div class="wrap"><div class="section-head"><h2>${L("servicesTitle")}</h2><p>${L("servicesLead")}</p></div>${serviceCards()}</div></section>${cta()}`);
}

function servicesPage() {
  shell(`${pageHero(L("servicesTitle"), L("servicesLead"), "MSS Smart Solutions")}
    <section class="section dark"><div class="wrap section-head"><h2>${L("challenge")}</h2><p>${L("challengeBody")}</p></div></section>
    ${services.map((s, index) => {
      const item = s[lang];
      return `<section class="section ${index % 2 ? "dark" : "light"}" id="${s.key}"><div class="wrap">
        <div class="section-head"><div><p class="kicker">${s.code}</p><h2>${item.title}</h2></div><p>${item.overview}</p></div>
        <div class="grid cols-4">
          <article class="card"><h3>Benefits</h3>${bullets(item.benefits)}</article>
          <article class="card"><h3>Application Areas</h3>${bullets(item.applications)}</article>
          <article class="card"><h3>Deliverables</h3>${bullets(item.deliverables)}</article>
          <article class="card"><h3>Input Data</h3>${bullets(item.input)}</article>
        </div>
      </div></section>`;
    }).join("")}
    <section class="section steel"><div class="wrap"><div class="section-head"><h2>${lang === "en" ? "Integrated scenarios" : "Интегрированные сценарии"}</h2><p>${lang === "en" ? "Technology pathways mapped from the Word document's solution table." : "Технологические маршруты по таблице решений из документа."}</p></div>${integratedTable()}</div></section>${cta()}`);
}

function integratedTable() {
  const headers = lang === "en" ? ["Scenario", "Technologies", "Solution approach", "Data required"] : ["Сценарий", "Технологии", "Подход", "Необходимые данные"];
  const rows = lang === "en"
    ? [
      ["AOI with seismic coverage, no drilling", "ERS + G&G Services", "Corroborate seismic interpretations and reduce hydrocarbon uncertainty.", "SEGY seismic data, geological maps, available reports"],
      ["AOI with seismic coverage and drilled wells", "ERS + ASDA + G&G Services", "Refine HC-saturated traps, calibrate with well data, and identify bypassed intervals.", "SEGY, maps, drilling reports, LAS logs, well tests, core analysis"],
      ["Mineral presence + 3D geological body", "ERS + Magnetic Aerotomography", "Identify target mineral presence and delineate ore anomalies in 3D.", "Target chemistry, AOI, drone magnetic survey access"]
    ]
    : [
      ["Зона с сейсмикой, без скважин", "ERS + G&G услуги", "Подтверждение сейсмической интерпретации и снижение неопределённости по УВ.", "SEGY, геологические карты, доступные отчёты"],
      ["Зона с сейсмикой и скважинами", "ERS + ASDA + G&G услуги", "Уточнение УВ-насыщенных ловушек, калибровка по скважинам и выявление пропущенных интервалов.", "SEGY, карты, отчёты, LAS, испытания, керн"],
      ["Минеральное проявление + 3D тело", "ERS + магнитная аэротомография", "Выявление целевого минерала и 3D-оконтуривание рудных аномалий.", "Химический состав, участок, дрон для магнитной съёмки"]
    ];
  return `<table class="data-table"><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

function partnersPage() {
  shell(`${pageHero(L("partnersTitle"), L("partnersLead"), "Partners")}
    <section class="section light"><div class="wrap"><div class="section-head"><h2>${lang === "en" ? "Global reach with local standards" : "Глобальный охват и локальная экспертиза"}</h2><p>${lang === "en" ? "Our partners help expand MSS technologies into new markets while maintaining the highest professional standards." : "Партнёры помогают выводить технологии MSS на новые рынки, сохраняя высокие профессиональные стандарты."}</p></div><div class="grid cols-3">${partners.map(([name, desc]) => `<article class="card"><h3>${name}</h3><p>${desc}</p></article>`).join("")}</div></div></section>
    <section class="section steel"><div class="wrap split"><h2>${lang === "en" ? "Become a partner" : "Станьте нашим партнёром"}</h2><p>${lang === "en" ? "If you are interested in promoting our technologies and have ideas that can help us become leaders in mineral exploration in your region, contact us." : "Если вас заинтересовало продвижение наших технологий и у вас есть идеи, которые помогут нам стать лидерами в разведке полезных ископаемых в вашем регионе, свяжитесь с нами."}</p></div></section>${cta()}`);
}

function newsroomPage() {
  const items = ["Events", "Articles", "Bulletins", "Case Studies"];
  shell(`${pageHero(L("newsroomTitle"), L("newsroomLead"), "Newsroom")}
    <section class="section dark"><div class="wrap">${items.map((name, i) => `<article class="resource-row"><time>2026.0${i + 1}</time><div><h3>${lang === "en" ? name : ["События", "Статьи", "Бюллетени", "Наши проекты"][i]}</h3><p>${lang === "en" ? "Editorial slot prepared for MSS updates and technical communications." : "Раздел подготовлен для обновлений MSS и технических публикаций."}</p></div><a class="outline-button" href="/contacts.html">${L("contact")}</a></article>`).join("")}</div></section>`);
}

function resourcesPage() {
  const rows = services.map((s) => [s[lang].title, s[lang].lead]);
  shell(`${pageHero(L("resourcesTitle"), L("resourcesLead"), "Resources")}
    <section class="section light"><div class="wrap">${rows.map(([title, lead]) => `<article class="resource-row"><time>PDF</time><div><h3>${title}</h3><p>${lead}</p></div><a class="outline-button" href="/services.html">${L("explore")}</a></article>`).join("")}</div></section>`);
}

function contactsPage() {
  const f = L("form");
  shell(`${pageHero(L("contactsTitle"), L("contactsLead"), "Contacts")}
    <section class="section dark"><div class="wrap contact-panel"><div><p class="kicker">Start the conversation</p><h2>${L("contactsTitle")}</h2><p class="hero-lede">${L("contactsLead")}</p></div>
      <form class="form-grid"><label>${f[0]}<input required /></label><label>${f[1]}<input required /></label><label>${f[2]}<input type="email" required /></label><label>${f[3]}<input /></label><label>${f[4]}<input /></label><label>${f[5]}<input required /></label><label class="wide">${f[6]}<textarea required></textarea></label><button class="primary-button wide" type="submit">${f[7]}</button></form>
    </div></section>`);
}

function cta() {
  return `<section class="section steel"><div class="wrap split"><div><p class="kicker">Contact MSS</p><h2>${L("bottomCta")}</h2></div><div><p>${L("bottomBody")}</p><p><a class="primary-button" href="/contacts.html">${L("contact")}</a></p></div></div></section>`;
}

function setupScrub() {
  const section = document.querySelector("#scrub");
  const video = document.querySelector(".hero-video");
  if (!section || !video) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    video.removeAttribute("autoplay");
    return;
  }
  video.pause();
  video.currentTime = 0.001;
  let duration = 1;
  const setDuration = () => { duration = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : duration; };
  video.addEventListener("loadedmetadata", setDuration, { once: true });
  setDuration();
  const update = () => {
    const rect = section.getBoundingClientRect();
    const travel = section.offsetHeight - window.innerHeight;
    const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, travel)));
    if (duration > 1) video.currentTime = progress * (duration - 0.08);
  };
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
  video.addEventListener("loadeddata", update, { once: true });
  update();
}

function render() {
  document.documentElement.lang = lang;
  if (page === "home") home();
  if (page === "about") about();
  if (page === "services") servicesPage();
  if (page === "partners") partnersPage();
  if (page === "newsroom") newsroomPage();
  if (page === "resources") resourcesPage();
  if (page === "contacts") contactsPage();
}

render();
