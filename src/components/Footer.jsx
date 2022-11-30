import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="light-bg flex justify-space">
            <span>Copyright © {year} <a href="/">Amit thakur</a> - All rights reserved.</span>
            <ul className="flex">
                <li>
                    <a href="https://www.linkedin.com/in/amit-thakur-a5114917b/" target="_blank" rel="noreferrer">
                        <img src="/linkedin.png" width={24} height={24} alt="linkedin-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/amit-t1234" target="_blank" rel="noreferrer">
                        <img src="/github.png" width={24} height={24} alt="github-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;