import Background from './assets/LoginPage_Background.jpg'
import {useState} from "react";
import { initializeApp } from "firebase/app";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
import './LoginPage.css'


function LoginPage({onLogin , setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        const firebaseConfig = {
            apiKey: "AIzaSyC7EkgMvfNT54lGnRUsGAbbnu3Tybbj4n4",
            authDomain: "seniorproject-9a41a.firebaseapp.com",
            projectId: "seniorproject-9a41a",
            storageBucket: "seniorproject-9a41a.firebasestorage.app",
            messagingSenderId: "330043030768",
            appId: "1:330043030768:web:9c2fd8a05a5ea23d869635",
            measurementId: "G-X0XKVN6LP2"

        };
        const app = initializeApp(firebaseConfig)
        const auth = getAuth(app);
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        const user = userCredential.user;

        // 取得 ID Token
        const idToken = await user.getIdToken();

        // 模擬帳號密碼驗證
        if (idToken) {
            setToken(idToken)
            onLogin();
        } else {
            setError("帳號或密碼錯誤");
        }
    };

    return (
        <div
            className="flex h-screen w-screen items-center justify-center bg-cover bg-center"
            style={{
             backgroundImage: `url(${Background})`,
            }}
        >
           <div className="flex flex-col items-center justify-start rounded-3xl bg-white h-[320px] w-[320px] min-w-[320px]">
               <h1 className="mt-10 text-5xl LoginTitle">登入</h1>
               <form className="mt-10 flex w-10/12 flex-col justify-between" onSubmit={handleSubmit}>
                   <label className="flex justify-between">
                       Email：
                       <input
                           className='w-9/12'
                           onChange={e => setUsername(e.target.value)}
                       />
                   </label>
                   <label className="mt-5 flex justify-between">
                       密碼：
                       <input
                           className='w-9/12'
                           onChange={e => setPassword(e.target.value)}
                       />
                   </label>
                   <div  className="mt-10 flex justify-around">
                       <a className="mt-3 cursor-pointer text-blue-500 underline">註冊</a>
                       <button
                           type="submit"
                           className="mb-2 cursor-pointer rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 text-center text-sm font-medium text-white py-2.5 me-2 hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                       >
                           登入
                       </button>
                   </div>
               </form>
           </div>
        </div>
    );
}

export default LoginPage;