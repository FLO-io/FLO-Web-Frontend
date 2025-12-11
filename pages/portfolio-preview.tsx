import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import {
    FiSmartphone, FiTablet, FiMonitor, FiRefreshCw, FiEdit2, FiMaximize2,
    FiMenu, FiImage, FiArrowRight, FiChevronLeft, FiChevronRight,
    FiType, FiAlignLeft, FiLayers, FiShare2
} from 'react-icons/fi';
import { IoRocketOutline } from "react-icons/io5";

export default function PortfolioPreview() {
    const router = useRouter();
    const [activeDevice, setActiveDevice] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [scale, setScale] = useState(1);
    const previewContainerRef = useRef<HTMLDivElement>(null);

    const [formData, setFormData] = useState({
        title: "John Doe's Portfolio",
        headline: "Innovative Full-Stack Developer crafting seamless digital experiences across the web.",
        projects: [
            { id: 1, name: "E-commerce Platform" },
            { id: 2, name: "Data Visualization Dashboard" },
            { id: 3, name: "Mobile Task Manager App" },
            { id: 4, name: "" },
            { id: 5, name: "" },
        ]
    });

    // Auto-scale logic
    useEffect(() => {
        const calculateScale = () => {
            if (!previewContainerRef.current) return;

            // For desktop, we don't scale, we fit.
            if (activeDevice === 'desktop') {
                setScale(1);
                return;
            }

            const containerHeight = previewContainerRef.current.clientHeight - 40; // Small buffer
            const containerWidth = previewContainerRef.current.clientWidth - 40;

            let targetHeight = 800;
            let targetWidth = 1200;

            if (activeDevice === 'mobile') { targetWidth = 375; targetHeight = 667; }
            if (activeDevice === 'tablet') { targetWidth = 768; targetHeight = 1024; }

            const scaleX = containerWidth / targetWidth;
            const scaleY = containerHeight / targetHeight;

            let newScale = Math.min(scaleX, scaleY, 1);
            setScale(newScale);
        };

        window.addEventListener('resize', calculateScale);
        calculateScale();
        return () => window.removeEventListener('resize', calculateScale);
    }, [activeDevice, isSidebarOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleProjectChange = (id: number, value: string) => {
        setFormData(prev => ({
            ...prev,
            projects: prev.projects.map(p => p.id === id ? { ...p, name: value } : p)
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            <Head>
                <title>Portfolio Preview | FLO</title>
            </Head>

            <div className="layout-container py-6 h-screen flex flex-col">
                <Header />

                <main className="flex-grow flex overflow-hidden relative bg-white rounded-2xl shadow-sm border border-gray-200 mt-4">

                    {/* Collapsible Sidebar */}
                    <aside
                        className={`
              flex-shrink-0 bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-20 flex flex-col
              ${isSidebarOpen ? 'w-[350px] translate-x-0' : 'w-0 -translate-x-full opacity-0'}
              absolute md:relative h-full
            `}
                    >
                        <div className="p-6 overflow-y-auto custom-scrollbar h-full w-[350px]">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                                    <span className="p-1.5 bg-blue-50 rounded-lg text-blue-600">
                                        <FiEdit2 size={16} />
                                    </span>
                                    Editor
                                </div>
                                <button className="text-xs font-medium text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-md border border-blue-100 transition-colors">
                                    Reset
                                </button>
                            </div>

                            <div className="space-y-8">
                                {/* Basic Info Section */}
                                <section>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <FiType /> Basic Info
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="group relative">
                                            <label className="block text-sm text-gray-600 mb-1.5 font-medium">Title</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    value={formData.title}
                                                    onChange={handleInputChange}
                                                    className="input text-sm pl-9"
                                                    placeholder="e.g. John Doe's Portfolio"
                                                />
                                                <FiType className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            </div>
                                        </div>
                                        <div className="group">
                                            <label className="block text-sm text-gray-600 mb-1.5 font-medium">Headline</label>
                                            <div className="relative">
                                                <textarea
                                                    name="headline"
                                                    value={formData.headline}
                                                    onChange={handleInputChange}
                                                    rows={4}
                                                    className="input text-sm resize-none pl-9 py-3"
                                                    placeholder="Brief description about yourself..."
                                                />
                                                <FiAlignLeft className="absolute left-3 top-4 text-gray-400" />
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* Projects Section */}
                                <section>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <FiLayers /> Projects
                                    </h3>
                                    <div className="space-y-4">
                                        {formData.projects.map((project, index) => (
                                            <div key={project.id} className="group">
                                                <label className="block text-sm text-gray-600 mb-1.5 font-medium">Project {index + 1}</label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        value={project.name}
                                                        onChange={(e) => handleProjectChange(project.id, e.target.value)}
                                                        className="input text-sm pl-9"
                                                        placeholder="Enter project name"
                                                    />
                                                    <FiImage className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </aside>

                    {/* Sidebar Toggle Button */}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className={`
                  absolute top-1/2 -translate-y-1/2 z-30 bg-white border border-gray-200 shadow-md p-1.5 rounded-r-lg text-gray-500 hover:text-blue-600 transition-all
                  ${isSidebarOpen ? 'left-[350px]' : 'left-0'}
              `}
                        title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
                    >
                        {isSidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
                    </button>

                    {/* Right Content - Preview */}
                    <div className="flex-grow bg-gray-50/50 flex flex-col h-full relative w-full overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

                        {/* Toolbar */}
                        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200 bg-white/80 backdrop-blur-sm z-10 sticky top-0 shrink-0">
                            <div className="w-1/3 flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-500">Live Preview</span>
                            </div>

                            <div className="flex items-center bg-gray-100 rounded-lg p-1 border border-gray-200 shadow-inner">
                                <button
                                    onClick={() => setActiveDevice('mobile')}
                                    className={`p-2 rounded-md transition-all flex items-center gap-2 ${activeDevice === 'mobile' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                    title="Mobile View"
                                >
                                    <FiSmartphone size={16} />
                                </button>
                                <button
                                    onClick={() => setActiveDevice('tablet')}
                                    className={`p-2 rounded-md transition-all flex items-center gap-2 ${activeDevice === 'tablet' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                    title="Tablet View"
                                >
                                    <FiTablet size={16} />
                                </button>
                                <button
                                    onClick={() => setActiveDevice('desktop')}
                                    className={`p-2 rounded-md transition-all flex items-center gap-2 ${activeDevice === 'desktop' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                                    title="Desktop View"
                                >
                                    <FiMonitor size={16} />
                                </button>
                            </div>

                            <div className="w-1/3 flex justify-end gap-3">
                                <button className="btn-secondary flex items-center gap-2 px-4 py-2 text-sm h-10">
                                    <FiShare2 />
                                    <span className="hidden lg:inline">Share</span>
                                </button>
                                <button className="btn-primary flex items-center gap-2 px-4 py-2 text-sm shadow-lg shadow-blue-500/20 h-10">
                                    Deploy <IoRocketOutline />
                                </button>
                            </div>
                        </div>

                        {/* Preview Canvas */}
                        <div
                            ref={previewContainerRef}
                            className={`flex-grow flex items-center justify-center relative overflow-hidden ${activeDevice === 'desktop' ? 'p-0' : 'p-8'}`}
                        >
                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

                            <div
                                style={{
                                    transform: activeDevice === 'desktop' ? 'none' : `scale(${scale})`,
                                    transformOrigin: 'center center',
                                    width: activeDevice === 'mobile' ? '375px' : activeDevice === 'tablet' ? '768px' : '100%',
                                    height: activeDevice === 'mobile' ? '667px' : activeDevice === 'tablet' ? '1024px' : '100%',
                                }}
                                className={`
                  bg-white overflow-hidden flex flex-col transition-all duration-500 ease-in-out
                  ${activeDevice === 'desktop' ? 'w-full h-full rounded-none border-0' : 'rounded-xl shadow-2xl border border-gray-200'}
                `}
                            >
                                {/* Browser Bar */}
                                <div className="h-10 bg-gray-50 flex items-center px-4 gap-4 border-b border-gray-200 shrink-0">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="flex-grow flex justify-center">
                                        <div className="bg-white text-gray-500 text-xs px-4 py-1.5 rounded-md flex items-center gap-2 w-64 justify-center border border-gray-200 shadow-sm">
                                            <span className="text-gray-400">🔒</span>
                                            <span className="text-gray-700 font-medium">johndoe.flo.io</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 text-gray-400">
                                        <FiRefreshCw size={14} />
                                        <FiMaximize2 size={14} />
                                    </div>
                                </div>

                                {/* Website Content (Mock) */}
                                <div className="flex-grow bg-white relative overflow-y-auto custom-scrollbar">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

                                    {/* Navbar */}
                                    <nav className="flex items-center justify-between px-8 py-6">
                                        <div className="font-bold text-xl tracking-tight text-gray-900">JD</div>
                                        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                                            <a href="#" className="hover:text-blue-600 transition-colors">Work</a>
                                            <a href="#" className="hover:text-blue-600 transition-colors">About</a>
                                            <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
                                        </div>
                                        <FiMenu className="md:hidden text-xl text-gray-900" />
                                    </nav>

                                    {/* Hero Section */}
                                    <div className="flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">
                                        <div className="w-24 h-24 bg-gray-50 rounded-2xl mb-8 flex items-center justify-center text-gray-300 animate-pulse border border-gray-100">
                                            <FiImage size={40} />
                                        </div>
                                        <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full text-xs font-medium text-blue-600 mb-6">
                                            Try 14 days trial free
                                        </div>
                                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 max-w-3xl leading-tight">
                                            {formData.title || "Build a Portfolio in Minutes"}
                                        </h1>
                                        <p className="text-lg text-gray-500 max-w-xl mb-10 leading-relaxed">
                                            {formData.headline || "Innovative Full-Stack Developer crafting seamless digital experiences across the web."}
                                        </p>
                                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:scale-105 transition-all flex items-center gap-2">
                                            Get Started <FiArrowRight />
                                        </button>
                                    </div>

                                    {/* Projects Preview */}
                                    <div className="px-8 py-16 bg-gray-50">
                                        <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                            {formData.projects.filter(p => p.name).map((project) => (
                                                <div key={project.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                                    <div className="h-40 bg-gray-100 rounded-lg mb-4 w-full"></div>
                                                    <h3 className="font-bold text-lg text-gray-900">{project.name}</h3>
                                                    <p className="text-gray-500 text-sm mt-2">Project description placeholder...</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
