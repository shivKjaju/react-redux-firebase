const initState = {
    projects: [
        {id:'1', title:'Help me in redux', content:'blah blah blah'},
        {id:'2', title:'Courses to be decided', content:'blah blah blah'},
        {id:'3', title:'ya right', content:'blah blah blah'}
    ]
}
const projectReducer = (state= initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            return state
        case 'CREATE_PROJECT_ERROR':
            return state
        default: 
            return state
        }
}

export default projectReducer