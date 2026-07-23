import ProposedString from './ProposedString.jsx';

/**
 * Renders a content-module value. Accepts either:
 *   - a plain string
 *   - a sourced() object  { text, source }        → rendered plainly
 *   - a proposed() object { text, proposed, id, note } → wrapped in ProposedString
 */
export default function Copy({ item }) {
  if (item == null) return null;
  if (typeof item === 'string') return <>{item}</>;
  if (item.proposed) {
    return (
      <ProposedString id={item.id} note={item.note}>
        {item.text}
      </ProposedString>
    );
  }
  return <>{item.text}</>;
}
