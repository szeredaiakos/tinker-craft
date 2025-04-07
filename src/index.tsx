import '../src/Globals';
import './AppIndex.scss';
import { createRoot } from 'react-dom/client';
import { Layout } from './Layout/Layout';
import { RouterProvider } from './com/Router/RouteController';

function SomeApp() {
  return (
    <>
      
        <Layout>
          <RouterProvider />
        </Layout>
    </>
  )
}


const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<SomeApp />);

