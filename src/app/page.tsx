import Customer from "@/components/block/Customer";
import DesignedComponent from "@/components/block/DesignedComponent";
import ModelComponent from "@/components/block/ModelComponent";
import ProvenSection from "@/components/block/ProvenSection";
import ScaleComponent from "@/components/block/ScaleComponent";
import ScreenViedos from "@/components/block/ScreenViedos";
import CRMComponent from "@/components/block/CRMComponent";
import DarkContainer from "@/components/block/DarkContainer";
import DreamCrm from "@/components/block/DreamCrm";

export default function Home() {
  return (
    <div className="bg-primary mt-20 flex flex-col justify-center items-center ">
      <Customer />
      <ScreenViedos />
      <ProvenSection />
      <CRMComponent />
      <ModelComponent />
      <DesignedComponent />
      <ScaleComponent />
      <DarkContainer />
      <DreamCrm />
    </div>
  );
}
