import React from 'react';

const Task = (value) => {
    return (
        <li>{value}</li>
    );
}

const tasks = ['Acordar', 'Café da Manhã', 'Correr', 'Academia', 'Estudar', 'Aula Trybe', 'Exercícios'];

class Tasks extends React.Component {
    render() {
        return (
            <ul>{tasks.map(task => Task(task))}</ul>
        );
    }
}
export default Tasks;