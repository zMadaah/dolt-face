import Hero from '@/components/Hero/hero';
import Essence from '@/components/Essence/essence';
import About from '@/components/About/about';
import Itinerary from '@/components/Itinerary/itinerary';
import Sponsorship from '@/components/Sponsorship/sponsorship';
import Scenario from '@/components/Scenario/scenario';
import Projeto from '@/components/Projeto/projeto';
import CreativeDirection from '@/components/Creative Direction/creativeDirection';
import Strategy from '@/components/Strategy/strategy';
import Team from '@/components/Team/team';
import Footer from '@/components/Footer/footer';
import { ScrollReveal } from '@/components/ScrollReveal/scrollReveal';

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal>
        <Essence />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <Itinerary />
      </ScrollReveal>
      <ScrollReveal>
        <Sponsorship />
      </ScrollReveal>
      <ScrollReveal>
        <Scenario />
      </ScrollReveal>
      <ScrollReveal>
        <Projeto />
      </ScrollReveal>
      <CreativeDirection />
      <ScrollReveal>
        <Strategy />
      </ScrollReveal>
      <Team />
      <Footer />
    </main>
  );
}