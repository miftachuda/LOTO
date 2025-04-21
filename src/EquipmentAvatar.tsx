import React from "react";

// Define the props type for the component
interface EquipmentAvatarProps {
  text: string;
}

const EquipmentAvatar: React.FC<EquipmentAvatarProps> = ({ text }) => {
  // Get the 6th, 7th, 8th, and 9th characters of the string
  const getInitials = (str: string): string => {
    return str.substring(5, 9); // Extracting characters from position 5 to 8 (6th to 9th)
  };

  const initials = getInitials(text);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple", // Set the background color
        borderRadius: "50%", // Make the div circular
        width: "40px", // Set width
        height: "40px", // Set height
        color: "white", // Text color
        fontWeight: "bold", // Make text bold
        fontSize: "14px", // Set text size
      }}
    >
      {initials}
    </div>
  );
};

export default EquipmentAvatar;
