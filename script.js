const chatsContainer = document.querySelector(".chats-container");
const promptForm = document.querySelector(".prompt-form");
const promptInput = promptForm.querySelector(".prompt-input");

let userMessage = "";

const createMsgElement = (content, className) =>
    {
    const div = document.createElement("div");
    div.classList.add("message", className);
    div.innerHTML = content;
    return div;

}

const handleFormSubmit = (e) => {
    e.preventDefault();
userMessage = promptInput.value.trim();
if(!userMessage) return;

const userMsgHTML='<p class="message-text"></p>';
const userMsgDiv = createMsgElement(userMsgHTML, "message-user-message");
userMsgDiv.querySelector(".message-text").textContent = userMessage;
chatsContainer.appendChild(userMsgDiv);

setTimeout(() => {
    const userMsgHTML=' <img src="robo1.svg.svg" class="avatar"><p class="message-text">Just a sec...</p>';
    const userMsgDiv = createMsgElement(userMsgHTML, "message-user-message");
    userMsgDiv.querySelector(".message-text").textContent = userMessage;
    chatsContainer.appendChild(userMsgDiv);
},600)
}

promptForm.addEventListener("submit", handleFormSubmit);








