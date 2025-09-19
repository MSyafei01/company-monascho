    import { useState } from 'react';
    import { Badge } from '@/components/ui/badge';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
    import { CheckCircle, Star, Leaf, Shield, Award, Heart } from 'lucide-react';
    import { products, productFeatures } from '@/data/products';
    import { useScrollAnimation } from '@/hooks/useScrollAnimation';

    const ProductsSection = () => {
    const { ref, isVisible } = useScrollAnimation();
    const [selectedProduct, setSelectedProduct] = useState(products[0]);

    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
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
                Produk Kami
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Produk <span className="text-green-600">Monascho</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Tiga varian produk herbal berkualitas tinggi yang diformulasikan khusus untuk memenuhi kebutuhan kesehatan keluarga Indonesia
                </p>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {productFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                </Card>
                ))}
            </div>

            {/* Products Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {products.map((product, index) => (
                <Card 
                    key={product.id} 
                    className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                    selectedProduct.id === product.id ? 'ring-2 ring-green-500' : ''
                    }`}
                    onClick={() => setSelectedProduct(product)}
                >
                    <CardHeader className="text-center pb-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">🌿</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{product.name}</CardTitle>
                    <Badge className="bg-green-100 text-green-800 w-fit mx-auto">
                        {product.type}
                    </Badge>
                    </CardHeader>
                    <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-600">{product.price}</span>
                        <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        </div>
                    </div>
                    </CardContent>
                </Card>
                ))}
            </div>

            {/* Selected Product Details */}
            <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Product Image */}
                    <div className="text-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <span className="text-8xl">🌿</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h3>
                    <Badge className="bg-green-100 text-green-800 mb-4">
                        {selectedProduct.type}
                    </Badge>
                    <div className="text-3xl font-bold text-green-600 mb-4">{selectedProduct.price}</div>
                    <Button 
                        onClick={scrollToContact}
                        size="lg" 
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full"
                    >
                        Konsultasi & Pemesanan
                    </Button>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-8">
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Deskripsi Produk</h4>
                        <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
                    </div>

                    <Tabs defaultValue="benefits" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="benefits">Manfaat</TabsTrigger>
                        <TabsTrigger value="ingredients">Komposisi</TabsTrigger>
                        <TabsTrigger value="usage">Cara Pakai</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="benefits" className="mt-6">
                        <div className="space-y-3">
                            {selectedProduct.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{benefit}</span>
                            </div>
                            ))}
                        </div>
                        </TabsContent>
                        
                        <TabsContent value="ingredients" className="mt-6">
                        <div className="space-y-3">
                            {selectedProduct.ingredients.map((ingredient, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <Leaf className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600">{ingredient}</span>
                            </div>
                            ))}
                        </div>
                        </TabsContent>
                        
                        <TabsContent value="usage" className="mt-6">
                        <div className="bg-green-50 rounded-lg p-6">
                            <div className="flex items-start space-x-3">
                            <Heart className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <div>
                                <h5 className="font-semibold text-gray-900 mb-2">Petunjuk Penggunaan:</h5>
                                <p className="text-gray-600">{selectedProduct.usage}</p>
                            </div>
                            </div>
                        </div>
                        </TabsContent>
                    </Tabs>
                    </div>
                </div>
                </CardContent>
            </Card>

            {/* Quality Assurance */}
            <div className="mt-16 text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Jaminan Kualitas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Aman & Terpercaya</h4>
                    <p className="text-gray-600 text-sm">Telah terdaftar di BPOM dan bersertifikat halal MUI</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Standar Internasional</h4>
                    <p className="text-gray-600 text-sm">Diproduksi dengan standar GMP dan ISO 9001:2015</p>
                </div>
                
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Star className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Kualitas Terjamin</h4>
                    <p className="text-gray-600 text-sm">Rating 4.9/5 dari ribuan pelanggan yang puas</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    };

    export default ProductsSection;