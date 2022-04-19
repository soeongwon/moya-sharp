import LoginService from "../components/LoginService";
import useBlockLoginUser from "../components/LoginService/hooks/useBlockLoginUser";

const LoginServicePage = () => {
  useBlockLoginUser();

  return (
    <main>
      <LoginService></LoginService>
    </main>
  );
};

export default LoginServicePage;
