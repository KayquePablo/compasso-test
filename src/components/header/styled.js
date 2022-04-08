import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 10px;
    font-weight: 500;
  }

  button {
    background-color: #225ed8;
    padding: 10px 16px;
    margin: 0 16px;
    border-radius: 8px;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
`;