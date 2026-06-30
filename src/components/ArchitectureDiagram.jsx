const diagrams = {
  rag: [
    ['Document', 20, 58],
    ['Chunking', 176, 58],
    ['Embedding', 332, 58],
    ['ChromaDB', 488, 58],
    ['Retrieval', 644, 58],
    ['Qwen Answer', 800, 58],
  ],
  disaster: [
    ['Ingestion', 20, 34],
    ['Preprocess', 174, 34],
    ['Stage A Fusion', 328, 34],
    ['Gate', 482, 34],
    ['Stage B Fusion', 636, 34],
    ['Geo Dashboard', 790, 34],
  ],
};

export function ArchitectureDiagram({ type }) {
  const nodes = diagrams[type] || diagrams.rag;

  return (
    <svg className="architecture-diagram" viewBox="0 0 940 140" role="img" aria-label={`${type} architecture flow`}>
      <defs>
        <marker id={`arrow-${type}`} markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
          <path d="M0,0 L6,4 L0,8 Z" fill="var(--accent-blue-bright)" />
        </marker>
      </defs>
      {nodes.slice(0, -1).map((node, index) => {
        const next = nodes[index + 1];
        return (
          <path
            key={`${node[0]}-${next[0]}`}
            className="diagram-link"
            d={`M${node[1] + 118} ${node[2] + 24} C ${node[1] + 135} ${node[2] + 24}, ${next[1] - 15} ${next[2] + 24}, ${next[1]} ${next[2] + 24}`}
            markerEnd={`url(#arrow-${type})`}
          />
        );
      })}
      {nodes.map(([label, x, y], index) => (
        <g className={`diagram-node ${index === nodes.length - 1 ? 'is-output' : ''}`} key={label} transform={`translate(${x} ${y})`}>
          <rect width="118" height="48" rx="8" />
          <text x="59" y="30" textAnchor="middle">
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}
