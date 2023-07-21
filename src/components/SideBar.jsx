import {
  Checkbox,
  HStack,
  Heading,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { styled } from "styled-components";

const SideBar = () => {
  return (
    <DIV>
      <div className="gender">
        <RadioGroup>
          <VStack display={"flex"} alignItems={"start"}>
            <Radio>Men</Radio>
            <Radio>Women</Radio>
            <Radio>Kids</Radio>
          </VStack>
        </RadioGroup>
      </div>

      <div className="gender">
        <Heading mt={5} fontSize={16} >CATEGORIES</Heading>
        <VStack display={"flex"} alignItems={"start"} pt={6}>
          <Checkbox>Men's Shirts</Checkbox>
          <Checkbox>Women's Dresses</Checkbox>
          <Checkbox>Women's Shirts</Checkbox>
          <Checkbox>Kids' T-Shirts</Checkbox>
          <Checkbox>Unisex Hoodies</Checkbox>
          <Checkbox>Accessories</Checkbox>
          <Checkbox>Activewear</Checkbox>
          <Checkbox>Swimwear</Checkbox>
          <Checkbox>Sweaters & Cardigans</Checkbox>
          <Checkbox>Formal Wear</Checkbox>
        </VStack>
      </div>

      <div className="gender bottom">
      <Heading mt={5} fontSize={16} >COLORS</Heading>
        <VStack display={"flex"} alignItems={"start"} pt={6}>
          <div className="color">
            <Checkbox />
            <div className="round red"></div>
            <Text>Red</Text>
          </div>
          <div className="color">
            <Checkbox />
            <div className="round blue"></div>
            <Text>Blue</Text>
          </div>
          <div className="color">
            <Checkbox />
            <div className="round green"></div>
            <Text>Green</Text>
          </div>
          <div className="color">
            <Checkbox />
            <div className="round black"></div>
            <Text>Black</Text>
          </div>
          <div className="color">
            <Checkbox />
            <div className="round whte"></div>
            <Text>White</Text>
          </div>
          <div className="color">
            <Checkbox />
            <div className="round yellow"></div>
            <Text>Yellow</Text>
          </div>
          <div className="color">
            <Checkbox />
            <div className="round pink"></div>
            <Text>Pink</Text>
          </div>
          <div className="color">
            <Checkbox />
            <div className="round purple"></div>
            <Text>Purple</Text>
          </div>
          <div className="color">
            <Checkbox />
            <div className="round orange"></div>
            <Text>Orange</Text>
          </div>
          <div className="color">
            <Checkbox />
            <div className="round brown"></div>
            <Text>Brown</Text>
          </div>
        </VStack>
      </div>
    </DIV>
  );
};

export default SideBar;

const DIV = styled.div`
  .gender {
    margin-top: 12px;
    
    padding-left: 12px;
    font-family: "Balsamiq Sans", cursive;
    border-bottom: 0.5px solid #9d9d9d;
    padding-bottom: 20px;
  }
  .color {

    display: flex;
    align-items: center;
    p{
        margin-left: 10px;
    }
  }
  .round {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-left:10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  /* Red */
.red {
  background-color: #D34B56;
}

/* Blue */
.blue {
  background-color: #0074D9;
}

/* Green */
.green {
  background-color: #5EB160;
}

/* Black */
.black {
  background-color: black;
}

/* Yellow */
.yellow {
  background-color: yellow;
}

/* Pink */
.pink {
  background-color: pink;
}

/* Purple */
.purple {
  background-color: purple;
}

/* Orange */
.orange {
  background-color: orange;
}

/* Brown */
.brown {
  background-color: brown;
}

.bottom{
    border-bottom:none;
}
`;
