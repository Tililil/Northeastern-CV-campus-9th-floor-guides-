// src/data/edges.ts
//后续标好教室加备注，细调
export interface Edge {
    source: string;
    target: string;
    weight: number;
}

const edges: Edge[] = [
    { source: 'B', target: 'C', weight: 6 },
    { source: 'C', target: 'B', weight: 6 },
    { source: 'C', target: 'D', weight: 2 },
    { source: 'D', target: 'C', weight: 2 },
    { source: 'D', target: 'E', weight: 5 },
    { source: 'E', target: 'D', weight: 5 },
    { source: 'E', target: 'M', weight: 15 },
    { source: 'M', target: 'E', weight: 15 },
    { source: 'E', target: 'K', weight: 15 },
    { source: 'K', target: 'E', weight: 15 },
    { source: 'K', target: 'M', weight: 3 },
    { source: 'M', target: 'K', weight: 3 },
    { source: 'A', target: 'B', weight: 5 },
    { source: 'B', target: 'A', weight: 5 },
    { source: 'A', target: 'M', weight: 13 },
    { source: 'M', target: 'A', weight: 13 },
    { source: 'A', target: 'G', weight: 6 },
    { source: 'G', target: 'A', weight: 6 },
    { source: 'G', target: 'F', weight: 6 },
    { source: 'F', target: 'G', weight: 6 },
    { source: 'F', target: 'H', weight: 6 },
    { source: 'H', target: 'F', weight: 6 },
    { source: 'H', target: 'M', weight: 20 },
    { source: 'M', target: 'H', weight: 20 },
    { source: 'H', target: 'I', weight: 18 },
    { source: 'I', target: 'H', weight: 18 },
    { source: 'L', target: 'J', weight: 5 },
    { source: 'J', target: 'L', weight: 5 },
    { source: 'M', target: 'J', weight: 8 },
    { source: 'J', target: 'M', weight: 8 },
    // 添加更多边信息...
];

export default edges;