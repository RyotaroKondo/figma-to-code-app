// import Image from "next/image";
// import styles from "./page.module.scss";

// export default function Home() {
//   return (
//     <div className={styles.main}>home</div>
//   );
// }


// maps to root `/` URL
 
import variables from './page.module.scss'
 
export default function Page() {
  return <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
}