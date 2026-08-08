import {
  Atom, BookOpen, Briefcase, ChartLineUp, CheckCircle, Dna, Flask,
  GraduationCap, HandHeart, Lightbulb, ListChecks, Medal, Microscope,
  NotePencil, PuzzlePiece, ShieldCheck, Sparkle, TestTube, UsersThree,
} from "@phosphor-icons/react";

export const navGroups = [
  { label: "Home", path: "/home" },
  {
    label: "Project", path: "/project", children: [
      ["Description", "/project/description"], ["Contribution", "/project/contribution"],
      ["Engineering", "/project/engineering"], ["Implementation", "/project/implementation"],
    ],
  },
  {
    label: "Wet Lab", path: "/wet-lab", children: [
      ["Notebook", "/wet-lab/notebook"], ["Experiments / Protocol", "/wet-lab/experiments"],
      ["Safety", "/wet-lab/safety"], ["Parts", "/wet-lab/parts"],
      ["Measurement", "/wet-lab/measurement"],
    ],
  },
  { label: "Model", path: "/model" },
  {
    label: "Engagement", path: "/engagement", children: [
      ["Integrated Human Practices", "/engagement/ihp"],
      ["Entrepreneurship", "/engagement/entrepreneurship"], ["Education", "/engagement/education"],
    ],
  },
  {
    label: "Team", path: "/team", children: [
      ["Members", "/team/members"], ["Attributions", "/team/attributions"],
    ],
  },
  {
    label: "Prizes", path: "/special-prizes", children: [
      ["General Biological Engineering", "/special-prizes/general-bio-engineering"],
      ["Best Model", "/special-prizes/best-model"],
      ["Best New Improved Part", "/special-prizes/best-new-improved-part"],
      ["Best New Basic Part", "/special-prizes/best-new-basic-part"],
      ["Best Entrepreneurship", "/special-prizes/best-entrepreneurship"],
      ["Best Integrated Human Practices", "/special-prizes/best-integrated-human-practices"],
    ],
  },
];

