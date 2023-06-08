import useClasses from "../../hooks/useClasses";
import Class from "./Class";

const Classes = () => {
  const [allClass] = useClasses();
  console.log(allClass);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8 text-green-600">All Classes Here</h1>
      <h1 className="text-xl font-bold mt-6">Total Classes: {allClass.length}</h1>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-4 my-8">
        {allClass &&
          allClass.map((singleClass) => (
            <Class key={singleClass._id} singleClass={singleClass}></Class>
          ))}
      </div>
    </div>
  );
};

export default Classes;
