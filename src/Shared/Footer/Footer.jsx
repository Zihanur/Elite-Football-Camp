import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <h1 className="text-3xl font-bold text-green-400 mb-3">
            Elite Football Camp
          </h1>
          <p>32/2 Road 4, Dhanmondi</p>
          <p>Dhaka, Bangladesh</p>
        </div>
        <div>
          <span className="text-xl font-bold text-green-400">Company</span>
          <a className="link link-hover text-base">About us</a>
          <a className="link link-hover text-base">Contact</a>
          <a className="link link-hover text-base">Jobs</a>
          <a className="link link-hover text-base">Press kit</a>
        </div>
        <div>
          <span className="text-xl font-bold text-green-400">Social</span>
          <div className="flex flex-col gap-2">
            <Link className="flex items-center gap-3 text-base">
              <FaFacebookSquare></FaFacebookSquare>FaceBook
            </Link>
            <Link className="flex items-center gap-3 text-base">
              <FaTwitterSquare></FaTwitterSquare> Twitter
            </Link>
            <Link className="flex items-center gap-3 text-base">
              <FaInstagramSquare></FaInstagramSquare> Instagram
            </Link>
            <Link className="flex items-center gap-3 text-base">
              <FaLinkedinIn></FaLinkedinIn> LinkedinIn
            </Link>
          </div>
        </div>
      </footer>
      <p className="footer justify-center pb-4 bg-neutral text-neutral-content">
        Copyright © 2023 - Elite Football Industries Ltd
      </p>
    </div>
  );
};

export default Footer;
