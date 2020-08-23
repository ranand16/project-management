import React, { useState } from 'react'
import { Form, Input, Modal, FormFeedback, ModalFooter, Button, ModalHeader, ModalBody, Label, FormGroup } from "reactstrap"
// { "key": "Version 1.0","version": "Version 1.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: []},

const ReleaseEdit = (props) => {
    console.log(props)
    const key = props.rData.key
    const [version, setVersion] = useState(props.rData.version || "")
    const [startdate, setStartdate] = useState(props.rData.startdate || "")
    const [releasedate, setReleasedate] = useState(props.rData.releasedate || "")
    const [description, setDescription] = useState(props.rData.description || "")
    console.log(props)

    const versionOnChange = (e) => { if(e && e.target.value) setVersion(e.target.value) }
    const startdateOnChange = (e) => { if(e && e.target.value) setStartdate(e.target.value) }
    const releasedateOnChange = (e) => { if(e && e.target.value) setReleasedate(e.target.value) }
    const descriptionOnChange = (e) => { if(e && e.target.value) setDescription(e.target.value) }

    const toggle = () => { props.toggle() }
    
    const save = () => {
        props.saveEditedRecord({ key, version, startdate, releasedate, description });
        toggle();
    }

    const getDate = (ts) =>{
        const timeStamp = ts;
        let date = new Date(timeStamp);
        const dd = date.getDate()<10?'0'+date.getDate():date.getDate();
        let mm = date.getMonth()+1; //January is 0!
        mm = mm<10?'0'+mm:mm;
        var yyyy = date.getFullYear();
        if(yyyy<10) yyyy='000'+yyyy
        else if(yyyy<100 && yyyy>=10) yyyy='00'+yyyy
        else if(yyyy<1000 && yyyy>=100) yyyy='0'+yyyy
        date = yyyy+'-'+mm+'-'+dd;
        return date;
    }

    return (
        <Modal isOpen={props.rData} toggle={toggle} fade={true} backdrop={"static"} size={"lg"} >
            <ModalHeader>Release Details</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="version">Version</Label>
                        <Input id="version" type="text" value={version} onChange={versionOnChange} />
                        <FormFeedback>You will not be able to see this</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="startdate">Start Date</Label>
                        {/* <Input id="startdate" type="date" value={parsedTSStart.getFullYear() + '-' + dtol(parsedTSStart.getMonth(), 2) + '-' + dtol(parsedTSStart.getDate(), 2)} onChange={startdateOnChange} /> */}
                        <Input id="startdate" type="date" value={getDate(startdate)} onChange={startdateOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="releasedate">Release Date</Label>
                        <Input id="releasedate" type="date" value={getDate(releasedate)} onChange={releasedateOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input id="description" type="text" value={description} onChange={descriptionOnChange} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={save}>Save</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ReleaseEdit