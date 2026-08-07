import { ArrowRight, CheckCircle, ImageSquare, Sparkle } from "@phosphor-icons/react";
import { childrenFor, teamMembers } from "./wikiData.jsx";

export function PageHero({ page, navigate }) {
  const Icon = page.icon;
  return (
    <section className={`wiki-page-hero hero-${page.layout}`}>
      <div className="wiki-hero-copy" data-reveal>
        <span className="wiki-eyebrow"><Icon weight="duotone" /> {page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <div className="wiki-hero-actions">
          <a className="primary-button" href="#page-content">Explore this page <ArrowRight weight="bold" /></a>
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

function HubCards({ children, navigate }) {
  return (
    <section className="wiki-hub-grid">
      {children.map(([label, path], index) => (
        <a href={path} onClick={(event) => { event.preventDefault(); navigate(path); }} className="wiki-hub-card" key={path} data-reveal>
          <span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3><p>Open the {label} page framework and replace reviewed placeholders as project material becomes available.</p><ArrowRight weight="bold" />
        </a>
      ))}
    </section>
  );
}

function FigurePlaceholder({ page }) {
  return (
    <aside className="wiki-figure-slot" data-reveal>
      <div><ImageSquare weight="duotone" /><strong>Figure / data area</strong><span>Approved images, charts, diagrams, or tables will be placed here.</span></div>
      <img src={page.image} alt="Decorative project illustration" />
    </aside>
  );
}

function MemberGrid() {
  return (
    <div className="chapter-member-block">
      <header><span>{teamMembers.length} PEOPLE · ONE TEAM</span><h3>Meet every LINKS–UNION member</h3><p>Roles will be expanded with individual introductions, photographs, interests, and verified contributions as materials are approved.</p></header>
      <div className="team-grid chapter-team-grid">
        {teamMembers.map(([initials, name, role, photo, bio], index) => (
          <article className={`person-card${photo ? " has-profile" : ""}`} key={name} data-reveal style={{ "--delay": `${index * 45}ms` }}>
            {photo ? <img className="person-photo" src={photo} alt={`${name} with a deer`} /> : <span className={`person-avatar avatar-${index % 4}`}>{initials}</span>}
            <div className={photo ? "person-copy" : undefined}><h3>{name}</h3><p className="person-role">{role}</p>{bio && <p className="person-bio">{bio}</p>}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function WikiPage({ page, navigate }) {
  const children = childrenFor(page.path);
  const isMembersPage = page.path === "/team/members";
  return (
    <main className={`wiki-page layout-${page.layout}`}>
      <PageHero page={page} navigate={navigate} />
      {page.metrics.length > 0 && <section className="wiki-metrics" aria-label="Page highlights">{page.metrics.map(([value, label]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</section>}
      <section className="wiki-page-content" id="page-content">
        <SectionTitle kicker={children.length ? "Explore the section" : "Page framework"} title={children.length ? `Choose a ${page.group} page` : "A complete first-version structure"} copy={children.length ? "Each topic now has its own focused page, ready for detailed content and evidence." : "The layout is ready for reviewed text, visuals, citations, and data without needing another redesign."} />
        {children.length ? <HubCards children={children} navigate={navigate} /> : (
          <>
            <div className="wiki-detail-layout">
              <div className="wiki-section-grid">{page.sections.map(([title, copy], index) => <ContentCard key={title} number={String(index + 1).padStart(2, "0")} title={title} copy={copy} />)}</div>
              <FigurePlaceholder page={page} />
            </div>
            {isMembersPage && <MemberGrid />}
          </>
        )}
      </section>
      <section className="wiki-review-band">
        <div><span>Review workflow</span><h2>Draft → team check → teacher approval → publication</h2><p>Placeholder content is clearly separated from verified project claims.</p></div>
        <a className="secondary-button" href="/home" onClick={(event) => { event.preventDefault(); navigate("/home"); }}>Return to homepage</a>
      </section>
    </main>
  );
}
