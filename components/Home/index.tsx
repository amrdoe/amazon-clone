import Image from "next/image";
import Product from "./Product";

export default function Home() {
  return (
    <main className="flex justify-center mx-auto max-w-[1500px]">
      <div className="w-full">
        <Image
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          width={1500}
          height={600}
          alt=""
          className="w-full -z-10 mb-[-150px] mask-image"
          style={
            {
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"
            }
          }
        />

        <div className="flex z-10 mx-[5px">
          <Product
            title="The Lean Startup"
            price={11.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            title="The Lean Startup"
            price={11.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
        </div>

        <div className="flex z-10 mx-[5px">
          <Product
            title="The Lean Startup"
            price={11.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            title="The Lean Startup"
            price={11.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            title="The Lean Startup"
            price={11.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
        </div>

        <div className="flex z-10 mx-[5px">
          <Product
            title="The Lean Startup"
            price={11.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
        </div>
      </div>
    </main>
  )
}