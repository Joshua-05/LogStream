import { Link } from "react-router-dom"
import style from "./style.module.css"

const Header = () => {
    return (
        <div className={style.head}>
            <nav>
                <div className={style.routes}>
                    <Link to={"/"}><span>Posts</span></Link>
                    <Link to={"/users"}><span>Users</span></Link>
                </div>
                <div className={style.search}>
                    <input type="text" placeholder="search" />
                </div>
            </nav>
        </div>
    )
}

export default Header