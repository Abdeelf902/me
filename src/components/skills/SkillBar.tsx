interface SkillBarProps {
  name: string;
  level: number;
}

export default function SkillBar({ name, }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700">{name}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
        />
      </div>
    </div>
  );
}
