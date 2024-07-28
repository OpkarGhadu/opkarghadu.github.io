import Link from "next/link";

export default function Header(){
    return(
        <header className=" w-full flex justify-between items-end py-16 px-8">
                <Link href="/" className="text-5xl font-bold hover:text-lime-600 transition-colors duration-200">
                    Projects
                </Link>
                <Link href="https://paypal.me/opkarghadu" className="font-bold text-xl hover:text-lime-600 transition-colors duration-200">
                    Donate
                </Link>
        </header>

    );
}
