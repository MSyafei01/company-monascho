    import { useState } from 'react';
    import { Badge } from '@/components/ui/badge';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Facebook, Instagram, Youtube } from 'lucide-react';
    import { companyInfo } from '@/data/company';
    import { useScrollAnimation } from '@/hooks/useScrollAnimation';

    const ContactSection = () => {
    const { ref, isVisible } = useScrollAnimation();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleWhatsAppContact = () => {
        const message = formData.name 
        ? `Halo, saya ${formData.name}. Saya tertarik dengan produk Monascho dan ingin berkonsultasi. ${formData.message ? `Pesan: ${formData.message}` : ''}`
        : 'Halo, saya tertarik dengan produk Monascho dan ingin berkonsultasi.';
        
        const whatsappUrl = `https://wa.me/${companyInfo.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleWhatsAppContact();
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
            <div 
            ref={ref}
            className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            >
            {/* Section Header */}
            <div className="text-center mb-16">
                <Badge className="bg-green-600/20 text-green-200 border-green-400/30 mb-4 px-4 py-2">
                Hubungi Kami
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Konsultasi <span className="text-green-400">Gratis</span>
                </h2>
                <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                Tim ahli kami siap membantu Anda memilih produk yang tepat sesuai kebutuhan kesehatan Anda
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white flex items-center">
                    <MessageCircle className="w-6 h-6 mr-3 text-green-400" />
                    Kirim Pesan
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Input
                        name="name"
                        placeholder="Nama Lengkap"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-green-200"
                        required
                        />
                    </div>
                    
                    <div>
                        <Input
                        name="phone"
                        type="tel"
                        placeholder="Nomor WhatsApp"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-green-200"
                        required
                        />
                    </div>
                    
                    <div>
                        <Input
                        name="email"
                        type="email"
                        placeholder="Email (Opsional)"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-green-200"
                        />
                    </div>
                    
                    <div>
                        <Textarea
                        name="message"
                        placeholder="Ceritakan kondisi kesehatan atau keluhan yang ingin dikonsultasikan..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="bg-white/10 border-white/20 text-white placeholder:text-green-200"
                        />
                    </div>
                    
                    <Button 
                        type="submit"
                        size="lg" 
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold"
                    >
                        <Send className="w-5 h-5 mr-2" />
                        Konsultasi via WhatsApp
                    </Button>
                    </form>

                    <div className="mt-6 text-center">
                    <p className="text-green-200 text-sm">
                        Atau hubungi langsung melalui WhatsApp:
                    </p>
                    <Button
                        onClick={handleWhatsAppContact}
                        variant="outline"
                        className="mt-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                    >
                        <Phone className="w-4 h-4 mr-2" />
                        {companyInfo.contact.whatsapp}
                    </Button>
                    </div>
                </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-8">
                {/* Contact Details */}
                <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm">
                    <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">Informasi Kontak</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                        <h4 className="font-semibold text-white mb-1">Alamat</h4>
                        <p className="text-green-200">{companyInfo.contact.address}</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                        <h4 className="font-semibold text-white mb-1">Telepon & WhatsApp</h4>
                        <p className="text-green-200">{companyInfo.contact.whatsapp}</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                        <h4 className="font-semibold text-white mb-1">Email</h4>
                        <p className="text-green-200">{companyInfo.contact.email}</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                        <h4 className="font-semibold text-white mb-1">Jam Operasional</h4>
                        <div className="text-green-200 space-y-1">
                            <p>Senin - Jumat: 08:00 - 17:00 WIB</p>
                            <p>Sabtu: 08:00 - 15:00 WIB</p>
                            <p>Minggu: Libur</p>
                        </div>
                        </div>
                    </div>
                    </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="border-0 shadow-xl bg-white/10 backdrop-blur-sm">
                    <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">Ikuti Kami</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="grid grid-cols-3 gap-4">
                        <a
                        href={companyInfo.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 bg-blue-600/20 rounded-lg hover:bg-blue-600/30 transition-colors"
                        >
                        <Facebook className="w-8 h-8 text-blue-400 mb-2" />
                        <span className="text-blue-200 text-sm">Facebook</span>
                        </a>

                        <a
                        href={companyInfo.socialMedia.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 bg-pink-600/20 rounded-lg hover:bg-pink-600/30 transition-colors"
                        >
                        <Instagram className="w-8 h-8 text-pink-400 mb-2" />
                        <span className="text-pink-200 text-sm">Instagram</span>
                        </a>

                        <a
                        href={companyInfo.socialMedia.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 bg-red-600/20 rounded-lg hover:bg-red-600/30 transition-colors"
                        >
                        <Youtube className="w-8 h-8 text-red-400 mb-2" />
                        <span className="text-red-200 text-sm">YouTube</span>
                        </a>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-green-200 text-sm mb-4">
                        Dapatkan tips kesehatan dan update produk terbaru
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                        <Badge className="bg-green-600/20 text-green-200 border-green-400/30">
                            #MonaschoSehat
                        </Badge>
                        <Badge className="bg-green-600/20 text-green-200 border-green-400/30">
                            #HerbalAlami
                        </Badge>
                        <Badge className="bg-green-600/20 text-green-200 border-green-400/30">
                            #KesehatanKeluarga
                        </Badge>
                        </div>
                    </div>
                    </CardContent>
                </Card>

                {/* Quick Response */}
                <Card className="border-0 shadow-xl bg-gradient-to-br from-green-600/20 to-emerald-600/20">
                    <CardContent className="p-6 text-center">
                    <h4 className="text-xl font-bold text-white mb-3">Respon Cepat</h4>
                    <p className="text-green-200 mb-4">
                        Tim customer service kami akan merespon dalam waktu kurang dari 1 jam
                    </p>
                    <div className="flex justify-center space-x-4">
                        <div className="text-center">
                        <div className="text-2xl font-bold text-white">&lt; 1 Jam</div>
                        <div className="text-green-200 text-sm">Respon Time</div>
                        </div>
                        <div className="text-center">
                        <div className="text-2xl font-bold text-white">24/7</div>
                        <div className="text-green-200 text-sm">WhatsApp</div>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default ContactSection;