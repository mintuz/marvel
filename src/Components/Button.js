import React from 'react';
import styled from 'styled-components';
import {variant} from 'styled-system';

export default styled.button`
    display: inline-flex;
    cursor: pointer;
    border: none;
    margin: 0;
    padding: 16px;
    text-align: center;
    align-items: center;
    justify-content: center;
    ${variant({
        scale: 'buttons',
    })}
`;
