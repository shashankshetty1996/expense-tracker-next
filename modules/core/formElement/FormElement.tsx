interface IFormElement {
  children: JSX.Element;
  label?: string;
  error?: string;
  isRequired?: boolean;
}

function FormElement(props: IFormElement) {
  const { children, label = '', error = '', isRequired = false } = props;
  return (
    <div className="my-2 w-64 h-24 flex flex-col justify-end">
      {(label !== '' || isRequired) && (
        <div className="pb-1">
          {label !== '' && <label className="text-xs">{label}</label>}
          {isRequired && <span className="text-red-600 m-1">*</span>}
        </div>
      )}
      {children}
      <p className="text-xs text-red-600 my-1">&nbsp;{error}</p>
    </div>
  );
}

export default FormElement;
