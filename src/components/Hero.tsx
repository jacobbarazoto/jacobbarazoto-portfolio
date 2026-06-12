import { profile } from "../data/site";

export default function Hero() {
  return (
    <header className="hero">
      <h1>{profile.name}</h1>
      <p className="intro">{profile.intro}</p>
      <nav className="hero-links">
        {profile.links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
