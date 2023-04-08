import Bar from "../components/Bar";
import { languages, skills } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">💻 As Software engineer</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold"></h5>
            <p className="my-3">
              ・Wide-ranging development experience spanning from infrastructure
              to front-end development.
              <br />
              ・Highly skilled in delivering valuable features quickly, while
              maintaining high standards for maintainability and scalability.
              <br />
              ・Ability to deliver functionality in a minimal and efficient
              manner.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">🏁 As Product manager</h5>
          <div className="">
            <p className="my-3">
              ・Skilled at identifying the true value of user insights and
              market competition, and establishing clear priorities based on
              solid reasons.
              <br />
              ・Collaborates effectively with diverse teams to quickly deliver
              valuable solutions.
              <br />
              ・Enjoys the process of working with others to provide value
              swiftly.
            </p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Skills</h5>
          <div className="my-2">
            {skills.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
