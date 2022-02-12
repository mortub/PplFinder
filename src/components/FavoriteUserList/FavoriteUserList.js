import React, { useEffect, useState, useContext } from "react";
import { favoriteUsersContext } from '../../contexts';
import UserList from "components/UserList";

const FavoriteUserList = ({}) => {
    const [favoriteUsers, setFavoriteUsers ] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);
    const [updateFavoriteUsersFlag, setUpdateFavoriteUsersFlag] = useState(true);
    const {state, dispatch } = useContext(favoriteUsersContext);

    const toggleFavoriteUser = (user) => {
        const userId = user?.email;
        if (state[userId]) {
            dispatch({ type: "REMOVE_USER", payload: { userId: userId } });
        } else {
            dispatch({ type: "ADD_USER", payload: { userId: userId, user: user } });
        }
        setUpdateFavoriteUsersFlag(!updateFavoriteUsersFlag)
    }

    const updateFavoriteUsers = () =>{
        setFavoriteUsers(Object.values(state));
    }

    const fetchFavoriteUsers = () =>{
        let newFavoriteUsers = localStorage.getItem('favoriteUsers') ?? '{}';
        newFavoriteUsers = JSON.parse(newFavoriteUsers);
        setFavoriteUsers(Object.values(newFavoriteUsers));
    }

    useEffect(()=>{
        updateFavoriteUsers();
    },[updateFavoriteUsersFlag])

    useEffect(() =>{
        setIsLoading(true);
        fetchFavoriteUsers();
        setIsLoading(false);
    },[])

      return (
        <UserList users={favoriteUsers} isLoading={isLoading} toggleFavoriteUser={toggleFavoriteUser}/>
    );
};

export default FavoriteUserList;