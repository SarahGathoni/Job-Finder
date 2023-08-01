import React, { useState } from 'react';
import { Link} from 'react-router-dom';



export default function Banner(){
    const[selectOption, setSelectOption] = useState()
    return(
     <div>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='px-50 text-6xl font-extrabold'>Job Search Made Easier</h1>
        <h1 className='text-2xl'>
          Ready to discover a new experience <br></br>when it comes to job hunting?
        </h1>
        {/* Use the Link component to navigate to the Work component */}
        <Link to="/Work" className='text-center text-2xl align-center font-bold text-white rounded-full w-[200px] px-7 py-4 transform transition duration-200 bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-700'>
          Give it a try
        </Link>
        <div className="w-190 h-254 bg-purple-900 rounded-lg shadow-xl"></div>
      </div>
    </div>
    )
    
}