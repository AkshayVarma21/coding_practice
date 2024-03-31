// Implementation of infinite scroll with debounce logic also

import React, { useState, useEffect } from 'react'
import useDebounce from '../custom-hooks/useDebounce'

const InfiniteScroll = () => {
    const [listData, setListData] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetchData()
    }, [page])

    const fetchData = async () => {
        setLoading(true)
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?page=${page}`
        );
        const data = await response.json()
        setLoading(false)
        setListData([...listData, ...data])
        console.log("liast", data)
    }

    useEffect(() => {
        window.addEventListener("scroll", debouncedScroll);
        return () => {
            window.removeEventListener("scroll", debouncedScroll);
        };
    }, [])

    const onScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
            // Check loading state
            setPage((prevPage) => prevPage + 1);
        }
    };

    const debouncedScroll = useDebounce(onScroll,200)


    return (
        <div>

            <>
                {listData.map((item, ind) => <div key={`${item.id}${ind}`}>
                    {`${ind}.${item.title}`}
                </div>)}
            </>
            {
                loading && <div>loading</div>
            }
        </div>
    )
}

export default InfiniteScroll