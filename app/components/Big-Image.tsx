import Image from 'next/image'
import React from 'react'

export default function BigImage() {
  return (
    <div className="h-[500px] flex justify-center relative top-[300px]">
        <div className="relative flex justify-center h-full w-[1093px]">
          <Image src={"/big-image.png"} alt='' height={0} width={1093} />
          <div className='bg-red-600 absolute left-[53px] rounded-sm border border-white shadow-red-600 bottom-7'>
            <button className=' py-1 px-3 text-white font-bold animate-bounce '>Buy Now</button>
          </div>
        </div>
    </div>
  )
}
