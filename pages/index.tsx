/* =========================================================================== */
/* Section: Imports                                                            */
/* =========================================================================== */

import styles from "@/styles/Home.module.css";
import Title from "@/components/Title";

/* =========================================================================== */
/* Section: Main                                                               */
/* =========================================================================== */

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Title title={"next-ts-template"} />
      </main>
    </>
  );
}
