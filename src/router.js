import { createBrowserRouter, } from "react-router-dom";
import Welcome from "./Pages/Quest/Welcome";
import loginloader from "./fetch/loader/login";
import ReportBug from "./Pages/Quest/ReportBug";
import Help from "./Pages/Quest/Help";
import Login from "./Pages/Quest/Login";
import { Register } from "./Pages/Quest/Register";
import sendMessageAction from "./fetch/action/sendMessage";
import registerAction from "./fetch/action/register";
import loginAction from "./fetch/action/login";
import VerifyEmail from "./Pages/User/VerifyEmail";

import RemindPassword from "./Pages/Quest/RemindPassword";
import resetPasswordAction, {
  sendNewPasswordAction,
} from "./fetch/action/resetPassword";
import ResetPassword from "./Pages/Quest/ResetPassword";
import verifyEmailLoader from "./fetch/loader/verifyEmailLoader";
import User from "./Pages/User/User";
import checkIfAuth from "./fetch/loader/checkIfAuth";
import CreateTestInstance from "./Pages/User/Tests/CreateTestInstance";
import Tests from "./Pages/User/Tests/Tests";
import createTestLoader from "./fetch/loader/createTestLoader";

import TestsSettings from "./Pages/User/Tests/TestsSettings";
import New from "./Pages/User/Tests/Settings/New";
import Delete from "./Pages/User/Tests/Settings/Delete";


const router = createBrowserRouter([
  {
    path: '/test',
    element: <Delete />,
 
  },
  {
    path: "/",
    element: <Welcome key={1} />,
  },
  {
    path: "/report-error",
    element: <ReportBug />,
    action: sendMessageAction,
  },
  {
    path: "/help",
    element: <Help />,
    action: sendMessageAction,
  },
  {
    path: "/register",
    element: <Register />,
    action: registerAction,
  },

  {
    path: "/login",
    element: <Login />,
    action: loginAction,
    loader: loginloader,
  },
  {
    path: "/forgot-password",
    element: <RemindPassword />,
    action: resetPasswordAction,
  },
  {
    path: "/password-reset/:passwordReset",
    element: <ResetPassword />,
    action: sendNewPasswordAction,
  },

  {
    path: "/user",
    element: <User />,
    loader: checkIfAuth,
    children: [
      {
        path: 'tests',
        element: <Tests />,
        children:[
          {
            path:'create',
            element: <CreateTestInstance />,
            loader: createTestLoader
          },
          {
            path: 'settings',
            element: <TestsSettings />,
            children:[
              {
                path: 'new',
                element: <New />
              },
              {
                path: 'delete',
                element: <Delete />
              }
            ]
          }
        ]
      },
      {
        path: "verify-email/:id/:hash",
        element: <VerifyEmail />,
        loader: verifyEmailLoader,
      },
    ],
  },
]);




export { router as default };
