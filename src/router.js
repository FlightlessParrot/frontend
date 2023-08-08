import { createBrowserRouter } from "react-router-dom";
import Welcome from "./Pages/Quest/Welcome";
import loginloader from "./fetch/loader/login";
import ReportBug, { UserReportBug } from "./Pages/Quest/ReportBug";
import Help, { UserHelp } from "./Pages/Quest/Help";
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
import QuestionsSettings from "./Pages/User/Tests/QuestionsSettings";
import createTestAction, {
  createCustomTestAction,
} from "./fetch/action/createTestAction";
import SolveTest from "./Pages/User/SolveTest";
import solveTestLoader from "./fetch/loader/solveTestLoader";
import sendFilledTestAction from "./fetch/action/sendFilledTestAction";
import summaryLoader from "./fetch/loader/summaryLoader";
import TestSummary from "./Pages/User/TestSummary";
import globalStatisticsLoader from "./fetch/loader/globalStatisticsLoader";
import Statistics from "./Pages/User/Statistics";
import TestStatistics from "./Components/Statistics/TestStatistics";
import getTestStatistics from "./fetch/loader/getTestStatistics";

import QuestionStatistics from "./Components/Statistics/QuestionStatistics";
import BuildiingPage from "./Pages/BuildiingPage";

import Logout from "./Pages/User/Logout";
import Teacher from "./Pages/Teacher/Teacher";
import Create from "./Pages/Teacher/Create";
import createTeamAction from "./fetch/action/createTeamAction";
import AfterUserChoseTeam from "./Pages/Teacher/Modify/AfterUserChoseTeam";
import Modify from "./Pages/Teacher/Modify/Modify";
import teamsLoader from "./fetch/loader/teamsLoader";
import teamLoader from "./fetch/loader/teamLoader";
import Handbook from "./Pages/Teacher/Handbook/Handbook";
import ModifyHandbooks from "./Pages/Teacher/Handbook/ModifyHandbooks";
import modifyHandbookLoader from "./fetch/loader/modifyHandbookLoader";
import CheckAnswer from "./Components/Answers/CheckAnswer";


const router = createBrowserRouter([
  {
    path: '/test',
    element: <CheckAnswer question={'kra'} answer={'tak, KRA'} correct={false}/>

  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path: "/test",
    element: <QuestionsSettings />,
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
        path: 'help',
        element: <UserHelp />
      },
      {
        path: 'report-error',
        element: < UserReportBug />
      },
      {
        path: 'account',
        element: <BuildiingPage />
      },
      {
        path: "tests",
        element: <Tests />,
        children: [
          {
            path: "create",
            element: <CreateTestInstance />,
            loader: createTestLoader,
            action: createTestAction,
          },
          {
            path: "settings",
            element: <TestsSettings />,
            children: [
              {
                path: "new",
                element: <New />,
                action: createCustomTestAction,
              },
              {
                path: "delete",
                element: <Delete />,
              },
            ],
          },
        
          {
            path: "questions/settings",
            element: <QuestionsSettings />,
          },
          {
            path: "statistics/test",
            element: <Statistics />,
            loader: globalStatisticsLoader,
            children: [
              {
                path: ':testId',
                element: <TestStatistics />,
                loader: getTestStatistics,
                children:[
                  {
                path: "question/:questionId?",
                element: <QuestionStatistics/>,
                loader: async ({params})=>({testId:params.testId, questionId:params.questionId})
                },
                ]
              },
              
            ],
          },
        ],
      },
      {
        path: 'team',
        element: <Teacher />,
        children:[
          {
            path: 'create',
            element: <Create />,
            action: createTeamAction
          },
          {
            path: 'modify',
            element: <Modify/>,
            loader: teamsLoader,
            children: [
              {
                path: ':team',
                element: <AfterUserChoseTeam />,
                loader: teamLoader
              }
            ]
          },
          {
            path: 'handbook',
            element: <Handbook />,
            loader: teamsLoader,
            children: [{
              path:'team/:team',
              element: <ModifyHandbooks/>,
              loader: modifyHandbookLoader
            }
          ]
          }
        ]
      },
      {
        path: "test/:generatedTestId",
        element: <SolveTest />,
        loader: solveTestLoader,
        action: sendFilledTestAction,
        children:[
           {
        path: "/review",
        element: <div />,
        
      },
        ]
      },
     
      {
        path: "test/:generatedTestId/summary",
        element: <TestSummary />,
        loader: summaryLoader,
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
