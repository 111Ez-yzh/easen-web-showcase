import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Play, X, Download, Phone, Mail, Music } from 'lucide-react';

function App() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showFullscreenGame, setShowFullscreenGame] = useState(false);
  const gameRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero 首屏 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-darker to-dark opacity-90"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        </div>
        
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
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 neon-glow">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3D%20tech%20portrait%20of%20a%20young%20game%20developer%20with%20neon%20blue%20and%20purple%20lighting%2C%20futuristic%20style%2C%20dark%20background&image_size=square_hd" 
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
                易哲豪 <span className="gradient-text">Easen</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                AI 游戏开发者 & 业务实战派
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                材料逻辑驱动底层架构，AI 引擎赋能游戏演化。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button 
                  className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold hover-scale"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('project')}
                >
                  立即试玩《跑刀鼠鼠》
                </motion.button>
                <motion.button 
                  className="px-8 py-4 border-2 border-primary rounded-full font-bold hover-scale"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 15px var(--primary), 0 0 30px var(--primary)' }}
                  whileTap={{ scale: 0.95 }}
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
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              核心项目
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
            
            <div className="glass-effect p-8 rounded-2xl mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
                《跑刀鼠鼠：三角洲放置 Demo》
              </h3>
              <p className="text-gray-300 mb-6">
                使用 TRAE AI IDE 从零开发的 HTML5 放置游戏。核心机制包括：跑刀收益、大红掉落、收藏馆被动、高风险地图付费。
              </p>
              
              {/* 游戏嵌入 */}
              <div className="relative mb-8 gradient-border p-1">
                <div className="bg-darker rounded-xl overflow-hidden" ref={gameRef}>
                  <iframe 
                    src="https://111ez-yzh.itch.io/paodaoshushudemo" 
                    width="100%" 
                    height="400" 
                    frameBorder="0" 
                    className="w-full h-96"
                  ></iframe>
                </div>
                <button 
                  className="absolute top-4 right-4 px-4 py-2 bg-secondary rounded-full text-sm font-medium hover-scale"
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
                  className="flex items-center gap-2 px-6 py-3 bg-darker rounded-full border border-gray-700 hover-scale"
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
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              视频自我介绍
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
            
            <div className="glass-effect p-4 rounded-2xl gradient-border">
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

      {/* 跨界业务实战 */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              跨界业务实战
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
            
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                商业思维的修罗场
              </h3>
              
              <ul className="space-y-4 text-gray-300">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 min-w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <p>独立开发 10+ 全球核心客户（美洲/中东/欧洲），证明跨文化沟通与需求洞察力。</p>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 min-w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <p>订单全流程跟进，100% 履约率，获季度“新客户开发王”。</p>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 min-w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <p>将物流中的“风险控制”与“用户留存逻辑”迁移至游戏数值设计中。</p>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 技能树 & 关于我 */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              技能树 & 关于我
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 技能树 */}
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 gradient-text">技术栈</h3>
                <div className="flex flex-wrap gap-3">
                  {['TRAE', 'HTML5/JS/Vite', 'Midjourney/SD (AI生图)', 'Solidworks (三维建模)', '英语六级'].map((skill, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-darker rounded-full border border-gray-700 hover:border-primary transition-colors"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* 关于我 */}
              <div className="glass-effect p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 gradient-text">个人故事</h3>
                <p className="text-gray-300 leading-relaxed">
                  材料系出身的理科生，擅长用逻辑拆解复杂系统，从物理实验到游戏代码，追求极致的产出效率。
                  专注于将材料科学的底层逻辑应用到游戏开发中，结合 AI 技术创造出更具深度和乐趣的游戏体验。
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 兴趣彩蛋 & 联系 */}
      <section className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
              兴趣彩蛋 & 联系
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 音乐卡片区 */}
              <div className="glass-effect p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Music className="text-secondary" size={24} />
                  <h3 className="text-xl font-bold">音乐收藏</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-darker p-4 rounded-xl flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Music size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">Spotify 播放列表</h4>
                      <p className="text-sm text-gray-400">预留链接位</p>
                    </div>
                  </div>
                  <div className="bg-darker p-4 rounded-xl flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                      <Music size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium">网易云音乐</h4>
                      <p className="text-sm text-gray-400">预留链接位</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 联系信息 */}
              <div className="glass-effect p-8 rounded-2xl">
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
                  className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-bold hover-scale"
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
      <footer className="py-10 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2026 易哲豪 Easen. 保留所有权利。</p>
        </div>
      </footer>

      {/* 视频弹窗 */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button 
              className="absolute top-4 right-4 bg-secondary rounded-full w-10 h-10 flex items-center justify-center z-10"
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