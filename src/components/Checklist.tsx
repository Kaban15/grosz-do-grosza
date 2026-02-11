'use client';
import { Download } from 'lucide-react';

export default function Checklist() {
  const handleDownload = () => {
    // Create download link for the image
    const link = document.createElement('a');
    link.href = '/images/checklist.png'; // You'll need to place the image in public/images/
    link.download = 'lista-zadan-santander-900zl.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Lista Zadań do Pobrania</h2>
        <p className="text-xl text-gray-600">Pobierz gotową checklistę promocji w formie obrazka</p>
      </div>
      
      <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-8">
        {/* Image Display */}
        <div className="mb-6">
          <img 
            src="/images/checklist.png" 
            alt="Lista zadań promocja Santander 900 zł"
            className="w-full h-auto rounded-lg border border-gray-200"
          />
        </div>
        
        {/* Download Button */}
        <div className="text-center">
          <button
            onClick={handleDownload}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            <Download className="w-5 h-5" />
            Pobierz Listę Zadań (PNG)
          </button>
          <p className="mt-3 text-sm text-gray-500">
            Kliknij, aby pobrać checklistę w wysokiej jakości
          </p>
        </div>
      </div>
    </div>
  );
}
