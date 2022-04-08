import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Profile = () => {
  const { githubState } = useGithub();

  return (
    <S.Container>

      <S.Image src={githubState.user.avatar} alt="Avatar of user" />

      <S.Info>

        <div>
          <h1>{githubState.user.name}</h1>
          <S.User>
            <h3>Username:</h3>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </S.User>

          <S.User>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </S.User>

          <S.User>
            <h3>Blog:</h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">
              {githubState.user.blog}
            </a>
          </S.User>
          
        </div>

        <S.Status>
          <div>
            <h4>Followers</h4>
            <span> {githubState.user.followers}</span>
          </div>

          <div>
            <h4>Followings</h4>
            <span> {githubState.user.following}</span>
          </div>

          <div>
            <h4>Repos</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
        </S.Status>

      </S.Info>
      
    </S.Container>
  );
};

export default Profile;