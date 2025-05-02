// src/LoginForm.jsx
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../firebase";
import loginPage from "../LoginPage.jsx"; // 從共用設定載入

function LoginForm({setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth(firebaseApp);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, username, password);
            const user = userCredential.user;
            const idToken = await user.getIdToken();

            if (idToken) {
                setToken(idToken);
                sessionStorage.setItem("token" , idToken);
            }
        } catch (err) {
            setError("帳號或密碼錯誤");
        }
    };

    return (
        <div className="flex h-auto w-11/12 flex-col items-center justify-start rounded-3xl border border-white bg-gray-800 p-6 sm:h-[400px] sm:w-[400px]">
            <p className="mt-2 text-3xl font-bold text-white">登入帳號</p>

            <form className="mt-5 flex w-full flex-col gap-4 px-4" onSubmit={handleSubmit}>
                <div>
                    <label className="mb-1 block font-semibold text-white">Email</label>
                    <input
                        type="text"
                        className="h-10 w-full rounded-xl border border-gray-600 px-3 text-white"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="mb-1 block font-semibold text-white">密碼</label>
                    <input
                        type="password"
                        className="h-10 w-full rounded-xl border border-gray-600 px-3 text-white"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <p className="text-center text-sm text-red-400">{error ? error : " "}</p>

                <div className="mt-5 flex flex-col items-center">
                    <button
                        type="submit"
                        className="rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 py-2 text-sm font-medium text-white w-[120px] hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        登入
                    </button>
                    <p className="mt-2 text-sm text-white">
                        尚未註冊?
                        <a className="ml-2 cursor-pointer text-blue-400 underline">建立帳號</a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
