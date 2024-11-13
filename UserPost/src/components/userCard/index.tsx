import { useState } from "react"
import { UserCardProps } from "../../types/user"
import style from "./style.module.css"
import postData from "../../data/posts.json"
import AuthorPost from "../authorPost"

const UserCard = ({users}: UserCardProps) => {
    const [flag, setFlag] = useState(false)
    const posts = postData.filter(item => item.userId === users.id)

    const handleClick = () => {
        setFlag(!flag)
    }
    
    return(
        <>
        <div className={style.card}>
           <p onClick={handleClick}>{users.name}</p>
        </div>
        {flag ? <AuthorPost posts={posts}/> : null}
        </>
    )
}

export default UserCard