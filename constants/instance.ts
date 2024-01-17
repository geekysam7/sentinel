import {
  faCircleNodes,
  faServer,
  faClock,
  faUserPlus,
  faCircleDot,
  faSquarePen,
} from "@fortawesome/free-solid-svg-icons";

const INSTANCE_ACTIVITY = {
  NODE_OVERVIEW: "Node Overview",
  DVPN_EARNINGS: "DVPN Earnings",
  SESSION_HISTORY: "Session History",
  SUBSCRIPTION_HISTORY: "Subscription History",
  BANDWIDTH_USAGE: "Bandwidth Usage",
  EDIT_NODE_CONFIGURATION: "Edit Node Configuration",
} as const;

const CHEVRON_ICON = "fa-solid fa-chevron-right";

const INSTANCE_ACTIVITY_LIST = [
  {
    label: INSTANCE_ACTIVITY.NODE_OVERVIEW,
    icon: faCircleNodes,
  },
  {
    label: INSTANCE_ACTIVITY.DVPN_EARNINGS,
    icon: faServer,
  },
  {
    label: INSTANCE_ACTIVITY.SESSION_HISTORY,
    icon: faClock,
  },
  {
    label: INSTANCE_ACTIVITY.SUBSCRIPTION_HISTORY,
    icon: faUserPlus,
  },
  {
    label: INSTANCE_ACTIVITY.BANDWIDTH_USAGE,
    icon: faCircleDot,
  },
  {
    label: INSTANCE_ACTIVITY.EDIT_NODE_CONFIGURATION,
    icon: faSquarePen,
  },
] as const;

export { INSTANCE_ACTIVITY_LIST, INSTANCE_ACTIVITY, CHEVRON_ICON };
