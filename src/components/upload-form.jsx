import { useState } from 'react'
import { ProgressBar } from './progressBar';

export const UploadForm = (e) => {
    const [file, setFile] = useState(null);  // ? Hook: FILE is a state and setFile is func to update the state FILE with initially NULL
    const [error, setError] = useState(null);
   
    const types = ['image/png', 'image/jpeg']; // ! array of accepted file types

    const changeHandler = (e) => {
        let seleted = e.target.files[0];  // ! get the uploaded image

        if (seleted && types.includes(seleted.type)) {   // ? check weahter we have the valid file
            setFile(seleted);                            // ? than only update the state FILE
            setError('');
        } else {
            setFile(null);      // ! if file is not valid
            setError('Please select an image file (png or jpeg)');
        }
    }

    return (
    <>
    <div className="w-full flex justify-center">
        <form>
            <label>
                <input className="hidden" type="file" onChange={changeHandler}/>
                {/* <p className="text-center leading-5 rounded-full mx-auto my-10 w-6 h-6 text-lg block border border-yellow-500 text-yellow-500">+</p> */}

                <div className="flex flex-col items-center justify-center mt-10 h-12 w-12 text-base font-medium rounded-full text-white bg-yellow-600 hover:bg-yellow-500 md:text-lg shadow-lg">
                    <img className="svg_arrow animate-bounce" alt="upload-svg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABNUlEQVRoge2ZX07CQBCHtx6JM2jEgH8OwIsmhHpQfTLoDTDxEMCDfj50AmUzLVCy3UHnSzZpdqc7vy/d9KENwXEcx/mLAGNgnDvHSQBDYCVjmDtPJ4BrYMmWNXCbO9dRKBLnJyPHSZOoy9zlztnKARL2ZY6QsCsDjKjeTHW+lfDx3AoY5c4fQggBuFGexA9QKiKPiswauLcq8SzrO8jckykZkYiP00aiSWSPzEPfElfSOJaYRnWqiKxN5Z5Y5rJPkbkiMVPqGkVkfabIvPVjUQV4jSTKhrpWEakpI5mXtOl3mw+AD2ABTFrq9opI3UT2egcGXTIVXW46lDh8URTJ+l2k2rhvXMQaLmINF7GGi1jDRazhItZwEWu4iDVSi3zWrheJe6WD6tvXl4zz/NHjOI7j/At+AecF3Evs5qsfAAAAAElFTkSuQmCC"/>
                    <p className="svg_bottom rotate-90">[</p>
                </div>
            </label>
        </form>
    </div>


    <div className="container mx-auto text-center mt-3 px-10 sm:px-0">
            { error && <div className="text-red-600">*{ error }.</div>}
            { file && <div>{ file.name }</div> }
            { file && <ProgressBar file={file} setFile={setFile} /> }
    </div>
    </>
    )
}