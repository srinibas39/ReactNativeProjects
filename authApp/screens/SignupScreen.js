import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { signup } from '../utils/auth';
import { useState } from "react";
import { Alert } from "react-native"

function SignupScreen() {

  const [isLoading, setIsLoading] = useState(false)

  const onAuthenticate = async ({ email, password }) => {
    setIsLoading(true)
    try {
      const token = await signup({ email, password })
    }
    catch (err) {
      Alert.alert("Signup Error", err.message, [
        {
          text: "Ok",
          onPress: () => console.log("Ok pressed")
        }
      ])
    }
    setIsLoading(false)

  }
  if (isLoading) {
    return <LoadingOverlay message={"Signing you up"} />
  }
  return <AuthContent onAuthenticate={onAuthenticate} />;
}

export default SignupScreen;
