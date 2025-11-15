import Image from 'next/image';

export default function TemplateCard({ title, imageSrc }: { title: string; imageSrc: string }) {
  return (
    <div className="group bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300 cursor-pointer">
      <div className="relative overflow-hidden rounded-xl mb-4">
        <Image 
          src={imageSrc} 
          alt={title} 
          width={400} 
          height={300} 
          className="object-cover w-full h-48 group-hover:scale-105 transition-transform duration-300"
          data-ai-hint="website portfolio"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-gray-600 group-hover:text-blue-600">
          Premium
        </div>
      </div>
      <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h4>
    </div>
  );
}
