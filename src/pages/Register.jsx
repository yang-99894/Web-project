import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const isValid =
    username.trim() &&
    email.trim() &&
    password.length >= 6 &&
    password === confirmPassword &&
    agreeTerms;

  const getConfirmBorderClass = () => {
    if (!confirmPassword) return 'border-primary/25';
    return password === confirmPassword ? 'border-primary' : 'border-destructive';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex items-center justify-center bg-primary p-10">
            <div className="text-center text-primary-foreground">
            <img src="/images/logo_aiira_en.png" alt="logo" className="h-12 w-auto mx-auto mb-5 brightness-0 invert" />
            <h1 className="text-3xl font-bold mb-3">学职平台</h1>
            <p className="text-base opacity-80">加入我们，开启你的职业探索之旅</p>
          </div>
        </div>

        <div className="lg:w-1/2 flex items-center justify-center px-5 py-10 bg-background">
          <div className="w-full max-w-sm">
            <div className="rounded-2xl border border-border bg-card shadow-sm p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-primary/10">
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" strokeLinecap="round" />
                    <rect x="8" y="2" width="8" height="4" rx="1" />
                    <path d="M12 11v6M9 14h6" strokeLinecap="round" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">创建账号</h2>
                <p className="text-sm mt-2 text-muted-foreground">加入学职平台，探索你的职业未来</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">用户名</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="请输入用户名"
                    className="w-full outline-none px-4 py-3 text-sm rounded-xl border border-primary/25 text-foreground bg-background"
                  />
                </div>

                <div className="mb-4">
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
                    placeholder="请设置密码（至少6位）"
                    className="w-full outline-none px-4 py-3 text-sm rounded-xl border border-primary/25 text-foreground bg-background"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">确认密码</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="请再次输入密码"
                    className={`w-full outline-none px-4 py-3 text-sm rounded-xl text-foreground bg-background border ${getConfirmBorderClass()}`}
                  />
                  {confirmPassword && password !== confirmPassword && (
                    <p className="text-xs mt-1 text-destructive">两次输入的密码不一致</p>
                  )}
                </div>

                <label className="flex items-start gap-2 mb-6 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="mt-0.5"
                    style={{ accentColor: 'var(--primary)' }}
                  />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    我已阅读并同意 <a href="#" className="text-primary hover:underline">服务协议</a> 和 <a href="#" className="text-primary hover:underline">隐私政策</a>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!isValid}
                  className="w-full py-3 rounded-xl text-base font-medium bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-200"
                  style={{ opacity: isValid ? 1 : 0.3 }}
                >
                  注 册
                </button>
              </form>

              <div className="mt-6 text-center">
                <span className="text-sm text-muted-foreground">已有账号？</span>
                <Link to="/login" className="text-sm font-medium ml-1 text-primary hover:underline">
                  立即登录
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer simple />
    </div>
  );
}

export default Register;
