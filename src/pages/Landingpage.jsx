import React from "react";
import CompanyCard from '../components/CompanyCard'
import logo from './lopha-travel-ltd.jpg'


const companies = [
  {
    id: 1,
    name: "Company Name",
    image: logo,
    description: "we deliver all places in nairobi",
  },
  {
    id: 2,
    name: "Company Name",
    image: logo,
    description: "we deliver all places in nairobi",
  },
  {
    id: 3,
    name: "Company Name",
    image: logo,
    description: "we deliver all places in nairobi",
  },
  {
    id: 4,
    name: "Company Name",
    image: logo,
    description: "we deliver all places in nairobi",
  },
  {
    id: 5,
    name: "Company Name",
    image: logo,
    description: "we deliver all places in nairobi",
  },
  {
    id: 6,
    name: "Company Name",
    image: logo,
    description: "we deliver all places in nairobi",
  },
];

function Landingpage() {
  return (
    <>    
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            companyName={company.name}
            imageSrc={company.image}
            description={company.description}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default Landingpage;
