    import Header from '@/components/layout/Header';
    import Footer from '@/components/layout/Footer';
    import HeroSection from '@/components/sections/HeroSection';
    import AboutSection from '@/components/sections/AboutSection';
    import HistorySection from '@/components/sections/HistorySection';
    import ProductsSection from '@/components/sections/ProductsSection';
    import TestimonialsSection from '@/components/sections/TestimonialsSection';
    import ContactSection from '@/components/sections/ContactSection';

    export default function Index() {
    return (
        <div className="min-h-screen">
        <Header />
        <main>
            <HeroSection />
            <AboutSection />
            <HistorySection />
            <ProductsSection />
            <TestimonialsSection />
            <ContactSection />
        </main>
        <Footer />
        </div>
    );
    }