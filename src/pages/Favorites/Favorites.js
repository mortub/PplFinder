import React, { useEffect, useState } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "./style";

const Favorites = () => {
    const [favoriteUsers, setFavoriteUsers ] = useState([]);
    const [isLoading, setIsLoading ] = useState(false);
    const [didFavoritesUpdate, setDidFavoritesUpdate ] = useState(false);

    const fetchFavoriteUsers = () =>{
        let newFavoriteUsers = localStorage.getItem('favoriteUsers');
        if(newFavoriteUsers !== null){
          newFavoriteUsers = JSON.parse(newFavoriteUsers);
          setFavoriteUsers(Object.values(newFavoriteUsers));
        }
    }

    const callSetDidFavoritesUpdate = ()=>{
        setDidFavoritesUpdate(!didFavoritesUpdate);
    }

    useEffect(() =>{
        setIsLoading(true);
        fetchFavoriteUsers();
        setIsLoading(false);
    },[didFavoritesUpdate])

    useEffect(() =>{
        setIsLoading(true);
        fetchFavoriteUsers();
        setIsLoading(false);
    },[])

    return (
        <S.Favorites>
            <S.Content>
                <S.Header>
                    <Text size="64px" bold>
                        Favorites
                    </Text>
                </S.Header>
                <UserList users={favoriteUsers} isLoading={isLoading} callSetDidFavoritesUpdate={callSetDidFavoritesUpdate}/>
            </S.Content>
        </S.Favorites>
    );
};

export default Favorites;
