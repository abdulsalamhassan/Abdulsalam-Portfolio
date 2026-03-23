interface ArchitectureDiagramProps {
  nodes: string[];
}

export function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  if (nodes.length === 0) {
    return null;
  }

  const isDroughtGuard = nodes[0] === "User" || nodes.includes("Claude API");

  if (isDroughtGuard) {
    return (
      <div className="diagram diagram-droughtguard" aria-label="Project architecture diagram">
        <div className="diagram-row diagram-row-top">
          <div className="diagram-box">Next.js UI</div>
          <span className="diagram-arrow diagram-arrow-horizontal">→</span>
          <div className="diagram-box">FastAPI Back</div>
        </div>
        <div className="diagram-row diagram-row-center">
          <div className="diagram-vertical">
            <span className="diagram-arrow">↓</span>
          </div>
        </div>
        <div className="diagram-row diagram-row-center">
          <div className="diagram-box">Claude API</div>
        </div>
        <div className="diagram-row diagram-row-center">
          <div className="diagram-vertical">
            <span className="diagram-arrow">↓</span>
          </div>
        </div>
        <div className="diagram-row diagram-row-center">
          <div className="diagram-box">PostgreSQL</div>
        </div>
      </div>
    );
  }

  return (
    <div className="diagram" aria-label="Project architecture diagram">
      <div className="diagram-row">
        {nodes.slice(0, 3).map((node, index, arr) => (
          <div key={node} className="diagram-pair">
            <div className="diagram-box">{node}</div>
            {index < arr.length - 1 ? <span className="diagram-arrow">→</span> : null}
          </div>
        ))}
      </div>
      {nodes[3] ? (
        <div className="diagram-row">
          <span className="diagram-arrow">↓</span>
          <div className="diagram-box">{nodes[3]}</div>
          {nodes[4] ? (
            <>
              <span className="diagram-arrow">↓</span>
              <div className="diagram-box">{nodes[4]}</div>
            </>
          ) : null}
        </div>
      ) : null}
      {nodes[5] ? (
        <div className="diagram-row">
          <span className="diagram-arrow">↓</span>
          <div className="diagram-box">{nodes[5]}</div>
        </div>
      ) : null}
    </div>
  );
}
