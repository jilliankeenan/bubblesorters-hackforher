import React, { useState } from 'react';
import logo from './logo.svg';
import Jar from './components/Jar'
import styled from 'styled-components';
import TopBar from './components/TopBar'
import Modal from 'react-modal';
import EventEntry from './components/EventEntry'
import { post } from './services';
import { getAllData } from './services/get';
import SlackIcon from './components/SVG/slack';
import JiraIcon from './components/SVG/jira';
import GithubIcon from './components/SVG/github';
import './App.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    borderRadius: '8px',
    borderColor: 'white'
  }
};

const SourceTile = styled.div`
  height: 300px;
  width: 300px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin: 1rem;
  text-align: center;
  padding: 1rem;
  border-radius: 1rem;
  transition: all .4s ease;
  cursor: pointer;
&:hover{
  background: #f3f3f3;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 16px 18px rgba(0,0,0,0.23);
}
`;

const ModalContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
`;

const SourceTitle = styled.h2`
margin-bottom: 2.5rem;
color: #4e4242;
`;

const ModalTitle = styled.h1`
margin-bottom: 3rem;
color: #4e4242;
text-align: center;
`;

function App() {
  const [jarLevel, setJarLevel] = useState(0);
  const [isSourcesModalOpen, setIsSourcesModalOpen] = useState(false);

  const handleOpenSourceButton = () => {
    setIsSourcesModalOpen(true)
  };

  const handleSubmitEvent = ({ thought, tag }) => {
    setJarLevel(jarLevel + 1);
    post({
      text: thought,
      tag
    });
    console.log(getAllData());
  };

  return (
    <div className="App">
      <TopBar
        onClickSourceButton={handleOpenSourceButton}
      />

      <Jar
        level={jarLevel}
      />
      <EventEntry
        onSubmitEvent={handleSubmitEvent}
      />
      <Modal
        isOpen={isSourcesModalOpen}
        onRequestClose={() => setIsSourcesModalOpen(false)}
        style={customStyles}
      >
        <ModalTitle>Thought Sources</ModalTitle>
        <ModalContainer>
          <SourceTile>
            <SourceTitle>Slack</SourceTitle>
            <SlackIcon />
          </SourceTile>
          <SourceTile>
            <SourceTitle>JIRA</SourceTitle>
            <JiraIcon />
          </SourceTile>
          <SourceTile>
            <SourceTitle>Github</SourceTitle>
            <GithubIcon />
          </SourceTile>
        </ModalContainer>
      </Modal>
    </div>
  );
}

export default App;