export const teamMembers = [
  ["AT", "Alina Tang", "Student Researcher"],
  ["AX", "Amber Xie", "Student Researcher"],
  ["BW", "Boxiang Wang", "CTO · Instructor"],
  ["CW", "Cathy Wu", "Student Researcher"],
  ["DS", "Dongwon Shin", "Student Researcher"],
  ["EW", "Elyn Wu", "Academic & Art Group Member", "/assets/elyn-wu.jpg", "My name is Elyn, and I am 15 years old, currently studying at Sendelta. In this iGEM project, I am a member of both the Academic Group and the Art Group. I joined iGEM because I wanted to explore how biology can be applied to solve real-world problems and gain experience with scientific experiments. Through this journey, I have learned how to use various experimental tools, conduct research, and cooperate effectively with teammates within a project. Outside iGEM, I enjoy drawing and reading. The skills I developed through iGEM, especially investigation and communication, will help me in future studies, research projects, and teamwork. I believe every experience shapes who we become. My favorite quote is, “The wind of freedom blows.”"],
  ["EL", "Emily Li", "Student Researcher"],
  ["JY", "Jing Ye", "Biological Mentor"],
  ["JQ", "John Qu", "Student Researcher"],
  ["JY", "Justin Yan", "Art & Design Group Co-leader", "/assets/justin-member.jpg", "Hi everyone! I’m Justin, a 16-year-old student at Shenzhen International Foundation College. In our iGEM team, I am one of the leaders of the Art and Design Group. I mainly work on the team’s Wiki, visual design, and task planning. Although handling several projects at the same time can be challenging, I enjoy turning our scientific ideas into designs that are clear, creative, and easy to understand. iGEM has also given me the opportunity to take part in laboratory work and learn more about biology through real experiments. For me, this experience is not only about science—it is also about creativity, collaboration, and learning how to take responsibility."],
  ["KL", "Kiki Lü", "Student Researcher", null, "Curious by nature and strategic by personality, I’m an INTJ who loves exploring how biology can solve real-world problems. My name is Kiki Xinqi Lu, and I’m a 15-year-old Grade 10 student at The ISF Academy in Hong Kong. As a team member, I joined because I’m fascinated by microbiology, bioengineering, and public health. Through iGEM, I’ve expanded my wet-lab experience from our school’s molecular biology lab, explored transformation protocols for different bacteria, and developed dry-lab skills such as 3D modelling. Outside of iGEM, I enjoy debate, martial arts, tennis, piano, and cello. I’m also passionate about service, helping others, and contributing to my community. In the future, I hope to explore public health and bioarchaeology. My favorite quote is Descartes’ “Cogito, ergo sum” — “I think, therefore I am.”"],
  ["LL", "Lion Li", "Student Researcher", "/assets/lion-li.jpg", "I'm LionLi from BIGZ, 17 years old. My MBTI is ESTJ, and my hobby is scuba diving. iGEM honed my hands-on skills and made me a more qualified and outstanding scholar."],
  ["LZ", "Lucern Zhang", "Student Researcher"],
  ["QL", "Queenie Li", "Student Researcher"],
  ["RJ", "Riley Ji", "Student Researcher", "/assets/riley-ji.jpg", "I'm Riley (Ji Ran), 17, from The Affiliated International School of Shenzhen University, and a LINKS-UNION iGEM member. Outgoing and sociable, I easily make friends and fit into any new space. My interests are broad—I'm passionate about exploring all the beautiful things in the world, from singing and guitar to photography and travel. I believe biology holds that same wonder, and through iGEM, I want to share it. Can't wait to create something meaningful with this team!"],
  ["SL", "Sabrina Lin", "Student Researcher"],
  ["SS", "Sue Sun", "Video Group Leader", "/assets/sue-member.jpg", "Hi! This is Sue from Wuxi, China. I’m currently an 11th grader studying at Ridley College in Canada. I’m part of LINKS-UNION and serve as a leader in the Video Group, where I contribute to developing and enhancing our promotional and presentation videos. I also contribute to the Education, Human Practices, Business, Wiki, and Design groups. My passion for biology, psychology, and hands-on experiments led me to iGEM, where I hope to further develop my communication, research, and creative-thinking skills. Outside the lab, I enjoy participating in multiple co-curricular clubs and am especially passionate about violin and basketball. Through public performances and teamwork, I have developed stronger resilience and a greater sense of responsibility. In the future, I hope to major in neuroscience. With experimental research experience and collaboration skills, iGEM is helping me learn to think outside the box and work toward becoming a better neuroscientist. Finally, a quote from Santiago Ramón y Cajal, whom I’ve recently read about: “Any man could, if he were so inclined, be the sculptor of his own brain.”"],
  ["TK", "Tik Kong", "Art & Design Group Co-leader", "/assets/tik-kong.jpg", "Hi everyone! I am Tik Kong, and I am currently a sophomore at The Stony Brook School. I turned 16 in June, and so far iGEM has been a fantastic experience! Apart from the lab experiments, where I learned many new things, I also enjoyed seeing how people collaborate to solve a complex issue and how the workflow can be divided among team members. I am currently a captain of the Art and Design Group alongside Justin, and we make sure to distribute weekly plans and objectives for our team. This leadership experience has helped me extensively, which was part of what I hoped to gain when I decided to join iGEM. I am interested in biology and chemistry, and while I am not an expert in either area, I enjoy the experimental process and seeing how a single cell can develop into something functional through our own work. As Ralph Waldo Emerson said, “Life is a journey, not a destination.” iGEM is definitely a unique experience that will enhance my technical skills, regardless of how much I doubted myself at the beginning."],
  ["TW", "Tina Wang", "Student Researcher"],
  ["TY", "Tony Yuan", "Student Researcher"],
  ["WE", "Wendy", "Biological Mentor"],
  ["WC", "Winnie Chen", "Student Researcher"],
  ["ZC", "Zuri Cheng", "Student Researcher"],
];

const sharedPlaceholder = "Content will be added after team and teacher review.";

