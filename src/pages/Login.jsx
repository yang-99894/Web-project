import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[440px] px-5">
          <div className="rounded-2xl p-10 bg-card border border-border shadow-md">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-primary/8">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground">欢迎回来</h2>
              <p className="text-sm mt-2 text-muted-foreground">登录你的学职平台账号</p>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium mb-2 text-foreground">邮箱 / 手机号</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="请输入邮箱或手机号"
                className="w-full outline-none px-4 py-3 text-sm rounded-xl transition-all duration-200 border border-primary/25 text-foreground bg-background" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-foreground">密码</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入密码"
                className="w-full outline-none px-4 py-3 text-sm rounded-xl transition-all duration-200 border border-primary/25 text-foreground bg-background" />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)}
                  style={{ accentColor: 'var(--primary)' }} />
                <span className="text-xs text-muted-foreground">记住我</span>
              </label>
              <a href="#" className="text-xs transition-all duration-200 text-primary hover:underline no-underline">
                忘记密码？
              </a>
            </div>

            <button onClick={() => navigate('/')} className="w-full py-3 rounded-xl text-base font-medium border-none cursor-pointer transition-all duration-200 bg-primary text-primary-foreground shadow-md hover:-translate-y-px hover:shadow-lg">
              登 录
            </button>

            <div className="mt-6 text-center">
              <span className="text-sm text-muted-foreground">还没有账号？</span>
              <Link to="/register" className="text-sm font-medium ml-1 transition-all duration-200 text-primary hover:underline no-underline">
                立即注册
              </Link>
            </div>
          </div>

          <p className="text-xs text-center mt-6 text-muted-foreground">
            登录即表示同意 <a href="#" className="text-primary no-underline hover:underline">服务协议</a> 和 <a href="#" className="text-primary no-underline hover:underline">隐私政策</a>
          </p>
        </div>
      </div>

      <Footer simple />
    </div>
  );
}

export default Login;
