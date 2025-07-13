export default function ProgressBar({ label, percent }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-3">
        <div className="bg-green-500 h-3 rounded-full" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}
