import TemplateCard from '../components/TemplateCard';
import { FiUpload, FiPlus, FiGrid, FiList } from 'react-icons/fi';

export default function TemplatesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="profile-header">
        <div>
          <h2 className="text-responsive-xl font-bold text-gray-900 mb-2">Portfolio Templates</h2>
          <p className="text-gray-600">Select a premium template or create your own to showcase your work.</p>
        </div>
        <div className="flex items-center space-x-2">
            <button className="p-2 bg-white border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-100">
                <FiList />
            </button>
            <button className="p-2 bg-blue-600 text-white rounded-xl">
                <FiGrid />
            </button>
        </div>
      </div>

      {/* Creation/Import Section */}
      <div className="spacing-section">
        <div className="section-header">
          <h3 className="section-title">
            Get Started
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <FiPlus className="text-2xl text-blue-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">Create Your Own</h3>
                    </div>
                </div>
                <p className="text-gray-500 mb-4 text-sm">Start with a blank canvas and build a unique portfolio that reflects your personal style.</p>
                <button className="btn-secondary w-full">Start Creating →</button>
            </div>
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <FiUpload className="text-2xl text-purple-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600">Import Template</h3>
                    </div>
                </div>
                <p className="text-gray-500 mb-4 text-sm">Upload your existing design or import from external sources.</p>
                <button className="btn-secondary w-full">Import Now →</button>
            </div>
        </div>
      </div>

      {/* Premium Templates Section */}
      <div className="spacing-section">
        <div className="section-header">
          <h3 className="section-title">
            Premium Templates
          </h3>
          <p className="text-gray-500 text-sm">Handcrafted designs with futuristic aesthetics</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
        </div>
      </div>
    </>
  );
}
