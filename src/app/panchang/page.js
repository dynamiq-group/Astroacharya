import Link from 'next/link';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FAQAccordion from '@/components/ui/FAQAccordion';
import PanchangCalendar from '@/components/panchang/PanchangCalendar';
import { panchangElements, panchangFaqs } from '@/data/panchang';
import '@/components/panchang/panchang.css';

export const metadata = {
  title: 'Panchang | Tithi, Nakshatra & Muhurat',
  description: 'Explore the Hindu Panchang, its five elements, sunrise and moonrise, and traditional auspicious timings with Astroacharya.',
  alternates: { canonical: '/panchang' },
};

export default function PanchangPage() {
  return (
    <div className="panchang-page">
      <section className="panchang-hero">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Panchang' }]} />
          <div className="panchang-hero-content">
            <div>
              <span className="section-eyebrow">Ancient wisdom · Everyday living</span>
              <h1>Discover the rhythm<br />of your day. <span>Panchang</span></h1>
              <p>Your guide to the Hindu calendar: tithi, nakshatra, yoga, karana and the traditional timings that shape daily observances.</p>
            </div>
            <div className="panchang-emblem" aria-hidden="true"><span>☀</span><small>पंचांग</small></div>
          </div>
        </div>
      </section>
      <div className="container panchang-body">
        <PanchangCalendar />
        <section className="panchang-learn" aria-labelledby="elements-heading">
          <span className="section-eyebrow">Understand your Panchang</span>
          <h2 id="elements-heading">Five elements. One daily guide.</h2>
          <p>The word Panchang brings together <em>panch</em> (five) and <em>ang</em> (parts). Each element offers a different way of understanding the traditional calendar.</p>
          <div className="panchang-learning-grid">
            {panchangElements.map((element, index) => (
              <article className="panchang-card panchang-learning-card" id={element.name.toLowerCase()} key={element.name}>
                <span className="panchang-card-number">0{index + 1} <span aria-hidden="true">{element.icon}</span></span>
                <h3>{element.name} <span lang="hi">{element.hindi}</span></h3>
                <p>{element.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="panchang-consult" aria-labelledby="panchang-consult-heading">
          <div><span className="section-eyebrow">For life&apos;s meaningful moments</span><h2 id="panchang-consult-heading">Find a time that is personal to you.</h2><p>Planning a wedding, a housewarming or a family ceremony? Speak with Dr. Vikas Kaushik for personalised muhurat guidance.</p></div>
          <Link href="/contact" className="btn btn--primary">Consult the Astrologer <span aria-hidden="true">→</span></Link>
        </section>
        <section className="panchang-faq" aria-labelledby="panchang-faq-heading"><h2 id="panchang-faq-heading">Your Panchang questions, answered</h2><FAQAccordion items={panchangFaqs} /></section>
      </div>
    </div>
  );
}
