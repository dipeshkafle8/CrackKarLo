import {
    Facebook,
    Instagram,
    Twitter,
    Github,
    Youtube,
    Linkedin,
    Mail,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='w-full bg-[#0a1b2d] text-white p-15'>
            <div className='flex justify-around mb-10'>
                <div className='flex'>
                    <Facebook className='mx-2 border-2 w-10 h-auto rounded-full bg-white text-black' size={32} />
                    <Instagram className='mx-2 border-2 w-10 h-auto rounded-full bg-white text-black' size={32} />
                    <Twitter className='mx-2 border-2 w-10 h-auto rounded-full bg-white text-black' size={32} />
                    <Github className='mx-2 border-2 w-10 h-auto rounded-full bg-white text-black' size={32} />
                    <Youtube className='mx-2 border-2 w-10 h-auto rounded-full bg-white text-black' size={32} />
                    <Linkedin className='mx-2 border-2 w-10 h-auto rounded-full bg-white text-black' size={32} />
                    <Mail className='mx-2 border-2 w-10 h-auto rounded-full bg-white text-black' size={32} />
                </div>
            </div>
            <div className='flex justify-around'>
                <div>
                    <h3 className='text-lg font-bold mb-2'>Contact Us</h3>
                    <p>Email: contact@crackkarlo.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div>
                    <h3 className='text-lg font-bold mb-2'>Quick Links</h3>
                    <ul>
                        <li><Link to="/" className='text-white hover:underline'>Home</Link></li>
                        <li><Link to="/" className='text-white hover:underline'>About Us</Link></li>
                        <li><Link to="/" className='text-white hover:underline'>Services</Link></li>
                        <li><Link to="/" className='text-white hover:underline'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;