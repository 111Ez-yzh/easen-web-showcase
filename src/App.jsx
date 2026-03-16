import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Play, X, Download, Phone, Mail, Music, Menu, Home, User, Briefcase, Code, Music as MusicIcon, Contact } from 'lucide-react';

function App() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showFullscreenGame, setShowFullscreenGame] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const gameRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowNav(false);
  };

  return (
    <div className="min-h-screen bg-light text-primary">
      {/* 导航栏 */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 nav-pill px-4 py-2">
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            className="neubrutal-button bg-white px-4 py-2 rounded-full"
            onClick={() => scrollToSection('hero')}
          >
            <Home size={18} />
          </button>
          <button 
            className="neubrutal-button bg-white px-4 py-2 rounded-full"
            onClick={() => scrollToSection('about')}
          >
            <User size={18} />
          </button>
          <button 
            className="neubrutal-button bg-white px-4 py-2 rounded-full"
            onClick={() => scrollToSection('project')}
          >
            <Code size={18} />
          </button>
          <button 
            className="neubrutal-button bg-white px-4 py-2 rounded-full"
            onClick={() => scrollToSection('experience')}
          >
            <Briefcase size={18} />
          </button>
          <button 
            className="neubrutal-button bg-white px-4 py-2 rounded-full"
            onClick={() => scrollToSection('contact')}
          >
            <Contact size={18} />
          </button>
        </div>
      </nav>

      {/* Hero 首屏 */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            {/* 左侧 3D/科技感头像 */}
            <motion.div 
              className="relative animate-float"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary neubrutal-card">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3D%20portrait%20of%20a%20young%20game%20developer%20with%20clean%20background%2C%20professional%20style&image_size=square_hd" 
                  alt="易哲豪 Easen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* 右侧内容 */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                易哲豪 <span className="text-highlight-pink">Easen</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-highlight">AI 游戏开发者</span> & <span className="text-highlight">业务实战派</span>
              </h2>
              <p className="text-xl mb-8 max-w-lg font-semibold">
                材料逻辑驱动底层架构，AI 引擎赋能游戏演化。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button 
                  className="neubrutal-button bg-yellow px-8 py-4 rounded-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('project')}
                >
                  立即试玩《跑刀鼠鼠》
                </motion.button>
                <motion.button 
                  className="neubrutal-button bg-white px-8 py-4 rounded-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowVideoModal(true)}
                >
                  <Play className="inline-block mr-2" size={18} /> 观看自我介绍视频
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 核心项目区 */}
      <section id="project" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              <span className="text-highlight">核心项目</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-12"></div>
            
            <div className="neubrutal-card bg-white p-8 rounded-2xl mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-highlight-pink">《跑刀鼠鼠：三角洲放置 Demo》</span>
              </h3>
              <p className="text-lg mb-6">
                使用 TRAE AI IDE 从零开发的 HTML5 放置游戏。核心机制包括：跑刀收益、大红掉落、收藏馆被动、高风险地图付费。
              </p>
              
              {/* 游戏嵌入 */}
              <div className="relative mb-8 neubrutal-card p-4 bg-light rounded-xl overflow-hidden" ref={gameRef}>
                <iframe 
                  src="https://111ez-yzh.itch.io/paodaoshushudemo" 
                  width="100%" 
                  height="400" 
                  frameBorder="0" 
                  className="w-full h-96"
                ></iframe>
                <button 
                  className="neubrutal-button absolute top-4 right-4 px-4 py-2 bg-yellow rounded-full text-sm font-bold"
                  onClick={() => setShowFullscreenGame(true)}
                >
                  点击全屏体验
                </button>
              </div>
              
              {/* GitHub 链接 */}
              <div className="flex items-center justify-center md:justify-start">
                <a 
                  href="https://github.com/111Ez-yzh/-demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="neubrutal-button flex items-center gap-2 px-6 py-3 bg-white rounded-full"
                >
                  <Github size={20} />
                  <span>GitHub 源码地址</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 视频自我介绍 */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              <span className="text-highlight">关于我</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-12"></div>
            
            {/* ID Card */}
            <div className="id-card p-8 rounded-2xl mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary neubrutal-card">
                  <img 
                    src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20a%20young%20game%20developer%2C%20clean%20background&image_size=square_hd" 
                    alt="易哲豪 Easen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">
                    易哲豪 <span className="text-highlight-pink">Easen</span>
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-32 font-bold">专业：</div>
                      <div className="text-highlight">材料化学</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 font-bold">职位：</div>
                      <div className="text-highlight">全能开发</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 font-bold">ID 编号：</div>
                      <div>EASEN-2026</div>
                    </div>
                    <div className="mt-4">
                      <p className="text-lg">
                        材料系出身的理科生，擅长用逻辑拆解复杂系统，从物理实验到游戏代码，追求极致的产出效率。
                        专注于将材料科学的底层逻辑应用到游戏开发中，结合 AI 技术创造出更具深度和乐趣的游戏体验。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 视频自我介绍 */}
            <div className="neubrutal-card bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="text-highlight">视频自我介绍</span>
              </h3>
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="易哲豪 Easen 自我介绍" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 地球 Online：游戏进度条 */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              <span className="text-highlight">地球 Online：游戏进度条</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-12"></div>
            
            <div className="space-y-8">
              {/* 主线任务 */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  <span className="text-highlight-pink">主线任务</span> | 工作/实习
                </h3>
                <div className="space-y-6">
                  <motion.div 
                    className="timeline-item p-6 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h4 className="text-xl font-bold">全球客户开发</h4>
                      <span className="text-highlight">等级：95</span>
                    </div>
                    <p className="text-lg">独立开发 10+ 全球核心客户（美洲/中东/欧洲），证明跨文化沟通与需求洞察力。</p>
                  </motion.div>
                  
                  <motion.div 
                    className="timeline-item p-6 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h4 className="text-xl font-bold">订单管理大师</h4>
                      <span className="text-highlight">等级：100</span>
                    </div>
                    <p className="text-lg">订单全流程跟进，100% 履约率，获季度“新客户开发王”。</p>
                  </motion.div>
                </div>
              </div>
              
              {/* 支线任务 */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  <span className="text-highlight">支线任务</span> | 独立游戏开发/获奖
                </h3>
                <div className="space-y-6">
                  <motion.div 
                    className="timeline-item p-6 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h4 className="text-xl font-bold">跑刀鼠鼠：三角洲放置</h4>
                      <span className="text-highlight-pink">等级：85</span>
                    </div>
                    <p className="text-lg">使用 TRAE AI IDE 从零开发的 HTML5 放置游戏，核心机制包括：跑刀收益、大红掉落、收藏馆被动、高风险地图付费。</p>
                  </motion.div>
                  
                  <motion.div 
                    className="timeline-item p-6 rounded-xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h4 className="text-xl font-bold">游戏数值设计</h4>
                      <span className="text-highlight-pink">等级：75</span>
                    </div>
                    <p className="text-lg">将物流中的“风险控制”与“用户留存逻辑”迁移至游戏数值设计中，创造更具深度的游戏体验。</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 技能树 */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              <span className="text-highlight">技能树</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-12"></div>
            
            <div className="neubrutal-card bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-highlight-pink">技术栈</span>
              </h3>
              <div className="flex flex-wrap gap-4">
                {['TRAE', 'HTML5/JS/Vite', 'Midjourney/SD (AI生图)', 'Solidworks (三维建模)', '英语六级'].map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="neubrutal-button bg-light px-6 py-3 rounded-full"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 兴趣彩蛋 & 联系 */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              <span className="text-highlight">兴趣彩蛋 & 联系</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 音乐卡片区 */}
              <div className="neubrutal-card bg-white p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <MusicIcon className="text-secondary" size={24} />
                  <h3 className="text-xl font-bold">音乐收藏</h3>
                </div>
                <div className="space-y-4">
                  <div className="neubrutal-card bg-light p-4 rounded-xl flex items-center gap-4">
                    <div className="w-16 h-16 bg-yellow rounded-lg flex items-center justify-center neubrutal-button">
                      <MusicIcon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Spotify 播放列表</h4>
                      <p className="text-sm">预留链接位</p>
                    </div>
                  </div>
                  <div className="neubrutal-card bg-light p-4 rounded-xl flex items-center gap-4">
                    <div className="w-16 h-16 bg-pink rounded-lg flex items-center justify-center neubrutal-button">
                      <MusicIcon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">网易云音乐</h4>
                      <p className="text-sm">预留链接位</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 联系信息 */}
              <div className="neubrutal-card bg-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6">联系方式</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary" size={20} />
                    <span>18823343580</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <span>harryyzh@icloud.com</span>
                  </div>
                </div>
                <motion.button 
                  className="neubrutal-button w-full py-3 bg-yellow rounded-lg font-bold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="inline-block mr-2" size={18} /> 下载完整 PDF 简历
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-10 border-t-2 border-primary">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold">© 2026 易哲豪 Easen. 保留所有权利。</p>
        </div>
      </footer>

      {/* 视频弹窗 */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-light z-50 flex items-center justify-center p-4 neubrutal-card">
          <div className="relative w-full max-w-4xl">
            <button 
              className="neubrutal-button absolute top-4 right-4 bg-white w-10 h-10 flex items-center justify-center z-10 rounded-full"
              onClick={() => setShowVideoModal(false)}
            >
              <X size={20} />
            </button>
            <div className="video-container">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="易哲豪 Easen 自我介绍" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* 全屏游戏遮罩层 */}
      {showFullscreenGame && (
        <div className="fullscreen-overlay">
          <button className="close-btn" onClick={() => setShowFullscreenGame(false)}>
            <X size={20} />
          </button>
          <iframe 
            src="https://111ez-yzh.itch.io/paodaoshushudemo" 
            title="跑刀鼠鼠：三角洲放置 Demo"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;