import { useDispatch, useSelector } from "react-redux";
import { login, register, logout } from "../featues/auth/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const dispatch = useDispatch();

export default async function ChangeStatesRedux() {
  const user = await AsyncStorage.getItem("user");
  const email = await AsyncStorage.getItem("email");
  const token = await AsyncStorage.getItem("token");

  const data = {
    user: user,
    email: email,
    token: token,
  };
  dispatch(login(data));
}