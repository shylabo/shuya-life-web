import { NextPage } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const About: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="my-3 text-base font-medium">
        Full-stack software engineer with strong strategic planning and
        requirements definition skills for product management, and a track
        record of delivering high-value products in diverse development
        environments - from startups to enterprises - including significant
        contributions to fundraising efforts for a startup in Japan.
        <br />
        In his over six year's career as a product manager and software
        engineer, Shuya found his passion in creating products that help people
        through creating web apps and working closely together with Product and
        Design experts.
        <br />
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">What I do</h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
