import React from 'react';
import { connect } from 'react-redux';
 
class Releases extends React.PureComponent {
    constructor(props) {
        super(props);
        // will store data confined to this component only (eg. input fields)
        this.state = { 

        }
    }

    createReleaseObject = () => {
        const newRelease = Object.create({});
        newRelease["version"] = "5"
        newRelease["status"] = "Unreleased"
        newRelease["progress"] = "12"
        newRelease["startdate"] = 1597802024
        newRelease["releasedate"] = 1598902024
        newRelease["description"] = "This is a new version to have everything at right place."
        newRelease["tasks"] = [];
        return newRelease
    }

    addVersionRelease = (e) => {
        e.preventDefault()
        console.log("hello")
        this.props.addRelease(this.createReleaseObject())
    }

    render() {
        const { releaseData } = this.props;
        console.log(releaseData);
        return (
            <div className="parentContainer container-fluid">
                <div className="header">
                        <p>Projects&nbsp;&nbsp;/&nbsp;&nbsp;ENV 1.5</p>
                        <h3>Releases</h3>
                </div>
                <div className="contentDetails" >
                    <div id="releases" >
                        <table className="table">
                        <thead><tr><th scope="col" className="thirteenPercent">Version</th><th scope="col" className="thirteenPercent">Status</th><th scope="col">Progress</th><th scope="col" className="thirteenPercent">Start date</th><th scope="col" className="thirteenPercent">Release date</th><th scope="col" className="thirteenPercent">Description</th><th scope="col" className="sevenPercent">Actions</th></tr></thead>
                        <tbody>
                            {
                                releaseData.length>0?
                                    releaseData.map((data)=>{
                                        return <tr key={data["version"]}>
                                            <th scope="row">{data["version"]}</th>
                                            <td>{data["status"]}</td>
                                            <td>{data["progress"]}</td>
                                            <td>{data["startdate"]}</td>
                                            <td>{data["releasedate"]}</td>
                                            <td>{data["description"]}</td>
                                        </tr>
                                    })
                                :<div className="middleCenter">NO DATA AVAILABLE</div>
                            }
                        </tbody>
                        </table>
                    </div>
                    <form onSubmit={this.addVersionRelease} >
                        <table>
                            <thead>
                                <tr>
                                    <td><input type="text" className="form-control" placeholder="Version name" /></td>
                                    <td className="thirteenPercent"><input type="text" className="form-control" placeholder="Start date" /></td>
                                    <td className="thirteenPercent"><input type="text" className="form-control" placeholder="Release date" /></td>
                                    <td className="thirteenPercent"><input type="text" className="form-control" placeholder="Description" /></td>
                                    <td className="sevenPercent"><input type="submit" className="btn btn-primary" value="Add" /></td>
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
 */
const mapStateToProps = (state) => { // we can have own props for this component as second argument
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
        addRelease: (data) => { dispatch({ type: 'ADD_RELEASE', data }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Releases)