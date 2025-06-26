import { AdLeft } from "./AdLeftSection";
import { AdRightSection } from "./AdRightSection";

export const AdvertisementSection = () => {
  return (
    <div className="flex h-[500px] gap-2">
      <AdLeft />
      <AdRightSection />
    </div>
  );
};
