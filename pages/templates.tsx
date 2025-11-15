import TemplateCard from '../components/TemplateCard';
import { FiUpload, FiPlus } from 'react-icons/fi';

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Profile Templates</h2>
        <p className="text-gray-500">Select a premium template or create your own to showcase your work</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <p className="text-sm text-blue-600 mb-2">TEMPLATE CREATION</p>
          <div className="flex items-center gap-3 mb-4 text-blue-700">
            <FiPlus className="text-xl" />
            <h3 className="text-lg font-semibold">Create Your Own</h3>
          </div>
          <p className="text-gray-500 mb-4">Start with a blank canvas and build a unique portfolio that reflects your personal style.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Start Creating →</button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <p className="text-sm text-blue-600 mb-2">IMPORT OPTION</p>
          <div className="flex items-center gap-3 mb-4 text-blue-700">
            <FiUpload className="text-xl" />
            <h3 className="text-lg font-semibold">Import Template</h3>
          </div>
          <p className="text-gray-500 mb-4">Upload your existing design or import from external sources.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Import Now →</button>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-1">Premium Templates</h3>
      <p className="text-gray-500 mb-4">Handcrafted designs with futuristic aesthetics</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
        <TemplateCard />
      </div>
    </div>
  );
}
