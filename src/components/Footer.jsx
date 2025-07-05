import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-4">
      © {new Date().getFullYear()} WALSMART AI · Made for Walmart Sparkathon 2025
    </footer>
  );
}