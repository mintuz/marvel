import React, {
  FC,
  forwardRef,
  InputHTMLAttributes,
  MutableRefObject,
  useRef,
} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { css } from '@mintuz/marvel-theme';

const LabelText = styled.span`
  display: block;
  ${css({
    marginBottom: [2],
  })}

  .mv-c-input-field--has-error & {
    ${css({
      color: 'red',
    })}
  }
`;

const StyledInputField = styled.input`
  border: 2px solid;
  ${css({
    padding: [2],
    borderRadius: [1],
    borderColor: 'defaultBorderColor',
    fontSize: [0],
  })}

  .mv-c-input-field--has-icon & {
    text-indent: 20px;
  }

  .mv-c-input-field--has-error & {
    ${css({
      color: 'red',
      borderColor: 'red',
    })}
  }

  .mv-c-input-field--has-error &::placeholder {
    ${css({
      color: 'red',
    })}
  }
`;

const ErrorMessage = styled.div`
  ${css({
    marginTop: [2],
    color: 'red',
  })}
`;

const InputContainer = styled.div`
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 8px;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactElement;
  label: string;
  error: string;
};

export const InputField: FC<InputFieldProps> = forwardRef<
  HTMLInputElement,
  InputFieldProps
>(({ error, label, icon, id, ...rest }, ref) => {
  const innerRef = useRef<HTMLInputElement>(null);
  const cssClassNames = classNames('mv-c-input-field', {
    'mv-c-input-field--has-error': error,
    'mv-c-input-field--has-icon': icon,
  });

  return (
    <label htmlFor={id} className={cssClassNames}>
      <LabelText>{label}</LabelText>
      <InputContainer>
        {icon && <Icon>{React.cloneElement(icon, { size: '1em' })}</Icon>}
        <StyledInputField
          ref={node => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            innerRef.current = node;
            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              // eslint-disable-next-line no-param-reassign
              (ref as MutableRefObject<HTMLInputElement | null>).current = node;
            }
          }}
          id={id}
          {...rest}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputContainer>
    </label>
  );
});
