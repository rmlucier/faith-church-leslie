import { Link } from 'react-router-dom';
import { church, links } from '../content/site.js';

/**
 * Global footer on hunter ground.
 *   left   — wordmark + mission + AG affiliation + since 1976
 *   center — address, service times, phone, email (all sourced)
 *   right  — Sunday / 10 AM / Coffee 9:45 signage block
 *   bottom — © year, Facebook, Our beliefs (AG statement)
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-hunter text-manila">
      <div className="container-fc py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Left — identity */}
          <div className="md:col-span-5">
            <img
              src="/images/logo/FC_Horizontal_White.png"
              alt={church.name}
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-sm font-display text-xl leading-snug text-manila">
              {church.mission}
            </p>
            <p className="mt-6 font-body text-sm uppercase tracking-[0.18em] text-faded">
              {church.affiliation} · Est. {church.since}
            </p>
          </div>

          {/* Center — contact */}
          <div className="md:col-span-4">
            <p className="section-label !text-faded">Find Us</p>
            <address className="mt-5 not-italic font-body text-manila/90 leading-relaxed space-y-1">
              <p className="text-manila/90">{church.address.line}</p>
              <p>
                <a href={`tel:${church.phoneHref}`} className="text-manila/90 hover:text-white">
                  {church.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${church.email}`} className="text-manila/90 hover:text-white">
                  {church.email}
                </a>
              </p>
            </address>
          </div>

          {/* Right — signage block */}
          <div className="md:col-span-3">
            <div className="border border-faded/40 p-6">
              <p className="font-display font-bold text-3xl leading-none text-manila">
                Sunday
              </p>
              <p className="mt-2 font-display font-bold text-3xl leading-none text-manila">
                10 AM
              </p>
              <p className="mt-4 font-body text-sm uppercase tracking-[0.16em] text-faded">
                Coffee at 9:45
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-faded/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-body text-xs uppercase tracking-[0.18em] text-faded">
            © {year} {church.name} · {church.city}, {church.state}
          </p>
          <div className="flex items-center gap-6 font-body text-xs uppercase tracking-[0.18em]">
            <a
              href={links.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-faded hover:text-manila"
            >
              Facebook
            </a>
            <a
              href={links.agBeliefs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-faded hover:text-manila"
            >
              Our Beliefs
            </a>
            <Link to="/contact" className="text-faded hover:text-manila">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
