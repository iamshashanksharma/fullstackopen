const Header = (props)=>{
  return(
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}
const Part1= ({part1,exercises1})=>{
  return(
    <div>
      {part1} {exercises1}
    </div>
    
  )
  
}
const Part2= ({part2,exercises2})=>{
  return(
    <div>
     {part2} {exercises2}
    </div>
  )
}
const Part3= ({part3,exercises3})=>{
  return(
    <div>
     {part3} {exercises3}
    </div>
  )
}
const Content = (parts) =>{
  console.log(parts)
  return(
    <div>
      <Part1 part1 = {parts.parts[0].part1} exercises1 = {parts.parts[0].exercises1} />
      <Part2 part2 = {parts.parts[1].part2} exercises2 = {parts.parts[1].exercises2} />
      <Part3 part3 = {parts.parts[2].part3} exercises3 = {parts.parts[2].exercises3} />
    </div>
    
  )
}
/*
const Content = ({parts})=>{
  return(
    <div>
     <Part1 part1 = {parts[0].part1} exercises1 ={parts[0].exercises1}  />
     <Part2 part2 = {parts[1].part2} exercises2 ={parts[1].exercises2} />
     <Part3 part3 = {parts[2].part3} exercises3 ={parts[2].exercises3}/>
     
    </div>

  )
} */
const Total = (props) =>{
  return(
     <div>
     <p>
       Number of Exercises {props.number}
     </p>      
     </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const Contents = [
    {part1:'Fundamentals of React',
     exercises1 : 10 
    } ,
    {
      part2: 'Using props to pass data',
      exercises2 : 7
    } ,
    {
      part3: 'State of a component',
      exercises3: 14
    }
  ]

  return (
    <div>
      <Header course ={course}/>
      <Content parts ={Contents} />
      <Total number ={Contents[0].exercises1 + Contents[1].exercises2 + Contents[2].exercises3} />
    </div>
  )
}

export default App