import React from 'react'

const Shimmer = () => {
    return (
        <>
            {
                Array(20).fill(0).map((item, i) => (
                    <div className='m-5 p-5 border border-black rounded-lg'>
                        <div className='w-64 h-64 bg-gray-400'></div>
                    </div>)
                )}
        </>

    )
}

export default Shimmer