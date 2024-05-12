import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
	Classes,
	Class,
	Home,
	Layout,
	Login,
	Signup,
	Student,
	Students,
	Teachers,
} from "./components";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
	return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup />}/>

        {/* private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />}/>

          <Route path="/students">
            <Route index element={<Students />}/>
            <Route path=":id" element={<Student />} />
          </Route>

          <Route path="/classes">
            <Route index element={<Classes />}/>
            <Route path=":id" element={<Class />} />
          </Route>

          <Route path="/teachers" element={<Teachers />}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
