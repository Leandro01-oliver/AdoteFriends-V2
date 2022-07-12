import { auth } from "../Config/connectingFirebase";
import {GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";


const providerGoogle = new GoogleAuthProvider();

const authGoogle = async () => {
 await signInWithPopup(auth, providerGoogle).then(()=>{
        console.log("Fez o login com sucesso");
 }).catch(()=>{
      console.log("Erro ao fazer o login")
    });
}

const signOutGoogle = async()=>{
 await signOut(auth).then(()=>{
       localStorage.removeItem("image");
        console.log("saiu com sucesso");
 }).catch(()=>{
      console.log("erro ao sair ")
    });
}

export {authGoogle, signOutGoogle};



