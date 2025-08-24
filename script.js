let socialIcons = document.querySelector('.social-icons');
socialIcons.addEventListener('mouseover', function() {
    socialIcons.style.transform = 'scale(1.1)';
});
socialIcons.addEventListener('mouseout', function() {
    socialIcons.style.transform = 'scale(1)';
});
let footer = document.querySelector('.footer');
footer.style.position = 'fixed';
footer.style.bottom = '10px';
footer.style.left = '20px';
footer.style.right = '20px';