import { Handle, Position } from "reactflow";

//custome node
function TextNode({ data, selected }) {
  return (
    <div
      className={`w-40  shadow-md rounded-md bg-yellow   ${
        selected ? "border-solid border-2 border-yellow-500/100" : "border-2 border-yellow-200/100"
      } `}
    >
      <div className="flex flex-col">
        <div className="max-h-max px-2 py-1 text-left text-white text-xs font-semibold rounded-t-md bg-yellow-900">
          ✉️ Send message
        </div>
        <div className="px-3 py-2 ">
          <div className="text-xs font-normal text-black">
            {data.label ?? "Text Node"}
          </div>
        </div>
      </div>

      <Handle
        id="a"
        type="target"
        position={Position.Left}
        className="w-1 rounded-full bg-yellow-500"
      />
      <Handle
        id="b"
        type="source"
        position={Position.Right}
        className="w-1 rounded-full bg-yellow-500"
      />
    </div>
  );
}

export default TextNode;
