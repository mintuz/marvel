import styled from 'styled-components';
import { system, layout, LayoutProps } from 'styled-system';

type VStackProps = {
  /** Spacing unit defined within theme object */
  spacing: number;
} & LayoutProps;

export const VStack = styled.div<VStackProps>`
  display: flex;
  flex-direction: column;
  ${system({
    spacing: {
      property: 'gap',
      scale: 'space',
    },
  })}
  ${layout}
`;

VStack.defaultProps = {
  spacing: 4,
};

export const VStackEnd = styled.div`
  margin-block-start: auto !important;
`;
