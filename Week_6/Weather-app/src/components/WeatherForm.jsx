import React from 'react'
import {IoMdSearch } from 'react-icons/io';

export const WeatherForm = ({handleInput, handleSubmit, errorMsg, animate}) => {
  return (
    <div>
        <form
        className={`${
          animate ? 'animate-shake' : 'animate-none'
        } h-16 bg-black/30 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-8`}
      >
        <div className="h-full relative flex items-center justify-between p-2">
          <input
            onChange={(e) => handleInput(e)}
            className="flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] pl-6 h-full"
            type="text"
            placeholder="Search by City or Country"
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-blue-500 hover:bg-blue-600 w-20 h-12 rounded-full flex justify-center items-center transition"
          >
            <IoMdSearch className="text-2xl text-white" />
          </button>
        </div>
        {/* {errorMsg && (
          <div className="w-full max-w-[90vw] lg:max-w[450px] text-white absolute top-10 lg:top-15 p-6 capitalize rounded-md">
            {`${errorMsg}`}
          </div>
        )} */}
      </form>
    </div>
  )
}
