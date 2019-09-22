import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

import Theme from '../src/Components/ThemeProvider'
import { GridWrap, Grid, GridItem } from '../src/Components/Grid'

const FakeBox = styled.div`
    ${space}
    text-align: center;
    background-color: rgb(240, 240, 240);
    padding: 16px;
`

export default {
    title: '1. Foundations|Grid',
}

export const withGutter = () => (
    <Theme>
        <GridWrap>
            <Grid>
                <GridItem width={[1 / 1]}>
                    <FakeBox mb="16px">1/1</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 2]}>
                    <FakeBox mb="16px">1/2</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 2]}>
                    <FakeBox mb="16px">1/2</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 3]}>
                    <FakeBox mb="16px">1/3</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 3]}>
                    <FakeBox mb="16px">1/3</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 3]}>
                    <FakeBox mb="16px">1/3</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 4]}>
                    <FakeBox mb="16px">1/4</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 4]}>
                    <FakeBox mb="16px">1/4</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 4]}>
                    <FakeBox mb="16px">1/4</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 4]}>
                    <FakeBox mb="16px">1/4</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 2]}>
                    <FakeBox mb="16px">1/2</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 4]}>
                    <FakeBox mb="16px">1/4</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 4]}>
                    <FakeBox mb="16px">1/4</FakeBox>
                </GridItem>
            </Grid>
        </GridWrap>
    </Theme>
)

withGutter.story = {
    name: 'With Gutter',
}

export const withoutGutter = () => (
    <Theme>
        <GridWrap>
            <Grid gutter="none">
                <GridItem width={[1 / 1]}>
                    <FakeBox mb="16px">1/1</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 2]}>
                    <FakeBox mb="16px">1/2</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 2]}>
                    <FakeBox mb="16px">1/2</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 3]}>
                    <FakeBox mb="16px">1/3</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 3]}>
                    <FakeBox mb="16px">1/3</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 3]}>
                    <FakeBox mb="16px">1/3</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 4]}>
                    <FakeBox mb="16px">1/4</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 4]}>
                    <FakeBox mb="16px">1/4</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 4]}>
                    <FakeBox mb="16px">1/4</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 4]}>
                    <FakeBox mb="16px">1/4</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 2]}>
                    <FakeBox mb="16px">1/2</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 4]}>
                    <FakeBox mb="16px">1/4</FakeBox>
                </GridItem>
                <GridItem width={[1 / 1, 1 / 4]}>
                    <FakeBox mb="16px">1/4</FakeBox>
                </GridItem>
            </Grid>
        </GridWrap>
    </Theme>
)

withoutGutter.story = {
    name: 'Without Gutter',
}
