export const createProject = (project) =>{
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to databse
        const dataStore = getFirestore();
        dataStore.collection('projects').add({
            ...project,
            authorFirstName: getState().firebase.profile.firstName,
            authorLastName: getState().firebase.profile.lastName,
            authorId: getState().firebase.auth.uid,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};