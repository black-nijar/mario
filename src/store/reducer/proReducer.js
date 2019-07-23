const initState = {
    projects: [
        {id: '1', title: 'data', content: 'dwef'},
        {id: '2', title: 'fsfef', content: 'fdefc'},
        {id: '3', title: 'fdsgvd',  content: 'dcsfcs'}
    ]

}
const proReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
        console.log('create project', action.project)
    }
    return state
}
export default proReducer