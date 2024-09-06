import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const reviews = [
    {
      img: "https://avatar.vercel.sh/jack",
    },
    {
      img: "https://avatar.vercel.sh/jill",
    },
    {
      img: "https://avatar.vercel.sh/john",
    },
    {
      img: "https://avatar.vercel.sh/jack",
    },
    {
      img: "https://avatar.vercel.sh/jill",
    },
    {
      img: "https://avatar.vercel.sh/john",
    },

  ];
   
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
   
export default function Gallery() {

    return (
        <>
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background ">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <figure className={cn( "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-2",)}>
            <img  alt="" src={review.img} />
        </figure>
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <figure className={cn( "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-2",)}>
            <img  alt="" src={review.img} />
        </figure>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
      </>
    )
  }