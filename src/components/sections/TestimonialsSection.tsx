    import { useState } from 'react';
    import { Badge } from '@/components/ui/badge';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent } from '@/components/ui/card';
    import { ChevronLeft, ChevronRight, Star, Quote, CheckCircle } from 'lucide-react';
    import { testimonials, testimonialStats, healthConditions } from '@/data/testimonials';
    import { useScrollAnimation } from '@/hooks/useScrollAnimation';

    const TestimonialsSection = () => {
    const { ref, isVisible } = useScrollAnimation();
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonialData = testimonials[currentTestimonial];

    return (
        <section id="testimonials" className="py-20 bg-white">
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
                Testimoni Pelanggan
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Apa Kata <span className="text-green-600">Pelanggan Kami?</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ribuan keluarga Indonesia telah merasakan manfaat produk Monascho untuk kesehatan mereka
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">{testimonialStats.totalCustomers}</div>
                    <div className="text-green-100 text-sm">Pelanggan Puas</div>
                </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">{testimonialStats.satisfactionRate}</div>
                    <div className="text-blue-100 text-sm">Tingkat Kepuasan</div>
                </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl font-bold mr-2">{testimonialStats.averageRating}</span>
                    <Star className="w-6 h-6 fill-current" />
                    </div>
                    <div className="text-purple-100 text-sm">Rating Rata-rata</div>
                </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">{testimonialStats.yearsOfExperience}+</div>
                    <div className="text-orange-100 text-sm">Tahun Pengalaman</div>
                </CardContent>
                </Card>
            </div>

            {/* Main Testimonial Carousel */}
            <div className="relative mb-16">
                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Testimonial Content */}
                    <div className="lg:col-span-2">
                        <Quote className="w-12 h-12 text-green-500 mb-6" />
                        <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                        "{currentTestimonialData.story}"
                        </blockquote>
                        
                        <div className="flex items-center space-x-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xl">
                            {currentTestimonialData.name.charAt(0)}
                            </span>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-gray-900">{currentTestimonialData.name}</h4>
                            <p className="text-gray-600">{currentTestimonialData.age} tahun, {currentTestimonialData.location}</p>
                        </div>
                        {currentTestimonialData.verified && (
                            <CheckCircle className="w-6 h-6 text-green-500" />
                        )}
                        </div>

                        <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                            {currentTestimonialData.condition}
                        </Badge>
                        <span className="text-sm text-gray-500">Durasi: {currentTestimonialData.duration}</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="text-center">
                        <div className="flex justify-center space-x-4 mb-6">
                        <Button
                            onClick={prevTestimonial}
                            variant="outline"
                            size="icon"
                            className="w-12 h-12 rounded-full border-green-300 text-green-600 hover:bg-green-600 hover:text-white"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                            onClick={nextTestimonial}
                            variant="outline"
                            size="icon"
                            className="w-12 h-12 rounded-full border-green-300 text-green-600 hover:bg-green-600 hover:text-white"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                        </div>

                        <div className="flex justify-center space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                            }`}
                            />
                        ))}
                        </div>
                    </div>
                    </div>
                </CardContent>
                </Card>
            </div>

            {/* Health Conditions Success Rate */}
            <div className="mb-16">
                <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Tingkat Keberhasilan per Kondisi</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Data statistik perbaikan kondisi kesehatan pelanggan setelah mengonsumsi Monascho
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {healthConditions.map((condition, index) => (
                    <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-lg text-gray-900">{condition.name}</h4>
                        <Badge className="bg-green-100 text-green-800">{condition.improvement}</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>Jumlah Kasus</span>
                        <span className="font-semibold">{condition.count.toLocaleString()}</span>
                        </div>
                        <div className="mt-3 bg-gray-200 rounded-full h-2">
                        <div 
                            className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: condition.improvement }}
                        ></div>
                        </div>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </div>

            {/* All Testimonials Grid */}
            <div>
                <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Testimoni Lainnya</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Cerita inspiratif dari pelanggan yang telah merasakan manfaat Monascho
                </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.slice(0, 6).map((testimonial, index) => (
                    <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">
                            {testimonial.name.charAt(0)}
                            </span>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-sm text-gray-600">{testimonial.location}</p>
                        </div>
                        {testimonial.verified && (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                        </div>

                        <div className="flex items-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {testimonial.story.substring(0, 120)}...
                        </p>

                        <div className="flex items-center justify-between">
                        <Badge className="bg-green-100 text-green-800 text-xs">
                            {testimonial.condition}
                        </Badge>
                        <span className="text-xs text-gray-500">{testimonial.duration}</span>
                        </div>
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

    export default TestimonialsSection;