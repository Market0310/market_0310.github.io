import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBanner from "@/components/MobileStickyBanner";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileStickyBanner />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-deep-navy mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 3, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                When you use our moving services or contact us for a quote, we may collect the following information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Personal contact information (name, phone number, email address)</li>
                <li>Moving details (pickup and delivery addresses, inventory, moving date)</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Communication records (emails, phone calls, text messages)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide moving services and communicate about your move</li>
                <li>Process payments and maintain financial records</li>
                <li>Improve our services and customer experience</li>
                <li>Send service updates and important notifications</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With trusted service providers who assist in delivering our services</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-soft-silver p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> xyz@gmail.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> 1-833-MOVE-NOW</p>
                <p className="text-gray-700"><strong>Address:</strong> xyz</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;