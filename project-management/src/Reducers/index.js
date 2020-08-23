const initState = {
    releaseData: [
        { "key": "Version 1.0","version": "Version 1.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 2.0","version": "Version 2.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: false},{key:"67gv46546f","description": "This is a second great task for first release", status: false},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: false}]},
        { "key": "Version 3.0","version": "Version 3.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: false},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 4.0","version": "Version 4.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: false},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 5.0","version": "Version 5.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 6.0","version": "Version 6.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: false},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 7.0","version": "Version 7.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 8.0","version": "Version 8.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: false},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 9.0","version": "Version 9.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: false},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 10.0","version": "Version 10.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 11.0","version": "Version 11.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: false},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 12.0","version": "Version 12.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 13.0","version": "Version 13.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: false},{key:"67gv46546f","description": "This is a second great task for first release", status: false},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 14.0","version": "Version 14.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 15.0","version": "Version 15.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: false},{key:"67gv46546f","description": "This is a second great task for first release", status: false},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 16.0","version": "Version 16.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 17.0","version": "Version 17.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 18.0","version": "Version 18.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: false},{key:"67gv46546f","description": "This is a second great task for first release", status: false},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 19.0","version": "Version 19.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 20.0","version": "Version 20.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: false},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 21.0","version": "Version 21.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 22.0","version": "Version 22.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: true},{key:"67gv46546f","description": "This is a second great task for first release", status: false},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 23.0","version": "Version 23.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: false},{key:"67gv46546f","description": "This is a second great task for first release", status: true},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
        { "key": "Version 24.0","version": "Version 24.0", "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{key:"06d646546f", "description": "This is a great task for first release", status: false},{key:"67gv46546f","description": "This is a second great task for first release", status: false},{key:"06d64656cs","description": "This is a task to ipload the prject for first release", status: true}]},
    ]
    // releaseData: []
}

const rootReducer = (state=initState, action) => {
    switch(action.type) {
        case "DRAG_N_DROP": 
        return {
            ...state,
            releaseData: action.data
        }
        case "ADD_RELEASE": return {
            ...state,
            releaseData: [...state.releaseData, action.data]
        }
        case "DELETE_RELEASE": 
            const data = [...state.releaseData]
            const index = data.findIndex((release, index)=>{ 
                if(release["version"]===action["version"]) return index 
                return -1
            })
            if(index>-1) data.splice(index,1)
            return {
                ...state,
                releaseData: data
            }
        case "CHANGE_TASK_STATUS": 
            let rdata = [...state.releaseData]
            const { checkData } = action
            const { releaseKey, taskKey } = checkData;
            console.log(releaseKey, taskKey)
            let release = rdata.find((release)=>release["key"]===releaseKey )
            const releaseKeyIndex = rdata.findIndex((releasedata, index)=> releasedata["key"]===releaseKey)
            if(!release) return null
            let task = release.tasks.find((task)=> task["key"]===taskKey)
            const taskKeyIndex = release.tasks.findIndex((task, index)=>task["key"]===taskKey)
            console.log(release, task)
            console.log(releaseKeyIndex, taskKeyIndex)
            if(!task) return null
            task['status'] = !task['status']
            release["tasks"][taskKeyIndex] = task
            rdata[releaseKeyIndex] = release
            return {
                ...state,
                releaseData: rdata
            }

        case "ADD_NEW_TASK": 
            let reldata = [...state.releaseData]
            const { taskData } = action
            const { releaseKey: rKey, newTaskObj } = taskData;
            reldata.forEach((release)=>{
                if(rKey === release["key"]) {
                    release["tasks"].push(newTaskObj)
                }
            })
            return {
                ...state,
                releaseData: reldata
            }
        default: 
        break;
    }
    return state
}

export default rootReducer;