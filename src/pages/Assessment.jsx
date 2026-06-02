import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const questions = {
  preference: [
    { q: '在团队项目中，你更喜欢？', opts: ['独立完成任务', '与团队密切协作'] },
    { q: '面对新任务时，你的第一反应是？', opts: ['先制定详细计划', '立即动手尝试'] },
    { q: '处理问题时，你更依赖？', opts: ['逻辑分析和数据', '直觉和经验'] },
    { q: '你更喜欢的工作节奏是？', opts: ['稳定有序、按部就班', '灵活多变、拥抱变化'] },
    { q: '面对截止日期的压力，你通常？', opts: ['提前完成，留出缓冲', '在压力下效率更高'] },
  ],
  personality: [
    { q: '社交场合中，你通常会？', opts: ['主动结交新朋友，精力充沛', '更喜欢和熟人在一起，安静观察'] },
    { q: '获取信息时，你更关注？', opts: ['具体的事实和细节', '整体的模式和未来可能性'] },
    { q: '做决定时，你更看重？', opts: ['客观的逻辑和原则', '人际和谐与他人感受'] },
    { q: '日常生活中，你倾向于？', opts: ['按计划行事，有条不紊', '随性灵活，享受当下'] },
    { q: '面对冲突时，你倾向于？', opts: ['直接面对，解决问题', '避免冲突，维持和谐'] },
  ],
  interest: [
    { q: '你喜欢动手操作机械、工具或设备吗？', dim: 'R' },
    { q: '你喜欢探究科学问题、分析数据吗？', dim: 'I' },
    { q: '你喜欢绘画、写作、设计等创意活动吗？', dim: 'A' },
    { q: '你喜欢帮助他人、倾听和教导别人吗？', dim: 'S' },
    { q: '你喜欢领导团队、说服和影响他人吗？', dim: 'E' },
    { q: '你喜欢按规则办事、整理数据和文件吗？', dim: 'C' },
  ],
  ability: [
    { label: '逻辑推理能力', desc: '分析问题、逻辑推导、解决复杂问题的能力' },
    { label: '语言表达能力', desc: '口头和书面表达、沟通说服的能力' },
    { label: '人际沟通能力', desc: '理解他人、建立关系、团队协作的能力' },
    { label: '创新思维能力', desc: '产生新想法、创造性解决问题的能力' },
    { label: '计划执行能力', desc: '制定计划、组织协调、高效执行的能力' },
    { label: '数字敏感度', desc: '对数字、数据的理解和分析能力' },
  ],
  values: [
    { label: '高收入', icon: '💰' },
    { label: '工作稳定性', icon: '🏛️' },
    { label: '自主性', icon: '🎯' },
    { label: '成就感', icon: '🏆' },
    { label: '工作生活平衡', icon: '⚖️' },
    { label: '社会贡献', icon: '🤝' },
    { label: '成长空间', icon: '📈' },
    { label: '人际关系', icon: '👥' },
  ],
};

