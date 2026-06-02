import React from 'react';

const footerLinks = [
  { label: '智绘职途', url: '#' },
  { label: '版权声明', url: '#' },
  { label: '鸣谢单位', url: '#' },
  { label: '关于我们', url: '#' },
  { label: '联系我们', url: '#' },
];

function Footer({ simple }) {
  if (simple) {
    return (
      <div className="border-t border-border">
        <div className="mx-auto text-center py-6 text-muted-foreground text-[13px] max-w-[440px]">
          Copyright &copy; 2026-2027 智绘职途 All Rights Reserved
        </div>
      </div>
    );
  }

  return (
    <div className="border-t border-border">
      <div className="mx-auto relative h-[198px] text-sm leading-[30px]" style={{ width: '1180px' }}>
        <div className="absolute top-8 left-0">
          {footerLinks.map((link, i) => (
            <React.Fragment key={i}>
              <a href={link.url} target="_blank" rel="noopener noreferrer"
                className="text-foreground text-sm mr-5 hover:text-primary transition-colors duration-200">
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </div>
        <div className="absolute top-[75px] left-0 text-muted-foreground text-[13px]">
          主办单位：
          <a href="#" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200">
            AI智研创新协会
          </a>
          <br />
          Copyright &copy; 2026-2027 <a href="#" target="_blank" rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200">智绘职途</a> All Rights Reserved
        </div>

        <div className="absolute text-center top-[42px] right-0 text-foreground">
          <div className="flex items-center justify-center mb-2">
            <div className="flex items-center justify-center w-[72px] h-[72px] rounded-xl bg-primary/15">
              <div className="text-center">
                <svg className="w-5 h-5 mx-auto text-primary" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="14" y="2" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="2" y="14" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="14" y="14" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="text-xs mt-1 block text-primary">二维码</span>
              </div>
            </div>
          </div>
          <div className="text-xs text-primary tracking-[1px]">官方微信</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
