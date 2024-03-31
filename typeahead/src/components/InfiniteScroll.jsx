import React, { useState, useEffect } from 'react'

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
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [])

    const onScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
            // Check loading state
            setPage((prevPage) => prevPage + 1);
        }
    };
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