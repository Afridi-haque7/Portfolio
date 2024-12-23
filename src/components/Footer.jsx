import { socials } from "../constants";

const Footer = () => {
  return (
    <section
      className="w-full bg-transparent pt-5 pb-5
     border-secondary flex flex-col md:flex-row justify-evenly items-center flex-wrap  gap-5"
    >
      <div className="text-zinc-500">
        <p>Copyright &#169; Afridi Haque 2024</p>
      </div>

      <div className="flex gap-5">
        {socials.map((social) => {
          return (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-[28px] h-[28px] object-contain cursor-pointer hover:scale-125 transition-all duration-300 ease-in-out"
              />
            </a>
          );
        })}
      </div>

      <div>
        <p className="text-zinc-500 cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
          <a href="mailto:afridi.hq97@gmail.com">
            Email: afridi.hq97@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
