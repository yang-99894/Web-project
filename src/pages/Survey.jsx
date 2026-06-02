import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const bannerCards = [
  { title: '@大学生，来查收实习薪酬&岗位&流程的三维规划。', img: '/images/zhuanti1.png', url: '#' },
  { title: '来看学长学姐们的大学生活真相~', img: '/images/zhuanti2.png', url: '#' },
  { title: '六大维度的解析，帮你更全面地认识自己~', img: '/images/zhuanti3.png', url: '#' },
  { title: '专升本/考研？就业？究竟选择哪一个，才更适合自己？', img: '/images/zhuanti4.png', url: '#' },
];

const careerQuestions = [
  { q: '你更喜欢与人打交道，还是与数据、事物打交道？', num: '286.5w', tag: '职业兴趣' },
  { q: '面对一项重要决策时，你更依赖理性分析还是直觉判断？', num: '198.3w', tag: '决策风格' },
  { q: '在团队中，你更倾向于担任领导者还是协作者？', num: '175.2w', tag: '团队角色' },
  { q: '你愿意为了工作牺牲个人休息时间吗？', num: '152.8w', tag: '工作价值观' },
  { q: '你更看重工作的稳定性，还是职业发展空间？', num: '210.6w', tag: '职业价值观' },
  { q: '面对高压任务时，你通常会迎难而上还是寻求帮助？', num: '163.4w', tag: '抗压能力' },
  { q: '你擅长安抚他人情绪，还是更善于逻辑推理？', num: '141.9w', tag: '能力倾向' },
  { q: '重复性高的工作会让你感到厌倦还是安心？', num: '188.7w', tag: '性格特质' },
  { q: '你是否愿意频繁出差或更换工作城市？', num: '129.3w', tag: '职业弹性' },
  { q: '你更想成为某一领域的专家，还是跨领域的通才？', num: '205.1w', tag: '发展路径' },
  { q: '工作中出错时，你倾向于主动承认还是先设法弥补？', num: '137.6w', tag: '责任心' },
  { q: '你认为成功更多取决于个人努力还是外部机遇？', num: '156.2w', tag: '归因方式' },
];



function Survey() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#e3ecf7', color: '#1B1F23' }}>
      <Header />

      <div className="flex-1">
        <div className="mx-auto py-10" style={{ width: '1180px' }}>

          {/* ===== 顶部 Banner ===== */}
          <div className="mb-8 p-10 rounded-2xl text-center relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, #4167B1 0%, #5B7FC9 40%, #7B9FE0 100%)',
            boxShadow: '0 4px 24px rgba(65,103,177,0.25)',
          }}>
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#ffffff' }}>什么是你真正热爱的工作？</h2>
            <p className="text-base mb-8 mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '760px' }}>
              我对什么职业感兴趣？哪种职业更适合我？我的能力能够胜任理想的工作吗？面对大家的一连串疑问，
              学职平台联合北大、北师大、南师大心理和职业生涯规划领域教授、专家，根据专业理论和本土化特点编制了一系列测评工具，快来试试吧！
            </p>
            <button onClick={() => navigate('/assessment')} className="px-8 py-3 rounded-xl text-base font-medium transition-all duration-200 border-none cursor-pointer"
              style={{ color: '#4167B1', backgroundColor: '#ffffff', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'; }}>
               进入职业测评
            </button>
          </div>

          {/* ===== 专题汇总轮播 ===== */}
          <div className="mb-8 p-6 rounded-2xl" style={{
            backgroundColor: '#ffffff',
            border: '1px solid rgba(65,103,177,0.15)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          }}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: '#1B1F23' }}>
                <span className="w-1 h-5 rounded-full inline-block" style={{ backgroundColor: '#4167B1' }} />
                专题汇总
              </h3>
              <a href="#" className="text-sm transition-all duration-200 flex items-center gap-1" style={{ color: '#4167B1', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#2f4d8c'; }}>
                更多 <span style={{ fontSize: '10px' }}>▶</span>
              </a>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {bannerCards.map((card, i) => (
                <a key={i} href={card.url} className="rounded-xl overflow-hidden transition-all duration-200 block"
                  style={{ border: '1px solid rgba(65,103,177,0.1)', textDecoration: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(65,103,177,0.15)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                   <div className="h-32 flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgba(65,103,177,0.06)' }}>
                     <img src={card.img} alt="" className="w-full h-full object-cover" />
                   </div>
                  <div className="p-3 text-sm" style={{ color: '#1B1F23', lineHeight: '1.5' }}>
                    {card.title.length > 28 ? card.title.slice(0, 28) + '...' : card.title}
                  </div>
                </a>
              ))}
          </div>

          {/* ===== 职业测评热门问题 ===== */}
          <div className="mb-8 rounded-2xl p-6" style={{
            backgroundColor: '#ffffff',
            border: '1px solid rgba(65,103,177,0.15)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          }}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold flex items-center gap-2" style={{ color: '#1B1F23' }}>
                <span className="w-1 h-5 rounded-full inline-block" style={{ backgroundColor: '#4167B1' }} />
                职业测评热门问题
              </h3>
              <a href="#" className="text-sm transition-all duration-200" style={{ color: '#4167B1', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#2f4d8c'; }}>
                更多 &gt;
              </a>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {careerQuestions.map((item, i) => (
                <a key={i} href="#" className="flex items-center justify-between py-3 px-3 rounded-lg transition-all duration-150"
                  style={{ textDecoration: 'none', borderBottom: '1px solid rgba(65,103,177,0.06)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(65,103,177,0.03)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                  <span className="text-sm" style={{ color: '#1B1F23' }}>
                    <span className="text-xs mr-2 font-semibold" style={{ color: '#4167B1' }}>{String(i + 1).padStart(2, '0')}</span>
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 ml-3">
                    <span className="px-2 py-0.5 text-xs rounded-full" style={{ color: '#5a6a7a', backgroundColor: 'rgba(65,103,177,0.06)' }}>{item.tag}</span>
                    <span className="text-xs ml-2" style={{ color: '#5a6a7a' }}>{item.num}人参与</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* ========== 底部页脚 ========== */}
      <div style={{ backgroundColor: '#e3ecf7', borderTop: '1px solid rgba(65,103,177,0.12)' }}>
        <div className="mx-auto relative" style={{ width: '1180px', height: '198px', fontSize: '14px', lineHeight: '30px' }}>
          <div className="absolute" style={{ top: '32px', left: '0' }}>
            {[
              { label: '智绘职途', url: '#' },
              { label: '版权声明', url: '#' },
              { label: '鸣谢单位', url: '#' },
              { label: '关于我们', url: '#' },
              { label: '联系我们', url: '#' },
            ].map((link, i) => (
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

export default Survey;
