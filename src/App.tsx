import { FloatingNav } from './components/Nav';
import { Drone, Epilog, Footer, Kampus, Kerja, Kreatif, Marquee, Peran, Prolog, Skill, WebDev } from './components/Sections';
import { Sprites } from './components/Svg';
import SwarmControls from './swarm/SwarmControls';

export default function App() {
  return (
    <>
      <Sprites />
      <a href="#kampus" className="skip-link">
        Lewati ke konten
      </a>
      <FloatingNav />
      <main className="page">
        <Prolog />
        <Marquee />
        <Kampus />
        <Kerja />
        <Drone />
        <Kreatif />
        <WebDev />
        <Skill />
        <Peran />
        <Epilog />
      </main>
      <Footer />
      <SwarmControls />
    </>
  );
}
