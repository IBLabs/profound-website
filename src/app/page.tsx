import { HomeIntroduction } from "./home-introduction";
import { HomeHero } from "./home-hero";
import { ForFounders } from "./for-founders";
import { HomeTeam, ProgramBento } from "./home-program";

export default function Home() {
  return (
    <main className="home-page">
      <HomeHero />

      <HomeIntroduction />

      <ForFounders />

      <ProgramBento />

      <HomeTeam />

    </main>
  );
}
