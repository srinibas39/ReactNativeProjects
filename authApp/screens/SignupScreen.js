import AuthContent from '../components/Auth/AuthContent';
import { signup } from '../utils/auth';

function SignupScreen() {

  const onAuthenticate = async ({ email, password }) => {

    try {
      const token = await signup({ email, password })
      console.log(token)
    }
    catch (err) {
      console.log(err)
    }

  }
  return <AuthContent onAuthenticate={onAuthenticate} />;
}

export default SignupScreen;
