import CityPageTemplate from '@/components/CityPageTemplate';
import cityImage from '@/assets/city-background.jpg';

const EdmontonPage = () => {
  const cityData = {
    cityName: "Edmonton",
    province: "AB",
    heroImage: cityImage,
    phoneNumber: "0000000000",
    description: "As Alberta's capital city and home to over one million residents, Edmonton is a vibrant metropolitan area with diverse neighborhoods, thriving business districts, and rich cultural heritage. Our Edmonton moving team understands the unique characteristics of this city, from the historic Old Strathcona district to the modern downtown core and sprawling suburban communities. We've successfully completed thousands of moves throughout Edmonton and the greater metropolitan area, helping families and businesses relocate to and from this dynamic Prairie city.",
    landmarks: "Whether you're moving near the iconic West Edmonton Mall, the scenic North Saskatchewan River valley, the University of Alberta campus, or any of Edmonton's 375 neighborhoods, our local team knows the city inside and out. We're familiar with building access requirements in high-rise condos downtown, the unique challenges of moving in established neighborhoods like Garneau and Westmount, and the logistics of serving newer developments like Summerside and Rosenthal.",
    serviceAreas: [
      { area: "Downtown Edmonton", distance: "0-5 km", driveTime: "15-30 min" },
      { area: "Sherwood Park", distance: "15 km", driveTime: "20-25 min" },
      { area: "St. Albert", distance: "20 km", driveTime: "25-35 min" },
      { area: "Spruce Grove", distance: "25 km", driveTime: "30-40 min" },
      { area: "Leduc", distance: "30 km", driveTime: "35-45 min" },
      { area: "Fort Saskatchewan", distance: "35 km", driveTime: "40-50 min" },
      { area: "Beaumont", distance: "25 km", driveTime: "30-40 min" },
      { area: "Devon", distance: "40 km", driveTime: "45-55 min" },
      { area: "Stony Plain", distance: "30 km", driveTime: "35-45 min" }
    ],
    localServices: [
      "Residential moving throughout Edmonton and area",
      "Commercial moving for Edmonton businesses",
      "University of Alberta student moving services",
      "High-rise condo and apartment moves",
      "Piano moving specialists in Edmonton",
      "Storage solutions with Edmonton facilities",
      "Packing services using local suppliers",
      "Same-day emergency moving in Edmonton"
    ],
    testimonials: [
      {
        name: "Jennifer Walsh",
        neighborhood: "Oliver District",
        text: "Moving from our condo in Oliver to a house in Summerside was seamless. The team knew exactly how to handle the downtown building requirements and timing restrictions.",
        rating: 5
      },
      {
        name: "Mark Chen",
        neighborhood: "University Area",
        text: "As UofA professors, we needed to move quickly between semesters. Our movers understood our timeline and completed our move from Garneau to Riverbend perfectly.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "Do you handle moves in downtown Edmonton high-rises?",
        answer: "Yes, we're experienced with Edmonton's downtown condo and apartment buildings. We coordinate with building management for elevator reservations, loading dock access, and timing requirements."
      },
      {
        question: "Can you move to the new neighborhoods in south Edmonton?",
        answer: "Absolutely. We regularly serve all the newer developments including Summerside, Rosenthal, Keswick, and Heritage Valley. Our team is familiar with these growing communities."
      },
      {
        question: "Do you provide moving services to the University of Alberta?",
        answer: "Yes, we offer specialized student moving services and are familiar with campus housing, nearby rental properties, and the unique needs of university students and faculty."
      },
      {
        question: "How do you handle Edmonton's winter weather conditions?",
        answer: "Our Edmonton team is well-prepared for Prairie winters with proper equipment, vehicles, and techniques to ensure safe moves even in snow and cold conditions."
      }
    ]
  };

  return <CityPageTemplate {...cityData} />;
};

export default EdmontonPage;