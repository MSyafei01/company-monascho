    import { companyInfo } from '@/data/company';
    import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';

    const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                    <h3 className="font-bold text-xl text-green-400">Monascho</h3>
                    <p className="text-sm text-gray-400">CV. Arrohmah</p>
                </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                {companyInfo.tagline}
                </p>
                <div className="flex space-x-4">
                <a href={companyInfo.socialMedia.facebook} className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Facebook className="w-5 h-5" />
                </a>
                <a href={companyInfo.socialMedia.instagram} className="text-gray-400 hover:text-pink-500 transition-colors">
                    <Instagram className="w-5 h-5" />
                </a>
                <a href={companyInfo.socialMedia.youtube} className="text-gray-400 hover:text-red-500 transition-colors">
                    <Youtube className="w-5 h-5" />
                </a>
                </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
                <h4 className="font-semibold text-lg text-green-400">Menu Cepat</h4>
                <ul className="space-y-2">
                {['Beranda', 'Tentang Kami', 'Sejarah', 'Produk', 'Testimoni', 'Kontak'].map((item) => (
                    <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                        {item}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Products */}
            <div className="space-y-4">
                <h4 className="font-semibold text-lg text-green-400">Produk Kami</h4>
                <ul className="space-y-2">
                <li><a href="#products" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Monascho Cair</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Monascho Kental</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Monascho Kapsul</a></li>
                </ul>
                <div className="mt-4">
                <h5 className="font-medium text-green-400 mb-2">Sertifikasi</h5>
                <div className="flex flex-wrap gap-2">
                    <span className="bg-green-800 text-green-200 px-2 py-1 rounded text-xs">BPOM</span>
                    <span className="bg-green-800 text-green-200 px-2 py-1 rounded text-xs">Halal MUI</span>
                    <span className="bg-green-800 text-green-200 px-2 py-1 rounded text-xs">GMP</span>
                </div>
                </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
                <h4 className="font-semibold text-lg text-green-400">Hubungi Kami</h4>
                <div className="space-y-3">
                <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{companyInfo.contact.address}</p>
                </div>
                <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-400" />
                    <p className="text-gray-300 text-sm">{companyInfo.contact.whatsapp}</p>
                </div>
                <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-400" />
                    <p className="text-gray-300 text-sm">{companyInfo.contact.email}</p>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
            <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                © {currentYear} CV. Arrohmah. Semua hak cipta dilindungi.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                    Kebijakan Privasi
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                    Syarat & Ketentuan
                </a>
                </div>
            </div>
            </div>
        </div>
        </footer>
    );
    };

    export default Footer;