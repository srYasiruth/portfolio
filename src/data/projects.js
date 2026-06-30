export const projects = [
  {
    id: 'rag-document-qa',
    eyebrow: 'PROJECT 01 / FEATURED',
    title: 'Sinhala + English Local RAG Document QA System',
    subtitle: 'A local-first retrieval pipeline for multilingual document question answering.',
    problem:
      'Most AI tooling treats Sinhala as an edge case. This project explores how to make document QA useful for Sinhala and English without depending on a remote LLM API.',
    impact:
      'The system turns PDFs and text documents into searchable knowledge, retrieves relevant chunks through vector similarity, and generates grounded answers with a local Ollama/Qwen model.',
    decisions: [
      'Local LLM deployment to keep documents private and reduce dependency on hosted APIs.',
      'ChromaDB-backed retrieval for fast iteration across chunking and embedding strategies.',
      'Full-stack interface so the project behaves like a usable product, not only a notebook.',
    ],
    metrics: [
      { value: 'LOCAL', label: 'Inference' },
      { value: 'SI + EN', label: 'Language scope' },
      { value: 'RAG', label: 'Architecture' },
      { value: 'Qwen', label: 'LLM runtime' },
    ],
    stack: ['Python', 'FastAPI', 'React', 'ChromaDB', 'Ollama', 'Qwen', 'Embeddings'],
    diagram: 'rag',
    links: [
      { label: 'GitHub pending', href: '', type: 'github' },
      { label: 'Demo pending', href: '', type: 'external' },
    ],
  },
  {
    id: 'disaster-detection',
    eyebrow: 'PROJECT 02 / RESEARCH',
    title: 'Real-Time Multimodal Disaster Detection Using Social Media',
    subtitle: 'A two-stage text + image pipeline for disaster classification and geospatial response.',
    problem:
      'Social media can surface early disaster signals, but the data is noisy, multimodal, and difficult to turn into reliable response intelligence.',
    impact:
      'The system combines text and visual cues, gates high-confidence disaster signals into a second-stage classifier, geocodes extracted locations, and supports dashboard-style monitoring.',
    decisions: [
      'Two-stage architecture separates broad disaster detection from finer-grained event classification.',
      'Stacking improved overall robustness by combining complementary model behavior.',
      'Geospatial enrichment makes the output more actionable for monitoring and response workflows.',
    ],
    metrics: [
      { value: '81.9%', label: 'Accuracy / Stacking' },
      { value: '84.2%', label: 'F1-Score / Stacking' },
      { value: '92.3%', label: 'Recall / Stacking' },
      { value: '95.3%', label: 'Stage B F1 / Text' },
    ],
    stack: ['Python', 'BERT', 'CNNs', 'Multimodal Fusion', 'scikit-learn', 'GeoPy', 'Leaflet.js'],
    diagram: 'disaster',
    links: [
      { label: 'GitHub pending', href: '', type: 'github' },
      { label: 'Dashboard pending', href: '', type: 'external' },
    ],
  },
];
