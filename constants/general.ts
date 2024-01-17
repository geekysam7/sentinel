const NODES = {
  WIREGUARD: "Wireguard",
  V2RAY: "V2Ray",
  OPENVPN: "OpenVPN",
} as const;

const NODE_VS_CONFIG = {
  [NODES.WIREGUARD]: "bg-tertiary text-textPrimary",
  [NODES.V2RAY]: "bg-tertiary text-textPrimary",
  [NODES.OPENVPN]: "bg-tertiary text-textPrimary",
};

export { NODES, NODE_VS_CONFIG };
