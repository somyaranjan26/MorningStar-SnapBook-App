import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

export const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect( () => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach( docu => {
                    documents.push({ ...docu.data(), id: docu.id })
                });
                setDocs(documents);
            });

            return () => unsub();
    }, [collection])

    return { docs }; 
}