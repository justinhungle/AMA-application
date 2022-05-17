import React, { useState } from "react";
import styled from "styled-components";

const DropDownContainer = styled("div")`
width: 10em;
margin: 0.05em 0em;
`;

const DropDownHeader = styled("button")`
font-size: 1.1em;
font-weight: bold;
letter-spacing: 1.8px;
height: 3em;
width: 8em;
color: white;
font-family: sans-serif;
background-color: rgb(255, 138, 4);
border: none;
border-radius: 20px;
&:hover {
  background-color: rgb(163, 88, 3);
}
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background-color: rgb(255, 138, 4);
  border-radius: 20px;
  border: 2px solid rgb(255, 138, 4);
  box-sizing: border-box;
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }

`;

const ListItem = styled("li")`
  padding: 0.2em;
  border-radius: 2px;
  padding-left: 0.4em;
  list-style: none;
  margin-bottom: 0.8em;
  margin-right: 1em;
  &:hover {
    background-color: rgb(163, 88, 3);
  }
`;

export const DropSelectMenu = ({ options, setEngine }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (name, engine) => () => {
    setSelectedOption(name);
    setIsOpen(false);
    setEngine(engine);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling} onMouseEnter={toggling}>
        {selectedOption || "Select AI"}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer >
          <DropDownList onMouseLeave={toggling}>
            {options.map((option) => (
              <ListItem
                onClick={onOptionClicked(option.name, option.engine)}
                key={Math.random()}
              >
                {option.name}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};
