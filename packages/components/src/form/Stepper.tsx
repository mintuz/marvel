import React, {
  useState,
  FC,
  InputHTMLAttributes,
  forwardRef,
  MutableRefObject,
  useRef,
  useEffect,
} from 'react';
import styled from 'styled-components';
import { css } from '@mintuz/marvel-theme';
import { Add, Remove } from 'styled-icons/material';
import { VisuallyHidden } from '../VisuallyHidden';

const StepperControls = styled.div`
  display: flex;
  align-items: center;
  ${css({
    marginLeft: [4],
  })}
`;

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  ${css({
    backgroundColor: 'black',
    color: 'white',
    borderRadius: [1],
  })}
`;

const ButtonMinus = styled(Button)`
  order: 0;
`;

const ButtonPlus = styled(Button)`
  order: 2;
`;

const Value = styled.div`
  display: inline-block;
  order: 1;
  text-align: center;
  min-width: 48px;
  border: none;
  ${css({
    paddingLeft: [2],
    paddingRight: [2],
  })}
`;

export type StepperProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  value: number;
  incrementBy?: number;
  onChange: (newValue: number) => void;
};

// eslint-disable-next-line react/display-name
export const Stepper: FC<StepperProps> = forwardRef<
  HTMLInputElement,
  StepperProps
>(({ id, incrementBy = 1, value, onChange, ...inputProps }, ref) => {
  const innerRef = useRef<HTMLInputElement>(null);
  const [internalValue, setValue] = useState<number>(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <StepperControls>
      <ButtonMinus
        onClick={() => {
          const newValue = internalValue - incrementBy;
          setValue(newValue);
          onChange(newValue);
        }}
      >
        <Remove size="1em" />
        <VisuallyHidden>Remove</VisuallyHidden>
      </ButtonMinus>
      <ButtonPlus
        onClick={() => {
          const newValue = internalValue + incrementBy;
          setValue(newValue);
          onChange(newValue);
        }}
      >
        <Add size="1em" />
        <VisuallyHidden>Add</VisuallyHidden>
      </ButtonPlus>
      <Value>{internalValue}</Value>
      <input
        id={id}
        ref={(node) => {
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
        {...inputProps}
        type="number"
        hidden
        value={`${internalValue}`}
        onChange={onChange}
      />
    </StepperControls>
  );
});
