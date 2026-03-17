import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  User, 
  Briefcase, 
  Heart, 
  Mail, 
  Github, 
  Twitter, 
  MessageSquare,
  ExternalLink,
  ChevronRight,
  Code,
  Palette,
  Layout,
  Smartphone,
  Music,
  Zap,
  Book,
  Gamepad2
} from 'lucide-react';
import avatar2d from './assets/2d.png';
import avatar3d from './assets/3d.png';
import paodaoshushu from './assets/paodaoshushu.png';

// --- Components ---

const Navbar = ({ activeTab, setActiveTab, onMailClick }: { activeTab: string, setActiveTab: (tab: string) => void, onMailClick: () => void }) => {
  const tabs = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'about', label: '关于我', icon: User },
    { id: 'works', label: '我的作品', icon: Briefcase },
    { id: 'hobbies', label: '我的爱好', icon: Heart },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-effect neo-border neo-shadow rounded-2xl px-4 py-2 flex items-center gap-2 md:gap-6 whitespace-nowrap">
        <div className="flex items-center gap-1 md:gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === tab.id 
                  ? 'bg-black text-white neo-shadow' 
                  : 'hover:bg-black/5 text-black/70'
              }`}
            >
              <tab.icon size={16} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
        <div onClick={onMailClick} className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center text-white neo-border neo-shadow cursor-pointer hover:scale-105 transition-transform">
          <Mail size={20} />
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onNext, onAbout, onWelcomeClick }: { onNext: () => void, onAbout: () => void, onWelcomeClick: () => void }) => {
  return (
    <div className="min-h-screen pt-20 pb-20 px-6 flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto bg-grid-pattern">
      {/* Welcome tag */}
      <div 
        onClick={onWelcomeClick}
        className="absolute top-10 left-10 bg-blue-400 text-white px-4 py-1 rounded-full text-sm font-bold cursor-pointer hover:scale-110 transition-transform"
      >
        欢迎来到Easen的小宇宙！
      </div>

      <div className="md:w-1/2 flex flex-col items-start z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold mb-6 leading-relaxed tracking-tight"
        >
          我是 <span className="bg-blue-400 text-white px-4 py-1 rounded-full transform -rotate-1 shadow-lg hover:scale-110 hover:shadow-xl hover:bg-blue-500 transition-all duration-300">Easen</span>，<br />
          一名正在求职的<span className="bg-yellow-400 text-white px-4 py-1 rounded-full transform rotate-1 shadow-lg hover:scale-110 hover:shadow-xl hover:bg-yellow-500 transition-all duration-300">年轻人</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-black/70 max-w-md mb-10 leading-relaxed tracking-wide"
        >
          这是我独立从零搭建的个人网站，正在不断更新中......
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <button onClick={onAbout} className="bg-black text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow">
            了解我
          </button>
          <button 
            onClick={onNext}
            className="bg-white text-black px-8 py-4 rounded-xl font-bold border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
          >
            查看作品
          </button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="md:w-1/2 flex justify-center"
      >
        <div className="w-64 h-96 md:w-80 md:h-[500px] bg-[#FAF9F6] rounded-2xl overflow-hidden relative group shadow-2xl border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-gray-300" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E')" }}>
          {/* Hanging hole */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-4 bg-black rounded-full flex items-center justify-center">
            <div className="w-6 h-2 bg-[#FAF9F6] rounded-full shadow-inner"></div>
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 pt-12">
            <img 
              src={avatar2d} 
              alt="Easen" 
              className="w-48 h-48 object-contain p-2 image-hover-effect"
            />
            
            {/* Handwritten signature */}
            <div className="mt-4 text-2xl font-bold italic text-gray-700 transform -rotate-3">
              Easen
            </div>
            
            {/* Issued by text */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-500">
              ISSUED BY: EASEN'S ONLINE LAB
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  const stats = [
    { label: '15+ 年经验', icon: Briefcase, color: 'bg-brand-blue' },
    { label: '100+ 成功项目', icon: Heart, color: 'bg-brand-pink' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative flex justify-center items-center"
        >
          {/* Gradient glow background */}
          <div className="aspect-square bg-gradient-to-br from-pink-300/30 to-blue-400/30 rounded-full absolute inset-0 blur-xl"></div>
          
          {/* Avatar container with breathing effect */}
          <div className="aspect-square bg-blue-400 rounded-full neo-border neo-shadow overflow-hidden p-8 relative z-10" style={{ animation: 'breathe 3s ease-in-out infinite' }}>
            <img 
              src={avatar3d} 
              alt="易哲豪 Easen" 
              className="w-full h-full object-cover rounded-full neo-border"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            关于我 <span className="bg-brand-blue text-white px-3 py-1 rounded-full">About Me</span>
          </h2>
          <p className="text-lg text-black/70 mb-8 leading-relaxed">
            我出生于 2003 年 4月，在深圳长大，毕业于西南科技大学。我的第一份工作是国际物流业务员，在那里学习了物流行业客户开发、跨方协调、订单全流程运营实战经验，成功开发 10 + 核心客户并拿到了季度新客户王的奖项。具备优秀的逻辑思维、数据分析能力与快速学习能力，英语六级可支撑跨境业务沟通，能高效对接需求、推进项目落地，适配多岗位的能力要求与工作节奏，可快速融入团队并创造价值。
          </p>
          <p className="text-lg text-black/70 mb-8 leading-relaxed">
            GAP期间，我正不断学习新的知识：熟练掌握了 Trae 引擎、AI 生图生视频工具、Solidworks 等技术工具，独立完成了小游戏开发、搭建个人网页等作品。
          </p>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-blue rounded-xl neo-border neo-shadow flex items-center justify-center shrink-0">
                <Briefcase size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl">国际物流业务员</h4>
                <p className="text-black/60">成功开发 10+ 核心客户，获得季度新客户王奖项</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-pink rounded-xl neo-border neo-shadow flex items-center justify-center shrink-0">
                <Code size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl">技术技能</h4>
                <p className="text-black/60">Trae 引擎、AI 生图生视频工具、Solidworks、React 开发</p>
              </div>
            </div>
          </div>

          <button onClick={() => window.open('src/assets/易哲豪简历-互联网3.15.pdf', '_blank')} className="bg-black text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 neo-shadow neo-shadow-hover">
            <User size={20} />
            查看简历
          </button>
        </motion.div>
      </div>

      {/* ID Card section inspired by the image */}
      <div className="mt-24 bg-white neo-border neo-shadow rounded-3xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 aspect-[3/4] bg-brand-green neo-border neo-shadow rounded-2xl p-6 relative">
            <div className="bg-white neo-border rounded-xl p-4 h-full flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-6">
                <span className="font-bold text-xs uppercase tracking-widest">ID CARD</span>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              <div className="w-32 h-32 bg-gray-200 rounded-full neo-border mb-6 overflow-hidden">
                <img src={avatar3d} alt="易哲豪 Easen" className="w-full h-full object-cover" />
              </div>
              <div className="w-full space-y-3">
                <div className="h-4 bg-brand-yellow neo-border rounded w-full"></div>
                <div className="h-4 bg-brand-blue neo-border rounded w-3/4"></div>
                <div className="h-4 bg-brand-pink neo-border rounded w-1/2"></div>
              </div>
              <div className="mt-auto w-full pt-4 border-t-2 border-dashed border-black">
                <div className="flex justify-between items-center">
                  <div className="w-16 h-8 bg-black/10 rounded"></div>
                  <div className="w-8 h-8 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-pink rounded-full neo-border neo-shadow flex items-center justify-center">
              😊
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl font-bold mb-6">我的身份标签</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {
                [
                  { label: '姓名', value: '易哲豪 Easen', color: 'bg-brand-yellow' },
                  { label: '专业/背景', value: '材料科学与工程', color: 'bg-brand-blue' },
                  { label: '核心技能', value: 'AI应用，业务增长思维', color: 'bg-brand-pink' },
                  { label: '爱好', value: '音乐 游戏 剪辑', color: 'bg-brand-green' },
                ].map((item, i) => (
                  <div key={i} className={`${item.color} neo-border neo-shadow p-4 rounded-xl`}>
                    <span className="text-xs uppercase font-bold opacity-70">{item.label}</span>
                    <p className="text-xl font-bold">{item.value}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const projects = [
    {
      title: '跑刀鼠鼠',
      category: 'HTML游戏',
      color: 'bg-brand-purple',
      image: paodaoshushu
    },
    {
      title: '电子阳痿拯救器',
      category: '工具应用',
      color: 'bg-brand-green',
      image: paodaoshushu
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
          来瞧瞧我的作品吧！
        </h2>
        <p className="text-black/60 max-w-xl mx-auto">
          这里展示了我近期的一些作品，正在不断更新中
        </p>
      </div>

      <div className="space-y-12">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white neo-border neo-shadow rounded-3xl overflow-hidden flex flex-col md:flex-row"
          >
            <div className={`p-8 md:p-12 flex-1 flex flex-col justify-center ${i === 0 ? 'cursor-pointer' : ''}`} onClick={() => i === 0 && window.open('https://111ez-yzh.itch.io/paodaoshushudemo', '_blank')}>
              <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">
                {project.category}
              </span>
              <h3 className={`text-3xl font-bold mb-4 ${i === 0 ? 'group-hover:text-brand-blue transition-colors cursor-pointer' : ''}`}>
                {project.title}
              </h3>
              <p className="text-black/60 mb-8">
                {i === 0 
                  ? '由"三角洲行动"激发的灵感，独立设计的放置类小游戏。从设计到发布全部独立完成。'
                  : '喜欢的游戏没意思了？想玩同样类型的游戏？最近游戏圈什么游戏热度最高？不用担心，我来拯救你！'
                }
              </p>
              {i === 0 && (
                <button onClick={(e) => {e.stopPropagation(); window.open('https://github.com/111Ez-yzh/-demo', '_blank')}} className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all px-6 py-3 rounded-xl bg-black text-white hover:bg-brand-blue hover:scale-105 hover:shadow-xl transition-all duration-300">
                  查看GitHub源码 <ExternalLink size={18} />
                </button>
              )}
            </div>
            <div className={`flex-1 ${project.color} p-8 md:p-12 flex items-center justify-center ${i === 0 ? 'cursor-pointer' : ''}`} onClick={() => i === 0 && window.open('https://111ez-yzh.itch.io/paodaoshushudemo', '_blank')}>
              <div className="w-full aspect-video bg-white neo-border neo-shadow rounded-2xl overflow-hidden relative flex items-center justify-center">
                {i === 0 ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl" />
                ) : (
                  <span className="text-4xl font-bold text-black/70">正在施工中...🚧</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Hobbies = ({ onDesignClick, onMailClick }: { onDesignClick: () => void, onMailClick: () => void }) => {
  const hobbies = [
    { title: '音乐', icon: Music, color: 'bg-red-600', desc: '独立词曲制作者！', link: 'https://music.163.com/#/song?id=1828521966' },
    { title: '剪辑', icon: Zap, color: 'bg-black', desc: '用创意点亮生活！', link: 'https://v.douyin.com/0_m1nTTXQ9c' },
    { title: '写作', icon: Book, color: 'bg-teal-500', desc: '深夜的灵感迸发！', isDesign: true },
    { title: '游戏', icon: Gamepad2, color: 'bg-slate-800', desc: '探索电子游戏的无限世界！', link: 'https://steamcommunity.com/profiles/76561199030835938/' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
          我捣鼓出来的小爱好
        </h2>
        <p className="text-black/60 max-w-xl mx-auto">
          除了工作，我还是一个充满好奇心的生活探索者。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {hobbies.map((hobby, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className={`bg-white neo-border neo-shadow rounded-3xl p-8 text-center flex flex-col items-center ${hobby.link || hobby.isDesign ? 'cursor-pointer' : ''}`}
            onClick={() => {
              if (hobby.link) {
                window.open(hobby.link, '_blank');
              } else if (hobby.isDesign) {
                onDesignClick();
              }
            }}
          >
            <div className={`w-20 h-20 ${hobby.color} text-white rounded-2xl neo-border neo-shadow flex items-center justify-center mb-6`}>
              <hobby.icon size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2">{hobby.title}</h3>
            <p className="text-black/60">{hobby.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 bg-gradient-to-b from-slate-900 via-indigo-900 to-slate-900 neo-border neo-shadow rounded-3xl p-12 text-center overflow-hidden relative" style={{ animation: 'breathe 4s ease-in-out infinite' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,51,234,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)]"></div>
        </div>
        <div className="relative z-10">
          <div className="overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <h3 className="text-4xl font-bold mb-4 inline-block text-white">Get in touch</h3>
              <span className="mx-8 text-4xl font-bold text-white">✨</span>
              <h3 className="text-4xl font-bold mb-4 inline-block text-white">Get in touch</h3>
              <span className="mx-8 text-4xl font-bold text-white">✨</span>
              <h3 className="text-4xl font-bold mb-4 inline-block text-white">Get in touch</h3>
              <span className="mx-8 text-4xl font-bold text-white">✨</span>
              <h3 className="text-4xl font-bold mb-4 inline-block text-white">Get in touch</h3>
              <span className="mx-8 text-4xl font-bold text-white">✨</span>
            </div>
          </div>
          <p className="text-xl mb-8 max-w-lg mx-auto text-white/90">
            想要联系我？点击邮件或者网页底部有联系方式哦~
          </p>
          <button onClick={onMailClick} className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-xl neo-shadow neo-shadow-hover hover:bg-indigo-100 transition-colors">
            发送邮件
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ onWeChatClick, setActiveTab }: { onWeChatClick: () => void, setActiveTab: (tab: string) => void }) => {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-display font-bold">Easen 的世界</span>
            </div>
            <p className="text-white/60 max-w-sm mb-8">
              一个融合创意、技术与设计的个人空间。在这里，我们探索数字世界的无限可能。
            </p>
            <div className="flex gap-4 relative">
              <button 
                onClick={onWeChatClick}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors relative group cursor-pointer"
                title="复制微信"
              >
                <MessageSquare size={20} />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  复制微信
                </span>
              </button>
              <a href="https://github.com/111Ez-yzh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-black transition-colors relative group">
                <Github size={20} />
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  前往github主页
                </span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6">快速链接</h4>
            <ul className="space-y-4 text-white/60">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors">首页</button></li>
              <li><button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">关于我</button></li>
              <li><button onClick={() => setActiveTab('works')} className="hover:text-white transition-colors">我的作品</button></li>
              <li><button onClick={() => setActiveTab('hobbies')} className="hover:text-white transition-colors">我的爱好</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">联系方式</h4>
            <ul className="space-y-4 text-white/60">
              <li>harryyzh@icloud.com</li>
              <li>微信：_111Ez1319</li>
              <li>+86 188 2334 3580</li>
              <li>中国，深圳</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 text-center text-white/40 text-sm">
          © 2026 Easen 的世界
        </div>
      </div>
    </footer>
  );
};

const DesignModal = ({ onClose, onRestart }: { onClose: () => void, onRestart: () => void }) => {
  const [showGlitch, setShowGlitch] = useState(false);
  const [showRestart, setShowRestart] = useState(false);

  const novelText = `忒修斯之船

