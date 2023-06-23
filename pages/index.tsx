import React from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  return (
      <>
          <Header name="header-home" />
          <div className="homePage">
                <div className="homePage__container">
                    <div className="homePage__content">
                        <div className="homePage__content__description">
                            <span>mobile phone shop</span>
                        </div>
                        <div className="homePage__content__title">
                            <h1>Here you can find the best mobile phones</h1>
                        </div>
                        <div className="homePage__content__button">
                            <Link href="/products">
                                <button className="homePage__btn">
                                    View phones
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer name="footer-home" />
      </>
  )
}
