import Link from "next/link";
import React from "react";

type Props = {
  type: string;
};

const SubManualList = (props: Props) => {
  if (props.type === "hsm") {
    return (
      <div>
        <ul className="flex w-full justify-evenly ">
          <li className="border-b-2 hover:border-black transition py-[10px] text-[16px] hover:font-bold w-[20%] text-center cursor-pointer">
            <Link href='hsm/sa5'>SA5</Link>
          </li>
          <li className="border-b-2 hover:border-black transition py-[10px] text-[16px] hover:font-bold w-[20%] text-center cursor-pointer">
            <Link href='hsm/sa7'>SA7</Link>
          </li>
          <li className="border-b-2 hover:border-black transition py-[10px] text-[16px] hover:font-bold w-[20%] text-center cursor-pointer">
            <Link href='hsm/migration'>Migration</Link>
          </li>
          <li className="border-b-2 hover:border-black transition py-[10px] text-[16px] hover:font-bold w-[20%] text-center cursor-pointer">
            <Link href='hsm/error'>Error</Link>
          </li>
        </ul>
      </div>
    );
  }
  if (props.type === "netapp") {
    return <div>SubManualList {props.type}</div>;
  }

  else {
    return <></>
  }
};

export default SubManualList;
