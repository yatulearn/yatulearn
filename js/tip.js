async function fetchThought() {
    try {
        const response = await fetch('http://127.0.0.1:5000/thought');
        const data = await response.json();
        document.getElementById('thought').innerText = data.thought;
    } catch (error) {
        document.getElementById('thought').innerText = "Failed to load thought.";
        console.error(error);
    }
}
fetchThought();
