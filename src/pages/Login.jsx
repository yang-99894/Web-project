import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

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
                  <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold" style={{ color: '#1B1F23' }}>欢迎回来</h2>
              <p className="text-sm mt-2" style={{ color: '#5a6a7a' }}>登录你的学职平台账号</p>
            </div>

            <div className="mb-5">
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
                placeholder="请输入密码"
                className="w-full outline-none px-4 py-3 text-sm rounded-xl transition-all duration-200"
                style={{
                  border: '1px solid rgba(65,103,177,0.25)',
                  color: '#1B1F23',
                  backgroundColor: '#e3ecf7',
                }} />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)}
                  style={{ accentColor: '#4167B1' }} />
                <span className="text-xs" style={{ color: '#5a6a7a' }}>记住我</span>
              </label>
              <a href="#" className="text-xs transition-all duration-200" style={{ color: '#4167B1', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>
                忘记密码？
              </a>
            </div>

            <button onClick={() => navigate('/')} className="w-full py-3 rounded-xl text-base font-medium border-none cursor-pointer transition-all duration-200"
              style={{ color: '#ffffff', backgroundColor: '#4167B1', boxShadow: '0 4px 16px rgba(65,103,177,0.25)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(65,103,177,0.35)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(65,103,177,0.25)'; }}>
              登 录
            </button>

            <div className="mt-6 text-center">
              <span className="text-sm" style={{ color: '#5a6a7a' }}>还没有账号？</span>
              <Link to="/register" className="text-sm font-medium ml-1 transition-all duration-200"
                style={{ color: '#4167B1', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>
                立即注册
              </Link>
            </div>
          </div>

          <p className="text-xs text-center mt-6" style={{ color: '#5a6a7a' }}>
            登录即表示同意 <a href="#" style={{ color: '#4167B1', textDecoration: 'none' }}>服务协议</a> 和 <a href="#" style={{ color: '#4167B1', textDecoration: 'none' }}>隐私政策</a>
          </p>
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

export default Login;
