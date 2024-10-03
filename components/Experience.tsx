import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/Moving-Borders'

const Experience = () => {
  return (
    <div className='py-20' id='experience'>
        <h1 className='heading text-white'>
            My <span className='text-purple'>Work Experience</span>
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {workExperience.map(({id,title,desc,className,thumbnail})=>(
                <Button key={id} borderRadius='1.75rem' className='flex-1 text-white border-slate-800' duration={Math.floor(Math.random()*10000)+10000}>
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={thumbnail} alt={thumbnail} className="lg:w-32 md:w-20 w-16" />
                        <div className='lg:ms-5'>
                            <h2 className='text-start text-xl md:text-2xl font-bold'>{title}</h2>
                            <p className='text-start font-semibold mt-3 text-white-100'>{desc}</p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Experience