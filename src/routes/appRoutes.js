import HomePage from "../components/home";
import MainApp from "../components/main";
import LoginPage from "../components/login";
import ResetPasswordPage from "../components/resetPassword";
import NoMatch from "../components/noMatch";

export default [
  { path: "/", component: HomePage, exact: true },
  { path: "/app", component: MainApp },
  { path: "/login", component: LoginPage },
  { path: "/reset_password", component: ResetPasswordPage },
  { component: NoMatch },
];

