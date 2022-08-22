import { Header } from "./components/Header";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <>
      <Header />

      <Post
        author="Natario"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit enim optio iusto ipsam eligendi perspiciatis quia tempora debitis nemo, asperiores alias totam ab. Debitis, laborum ut? Error asperiores expedita adipisci!"
      />

      <Post author="João" content="Nova postagem no feed" />
    </>
  );
}
