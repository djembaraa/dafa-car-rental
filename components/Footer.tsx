import Link from "next/link";

const Footer = () => (
  <footer className="bg-gray-950 text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-16">
      <div className="md:col-span-2">
        <h2 className="text-3xl font-black tracking-tighter mb-6">
          DAFA RENTAL.
        </h2>
        <p className="text-gray-400 leading-relaxed max-w-md">
          Your professional transportation partner. Providing a premium fleet with the highest safety standards for business trips and vacations.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">
          Quick Links
        </h4>
        <ul className="space-y-4 font-medium text-gray-400">
          <li>
            <Link href="#" className="hover:text-white transition">
              Our Services
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-white transition">
              About Us
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">
          Contact
        </h4>
        <ul className="space-y-4 font-medium text-gray-400">
          <li>Jakarta Selatan, Indonesia</li>
          <li>+62 812 3456 7890</li>
          <li>business@dafarental.com</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
      <p>© 2025 Dafa Rental Group. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0 font-medium">
        <Link href="#" className="hover:text-white">
          Privacy
        </Link>
        <Link href="#" className="hover:text-white">
          Terms
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;