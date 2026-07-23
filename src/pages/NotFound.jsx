import PageShell from '../components/PageShell.jsx';
import Section from '../components/Section.jsx';
import Button from '../components/Button.jsx';

export default function NotFound() {
  return (
    <PageShell
      label="Not Found"
      seo={{
        title: 'Page not found',
        description: 'That page has wandered off. Head back home.',
        path: '/404',
        noindex: true,
      }}
    >
      <Section id="notfound" className="min-h-[70vh] flex items-center !pt-40">
        <div>
          <p className="section-label">404</p>
          <h1 className="mt-4 font-display font-bold text-5xl md:text-7xl">
            That page wandered off.
          </h1>
          <p className="mt-6 font-body text-lg text-burlap max-w-xl leading-relaxed">
            The link’s broken or the page moved. Let’s get you back to where the
            coffee is.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/">Back home</Button>
            <Button variant="ghost" to="/visit">Plan a visit</Button>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
