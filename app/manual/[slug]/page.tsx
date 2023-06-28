import SubManualList from "@/app/components/manual/SubManualList";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  if (params.slug === "hsm" || params.slug === "netapp") {
    return (
      <div className='max-w-[1280px] mx-auto'>
        <SubManualList type={params.slug} />
        <Link href='/manual'>상위로 돌아가기</Link>
      </div>
    );
  } else
    return (
      <div className='max-w-[1280px] mx-auto'>
        <h1>잘못된 접근입니다.</h1>
        <Link href='/manual'>상위로 돌아가기</Link>
      </div>
    );
}
