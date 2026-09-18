/* ─── Placeholder papers ─── */
const papers = [
  {
    id: 'sparse-determinants-2026',
    title: 'Multilinear Formula Lower Bounds for Sparse Determinants',
    authors: 'Pruthvi Boyapati, Suryajith Chillara, and Pratyush Vempati',
    venue: 'CCC 2026, held in Lisbon, Portugal',
    abstract:
      'Raz (2009) proved that multilinear formulas computing the determinant of a generic n × n matrix require size n^{Ω(log n)}. A fundamental question in understanding this lower bound is identifying which structural properties of the determinant drive this hardness. In pursuit of this question, we prove the existence of n × n symbolic matrices with only Θ(n log⁶ n) nonzero entries—reducing the variable count by a factor of n/log⁶ n—such that any multilinear formula computing their determinants still requires size n^{Ω(log n)}. Our construction uses rectangle sampling from the complete bipartite graph to generate sparse matrices that simultaneously maintain perfect matchings (ensuring nonzero determinant) while exhibiting diagonal imbalance under random vertex permutations—a geometric property we identify as the key driver of factor imbalance in Raz\'s framework. This demonstrates that Raz\'s partial derivatives method is remarkably robust to sparsification, and suggests that the fundamental source of multilinear hardness for determinant lies in expansion-like combinatorial structure rather than density. Our techniques combine concentration inequalities for dependent random variables with insights from random graph theory.',
    links: [
      { label: 'Conference Version', href: 'https://doi.org/10.4230/LIPIcs.CCC.2026.33' },
      { label: 'ECCC Preprint', href: 'https://eccc.weizmann.ac.il/report/2026/090/' },
    ],
  },
];

const Research = () => (
  <div className="page-content">
    <div className="page-wrap">

      <h1>Research</h1>

      <h2>Papers</h2>

      <ul className="paper-list">
        {papers.map(paper => (
          <li key={paper.id} className="paper-item" id={paper.id}>
            <p className="paper-title">{paper.title}</p>
            <p className="paper-meta">{paper.authors} &mdash; {paper.venue}</p>
            <p className="paper-abstract">{paper.abstract}</p>
            <div className="paper-links">
              {paper.links.map(link => (
                <a key={link.label} href={link.href}>[{link.label}]</a>
              ))}
            </div>
          </li>
        ))}
      </ul>

    </div>
  </div>
);

export default Research;
