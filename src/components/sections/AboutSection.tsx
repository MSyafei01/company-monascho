    import { Badge } from '@/components/ui/badge';
    import { Card, CardContent } from '@/components/ui/card';
    import { Target, Eye, Heart, Leaf, Award, Users } from 'lucide-react';
    import { companyInfo } from '@/data/company';
    import { useScrollAnimation } from '@/hooks/useScrollAnimation';

    const AboutSection = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
            <div 
            ref={ref}
            className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            >
            {/* Section Header */}
            <div className="text-center mb-16">
                <Badge className="bg-green-100 text-green-800 mb-4 px-4 py-2">
                Tentang Kami
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Mengapa Memilih <span className="text-green-600">Monascho?</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {companyInfo.description}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                {/* Vision */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Eye className="w-6 h-6 text-white" />
                        </div>
                        <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Visi Kami</h3>
                        <p className="text-gray-600 leading-relaxed">{companyInfo.vision}</p>
                        </div>
                    </div>
                    </CardContent>
                </Card>

                {/* Mission */}
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-white" />
                        </div>
                        <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Misi Kami</h3>
                        <ul className="space-y-2">
                            {companyInfo.mission.map((item, index) => (
                            <li key={index} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600">{item}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                </div>

                {/* Right Content - Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-500 to-green-600 text-white">
                    <CardContent className="p-6 text-center">
                    <Leaf className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="font-bold text-lg mb-2">100% Herbal Alami</h4>
                    <p className="text-green-100 text-sm">Dibuat dari bahan-bahan herbal pilihan tanpa bahan kimia berbahaya</p>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="font-bold text-lg mb-2">Bersertifikat Resmi</h4>
                    <p className="text-blue-100 text-sm">Memiliki izin BPOM dan sertifikat halal MUI</p>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    <CardContent className="p-6 text-center">
                    <Heart className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="font-bold text-lg mb-2">Teruji Klinis</h4>
                    <p className="text-purple-100 text-sm">Telah melalui uji klinis dan terbukti aman untuk konsumsi</p>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                    <CardContent className="p-6 text-center">
                    <Users className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="font-bold text-lg mb-2">Dipercaya Ribuan Keluarga</h4>
                    <p className="text-orange-100 text-sm">Lebih dari 10.000 keluarga telah merasakan manfaatnya</p>
                    </CardContent>
                </Card>
                </div>
            </div>

            {/* Certifications Section */}
            <div className="mt-20">
                <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Sertifikasi & Perizinan</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Produk Monascho telah memiliki berbagai sertifikasi resmi yang menjamin kualitas dan keamanan
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {companyInfo.certifications.map((cert, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-4">{cert.icon}</div>
                        <h4 className="font-bold text-lg text-gray-900 mb-2">{cert.name}</h4>
                        <p className="text-gray-600 text-sm">{cert.description}</p>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default AboutSection;