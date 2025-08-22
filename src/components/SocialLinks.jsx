import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex space-x-4">
        <a
          href="https://github.com/panchaldev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-600 hover:text-gray-800"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/panchaldev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-600 hover:text-gray-800"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.youtube.com/@panchaldev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-600 hover:text-gray-800"
        >
          <FaYoutube />
        </a>
      </div>
    </section>
  );
}
