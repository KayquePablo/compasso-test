import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top:15px;
  width: auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 10px;
  height: 200px;
  
  h1 {
    font-size: 32px;
    font-weight: bold;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  margin: -5px;

  div {
    margin: 8px;
    text-align: center;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;