const initState = {
    releaseData: [
        { "key": "Version 1.0","version": "Version 1.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 2.0","version": "Version 2.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 3.0","version": "Version 3.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 4.0","version": "Version 4.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 5.0","version": "Version 5.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 6.0","version": "Version 6.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 7.0","version": "Version 7.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 8.0","version": "Version 8.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 9.0","version": "Version 9.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 10.0","version": "Version 10.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 11.0","version": "Version 11.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 12.0","version": "Version 12.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 13.0","version": "Version 13.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 14.0","version": "Version 14.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 15.0","version": "Version 15.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 16.0","version": "Version 16.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 17.0","version": "Version 17.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 18.0","version": "Version 18.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 19.0","version": "Version 19.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 20.0","version": "Version 20.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 21.0","version": "Version 21.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 22.0","version": "Version 22.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 23.0","version": "Version 23.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 24.0","version": "Version 24.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 25.0","version": "Version 25.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 26.0","version": "Version 26.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 27.0","version": "Version 27.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 28.0","version": "Version 28.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "key": "Version 29.0","version": "Version 29.0", "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
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
            const index = state.releaseData.findIndex((release, index)=>{ 
                if(release["version"]===action["version"]) return index 
                return -1
            })
            if(index>-1) data.splice(index,1)
            return {
                ...state,
                releaseData: data
            }
        default: 
        break;
    }
    return state
}

export default rootReducer;