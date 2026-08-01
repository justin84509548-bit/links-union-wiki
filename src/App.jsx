import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight, Bug, CaretDown, CheckCircle, Dna, Flask,
  List, ShieldCheck, Sparkle, TestTube, X, WaveSine,
} from "@phosphor-icons/react";
import { WikiPage } from "./WikiPage.jsx";
import { fallbackPage, navGroups, pageByPath } from "./wikiData.jsx";

const navItems = [
  ["home", "Home"], ["description", "Description"], ["design", "Design"],
  ["wet-lab", "Wet Lab"], ["modeling", "Modeling"], ["results", "Results"], ["references", "References"],
];

const process = [
  ["01", "Acid detected", "Plaque bacteria metabolize sugar and push the local pH below the healthy range.", "The local environment becomes acidic enough to threaten enamel."],
  ["02", "Gel responds", "The pH-sensitive hydrogel swells and opens precisely where the acid attack begins.", "The material changes shape automatically—no button or brushing step is needed."],
  ["03", "AMP released", "Antimicrobial peptides are released close to the orthodontic biofilm.", "Protection is delivered locally instead of flooding the whole mouth."],
  ["04", "Enamel protected", "Targeted action reduces harmful bacteria while supporting everyday oral care.", "As acidity falls, the gel rests again and avoids unnecessary release."],
];

const processVisuals = [
  "/assets/braces-acid-v2.png",
  "/assets/braces-monitoring-v2.png",
  "/assets/shield-tooth.png",
  "/assets/braces.png",
];

const heroMechanism = [
  [Bug, "Acid drops", "Plaque bacteria acidify the biofilm."],
  [WaveSine, "Gel senses", "The responsive network begins to swell."],
  [TestTube, "AMP releases", "Protection moves to the threatened area."],
  [ShieldCheck, "Enamel protected", "Local action supports a healthier smile."],
];

const team = [
  ["BW", "Boxiang Wang", "CTO · Instructor"], ["JY", "JingYe", "Biological Mentor"],
  ["WE", "Wendy", "Biological Mentor"], ["YC", "YenHaoChen", "Student Researcher"],
  ["TW", "Tina Wang", "Student Researcher"], ["YW", "YIHE WU", "Student Researcher"],
  ["AL", "Alina", "Student Researcher"], ["KL", "Kunxiao Li", "Student Researcher"],
  ["RA", "RANJI", "Student Researcher"], ["WI", "Winnie", "Student Researcher"],
  ["LU", "LUCERN", "Student Researcher"], ["KX", "Kiki Xinqi Lu", "Student Researcher"],
  ["WY", "WU YUXUAN", "Student Researcher"], ["YS", "YUAN, SHIJIE", "Student Researcher"],
  ["TK", "Tik Kong", "Student Researcher"], ["ZU", "Zuri", "Student Researcher"],
  ["SS", "SueS", "Student Researcher"], ["QJ", "QU, JUE", "Student Researcher"],
  ["AM", "Amber", "Student Researcher"], ["JF", "jingfeilin", "Student Researcher"],
  ["LH", "Li HaoBo", "Student Researcher"], ["SD", "Shin Dongwon", "Student Researcher"],
  ["EM", "Emily", "Student Researcher"],
];

const futureSections = [
  [Sparkle, "Human Practices", "Interviews, stakeholder feedback and the design changes they lead to."],
  [ShieldCheck, "Safety", "Risk assessment, organisms, materials and laboratory safety practices."],
  [Dna, "Parts", "Registry part numbers, functions, characterization and new contributions."],
  [List, "Notebook", "A dated record of experiments, decisions, setbacks and next steps."],
  [WaveSine, "Engineering & Contribution", "The design–build–test–learn cycle and what the team contributes."],
  [CheckCircle, "Attributions", "Verified responsibilities, support and individual contributions."],
];

