import Image from "next/image";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import StartSessionBtn from "./StartSessionBtn";
import Separator from "../Separator";

const Heading = () => {
  return (
    <div className="w-full flex justify-between items-center h-24 border-b border-gray-800 pb-4">
      <div className="h-full flex items-center text-xl md:text-3xl">
        <FontAwesomeIcon icon={faArrowLeft} />
        <h1 className="flex ml-8">Instance Name</h1>
      </div>
      <div className="flex items-center text-xl md:text-3xl">
        <div className="hidden flex-col items-center justify-center sm:flex">
          <div className="">Node Moniker</div>
          <div className="text-sm text-textSecondary">sentsdfoj...axu6c</div>
          {/* this can be done using help of a parser */}
        </div>
        <Separator className="hidden sm:block" />
        <StartSessionBtn />
      </div>
      <div className="hidden lg:flex">
        <Image
          src="/sentinel.svg"
          height={150}
          width={150}
          alt="Sentinel Logo"
        />
      </div>
    </div>
  );
};

export default Heading;
