import React from 'react'
import styled from 'styled-components'
import { space, flexbox, layout } from 'styled-system'

export default styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    ${space}
    ${flexbox}
    ${layout}

    > li,
    > li > a,
    > li > button {
        display: inline-block;
        zoom: 1;
    }
`
