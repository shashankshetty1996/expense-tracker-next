import { forwardRef } from 'react';
import { Control, useController } from 'react-hook-form';

type ValueType = string | number;
type InputType = 'text' | 'number' | 'password' | 'email';

interface CommonInputProps {
  placeholder?: string;
  type?: InputType;
}
interface InputProps extends CommonInputProps {
  value: ValueType;
  onChange: (v: string) => void;
}

interface ControlledInputProps extends CommonInputProps {
  name: string;
  control: Control;
  defaultValue?: ValueType;
  isRequired?: boolean;
  customValidator?: (value: ValueType) => boolean | string;
}

function InputComp(props: InputProps, ref) {
  const { value, onChange, placeholder = '', type = 'text' } = props;

  const inputType = type === 'number' ? 'text' : type;

  const changeHandler = $event => {
    const { value: updatedValue } = $event.target;
    if (type === 'number' && isNaN(updatedValue)) {
      return;
    }
    onChange(updatedValue);
  };

  return (
    <input
      ref={ref}
      className="w-full p-2 dark:bg-stone-600 rounded shadow-md outline-none"
      value={value}
      onChange={changeHandler}
      type={inputType}
      placeholder={placeholder}
    />
  );
}

const Input = forwardRef(InputComp);

function ControlledInput(props: ControlledInputProps) {
  const {
    name,
    control,
    defaultValue,
    isRequired,
    customValidator,
    ...rest
  } = props;

  const validations: any = {
    required: {
      value: isRequired,
      message: 'This field is required'
    }
  };
  // const { min, max } = rest;
  // if (min != null) {
  //   validations.min = {
  //     value: min,
  //     message: `The value cannot be lesser than ${min}`
  //   };
  // }
  // if (max != null) {
  //   validations.max = {
  //     value: max,
  //     message: `The value cannot be greater than ${max}`
  //   };
  // }
  // if (maxLength != null) {
  //   validations.maxLength = {
  //     value: maxLength,
  //     message: `The value cannot be longer than ${maxLength} characters`
  //   };
  // }
  // if (minLength != null) {
  //   validations.minLength = {
  //     value: minLength,
  //     message: `The value cannot be shorter than ${minLength} characters`
  //   };
  // }

  // if (pattern != null) {
  //   validations.pattern = {
  //     value: pattern,
  //     message: 'Please enter info in correct format'
  //   };
  // }
  if (typeof customValidator === 'function') {
    validations.validate = customValidator;
  }

  const {
    field: { ref, value, onChange }
  } = useController({
    name,
    control,
    defaultValue,
    rules: validations
  });

  return <Input ref={ref} value={value} onChange={onChange} {...rest} />;
}

export { ControlledInput };

export default Input;
