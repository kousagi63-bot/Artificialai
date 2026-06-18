/* =====================================================
   Stackly CHATBOT
   Floating AI Assistant
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const chatbotBtn =
    document.querySelector(".chatbot-btn");

    if(!chatbotBtn) return;

    /* ==========================
       CREATE CHAT WINDOW
    ========================== */

    const chatWindow =
    document.createElement("div");

    chatWindow.className = "chat-window";

    chatWindow.innerHTML = `

        <div class="chat-header">

            <div>
                🤖 Stackly Assistant
            </div>

        </div>

        <div class="chat-body">

            <div class="bot-message">
                👋 Welcome to Stackly.
                How can I help you today?
            </div>

        </div>

        <div class="chat-input">

            <input
            type="text"
            placeholder="Type your message..."
            id="chatInput">

            <button id="sendMessage">
                Send
            </button>

        </div>

    `;

    document.body.appendChild(chatWindow);

    /* ==========================
       TOGGLE CHAT
    ========================== */

    chatbotBtn.addEventListener("click", () => {

        if(chatWindow.style.display === "block"){

            chatWindow.style.display = "none";

        }else{

            chatWindow.style.display = "block";

        }

    });

    const chatBody =
    chatWindow.querySelector(".chat-body");

    const input =
    chatWindow.querySelector("#chatInput");

    const sendBtn =
    chatWindow.querySelector("#sendMessage");

    /* ==========================
       BOT RESPONSES
    ========================== */

    const responses = {

        hello:
        "Hello 👋 How can I assist you today?",

        hi:
        "Hi 👋 Welcome to Stackly.",

        services:
        "We offer Generative AI, Machine Learning, NLP, Computer Vision and Automation solutions.",

        pricing:
        "Our plans include Starter, Professional and Enterprise packages.",

        contact:
        "You can contact us through our Contact page or email info@Stackly.com.",

        blog:
        "Visit our blog section for AI news, insights and trends.",

        ai:
        "Artificial Intelligence helps businesses automate processes and make smarter decisions.",

        machine:
        "Machine Learning enables systems to learn from data and improve automatically.",

        chatbot:
        "Our AI chatbots provide 24/7 customer support and automation.",

        default:
        "I'm still learning 🤖. Please contact our team for detailed assistance."
    };

    /* ==========================
       SEND MESSAGE
    ========================== */

    function sendMessage(){

        const message =
        input.value.trim();

        if(message === "") return;

        /* USER MESSAGE */

        const userMsg =
        document.createElement("div");

        userMsg.className =
        "user-message";

        userMsg.innerText =
        message;

        chatBody.appendChild(userMsg);

        /* BOT RESPONSE */

        setTimeout(() => {

            const botMsg =
            document.createElement("div");

            botMsg.className =
            "bot-message";

            const text =
            message.toLowerCase();

            let reply =
            responses.default;

            if(text.includes("hello"))
                reply = responses.hello;

            else if(text.includes("hi"))
                reply = responses.hi;

            else if(text.includes("service"))
                reply = responses.services;

            else if(text.includes("pricing"))
                reply = responses.pricing;

            else if(text.includes("contact"))
                reply = responses.contact;

            else if(text.includes("blog"))
                reply = responses.blog;

            else if(text.includes("ai"))
                reply = responses.ai;

            else if(text.includes("machine"))
                reply = responses.machine;

            else if(text.includes("chatbot"))
                reply = responses.chatbot;

            botMsg.innerText =
            reply;

            chatBody.appendChild(botMsg);

            chatBody.scrollTop =
            chatBody.scrollHeight;

        }, 700);

        input.value = "";

        chatBody.scrollTop =
        chatBody.scrollHeight;

    }

    /* ==========================
       EVENTS
    ========================== */

    sendBtn.addEventListener(
    "click",
    sendMessage
    );

    input.addEventListener(
    "keypress",
    (e) => {

        if(e.key === "Enter"){

            sendMessage();

        }

    });

});

/* =====================================================
   CHAT MESSAGE STYLES
===================================================== */

const chatbotStyle =
document.createElement("style");

chatbotStyle.innerHTML = `

.bot-message{

    background:
    rgba(108,99,255,.15);

    color:#fff;

    padding:12px 15px;

    border-radius:15px;

    margin-bottom:12px;

    max-width:85%;

    line-height:1.5;

}

.user-message{

    background:
    rgba(0,229,255,.15);

    color:#fff;

    padding:12px 15px;

    border-radius:15px;

    margin-bottom:12px;

    margin-left:auto;

    max-width:85%;

    text-align:right;

    line-height:1.5;

}

`;

document.head.appendChild(chatbotStyle);