const researchTopics = [
  {
    id: "project", label: "Project", icon: ShieldCheck,
    title: "Why autonomous enamel protection matters",
    summary: "Fixed orthodontic appliances create retentive surfaces that escape mechanical cleaning. S.H.I.E.L.D. uses the bacterial pH drop as both the danger signal and the trigger for defense.",
    facts: [
      ["Dead zone problem", "Brackets, archwires and ligatures create niches that toothbrush bristles and floss cannot easily reach."],
      ["Acid attack cascade", "S. mutans ferments dietary sugars to lactic acid, lowering local pH from about 7.0 to as low as 4.5."],
      ["Compliance gap", "The previous project review notes that 70% of orthodontic patients develop white spot lesions despite hygiene instruction."],
      ["Negative feedback", "Below about pH 5.5 the gel swells and releases AMP; when acid production falls, the gel compacts and stops release."],
    ],
    records: [
      ["pH Sensor", "pH-responsive promoter / hydrogel matrix", "Detects bacterial acidification"],
      ["Signal Transducer", "Hydrogel conformational change", "Opens the network for release"],
      ["Effector", "Target domain + AMP + linker", "Anchors near enamel and disrupts membranes"],
      ["Chassis", "Engineered probiotic or cell-free expression", "Production route under selection"],
    ],
  },
  {
    id: "design", label: "Design", icon: Dna,
    title: "From molecular architecture to a smart material",
    summary: "The design combines a tri-domain fusion protein with a pH-gated hydrogel reservoir, then develops both through a Design–Build–Test–Learn workflow.",
    facts: [
      ["Target domain", "A hydroxyapatite-binding peptide anchors the fusion protein at the enamel–biofilm interface."],
      ["Antimicrobial peptide", "A cationic AMP physically disrupts bacterial membranes, reducing reliance on enzyme-specific antibiotic mechanisms."],
      ["Flexible linker", "A glycine-serine rich linker such as (G4S)3 preserves independent folding and reduces steric hindrance."],
      ["pH-responsive matrix", "At normal pH the network stays compact; in acidic conditions protonation drives swelling and sustained release."],
    ],
    records: [
      ["Design", "Primer design and SnapGene assembly", "Codon optimization, Gibson junctions and restriction analysis"],
      ["Build", "PCR → gel electrophoresis → Gibson assembly", "Vector and insert construction"],
      ["Transform", "42°C heat shock and selective plating", "Competent-cell recovery and colony growth"],
      ["Verify", "Colony PCR and Sanger sequencing", "Full cassette verification and glycerol stocks"],
    ],
  },
  {
    id: "results", label: "Results", icon: Flask,
    title: "Results, with status kept transparent",
    summary: "The original results page describes an active DBTL program. We preserve its experiment status instead of presenting expected outcomes as completed evidence.",
    facts: [
      ["Gel electrophoresis", "Annotated PCR and Gibson assembly bands will document construct verification."],
      ["AMP activity", "MIC and MBC testing is planned against S. mutans and representative oral microbiome members."],
      ["Release profile", "Planned curves compare pH 7.0, 6.0, 5.5 and 5.0 over 0–72 hours using release-model fitting."],
    ],
    records: [
      ["AMP candidate screening", "MIC assay", "In progress"],
      ["Fusion protein", "Cloning and expression", "In progress"],
      ["Hydrogel", "pH-response characterization", "Pending"],
      ["Release kinetics", "pH 7.0 → 4.5", "Pending"],
      ["Biofilm inhibition", "S. mutans assay", "Pending"],
      ["Biocompatibility", "Oral epithelial cytotoxicity", "Pending"],
    ],
  },
  {
    id: "model", label: "Model", icon: WaveSine,
    title: "Models guide each experimental decision",
    summary: "Computational work links AMP sequence, hydrogel diffusion, biofilm pH gradients and salivary clearance to the next physical construct and experiment.",
    facts: [
      ["Design", "Molecular dynamics, docking and QSAR prioritize AMP sequence properties and membrane interactions."],
      ["Build", "Predictions guide AMP variants, linker lengths and hydrogel formulations."],
      ["Test", "MIC, swelling and release data update model parameters and expose gaps."],
      ["Learn", "Each DBTL cycle refines assumptions and narrows prediction–experiment differences."],
    ],
    records: [
      ["AMP structure–activity", "Charge, hydrophobicity and helical propensity", "To be updated"],
      ["Release kinetics", "Fickian diffusion with pH-dependent diffusivity", "To be updated"],
      ["Biofilm microenvironment", "Spatiotemporal pH-gradient model", "To be updated"],
      ["Pharmacokinetics", "Enamel concentration with salivary clearance", "To be updated"],
    ],
  },
  {
    id: "human", label: "Human Practices", icon: Sparkle,
    title: "Stakeholders shape the product specification",
    summary: "Patients, clinicians, microbiome researchers and regulatory advisors connect the synthetic-biology concept to real orthodontic use, safety and access.",
    facts: [
      ["Patients", "Surveys and interviews focus on hygiene around brackets, compliance challenges and attitudes toward preventive technology."],
      ["Clinicians", "Orthodontists highlighted 4–8 week protection, adhesive compatibility and no interference with tooth movement."],
      ["Microbiome researchers", "Screening should target S. mutans while protecting commensals such as S. sanguinis and S. gordonii."],
      ["Regulatory and ethics", "Planning considers ISO 10993 biocompatibility, clinical study design and human-subject review."],
    ],
    records: [
      ["School outreach", "Interactive biofilm, pH and synthetic-biology workshops", "Planned"],
      ["Patient education", "Accessible orthodontic prevention infographics", "In development"],
      ["Open science", "Protocols, constructs and data via open repositories", "Planned"],
      ["Affordability", "Scalable recombinant production and simple formulation", "Economic analysis pending"],
    ],
  },
  {
    id: "safety", label: "Safety", icon: ShieldCheck,
    title: "Safety is designed into every layer",
    summary: "The original assessment covers laboratory strains, AMPs, antibiotic markers, hydrogel chemistry and S. mutans work, then extends to a contained topical product concept.",
    facts: [
      ["Low resistance risk", "AMPs act on bacterial membranes, making resistance more evolutionarily costly than single-enzyme target changes."],
      ["Selectivity potential", "Bacterial membranes are more negatively charged than cholesterol-rich mammalian membranes, enabling sequence optimization."],
      ["Natural degradation", "Proteolysis in saliva limits accumulation; peptide breakdown products are amino acids."],
      ["Contained application", "The final concept contains purified fusion protein in hydrogel, not live engineered organisms."],
    ],
    records: [
      ["E. coli DH5α / BL21(DE3)", "Risk Group 1", "BSL-1; autoclave biological waste"],
      ["S. mutans", "Risk Group 2", "BSL-2; dedicated culture and decontamination"],
      ["Kanamycin marker", "Plasmid selection", "Chromosomal integration planned"],
      ["Hydrogel components", "Polymer precursors and crosslinkers", "Fume hood, PPE and MSDS review"],
    ],
  },
  {
    id: "parts", label: "Parts", icon: TestTube,
    title: "A modular S.H.I.E.L.D. BioBrick toolkit",
    summary: "Basic and composite parts cover AMP screening, enamel binding, flexible linkage, pH regulation, affinity purification and complete expression cassettes.",
    facts: [
      ["Basic collection", "BBa_K5002000–K5002005 cover AMP candidates, enamel targeting, (G4S)3 linker, promoters and His6 purification."],
      ["Composite collection", "BBa_K5002006–K5002008 assemble fusion-protein and pH-inducible expression modules."],
      ["AMP library", "Cathelicidin, defensin, histatin, magainin and de novo candidates are queued for screening."],
    ],
    records: [
      ["BBa_K5002000", "AMP Candidate Library", "Screening against S. mutans"],
      ["BBa_K5002001", "Enamel-Binding Target Domain", "Hydroxyapatite anchoring"],
      ["BBa_K5002002", "Flexible Linker (G4S)3", "45 bp"],
      ["BBa_K5002003", "pH-Responsive Promoter", "Acid-inducible regulation"],
      ["BBa_K5002004", "Constitutive Promoter Pveg", "216 bp"],
      ["BBa_K5002005", "His6 Affinity Tag", "18 bp"],
      ["BBa_K5002006", "Fusion Protein Expression Cassette", "Complete production unit"],
      ["BBa_K5002007", "pH-Inducible AMP Module", "In situ strategy"],
      ["BBa_K5002008", "Constitutive Fusion Protein Module", "Purified-protein strategy"],
    ],
  },
  {
    id: "notebook", label: "Notebook", icon: List,
    title: "A chronological record of the DBTL journey",
    summary: "The notebook connects literature review and in-silico screening to cloning, protein expression, hydrogel formulation and functional validation.",
    facts: [
      ["Kickoff", "Defined the project scope and reviewed pH-responsive hydrogels and oral antimicrobial peptides."],
      ["Candidate design", "Screened AMP candidates in silico and designed the target-domain + AMP + linker architecture."],
      ["Cloning cycle", "SnapGene design, PCR, Gibson assembly, DH5α transformation and colony PCR verification."],
      ["Protein workflow", "BL21(DE3) expression, Ni-NTA purification and SDS-PAGE analysis."],
    ],
    records: [
      ["Gibson Assembly", "Multi-fragment DNA assembly", "Vector linearization, insert preparation and transformation"],
      ["Protein expression", "IPTG induction and Ni-NTA", "Lysis, binding, wash and elution"],
      ["SDS-PAGE", "12% gel and Coomassie staining", "Protein purity analysis"],
      ["Hydrogel formulation", "Polymer preparation and crosslinking", "Fusion-protein encapsulation parameters"],
    ],
  },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header({ menuOpen, setMenuOpen }) {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setActive(entry.target.hasAttribute("data-nav-neutral") ? "" : entry.target.id);
      }),
      { rootMargin: "-28% 0px -62%", threshold: 0 },
    );
    [...navItems.map(([id]) => id), "wiki-queue", "team"].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  function navigate(id) {
    scrollTo(id);
    setMenuOpen(false);
  }

  return (
    <header className="header-shell">
      <nav className="nav" aria-label="Main navigation">
        <button className="brand" onClick={() => navigate("home")} aria-label="LINKS-UNION home">
          <span className="brand-avatar"><img src="/assets/links-union-logo.jpg" alt="" /></span>
          <span>LINKS–UNION</span>
        </button>
        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([id, label]) => (
            <button key={id} className={active === id ? "active" : ""} onClick={() => navigate(id)}>
              {label}
            </button>
          ))}
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </nav>
    </header>
  );
}

