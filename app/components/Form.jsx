"use client"
import React, { useState } from 'react';
export default function Form() {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [result, setResult] = useState(null);

    const handleConvert = () => {
        // logica de conversion solo es un ejemplo 
        const conversionRate = 0.85; // Supongamos que 1 USD = 0.85 EUR
        const convertedAmount = amount * conversionRate;
        setResult(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
    };

    return (
        <div className="bg-white rounded-xl p-6 max-w-4xl mx-auto mt-10 shadow-lg">



            <div className="flex items-center justify-between mb-6 gap-2">

                <div className="w-1/3">
                    <label className="block text-sm text-gray-600 mb-2">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md text-lg"
                    />
                </div>


                <div className='flex w-3/4 items-center justify-center'>
                    <div className="w-1/3">
                        <label className="block text-sm text-gray-600 mb-2">From</label>
                        <select
                            value={fromCurrency}
                            onChange={(e) => setFromCurrency(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md text-lg"
                        >
                            <option value="USD">USD - US Dollar</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="MXN">MXN - Mexican Peso</option>
                        </select>
                    </div>

       
                    <div className="text-2xl text-center w-1/6">
                        <span>⇄</span>
                    </div>


                    <div className="w-1/3">
                        <label className="block text-sm text-gray-600 mb-2">To</label>
                        <select
                            value={toCurrency}
                            onChange={(e) => setToCurrency(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md text-lg"
                        >
                            <option value="USD">USD - US Dollar</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="MXN">MXN - Mexican Peso</option>
                        </select>
                    </div>
                </div>

            </div>


            <div className='flex w-full gap-5'>

                {result && (
                    <div className="mt-6 text-center text-xl font-semibold text-gray-800 w-1/2">
                        {result}
                    </div>
                )}
                <button
                    onClick={handleConvert}
                    className="w-1/2 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-500"
                >
                    Convert
                </button> 
            </div>

        </div>
    );
}
