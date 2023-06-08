import useInstructors from "../../../hooks/useInstructors";
import HomeInstructor from "../HomeInstructor/HomeInstructor";
import SliderSection from "../SliderSection/SliderSection";

const Home = () => {
  const [instructors] = useInstructors();

  return (
    <div>
      {/* banner section */}
      <SliderSection></SliderSection>

      {/* instructors section */}
      <div>
        <h1 className="text-4xl font-bold text-center mt-10">Top Instructors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-y-6">
          {instructors && instructors.slice(0, 6).map(instructor=><HomeInstructor key={instructor._id} instructor={instructor}></HomeInstructor>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
