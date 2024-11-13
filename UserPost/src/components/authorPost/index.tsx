import { IPost } from "../../types/post"
import PostCard from "../postCard"
import style from "./style.module.css"

interface AuthorPostProps{
    posts: IPost[]
}

const AuthorPost = ({posts}: AuthorPostProps) => {
    return(
        <>
        <h3>Author posts</h3>
        <div className={style.list}>
            {posts.map(item => <PostCard posts={item} view="spec" key={item.id}/>)}
        </div>
        </>
    )
}

export default AuthorPost