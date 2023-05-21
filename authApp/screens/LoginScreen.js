import AuthContent from '../components/Auth/AuthContent';
import { login } from '../utils/auth';
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { useState } from "react";

function LoginScreen() {

  const [isLoading, setIsLoading] = useState(false);

  const onAuthenticate = async ({ email, password }) => {
    setIsLoading(true)
    try {
      const token = await login({ email, password })
      console.log(token)
    }
    catch (err) {
      console.log(err)
    }
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingOverlay message={"Signing you in"} />
  }

  return <AuthContent isLogin onAuthenticate={onAuthenticate} />;
}

export default LoginScreen;
