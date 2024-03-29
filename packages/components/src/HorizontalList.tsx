import styled from 'styled-components';
import {
  space,
  flexbox,
  layout,
  SpaceProps,
  FlexboxProps,
  LayoutProps,
} from 'styled-system';

type HorizontalListProps = SpaceProps & FlexboxProps & LayoutProps;

export const HorizontalList = styled.ul<HorizontalListProps>`
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
`;
