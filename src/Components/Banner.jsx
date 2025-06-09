import React from 'react'
function Banner({banner}) {
  return (

    <div className='h-[20vh] md:h-[75vh] bg-contain bg-center flex items-end' style={{backgroundImage : `url(${banner.poster_path})` }}>
      <div className='text-white text-2xl w-full text-center bg-gray-900/60 p-4'>{banner.name}</div>
    </div>
  )
}

export default Banner