const occupationDB = [
  { title: '后端开发工程师', industrymc: '互联网/通信', match: ['I', 'C'], reason: '逻辑思维与系统性工作方式匹配' },
  { title: '前端开发工程师', industrymc: '互联网/通信', match: ['A', 'I'], reason: '创意设计与技术实现的结合' },
  { title: '数据分析师', industrymc: '互联网/通信', match: ['I', 'C'], reason: '数据敏感度与逻辑分析能力突出' },
  { title: '通信工程师', industrymc: '互联网/通信', match: ['R', 'I'], reason: '技术实操与系统思维的优势' },
  { title: '金融分析师', industrymc: '金融/贸易', match: ['I', 'E'], reason: '分析能力与商业敏锐度匹配' },
  { title: '证券经纪人', industrymc: '金融/贸易', match: ['E', 'C'], reason: '快速决策与规则意识兼具' },
  { title: '精算师', industrymc: '金融/贸易', match: ['I', 'C'], reason: '数学天赋与严谨态度的最佳结合' },
  { title: '外贸业务员', industrymc: '金融/贸易', match: ['E', 'S'], reason: '沟通能力与商业思维的融合' },
  { title: '建筑设计师', industrymc: '建筑/工程/房地产服务', match: ['A', 'R'], reason: '艺术创造与工程技术的完美结合' },
  { title: '土木工程师', industrymc: '建筑/工程/房地产服务', match: ['R', 'I'], reason: '实操能力与工程技术的高度匹配' },
  { title: '临床医师', industrymc: '医疗/生物/化工', match: ['I', 'S'], reason: '科学素养与服务精神的统一' },
  { title: '药剂师', industrymc: '医疗/生物/化工', match: ['I', 'C'], reason: '严谨细致与医药知识兼备' },
  { title: '公务员', industrymc: '公务员/监察法律/社会服务', match: ['C', 'S'], reason: '规则意识与服务公众的志向' },
  { title: '律师', industrymc: '公务员/监察法律/社会服务', match: ['E', 'I'], reason: '逻辑辩论与影响力优势突出' },
  { title: '社会工作者', industrymc: '公务员/监察法律/社会服务', match: ['S', 'C'], reason: '助人情怀与组织协调能力' },
  { title: '中学教师', industrymc: '教育/行政', match: ['S', 'A'], reason: '传授知识与培育人才的热情' },
  { title: '会计师', industrymc: '教育/行政', match: ['C', 'I'], reason: '数字敏感与一丝不苟的风格' },
  { title: '新媒体运营', industrymc: '文艺与设计/传媒文化', match: ['A', 'E'], reason: '创意表达与传播影响力的结合' },
  { title: 'UI设计师', industrymc: '文艺与设计/传媒文化', match: ['A', 'C'], reason: '审美能力与用户体验的融合' },
  { title: '物流管理师', industrymc: '交通/物流', match: ['C', 'R'], reason: '组织规划与执行落地的能力' },
  { title: '酒店管理', industrymc: '住宿餐饮/旅游', match: ['S', 'E'], reason: '服务意识与管理能力的结合' },
  { title: '农业技术员', industrymc: '农林牧渔', match: ['R', 'I'], reason: '实操能力与科学种植的兴趣' },
  { title: '创业者', industrymc: '青年创业者', match: ['E', 'A'], reason: '冒险精神与创新思维兼备' },
];

const sectionTitles = ['工作偏好', '性格倾向', '职业兴趣', '能力自评', '职业价值观'];

