import { createBrowserRouter } from "react-router-dom";
import Welcome from "./Pages/Quest/Welcome";

import ReportBug from "./Pages/Quest/ReportBug";
import Help from "./Pages/Quest/Help";
import Login from "./Pages/Quest/Login";
import { Register } from "./Pages/Quest/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome key={1} />,
  },
  {
    path: "/report-error",
    element: <ReportBug />,
    action: async ({ params, request }) => {
      console.log(params);
      console.log(request);
      const data = await request.text();
      console.log(data);
      return null;
    },
  },
  {
    path: "/help",
    element: <Help />,
    action: async ({ params, request }) => {
      console.log(params);
      console.log(request);
      const data = await request.text();
      console.log(data);
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
  },

  { path: "/login", element: <Login /> },
]);

export { router as default };
