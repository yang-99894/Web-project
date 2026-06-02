import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const industryMenu = [
  { hyMc: '互联网/通信', kthzList: ['通信类', '计算机类'] },
  { hyMc: '金融/贸易', kthzList: ['金融类', '证券类', '保险类', '销售/商务类'] },
  { hyMc: '建筑/工程/房地产服务', kthzList: ['建筑类', '工程技术类', '生产制造类', '房地产服务类'] },
  { hyMc: '医疗/生物/化工', kthzList: ['医疗类', '化工环保类', '生物制药类'] },
  { hyMc: '公务员/监察法律/社会服务', kthzList: ['公务员类', '监察法律类', '社会服务类'] },
  { hyMc: '教育/行政', kthzList: ['教育类', '财务/行政类', '体育类'] },
  { hyMc: '文艺与设计/传媒文化', kthzList: ['传媒文化类', '文艺与设计类'] },
  { hyMc: '交通/物流', kthzList: ['交通运输类', '仓储物流类'] },
  { hyMc: '住宿餐饮/旅游', kthzList: ['住宿餐饮类', '旅游类'] },
  { hyMc: '农林牧渔', kthzList: ['农业类', '渔业类'] },
  { hyMc: '青年创业者', kthzList: ['青年创业者'] },
];

const occupationData = [
  { title: '后端开发工程师', industrymc: '互联网/通信', kthzmc: '计算机类', desc: '负责服务器端应用程序的设计、开发与维护，处理业务逻辑、数据库交互、API接口开发等核心功能。', collectionNum: 15230, praiseNum: 8920, recommend: true },
  { title: '前端开发工程师', industrymc: '互联网/通信', kthzmc: '计算机类', desc: '负责Web端和移动端用户界面的开发，将设计稿转化为可交互的网页，确保用户体验的流畅与美观。', collectionNum: 13800, praiseNum: 7650, hot: true },
  { title: '数据分析师', industrymc: '互联网/通信', kthzmc: '计算机类', desc: '通过收集、处理和分析数据，为企业决策提供数据支持，发现业务增长点和优化方向。', collectionNum: 11200, praiseNum: 6340 },
  { title: '通信工程师', industrymc: '互联网/通信', kthzmc: '通信类', desc: '从事通信网络的设计、建设、维护和优化工作，确保通信系统的稳定高效运行。', collectionNum: 8700, praiseNum: 4520 },
  { title: '金融分析师', industrymc: '金融/贸易', kthzmc: '金融类', desc: '对金融市场、行业和公司进行深入研究，提供投资建议和风险评估报告。', collectionNum: 10500, praiseNum: 5890, recommend: true },
  { title: '证券经纪人', industrymc: '金融/贸易', kthzmc: '证券类', desc: '为客户提供证券交易服务，分析市场行情，帮助客户制定投资策略。', collectionNum: 9200, praiseNum: 4780 },
  { title: '精算师', industrymc: '金融/贸易', kthzmc: '保险类', desc: '运用数学、统计学和金融理论评估风险，为保险产品和养老金计划定价。', collectionNum: 6800, praiseNum: 4120, hot: true },
  { title: '外贸业务员', industrymc: '金融/贸易', kthzmc: '销售/商务类', desc: '负责国际市场的开拓与维护，处理外贸订单、报关、物流等全流程业务。', collectionNum: 7800, praiseNum: 3980 },
  { title: '建筑设计师', industrymc: '建筑/工程/房地产服务', kthzmc: '建筑类', desc: '负责建筑方案设计、施工图绘制，在满足功能需求的同时追求建筑美学与空间体验。', collectionNum: 9600, praiseNum: 5340, recommend: true },
  { title: '土木工程师', industrymc: '建筑/工程/房地产服务', kthzmc: '工程技术类', desc: '从事道路、桥梁、隧道、建筑等基础设施的规划、设计和施工管理。', collectionNum: 8300, praiseNum: 4560 },
  { title: '临床医师', industrymc: '医疗/生物/化工', kthzmc: '医疗类', desc: '在医疗机构从事疾病诊断、治疗和预防工作，守护患者的生命健康。', collectionNum: 14500, praiseNum: 9870, hot: true, recommend: true },
  { title: '药剂师', industrymc: '医疗/生物/化工', kthzmc: '生物制药类', desc: '负责药品的调配、发放和用药指导，确保患者用药安全有效。', collectionNum: 8900, praiseNum: 5230 },
  { title: '公务员', industrymc: '公务员/监察法律/社会服务', kthzmc: '公务员类', desc: '在国家行政机关从事公共管理和服务工作，执行国家政策法规。', collectionNum: 25300, praiseNum: 12800, hot: true },
  { title: '律师', industrymc: '公务员/监察法律/社会服务', kthzmc: '监察法律类', desc: '为当事人提供法律服务，代理诉讼和非诉讼法律事务，维护当事人合法权益。', collectionNum: 11800, praiseNum: 7560, recommend: true },
  { title: '社会工作者', industrymc: '公务员/监察法律/社会服务', kthzmc: '社会服务类', desc: '在社区、福利机构等场所为弱势群体提供帮助和支持，促进社会和谐发展。', collectionNum: 6700, praiseNum: 3890 },
  { title: '中学教师', industrymc: '教育/行政', kthzmc: '教育类', desc: '在中学从事学科教学和班级管理工作，培养学生德智体美劳全面发展。', collectionNum: 18900, praiseNum: 11200, hot: true, recommend: true },
  { title: '会计师', industrymc: '教育/行政', kthzmc: '财务/行政类', desc: '负责企业的会计核算、财务报表编制、税务申报和财务分析等工作。', collectionNum: 12500, praiseNum: 6890, recommend: true },
  { title: '新媒体运营', industrymc: '文艺与设计/传媒文化', kthzmc: '传媒文化类', desc: '负责新媒体平台的内容策划、编辑与发布，通过数据分析优化运营策略，提升品牌影响力。', collectionNum: 10200, praiseNum: 6340, hot: true },
  { title: 'UI设计师', industrymc: '文艺与设计/传媒文化', kthzmc: '文艺与设计类', desc: '负责产品界面的视觉设计，创造美观、易用的用户界面，提升产品的用户体验。', collectionNum: 9800, praiseNum: 5670, recommend: true },
  { title: '物流管理师', industrymc: '交通/物流', kthzmc: '仓储物流类', desc: '负责供应链物流的规划、组织和管理，优化仓储和配送流程，降低物流成本。', collectionNum: 7200, praiseNum: 3980 },
  { title: '酒店管理', industrymc: '住宿餐饮/旅游', kthzmc: '旅游类', desc: '负责酒店的日常运营管理，包括前台接待、客房服务、餐饮管理等，确保客户满意度。', collectionNum: 6500, praiseNum: 3450 },
  { title: '农业技术员', industrymc: '农林牧渔', kthzmc: '农业类', desc: '从事农作物种植技术指导、病虫害防治、新品种推广等农业技术服务工作。', collectionNum: 5200, praiseNum: 2780 },
  { title: '创业者', industrymc: '青年创业者', kthzmc: '青年创业者', desc: '发现市场机会，组建团队，整合资源，创办和经营企业，实现商业价值和社会价值。', collectionNum: 9800, praiseNum: 6230, hot: true },
];

