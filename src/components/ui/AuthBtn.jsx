import React from 'react'

const AuthBtn = ({props}) => {
  return (
    <button
    className='py-2 px-4 text-lg rounded-3xl bg-chetwode-blue-600 hover:bg-chetwode-blue-700 text-titan-white-50 shadow-lg shadow-chetwode-blue-500'
    >
        {props}
    </button>
  )
}

export default AuthBtn