function Assessment() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    preference: [-1, -1, -1, -1, -1],
    personality: [-1, -1, -1, -1, -1],
    interest: [0, 0, 0, 0, 0, 0],
    ability: [3, 3, 3, 3, 3, 3],
    values: [],
  });

  const handlePrefChange = (qIdx, optIdx) => {
    const updated = [...answers.preference];
    updated[qIdx] = optIdx;
    setAnswers({ ...answers, preference: updated });
  };

  const handlePersChange = (qIdx, optIdx) => {
    const updated = [...answers.personality];
    updated[qIdx] = optIdx;
    setAnswers({ ...answers, personality: updated });
  };

  const handleInterestChange = (qIdx, value) => {
    const updated = [...answers.interest];
    updated[qIdx] = value;
    setAnswers({ ...answers, interest: updated });
  };

  const handleAbilityChange = (qIdx, value) => {
    const updated = [...answers.ability];
    updated[qIdx] = value;
    setAnswers({ ...answers, ability: updated });
  };

  const handleValueToggle = (label) => {
    const current = answers.values;
    if (current.includes(label)) {
      setAnswers({ ...answers, values: current.filter(v => v !== label) });
    } else if (current.length < 3) {
      setAnswers({ ...answers, values: [...current, label] });
    }
  };

  const allPrefDone = answers.preference.every(v => v >= 0);
  const allPersDone = answers.personality.every(v => v >= 0);

  const canNext = () => {
    if (step === 0) return allPrefDone;
    if (step === 1) return allPersDone;
    if (step === 3) return true;
    if (step === 4) return answers.values.length === 3;
    return true;
  };

  const handleSubmit = () => {
    const riasecScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    questions.interest.forEach((item, i) => {
      riasecScores[item.dim] = answers.interest[i];
    });
    answers.ability.forEach((v, i) => {
      const dims = [['R', 'I'], ['A', 'S'], ['S', 'E'], ['A', 'E'], ['C', 'E'], ['I', 'C']];
      dims[i].forEach(d => { riasecScores[d] += v * 0.3; });
    });
    const topDims = Object.entries(riasecScores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([k]) => k);

    const matched = occupationDB
      .map(occ => {
        const score = occ.match.filter(m => topDims.includes(m)).length * 10
          + (topDims[0] === occ.match[0] ? 5 : 0);
        return { ...occ, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    const personalityType = [
      answers.personality[0] === 0 ? 'E' : 'I',
      answers.personality[1] === 0 ? 'S' : 'N',
      answers.personality[2] === 0 ? 'T' : 'F',
      answers.personality[3] === 0 ? 'J' : 'P',
    ].join('');

    const typeLabels = {
      ESTJ: '管理者型', ENTJ: '指挥者型', ESFJ: '执政官型', ENFJ: '教育家型',
      ESTP: '企业家型', ENTP: '辩论家型', ESFP: '表演者型', ENFP: '竞选者型',
      ISTJ: '物流师型', INTJ: '建筑师型', ISFJ: '守卫者型', INFJ: '提倡者型',
      ISTP: '鉴赏家型', INTP: '逻辑学家型', ISFP: '探险家型', INFP: '调停者型',
    };

    const result = {
      topOccupations: matched,
      personalityType,
      personalityLabel: typeLabels[personalityType] || '综合型',
      scores: riasecScores,
      values: answers.values,
      riasecLabels: { R: '实操型', I: '研究型', A: '艺术型', S: '社会型', E: '企业型', C: '常规型' },
    };

    localStorage.setItem('assessmentResult', JSON.stringify(result));
    navigate('/occupation');
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {sectionTitles.map((title, i) => (
        <React.Fragment key={i}>
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200"
              style={{
                color: i <= step ? '#ffffff' : '#5a6a7a',
                backgroundColor: i <= step ? '#4167B1' : 'rgba(65,103,177,0.12)',
              }}>
              {i < step ? '✓' : i + 1}
            </div>
            <span className="text-xs" style={{ color: i <= step ? '#4167B1' : '#5a6a7a' }}>{title}</span>
          </div>
          {i < sectionTitles.length - 1 && (
            <div className="w-8 h-0.5" style={{ backgroundColor: i < step ? '#4167B1' : 'rgba(65,103,177,0.15)' }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#e3ecf7', color: '#1B1F23' }}>
      <Header />
      <div className="flex-1">
        <div className="mx-auto py-10" style={{ width: '900px' }}>
          <h2 className="text-2xl font-bold text-center mb-2" style={{ color: '#1B1F23' }}>职业测评</h2>
          <p className="text-sm text-center mb-8" style={{ color: '#5a6a7a' }}>完成以下5个步骤，获取专属于你的职业推荐清单</p>

          {renderStepIndicator()}

          <div className="rounded-2xl p-8" style={{
            backgroundColor: '#ffffff',
            border: '1px solid rgba(65,103,177,0.15)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
            minHeight: '420px',
          }}>
            {/* Step 0: 工作偏好 */}
            {step === 0 && (
              <div>
                <h3 className="text-lg font-bold mb-6" style={{ color: '#1B1F23' }}>工作偏好</h3>
                {questions.preference.map((item, i) => (
                  <div key={i} className="mb-5 pb-5" style={{ borderBottom: i < questions.preference.length - 1 ? '1px solid rgba(65,103,177,0.06)' : 'none' }}>
                    <p className="text-sm font-medium mb-3" style={{ color: '#1B1F23' }}>{i + 1}. {item.q}</p>
                    <div className="flex gap-3">
                      {item.opts.map((opt, j) => (
                        <button key={j} onClick={() => handlePrefChange(i, j)}
                          className="flex-1 py-3 px-4 rounded-xl text-sm border-none cursor-pointer transition-all duration-150"
                          style={{
                            color: answers.preference[i] === j ? '#ffffff' : '#1B1F23',
                            backgroundColor: answers.preference[i] === j ? '#4167B1' : 'rgba(65,103,177,0.05)',
                            border: answers.preference[i] === j ? '2px solid #4167B1' : '2px solid transparent',
                          }}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 1: 性格倾向 */}
            {step === 1 && (
              <div>
                <h3 className="text-lg font-bold mb-6" style={{ color: '#1B1F23' }}>性格倾向</h3>
                {questions.personality.map((item, i) => (
                  <div key={i} className="mb-5 pb-5" style={{ borderBottom: i < questions.personality.length - 1 ? '1px solid rgba(65,103,177,0.06)' : 'none' }}>
                    <p className="text-sm font-medium mb-3" style={{ color: '#1B1F23' }}>{i + 1}. {item.q}</p>
                    <div className="flex gap-3">
                      {item.opts.map((opt, j) => (
                        <button key={j} onClick={() => handlePersChange(i, j)}
                          className="flex-1 py-3 px-4 rounded-xl text-sm border-none cursor-pointer transition-all duration-150"
                          style={{
                            color: answers.personality[i] === j ? '#ffffff' : '#1B1F23',
                            backgroundColor: answers.personality[i] === j ? '#4167B1' : 'rgba(65,103,177,0.05)',
                            border: answers.personality[i] === j ? '2px solid #4167B1' : '2px solid transparent',
                          }}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 2: 职业兴趣 */}
            {step === 2 && (
              <div>
                <h3 className="text-lg font-bold mb-6" style={{ color: '#1B1F23' }}>职业兴趣（1-5分评分）</h3>
                {questions.interest.map((item, i) => (
                  <div key={i} className="mb-5 pb-5" style={{ borderBottom: i < questions.interest.length - 1 ? '1px solid rgba(65,103,177,0.06)' : 'none' }}>
                    <p className="text-sm font-medium mb-3" style={{ color: '#1B1F23' }}>{i + 1}. {item.q}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs" style={{ color: '#5a6a7a' }}>不符合</span>
                      {[1, 2, 3, 4, 5].map(v => (
                        <button key={v} onClick={() => handleInterestChange(i, v)}
                          className="w-10 h-10 rounded-full text-sm border-none cursor-pointer transition-all duration-150 font-medium"
                          style={{
                            color: answers.interest[i] >= v ? '#ffffff' : '#4167B1',
                            backgroundColor: answers.interest[i] >= v ? '#4167B1' : 'rgba(65,103,177,0.08)',
                          }}>
                          {v}
                        </button>
                      ))}
                      <span className="text-xs" style={{ color: '#5a6a7a' }}>非常符合</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 3: 能力自评 */}
            {step === 3 && (
              <div>
                <h3 className="text-lg font-bold mb-6" style={{ color: '#1B1F23' }}>能力自评（1-5分，3分为平均水平）</h3>
                {questions.ability.map((item, i) => (
                  <div key={i} className="mb-5 pb-5" style={{ borderBottom: i < questions.ability.length - 1 ? '1px solid rgba(65,103,177,0.06)' : 'none' }}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium" style={{ color: '#1B1F23' }}>{item.label}</p>
                      <span className="text-sm font-bold" style={{ color: '#4167B1' }}>{answers.ability[i]} 分</span>
                    </div>
                    <p className="text-xs mb-3" style={{ color: '#5a6a7a' }}>{item.desc}</p>
                    <input
                      type="range" min="1" max="5" value={answers.ability[i]}
                      onChange={(e) => handleAbilityChange(i, parseInt(e.target.value))}
                      className="w-full"
                      style={{ accentColor: '#4167B1', height: '6px' }}
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-xs" style={{ color: '#5a6a7a' }}>较弱</span>
                      <span className="text-xs" style={{ color: '#5a6a7a' }}>一般</span>
                      <span className="text-xs" style={{ color: '#5a6a7a' }}>较强</span>
                      <span className="text-xs" style={{ color: '#5a6a7a' }}>很强</span>
                      <span className="text-xs" style={{ color: '#5a6a7a' }}>卓越</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Step 4: 职业价值观 */}
            {step === 4 && (
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1B1F23' }}>职业价值观</h3>
                <p className="text-sm mb-6" style={{ color: '#5a6a7a' }}>选择你最看重的3个职业价值观（已选 {answers.values.length}/3）</p>
                <div className="grid grid-cols-4 gap-3">
                  {questions.values.map((item, i) => {
                    const selected = answers.values.includes(item.label);
                    return (
                      <button key={i} onClick={() => handleValueToggle(item.label)}
                        className="py-4 px-3 rounded-xl text-sm border-none cursor-pointer transition-all duration-150 flex flex-col items-center gap-2"
                        style={{
                          color: selected ? '#ffffff' : '#1B1F23',
                          backgroundColor: selected ? '#4167B1' : 'rgba(65,103,177,0.05)',
                          border: selected ? '2px solid #4167B1' : '2px solid transparent',
                          opacity: !selected && answers.values.length >= 3 ? 0.5 : 1,
                        }}>
                        <span style={{ fontSize: '24px' }}>{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button onClick={() => setStep(s => Math.max(0, s - 1))}
              disabled={step === 0}
              className="px-6 py-3 rounded-xl text-sm border-none cursor-pointer transition-all duration-150 font-medium"
              style={{
                color: step === 0 ? '#5a6a7a' : '#4167B1',
                backgroundColor: step === 0 ? 'rgba(65,103,177,0.04)' : 'rgba(65,103,177,0.08)',
                cursor: step === 0 ? 'default' : 'pointer',
              }}>
              上一步
            </button>

            {step < 4 ? (
              <button onClick={() => setStep(s => s + 1)}
                disabled={!canNext()}
                className="px-8 py-3 rounded-xl text-sm border-none cursor-pointer transition-all duration-150 font-medium"
                style={{
                  color: '#ffffff',
                  backgroundColor: canNext() ? '#4167B1' : 'rgba(65,103,177,0.3)',
                  cursor: canNext() ? 'pointer' : 'default',
                  boxShadow: canNext() ? '0 4px 16px rgba(65,103,177,0.25)' : 'none',
                }}>
                下一步
              </button>
            ) : (
              <button onClick={handleSubmit}
                disabled={!canNext()}
                className="px-8 py-3 rounded-xl text-sm border-none cursor-pointer transition-all duration-150 font-medium"
                style={{
                  color: '#ffffff',
                  backgroundColor: canNext() ? '#4167B1' : 'rgba(65,103,177,0.3)',
                  cursor: canNext() ? 'pointer' : 'default',
                  boxShadow: canNext() ? '0 4px 16px rgba(65,103,177,0.25)' : 'none',
                }}
                onMouseEnter={(e) => { if (canNext()) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(65,103,177,0.35)'; } }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(65,103,177,0.25)'; }}>
                完成填写，提交
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#e3ecf7', borderTop: '1px solid rgba(65,103,177,0.12)' }}>
        <div className="mx-auto relative" style={{ width: '900px', height: '120px', fontSize: '14px', lineHeight: '30px' }}>
          <div className="absolute" style={{ top: '32px', left: '0', color: '#5a6a7a', fontSize: '13px' }}>
            主办单位：
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="transition-all duration-200" style={{ color: '#5a6a7a' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#4167B1'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#5a6a7a'; }}>AI智研创新协会</a>
            <br />
            Copyright &copy; 2003-2026 智绘职途 All Rights Reserved
          </div>

        </div>
      </div>
    </div>
  );
}

export default Assessment;
