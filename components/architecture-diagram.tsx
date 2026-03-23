interface ArchitectureDiagramProps {
  nodes: string[];
}

export function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  if (nodes.length === 0) {
    return null;
  }

  return (
    <div className="diagram" aria-label="Project architecture diagram">
      <div className="diagram-row">
        {nodes.slice(0, 4).map((node, index, arr) => (
          <div key={node} className="flex items-center gap-2">
            <div className="diagram-box">{node}</div>
            {index < arr.length - 1 ? <span className="diagram-arrow">→</span> : null}
          </div>
        ))}
      </div>
      {nodes.length > 4 ? (
        <div className="diagram-row">
          <span className="diagram-arrow">↓</span>
          <div className="diagram-box">{nodes[4]}</div>
          {nodes[5] ? (
            <>
              <span className="diagram-arrow">↓</span>
              <div className="diagram-box">{nodes[5]}</div>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
