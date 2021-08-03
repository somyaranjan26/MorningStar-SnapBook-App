import React from 'react'
import '../App.css';
export const Header = () => {
return (
<>
    {/* <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="relative flex items-center justify-center" aria-label="Global">
            <div className="flex items-center flex-1">
                <div className="flex items-center justify-center w-full">
                    <a href="/">
                        <span className="text-yellow-600 text-4xl font-medium tracking-wide">MorningStar*</span>
                    </a>
                </div>
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow">
                    <a href="/"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                        Log in
                    </a>
                </span>
            </div>
        </nav>
    </div> */}

    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
            <h1 className="font-logo tracking-normal font-medium text-yellow-600 text-5xl md:text-6xl">
                MorningStar*
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Share your favorite Snaps with <span className="text-yellow-600">MorningStar</span>.
            </p>
        </div>
    </main>
</>
)
}