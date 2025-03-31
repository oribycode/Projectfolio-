const projects = [
    {
        title: "Live Code Editor",
        description: "Online code editor with live preview functionality",
        image: "https://placehold.co/600x400?text=Code+Editor",
        url: "https://sultanarabi161.github.io/live-server-/projects/code-editor.html"
    },
    {
        title: "Quran",
        description: "Digital Quran application with various features",
        image: "https://placehold.co/600x400?text=Quran",
        url: "https://bookmarks-web.netlify.app/projects/quran.com/"
    },
    {
        title: "FM Radio",
        description: "Online FM radio streaming application",
        image: "https://placehold.co/600x400?text=FM+Radio",
        url: "https://bookmarks-web.netlify.app/projects/orbify-fm/"
    },
    {
        title: "M3U8 Player",
        description: "Stream player for M3U8 format",
        image: "https://placehold.co/600x400?text=M3U8+Player",
        url: "https://bookmarks-web.netlify.app/projects/m3u_player/"
    }
];

function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const card = document.createElement('a');
        card.className = 'project-card';
        card.href = project.url;
        card.target = "_blank";
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
        `;
        
        projectsGrid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
});

// PWA Install Logic
let deferredPrompt;
const installButton = document.getElementById('installButton');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installButton.style.display = 'flex';
});

installButton.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('App installed');
        }
        deferredPrompt = null;
        installButton.style.display = 'none';
    }
});

window.addEventListener('appinstalled', () => {
    installButton.style.display = 'none';
    deferredPrompt = null;
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
