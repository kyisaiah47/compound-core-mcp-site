import { MARK_INNER, MARK_VIEWBOX } from '@/icons/mark.generated';

/** The ParseRail mark from the logo registry, the same drawing the Console header uses. */
export default function Mark() {
  return <svg aria-hidden="true" viewBox={MARK_VIEWBOX} dangerouslySetInnerHTML={{ __html: MARK_INNER }} />;
}
