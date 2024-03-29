import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    gap: 28px;
  }
`;

export const Link = styled(NavLink)`
  position: relative;
  top: 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  color: ${({ color }) => (color = "#121417")};
  line-height: 1.25%;
  transition: top 250ms linear, color 250ms linear;

  &:hover {
    color: #f4c550;
    top: 2px;
  }
  &.active {
    color: ${({ color }) =>
      color === "#F4C550"
        ? "#FBE9BA"
        : color === "#9FB7CE"
        ? "#BFD6EA"
        : color === "#9FBAAE"
        ? "#CBDED3"
        : color === "#E0A39A"
        ? "#F2C0BD"
        : color === "#F0AA8D"
        ? "#F4C8BA"
        : "#FBE9BA"};
    text-decoration: underline;
  }
`;
