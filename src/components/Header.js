import React, { useEffect, useState } from "react";
import "./Header.css";
import { auth } from "../firebase";
import { Modal } from "@material-ui/core";
import { Button, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./Form";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
//https://theyoungminds.org/static/media/logo.302553b6.svg
function Header() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // if user has logged in...
        setUser(authUser);
      } else {
        // if user has logged out...
        setUser(null);
      }
    });

    return () => {
      // perform some cleanup actions
      unsubscribe();
    };
  }, [user, username]);
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    
    setOpenSignIn(false);
  };
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
   
    setOpen(false);
  };
  return (
    <div className="header">
       
       <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="header__signup">
            <center>
              <img
                className="app__headerImage"
                height="40px;"
                src="https://theyoungminds.org/static/media/logo.302553b6.svg"
                alt=""
              />
            </center>

            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder={"email"}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder={"password"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>
              {"Sign Up"}
            </Button>
          </form>
        </div>
      </Modal>
      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="header__signup">
            <center>
              <img
                className="app__headerImage"
                src="https://theyoungminds.org/static/media/logo.302553b6.svg"
                alt=""
                height="40px;"
                alt=""
              />
            </center>

            <Input
              placeholder={"email"}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              placeholder={"password"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signIn}>
              Sign In
            </Button>
          </form>
        </div>
      </Modal>
      <div className="app__header">
        <img
          className="app__headerImage"
          height="40px;"
          src="https://theyoungminds.org/static/media/logo.302553b6.svg"
          alt=""
        />
         <div className="header__center">
            <h2>FORM MAKER</h2>
        </div>
        {user ? (
          <Button onClick={() => auth.signOut()}>Logout</Button>
        ) : (
          <div className="app__loginContainer">
            <Button onClick={() => setOpenSignIn(true)}>Sign In</Button>
            <Button onClick={() => setOpen(true)}>Sign Up</Button>
          </div>
        )}
      </div>
      {user?.displayName ? (
        <Form/>
      ) : (
        <h3>Sorry you need to login to Make Assessment...</h3>
      )}
      </div>
      
  );
}

export default Header;
