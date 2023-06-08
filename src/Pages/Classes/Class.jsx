const Class = ({ singleClass }) => {
  return (
    <div>
      <div className=" bg-base-200 rounded-xl">
        <div className="hero-content flex-col">
          <img
            src={singleClass?.photo}
            className="max-w rounded-lg shadow-xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{singleClass?.name}</h1>
            <p className="pt-2 text-2xl font-bold text-green-600">
              Instructor: {singleClass?.instructors}
            </p>
            <div className="flex justify-between py-4">
              <p className="text-lg"><span className="font-bold">Available Seats:</span> TODO</p>
              <p className="text-lg font-bold text-orange-600">Price: ${singleClass?.price}</p>
            </div>
            <button className="bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-2 px-4 rounded-md">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class;
