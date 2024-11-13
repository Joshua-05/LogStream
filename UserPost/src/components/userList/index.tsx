import userData from '../../data/users.json'
import UserCard from '../userCard'
import style from "./style.module.css"

const UserList = () => {
    return(
        <div className={style.list}>
            {userData.map(item => <UserCard users={item} key={item.id}/>)}
        </div>
    )
}

export default UserList