import React, { useState } from 'react';
import axios from 'axios';

const Playground = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAIResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAskAI = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    setError('');
    setAIResponse('');

    try {
      const response = await axios.post('http://localhost:5000/ask', {
        prompt: userInput,
      });

      const message = response?.data?.response || 'No response from AI.';
      setAIResponse(message);
    } catch (err) {
      console.error('AI Agent error:', err);
      const msg =
        err.response?.data?.error ||
        err.message ||
        'An unexpected error occurred.';
      setError(`❌ Error: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🤖 AI Playground</h1>
      <p className="text-sm text-gray-500 mb-6">
        This is where AI-generated commands or lead ideas can be tested.
      </p>

      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        rows={4}
        placeholder="Type your prompt here..."
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <button
        onClick={handleAskAI}
        disabled={loading}
        className="mt-4 px-5 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
      >
        {loading ? 'Asking AI...' : 'Ask AI Agent'}
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700">AI Response:</h3>
        {error && (
          <p className="mt-2 text-red-500 whitespace-pre-wrap">{error}</p>
        )}
        {!error && aiResponse && (
          <p className="mt-2 text-gray-800 whitespace-pre-wrap">
            {aiResponse}
          </p>
        )}
      </div>
    </div>
  );
};

export default Playground;
