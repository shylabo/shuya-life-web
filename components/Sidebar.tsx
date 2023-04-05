import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { GiCloudDownload, GiPaper, GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="https://shuya-life.s3.ap-northeast-1.amazonaws.com/profile_image.png"
        alt="avatar"
        className="mx-auto border rounded-full"
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-blue-600">Shuya</span> Sonoda
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Software Engineer
      </p>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Product Manager
      </p>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full ">
        <a className="text-red-500" href="https://www.youtube.com/c/ShuyaLife">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          className="text-blue-600"
          href="https://www.linkedin.com/in/shuya-sonoda-696b02138/"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/shylabo">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
        <a
          className="text-pink-500"
          href="https://www.instagram.com/shuya.life"
        >
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Vancouver, Canada </span>
        </div>
        <p className="my-2 "> shuya.life@gmail.com </p>
      </div>

      <a
        href="/assets/Shuya Sonoda Resume.pdf"
        download="Shuya Sonoda Resume.pdf"
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500"
      >
        Download Resume
      </a>
    </>
  );
};

export default Sidebar;
