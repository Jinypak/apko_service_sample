import Image from "next/image";
import React from "react";

type Props = {};

const Migration = (props: Props) => {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='font-bold text-[24px] my-[20px]'>
          Luna SA4 - SA7 Migration
        </h1>
        <ol>
          <li>
            <h2>1. LunaClient 5.x 설치</h2>
            <p>- Option으로 LunaSA, Luna G5, Luna Remote Backup HSM 선택</p>
            <Image src='' alt='install_image' className='w-full' />
          </li>
          <li>
            <h2>2. Luna SA4 Partition 연동</h2>
            <p></p>
          </li>
          <li>
            <h2>3. Backup HSM  Windows PC 연결</h2>
            <p></p>
          </li>
          <li>
            <h2>4. 현재 슬롯  Backup HSM으로 변경</h2>
            <p></p>
          </li>
          <li>
            <h2>5. Backup HSM 공장 초기화</h2>
            <p></p>
          </li>
          <li>
            <h2>6. Backup HSM 초기화</h2>
            <p></p>
          </li>
          <li>
            <h2>7. Partition 생성</h2>
            <p></p>
          </li>
          <li>
            <h2>8. LunaSA4 Domain  Backup HSM에 등록</h2>
            <p></p>
          </li>
          <li>
            <h2>9. LunaSA4 Key  Backup HSM Import</h2>
            <p></p>
          </li>
          <li>
            <h2>10. LunaClient 5.x 삭제 후 LunaClient 7.x 설치</h2>
            <p></p>
          </li>
          <li>
            <h2>11. Windows PC에 LunaSA7 Partition 연동 및 Backup HSM 연결</h2>
            <p></p>
          </li>
          <li>
            <h2>12. Backup HSM Key를 LunaSA7 Import</h2>
            <p></p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Migration;
