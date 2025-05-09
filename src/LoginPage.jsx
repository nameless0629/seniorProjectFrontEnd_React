import Background from './assets/LoginPage_Background2.jpg'
import './LoginPage.css'
import LoginForm from "./components/LoginForm.jsx";
import { useState, useEffect } from "react";

const rotatingTexts = [
    { zh: "讓健康數據成為日常習慣", en: "Your health, visualized and simplified." },
    { zh: "簡潔呈現，深刻理解", en: "Simplicity meets meaningful health data." },
    { zh: "數據為你說話", en: "Where numbers tell your health story." },
    { zh: "健康不該複雜", en: "Clear. Concise. Connected." }
];

function LoginPage({ onLogin, setToken }) {
    const [isStart, setStart] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % rotatingTexts.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div
            className="flex h-screen w-screen flex-col items-center justify-between bg-cover bg-center"
            style={{
                backgroundImage: `url(${Background})`,
            }}
        >
            <div className="flex w-screen items-center bg-white h-[50px] justify-between">
                <p className="text-2xl font-bold ml-[5%]">健康檢測系統 Health monitor System</p>
                <button
                    className="mr-[5%] rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 py-2 text-sm font-medium text-white w-[100px] hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300"
                    onClick={() => setStart(false)}
                >
                    首頁
                </button>
            </div>

            {isStart ? (
                <LoginForm onLogin={onLogin} setToken={setToken} />
            ) : (
                <div className="flex flex-col items-center" key={index}>
                    <div className="animate-fade transition-opacity duration-500">
                        <p className="text-white text-4xl font-bold text-center">{rotatingTexts[index].zh}</p>
                        <p className="text-white text-2xl font-semibold text-center mt-2">{rotatingTexts[index].en}</p>
                    </div>
                    <button
                        className="mt-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 py-2 text-sm font-medium text-white w-[120px] hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300"
                        onClick={() => setStart(true)}
                    >
                        開始使用
                    </button>
                </div>
            )}

            <div className="flex w-screen items-center bg-white h-[100px]">
                <p className="ml-[7.5%]">健康檢測系統<br />Health monitor System</p>
            </div>
        </div>
    );
}

export default LoginPage;
