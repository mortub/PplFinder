import React, {useRef } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = () => {
  const { users, isLoading, observer } = usePeopleFetch();
  let usersRef = useRef();

  const setUsersRef = (ref) => {
    if (observer) {
      const { current } = ref;
      if (current) { observer.observe(current); }
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
        <UserList users={users} isLoading={isLoading} setUsersRef={setUsersRef} ref={usersRef} />
      </S.Content>
    </S.Home>
  );
};

export default Home;
