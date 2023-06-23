import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Countdown from "@/components/countdown";

const NotFoundPage = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, []);

    return (
        <div>
            <Header name="header-page" />
            <div className="notFound__container">
                <h1>Page not found</h1>
                <span>404</span>
                <Countdown seconds={3} />
            </div>
            <Footer name="footer-page" />
        </div>
    )
}

export default NotFoundPage;