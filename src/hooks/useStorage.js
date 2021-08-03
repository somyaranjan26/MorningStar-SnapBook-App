import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

export const useStorage = (file) => {
    const [progress, setProgress] = useState(0);  // * handle progress of file upload
    const [error, setError] = useState(null);   // * handle error occured during file upload
    const [url, setUrl] = useState(null);     // * handle the uploaded file url

    useEffect( () => {
        var date = new Date().getTime();
        var extension = file.name.split('.').pop();
        var name = date + "." + extension;

        // ? referances
        const storageRef = projectStorage.ref(name);
        const collectionRef = projectFirestore.collection('image');

        storageRef.put(file).on('state_changed', (snap) => {    // ? put() is to upload data to firebase is an async func 
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url, createdAt });
            setUrl(url);
        })
    }, [file])  // ! executed every time whenever file changes

    return { progress, url, error }
}