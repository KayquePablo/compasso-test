import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Repo>
      <S.Title>{name}</S.Title>
      <S.FullName>Full Name:</S.FullName>
      <S.Link href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.Link>
    </S.Repo>
  );
};

export default RepositoryItem;
