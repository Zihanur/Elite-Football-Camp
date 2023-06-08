const Instructor = ({ instructor }) => {
  
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={instructor?.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{instructor.name}</h2>
          <p>{instructor.details}</p>
          <p>Total students: 11</p>
          <div className="card-actions justify-end">
            <button className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-2 px-4 rounded-md">Inatructor classes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
