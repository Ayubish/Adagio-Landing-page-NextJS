import Link from "next/link";
const Nav = () => {
  return (
    <div className="flex items-center justify-between px-10 py-3">
      <div className="flex justify-between gap-[10%]">
        <h2 className="text-3xl font-bold items-center">Adagio</h2>
        <ul className="flex gap-10 items-center">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>Features</li>
          </Link>
          <Link href="/services">
            <li>Products</li>
          </Link>
          <Link href="/contact">
            <li>Pricing</li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center">
        <p className="px-4">Sign in</p>
        <button className="btn-secondary">Get started</button>
      </div>
    </div>
  );
};

export default Nav;
