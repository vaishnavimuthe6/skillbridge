import ProgressBar from "../components/ProgressBar";

export default function Tracker() {
  const progressItems = [
    { label: "HTML & CSS", percent: 100 },
    { label: "JavaScript", percent: 80 },
    { label: "React.js", percent: 60 },
    { label: "Node.js", percent: 30 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">Learning Progress 📈</h2>
      {progressItems.map((item, i) => (
        <ProgressBar key={i} label={item.label} percent={item.percent} />
      ))}
    </div>
  );
}
