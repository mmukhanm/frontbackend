import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className={styles.intro}>
          <h1>Добро пожаловать в мой Next.js проект!</h1>
          <p>
            Это пример стартовой страницы. Чтобы внести изменения, открой файл{" "}
            <code>page.js</code> и обнови содержимое по своему вкусу.
          </p>
          <p>
            Если ты хочешь узнать больше о Next.js, загляни в{" "}
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              официальную документацию
            </a>{" "}
            или изучи примеры на{" "}
            <a
              href="https://vercel.com/templates"
              target="_blank"
              rel="noopener noreferrer"
            >
              сайте Vercel
            </a>.
          </p>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Развернуть проект
          </a>
          <a
            className={styles.secondary}
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Изучить Next.js
          </a>
        </div>
        <div>
          <p>
            Этот сайт создали Галиханов Ілияс и Андижан Мухаммед. Something changed
          </p>
        </div>
      </main>
    </div>
  );
}
