import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return <h1>{props.course[0].name}</h1>
};

const Part = (props) => <p>{props.part} {props.exercise}</p>
const Content = (props) => {
    return (
        <div>
            <Part part={props.course[0].parts[0].name} exercise={props.course[0].parts[0].exercises} />
            <Part part={props.course[0].parts[1].name} exercise={props.course[0].parts[1].exercises} />
            <Part part={props.course[0].parts[2].name} exercise={props.course[0].parts[2].exercises} />
        </div>
    )
}
const Total = (props) => <p>Number of exercises: {props.course[0].parts[0].exercises + props.course[0].parts[1].exercises + props.course[0].parts[2].exercises} </p>

const App = () => {
    const course = [
        {
            name: 'Half Stack application development',
            parts: [{
                name: 'Fonndamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            }
                , {
                name: 'State of a component',
                exercises: 14
            }]
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
            <p>{counter}</p>
            <button onClick={addOne}>plus</button>

        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));