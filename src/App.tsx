import React, { useState, useEffect } from "react";
import FloorPlan from "./components/FloorPlan";
import "./App.css";
import nodes from "./data/nodes";
import edges from "./data/edges";
import { bellmanFord } from "./utils/bellmanFord";

function App() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [path, setPath] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [nodeOptions, setNodeOptions] = useState<
    Array<{ id: string; name: string }>
  >([]);
  const [distance, setDistance] = useState<number | null>(null);

  // Initialize node options for dropdowns
  useEffect(() => {
    const options = nodes.map((node) => ({
      id: node.id,
      name: node.name || `Node ${node.id}`,
    }));
    setNodeOptions(options);
  }, []);

  const handleConfirm = () => {
    // Reset previous state
    setError(null);
    setPath([]);
    setDistance(null);

    // Validate inputs
    if (!start || !end) {
      setError("Please select start and end points");
      return;
    }

    if (start === end) {
      setError("Start and end points cannot be the same");
      return;
    }

    // Validate node existence
    const startNode = nodes.find((node) => node.id === start);
    const endNode = nodes.find((node) => node.id === end);

    if (!startNode || !endNode) {
      setError("Specified nodes do not exist");
      return;
    }

    // Call Bellman-Ford algorithm and get the result path
    const result = bellmanFord(nodes, edges, start, end);

    if (result.path.length === 0) {
      setError("Cannot find a path from start to end point");
      return;
    }

    setPath(result.path);

    // Calculate total distance
    let totalDistance = 0;
    for (let i = 0; i < result.path.length - 1; i++) {
      const edge = edges.find(
        (e) =>
          (e.source === result.path[i] && e.target === result.path[i + 1]) ||
          (e.source === result.path[i + 1] && e.target === result.path[i])
      );
      if (edge) {
        totalDistance += edge.weight;
      }
    }
    setDistance(totalDistance);
  };

  // Function to get room name by node ID
  const getRoomName = (nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId);
    return node?.name || nodeId;
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Auto Navigator
      </h1>

      {/* Input area for start and target points */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <select
          value={start}
          onChange={(e) => setStart(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select Start Point</option>
          {nodeOptions.map((node) => (
            <option key={`start-${node.id}`} value={node.id}>
              {node.id} - {node.name}
            </option>
          ))}
        </select>

        <select
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Select End Point</option>
          {nodeOptions.map((node) => (
            <option key={`end-${node.id}`} value={node.id}>
              {node.id} - {node.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleConfirm}
          style={{
            padding: "8px 16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Find Path
        </button>
      </div>

      {/* Error message display */}
      {error && (
        <div
          style={{
            color: "red",
            textAlign: "center",
            marginBottom: "10px",
            padding: "10px",
            backgroundColor: "#ffebee",
            borderRadius: "4px",
          }}
        >
          {error}
        </div>
      )}

      {/* Path results display */}
      {path.length > 0 && (
        <div
          style={{
            marginBottom: "20px",
            padding: "10px",
            backgroundColor: "#e8f5e9",
            borderRadius: "4px",
          }}
        >
          <h3>Shortest Path:</h3>
          <p>
            {path.map((nodeId, index) => (
              <span key={nodeId}>
                {getRoomName(nodeId)}
                {index < path.length - 1 ? " → " : ""}
              </span>
            ))}
          </p>
          {distance !== null && (
            <p>
              <strong>Total Distance:</strong> {distance} units
            </p>
          )}
        </div>
      )}

      {/* Pass the shortest path to the FloorPlan component */}
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <FloorPlan highlightedPath={path} />
      </div>

      <div
        style={{
          marginTop: "20px",
          fontSize: "0.8rem",
          color: "#666",
          textAlign: "center",
        }}
      >
        <p>
          Legend: Start Point (Green), End Point (Purple), Path Nodes (Blue),
          Other Nodes (Red)
        </p>
      </div>
    </div>
  );
}

export default App;
