import {useEffect,useState} from 'react'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users').then(res=>res.json()).then(setUsers)
  }, []);


  return (
    <div>
     
      {
        users.map(item=><div key={item.id}>
          <p>{item.id}</p>
          <img src={item.avatar_url}  />
          </div>)
      }
    </div>
  );
}

export default App;
