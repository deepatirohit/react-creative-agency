export const SkillBar = ({ label, percentage }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className="text-sm font-semibold text-blue-800">{percentage}%</span>
    </div>
    <div className="relative h-2 bg-gray-200 rounded-full">
      <div
        className="absolute h-2 bg-blue-800 rounded-full"
        style={{ width: `${percentage}%` }}
      />
      <div
        className="absolute top-1/2 w-3 h-3 bg-blue-800 rounded-full -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${percentage}%` }}
      />
    </div>
  </div>
);
