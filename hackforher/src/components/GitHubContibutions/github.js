import React, { Component } from "react"
import { Card } from '../Card'
import styled from 'styled-components';
import HighlyGenericTitle from '../HighlyGenericTitle'
import DashboardNumber from '../DashboardNumber'
import GithubIcon from '../SVG/github';
import './github.scss'

const LineItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: .5rem;
`;

const Wrapper = styled.div`
    background: #e2e1e0;
    padding: 2rem;
`;

const Github = ({ data }) => {
    return (
        <Wrapper>
            <GithubIcon style={{width: 100, height: 100}} />
            <div className="GitHub-Container">
                <Card width='500px'>
                    <Card noShadow>
                        <HighlyGenericTitle>Top Repos</HighlyGenericTitle>
                        {data.contributions.topRepos.map(({ name, commitTotal }, index) => (
                            <LineItem>
                                <p>{`${index + 1}. ${name}`}</p>
                                <p>{commitTotal} commits</p>
                            </LineItem>
                        ))}
                    </Card>
                </Card>
                <Card width='100%' isFlex>
                    <Card noShadow>
                        <HighlyGenericTitle>Pull Requests</HighlyGenericTitle>
                        <DashboardNumber>{data.contributions.prTotal}</DashboardNumber>
                    </Card>
                    <Card noShadow>
                        <HighlyGenericTitle>Lines of Code</HighlyGenericTitle>
                        <DashboardNumber>{data.contributions.linesWrittenTotal}</DashboardNumber>
                    </Card>
                    <Card noShadow>
                        <HighlyGenericTitle>Code Reviews</HighlyGenericTitle>
                        <DashboardNumber>{data.contributions.reviewsTotal}</DashboardNumber>
                    </Card>
                </Card>
            </div>
        </Wrapper>
    );
};

export default Github
