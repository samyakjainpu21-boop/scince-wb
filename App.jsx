import React, { useState } from "react";

const activities = {
  burn: {
    title: "Burn Plastic",
    description:
      "Burning plastic releases toxic gases such as dioxins, furans, and carbon monoxide. This is highly dangerous to health and the environment.",
    chemical: "Polyethylene (C2H4)n",
    reaction:
      "(C2H4)n + O2 → CO2 + H2O + Toxic Gases (Dioxins, Furans, CO)",
    animation: "🔥",
  },
  recycle: {
    title: "Recycle Plastic",
    description:
      "Recycling plastic involves melting and remolding it. This process reduces plastic waste and pollution.",
    chemical: "PET (Polyethylene Terephthalate)",
    reaction: "PET → Melted PET → Remolded into new products",
    animation: "♻️",
  },
  landfill: {
    title: "Landfill Disposal",
    description:
      "Plastics in landfills can take hundreds of years to degrade. They may release microplastics into soil and water.",
    chemical: "Various polymers (e.g., PVC, PP, PE)",
    reaction: "Plastic → Microplastics + Leachates (over years)",
    animation: "🗑️",
  },
  decompose: {
    title: "Chemical Decomposition",
    description:
      "Some plastics can be decomposed using chemical catalysts or enzymes. This is a promising research area.",
    chemical: "Polystyrene (C8H8)n",
    reaction:
      "(C8H8)n + Catalyst → Styrene monomers + By-products",
    animation: "⚗️",
  },
};

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white p-10 font-sans">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Plastic Activity Simulator
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {Object.entries(activities).map(([key, val]) => (
          <button
            key={key}
            className="bg-white shadow-md rounded-xl p-4 hover:bg-blue-50 transition"
            onClick={() => setSelected(key)}
          >
            <div className="text-3xl mb-2">{val.animation}</div>
            <div className="font-medium">{val.title}</div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">
            {activities[selected].title} {activities[selected].animation}
          </h2>
          <p className="mb-4">{activities[selected].description}</p>
          <p className="text-sm">
            <strong>Chemical Involved:</strong> {activities[selected].chemical}
          </p>
          <p className="text-sm">
            <strong>Chemical Equation:</strong> {activities[selected].reaction}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
