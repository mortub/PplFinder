import React, { createContext, useReducer } from 'react';

const fetchFavoriteUsers = () =>{
    let newFavoriteUsers = localStorage.getItem('favoriteUsers') ?? {};
    if(newFavoriteUsers !== null){
      newFavoriteUsers = JSON.parse(newFavoriteUsers);
    }
    return newFavoriteUsers;
}

const initialState = fetchFavoriteUsers();

const actions = {
    ADD_USER: "ADD_USER",
    REMOVE_USER: "REMOVE_USER",
};

const reducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_USER:
            return addUser(state, action.payload);
        case actions.REMOVE_USER: {
            return removeUser(state, action.payload)
        }
        default:
            return state;
    }
};

const addUser = (state, payload) => {
    const userId = payload.userId;
    const user = payload.user;
    state[userId] = user;
    localStorage.setItem('favoriteUsers', JSON.stringify(state));
    return state;
}

const removeUser = (state, payload) => {
    const userId = payload.userId;
    delete state[userId];
    localStorage.setItem('favoriteUsers', JSON.stringify(state));
    return state;
}


export const favoriteUsersContext = createContext();

export const FavoriteUsersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <favoriteUsersContext.Provider value={{state, dispatch}}>
            {children}
        </favoriteUsersContext.Provider>
    );
};