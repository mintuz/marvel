import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { Icon } from './Icon';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Container = styled(Icon)`
  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const LoadingSpinner: FC = () => (
  <Container role="presentation">
    <svg viewBox="0 0 40 40" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.996 8.91a1 1 0 0 1-.906 1.086c-5.096.46-9.09 4.743-9.09 9.96 0 5.522 4.477 10 10 10 5.216 0 9.5-3.995 9.96-9.09a1 1 0 1 1 1.991.179c-.551 6.117-5.69 10.91-11.951 10.91-6.627 0-12-5.372-12-12 0-6.26 4.793-11.4 10.91-11.95a1 1 0 0 1 1.086.905z"
      />
    </svg>
  </Container>
);
