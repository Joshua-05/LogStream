import { PostCardProps } from "../../types/post"
import style from "./style.module.css"
import userData from '../../data/users.json'


const PostCard = ({posts}: PostCardProps) => {
    const author = userData.find(item => item.id === posts.userId)
    return(
        <div className={style.card}>
            <div className={style.head}>      
                <p>Author: </p><span>{author?.username}</span>
            </div>
            <div className={style.post}>
                <div className={style.post_title}>
                    <p>{posts.title}</p>
                </div>
                <div className={style.post_body}>
                    <p>{posts.body}</p>
                </div>
            </div>
        </div>
    )
}

export default PostCard