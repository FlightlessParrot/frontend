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
import FlashcardsSetting from "./Pages/User/FlashcardsSetting";
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

import Account from "./Pages/Settings/Account";
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

import TestReview from "./Pages/User/Tests/TestReview";
import testReviewLoader from "./fetch/loader/testReviewLoader";
import MakeEgzam from "./Pages/Teacher/MakeEgzam";
import createEgzamAction from "./fetch/action/createEgzamAction";
import ChooseEgzamSettings from "./Pages/Teacher/ChooseEgzamSettings";
import CreateOpenQuestion from "./Pages/Teacher/CreateOpenQuestion";
import ChooseTeam from "./Pages/Teacher/ChooseTeam";
import ShowTestResults from "./Pages/Teacher/ShowTestResults";
import getEgzamsLoader from "./fetch/loader/getEgzamsLoader";
import showEgzamLoader from "./fetch/loader/showEgzamLoader";
import Egzams from "./Pages/Teacher/Egzams";
import Notyfications from "./Pages/User/Notyfications";
import notyficationsLoader from "./fetch/loader/notyficationsLoader";
import OpenQuestionCheck from "./Pages/Teacher/OpenQuestionCheck";
import getOpenQuestionToGrade from "./fetch/loader/getOpenQuestionToGrade";
import createOpenQuestionAction from "./fetch/action/createOpenQuestionAction";
import flashcardsSettingLoader from "./fetch/loader/flashcardsSettingLoader"
import flashcardsAction from "./fetch/action/flashcardsAction"
import Flashcards from "./Pages/User/Flashcards"
import UserData from "./Pages/Settings/UserData";
import getAdressLoader from "./fetch/loader/getAdressLoader";
import updateAdressAction from "./fetch/action/updateAdressAction";
import ChangePassword from "./Pages/Settings/ChangePassword";
import updatePasswordAction from "./fetch/action/updatePasswordAction";
import Subscriptions from "./Pages/Settings/Subscriptions";
import getSubscriptionsLoader from "./fetch/loader/getSubscriptionsLoader";
import DeleteTeam from "./Pages/Teacher/DeleteTeam";
import AfterCreation from "./Pages/User/Tests/Settings/AfterCreation";
import getLatestTest from "./fetch/loader/getLatestTest";
import AdminSubscriptions from "./Pages/Admin/Subscriptions/AdminSubscriptions";
import Admin from "./Pages/Admin/Admin";
import createSubscriptionAction from "./fetch/action/createSubscriptionAction";
import getAdminSubscriptionsLoader from "./fetch/loader/getAdminSubscriptionsLoader";
import ManageTests from "./Pages/Admin/Tests/ManageTests";
import adminTestLoader from "./fetch/loader/adminTestLoader";
import AdminTestSettings from "./Pages/Admin/Tests/AdminTestSettings";
import adminTestSettingsLoader from "./fetch/loader/adminTestSettingsLoader";
import createAdminTest from "./fetch/action/createAdminTest";


const router = createBrowserRouter([
  {
    path: "/logout",
    element: <Logout />,
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
        path: "help",
        element: <UserHelp />,
      },
      {
        path: "report-error",
        element: <UserReportBug />,
      },
      {
        path: "account",
        element: <Account />,
        children: [
          {
            path: 'data',
            element: <UserData />,
            loader: getAdressLoader,
            action: updateAdressAction,
            children:[
              {
                path:'password/update',
                element: <ChangePassword />,
                action: updatePasswordAction
              }
            ]
          },
          {
            path: 'subscriptions',
            element: <Subscriptions />,
            loader:getSubscriptionsLoader
          }
        ]
      },
      {
        path: "tests",
        element: <Tests />,
        children: [
          {
            path: "create",
            element: <CreateTestInstance title />,
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
              {
                path:'newest',
                element: <AfterCreation />,
                loader: getLatestTest
              }
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
                path: ":testId",
                element: <TestStatistics />,
                loader: getTestStatistics,
                children: [
                  {
                    path: "question/:questionId?",
                    element: <QuestionStatistics />,
                    loader: async ({ params }) => ({
                      testId: params.testId,
                      questionId: params.questionId,
                    }),
                  },
                ],
              },
            ],
          },
          {
            
              path: 'flashcards',
              element: <FlashcardsSetting />,
              loader: flashcardsSettingLoader,
              action: flashcardsAction,
              children: [
                {
                  path: 'start',
                  element: <Flashcards />
                }
              ]
          }
        ],
      },
      {
        path: "team",
        element: <Teacher />,
        children: [
          {
            path: "create",
            element: <Create />,
            action: createTeamAction,
          },
          {
            path: "modify",
            element: <Modify />,
            loader: teamsLoader,
            children: [
              {
                path: ":team",
                element: <AfterUserChoseTeam />,
                loader: teamLoader,
              },
            ],
          },
          {
            path: "handbook",
            element: <Handbook />,
            loader: teamsLoader,
            children: [
              {
                path: "team/:team",
                element: <ModifyHandbooks />,
                loader: modifyHandbookLoader,
              },
            ],
          },
          {
            path: "egzam",
            element: <MakeEgzam />,
            loader: teamsLoader,
            children: [
              {
                path: "teams/:teamId",
                element: <ChooseEgzamSettings />,
                loader: createTestLoader,
                action: createEgzamAction,
              },
            ],
          },
          {
            path: "egzam/teams/:teamId/egzams/:testId/open-questions/create",
            element: <CreateOpenQuestion/>,
            action: createOpenQuestionAction
          },
          {
            path:'delete',
            element: <DeleteTeam />,
            loader:teamsLoader
          },
          {
            path: "egzams",
            element: <ChooseTeam/>,
            loader: teamsLoader,
            children: [
              {
                path: 'teams/:teamId',
                element: <Egzams />,
                loader: getEgzamsLoader,
                children: [
                  {
                    path: 'egzams/:testId',
                    element: <ShowTestResults />,
                    loader: showEgzamLoader
                  }
                ]
              }
            ]
          }
        ],
      },

      {
        path: "test/:generatedTestId",
        element: <SolveTest />,
        loader: solveTestLoader,
        action: sendFilledTestAction,
        children: [
          {
            path: "review",
            element: <TestReview />,
            loader: testReviewLoader,
          },
        ],
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
      {
        path:'notyfications',
        element: <Notyfications />,
        loader: notyficationsLoader
      },
      {
        path: 'check/tests/:id/open-questions',
        element: <OpenQuestionCheck />,
        loader: getOpenQuestionToGrade
      },
      {
      path: 'admin',
      element: <Admin />,
      children: [
        {
          path:'subscriptions',
          element: <AdminSubscriptions />,
          action: createSubscriptionAction,
          loader: getAdminSubscriptionsLoader
        },
        {
        path: 'tests',
        element: <ManageTests />,
        loader: adminTestLoader,
        action: createAdminTest,
        children: [
          {
            path: 'settings/:testId',
            element: <AdminTestSettings />,
            loader: adminTestSettingsLoader,
            
          }
        ]
        }
      ]
      }
   
    ],
    
  },
]);

export { router as default };
