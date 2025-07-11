const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('nav-sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.querySelector('.sidebar-overlay');

menuBtn.addEventListener('click', function () {
    sidebar.classList.add('show');
    overlay.classList.add('active');
});
closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show');
    overlay.classList.remove('active');
});
overlay.addEventListener('click', function () {
    sidebar.classList.remove('show');
    overlay.classList.remove('active');
});


document.getElementById('showSearchBtn').onclick = function () {
    document.getElementById('searchForm').classList.toggle('show');
};


//category page
function openFilter() {
    document.getElementsByClassName("filter")[0].classList.add("active");
}
function closeFilter() {
    document.getElementsByClassName("filter")[0].classList.remove("active");
}