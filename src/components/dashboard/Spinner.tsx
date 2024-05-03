import Image from "next/image";

export const Spinner = () => {
  return (
    <div className="h-screen bg-white">
      <div className="flex justify-center items-center h-full">
        <Image
          className="h-16 w-16"
          src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
          alt="loading..."
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};
