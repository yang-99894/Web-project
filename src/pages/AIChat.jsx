import React, { useState, useRef, useEffect } from 'react';
import { Plus, MessageCircle, Menu, Bot, ArrowUp, Paperclip, FileText, PenLine, Target, Ruler } from 'lucide-react';

const sampleConversation = [
  {
    role: 'bot',
    text: '你好！我是你的 AI 简历优化助手，可以帮助你：\n\n• 分析简历结构与语言表达\n• 优化措辞，让简历更专业\n• 匹配目标岗位的关键词\n• 提供排版与格式建议\n\n请直接粘贴简历内容，或者告诉我你的求职意向，我们开始吧！',
  },
];

const quickActions = [
  { icon: FileText, text: '帮我分析简历结构' },
  { icon: PenLine, text: '优化简历语言表达' },
  { icon: Target, text: '匹配目标岗位关键词' },
  { icon: Ruler, text: '推荐简历排版模板' },
];

function AIChat() {
  const [messages, setMessages] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    if (showWelcome) {
      setShowWelcome(false);
      setMessages(sampleConversation);
    }

    const userMsg = { role: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    if (!activeChat) {
      const title =
        input.trim().slice(0, 20) + (input.trim().length > 20 ? '...' : '');
      setHistory((prev) => [{ id: Date.now(), title }, ...prev]);
      setActiveChat(Date.now());
    }

    setTimeout(() => {
      let reply = '';
      const t = userMsg.text;
      if (t.includes('优化') || t.includes('修改') || t.includes('简历')) {
        reply = '收到你的简历内容！\n\n以下是我的一些优化建议：\n\n**整体结构**\n 确保个人信息在顶部醒目位置\n 求职意向明确具体\n 经历按时间倒序排列\n\n**语言优化**\n 使用"主导"、"设计"、"实现"等强动词\n 量化成果："提升效率30%"优于"提升了效率"\n 避免"负责"等模糊表述\n\n**关键词优化**\n 对照目标岗位JD，补充匹配的关键技能词\n 将工具/技术栈单独列出方便筛选\n\n需要我针对某一段落进行详细润色吗？';
      } else if (t.includes('面试') || t.includes('求职') || t.includes('应聘')) {
        reply = '关于求职准备，我的建议是：\n\n**简历准备**\n 根据不同岗位定制简历版本\n 突出与JD最相关的3-5项经历\n 保持一页纸（应届生）\n\n**面试策略**\n 准备STAR法则案例（情境 任务 行动 结果）\n 研究目标公司的业务和文化\n 准备好反问面试官的问题\n\n需要我帮你根据具体岗位优化简历吗？';
      } else if (t.includes('star') || t.includes('案例') || t.includes('描述')) {
        reply = '**STAR 法则写作模板**\n\n**S** - Situation（背景）\n交代项目/任务的背景和环境\n\n**T** - Task（任务）\n明确你需要达成的目标\n\n**A** - Action（行动）\n描述你采取的具体措施\n\n**R** - Result（结果）\n展示可量化的成果和影响\n\n---\n\n原句：我负责了用户增长\n\n优化后：主导用户增长项目，通过A/B测试优化转化漏斗，3个月内将DAU从5万提升至12万（+140%），获公司年度最佳项目奖';
      } else if (t.includes('格式') || t.includes('排版') || t.includes('模板')) {
        reply = '推荐的简历版式：\n\n**经典结构**\n```\n1. 个人信息\n   姓名 | 电话 | 邮箱 | 城市\n\n2. 求职意向\n   目标岗位 | 期望城市 | 薪资\n\n3. 教育背景\n   学校 专业 学位 时间\n\n4. 实习/工作经历  核心\n   公司 职位 时间\n   STAR法则描述每条经历\n\n5. 项目经验\n   项目名 个人角色 成果\n\n6. 技能证书\n   编程语言/工具/语言能力\n```\n\n格式要点：PDF投递，字号10-12pt，段落间距统一';
      } else if (t.includes('项目') || t.includes('经验')) {
        reply = '如何写好项目经验：\n\n**项目描述四要素**\n1. 项目背景与规模（日活/用户量/数据量）\n2. 你的角色和职责\n3. 技术栈和工具\n4. 成果与影响\n\n**示例对比**\n\n参与了电商后台管理系统开发\n\n主导电商后台订单管理模块开发（Spring Boot + Vue），设计并实现订单状态流转引擎，支撑日均10万+订单处理，将订单处理时效从5分钟缩短至30秒';
      } else if (t.includes('没有') || t.includes('空白') || t.includes('没经验')) {
        reply = '没有实习经验不用担心！你可以突出：\n\n**校园经历**\n 课程项目  当项目经验来写\n 社团活动  展现组织/沟通能力\n 竞赛获奖  证明专业能力\n\n**个人项目**\n GitHub开源贡献\n 独立开发的小程序/网站\n 技术博客/公众号\n\n**学习能力**\n 自学完成的课程/证书\n 参加的培训和Workshop\n\n把你已有的经历发给我，我帮你包装成亮点！';
      } else {
        reply = '我是你的 AI 简历优化助手，可以帮你：\n\n**简历润色**  优化措辞，更专业更有力\n**岗位匹配**  根据JD定制简历内容\n**量化表达**  用数据展现你的能力\n**关键词优化**  提升ATS筛选通过率\n**排版建议**  专业的格式和结构\n\n直接粘贴简历内容，或告诉我你想优化哪个方面吧！';
      }

      setMessages((prev) => [...prev, { role: 'bot', text: reply }]);
    }, 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const newChat = () => {
    setMessages([]);
    setShowWelcome(true);
    setActiveChat(null);
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      <div
        className="flex-shrink-0 flex flex-col overflow-hidden bg-card border-r border-border transition-all duration-300"
        style={{ width: sidebarOpen ? '260px' : '0' }}
      >
        <div className="p-4">
          <button
            onClick={newChat}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium bg-primary text-primary-foreground shadow-md hover:shadow-lg transition-all duration-200 border-none cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            新对话
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {history.length > 0 && (
            <div className="px-4 pb-1">
              <span className="text-xs font-medium text-muted-foreground">对话历史</span>
            </div>
          )}
          {history.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveChat(item.id);
                setShowWelcome(false);
              }}
              className={`mx-2 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-all duration-150 mb-0.5 flex items-center gap-3 truncate ${
                activeChat === item.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-primary/6'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate text-xs">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium bg-primary/12 text-primary">
              U
            </div>
            <span className="text-sm">用户</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex-shrink-0 flex items-center justify-between px-6 py-3 border-b border-border">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-8 h-8 rounded-lg flex items-center justify-center bg-transparent text-muted-foreground hover:bg-primary/6 transition-all duration-150 border-none cursor-pointer"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">AI 简历优化助手</span>
          </div>
          <div className="w-8" />
        </div>

        <div className="flex-1 overflow-y-auto">
          {showWelcome ? (
            <div className="flex flex-col items-center justify-center h-full px-6">
              <div className="mb-6 w-20 h-20 rounded-2xl flex items-center justify-center bg-primary shadow-[0_8px_32px_var(--primary)]">
                <Bot className="w-10 h-10 text-primary-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-2">AI 简历优化助手</h2>
              <p className="text-sm mb-8 text-muted-foreground max-w-[420px] text-center leading-relaxed">
                上传你的简历，AI 智能分析并优化，让你的简历在海量求职者中脱颖而出
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8 max-w-[560px] w-full">
                {quickActions.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setInput(item.text);
                        inputRef.current?.focus();
                      }}
                      className="flex items-center gap-3 px-5 py-4 rounded-xl text-sm bg-card border border-border text-foreground hover:border-primary/30 hover:shadow-sm transition-all duration-150 border-none cursor-pointer"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <span>{item.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="mx-auto px-6 pt-12 pb-8 max-w-[800px]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex mb-8 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className="flex gap-3"
                    style={{ maxWidth: msg.role === 'user' ? '75%' : '100%' }}
                  >
                    {msg.role === 'bot' && (
                      <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-primary">
                        <Bot className="w-5 h-5 text-primary-foreground" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div
                        className={`rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-card border border-border text-foreground'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                    {msg.role === 'user' && (
                      <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-medium bg-primary/12 text-primary">
                        U
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <div className="flex-shrink-0">
          <div className="mx-auto px-6 pb-10 max-w-[800px]">
            <div className="flex items-end gap-2 px-5 py-5 rounded-2xl bg-card border border-border shadow-sm">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={showWelcome ? '粘贴简历内容或输入你的问题...' : '继续输入...'}
                rows={1}
                className="flex-1 outline-none bg-transparent text-sm resize-none leading-relaxed p-0.5 text-foreground placeholder:text-muted-foreground border-none"
                style={{ maxHeight: '120px' }}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className={`flex-shrink-0 h-9 rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 px-3 border-none cursor-pointer ${
                  input.trim()
                    ? 'bg-primary text-primary-foreground shadow-md hover:shadow-lg'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-xs font-medium">发送</span>
              </button>
              <label className="flex-shrink-0 w-9 h-9 rounded-lg cursor-pointer flex items-center justify-center text-muted-foreground bg-primary/6 hover:bg-primary/12 transition-all duration-150">
                <Paperclip className="w-5 h-5" />
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setShowWelcome(false);
                      if (messages.length === 0) setMessages(sampleConversation);
                      setMessages((prev) => [
                        ...prev,
                        { role: 'user', text: `已上传文件：${file.name}` },
                      ]);
                      setTimeout(() => {
                        setMessages((prev) => [
                          ...prev,
                          {
                            role: 'bot',
                            text: `已收到你上传的《${file.name}》，让我来分析一下...\n\n这是一份简历文件，建议你同时粘贴简历的文本内容，这样我可以更精准地帮你逐段优化和润色。你也可以直接告诉我你想重点优化哪个部分，比如：\n\n 自我评价\n 工作/实习经历\n 项目经验\n 技能描述\n\n期待你的进一步说明！`,
                          },
                        ]);
                      }, 800);
                    }
                  }}
                />
              </label>
            </div>
            <p className="text-xs text-center mt-2.5 text-muted-foreground">
              内容由 AI 生成，仅供参考
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIChat;
