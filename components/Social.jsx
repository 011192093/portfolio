import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"  // ✅ Fixed import

const socials = [
    { icon: <FaGithub />, path: "https://github.com/011192093" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/farhee-aalina-ahmad-843548191/file" },
    { icon: <FaEnvelope />, path: "mailto:ahmadaalina3@gmail.com" },  // ✅ Use FaEnvelope for email
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconStyles} target="_blank">
                    {item.icon}
                </Link>
            ))}
        </div>
    );
}

export default Social;
