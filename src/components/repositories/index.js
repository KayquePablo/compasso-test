import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

const Repositories = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchrepos(githubState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.CTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.CTabList>
            <S.CTab>Repositories</S.CTab>
            <S.CTab>Starred</S.CTab>
          </S.CTabList>

          <S.CTabPanel>
            <S.List>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
            </S.List>
          </S.CTabPanel>
          
          <S.CTabPanel>
            <S.List>
              {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.List>
          </S.CTabPanel>
        </S.CTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;