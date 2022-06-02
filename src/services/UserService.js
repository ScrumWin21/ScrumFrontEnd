export async function postUser(userJSON) {
    try {
        let response = await fetch('https://localhost:7125/api/Users', {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: userJSON
        });
        if(response.status === 201) {
            return "User was created successfully";
        }else {
            return response.text();
        }
    } catch(errorMessage) {
        alert(errorMessage);
    }
}