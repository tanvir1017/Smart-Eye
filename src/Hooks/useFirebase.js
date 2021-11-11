import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../Components/Pages/Authentication/firebase/firebase.init";

initAuthentication();
const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState("");
  const auth = getAuth();

  const register = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
        setError("");
        history.replace("/");
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const googleSignIn = (location, history) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.email, user.displayName, "PUT");
        setError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };
  const logIn = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => setUser({}))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {});
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, [auth]);

  // make admin
  useEffect(() => {
    fetch(`https://damp-dawn-73737.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  //save user by registation
  const saveUser = (email, displayName, method) => {
    const users = { email, displayName };
    fetch(`https://damp-dawn-73737.herokuapp.com/users`, {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    });
  };

  return {
    user,
    logIn,
    admin,
    logout,
    register,
    googleSignIn,
    isLoading,
    error,
  };
};

export default useFirebase;
