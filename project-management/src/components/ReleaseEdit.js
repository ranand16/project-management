import React, { useState } from 'react'
import { Form, Input, Modal, FormText, ModalFooter, Button, ModalHeader, ModalBody, Label, FormGroup } from "reactstrap"
// { "key": "Version 1.0","version": "Version 1.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: []},

const ReleaseEdit = (props) => {
    const key = props.rData.key
    const [version, setVersion] = useState(props.rData.version || "")
    const [startdate, setStartdate] = useState(props.rData.startdate || "")
    const [releasedate, setReleasedate] = useState(props.rData.releasedate || "")
    const [description, setDescription] = useState(props.rData.description || "")
    const [dateFeedback, setDateFeedback] = useState(null)
    console.log(props.rData)
    
    const versionOnChange = (e) => { if(e && e.target.value) setVersion(e.target.value) }
    const startdateOnChange = (e) => { if(e && e.target.value) setStartdate(new Date(e.target.value).getTime()) }
    const releasedateOnChange = (e) => { if(e && e.target.value) setReleasedate(new Date(e.target.value).getTime()) }
    const descriptionOnChange = (e) => { if(e && e.target.value) setDescription(e.target.value) }

    const toggle = () => { props.toggle() }
    
    const save = () => {
        console.log(startdate, releasedate, startdate >= releasedate)
        if(startdate && releasedate && startdate >= releasedate) {
            setDateFeedback("Start needs to be behind release!")
            return
        }
        props.saveEditedRecord({ key, version, startdate, releasedate, description });
        toggle();
    }

    // const getDate = (ts) =>{
    //     const timeStamp = ts;
    //     let date = new Date(timeStamp);
    //     const dd = date.getDate()<10?'0'+date.getDate():date.getDate();
    //     let mm = date.getMonth()+1; //January is 0!
    //     mm = mm<10?'0'+mm:mm;
    //     var yyyy = date.getFullYear();
    //     if(yyyy<10) yyyy='000'+yyyy
    //     else if(yyyy<100 && yyyy>=10) yyyy='00'+yyyy
    //     else if(yyyy<1000 && yyyy>=100) yyyy='0'+yyyy
    //     date = yyyy+'-'+mm+'-'+dd;
    //     return date;
    // }

    const parseDate = (timestamp) => {         
        const dateObj = new Date(timestamp);
        const mon = ((dateObj.getMonth() + 1)>9)?(dateObj.getMonth() + 1):("0"+(dateObj.getMonth() + 1))
        const day = (dateObj.getDate()>9)?(dateObj.getDate()):("0"+dateObj.getDate())
        const date = dateObj.getFullYear()+"-" + mon + "-"+ day ;
        return date.trim();
    }

    return (
        <Modal isOpen={props.rData?true:false} toggle={toggle} fade={true} backdrop={"static"} size={"lg"} >
            <ModalHeader>Release Details</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="version">Version</Label>
                        <Input id="version" type="text" value={version} onChange={versionOnChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="startdate">Start Date</Label>
                        <Input id="startdate" type="date" value={startdate!==""?parseDate(startdate):""} onChange={startdateOnChange} />
                        <FormText>{dateFeedback?<span style={{ color: "red" }}>{dateFeedback}</span>:""}</FormText>
                    </FormGroup>
                    <FormGroup>
                        <Label for="releasedate">Release Date</Label>
                        <Input id="releasedate" type="date" value={releasedate!==""?parseDate(releasedate):""} onChange={releasedateOnChange} />
                        <FormText>{dateFeedback?<span style={{ color: "red" }}>{dateFeedback}</span>:""}</FormText>
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