import React from 'react'

const MyPasswords = ({passwords}) => {


  return (
    <div className='my-8 '>
        {
       passwords.map((pass, id) =>
        <div key={id} className='mx-4 flex items-center justify-between my-2 rounded-md overflow-hidden'>
            <ul className='bg-white w-full py-1 px-2 ' >
                <li>{pass}</li>
            </ul>
            <button className='bg-blue-600 text-white px-3 py-1 hover:font-bold hover:text-gray-900'
            onClick={() => {
                alert(`${pass} - Copied`)
                window.navigator.clipboard.writeText(pass)}
            }
            >copy</button>
        </div>
        )
    }
    </div>
  )
}

export default MyPasswords