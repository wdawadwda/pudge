export const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
  return {
    color: isActive ? "black" : "red",
  };
};
