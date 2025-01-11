The solution involves ensuring the parent route path correctly matches the URL, and that the `Outlet` component is used correctly within the parent route component to render the nested routes.  Here's a corrected example:

```javascript
import { useRoutes, Route, Routes } from 'react-router-dom';

function ParentRoute() {
  return (
    <div>
      <h1>Parent Route</h1>
      <Outlet/> {/* This renders the child route */}
    </div>
  );
}

function ChildRoute() {
  return (
    <div>
      <h1>Child Route</h1>
    </div>
  );
}

const routes = useRoutes([
  {
    path: '/parent',
    element: <ParentRoute/>,
    children: [
      {
        path: 'child',
        element: <ChildRoute/>,
      },
    ],
  },
]);

export default function App() {
  return (
    <Routes>
      {routes}
    </Routes>
  );
}
```
This solution ensures that the `Outlet` component renders the child route correctly when the parent route path matches.  The use of `useRoutes` provides a more declarative and efficient way to manage nested routes.