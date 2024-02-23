document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMenu = document.querySelector('.navbar ul');
    const timeline = document.getElementById('timeline');
    const navbarToggle = document.getElementById('navbar-toggle');
    const overlay = document.getElementById('overlay');
    const overlayContent = document.querySelector('.overlay-content');

    // Toggle het responsieve menu
    menuToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Toggle de overlay en het overlay-menu
    navbarToggle.addEventListener('click', function() {
        overlay.classList.toggle('active');
        overlayContent.classList.toggle('active');
    });

    // Sluit het menu wanneer er op een link wordt geklikt
    navbarMenu.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navbarMenu.classList.remove('active');
        });
    });

    // Voeg evenementen toe aan de tijdlijn
    const events = [
        { date: "1991", title: "Verhuizing naar Nederland", description: "Verliet de Dutch Caribbean om de prachtige Hollandse seizoenen te omarmen." },
        { date: "1995", title: "Start in de tandheelkunde", description: "Begon haar carrière in de tandheelkunde." },
        { date: "Huidig", title: "Specialisatie als angstcoach", description: "Specialiseerde zich als angstcoach, met name op het gebied van angst in de tandheelkunde." }
        // Voeg meer gebeurtenissen toe indien nodig
    ];

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.dataset.date = event.date;
        eventElement.innerHTML = `
            <div class="event-date">${event.date}</div>
            <div class="event-content">
                <div class="event-title">${event.title}</div>
                <div class="event-description">${event.description}</div>
            </div>
        `;
        timeline.appendChild(eventElement);
    });

    // Voeg interactieve effecten toe zoals hover-effecten of klikgebeurtenissen
});

// JavaScript om de modaal te openen en te sluiten
var modal = document.getElementById('video-modal');
var button = document.getElementById("show-all-videos-button");
var span = document.getElementsByClassName("close")[0];

button.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
