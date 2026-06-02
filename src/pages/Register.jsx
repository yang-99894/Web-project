import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const isValid = username.trim() && email.trim() && password.length >= 6 && password === confirmPassword && agreeTerms;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#e3ecf7', color: '#1B1F23' }}>
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full" style={{ maxWidth: '440px', padding: '0 20px' }}>
          <div className="rounded-2xl p-10" style={{
            backgroundColor: '#ffffff',
            border: '1px solid rgba(65,103,177,0.15)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}>
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'rgba(65,103,177,0.08)' }}>
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#4167B1" strokeWidth="1.5">
                  <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" strokeLinecap="round" />
                  <rect x="8" y="2" width="8" height="4" rx="1" />
                  <path d="M12 11v6M9 14h6" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold" style={{ color: '#1B1F23' }}>创建账号</h2>
              <p className="text-sm mt-2" style={{ color: '#5a6a7a' }}>加入学职平台，探索你的职业未来</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: '#1B1F23' }}>用户名</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                placeholder="请输入用户名"
                className="w-full outline-none px-4 py-3 text-sm rounded-xl transition-all duration-200"
                style={{
                  border: '1px solid rgba(65,103,177,0.25)',
                  color: '#1B1F23',
                  backgroundColor: '#e3ecf7',
                }} />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: '#1B1F23' }}>邮箱 / 手机号</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="请输入邮箱或手机号"
                className="w-full outline-none px-4 py-3 text-sm rounded-xl transition-all duration-200"
                style={{
                  border: '1px solid rgba(65,103,177,0.25)',
                  color: '#1B1F23',
                  backgroundColor: '#e3ecf7',
                }} />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" style={{ color: '#1B1F23' }}>密码</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="请设置密码（至少6位）"
                className="w-full outline-none px-4 py-3 text-sm rounded-xl transition-all duration-200"
                style={{
                  border: '1px solid rgba(65,103,177,0.25)',
                  color: '#1B1F23',
                  backgroundColor: '#e3ecf7',
                }} />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2" style={{ color: '#1B1F23' }}>确认密码</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="请再次输入密码"
                className="w-full outline-none px-4 py-3 text-sm rounded-xl transition-all duration-200"
                style={{
                  border: confirmPassword ? (password === confirmPassword ? '1px solid rgba(65,103,177,0.4)' : '1px solid rgba(231,76,60,0.4)') : '1px solid rgba(65,103,177,0.25)',
                  color: '#1B1F23',
                  backgroundColor: '#e3ecf7',
                }} />
              {confirmPassword && password !== confirmPassword && (
                <p className="text-xs mt-1" style={{ color: '#e74c3c' }}>两次输入的密码不一致</p>
              )}
            </div>

            <label className="flex items-start gap-2 mb-6 cursor-pointer">
              <input type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-0.5" style={{ accentColor: '#4167B1' }} />
              <span className="text-xs" style={{ color: '#5a6a7a', lineHeight: '1.5' }}>
                我已阅读并同意 <a href="#" style={{ color: '#4167B1', textDecoration: 'none' }}>服务协议</a> 和 <a href="#" style={{ color: '#4167B1', textDecoration: 'none' }}>隐私政策</a>
              </span>
            </label>

            <button onClick={() => { if (isValid) navigate('/'); }} className="w-full py-3 rounded-xl text-base font-medium border-none cursor-pointer transition-all duration-200"
              style={{
                color: '#ffffff',
                backgroundColor: isValid ? '#4167B1' : 'rgba(65,103,177,0.3)',
                boxShadow: isValid ? '0 4px 16px rgba(65,103,177,0.25)' : 'none',
                cursor: isValid ? 'pointer' : 'default',
              }}
              onMouseEnter={(e) => { if (isValid) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(65,103,177,0.35)'; } }}
              onMouseLeave={(e) => { if (isValid) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(65,103,177,0.25)'; } }}>
              注 册
            </button>

            <div className="mt-6 text-center">
              <span className="text-sm" style={{ color: '#5a6a7a' }}>已有账号？</span>
              <Link to="/login" className="text-sm font-medium ml-1 transition-all duration-200"
                style={{ color: '#4167B1', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>
                立即登录
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#e3ecf7', borderTop: '1px solid rgba(65,103,177,0.12)' }}>
        <div className="mx-auto text-center py-6" style={{ width: '440px', fontSize: '13px', color: '#5a6a7a' }}>
          Copyright &copy; 2003-2026 智绘职途 All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Register;
