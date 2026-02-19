function getBaseUrl() {
    const idInstance = document.getElementById("idInstance").value;
    return `https://7103.api.greenapi.com/waInstance${idInstance}`;
}

function getToken() {
    return document.getElementById("apiToken").value;
}

function showResponse(data) {
    document.getElementById("response").value =
        JSON.stringify(data, null, 2);
}

async function getSettings() {
    try {
        const url = `${getBaseUrl()}/getSettings/${getToken()}`;
        console.log("URL:", url);

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        showResponse(data);
    } catch (error) {
        console.error("Ошибка getSettings:", error);
        document.getElementById("response").value = "Ошибка: " + error.message;
    }
}

async function getStateInstance() {
    try {
        const url = `${getBaseUrl()}/getStateInstance/${getToken()}`;
        console.log("URL:", url);

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        showResponse(data);
    } catch (error) {
        console.error("Ошибка getStateInstance:", error);
        document.getElementById("response").value = "Ошибка: " + error.message;
    }
}

async function sendMessage() {
    try {
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const url = `${getBaseUrl()}/sendMessage/${getToken()}`;
        console.log("URL:", url);

        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chatId: phone + "@c.us",
                message: message
            })
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        showResponse(data);
    } catch (error) {
        console.error("Ошибка sendMessage:", error);
        document.getElementById("response").value = "Ошибка: " + error.message;
    }
}

async function sendFileByUrl() {
    try {
        const phone = document.getElementById("phone").value;
        const fileUrl = document.getElementById("fileUrl").value;

        const url = `${getBaseUrl()}/sendFileByUrl/${getToken()}`;
        console.log("URL:", url);

        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chatId: phone + "@c.us",
                urlFile: fileUrl,
                fileName: "file"
            })
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        showResponse(data);
    } catch (error) {
        console.error("Ошибка sendFileByUrl:", error);
        document.getElementById("response").value = "Ошибка: " + error.message;
    }
}