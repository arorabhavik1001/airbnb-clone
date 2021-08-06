import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Bhavik's Airbnb</title>
        <link
          rel="icon"
          href="https://cdn.icon-icons.com/icons2/836/PNG/512/Airbnb_icon-icons.com_66791.png"
        />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6 ">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
                />
                ))}
          </div>
        </section>
                <LargeCard key="https://a0.muscache.com/im/pictures/a915ff27-6062-436d-a7a9-007685423f7b.jpg?im_w=720" img="https://a0.muscache.com/im/pictures/a915ff27-6062-436d-a7a9-007685423f7b.jpg?im_w=720" title="Not sure where to go? Perfect." description=" " buttonText="I'm flexible" />
        <section>
          <h3 className="text-4xl font-semibold py-8">Live Anywhere</h3>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
          <LargeCard key="https://links.papareact.com/4cj" img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="Wishlsits curated by Bhavik" buttonText="Get Inspired" />
        </main>
        <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