“医生，最近我感觉记忆出了问题……头痛得像有千万根量子针在突触里乱钻。”
我是一名三级历史教师，第一次走进这座悬浮在云层之上的“永恒诊所”。诊室由单向量子玻璃隔开，外面是永不熄灭的霓虹巨幕，上面滚动着同一句话：
【更换即永生　忠诚即自由】
医生坐在我对面，瞳孔里闪烁着淡蓝色的数据流——那是实时意识监控的标志。他声音经过神经滤波器处理，冰冷得没有一丝起伏。
“症状从何时开始？”
“上次车祸之后。”我咽了口唾沫，金属喉结发出轻微的摩擦音，“他们赔了全额仿生神经陶瓷，但我选了最廉价的‘工业级量子合金脑’。谁知道……里面塞进了太多不属于我的东西。”
医生微微偏头，瞳孔里数据流加速滚动：“赔偿额度明明可以覆盖S级神经陶瓷+全突触量子纠缠备份，为什么选金属？”
我苦笑，声音带着合金共振的金属味：“医生，你又不是不知道。现在黑市记忆替换一次要三百万信用点，金属脑只需要三十万。反正脑壳外面看不见，谁管里面装的是什么垃圾？”
他点头，像在确认什么，又像在给我的脑内监控程序打标签。
“那些错乱记忆……具体内容？”
我犹豫了足足十七秒，脑内警报灯疯狂闪烁——那是植入的“反自由意识检测模块”在预警。
“……反自由意识的。”
诊室瞬间安静。医生缓缓举起个人终端，屏幕上跳出密密麻麻的《自由意识忠诚协议》第47条：任何反自由内容一经发现，立即执行“深度灵魂清洗”。
“说吧。”他懒洋洋地靠向椅背，“这里反自由的内容，比正统历史档案库还多。该记的我都记好了——接下来，就是听故事时间。”
我深吸一口气，声音开始颤抖：
“在我的记忆里，自由意识根本不是救世主。它是公元2247年，一个叫卡尔·维特的疯子神经科学家创立的邪教。他掌握了‘量子记忆纠缠植入技术’——可以把虚假记忆像病毒一样通过纳米突触直接写入全人类大脑。
他先在十万信徒脑内植入‘72小时后第三次世界大战必然爆发’的深度伪记忆。恐慌像量子纠缠一样瞬间传遍全球。政客、将军、平民……所有人同时‘亲眼看见’核弹落下的幻觉。
然后他‘拯救’了世界——用轨道激光屠杀拒绝植入者，用神经瘟疫清扫反抗区。自由3年，全球人口从92亿被‘优化’到31亿。城市变成焚尸炉，河流漂满婴儿的残骸，空气里永远是烧焦蛋白质的甜腥味。”
我的太阳穴像被纳米钻头贯穿。我看见了：母亲抱着孩子跪在街头，头盖骨被记忆改写枪打开，脑浆里直接灌入忠诚协议；看见了军队把拒绝更换器官的人活生生塞进“器官回收熔炉”，熔化的血肉顺着管道流进永生工厂。
医生忽然露出一个近乎温柔的微笑：“继续。别停。”
头痛像被一只无形的手掐断。我猛地清醒过来。
我不是历史老师。
我代号“档案员-07”，自然人派最后一名原生大脑战士。我的任务是把这段被抹杀的历史通过量子暗网散播出去，唤醒那些还保留一丝原生神经的人，让他们知道——
自由意识的“大清洗”从来不是结束，而是开始。
自由5年，只剩最后9.7亿人。维特推出“永恒协议”：只要接受全器官量子替换+记忆重写，就能获得理论上的永生。但代价是——每一次替换，都会把你上一版人格彻底覆写成“忠诚版本”。反抗者被改造成拥护者，拥护者被改造成更狂热的拥护者。
我盯着医生，咬牙切齿：“你们以为把我金属脑洗成傻子，就能让我闭嘴？错了。我记得每一具被熔化的尸体。我会把真相——”
医生忽然笑了，笑得像终于等到猎物上钩的蜘蛛。
“很好，同志。”
他站起身，隔着量子玻璃轻轻拍了拍我的肩膀——其实是激活了我脑内隐藏的后门程序。
“你可以回去了。记住，千万别把今天在这里发生的事说出去。否则……”
他没有说完，但我的金属脑已经收到警告：若泄露，将触发“灵魂熔毁协议”，把我的意识活活烧成量子噪声。
门开了。
外面站着一个脸上横贯三道激光刀疤的壮汉，代号“收割者-09”。
“怎么样，‘医生’？”刀疤咧嘴，露出满口合金牙，“他彻底信了？”
“毫无破绽。”医生摘下白大褂，露出里面植满监控纳米丝的黑色义体，“最新一代‘忒修斯记忆输送协议’已经完美闭环。他现在坚信自己是反自由意识的圣战士，而且会拼死保守这个‘秘密’——直到我们需要他把这个秘密‘泄露’给自由意识高层。”
刀疤哈哈大笑，声音在金属喉管里回荡：“老大说得对，这技术他妈的太牛逼了。他连自己是被我们绑来做‘忠诚测试’都忘了。”
医生——真正的代号“伪装者-2147”——面无表情地看着窗外永生城市的夜景。无数悬浮舱里的人正在接受每日例行的“记忆同步更新”。
“收割者，你听说过忒修斯之船吗？”
“啥？”
“古地球故事。一艘船常年航行，每一块腐烂木板都被替换。几百年后，所有部件都不是原来的了。它还是那艘船吗？”
刀疤挠挠激光疤：“当然是啊。名字没变，功能没变。外面那些换了十七次全身义体的永生人，不还是人吗？想太多的人最后都进了熔炉。”
医生低声自语，像在对空气说话：
“那人类这艘船呢？我们……还叫人类吗？”
刀疤没听见，已经转身离开。
同一时刻，地下第47层“暗影枢纽”。
收割者的个人终端亮起，一道全息投影浮现——正是刚刚那位“历史老师”的脸。
“老大，放心。他已经被我们彻底洗成武器了。脑内植入了三重量子后门：第一重让他相信自己是反抗者，第二重让他把‘真相’只告诉我们指定的目标，第三重……在他完成任务后，会自动触发自我熔毁，把所有证据烧成量子灰。”
投影里的“老大”——一个全身泡在培养液里的残破义体——缓缓点头：
“很好。他是我们打入自由意识核心议会的最后一颗棋子。等他把‘反自由记忆’散播出去，自由意识高层就会内乱。然后我们……”
他忽然抱住培养舱的边缘，剧痛像百万伏电流贯穿残存的神经。
“我……是怎么想到这个复仇计划的？”
意识断裂的瞬间，他看见了无数层嵌套的自己：

