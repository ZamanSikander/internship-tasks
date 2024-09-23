import HomeJewelery from "../components/HomeJewelery";
import HomeMen from "../components/HomeMen";
import HomeWomen from "../components/HomeWomen";
import HomeElectronics from "../components/HomeElectonics";
const Home = () => {
  return (
    <div className="mt-20 flex flex-col">
      <h1 className="text-center text-2xl font-bold  container mx-auto mt-20">
        Shop Our Best Products
      </h1>
      <HomeJewelery></HomeJewelery>
      <HomeMen></HomeMen>
      <HomeWomen></HomeWomen>
      <HomeElectronics></HomeElectronics>
    </div>
  );
};

export default Home;
