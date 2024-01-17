import { NODES } from "@/constants/general";
import { ValueOf } from "@/types/general";

const NODE_VS_CONFIG = {
  [NODES.WIREGUARD]: "bg-tertiary text-textPrimary",
  [NODES.V2RAY]: "bg-primary text-textPrimary",
  [NODES.OPENVPN]: "bg-white text-primary",
};

const NodeUsedItem = ({ value }: { value: ValueOf<typeof NODES> }) => {
  const className = NODE_VS_CONFIG[value];
  return (
    <div
      className={`p-1 w-20 flex justify-center items-center text-ellipsis rounded-sm ${className}`}
    >
      {value}
    </div>
  );
};

export default NodeUsedItem;
