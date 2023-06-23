import Footer from "@/components/footer";
import React from "react";
import Header from "@/components/header";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useRouter} from "next/router";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import {SocialIcon} from "react-social-icons";

const AboutPage = () => {
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <div>
            <Header name="header-page" />
            <div className="about__container">
                <div className="about__title">
                    <h1 id="about__title-id">About me</h1>
                </div>
                <div className="about__content">
                    <SocialIcon url="https://www.linkedin.com/in/pavel-efimchik-2a6ba9237/" className="about__icon" />
                    <SocialIcon url="https://github.com/PashaEfimchik" className="about__icon" />
                    <SocialIcon url="https://t.me/xqwspx" className="about__icon" />
                    <SocialIcon url="https://pavel01efimchik.devfolio.io/" className="about__icon" />
                </div>
                <Button className="back-btn" onClick={goBack} color="secondary" startIcon={ <ArrowBackIcon/> }>Come back</Button>
            </div>
            <Footer name="footer-page" />
        </div>
    );
}

export default AboutPage;