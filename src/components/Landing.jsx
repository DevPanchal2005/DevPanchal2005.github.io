import SocialLinks from "./SocialLinks";

export default function Landing() {
  return (
    <section
      id="landing"
      className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-green-50 to-white"
    >
      Hello, I'm Panchal Dev!
      <SocialLinks />
    </section>
  );
}
