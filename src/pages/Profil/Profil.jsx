import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import bg from "../../assets/image/bg-profile.jpg";
import Typed from "typed.js";

const Profile = () => {
  const [user, setUser] = useState({});
  const el = useRef(null);  
  useEffect(() => {
    const getMe = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get(
          `${import.meta.env.VITE_REACT_API_ADDRESS}/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { data } = response.data;

        // Set the user state from API data
        setUser(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If token is not valid
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            return;
          }

          alert(error?.response?.data?.message);
          return;
        }

        alert(error?.message);
      }
    };

    getMe();

    const typed = new Typed(el.current, {
      strings: [`Selamat datang di Halaman Profile`], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 70,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)), url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex items-center justify-center h-screen bg-slate-800 duration-300"
    >
      <Navbar />
      <div className="w-full flex flex-col items-center">
        <div className="w-10/12 md:w-4/12 h-[20%] bg-transparent text-white  rounded-lg flex justify-center pl-5 md:pl-20 flex-col mb-5 font-semibold">
          <h1 className="text-2xl" ref={el}></h1>
        </div>
        <div className=" w-10/12 sm:w-8/12 md:w-6/12 lg:w-4/12 h-[30vh] md:h-[25vh] lg:h-auto bg-transparent backdrop-blur  text-white neon-slate rounded-lg shadow-lg flex justify-center pl-5 sm:pl-10 md:pl-20 flex-col py-2">
          <h1 className="shadow-text animate-fadeLeft text-3xl font-semibold mb-4">
            Profil Pengguna
          </h1>

          <div className="text-left">
            <p className="mb-2 animate-fadeLeftWithDelay">
              <span className="font-semibold ">Nama:</span> {user.name}
            </p>
            <p className="mb-2 animate-fadeLeftWithDelay2">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="mb-2 animate-fadeLeftWithDelay3">
              <span className="font-semibold">ID:</span> {user.id}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
