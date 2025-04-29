import React from "react";

const BrandColors = () => {
  const colorPalette = [
    { name: "Radiant Red", class: "bg-radiantRed", textClass: "text-white" },
    { name: "Charcoal", class: "bg-charcoal", textClass: "text-white" },
    { name: "Off White", class: "bg-offWhite", textClass: "text-charcoal" },
    {
      name: "Solar Yellow",
      class: "bg-solarYellow",
      textClass: "text-charcoal",
    },
    { name: "Honey Amber", class: "bg-honeyAmber", textClass: "text-charcoal" },
    {
      name: "Mango Orange",
      class: "bg-mangoOrange",
      textClass: "text-charcoal",
    },
  ];

  return (
    <div className="p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-radiantRed font-texGyreBonum">
        Brand Color Palette
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colorPalette.map((color) => (
          <div
            key={color.name}
            className={`${color.class} p-6 rounded-lg shadow-md`}
          >
            <h3
              className={`text-xl font-bold mb-2 ${color.textClass} font-openSans`}
            >
              {color.name}
            </h3>
            <div className={`text-sm ${color.textClass} font-openSans`}>
              Tailwind class: {color.class}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6 text-radiantRed font-texGyreBonum">
        Typography
      </h2>
      <div className="space-y-6">
        <div className="p-6 bg-offWhite rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-charcoal font-openSans">
            Font Families
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-texGyreBonum text-radiantRed">
                TeX Gyre Bonum (EB Garamond)
              </p>
              <p className="text-sm text-charcoal">
                font-texGyreBonum - Used for headings and logo
              </p>
            </div>
            <div>
              <p className="text-xl font-canvaSans text-charcoal">Canva Sans</p>
              <p className="text-sm text-charcoal">
                font-canvaSans - Used for subtitles
              </p>
            </div>
            <div>
              <p className="text-lg font-openSans text-charcoal">Open Sans</p>
              <p className="text-sm text-charcoal">
                font-openSans - Used for body text and buttons
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandColors;
