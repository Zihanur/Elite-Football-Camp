import useClasses from "../../hooks/useClasses";
import Class from "./Class";

const Classes = () => {
  const [classes] = useClasses();
  console.log(classes);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8 text-green-600">All Classes Here</h1>
      <h1 className="text-xl font-bold mt-6">Total Classes: {classes.length}</h1>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-4 my-8">
        {classes &&
          classes.map((singleClass) => (
            <Class key={singleClass._id} singleClass={singleClass}></Class>
          ))}
      </div>
    </div>
  );
};

export default Classes;
