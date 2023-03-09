import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaEnvelope,
    FaPhone
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="flex flex-row justify-center bg-gray-900 text-gray-300 py-5 font-mono w-full">

            {/* <div className="w-1/2"></div> */}
            <div className="flex flex-col justify-center gap-5 text-xs">
                <p>Designed and Developed by <a href="https://www.linkedin.com/in/herald-adowei/" target="_blank" className="hover:text-pink-400 hover:brightness-100 duration-500 underline">Herald Adowei</a></p>
                <div className="flex flex-row justify-center gap-x-5">
                    <a href="tel:8323019096" target="_blank" className="footer hover:text-red-600"><FaPhone /></a>
                    <a href="https://github.com/RadZ3000" target="_blank" className="footer hover:text-black"><FaGithub /></a>
                    <a href="mailto: herald.adowei@gmail.com" target="_blank" className="footer hover:text-red-700"><FaEnvelope /></a>
                    <a href="https://www.instagram.com/herald_a/" target="_blank" className="footer hover:text-pink-400"><FaInstagram /></a>
                    <a href="https://twitter.com/The_RadZee" target="_blank" className="footer hover:text-sky-400"><FaTwitter /></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer;