import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="text-center py-16 px-4">
      <h1 className="text-4xl font-bold text-walmartBlue mb-4">Smarter Shelves. Faster Deliveries. Zero Waste.</h1>
      <p className="max-w-2xl mx-auto text-gray-700 text-lg mb-6">
        WALSMART AI is an intelligent supply chain platform built to optimize Walmart’s inventory, shelf management, and delivery operations using cutting-edge AI and minimal hardware.
      </p>
      <Link to="/features" className="bg-walmartYellow text-black px-6 py-2 rounded hover:bg-yellow-400">
        Explore Features
      </Link>
    </section>
  );
}