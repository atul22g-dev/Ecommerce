import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const data = {
  name: "Atul Ecommerce",
};

const About = () => {
  document.title = "Ecommerce | About"
  const { myName } = useProductContext();

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
