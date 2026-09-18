/* ─── Resources Data ─── */
const notes = [
  {
    id: 'note-1',
    title: '[Topic or Course Notes Title]',
    subtitle: '[Course / Workshop / Self-study], [Year]',
    description:
      'Brief description or overview of what these notes cover (e.g., key theorems, lecture summaries, or survey notes).',
    links: [
      { label: 'PDF', href: '#' },
      { label: 'LaTeX', href: '#' },
    ],
  },
  {
    id: 'note-2',
    title: '[Another Topic Notes Title]',
    subtitle: '[Topic / Area], [Year]',
    description:
      'Short summary of the concepts, proofs, or references compiled in these notes.',
    links: [
      { label: 'PDF', href: '#' },
    ],
  },
];

const ppts = [
  {
    id: 'ppt-1',
    title: '[Talk or Presentation Title]',
    venue: '[Seminar / Reading Group / Conference], [Year]',
    description:
      'Slides covering [topic, paper, or research work]. Presented at [occasion/group].',
    links: [
      { label: 'Slides', href: '#' },
      { label: 'PDF', href: '#' },
    ],
  },
  {
    id: 'ppt-2',
    title: '[Another Presentation Title]',
    venue: '[Event / Course], [Year]',
    description:
      'Presentation on [topic].',
    links: [
      { label: 'Slides', href: '#' },
    ],
  },
];

const videos = [
  {
    id: 'video-1',
    title: '[Talk / Lecture Title]',
    venue: '[Conference / YouTube / Workshop], [Year]',
    description:
      'Recording of the talk given on [topic or paper].',
    links: [
      { label: 'Video', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
  },
];

const externalResources = [
  {
    id: 'ext-1',
    title: '[Survey / Book / Course / Blog Title]',
    author: '[Author(s) or Institution]',
    description:
      'A recommended resource for studying [topic or area].',
    links: [
      { label: 'Link', href: '#' },
    ],
  },
  {
    id: 'ext-2',
    title: '[Another External Resource Title]',
    author: '[Author / Source]',
    description:
      'Useful survey or reference material on [topic].',
    links: [
      { label: 'Website', href: '#' },
    ],
  },
];

const ResourceSection = ({ title, items, metaField = 'venue' }) => (
  <>
    <h2>{title}</h2>
    <ul className="paper-list">
      {items.map(item => (
        <li key={item.id} className="paper-item" id={item.id}>
          <p className="paper-title">{item.title}</p>
          <p className="paper-meta">
            {item[metaField] || item.subtitle || item.author}
          </p>
          <p className="paper-abstract">{item.description}</p>
          <div className="paper-links">
            {item.links.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                [{link.label}]
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </>
);

const Resources = () => (
  <div className="page-content">
    <div className="page-wrap">
      <h1>Resources</h1>
      <p> Under construction </p>
      {/* <ResourceSection title="Notes" items={notes} metaField="subtitle" />
      <ResourceSection title="PPTs & Presentations" items={ppts} metaField="venue" />
      <ResourceSection title="Videos" items={videos} metaField="venue" />
      <ResourceSection title="External Resources" items={externalResources} metaField="author" /> */}
    </div>
  </div>
);

export default Resources;
