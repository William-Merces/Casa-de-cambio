import React from 'react';

const CurrencyTable = () => {
  const currencies = [
    {
      name: 'Peso Argentino',
      flag: '🇦🇷',
      buy: 0.0058,
      sell: 0.0058,
      variation: 0
    },
    {
      name: 'Dólar Australiano',
      flag: '🇦🇺',
      buy: 3.81,
      sell: 3.815,
      variation: 0.5455
    },
    {
      name: 'Dólar Canadense',
      flag: '🇨🇦',
      buy: 4.125,
      sell: 4.13,
      variation: 0.2597
    },
    {
      name: 'Franco Suíço',
      flag: '🇨🇭',
      buy: 6.575,
      sell: 6.583,
      variation: 1460.85
    },
    {
      name: 'Dólar Comercial',
      flag: '🇺🇸',
      buy: 5.701,
      sell: 5.703,
      variation: 0.2285
    },
    {
      name: 'Dólar Turismo',
      flag: '🇺🇸',
      buy: 5.742,
      sell: 5.922,
      variation: 0.0727
    },
    {
      name: 'Euro',
      flag: '🇪🇺',
      buy: 6.16,
      sell: 6.16,
      variation: -0.0487
    },
    {
      name: 'Libra Esterlina',
      flag: '🇬🇧',
      buy: 7.384,
      sell: 7.386,
      variation: -0.2296
    },
    {
      name: 'Iene',
      flag: '🇯🇵',
      buy: 0.0478,
      sell: 0.0478,
      variation: 0.8439
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">MOEDA</th>
            <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">COMPRA</th>
            <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">VENDA</th>
            <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">VAR(%)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {currencies.map((currency, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="mr-2">{currency.flag}</span>
                  <span className="text-sm text-gray-900">{currency.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-right text-sm text-gray-500">
                {currency.buy.toFixed(4)}
              </td>
              <td className="px-6 py-4 text-right text-sm text-gray-500">
                {currency.sell.toFixed(4)}
              </td>
              <td className={`px-6 py-4 text-right text-sm ${
                currency.variation > 0 
                  ? 'text-green-600' 
                  : currency.variation < 0 
                  ? 'text-red-600' 
                  : 'text-gray-500'
              }`}>
                {currency.variation.toFixed(4)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;