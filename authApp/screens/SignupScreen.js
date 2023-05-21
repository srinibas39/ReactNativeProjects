import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { signup } from '../utils/auth';
import { useState } from "react";

function SignupScreen() {

  const [isLoading, setIsLoading] = useState(false)

  const onAuthenticate = async ({ email, password }) => {
    setIsLoading(true)
    try {
      const token = await signup({ email, password })
      console.log(token)
    }
    catch (err) {
      console.log(err)
    }
    setIsLoading(false)

  }
  if (isLoading) {
    return <LoadingOverlay message={"Signing you up"} />
  }
  return <AuthContent onAuthenticate={onAuthenticate} />;
}

export default SignupScreen;
