import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import ReactDragListView from 'react-drag-listview'; 
import { ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import RemoveModal from './RemoveModal'

class Releases extends React.PureComponent {
    constructor(props) {
        super(props);
        // will store data confined to this component only (eg. input fields)
        this.state = { 
            releaseData: [],
            versionName: null,
            startDate: null,
            releaseDate: null,
            description: null,
            actionToggle: false,
            removeModalToggle: false,
            removeType: ""
        }
        this.columns = [
            {
                title: "Version name",
                dataIndex: "version",
                width: "15%",
                render: (text, record, index) => <span style={{ cursor: "grab" }} key={index} className="drag-handle" href="#">
                    <svg width="1.4em" height="1.5em" viewBox="0 0 16 16" className="bi bi-grip-horizontal" fill="#b0b0b0" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> {text}</span>
            },
            { title: "Status", dataIndex: "status", width: "15%" },
            { title: "Progress", dataIndex: "progress", width: "15%"},
            { title: "Start date", dataIndex: "startdate", width: "15%", render:(text, record, index)=> <>{this.parseDate(text)}</> },
            { title: "Release date", dataIndex: "releasedate", width: "15%", render:(text, record, index)=> <>{this.parseDate(text)}</> },
            { title: "Description", dataIndex: "description", width: "15%" },
            { title: "Actions", dataIndex: "actions", width: "10%", render:(text, record, index) => 
                <ButtonDropdown className={"dropDwonMwnu"} isOpen={this.state.actionToggle===record["version"]} toggle={this.toggleActions.bind(this,record["version"])}>
                    <DropdownToggle style={{ color: "grey" }} color="link">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-three-dots" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                        </svg>
                    </DropdownToggle>  
                    <DropdownMenu right>
                        <DropdownItem>Edit</DropdownItem>
                        <DropdownItem><span onClick={this.removeToogle.bind(this, record["version"])}>Delete</span></DropdownItem>
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
    }

    static getDerivedStateFromProps(props, state) {
        return { releaseData: props.releaseData };
    }
    
    updateDataAfterDragNDrop = (data) => {
        this.props.dragndrop(data);
    }

    toggleActions = (version) => {
        this.setState(prevState=> {
            if(prevState.actionToggle===version) return { actionToggle: false }
            else return { actionToggle: version }    
        })
    }

    removeToogle = (version) => {
        console.log(version);
        this.setState({ removeType: version })
        this.toggleRemoveModal();
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
    }

    /**
     * to reset all the feilds in the new release form
     */
    resetNewReleaseForm = () => {
        this.setState({
            versionName: null,
            startDate: null,
            releaseDate: null,
            description: null,
        })
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
        newRelease["key"] = versionName || "Version Name" // used for expanding particular row & validation
        newRelease["version"] = versionName || "Version Name"
        newRelease["status"] = "In progress"
        newRelease["progress"] = 0;
        newRelease["startdate"] = startDate || new Date().getTime()
        newRelease["releasedate"] = releaseDate || new Date().getTime()
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
        this.props.addRelease(this.createReleaseObject())
        // this.resetNewReleaseForm();
    }

    /**
     * 
     * @param {Timestamp will be converted to stringified date to be displayed} timestamp 
     */
    parseDate = (timestamp) => {         
        const dateObj = new Date(timestamp);
        return (dateObj.getMonth() + 1) + "/" + dateObj.getDate() + "/" + dateObj.getFullYear();
    }
    
    render() {
        // const { releaseData:data } = this.props;
        const { releaseData:data, removeModalToggle, removeType } = this.state;
        console.log(data)
        return (
            <div className="parentContainer container-fluid">
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
                                columns={this.columns}
                                pagination={false}
                                expandedRowRender={ record => <p style={{ margin: 0 }}>{record.description}</p>}
                                dataSource={data}
                                expandable={{ defaultExpandAllRows: false }}
                            />
                        </ReactDragListView>
                    </div>
                    <form onSubmit={this.addVersionRelease} >
                        <table>
                            <thead>
                                <tr>
                                    <td style={{ width: "45%" }}><input id="versionName" onChange={this.newReleaseOnChangeHandler} type="text" className="form-control" placeholder="Version name" /></td>
                                    <td className="fifteenPercent"><input id="startDate" onChange={this.newReleaseOnChangeHandler} type="date" className="form-control" placeholder="Start date" /></td>
                                    <td className="fifteenPercent"><input id="releaseDate" onChange={this.newReleaseOnChangeHandler} type="date" className="form-control" placeholder="Release date" /></td>
                                    <td className="fifteenPercent"><input id="description" onChange={this.newReleaseOnChangeHandler} type="text" className="form-control" placeholder="Description" /></td>
                                    <td className="tenPercent"><input id="add" type="submit" className="btn btn-primary" value="Add" /></td>
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
        removeRelease: (version) => { dispatch({ type: 'DELETE_RELEASE', version }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Releases)