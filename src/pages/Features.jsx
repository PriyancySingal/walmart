import React from 'react';

const features = [
  { title: "SmartShelf Vision", description: "AI detects empty shelves using existing CCTV." },
  { title: "LazyForecast AI", description: "TinyML-based forecast system saves cloud costs." },
  { title: "RouteGenie", description: "Eco-friendly last-mile delivery optimization." },
  { title: "CrowdDeliver", description: "Turn shoppers into delivery partners." },
  { title: "WALSMART Hub", description: "Dashboard with real-time ops and insights." },
];

export default function Features() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-walmartBlue mb-10">Platform Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-walmartBlue mb-2">{f.title}</h3>
            <p className="text-gray-700">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}