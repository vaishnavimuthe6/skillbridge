export default function Recommendations() {
  const suggestions = [
    "Software Developer",
    "Data Analyst",
    "UI/UX Designer",
    "DevOps Engineer",
    "AI/ML Engineer"
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Recommended Careers 🔍</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {suggestions.map((sug, i) => (
          <li key={i} className="mb-2">{sug}</li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-gray-500">* These are simulated AI suggestions based on your interests.</p>
    </div>
  );
}
