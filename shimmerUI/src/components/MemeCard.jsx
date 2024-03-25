import React from 'react'

const MemeCard = ({ data }) => {
    const { url, title } = data;
    return (
        <div className='m-5 p-5 border border-black rounded-lg w-64'>
            <img className="w-full h-64" alt="meme" src={url} />
            <p className='w-full'>{title}</p>
        </div>
    )
}

export default MemeCard