import Image from 'next/image';
import Link from 'next/link';

const ContactMe = () => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-6 py-4 bg-pantone-moonstone">
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
  );
};

export default ContactMe;
