import React from "react";

function LogoHero() {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-10 py-36 ">
      <img
        src="./KBLlogo.png"
        alt="KBL Logo"
        className="w-12 h-12 sm:w-24 sm:h-24 "
      />
      <img
        src="./KNTlogo.png"
        alt="KNT Logo"
        className="w-12 h-12 sm:w-24 sm:h-24 "
      />
      <img
        src="./NCAALOGO.png"
        alt="NCAA Logo"
        className="w-12 h-12 sm:w-24 sm:h-24 "
      />
      <img
        src="./fibaLogo.png"
        alt="FIBA Logo"
        className="w-24 h-12 sm:w-36 sm:h-24 "
      />
    </div>
  );
}

export default LogoHero;
