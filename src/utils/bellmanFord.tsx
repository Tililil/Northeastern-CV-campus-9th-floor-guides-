// 定义返回结果的接口
export interface Node {
    id: string;
    x?: number;
    y?: number;
    name?: string;
}
export interface Edge {
    source: string;
    target: string;
    weight: number;
}


export interface BellmanFordResult {
    path: string[];
    distance: Record<string, number>;
}

/**
 * 使用 Bellman-Ford 算法计算最短路径
 *
 * @param nodes - 节点数组，每个节点至少包含 id 属性
 * @param edges - 边数组，每个边包含 source、target 和 weight 属性
 * @param start - 起点节点的 id
 * @param end - 终点节点的 id
 * @returns 返回包含最短路径数组（path）及各节点最短距离（distance）的对象
 */
export function bellmanFord(
    nodes: Node[],
    edges: Edge[],
    start: string,
    end: string
): BellmanFordResult {
    // 初始化：所有节点距离为 Infinity，起点为 0
    const distance: Record<string, number> = {};
    const predecessor: Record<string, string | null> = {};

    nodes.forEach(node => {
        distance[node.id] = Infinity;
        predecessor[node.id] = null;
    });
    distance[start] = 0;

    // 进行 |nodes| - 1 轮的松弛操作
    for (let i = 0; i < nodes.length - 1; i++) {
        edges.forEach(edge => {
            const { source, target, weight } = edge;
            if (distance[source] !== Infinity && distance[source] + weight < distance[target]) {
                distance[target] = distance[source] + weight;
                predecessor[target] = source;
            }
        });
    }

    // 检查是否存在负权重环
    for (const edge of edges) {
        const { source, target, weight } = edge;
        if (distance[source] !== Infinity && distance[source] + weight < distance[target]) {
            console.error("图中存在负权重环");
            return { path: [], distance };
        }
    }

    // 从终点回溯构造路径
    const path: string[] = [];
    let current: string | null = end;
    while (current !== null) {
        path.push(current);
        current = predecessor[current];
    }
    path.reverse();

    // 如果起点不在路径首位，则说明无法到达终点
    if (path[0] !== start) {
        console.warn("无法从起点到达终点");
        return { path: [], distance };
    }

    return { path, distance };
}
