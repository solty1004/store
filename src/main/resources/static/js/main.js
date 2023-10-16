window.onload = function() {
    // 서치 버튼 관련 변수
    var searchBtn = document.getElementById("search-btn");
    var searchForm = document.querySelector('.header .search-form');

    // 서치 버튼 토글 함수
    searchForm.style.display = "none";
    searchForm.style.right = "30%";

    searchBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // 이벤트 버블링 방지

        if (searchForm.style.display === "block") {
            searchForm.style.display = "none";
        } else {
            searchForm.style.display = "block";
            searchForm.style.right = "0%";
        }
    });


}