const recentOccus = [
  '公证员', '电影电视制片人', '导演', '监察人员', '水产养殖人员',
  '轨道交通运输服务人员', '文化经纪人', '社会工作者', '康复科医师',
  '城乡规划工程技术人员', '宠物医师', '调香师', '民宿管家',
  '机器人工程技术人员', '物业管理师', '数字媒体艺术专业人员', '人工智能工程技术人员',
];

const hotOccus = [
  '电子竞技员', '集成电路工程技术人员', '会展策划专业人员', '云计算工程技术人员',
  '电子商务师', '游戏开发工程师', '口腔科医师', '企业法务人员',
  '中学教师', '审计人员', '汽车工程技术人员',
];

function Occupation() {
  const [hyIndex, setHyIndex] = useState(-1);
  const [kthzIndex, setKthzIndex] = useState(-1);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const [assessmentResult, setAssessmentResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('assessmentResult');
    if (stored) {
      try { setAssessmentResult(JSON.parse(stored)); } catch { }
    }
  }, []);

  const filteredData = useMemo(() => {
    let data = occupationData;
    if (hyIndex >= 0) {
      data = data.filter(item => item.industrymc === industryMenu[hyIndex].hyMc);
      if (kthzIndex >= 0) {
        data = data.filter(item => item.kthzmc === industryMenu[hyIndex].kthzList[kthzIndex]);
      }
    }
    if (searchText.trim()) {
      data = data.filter(item => item.title.includes(searchText.trim()));
    }
    return data;
  }, [hyIndex, kthzIndex, searchText]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const currentPageData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleFilterChange = (newHyIndex, newKthzIndex) => {
    setHyIndex(newHyIndex);
    setKthzIndex(newKthzIndex);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <div className="flex-1">
        <div className="mx-auto py-10" style={{ width: '1180px' }}>

          <div className="mb-8 p-10 rounded-2xl text-center relative overflow-hidden bg-primary shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">你知道自己适合什么职业了吗？</h2>
            <p className="text-base mx-auto leading-relaxed text-primary-foreground/85 max-w-[760px]">
              小职这里根据大数据为你推荐了一些与你的专业、兴趣、价值观相匹配的职业，快去探索下职位的具体内容吧！同时你也可以通过搜索职业信息库，收藏喜欢的职业来确定自己的职业目标哦！
            </p>
          </div>

          <div className="mb-8 p-6 rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2 text-foreground">
              <span className="w-1 h-5 rounded-full inline-block bg-primary" />
              我的职业推荐清单
            </h3>
            {assessmentResult ? (
              <div>
                <div className="flex items-center gap-4 mb-5 p-4 rounded-xl bg-primary/4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold bg-primary text-primary-foreground">
                    {assessmentResult.personalityType}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      你的性格类型：{assessmentResult.personalityLabel}（{assessmentResult.personalityType}）
                    </p>
                    <p className="text-xs mt-1 text-muted-foreground">
                      核心职业价值观：{assessmentResult.values.join('、')}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {assessmentResult.topOccupations.map((occ, i) => (
                    <a key={i} href="#" className="flex items-start gap-3 p-4 rounded-xl transition-all duration-150 bg-primary/3 border border-border/50 no-underline hover:border-primary/25 hover:-translate-y-0.5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground"
                        style={{ backgroundColor: i < 3 ? 'var(--primary)' : 'var(--primary)' }}>
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-foreground">{occ.title}</span>
                          <span className="px-2 py-0.5 text-xs rounded text-primary bg-primary/8">{occ.industrymc}</span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{occ.reason}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <p className="text-xs text-center mt-4 text-muted-foreground">
                  以上推荐基于你的性格类型、职业兴趣和能力自评结果生成，仅供参考。你可以重新
                  <span onClick={() => navigate('/assessment')} className="cursor-pointer text-primary hover:underline">进行测评</span>获取新的推荐。
                </p>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-sm mb-4 text-muted-foreground">暂无推荐数据，请先完成职业测评获取专属推荐清单。</p>
                <button onClick={() => navigate('/assessment')} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-all duration-200 border-none cursor-pointer bg-primary text-primary-foreground shadow-md hover:-translate-y-0.5 hover:shadow-lg">
                  去完成职业测评
                  <span className="text-lg">→</span>
                </button>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2 text-foreground">
              <span className="w-1 h-5 rounded-full inline-block bg-primary" />
              探索更多感兴趣的职业
            </h3>

            <div className="flex gap-6">
              <div className="flex-1 min-w-0">
                <div className="mb-5 flex items-center gap-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="输入职业"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      className="outline-none px-5 py-3 text-base w-full rounded-xl transition-all duration-200 border border-primary/25 text-foreground bg-background pr-[60px]"
                    />
                    <button
                      onClick={handleSearch}
                      className="px-6 py-2 text-sm rounded-lg border-none cursor-pointer absolute right-1.5 top-1.5 font-medium transition-all duration-150 bg-primary text-primary-foreground hover:brightness-90">
                      搜索
                    </button>
                  </div>
                </div>

                <div className="mb-4 p-5 rounded-2xl bg-card border border-border shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-sm font-semibold flex-shrink-0 pt-1 text-foreground">职业分类：</span>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleFilterChange(-1, -1)}
                        className="px-3 py-1.5 text-sm rounded-lg border-none cursor-pointer transition-all duration-150"
                        style={{
                          color: hyIndex === -1 ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                          backgroundColor: hyIndex === -1 ? 'var(--primary)' : 'var(--accent)',
                        }}>
                        全部
                      </button>
                      {industryMenu.map((hy, i) => (
                        <button
                          key={i}
                          onClick={() => handleFilterChange(i, -1)}
                          className="px-3 py-1.5 text-sm rounded-lg border-none cursor-pointer transition-all duration-150"
                          style={{
                            color: hyIndex === i ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                            backgroundColor: hyIndex === i ? 'var(--primary)' : 'var(--accent)',
                          }}>
                          {hy.hyMc}
                        </button>
                      ))}
                    </div>
                  </div>
                  {hyIndex >= 0 && industryMenu[hyIndex].kthzList.length > 1 && (
                    <div className="flex items-start gap-3 pt-3 border-t border-border/50">
                      <span className="text-sm font-semibold flex-shrink-0 pt-1 text-foreground">职位类别：</span>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => { setKthzIndex(-1); setCurrentPage(1); }}
                          className="px-3 py-1.5 text-sm rounded-lg border-none cursor-pointer transition-all duration-150"
                          style={{
                            color: kthzIndex === -1 ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                            backgroundColor: kthzIndex === -1 ? 'var(--primary)' : 'var(--accent)',
                          }}>
                          全部
                        </button>
                        {industryMenu[hyIndex].kthzList.map((kthz, j) => (
                          <button
                            key={j}
                            onClick={() => { setKthzIndex(j); setCurrentPage(1); }}
                            className="px-3 py-1.5 text-sm rounded-lg border-none cursor-pointer transition-all duration-150"
                            style={{
                              color: kthzIndex === j ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                              backgroundColor: kthzIndex === j ? 'var(--primary)' : 'var(--accent)',
                            }}>
                            {kthz}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="rounded-2xl p-5 bg-card border border-border shadow-sm">
                  {currentPageData.length > 0 ? currentPageData.map((item, i) => (
                    <a key={(currentPage - 1) * pageSize + i} href="#" className="flex gap-4 py-5 transition-all duration-150 block no-underline hover:bg-primary/2"
                      style={{
                        borderBottom: i < currentPageData.length - 1 ? '1px solid var(--border)' : 'none',
                      }}>
                      <div className="flex-shrink-0 rounded-xl flex flex-col items-center justify-center w-[100px] h-20 bg-primary/6">
                        <span className="text-[28px]">{['💻', '🖥️', '📊', '📡', '💰', '📈', '🧮', '🌐', '🏗️', '🏢', '🏥', '💊', '🏛️', '⚖️', '🤝', '📚', '🧾', '📱', '🎨', '🚚', '🏨', '🌾', '🚀'][((currentPage - 1) * pageSize + i) % 23]}</span>
                        <span className="text-xs mt-1 text-primary">{item.industrymc}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          {item.recommend && (
                            <span className="px-2 py-0.5 text-xs rounded font-medium bg-red-500 text-white">最新</span>
                          )}
                          {item.hot && (
                            <span className="px-2 py-0.5 text-xs rounded font-medium bg-amber-500 text-white">最热</span>
                          )}
                          <span className="text-base font-semibold text-foreground">{item.title}</span>
                        </div>
                        <p className="text-sm mb-3 leading-relaxed text-muted-foreground">{item.desc}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                            </svg>
                            {item.collectionNum.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {item.praiseNum.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </a>
                  )) : (
                    <div className="py-16 text-center text-muted-foreground">
                      <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto mb-4 text-primary/20" fill="none" stroke="currentColor" strokeWidth="1">
                        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                      </svg>
                      <p className="text-base">输入职业关键词，开始探索吧！</p>
                    </div>
                  )}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-5 pt-4 border-t border-border/50">
                      <button
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 text-sm rounded-lg border border-border cursor-pointer transition-all duration-150 bg-card text-primary disabled:text-muted-foreground disabled:bg-background disabled:cursor-default">
                        上一页
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className="w-10 h-10 text-sm rounded-lg border-none cursor-pointer transition-all duration-150 border border-border bg-card text-foreground"
                          style={{
                            color: page === currentPage ? 'var(--primary-foreground)' : undefined,
                            backgroundColor: page === currentPage ? 'var(--primary)' : undefined,
                            fontWeight: page === currentPage ? '600' : '400',
                          }}>
                          {page}
                        </button>
                      ))}
                      <button
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 text-sm rounded-lg border border-border cursor-pointer transition-all duration-150 bg-card text-primary disabled:text-muted-foreground disabled:bg-background disabled:cursor-default">
                        下一页
                      </button>
                      <span className="text-sm ml-2 text-muted-foreground">
                        共 {filteredData.length} 条
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-shrink-0 w-[260px]">
                <div className="rounded-2xl p-5 mb-5 bg-card border border-border shadow-sm">
                  <h4 className="text-base font-semibold mb-4 text-foreground">近期上线</h4>
                  <div className="flex flex-wrap gap-2">
                    {recentOccus.map((name, i) => (
                      <a key={i} href="#" className="px-3 py-1.5 text-sm rounded-lg transition-all duration-150 text-primary bg-primary/6 no-underline hover:bg-primary/12">
                        {name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl p-5 bg-card border border-border shadow-sm">
                  <h4 className="text-base font-semibold mb-4 text-foreground">热门职业</h4>
                  <div className="flex flex-wrap gap-2">
                    {hotOccus.map((name, i) => (
                      <a key={i} href="#" className="px-3 py-1.5 text-sm rounded-lg transition-all duration-150 text-primary bg-primary/6 no-underline hover:bg-primary/12">
                        {name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Occupation;
