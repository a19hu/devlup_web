import logo_home from '@/public/logo_home.png'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className={styles.home}>
    <div className={styles.home_landing} >
<div className={styles.home_container}>
    <div>
        <div style={{fontSize:'60px',fontWeight:'800'}}>DevlUp Labs</div>
        <div style={{fontSize:'40px'}}>Open Source Development  <br />  Enthusiasts Group @ IIT Jodhpur</div>
    </div>
    <div>
     <Image src={logo_home} alt="" />
    </div>
    </div>
</div>
<div className='flex justify-center text-4xl mb-20 font-black'>Gallery</div>
    <Gallery/>
<div className='video_container'>
    <div className='flex justify-center text-4xl mb-20 mt-20 font-black'>Video</div>
    <div className="relative w-100 flex gap-10 flex-row max-md:flex-col mx-[400px] max-md:mx-[20px] my-20">
    <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/56xFUD8O9yI?si=Mq0VaaV4mVTA_KO0"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="YouTube video player"
      />
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
    </div>
    <div className="relative w-100 flex gap-10 flex-row max-md:flex-col mx-[400px] max-md:mx-[20px] my-20">
    <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/56xFUD8O9yI?si=Mq0VaaV4mVTA_KO0"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="YouTube video player"
      />
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
    </div>
    <Contact/>
</div>

</div>  
  );
}
