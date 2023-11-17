import React from 'react';

export default function About(){
    return(
        <>
        <h1 className=' flex justify-center pt-20 items-center text-2xl font-extrabold'>How it  <span className='text-051960'> Works</span></h1>
        <div className='flex justify-center items-center pt-5 gap-10 bg-purple-100 h-[350px]'>
                
                <div className="bg-white rounded-lg shadow-md p-4 w-[230px]">
                    
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">Tell us what you want</h2>
                        <p className="text-gray-600">Give a small description of the job you are searching for OR simply, upload your resume</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 w-[230px]">
                    
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">We find available job for you</h2>
                        <p className="text-gray-600">Our model identifies jobs suitable for you</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-4 w-[230px]">
                    
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">we help you generate a cover letter</h2>
                        <p className="text-gray-600">Our model will gives you and option of uploading or generating a cover letter </p>
                    </div>
                </div>



        </div>
        
        </>
        
    )

}