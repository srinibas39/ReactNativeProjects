import AuthContent from '../components/Auth/AuthContent';
import { login } from '../utils/auth';
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { useState } from "react";
import { Alert } from "react-native";
import { useAuth } from '../store/AuthContext';

function LoginScreen() {

  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useAuth();

  const onAuthenticate = async ({ email, password }) => {
    setIsLoading(true)
    try {
      const token = await login({ email, password })
      setToken(token)
    }
    catch (err) {
      Alert.alert("Login Error", err.message, [
        {
          text: "Ok",
          onPress: () => console.log("Ok pressed")
        }
      ])
    }
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingOverlay message={"Signing you in"} />
  }

  return <AuthContent isLogin onAuthenticate={onAuthenticate} />;
}

export default LoginScreen;
