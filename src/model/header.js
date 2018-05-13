export async function fetchHeader() {
    try {
        const url = 'assets/db/header.json';
        const response = await fetch(url);
        const header = await response.json();
        console.log("header : ", header);
        return header;
    } catch (err) {
        alert(err);
    }
}