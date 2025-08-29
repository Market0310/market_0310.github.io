import CityPageTemplate from '@/components/CityPageTemplate';
import cityImage from '@/assets/city-background.jpg';

const CalgaryPage = () => {
  const cityData = {
    cityName: "Calgary",
    province: "AB",
    heroImage: cityImage,
    phoneNumber: "0000000000",
    description: "Calgary, Alberta's largest city and economic powerhouse, is home to over 1.3 million residents in the greater metropolitan area. Known for its proximity to the Canadian Rockies, thriving energy sector, and the famous Calgary Stampede, this dynamic city offers diverse neighborhoods from downtown high-rises to suburban family communities. Our Calgary moving team has extensive experience throughout the city, from the trendy Kensington and Hillhurst areas to the established communities of Mount Royal and Elbow Park, as well as the rapidly growing suburbs in the south and northwest.",
    landmarks: "Whether you're relocating near the iconic Calgary Tower, the bustling Stephen Avenue, the scenic Bow River pathways, or moving to one of Calgary's many distinct quadrants, our team understands the unique character of each neighborhood. We're experienced with moves in prestigious areas like Aspen Woods and Springbank Hill, established communities like Britannia and Elboya, and newer developments like Mahogany and Auburn Bay.",
    serviceAreas: [
      { area: "Downtown Calgary", distance: "0-5 km", driveTime: "10-25 min" },
      { area: "Kensington/Hillhurst", distance: "5 km", driveTime: "15-20 min" },
      { area: "Beltline", distance: "3 km", driveTime: "10-15 min" },
      { area: "Airdrie", distance: "30 km", driveTime: "35-45 min" },
      { area: "Cochrane", distance: "35 km", driveTime: "40-50 min" },
      { area: "Okotoks", distance: "25 km", driveTime: "30-40 min" },
      { area: "Chestermere", distance: "20 km", driveTime: "25-35 min" },
      { area: "Canmore", distance: "100 km", driveTime: "75-90 min" },
      { area: "High River", distance: "60 km", driveTime: "60-75 min" }
    ],
    localServices: [
      "Residential moving throughout Calgary and area",
      "Corporate relocation services for Calgary businesses",
      "Oil & gas industry executive relocations",
      "Luxury home moving in prestigious communities",
      "Condo and high-rise apartment moves",
      "Calgary Stampede event logistics support",
      "Climate-controlled storage in Calgary",
      "Mountain community moving to Canmore/Banff area"
    ],
    testimonials: [
      {
        name: "Sarah McDonald",
        neighborhood: "Mount Royal",
        text: "Our family's move from Mount Royal to Aspen Woods required special care for our antiques and artwork. The Calgary team's attention to detail was outstanding.",
        rating: 5
      },
      {
        name: "David Kumar",
        neighborhood: "Beltline",
        text: "Moving from our downtown condo to a house in Mahogany was handled expertly. They knew all the building protocols and made the transition smooth.",
        rating: 5
      }
    ],
    faqs: [
      {
        question: "Do you handle moves in Calgary's downtown core?",
        answer: "Yes, we're very experienced with Calgary's downtown buildings, including the complex logistics of high-rise condos, parking restrictions, and elevator reservations in the Beltline and downtown areas."
      },
      {
        question: "Can you move to the mountain communities like Canmore?",
        answer: "Absolutely. We regularly service Canmore, Banff, and other mountain communities. Our team is familiar with the mountain roads and seasonal access considerations."
      },
      {
        question: "Do you work with Calgary's corporate relocation needs?",
        answer: "Yes, we have extensive experience with corporate relocations in Calgary's energy sector and other industries, including executive moves and office relocations."
      },
      {
        question: "How do you handle Calgary's chinook weather changes?",
        answer: "Our Calgary team is well-versed in dealing with the city's unique weather patterns, including rapid temperature changes and occasional winter storms."
      }
    ]
  };

  return <CityPageTemplate {...cityData} />;
};

export default CalgaryPage;