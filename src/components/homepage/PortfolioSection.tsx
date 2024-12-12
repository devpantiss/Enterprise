import React from "react";

interface EntrepreneurCardProps {
  name: string;
  imgSrc: string;
  company: string;
}

const EntrepreneurCard: React.FC<EntrepreneurCardProps> = ({
  name,
  imgSrc,
  company,
}) => {
  return (
    <div className="relative group w-64 h-80 overflow-hidden rounded-lg shadow-lg">
      {/* Image */}
      <img
        src={imgSrc}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-500"></div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h2 className="text-white text-xl font-semibold">{company}</h2>
      </div>
    </div>
  );
};

interface Entrepreneur {
  name: string;
  imgSrc: string;
  company: string;
}

const Portfolio: React.FC = () => {
  const entrepreneurs: Entrepreneur[] = [
    {
      name: "Entrepreneur 1",
      imgSrc:
        "https://d3vrux30chabys.cloudfront.net/wp-content/uploads/2023/04/Phool-blackwhite.jpg",
      company: "Phool",
    },
    {
      name: "Entrepreneur 2",
      imgSrc:
        "https://d3vrux30chabys.cloudfront.net/wp-content/uploads/2023/04/Desi-Hangover-blackwhite.jpg",
      company: "Desi Hangover",
    },
    {
      name: "Entrepreneur 3",
      imgSrc:
        "https://d3vrux30chabys.cloudfront.net/wp-content/uploads/2023/04/Samsara-Paediacare-blackwhite.jpg",
      company: "Samsara Paediacare",
    },
    {
      name: "Entrepreneur 4",
      imgSrc:
        "https://d3vrux30chabys.cloudfront.net/wp-content/uploads/2023/04/Padcare-blackwhite.jpg",
      company: "Padcare",
    },
  ];

  return (
    <section className="container mx-auto flex flex-col justify-center items-center py-6">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[12px] uppercase font-bold text-orange-400">Meet Some of Our Remarkable Portfolio Companies</p>
        <p className="font-bold text-[28px]">The Bold, Audacious Entrepreneurs.</p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center mt-10">
        {entrepreneurs.map((entrepreneur, index) => (
          <EntrepreneurCard
            key={index}
            name={entrepreneur.name}
            imgSrc={entrepreneur.imgSrc}
            company={entrepreneur.company}
          />
        ))}
      </div>
      <div className="mt-8">
        <button className="bg-black p-3 text-white text-[8px]">SEE ALL PORTFOLIO COMPANIES</button>
      </div>
    </section>
  );
};

export default Portfolio;
