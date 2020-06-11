import React,{useEffect,useState} from 'react';
import axios from 'axios';
/*
  $('#btn').click(functon(){

  })

  function a(){}
  $('#btn').click(a())
 */

function App() {
  const [food,setFood]=useState([]);

  useEffect(()=>{
      axios.get('http://211.238.142.192/web/category.do').then((result)=>{
        setFood(result.data)
      })
  },[])
  const html=food.map((m,key)=>
    <li key={key}>{m.title}-{m.subject}</li>
  )
  // componentDidMount() , componentDidUpdate()
  return (
    <ul>
      {html}
    </ul>
  );
}

export default App;
