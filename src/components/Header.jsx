import React, { useState, useEffect } from 'react';
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
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <div className="bg-primary">
      <div className="mx-auto flex items-center h-[100px]" style={{ width: '1180px' }}>
        <Link to="/" className="flex items-center gap-5 no-underline">
          <div className="flex items-center justify-center rounded-xl gap-2 px-3 h-[52px] bg-white/12 border border-white/15">
            <img src="/images/logo_aiira_en.png" alt="logo" className="h-8 w-auto brightness-0 invert" />
            <span className="text-xl font-bold text-white tracking-[2px]">学职平台</span>
          </div>
          <span className="text-base text-white/70 tracking-[0.5px]">
            全国大学生学业与职业发展平台
          </span>
        </Link>
        <div className="flex-1" />
        <div className="flex items-center gap-5">
          <div className="relative">
            <input
              type="text"
              placeholder="搜索"
              className="outline-none px-3 text-sm transition-all duration-200 w-[180px] h-[34px] rounded-lg pr-[34px] text-primary-foreground bg-white/10 placeholder:text-white/40"
              style={{
                border: searchFocus ? '1px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.2)',
                boxShadow: searchFocus ? '0 0 0 3px rgba(255,255,255,0.06)' : 'none',
              }}
              onFocus={() => setSearchFocus(true)}
              onBlur={() => setSearchFocus(false)}
            />
            <button className="absolute cursor-pointer border-none flex items-center justify-center w-5 h-5 right-[9px] top-[7px] bg-transparent" aria-label="搜索">
              <svg viewBox="0 0 20 20" className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="8.5" cy="8.5" r="7" /><path d="M13.5 13.5L18 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <Link to="/login" className="text-base font-medium text-white/80 hover:text-white transition-all duration-200 no-underline">
            登录
          </Link>
          <Link to="/register"
            className="text-base font-medium px-5 py-2 rounded-lg bg-white text-primary shadow-md hover:-translate-y-px hover:shadow-xl transition-all duration-200 no-underline">
            注册
          </Link>
          <button
            onClick={toggleDark}
            className="w-8 h-8 rounded-lg border-none cursor-pointer flex items-center justify-center bg-white/10 text-white/70 hover:bg-white/20 transition-all duration-200"
            aria-label="切换深色模式">
            {dark ? (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex items-center h-12" style={{ width: '1180px' }}>
          {navItems.map((item, i) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={i} to={item.path}
                className="h-full flex items-center transition-all duration-200 relative px-[30px] no-underline"
                style={{
                  color: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)',
                  fontWeight: isActive ? '600' : '400',
                  fontSize: isActive ? '17px' : '15px',
                  letterSpacing: '0.5px',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}>
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-white" />
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
