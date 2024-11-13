import PostCard from "../postCard"
import postData from '../../data/posts.json'
import style from "./style.module.css"

const PostList = () => {
    return(
        <>
            <div className={style.posts}>
                {postData.map(item => <PostCard posts={item} view="def" key={item.id}/>)}
            </div>
        </>
    )
}

export default PostList