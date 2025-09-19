    export interface Testimonial {
    id: string;
    name: string;
    age: number;
    location: string;
    condition: string;
    story: string;
    duration: string;
    rating: number;
    image: string;
    verified: boolean;
    }

    export const testimonials: Testimonial[] = [
    {
        id: "testimonial-1",
        name: "Ibu Siti Aminah",
        age: 52,
        location: "Jember, Jawa Timur",
        condition: "Kolesterol Tinggi",
        story: "Setelah rutin mengonsumsi Monascho selama 3 bulan, kadar kolesterol saya turun dari 280 menjadi 190. Dokter juga terkejut dengan perbaikan kondisi kesehatan saya. Terima kasih Monascho!",
        duration: "3 bulan",
        rating: 5,
        image: "/assets/testimonials/ibu-siti.jpg",
        verified: true
    },
    {
        id: "testimonial-2",
        name: "Bapak Ahmad Fauzi",
        age: 45,
        location: "Surabaya, Jawa Timur",
        condition: "Diabetes Tipe 2",
        story: "Gula darah saya yang sempat mencapai 350 mg/dL kini stabil di angka 120 mg/dL setelah mengonsumsi Monascho kapsul secara teratur. Hidup saya jadi lebih berkualitas.",
        duration: "4 bulan",
        rating: 5,
        image: "/assets/testimonials/pak-ahmad.jpg",
        verified: true
    },
    {
        id: "testimonial-3",
        name: "Ibu Ratna Dewi",
        age: 38,
        location: "Malang, Jawa Timur",
        condition: "Asam Urat",
        story: "Nyeri sendi akibat asam urat yang sering mengganggu aktivitas saya berangsur membaik. Sekarang saya bisa beraktivitas normal tanpa rasa sakit. Monascho benar-benar membantu!",
        duration: "2 bulan",
        rating: 5,
        image: "/assets/testimonials/ibu-ratna.jpg",
        verified: true
    },
    {
        id: "testimonial-4",
        name: "Bapak Suryanto",
        age: 60,
        location: "Banyuwangi, Jawa Timur",
        condition: "Hipertensi",
        story: "Tekanan darah tinggi yang sudah bertahun-tahun saya derita mulai terkontrol setelah mengonsumsi Monascho. Kini saya merasa lebih sehat dan berenergi.",
        duration: "5 bulan",
        rating: 5,
        image: "/assets/testimonials/pak-suryanto.jpg",
        verified: true
    },
    {
        id: "testimonial-5",
        name: "Ibu Kartini",
        age: 42,
        location: "Probolinggo, Jawa Timur",
        condition: "Gangguan Pencernaan",
        story: "Masalah maag dan pencernaan yang sering kambuh sudah tidak mengganggu lagi. Monascho cair sangat membantu memperbaiki sistem pencernaan saya. Rasanya juga enak!",
        duration: "6 minggu",
        rating: 5,
        image: "/assets/testimonials/ibu-kartini.jpg",
        verified: true
    },
    {
        id: "testimonial-6",
        name: "Bapak Hendro",
        age: 35,
        location: "Jember, Jawa Timur",
        condition: "Stamina & Vitalitas",
        story: "Sebagai pekerja keras, saya sering merasa lelah dan kurang berenergi. Setelah mengonsumsi Monascho, stamina saya meningkat drastis dan tidak mudah sakit.",
        duration: "2 bulan",
        rating: 5,
        image: "/assets/testimonials/pak-hendro.jpg",
        verified: true
    }
    ];

    export const testimonialStats = {
    totalCustomers: "10,000+",
    satisfactionRate: "98%",
    averageRating: 4.9,
    yearsOfExperience: 8
    };

    export const healthConditions = [
    {
        name: "Diabetes",
        count: 2500,
        improvement: "85%"
    },
    {
        name: "Kolesterol Tinggi",
        count: 3200,
        improvement: "90%"
    },
    {
        name: "Hipertensi",
        count: 2800,
        improvement: "82%"
    },
    {
        name: "Asam Urat",
        count: 1800,
        improvement: "88%"
    },
    {
        name: "Gangguan Pencernaan",
        count: 1500,
        improvement: "92%"
    }
    ];