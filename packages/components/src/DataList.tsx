import React, { FC } from 'react';
import styled from 'styled-components';
import { css } from '@mintuz/marvel-theme';
import { Text } from './Text';

const DataListStyle = styled.dl`
  margin: 0;
`;

const DataItem = styled.div`
  ${css({
    paddingTop: [3],
    paddingBottom: [3],
  })}

  & + & {
    border-top: 2px solid;

    ${css({
      borderColor: 'defaultBorderColor',
    })}
  }
`;

export const DataItemTitle = styled(Text).attrs({
  as: 'dt',
})`
  margin: 0;
  flex-basis: 100%;
  font-weight: bold;
`;

export const DataItemDescriptions = styled.div`
  display: flex;
  justify-content: space-between;

  ${css({
    marginTop: [2],
  })}
`;

export const DataItemDescription = styled.dd`
  margin: 0;
`;

export const DataList: FC<{ children: React.ReactNode }> = ({ children }) => (
  <DataListStyle>
    {React.Children.map(children, child => (
      <DataItem>{child}</DataItem>
    ))}
  </DataListStyle>
);
