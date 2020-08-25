import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import ReactDragListView from 'react-drag-listview'; 
import { ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu, Progress, FormText, Input } from 'reactstrap';
import RemoveModal from './RemoveModal'
import Tasks from './Tasks'
import ReleaseEdit from './ReleaseEdit'

class Releases extends React.PureComponent {
    constructor(props) {
        super(props);
        // will store data confined to this component only (eg. input fields)
        this.state = { 
            releaseData: [],
            versionName: "",
            startDate: "",
            releaseDate: "",
            description: "",
            actionToggle: false,
            removeModalToggle: false,
            removeType: "",
            editableRecordData: null,
            dateFeedback: null
        }
        this.columns = [
            {
                title: "Version name",
                dataIndex: "version",
                width: "15%", 
                className:"elipsis",
                render: (text, record, index) => <span style={{ cursor: "grab" }} key={index} className="drag-handle" href="#">
                    <svg width="1.4em" height="1.5em" viewBox="0 0 16 16" className="bi bi-grip-horizontal" fill="#b0b0b0" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> {text}</span>
            },
            { title: "Status", dataIndex: "tasks", width: "15%", render: (data, record, index)=> {
                let totalTasks = data.length
                if(!totalTasks) return <span className={"inprogress"}>IN PROGRESS</span>
                let taskComplete = 0;
                data.forEach((t)=>{
                    if(t["status"]) taskComplete++
                })
                if(totalTasks === taskComplete) return <span className={"released"}>RELEASED</span>
                else if(!taskComplete) return <span className={"inprogress"}>IN PROGRESS</span>
                else return <span className={"unreleased"}>UNRELEASED</span>
            }},
            { title: "Progress", dataIndex: "tasks", className: "progressBar", width: "15%", render: (data, record)=> {
                let totalTasks = data.length
                let taskComplete = 0;
                data.forEach((t)=>{
                    if(t["status"]) taskComplete++
                })
                let successBar = (taskComplete/totalTasks)*100 
                let unsuccessBar = ((totalTasks-taskComplete)/totalTasks)*100 
                return <Progress style={{ paddingRight: "5px" }} multi>
                    <Progress bar color="success" value={successBar} />
                    <Progress bar value={unsuccessBar} />
                </Progress>
            }},
            { title: "Start date", dataIndex: "startdate", width: "15%", render:(text, record, index)=> <>{this.parseDate(text)}</> },
            { title: "Release date", dataIndex: "releasedate", width: "15%", render:(text, record, index)=> <>{this.parseDate(text)}</> },
            { title: "Description", dataIndex: "description", className:"elipsis", width: "15%" },
            { title: "Actions", dataIndex: "actions", width: "10%", render:(text, record, index) => 
                <ButtonDropdown className={"dropDwonMwnu"} isOpen={this.state.actionToggle===record["key"]} toggle={this.toggleActions.bind(this,record["key"])}>
                    <DropdownToggle style={{ color: "grey" }} color="link">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                    </DropdownToggle>  
                    <DropdownMenu right>
                        <DropdownItem onClick={this.editRecordToggle.bind(this, record)}>Edit</DropdownItem>
                        <DropdownItem onClick={this.removeToogle.bind(this, record["key"])}>Delete</DropdownItem>
                    </DropdownMenu>                  
                </ButtonDropdown>
            }
        ]
        const that = this;
        this.dragProps = { 
            onDragEnd(fromIndex, toIndex) { // callback for drag and drop
                let data = [...that.props.releaseData]; // immuta
                const item = data.splice(fromIndex, 1)[0];
                data.splice(toIndex, 0, item);
                that.updateDataAfterDragNDrop(data);
            },
            handleSelector: "span",
            ignoreSelector: "tr.ant-table-expanded-row",
            nodeSelector: "tr.ant-table-row"

        };

        this.taskcols = [
            { title: "status", dataIndex: "status" },
            { title: "description", dataIndex: "description" },
            { title: "Remove", dataIndex: "key", render: (text, record, index) => 
                <input id={text} type="submit" className="btn btn-primary" value="Remove" />
            }
        ]

    }

    static getDerivedStateFromProps(props, state) {
        return { releaseData: props.releaseData };
    }
    
    /**
     * This function is used to create a random id 
     */
    makeid = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    /**
     * 
     * @param {new data} data 
     */
    updateDataAfterDragNDrop = (data) => {
        this.props.dragndrop(data);
    }

    /**
     * 
     * @param {version key} version 
     */
    toggleActions = (key) => {
        this.setState(prevState=> {
            if(prevState.actionToggle===key) return { actionToggle: false }
            else return { actionToggle: key }    
        })
    }

    /**
     * 
     * @param {record is the release data} record 
     */
    editRecordToggle = (record, e) => {
        this.setState({ editableRecordData: record })
    }

