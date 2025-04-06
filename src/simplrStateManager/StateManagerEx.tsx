import { useState } from 'react';
import { DataContextProvider } from './DataContext';
import ModuleOne from './ModuleOne';
import ModuleTwo from './ModuleTwo';
import './StateManagerEx.scss';

interface IStateManagerExProps { }
export default function StateManagerEx(props: IStateManagerExProps) {
  const [mounted, setMounted] = useState(true);
  return (
    <>
      {mounted &&
        <DataContextProvider>
          <div className="appStateManagerEx">
            <div className="first-mod-container">
              <ModuleOne />
            </div>
            <div className="second-mod-container">
              <ModuleTwo />
            </div>
          </div>
        </DataContextProvider>
      }
      {!mounted &&
        <span>not mounted</span>
      }
      <div>
        <button
          onClick={() => mounted ? setMounted(false) : setMounted(true)}
        >toggleMount</button>
      </div>
    </>

  );
}