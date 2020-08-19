const initState = {
    // releaseData: []
    releaseData: [
        { "version": 4.0, "status": "In progress", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "version": 3.0, "status": "Unreleased", "progress": 5, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
        { "version": 2.0, "status": "Released", "progress": 10, "startdate": 1597802024, "releasedate": 1598902024, "description": "This is a very good project", tasks: [{"description": "This is a great task", status: false},{"description": "This is a second great task", status: false},{"description": "This is a task to ipload the prject", status: true}]},
    ]
}

const rootReducer = (state=initState, action) => {
    switch(action.type) {
        case "ADD_RELEASE": return {
            ...state,
            releaseData: [...state.releaseData, action.data]
        }
        
        default: 
        break;
    }
    return state
}

export default rootReducer;