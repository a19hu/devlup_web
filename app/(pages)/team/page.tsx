import {Card, CardHeader, CardBody, Image,CardFooter,Button} from "@nextui-org/react";
import styles from '../../../styles/team.module.css'
import { Link} from "@nextui-org/react";
  
   
export default function Page() {

    return (
       <div className="flex p-8 pl-[30%] pr-[20%] gap-20 flex-row">
       <div className={styles.side_navbar}>
          <Link href="#">Current team</Link>
          <Link href="#">Alumni team</Link>
       </div>
       <div>

       </div>
       </div>
    )
  }