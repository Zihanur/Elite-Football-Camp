import useClasses from "../../../hooks/useClasses";
import useInstructors from "../../../hooks/useInstructors";
import Class from "../../Classes/Class";
import Instructor from "../../Instructors/Instructor";
import ImageAnimation from "../AnimiSection/ImageAnimation";
import SliderSection from "../SliderSection/SliderSection";

const Home = () => {
  const [instructors] = useInstructors();
  const [allClass] = useClasses();

  return (
    <div>
      {/* banner section */}
      <SliderSection></SliderSection>
      <div className="divider"></div>

      {/* classes section */}
      <div>
        <h1 className="text-4xl font-bold text-center mt-10 text-green-600">
          Our Top Classes
        </h1>
        <div className="grid grid-col-1 lg:grid-cols-2 gap-4 my-8">
          {allClass &&
            allClass
              .slice(0, 6)
              .map((singleClass) => (
                <Class key={singleClass._id} singleClass={singleClass}></Class>
              ))}
        </div>
      </div>
      <div className="divider"></div>

      {/* instructors section */}
      <div>
        <h1 className="text-4xl font-bold text-center mt-10 text-green-600">
          Top Instructors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-y-6">
          {instructors &&
            instructors
              .slice(0, 6)
              .map((instructor) => (
                <Instructor
                  key={instructor._id}
                  instructor={instructor}
                ></Instructor>
              ))}
        </div>
      </div>
      <div className="divider"></div> 

      {/* TODO section animi */}
      <div>
      <h1 className="text-4xl font-bold text-center mt-10 text-green-600">
          Top Scorer
        </h1>
      <div className="my-8">
      <ImageAnimation></ImageAnimation>
      </div>
      </div>
    </div>
  );
};

export default Home;
