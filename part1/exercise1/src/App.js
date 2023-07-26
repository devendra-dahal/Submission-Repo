
const App = () => {
  const course = {
    name:  'Half Stack application development',
    parts: [
      {
        name : 'Fundamentals of React',
        exercise : 10
      },  
      {
        name : 'Using props to pass data',
        exercise : 7
      },   
      {
        name : 'State of a component',
        exercise : 14
      } 
    ]  
  }

  return (
    <div>
      <Header course ={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = (props) =>{
  console.log(props)
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} ex={props.parts[0].exercise}/>
      <Part part={props.parts[1].name} ex={props.parts[1].exercise}/>
      <Part part={props.parts[2].name} ex={props.parts[2].exercise}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.ex}
    </p>
  )
}
export default App;
