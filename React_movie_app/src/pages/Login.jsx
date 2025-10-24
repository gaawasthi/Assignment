import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/authSlice/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form));
    navigate('/home');
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="absolute w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw')",
        }}
      >
        <div className="absolute w-full h-full bg-black/60">
          <section className="relative z-10 flex items-center justify-center min-h-screen px-4">
            <div className="w-full max-w-md p-6 bg-black/70 rounded-xl shadow text-white">
              <h1 className="text-2xl font-bold mb-6">Login Here</h1>
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="w-full p-2.5 mb-4 text-sm rounded-lg border bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                  value={form.email}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="w-full p-2.5 mb-4 text-sm rounded-lg border bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={handleChange}
                  value={form.password}
                  required
                />
                <button
                  onClick={() => navigate('/home')}
                  type="submit"
                  className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-2.5 rounded-lg font-bold hover:from-red-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg"
                >
                  Login Here
                </button>
              </form>
              <p className="mt-4 text-sm text-gray-300">
                New user?{' '}
                <button
                  onClick={() => navigate('/signup')}
                  className="text-blue-400 hover:underline"
                >
                  Register Here
                </button>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
