import React, { useState } from 'react'
import { Table } from 'antd';

let onchnagecheckbox, rKey;
const cols = [
    { title: "status", width: "5%", dataIndex: "status", render: (text, record, i) => {
       return <input id={record.key} type="checkbox" checked={text} onChange={onchnagecheckbox.bind(this, rKey, record["key"])} />
    }},
    { title: "description", dataIndex: "description" },
]


const Tasks = (props) => {
    const [newTaskValue, setnewTaskValue] = useState("")

    /**
     * This function is onchange handler for project name edit
     */
    const newTaskChange = (e) => {
        setnewTaskValue(e.target.value?e.target.value:"")  
    }

    /**
     * This function deals with esc and enter button press from keyboard while editing project name
     */
    const editedTaskKeyValue = (rKey, e) => {
        // 27 for esc 13 for enter
        if(e && e.keyCode){
            switch(e.keyCode){
                case 27: // this is escape
                    cancelNewTask();
                    break;
                case 13: // this is confirm
                    confirmNewTask(rKey)
                    break
                default: 
                    break
            }
        }
    }

    /**
    * This Single function can be used to handle cancel operation for edit section name or task
    */
    const cancelNewTask = (e) => {
        // console.log(e.currentTarget.getAttribute("name"))
        if(newTaskValue){
            setnewTaskValue("")
        }
    }

    const confirmNewTask = (rKey) => {
        console.log(rKey)
        if (newTaskValue === "") return 
        props.addNewTask(rKey, newTaskValue)
        setnewTaskValue("");
    }

    const { tasks } = props
    rKey = props.rKey;
    onchnagecheckbox = props.onTaskStatusChange;
    return <React.Fragment>
        <Table tableLayout={"fixed"} showHeader = {false} pagination={false} columns = {cols} dataSource = {tasks} />
        <input className="form-control" name="newTaskName" value={newTaskValue} onChange={newTaskChange} onKeyDown={editedTaskKeyValue.bind(this, rKey)} autoFocus />
        <span className={"editSubtext"}>Press Esc to <a onClick={cancelNewTask} name="newTaskName" >cancel</a> and Enter to <a onClick={confirmNewTask.bind(this, rKey)} name="projectNameEdit">confirm</a>.</span>
    </React.Fragment>
}

export default Tasks