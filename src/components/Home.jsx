import React from 'react'
import HeroImage from '../assets/heroImage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Web Developer</h2>
                <p className='text-gray-400 py-4 max-w-md'>I am driven by curiosity and armed with a solid foundation in HTML, CSS, and JavaScript, I am also eager to apply my knowledge and creativity to build impactful web experiences. While still in the early stages of my web development career, I am enthusiasm and dedication shine through in every project.</p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 cursor-pointer'>
                        portfolio 
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={20} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my profile pic" className='rounded-2xl mx-auto w-2/3 md:w-full' style={{ width: 250, height: 250 }}/>
            </div>
        </div>
    </div>
  )
}

export default Home