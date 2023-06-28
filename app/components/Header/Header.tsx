import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='border-b-2'>
      <div className={HeaderLayout}>
        <div>
          어플라이언스 코리아
          {/* <Image 
          src={'https://lh3.googleusercontent.com/vaAJIPoUUhmku2xWDIxe_mwowaZH5OEMKeGTd0nh2Yu32tboJFJvzdASckGVbA1eeGTX2p9a1idj-H9eVfiHTzCymKQO3ewWhbtvQ8uac6RxCIHolLBz=s0'}
          alt="어플라이언스 코리아"
          width={200}
          height={50}  
        /> */}
        </div>
        <div className={MenuBar}>
          <Link href='/manual' className={menuBtn}>
            매뉴얼
          </Link>
          <div className={menuBtn}>로그인</div>
          <div className={`${menuBtn} ${activeBtn}`}>회원가입</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// 헤더 레이아웃
const HeaderLayout =
  "flex justify-between items-center mx-auto max-w-[1280px] my-[20px] px-[20px]";

// 로고

// 메뉴바
const MenuBar = "hidden xl:flex min-w-[200px] justify-evenly items-center";

const menuBtn = "border-2 border-black rounded-md px-4 py-2 mx-[10px]";

const activeBtn = "bg-black text-white";
