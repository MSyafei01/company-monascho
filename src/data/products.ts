    export interface Product {
    id: string;
    name: string;
    type: string;
    description: string;
    benefits: string[];
    ingredients: string[];
    usage: string;
    price: string;
    image: string;
    featured: boolean;
    }

    export const products: Product[] = [
    {
        id: "monascho-cair",
        name: "Monascho Cair",
        type: "Ekstrak Cair",
        description: "Monascho dalam bentuk ekstrak cair yang mudah diserap tubuh. Cocok untuk konsumsi harian sebagai suplemen kesehatan keluarga.",
        benefits: [
        "Meningkatkan daya tahan tubuh",
        "Membantu proses detoksifikasi",
        "Menjaga kesehatan pencernaan",
        "Meningkatkan stamina dan vitalitas",
        "Membantu menurunkan kolesterol"
        ],
        ingredients: [
        "Ekstrak Angkak (Red Yeast Rice)",
        "Ekstrak Temulawak",
        "Ekstrak Kunyit",
        "Madu Murni",
        "Air Murni"
        ],
        usage: "Diminum 2-3 kali sehari, 1 sendok makan sebelum makan",
        price: "Rp 85.000",
        image: "/assets/products/monascho-cair.jpg",
        featured: true
    },
    {
        id: "monascho-kental",
        name: "Monascho Kental",
        type: "Ekstrak Kental",
        description: "Monascho dalam bentuk ekstrak kental dengan konsentrasi tinggi. Memberikan manfaat maksimal dalam takaran yang lebih sedikit.",
        benefits: [
        "Konsentrasi nutrisi lebih tinggi",
        "Efektif untuk terapi intensif",
        "Membantu pemulihan kondisi tubuh",
        "Meningkatkan metabolisme",
        "Memperkuat sistem imun"
        ],
        ingredients: [
        "Ekstrak Angkak Konsentrat",
        "Ekstrak Temulawak Pekat",
        "Ekstrak Sambiloto",
        "Propolis",
        "Royal Jelly"
        ],
        usage: "Diminum 2 kali sehari, 1/2 sendok teh dicampur air hangat",
        price: "Rp 125.000",
        image: "/assets/products/monascho-kental.jpg",
        featured: true
    },
    {
        id: "monascho-kapsul",
        name: "Monascho Kapsul",
        type: "Kapsul Herbal",
        description: "Monascho dalam bentuk kapsul yang praktis dan mudah dikonsumsi. Ideal untuk gaya hidup modern yang sibuk.",
        benefits: [
        "Praktis dan mudah dikonsumsi",
        "Dosis terukur dengan tepat",
        "Tidak ada rasa pahit",
        "Cocok untuk bepergian",
        "Tahan lama dan higienis"
        ],
        ingredients: [
        "Serbuk Angkak",
        "Serbuk Temulawak",
        "Serbuk Kunyit",
        "Serbuk Jahe Merah",
        "Kapsul Halal Vegetarian"
        ],
        usage: "Diminum 2-3 kali sehari, 1-2 kapsul sebelum makan",
        price: "Rp 95.000",
        image: "/assets/products/monascho-kapsul.jpg",
        featured: true
    }
    ];

    export const productCategories = [
    {
        id: "all",
        name: "Semua Produk",
        description: "Lihat semua produk Monascho"
    },
    {
        id: "ekstrak",
        name: "Ekstrak",
        description: "Produk dalam bentuk ekstrak cair dan kental"
    },
    {
        id: "kapsul",
        name: "Kapsul",
        description: "Produk dalam bentuk kapsul praktis"
    }
    ];

    export const productFeatures = [
    {
        icon: "🌿",
        title: "100% Herbal Alami",
        description: "Dibuat dari bahan-bahan herbal pilihan tanpa bahan kimia berbahaya"
    },
    {
        icon: "🏥",
        title: "Teruji Klinis",
        description: "Telah melalui uji klinis dan terbukti aman untuk konsumsi"
    },
    {
        icon: "✅",
        title: "Bersertifikat Resmi",
        description: "Memiliki izin BPOM dan sertifikat halal MUI"
    },
    {
        icon: "👨‍⚕️",
        title: "Direkomendasikan Ahli",
        description: "Direkomendasikan oleh praktisi kesehatan dan herbalis"
    }
    ];