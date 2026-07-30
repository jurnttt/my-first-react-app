import React from 'react';

// Reusable Star Component
const Stars = () => (
  <div className="flex gap-1 text-[#f2994a]">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-lg">★</span>
    ))}
  </div>
);

function App() {
  const ratings = [
    { text: "Rated 5 Stars in Reviews", shift: "md:self-start" },
    { text: "Rated 5 Stars in Report Guru", shift: "md:self-center" },
    { text: "Rated 5 Stars in BestTech", shift: "md:self-end" }
  ];

  const testimonials = [
    {
      name: "Colton Smith",
      image: "/images/colton.png",
      quote: '" We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! "'
    },
    {
      name: "Irene Roberts",
      image: "/images/irene.png",
      quote: '" Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery. "',
      shift: "md:translate-y-4"
    },
    {
      name: "Anne Wallace",
      image: "/images/anne.png",
      quote: '" Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! "',
      shift: "md:translate-y-8"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#502050] font-sans flex items-center justify-center p-6 md:p-12 overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col gap-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Left Text */}
          <div className="flex-1 max-w-md text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              10,000+ of our users love our products.
            </h1>
            <p className="text-[#937b93] text-sm md:text-base font-medium leading-relaxed">
              We only provide great products combined with excellent customer service. 
              See what our satisfied customers are saying about our services.
            </p>
          </div>

          {/* Right Rating Badges */}
          <div className="flex-1 w-full flex flex-col gap-4 max-w-md md:max-w-none">
            {ratings.map((rating, index) => (
              <div 
                key={index} 
                className={`bg-[#f7f2f7] rounded-lg px-8 py-4 flex flex-col sm:flex-row items-center gap-6 w-full md:w-[85%] ${rating.shift}`}
              >
                <Stars />
                <span className="font-bold text-xs md:text-sm tracking-wide text-[#502050]">
                  {rating.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:pb-12">
          {testimonials.map((user, index) => (
            <div 
              key={index} 
              className={`bg-[#502050] text-[#f7f2f7] rounded-xl p-8 flex flex-col gap-6 shadow-xl h-fit ${user.shift || ''}`}
            >
              {/* User Header */}
              <div className="flex items-center gap-4">
                <img 
                  src={user.image} 
                  alt={user.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-sm text-white">{user.name}</h3>
                  <span className="text-[#ee6b6e] text-xs font-medium">Verified Buyer</span>
                </div>
              </div>
              {/* User Quote */}
              <p className="text-xs md:text-sm leading-relaxed font-medium text-[#f7f2f7]/90">
                {user.quote}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
