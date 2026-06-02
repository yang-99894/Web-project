import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Resume() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <div className="flex-1">
        <div className="mx-auto py-10" style={{ width: '1180px' }}>

          <div className="mb-10 p-12 rounded-2xl text-center relative overflow-hidden bg-primary shadow-lg">
            <h1 className="text-4xl font-bold mb-4 text-primary-foreground">AI 简历优化</h1>
            <p className="text-lg mb-2 mx-auto leading-relaxed text-primary-foreground/85 max-w-[680px]">
              上传你的简历，AI 智能分析并优化，让你的简历在海量求职者中脱颖而出
            </p>
            <p className="text-sm mx-auto text-primary-foreground/60 max-w-[580px]">
              基于大语言模型技术，深度理解岗位需求，精准优化简历内容
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-center mb-10 text-foreground">使用流程</h2>
            <div className="grid grid-cols-4 gap-6">
              {[
                { step: '01', icon: '📤', title: '上传简历', desc: '支持 PDF / Word 格式，一键上传你的原始简历' },
                { step: '02', icon: '🤖', title: 'AI 智能分析', desc: 'AI 深度解析简历结构、语言表达、关键词匹配度' },
                { step: '03', icon: '✨', title: '智能优化', desc: '自动优化措辞、排版、突出亮点，匹配目标岗位要求' },
                { step: '04', icon: '📥', title: '下载使用', desc: '一键导出优化后的简历，直接投递心仪岗位' },
              ].map((item, i) => (
                <div key={i} className="rounded-2xl p-6 text-center transition-all duration-200 bg-card border border-border shadow-sm hover:-translate-y-1 hover:shadow-md">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-primary/8">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div className="text-xs font-bold mb-2 text-primary">{item.step}</div>
                  <h3 className="text-base font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 rounded-2xl p-8 bg-card border border-border shadow-sm">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">核心功能</h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '🔍', title: '岗位匹配分析', desc: '根据目标岗位JD，分析简历与岗位的匹配度，指出改进方向' },
                { icon: '📝', title: '语言润色优化', desc: '优化简历中的语言表达，使其更加专业、简洁、有说服力' },
                { icon: '🏷️', title: '关键词增强', desc: '自动识别并补充行业关键词，提升ATS筛选通过率' },
                { icon: '🎨', title: '排版建议', desc: '提供专业的排版和结构建议，让简历更加清晰易读' },
                { icon: '📊', title: '量化成果提炼', desc: '帮助你将工作经历转化为量化的成果描述，更具说服力' },
                { icon: '💡', title: '个性化建议', desc: '根据你的行业和求职方向，提供针对性的修改建议' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl transition-all duration-150 bg-primary/2">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-primary/8">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1 text-foreground">{item.title}</h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-6">
            <a href="/aichat" target="_blank" rel="noopener noreferrer"
              className="inline-block px-12 py-5 rounded-2xl text-lg font-bold cursor-pointer transition-all duration-200 bg-primary text-primary-foreground shadow-xl no-underline hover:-translate-y-1 hover:shadow-2xl">
              <span className="mr-2 text-[22px]">🤖</span>
              开始 AI 简历优化
            </a>
            <p className="text-xs mt-4 text-muted-foreground">点击进入 AI 对话平台，与智能助手交互完成简历优化</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Resume;
