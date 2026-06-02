import React from 'react';
import { Upload, Bot, Sparkles, Download, Search, PenLine, Tag, Palette, BarChart3, Lightbulb, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const steps = [
  { step: '01', icon: Upload, title: '上传简历', desc: '支持 PDF / Word 格式，一键上传你的原始简历' },
  { step: '02', icon: Bot, title: 'AI 智能分析', desc: 'AI 深度解析简历结构、语言表达、关键词匹配度' },
  { step: '03', icon: Sparkles, title: '智能优化', desc: '自动优化措辞、排版、突出亮点，匹配目标岗位要求' },
  { step: '04', icon: Download, title: '下载使用', desc: '一键导出优化后的简历，直接投递心仪岗位' },
];

const features = [
  { icon: Search, title: '岗位匹配分析', desc: '根据目标岗位JD，分析简历与岗位的匹配度，指出改进方向' },
  { icon: PenLine, title: '语言润色优化', desc: '优化简历中的语言表达，使其更加专业、简洁、有说服力' },
  { icon: Tag, title: '关键词增强', desc: '自动识别并补充行业关键词，提升ATS筛选通过率' },
  { icon: Palette, title: '排版建议', desc: '提供专业的排版和结构建议，让简历更加清晰易读' },
  { icon: BarChart3, title: '量化成果提炼', desc: '帮助你将工作经历转化为量化的成果描述，更具说服力' },
  { icon: Lightbulb, title: '个性化建议', desc: '根据你的行业和求职方向，提供针对性的修改建议' },
];

function Resume() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <div className="flex-1">
        <div className="mx-auto py-10 max-w-[1180px] px-5">

          <div className="rounded-2xl overflow-hidden mb-10 flex flex-col md:flex-row bg-card border border-border shadow-lg">
            <div className="flex-1 p-10 md:p-14 flex flex-col justify-center" style={{ flex: '0 0 55%' }}>
              <h1 className="text-4xl font-bold mb-4 text-foreground">AI 简历优化</h1>
              <p className="text-lg mb-2 max-w-[680px] leading-relaxed text-muted-foreground">
                上传你的简历，AI 智能分析并优化，让你的简历在海量求职者中脱颖而出
              </p>
              <p className="text-sm max-w-[580px] text-muted-foreground/60">
                基于大语言模型技术，深度理解岗位需求，精准优化简历内容
              </p>
              <div className="mt-6">
                <a
                  href="/aichat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-4 rounded-2xl text-lg font-bold bg-primary text-primary-foreground shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-200 no-underline"
                >
                  <Bot className="w-6 h-6 mr-2" />
                  开始 AI 简历优化
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center p-10 md:p-14 bg-primary" style={{ flex: '0 0 45%' }}>
              <div className="w-36 h-36 rounded-3xl bg-white/10 backdrop-blur flex items-center justify-center">
                <FileText className="w-16 h-16 text-white/80" />
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-center mb-10">使用流程</h2>
            <div className="relative px-4">
              <div className="hidden md:block absolute top-[50px] left-[10%] right-[10%] h-[2px] bg-border" />
              <div className="grid grid-cols-4 gap-4">
                {steps.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="relative flex flex-col items-center text-center group">
                      <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="text-xs font-bold mb-1 text-primary">{item.step}</div>
                      <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                      <p className="text-xs leading-relaxed text-muted-foreground hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card shadow-sm p-8 mb-10">
            <h2 className="text-2xl font-bold text-center mb-8">核心功能</h2>

            <div className="grid grid-cols-1 gap-4 mb-4">
              {features.slice(0, 2).map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-6 p-6 rounded-xl bg-primary/4 hover:bg-primary/8 transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center bg-primary text-primary-foreground shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.slice(2).map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className={`rounded-xl p-5 border border-border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      i === 0
                        ? 'bg-purple-500/5 border-purple-500/20'
                        : i === 1
                        ? 'bg-amber-500/5 border-amber-500/20'
                        : i === 2
                        ? 'bg-emerald-500/5 border-emerald-500/20'
                        : 'bg-rose-500/5 border-rose-500/20'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-primary/10">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Resume;
