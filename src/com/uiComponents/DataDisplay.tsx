import './DataDisplay.scss';

interface IDataDisplay {
  data: {
    headers: { label: string, name: string }[],
    rows: ({ action?: Function } & Record<string, string | number | React.ReactNode>)[],
  };
}

let updateCounter = 0;
export function DataDisplay(props: IDataDisplay) {
  const { data } = props;
  updateCounter++;

  return (
    <table className="app-data-display">
      <thead>
        <tr>
          {data.headers.map(header =>
            <th key={header.name}>{header.label}</th>
          )}
        </tr>
      </thead>

      <tbody className='ptop-24'>
        {data.rows.map((row, index) =>
          <tr key={`${ updateCounter }-${ index }`}>
            {data.headers.map(header =>
              <td key={header.name}>{row[header.name]}</td>
            )}
          </tr>
        )}
      </tbody>
    </table>
  );
}