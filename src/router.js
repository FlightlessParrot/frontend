import { createBrowserRouter } from "react-router-dom";

import loginloader from "./fetch/loader/login";

import sendMessageAction from "./fetch/action/sendMessage";
import registerAction from "./fetch/action/register";
import loginAction from "./fetch/action/login";

import resetPasswordAction, {
  sendNewPasswordAction,
} from "./fetch/action/resetPassword";

import verifyEmailLoader from "./fetch/loader/verifyEmailLoader";

import checkIfAuth from "./fetch/loader/checkIfAuth";

import createTestLoader from "./fetch/loader/createTestLoader";

import createTestAction, {
  createCustomTestAction,
} from "./fetch/action/createTestAction";

import solveTestLoader from "./fetch/loader/solveTestLoader";
import sendFilledTestAction from "./fetch/action/sendFilledTestAction";
import summaryLoader from "./fetch/loader/summaryLoader";

import globalStatisticsLoader from "./fetch/loader/globalStatisticsLoader";

import getTestStatistics from "./fetch/loader/getTestStatistics";

import createTeamAction from "./fetch/action/createTeamAction";

import teamsLoader from "./fetch/loader/teamsLoader";
import teamLoader from "./fetch/loader/teamLoader";

import modifyHandbookLoader from "./fetch/loader/modifyHandbookLoader";
import modifyQuestionLoader from "./fetch/loader/modifyQuestionLoader";
import testReviewLoader from "./fetch/loader/testReviewLoader";

import createEgzamAction from "./fetch/action/createEgzamAction";
import getEgzamsLoader from "./fetch/loader/getEgzamsLoader";
import showEgzamLoader from "./fetch/loader/showEgzamLoader";

import notyficationsLoader from "./fetch/loader/notyficationsLoader";

import getOpenQuestionToGrade from "./fetch/loader/getOpenQuestionToGrade";
import createOpenQuestionAction from "./fetch/action/createOpenQuestionAction";
import flashcardsSettingLoader from "./fetch/loader/flashcardsSettingLoader";
import flashcardsAction from "./fetch/action/flashcardsAction";

import getAdressLoader from "./fetch/loader/getAdressLoader";
import updateAdressAction from "./fetch/action/updateAdressAction";

import updatePasswordAction from "./fetch/action/updatePasswordAction";

import getSubscriptionsLoader from "./fetch/loader/getSubscriptionsLoader";

import getLatestTest from "./fetch/loader/getLatestTest";

import createSubscriptionAction from "./fetch/action/createSubscriptionAction";
import getAdminSubscriptionsLoader from "./fetch/loader/getAdminSubscriptionsLoader";
import getAdminFlashcardsLoader from "./fetch/loader/getAdminFlashcardsLoader";
import adminTestLoader from "./fetch/loader/adminTestLoader";
import adminTestSettingsLoader from "./fetch/loader/adminTestSettingsLoader";
import createAdminTest from "./fetch/action/createAdminTest";
import getCategoriesAndUndercategories from "./fetch/loader/getCategoriesAndUndercategories";
import createNewCategoryOrUndercategory from "./fetch/action/createNewCategoryOrUndercategory";
import deleteCategoryOrUndercategory from "./fetch/action/deleteCategoryOrUndercategory";
import createFlashcard from "./fetch/action/createFlashcard";
import createFlashcardLoader from "./fetch/loader/createFlashcardLoader";
import sendMailAction from "./fetch/action/sendMailAction";
import getSubscription from "./fetch/loader/getSubscription";
import updateSubscription from "./fetch/action/updateSubscription";
import getSubscriptionsForGuestLoader from "./fetch/loader/getSubscriptionsForGuestLoader";
import getAllCodesLoader from "./fetch/loader/getAllCodesLoader";
import createDiscountCodeAction from "./fetch/action/createDiscountCodeAction";
import { Suspense, lazy } from "react";
import Loading from "./Pages/Loading";

