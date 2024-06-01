import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold">NextJs Ecommerce</h1>
      </Link>

      <ul className="flex gap-4 items-center">
        <li>
          <Link
            href="/products"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Products
          </Link>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
