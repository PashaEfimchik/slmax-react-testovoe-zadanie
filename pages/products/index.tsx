import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from "@/components/header";
import Footer from "@/components/footer";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
    image?: string;
}

const Products: React.FC = () => {
    const products: Product[] = [
        { id: '1', name: 'Apple iPhone 14 Pro 128GB', price: 3624, description: 'Apple iOS, экран 6.1" OLED (1179x2556) 120 Гц, Apple A16 Bionic, ОЗУ 6 ГБ, память 128 ГБ, камера 48 Мп, 1 SIM (nano-SIM/eSIM), влагозащита IP68', image: '/apple.jpeg' },
        { id: '2', name: 'Google Pixel 7 Pro 12GB/128GB', price: 2599, description: 'Android (без оболочки), экран 6.7" AMOLED (1440x3120) 120 Гц, Google Tensor G2, ОЗУ 12 ГБ, память 128 ГБ, камера 50 Мп, аккумулятор 5000 мАч, 2 SIM (nano-SIM/eSIM), влагозащита IP68', image: '/google.jpeg' },
        { id: '3', name: 'Samsung Galaxy S23 SM-S911B/DS 8GB/128GB', price: 2530, description: 'Android, экран 6.1" AMOLED (1080x2340) 120 Гц, Qualcomm Snapdragon 8 Gen2 SM8550, ОЗУ 8 ГБ, память 128 ГБ, камера 50 Мп, аккумулятор 3900 мАч, 2 SIM (nano-SIM/eSIM), влагозащита IP68', image: '/samsung.jpeg' },
        { id: '4', name: 'Huawei P60 Pro MNA-LX9 Dual SIM 8GB/256GB', price: 3299, description: 'Android, экран 6.67" OLED (1220x2700) 120 Гц, Qualcomm Snapdragon 8+ Gen1, ОЗУ 8 ГБ, память 256 ГБ, поддержка карт памяти, камера 48 Мп, аккумулятор 4815 мАч, 2 SIM (nano-SIM), влагозащита IP68', image: '/huawei.jpeg' },
        { id: '5', name: 'Xiaomi 13 Lite 8GB/256GB', price: 1233, description: 'Android, экран 6.55" AMOLED (1080x2400) 120 Гц, Qualcomm Snapdragon 7 Gen 1, ОЗУ 8 ГБ, память 256 ГБ, камера 50 Мп, аккумулятор 4500 мАч, 2 SIM (nano-SIM/eSIM), влагозащита IP53', image: '/xiaomi.jpeg' },
    ];

    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <div>
            <Header name="header-page" />
            <div className="products__content">
                <div className="products__title">
                    <h1 id="products__title-id">Mobile phone catalog</h1>
                </div>
                <div className="products__list">
                    <Slide autoplay={false}>
                        {products.map((product) => (
                            <div className="products__item" key={product.id}>
                                <Link href={{
                                    pathname: `/products/${product.id}`,
                                    query: { productData: JSON.stringify(product) },
                                }}
                                      style={{ textDecoration: 'none' }}
                                >
                                    <div className="each-slide-effect">
                                        <img src={product.image} alt={product.name} className="products__img"/>
                                        <div className="products__title-info">
                                            <h1>{product.name}</h1>
                                            <h2>{product.price} BYN</h2>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slide>
                </div>
                <Button className="back-btn" onClick={goBack} color="secondary" startIcon={ <ArrowBackIcon/> }>Come back</Button>
            </div>
            <Footer name="footer-page" />
        </div>
    );
};

export default Products;
