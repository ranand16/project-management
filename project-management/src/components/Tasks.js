import React from 'react'
import { Table } from 'antd';

let onchnagecheckbox, rKey;
const cols = [
    { title: "status", dataIndex: "status", render: (text, record, i) => {
       return <input id={record.key} type="checkbox" checked={text} onChange={onchnagecheckbox.bind(this, rKey, record["key"])} />
    }},
    { title: "description", dataIndex: "description" },
    { title: "Remove", dataIndex: "key", render: (text, record, index) => 
        <input id={text} type="submit" className="btn btn-primary" value="Remove" />
    }
]

const Tasks = (props) => {
    const { tasks } = props;
    rKey = props.rKey;
    onchnagecheckbox = props.onTaskStatusChange;
    return <React.Fragment>
        <Table 
            showHeader = {false}
            pagination={false}
            columns = {cols}
            dataSource = {tasks}
        />
    </React.Fragment>
}

export default Tasks