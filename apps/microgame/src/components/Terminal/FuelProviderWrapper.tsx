import { FUEL_CONFIG, networks } from '../../lib/fuelProvider';
import { FuelProvider } from "@fuels/react";
import { ReactNode } from "react";


const FuelProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <FuelProvider
      networks={networks}
      fuelConfig={FUEL_CONFIG}
      uiConfig={{ suggestBridge: false }}
      theme="dark"
    >
      {children}
    </FuelProvider>
  );
};

export default FuelProviderWrapper;
