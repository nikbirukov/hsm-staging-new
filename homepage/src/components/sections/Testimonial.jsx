import { Reveal } from '../ui/Reveal.jsx';
import { TestimonialStack } from '../ui/TestimonialStack.jsx';

const TESTIMONIALS = [
  {
    id: 'sohail-shabbir',
    initials: 'SS',
    name: 'Sohail Shabbir',
    role: 'Adidas &middot; Europe',
    quote: 'This platform has streamlined our inspections, recording compliance tasks accurately. We have improved efficiency and transparency throughout our warehouse operations.',
    avatarGradient: 'linear-gradient(135deg, var(--green-500), var(--green-700))',
    rating: 5,
  },
  {
    id: 'chris-hills',
    initials: 'CH',
    name: 'Chris Hills',
    role: 'A-Z Rack Inspections',
    quote: 'HS Manager transformed our monthly racking inspections. The system has improved efficiency and makes reporting significantly faster.',
    avatarGradient: 'linear-gradient(135deg, var(--navy-600), var(--navy-900))',
    rating: 5,
  },
  {
    id: 'mike-thomas',
    initials: 'MT',
    name: 'Mike Thomas',
    role: 'Smylies Exports',
    quote: 'The app keeps our busy warehouse compliant. The structured checklists and digital signoffs ensure consistent, audit-ready inspections.',
    avatarGradient: 'linear-gradient(135deg, var(--green-400), var(--navy-700))',
    rating: 5,
  },
  {
    id: 'charles-abdilla',
    initials: 'CA',
    name: 'Charles Abdilla',
    role: 'Storage Systems',
    quote: 'HS Manager simplified our racking inspections. The checklists are easy to follow, while integrated photos ensure transparent, evidence-based reporting.',
    avatarGradient: 'linear-gradient(135deg, var(--navy-700), var(--green-600))',
    rating: 5,
  },
  {
    id: 'neville-stimpson',
    initials: 'NS',
    name: 'Neville Stimpson',
    role: 'The OPS Partnership Ltd.',
    quote: 'We now have complete confidence in our inspections. Daily checks are completed correctly, logged in real time, and supported by compliance-ready reports.',
    avatarGradient: 'linear-gradient(135deg, var(--green-600), var(--navy-800))',
    rating: 5,
  },
];

export function Testimonial() {
  return (
    <section style={{
      position: 'relative', overflow: 'hidden', padding: 'clamp(64px, 9vw, 104px) 0',
      background: 'radial-gradient(900px 480px at 50% 0%, var(--green-50) 0%, rgba(234,251,235,0) 68%), var(--surface-page)',
    }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '0 var(--gutter-page-lg)' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="hsm-eyebrow" style={{ marginBottom: 12 }}>Real teams, real sites</div>
            <h2 style={{ fontSize: 'var(--text-display-sm)', letterSpacing: 'var(--tracking-display)', lineHeight: 'var(--leading-tight)' }}>
              Teams who switch don&rsquo;t go back to paper
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <TestimonialStack testimonials={TESTIMONIALS} />
        </Reveal>
      </div>
    </section>
  );
}
