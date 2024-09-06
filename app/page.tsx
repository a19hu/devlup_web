import logo_home from '@/public/logo_home.png'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className={styles.home}>
    <div className={styles.home_landing}>
<div className={styles.home_container}>
    <div>
        <div style={{fontSize:'60px',fontWeight:'800'}}>DevlUp Labs</div>
        <div style={{fontSize:'40px'}}>Open Source & Development <br /> Club IIT Jodhpur</div>
    </div>
    <div>
     <Image src={logo_home} alt="" />
    </div>
    </div>
</div>
<div>Gallery</div>
    <Gallery/>
<div className='video_container'>
    <div>Video</div>
    <div className="relative w-100 flex gap-20">
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
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
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