function SiteHeader({ menuOpen, setMenuOpen, path, navigate }) {
  const [openGroup, setOpenGroup] = useState("");
  function go(event, target) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(target);
    setMenuOpen(false);
    setOpenGroup("");
  }
  return (
    <header className="header-shell">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="/" onClick={(event) => go(event, "/")} aria-label="LINKS-UNION home">
          <span className="brand-avatar"><img src="/assets/links-union-logo.jpg" alt="" /></span><span>LINKS–UNION</span>
        </a>
        <div className={menuOpen ? "nav-links open" : "nav-links"}>
          {navGroups.map((group) => {
            const active = group.path === "/" ? path === "/" : path === group.path || path.startsWith(`${group.path}/`);
            return (
              <div className={`nav-group ${openGroup === group.path ? "expanded" : ""}`} key={group.path} onMouseEnter={() => group.children && setOpenGroup(group.path)} onMouseLeave={() => setOpenGroup("")}>
                <div className="nav-group-main">
                  <a className={active ? "active" : ""} href={group.path} onClick={(event) => go(event, group.path)}>{group.label}</a>
                  {group.children && <button className="dropdown-toggle" onClick={() => setOpenGroup(openGroup === group.path ? "" : group.path)} aria-expanded={openGroup === group.path} aria-label={`Open ${group.label} menu`}><CaretDown weight="bold" /></button>}
                </div>
                {group.children && <div className="nav-dropdown">{group.children.map(([label, target]) => <a className={path === target ? "active" : ""} href={target} onClick={(event) => go(event, target)} key={target}>{label}<ArrowRight weight="bold" /></a>)}</div>}
              </div>
            );
          })}
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={24} /> : <List size={24} />}</button>
      </nav>
    </header>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div><strong>LINKS–UNION</strong><span>S.H.I.E.L.D. · Smart Hydrogel for Orthodontic Enamel Protection</span></div>
      <nav aria-label="Footer navigation">{navGroups.slice(0, 6).map((group) => <a href={group.path} onClick={(event) => { event.preventDefault(); navigate(group.path); }} key={group.path}>{group.label}</a>)}</nav>
      <span>© 2026</span>
    </footer>
  );
}

