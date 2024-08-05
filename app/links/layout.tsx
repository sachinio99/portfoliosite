import Link from 'next/link';
import Sidebar from './sidenav';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <Sidebar />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

/*
     <div className="w-full flex-none md:w-64">
        <nav className="h-full p-6 md:p-12">
          <ul className="space-y-6">
            <li>
              <Link href="/links/experience">
                <p>Experience</p>
              </Link>
            </li>
            <li>
              <Link href="/links/blog">
                <p>Blog</p>
              </Link>
            </li>
            <li>
              <Link href="/links/curation">
                <p>Curated Lists</p>
              </Link>
            </li>
            <li>
                <Link href="/">
                    <p>Home</p>
                </Link>
            </li>
          </ul>
        </nav>
      </div>
*/