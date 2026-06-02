import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const specialtyData = [
  // ===== 本科（普通教育） =====
  { zymc: '计算机科学与技术', xk: '计算机类', mlmc: '工学', cc: '本科', myd: 4.2, evlNum: 12580, zhzs: 4.3, pf: 8.7, cyfx: '软件开发、系统架构、算法工程、数据分析、AI研发', zzzs: '软考（软件设计师/系统架构师）、CCF计算机职业资格认证' },
  { zymc: '软件工程', xk: '计算机类', mlmc: '工学', cc: '本科', myd: 4.1, evlNum: 9820, zhzs: 4.2, pf: 8.5, cyfx: '软件开发、软件测试、项目管理、DevOps、产品经理', zzzs: '软考（软件设计师）、PMP、ISTQB' },
  { zymc: '数据科学与大数据技术', xk: '计算机类', mlmc: '工学', cc: '本科', myd: 4.3, evlNum: 7650, zhzs: 4.4, pf: 8.8, cyfx: '数据分析师、大数据开发、数据治理、AI训练、商业智能', zzzs: 'CDA数据分析师认证、大数据工程师认证' },
  { zymc: '人工智能', xk: '计算机类', mlmc: '工学', cc: '本科', myd: 4.5, evlNum: 8320, zhzs: 4.5, pf: 9.2, cyfx: '算法工程师、深度学习、NLP、计算机视觉、AI产品经理', zzzs: 'TensorFlow/PyTorch开发者认证、人工智能工程师（软考）' },
  { zymc: '信息安全', xk: '计算机类', mlmc: '工学', cc: '本科', myd: 3.9, evlNum: 4560, zhzs: 4.0, pf: 7.8, cyfx: '安全运维、渗透测试、安全审计、数据安全、等级保护', zzzs: 'CISSP、CISP、信息安全工程师（软考）' },
  { zymc: '物联网工程', xk: '计算机类', mlmc: '工学', cc: '本科', myd: 3.8, evlNum: 5230, zhzs: 3.9, pf: 7.5, cyfx: 'IoT开发、嵌入式开发、智能家居、工业物联网、传感器', zzzs: '物联网工程师认证、嵌入式系统工程师' },
  { zymc: '通信工程', xk: '电子信息类', mlmc: '工学', cc: '本科', myd: 4.0, evlNum: 8700, zhzs: 4.1, pf: 8.0, cyfx: '通信研发、网络优化、5G通信、卫星通信、光通信', zzzs: '通信工程师（中级/高级）、CCNA/CCNP、华为认证' },
  { zymc: '电子信息工程', xk: '电子信息类', mlmc: '工学', cc: '本科', myd: 4.0, evlNum: 9150, zhzs: 4.0, pf: 8.0, cyfx: '电子设计、嵌入式开发、信号处理、芯片设计、通信设备', zzzs: '电子工程师、嵌入式系统工程师认证' },
  { zymc: '电气工程及其自动化', xk: '电气类', mlmc: '工学', cc: '本科', myd: 3.9, evlNum: 11200, zhzs: 4.0, pf: 7.8, cyfx: '电力系统、自动化控制、新能源发电、电气设计、PLC编程', zzzs: '注册电气工程师、自动化工程师、电工证' },
  { zymc: '机械设计制造及其自动化', xk: '机械类', mlmc: '工学', cc: '本科', myd: 3.7, evlNum: 13400, zhzs: 3.8, pf: 7.5, cyfx: '机械设计、制造工艺、数控编程、汽车制造、3D打印', zzzs: '机械工程师、CAD/CAM认证、数控技术认证' },
  { zymc: '土木工程', xk: '土木类', mlmc: '工学', cc: '本科', myd: 3.5, evlNum: 15600, zhzs: 3.6, pf: 7.2, cyfx: '结构设计、施工管理、工程造价、市政工程、桥梁隧道', zzzs: '注册建造师（一级/二级）、注册结构工程师' },
  { zymc: '临床医学', xk: '临床医学类', mlmc: '医学', cc: '本科', myd: 4.1, evlNum: 18900, zhzs: 4.2, pf: 8.8, cyfx: '临床医生、医学研究、公共卫生、医疗管理、医药企业', zzzs: '执业医师资格证、住院医师规范化培训合格证' },
  { zymc: '法学', xk: '法学类', mlmc: '法学', cc: '本科', myd: 3.8, evlNum: 14200, zhzs: 3.9, pf: 8.3, cyfx: '律师、法务、公务员、司法系统、仲裁员', zzzs: '法律职业资格证（法考）、专利代理师' },
  { zymc: '经济学', xk: '经济学类', mlmc: '经济学', cc: '本科', myd: 3.9, evlNum: 12700, zhzs: 4.0, pf: 8.0, cyfx: '金融分析、经济研究、政策研究、投行、咨询', zzzs: 'CFA、FRM、证券从业资格、基金从业资格' },
  { zymc: '金融学', xk: '金融学类', mlmc: '经济学', cc: '本科', myd: 4.0, evlNum: 16500, zhzs: 4.1, pf: 8.5, cyfx: '银行、证券、基金、保险、信托、风控', zzzs: 'CFA、FRM、证券/基金/期货从业资格、AFP/CFP' },
  { zymc: '会计学', xk: '工商管理类', mlmc: '管理学', cc: '本科', myd: 4.0, evlNum: 19800, zhzs: 4.0, pf: 8.2, cyfx: '审计、财务管理、税务筹划、财务顾问、投行', zzzs: 'CPA（注册会计师）、ACCA、初级/中级/高级会计师职称' },
  { zymc: '工商管理', xk: '工商管理类', mlmc: '管理学', cc: '本科', myd: 3.8, evlNum: 14300, zhzs: 3.9, pf: 7.6, cyfx: '企业管理、人力资源、市场营销、项目管理、运营管理', zzzs: 'MBA、PMP、人力资源管理师、企业培训师' },
  { zymc: '英语', xk: '外国语言文学类', mlmc: '文学', cc: '本科', myd: 3.9, evlNum: 17600, zhzs: 4.0, pf: 7.8, cyfx: '翻译、外贸、教育培训、国际交流、跨境电商', zzzs: 'TEM-8（专八）、CATTI翻译资格证、TESOL' },
  { zymc: '汉语言文学', xk: '中国语言文学类', mlmc: '文学', cc: '本科', myd: 4.1, evlNum: 13200, zhzs: 4.2, pf: 8.2, cyfx: '教师、编辑、文案策划、文化传媒、公务员', zzzs: '教师资格证、普通话等级证书、出版专业资格' },
  { zymc: '数学与应用数学', xk: '数学类', mlmc: '理学', cc: '本科', myd: 3.8, evlNum: 8900, zhzs: 3.9, pf: 7.8, cyfx: '教师、数据分析、金融建模、数理研究、精算', zzzs: '教师资格证、精算师、CDA数据分析师' },
  // ===== 本科（职业教育） =====
  { zymc: '大数据与会计', xk: '财务会计类', mlmc: '财经商贸', cc: '本科（职业教育）', myd: 4.9, evlNum: 203, zhzs: 4.8, pf: 9.5, cyfx: '财务数据分析、大数据审计、数字化财务、税务筹划', zzzs: '初级/中级会计师、CDA数据分析师、CPA' },
  { zymc: '电子商务', xk: '电子商务类', mlmc: '财经商贸', cc: '本科（职业教育）', myd: 4.9, evlNum: 161, zhzs: 4.8, pf: 9.5, cyfx: '电商运营、网络营销、跨境电商、直播电商、平台管理', zzzs: '电子商务师、跨境电商运营师、互联网营销师' },
  { zymc: '区块链技术', xk: '计算机类', mlmc: '电子与信息', cc: '本科（职业教育）', myd: 4.5, evlNum: 135, zhzs: 4.4, pf: 9.0, cyfx: '区块链开发、智能合约、Web3、数字金融、DApp开发', zzzs: '区块链工程师认证、智能合约开发认证、软考' },
  { zymc: '软件工程技术', xk: '计算机类', mlmc: '电子与信息', cc: '本科（职业教育）', myd: 4.7, evlNum: 121, zhzs: 4.6, pf: 9.2, cyfx: '软件研发、系统开发、技术管理、云计算、DevOps', zzzs: '软考（软件设计师）、AWS/阿里云认证、PMP' },
  { zymc: '智能控制技术', xk: '自动化类', mlmc: '装备制造', cc: '本科（职业教育）', myd: 4.6, evlNum: 107, zhzs: 4.5, pf: 9.0, cyfx: '智能控制、工业自动化、机器人运维、智能制造、PLC编程', zzzs: '自动化工程师、PLC编程认证、工业机器人操作员' },
  { zymc: '数字媒体艺术', xk: '艺术设计类', mlmc: '文化艺术', cc: '本科（职业教育）', myd: 4.7, evlNum: 94, zhzs: 4.7, pf: 9.3, cyfx: 'UI/UX设计、动画制作、游戏设计、影视后期、新媒体设计', zzzs: 'Adobe认证设计师、数字媒体设计师认证、AIGC创作师' },
  { zymc: '虚拟现实技术', xk: '计算机类', mlmc: '电子与信息', cc: '本科（职业教育）', myd: 4.5, evlNum: 93, zhzs: 4.5, pf: 9.0, cyfx: 'VR/AR开发、3D建模、游戏开发、虚拟仿真、数字孪生', zzzs: 'Unity认证、VR开发工程师认证、3D建模师认证' },
  { zymc: '大数据与审计', xk: '财务会计类', mlmc: '财经商贸', cc: '本科（职业教育）', myd: 5.0, evlNum: 74, zhzs: 4.9, pf: 9.8, cyfx: '大数据审计、内部审计、风控、财务分析、合规管理', zzzs: 'CIA（国际注册内部审计师）、CPA、审计师' },
  { zymc: '应用英语', xk: '语言类', mlmc: '教育与体育', cc: '本科（职业教育）', myd: 4.9, evlNum: 64, zhzs: 4.8, pf: 9.5, cyfx: '商务翻译、外贸、涉外文秘、跨境电商、涉外酒店', zzzs: 'TEM-4/CET-6、CATTI翻译资格、BEC商务英语' },
  { zymc: '网络与新媒体', xk: '新闻出版类', mlmc: '新闻传播', cc: '本科（职业教育）', myd: 5.0, evlNum: 62, zhzs: 4.9, pf: 9.8, cyfx: '新媒体运营、内容策划、短视频制作、网络编辑、公关传播', zzzs: '全媒体运营师、新媒体编辑认证、互联网营销师' },
  { zymc: '人工智能工程技术', xk: '计算机类', mlmc: '电子与信息', cc: '本科（职业教育）', myd: 4.6, evlNum: 51, zhzs: 4.5, pf: 9.0, cyfx: 'AI开发、机器学习工程、智能系统、数据标注、算法调优', zzzs: 'TensorFlow/PyTorch认证、人工智能工程师（软考）' },
  { zymc: '工艺美术', xk: '艺术设计类', mlmc: '文化艺术', cc: '本科（职业教育）', myd: 4.9, evlNum: 50, zhzs: 4.9, pf: 9.7, cyfx: '工艺设计、文创产品开发、非遗传承、家居设计、珠宝设计', zzzs: '工艺美术师、非遗传承人资格、Adobe认证' },
  { zymc: '环境艺术设计', xk: '艺术设计类', mlmc: '文化艺术', cc: '本科（职业教育）', myd: 4.8, evlNum: 44, zhzs: 4.7, pf: 9.5, cyfx: '室内设计、景观设计、展览设计、软装设计、城市规划', zzzs: '室内设计师认证、景观设计师认证、CAD/BIM认证' },
  { zymc: '大数据工程技术', xk: '计算机类', mlmc: '电子与信息', cc: '本科（职业教育）', myd: 4.9, evlNum: 38, zhzs: 4.8, pf: 9.5, cyfx: '大数据平台开发、数据架构、数据工程、BI、数据中台', zzzs: '大数据工程师认证、CDA、Hadoop/Spark认证' },
  { zymc: '学前教育', xk: '教育类', mlmc: '教育与体育', cc: '本科（职业教育）', myd: 4.9, evlNum: 37, zhzs: 4.8, pf: 9.6, cyfx: '幼儿园教师、早教机构、幼教教研、儿童产品、家庭教育', zzzs: '教师资格证（幼儿园）、保育员证、育婴师' },
  { zymc: '金融科技应用', xk: '金融类', mlmc: '财经商贸', cc: '本科（职业教育）', myd: 5.0, evlNum: 35, zhzs: 4.9, pf: 9.8, cyfx: '金融科技、支付系统、区块链金融、风控建模、量化交易', zzzs: 'CFA、金融科技师、FRM、特许金融科技分析师' },
  { zymc: '导航工程技术', xk: '测绘地理信息类', mlmc: '资源环境与安全', cc: '本科（职业教育）', myd: 4.8, evlNum: 32, zhzs: 4.7, pf: 9.5, cyfx: '导航系统、测绘工程、地理信息系统、卫星定位、遥感', zzzs: '测绘工程师、注册测绘师、GIS工程师认证' },
  { zymc: '信息安全与管理', xk: '计算机类', mlmc: '电子与信息', cc: '本科（职业教育）', myd: 4.7, evlNum: 32, zhzs: 4.6, pf: 9.2, cyfx: '信息安全、网络安全、安全运维、渗透测试、数据保护', zzzs: 'CISP、信息安全工程师（软考）、网络安全等级保护测评师' },
  { zymc: '影视编导', xk: '广播影视类', mlmc: '新闻传播', cc: '本科（职业教育）', myd: 4.8, evlNum: 32, zhzs: 4.8, pf: 9.5, cyfx: '影视编剧、导演、节目策划、短视频编导、广告创意', zzzs: '广播电视编辑记者证、编导资格证、摄影师证' },
  { zymc: '旅游管理', xk: '旅游类', mlmc: '旅游', cc: '本科（职业教育）', myd: 4.9, evlNum: 31, zhzs: 4.8, pf: 9.5, cyfx: '旅行社管理、景区运营、酒店管理、会展策划、研学旅行', zzzs: '导游证（初级/中级/高级）、旅游策划师、研学指导师' },
  { zymc: '云计算技术', xk: '计算机类', mlmc: '电子与信息', cc: '本科（职业教育）', myd: 5.0, evlNum: 30, zhzs: 4.9, pf: 9.8, cyfx: '云计算架构、云运维、SaaS平台、云安全、DevOps', zzzs: 'AWS/阿里云/华为云认证、CKA（Kubernetes管理员）、RHCE' },
  { zymc: '现代物流管理', xk: '物流类', mlmc: '财经商贸', cc: '本科（职业教育）', myd: 5.0, evlNum: 30, zhzs: 4.9, pf: 9.8, cyfx: '供应链管理、物流运营、仓储管理、跨境电商物流、冷链物流', zzzs: '物流师（助理/中级/高级）、供应链管理师、CSCP' },
  { zymc: '网络工程技术', xk: '计算机类', mlmc: '电子与信息', cc: '本科（职业教育）', myd: 4.9, evlNum: 29, zhzs: 4.8, pf: 9.5, cyfx: '网络工程、系统集成、网络运维、数据中心、云网络', zzzs: 'CCNA/CCNP、华为HCIA/HCIP、网络工程师（软考）' },
  { zymc: '计算机应用工程', xk: '计算机类', mlmc: '电子与信息', cc: '本科（职业教育）', myd: 3.4, evlNum: 24, zhzs: 3.5, pf: 7.0, cyfx: 'IT技术支持、软件开发、系统维护、网页制作、数据库管理', zzzs: '软考（初级/中级）、计算机等级考试（NCRE）' },
  { zymc: '现代通信工程', xk: '通信类', mlmc: '电子与信息', cc: '本科（职业教育）', myd: 4.7, evlNum: 23, zhzs: 4.6, pf: 9.2, cyfx: '5G通信、光纤通信、通信网络建设、通信设备维护、无线通信', zzzs: '通信工程师（中级/高级）、华为/中兴认证、5G工程师认证' },
  { zymc: '大数据与财务管理', xk: '财务会计类', mlmc: '财经商贸', cc: '本科（职业教育）', myd: 4.8, evlNum: 19, zhzs: 4.7, pf: 9.5, cyfx: '财务管理、数据分析、财务预测、投融资、资产管理', zzzs: '财务管理师、CDA数据分析师、初级/中级会计师' },
  { zymc: '金融管理', xk: '金融类', mlmc: '财经商贸', cc: '本科（职业教育）', myd: 4.6, evlNum: 16, zhzs: 4.5, pf: 9.0, cyfx: '银行管理、投资理财、保险、信贷管理、风险控制', zzzs: '银行从业资格、证券从业资格、AFP/CFP' },
  { zymc: '应用韩语', xk: '语言类', mlmc: '教育与体育', cc: '本科（职业教育）', myd: 4.6, evlNum: 16, zhzs: 4.5, pf: 9.0, cyfx: '韩语翻译、对韩外贸、韩企文秘、跨境电商、旅游服务', zzzs: 'TOPIK（韩语能力考试中/高级）、CATTI翻译资格' },
  { zymc: '数字媒体技术', xk: '计算机类', mlmc: '电子与信息', cc: '本科（职业教育）', myd: 5.0, evlNum: 15, zhzs: 4.9, pf: 9.8, cyfx: '数字媒体开发、交互设计、前端开发、UI设计、多媒体制作', zzzs: 'Adobe认证设计师、前端开发工程师认证、AIGC创作师' },
  { zymc: '电气工程及自动化', xk: '自动化类', mlmc: '装备制造', cc: '本科（职业教育）', myd: 4.5, evlNum: 10, zhzs: 4.4, pf: 9.0, cyfx: '电气设计、PLC编程、工业自动化、供配电、新能源', zzzs: '电气工程师、注册电气工程师、电工特种作业操作证' },
  // ===== 高职（专科） =====
  { zymc: '大数据与会计', xk: '财务会计类', mlmc: '财经商贸', cc: '高职（专科）', myd: 4.3, evlNum: 126234, zhzs: 4.3, pf: 8.5, cyfx: '会计核算、出纳、财务软件操作、税务申报、审计助理', zzzs: '初级会计师、财务数字化认证、1+X智能财税证书' },
  { zymc: '护理', xk: '护理类', mlmc: '医药卫生', cc: '高职（专科）', myd: 4.3, evlNum: 125281, zhzs: 4.2, pf: 8.6, cyfx: '临床护理、社区护理、养老护理、康复护理、医美护理', zzzs: '护士执业资格证、养老护理员、健康管理师' },
  { zymc: '机电一体化技术', xk: '自动化类', mlmc: '装备制造', cc: '高职（专科）', myd: 4.2, evlNum: 92586, zhzs: 4.1, pf: 8.3, cyfx: '机电设备维护、自动化产线、PLC调试、机器人运维、设备管理', zzzs: '电工证（特种作业）、机电工程师、PLC编程认证' },
  { zymc: '工程造价', xk: '建设工程管理类', mlmc: '土木建筑', cc: '高职（专科）', myd: 4.2, evlNum: 89537, zhzs: 4.1, pf: 8.4, cyfx: '工程造价、招投标、预算编制、工程审计、成本控制', zzzs: '造价工程师（二级/一级）、BIM建模师、造价员' },
  { zymc: '建筑工程技术', xk: '土建施工类', mlmc: '土木建筑', cc: '高职（专科）', myd: 4.3, evlNum: 88918, zhzs: 4.2, pf: 8.5, cyfx: '施工管理、工程监理、质量检测、BIM技术、装配式建筑', zzzs: '施工员、二级建造师、BIM技术认证、安全员' },
  { zymc: '计算机应用技术', xk: '计算机类', mlmc: '电子与信息', cc: '高职（专科）', myd: 4.0, evlNum: 69596, zhzs: 4.0, pf: 8.0, cyfx: 'IT运维、软件开发、网页设计、数据库管理、办公自动化', zzzs: '软考（初级/中级）、计算机等级考试（NCRE）、Web前端开发' },
  { zymc: '现代物流管理', xk: '物流类', mlmc: '财经商贸', cc: '高职（专科）', myd: 4.1, evlNum: 65676, zhzs: 4.1, pf: 8.2, cyfx: '仓储管理、配送管理、供应链操作、物流客服、快递运营', zzzs: '物流师（助理/中级）、供应链管理师、叉车证' },
  { zymc: '学前教育', xk: '教育类', mlmc: '教育与体育', cc: '高职（专科）', myd: 4.5, evlNum: 65613, zhzs: 4.4, pf: 8.8, cyfx: '幼儿园教师、早教机构、保育员、儿童绘本、亲子教育', zzzs: '教师资格证（幼儿园）、保育员证、育婴师' },
  { zymc: '电子商务', xk: '电子商务类', mlmc: '财经商贸', cc: '高职（专科）', myd: 4.1, evlNum: 65407, zhzs: 4.0, pf: 8.1, cyfx: '网店运营、客服、美工、直播带货、跨境电商操作', zzzs: '电子商务师、网店运营推广（1+X）、互联网营销师' },
  { zymc: '计算机网络技术', xk: '计算机类', mlmc: '电子与信息', cc: '高职（专科）', myd: 4.0, evlNum: 54401, zhzs: 3.9, pf: 7.8, cyfx: '网络搭建、网络维护、综合布线、系统管理、网络安全', zzzs: 'CCNA/华为HCIA、网络管理员（软考）、综合布线认证' },
  { zymc: '软件技术', xk: '计算机类', mlmc: '电子与信息', cc: '高职（专科）', myd: 3.9, evlNum: 53165, zhzs: 3.8, pf: 7.8, cyfx: '软件开发、前端开发、移动开发、软件测试、技术支持', zzzs: '软考（程序员/软件设计师）、Web前端开发（1+X）' },
  { zymc: '市场营销', xk: '工商管理类', mlmc: '财经商贸', cc: '高职（专科）', myd: 4.3, evlNum: 52580, zhzs: 4.2, pf: 8.4, cyfx: '市场推广、销售管理、品牌策划、数字营销、渠道管理', zzzs: '市场营销师、互联网营销师、数字营销认证' },
  { zymc: '电气自动化技术', xk: '自动化类', mlmc: '装备制造', cc: '高职（专科）', myd: 4.3, evlNum: 47170, zhzs: 4.2, pf: 8.5, cyfx: '电气设备维护、PLC编程、自动化产线、供配电、工控系统', zzzs: '电工证（特种作业）、PLC编程认证、电气自动化工程师' },
  { zymc: '临床医学', xk: '临床医学类', mlmc: '医药卫生', cc: '高职（专科）', myd: 4.2, evlNum: 45675, zhzs: 4.1, pf: 8.2, cyfx: '基层医疗、乡镇卫生院、社区卫生、助理医师、全科医疗', zzzs: '执业助理医师资格证、乡村医生执业证' },
  { zymc: '商务英语', xk: '语言类', mlmc: '教育与体育', cc: '高职（专科）', myd: 4.1, evlNum: 45506, zhzs: 4.0, pf: 8.0, cyfx: '外贸业务、跨境电商、商务翻译、涉外文秘、报关报检', zzzs: 'CET-4/CET-6、BEC商务英语、CATTI翻译资格、单证员' },
  { zymc: '工商企业管理', xk: '工商管理类', mlmc: '财经商贸', cc: '高职（专科）', myd: 4.1, evlNum: 41156, zhzs: 4.1, pf: 8.0, cyfx: '企业管理、行政专员、人力资源、连锁经营、创业管理', zzzs: '人力资源管理师、企业培训师、经济师（初级）' },
  { zymc: '数控技术', xk: '机械设计制造类', mlmc: '装备制造', cc: '高职（专科）', myd: 4.0, evlNum: 38579, zhzs: 3.9, pf: 8.0, cyfx: '数控编程、数控加工、模具制造、精密制造、设备调试', zzzs: '数控车/铣工（中级/高级）、CAD/CAM认证、UG编程认证' },
  { zymc: '旅游管理', xk: '旅游类', mlmc: '旅游', cc: '高职（专科）', myd: 4.1, evlNum: 32290, zhzs: 4.0, pf: 8.0, cyfx: '旅行社、导游、景区服务、酒店管理、研学旅行、会展', zzzs: '导游证（初级/中级）、旅游策划师、研学指导师' },
  { zymc: '酒店管理与数字化运营', xk: '旅游类', mlmc: '旅游', cc: '高职（专科）', myd: 4.1, evlNum: 27669, zhzs: 4.0, pf: 8.2, cyfx: '酒店管理、前厅/客房服务、餐饮管理、收益管理、数字化运营', zzzs: '酒店管理师、餐饮职业经理人、茶艺师/调酒师' },
  { zymc: '模具设计与制造', xk: '机械设计制造类', mlmc: '装备制造', cc: '高职（专科）', myd: 4.1, evlNum: 26885, zhzs: 4.1, pf: 8.0, cyfx: '模具设计、模具制造、数控加工、产品造型、3D打印', zzzs: '模具设计师（中级/高级）、CAD/CAM认证、数控认证' },
  { zymc: '应用电子技术', xk: '电子信息类', mlmc: '电子与信息', cc: '高职（专科）', myd: 4.0, evlNum: 25716, zhzs: 3.9, pf: 7.8, cyfx: '电子设备维护、电路设计、PCB设计、嵌入式开发、产品测试', zzzs: '电子工程师、PCB设计认证、嵌入式系统认证' },
  { zymc: '电子信息工程技术', xk: '电子信息类', mlmc: '电子与信息', cc: '高职（专科）', myd: 4.0, evlNum: 22532, zhzs: 3.9, pf: 7.8, cyfx: '电子信息产品、通信设备、信号处理、嵌入式、技术支持', zzzs: '电子工程师、嵌入式系统认证、通信工程师' },
  { zymc: '大数据与财务管理', xk: '财务会计类', mlmc: '财经商贸', cc: '高职（专科）', myd: 4.2, evlNum: 21845, zhzs: 4.2, pf: 8.3, cyfx: '财务管理、出纳、资产管理、财务分析、报税', zzzs: '初级会计师、财务管理师、智能财税（1+X）' },
  { zymc: '道路与桥梁工程技术', xk: '道路运输类', mlmc: '交通运输', cc: '高职（专科）', myd: 4.4, evlNum: 21534, zhzs: 4.3, pf: 8.6, cyfx: '道路工程、桥梁工程、施工测量、试验检测、养护管理', zzzs: '施工员、二级建造师（公路）、试验检测师、测量员' },
  { zymc: '药学', xk: '药学类', mlmc: '医药卫生', cc: '高职（专科）', myd: 4.2, evlNum: 20365, zhzs: 4.1, pf: 8.3, cyfx: '药品生产、药品检验、药房管理、医药代表、药品注册', zzzs: '执业药师、药物制剂工、GMP认证' },
  { zymc: '小学语文教育', xk: '教育类', mlmc: '教育与体育', cc: '高职（专科）', myd: 4.3, evlNum: 20073, zhzs: 4.2, pf: 8.5, cyfx: '小学语文教师、教育培训、教育管理、文案编辑、公务员', zzzs: '教师资格证（小学）、普通话等级证书（二甲以上）' },
  { zymc: '艺术设计', xk: '艺术设计类', mlmc: '文化艺术', cc: '高职（专科）', myd: 4.1, evlNum: 19609, zhzs: 4.0, pf: 8.0, cyfx: '平面设计、广告设计、包装设计、品牌设计、插画', zzzs: 'Adobe认证设计师、平面设计师、1+X数字媒体交互设计' },
  { zymc: '动漫制作技术', xk: '计算机类', mlmc: '电子与信息', cc: '高职（专科）', myd: 3.8, evlNum: 19125, zhzs: 3.7, pf: 7.5, cyfx: '二维/三维动画、游戏美术、影视特效、角色设计、动漫IP', zzzs: 'Adobe认证、3ds Max/Maya认证、动画师认证' },
  { zymc: '国际经济与贸易', xk: '经济贸易类', mlmc: '财经商贸', cc: '高职（专科）', myd: 4.2, evlNum: 18941, zhzs: 4.1, pf: 8.2, cyfx: '外贸业务、报关报检、国际物流、跨境电商、外贸单证', zzzs: '报关员、报检员、外贸单证员、跨境电商B2B数据运营' },
  { zymc: '环境艺术设计', xk: '艺术设计类', mlmc: '文化艺术', cc: '高职（专科）', myd: 4.1, evlNum: 18598, zhzs: 4.0, pf: 8.0, cyfx: '室内设计、景观设计、软装设计、展示设计、装修施工', zzzs: '室内设计师（初级/中级）、CAD认证、3ds Max认证' },
  { zymc: '小学英语教育', xk: '教育类', mlmc: '教育与体育', cc: '高职（专科）', myd: 4.2, evlNum: 16926, zhzs: 4.1, pf: 8.3, cyfx: '小学英语教师、教育培训、双语幼儿园、翻译、外贸', zzzs: '教师资格证（小学）、普通话等级证书、CET-6/TEM-4' },
  { zymc: '法律事务', xk: '法律实务类', mlmc: '公安与司法', cc: '高职（专科）', myd: 4.2, evlNum: 16878, zhzs: 4.2, pf: 8.2, cyfx: '法律辅助、法务助理、书记员、公证辅助、社区矫正', zzzs: '法律职业资格证（法考）、基层法律服务工作者' },
  { zymc: '广告艺术设计', xk: '艺术设计类', mlmc: '文化艺术', cc: '高职（专科）', myd: 4.1, evlNum: 16180, zhzs: 4.0, pf: 8.0, cyfx: '广告设计、品牌策划、商业插画、包装设计、营销创意', zzzs: 'Adobe认证设计师、广告设计师、品牌策划师' },
  { zymc: '建筑装饰工程技术', xk: '建筑设计类', mlmc: '土木建筑', cc: '高职（专科）', myd: 4.1, evlNum: 15198, zhzs: 4.0, pf: 8.0, cyfx: '装饰设计、装修施工、室内设计、材料管理、工程监理', zzzs: '室内设计师、施工员、CAD/BIM认证、装饰装修工' },
  { zymc: '医学检验技术', xk: '医学技术类', mlmc: '医药卫生', cc: '高职（专科）', myd: 4.3, evlNum: 14070, zhzs: 4.2, pf: 8.5, cyfx: '医院检验科、疾控中心、血站、第三方检验、医疗器械', zzzs: '医学检验技师（士）、PCR上岗证、生物安全培训证' },
  { zymc: '应用英语', xk: '语言类', mlmc: '教育与体育', cc: '高职（专科）', myd: 4.1, evlNum: 12980, zhzs: 4.0, pf: 8.0, cyfx: '外贸、跨境电商、商务翻译、涉外文秘、酒店/旅游', zzzs: 'CET-4/CET-6、BEC商务英语、CATTI翻译资格、单证员' },
  { zymc: '机械设计与制造', xk: '机械设计制造类', mlmc: '装备制造', cc: '高职（专科）', myd: 4.1, evlNum: 12881, zhzs: 4.0, pf: 8.0, cyfx: '机械设计、机械加工、数控编程、模具设计、设备管理', zzzs: '机械工程师（助理）、CAD/CAM认证、数控车/铣工' },
  { zymc: '口腔医学', xk: '临床医学类', mlmc: '医药卫生', cc: '高职（专科）', myd: 4.4, evlNum: 12866, zhzs: 4.3, pf: 8.7, cyfx: '口腔诊所、口腔医院、口腔修复、口腔技师、口腔器械销售', zzzs: '口腔执业助理医师、口腔修复体制作工' },
  { zymc: '应用化工技术', xk: '化工技术类', mlmc: '生物与化工', cc: '高职（专科）', myd: 4.3, evlNum: 12407, zhzs: 4.2, pf: 8.3, cyfx: '化工生产、化工分析、安全环保、化工品检测、制药', zzzs: '化工总控工、化学检验员、危险化学品安全作业证' },
  { zymc: '人力资源管理', xk: '公共管理类', mlmc: '公共管理与服务', cc: '高职（专科）', myd: 4.3, evlNum: 11908, zhzs: 4.2, pf: 8.3, cyfx: '招聘、薪酬福利、培训、员工关系、HRBP、劳务派遣', zzzs: '人力资源管理师（四级/三级）、企业培训师' },
  { zymc: '关务与外贸服务', xk: '经济贸易类', mlmc: '财经商贸', cc: '高职（专科）', myd: 4.1, evlNum: 10720, zhzs: 4.0, pf: 8.0, cyfx: '报关、报检、外贸单证、国际货代、关务合规', zzzs: '报关员、关务水平证书、外贸单证员、AEO内审员' },
  { zymc: '医学影像技术', xk: '医学技术类', mlmc: '医药卫生', cc: '高职（专科）', myd: 4.1, evlNum: 10392, zhzs: 4.1, pf: 8.3, cyfx: '医院影像科、CT/MRI/超声技师、放疗技师、医疗器械公司', zzzs: '放射医学技师（士）、大型医用设备上岗证、辐射安全培训证' },
  { zymc: '畜牧兽医', xk: '畜牧业类', mlmc: '农林牧渔', cc: '高职（专科）', myd: 4.5, evlNum: 10332, zhzs: 4.5, pf: 8.8, cyfx: '养殖场、动物医院、畜牧站、饲料/兽药公司、检疫', zzzs: '执业兽医师、动物疫病防治员、家畜繁殖员' },
  { zymc: '汽车电子技术', xk: '汽车制造类', mlmc: '装备制造', cc: '高职（专科）', myd: 4.1, evlNum: 9936, zhzs: 4.0, pf: 8.0, cyfx: '汽车电子、新能源汽车、车载网络、汽车诊断、智能驾驶', zzzs: '汽车维修工（中级/高级）、电工证、新能源汽车维修认证' },
  { zymc: '国际商务', xk: '经济贸易类', mlmc: '财经商贸', cc: '高职（专科）', myd: 4.1, evlNum: 9816, zhzs: 4.1, pf: 8.0, cyfx: '外贸业务、跨境电商、国际货代、商务谈判、跨国企业', zzzs: '外贸单证员、报关员、跨境电商B2B/B2C运营认证' },
];

