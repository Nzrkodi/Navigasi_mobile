/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


document.addEventListener("DOMContentLoaded", function() {
    // Menampilkan loading screen saat konten situs web dimuat
    var loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "flex";
  
    // Menghilangkan loading screen setelah beberapa detik
    var durationInSeconds = 5; // Ubah angka ini menjadi durasi yang diinginkan (dalam detik)
    setTimeout(function() {
      loadingScreen.style.display = "none";
    }, durationInSeconds * 100); // Mengubah durasi menjadi milidetik
  });
