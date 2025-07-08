import { Link } from "react-router-dom";

const Header = ({ title }) => {

  
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
    <div className="flex justify-between items-center">
      <Link to='/' className="text-2xl font-semibold text-gray-800" onClick={() => console.log("Button Cliked!")}>
      {title}
      </Link>
    </div>
  </div>
  )
};

export default Header