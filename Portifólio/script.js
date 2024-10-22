const aboutBtn = document.getElementById('about-btn');
const projectsBtn = document.getElementById('projects-btn');
const aboutContent = document.getElementById('about-content');
const projectsContent = document.getElementById('projects-content');

aboutBtn.addEventListener('click', () => {
    if (aboutContent.style.display === 'none' || aboutContent.style.display === '') {
        aboutContent.style.display = 'block';
        projectsContent.style.display = 'none';
    } else {
        aboutContent.style.display = 'none';
    }
});

projectsBtn.addEventListener('click', () => {
    if (projectsContent.style.display === 'none' || projectsContent.style.display === '') {
        projectsContent.style.display = 'block';
        aboutContent.style.display = 'none';
    } else {
        projectsContent.style.display = 'none';
    }
});