// src/data/edges.ts
//后续标好教室加备注，细调
export interface Edge {
    source: string;
    target: string;
    weight: number;
}
const r = 45;
const edges: Edge[] = [
    // Left Hand Side
    { source: 'A', target: 'B', weight: 2 },
    { source: 'B', target: 'A', weight: 2 },
    { source: 'B', target: 'C', weight: 16 },
    { source: 'C', target: 'B', weight: 16 },
    { source: 'C', target: 'D', weight: 2 },
    { source: 'D', target: 'C', weight: 2 },
    { source: 'D', target: 'E', weight: 19 },
    { source: 'E', target: 'D', weight: 19 },
    { source: 'A', target: 'G', weight: 15 },
    { source: 'G', target: 'A', weight: 15 },
    { source: 'G', target: 'F', weight: 15 },
    { source: 'F', target: 'G', weight: 15 },
    { source: 'F', target: 'H', weight: 25 },
    { source: 'H', target: 'F', weight: 25 },

    // Right Hand Side
    { source: 'I', target: 'L', weight: 10 },
    { source: 'L', target: 'I', weight: 10 },
    { source: 'L', target: 'J', weight: 16 },
    { source: 'J', target: 'L', weight: 16 },

    // From elevator(M)
    { source: 'M', target: 'O', weight: 5 },
    { source: 'O', target: 'M', weight: 5 },
    { source: 'M', target: 'N', weight: 5 },
    { source: 'N', target: 'M', weight: 5 },

    // From short-cut1(N)
    { source: 'N', target: 'A', weight: 29 },
    { source: 'A', target: 'N', weight: 29 },
    { source: 'N', target: 'B', weight: 29 },
    { source: 'B', target: 'N', weight: 29 },
    { source: 'N', target: 'R', weight: 23 },
    { source: 'R', target: 'N', weight: 23 },
    //{ source: 'N', target: 'L', weight: 32 },
    //{ source: 'L', target: 'N', weight: 32 },
    { source: 'N', target: 'J', weight: 22 },
    { source: 'J', target: 'N', weight: 22 },

    // From short-cut2(O)
    { source: 'O', target: 'K', weight: 6 },
    { source: 'K', target: 'O', weight: 6 },
    { source: 'O', target: 'P', weight: 19 },
    { source: 'P', target: 'O', weight: 19 },
    { source: 'O', target: 'Q', weight: 21 },
    { source: 'Q', target: 'O', weight: 21 },

    // From short-cut3(P)
    { source: 'P', target: 'E', weight: 43 },
    { source: 'E', target: 'P', weight: 43 },
    { source: 'P', target: 'Q', weight: 25 },
    { source: 'Q', target: 'P', weight: 25 },

    // From short-cut4(Q)
    { source: 'Q', target: 'J', weight: 44 },
    { source: 'J', target: 'Q', weight: 44 },
    { source: 'Q', target: 'K', weight: 15 },
    { source: 'K', target: 'Q', weight: 15 },
    { source: 'Q', target: 'L', weight: 44 },
    { source: 'L', target: 'Q', weight: 44 },

    // From short-cut5(R)
    { source: 'R', target: 'H', weight: 20 },
    { source: 'H', target: 'R', weight: 20 },
    { source: 'R', target: 'I', weight: 29 },
    { source: 'I', target: 'R', weight: 29 },

    // 添加更多边信息...
];

export default edges;