"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ImprintPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-width">
          <div className="max-w-3xl mx-auto space-y-12">
            
            {/* Header / Address */}
            <section className="space-y-6">
              <h1 className="heading-xl mb-8">Imprint</h1>
              
              <div className="space-y-4 text-slate-700">
                <p className="text-lg font-bold text-slate-900">
                  BevCon Beverage Consulting GmbH
                </p>
                <p>
                  Kleine Johannisstraße 10<br />
                  20457 Hamburg<br />
                  Germany
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +49 152 5359 6946<br />
                  <span className="font-semibold">Email:</span> <a href="mailto:bier@bevcon.net" className="text-primary hover:text-primary-hover transition-colors">bier@bevcon.net</a>
                </p>
              </div>
            </section>

            {/* Register Information */}
            <section className="space-y-4 text-slate-700">
              <h2 className="heading-lg text-2xl md:text-3xl">Register information</h2>
              <div className="space-y-2">
                <p><span className="font-semibold">Managing Directors:</span> Johannes Bier</p>
                <p><span className="font-semibold">Register court:</span> Amtsgericht Hamburg</p>
                <p><span className="font-semibold">Register number:</span> Not registered yet (company in formation)</p>
                <p><span className="font-semibold">VAT number:</span> Not registered yet (company in formation)</p>
              </div>
            </section>

            {/* Responsible for Content */}
            <section className="space-y-2 text-slate-700">
              <h2 className="text-xl font-bold text-slate-900">Responsible for content</h2>
              <p>Johannes Bier</p>
            </section>

            {/* Disclaimer */}
            <section className="space-y-8 text-slate-700">
              <h2 className="heading-lg text-2xl md:text-3xl">Disclaimer</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Liability for external links</h3>
                <p>
                  Despite careful control of content, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Legal information / liability for content</h3>
                <p>
                  No liability or guarantee can be assumed for the timeliness, correctness, and completeness of the information provided on this website.
                </p>
              </div>
            </section>

            {/* Copyright */}
            <section className="space-y-4 text-slate-700">
              <h2 className="heading-lg text-2xl md:text-3xl">Copyright</h2>
              <p>
                The content and structure of the BevCon Beverage Consulting GmbH website are protected by copyright.
              </p>
              <p>
                The reproduction of information or data, in particular the use of texts, excerpts of texts, or images, requires the prior written consent of BevCon Beverage Consulting GmbH.
              </p>
            </section>

            {/* Website Development */}
            <section className="space-y-4 text-slate-700 border-t border-slate-200 pt-8">
              <h2 className="heading-lg text-2xl md:text-3xl">Website development</h2>
              <div className="space-y-2">
                <p className="font-bold">Website developed by Wovera Solutions PLC</p>
                <p><span className="font-semibold">Email:</span> <a href="mailto:info@woverasolutions.com" className="text-primary hover:text-primary-hover transition-colors">info@woverasolutions.com</a></p>
                <p><span className="font-semibold">Phone:</span> <a href="tel:+251910428013" className="text-primary hover:text-primary-hover transition-colors">+251 910 42 80 13</a></p>
                <p><span className="font-semibold">Website:</span> <a href="https://www.woverasolutions.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover transition-colors">https://www.woverasolutions.com/</a></p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
