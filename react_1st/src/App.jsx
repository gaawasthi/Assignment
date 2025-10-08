import React, { useState } from 'react'
import Question1 from './easy/Question1'
import Question2 from './easy/Question2'
import Question3 from './easy/Question3'
import Question5 from './easy/Question5'
import UserCard from './medium/QuestionM1'
import Parent from './medium/QuestionM2'
import Child from './medium/QuestionM2'
import ChildComponent from './medium/QuestionM3'
import ParentComponent from './medium/QuestionM3'
import QuestionM4 from './medium/QuestionM4'
import QuestionM5 from './medium/QuestionM5'
import QuestionSH1 from './SemiHard./QuestionSH1'
import ParentCom from './SemiHard./QuestionSH2'
import QuestionSH3 from './SemiHard./QuestionSH3'


const App = () => {

  const [data , setData] = useState([
   {name:"pablo" , age:21 
   },
   {name:"jacob" , age:20},
   {name:"tommy" , age:22}

  ])

 
  return (
    <div>
     
     <Question1/>
     <Question2/>
     <Question3/>
     <Question5/>
     <UserCard data = {data} />
     <Parent/>
     <ParentComponent/>
     <QuestionM4/>
     <QuestionM5/>
     <QuestionSH1/>
     <ParentCom/>     
     <QuestionSH3/>
    </div>
  )
}

export default App