import React, { useState, useEffect, useContext } from "react";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  updatePassword,
  updateProfile 
} from "firebase/auth"; 
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert('Usuário Criado');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert('Logado');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  function logout() {
    return signOut(auth)
      .then(() => {
        alert('Deslogado');
      })
      .catch((error) => {
        console.log("Erro deslogando: ", error);
      });
  }

  function resetUserPassword(email) {
    return sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("E-mail para redefinir enviado!");
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  function updateUserPassword(newPassword) {
    return updatePassword(auth.currentUser, newPassword)
      .then(() => {
        alert("Senha atualziada!");
      })
      .catch((error) => {
        console.error("Erro atualizando a senha: ", error);
      });
  }

  function updateUserProfile(displayNameUser, photoURLUser) {
    const infoProfile = {
      displayName: displayNameUser,
      photoURL: photoURLUser
    }

    return updateProfile(auth.currentUser, infoProfile)
    .then(() => {
      alert("Perfil Atualizado");
    })
    .catch((error) => {
      console.error("Erro atualizando o perfil: ", error);
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser: currentUser,
    login: login,
    signup: signup,
    logout: logout,
    resetUserPassword: resetUserPassword,
    updateUserPassword: updateUserPassword,
    updateUserProfile: updateUserProfile
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