function FactModal({ onClose }) {
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <article className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><X size={22} /></button>
        <span className="mini-label"><Flask size={16} weight="fill" /> The idea in 30 seconds</span>
        <h2 id="modal-title">A tiny material with a smart response.</h2>
        <p>Braces create hard-to-clean spaces where acidogenic biofilms persist. S.H.I.E.L.D. combines a pH-responsive hydrogel with a targeted antimicrobial peptide so protection activates when the local environment becomes acidic.</p>
        <button className="primary-button" onClick={() => { onClose(); scrollTo("description"); }}>See the science <ArrowRight weight="bold" /></button>
      </article>
    </div>
  );
}

function ToothSpearCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return undefined;

    const cursor = cursorRef.current;
    if (!cursor) return undefined;

    document.documentElement.classList.add("has-tooth-cursor");
    let frame = 0;
    let strikeTimer = 0;
    let x = -100;
    let y = -100;

    const draw = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = 0;
    };
    const move = (event) => {
      x = event.clientX;
      y = event.clientY;
      cursor.classList.add("is-visible");
      cursor.classList.toggle("is-aiming", Boolean(event.target.closest("a, button, input, [role='button']")));
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const strike = () => {
      window.clearTimeout(strikeTimer);
      cursor.classList.remove("is-striking");
      void cursor.offsetWidth;
      cursor.classList.add("is-striking");
      strikeTimer = window.setTimeout(() => cursor.classList.remove("is-striking"), 260);
    };
    const hide = () => cursor.classList.remove("is-visible", "is-aiming");

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", strike, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(strikeTimer);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", strike);
      document.documentElement.removeEventListener("mouseleave", hide);
      document.documentElement.classList.remove("has-tooth-cursor");
    };
  }, []);

  return (
    <div className="tooth-spear-cursor" ref={cursorRef} aria-hidden="true">
      <img src="/assets/tooth-warrior-cursor.png" alt="" />
      <span className="cursor-impact"><i /><i /><i /></span>
    </div>
  );
}

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [path, setPath] = useState(() => window.location.pathname.replace(/\/$/, "") || "/");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [ph, setPh] = useState(6.2);
  const [burst, setBurst] = useState(false);

  const phState = useMemo(() => {
    if (ph < 5.5) return { label: "Protection ON", copy: "Acid attack: the gel opens and releases AMP protection.", level: "acid", image: "/assets/braces-acid-v2.png" };
    if (ph < 6.5) return { label: "Monitoring", copy: "Acidity is rising: the gel begins to swell and prepare.", level: "watch", image: "/assets/braces-monitoring-v2.png" };
    return { label: "Protection resting", copy: "Healthy pH: the compact gel holds its protective payload.", level: "safe", image: "/assets/braces.png" };
  }, [ph]);

  const modelTopic = researchTopics.find((topic) => topic.id === "model");
  const resultsTopic = researchTopics.find((topic) => topic.id === "results");

  function navigate(target) {
    const cleanTarget = target.replace(/\/$/, "") || "/";
    if (cleanTarget !== path) window.history.pushState({}, "", cleanTarget);
    setPath(cleanTarget);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const syncPath = () => setPath(window.location.pathname.replace(/\/$/, "") || "/");
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  useEffect(() => {
    const close = (event) => event.key === "Escape" && setModalOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0, rootMargin: "0px 0px 10% 0px" },
    );
    items.forEach((item) => observer.observe(item));

    let frame = 0;
    const revealPassedItems = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        items.forEach((item) => {
          if (!item.classList.contains("revealed") && item.getBoundingClientRect().top < window.innerHeight + 100) {
            item.classList.add("revealed");
            observer.unobserve(item);
          }
        });
      });
    };
    revealPassedItems();
    window.addEventListener("scroll", revealPassedItems, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", revealPassedItems);
      observer.disconnect();
    };
  }, [path]);

  function tiltHero(event) {
    const box = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width - 0.5) * 8;
    const y = ((event.clientY - box.top) / box.height - 0.5) * -8;
    event.currentTarget.style.setProperty("--tilt-x", `${y}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x}deg`);
  }

  function resetTilt(event) {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  }

  function triggerBurst() {
    setBurst(false);
    requestAnimationFrame(() => setBurst(true));
    window.setTimeout(() => scrollTo("home"), 550);
    window.setTimeout(() => setBurst(false), 1500);
  }

  if (path !== "/") {
    return (
      <>
        <ToothSpearCursor />
        <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} path={path} navigate={navigate} />
        <WikiPage page={pageByPath[path] ?? fallbackPage} navigate={navigate} />
        <Footer navigate={navigate} />
      </>
    );
  }

  return (
    <>
      <ToothSpearCursor />
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} path={path} navigate={navigate} />
      <main>
        <section className="hero" id="home">
          <div className="hero-sparkles" aria-hidden="true"><Sparkle /><Sparkle /><Sparkle /></div>
          <div className="hero-copy cloud-card" data-reveal>
            <span className="version-badge">S.H.I.E.L.D. · LINKS-UNION</span>
            <h1>Tiny Gel,<br /><span>Big Protection!</span></h1>
            <p>A smart hydrogel that senses acidity and helps protect enamel around braces—all around the clock.</p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => scrollTo("description")}>Explore S.H.I.E.L.D. <ArrowRight weight="bold" /></button>
              <button className="secondary-button" onClick={() => setModalOpen(true)}>Learn more <CaretDown weight="bold" /></button>
            </div>
            <span className="scribble-note"><Dna size={20} /> pH-responsive · targeted · gentle</span>
          </div>
          <div className="hero-art interactive-art" onPointerMove={tiltHero} onPointerLeave={resetTilt} data-reveal>
            <img src="/assets/shield-scene.png" alt="Cartoon tooth with braces protected by a hydrogel shield" />
            <span className="orbit-tag tag-one"><Bug size={18} weight="fill" /> acid alert</span>
            <span className="orbit-tag tag-two"><ShieldCheck size={18} weight="fill" /> shield on</span>
            <button className="floating-germ germ-one" aria-label="Trigger an acid response" onClick={() => { setPh(5); scrollTo("description"); }}><Bug weight="fill" /></button>
            <button className="floating-germ germ-two" aria-label="Show a healthy pH" onClick={() => { setPh(7); scrollTo("description"); }}><Sparkle weight="fill" /></button>
          </div>
          <div className="mechanism-ribbon" aria-label="How S.H.I.E.L.D. works">
            <span className="mechanism-kicker">The science in one glance</span>
            <div className="mechanism-track">
              {heroMechanism.map(([Icon, title, copy], index) => (
                <button key={title} onClick={() => { setActiveStep(index); scrollTo("description"); }}>
                  <span className="mechanism-icon"><Icon weight="duotone" /></span>
                  <span className="mechanism-copy"><strong>{title}</strong><small>{copy}</small></span>
                  {index < heroMechanism.length - 1 && <ArrowRight className="mechanism-arrow" weight="bold" aria-hidden="true" />}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section shield-section story-section" id="description">
          <div className="section-heading" data-reveal>
            <span className="mini-label section-label"><ShieldCheck weight="fill" /> 01 · Project description</span>
            <h2>Protection that wakes up<br />when the pH drops.</h2>
            <p>S.H.I.E.L.D. turns a hidden chemical change into a local, timely protective response.</p>
          </div>
          <div className="process-grid" data-reveal>
            {process.map(([number, title, copy], index) => (
              <button className={activeStep === index ? "process-card selected" : "process-card"} key={title} onClick={() => setActiveStep(index)} aria-pressed={activeStep === index} aria-controls="process-explainer">
                <span className="process-number">{number}</span>
                <div className="process-icon">{index === 0 ? <Bug /> : index === 1 ? <TestTube /> : index === 2 ? <Flask /> : <ShieldCheck />}</div>
                <h3>{title}</h3><p>{copy}</p>
                <span className="tap-hint">Show this step <ArrowRight weight="bold" /></span>
              </button>
            ))}
          </div>
          <div className="process-explainer" id="process-explainer" aria-live="polite">
            <div className={`process-scene process-scene-${activeStep}`}>
              <span className="process-bubble bubble-one" aria-hidden="true" />
              <span className="process-bubble bubble-two" aria-hidden="true" />
              <img key={activeStep} src={processVisuals[activeStep]} alt={`Cartoon tooth showing step ${activeStep + 1}: ${process[activeStep][1]}`} />
            </div>
            <div className="process-story-copy">
              <span>Step {activeStep + 1} of 4</span>
              <strong>{process[activeStep][1]}</strong>
              <p>{process[activeStep][3]}</p>
              <div className="step-dots" aria-hidden="true">{process.map(([, title], index) => <i className={index <= activeStep ? "done" : ""} key={title} />)}</div>
            </div>
          </div>
          <div className={`ph-lab ${phState.level}`}>
            <div className="ph-copy">
              <span className="mini-label"><WaveSine weight="bold" /> Interactive pH lab</span>
              <h3>Slide the pH. Watch the shield react.</h3>
              <p>Drag the slider or choose a preset. Lower pH means a more acidic biofilm and a stronger protective response.</p>
              <label htmlFor="ph-range">Mouth pH <output>{ph.toFixed(1)}</output></label>
              <input id="ph-range" type="range" min="4.5" max="7.5" step="0.1" value={ph} aria-describedby="ph-help ph-state" onPointerDown={(event) => event.currentTarget.setPointerCapture?.(event.pointerId)} onPointerUp={(event) => event.currentTarget.hasPointerCapture?.(event.pointerId) && event.currentTarget.releasePointerCapture(event.pointerId)} onInput={(event) => setPh(Number(event.target.value))} onChange={(event) => setPh(Number(event.target.value))} />
              <div className="ph-scale" id="ph-help"><span>4.5<br />Acid attack</span><span>5.5<br />Release starts</span><span>6.5<br />Healthy range</span><span>7.5<br />Neutral</span></div>
              <div className="ph-presets" aria-label="pH presets">
                <button className={phState.level === "acid" ? "active" : ""} onClick={() => setPh(5)}>Acid attack <small>pH 5.0</small></button>
                <button className={phState.level === "watch" ? "active" : ""} onClick={() => setPh(6)}>Monitoring <small>pH 6.0</small></button>
                <button className={phState.level === "safe" ? "active" : ""} onClick={() => setPh(7)}>Healthy <small>pH 7.0</small></button>
              </div>
            </div>
            <div className="ph-stage" aria-live="polite">
              <div className="gel-ring"><img key={phState.level} src={phState.image} alt={`Cartoon tooth showing the ${phState.label.toLowerCase()} pH state`} /></div>
              <Bug className="sim-germ sim-germ-one" weight="fill" />
              <Bug className="sim-germ sim-germ-two" weight="fill" />
              <Bug className="sim-germ sim-germ-three" weight="fill" />
              <div className="ph-status" id="ph-state" role="status"><strong>{phState.label}</strong><span>{phState.copy}</span></div>
            </div>
          </div>
        </section>

        <section className="section project-section story-section" id="design" data-reveal>
          <div className="project-art"><img src="/assets/lab-researcher-v2.png" alt="Cartoon laboratory researcher holding a test tube" /></div>
          <div className="project-copy">
            <span className="mini-label section-label"><TestTube weight="fill" /> 02 · Design</span>
            <h2>Built as a four-part protection system.</h2>
            <p>Each layer has one clear job—from sensing the acidic microenvironment to helping an antimicrobial peptide reach the right place.</p>
            <div className="system-list">
              {[
                ["pH sensor", "Detects local acidification from bacterial metabolism."],
                ["Signal transducer", "The hydrogel network changes structure as pH falls."],
                ["Effector (AMP)", "A fusion protein binds near enamel and targets bacterial membranes."],
                ["Production chassis", "Engineered or cell-free expression supports sustainable production."],
              ].map(([title, copy]) => <article key={title}><CheckCircle weight="fill" /><div><h3>{title}</h3><p>{copy}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="lab-section story-section" id="wet-lab" data-reveal>
          <div className="lab-card">
            <div className="lab-copy">
              <span className="mini-label section-label"><Dna weight="fill" /> 03 · Wet lab</span>
              <h2>From molecular design to a testable material.</h2>
              <p>Our lab path links construct design, expression, hydrogel characterization and antimicrobial validation into one measurable workflow.</p>
              <div className="stats">
                <div><strong>4</strong><span>system modules</span></div>
                <div><strong>6</strong><span>response stages</span></div>
                <div><strong>1</strong><span>shared mission</span></div>
              </div>
            </div>
            <img src="/assets/microbiology.png" alt="Cartoon tooth with DNA, molecules and friendly microbes" />
          </div>
        </section>

        <section className="research-atlas continuous-research story-section" id="modeling">
          <div className="atlas-heading" data-reveal>
            <span className="mini-label section-label"><WaveSine weight="fill" /> 04 · Dry lab &amp; modeling</span>
            <h2>{modelTopic.title}</h2>
            <p>{modelTopic.summary}</p>
          </div>
          <article className="atlas-content continuous-card" data-reveal>
            <div className="atlas-title-row">
              <div><span className="atlas-kicker">Prediction → experiment → refinement</span><h3>A model that learns with the wet lab.</h3></div>
              <img src="/assets/microbiology.png" alt="Cartoon tooth research mascot" />
            </div>
            <div className="atlas-facts">
              {modelTopic.facts.map(([title, copy], index) => <section key={title}><span>{String(index + 1).padStart(2, "0")}</span><h4>{title}</h4><p>{copy}</p></section>)}
            </div>
            <div className="atlas-records" aria-label="Modeling workstreams">
              <div className="record-head"><span>Model</span><span>Focus</span><span>Status</span></div>
              {modelTopic.records.map(([name, detail, status]) => <div className="record-row" key={name}><strong>{name}</strong><span>{detail}</span><span>{status}</span></div>)}
            </div>
          </article>
        </section>

        <section className="research-atlas results-section story-section" id="results">
          <div className="atlas-heading" data-reveal>
            <span className="mini-label section-label"><Flask weight="fill" /> 05 · Results</span>
            <h2>{resultsTopic.title}</h2>
            <p>{resultsTopic.summary}</p>
          </div>
          <article className="atlas-content continuous-card" data-reveal>
            <div className="atlas-facts">
              {resultsTopic.facts.map(([title, copy], index) => <section key={title}><span>{String(index + 1).padStart(2, "0")}</span><h4>{title}</h4><p>{copy}</p></section>)}
            </div>
            <div className="atlas-records" aria-label="Experiment status">
              <div className="record-head"><span>Experiment</span><span>Method</span><span>Status</span></div>
              {resultsTopic.records.map(([name, detail, status]) => <div className="record-row" key={name}><strong>{name}</strong><span>{detail}</span><span className="status-pill">{status}</span></div>)}
            </div>
          </article>
        </section>

        <section className="section references-section story-section" id="references" data-reveal>
          <div className="references-copy">
            <span className="mini-label section-label"><List weight="fill" /> 06 · References</span>
            <h2>The evidence trail,<br />kept honest and readable.</h2>
            <p>The previous website did not include a formal bibliography. This first version separates source areas from verified citations instead of inventing references.</p>
          </div>
          <div className="reference-cards">
            <article><span>01</span><h3>Project foundation</h3><p>Orthodontic biofilm, enamel demineralization, local pH change and the compliance gap.</p><strong>Citations to be verified</strong></article>
            <article><span>02</span><h3>Material design</h3><p>pH-responsive hydrogels, antimicrobial peptides, enamel-binding domains and release kinetics.</p><strong>Citations to be verified</strong></article>
            <article><span>03</span><h3>Safety &amp; translation</h3><p>Biocompatibility, oral microbiome selectivity, containment and regulatory planning.</p><strong>Citations to be verified</strong></article>
          </div>
        </section>

        <section className="section wiki-queue" id="wiki-queue" data-nav-neutral>
          <div className="section-heading" data-reveal>
            <span className="mini-label"><List weight="fill" /> Wiki content map</span>
            <h2>Ready for verified<br />team data.</h2>
            <p>These required Wiki modules are intentionally left unfilled until the team provides real, reviewable material. Nothing below is presented as completed work.</p>
          </div>
          <div className="wiki-placeholder-grid">
            {futureSections.map(([Icon, title, guidance], index) => (
              <article className="wiki-placeholder-card" key={title} data-reveal style={{ "--delay": `${index * 70}ms` }}>
                <div className="placeholder-card-top">
                  <span className="placeholder-icon"><Icon weight="duotone" /></span>
                  <span className="pending-pill"><i /> Content pending</span>
                </div>
                <h3>{title}</h3>
                <p>{guidance}</p>
                <div className="empty-content-slot">Verified team content will be added here.</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section team-section" id="team" data-nav-neutral>
          <div className="section-heading compact" data-reveal>
            <span className="mini-label"><Sparkle weight="fill" /> Meet all 23 LINKS-UNION members</span>
            <h2>Different disciplines.<br />One brighter smile.</h2>
          </div>
          <div className="team-grid">
            {team.map(([initials, name, role], index) => (
              <article className="person-card" key={name} data-reveal style={{ "--delay": `${index * 70}ms` }}>
                <span className={`person-avatar avatar-${index % 4}`}>{initials}</span>
                <h3>{name}</h3><p>{role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={burst ? "cta-section celebrating" : "cta-section"} data-reveal>
          <div className="celebration" aria-hidden="true">{Array.from({ length: 8 }, (_, index) => <Sparkle key={index} weight="fill" />)}</div>
          <img src="/assets/pointing.png" alt="Friendly cartoon tooth pointing toward the next step" />
          <div><span className="mini-label">Ready to explore?</span><h2>Small material.<br />Big reason to smile.</h2></div>
          <button className="primary-button" onClick={triggerBurst}>Celebrate &amp; replay <Sparkle weight="fill" /></button>
        </section>
      </main>
      <Footer navigate={navigate} />
      {modalOpen && <FactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
