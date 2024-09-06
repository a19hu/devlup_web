import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import group1 from '@/public/WhatsApp Image 2024-09-06 at 21.27.13.jpeg'
import group2 from '@/public/WhatsApp Image 2024-09-06 at 21.27.14.jpeg'
import Image from 'next/image'

const reviews = [
    {
      img:group1,
    },
    {
      img:group2,
    },
    {
        img:group1,
      },
      {
        img:group2,
      },
      {
        img:group1,
      },
      {
        img:group2,
      },
  ];
   
//   const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
   
export default function Gallery() {

    return (
        <>
        <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background ">
        {/* <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <figure className={cn( "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-2",)} >
            <Image src={review.img} alt="" height={100}  />
        </figure>
          ))}
        </Marquee> */}
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review,index) => (
            <figure key={index} className={cn( "relative w-100 cursor-pointer overflow-hidden rounded-xl border p-2",)}>
            {/* <img  alt="" src={review.img} /> */}
            <Image src={review.img} alt="" />
        </figure>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
      </>
    )
  }