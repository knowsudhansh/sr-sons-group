import Link from "next/link";

export default function Footer() {
  return (
   <footer className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-4 mb-12">
          {/* Company Info */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-3">
              Main Company
            </p>
            <h3 className="text-xl font-bold text-white">RCS Electricals Pvt. Ltd.</h3>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
              Power generation, industrial infrastructure, electronics, energy, and hospitality solutions.
            </p>
          </div>

          {/* Subsidiaries */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.24em] text-white/80 mb-4">Business Divisions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/companies/rc-electricals" className="hover:text-cyan-400 transition">
                  RC Electricals
                </Link>
              </li>
              <li>
                <Link href="/companies/sr-sons-electronics" className="hover:text-cyan-400 transition">
                  SR & Sons Electronics
                </Link>
              </li>
              <li>
                <Link href="/companies/avanti-system" className="hover:text-cyan-400 transition">
                  Avanti System
                </Link>
              </li>
              <li>
                <Link href="/companies/shreya-bnr" className="hover:text-cyan-400 transition">
                  Shreya BNR
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-cyan-400 transition">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.24em] text-white/80 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#home" className="hover:text-cyan-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-cyan-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.24em] text-white/80 mb-4">Contact</h4>
            <p className="text-sm text-gray-400 mb-3 leading-relaxed">
              91-A/C 710, Kamal Niwas, Opp. Radisson Blu, Mohaddipur, Gorakhpur - 273008, Uttar Pradesh, India
            </p>
            <p className="text-sm text-gray-400 mb-2">Email: info@rcselectricals.com</p>
            <p className="text-sm text-gray-400">Phone: +91 XXXX-XXXXXX</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex justify-center">
          <p className="text-center text-sm text-gray-500">
            &copy; 2026 RCS Electricals Pvt. Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
