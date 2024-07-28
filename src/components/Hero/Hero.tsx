import ReactIcon from "../../assets/react.png";
import NextjsIcon from "../../assets/next-js.svg";
import TailwindCSSIcon from "../../assets/tailwindcss.png";

const Hero = () => {
  return (
    <main className="bg-slate-600">
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* navbar section */}

          {/* hero section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[850px] place-items-center">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14">
                ShinCode.inc
              </h1>

              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h2 className="text-2xl">コーディング専門会社</h2>
                  <p className="text-base opacity-55 leading-loose">
                    Web制作/Webアプリ開発を承ります。React/Next.js/TailwindCSSを使ったモダンWeb制作環境を整え、クライアントのご要望にお応えします。SEO対策にも力を入れております。
                  </p>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700"></div>
              </div>
            </div>
            {/* Hero image section */}
            <div className="relative">
              <img
                src={ReactIcon}
                alt=""
                className="relative z-40 w-30 h-28 sm:-top-28 sm:-left-20 cursor-pointer hover:scale-110 transition-all duration-150"
              />
              <img
                src={NextjsIcon}
                alt=""
                className="relative z-40 w-35 h-28 -top-12 left-10 cursor-pointer hover:scale-110 transition-all duration-150"
              />
              <img
                src={TailwindCSSIcon}
                alt=""
                className="relative z-40 w-30 h-28 -left-10 top-4 cursor-pointer hover:scale-110 transition-all duration-150"
              />

              {/* big text section */}
              <div className="absolute -top-20 left-[200px] z-[1]">
                <h2 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Coding.
                </h2>
              </div>
            </div>

            {/* third party section */}
            <div>
              <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
                <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                  ShinCode.inc
                </h1>

                <div className="relative">
                  <div className="relative z-10 space-y-4">
                    <h2 className="text-2xl">モダンWeb開発</h2>
                    <p className="text-base opacity-55 leading-loose">
                      Web制作/Webアプリ開発を承ります。React/Next.js/TailwindCSSを使ったモダンWeb制作環境を整え、クライアントのご要望にお応えします。SEO対策にも力を入れております。
                    </p>
                  </div>
                  <div className="absolute -top-6 -right-0 w-[250px] h-[190px] bg-darkGray/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
