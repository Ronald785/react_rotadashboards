import React from "react";
import { db } from "../firebase"
import { collection, getDocs, addDoc } from "firebase/firestore";

export const DatabaseContext = React.createContext();

const DatabaseProvider = (props) => {
    const readInvoices = async () => {
        const querySnapshot = await getDocs(collection(db, "faturas"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    }

    const addReport = async (data) => {
        try {
            await addDoc(collection(db, "reports"), data);
            alert("Enviado, logo entraremos em contato!");
        } 
        catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    const readTeste = () => {
        console.log("Click");
    }

    const value = {
        readInvoices: readInvoices,
        readTeste: readTeste,
        addReport: addReport
    }

    return (
        <DatabaseContext.Provider value={value}>
            {props.children}
        </DatabaseContext.Provider>
    )
}

export default DatabaseProvider;