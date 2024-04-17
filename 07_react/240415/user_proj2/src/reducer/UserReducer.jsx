export const reducer = (state, action) => {
    switch (action.type) {
    case 'CHANGE_INPUT':
    /*
    const copyState = JSON.parse(JSON.stringfy(state))
    */
    return {
        ...state, // 참조객체인 initialState 값이 복제가 된다.
        inputs: {
        ...state.inputs, // 바꾸고 싶은 inputs을 깊은복사 하고, 바꿔야 할 값으로 바꾼다.
        [action.name]:[action.value]
        }
    };
    case 'CREATE_USER':
    return{
        ...state,
        inputs: initialState.inputs,
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
inputs : {
    username: '',
    email:''
},
users: [
    { id: 1, username:'휘인', email:'whee@gamil.com', active: true },
    { id: 2, username:'화사', email:'hwa@gamil.com', active: true },
    { id: 3, username:'문별', email:'star@gamil.com', active: true },
    { id: 4, username:'솔라', email:'sol@gamil.com', active: true }
]
}