import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <div className="flex-1">
        <div className="mx-auto py-10 w-[1180px]">

          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg flex flex-row bg-primary">
            <div className="w-[60%] p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-primary-foreground">什么是你真正热爱的工作？</h2>
              <p className="text-base mb-8 leading-relaxed text-primary-foreground/85">
                我对什么职业感兴趣？哪种职业更适合我？我的能力能够胜任理想的工作吗？面对大家的一连串疑问，
                学职平台联合北大、北师大、南师大心理和职业生涯规划领域教授、专家，根据专业理论和本土化特点编制了一系列测评工具，快来试试吧！
              </p>
              <button onClick={() => navigate('/assessment')} className="self-start px-8 py-3 rounded-xl text-base font-medium transition-all duration-200 border-none cursor-pointer bg-white text-primary shadow-md hover:-translate-y-0.5 hover:shadow-lg">
                进入职业测评
              </button>
            </div>
            <div className="w-[40%] flex items-center justify-center bg-primary relative">
              <div className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center">
                <svg className="w-28 h-28 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 7h-7m0 0V3m0 4l-7 7m14 0v2a4 4 0 01-4 4H8a4 4 0 01-4-4v-2m16 0H4m0 0a4 4 0 014-4h1" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-8 p-6 rounded-2xl bg-card border border-border shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold flex items-center gap-2 text-foreground">
                <span className="w-1 h-5 rounded-full inline-block bg-primary" />
                专题汇总
              </h3>
              <a href="#" className="text-sm transition-all duration-200 text-primary hover:brightness-75 no-underline">
                更多 <span className="text-[10px]">▶</span>
              </a>
            </div>

            <a href={bannerCards[0].url} className="flex rounded-xl overflow-hidden transition-all duration-200 no-underline border border-border mb-4 hover:-translate-y-0.5 hover:shadow-md">
              <div className="w-[42%] h-44 flex items-center justify-center overflow-hidden bg-primary/6">
                <img src={bannerCards[0].img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center">
                <span className="inline-block px-2 py-0.5 text-xs rounded-full mb-3 self-start bg-primary/10 text-primary">热门专题</span>
                <h4 className="text-lg font-bold text-foreground mb-2">{bannerCards[0].title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">点击查看详情 →</p>
              </div>
            </a>

            <div className="grid grid-cols-3 gap-4">
              {bannerCards.slice(1).map((card, i) => (
                <a key={i} href={card.url} className="rounded-xl overflow-hidden transition-all duration-200 block border border-border no-underline hover:-translate-y-1 hover:shadow-md">
                  <div className="h-32 flex items-center justify-center overflow-hidden bg-primary/6">
                    <img src={card.img} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 text-sm text-foreground leading-relaxed">
                    {card.title.length > 28 ? card.title.slice(0, 28) + '...' : card.title}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mb-8 rounded-2xl p-6 bg-card border border-border shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-bold flex items-center gap-2 text-foreground">
                <span className="w-1 h-5 rounded-full inline-block bg-primary" />
                职业测评热门问题
              </h3>
              <a href="#" className="text-sm transition-all duration-200 text-primary hover:brightness-75 no-underline">
                更多 &gt;
              </a>
            </div>
            <div className="columns-3 gap-5">
              {careerQuestions.map((item, i) => (
                <a key={i} href="#" className={`block py-4 px-4 rounded-lg transition-all duration-150 no-underline break-inside-avoid mb-5 hover:shadow-md ${i % 2 === 0 ? 'bg-primary/3' : 'bg-muted/30'}`}>
                  <div className="flex items-start justify-between mb-2">
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary">{item.tag}</span>
                    <span className="text-xs ml-2 text-muted-foreground whitespace-nowrap">{item.num}人参与</span>
                  </div>
                  <span className="text-sm text-foreground leading-relaxed">
                    <span className="text-lg font-bold mr-2 text-primary">{String(i + 1).padStart(2, '0')}</span>
                    {item.q}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Survey;
