import { useEffect, useState } from "react";
import { ArrowRight, CaretDown, CheckCircle, ImageSquare, List, Sparkle } from "@phosphor-icons/react";
import { teamMembers } from "./wikiData.jsx";

export function PageHero({ page, navigate }) {
  const Icon = page.icon;
  const firstChapter = page.chapters[0]?.id;
  return (
    <section className={`wiki-page-hero hero-${page.layout}`}>
      <div className="wiki-hero-copy" data-reveal>
        <span className="wiki-eyebrow"><Icon weight="duotone" /> {page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <div className="wiki-hero-actions">
          <a className="primary-button" href={firstChapter ? `${page.path}#${firstChapter}` : "#page-content"} onClick={(event) => { if (!firstChapter) return; event.preventDefault(); navigate(`${page.path}#${firstChapter}`); }}>Explore this page <ArrowRight weight="bold" /></a>
          <a className="secondary-button" href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }}>Back to home</a>
        </div>
      </div>
      <div className="wiki-hero-art" data-reveal>
        <span className="hero-orbit orbit-a"><Sparkle weight="fill" /></span>
        <span className="hero-orbit orbit-b"><Icon weight="duotone" /></span>
        <img src={page.image} alt="" />
      </div>
    </section>
  );
}

export function SectionTitle({ kicker, title, copy }) {
  return <header className="wiki-section-title"><span>{kicker}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</header>;
}

export function ContentCard({ number, title, copy }) {
  return <article className="wiki-content-card" data-reveal><span>{number}</span><CheckCircle weight="duotone" /><h3>{title}</h3><p>{copy}</p></article>;
}

function FigurePlaceholder({ chapter }) {
  return (
    <aside className="wiki-figure-slot" data-reveal>
      <div><ImageSquare weight="duotone" /><strong>Figure / data area</strong><span>Approved images, charts, diagrams, or tables will be placed here.</span></div>
      <img src={chapter.image} alt="Decorative project illustration" />
    </aside>
  );
}

function MemberGrid() {
  return (
    <div className="chapter-member-block">
      <header><span>23 PEOPLE · ONE TEAM</span><h3>Meet every LINKS–UNION member</h3><p>Roles will be expanded with individual introductions, photographs, interests, and verified contributions as materials are approved.</p></header>
      <div className="team-grid chapter-team-grid">
        {teamMembers.map(([initials, name, role], index) => (
          <article className="person-card" key={name} data-reveal style={{ "--delay": `${index * 45}ms` }}>
            <span className={`person-avatar avatar-${index % 4}`}>{initials}</span>
            <h3>{name}</h3><p>{role}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function PageContents({ page, activeId, open, setOpen, navigate }) {
  return (
    <aside className={`page-toc ${open ? "is-open" : ""}`} aria-label="On this page">
      <button className="toc-mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span><List weight="bold" /> On this page</span><CaretDown weight="bold" />
      </button>
      <div className="toc-panel">
        <span className="toc-kicker">On this page</span>
        <strong>{page.group}</strong>
        <nav>
          {page.chapters.map((chapter, index) => (
            <a className={activeId === chapter.id ? "active" : ""} href={`${page.path}#${chapter.id}`} key={chapter.id} onClick={(event) => { event.preventDefault(); navigate(`${page.path}#${chapter.id}`); setOpen(false); }}>
              <span>{String(index + 1).padStart(2, "0")}</span>{chapter.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function Chapter({ chapter, index }) {
  const Icon = chapter.icon;
  return (
    <section className={`wiki-chapter chapter-${chapter.layout}`} id={chapter.id} data-chapter>
      <header className="chapter-heading">
        <span><Icon weight="duotone" /> {String(index + 1).padStart(2, "0")} · {chapter.eyebrow}</span>
        <h2>{chapter.title}</h2>
        <p>{chapter.intro}</p>
      </header>
      {chapter.metrics?.length > 0 && <div className="chapter-metrics">{chapter.metrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>}
      <div className="wiki-detail-layout">
        <div className="wiki-section-grid">{chapter.sections.map(([title, copy], cardIndex) => <ContentCard key={`${chapter.id}-${title}`} number={String(cardIndex + 1).padStart(2, "0")} title={title} copy={copy} />)}</div>
        <FigurePlaceholder chapter={chapter} />
      </div>
      {chapter.id === "members" && <MemberGrid />}
    </section>
  );
}

export function WikiPage({ page, navigate }) {
  const [activeId, setActiveId] = useState(() => window.location.hash.slice(1) || page.chapters[0]?.id || "");
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    setActiveId(window.location.hash.slice(1) || page.chapters[0]?.id || "");
    const sections = [...document.querySelectorAll("[data-chapter]")];
    let frame = 0;
    const updateActiveChapter = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const readingLine = window.innerHeight * .38;
        let current = sections[0];
        sections.forEach((section) => { if (section.getBoundingClientRect().top <= readingLine) current = section; });
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) current = sections.at(-1);
        if (current) setActiveId(current.id);
      });
    };
    updateActiveChapter();
    window.addEventListener("scroll", updateActiveChapter, { passive: true });
    window.addEventListener("resize", updateActiveChapter);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", updateActiveChapter); window.removeEventListener("resize", updateActiveChapter); };
  }, [page]);

  return (
    <main className={`wiki-page layout-${page.layout}`}>
      <PageHero page={page} navigate={navigate} />
      {page.metrics.length > 0 && <section className="wiki-metrics" aria-label="Page highlights">{page.metrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</section>}
      <section className="wiki-page-content" id="page-content">
        <SectionTitle kicker="One page · clear chapters" title={`${page.group}, all in one place`} copy="Use the chapter menu to move through this page. Reviewed text, visuals, citations, and data can be added without creating another route." />
        <div className="chapter-page-layout">
          <PageContents page={page} activeId={activeId} open={tocOpen} setOpen={setTocOpen} navigate={navigate} />
          <div className="chapter-stack">{page.chapters.map((chapter, index) => <Chapter chapter={chapter} index={index} key={chapter.id} />)}</div>
        </div>
      </section>
      <section className="wiki-review-band">
        <div><span>Review workflow</span><h2>Draft → team check → teacher approval → publication</h2><p>Placeholder content is clearly separated from verified project claims.</p></div>
        <a className="secondary-button" href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }}>Return to homepage</a>
      </section>
    </main>
  );
}
