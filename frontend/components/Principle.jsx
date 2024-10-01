import React from 'react'

export default function Principle() {

    const principle=[
        {
            heading:'Learning Driven Endeavour',
            context:'Everything we do is to upskill ourselves! We aim to learn and grow as a team!'
        },
        {
            heading:'Open Source community',
            context:'Inspire and guide the coming generation to build a functioning and interactive open-source community.'
        },
        {
            heading:'Projects that matter to the community',
            context:'We at devlup labs are committed to products and projects that matter, projects that serve a real purpose for the community.'
        },
        {
            heading:'Unparalleled Standards',
            context:'We insist on the highest of standards, from functionality to code to coffee.'
        },
        {
            heading:'Delivering Results',
            context:'Nothing is more important than delivering amazing results to the end-user.'
        },
        {
            heading:'Don’t Reinvent the wheel',
            context:'We believe that we can deliver better results and enrich the learning experience by leveraging existing solutions and building on top of them.'
        },
        {
            heading:'Self Learning',
            context:'Self Learning sits at the heart of devlup labs, we believe in proper utilization of resources and peer guidance to propel self learning.'
        },
    ]
  return (
    <div className="p-3 mx-[200px] flex grid gap-20 justify-center items-center grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
        {principle.map((data,index)=>(
      <div className='flex items-center justify-center flex-col' key={index}>
        <div></div>
        <div className='text-3xl font-black text-black'>{data.heading}</div>
        <div className='text-center text-gray-700'>{data.context}</div>
      </div>
        ))}
    </div>
  )
}
