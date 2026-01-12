export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">BevCon</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Concept, Construction & Confidence.
              <br />
              Partnering with investors to deliver next-generation beverage projects worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="mailto:info@bevcon.com" className="hover:text-white transition-colors">info@bevcon.com</a></li>
              <li>Global Operations</li>
            </ul>
            <div className="pt-4">
              <a href="mailto:info@bevcon.com" className="btn-primary inline-block text-center">
                Contact an Expert
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} BevCon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

