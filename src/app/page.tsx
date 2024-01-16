import MaxWidthWrapper from '@/components/maxWidthWrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-cneter flex flex-col items-center max-w-3xl'>
        hello world
      </div>
    </MaxWidthWrapper>
  )
}