const page = (path, group, title, eyebrow, intro, icon, image, layout, sections, metrics = []) => ({
  path, group, title, eyebrow, intro, icon, image, layout, sections, metrics,
});

const legacyPages = [
  page("/project", "Project", "From an oral-health challenge to S.H.I.E.L.D.", "Project overview", "Explore the problem, our responsive material concept, and the engineering logic that connects them.", Lightbulb, "/assets/shield-scene.png", "hub", [
    ["The challenge", "Acidic orthodontic biofilms create hard-to-clean microenvironments around brackets."],
    ["The response", "A pH-responsive hydrogel is designed to release protection when and where acidity rises."],
    ["The journey", "Our project pages will document every decision from first concept to implementation."],
  ], [["4", "project chapters"], ["2", "protective functions"], ["1", "shared system"]]),
  page("/project/description", "Project", "Why protection should wake up when pH drops", "Project · Description", "A clear introduction to the orthodontic biofilm problem and the S.H.I.E.L.D. solution.", ShieldCheck, "/assets/shield-scene.png", "story", [
    ["Problem", "Brackets create retentive spaces where plaque persists and local pH can fall."],
    ["Idea", "The acidic signal becomes the trigger for a local material response."],
    ["System", "The first version combines antimicrobial defense with remineralization support."],
    ["Project scope", sharedPlaceholder],
  ], [["pH", "responsive trigger"], ["AMP", "antimicrobial arm"], ["ALP", "mineralization arm"]]),
  page("/project/contribution", "Project", "What LINKS–UNION contributes", "Project · Contribution", "A transparent record of new documentation, parts, methods, data, and reusable lessons contributed by the team.", PuzzlePiece, "/assets/microbiology.png", "cards", [
    ["Scientific contribution", "New knowledge, data, protocols, and characterization will be summarized here."],
    ["Registry contribution", "New or improved parts and complete documentation will be linked here."],
    ["Community contribution", "Reusable educational and collaboration resources will be collected here."],
    ["Contribution checklist", sharedPlaceholder],
  ]),
  page("/project/engineering", "Project", "Design. Build. Test. Learn. Repeat.", "Project · Engineering", "Follow each engineering cycle, including failures, design changes, and the evidence behind the next iteration.", Atom, "/assets/lab-researcher-v2.png", "timeline", [
    ["Design", "Define performance targets and choose the first construct or material formulation."],
    ["Build", "Create the biological part, protein, or hydrogel formulation."],
    ["Test", "Measure the response with controls and predefined success criteria."],
    ["Learn", "Compare results with the hypothesis and document the next design decision."],
  ], [["01", "cycle one"], ["02", "cycle two"], ["03", "cycle three"]]),
  page("/project/implementation", "Project", "A path from concept to responsible use", "Project · Implementation", "Map the product, users, manufacturing route, safety needs, and practical steps required beyond the laboratory.", Briefcase, "/assets/pointing.png", "roadmap", [
    ["Use scenario", "Define when, where, and by whom the coating would be applied."],
    ["Product requirements", "Retention, biocompatibility, stability, and compatibility criteria will be specified."],
    ["Scale-up", "A preliminary manufacturing and quality-control pathway will be documented."],
    ["Translation", "Regulatory, clinical, and access considerations will be added after review."],
  ]),

  page("/wet-lab", "Wet Lab", "Building evidence at the bench", "Wet lab overview", "A single laboratory hub for notebooks, protocols, safety, parts, and measurement standards.", Microscope, "/assets/microbiology.png", "hub", [
    ["Plan", "Define experimental objectives, controls, materials, and success criteria."],
    ["Perform", "Record procedures and observations in a reproducible format."],
    ["Verify", "Analyze data, discuss uncertainty, and connect results to the next cycle."],
  ], [["5", "lab sections"], ["100%", "traceable records"], ["1", "review workflow"]]),
  page("/wet-lab/notebook", "Wet Lab", "A dated record of our experimental journey", "Wet Lab · Notebook", "Browse the team’s chronological laboratory record, decisions, deviations, and next steps.", NotePencil, "/assets/lab-researcher-v2.png", "timeline", [
    ["Project setup", "Literature review, training, risk assessment, and experimental planning."],
    ["Construct work", "Design, cloning, verification, expression, and purification entries."],
    ["Material work", "Hydrogel preparation, loading, release, and characterization entries."],
    ["Functional testing", "Antimicrobial and remineralization experiment entries."],
  ]),
  page("/wet-lab/experiments", "Wet Lab", "Protocols designed for reproduction", "Wet Lab · Experiments / Protocol", "Detailed methods will connect each experiment to its objective, materials, controls, steps, and expected outputs.", Flask, "/assets/lab-researcher-v2.png", "protocol", [
    ["Molecular biology", "Cloning, PCR, transformation, expression, and protein purification protocols."],
    ["Hydrogel characterization", "Preparation, swelling, loading, release, and mechanical testing protocols."],
    ["Antimicrobial testing", "Culture conditions, controls, MIC/MBC, and biofilm assays."],
    ["Remineralization testing", "Mineralization reaction and enamel-repair evaluation methods."],
  ]),
  page("/wet-lab/safety", "Wet Lab", "Safety is part of the design", "Wet Lab · Safety", "Document organisms, materials, hazards, containment, waste handling, and product-level risk controls.", ShieldCheck, "/assets/shield-tooth.png", "checklist", [
    ["Laboratory organisms", "Risk groups, containment levels, handling, and decontamination procedures."],
    ["Chemical materials", "Hazards, PPE, storage, spill response, and waste disposal."],
    ["Experimental controls", "Training, supervision, access control, and incident reporting."],
    ["Product safety", "Biocompatibility, exposure, environmental release, and misuse considerations."],
  ]),
  page("/wet-lab/parts", "Wet Lab", "A modular biological toolkit", "Wet Lab · Parts", "Organize basic and composite parts with Registry links, design rationale, sequences, and characterization.", Dna, "/assets/microbiology.png", "catalog", [
    ["Basic parts", "Promoters, coding sequences, linkers, tags, and functional domains."],
    ["Composite parts", "Expression cassettes and complete functional modules."],
    ["New and improved parts", "Document novelty, changes, evidence, and comparison with existing parts."],
    ["Registry submission", "Part numbers and approved documentation will be added here."],
  ]),
  page("/wet-lab/measurement", "Wet Lab", "Measurements that others can trust", "Wet Lab · Measurement", "Define calibration, controls, units, replicates, statistical treatment, and uncertainty for every quantitative claim.", ChartLineUp, "/assets/braces-monitoring-v2.png", "data", [
    ["Calibration", "Reference standards, instrument checks, and standard curves."],
    ["Experimental design", "Controls, biological replicates, technical replicates, and randomization."],
    ["Analysis", "Data cleaning, normalization, statistical tests, and uncertainty."],
    ["Open data", "Approved raw data and analysis files will be linked here."],
  ], [["n ≥ 3", "replicate target"], ["SI", "reported units"], ["Open", "analysis files"]]),

  page("/model", "Model", "Models that guide experiments", "Dry lab · Model", "Connect molecular design, release kinetics, biofilm conditions, and experimental data in an iterative modeling workflow.", ChartLineUp, "/assets/braces-monitoring-v2.png", "data", [
    ["Biological model", "Prioritize AMP and ALP candidates using relevant sequence and structure features."],
    ["Material model", "Describe pH-dependent swelling, diffusion, and payload release."],
    ["System model", "Connect bacterial acid production, response thresholds, and recovery."],
    ["Model validation", "Parameters and conclusions will be updated with reviewed experimental data."],
  ], [["Input", "experimental data"], ["Model", "mechanistic insight"], ["Output", "next experiment"]]),

  page("/engagement", "Engagement", "Designing with people, not only for them", "Engagement overview", "Human practices, entrepreneurship, and education connect the project to real needs, decisions, and communities.", HandHeart, "/assets/pointing.png", "hub", [
    ["Listen", "Identify stakeholder needs, concerns, and definitions of success."],
    ["Integrate", "Translate feedback into concrete scientific or product decisions."],
    ["Share", "Return knowledge through education, communication, and open resources."],
  ]),
  page("/engagement/ihp", "Engagement", "Human practices integrated into every decision", "Engagement · Integrated Human Practices", "Track how stakeholder input changes project direction through a clear value–reflection–action framework.", HandHeart, "/assets/pointing.png", "timeline", [
    ["Identify", "Map patients, clinicians, researchers, manufacturers, regulators, and educators."],
    ["Engage", "Prepare ethical interviews, surveys, workshops, and consultation questions."],
    ["Reflect", "Compare stakeholder insights, scientific evidence, and team assumptions."],
    ["Integrate", "Document specific design changes and verify their consequences."],
  ]),
  page("/engagement/entrepreneurship", "Engagement", "Turning a promising idea into a viable solution", "Engagement · Entrepreneurship", "Explore users, market need, competitors, value proposition, costs, partnerships, and a responsible route to impact.", Briefcase, "/assets/shield-scene.png", "roadmap", [
    ["Need and customer", "Define who experiences the problem and who makes the purchasing decision."],
    ["Existing solutions", "Compare benefits, limitations, retention, cost, and evidence."],
    ["Value proposition", "Explain why responsive dual-action protection is meaningfully different."],
    ["Business pathway", "Market sizing, cost assumptions, partners, and milestones will be added after review."],
  ]),
  page("/engagement/education", "Engagement", "Making synthetic biology understandable", "Engagement · Education", "Build inclusive learning experiences about oral biofilms, pH, biomaterials, and responsible synthetic biology.", GraduationCap, "/assets/scientist.png", "cards", [
    ["Learning goals", "Define what each audience should understand or be able to do."],
    ["Activities", "Hands-on workshops, demonstrations, games, and visual explainers."],
    ["Accessibility", "Adapt language, format, and delivery for different learners."],
    ["Evaluation", "Measure learning outcomes and improve future activities."],
  ]),

  page("/team", "Team", "The people behind S.H.I.E.L.D.", "Team overview", "Meet the interdisciplinary team, mentors, instructors, collaborators, and supporters who make the project possible.", UsersThree, "/assets/scientist.png", "hub", [
    ["Student team", "Members contribute across research, design, human practices, business, and communication."],
    ["Mentors and instructors", "Scientific, technical, and organizational guidance will be recognized here."],
    ["Shared responsibility", "Roles and contributions are documented transparently in Attributions."],
  ], [["23", "team members"], ["4", "working groups"], ["1", "shared mission"]]),
  page("/team/members", "Team", "Meet LINKS–UNION", "Team · Members", "A first framework for individual profiles, roles, interests, and contributions.", UsersThree, "/assets/scientist.png", "people", [
    ["Academic group", "Member profiles and research responsibilities will be added here."],
    ["Art and wiki group", "Member profiles and design responsibilities will be added here."],
    ["Business group", "Member profiles and entrepreneurship responsibilities will be added here."],
    ["Human practices group", "Member profiles and engagement responsibilities will be added here."],
  ]),
  page("/team/attributions", "Team", "Credit every contribution clearly", "Team · Attributions", "Record who did what, when, and with what external support across the entire project.", ListChecks, "/assets/pointing.png", "checklist", [
    ["Team contributions", "Research, experiments, modeling, design, writing, outreach, and management."],
    ["Mentor and instructor support", "Training, feedback, supervision, and scientific guidance."],
    ["Institutional support", "Facilities, materials, funding, equipment, and administration."],
    ["External support", "Collaborators, interviewees, advisors, and service providers."],
  ]),

  page("/special-prizes", "Special Prizes", "Building evidence for every prize story", "Special prizes overview", "This hub organizes award-relevant evidence without duplicating or overstating the project pages.", Medal, "/assets/shield-tooth.png", "hub", [
    ["Evidence first", "Each claim links back to verified project documentation and data."],
    ["Clear narrative", "Every prize page explains the challenge, work, evidence, and significance."],
    ["No duplication", "Prize pages summarize and connect; primary documentation stays in its home section."],
  ]),
  page("/special-prizes/general-bio-engineering", "Special Prizes", "General Biological Engineering", "Special Prize", "Frame S.H.I.E.L.D. as an integrated engineered biological system with a clear need, design, evidence, and path forward.", Medal, "/assets/microbiology.png", "prize", [
    ["Engineering challenge", "Describe the biological and material-design problem."],
    ["System innovation", "Explain how sensing, response, antimicrobial action, and remineralization connect."],
    ["Evidence", "Link to approved engineering, wet-lab, modeling, and implementation documentation."],
    ["Impact", sharedPlaceholder],
  ]),
  page("/special-prizes/best-model", "Special Prizes", "Best Model", "Special Prize", "Show how modeling informs real design decisions, receives experimental data, and improves the next cycle.", ChartLineUp, "/assets/braces-monitoring-v2.png", "prize", [
    ["Question", "Define the decision the model helps the team make."], ["Method", "Document assumptions, equations, parameters, and validation."],
    ["Integration", "Show which experiment or design changed because of the model."], ["Evidence", sharedPlaceholder],
  ]),
  page("/special-prizes/best-new-improved-part", "Special Prizes", "Best New Improved Part", "Special Prize", "Document the starting part, the improvement, why it matters, and the experimental comparison.", PuzzlePiece, "/assets/microbiology.png", "prize", [
    ["Starting point", "Link the existing Registry part and summarize its documented function."], ["Improvement", "Explain the sequence or functional change and the design rationale."],
    ["Comparison", "Present matched characterization of old and improved versions."], ["Registry documentation", sharedPlaceholder],
  ]),
  page("/special-prizes/best-new-basic-part", "Special Prizes", "Best New Basic Part", "Special Prize", "Present a well-documented basic part with clear novelty, function, sequence, use, and characterization.", Dna, "/assets/microbiology.png", "prize", [
    ["Part identity", "Name, type, sequence, origin, and Registry number."], ["Design rationale", "Explain why the part was created and how it fits S.H.I.E.L.D."],
    ["Characterization", "Provide methods, controls, data, uncertainty, and interpretation."], ["Reuse guidance", sharedPlaceholder],
  ]),
  page("/special-prizes/best-entrepreneurship", "Special Prizes", "Best Entrepreneurship", "Special Prize", "Connect a validated need to a responsible product strategy, market understanding, and realistic execution plan.", Briefcase, "/assets/shield-scene.png", "prize", [
    ["Problem validation", "Stakeholder and market evidence for the unmet need."], ["Solution and differentiation", "Benefits, alternatives, limitations, and value proposition."],
    ["Business model", "Users, customers, channels, partners, costs, and revenue assumptions."], ["Roadmap", sharedPlaceholder],
  ]),
  page("/special-prizes/best-integrated-human-practices", "Special Prizes", "Best Integrated Human Practices", "Special Prize", "Tell a traceable story of listening, reflection, design change, and responsible follow-up.", HandHeart, "/assets/pointing.png", "prize", [
    ["Context", "Explain why each stakeholder perspective matters."], ["Method", "Document ethical engagement design and the questions asked."],
    ["Integration", "Show a concrete project decision changed by the insight."], ["Reflection", sharedPlaceholder],
  ]),
];

export const wikiPages = legacyPages;
export const pageByPath = Object.fromEntries(wikiPages.map((item) => [item.path, item]));

export function childrenFor(path) {
  return navGroups.find((group) => group.path === path)?.children ?? [];
}

export const fallbackPage = page("/404", "Wiki", "This page is still finding its smile", "Page not found", "The requested page does not exist. Return home or use the navigation to continue exploring S.H.I.E.L.D.", Sparkle, "/assets/pointing.png", "cards", [["Return home", "Use the button below to go back to the LINKS–UNION homepage."]]);
