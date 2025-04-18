import {useEffect, useState} from "react";

function HomePage({token}) {

    const [HR, setHR] = useState(87.0);

    useEffect(() => {
        async function updateHR() {

            let headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            };

            let head = await fetch("/api/get", {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    id: "123456"
                })
            })

            let body = await head.json();
            setHR(body.HR);
        }

        updateHR();
    }, []);

    return (
        <div>
            我是首頁
            {HR}
        </div>
    )
}

export default HomePage;