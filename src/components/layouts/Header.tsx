    import { useState, useEffect } from 'react';
    import { Button } from '@/components/ui/button';
    import { Menu, X, Phone, Mail } from 'lucide-react';

    const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
        }
    };

    const menuItems = [
        { id: 'home', label: 'Beranda' },
        { id: 'about', label: 'Tentang' },
        { id: 'history', label: 'Sejarah' },
        { id: 'products', label: 'Produk' },
        { id: 'testimonials', label: 'Testimoni' },
        { id: 'contact', label: 'Kontak' }
    ];

    return (
        <>
        {/* Top Bar */}
        <div className="bg-green-800 text-white py-2 px-4 text-sm">
            <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+62 812 3456 7890</span>
                </div>
                <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@cvarrohmah.com</span>
                </div>
            </div>
            <div className="hidden md:block">
                <span>🌿 Solusi Herbal Terpercaya untuk Kesehatan Keluarga</span>
            </div>
            </div>
        </div>

        {/* Main Header */}
        <header className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                    <h1 className={`font-bold text-xl ${isScrolled ? 'text-green-800' : 'text-white'}`}>
                    Monascho
                    </h1>
                    <p className={`text-sm ${isScrolled ? 'text-green-600' : 'text-green-100'}`}>
                    CV. Arrohmah
                    </p>
                </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                {menuItems.map((item) => (
                    <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-medium transition-colors hover:text-green-600 ${
                        isScrolled ? 'text-gray-700' : 'text-white'
                    }`}
                    >
                    {item.label}
                    </button>
                ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                <Button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full"
                >
                    Hubungi Kami
                </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
            <div className="lg:hidden bg-white border-t shadow-lg">
                <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                    {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-left font-medium text-gray-700 hover:text-green-600 py-2"
                    >
                        {item.label}
                    </button>
                    ))}
                    <Button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-green-600 hover:bg-green-700 text-white w-full mt-4"
                    >
                    Hubungi Kami
                    </Button>
                </nav>
                </div>
            </div>
            )}
        </header>
        </>
    );
    };

    export default Header;