import editFlashcardLoader from "./fetch/loader/editFlashcardLoader";
import updateFlashcard from "./fetch/action/updateFlashcard";
import makePayment from "./fetch/action/makePaymentAction";
import EditCategory from "./Pages/Admin/Categories/EditCategory";
import EditUndercategory from "./Pages/Admin/Categories/EditUndercategory";
import getCategoryById from "./fetch/loader/getCategoryById";
import getUndercategoryById from "./fetch/loader/getUndercategoryById";
import editCategoryAction from "./fetch/action/editCategoryAction";
import editUndercategoryAction from "./fetch/action/editUndercategoryAction";


const BuyProduct = lazy(() => import("./Pages/User/BuyProduct"));
const EditFlashcard = lazy(() =>
  import("./Pages/Admin/Flashcards/Edit/EditFlashcard")
);
const SolveTest = lazy(() => import("./Pages/User/SolveTest"));
const TestsSettings = lazy(() => import("./Pages/User/Tests/TestsSettings"));
const New = lazy(() => import("./Pages/User/Tests/Settings/New"));
const Delete = lazy(() => import("./Pages/User/Tests/Settings/Delete"));
const QuestionsSettings = lazy(() =>
  import("./Pages/User/Tests/QuestionsSettings")
);
const CreateTestInstance = lazy(() =>
  import("./Pages/User/Tests/CreateTestInstance")
);
const Tests = lazy(() => import("./Pages/User/Tests/Tests"));
const ResetPassword = lazy(() => import("./Pages/Quest/ResetPassword"));
const User = lazy(() => import("./Pages/User/User"));
const VerifyEmail = lazy(() => import("./Pages/User/VerifyEmail"));
const AdminFlashcards = lazy(() =>
  import("./Pages/Admin/Flashcards/Flashcards")
);
const FlashcardsSetting = lazy(() => import("./Pages/User/FlashcardsSetting"));
const RemindPassword = lazy(() => import("./Pages/Quest/RemindPassword"));
const ReportBug = lazy(() => import("./Pages/Quest/ReportBug"));
const Help = lazy(() => import("./Pages/Quest/Help"));
const Login = lazy(() => import("./Pages/Quest/Login"));
const UserReportBug = lazy(() => import("./Pages/User/UserReportBug"));
const Welcome = lazy(() => import("./Pages/Quest/Welcome"));
const UserHelp = lazy(() => import("./Pages/User/UserHelp"));
const Register = lazy(() => import("./Pages/Quest/Register"));
const ChangePassword = lazy(() => import("./Pages/Settings/ChangePassword"));
const Flashcards = lazy(() => import("./Pages/User/Flashcards"));
const UserData = lazy(() => import("./Pages/Settings/UserData"));
const Modify = lazy(() => import("./Pages/Teacher/Modify/Modify"));
const AfterUserChoseTeam = lazy(() =>
  import("./Pages/Teacher/Modify/AfterUserChoseTeam")
);
const Egzams = lazy(() => import("./Pages/Teacher/Egzams"));
const Notyfications = lazy(() => import("./Pages/User/Notyfications"));
const OpenQuestionCheck = lazy(() =>
  import("./Pages/Teacher/OpenQuestionCheck")
);
const ChooseEgzamSettings = lazy(() =>
  import("./Pages/Teacher/ChooseEgzamSettings")
);
const CreateOpenQuestion = lazy(() =>
  import("./Pages/Teacher/CreateOpenQuestion")
);
const ChooseTeam = lazy(() => import("./Pages/Teacher/ChooseTeam"));
const ShowTestResults = lazy(() => import("./Pages/Teacher/ShowTestResults"));
const MakeEgzam = lazy(() => import("./Pages/Teacher/MakeEgzam"));
const Account = lazy(() => import("./Pages/Settings/Account"));
const Logout = lazy(() => import("./Pages/User/Logout"));
const Teacher = lazy(() => import("./Pages/Teacher/Teacher"));
const Create = lazy(() => import("./Pages/Teacher/Create"));
const QuestionStatistics = lazy(() =>
  import("./Components/Statistics/QuestionStatistics")
);
const TestReview = lazy(() => import("./Pages/User/Tests/TestReview"));
const Handbook = lazy(() => import("./Pages/Teacher/Handbook/Handbook"));
const ModifyHandbooks = lazy(() =>
  import("./Pages/Teacher/Handbook/ModifyHandbooks")
);
const Statistics = lazy(() => import("./Pages/User/Statistics"));
const TestSummary = lazy(() => import("./Pages/User/TestSummary"));
const TestStatistics = lazy(() =>
  import("./Components/Statistics/TestStatistics")
);
const AdminSubscriptions = lazy(() =>
  import("./Pages/Admin/Subscriptions/AdminSubscriptions")
);
const Admin = lazy(() => import("./Pages/Admin/Admin"));
const DeleteTeam = lazy(() => import("./Pages/Teacher/DeleteTeam"));
const AfterCreation = lazy(() =>
  import("./Pages/User/Tests/Settings/AfterCreation")
);
const Subscriptions = lazy(() => import("./Pages/Settings/Subscriptions"));
const ManageTests = lazy(() => import("./Pages/Admin/Tests/ManageTests"));
const AdminTestSettings = lazy(() =>
  import("./Pages/Admin/Tests/AdminTestSettings")
);
const Categories = lazy(() => import("./Pages/Admin/Categories/Categories"));
const NewCategory = lazy(() => import("./Pages/Admin/Categories/NewCategory"));
const DeleteCategory = lazy(() =>
  import("./Pages/Admin/Categories/DeleteCategory")
);
const CreateFlashcard = lazy(() =>
  import("./Pages/Admin/Flashcards/CreateFlashcard")
);
const UpdateAndDeleteSubscription = lazy(() =>
  import("./Pages/Admin/Subscriptions/UpdateAndDeleteSubscription")
);
const Code = lazy(() => import("./Pages/Admin/Code/Code"));
const Offer = lazy(() => import("./Pages/Quest/Offer"));
const Mail = lazy(() => import("./Pages/Admin/Mail/Mail"));
const AdminUsers = lazy(() => import("./Pages/Admin/Users/AdminUsers"));
const ChooseFlashcards = lazy(() =>
  import("./Pages/Admin/Flashcards/ChooseFlashcards")
);
const ModifyQuestion = lazy(() => import("./Pages/Admin/Tests/ModifyQuestion"));

