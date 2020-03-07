import React, { useState } from 'react';
import Button from '../Button';
import styled from 'styled-components';

import './evententry.scss';


export const StyledSelect = styled.select`
    height: 45px;
    font-size: 1.2rem;
    border-radius: 4px;
    border: 2px solid lightGrey;
    outline: none;
    transition: .2s all ease;
    cursor: pointer;
    
    ::-webkit-input-placeholder { /* Edge */
        color: black;
    }
    
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: black;
    }
    
    ::placeholder {
        color: black;
    }
    &:focus {
        -webkit-box-shadow: 0 0 0 3px #e25f4f5e;
        box-shadow: 0 0 0 3px #e25f4f5e;
        border-color: #e25f4f5e;
    }
`;

export const Input = styled.input`

    height: 39px;
    font-size: 1.2rem;
    border-radius: 4px;
    border: 2px solid lightGrey;
    padding-left: 1rem;
    padding-right: 1rem;
    -webkit-appearance: none;
    outline: none;
	transition: .2s all ease;
	margin-right: .5rem;
    
    ::-webkit-input-placeholder { /* Edge */
        color: lightGrey;
      }
      
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: lightGrey;
      }
      
      ::placeholder {
        color: lightGrey;
      }
    &:focus {
        -webkit-box-shadow: 0 0 0 3px #e25f4f5e;		
        box-shadow: 0 0 0 3px #e25f4f5e;		
        border-color: #e25f4f5e;		
    }
`;

const tags = ['Course', 'EventAttended', 'Culture', 'Other'];

const EventEntry = ({ onSubmitEvent }) => {
    const [thought, setThought] = useState('');
    const [tag, setTag] = useState('Course')

    const handleSubmitEvent = () => {
        onSubmitEvent({
            thought, tag
        });
        setThought('');
    };

    return (
        <div className="evententry-container">
            <div>
                <Input
                    value={thought}
                    onChange={(e) => setThought(e.target.value)}
                    placeholder='Enter a thought'
                />
                <StyledSelect onChange={(e) => setTag(e.target.value)} value={tag}>
                    {tags.map((tag) => <option value={tag}>{tag}</option>)}
                </StyledSelect>
            </div>
            <div>
                <Button onClick={handleSubmitEvent}>Add Thought</Button>
            </div>
        </div>
    );
};


export default EventEntry;
