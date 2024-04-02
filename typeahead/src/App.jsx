import './App.css';
import { useState } from 'react';
import useDebounce from './custom-hooks/useDebounce';
import Counter from './components/Counter';
import InfiniteScroll from './components/InfiniteScroll';

function App() {

    const [data, setData] = useState(null)

    const loadData = async (event) => {
        const value = event.target.value
        if (value === '') {
            setData(null)
            return
        }
        const response = await fetch(`https://demo.dataverse.org/api/search?q=${value}`)
        const res = await response.json()
        setData(res.data.items)
    }

    const loadDataDebounced = useDebounce(loadData, 400)
    return (
        <div className="App">
            {/* <Counter />
            <input type="text" onChange={(e) => loadDataDebounced(e)} className='inputType' />
            {data && data.length !== 0 &&
                <div className="results-container">
                    {data.map(item => (
                        <div key={item.name} className="result-item">
                            <p> {item.name} </p>
                        </div>
                    ))}
                </div>} */}
                <InfiniteScroll/>
        </div>
    );
}

export default App
