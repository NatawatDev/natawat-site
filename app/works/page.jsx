'use client'

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { workExpDetail } from '@/app/constant';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const WorkDetailContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [workDetail, setWorkDetail] = useState(null);

  useEffect(() => {
    const projectPrefix = searchParams.get('detail');
    const findDetail = workExpDetail.find(item => item.prefix === projectPrefix);
    setWorkDetail(findDetail);
  }, [searchParams]);

  const handleBack = () => {    
    sessionStorage.setItem('fromWorkDetail', true);
    router.push('/');
  }

  return (
    <div className="dark:text-[#FFFF] text-black">
      {workDetail && (
        <div>
          <button onClick={handleBack} className='pt-[45px] xl:pt-[100px] w-[24px] md:w-[36px] xl:w-[44px]'>
            <ChevronLeft/>
          </button>          
          <div className='flex flex-col gap-[64px] xl:gap-[44px] px-[20px] xl:px-[120px] py-[100px]'>
            <div className='flex flex-col xl:gap-4'>
              <h1 className='text-[24px] xl:text-[52px] font-bold'>{workDetail.title}</h1>
              <p className='text-[18px]  xl:text-[28px]'>{workDetail.subTitle}</p>
            </div>

            <div className='flex justify-center items-center gap-4'>
              {workDetail.contentUrl.map((img, index) => (
                <div key={index}>
                  <img src={img.url} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className='flex flex-col xl:gap-4'>
              <p className='text-[24px] xl:text-[40px] font-bold'>Frameworks & Tools</p>
              <p className='text-[18px] text-[28px]'>{workDetail.skills}</p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-[24px] xl:text-[40px] font-bold'>Overview</p>
              <p className='text-[16px] xl:text-[28px]'>{workDetail.detail.mainContent}</p>
              <p className='text-[16px] xl:text-[28px]'>{workDetail.detail.subContent}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const WorkDetail = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkDetailContent />
    </Suspense>
  );
};

export default WorkDetail;
