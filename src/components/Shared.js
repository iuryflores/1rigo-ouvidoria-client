import { Link } from "react-router-dom";
import styled from "styled-components";

export const MsgError = styled.div`
  background-color: #fa8072;
  color:white;
  padding: 5px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  opacity: 1;
  transition: opacity 2s linear;
`;
export const MsgSucess = styled.div`
  background-color: #afe1af;
  padding: 5px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
`;
export const Button = styled(Link)`
`