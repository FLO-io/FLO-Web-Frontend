import ProfileForm from '../components/forms/ProfileForm';
import EducationForm from '../components/forms/EducationForm';
import ExperienceForm from '../components/forms/ExperienceForm';
import CertificationForm from '../components/forms/CertificationForm';
import { FiFile, FiSave, FiEye, FiDownload, FiUpload } from 'react-icons/fi';

export default function ProfilePage() {
  return (
    <>
      {/* Page Header */}
      <div className="profile-header">
        <div>
          <h2 className="text-responsive-xl font-bold text-gray-900 mb-2">Profile Builder</h2>
          <p className="text-gray-600">Create a comprehensive professional profile</p>
        </div>
        <div className="profile-actions">
          <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl font-semibold text-sm">
            <span>👑</span>
            <span>Premium Active</span>
          </div>
          <button className="btn-secondary flex items-center space-x-2">
            <FiEye className="w-4 h-4" />
            <span>Preview</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <FiSave className="w-4 h-4" />
            <span>Save Profile</span>
          </button>
        </div>
      </div>

      {/* Resume Parser Section */}
      <div className="card-premium p-6 md:p-8 spacing-section">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <FiFile className="text-white text-lg md:text-xl" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                AI Resume Parser
                <span className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full font-semibold">
                  Premium Feature
                </span>
              </h3>
              <p className="text-gray-600 text-sm md:text-base">Automatically extract information from your resume</p>
            </div>
          </div>
          <FiDownload className="text-gray-400 text-xl hidden md:block" />
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 md:p-8 text-center bg-gray-50/50 hover:border-blue-400 hover:bg-blue-50/50 transition-all duration-300">
          <input type="file" id="resume" className="hidden" />
          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4">
            <FiUpload className="text-xl md:text-2xl text-gray-400" />
          </div>
          <label htmlFor="resume" className="btn-primary cursor-pointer inline-flex items-center space-x-2">
            <span>Choose Resume File</span>
          </label>
          <p className="text-sm text-gray-500 mt-4">
            Supports PDF, DOC, DOCX files up to 10MB
          </p>
        </div>
      </div>

      {/* Form Sections */}
      <div className="form-container">
        <div className="space-y-6 md:space-y-8">
          <ProfileForm />
          <EducationForm />
          <ExperienceForm />
          <CertificationForm />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mt-8 md:mt-12 pt-8 border-t border-gray-200">
          <button className="btn-secondary w-full md:w-auto">
            Save as Draft
          </button>
          <button className="btn-primary w-full md:w-auto">
            Publish Profile
          </button>
        </div>
      </div>
    </>
  );
}
