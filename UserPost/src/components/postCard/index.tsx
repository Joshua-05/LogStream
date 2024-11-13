import { PostCardProps } from "../../types/post"
import style from "./style.module.css"
import userData from '../../data/users.json'


const PostCard = (props: PostCardProps) => {
    const posts = props.posts
    const author = userData.find(item => item.id === posts.userId)
    const view = props.view
    return(
        <div className={style.card}>
            {view === 'def' && 
                <div className={style.head}>      
                    <p>Author: </p><span>{author?.username}</span>
                </div>
            }
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