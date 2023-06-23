import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticProps} from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
}

interface ProductProps {
    product: Product;
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const router = useRouter();
    const { id } = router.query;
    const { productData } = router.query;

    if (router.isFallback) {
        return <p>Loading...</p>;
    }

    const goBack = () => {
        router.back();
    };

    const parsedProductData = productData ? JSON.parse(productData as string) : null;
    const { name, price, description, image } = parsedProductData ?? {};

    return (
        <div>
            <Header name="header-page" />
            <div className="product__container">
                <div className="product__content">
                    <img src={image} alt={name} />
                    <div className="product__content-info">
                        <div className="product__content-details model">
                            <span>model</span>
                            <h1>{name}</h1>
                        </div>
                        <div className="product__content-details price">
                            <span>price</span>
                            <h2>{price} BYN</h2>
                        </div>
                        <div className="product__content-details description">
                            <span>specification</span>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <Button className="back-btn" onClick={goBack} color="secondary" startIcon={ <ArrowBackIcon/> }>Come back</Button>
            </div>
            <Footer name="footer-page" />
        </div>
    );
};

export const getStaticPaths = async () => {
    const paths = [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } },
        { params: { id: '4' } },
        { params: { id: '5' } },
    ];
    return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const productId = params?.id as string;
    const product: Product = {
        id: productId,
        name: `Product ${productId}`,
        price: 0,
        description: `This is the product ${productId}`,
    };
    return { props: { product }, revalidate: 1 };
}

export default Product;
