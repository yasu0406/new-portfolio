export const mousePointer = () => {
    document.querySelector('.cursor').classList.remove('is-active');
    document.querySelector('.follower').classList.remove('is-active');
    if(document.querySelector('.is-active')) {
        document.querySelector('.cursor').classList.remove('is-active');
        document.querySelector('.follower').classList.remove('is-active');
    }
    var hoverLink = document.querySelectorAll('a');
    Array.from(hoverLink).forEach(link => {
        link.addEventListener('mouseenter', function(event) {
          document.querySelector('.cursor').classList.add('is-active');
          document.querySelector('.follower').classList.add('is-active');
        });
        link.addEventListener('mouseleave', () => {
          document.querySelector('.cursor').classList.remove('is-active');
          document.querySelector('.follower').classList.remove('is-active');
        });
    });
  }