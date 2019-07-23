export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore  }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authFirstName: '',
            authLastName: '',
            authId: 2131,
            createdAt: new Date()
        })
        
        dispatch({ type: 'CREATE_PROJECT', project});
    }
}