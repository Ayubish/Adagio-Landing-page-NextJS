import Link from "next/link";
const About = () => {
  return (
    <div>
      <h1>This is my about page!</h1>
      <Link href="/">
        <p>Back to homepage</p>
      </Link>
    </div>
  );
};

export default About;
