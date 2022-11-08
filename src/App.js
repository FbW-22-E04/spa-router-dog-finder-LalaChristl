
import React from 'react';
import Dogs from './componenets/Dogs';
import Dog from './componenets/Dog';
import Whiskey from './images/whiskey.jpg'
import Hazel from './images/hazel.jpg'
import Bandit from './images/tubby.jpg'
import SingleDog from './componenets/SingleDog';
import {Routes, Route} from 'react-router-dom'

const allDogs = [
  { name: "Whisky", 
    age: 4, 
    motto: "I like cats!",
    image: Whiskey,
  },
  {
    name: "Hazel",
    age: 7,
    motto: "Never trust a Magpie!",
    image: Hazel,
  },

  {
    name: "Bandit",
    age: 5,
    motto: "Treats are tasty!",
    image: Bandit,
  },
];

function App() {
  return (
   
<Routes>
<Route path="/" element={<Dogs allDogs={allDogs}/>} />
  
<Route path="/dogs" element={<Dogs allDogs={allDogs}/>} />
<Route path="/dogs/:singledog" element={<SingleDog allDogs={allDogs}/>} />


</Routes>


 
  );
}


export default App;