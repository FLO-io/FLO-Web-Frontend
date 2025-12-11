import ActionCard from '../components/ActionCard';
import MetricCard from '../components/MetricCard';
import PortfolioCard from '../components/PortfolioCard';
import { FiUpload, FiPlus, FiCode, FiCoffee } from 'react-icons/fi';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  
  return (
    <>
      {/* Welcome Section */}
      <div className="welcome-section spacing-section">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="welcome-content">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, Designer! 👋</h2>
            <p className="text-blue-100 text-base md:text-lg font-medium">Ready to create something amazing today?</p>
          </div>
          <button 
            onClick={() => router.push('/templates')} 
            className="bg-white/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl hover:bg-white/30 transition-all duration-300 font-semibold border border-white/20 hover:scale-105 text-sm md:text-base"
          >
            Start New Project ✨
          </button>
        </div>
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      {/* Quick Actions */}
      <div className="spacing-section">
        <div className="section-header">
          <h3 className="section-title">
            Quick Actions
          </h3>
        </div>
        <div className="action-cards-grid">
          <ActionCard icon={<FiUpload />} label="Upload Assets" color="blue" onClick={() => router.push('/templates')} />
          <ActionCard icon={<FiPlus />} label="New Project" color="green" onClick={() => router.push('/templates')} />
          <ActionCard icon={<FiCode />} label="Code Editor" color="orange" />
          <ActionCard icon={<FiCoffee />} label="Take a Break" color="red" />
        </div>
      </div>

      {/* Portfolio Performance */}
      <div className="spacing-section">
        <div className="section-header">
          <h3 className="section-title">
            Portfolio Performance
          </h3>
          <select className="bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-500">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
        <div className="metrics-grid">
          <MetricCard label="Portfolio Views" value="12,847" change="+23%" />
          <MetricCard label="Visitor Engagement" value="8.4%" change="+12%" />
          <MetricCard label="Portfolio Shares" value="1,284" change="+18%" />
          <MetricCard label="Opportunities" value="24" change="+31%" />
        </div>
      </div>

      {/* Portfolio Showcase */}
      <div className="spacing-section">
        <div className="section-header">
          <h3 className="section-title">
            Your Portfolio Showcase
          </h3>
          <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm hover:underline transition-all duration-200">
            View All Projects →
          </button>
        </div>
        <div className="portfolio-grid">
          <PortfolioCard title="Modern UI Kit" views="8.2K Views" likes={342} />
          <PortfolioCard title="E-commerce Platform" views="5.7K Views" likes={198} />
          <PortfolioCard title="Dashboard Analytics" views="4.1K Views" likes={156} />
          <PortfolioCard title="Mobile App Design" views="3.8K Views" likes={124} />
          <PortfolioCard title="Brand Identity" views="2.9K Views" likes={89} />
          <PortfolioCard title="Web3 Interface" views="2.1K Views" likes={67} />
        </div>
      </div>
    </>
  );
}
