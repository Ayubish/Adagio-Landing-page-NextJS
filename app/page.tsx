import Link from "next/link";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <div className="hero relative flex flex-col backdrop-blur-lg h-screen w-full bg-right bg-contain px-[5%]">
        <div className="absolute -z-[5]left-0 h-screen w-full right-20 bg-gradient-to-r from-black to-[#333]"></div>
        <div className="absolute -z-[4] backdrop-blur-lg left-0 h-screen w-full blur "></div>
        <Nav />
        <div className="w-[50%] gap-5 p-10 mt-10">
          <h1>Simplify music teaching with Adagio</h1>
          <p>
            Add students, schedule lessons and performances, assign homework,
            and manage billing all in one place.
          </p>
          <div className="flex">
            <button className="btn-secondary">Get started for free</button>
            <button className="btn-primary">Watch demo</button>
          </div>
          <div className="flex">
            <h2>
              10K+ <small>Active Students</small>
            </h2>
            <h2 className="flex flex-col">
              200+ <span className="text-sm">Active Teachers</span>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
