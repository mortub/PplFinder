import React, { useEffect, useState, useCallback } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const COUNTRY_NAMES_BY_ISO_2 = {
  "BR":"Brazil",
  "AU":"Australia",
  "CA":"Canada",
  "DE":"Germany",
  "ES": "Spain"
}

const UserList = React.forwardRef(({ users, isLoading, callSetDidFavoritesUpdate, setUsersRef }, usersRef) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [checkedCountries, setCheckedCountries] = useState({
    "BR":false,
    "AU":false,
    "CA":false,
    "DE":false,
    "ES":false
  });
  const [favoriteUsers, setFavoriteUsers] = useState({});

  const toggleFavoriteUser = (user) =>{
    const newFavoriteUsers = createNewFavoriteUsers(user);
    setFavoriteUsers(newFavoriteUsers);
    localStorage.setItem('favoriteUsers', JSON.stringify(newFavoriteUsers));
    if(callSetDidFavoritesUpdate){callSetDidFavoritesUpdate()}
  }

  const createNewFavoriteUsers = (user) =>{
    const userId = user?.email;
    const newFavoriteUsers = {...favoriteUsers};

    if(newFavoriteUsers[userId]){ delete newFavoriteUsers[userId];
    }else{
      newFavoriteUsers[userId] = user;
    }
    return newFavoriteUsers;
  }

  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  const filterUsersAccordingToCountry = useCallback((value) => {
    toggleCountryCheck(value);
    if(isAllUnchecked()){
      setFilteredUsers(users);
      return;
    }
    setFilterUsersAccordingToCountries();
  });

  const toggleCountryCheck = (value) =>{
    checkedCountries[value] = !checkedCountries[value];
    setCheckedCountries(checkedCountries);
  }

  const setFilterUsersAccordingToCountries = () =>{
    const countryNames = getAllCheckedCountryNames();
    const newfilteredUsers = users.filter((user)=> countryNames.includes(user?.location.country));
    setFilteredUsers(newfilteredUsers);
  }

  const getAllCheckedCountryNames = () =>{
    const countryNames = Object.keys(checkedCountries).map((key)=>{
      if(checkedCountries[key]){return COUNTRY_NAMES_BY_ISO_2[key]}
    });
    return countryNames;
  }

  const isAllUnchecked = () =>{
    return Object.values(checkedCountries).every((value)=> value === false);
  }

  const setFavoriteUsersFromLocalStorage = () =>{
    let newFavoriteUsers = localStorage.getItem('favoriteUsers');
    if(newFavoriteUsers !== null){
      newFavoriteUsers = JSON.parse(newFavoriteUsers);
      setFavoriteUsers(newFavoriteUsers);
    }
  }

  useEffect(()=>{
    if(isAllUnchecked()){setFilteredUsers(users);}
  },[users]);

  useEffect(()=>{
    setFavoriteUsersFromLocalStorage();
  },[]);

  useEffect(()=>{
    if(setUsersRef){setUsersRef(usersRef)}
  },[usersRef?.current]);

  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="ES" label="Spain" onChange={filterUsersAccordingToCountry} isChecked={checkedCountries["ES"]} />
        <CheckBox value="BR" label="Brazil" onChange={filterUsersAccordingToCountry} isChecked={checkedCountries["BR"]} />
        <CheckBox value="AU" label="Australia" onChange={filterUsersAccordingToCountry} isChecked={checkedCountries["AU"]}/>
        <CheckBox value="CA" label="Canada" onChange={filterUsersAccordingToCountry} isChecked={checkedCountries["CA"]}/>
        <CheckBox value="DE" label="Germany" onChange={filterUsersAccordingToCountry} isChecked={checkedCountries["DE"]}/>
      </S.Filters>
      <S.List>
        {filteredUsers.map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              ref={(index+1 === users?.length)? usersRef: null}
            >
              <S.UserPicture src={user?.picture?.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name?.title} {user?.name?.first} {user?.name?.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location?.street?.number} {user?.location?.street?.name}
                </Text>
                <Text size="14px">
                  {user?.location?.city} {user?.location?.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper isVisible={index === hoveredUserId || favoriteUsers[user?.email]}>
                <div onClick={() =>toggleFavoriteUser(user)}>
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
                </div>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
})

export default UserList;
