import './TextField.css';

interface IPropsTextField {
  value?: string | number | Date;
  label?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export function TextField({
  value = '',
  label = '',
  disabled = false,
  onChange = () => { },
}: IPropsTextField) {

  return (
    <fieldset className={["TextField", !value ? 'no-value' : '', disabled ? 'disabled' : ''].join(' ')}>
      <legend>
        <p className='label-legend-text'>{label}</p>
      </legend>
      <div className='label-floating'></div>
      <input
        name={label}
        value={String(value)}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </fieldset>
  );
}