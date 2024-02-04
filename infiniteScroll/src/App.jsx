import { useCallback, useState, useRef } from 'react'
import './App.css'
import useQueryData from './useQuery'

function App() {
  const [inputVal, setInputVal] = useState("")
  const [pageNumber, setPageNumber] = useState(1);

  const handleInput = (event) => {
    setInputVal(event.target.value)
    setPageNumber(1);
  }
  const { hasMore, items, loading } = useQueryData(inputVal, pageNumber);
  const lastElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(pageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
    console.log(node)
  }, [loading, hasMore]);
  const observer = useRef(null)
  return (
    <>
      <input type="text" value={inputVal} onChange={handleInput} />
      <div className='items-container'>
      {items && items.map((item, ind) => {
        if (items.length === ind + 1)
          return (<div ref={lastElementRef}>{item.title}</div>)
        else
          return (<div>{item.title}</div>)
      }
      )}
      </div>
      {loading && <div>Loading...</div>}
    </>
  )
}

export default App
