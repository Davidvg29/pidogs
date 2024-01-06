
import {Routes, Route} from "react-router-dom"
import css from "./App.module.css"

import Landing from './components/LandingPage/Landing';
import Home from "./components/HomePage/Home"
import Error from "./components/Error/Error"
import Detail from "./components/DetailPage/Detail"
import Form from "./components/FormPage/Form"

function App() {

  return (
    <div className={css.App}>
      
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>

    </div>
      
  );
  
}

export default App;
