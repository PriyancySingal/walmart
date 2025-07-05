import React from 'react';

export default function Impact() {
  return (
    <section className="py-12 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-walmartBlue mb-8">Impact Metrics</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3">Metric</th>
            <th className="p-3">Improvement</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="p-3">Shelf Accuracy</td><td className="p-3">+30%</td></tr>
          <tr className="bg-gray-50"><td className="p-3">Cloud Cost Reduction</td><td className="p-3">-40%</td></tr>
          <tr><td className="p-3">Last-Mile Cost</td><td className="p-3">-25%</td></tr>
          <tr className="bg-gray-50"><td className="p-3">Emissions (Delivery)</td><td className="p-3">Reduced via eco-mode</td></tr>
        </tbody>
      </table>
    </section>
  );
}