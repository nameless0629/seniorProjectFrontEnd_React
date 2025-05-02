import Background from './assets/LoginPage_Background2.jpg'
import './LoginPage.css'
import LoginForm from "./components/LoginForm.jsx";
import {useState} from "react";


function LoginPage({onLogin , setToken}) {
    const [isStart , setStart] = useState(false)

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
                    onClick={() => {
                        setStart(false)
                    }}
                >
                    首頁
                </button>
            </div>
            {isStart ? <LoginForm onLogin={onLogin} setToken={setToken}></LoginForm> :
                <div className="flex flex-col items-center">
                    <p className="text-white text-5xl font-bold text-center">一眼掌握你的健康狀況</p>
                    <p className="text-white text-5xl font-bold text-center">Health insights, clearly delivered</p>
                    <button
                        className="mt-15 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 py-2 text-sm font-medium text-white w-[120px] hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300"
                        onClick={() => {
                            setStart(true)
                        }}
                    >
                        開始使用
                    </button>
                </div>
            }
            <div className="flex w-screen items-center bg-white h-[100px]">
                <p className="ml-[7.5%]">健康檢測系統<br/>Health monitor System</p>
            </div>
        </div>
    );
}

export default LoginPage;