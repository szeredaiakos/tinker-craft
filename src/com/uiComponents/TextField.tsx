import './TextField.css';

interface IPropsTextField {
  value: string | number | Date;
}

export function TextField({
  value = '',
}: IPropsTextField) {

  return (
    <div className="TextField"></div>
  );
}