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
  ExternalLink,
  ChevronRight,
  Code,
  Palette,
  Layout,
  Smartphone
} from 'lucide-react';

// --- Components ---

const Navbar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const tabs = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'about', label: '关于我', icon: User },
    { id: 'works', label: '我的作品', icon: Briefcase },
    { id: 'hobbies', label: '我的爱好', icon: Heart },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-effect neo-border neo-shadow rounded-2xl px-4 py-2 flex items-center gap-2 md:gap-6">
        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white font-bold text-xl neo-border">
          西
        </div>
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
        <div className="w-10 h-10 bg-brand-pink rounded-xl flex items-center justify-center text-black neo-border neo-shadow cursor-pointer hover:scale-105 transition-transform">
          <Mail size={20} />
        </div>
      </div>
    </nav>
  );
};

const Hero = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-8"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 bg-brand-yellow neo-border neo-shadow rounded-3xl overflow-hidden relative group">
          <img 
            src="https://picsum.photos/seed/avatar/400/400" 
            alt="Avatar" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 border-4 border-black rounded-3xl pointer-events-none"></div>
        </div>
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute -top-4 -right-4 w-16 h-16 bg-brand-pink rounded-full neo-border neo-shadow flex items-center justify-center text-2xl"
        >
          👋
        </motion.div>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-8xl font-display font-bold mb-6 leading-tight"
      >
        I'm <span className="bg-brand-pink px-4 py-1 neo-border">John Carter</span>,<br />
        a Web Designer from <span className="bg-brand-blue text-white px-4 py-1 neo-border">New York</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-black/70 max-w-2xl mb-10"
      >
        专注于打造具有视觉冲击力和极致用户体验的数字产品。
        融合新野兽派的张力与苹果设计的精致感。
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 neo-shadow neo-shadow-hover">
          <Mail size={20} />
          联系我
        </button>
        <button 
          onClick={onNext}
          className="bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 neo-border neo-shadow neo-shadow-hover"
        >
          查看作品
          <ChevronRight size={20} />
        </button>
      </motion.div>

      {/* Marquee-like section */}
      <div className="mt-24 w-full overflow-hidden py-10 border-y-2 border-black -rotate-2 bg-white">
        <div className="flex whitespace-nowrap animate-marquee gap-12 items-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-4xl font-display font-bold uppercase">UI/UX Design</span>
              <span className="w-4 h-4 bg-brand-pink rounded-full"></span>
              <span className="text-4xl font-display font-bold uppercase">Web Development</span>
              <span className="w-4 h-4 bg-brand-blue rounded-full"></span>
              <span className="text-4xl font-display font-bold uppercase">Brand Identity</span>
              <span className="w-4 h-4 bg-brand-yellow rounded-full"></span>
            </div>
          ))}
        </div>
      </div>
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
          className="relative"
        >
          <div className="aspect-square bg-brand-pink rounded-full neo-border neo-shadow overflow-hidden p-8">
            <img 
              src="https://picsum.photos/seed/about/600/600" 
              alt="About Me" 
              className="w-full h-full object-cover rounded-full neo-border"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-yellow rounded-2xl neo-border neo-shadow flex items-center justify-center -rotate-12">
            <span className="text-4xl font-bold">Creative</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Who's behind all this <span className="bg-brand-blue text-white px-3 py-1 neo-border">great work?</span>
          </h2>
          <p className="text-lg text-black/70 mb-8 leading-relaxed">
            我出生于 2000 年 5 月，在浙江的一个小村镇长大。家庭环境比较自由，家人都不会对我的选择做过多干涉。
            这导致我在肆意生长的过程中，拥有了很多复杂的成分。Anyway，欢迎来到西门的世界！
          </p>
          
          <div className="space-y-6 mb-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className={`w-12 h-12 ${stat.color} rounded-xl neo-border neo-shadow flex items-center justify-center shrink-0`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl">{stat.label}</h4>
                  <p className="text-black/60">致力于为全球客户提供顶级的数字解决方案。</p>
                </div>
              </div>
            ))}
          </div>

          <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 neo-shadow neo-shadow-hover">
            <User size={20} />
            更多关于我
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
                <img src="https://picsum.photos/seed/id/200/200" alt="ID" className="w-full h-full object-cover" />
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
              {[
                { label: '姓名', value: '西门', color: 'bg-brand-yellow' },
                { label: '专业', value: '电气工程及其自动化', color: 'bg-brand-blue text-white' },
                { label: '职业', value: 'toB 软件产品经理', color: 'bg-brand-pink' },
                { label: '爱好', value: 'B站小 UP 主', color: 'bg-brand-green' },
              ].map((item, i) => (
                <div key={i} className={`${item.color} neo-border neo-shadow p-4 rounded-xl`}>
                  <span className="text-xs uppercase font-bold opacity-70">{item.label}</span>
                  <p className="text-xl font-bold">{item.value}</p>
                </div>
              ))}
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
      title: 'Studio User Research',
      category: 'UI/UX Design',
      color: 'bg-brand-purple',
      image: 'https://picsum.photos/seed/p1/800/600'
    },
    {
      title: 'Venture Workspace App',
      category: 'Mobile Design',
      color: 'bg-brand-blue',
      image: 'https://picsum.photos/seed/p2/800/600'
    },
    {
      title: 'Agency Brand Identity',
      category: 'Branding',
      color: 'bg-brand-pink',
      image: 'https://picsum.photos/seed/p3/800/600'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
          Take a look at my <span className="bg-brand-yellow px-3 py-1 neo-border">design portfolio</span>
        </h2>
        <p className="text-black/60 max-w-xl mx-auto">
          这里展示了我近期参与的一些核心项目，涵盖了从用户研究到最终视觉呈现的全过程。
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
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
              <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold w-fit mb-4">
                {project.category}
              </span>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-brand-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-black/60 mb-8">
                深入挖掘用户痛点，通过系统化的设计语言构建高效、美观的数字体验。
              </p>
              <button className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                查看案例研究 <ExternalLink size={18} />
              </button>
            </div>
            <div className={`flex-1 ${project.color} p-8 md:p-12 flex items-center justify-center`}>
              <div className="w-full aspect-video bg-white neo-border neo-shadow rounded-2xl overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Hobbies = () => {
  const hobbies = [
    { title: '摄影', icon: Smartphone, color: 'bg-brand-pink', desc: '捕捉生活中的微小瞬间。' },
    { title: '编程', icon: Code, color: 'bg-brand-blue', desc: '用代码构建想象中的世界。' },
    { title: '设计', icon: Palette, color: 'bg-brand-yellow', desc: '探索色彩与形状的无限可能。' },
    { title: '排版', icon: Layout, color: 'bg-brand-green', desc: '让信息传递更具美感。' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
          My broad <span className="bg-brand-pink text-white px-3 py-1 neo-border">set of hobbies</span>
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
            className="bg-white neo-border neo-shadow rounded-3xl p-8 text-center flex flex-col items-center"
          >
            <div className={`w-20 h-20 ${hobby.color} rounded-2xl neo-border neo-shadow flex items-center justify-center mb-6`}>
              <hobby.icon size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2">{hobby.title}</h3>
            <p className="text-black/60">{hobby.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 bg-brand-yellow neo-border neo-shadow rounded-3xl p-12 text-center">
        <div className="w-20 h-20 bg-white neo-border neo-shadow rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Mail size={40} />
        </div>
        <h3 className="text-4xl font-bold mb-4">Get in touch</h3>
        <p className="text-xl mb-8 max-w-lg mx-auto">
          正在寻找合作伙伴或只是想打个招呼？随时欢迎联系我！
        </p>
        <button className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-xl neo-shadow neo-shadow-hover">
          发送邮件
        </button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand-pink rounded-xl flex items-center justify-center text-black font-bold text-2xl neo-border">
                西
              </div>
              <span className="text-2xl font-display font-bold">西门的世界</span>
            </div>
            <p className="text-white/60 max-w-sm mb-8">
              一个融合创意、技术与设计的个人空间。在这里，我们探索数字世界的无限可能。
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-blue transition-colors">
                <Twitter size={20} />
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-black transition-colors">
                <Github size={20} />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6">快速链接</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">首页</a></li>
              <li><a href="#" className="hover:text-white transition-colors">关于我</a></li>
              <li><a href="#" className="hover:text-white transition-colors">我的作品</a></li>
              <li><a href="#" className="hover:text-white transition-colors">我的爱好</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6">联系方式</h4>
            <ul className="space-y-4 text-white/60">
              <li>hi@ximen.world</li>
              <li>+86 123 4567 8900</li>
              <li>上海, 中国</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 text-center text-white/40 text-sm">
          © 2026 西门的世界. Made with ❤️ and Neo-Brutalism.
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="relative selection:bg-brand-yellow selection:text-black">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'home' && <Hero onNext={() => setActiveTab('works')} />}
            {activeTab === 'about' && <About />}
            {activeTab === 'works' && <Works />}
            {activeTab === 'hobbies' && <Hobbies />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Custom styles for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
