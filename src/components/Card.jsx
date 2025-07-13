export default function Card({ title, description, link }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      {link && (
        <a href={link} className="text-blue-600 hover:underline font-medium">
          Learn More →
        </a>
      )}
    </div>
  );
}
