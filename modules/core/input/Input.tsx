type ValueType = string | number;
type InputType = 'text' | 'number' | 'password' | 'email';

interface InputProps {
  value: ValueType;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: InputType;
}

function Input(props: InputProps) {
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
      className="w-full p-2 dark:bg-stone-600 rounded shadow-md outline-none"
      value={value}
      onChange={changeHandler}
      type={inputType}
      placeholder={placeholder}
    />
  );
}

export default Input;
