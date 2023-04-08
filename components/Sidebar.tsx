import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineMail,
} from "react-icons/ai";
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
        src="https://shuya-life.s3.ap-northeast-1.amazonaws.com/profile_image.jpg"
        alt="avatar"
        className="mx-auto border rounded-full"
        height="256px"
        width="256px"
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
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Contents Creator
      </p>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full ">
        <a
          className="text-blue-600"
          href="https://www.linkedin.com/in/shuya-sonoda-696b02138/"
          target="_blank"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/shylabo" target="_blank">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
        <a
          className="text-red-500"
          href="https://www.youtube.com/c/ShuyaLife"
          target="_blank"
        >
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a
          className="text-pink-500"
          href="https://www.instagram.com/shuya.life"
          target="_blank"
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
        <div className="flex items-center justify-center">
          <AiOutlineMail className="mr-2" /> <span>shuya.life@gmail.com </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
