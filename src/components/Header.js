const Header = ({ title }) => (
  <div className="bg-white border-b border-gray-200 px-6 py-4">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
    </div>
  </div>
);

export default Header