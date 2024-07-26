import Link from "next/link";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <div className="hero relative flex flex-col backdrop-blur-lg h-screen w-full bg-right bg-contain px-[5%]">
        <div className="absolute -z-[10] backdrop-blur-3xl left-0 h-screen w-3/5 blur"></div>
        <div className="absolute -z-[10] left-0 h-screen w-full right-20 bg-gradient-to-r from-black to-[rgba(51,51,51,0.31)]"></div>
        <Nav />
        <div className="w-[50%] gap-5 p-10 mt-10">
          <h1 className="mb-10">Simplify music teaching with Adagio</h1>
          <p className="mb-5">
            Add students, schedule lessons and performances, assign homework,
            and manage billing all in one place.
          </p>
          <div className="flex">
            <button className="btn-secondary my-4 mr-4">
              Get started for free
            </button>
            <button className="btn-primary my-4">Watch demo</button>
          </div>
          <div className="flex">
            <h2 className="flex flex-col mr-5">
              10K+{" "}
              <small className="text-sm font-normal">Active Students</small>
            </h2>
            <h2 className="flex flex-col">
              200+ <span className="text-sm font-normal">Active Teachers</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
