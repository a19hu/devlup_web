import {Card, CardHeader, CardBody, Image,CardFooter,Button} from "@nextui-org/react";

export default function Page() {

    return (
        <>
       <div className="flex p-8 pl-[20%] pr-[20%]">
        <div>PROJECT</div>
       <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Frontend Radio</h4>
        
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <p className="text-tiny uppercase font-bold">Daily Mix</p>
      <div className="flex justify-between gap:1">
        <Button radius="lg">
        Large
      </Button>  
      <Button radius="lg">
        Large
      </Button>  
      </div>
      </CardHeader>
    </Card>
    
       </div>
       <div className="flex p-8 pl-[20%] pr-[20%]">
       <div>BLOG</div>
       <Card isFooterBlurred className=" h-[300px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://nextui.org/images/card-example-5.jpeg"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night's sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Get App</Button>
      </CardFooter>
    </Card>
       </div>
      </>
    )
  }