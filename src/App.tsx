import React from 'react';
import './App.css';
import {Task1} from "./components/task_1/task_1";
import {Task2} from "./components/task_2/task_2";
import {Task3} from "./components/task_3/task3";
import {Task4} from "./components/task_4/task4";
import {Task5} from "./components/task_5/task5";
import {Tasks} from "./components/tasks/tasks";

function App() {
    return (
        <div className="App">
            <Task1/>
            <Task2/>
            <Task3/>
            <Task4/>
            <Task5/>
            <Tasks/>
        </div>
    );
}

export default App;
