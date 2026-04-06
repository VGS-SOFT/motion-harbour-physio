export const clinic = {
  name: 'Motion Harbour Physio',
  tagline: 'Modern physiotherapy for pain relief, movement & confident return to life.',
  phone: '03 XXXX XXXX',
  email: 'hello@motionharbourphysio.com.au',
  address: 'Suite X, Level X, Collins Street, Melbourne VIC 3000',
  hours: [
    { day: 'Monday – Friday', time: '9:00 am – 6:30 pm' },
    { day: 'Saturday',        time: '9:00 am – 1:00 pm' },
    { day: 'Sunday',          time: 'Closed' },
  ],
};

export const services = [
  {
    icon: '🦴',
    title: 'Back & Neck Pain',
    description:
      'Hands-on assessment and evidence-based treatment for acute and chronic back and neck pain caused by desk work, lifting, or everyday strain.',
  },
  {
    icon: '⚡',
    title: 'Sports Injury Rehab',
    description:
      'From acute sprains to post-season recovery, we design rehab programs that get you back to training faster and reduce re-injury risk.',
  },
  {
    icon: '🦵',
    title: 'Knee & Shoulder Rehab',
    description:
      'Structured strength and mobility programs for knee and shoulder pain, whether from sport, surgery recovery, or gradual wear.',
  },
  {
    icon: '💼',
    title: 'Workplace & Postural Pain',
    description:
      'Targeted treatment for posture-related pain and repetitive strain injuries common in desk-based and physically demanding work environments.',
  },
];

export const conditions = [
  { label: 'Lower Back Pain',    desc: 'The most common reason Australians see a physiotherapist.' },
  { label: 'Neck Pain & Stiffness', desc: 'Linked to desk posture, stress, and poor sleep position.' },
  { label: 'Shoulder Impingement', desc: 'Reduced range of motion and pain when lifting your arm.' },
  { label: 'Knee Pain',           desc: 'Runner's knee, ligament strain, post-surgical rehab.' },
  { label: 'Hamstring Strains',   desc: 'Acute muscle tears and chronic tightness in athletes.' },
  { label: 'Sciatica',            desc: 'Radiating pain from the lower back into the leg.' },
];

export const therapist = {
  name: 'Ava Bennett',
  title: 'Physiotherapist & Clinic Director',
  credentials: 'BPhysio (Hons), APAM',
  bio: 'Ava Bennett works primarily with back pain, sports injuries, and strength-based rehabilitation for busy adults. Her approach combines hands-on assessment, targeted exercise therapy, and practical recovery plans designed to help patients move better, feel stronger, and return to training, work, and everyday life with confidence. She has over seven years of clinical experience across private practice and sports settings in Melbourne.',
  approach: ['Evidence-based treatment', 'Exercise-first philosophy', 'Clear communication', 'Flexible appointment times'],
};

export const fees = [
  { label: 'Initial Consultation (45 min)', price: '$120' },
  { label: 'Standard Appointment (30 min)',  price: '$95'  },
  { label: 'Extended Appointment (45 min)', price: '$120' },
  { label: 'Telehealth Consultation',       price: '$90'  },
];

export const rebates = [
  {
    title: 'Private Health Insurance',
    body: 'We offer on-the-spot HICAPS claiming for patients with eligible physiotherapy extras cover. Bring your health fund card to your appointment.',
  },
  {
    title: 'Medicare (GP Care Plan)',
    body: 'If your GP has issued a Chronic Disease Management (CDM) plan, you may be eligible for up to 5 allied health sessions per calendar year under Medicare.',
  },
  {
    title: 'WorkCover & DVA',
    body: 'We accept WorkCover and Department of Veterans' Affairs referrals. Please bring your claim number and referral paperwork to your first visit.',
  },
];

export const faqs = [
  {
    q: 'Do I need a GP referral to see a physiotherapist?',
    a: 'No — you can book directly without a referral. A referral is only required if you are attending under a Medicare GP Chronic Disease Management (CDM) plan, WorkCover, or DVA.',
  },
  {
    q: 'What should I bring to my first appointment?',
    a: 'Bring any relevant scans or reports (X-rays, MRI), your private health insurance card if claiming on the spot via HICAPS, any referral paperwork if applicable, and comfortable clothing that allows easy access to the area being treated.',
  },
  {
    q: 'Can I claim physiotherapy through my private health insurance?',
    a: 'Yes, if you have physiotherapy included in your extras cover. We use HICAPS, which means you only pay the gap on the day. Check your fund's rebate amount before your appointment.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'This varies depending on your condition and goals. Most patients with acute issues see significant improvement within 3–6 sessions. Your physiotherapist will give you a clearer picture after your initial assessment.',
  },
  {
    q: 'Do you offer telehealth appointments?',
    a: 'Yes. Telehealth appointments are available for exercise program reviews, follow-ups, and initial consultations where hands-on assessment is not required.',
  },
  {
    q: 'Is parking available near the clinic?',
    a: 'Yes, there is paid parking available nearby. We are also accessible via tram and train from the Melbourne CBD.',
  },
  {
    q: 'Can you help with chronic pain conditions?',
    a: 'Yes. We work with patients managing long-term pain conditions, including lower back pain, osteoarthritis, and post-surgical recovery, using an evidence-based, movement-focused approach.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'We ask for at least 24 hours notice for cancellations. Late cancellations or no-shows may incur a fee, as this time cannot be offered to other patients.',
  },
];
