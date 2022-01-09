import { useRef, useState, forwardRef } from 'react';
import { Control, useController } from 'react-hook-form';
import { useOutsideClick } from '../../../utilities/hooks';

interface DropdownOption {
  label: string;
  value: any;
}

interface CommonDropdownProps {
  options: DropdownOption[];
}
interface DropdownProps extends CommonDropdownProps {
  value: any;
  onChange: (value: any) => void;
}

interface ControlledDropdownProps extends CommonDropdownProps {
  name: string;
  control: Control;
  defaultValue?: any;
  isRequired?: boolean;
  customValidator?: (value: any) => boolean | string;
}

function DropdownComp(props: DropdownProps, ref) {
  const { options, value, onChange } = props;
  const [open, setOpen] = useState<boolean>(false);
  const closeDropdown = () => setOpen(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useOutsideClick(containerRef, closeDropdown, open);

  const selectedOption = options.find(option => option.value === value) ?? {
    label: '',
    value: ''
  };

  const onItemSelect = (option: DropdownOption) => {
    if (open) {
      onChange(option.value);
      closeDropdown();
    }
  };

  return (
    <div className="relative" ref={containerRef}>
      <div
        className="flex justify-between items-center rounded p-2 shadow-md bg-white dark:bg-stone-600"
        onClick={() => setOpen(c => !c)}
        ref={ref}
      >
        <span className="text-base">{selectedOption.label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform ease-linear duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <ul
        className={`absolute w-full list-none p-0 bg-white dark:bg-stone-900 ease-in transition-all duration-100 shadow-xl rounded-lg mt-1 ${
          open
            ? 'opacity-100 delay-200 z-10'
            : 'opacity-0 h-0 translate-y-2 -z-10'
        }`}
      >
        {options.map(option => {
          const isSelected = option.value === value;
          return (
            <li
              key={option.value}
              className={`p-2 cursor-pointer dark:text-slate-50 hover:text-white hover:bg-teal-700 dark:hover:bg-stone-700 ${
                isSelected ? 'text-white bg-teal-600 dark:bg-stone-600' : ''
              }`}
              onClick={() => onItemSelect(option)}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const Dropdown = forwardRef(DropdownComp);

function ControlledDropdown(props: ControlledDropdownProps) {
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

  return <Dropdown ref={ref} value={value} onChange={onChange} {...rest} />;
}

export { ControlledDropdown };

export default Dropdown;
