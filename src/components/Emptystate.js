const EmptyState = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
    <Icon size={48} className="mx-auto text-gray-400 mb-4" />
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default EmptyState