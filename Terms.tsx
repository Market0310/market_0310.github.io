import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBanner from "@/components/MobileStickyBanner";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileStickyBanner />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-deep-navy mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 3, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By using our moving services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Services</h2>
              <p className="text-gray-700 mb-4">
                We provide professional moving services including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Residential and commercial moving</li>
                <li>Local and long-distance relocation</li>
                <li>Packing and unpacking services</li>
                <li>Specialty item moving (pianos, antiques)</li>
                <li>Storage solutions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Booking and Payment</h2>
              <p className="text-gray-700 mb-4">
                All bookings require a signed contract and may require a deposit. Payment terms will be specified in your moving contract. We accept cash, certified checks, and credit cards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Liability and Insurance</h2>
              <p className="text-gray-700 mb-4">
                We carry comprehensive liability insurance. Our liability for loss or damage is governed by federal transportation regulations and the terms specified in your moving contract. We recommend considering additional insurance for high-value items.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Customer Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                Customers are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Providing accurate inventory and moving details</li>
                <li>Being present during pickup and delivery</li>
                <li>Securing permits if required</li>
                <li>Declaring valuable or fragile items</li>
                <li>Payment according to agreed terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Cancellation Policy</h2>
              <p className="text-gray-700 mb-4">
                Cancellations must be made at least 48 hours before the scheduled move date. Cancellations made with less notice may incur charges as specified in your contract.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                Any disputes will be resolved through binding arbitration in accordance with the laws of Canada. We encourage customers to contact us directly to resolve any issues.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
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

export default Terms;