document.getElementById("contactForm").addEventListener("submit", async(e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const response = await fetch("https://formtester.goodbytes.be/post.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, message})
    });

    if (response.ok) {
        alert("Nachricht gesendet");
    } else {
        alert("Fehler beim senden.");
    }
});