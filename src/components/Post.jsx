import styles from "./Post.module.css";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/SaraAnita1.png" />

          <div className={styles.authorInfo}>
            <strong>Vitor Natario</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="22 de Agosto às 18:08" dateTime="2022-08-22 18:08:36">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Escreva um comentário..."></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
