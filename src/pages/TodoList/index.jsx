import { useState } from "react"

export const TodoList = () => {

    const [tasksName, setTasksName] = useState("")
    const [tasksList, setTasksList] = useState([])

    const handleAddTask = (newTask) => {
        setTasksList([...tasksList, newTask])
        setTasksName('')
    }

    const handleRemoveTask = (trashTask) => {
        setTasksList(tasksList.filter(task => task !== trashTask))
    }

    const styleList = {width: "150px", backgroundColor: "azure", padding: "8px", margin: "0 auto"}

    return (
        <div>
            <h1>TO-DO LIST</h1>
            <input type="text" value={tasksName} onChange={evt => setTasksName(evt.target.value)} />
            <button onClick={() => handleAddTask(tasksName)}>Adicionar Tarefa</button>

            <br /><br />
            {tasksList.map(task => 
            <div style={styleList} key={task.id}>{task} 
                <br /><br />
            <button onClick={() => handleRemoveTask(task)}>Excluir</button>
            </div>
            )}
        </div>
    )
}