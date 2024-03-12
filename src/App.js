import './App.css';
import { useEffect, useState, useCallback } from 'react';
import PlanetCard from './components/PlanetCard';

const baseURL = 'https://swapi.py4e.com/api/planets/';

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const getData = useCallback(async (page = 1) => {
    try {
      setIsLoading(true);

      let res = await fetch(`${baseURL}/?format=json&page=${page}`);
      res = await res.json();
      setData(res.results);
      setTotalPages(res.count);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      console.log(err);
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getData(page);
  }, [page, getData]);

  const handlePageChange = (val) => {
    const value = page + val;
    setPage(value);
  };

  if (isError) {
    return <h1 style={{ textAlign: 'center',color:'white' }}>Error...</h1>;
  }

  return (
    <div className="App">

        {isLoading ? (
        <h1 style={{ color: 'yellow' }} className="skeleton-item skeleton-heading">Planets <span style={{ color: 'tomato' }}> Directories </span></h1>
      ) : (
        <h1 style={{ color: 'yellow' }}>Planets <span style={{ color: 'tomato' }}> Directories </span></h1>
      )}

      <div className="planet">
        {isLoading ? (
          Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="skeleton-item"></div>
          ))
        ) : (
          data.map((planet, index) => (
            <PlanetCard key={index} {...planet} />
          ))
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        <button className="pre" disabled={page <= 1} onClick={() => handlePageChange(-1)}>
          <span className="arrow left"></span>BACK
        </button>

        <button style={{ marginBottom: '20px', border: '.8px solid white', borderRadius: '4px', padding: '7px 15px', fontSize: '25px', color: 'white', background: 'blue' }} disabled>{page}</button>

        <button className="nex" disabled={page >= Math.floor(totalPages / 10)} onClick={() => handlePageChange(1)}>
          NEXT<span className="arrow right"></span>
        </button>
      </div>

      {isLoading ? (
        <h5 style={{ color: 'lightgrey' }} className="skeleton-item skeleton-creator">Made with <span style={{ color: 'red',fontSize: '45px'}}>&#9825; </span>by SHAHID ANSARI</h5>
      ) : (
        <h5 style={{ color: 'lightGray' }}>Made with <span style={{ color: 'red',fontSize: '47px' }}>&#9825; </span>by Shahid Ansari</h5>
      )}
    </div>
  );
}

export default App;