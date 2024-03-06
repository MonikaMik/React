import Skeleton from "./Skeleton";
import SliderTest from "./Slider";

const MUI_Test = () => {
  return (
    <>
      <SliderTest minDistance={20} />
      <Skeleton />
      <SliderTest minDistance={30} />
    </>
  );
};

export default MUI_Test;
