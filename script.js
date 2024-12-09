// 漢堡按鈕切換導航欄
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navigator = document.querySelector(".navigator");
  
    hamburger.addEventListener("click", () => {
      navigator.classList.toggle("active");
    });
  
    // 滾動觸發圖片滑入效果
    const images = document.querySelectorAll(".slide-in");
  
    const slideInOnScroll = () => {
      images.forEach((image) => {
        const slideInAt = window.scrollY + window.innerHeight - image.height / 3;
        const imageBottom = image.offsetTop + image.height;
        const isHalfShown = slideInAt > image.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
  
        if (isHalfShown && isNotScrolledPast) {
          image.classList.add("active");
        } else {
          image.classList.remove("active");
        }
      });
    };
  
    window.addEventListener("scroll", slideInOnScroll);
    slideInOnScroll(); // 頁面加載時觸發一次
  });
  