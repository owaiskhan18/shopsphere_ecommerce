import PromoBanner from "@/components/shared/PromoBanner";
import Category from "@/components/widgets/Category";
import NewArrival from "@/components/widgets/NewArrival";
import NewCategory from "@/components/widgets/NewCategory";
import ThisMonth from "@/components/widgets/ThisMonth";
import Speaker from "../assests/images/speaker.png";
import Wrapper from "@/components/shared/Wrapper";
import Products from "@/components/widgets/Products";
import GalleryCrads from "@/components/widgets/GalleryCrads";

const page = () => {
  return (
    <>
      <Category />
      <NewArrival />
      <NewCategory />
      <ThisMonth />
      <Wrapper>
        <div className="my-14">
          {/* Promo with text logo */}
          <PromoBanner
            logo="Categories"
            subtitle="Enhance Your Music Experience"
            buttonText="Buy Now"
            mainImage={Speaker}
            color="text-white"
            bgColor="bg-green-600"
            px="px-8"
            py="py-3"
            round="rounded-sm"
            cursor="cursor-pointer"
            shade="shadow-lg shadow-white/40"
          />
        </div>
      </Wrapper>
      <Products />
      <GalleryCrads />
    </>
  );
};

export default page;