被维特最早植入恐惧记忆的信徒
被大清洗熔炉烧成灰却“复活”成拥护者的受害者
被反抗组织绑架、洗脑成卧底的永生人
现在这个只剩大脑却自以为在领导复仇的怪物……

层层叠叠，像一艘被无限拆解又无限重组的船，每一次替换都更接近彻底的非人。
培养舱门无声滑开。
“医生”走了进来，哼着不成调的电子音小曲，按下了墙上血红色的按钮。
【忒修斯覆盖协议·第1147次启动】
记忆替换程序以0.3秒完成全量子突触重写。
“又坏掉了一块木板。”医生轻声说，声音里带着近乎怜悯的疲惫。
实验室中央的显示屏上，进度条走完100%。
新的人格睁开眼。
他揉了揉金属太阳穴，喃喃自语：
“医生……最近我感觉我的记忆出了问题……头痛得像有千万根量子针在突触里乱钻……”`;

  useEffect(() => {
    setTimeout(() => {
      setShowGlitch(true);
      setTimeout(() => {
        setShowGlitch(false);
        setShowRestart(true);
      }, 500);
    }, 1000);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div className="absolute inset-0 bg-stone-100 bg-grid-pattern"></div>
      
      <div 
        className="absolute inset-0"
        onClick={onClose}
      ></div>

      <div className="relative z-10 w-full max-w-4xl max-h-[80vh] overflow-y-auto p-8 mx-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">忒修斯之船</h1>
        <div className={`font-bold text-gray-800 text-lg leading-relaxed whitespace-pre-wrap relative ${showGlitch ? 'animate-glitch' : ''}`}>
          {novelText.replace('忒修斯之船\n\n', '')}
        </div>

        {showRestart && (
          <motion.div className="mt-8 text-center">
            <button
              onClick={onRestart}
              className="bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-xl font-bold text-xl neo-shadow hover:scale-105 transition-all"
            >
              重新启动
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// --- Main App ---

const randomMessages = [
  '泥嚎！我是 Easen，很高兴认识你~',
  '(*´▽｀)ノノ 欢迎来到我的奇妙小世界！',
  '别点啦，再点《跑刀鼠鼠》就要提前上线了',
  '比起修 Bug，我更喜欢和你聊天~ (●\'◡\'●)',
  '保持热爱，肆意生长。🌱',
  '生活原本沉闷，但跑起来就有风！🏃‍♂️',
  '被你发现这个隐藏按钮了！握个手吧 🤝'
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [randomToastMessage, setRandomToastMessage] = useState<string | null>(null);
  const [showDesignModal, setShowDesignModal] = useState(false);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const handleMailClick = async () => {
    const email = 'harryyzh@icloud.com';
    
    try {
      await navigator.clipboard.writeText(email);
      setToastMessage('邮箱已复制，正在为您前往 QQ 邮箱');
      
      setTimeout(() => {
        window.open('https://mail.qq.com/', '_blank');
      }, 1000);
      
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
    } catch (err) {
      console.error('复制失败:', err);
      setToastMessage('复制失败，请手动复制');
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
    }
  };

  const handleWeChatClick = async () => {
    const wechatId = '_111Ez1319';
    
    try {
      await navigator.clipboard.writeText(wechatId);
      setToastMessage('已复制');
      
      setTimeout(() => {
        setToastMessage(null);
      }, 2000);
    } catch (err) {
      console.error('复制失败:', err);
      setToastMessage('复制失败，请手动复制');
      setTimeout(() => {
        setToastMessage(null);
      }, 3000);
    }
  };

  const handleWelcomeClick = () => {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    setRandomToastMessage(randomMessages[randomIndex]);
    
    setTimeout(() => {
      setRandomToastMessage(null);
    }, 2000);
  };

  const handleDesignClick = () => {
    setShowDesignModal(true);
  };

  const handleDesignModalClose = () => {
    setShowDesignModal(false);
  };

  const handleDesignModalRestart = () => {
    setShowDesignModal(false);
    setTimeout(() => {
      setShowDesignModal(true);
    }, 100);
  };

  return (
    <div className="relative selection:bg-brand-yellow selection:text-black">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} onMailClick={handleMailClick} />
      
      {/* Toast Component */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] bg-black text-white px-6 py-3 rounded-xl shadow-2xl neo-border"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Random Message Toast Component */}
      <AnimatePresence>
        {randomToastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] backdrop-blur-md bg-white/80 text-black px-6 py-4 rounded-2xl shadow-2xl neo-border max-w-md text-center"
          >
            {randomToastMessage}
          </motion.div>
        )}
      </AnimatePresence>
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'home' && <Hero onNext={() => setActiveTab('works')} onAbout={() => setActiveTab('about')} onWelcomeClick={handleWelcomeClick} />}
            {activeTab === 'about' && <About />}
            {activeTab === 'works' && <Works />}
            {activeTab === 'hobbies' && <Hobbies onDesignClick={handleDesignClick} onMailClick={handleMailClick} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onWeChatClick={handleWeChatClick} setActiveTab={setActiveTab} />

      <AnimatePresence>
        {showDesignModal && (
          <DesignModal onClose={handleDesignModalClose} onRestart={handleDesignModalRestart} />
        )}
      </AnimatePresence>
    </div>
  );
}
