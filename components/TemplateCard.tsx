export default function TemplateCard() {
  return (
    <div className="group bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300 cursor-pointer">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-sm text-gray-400 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-2 mx-auto group-hover:shadow-md transition-all duration-300">
                <span className="text-2xl">✨</span>
            </div>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-gray-600 group-hover:text-blue-600">
          Premium
        </div>
      </div>
      <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
        Futuristic Portfolio
      </h4>
    </div>
  );
}
