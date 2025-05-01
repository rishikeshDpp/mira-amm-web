import QueryProviderWrapper from "../QueryProviderWrapper";
// import { FuelProviderWrapper } from "../../components/Terminal/FuelProviderWrapper";
import Terminal from "../../components/Terminal/Terminal";

import "@/shared/ui/index.css"

export default function Home() {
  return (
    <QueryProviderWrapper>
      {/* <FuelProviderWrapper> */}
      <div className="min-h-screen w-full flex items-center justify-center bg-black font-['VT323',monospace]">
        <Terminal />
      </div>
      {/* </FuelProviderWrapper> */}
    </QueryProviderWrapper>
  );
}
