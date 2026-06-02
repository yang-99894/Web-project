import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    href: '/speciality',
  },
  {
    title: '发现职业自我',
    desc: '好的工作必定是适合的工作，在适合的岗位上工作会如鱼得水，反之则如涸辙之鲋，作为职业生涯的起点，职业测评能为你提供的就是你与职业的适配性，帮助你更好地进行自身的职业定位。',
    href: '/survey',
  },
  {
    title: '探索职业世界',
    desc: '囊括23类112个职业方向，每个词条下含11个条目，涵盖职业定义、岗位职责、工作环境、发展路径、工作者的一天等，内容详实全面，指导性和借鉴性强，为学生快速了解目标职业、进行职业选择提供有力的信息支持。',
    href: '/occupation',
  },
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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <div className="flex-1">
        <div className="mx-auto pt-10 pb-6" style={{ width: '1180px' }}>
          <div className="flex gap-8">
            <div className="relative overflow-hidden rounded-2xl" style={{
              width: '750px', height: '320px',
              border: '1px solid var(--primary)',
              backgroundColor: 'var(--card)',
            }}>
              {bannerSlides.map((slide) => (
                <div key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ${slide.id === activeSlide ? 'opacity-100' : 'opacity-0'}`}>
                  <img
                    src={`/images/lun${slide.id + 1}.png`}
                    alt={`banner ${slide.id + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <button onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer z-10 transition-all duration-200 border-none text-lg bg-white/85 text-primary shadow hover:bg-white/95"
                aria-label="上一张">‹</button>
              <button onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer z-10 transition-all duration-200 border-none text-lg bg-white/85 text-primary shadow hover:bg-white/95"
                aria-label="下一张">›</button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {bannerSlides.map((slide) => (
                  <button key={slide.id} onClick={() => goToSlide(slide.id)}
                    className={`rounded-full cursor-pointer border-none transition-all duration-300 h-1.5 ${slide.id === activeSlide ? 'w-8 bg-primary' : 'w-1.5 bg-border'}`}
                    aria-label={`切换到第 ${slide.id + 1} 张`} />
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold flex items-center gap-3 text-foreground tracking-[0.5px]">
                    <span className="w-[3px] h-4 rounded-full bg-primary" />
                    职业资讯
                  </h3>
                  <a href="/xz/zyts" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                    更多 <span>→</span>
                  </a>
                </div>
                <ul className="space-y-1">
                  {zyzxList.map((item, i) => (
                    <li key={i}>
                      <a href="#" className="block text-sm transition-all duration-200 py-2 px-3 -mx-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/6 hover:pl-5">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-px mx-6 bg-border" />
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold flex items-center gap-3 text-foreground tracking-[0.5px]">
                    <span className="w-[3px] h-4 rounded-full bg-primary" />
                    学职报告
                  </h3>
                  <a href="/xz/xzbg" target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline">
                    更多 <span>→</span>
                  </a>
                </div>
                <ul className="space-y-1">
                  {xzbgList.map((item, i) => (
                    <li key={i}>
                      <a href="#" className="block text-sm transition-all duration-200 py-2 px-3 -mx-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/6 hover:pl-5">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 mb-3">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-8 h-px bg-primary/25" />
              <span className="text-xs tracking-[4px] text-primary">ABOUT</span>
              <span className="w-8 h-px bg-primary/25" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground tracking-[1px]">链接学生、高校和企业的纽带</h2>
            <p className="text-sm max-w-3xl mx-auto leading-relaxed text-muted-foreground">
              依托大数据和大平台，搭建学生、高校和企业三位一体平台，为学生选择专业、择业、就业，高校人才培养、选拔、就业指导，以及企业人才储备、招聘提供全面专业的服务。
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10 pb-4">
            {cards.map((card, i) => (
              <a key={i} href={card.href}
                className="group block rounded-2xl overflow-hidden transition-all duration-300 border border-border bg-card shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-primary">
                <div className="h-36 flex items-center justify-center overflow-hidden bg-primary">
                  <img
                    src={`/images/ann${i + 1}.png`}
                    alt={card.title}
                    className="h-28 w-auto object-contain"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-[1.8] text-muted-foreground">{card.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden bg-primary">
          <div className="relative z-10 text-center py-24 px-4 max-w-[800px] mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-foreground/30" />
              <span className="text-xs tracking-[3px] text-foreground/60">CAREER</span>
              <span className="w-6 h-px bg-foreground/30" />
            </div>
            <h2 className="text-3xl font-bold mb-5 text-primary-foreground tracking-[1px]">
              职业测评为你真正了解自己打开一扇窗口
            </h2>
            <p className="text-sm leading-relaxed mb-10 text-primary-foreground/70">
              所谓"知己知彼，百战不殆"，只有在充分了解自己和对方的基础上，才能做出明晰的判断和正确的选择，利用专业的测量工具，职业测评为你真正了解自己打开一扇窗口，向着亮光的地方，来遇见未知的自己吧。
            </p>
            <Link to="/survey"
              className="inline-flex items-center gap-2 text-base font-medium px-10 py-3.5 rounded-xl transition-all duration-200 bg-background text-foreground shadow-md hover:-translate-y-0.5 hover:shadow-xl no-underline">
              开启探索之旅 <span className="text-lg inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
