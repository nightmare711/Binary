import React,{useState} from "react";
import ReactDOM from "react-dom";
import AuthLogin from './components/Auth/Auth';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.8.0";
import Button from "components/Button/Button";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Visualize from './components/Visualize/container/main'
import LandingPage from "views/LandingPage/LandingPage.js";
import Playground from "views/Playground/Playground";
import About from "views/About/About";
import MyContext from './data/context'
var hist = createBrowserHistory();
const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();
  const [account,setAcc]= useState({
    email:'',
    password:''
  });
  const [insertVal, setVal] = useState(0)
  const [isLogin,setLogin] = useState(false);
  return (
    <>
      <MyContext.Provider value={{
        isLogin: isLogin,
        setLogin:setLogin,
        account:account,
        setAcc:setAcc,
        insertVal:insertVal,
        setVal:setVal
      }} >
        <Router history={hist}>
          <Header
            color="transparent"
            route="/"
            brand="Hello"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
              height: 150,
              color: "white"
            }}
          />
          <Route path="/login" component={AuthLogin} />
          
          <Parallax
            filter
            image={
              "https://images.unsplash.com/photo-1520262454473-a1a82276a574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
            }
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <h1 className={classes.title}>Binari</h1>
                  <h4>
                  Binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child. A recursive definition using just set theory notions is that a (non-empty) binary tree is a tuple (L, S, R), where L and R are binary trees or the empty set and S is a singleton set containing the root. Some authors allow the binary tree to be the empty set as well
                  </h4>
                  <br />
                  <Button color="primary" linkTo="/playground">
                    Get Started
                  </Button>
                </GridItem>
              </GridContainer>
              
            </div>
          </Parallax>
          
          <Switch>
            <Route path="/playground" component={Playground} />
            <Route path="/about" component={About} />
            <Route path="/visualize" component={Visualize} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </Router>
        <Footer />
      </MyContext.Provider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
