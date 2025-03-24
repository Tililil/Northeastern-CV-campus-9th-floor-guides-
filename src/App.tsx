import FloorPlan from './components/FloorPlan';
import './App.css';
import nodes from './data/nodes';
import edges from './data/edges';
import { bellmanFord } from './utils/bellmanFord';
import {useState} from "react";


function App() {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [path, setPath] = useState<string[]>([]);

    const handleConfirm = () => {
        // 这里调用 bellmanFord 算法，并获取结果路径
        const result = bellmanFord(nodes, edges, start, end);
        setPath(result.path);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Auto Navigator</h1>
            {/* 输入出发点和目标点的区域 */}
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="出发点"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <input
                    type="text"
                    placeholder="目标点"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    style={{ marginRight: '10px' }}
                />
                <button onClick={handleConfirm}>确定</button>
            </div>
            {/* 将最短路径传递给 FloorPlan 组件 */}
            <FloorPlan highlightedPath={path} />
        </div>
    );
}

export default App;
