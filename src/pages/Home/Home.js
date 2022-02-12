import React, {useRef, useContext } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import { favoriteUsersContext } from '../../contexts';
import * as S from "./style";

const Home = () => {
  const { users, isLoading, observer } = usePeopleFetch();
  const {state, dispatch } = useContext(favoriteUsersContext);
  let usersRef = useRef();

  const setUsersRef = (ref) => {
    if (observer) {
      const { current } = ref;
      if (current) { observer.observe(current); }
    }
  }

  const toggleFavoriteUser = (user) => {
    const userId = user?.email;
    if (state[userId]) {
        dispatch({ type: "REMOVE_USER", payload: { userId: userId } });
    } else {
        dispatch({ type: "ADD_USER", payload: { userId: userId, user: user } });
    }
}

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        <UserList users={users} isLoading={isLoading} toggleFavoriteUser={toggleFavoriteUser}
        setUsersRef={setUsersRef} ref={usersRef} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
