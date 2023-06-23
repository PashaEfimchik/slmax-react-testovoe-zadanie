import Link from "next/link";
import { SiShopify } from "react-icons/si"

type HeaderProps = {
    name: string
}

export default function Header (props: HeaderProps) {
    const { name } = props;
    return (
        <header className={`header ${name}`}>
            <div className="header-img">
                <Link href={"/"}>
                    <SiShopify className="header-img__icon" />
                </Link>
            </div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/products">Phones</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    )
}