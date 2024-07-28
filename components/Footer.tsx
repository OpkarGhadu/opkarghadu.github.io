import Image from "next/image";
import Link from "next/link";

const socials = [
    {   
        name: 'Website',
        url: 'https://www.opkarghadu.com',
        icon: '/website.svg'
    },
    {
        name: 'Github',
        url: 'https://www.github.com/opkarghadu',
        icon: '/github.svg'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/OpkarGhadu',
        icon: '/linkedin.svg'
    },
    {
        name: 'Twitter',
        url: 'https://x.com/opkarghadu',
        icon: '/twitter.svg'
    },
    {
        name: 'Paypal',
        url: 'https://paypal.me/opkarghadu',
        icon: '/paypal.svg'
    }
];

export default function Footer(){
    const currentYear = new Date().getFullYear();
   
    return(
        <footer className="w-full  mx-auto px-4 py-16">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <nav className="flex gap-6 mb-4 md:mb-0">
                    {socials.map((social) => (
                        <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={social.icon}
                                alt={social.name}
                                height={24}
                                width={24}
                                className="hover:opacity-75 transition-opacity duration-200"
                            />
                        </Link>
                    ))}
                </nav>
                <p className="text-center text-gray-700">&copy; {currentYear} Opkar Ghadu</p>
            </div>
        </footer>
    );
}
