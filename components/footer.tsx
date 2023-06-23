type FooterProps = {
    name: string
}

export default function Footer (props: FooterProps) {
    const { name } = props;
    return (
        <footer className={`footer ${name}`}>
            CopyRight &copy; 2023 - SLMax
        </footer>
    )
}