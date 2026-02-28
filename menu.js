document.addEventListener("DOMContentLoaded", function () {

    /* ===== Hide original website menu (optional) ===== */
    document.querySelectorAll("button, .menu, .hamburger, .menu-toggle")
        .forEach(el => el.style.display = "none");


    /* ===== Overlay ===== */
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.4)";
    overlay.style.backdropFilter = "blur(4px)";
    overlay.style.zIndex = "9998";
    overlay.style.display = "none";
    document.body.appendChild(overlay);


    /* ===== Sidebar ===== */
    const sidebar = document.createElement("div");
    sidebar.style.position = "fixed";
    sidebar.style.top = "0";
    sidebar.style.left = "-300px";
    sidebar.style.width = "300px";
    sidebar.style.height = "100%";
    sidebar.style.background = "#1f1f1f";
    sidebar.style.zIndex = "9999";
    sidebar.style.transition = "0.35s cubic-bezier(.25,.8,.25,1)";
    sidebar.style.display = "flex";
    sidebar.style.flexDirection = "column";
    sidebar.style.boxShadow = "5px 0 20px rgba(0,0,0,0.5)";


    /* ===== Header Section ===== */
    const header = document.createElement("div");
    header.style.background = "linear-gradient(135deg, #7b2ff7, #5f0aff)";
    header.style.padding = "30px 20px";
    header.style.color = "white";
    header.style.position = "relative";

    header.innerHTML = `
        <img src="https://i.ibb.co/Y7m00G3g/cropped-circle-image.png"
        style="width:65px;height:65px;border-radius:50%;margin-bottom:10px;">
        <h2 style="margin:0;font-size:20px;">Pw Study</h2>
    `;

    /* Close Button */
    const closeBtn = document.createElement("div");
    closeBtn.innerHTML = "✕";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "15px";
    closeBtn.style.right = "20px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "20px";
    closeBtn.onclick = closeMenu;
    header.appendChild(closeBtn);

    sidebar.appendChild(header);


    /* ===== Menu Items ===== */
    const menuItems = [
        { name: "Home", icon: "🏠", link: "/" },
        { name: "Today's Study", icon: "📚", link: "#" },
        { name: "All Batches", icon: "🖥️", link: "#" },
        { name: "My Batches", icon: "📁", link: "#" },
        { name: "Donate Batches", icon: "⬇️", link: "#" },
        { name: "Join Telegram", icon: "📢", link: "https://t.me/yourchannel" }
    ];

    menuItems.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `${item.icon} &nbsp; ${item.name}`;
        div.style.padding = "15px 20px";
        div.style.color = "white";
        div.style.cursor = "pointer";
        div.style.position = "relative";
        div.style.overflow = "hidden";
        div.style.transition = "0.2s";

        /* Ripple Effect */
        div.onclick = function (e) {

            if (item.link.startsWith("http")) {
                window.location.href = item.link;
            }

            const ripple = document.createElement("span");
            ripple.style.position = "absolute";
            ripple.style.background = "rgba(255,255,255,0.4)";
            ripple.style.borderRadius = "50%";
            ripple.style.width = ripple.style.height = "100px";
            ripple.style.left = e.offsetX - 50 + "px";
            ripple.style.top = e.offsetY - 50 + "px";
            ripple.style.animation = "ripple 0.6s linear";
            div.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        };

        div.onmouseover = () => div.style.background = "#2a2a2a";
        div.onmouseout = () => div.style.background = "transparent";

        sidebar.appendChild(div);
    });

    document.body.appendChild(sidebar);


    /* ===== Open / Close Functions ===== */
    function openMenu() {
        sidebar.style.left = "0";
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        sidebar.style.left = "-300px";
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
    }

    overlay.onclick = closeMenu;


    /* ===== Floating Menu Button ===== */
    const menuBtn = document.createElement("div");
    menuBtn.innerHTML = "☰";
    menuBtn.style.position = "fixed";
    menuBtn.style.top = "12px";
    menuBtn.style.left = "15px";
    menuBtn.style.fontSize = "24px";
    menuBtn.style.color = "white";
    menuBtn.style.zIndex = "10000";
    menuBtn.style.cursor = "pointer";
    menuBtn.onclick = openMenu;
    document.body.appendChild(menuBtn);


    /* Ripple Animation */
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes ripple {
            from { transform: scale(0); opacity: 1; }
            to { transform: scale(2); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

});
