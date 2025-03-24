// src/data/nodes.js
//node 信息
export interface Node {
    id: string;
    x: number;
    y: number;
    name: string;
}
// 定义节点信息，每个节点包含 id, 坐标 (x, y) 以及名称
const nodes = [
    { id: 'A', x: 250, y: 350, name: '915' },
    { id: 'B', x: 250, y: 400, name: '916' },
    { id: 'C', x: 250, y: 490, name: '916' },
    { id: 'D', x: 220, y: 520, name: '916' },
    { id: 'E', x: 250, y: 650, name: '房间C' },
    { id: 'F', x: 250, y: 170, name: '房间C' },
    { id: 'G', x: 250, y: 277, name: '房间C' },
    { id: 'H', x: 300, y: 70, name: '916' },
    { id: 'I', x: 995, y: 150, name: '916' },
    { id: 'J', x: 950, y: 430, name: '916' },
    { id: 'K', x: 760, y: 600, name: '916' },
    { id: 'L', x: 995, y: 300, name: '916' },
    { id: 'M', x: 670, y: 520, name: 'elev' },
    // ...更多节点
];

export default nodes;