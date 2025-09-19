    import { Badge } from '@/components/ui/badge';
    import { Card, CardContent } from '@/components/ui/card';
    import { Calendar, TrendingUp, Award, Users } from 'lucide-react';
    import { companyInfo } from '@/data/company';
    import { useScrollAnimation } from '@/hooks/useScrollAnimation';

    const HistorySection = () => {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section id="history" className="py-20 bg-white">
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
                Sejarah Kami
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Perjalanan <span className="text-green-600">CV. Arrohmah</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {companyInfo.history.story}
                </p>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-green-600 rounded-full hidden lg:block"></div>

                <div className="space-y-12">
                {companyInfo.history.milestones.map((milestone, index) => (
                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}>
                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <CardContent className="p-8">
                            <div className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-center mb-4`}>
                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-green-600">{milestone.year}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {milestone.achievement}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                            Pencapaian penting dalam perjalanan CV. Arrohmah menuju visi menjadi perusahaan herbal terdepan di Indonesia.
                            </p>
                        </CardContent>
                        </Card>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden lg:flex w-2/12 justify-center">
                        <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                    </div>

                    {/* Empty Space for Alternating Layout */}
                    <div className="hidden lg:block w-5/12"></div>
                    </div>
                ))}
                </div>
            </div>

            {/* Achievement Stats */}
            <div className="mt-20">
                <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Pencapaian Kami</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Angka-angka yang membuktikan dedikasi kami dalam memberikan solusi kesehatan herbal terbaik
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-500 to-green-600 text-white">
                    <CardContent className="p-8 text-center">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">8+</div>
                    <div className="text-green-100">Tahun Pengalaman</div>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                    <CardContent className="p-8 text-center">
                    <Users className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">10K+</div>
                    <div className="text-blue-100">Pelanggan Puas</div>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                    <CardContent className="p-8 text-center">
                    <Award className="w-12 h-12 mx-auto mb-4" />
                    <div className="text-3xl font-bold mb-2">4</div>
                    <div className="text-purple-100">Sertifikasi Resmi</div>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                    <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">🏆</div>
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <div className="text-orange-100">Tingkat Kepuasan</div>
                    </CardContent>
                </Card>
                </div>
            </div>

            {/* Company Values */}
            <div className="mt-20">
                <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Perusahaan</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Prinsip-prinsip yang menjadi fondasi dalam setiap langkah perjalanan kami
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl">🌿</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Kealamian</h4>
                    <p className="text-gray-600 leading-relaxed">
                        Berkomitmen menggunakan bahan-bahan herbal alami terbaik tanpa bahan kimia berbahaya
                    </p>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl">🤝</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Kepercayaan</h4>
                    <p className="text-gray-600 leading-relaxed">
                        Membangun hubungan jangka panjang dengan pelanggan melalui transparansi dan kualitas
                    </p>
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl">💡</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Inovasi</h4>
                    <p className="text-gray-600 leading-relaxed">
                        Terus mengembangkan produk dan layanan untuk memberikan solusi kesehatan terbaik
                    </p>
                    </CardContent>
                </Card>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default HistorySection;