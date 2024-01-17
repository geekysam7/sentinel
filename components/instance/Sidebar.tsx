import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import {
  INSTANCE_ACTIVITY,
  INSTANCE_ACTIVITY_LIST,
} from "@/constants/instance";

import { ValueOf } from "@/types/general";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState<
    ValueOf<typeof INSTANCE_ACTIVITY>
  >(INSTANCE_ACTIVITY.SESSION_HISTORY);

  return (
    <div className="hidden p-4 xl:flex rounded-lg bg-bgCardSidebar w-96 min-w-96 mt-8 mr-4">
      <div className="flex flex-col w-full">
        <div className="flex flex-col text-textSecondary">
          <div className="flex items-center p-3 border-b border-gray-800">
            <div className="w-24">IP Address</div>
            <div className="px-4">:</div>
            <div className="flex justify-start text-textPrimary">
              136.251.15.107
            </div>
          </div>
          <div className="flex items-center p-3 border-b border-gray-800">
            <div className="w-24">Country</div>
            <div className="px-4">:</div>
            <div className="flex justify-start text-textPrimary">USA</div>
          </div>
        </div>
        <ul className="mt-4">
          {INSTANCE_ACTIVITY_LIST.map(({ label, icon }) => (
            <button
              key={label}
              className={`w-full flex justify-between items-center p-3 py-4 text-textSecondary bg-bgCardSidebarItem rounded-lg mt-4 
              ${
                selectedItem === label
                  ? "outline outline-offset-2 outline-1 outline-secondary"
                  : ""
              }
              `}
              onClick={() => setSelectedItem(label)}
            >
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-tertiary w-8 h-8 flex justify-center items-center text-textPrimary">
                  <FontAwesomeIcon icon={icon} size={"xs"} />
                </div>
                <h3>{label}</h3>
              </div>
              <FontAwesomeIcon icon={faChevronRight} size={"1x"} />
            </button>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
