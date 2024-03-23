// components
import NavBar from './components/NavBar'
import Articles from "./components/Articles";

// styles
import './App.css'

function App() {

  return (
    <div className="container">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main_content">
        <div className="post">
          {/* <Post /> */}
        </div>
        <div className="aside">
          {/* <Aside /> */}
        </div>
        <div className="article">
          <Articles />
        </div>
      </div>
    </div>
  )
}

export default App