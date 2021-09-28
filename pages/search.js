import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import Inforcard from "../components/Inforcard";
import Map from "../components/Map";
import { useState } from "react";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  const [popupIndex, setPopupIndex] = useState('')

  const styleForFilters = `px-4 py-2 border hover:shadow-lg rounded-full cursor-pointer m-2 active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out`;
  return (
    <div>
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuests} guests`}
      />
      <main className="flex flex-col sm:flex-row ">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numberOfGuests} Guest(s).
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden md:inline-flex whitespace-nowrap mb-5">
            <p className={styleForFilters}>Cancellation Flexibility</p>
            <p className="filter">Type of price</p>
            <p className={styleForFilters}>Price</p>
            <p className={styleForFilters}>Rooms &amp; Beds</p>
            <p className={styleForFilters}>More Filters</p>
          </div>
          <div className="flex flex-col ">
          {searchResults.map(
            ({ img, location, title, description, star, price, total }, index) => (
              <div onClick={() => setPopupIndex(index)}>
              <Inforcard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
                id={index}
              />
              </div>
              )
          )}
          </div>
        </section>
        <section className="   xl:min-w-[600px]">
          <Map searchResults={searchResults} popupIndex={popupIndex} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
