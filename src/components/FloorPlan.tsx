import floor9 from "../components/9th.jpg";
import nodes from "../data/nodes";
import edges from "../data/edges";
import React from "react";

interface FloorPlanProps {
  highlightedPath?: string[];
}

const FloorPlan: React.FC<FloorPlanProps> = ({ highlightedPath = [] }) => {
  // Function to get consecutive pairs for path visualization
  const getPathPairs = () => {
    const pairs = [];
    for (let i = 0; i < highlightedPath.length - 1; i++) {
      pairs.push({
        source: highlightedPath[i],
        target: highlightedPath[i + 1],
      });
    }
    return pairs;
  };

  // Find nodes by ID
  const findNode = (id: string) => {
    return nodes.find((node) => node.id === id);
  };

  // Determine if an edge is part of the highlighted path
  const isEdgeInPath = (source: string, target: string) => {
    const pathPairs = getPathPairs();
    return pathPairs.some(
      (pair) =>
        (pair.source === source && pair.target === target) ||
        (pair.source === target && pair.target === source)
    );
  };

  return (
    <div
      style={{
        position: "relative",
        width: "1200px",
        height: "800px",
        background: `url(${floor9}) no-repeat center/cover`,
        border: "1px solid #ccc",
        overflow: "hidden",
      }}
    >
      {/* Draw edges */}
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {edges.map((edge, index) => {
          const sourceNode = findNode(edge.source);
          const targetNode = findNode(edge.target);

          if (!sourceNode || !targetNode) return null;

          const isHighlighted = isEdgeInPath(edge.source, edge.target);

          return (
            <line
              key={`${edge.source}-${edge.target}-${index}`}
              x1={sourceNode.x}
              y1={sourceNode.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke={isHighlighted ? "#0066ff" : "#dddddd"}
              strokeWidth={isHighlighted ? 3 : 1}
              strokeOpacity={isHighlighted ? 1 : 0.5}
              strokeDasharray={isHighlighted ? "none" : "4,4"}
            />
          );
        })}
      </svg>

      {/* Draw nodes */}
      {nodes.map((node) => {
        const isHighlighted = highlightedPath.includes(node.id);
        const isEndpoint =
          highlightedPath.length > 0 &&
          (node.id === highlightedPath[0] ||
            node.id === highlightedPath[highlightedPath.length - 1]);

        return (
          <div
            key={node.id}
            style={{
              position: "absolute",
              top: node.y,
              left: node.x,
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              zIndex: isHighlighted ? 2 : 1,
            }}
            title={node.name}
          >
            <div
              style={{
                width: isEndpoint ? "16px" : "10px",
                height: isEndpoint ? "16px" : "10px",
                backgroundColor: isEndpoint
                  ? node.id === highlightedPath[0]
                    ? "green"
                    : "purple"
                  : isHighlighted
                  ? "#0066ff"
                  : "red",
                borderRadius: "50%",
                border: isHighlighted ? "2px solid white" : "none",
                boxShadow: isHighlighted ? "0 0 5px rgba(0,0,0,0.5)" : "none",
              }}
            />
            <span
              style={{
                marginLeft: "4px",
                fontSize: "12px",
                color: isHighlighted ? "#0066ff" : "#333",
                fontWeight: isHighlighted ? "bold" : "normal",
                backgroundColor: isHighlighted
                  ? "rgba(255,255,255,0.7)"
                  : "transparent",
                padding: isHighlighted ? "2px 4px" : "0",
                borderRadius: "2px",
              }}
            >
              {node.id} {node.name ? `(${node.name})` : ""}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FloorPlan;
