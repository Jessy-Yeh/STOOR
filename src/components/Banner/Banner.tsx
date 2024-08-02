import { Divider } from "@mui/material";

const Banner = () => {
  return (
    <>
      <div className=" px-6 py-10 sm:py-20 lg:px-8 ">
        <div className="mx-auto max-w-2xl text-center ">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Our Clothing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Nullam leo condimentum
            turpis aliquet. Fermentum purus amet vitae sed nam imperdiet. Sit
            cursus sed commodo aliquet ultricies mi volutpat tortor at. A
            gravida enim ut quis et in lectus. Dolor tortor facilisi egestas
            faucibus nulla. Nibh accumsan felis tempor convallis nunc porta
            integer.
          </p>
        </div>
      </div>

      <Divider />
    </>
  );
};

export default Banner;
