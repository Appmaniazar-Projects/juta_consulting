import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const ClientLogos = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  // Custom arrow components
  const NextArrow = () => (
    <button 
      onClick={() => sliderRef.current?.slickNext()}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
      aria-label="Next"
    >
      <ChevronRight className="h-6 w-6 text-gray-700" />
    </button>
  );

  const PrevArrow = () => (
    <button 
      onClick={() => sliderRef.current?.slickPrev()}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
      aria-label="Previous"
    >
      <ChevronLeft className="h-6 w-6 text-gray-700" />
    </button>
  );

  // JUTA's key partners and accreditation bodies
  const partners = [
    { 
      name: 'MICT SETA', 
      description: 'Media, Information and Communication Technologies Sector Education and Training Authority',
      logo: 'https://via.placeholder.com/150/2e3192/FFFFFF?text=MICT',
      category: 'Accreditation'
    },
    { 
      name: 'SAQA', 
      description: 'South African Qualifications Authority',
      logo: 'https://via.placeholder.com/150/00a651/FFFFFF?text=SQ',
      category: 'Accreditation'
    },
    { 
      name: 'QCTO', 
      description: 'Quality Council for Trades and Occupations',
      logo: 'https://via.placeholder.com/150/2e3192/FFFFFF?text=QC',
      category: 'Accreditation'
    },
    { 
      name: 'CompTIA', 
      description: 'Computing Technology Industry Association',
      logo: 'https://via.placeholder.com/150/00a651/FFFFFF?text=CT',
      category: 'Certification'
    },
    { 
      name: 'Microsoft', 
      description: 'Microsoft Partner Network',
      logo: 'https://via.placeholder.com/150/2e3192/FFFFFF?text=MS',
      category: 'Technology Partner'
    },
    { 
      name: 'NEMISA', 
      description: 'National Electronic Media Institute of South Africa',
      logo: 'https://via.placeholder.com/150/00a651/FFFFFF?text=NM',
      category: 'Government Partner'
    },
    { 
      name: 'B-BBEE', 
      description: 'Level 1 Contributor',
      logo: 'https://via.placeholder.com/150/2e3192/FFFFFF?text=BB',
      category: 'Certification'
    },
    { 
      name: 'ICDL', 
      description: 'International Computer Driving License',
      logo: 'https://via.placeholder.com/150/00a651/FFFFFF?text=IC',
      category: 'Certification'
    },
    { 
      name: 'DTI', 
      description: 'Department of Trade, Industry and Competition',
      logo: 'https://via.placeholder.com/150/2e3192/FFFFFF?text=DT',
      category: 'Government'
    },
  ];

    return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block mb-3 px-4 py-1 bg-[#00a651]/10 text-[#00a651] text-sm font-semibold rounded-full">
            TRUSTED PARTNERSHIPS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Accredited & Recognized by
            <span className="block text-[#2e3192] mt-2">Leading Organizations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            JUTA Training collaborates with industry leaders and accreditation bodies to deliver world-class IT education and skills development programs.
          </p>
        </div>
        
        <div className="relative px-10">
          <PrevArrow />
          <div className="px-8">
            <Slider ref={sliderRef} {...settings}>
              {partners.map((partner, index) => (
                <div key={index} className="px-2 py-4">
                  <div 
                    className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center h-40 border border-gray-100 hover:border-[#00a651]/30"
                    title={`${partner.name} - ${partner.description}`}
                  >
                    <div className="w-20 h-20 mb-3 rounded-full bg-gradient-to-br from-[#2e3192] to-[#00a651] flex items-center justify-center text-white text-xl font-bold">
                      {partner.logo ? (
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="h-12 w-auto object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '';
                            target.alt = partner.name;
                            target.parentElement!.textContent = partner.name.split(' ').map(word => word[0]).join('');
                          }}
                        />
                      ) : (
                        partner.name.split(' ').map(word => word[0]).join('')
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-800 text-center text-sm md:text-base">{partner.name}</h4>
                    <span className="text-xs text-gray-500 mt-1 px-2 py-0.5 bg-gray-50 rounded-full">
                      {partner.category}
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <NextArrow />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our growing community of success stories?
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center bg-[#2e3192] hover:bg-[#1e2570] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          >
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

    </section>
  );
};

export default ClientLogos;