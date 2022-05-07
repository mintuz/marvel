import styled from 'styled-components';
import { system, layout, LayoutProps, variant } from 'styled-system';

type ClusterProps = {
  /** Spacing unit defined within theme object */
  spacing: number;
  /** Horizontal alignment */
  alignment: 'start' | 'center' | 'end';
} & LayoutProps;

export const Cluster = styled.div<ClusterProps>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    ${system({
      spacing: {
        property: 'gap',
        scale: 'space',
      },
    })}
    ${layout}
    ${variant({
      prop: 'alignment',
      variants: {
        start: {
          justifyContent: 'flex-start',
        },
        center: {
          justifyContent: 'center',
        },
        end: {
          justifyContent: 'flex-end',
        },
      },
    })}
`;

Cluster.defaultProps = {
  spacing: 4,
  alignment: 'start',
};
