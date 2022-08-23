import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/JoaoOliveira0117.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitor Natario</strong>
              <time
                title="23 de Agosto às 15:27"
                dataTime="2022-08-23 15:27:47"
              >
                Publicado há 1h
              </time>
            </div>

            <button title="Deletar Comentários">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, parabéns! 👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
