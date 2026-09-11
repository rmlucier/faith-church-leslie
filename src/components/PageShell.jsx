import { ProposedProvider } from '../hooks/useProposed.js';
import SEO from './SEO.jsx';

/**
 * Per-page chrome. Renders SEO tags up top, then the page body.
 *
 * The ReviewNotes "first draft copy" bar was removed (Sept 2026) — proposed
 * copy now stands as the live copy. ProposedProvider is kept as a harmless
 * no-op wrapper so the registry hook still resolves if anything references it.
 *
 *   <PageShell seo={{ title, description, path }} label="Home">
 *     …sections…
 *   </PageShell>
 */
export default function PageShell({ seo, children }) {
  return (
    <ProposedProvider>
      <SEO {...seo} />
      <main id="main">{children}</main>
    </ProposedProvider>
  );
}
