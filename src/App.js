import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import Home from './Components/Home';
import Main from './Components/Main';
import UpdateUser from './Components/UpdateUser';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader: ()=> fetch('http://localhost:5000/users')
        },
        {
          path:"/add",
          element:<AddUser></AddUser>
        },
        {
          path:"/update/:id",
          element:<UpdateUser></UpdateUser>,
          loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
