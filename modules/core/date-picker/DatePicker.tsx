import { forwardRef, ChangeEvent } from 'react';
import { Control, useController } from 'react-hook-form';
import { getFormattedDatePickerValue } from '../../../utilities/helpers/date';

interface DatePickerProps {
  value: Date;
  onChange: (updatedDate: Date) => void;
}

function DatePickerComp(props: DatePickerProps, ref) {
  const { value, onChange } = props;
  const inputValue = getFormattedDatePickerValue(value);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: updatedValue }
    } = event;
    onChange(new Date(updatedValue));
  };

  return (
    <input
      ref={ref}
      className="w-full p-2 dark:bg-stone-600 rounded shadow-md outline-none"
      type="date"
      value={inputValue}
      onChange={e => changeHandler(e)}
    />
  );
}

const DatePicker = forwardRef(DatePickerComp);

interface ControlledDatePickerProps {
  name: string;
  control: Control;
  defaultValue?: Date;
  isRequired?: boolean;
}

const ControlledDatePicker = (props: ControlledDatePickerProps) => {
  const { name, control, defaultValue, isRequired, ...rest } = props;

  const compDefaultValue =
    defaultValue && getFormattedDatePickerValue(defaultValue);

  const {
    field: { ref, value, onChange }
  } = useController({
    name,
    control,
    defaultValue: compDefaultValue
  });

  return <DatePicker ref={ref} value={value} onChange={onChange} {...rest} />;
};

export { ControlledDatePicker };
export default DatePicker;
