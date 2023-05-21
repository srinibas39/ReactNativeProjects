import AuthContent from '../components/Auth/AuthContent';
import { login } from '../utils/auth';

function LoginScreen() {

  const onAuthenticate = async ({ email, password }) => {
    try {
      const token = await login({ email, password })
      console.log(token)
    }
    catch (err) {
      console.log(err)
    }
  }

  return <AuthContent isLogin onAuthenticate={onAuthenticate} />;
}

export default LoginScreen;
