import Background1 from './assets/LoginPage_Background2.jpg'
import Background2 from './assets/LoginPage_Background3.png'
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
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    if (isStart) {
        return <LoginForm onLogin={onLogin} setToken={setToken} />;
    }

    return (
        <div className="overflow-y-scroll snap-y snap-mandatory h-screen w-screen scroll-smooth">
            <section
                className="h-screen w-screen flex flex-col items-center justify-center bg-cover bg-center snap-start relative"
                style={{ backgroundImage: `url(${Background1})` }}
            >
                <div className="absolute top-0 w-full flex justify-between items-center bg-white h-[50px] px-[5%]">
                    <p className="text-2xl font-bold">健康檢測系統 Health monitor System</p>
                    <div className="flex gap-2">
                        <button
                            className="rounded bg-blue-400 px-4 py-1 text-white hover:bg-blue-500"
                            onClick={() => setStart(false)}
                        >
                            首頁
                        </button>
                    </div>
                </div>

                <div key={index} className="text-center animate-fade px-4">
                    <p className="text-white text-4xl font-bold">{rotatingTexts[index].zh}</p>
                    <p className="text-white text-2xl font-semibold mt-2">{rotatingTexts[index].en}</p>
                </div>
            </section>

            <section className="h-screen w-screen flex items-center justify-center bg-black snap-start">
                <img src={Background2} alt="watch" className="h-full w-full object-cover" />
            </section>

            <section className="w-screen flex justify-start bg-white py-12 px-[7.5%] snap-start">
                <div className="text-left leading-relaxed">
                    <p className="text-black text-2xl font-bold">健康檢測系統</p>
                    <p className="text-black text-md">Health monitor system</p>
                </div>
            </section>
        </div>
    );
}

export default LoginPage;
