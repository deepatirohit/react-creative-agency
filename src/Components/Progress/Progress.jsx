import { SkillBar } from "./Skillbar";
import bgImg from "../../assets/images/creative-agency-skills-bg.webp";

export const ProgressSection = () => {
  return (
    <div
      className="flex px-[15rem] py-20 gap-16 bg-no-repeat bg-left bg-contain bg-white border border-b-gray-200"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Left: Skill Bars */}
      <div className="w-1/2">
        <SkillBar label="UI/UX" percentage={85} />
        <SkillBar label="Ideas" percentage={95} />
        <SkillBar label="Marketing" percentage={85} />
      </div>

      {/* Right: Text Content */}
      <div className="w-1/2">
        <h2 className="text-4xl font-semibold mb-4">
          <span className="text-blue-800">Brand strategy</span> and digital
          creation.
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Wilson provides the ultimate solution to get your brand's reputation.
          With tools and elements beyond belief, Wilson has everything for
          everyone.
        </p>
      </div>
    </div>
  );
};
