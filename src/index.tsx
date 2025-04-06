import '../src/Globals';
import './AppIndex.scss';
import { createRoot } from 'react-dom/client';
import { UseCallbackCl } from './useCallback/UseCallback';
import StateManagerEx from './simplrStateManager/StateManagerEx';

function SomeApp() {
  return (
    <>
      <div style={{ textAlign: 'center', color: 'gray', marginBottom: 8 }}>-- - --</div>
      <div className='app'>
        <StateManagerEx />
      </div>
      <div style={{ textAlign: 'center', color: 'gray', marginBottom: 8 }}>-- - --</div>
    </>
  )
}


const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<SomeApp />);

