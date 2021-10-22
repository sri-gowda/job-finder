import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Logo, NavContainer, NavItem, NavLeft, NavRight, Wrapper } from './index';

const Nav = () => {
    return (

        <Wrapper>
            <Link to="/">
                <Logo>JobHunt</Logo>
            </Link>

            <NavContainer>
                <NavLeft>
                    <NavItem>
                        <NavLink to="/" activeClassName="active" activeStyle={{
                            borderBottom: '3px solid #fff',
                            paddingBottom: '5px'
                        }}>Find Job</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/upskill" activeClassName="active" activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}>Upskill Yourself</NavLink>
                    </NavItem>
                </NavLeft>
                <NavRight>
                    <NavItem>
                        <NavLink to="/post" activeClassName="active">Post a Job</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/signin" activeClassName="active">Signin</NavLink>
                    </NavItem>
                </NavRight>
            </NavContainer>
        </Wrapper>

    )
}

export default Nav;