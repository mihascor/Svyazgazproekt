
'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Mesmerizing%20night%20landscape%20with%20vast%20open%20field%20under%20spectacular%20starry%20sky%20filled%20with%20countless%20stars%20and%20constellations%2C%20two%20topographic%20surveying%20equipment%20silhouettes%20standing%20exactly%20on%20the%20horizon%20line%20taking%20up%20only%2010%25%20of%20the%20image%2C%20theodolite%20and%20total%20station%20visible%20only%20as%20dark%20shadows%20against%20the%20starry%20sky%2C%20minimalist%20and%20captivating%20countryside%20scenery%2C%20rolling%20fields%20extending%20to%20distant%20horizon%2C%20dramatic%20celestial%20display%20with%20milky%20way%20visible%2C%20peaceful%20serene%20atmosphere%2C%20surveying%20instruments%20appearing%20small%20against%20the%20grand%20cosmic%20backdrop%2C%20blue%20dark%20blue%20light%20blue%20white%20color%20scheme%2C%20moonlight%20gently%20illuminating%20the%20field%2C%20professional%20land%20surveying%20tools%20positioned%20precisely%20on%20horizon%2C%20enchanting%20night%20sky%20panorama%20with%20infinite%20stars%2C%20simple%20yet%20breathtaking%20landscape%20composition&width=1920&height=1080&seq=starry-field-horizon-equipment&orientation=landscape')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-right" style={{marginTop: '-150px'}}>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight cursor-pointer hover:scale-105 transition-transform duration-300 active:scale-110">
          Полный комплекс<br />
          проектно-изыскательских работ<br />
          по комплексам инженерно-технических средств охраны
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light" style={{marginTop: '20px'}}>
          Для объектов топливно-энергетического комплекса
        </p>
      </div>
    </section>
  );
}
