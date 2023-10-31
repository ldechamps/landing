
import {  RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import Homepage from './components/Homepage';
import { fakeAuthProvider } from "./auth";
import Services from './components/Services';

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    loader() {
      // Our root route always provides the user, if logged in
      return { user: fakeAuthProvider.username };
    },
    Component: Homepage
  },
  {
    path: "/services",
    Component: Services
  },
  {
    path: "/logout",
    async action() {
      // We signout in a "resource route" that we can hit from a fetcher.Form
      await fakeAuthProvider.signout();
      return redirect("/");
    },
  }
]);

function App() {
  return (
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  )

  //return (<Homepage />);
}

export default App;
  