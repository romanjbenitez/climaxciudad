
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Switch, Route } from "react-router-dom";
import City from "./components/City/City";
import Footer from "./components/Footter/Footer";
function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/"><Main/></Route>
        <Route path="/ciudad/:city"><City/></Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
