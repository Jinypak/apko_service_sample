import Link from "next/link";

export default function Home() {
  return (
    <div className='max-w-[1280px] mx-auto'>
      메인 페이지
      <Link href='/about'>about으로</Link>
    </div>
  );
}


const mainPageLayout = "";
