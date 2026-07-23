import { ProposedProvider } from '../hooks/useProposed.js';
import SEO from './SEO.jsx';
import ReviewNotes from './ReviewNotes.jsx';

/**
 * Per-page chrome. Wraps a page in the ProposedProvider (so <ProposedString>
 * and <ReviewNotes> share one registry), renders SEO tags up top, the page
 * body, then the ReviewNotes block last (above the global footer).
 *
 *   <PageShell seo={{ title, description, path }} label="Home">
 *     …sections…
 *   </PageShell>
 */
export default function PageShell({ seo, label, children }) {
  return (
    <ProposedProvider>
      <SEO {...seo} />
      <main id="main">{children}</main>
      <ReviewNotes page={label} />
    </ProposedProvider>
  );
}
