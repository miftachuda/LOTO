import React from "react";
import { Avatar } from "@mui/material";

// Define the props type for the component
interface EquipmentAvatarProps {
  text: string;
}

const EquipmentAvatar: React.FC<EquipmentAvatarProps> = ({ text }) => {
  // Get the first letter or initials of the string
  const getInitials = (str: string): string => {
    const substring = str.substring(5, 9);
    return substring;
  };

  return (
    <Avatar sx={{ bgcolor: "purple", width: 40, height: 40 }}>
      {getInitials(text)}
    </Avatar>
  );
};

export default EquipmentAvatar;
