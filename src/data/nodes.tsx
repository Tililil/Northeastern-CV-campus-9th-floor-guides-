// src/data/nodes.js
//node 信息
export interface Node {
    id: string;
    x: number;
    y: number;
    name: string;
}
// 定义节点信息，每个节点包含 id, 坐标 (x, y) 以及名称


// 定义节点信息，每个节点包含 id, 坐标 (x, y) 以及名称
const nodes = [
    { id: 'A', x: 250, y: 350, name: '905C' },
    { id: 'B', x: 250, y: 400, name: '905B' },
    { id: 'C', x: 250, y: 490, name: '903' },
    { id: 'D', x: 220, y: 520, name: '905A' },
    { id: 'E', x: 250, y: 650, name: '902' },
    { id: 'F', x: 250, y: 170, name: '906' },
    { id: 'G', x: 250, y: 277, name: '906' },
    { id: 'H', x: 300, y: 70, name: 'Office' },
    { id: 'I', x: 995, y: 150, name: '912' },
    { id: 'J', x: 950, y: 430, name: '916' },
    { id: 'K', x: 760, y: 600, name: '916' },
    { id: 'L', x: 995, y: 300, name: '913' },
    { id: 'M', x: 670, y: 520, name: 'elev' },
    { id: 'N', x: 670, y: 400, name: 'T1' },
    { id: 'O', x: 670, y: 600, name: 'T2' },
    { id: 'P', x: 550, y: 765, name: 'T3' },
    { id: 'Q', x: 850, y: 765, name: 'T4' },
    { id: 'R', x: 670, y: 60, name: 'T5' },
    // ...更多节点
];

// const r = 62;
// const nodes = [
//     { id: 'A', x: 4*r, y: 22*r, name: '905C' },
//     { id: 'B', x: 4*r, y: 24*r, name: '905B' },
//     { id: 'C', x: 4*r, y: 31*r, name: '903' },
//     { id: 'D', x: 4*r, y: 33*r, name: '905A' },
//     { id: 'E', x: 4*r, y: 42*r, name: '902' },
//     { id: 'F', x: 4*r, y: 9*r, name: '906' },
//     { id: 'G', x: 4*r, y: 16*r, name: '906' },
//     { id: 'H', x: 12*r, y: 1*r, name: 'Office' },
//     { id: 'I', x: 56*r, y: 5*r, name: '912' },
//     { id: 'J', x: 51*r, y: 26*r, name: '916' },
//     { id: 'K', x: 26*r, y: 33*r, name: '916' },
//     { id: 'L', x: 56*r, y: 15*r, name: '913' },
//     { id: 'M', x: 32*r, y: 28*r, name: 'elev' },
//     // ...更多节点
// ];

export default nodes;