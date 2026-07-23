import PageShell from '../components/PageShell.jsx';
import Hero from '../components/Hero.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';
import Copy from '../components/Copy.jsx';
import Reveal from '../components/Reveal.jsx';
import { contact } from '../content/contact.js';
import { church, links } from '../content/site.js';

export default function Contact() {
  return (
    <PageShell
      label="Contact"
      seo={{
        title: 'Contact',
        description:
          'Contact Faith Church, 4020 N. Main St., Leslie, MI 49251. Sundays at 10 AM. Call (517) 589-9121 or email Office@FaithChurchLeslie.com.',
        path: '/contact',
      }}
    >
      <Hero
        eyebrow={<Copy item={contact.hero.eyebrow} />}
        headline={<Copy item={contact.hero.headline} />}
        subhead={<Copy item={contact.hero.subhead} />}
        photo="/images/from-current-site/308837470_472385964933964_5522732804867506140_n-5552613.jpg"
        short
      />

      <Section id="details">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Left column — contact details */}
          <div className="md:col-span-5 space-y-10">
            <Reveal>
              <p className="section-label"><Copy item={contact.reach.label} /></p>
              <address className="mt-5 not-italic font-body text-lg text-ink leading-relaxed space-y-1">
                <p>{church.address.line}</p>
                <p><a href={`tel:${church.phoneHref}`} className="link-fc">{church.phone}</a></p>
                <p><a href={`mailto:${church.email}`} className="link-fc">{church.email}</a></p>
              </address>
              <p className="mt-6 font-body text-burlap"><Copy item={contact.reach.emailNote} /></p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href={`mailto:${church.email}`}>Email the office</Button>
                <Button variant="ghost" href={links.mapsLink}>Get directions</Button>
              </div>
            </Reveal>

            <Reveal>
              <p className="section-label"><Copy item={contact.serviceTimes.label} /></p>
              <ul className="mt-4 space-y-1 font-body text-burlap">
                {contact.serviceTimes.items.map((it, i) => (
                  <li key={i}><Copy item={it} /></li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <p className="section-label"><Copy item={contact.officeHours.label} /></p>
              <ul className="mt-4 space-y-1 font-body text-burlap">
                {contact.officeHours.items.map((it, i) => (
                  <li key={i}><Copy item={it} /></li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right column — map */}
          <Reveal delay={0.1} className="md:col-span-7">
            <div className="aspect-[4/3] w-full border border-burlap/25 overflow-hidden">
              <iframe
                title="Map to Faith Church, Leslie MI"
                src={links.mapsEmbed}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </PageShell>
  );
}
