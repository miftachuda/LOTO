import React from "react";
import EquipmentCard from "./Equipment_Card";

// Define the type for pump data
interface Pump {
  value: string;
  label: string;
}

interface PumpGroup {
  label: string;
  options: Pump[];
}

// Example data import (adjust this path based on your file structure)
import { groupedPumps } from "./list_equipment"; // Assuming pumpData has `groupedPumps`

const EquipmentLibrary: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-6">
      {groupedPumps.map((group: PumpGroup) => (
        <div key={group.label} className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Group {group.label}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.options.map((pump: Pump) => (
              <EquipmentCard
                key={pump.value}
                value={pump.value}
                label={pump.label}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EquipmentLibrary;
