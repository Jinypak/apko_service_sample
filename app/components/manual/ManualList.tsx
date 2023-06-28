import Link from "next/link";
import React from "react";

type Props = {};

const ManualList = (props: Props) => {
  return (
    <div>
      <ul className='flex'>
        <li className=''>
          <Link href='manual/netapp'>NETAPP 매뉴얼</Link>
        </li>
        <li>
          <Link href='manual/hsm'>HSM 매뉴얼</Link>
        </li>
      </ul>
    </div>
  );
};

export default ManualList;
