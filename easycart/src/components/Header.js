import Link from 'next/link';

const Header = () => (
  <header>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/products/create">Add Product</Link>
      <Link href="/cart">Cart</Link>
    </nav>
  </header>
);

export default Header;
