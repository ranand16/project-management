const initState = {
    releaseData: []
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
                if(release["key"]===action["key"]) return index 
                return -1
            })
            if(index>-1) data.splice(index,1)
            return {
                ...state,
                releaseData: data
            }
        case "EDIT_RELEASE":
            let Rdata = [...state.releaseData]
            const { editedRelease } = action
            const releaseIndx = Rdata.findIndex((releasedata)=> releasedata["key"]===editedRelease["key"])
            Rdata[releaseIndx] = editedRelease
            return {
                ...state,
                releaseData: Rdata
            }
        case "CHANGE_TASK_STATUS": 
            let rdata = [...state.releaseData]
            const { checkData } = action
            const { releaseKey, taskKey } = checkData;
            let release = rdata.find((release)=>release["key"]===releaseKey )
            const releaseKeyIndex = rdata.findIndex((releasedata, index)=> releasedata["key"]===releaseKey)
            if(!release) return null
            let task = release.tasks.find((task)=> task["key"]===taskKey)
            const taskKeyIndex = release.tasks.findIndex((task, index)=>task["key"]===taskKey)
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
            let releaseIndex, taskList;
            releaseIndex = reldata.findIndex((release, index)=>release["key"]===rKey)
            taskList = [...reldata[releaseIndex]["tasks"], newTaskObj]
            reldata[releaseIndex]["tasks"] = taskList
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