const router = createBrowserRouter([
  {
    path: "/logout",
    element: (
      <Suspense fallback={<Loading />}>
        <Logout />
      </Suspense>
    ),
  },
  {
    path: "/test",
    element: (
      <Suspense fallback={<Loading />}>
        <QuestionsSettings />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Welcome key={1} />
      </Suspense>
    ),
  },
  {
    path: "/report-error",
    element: (
      <Suspense fallback={<Loading />}>
        <ReportBug />
      </Suspense>
    ),
    action: sendMessageAction,
  },
  {
    path: "/help",
    element: (
      <Suspense fallback={<Loading />}>
        <Help />
      </Suspense>
    ),
    action: sendMessageAction,
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loading />}>
        <Register />
      </Suspense>
    ),
    action: registerAction,
  },

  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
    action: loginAction,
    loader: loginloader,
  },
  {
    path: "/forgot-password",
    element: (
      <Suspense fallback={<Loading />}>
        <RemindPassword />
      </Suspense>
    ),
    action: resetPasswordAction,
  },
  {
    path: "/password-reset/:passwordReset",
    element: (
      <Suspense fallback={<Loading />}>
        <ResetPassword />
      </Suspense>
    ),
    action: sendNewPasswordAction,
  },
  {
    path: "/subscriptions",
    element: (
      <Suspense fallback={<Loading />}>
        <Offer />
      </Suspense>
    ),
    loader: getSubscriptionsForGuestLoader,
  },
  {
    path: "/user",
    element: (
      <Suspense fallback={<Loading />}>
        <User />
      </Suspense>
    ),
    loader: checkIfAuth,
    children: [
      {
        path: 'shop/:subscription',
        element: <Suspense fallback={<Loading />}>
          <BuyProduct />
        </Suspense>,
        loader: getSubscription,
        action: makePayment
      },
      {
        path: "help",
        element: (
          <Suspense fallback={<Loading />}>
            <UserHelp />
          </Suspense>
        ),
      },
      {
        path: "report-error",
        element: (
          <Suspense fallback={<Loading />}>
            <UserReportBug />
          </Suspense>
        ),
      },
      {
        path: "account",
        element: (
          <Suspense fallback={<Loading />}>
            <Account />
          </Suspense>
        ),
        children: [
          {
            path: "data",
            element: (
              <Suspense fallback={<Loading />}>
                <UserData />
              </Suspense>
            ),
            loader: getAdressLoader,
            action: updateAdressAction,
            children: [
              {
                path: "password/update",
                element: (
                  <Suspense fallback={<Loading />}>
                    <ChangePassword />
                  </Suspense>
                ),
                action: updatePasswordAction,
              },
            ],
          },
          {
            path: "subscriptions",
            element: (
              <Suspense fallback={<Loading />}>
                <Subscriptions />
              </Suspense>
            ),
            loader: getSubscriptionsLoader,
          },
        ],
      },
      {
        path: "tests",
        element: (
          <Suspense fallback={<Loading />}>
            <Tests />
          </Suspense>
        ),
        children: [
          {
            path: "create",
            element: (
              <Suspense fallback={<Loading />}>
                <CreateTestInstance title />
              </Suspense>
            ),
            loader: createTestLoader,
            action: createTestAction,
          },
          {
            path: "settings",
            element: (
              <Suspense fallback={<Loading />}>
                <TestsSettings />
              </Suspense>
            ),
            children: [
              {
                path: "new",
                element: (
                  <Suspense fallback={<Loading />}>
                    <New />
                  </Suspense>
                ),
                action: createCustomTestAction,
              },
              {
                path: "delete",
                element: (
                  <Suspense fallback={<Loading />}>
                    <Delete />
                  </Suspense>
                ),
              },
              {
                path: "newest",
                element: (
                  <Suspense fallback={<Loading />}>
                    <AfterCreation />
                  </Suspense>
                ),
                loader: getLatestTest,
              },
            ],
          },

          {
            path: "questions/settings",
            element: (
              <Suspense fallback={<Loading />}>
                <QuestionsSettings />
              </Suspense>
            ),
          },
          {
            path: "statistics/test",
            element: (
              <Suspense fallback={<Loading />}>
                <Statistics />
              </Suspense>
            ),
            loader: globalStatisticsLoader,
            children: [
              {
                path: ":testId",
                element: (
                  <Suspense fallback={<Loading />}>
                    <TestStatistics />
                  </Suspense>
                ),
                loader: getTestStatistics,
                children: [
                  {
                    path: "question/:questionId?",
                    element: (
                      <Suspense fallback={<Loading />}>
                        <QuestionStatistics />
                      </Suspense>
                    ),
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
            path: "flashcards",
            element: (
              <Suspense fallback={<Loading />}>
                <FlashcardsSetting />
              </Suspense>
            ),
            loader: flashcardsSettingLoader,
            action: flashcardsAction,
            children: [
              {
                path: "start",
                element: (
                  <Suspense fallback={<Loading />}>
                    <Flashcards />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "team",
        element: (
          <Suspense fallback={<Loading />}>
            <Teacher />
          </Suspense>
        ),
        children: [
          {
            path: "create",
            element: (
              <Suspense fallback={<Loading />}>
                <Create />
              </Suspense>
            ),
            action: createTeamAction,
          },
          {
            path: "modify",
            element: (
              <Suspense fallback={<Loading />}>
                <Modify />
              </Suspense>
            ),
            loader: teamsLoader,
            children: [
              {
                path: ":team",
                element: (
                  <Suspense fallback={<Loading />}>
                    <AfterUserChoseTeam />
                  </Suspense>
                ),
                loader: teamLoader,
              },
            ],
          },
          {
            path: "handbook",
            element: (
              <Suspense fallback={<Loading />}>
                <Handbook />
              </Suspense>
            ),
            loader: teamsLoader,
            children: [
              {
                path: "team/:team",
                element: (
                  <Suspense fallback={<Loading />}>
                    <ModifyHandbooks />
                  </Suspense>
                ),
                loader: modifyHandbookLoader,
              },
            ],
          },
          {
            path: "egzam",
            element: (
              <Suspense fallback={<Loading />}>
                <MakeEgzam />
              </Suspense>
            ),
            loader: teamsLoader,
            children: [
              {
                path: "teams/:teamId",
                element: (
                  <Suspense fallback={<Loading />}>
                    <ChooseEgzamSettings />
                  </Suspense>
                ),
                loader: createTestLoader,
                action: createEgzamAction,
              },
            ],
          },
          {
            path: "egzam/teams/:teamId/egzams/:testId/open-questions/create",
            element: (
              <Suspense fallback={<Loading />}>
                <CreateOpenQuestion />
              </Suspense>
            ),
            action: createOpenQuestionAction,
          },
          {
            path: "delete",
            element: (
              <Suspense fallback={<Loading />}>
                {" "}
                <DeleteTeam />
              </Suspense>
            ),
            loader: teamsLoader,
          },
          {
            path: "egzams",
            element: (
              <Suspense fallback={<Loading />}>
                <ChooseTeam />
              </Suspense>
            ),
            loader: teamsLoader,
            children: [
              {
                path: "teams/:teamId",
                element: (
                  <Suspense fallback={<Loading />}>
                    <Egzams />
                  </Suspense>
                ),
                loader: getEgzamsLoader,
                children: [
                  {
                    path: "egzams/:testId",
                    element: (
                      <Suspense fallback={<Loading />}>
                        <ShowTestResults />
                      </Suspense>
                    ),
                    loader: showEgzamLoader,
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        path: "test/:generatedTestId",
        element: (
          <Suspense fallback={<Loading />}>
            <SolveTest />
          </Suspense>
        ),
        loader: solveTestLoader,
        action: sendFilledTestAction,
        children: [
          {
            path: "review",
            element: (
              <Suspense fallback={<Loading />}>
                {" "}
                <TestReview />
              </Suspense>
            ),
            loader: testReviewLoader,
          },
        ],
      },

      {
        path: "test/:generatedTestId/summary",
        element: (
          <Suspense fallback={<Loading />}>
            {" "}
            <TestSummary />
          </Suspense>
        ),
        loader: summaryLoader,
      },
      {
        path: "verify-email/:id/:hash",
        element: (
          <Suspense fallback={<Loading />}>
            {" "}
            <VerifyEmail />
          </Suspense>
        ),
        loader: verifyEmailLoader,
      },
      {
        path: "notyfications",
        element: (
          <Suspense fallback={<Loading />}>
            <Notyfications />
          </Suspense>
        ),
        loader: notyficationsLoader,
      },
      {
        path: "check/tests/:id/open-questions",
        element: (
          <Suspense fallback={<Loading />}>
            <OpenQuestionCheck />
          </Suspense>
        ),
        loader: getOpenQuestionToGrade,
      },
      {
        path: "admin",
        element: (
          <Suspense fallback={<Loading />}>
            <Admin />
          </Suspense>
        ),
        children: [
          {
            path: "subscriptions",
            element: (
              <Suspense fallback={<Loading />}>
                <AdminSubscriptions />
              </Suspense>
            ),
            action: createSubscriptionAction,
            loader: getAdminSubscriptionsLoader,
            children: [
              {
                path: ":subscription",
                element: (
                  <Suspense fallback={<Loading />}>
                    <UpdateAndDeleteSubscription />
                  </Suspense>
                ),
                loader: getSubscription,
                action: updateSubscription,
              },
            ],
          },
          {
            path: "tests/:testId/questions/:questionId",
            element: <Suspense fallback={<Loading />}>
              <ModifyQuestion />
            </Suspense>,
            loader: modifyQuestionLoader
          },
          {
            path: "tests",
            element: (
              <Suspense fallback={<Loading />}>
                <ManageTests />
              </Suspense>
            ),
            loader: adminTestLoader,
            action: createAdminTest,
            children: [

              {
                path: "settings/:testId",
                element: (
                  <Suspense fallback={<Loading />}>
                    <AdminTestSettings />
                  </Suspense>
                ),
                loader: adminTestSettingsLoader,
              },
            ],
          },
          {
            path: "categories",
            element: (
              <Suspense fallback={<Loading />}>
                <Categories />
              </Suspense>
            ),
            loader: getCategoriesAndUndercategories,
            children: [
              {
                path: 'category/:categoryId',
                element: <Suspense fallback={<Loading />}>
                  <EditCategory />
                </Suspense>,
                loader: getCategoryById,
                action: editCategoryAction
              },
              {
                path: 'subcategory/:undercategoryId',
                element: <Suspense fallback={<Loading />}>
                  <EditUndercategory />
                </Suspense>,
                loader: getUndercategoryById,
                action: editUndercategoryAction
              },
              {
                path: "new",
                element: (
                  <Suspense fallback={<Loading />}>
                    <NewCategory />
                  </Suspense>
                ),
                action: createNewCategoryOrUndercategory,
                loader: getCategoriesAndUndercategories,
              },
              {
                path: "delete",
                element: (
                  <Suspense fallback={<Loading />}>
                    <DeleteCategory />
                  </Suspense>
                ),
                action: deleteCategoryOrUndercategory,
                loader: getCategoriesAndUndercategories,
              },
            ],
          },
          {
            path: "flashcards",
            element: (
              <Suspense fallback={<Loading />}>
                <AdminFlashcards />
              </Suspense>
            ),
            children: [
              {
                path: "new",
                element: <CreateFlashcard />,
                loader: createFlashcardLoader,
                action: createFlashcard,
              },
              {
                path: "edit",
                element: (
                  <Suspense fallback={<Loading />}>
                    <ChooseFlashcards />
                  </Suspense>
                ),
                loader: getAdminFlashcardsLoader,
                children: [
                  {
                    path: ":flashcard",
                    element: (
                      <Suspense fallback={<Loading />}>
                        {" "}
                        <EditFlashcard />
                      </Suspense>
                    ),
                    loader: editFlashcardLoader,
                    action: updateFlashcard
                  },
                ],
              },
            ],
          },
          {
            path: "users",
            element: (
              <Suspense fallback={<Loading />}>
                <AdminUsers />
              </Suspense>
            ),
          },
          {
            path: "mail",
            element: (
              <Suspense fallback={<Loading />}>
                <Mail />
              </Suspense>
            ),
            action: sendMailAction,
          },
          {
            path: "discount-codes",
            element: (
              <Suspense fallback={<Loading />}>
                <Code />
              </Suspense>
            ),
            loader: getAllCodesLoader,
            action: createDiscountCodeAction,
          },
        ],
      },
    ],
  },
  {
    path: "loading",
    element: <Loading />,
  },
]);

export { router as default };
