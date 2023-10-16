document.addEventListener("DOMContentLoaded", function () {

    var actionBtn = document.getElementById("actionBtn");
    var progressBar = document.getElementById("lb");

    actionBtn.addEventListener("click", function () {
        var currentValue = parseInt(progressBar.value, 10);
        var newValue = currentValue + 10;

        if (newValue <= parseInt(progressBar.getAttribute("max"), 10)) {
            progressBar.value = newValue;
        }
        alert("준비중 입니다.");
        // 페이지 이동을 원하는 주소로 변경하세요.
        window.location.href = "/";
    });
});




