import styled from '@emotion/styled';

import { Props } from '@/types/input';

const Input = ({
  label,
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  readOnly = false,
  wrapperProps,
  ...props
}: Props) => {
  return (
    <Wrapper block={block} {...wrapperProps}>
      <Label>{label}</Label>
      <StyledInput
        invalid={invalid}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        {...props}
      />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div<{ block: boolean }>`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
`;

const StyledInput = styled.input<{ invalid: boolean }>`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ invalid }) => (invalid ? 'red' : 'gray')};
  border-radius: 4px;
  box-sizing: border-box;
`;
