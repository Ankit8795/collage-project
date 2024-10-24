'use client'


import { useState } from 'react';

const SubmitCode = () => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('71'); // Default to Python
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [Output, setOutput] = useState('');
    const [Status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [theme, setTheme] = useState('light'); // State for theme

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/get-messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code, language, input }),
            });

            const data = await response.json();

            

            if (!data.success) {
                throw new Error(data.message || 'error in fetching data');
            }

            setResult(data.data);
            const mainoutput = atob(data.data.stdout)
            setOutput(mainoutput);
            setStatus(data.data.status.description);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`flex h-screen w-full ${theme === 'dark' ? 'bg-gray-900' : theme === 'blue' ? 'bg-blue-500' : theme === 'green' ? 'bg-green-500' : theme === 'red' ? 'bg-red-500' : theme === 'yellow' ? 'bg-yellow-300' : theme === 'purple' ? 'bg-purple-500' : theme === 'orange' ? 'bg-orange-500' : 'bg-white'}`}>
            <div className="w-2/3 p-4 border-r border-gray-300">
                <h1 className="text-xl font-bold mb-4 text-black">Code Submission</h1>
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    rows={20}
                    placeholder="Write your code here"
                    required
                    className="w-full h-full p-2 border rounded resize-none text-black"
                />
            </div>
            <div className="flex flex-col w-1/3 p-4">
                <div className="mb-4 flex items-center">
                    <label className="block mb-2 mr-2 text-black">Language:</label>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="block w-full p-2 border rounded mr-2 text-black"
                    >
                        <option value="100">Python</option>
                        <option value="97">JavaScript</option>
                        <option value="50">C</option>
                        <option value="91">Java</option>
                        <option value="54">C++</option>
                        <option value="72">Ruby</option>
                        <option value="68">PHP</option>
                        <option value="101">Typescript</option>
                        <option value="83">Sql</option>
                        <option value="73">Rust</option>
                        <option value="78">Kotlin</option>
                        <option value="99">R</option>
                        <option value="90">Dart</option>
                        <option value="85">Perl</option>
                        <option value="57">Elixir</option>
                        <option value="61">Haskell</option>
                    </select>
                    <label className="block mb-2 text-black">Theme: </label>
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className="block w-full p-2 border rounded text-black"
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="purple">Purple</option>
                        <option value="orange">Orange</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-black">Input:</label>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        rows={5}
                        placeholder="Input for the code (optional)"
                        className="w-full p-2 border rounded resize-none text-black"
                    />
                </div>
                {/* <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-auto bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button> */}
                {error && <div className="text-red-500 mt-2">Error: {error}</div>}
                {result && (
                    <div className="mt-4">
                        <h2 className="text-lg font-bold text-black">Output:</h2>
                        <h2 className="text-lg font-lg text-green-700">{Status}</h2>
                    <h2 className="text-lg font-xl text-black">{Output}</h2>
                        {/* <pre className="bg-gray-100 p-2 rounded text-black">{JSON.stringify(result, null, 2)} </pre> */}
                    </div>
                )}
                 <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-4 bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>


            </div>
        </div>
    );
};

export default SubmitCode;

