const Instructor = ({ instructor }) => {
  console.log(instructor);
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
            <button className="btn btn-primary">Inatructor classes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
