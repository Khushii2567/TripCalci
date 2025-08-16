import React from 'react';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const LocationSelect = ({ 
  label, 
  value, 
  onChange, 
  error, 
  placeholder, 
  showGeolocation = false,
  onGeolocationClick 
}) => {
  const popularDestinations = [
  { value: 'taj-mahal', label: 'Taj Mahal, Agra', description: 'One of the Seven Wonders of the World, symbol of love' },
  { value: 'red-fort', label: 'Red Fort, Delhi', description: 'Historic Mughal fort and UNESCO World Heritage Site' },
  { value: 'qutub-minar', label: 'Qutub Minar, Delhi', description: 'Tallest brick minaret in the world' },
  { value: 'india-gate', label: 'India Gate, Delhi', description: 'War memorial and iconic landmark' },
  { value: 'gateway-of-india', label: 'Gateway of India, Mumbai', description: 'Famous arch monument overlooking the Arabian Sea' },
  { value: 'ajanta-caves', label: 'Ajanta Caves, Maharashtra', description: 'Ancient Buddhist rock-cut caves with paintings' },
  { value: 'ellora-caves', label: 'Ellora Caves, Maharashtra', description: 'UNESCO site with Hindu, Buddhist, and Jain temples' },
  { value: 'hawa-mahal', label: 'Hawa Mahal, Jaipur', description: 'The Palace of Winds, iconic pink sandstone structure' },
  { value: 'amber-fort', label: 'Amber Fort, Jaipur', description: 'Majestic hilltop fort overlooking Maota Lake' },
  { value: 'jantar-mantar', label: 'Jantar Mantar, Jaipur', description: 'Astronomical observatory and UNESCO site' },
  { value: 'city-palace-udaipur', label: 'City Palace, Udaipur', description: 'Royal complex on Lake Pichola' },
  { value: 'meherangarh-fort', label: 'Mehrangarh Fort, Jodhpur', description: 'Massive fort overlooking the Blue City' },
  { value: 'ranthambore', label: 'Ranthambore National Park, Rajasthan', description: 'Famous for Bengal tigers and safaris' },
  { value: 'gir-forest', label: 'Gir Forest, Gujarat', description: 'Home of Asiatic lions' },
  { value: 'somnath-temple', label: 'Somnath Temple, Gujarat', description: 'Ancient temple on the Arabian Sea' },
  { value: 'sanchi-stupa', label: 'Sanchi Stupa, Madhya Pradesh', description: 'Buddhist monument built by Emperor Ashoka' },
  { value: 'khajuraho-temples', label: 'Khajuraho Temples, Madhya Pradesh', description: 'Famous for intricate erotic sculptures' },
  { value: 'kanha-national-park', label: 'Kanha National Park, Madhya Pradesh', description: 'Inspiration for Kipling’s Jungle Book' },
  { value: 'sundarbans', label: 'Sundarbans, West Bengal', description: 'Mangrove forest with Bengal tigers' },
  { value: 'darjeeling', label: 'Darjeeling, West Bengal', description: 'Famous hill station with tea gardens' },
  { value: 'kaziranga', label: 'Kaziranga National Park, Assam', description: 'Home of the one-horned rhinoceros' },
  { value: 'majuli', label: 'Majuli Island, Assam', description: 'World’s largest river island' },
  { value: 'shillong', label: 'Shillong, Meghalaya', description: 'Known as the Scotland of the East' },
  { value: 'cherrapunji', label: 'Cherrapunji, Meghalaya', description: 'Famous for living root bridges and rainfall' },
  { value: 'bhubaneswar', label: 'Bhubaneswar, Odisha', description: 'Temple city of India' },
  { value: 'konark-sun-temple', label: 'Konark Sun Temple, Odisha', description: '13th-century temple shaped like a chariot' },
  { value: 'puri-jagannath', label: 'Jagannath Temple, Puri', description: 'Sacred Hindu pilgrimage site' },
  { value: 'bodh-gaya', label: 'Bodh Gaya, Bihar', description: 'Where Buddha attained enlightenment' },
  { value: 'nalanda', label: 'Nalanda University, Bihar', description: 'Ancient center of learning' },
  { value: 'varanasi-ghats', label: 'Ghats of Varanasi, Uttar Pradesh', description: 'Sacred city on the banks of Ganga' },
  { value: 'fatehpur-sikri', label: 'Fatehpur Sikri, Uttar Pradesh', description: 'Historic Mughal capital' },
  { value: 'kedarnath', label: 'Kedarnath, Uttarakhand', description: 'Sacred temple in the Himalayas' },
  { value: 'badrinath', label: 'Badrinath, Uttarakhand', description: 'One of the Char Dham pilgrimage sites' },
  { value: 'haridwar', label: 'Haridwar, Uttarakhand', description: 'Gateway to the Ganges pilgrimage' },
  { value: 'rishikesh', label: 'Rishikesh, Uttarakhand', description: 'Yoga capital of the world' },
  { value: 'nainital', label: 'Nainital, Uttarakhand', description: 'Scenic hill station with lakes' },
  { value: 'shimla', label: 'Shimla, Himachal Pradesh', description: 'Colonial summer capital' },
  { value: 'manali', label: 'Manali, Himachal Pradesh', description: 'Popular hill station and adventure hub' },
  { value: 'leh-ladakh', label: 'Leh-Ladakh, Jammu & Kashmir', description: 'High-altitude desert with monasteries' },
  { value: 'pangong-lake', label: 'Pangong Lake, Ladakh', description: 'Beautiful high-altitude lake' },
  { value: 'gulmarg', label: 'Gulmarg, Jammu & Kashmir', description: 'Skiing and meadow destination' },
  { value: 'srinagar-dal-lake', label: 'Dal Lake, Srinagar', description: 'Famous for houseboats and shikaras' },
  { value: 'amritsar-golden-temple', label: 'Golden Temple, Amritsar', description: 'Sacred Sikh shrine' },
  { value: 'wagah-border', label: 'Wagah Border, Punjab', description: 'India-Pakistan border ceremony' },
  { value: 'madurai-meenakshi', label: 'Meenakshi Temple, Madurai', description: 'Iconic Dravidian-style temple' },
  { value: 'brihadeeswarar-temple', label: 'Brihadeeswarar Temple, Tamil Nadu', description: 'UNESCO World Heritage Site temple' },
  { value: 'kanyakumari', label: 'Kanyakumari, Tamil Nadu', description: 'Southernmost tip of India' },
  { value: 'pondicherry', label: 'Pondicherry, Tamil Nadu', description: 'French colonial town with beaches' },
  { value: 'ooty', label: 'Ooty, Tamil Nadu', description: 'Hill station with tea plantations' },
  { value: 'mysore-palace', label: 'Mysore Palace, Karnataka', description: 'Royal palace with Indo-Saracenic architecture' },
  { value: 'hampi', label: 'Hampi, Karnataka', description: 'Ruins of Vijayanagara Empire' },
  { value: 'coorg', label: 'Coorg, Karnataka', description: 'Coffee plantations and hills' },
  { value: 'goa-beaches', label: 'Beaches of Goa', description: 'Famous for nightlife and Portuguese heritage' },
  { value: 'mahabalipuram', label: 'Mahabalipuram, Tamil Nadu', description: 'Shore temples and rock-cut sculptures' },
  { value: 'andaman-nicobar', label: 'Andaman & Nicobar Islands', description: 'Pristine islands with coral reefs' },
  { value: 'lakshadweep', label: 'Lakshadweep Islands', description: 'Tropical archipelago in Arabian Sea' },
  { value: 'sikkim-gangtok', label: 'Gangtok, Sikkim', description: 'Capital city with monasteries' },
  { value: 'nathula-pass', label: 'Nathula Pass, Sikkim', description: 'Mountain pass on Indo-China border' },
  { value: 'tsomgo-lake', label: 'Tsomgo Lake, Sikkim', description: 'Glacial lake surrounded by mountains' },
  { value: 'jorhat-tea-gardens', label: 'Tea Gardens, Assam', description: 'World-famous Assam tea plantations' },
  { value: 'mount-abu', label: 'Mount Abu, Rajasthan', description: 'Hill station with Dilwara temples' },
  { value: 'bharatpur-bird-sanctuary', label: 'Bharatpur Bird Sanctuary, Rajasthan', description: 'UNESCO site famous for migratory birds' },
  { value: 'elluru', label: 'Charminar, Hyderabad', description: 'Iconic mosque and landmark of Hyderabad' },
  { value: 'ramoji-film-city', label: 'Ramoji Film City, Hyderabad', description: 'World’s largest film studio complex' },
  { value: 'vishakhapatnam', label: 'Visakhapatnam, Andhra Pradesh', description: 'Coastal city with beaches and Araku Valley' },
  { value: 'hyderabad-golconda', label: 'Golconda Fort, Hyderabad', description: 'Historic fort known for acoustics' },
  { value: 'bhimbetka', label: 'Bhimbetka Rock Shelters, Madhya Pradesh', description: 'Prehistoric cave paintings' },
  { value: 'lonar-lake', label: 'Lonar Lake, Maharashtra', description: 'Crater lake formed by meteor impact' },
  { value: 'ellora-kailasa', label: 'Kailasa Temple, Ellora', description: 'Monolithic rock-cut temple' },
  { value: 'new-york', label: 'New York City, USA', description: 'The Big Apple, famous for Times Square & Statue of Liberty' },
  { value: 'los-angeles', label: 'Los Angeles, USA', description: 'Hollywood and entertainment capital' },
  { value: 'san-francisco', label: 'San Francisco, USA', description: 'Golden Gate Bridge and Alcatraz Island' },
  { value: 'las-vegas', label: 'Las Vegas, USA', description: 'World’s entertainment capital with casinos' },
  { value: 'grand-canyon', label: 'Grand Canyon, USA', description: 'Spectacular natural wonder in Arizona' },
  { value: 'yellowstone', label: 'Yellowstone National Park, USA', description: 'First national park with geysers and wildlife' },
  { value: 'niagara-falls', label: 'Niagara Falls, USA/Canada', description: 'Massive waterfalls on the US-Canada border' },
  { value: 'toronto', label: 'Toronto, Canada', description: 'CN Tower and cultural hub' },
  { value: 'vancouver', label: 'Vancouver, Canada', description: 'Coastal city with mountains and ocean views' },
  { value: 'banff', label: 'Banff National Park, Canada', description: 'Scenic lakes and Rocky Mountains' },
  { value: 'rio-de-janeiro', label: 'Rio de Janeiro, Brazil', description: 'Christ the Redeemer and Copacabana beach' },
  { value: 'machu-picchu', label: 'Machu Picchu, Peru', description: 'Lost city of the Incas in the Andes' },
  { value: 'buenos-aires', label: 'Buenos Aires, Argentina', description: 'European-style city famous for tango' },
  { value: 'patagonia', label: 'Patagonia, Argentina/Chile', description: 'Wilderness of mountains and glaciers' },
  { value: 'salar-de-uyuni', label: 'Salar de Uyuni, Bolivia', description: 'World’s largest salt flat' },
  { value: 'galapagos', label: 'Galápagos Islands, Ecuador', description: 'Unique wildlife and volcanic landscapes' },
  { value: 'london', label: 'London, UK', description: 'Big Ben, Buckingham Palace, and museums' },
  { value: 'paris', label: 'Paris, France', description: 'Eiffel Tower and city of romance' },
  { value: 'versailles', label: 'Versailles, France', description: 'Grand royal palace near Paris' },
  { value: 'rome', label: 'Rome, Italy', description: 'Colosseum and Roman heritage' },
  { value: 'venice', label: 'Venice, Italy', description: 'Canals, gondolas, and historic charm' },
  { value: 'florence', label: 'Florence, Italy', description: 'Renaissance art and architecture' },
  { value: 'barcelona', label: 'Barcelona, Spain', description: 'Gaudí architecture and vibrant culture' },
  { value: 'madrid', label: 'Madrid, Spain', description: 'Royal Palace and Prado Museum' },
  { value: 'lisbon', label: 'Lisbon, Portugal', description: 'Hilly capital with trams and ocean views' },
  { value: 'athens', label: 'Athens, Greece', description: 'Acropolis and cradle of Western civilization' },
  { value: 'santorini', label: 'Santorini, Greece', description: 'Whitewashed houses and blue domes' },
  { value: 'amsterdam', label: 'Amsterdam, Netherlands', description: 'Canals, tulips, and bicycles' },
  { value: 'brussels', label: 'Brussels, Belgium', description: 'Grand Place and waffles' },
  { value: 'berlin', label: 'Berlin, Germany', description: 'Berlin Wall and Brandenburg Gate' },
  { value: 'munich', label: 'Munich, Germany', description: 'Oktoberfest and Bavarian culture' },
  { value: 'vienna', label: 'Vienna, Austria', description: 'Classical music and imperial palaces' },
  { value: 'prague', label: 'Prague, Czech Republic', description: 'Fairytale old town and Charles Bridge' },
  { value: 'budapest', label: 'Budapest, Hungary', description: 'Thermal baths and Danube River' },
  { value: 'moscow', label: 'Moscow, Russia', description: 'Kremlin and Red Square' },
  { value: 'st-petersburg', label: 'St. Petersburg, Russia', description: 'Hermitage Museum and canals' },
  { value: 'istanbul', label: 'Istanbul, Turkey', description: 'Hagia Sophia and Bosphorus bridge of Europe & Asia' },
  { value: 'cappadocia', label: 'Cappadocia, Turkey', description: 'Fairy chimneys and hot air balloons' },
  { value: 'dubai', label: 'Dubai, UAE', description: 'Burj Khalifa and luxury lifestyle' },
  { value: 'abu-dhabi', label: 'Abu Dhabi, UAE', description: 'Sheikh Zayed Grand Mosque' },
  { value: 'petra', label: 'Petra, Jordan', description: 'Rose-red ancient rock city' },
  { value: 'jerusalem', label: 'Jerusalem, Israel', description: 'Sacred city for three religions' },
  { value: 'cairo', label: 'Cairo, Egypt', description: 'Pyramids of Giza and Sphinx' },
  { value: 'marrakech', label: 'Marrakech, Morocco', description: 'Markets and palaces in vibrant city' },
  { value: 'cape-town', label: 'Cape Town, South Africa', description: 'Table Mountain and beaches' },
  { value: 'kruger-park', label: 'Kruger National Park, South Africa', description: 'Famous safari destination' },
  { value: 'serengeti', label: 'Serengeti, Tanzania', description: 'Great migration of wildebeest' },
  { value: 'kilimanjaro', label: 'Mount Kilimanjaro, Tanzania', description: 'Africa’s highest peak' },
  { value: 'seychelles', label: 'Seychelles', description: 'Paradise islands with beaches' },
  { value: 'maldives', label: 'Maldives', description: 'Overwater bungalows and turquoise seas' },
  { value: 'bali', label: 'Bali, Indonesia', description: 'Island of temples and beaches' },
  { value: 'jakarta', label: 'Jakarta, Indonesia', description: 'Vibrant capital of Indonesia' },
  { value: 'singapore', label: 'Singapore', description: 'Gardens by the Bay and Marina Bay Sands' },
  { value: 'bangkok', label: 'Bangkok, Thailand', description: 'Temples and vibrant nightlife' },
  { value: 'phuket', label: 'Phuket, Thailand', description: 'Beaches and island hopping' },
  { value: 'kuala-lumpur', label: 'Kuala Lumpur, Malaysia', description: 'Petronas Towers and cultural mix' },
  { value: 'hanoi', label: 'Hanoi, Vietnam', description: 'Old Quarter and culture-rich capital' },
  { value: 'halong-bay', label: 'Ha Long Bay, Vietnam', description: 'Limestone karsts and emerald waters' },
  { value: 'hong-kong', label: 'Hong Kong', description: 'Skyline, shopping, and Victoria Peak' },
  { value: 'tokyo', label: 'Tokyo, Japan', description: 'Skyscrapers, anime, and Shibuya Crossing' },
  { value: 'kyoto', label: 'Kyoto, Japan', description: 'Temples, gardens, and geisha culture' },
  { value: 'mt-fuji', label: 'Mount Fuji, Japan', description: 'Iconic snow-capped volcano' },
  { value: 'seoul', label: 'Seoul, South Korea', description: 'Palaces, shopping, and K-pop' },
  { value: 'jeju-island', label: 'Jeju Island, South Korea', description: 'Scenic island and volcanic landscapes' },
  { value: 'beijing', label: 'Beijing, China', description: 'Forbidden City and Great Wall' },
  { value: 'shanghai', label: 'Shanghai, China', description: 'Modern skyline and historic Bund' },
  { value: 'xi-an', label: 'Xi’an, China', description: 'Terracotta Army and Silk Road city' },
  { value: 'sydney', label: 'Sydney, Australia', description: 'Opera House and Harbour Bridge' },
  { value: 'melbourne', label: 'Melbourne, Australia', description: 'Cultural capital of Australia' },
  { value: 'great-barrier-reef', label: 'Great Barrier Reef, Australia', description: 'World’s largest coral reef system' },
  { value: 'auckland', label: 'Auckland, New Zealand', description: 'City of sails with volcanic landscapes' },
  { value: 'queenstown', label: 'Queenstown, New Zealand', description: 'Adventure sports capital' },
  { value: 'fiordland', label: 'Fiordland National Park, New Zealand', description: 'Stunning fjords and wilderness' },
  { value: 'antarctica', label: 'Antarctica', description: 'Remote icy continent with unique wildlife' }
  ];

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-foreground">
          {label}
          <span className="text-error ml-1">*</span>
        </label>
        {showGeolocation && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onGeolocationClick}
            iconName="MapPin"
            iconPosition="left"
            className="text-xs"
          >
            Use Current Location
          </Button>
        )}
      </div>
      <Select
        options={popularDestinations}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        searchable
        clearable
        description="Choose from popular destinations or search for your location"
      />
    </div>
  );
};

export default LocationSelect;