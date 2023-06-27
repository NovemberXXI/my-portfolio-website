import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
            </div>

            <p className='text-xl mt-20'>
            Since I have started with my Software Development journey, 
                I have created multiple websites and apps including 
                <span className="text-lg text-blue-500"> Weather</span> App, <span className="text-lg text-green-500"> 
                E-Comm</span> Template using my  
                <span className="text-orange-500"> HTML</span>, <span className="text-blue-700">CSS</span> and <span className="text-yellow-500">JavaScript</span> skill 
                and recently started learning <span className='text-blue-400'>React</span>  and <span className='text-blue-700'>Tailwind CSS</span>.
                I am also looking to collaborate with talented people to create big or small digital products to keep improving my skills.
            </p>
        </div>
    </div>
  )
}

export default About