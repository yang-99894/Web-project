import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: '首页', path: '/' },
  { label: '专业洞察', path: '/speciality' },
  { label: '职业测评', path: '/survey' },
  { label: '职业探索', path: '/occupation' },
  { label: 'AI简历优化', path: '/resume' },
];

function Header() {
  const location = useLocation();
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <div style={{ background: '#4167B1' }}>
      <div className="mx-auto flex items-center" style={{ width: '1180px', height: '100px' }}>
        <Link to="/" className="flex items-center gap-5" style={{ textDecoration: 'none' }}>
          <div className="flex items-center justify-center rounded-xl gap-2 px-3" style={{
            height: '52px',
            backgroundColor: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}>
            <img src="/images/logo_aiira_en.png" alt="logo" style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
            <span className="text-xl font-bold tracking-widest" style={{ color: '#ffffff', letterSpacing: '2px' }}>学职平台</span>
          </div>
          <span className="text-base" style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.5px' }}>
            全国大学生学业与职业发展平台
          </span>
        </Link>
        <div className="flex-1" />
        <div className="flex items-center gap-5">
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="搜索"
              className="outline-none px-3 text-sm transition-all duration-200"
              style={{
                width: '180px',
                height: '34px',
                border: searchFocus ? '1px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                paddingRight: '34px',
                color: '#ffffff',
                backgroundColor: 'rgba(255,255,255,0.1)',
                boxShadow: searchFocus ? '0 0 0 3px rgba(255,255,255,0.06)' : 'none',
              }}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
            <button className="absolute cursor-pointer border-none flex items-center justify-center"
              style={{ width: '20px', height: '20px', right: '9px', top: '7px', background: 'transparent' }} aria-label="搜索">
              <svg viewBox="0 0 20 20" className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.5)' }} fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="8.5" cy="8.5" r="7" /><path d="M13.5 13.5L18 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <Link to="/login" className="text-base font-medium transition-all duration-200" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}>
            登录
          </Link>
          <Link to="/register"
            className="text-base font-medium px-5 py-2 rounded-lg transition-all duration-200"
            style={{ color: '#4167B1', backgroundColor: '#ffffff', textDecoration: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'; }}>
            注册
          </Link>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="mx-auto flex items-center h-12" style={{ width: '1180px' }}>
          {navItems.map((item, i) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={i} to={item.path}
                className="h-full flex items-center transition-all duration-200 relative"
                style={{
                  padding: '0 30px',
                  color: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)',
                  fontWeight: isActive ? '600' : '400',
                  fontSize: isActive ? '17px' : '15px',
                  letterSpacing: '0.5px',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full"
                    style={{ width: '24px', backgroundColor: '#ffffff' }} />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
