
import Instructor from "./Instructor";
import useInstructors from "../../hooks/useInstructors";


const Instructors = () => {
  const [instructors] = useInstructors()

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-8 text-green-600">Our Instructors Here</h1>
      <h1 className="text-xl font-bold mt-6">Total Instructors: {instructors.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6 gap-y-6">
      {instructors && instructors.map((instructor) => (
        <Instructor key={instructor._id} instructor={instructor}></Instructor>
      ))}
    </div>
    </>
  );
};

export default Instructors;
