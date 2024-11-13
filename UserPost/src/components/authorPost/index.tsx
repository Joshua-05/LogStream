import { IPost } from "../../types/post"
import PostCard from "../postCard"
import style from "./style.module.css"

interface AuthorPostProps{
    posts: IPost[]
}

const AuthorPost = ({posts}: AuthorPostProps) => {
    return(
        <div className={style.list}>
            {posts.map(item => <PostCard posts={item} key={item.id}/>)}
        </div>
    )
}

export default AuthorPost