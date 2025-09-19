    import { useState } from 'react';
    import { Button } from '@/components/ui/button';
    import { Badge } from '@/components/ui/badge';
    import { Play, Star, Users, Award, Shield } from 'lucide-react';
    import { companyInfo } from '@/data/company';
    import { useScrollAnimation } from '@/hooks/useScrollAnimation';

    const HeroSection = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const { ref, isVisible } = useScrollAnimation();

    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
        // Open YouTube video in new tab
        window.open(companyInfo.videoUrl, '_blank');
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900">
            <div className="absolute inset-0 bg-black/30"></div>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div 
            ref={ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            >
            {/* Left Content */}
            <div className="text-white space-y-8">
                {/* Badge */}
                <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-600/20 text-green-200 border-green-400/30 px-3 py-1">
                    ✅ BPOM Terdaftar
                </Badge>
                <Badge className="bg-green-600/20 text-green-200 border-green-400/30 px-3 py-1">
                    🕌 Halal MUI
                </Badge>
                </div>

                {/* Main Heading */}
                <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                    Monascho
                    </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-green-100">
                    {companyInfo.tagline}
                </h2>
                <p className="text-lg text-green-100 leading-relaxed max-w-xl">
                    Produk herbal berkualitas tinggi dari CV. Arrohmah yang telah membantu ribuan keluarga Indonesia 
                    dalam menjaga kesehatan secara alami dan aman.
                </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-full mb-2 mx-auto">
                    <Users className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">10K+</div>
                    <div className="text-sm text-green-200">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-full mb-2 mx-auto">
                    <Star className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">4.9/5</div>
                    <div className="text-sm text-green-200">Rating Testimoni</div>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-600/20 rounded-full mb-2 mx-auto">
                    <Award className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">8+</div>
                    <div className="text-sm text-green-200">Tahun Pengalaman</div>
                </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                    onClick={() => scrollToSection('products')}
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    Lihat Produk Kami
                </Button>
                <Button 
                    onClick={() => scrollToSection('contact')}
                    variant="outline" 
                    size="lg" 
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
                >
                    Konsultasi Gratis
                </Button>
                </div>
            </div>

            {/* Right Content - Video Section */}
            <div className="relative">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20"></div>
                    
                    {/* Play Button */}
                    <div 
                    onClick={handleVideoPlay}
                    className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    >
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors duration-300">
                        <Play className="w-8 h-8 text-green-600 ml-1" fill="currentColor" />
                    </div>
                    </div>

                    {/* Video Info */}
                    <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="text-white font-semibold">Testimoni & Penjelasan Produk</h3>
                        <p className="text-green-200 text-sm">Lihat bagaimana Monascho membantu kesehatan keluarga</p>
                    </div>
                    </div>
                </div>

                {/* Certifications */}
                <div className="mt-6">
                    <h3 className="text-white font-semibold mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-400" />
                    Sertifikasi & Perizinan Resmi
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                    {companyInfo.certifications.map((cert, index) => (
                        <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                        <div className="text-2xl mb-1">{cert.icon}</div>
                        <div className="text-white text-sm font-medium">{cert.name}</div>
                        <div className="text-green-200 text-xs mt-1">{cert.description}</div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
            </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll untuk melihat lebih</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default HeroSection;