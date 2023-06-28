import React from "react";
import ManualList from "../components/manual/ManualList";

type Props = {};

const page = (props: Props) => {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <ManualList />
    </div>
  );
};

export default page;
