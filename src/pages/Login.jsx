import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex items-center justify-center bg-primary p-10">
            <div className="text-center text-primary-foreground">
            <img src="/images/logo_aiira_en.png" alt="logo" className="h-12 w-auto mx-auto mb-5 brightness-0 invert" />
            <h1 className="text-3xl font-bold mb-3">学职平台</h1>
            <p className="text-base opacity-80">连接学业与职业，规划你的未来</p>
          </div>
        </div>

        <div className="lg:w-1/2 flex items-center justify-center px-5 py-10 bg-background">
          <div className="w-full max-w-sm">
            <div className="rounded-2xl border border-border bg-card shadow-sm p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-primary/10">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">欢迎回来</h2>
                <p className="text-sm mt-2 text-muted-foreground">登录你的学职平台账号</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="block text-sm font-medium mb-2">邮箱 / 手机号</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="请输入邮箱或手机号"
                    className="w-full outline-none px-4 py-3 text-sm rounded-xl border border-primary/25 text-foreground bg-background"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">密码</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="请输入密码"
                    className="w-full outline-none px-4 py-3 text-sm rounded-xl border border-primary/25 text-foreground bg-background"
                  />
                </div>

                <div className="flex items-center justify-between mb-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      style={{ accentColor: 'var(--primary)' }}
                    />
                    <span className="text-xs text-muted-foreground">记住我</span>
                  </label>
                  <a href="#" className="text-xs text-primary hover:underline">
                    忘记密码？
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-base font-medium bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-200"
                >
                  登 录
                </button>
              </form>

              <div className="mt-6 text-center">
                <span className="text-sm text-muted-foreground">还没有账号？</span>
                <Link to="/register" className="text-sm font-medium ml-1 text-primary hover:underline">
                  立即注册
                </Link>
              </div>
            </div>

            <p className="text-xs text-center mt-6 text-muted-foreground">
              登录即表示同意 <a href="#" className="text-primary hover:underline">服务协议</a> 和 <a href="#" className="text-primary hover:underline">隐私政策</a>
            </p>
          </div>
        </div>
      </div>

      <Footer simple />
    </div>
  );
}

export default Login;
