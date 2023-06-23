import React, { useEffect, useState } from "react";
import Link from "next/link";

const Countdown: React.FC<{ seconds: number }> = ({ seconds }) => {
    const [count, setCount] = useState(seconds);

    useEffect(() => {
        if (count > 0) {
            const timer = setInterval(() => setCount((prevCount) => prevCount - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [count]);

    return (
        <h2>Переход на <Link href="/" style={{ textDecoration: 'none', color: '#af0000' }}>главную страницу</Link> через {count}</h2>
    );
};

export default Countdown;
