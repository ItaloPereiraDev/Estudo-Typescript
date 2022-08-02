
import styles from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content:string,
    onDeleteComment: (comment:string) => void;
}

export function Comment({content, onDeleteComment}:CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount((state) => {
            return state+1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/madalena-rocha.png" alt=''/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong>Jackqueline</strong>
                        <time title='5 de Julho as 16:02' dateTime='2022-07-05 16:02:35'>Cerca de 1hr atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>
                    {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/> Curtir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}