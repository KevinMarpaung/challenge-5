import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-[15vh] flex-col bg-gradient-to-t from-white/10 to-black/100 flex justify-center items-center">
      <div className="w-10/12 md:w-6/12 flex justify-around text-white text-2xl">
        <Link to="https://github.com/KevinMarpaung" target="_blank">
          <span className="inline-block duration-300 hover:scale-110 hover:translate-y-[-10px]">
            <ion-icon name="logo-github"></ion-icon>
          </span>
        </Link>
        <Link to="https://www.instagram.com/kzvin_/" target="_blank">
          <span className="inline-block duration-300 hover:scale-110 hover:translate-y-[-10px]">
            <ion-icon name="logo-instagram"></ion-icon>
          </span>
        </Link>

        <Link to="https://www.linkedin.com/in/kevin-marpaung0/" target="_blank">
          <span className="inline-block duration-300 hover:scale-110 hover:translate-y-[-10px]">
            <ion-icon name="logo-linkedin"></ion-icon>
          </span>
        </Link>
      </div>
      <h3 className="text-white">Copyright by kzvin and Chat-GPT</h3>
    </div>
  );
};

export default Footer;
