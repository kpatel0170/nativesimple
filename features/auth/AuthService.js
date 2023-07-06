import API from '../../app/api';
import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userRegister = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    const response = await API.post('auth/register', user);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.error) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const userLogin = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    console.log(user);
    axios.post('https://try-back.onrender.com/api/auth/login', user)
    .then(response => {
      // Handle the response data
      console.log(response);
    })
    .catch(error => {
      // Handle the error
      console.log(error);
      console.log("nai thatu!")
    });
  
    try {
    console.log(user);
    
    const response = await API.post('auth/login', user);
    console.log(response);
    if (response.data) {
      AsyncStorage.setItem('user', JSON.stringify(response.data));
      AsyncStorage.setItem('token', response.data.token);
      AsyncStorage.setItem('isLoggedIn', 'true');
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.error) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const userLogout = createAsyncThunk('auth/logout', async () => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('isLoggedIn');
  AsyncStorage.removeItem('user');
});

const authService = {
  userRegister,
  userLogin,
  userLogout,
};

export default authService;
