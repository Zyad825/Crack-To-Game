
        // دالة لفتح وإغلاق القائمة في الأجهزة الصغيرة
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        }
//new line

//<![CDATA[
document.oncontextmenu = function() {
return false;
};
document.onkeydown = function(e) {
if (e.keyCode == 123) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
return false;
}
if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
return false;
}
}
//]]>


