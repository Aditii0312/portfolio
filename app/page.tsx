import Intro from "./components/Intro";
import Card from "./components/Card";
import StickerRain from "./components/StickerRain";
import { profile, seenOn, projects, education } from "./data";

export default function Home() {
  const loop = [...seenOn, ...seenOn, ...seenOn, ...seenOn];
  return (
    
      
    <main>
      <Intro />
<StickerRain />

      <nav className="nav mono">
        <a href="#top">~/home</a>
        <a href="#projects">~/projects</a>
        <a href="#education">~/education</a>
        <a href="#contact">~/contact</a>
      </nav>

      <div className="hero" id="top">
        <p className="label mono">// hello world</p>
        <h1>I'm <em>{profile.name}</em>.</h1>
        <p>{profile.tagline}</p>
        <div className="links mono">
          {profile.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank">{l.label}</a>
          ))}
        </div>
      </div>

      <div className="marquee mono">
        <div className="track">
          {loop.map((s, i) => <span key={i}>✦ {s}</span>)}
        </div>
      </div>

      <section id="projects">
        <p className="label mono">// what i've built</p>
        <h2>Projects</h2>
        {projects.map((p) => <Card key={p.org} item={p} />)}
      </section>

      <section id="education">
        <p className="label mono">// where i've studied</p>
        <h2>Education</h2>
        {education.map((e) => <Card key={e.org} item={e} />)}
      </section>

      <section id="contact">
        <p className="label mono">// say hi</p>
        <h2>Let's connect!</h2>
        <p style={{ marginTop: 12 }}>{profile.email}</p>
      </section>

      <footer className="mono">© 2026 {profile.name}</footer>
    </main>
  );
}