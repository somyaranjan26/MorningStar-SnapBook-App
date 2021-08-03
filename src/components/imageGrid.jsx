import { useFirestore } from "../hooks/useFirestore";
import { motion } from 'framer-motion';

export const ImageGrid = ({setSelectedImg}) => {
    const { docs } = useFirestore('image');

    return (
        <div className="container mx-auto mt-24">

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 my-4 mx-auto">
                { docs && docs.map( docu => (
                    <motion.div className="px-5 sm:px-0 opacity-80" key={docu.id}
                        layout
                        whileHover={{opacity: 1}}
                        onClick={() => setSelectedImg(docu.url)}
                    >
                        <motion.img src={ docu.url } alt="Morning Star"
                            className="flex-shrink-0 rounded-lg w-full h-80 sm:h-96 object-cover object-center"
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ delay: 1}}
                        />
                    </motion.div>
                ))}
            </div>

        </div>
    )
}