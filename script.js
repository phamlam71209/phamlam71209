// Giả lập kết quả ngẫu nhiên
document.getElementById("placeBet").addEventListener("click", () => {
    const result = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
    const display = result > 7 ? "Tài" : "Xỉu";
    document.getElementById("result").textContent = `${result} (${display})`;
});

// Chức năng chat (giả lập)
const chatBox = document.getElementById("chatBox");
document.getElementById("sendMessage").addEventListener("click", () => {
    const message = document.getElementById("chatInput").value;
    if (message) {
        const newMessage = document.createElement("p");
        newMessage.textContent = message;
        chatBox.appendChild(newMessage);
        document.getElementById("chatInput").value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
