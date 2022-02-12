import React from "react";
import Text from "components/Text";
import FavoriteUserList from "components/FavoriteUserList";
import * as S from "./style";

const Favorites = () => {
    return (
        <S.Favorites>
            <S.Content>
                <S.Header>
                    <Text size="64px" bold>
                        Favorites
                    </Text>
                </S.Header>
                <FavoriteUserList/>
            </S.Content>
        </S.Favorites>
    );
};

export default Favorites;
