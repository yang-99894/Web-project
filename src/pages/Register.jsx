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

  const isValid = username.trim() && email.trim() && password.length >= 6 && password === confirmPassword && agreeTerms;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-[440px] px-5">
          <div className="rounded-2xl p-10 bg-card border border-border shadow-md">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-primary/8">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" strokeLinecap="round" />
                  <rect x="8" y="2" width="8" height="4" rx="1" />
                  <path d="M12 11v6M9 14h6" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-foreground">创建账号</h2>
              <p className="text-sm mt-2 text-muted-foreground">加入学职平台，探索你的职业未来</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-foreground">用户名</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                placeholder="请输入用户名"
                className="w-full outline-none px-4 py-3 text-sm rounded-xl transition-all duration-200 border border-primary/25 text-foreground bg-background" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-foreground">邮箱 / 手机号</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="请输入邮箱或手机号"
                className="w-full outline-none px-4 py-3 text-sm rounded-xl transition-all duration-200 border border-primary/25 text-foreground bg-background" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-foreground">密码</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="请设置密码（至少6位）"
                className="w-full outline-none px-4 py-3 text-sm rounded-xl transition-all duration-200 border border-primary/25 text-foreground bg-background" />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-foreground">确认密码</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="请再次输入密码"
                className="w-full outline-none px-4 py-3 text-sm rounded-xl transition-all duration-200 text-foreground bg-background"
                style={{
                  border: confirmPassword ? (password === confirmPassword ? '1px solid var(--primary)' : '1px solid var(--destructive)') : '1px solid var(--border)',
                }} />
              {confirmPassword && password !== confirmPassword && (
                <p className="text-xs mt-1 text-destructive">两次输入的密码不一致</p>
              )}
            </div>

            <label className="flex items-start gap-2 mb-6 cursor-pointer">
              <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5" style={{ accentColor: 'var(--primary)' }} />
              <span className="text-xs text-muted-foreground leading-relaxed">
                我已阅读并同意 <a href="#" className="text-primary no-underline hover:underline">服务协议</a> 和 <a href="#" className="text-primary no-underline hover:underline">隐私政策</a>
              </span>
            </label>

            <button onClick={() => { if (isValid) navigate('/'); }} className="w-full py-3 rounded-xl text-base font-medium border-none transition-all duration-200 text-primary-foreground shadow-md hover:-translate-y-px hover:shadow-lg"
              style={{
                backgroundColor: isValid ? 'var(--primary)' : 'var(--primary)',
                opacity: isValid ? 1 : 0.3,
                cursor: isValid ? 'pointer' : 'default',
              }}>
              注 册
            </button>

            <div className="mt-6 text-center">
              <span className="text-sm text-muted-foreground">已有账号？</span>
              <Link to="/login" className="text-sm font-medium ml-1 transition-all duration-200 text-primary hover:underline no-underline">
                立即登录
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer simple />
    </div>
  );
}

export default Register;
