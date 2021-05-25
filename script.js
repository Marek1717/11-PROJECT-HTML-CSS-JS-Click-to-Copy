var btn = document.querySelector(".btn");
var coupon = document.querySelector(".coupon");



const copyText = (e) => {
    e.preventDefault();
    coupon.select();
    coupon.setSelectionRange(0, 999);
    document.execCommand("copy");



    btn.textContent = "Copied"
    setTimeout(() => {
        btn.textContent = "Copy"
    }, 3000);
}

btn.addEventListener("click", copyText);