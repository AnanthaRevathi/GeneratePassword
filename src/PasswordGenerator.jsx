import { useState } from 'react';

export const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [includeUpperCase, setIncludeUpperCase] = useState(true);
    const [includeLowerCase, setIncludeLowerCase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState("");

    const generatePassword = () => {
        let charSet = "";
        if (includeUpperCase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (includeLowerCase) charSet += "abcdefghijklmnopqrstuvwxyz"; // Fixed typo here
        if (includeNumbers) charSet += "0123456789";
        if (includeSymbols) charSet += "!@#$%^&*()-_+=";
        let generatedPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            generatedPassword += charSet[randomIndex];
        }
        setPassword(generatedPassword);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        alert("Password copied");
    };

    return (
        <div className='password-generator'>
            <h2>Strong Password Generator</h2>
            <div className="input-group">
                <label htmlFor='num'>Password Length:</label>
                <input 
                    type='number' 
                    id="num" 
                    value={length} 
                    onChange={(e) => setLength(parseInt(e.target.value) || 8)} // Added fallback for NaN
                />
            </div>
            <div className="check-group">
                <input 
                    type="checkbox" 
                    id="upper" 
                    checked={includeUpperCase} 
                    onChange={(e) => setIncludeUpperCase(e.target.checked)} 
                />
                <label htmlFor='upper'>Include UpperCase</label>
            </div>
            <div className="check-group">
                <input 
                    type="checkbox" 
                    id="lower" 
                    checked={includeLowerCase}
                    onChange={(e) => setIncludeLowerCase(e.target.checked)} 
                />
                <label htmlFor='lower'>Include LowerCase</label>
            </div>
            <div className="check-group">
                <input 
                    type="checkbox" 
                    id="numbers" 
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)} 
                />
                <label htmlFor='numbers'>Include Numbers</label>
            </div>
            <div className="check-group">
                <input 
                    type="checkbox" 
                    id="symbol" 
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)} 
                />
                <label htmlFor='symbol'>Include Symbols</label>
            </div>
            <button className='generate-btn' onClick={generatePassword}>Generate Password</button>
            <div className='generated-password'>
                <input 
                    type="text" 
                    readOnly 
                    value={password} // Added this line to render the generated password
                />
                <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
            </div>
        </div>
    );
};
