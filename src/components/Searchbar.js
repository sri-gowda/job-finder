import React from 'react';
import styled from 'styled-components';
import search from '../assets/images/vector.png';
import vector2 from '../assets/images/vector-2.png';
import vector3 from '../assets/images/vector-3.png';
const Input = styled.input`
    border: none;
    margin-left: 25px;
`

const Button = styled.button`
background: ${props => props.primary ? "#F07987" : "white"};
color: ${props => props.primary ? "white" : "#F07987"};

font-size: 1em;
// margin: 1em;
padding: 0.25em 1em;
border: 2px solid #F07987;
border-radius: 3px;
width: ${props => props.block ? '100%' : ''}
`


const Card = styled.div`
    background: #fff;
    border-radius: 15px;
    padding:5px;
`

// const Se

const SearchContainer = styled.div`
    position: relative;
    padding: 10px;
`

const SelectContainer = styled.div`
    position: relative;
    padding: 10px;
`

const BtnContainer = styled.div`
    position: relative;
    padding: 10px;
`

const Icon = styled.img`
    position: absolute;
    height: ${props => props.height};
`

const FlexContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-around;
`

const Searchbar = () => {
    return (
        <>
            {/* <Icon */}
            <Card>
                <FlexContainer>
                    <SearchContainer>
                        <Icon src={search} height={20} />
                        <Input placeholder="Job title or keyword" />
                    </SearchContainer>
                    <SelectContainer>
                        <Icon src={vector2} height={20} />
                        <Input placeholder="Job title or keyword" />
                    </SelectContainer>
                    <BtnContainer>
                        <Button primary block>Search</Button>
                    </BtnContainer>
                </FlexContainer>
            </Card>

        </>
    );
}

export default Searchbar;