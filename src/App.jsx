import { Post } from "./Post";

export function App() {
  return (
    <>
      <Post
        author="Natario"
        content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit enim optio iusto ipsam eligendi perspiciatis quia tempora debitis nemo, asperiores alias totam ab. Debitis, laborum ut? Error asperiores expedita adipisci!"
      />

      <Post author="João" content="Nova postagem no feed" />
    </>
  );
}