    /**
     * 
     * @param {new reocrd} record 
     */
    saveEditedRecord = (release) => {
        let { editableRecordData } = this.state;
        editableRecordData["version"] = release["version"]
        editableRecordData["startdate"] = release["startdate"]
        editableRecordData["releasedate"] = release["releasedate"]
        editableRecordData["description"] = release["description"]
        this.props.editRelease(editableRecordData);
    }

    /**
     * 
     * @param {version for removing the toggle} version 
     */
    removeToogle = (key) => {
        this.setState({ removeType: key })
        this.toggleRemoveModal();
    }

    /**
     * 
     * @param {relase key for identifying the release which this task exists} releaseKey 
     * @param {task key identifying task} taskKey 
     */
    removeTaskFromRelease = (releaseKey, taskKey) => {
        console.log(releaseKey, taskKey)
        this.props.deleteTask(releaseKey, taskKey);
    }

    /**
     * 
     * @param {relase key for identifying the release which this task exists} releaseKey 
     * @param {task key identifying task} taskKey 
     */
    onTaskStatusChange = (releaseKey, taskKey) => {
        console.log(releaseKey, taskKey)
        this.props.changeTaskStatus(releaseKey, taskKey, this.makeid(10));
    }

    /**
     * This functon toggles the modal used for removing a task or a section
     */
    toggleRemoveModal = () => {
        this.setState(prevState => ({ removeModalToggle: !prevState.removeModalToggle }));
    }

     /**
     * This function gets called when someone presses confirm on the remove dialog box
     */
    confirmRemoval = () => {
        const { removeType } = this.state;
        this.props.removeRelease(removeType); 
        this.toggleRemoveModal(); // if removeRelease was a server call we would have used this function in the callback 
    }

    /**
     * to reset all the feilds in the new release form
     */
    resetNewReleaseForm = () => {
        this.setState({ startDate: "", releaseDate: "", versionName: "", description: "", dateFeedback: null })
    }
    
    /**
     * @param {event handler} e 
     * On change handler for each input in the new release form
     */
    newReleaseOnChangeHandler = (e) => {
        if(e.target.id && e.target.value){
            switch (e.target.id){
                case "versionName":
                    this.setState({ versionName: e.target.value })
                    break; 
                case "startDate":
                    this.setState({ startDate: new Date(e.target.value).getTime() }) // converting the time to timestamp
                    break; 
                case "releaseDate":
                    this.setState({ releaseDate: new Date(e.target.value).getTime() }) // converting the time to timestamp
                    break; 
                case "description":
                    this.setState({ description: e.target.value })
                    break; 
                default: 
                    break;
            }
        }
    }
    
    /**
     * This function will prepare a new object for the new release
     */
    createReleaseObject = () => {
        const newRelease = Object.create({});
        const { versionName, startDate, releaseDate, description } = this.state;
        const newRandomKey = this.makeid(10);
        newRelease["key"] = newRandomKey
        newRelease["version"] = versionName || "Version Name"
        newRelease["status"] = "In progress"
        newRelease["progress"] = 0;
        newRelease["startdate"] = startDate || new Date().getTime()
        newRelease["releasedate"] = releaseDate || new Date().getTime() + 86400000 // adding some time for release
        newRelease["description"] = description || "--"
        newRelease["tasks"] = [];
        return newRelease
    }

    /**
     * 
     * @param {event handler} e 
     * This function is add button event handler
     */
    addVersionRelease = (e) => {
        e.preventDefault()
        const { startDate, releaseDate } = this.state;
        if(startDate && releaseDate && startDate >= releaseDate) {
            this.setState({ dateFeedback: "Start needs to be behind release!" })
            return
        }
        this.props.addRelease(this.createReleaseObject())
        this.resetNewReleaseForm();
    }

    /**
     * 
     * @param {Release to which this task will be added} releaseKey 
     * @param {Task value} newTaskValue 
     */
    addNewTask = (releaseKey, newTaskValue) => {
        const newTaskObj = Object.create({})
        newTaskObj["key"] = this.makeid(5)
        newTaskObj["description"] = newTaskValue
        newTaskObj["status"] = false
        this.props.addNewReleaseTask(releaseKey, newTaskObj)
    }

    /**
     * 
     * @param {Timestamp will be converted to stringified date to be displayed} timestamp 
     */
    parseDate = (timestamp) => {         
        const dateObj = new Date(timestamp);
        const mon = ((dateObj.getMonth() + 1)>9)?(dateObj.getMonth() + 1):("0"+(dateObj.getMonth() + 1))
        const day = (dateObj.getDate()>9)?(dateObj.getDate()):("0"+dateObj.getDate())
        const date = dateObj.getFullYear()+"-" + mon + "-"+ day ;
        return date.trim();
    }
    
