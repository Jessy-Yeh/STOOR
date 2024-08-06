interface Props {
  title: string;
  description: string;
}

const Banner = ({ title, description }: Props) => {
  return (
    <>
      <div className=" px-6 py-10 sm:py-20 lg:px-8 ">
        <div className="mx-auto max-w-2xl text-center ">
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>
      </div>

      <div className="relative">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
      </div>
    </>
  );
};

export default Banner;
