// Edit this file to change the business name, contact details, prices and FAQ.
export const SITE = {
  name: 'IsoForm Studio',
  tagline: 'Your building plan, as a 3D model you can walk around.',
  city: 'Chennai, Tamil Nadu',
  phone: '+91 86819 62167',
  whatsapp: '918681962167',
  email: 'manikandan.annadurai@outlook.com',
};

export const STEPS = [
  { title: 'Send your plan', text: 'Share the floor plan as a PDF, CAD file or even a phone photo of the drawing. One page per floor is enough.' },
  { title: 'We model every floor', text: 'We build walls, doors, windows, stairs and furniture to the dimensions on your plan, floor by floor.' },
  { title: 'Review together', text: 'You get a private link. Rotate it, open each floor, switch day and evening lighting, and tell us what to change.' },
  { title: 'Share and approve', text: 'Use the final link with family, the bank or your buyers. It opens on any phone or laptop, with no app to install.' },
];

export const AUDIENCES = [
  {
    who: 'Homeowners',
    lead: 'See your house before the first brick.',
    points: ['Check room sizes and furniture fit', 'Agree on layout with family before construction', 'Spot problems while changes are still free'],
  },
  {
    who: 'Builders & promoters',
    lead: 'Sell flats and villas off-plan with confidence.',
    points: ['Interactive model for every unit type', 'Share one link on WhatsApp, Instagram and your website', 'Bulk pricing for projects with many plans'],
  },
  {
    who: 'Architects & engineers',
    lead: 'Present designs your clients understand.',
    points: ['Turn approved drawings into a client-ready model', 'Your firm name and logo on the viewer', 'Fast turnaround for revisions'],
  },
];

export const PLANS = [
  { name: 'Single floor', price: '₹2,999', unit: 'per floor', featured: false,
    items: ['Walls, doors and windows to plan size', 'Basic furniture layout', 'Room labels and areas', '1 round of changes', 'Delivered in 3 days'] },
  { name: 'Complete house', price: '₹7,999', unit: 'up to G+2 with terrace', featured: true,
    items: ['Every floor plus terrace', 'Exterior with compound wall and gate', 'Detailed furniture and finishes', 'Day and evening lighting', '3 rounds of changes', 'Delivered in 5 days'] },
  { name: 'Builder projects', price: 'Custom', unit: 'per project', featured: false,
    items: ['Apartments, villas and layouts', 'Your branding on every viewer', 'Unit-wise models for sales teams', 'Priority turnaround', 'Volume discounts'] },
];

export const FAQ = [
  { q: 'What do I need to send?', a: 'A floor plan for each level with dimensions marked. A PDF from your engineer is ideal, but a clear photo of the printed plan also works.' },
  { q: 'How accurate is the model?', a: 'Rooms, walls and stairs follow the dimensions on your plan. Furniture, colours and finishes are indicative unless you tell us your choices.' },
  { q: 'Can my family view it on a phone?', a: 'Yes. The model opens in any modern browser on phones, tablets and laptops. You can rotate, zoom and switch floors with your fingers.' },
  { q: 'Can I ask for changes?', a: 'Yes. Each package includes revision rounds. Change paint colours, flooring, furniture or even move a door, and we update the same link.' },
  { q: 'Is my plan kept private?', a: 'Your plan and model are only shared through a private link that you control. We show projects in our gallery only with your permission.' },
];
