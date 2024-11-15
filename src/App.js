import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';


const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path=":type" element={<HomePage />} />
      <Route path=":type/:id" element={<PetDetailsPage />} />
      <Route path="pet-details-not-found" element={<PetDetailsNotFound />} />
      <Route path="search" element={<SearchPage />} />
    </Route>
  )
);

function App() {
  return (
    <>
    <RouterProvider router={appRouter} />
      <div style={{ position: 'fixed', bottom: 0, right: 0, padding: '10px', fontSize: '12px', opacity: 0.7 }}>
        created by EspeeeBne
      </div>
    </>
  );
}

export default App;
