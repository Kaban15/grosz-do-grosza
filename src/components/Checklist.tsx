'use client';
import { content } from '@/data/content';
import { Printer, CheckSquare, Coins, CreditCard } from 'lucide-react';

export default function Checklist() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="printable-area">
      <div className="max-w-4xl mx-auto bg-white border-2 border-gray-300 rounded-lg shadow-lg p-8 print:shadow-none print:border-black">
        {/* Header */}
        <div className="text-center mb-8 border-b-2 border-red-600 pb-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {content.checklist.header}
          </h1>
          <p className="text-lg text-gray-600">
            {content.checklist.subheader}
          </p>
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
            <p className="text-red-700 font-semibold">
              {content.checklist.rewards}
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-6 mb-8">
          {content.checklist.steps.map((step, stepIdx) => (
            <div key={stepIdx} className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                  {stepIdx + 1}
                </span>
                {step.title}
              </h3>
              
              {/* Regular items */}
              {step.items && (
                <ul className="space-y-2 ml-8">
                  {step.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <CheckSquare className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Table for monthly tasks */}
              {step.tableRows && (
                <div className="mt-4">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">
                          Miesiąc
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-900">
                          <div className="flex items-center justify-center gap-1">
                            <Coins className="w-4 h-4" />
                            Wpływ 1000 zł
                          </div>
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-900">
                          <div className="flex items-center justify-center gap-1">
                            <CreditCard className="w-4 h-4" />
                            Płatności 300 zł
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {step.tableRows.map((row, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium text-gray-900">
                            {row.month}
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <CheckSquare className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-700">{row.deposit} zł</span>
                            </div>
                          </td>
                          <td className="border border-gray-300 px-4 py-2 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <CheckSquare className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-700">{row.payments} zł</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t-2 border-gray-300 pt-4 mb-6">
          <p className="text-sm text-gray-600 italic">
            {content.checklist.footer}
          </p>
        </div>

        {/* Print Button - Hidden when printing */}
        <div className="print-hidden">
          <button
            onClick={handlePrint}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            <Printer className="w-5 h-5" />
            Pobierz PDF / Drukuj Listę
          </button>
        </div>
      </div>
    </div>
  );
}
