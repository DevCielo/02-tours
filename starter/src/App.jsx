const url = 'https://www.course-api.com/react-tours-project';
import {useEffect, useState} from 'react';
import Loading from './Loading';
import Tours from './Tours';

const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTours(data)
        setIsLoading(false)
      } catch (error) {
        console.log('An error has occurred')
        setIsLoading(false)
      }
    }
    fetchData();
  }, [])

    if (isLoading) {
      return <main>
          <Loading />
        </main>
    }

    return (
      <main>
        <Tours tours={tours} />
      </main>
    )
  
};
export default App;
