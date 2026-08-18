import { ScreenshotCarousel } from '../ui/ScreenshotCarousel.jsx';
import { Reveal } from '../ui/Reveal.jsx';
import {
  TemplatesListScreen,
  AnswerQuestionsScreen,
  CameraAnnotatedScreen,
  NavigationScreen,
  SignatureScreen,
} from '../ui/AppScreens.jsx';

const SCREENS = [
  { id: 'templates', label: 'Browse 70+ templates', render: () => <TemplatesListScreen /> },
  { id: 'answer', label: 'Answer questions on-site', render: () => <AnswerQuestionsScreen /> },
  { id: 'camera', label: 'Attach photo evidence', render: () => <CameraAnnotatedScreen /> },
  { id: 'nav', label: 'Navigate every section', render: () => <NavigationScreen /> },
  { id: 'sign', label: 'Sign off digitally', render: () => <SignatureScreen /> },
];

export function AppTour() {
  return (
    <section style={{ padding: 'clamp(56px, 8vw, 104px) 0', overflow: 'hidden' }}>
      <Reveal>
        <div style={{
          maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)',
          textAlign: 'center', marginBottom: 48,
        }}>
          <div className="hsm-eyebrow" style={{ marginBottom: 12 }}>Inside the app</div>
          <h2 style={{ fontSize: 'var(--text-display-sm)', letterSpacing: 'var(--tracking-display)', lineHeight: 'var(--leading-tight)', marginBottom: 16 }}>
            Every screen built for the shop floor
          </h2>
          <p style={{ fontSize: 'var(--text-body-lg)', color: 'var(--text-body)', maxWidth: '52ch', margin: '0 auto' }}>
            From opening a template to a signed-off report &mdash; the HS Manager mobile app, step by step.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <ScreenshotCarousel screens={SCREENS} />
      </Reveal>
    </section>
  );
}
