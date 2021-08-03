import React, { useEffect } from 'react';
import { useStorage } from '../hooks/useStorage';
import { motion } from 'framer-motion';

export const ProgressBar = ( { file, setFile } ) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => { 
        if (url) { setFile(null); }  
    }, [url])
    
    return (
        <motion.div className="h-2 mt-12 bg-yellow-600 rounded-xl"
        initial={{ width: 0 }}
        animate={{ width: progress + '%'}}
        ></motion.div>
    )
}