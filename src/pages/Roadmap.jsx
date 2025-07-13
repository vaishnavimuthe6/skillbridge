export default function Roadmap() {
  const steps = [
    "Learn HTML, CSS, JS basics",
    "Master React.js",
    "Learn Git and GitHub",
    "Build mini projects",
    "Understand REST APIs",
    "Learn backend (Node.js + Express)",
    "Integrate frontend & backend",
    "Build full-stack project"
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Frontend Developer Roadmap 🛤️</h2>
      <ol className="list-decimal pl-6 text-gray-800">
        {steps.map((step, idx) => (
          <li key={idx} className="mb-2">{step}</li>
        ))}
      </ol>
    </div>
  );
}
