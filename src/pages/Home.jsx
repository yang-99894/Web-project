import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const bannerSlides = Array.from({ length: 5 }, (_, i) => ({ id: i }));

const zyzxList = [
  '我们到底需要多少张文凭，才能证明自己"够好了"',
  '面对春招新气象，毕业生怎样"精准发力"',
  '宠物美容师：宠物"情绪"也有价值',
];

const xzbgList = [
  '心理学类专业：不止疗愈自我，更照亮职业方向',
  'AI时代，英语专业的新方向与新可能',
  '从法学生到职场人：解锁多元就业赛道',
];

const cards = [
  {
    title: '洞察专业脉络',
    desc: '涵盖本科和专科共千余专业方向，创新性地将专业与从业方向相结合，设置课程的实用性和难易度评分，为学生选择专业提供多个侧面观察，同时将职业生涯规划提前至专业选择阶段。',
    href: '/speciality/index.action',
  },
  {
    title: '发现职业自我',
    desc: '好的工作必定是适合的工作，在适合的岗位上工作会如鱼得水，反之则如涸辙之鲋，作为职业生涯的起点，职业测评能为你提供的就是你与职业的适配性，帮助你更好地进行自身的职业定位。',
    href: '/survey/index.action',
  },
  {
    title: '探索职业世界',
    desc: '囊括23类112个职业方向，每个词条下含11个条目，涵盖职业定义、岗位职责、工作环境、发展路径、工作者的一天等，内容详实全面，指导性和借鉴性强，为学生快速了解目标职业、进行职业选择提供有力的信息支持。',
    href: '/occupation/index.action',
  },
];

