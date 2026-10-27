import './TextField.css';

interface IPropsTextField {
  value?: string | number | Date;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export function TextField({
  value = '',
  disabled = false,
  onChange = (value) => { },
}: IPropsTextField) {

  return (
    <div className="TextField"></div>
  );
}