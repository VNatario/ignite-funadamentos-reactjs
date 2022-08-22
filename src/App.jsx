import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Natario"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit enim optio iusto ipsam eligendi perspiciatis quia tempora debitis nemo, asperiores alias totam ab. Debitis, laborum ut? Error asperiores expedita adipisci!"
          />

          <Post author="João" content="Nova postagem no feed" />
        </main>
      </div>
    </div>
  );
}