const footerLinks = [
  { label: '智绘职途', url: '#' },
  { label: '版权声明', url: '#' },
  { label: '鸣谢单位', url: '#' },
  { label: '关于我们', url: '#' },
  { label: '联系我们', url: '#' },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % bannerSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = useCallback((index) => setActiveSlide(index), []);
  const prevSlide = useCallback(() => setActiveSlide(prev => (prev - 1 + bannerSlides.length) % bannerSlides.length), []);
  const nextSlide = useCallback(() => setActiveSlide(prev => (prev + 1) % bannerSlides.length), []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#e3ecf7', color: '#1B1F23' }}>
      <Header />

      {/* ========== 主体内容 ========== */}
      <div className="flex-1">
        <div className="mx-auto pt-10 pb-6" style={{ width: '1180px' }}>
          {/* ===== Banner 区域 ===== */}
          <div className="flex gap-8">
            <div className="relative overflow-hidden rounded-2xl" style={{
              width: '750px', height: '320px',
              border: '1px solid rgba(65,103,177,0.15)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              backgroundColor: '#ffffff',
            }}>
              {bannerSlides.map((slide) => (
                <div key={slide.id} className="absolute inset-0 transition-all duration-700"
                  style={{ opacity: slide.id === activeSlide ? 1 : 0 }}>
                  <img
                    src={`/images/lun${slide.id + 1}.png`}
                    alt={`banner ${slide.id + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <button onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer z-10 transition-all duration-200 border-none text-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.85)', color: '#4167B1', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.95)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.85)'; }}
                aria-label="上一张">‹</button>
              <button onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer z-10 transition-all duration-200 border-none text-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.85)', color: '#4167B1', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.95)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.85)'; }}
                aria-label="下一张">›</button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {bannerSlides.map((slide) => (
                  <button key={slide.id} onClick={() => goToSlide(slide.id)}
                    className="rounded-full cursor-pointer border-none transition-all duration-300"
                    style={{
                      width: slide.id === activeSlide ? '32px' : '6px',
                      height: '6px',
                      backgroundColor: slide.id === activeSlide ? '#4167B1' : 'rgba(255,255,255,0.15)',
                    }}
                    aria-label={`切换到第 ${slide.id + 1} 张`} />
                ))}
              </div>
            </div>

            {/* 右：职业资讯 + 学职报告 */}
            <div className="flex-1 flex flex-col rounded-2xl overflow-hidden" style={{
              border: '1px solid rgba(65,103,177,0.15)',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}>
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold flex items-center gap-3" style={{ color: '#1B1F23', letterSpacing: '0.5px' }}>
                    <span className="w-[3px] h-4 rounded-full" style={{ backgroundColor: '#4167B1' }} />
                    职业资讯
                  </h3>
                  <a href="/xz/zyts" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1" style={{ color: '#4167B1' }}>
                    更多 <span>→</span>
                  </a>
                </div>
                <ul className="space-y-1">
                  {zyzxList.map((item, i) => (
                    <li key={i}>
                      <a href="#" className="block text-sm transition-all duration-200 py-2 px-3 -mx-3 rounded-lg" style={{ color: '#5a6a7a' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#4167B1'; e.currentTarget.style.backgroundColor = 'rgba(65,103,177,0.06)'; e.currentTarget.style.paddingLeft = '20px'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#5a6a7a'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.paddingLeft = '12px'; }}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ height: '1px', margin: '0 24px', backgroundColor: 'rgba(65,103,177,0.15)' }} />
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold flex items-center gap-3" style={{ color: '#1B1F23', letterSpacing: '0.5px' }}>
                    <span className="w-[3px] h-4 rounded-full" style={{ backgroundColor: '#4167B1' }} />
                    学职报告
                  </h3>
                  <a href="/xz/xzbg" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1" style={{ color: '#4167B1' }}>
                    更多 <span>→</span>
                  </a>
                </div>
                <ul className="space-y-1">
                  {xzbgList.map((item, i) => (
                    <li key={i}>
                      <a href="#" className="block text-sm transition-all duration-200 py-2 px-3 -mx-3 rounded-lg" style={{ color: '#5a6a7a' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#4167B1'; e.currentTarget.style.backgroundColor = 'rgba(65,103,177,0.06)'; e.currentTarget.style.paddingLeft = '20px'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#5a6a7a'; e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.paddingLeft = '12px'; }}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ===== 纽带区 ===== */}
          <div className="text-center mt-10 mb-3">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span style={{ width: '32px', height: '1px', backgroundColor: 'rgba(65,103,177,0.25)' }} />
              <span className="text-xs tracking-[4px]" style={{ color: '#4167B1' }}>ABOUT</span>
              <span style={{ width: '32px', height: '1px', backgroundColor: 'rgba(65,103,177,0.25)' }} />
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#1B1F23', letterSpacing: '1px' }}>链接学生、高校和企业的纽带</h2>
            <p className="text-sm max-w-3xl mx-auto leading-relaxed" style={{ color: '#5a6a7a' }}>
              依托大数据和大平台，搭建学生、高校和企业三位一体平台，为学生选择专业、择业、就业，高校人才培养、选拔、就业指导，以及企业人才储备、招聘提供全面专业的服务。
            </p>
          </div>

          {/* ===== 三张卡片 ===== */}
          <div className="grid grid-cols-3 gap-6 mt-10 pb-4">
            {cards.map((card, i) => (
              <a key={i} href={card.href}
                className="group block rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  border: '1px solid rgba(65,103,177,0.15)',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#4167B1';
                  e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(0,0,0,0.4)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(65,103,177,0.15)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                <div className="h-36 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#4167B1' }}>
                  <img
                    src={`/images/ann${i + 1}.png`}
                    alt={card.title}
                    className="h-28 w-auto object-contain"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-bold mb-3 transition-colors duration-200" style={{ color: '#1B1F23' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#4167B1'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#1B1F23'; }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5a6a7a', lineHeight: '1.8' }}>{card.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ===== CTA 区域 ===== */}
        <div className="relative overflow-hidden" style={{ backgroundColor: '#4167B1' }}>
          <div className="relative z-10 text-center py-24 px-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px]" style={{ backgroundColor: 'rgba(27,31,35,0.3)' }} />
              <span className="text-xs tracking-[3px]" style={{ color: 'rgba(27,31,35,0.6)' }}>CAREER</span>
              <span className="w-6 h-[1px]" style={{ backgroundColor: 'rgba(27,31,35,0.3)' }} />
            </div>
            <h2 className="text-3xl font-bold mb-5" style={{ color: '#e3ecf7', letterSpacing: '1px' }}>
              职业测评为你真正了解自己打开一扇窗口
            </h2>
            <p className="text-sm leading-relaxed mb-10" style={{ color: 'rgba(27,31,35,0.7)' }}>
              所谓"知己知彼，百战不殆"，只有在充分了解自己和对方的基础上，才能做出明晰的判断和正确的选择，利用专业的测量工具，职业测评为你真正了解自己打开一扇窗口，向着亮光的地方，来遇见未知的自己吧。
            </p>
            <Link to="/survey"
              className="inline-flex items-center gap-2 text-base font-medium px-10 py-3.5 rounded-xl transition-all duration-200"
              style={{ color: '#1B1F23', backgroundColor: '#e3ecf7', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
               开启探索之旅 <span style={{ fontSize: '18px', display: 'inline-block', transition: 'transform 0.2s' }}
                 onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px)'; }}
                 onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; }}>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ========== 底部页脚 ========== */}
      <div style={{ backgroundColor: '#e3ecf7', borderTop: '1px solid rgba(65,103,177,0.12)' }}>
        <div className="mx-auto relative" style={{ width: '1180px', height: '198px', fontSize: '14px', lineHeight: '30px' }}>
          <div className="absolute" style={{ top: '32px', left: '0' }}>
            {footerLinks.map((link, i) => (
              <React.Fragment key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer"
                  className="transition-all duration-200 text-sm" style={{ color: '#1B1F23', marginRight: '20px' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#4167B1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#1B1F23'; }}>
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>
          <div className="absolute" style={{ top: '75px', left: '0', color: '#5a6a7a', fontSize: '13px' }}>
            主办单位：
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="transition-all duration-200" style={{ color: '#5a6a7a' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#4167B1'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#5a6a7a'; }}>
              AI智研创新协会
            </a>
            <br />
            Copyright &copy; 2003-2026 <a href="#" target="_blank" rel="noopener noreferrer"
              className="transition-all duration-200" style={{ color: '#5a6a7a' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#4167B1'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#5a6a7a'; }}>智绘职途</a> All Rights Reserved

          </div>

          <div className="absolute text-center" style={{ top: '42px', right: '0', color: '#1B1F23' }}>
            <div className="flex items-center justify-center mb-2">
              <div className="flex items-center justify-center" style={{
                width: '72px', height: '72px', borderRadius: '12px',
                backgroundColor: 'rgba(65,103,177,0.15)',
              }}>
                <div className="text-center">
                  <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24" fill="none" style={{ color: '#4167B1' }}>
                    <rect x="2" y="2" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="14" y="2" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="2" y="14" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="14" y="14" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span className="text-xs mt-1 block" style={{ color: '#4167B1' }}>二维码</span>
                </div>
              </div>
            </div>
            <div className="text-xs" style={{ color: '#4167B1', letterSpacing: '1px' }}>官方微信</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
