const initState = {
    posts: [
        {id: '1', title: 'Squirtle is the bomb', body: 'Lost in a land far away'},
        {id: '2', title: 'Charmander is on fire', body: 'Compare this with space'},
        {id: '3', title: 'Pikachu is quick', body: 'Almost lost my hat there'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;