import Link from "next/link";
export type CountryDetails = {
  name: string;
  capital: string;
  population: string;
};

const countryDetails: CountryDetails[] = [
  {
    name: "Pakistan",
    capital: "Islamabad",
    population: "240 million",
  },
  {
    name: "Oman",
    capital: "Muscat",
    population: "4.5 million",
  },
  {
    name: "Turkey",
    capital: "Ankara",
    population: "85 million",
  },
  {
    name: "Iran",
    capital: "Tehran",
    population: "88 million",
  },
  {
    name: "Saudi Arab",
    capital: "Riyadh",
    population: "37 million",
  },
];

const CountryName = ({ params }: { params: { country_name: string } }) => {
  const country = countryDetails.find(
    (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
  );

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default CountryName;
