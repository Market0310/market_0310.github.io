import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBanner from "@/components/MobileStickyBanner";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MobileStickyBanner />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-deep-navy mb-8">
            Accessibility Statement
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 3, 2025
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Our Commitment</h2>
              <p className="text-gray-700 mb-4">
                Our moving company is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Accessibility Features</h2>
              <p className="text-gray-700 mb-4">
                Our website includes the following accessibility features:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Semantic HTML structure for screen readers</li>
                <li>Keyboard navigation support</li>
                <li>Alt text for images</li>
                <li>High contrast color schemes</li>
                <li>Responsive design for various devices</li>
                <li>Clear and consistent navigation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Standards Compliance</h2>
              <p className="text-gray-700 mb-4">
                We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines help make web content more accessible to users with disabilities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Accessible Moving Services</h2>
              <p className="text-gray-700 mb-4">
                We provide accommodations for customers with disabilities:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Accessible communication options (phone, email, text)</li>
                <li>Flexible scheduling for special needs</li>
                <li>Assistance with packing and moving for those with mobility limitations</li>
                <li>Clear communication about building accessibility at destinations</li>
                <li>Coordination with disability support services when needed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Feedback and Assistance</h2>
              <p className="text-gray-700 mb-4">
                We welcome feedback on the accessibility of our website and services. If you encounter any barriers or need assistance, please let us know:
              </p>
              <div className="bg-soft-silver p-6 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> xyz@gmail.com</p>
                <p className="text-gray-700"><strong>Phone:</strong> 1-833-MOVE-NOW</p>
                <p className="text-gray-700"><strong>TTY:</strong> Available upon request</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Ongoing Improvements</h2>
              <p className="text-gray-700 mb-4">
                We are continuously working to improve accessibility by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Regular accessibility audits and testing</li>
                <li>Staff training on accessibility best practices</li>
                <li>Incorporating user feedback into our improvements</li>
                <li>Staying current with accessibility standards and technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-deep-navy mb-4">Alternative Formats</h2>
              <p className="text-gray-700 mb-4">
                If you need information from our website in an alternative format, such as large print, audio, or Braille, please contact us and we will provide it in a timely manner.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Accessibility;