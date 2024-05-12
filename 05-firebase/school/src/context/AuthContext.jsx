import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const AuthContext = createContext({});

const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    function login(email, pwd) {
        return signInWithEmailAndPassword(auth, email, pwd);
    }
    function loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }
    function register(email, pwd) {
        return createUserWithEmailAndPassword(auth, email, pwd);
    }
    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // co zawiera user po zalogowaniu?
            setCurrentUser(user);
        })

        return () => unsubscribe();
    }, [])
    

    const passedData = {
        currentUser,
        login,
        loginWithGoogle,
        register,
        logout
    }

	return <AuthContext.Provider value={passedData}> {children}</AuthContext.Provider>;
};

export default useAuth;