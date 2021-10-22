import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Card from './Card';

const Loader = () => <h1>Loading...</h1>

const Banner = styled.div`
    background: linear-gradient(to left , #5DB0DF , #5D7ADF);
    height: 30vh;
    position :relative;
    color: #fff;
    margin-bottom: 50px;
    z-index:1;
`

const Container = styled.div`
    // position :relative;
    height: 100vh;
    background:#eee;
    overflow: scroll;
`
const Container2 = styled.div`
    max-width: 80%;
    margin:auto;
`

const SearchBarContainer = styled.div`
    position: absolute;
    top: calc(30vh - 30px);
    left:0;
    right:0;
    max-width:80%;
    margin:auto;
`

// const Select

const H1 = styled.h1`
    font-size: 2em;
`
const H2 = styled.h2`
    font-size: 1.5em;
`
const H3 = styled.h3`
    font-size: 1.17em;
`
const H4 = styled.h4`
    font-size: 1em;
`
const H5 = styled.h5`
    font-size: 0.83em;
`
const H6 = styled.h6`
    font-size: 0.75em;
`
const Heading = styled.div`
    font-size: ${props => props.size}px;
    font-weight: bold;
    margin-bottom: 5px;
`

const CardAvatar = styled.div`
    height: 100px;
    width: 100px;
    background: #ccc;
    border-radius: 10px;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    // background-color: #2196F3;
    padding: 10px;
`

const GridItem = styled.div`
    // background-color: rgba(255, 255, 255, 0.8);
    // border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
`

const P = styled.p`
    font-size: 16px;
`

const FlexContainer = styled.div`
    display:flex;
`


const Wrapper = styled.div`
    display:flex;
`

const NavContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width:100%;
`

const Logo = styled.div`
    padding: 20px 0;
    font-weight: 600;
`

const NavLeft = styled.ul`
    display:flex;
  
`

const NavRight = styled.ul`
    display: flex;   
    
`

const NavItem = styled.li`
    margin: 0 10px;
`




export { Nav, Wrapper, NavContainer, Loader, Logo, NavLeft, NavRight, NavItem, Card, Banner, Container, Container2, SearchBarContainer, H1, H2, H3, H4, H5, H6, Heading, CardAvatar, GridContainer, GridItem, P, FlexContainer };
