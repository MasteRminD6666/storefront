import "./App.css";
import Sidebar from "./components/Header/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Categories from "./components/Pages/Categories";
// import AllCategories from "./components/Pages/AllCategory";
import Men from "./components/Pages/Manpage";
import Electronics from "./components/Pages/Electronics";
import Women from "./components/Pages/Women";
import Jewelry from "./components/Pages/Jewelry";
import Contact from "./components/Pages/ContactUs";
import Support from "./components/Pages/Support";
import Cart from "./components/Pages/Cart";
function App() {

  return (
    <Router>
      <Sidebar />
      <Switch>
        {/* <Route path="/Categories/All" exact component={AllCategories} /> */}
        <Route path="/Categories/men" exact component={Men} />
        <Route path="/Categories/Electronics" exact component={Electronics} />
        <Route path="/Categories/Women" exact component={Women} />
        <Route path="/Categories/Jewelry" exact component={Jewelry} />
        <Route path="/Cart" exact component={Cart} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/support" exact component={Support} />
      </Switch>
    </Router>
  );
}

export default App;