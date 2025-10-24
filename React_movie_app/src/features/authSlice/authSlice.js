import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [],
    currentUser: null,
    isAuthenticated: false,
  },
  reducers: {
    signup: (state, action) => {
      const { email, passowrd, name } = action.payload;
      const userExists = state.users.find((u) => u.email === email);
      if (userExists) {
        console.log('do login ');
      }
      const newUser = {
        id: Date.now().toString(),
        name: name,
        email: email,
        passowrd: passowrd,
      };
      state.users.push(newUser);
      state.currentUser = { ...newUser };
      state.isAuthenticated = true;

      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },
    login: (state, action) => {
      const { email, passowrd } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.passowrd === passowrd
      );

      if (user) {
        state.currentUser = { ...user };
        state.isAuthenticated = true;
        localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
              localStorage.removeItem('currentUser');

    },
  },
});
export const {signup , login , logout} = authSlice.actions
export default authSlice.reducer
