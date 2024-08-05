import Image from 'next/image';
import Link from 'next/link';

const ContactMe = () => {
  return (
    <footer className="mt-auto py-4 bg-pantone-moonstone">
      <div className="flex justify-center space-x-6">
      <Link href="https://www.linkedin.com/in/shahsachinj" target="_blank">
        <Image
          src="/linkedin.jpg"
          alt="LinkedIn"
          width={40}
          height={40}
        />
      </Link>
      <Link href="https://github.com/sachinio99" target="_blank">
        <Image
          src="/github.jpg"
          alt="GitHub"
          width={40}
          height={40}
        />
      </Link>
      <Link href="https://twitter.com/asapsesh" target="_blank">
        <Image
          src="/twitter.png"
          alt="Twitter"
          width={40}
          height={40}
        />
      </Link>
      <Link href="https://substack.com/@asapsach" target="_blank">
        <Image
          src="/substack.png"
          alt="Substack"
          width={40}
          height={40}
        />
      </Link>
    </div>
    <div>
      <p className="text-center mt-4 text-[#1A2F38]">© 2024 Sachin Shah</p>
    </div>
    </footer>
  );
};

export default ContactMe;
