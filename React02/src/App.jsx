import React, { useState } from 'react'
import Easy01 from './easy/Easy01'
import Easy03 from './easy/Easy03'
import Medium01 from './medium/Medium01'
import Medium03 from './medium/Medium03'
import SemiHard from './semi-hard/SemiHard'
import Counter from './semi-hard/semiHard2'
import CounterWithFocus from './medium/Medium02'

const App = () => {
  const [show , setShow] = useState(true)
   const max = 10000; // For a random number from 0 to 9
    const randomInt = Math.floor(Math.random() * max);

  return (
          <>
           <Easy01/>
            <Easy03/>
            <Medium01/>
             {
               show ?
               <Medium03/>
               : null
              }
              <button onClick={()=>{setShow(!show)}} >{show ? "unmount" :"mount the component"}</button>
              {
                 
    console.log(randomInt)
                
              }
              <SemiHard/>
              <Counter/>
              <CounterWithFocus/>
             
          </>
  )
}

export default App