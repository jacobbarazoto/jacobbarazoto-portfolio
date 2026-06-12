// Single source of truth for the site. Edit your profile here, and add a new
// entry to `projects` each time you ship something. Newest first.

export interface Profile {
  name: string;
  role: string;
  intro: string;
  links: { label: string; href: string }[];
}

export type ProjectStatus = "live" | "wip" | "archived";

export interface Project {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  year: string;
  status: ProjectStatus;
  /** Live, public URL. Omit if there isn't one yet. */
  liveUrl?: string;
  /** Public source repo. Omit for private repos. */
  repoUrl?: string;
}

export const profile: Profile = {
  name: "Jacob Barazoto",
  role: "RevOps / BizDev at LaunchDarkly",
  intro:
    "I work in revenue operations by day and build things on the side — small, " +
    "useful apps that scratch an itch or answer a question. This is where they live.",
  links: [
    { label: "GitHub", href: "https://github.com/jacobbarazoto" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jacobbarazoto" },
    { label: "Email", href: "mailto:jacobbarazoto@gmail.com" },
  ],
};

export const projects: Project[] = [
  {
    slug: "rx-scout",
    title: "rx-scout",
    blurb:
      "Find which pharmacies near you are likely to have your prescription. Pairs " +
      "real FDA drug-shortage data with a nearby-pharmacy locator and a clearly " +
      "labeled simulated stock layer.",
    tags: ["React", "TypeScript", "Vite", "Firebase", "openFDA"],
    year: "2026",
    status: "live",
    liveUrl: "https://rx-scout.web.app",
    // repoUrl intentionally omitted — repo is currently private.
  },
  // Add more projects here as you build them, e.g.:
  // {
  //   slug: "next-thing",
  //   title: "Next Thing",
  //   blurb: "One sentence on what it does and why it's interesting.",
  //   tags: ["..."],
  //   year: "2026",
  //   status: "wip",
  //   liveUrl: "https://...",
  //   repoUrl: "https://github.com/jacobbarazoto/...",
  // },
];
