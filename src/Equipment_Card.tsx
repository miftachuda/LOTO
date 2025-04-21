import React from "react";
import EquipmentAvatar from "./EquipmentAvatar";

// Define types for props
interface EquipmentCardProps {
  value: string;
  label: string;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({ value, label }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg flex items-center space-x-4">
      <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center">
        {/* Placeholder for the image */}
        <EquipmentAvatar text={value} />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">{value}</h3>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
};

export default EquipmentCard;
