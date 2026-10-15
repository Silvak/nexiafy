export const contactPageHero = {
  title: "Contact",
  subtitle: "Reach out to us worldwide",
};

export interface OfficeLocation {
  id: string;
  city: string;
  countryLabel: string;
  address: string;
  email: string;
  phone?: string;
  image: string;
  imageAlt: string;
}

export const officeLocations: OfficeLocation[] = [
  {
    id: "madrid",
    city: "Madrid, Spain",
    countryLabel: "Madrid",
    address: "P.º de la Castellana, 200, Floor 6",
    email: "contact@nexiafy.com",
    phone: "+34 555 010 200",
    image: "/images/image1.png",
    imageAlt: "Nexiafy Madrid office",
  },
  {
    id: "london",
    city: "London, UK",
    countryLabel: "London",
    address: "3 Waterhouse Sq, EC1N 2SW",
    email: "contact.uk@nexiafy.com",
    phone: "+44 555 010 300",
    image: "/images/image2.png",
    imageAlt: "Nexiafy London office",
  },
  {
    id: "berlin",
    city: "Berlin, Germany",
    countryLabel: "Berlin",
    address: "Friedrichstraße 68, 10117",
    email: "contact.de@nexiafy.com",
    phone: "+49 555 010 400",
    image: "/images/image3.png",
    imageAlt: "Nexiafy Berlin office",
  },
  {
    id: "toronto",
    city: "Toronto, Canada",
    countryLabel: "Toronto",
    address: "192 Spadina Ave, Suite 509",
    email: "contact.ca@nexiafy.com",
    phone: "+1 555 010 500",
    image: "/images/card-infra.png",
    imageAlt: "Nexiafy Toronto office",
  },
  {
    id: "san-francisco",
    city: "San Francisco, USA",
    countryLabel: "San Francisco",
    address: "447 Sutter St, Suite 506",
    email: "contact.us@nexiafy.com",
    image: "/images/card-AI.png",
    imageAlt: "Nexiafy San Francisco office",
  },
  {
    id: "singapore",
    city: "Singapore",
    countryLabel: "Singapore",
    address: "1 Raffles Place, Tower 2, Level 18",
    email: "contact.apac@nexiafy.com",
    phone: "+65 555 010 600",
    image: "/images/card-capacity.png",
    imageAlt: "Nexiafy Singapore office",
  },
];
