import { useEffect, useRef, useState } from "react";

function useQueryData(inputVal, pageNumber) {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(false)
    const controllerRef = useRef(null)
    useEffect(() => {
        setItems([])
    }, [inputVal])
    const getData = async () => {
        try {
            if (controllerRef.current) {
                controllerRef.current.abort();
            }
            setLoading(true);
            controllerRef.current = new AbortController();
            const response = await fetch(`https://openlibrary.org/search.json?q=${inputVal}&page=${pageNumber}`, { signal: controllerRef.current.signal })
            if (response.ok) {
                const data = await response.json();
                setItems([...items, ...data.docs]);
                setHasMore(data.docs.length > 0)
                setLoading(false);
            }

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData();
    }, [inputVal, pageNumber])
    return { loading, hasMore, items }

}

export default useQueryData;