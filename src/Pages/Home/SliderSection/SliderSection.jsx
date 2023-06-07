import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderSection = () => {
  return (
    <>
      <Carousel className="">
                <div>
                    <img src="https://i.ibb.co/8j5F5N7/istockphoto-1005387078-170667a.webp" />
                    <div className="legend">
                      <h1 className="text-3xl">JOIN HERE</h1>
                      <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eaque incidunt architecto corporis, aperiam blanditiis.</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/n8H3sD3/cover2.jpg" />
                    <div className="legend">
                      <h1 className="text-3xl">START METCH</h1>
                      <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eaque incidunt architecto corporis, aperiam blanditiis.</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/dQXGqpm/cover8.webp" />
                    <div className="legend">
                      <h1 className="text-3xl">START PRACTICE</h1>
                      <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eaque incidunt architecto corporis, aperiam blanditiis.</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/9tJr0VQ/cover9.webp" />
                    <div className="legend">
                      <h1 className="text-3xl">READY FOR GAME</h1>
                      <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eaque incidunt architecto corporis, aperiam blanditiis.</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/ynWMwkr/cover1.jpg" />
                    <div className="legend">
                      <h1 className="text-3xl">HAPPY CAMP</h1>
                      <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eaque incidunt architecto corporis, aperiam blanditiis.</p>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/9GCghc5/cover7.webp" />
                    <div className="legend">
                      <h1 className="text-3xl">MORE INSTRACTORS</h1>
                      <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste eaque incidunt architecto corporis, aperiam blanditiis.</p>
                    </div>
                </div>
            </Carousel>
    </>
  );
};

export default SliderSection;