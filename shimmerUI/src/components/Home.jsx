import React, { useEffect, useState } from 'react'
import MemeCard from './MemeCard'
import Shimmer from './Shimmer'

const Home = () => {
    const [memes, setMemes] = useState(null)

    useEffect(() => {
        fetchMemes()
    }, [])
    const fetchMemes = async () => {
        try {
            const resp = await fetch("https://meme-api.com/gimme/30");
            const data = await resp.json();
            setMemes(data?.memes)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-wrap'>
            {!memes ? <Shimmer /> :
                <>{memes.map((meme, i) => <MemeCard key={i} data={meme} />)}</>}
        </div>
    )
}

export default Home