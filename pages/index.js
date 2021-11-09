import axios from "axios";
import Link from "next/link";
import Layout from "../Components/Layout/Layout";
import CareerHero from "../Components/Career/CareerHero";
import CareerGroup from "../Components/Career/CareerGroup";

function CareerHomePage() {
  return (
    <Layout>
      <CareerHero />
      <CareerGroup />
    </Layout>
  );
}

// async getStaticProps

export default CareerHomePage;
