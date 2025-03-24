import floor9 from '../components/9th.jpg';
import nodes from '../data/nodes';

interface FloorPlanProps {
    highlightedPath?: string[];
}

// 图片大小，节点颜色以及大小
const FloorPlan: React.FC<FloorPlanProps> = ({ highlightedPath = [] }) => {
    return (
        <div
            style={{
                position: 'relative',
                width: '1200px', //别改，改了会死
                height: '800px', //别改，改了会死
                background: `url(${floor9}) no-repeat center/cover`,
                border: '1px solid #ccc',
            }}
        >
            {nodes.map((node) => {
                const isHighlighted = highlightedPath.includes(node.id);
                return (
                    <div
                        key={node.id}
                        style={{
                            position: 'absolute',
                            top: node.y,
                            left: node.x,
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        title={node.name}
                    >
                        <div
                            style={{
                                width: '10px',
                                height: '10px',
                                backgroundColor: isHighlighted ? 'blue' : 'red', // 高亮节点用蓝色
                                borderRadius: '50%',
                            }}
                        />
                        <span style={{ marginLeft: '4px', fontSize: '12px', color: '#333' }}>
              {node.id}
            </span>
                    </div>
                );
            })}
            {/* 如果需要绘制边连接，可以考虑使用 SVG 实现 */}
        </div>
    );
};

export default FloorPlan;
