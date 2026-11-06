/**
 * Service data — single source of truth for all five services.
 * Edit descriptions, FAQs, and detail content here; all pages update automatically.
 */

export const services = [
  {
    id: 'astrology',
    slug: 'astrology',
    name: 'Vedic Astrology',
    shortName: 'Astrology',
    icon: '☿',
    tagline: 'Understand the cosmic blueprint of your life',
    description:
      'Vedic Astrology (Jyotish) is an ancient Indian system that maps the positions of celestial bodies at the time of your birth to offer insights into personality, relationships, health, and life direction. A consultation explores your birth chart (Kundli) in depth to provide thoughtful guidance.',
    longDescription: `Vedic Astrology, known as Jyotish Shastra, is one of the oldest branches of Vedic knowledge. Unlike sun-sign columns in newspapers, a proper Vedic reading analyses the full Janam Kundli — the unique map of the sky at the precise moment and place of your birth.

A Jyotish consultation with Dr. Vikas Kaushik typically explores:

- The positions of the nine Grahas (planets) across the twelve Bhavas (houses)
- Your Lagna (Ascendant) and its lord's placement
- Dasha and Antardasha periods that are currently influencing your life
- Yogas (planetary combinations) that shape opportunities and challenges
- Remedial suggestions rooted in classical Vedic tradition

This service is intended to offer a considered perspective, not to make definitive predictions or promises about future events.`,
    whatItCovers: [
      'Janam Kundli (Birth Chart) preparation and analysis',
      'Planetary period (Dasha) analysis',
      'Career, health, and relationship indicators',
      'Auspicious timing (Muhurta) for important decisions',
      'Remedial suggestions (Upayas) from classical texts',
    ],
    preparation: [
      'Have your date of birth, exact time of birth, and place of birth ready',
      'Note any specific questions or life areas you wish to explore',
      'An open and receptive mindset supports a more meaningful session',
    ],
    faqs: [
      {
        q: 'Do I need my exact birth time?',
        a: 'An exact birth time gives the most precise reading. If unavailable, an approximate time or a Prashna (horary) chart can sometimes be used. Please mention this when you contact Dr. Kaushik.',
      },
      {
        q: 'Is Vedic Astrology a form of fortune-telling?',
        a: 'Jyotish offers a traditional framework for self-understanding and timing. It is not presented as a guaranteed prediction of future events. Consultations are reflective and advisory in nature.',
      },
      {
        q: 'How long does a consultation typically take?',
        a: 'The duration varies depending on the scope of discussion. Please contact Dr. Kaushik directly to understand what a session involves.',
      },
    ],
  },
  {
    id: 'vastu-dosha',
    slug: 'vastu-dosha',
    name: 'Vastu Dosha',
    shortName: 'Vastu Dosha',
    icon: '🏛',
    tagline: 'Harmonise your living space with natural energy',
    description:
      'Vastu Shastra is the traditional Hindu science of architecture and space arrangement. A Vastu Dosha assessment examines how the layout, orientation, and energy flow of your home or workplace may be affecting well-being and prosperity, offering guidance on adjustments to promote harmony.',
    longDescription: `Vastu Shastra — literally "the science of dwelling" — is a classical Indian discipline that describes how the design and orientation of built spaces interact with the natural forces of direction, light, wind, and the five elements (Pancha Bhutas).

A Vastu Dosha consultation examines whether imbalances or "doshas" in a space's layout or energy flow may be contributing to challenges in health, relationships, finances, or peace of mind.

The consultation may include:

- Assessment of the main entrance and its directional alignment
- Placement of rooms relative to the eight cardinal and sub-cardinal directions
- Identification of structural or design features associated with Vastu doshas
- Practical suggestions for adjustments — these are typically modest and do not require major renovation
- Guidance on colours, materials, and symbolic elements where appropriate

Dr. Vikas Kaushik approaches Vastu consultation respectfully and practically, with an awareness that many clients live in modern spaces where classical ideals must be adapted thoughtfully.`,
    whatItCovers: [
      'Directional analysis of the main entrance and key rooms',
      'Identification of Vastu doshas in the layout',
      'Practical, non-invasive remedial suggestions',
      'Guidance on colours, materials, and element balancing',
      'Assessment of workplace or commercial spaces',
    ],
    preparation: [
      'Have a floor plan or sketch of the space if possible',
      'Note the compass direction your main entrance faces',
      'List any specific concerns — health, finances, relationships — you wish to address',
    ],
    faqs: [
      {
        q: 'Do I need to demolish walls or do major renovations?',
        a: 'Most Vastu remedies are practical and manageable. Major structural changes are rarely recommended in a standard consultation.',
      },
      {
        q: 'Can Vastu be applied to a rented flat or apartment?',
        a: 'Yes. While some structural changes are not possible in rented spaces, many effective adjustments relate to arrangement, colour, and placement rather than construction.',
      },
      {
        q: 'Can I have a Vastu consultation done remotely?',
        a: 'Please contact Dr. Kaushik directly to discuss the options available for your situation.',
      },
    ],
  },
  {
    id: 'pind-dan-gaya',
    slug: 'pind-dan-gaya',
    name: 'Pind Dan (Pitra Pooja)',
    shortName: 'Pind Dan',
    icon: '🪔',
    tagline: 'Sacred ancestral rites at the holy city of Gaya',
    description:
      'Pind Dan, also known as Pitra Pooja or Shraddha, is one of the most revered ancestral rituals in Hindu tradition. Performed at Gaya, Bihar — one of the holiest pilgrimage sites in India — this ritual is offered to honour and seek peace for one\'s departed ancestors.',
    longDescription: `Gaya (Bodh Gaya and Vishnupad Gaya), in Bihar, India, is considered by Hindus to be among the most sacred places on earth for performing Shraddha (ancestral rites). The Vishnupad Temple, situated on the banks of the Falgu River, is the central location for Pind Dan rituals.

Pind Dan involves the offering of "pindas" — balls of cooked rice and sesame — along with water libations and recitation of Vedic mantras, offered in memory and honour of one's forebears. It is believed in Hindu tradition that performing this ritual with sincere devotion brings peace (shanti) to the souls of departed ancestors and releases the family from ancestral debts (Pitra Dosh).

Dr. Vikas Kaushik facilitates or advises on Pind Dan rites with respect for the religious traditions and the significance that these ceremonies hold for families. The ritual is conducted according to classical Vedic procedures.

**Important note:** This service has deep religious and cultural significance within Hindu tradition. It is presented respectfully here in that context. The ritual is a sincere act of reverence and is not presented as a guaranteed metaphysical remedy.`,
    whatItCovers: [
      'Guidance on the appropriate timing (Pitru Paksha or other suitable dates)',
      'Facilitation of classical Shraddha rituals at Gaya',
      'Vedic mantra recitation and puja procedures',
      'Assistance with travel and logistics advice for pilgrims to Gaya',
      'Ancestral debt (Pitra Dosh) assessment in the birth chart',
    ],
    preparation: [
      'Contact Dr. Kaushik well in advance, especially if planning around Pitru Paksha',
      'Bring names and gotra (lineage) details of ancestors where known',
      'Be prepared for the physical requirements of pilgrimage to Gaya, Bihar',
    ],
    faqs: [
      {
        q: 'When is the best time to perform Pind Dan?',
        a: 'Pitru Paksha — the 16-day lunar period in autumn dedicated to ancestral rites — is considered the most auspicious time. However, Pind Dan can be performed at Gaya at other times as well. Please contact Dr. Kaushik for guidance.',
      },
      {
        q: 'Can Pind Dan be performed on behalf of a family member who cannot travel?',
        a: 'Yes, a family representative may perform the rites, or Dr. Kaushik can advise on appropriate arrangements. Please discuss your specific situation directly.',
      },
      {
        q: 'Is Gaya accessible for pilgrims travelling from outside Bihar?',
        a: 'Gaya has a well-connected railway station and airport (Gaya Airport). The Vishnupad Temple area has established infrastructure for pilgrims.',
      },
    ],
  },
  {
    id: 'medical-astrology',
    slug: 'medical-astrology',
    name: 'Medical Astrology',
    shortName: 'Medical Astrology',
    icon: '☉',
    tagline: 'A traditional astrological perspective on well-being',
    description: 'Medical Astrology explores health and well-being themes through the traditional symbolism of a birth chart. A consultation offers personal and spiritual reflection; it does not provide medical diagnosis, treatment, or predictions of illness.',
    longDescription: `Medical Astrology approaches health and well-being through Vedic Astrology, using the birth chart as a symbolic framework for personal reflection.

A consultation with Dr. Vikas Kaushik may explore:

- Birth chart themes traditionally associated with well-being
- Planetary placements and periods as subjects of personal reflection
- Questions about balance, daily life, and spiritual practice
- How these themes relate to a broader Kundli reading

Medical Astrology is not a medical service. Consult a qualified healthcare professional for symptoms, diagnosis, and treatment. Astrological readings should never be used to delay care or change prescribed treatment.`,
    whatItCovers: [
      'Traditional birth chart interpretation focused on well-being',
      'Symbolic discussion of planetary placements and periods',
      'Personal reflection on balance and daily life',
      'Spiritual guidance within the Vedic tradition',
      'Integration with a broader Kundli reading where relevant',
    ],
    preparation: [
      'Have your date, time, and place of birth ready',
      'Write down the well-being or spiritual themes you wish to explore',
      'Keep medical questions about symptoms and treatment for a qualified healthcare professional',
    ],
    faqs: [
      {
        q: 'What is a Medical Astrology consultation?',
        a: 'It is an astrological discussion of well-being themes using your birth chart. The consultation is reflective and spiritual in nature.',
      },
      {
        q: 'Can Medical Astrology diagnose or treat illness?',
        a: 'No. This service does not diagnose, treat, or predict illness and does not replace medical care. Please consult a qualified healthcare professional for health concerns.',
      },
      {
        q: 'What birth details should I bring?',
        a: 'Please bring your date, time, and place of birth. If your birth time is uncertain, mention this when arranging your consultation.',
      },
    ],
  },
  {
    id: 'kundli-reading',
    slug: 'kundli-reading',
    name: 'Kundli Reading',
    shortName: 'Kundli Reading',
    icon: '◉',
    tagline: 'An in-depth reading of your birth chart',
    description:
      'A Kundli (birth chart) reading is a detailed interpretation of the Janam Kundli — the astrological map of the sky at the moment of your birth. It explores how planetary placements relate to different areas of life and helps identify periods of significance, both challenging and opportune.',
    longDescription: `The Janam Kundli — also called the natal chart or horoscope — is a circular map divided into twelve houses, each governing a different sphere of life such as health, wealth, relationships, career, and spiritual development. The positions of the nine Vedic planets (Navagrahas) within these houses, and their mutual relationships (aspects and conjunctions), form the basis of the reading.

A Kundli Reading with Dr. Vikas Kaushik is a thorough, personalised consultation that may include:

- Full Lagna (Ascendant) and planetary house analysis
- Strength assessment of each planet (Shadbala and positional strength)
- Divisional chart (Varga) analysis for specific life areas
- Current and upcoming Dasha (planetary period) interpretation
- Identification of key Yogas (auspicious and inauspicious planetary combinations)
- Marriage indicators (Saptamsha, 7th house analysis) for those seeking guidance on relationships
- Career and financial indicators (2nd, 6th, 10th house analysis)
- Remedial suggestions (Upayas) where appropriate

Kundli Reading is often the first step from which other consultations — including Vastu, Medical Astrology, and Pind Dan — are informed.`,
    whatItCovers: [
      'Full twelve-house and planetary analysis',
      'Divisional chart examination for specific life areas',
      'Dasha period forecasting',
      'Marriage and relationship compatibility indicators',
      'Career, finances, and health indicators',
      'Remedial Upayas suggestions',
    ],
    preparation: [
      'Have your date, time, and place of birth ready — accuracy of the birth time is particularly important',
      'Write down specific questions or concerns across the life areas you want to explore',
      'Be prepared for a detailed, thoughtful discussion rather than a quick prediction',
    ],
    faqs: [
      {
        q: 'How is a Kundli Reading different from a general Astrology consultation?',
        a: 'A Kundli Reading is focused specifically and deeply on your birth chart. A general astrology consultation may be broader and include transits, Prashna, or other techniques. Both are available; please discuss your needs when you contact Dr. Kaushik.',
      },
      {
        q: 'Can I get a Kundli Reading for my child?',
        a: 'Yes. Parent-requested Kundli readings for children are a traditional practice. Please contact Dr. Kaushik with the child\'s birth details.',
      },
      {
        q: 'Will my Kundli Reading be kept confidential?',
        a: 'Please discuss privacy expectations directly with Dr. Kaushik before your consultation.',
      },
    ],
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);

export default services;
