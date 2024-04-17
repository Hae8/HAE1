export const reducer = (state, action) => {
    switch (action.type) {
    case 'CREATE_USER':
    return{
        ...state,
        users: state.users.concat(action.newUser)
    }
    case 'TOGGLE_USER':
    return{
        ...state,
        users: state.users.map(user => 
        user.id === action.id ? {...user, active: !user.active} : user
        )
    }
    case 'REMOVE_USER':
    return{
        ...state,
        users: state.users.filter(user => user.id !== action.id)
    }
    default:
    return state;
}
};

export const initialState = {
    users: [
        { id: 1, username:'휘인', email:'whee@gamil.com', active: true },
        { id: 2, username:'화사', email:'hwa@gamil.com', active: true },
        { id: 3, username:'문별', email:'star@gamil.com', active: true },
        { id: 4, username:'솔라', email:'sol@gamil.com', active: true }
    ]
}