    render() {
        const { releaseData:data, removeModalToggle, removeType, editableRecordData, dateFeedback, startDate, releaseDate, versionName, description } = this.state;
        const showStartDate = startDate!==""?this.parseDate(startDate):""
        const showReleaseDate = releaseDate!==""?this.parseDate(releaseDate):""
        return (
            <div className="parentContainer container-fluid">
                { editableRecordData &&
                    <ReleaseEdit 
                        rData={editableRecordData} 
                        toggle={this.editRecordToggle.bind(null)} 
                        saveEditedRecord={this.saveEditedRecord}
                    /> 
                }
                <RemoveModal 
                    isOpen={removeModalToggle} 
                    removeType={removeType}
                    toggleRemoveModal={this.toggleRemoveModal} 
                    confirmRemoval={this.confirmRemoval}
                />
                <div className="header">
                        <p>Projects&nbsp;&nbsp;/&nbsp;&nbsp;ENV 1.5</p>
                        <h3>Releases</h3>
                </div>
                <div className="contentDetails" >
                    <div id="releases" >
                        <ReactDragListView {...this.dragProps}>
                            <Table
                                tableLayout={"fixed"}
                                columns={this.columns}
                                pagination={false}
                                dataSource={data}
                                expandable={{ defaultExpandAllRows: false }}
                                expandedRowRender={ record => <div style={{ margin: 0 }}>     
                                    <Tasks tasks={record.tasks} rKey={record.key} removeTask={this.removeTaskFromRelease} onTaskStatusChange={this.onTaskStatusChange} addNewTask={this.addNewTask} />
                                </div>}
                            />
                        </ReactDragListView>
                    </div>
                    <form onSubmit={this.addVersionRelease} >
                        <table>
                            <thead>
                                <tr>
                                    <td style={{ width: "45%" }}>
                                        <input id="versionName" onChange={this.newReleaseOnChangeHandler} value={versionName} type="text" className="form-control" placeholder="Version name" required />
                                        {/* <FormFeedback>{}</FormFeedback> */}
                                        <FormText style={{ visibility: "hidden" }}>{"dummy"}</FormText>
                                    </td>
                                    <td className="fifteenPercent">
                                        <Input id="startDate" onChange={this.newReleaseOnChangeHandler} value={showStartDate} type="date" className="form-control" placeholder="Start date" />
                                        <FormText>{dateFeedback?<span style={{ color: "red" }}>{dateFeedback}</span>:"Default: Today"}</FormText>
                                    </td>
                                    <td className="fifteenPercent">
                                        <input id="releaseDate" onChange={this.newReleaseOnChangeHandler} value={showReleaseDate} type="date" className="form-control" placeholder="Release date" />
                                        <FormText>{dateFeedback?<span style={{ color: "red" }}>{dateFeedback}</span>:"Default: Tomorrow"}</FormText>
                                    </td>
                                    <td className="fifteenPercent">
                                        <input id="description" onChange={this.newReleaseOnChangeHandler} value={description} type="text" className="form-control" placeholder="Description" />
                                        <FormText style={{ visibility: "hidden" }}>{"dummy"}</FormText>
                                    </td>
                                    <td className="tenPercent">
                                        <input id="add" type="submit" className="btn btn-primary" value="Add" />
                                        <FormText style={{ visibility: "hidden" }}>{"dummy"}</FormText>
                                    </td>
                                </tr>
                            </thead>
                        </table>
                    </form>
                </div>
            </div>
        )
    }
}

/**
 * 
 * @param {This contains store data. Map data from store to this component's props} state 
 * we can have own props for this component as second argument
 */

const mapStateToProps = (state) => {
    return {
        releaseData: state.releaseData 
    }
}

/**
 * 
 * @param {this is the disaptch function that will be used for different actions on the redux store} dispatch 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        dragndrop: (data) => { dispatch({ type: 'DRAG_N_DROP', data }) },
        addRelease: (data) => { dispatch({ type: 'ADD_RELEASE', data }) },
        removeRelease: (key) => { dispatch({ type: 'DELETE_RELEASE', key }) },
        editRelease: (newRelease) => { dispatch({ type: 'EDIT_RELEASE', editedRelease: newRelease }) },
        changeTaskStatus: (releaseKey, taskKey) => { dispatch({ type: 'CHANGE_TASK_STATUS', checkData: { releaseKey, taskKey } }) },
        addNewReleaseTask: (releaseKey, newTaskObj) => { dispatch({ type: 'ADD_NEW_TASK', taskData: { releaseKey, newTaskObj } }) },
        deleteTask: (releaseKey, taskKey) => { dispatch({ type: 'DELETE_TASK', keys: { releaseKey, taskKey } }) }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Releases)