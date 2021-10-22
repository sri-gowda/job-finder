import React from 'react';
import styled from 'styled-components';
import { Banner, Card, CardAvatar, Container, Container2, FlexContainer, GridContainer, GridItem, H1, Heading, Nav, P, SearchBarContainer } from '../components';
import Searchbar from '../components/Searchbar';

const items = [
    {
        id: 1,
        title: 'Executive Producer',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
        avatar: ''
    },
    {
        id: 2,
        title: 'Executive Producer',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        avatar: ''
    },
    {
        id: 3,
        title: 'Executive Producer',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        avatar: ''
    },
    {
        id: 4,
        title: 'Executive Producer',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        avatar: ''
    },
    {
        id: 5,
        title: 'Executive Producer',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        avatar: ''
    },
    {
        id: 6,
        title: 'Executive Producer',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        avatar: ''
    },
    {
        id: 7,
        title: 'Executive Producer',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        avatar: ''
    },
    {
        id: 8,
        title: 'Executive Producer',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        avatar: ''
    },
    {
        id: 9,
        title: 'Executive Producer',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        avatar: ''
    },
]

const AvatarContainer = styled.div`
    width: 30%;
`

const CardContent = styled.div`
    width: 70%;
    text-align:left;
    padding: 0 15px;
`


const Home = () => {


    return (
        <Container>
            <Banner>

                <Container2>
                    <Nav />
                    <H1>Find Your dream Job</H1>
                    <h6>Browse through thousands of full-time or part-time jobs near you</h6>
                </Container2>
                <SearchBarContainer>
                    <Searchbar />
                </SearchBarContainer>
            </Banner>

            <Container2>

                <GridContainer>
                    {
                        items.map(item => (
                            <GridItem key={item.id}>
                                <Card height="120px">
                                    <FlexContainer>
                                        <AvatarContainer>
                                            <CardAvatar />
                                        </AvatarContainer>

                                        <CardContent>
                                            <Heading size={20}>Executive Producer</Heading>
                                            <P>{item.description}</P>
                                        </CardContent>

                                    </FlexContainer>
                                </Card>
                            </GridItem>
                        ))
                    }
                </GridContainer>

            </Container2>
        </Container>
    )
}

export default Home;