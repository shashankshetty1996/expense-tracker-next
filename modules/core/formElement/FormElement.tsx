interface IFormElement {
  children: JSX.Element;
  label?: string;
  error?: string;
  isRequired?: boolean;
}

function FormElement(props: IFormElement) {
  const { children, label = '', error = '', isRequired = false } = props;
  return (
    <div className="my-2 w-64">
      <div className="relative pb-1">
        {label !== '' && <label className="text-xs">{label}</label>}
        {isRequired && <span className="text-red-600 m-1">*</span>}
      </div>
      <div>{children}</div>
      {error !== '' && <p className="text-xs text-red-600 my-1">{error}</p>}
    </div>
  );
}

export default FormElement;
