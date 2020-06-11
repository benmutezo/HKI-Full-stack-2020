import React from "react";

const Header = ({title}) => {
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

const Part = ({name, exercise}) => (
    <p>
        {name} {exercise}
    </p>
);


const Total = ({total}) => {
    const reducer = (acc, curr) => acc + curr;
    let exercises = total.map((subject) => subject.exercises);
    let sum = exercises.reduce(reducer);
    return <h3> The sum of exercises {sum}</h3>
}

const Content = ({title, parts}) => {
    return (
        <div>
            <Header title={title}/>
            {
                parts.map(part => <Part key={part.id} name={part.name} exercise={part.exercises}/>)
            }
            <Total total={parts}/>
        </div>
    )
};

const Course = ({courses}) => {
    return (
        <div>
            {
                courses.map(course => <Content key={course.id}
                                               title={course.name}
                                               parts={course.parts}/>)
            }
        </div>
    )
};

export default Course;