const pageSize = 10;

function Speciality() {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    let data = specialtyData;
    if (searchText.trim()) {
      data = data.filter(
        item =>
          item.zymc.includes(searchText.trim()) ||
          item.xk.includes(searchText.trim()) ||
          item.mlmc.includes(searchText.trim())
      );
    }
    const groupA = data.filter(item => item.cc === '本科');
    const groupB = data.filter(item => item.cc === '本科（职业教育）');
    const groupC = data.filter(item => item.cc === '高职（专科）');
    const result = [];
    const maxLen = Math.max(groupA.length, groupB.length, groupC.length);
    for (let i = 0; i < maxLen; i++) {
      if (i < groupA.length) result.push(groupA[i]);
      if (i < groupB.length) result.push(groupB[i]);
      if (i < groupC.length) result.push(groupC[i]);
    }
    return result;
  }, [searchText]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const currentPageData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const renderStars = (score) => {
    const full = Math.floor(score);
    const half = score - full >= 0.5 ? 1 : 0;
    return (
      <span className="text-primary text-[13px]">
        {'★'.repeat(full)}{half ? '★' : ''}{'☆'.repeat(5 - full - half)}
        <span className="text-muted-foreground ml-1.5">{score.toFixed(1)}</span>
      </span>
    );
  };

  const renderRating = (score) => {
    const full = Math.floor(score / 2);
    const half = (score / 2) - full >= 0.5 ? 1 : 0;
    return (
      <span className="text-amber-500 text-[13px]">
        {'★'.repeat(full)}{half ? '★' : ''}{'☆'.repeat(5 - full - half)}
        <span className="text-foreground ml-1.5 font-semibold">{score.toFixed(1)}</span>
      </span>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <div className="flex-1">
        <div className="mx-auto py-10" style={{ width: '1180px' }}>
          <div className="mb-8">
            <img src="/images/dongcha.png" alt="洞察" className="w-full rounded-2xl" />
          </div>

          <div className="mb-8 p-8 rounded-2xl bg-card border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              <span className="w-1 h-6 rounded-full inline-block align-middle mr-3 bg-primary" />
              专业查询
            </h2>
            <div className="flex items-center gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="输入专业名称、专业类或专业大类进行搜索"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="outline-none px-5 py-3 text-base w-full rounded-xl transition-all duration-200 border border-primary/25 text-foreground bg-background pr-[50px]"
                />
                <svg
                  viewBox="0 0 20 20"
                  className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-primary/50"
                  fill="none" stroke="currentColor" strokeWidth="1.5"
                >
                  <circle cx="8.5" cy="8.5" r="7" /><path d="M13.5 13.5L18 18" strokeLinecap="round" />
                </svg>
              </div>
              <button
                onClick={handleSearch}
                className="px-8 py-3 rounded-xl text-base font-medium transition-all duration-200 border-none cursor-pointer bg-primary text-primary-foreground shadow-md hover:-translate-y-px hover:shadow-lg">
                查询
              </button>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="text-sm text-muted-foreground">热门搜索：</span>
              {['计算机科学与技术', '临床医学', '法学', '人工智能'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => { setSearchText(tag); setCurrentPage(1); }}
                  className="px-3 py-1 text-sm rounded-full cursor-pointer border-none transition-all duration-150 text-primary bg-primary/6 hover:bg-primary/12">
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {currentPageData.map((item, i) => (
              <div
                key={i}
                className="flex rounded-xl p-5 transition-all duration-200 cursor-pointer bg-card border border-border shadow-sm hover:-translate-y-0.5 hover:shadow-md hover:border-primary/25">
                <div className="flex-1 min-w-0">
                  <div className="flex mb-2">
                    <span className="text-xs font-medium flex-shrink-0 w-20 text-muted-foreground">专业名称</span>
                    <a href="#" className="text-sm font-semibold text-primary hover:underline no-underline">{item.zymc}</a>
                  </div>
                  <div className="flex mb-2">
                    <span className="text-xs font-medium flex-shrink-0 w-20 text-muted-foreground">专业类</span>
                    <span className="text-sm text-foreground">{item.xk}</span>
                  </div>
                  <div className="flex mb-2">
                    <span className="text-xs font-medium flex-shrink-0 w-20 text-muted-foreground">专业大类</span>
                    <span className="text-sm text-foreground">{item.mlmc}</span>
                  </div>
                  <div className="flex mb-2">
                    <span className="text-xs font-medium flex-shrink-0 w-20 text-muted-foreground">学历层次</span>
                    <span className="text-sm text-foreground">{item.cc}</span>
                  </div>
                  <div className="flex mb-2">
                    <span className="text-xs font-medium flex-shrink-0 w-20 text-muted-foreground">综合满意度</span>
                    <span>{renderStars(item.myd)}</span>
                  </div>
                  <div className="flex mb-2">
                    <span className="text-xs font-medium flex-shrink-0 w-20 text-muted-foreground">评价人数</span>
                    <span className="text-sm text-foreground">{item.evlNum.toLocaleString()}</span>
                  </div>
                  <div className="flex mb-2">
                    <span className="text-xs font-medium flex-shrink-0 w-20 text-muted-foreground">专业评分</span>
                    <span>{renderRating(item.pf)}</span>
                  </div>
                  <div className="flex mb-2">
                    <span className="text-xs font-medium flex-shrink-0 w-20 text-muted-foreground">从业方向</span>
                    <span className="text-sm text-foreground leading-relaxed">{item.cyfx}</span>
                  </div>
                  <div className="flex mb-2">
                    <span className="text-xs font-medium flex-shrink-0 w-20 text-muted-foreground">资质证书</span>
                    <span className="text-sm text-foreground leading-relaxed">{item.zzzs}</span>
                  </div>
                </div>
              </div>
            ))}

            {currentPageData.length === 0 && (
              <div className="py-16 text-center rounded-2xl bg-card border border-border shadow-sm text-muted-foreground">
                <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto mb-4 text-primary/20" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                </svg>
                <p className="text-base">未找到相关专业，请尝试其他关键词</p>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
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
                  className="w-10 h-10 text-sm rounded-lg border-none cursor-pointer transition-all duration-150 font-normal border border-border bg-card text-foreground"
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

      <Footer />
    </div>
  );
}

export default Speciality;
