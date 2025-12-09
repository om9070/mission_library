import dynamic from "next/dynamic";
import Loading from "./Loading";

const Servicelucation = dynamic(
  () => import("./_component/service_lucation/Servicelucation"),
  {
    loading: () => (
      <p>
        <Loading />
      </p>
    ),
  }
);

const Map = dynamic(() => import("./_component/map_section/Map"), {
  loading: () => (
    <p>
      <Loading />
    </p>
  ),
});



const Faqs = dynamic(() => import("./_component/faqs_section/Faqs"), {
  loading: () => (
    <p>
      <Loading />
    </p>
  ),
});

const Feature = dynamic(() => import("./_component/feature_section/Feature"), {
  loading: () => (
    <p>
      <Loading />
    </p>
  ),
});

const About = dynamic(() => import("./_component/about_section/About"), {
  loading: () => (
    <p>
      <Loading />
    </p>
  ),
});

const Product = dynamic(() => import("./_component/product_section/Product"), {
  loading: () => (
    <p>
      <Loading />
    </p>
  ),
});

const Hero = dynamic(() => import("./_component/hero_section/Hero"), {
  loading: () => (
    <p>
      <Loading />
    </p>
  ),
});



export default function Home() {
  return (
    <>
      <Hero />
      <Product />
      <About />
      <Feature />
      <Servicelucation />
      <Faqs />
      {/* <Service /> */}
      {/* <Client /> */}
      {/* <From/> */}
      <Map />
    </>
  );
}
