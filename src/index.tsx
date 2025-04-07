import '../src/Globals';
import './AppIndex.scss';
import { createRoot } from 'react-dom/client';
import { UseCallbackCl } from './useCallback/UseCallback';
import StateManagerEx from './simplrStateManager/StateManagerEx';
import { Layout } from './Layout/Layout';

function SomeApp() {
  return (
    <>
      <Layout>
        hello
      </Layout>
    </>
  )
}


const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<SomeApp />);

