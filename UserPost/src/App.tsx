import { BrowserRouter, Route, Routes } from "react-router-dom"
import PostList from "./components/postList"
import UserList from "./components/userList"
import Header from "./components/wrap"
import style from "./style.module.css"

function App() {
  return (
    <div className={style.app}>
      <BrowserRouter>
      <Header />
        <Routes>
          
          <Route path="/" element={<PostList/>} />
          <Route path="users" element={<UserList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
