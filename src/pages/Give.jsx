import PageShell from '../components/PageShell.jsx';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import Copy from '../components/Copy.jsx';
import Reveal from '../components/Reveal.jsx';
import { give } from '../content/give.js';
import { links } from '../content/site.js';

export default function Give() {
  return (
    <PageShell
      label="Give"
      seo={{
        title: 'Give',
        description:
          'Give to Faith Church through Kingdom Builders — supporting Jackson Interfaith Shelter, Youth Haven Ranch, Leslie Outreach, and global missions. Some seed to keep. Some to sow.',
        path: '/give',
      }}
    >
      <Hero
        eyebrow={<Copy item={give.hero.eyebrow} />}
        headline={<Copy item={give.hero.headline} />}
        subhead={<Copy item={give.hero.subhead} />}
        photo={give.hero.photo}
        short
      >
        <Button href={links.giving}>Give Now</Button>
      </Hero>

      {/* Where it goes */}
      <Section id="supports" labelledBy="supports-h">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <p className="section-label"><Copy item={give.supports.label} /></p>
            <h2 id="supports-h" className="mt-4 font-display font-bold text-3xl md:text-4xl max-w-xl">
              <Copy item={give.supports.heading} />
            </h2>
            <p className="mt-6 font-body text-lg text-burlap leading-relaxed max-w-xl">
              <Copy item={give.supports.body} />
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <ul className="divide-y divide-burlap/20 border-y border-burlap/20">
              {give.supports.partners.map((p, i) => (
                <li key={i} className="py-4 font-display font-bold text-lg text-hunter">
                  <Copy item={p} />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal className="mt-14 flex justify-center">
          <img
            src="/images/from-current-site/kingdom-builders-2025.png"
            alt="Kingdom Builders — Together in Mission: giving that reaches Leslie and the world."
            className="w-full max-w-2xl border border-burlap/20"
            loading="lazy"
          />
        </Reveal>
      </Section>

      {/* How to give */}
      <Section id="how" tone="hunter" labelledBy="how-h">
        <Reveal>
          <p className="section-label !text-faded"><Copy item={give.how.label} /></p>
          <h2 id="how-h" className="mt-4 font-display font-bold text-3xl md:text-4xl text-manila">
            Three ways to give
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {give.how.methods.map((m, i) => (
            <Reveal as="li" delay={i * 0.08} key={i} className="border-t border-faded/40 pt-6">
              <span className="font-display font-bold text-faded text-2xl">0{i + 1}</span>
              <p className="mt-3 font-body text-manila/90 leading-relaxed">
                <Copy item={m} />
              </p>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10">
          <Button href={links[give.how.cta.href]} className="!bg-manila !text-hunter !border-manila hover:!bg-kraft hover:!border-kraft">
            {give.how.cta.label}
          </Button>
        </Reveal>
      </Section>

      {/* Transparency */}
      <Section id="transparency">
        <Reveal>
          <p className="font-body text-lg text-burlap leading-relaxed max-w-2xl">
            <Copy item={give.transparency} />
          </p>
        </Reveal>
      </Section>
    </PageShell>
  );
}
