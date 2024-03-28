
export default function Sidebar({
  nodeName,
  setNodeName,
  selectedNode,
  setSelectedElements,
}) {
  const handleInputChange = (event) => {
    setNodeName(event.target.value);
  };
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="border-r-2 border-yellow-500 p-4 text-sm bg-yellow-200 w-64 h-screen text-black">
      {selectedNode ? (
        //settings panel
        <div>
          <h3 className="text-xl mb-2 text-yellow-900">Update Node</h3>
          <label className="block mb-2 text-sm font-medium text-yellow-900">
            Node Name:
          </label>
          <input
            type="text"
            className="block w-full pt-2 px-3 pb-3 text-yellow-700 border border-yellow-500 rounded-lg bg-white focus:outline-none focus:border-yellow-500"
            value={nodeName}
            onChange={handleInputChange}
          />
          <button
            className="mt-4 bg-yellow-500 text-white rounded p-2 hover:bg-yellow-600"
            onClick={() => setSelectedElements([])}
          >
            Go Back
          </button>
        </div>
      ) : (
        //node panel
        <>
          <h3 className="text-xl mb-4 text-yellow-900">Nodes Panel</h3>
          <div
            className="bg-white p-3 border-2 border-yellow-500 rounded cursor-move flex justify-center items-center text-yellow-500 hover:bg-gray-500 hover:text-white transition-colors duration-200"
            onDragStart={(event) => onDragStart(event, "textnode")}
            draggable
          >
            Message Node
          </div>
        </>
      )}
    </aside>
  );
}