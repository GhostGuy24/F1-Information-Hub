// Function to set team details into the modal (for teams.index)
function setTeamDetails(teamName, teamDetails) {
    const modalTitle = document.querySelector("#teamModal .modal-title");
    const modalBody = document.querySelector("#teamModal .modal-body");

    // Update modal content
    if (modalTitle && modalBody) {
        modalTitle.textContent = teamName;
        modalBody.textContent = teamDetails;
    } else {
        console.error("Modal elements not found");
    }
}
// the function above makes the teams.html affects //


function expandDriverCard(card) {
    // Check if card is already expanded
    const isExpanded = card.classList.contains('expanded');
    
    // Collapse all other expanded cards
    document.querySelectorAll('.driver-card.expanded').forEach(expandedCard => {
        expandedCard.classList.remove('expanded');
        expandedCard.querySelector('.compact-text').style.opacity = "1";
        expandedCard.querySelector('.card-details').classList.add('d-none');
    });

    // Toggle the clicked card
    if (!isExpanded) {
        card.classList.add('expanded');
        card.querySelector('.compact-text').style.opacity = "0";
        card.querySelector('.card-details').classList.remove('d-none');
    }
}
// the function above makes the affects on players cards drivers.html // 


// Function to set circuit details into the modal (for circuits.index)
function setCircuitDetails(circuitName, circuitDescription) {
    const modalBody = document.querySelector('#circuitModal .modal-body');
    modalBody.innerHTML = `
        <h5>${circuitName}</h5>
        <p>${circuitDescription}</p>
    `;
}

// Modal functionality for showing detailed data (if required)
function showModal(modalId) {
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}

// Event listener for more details buttons on drivers, teams, and circuits pages
document.addEventListener('DOMContentLoaded', function () {
    // For Teams - Example of event listeners
    const teamButtons = document.querySelectorAll('.team-more-details');
    teamButtons.forEach(button => {
        button.addEventListener('click', function () {
            const teamName = button.getAttribute('data-team-name');
            const teamDescription = button.getAttribute('data-team-description');
            setTeamDetails(teamName, teamDescription);
            showModal('teamModal');
        });
    });

    // For Drivers - Example of event listeners
    const driverButtons = document.querySelectorAll('.driver-more-details');
    driverButtons.forEach(button => {
        button.addEventListener('click', function () {
            const driverName = button.getAttribute('data-driver-name');
            const driverDetails = button.getAttribute('data-driver-details');
            setDriverDetails(driverName, driverDetails);
            showModal('driverModal');
        });
    });

    // For Circuits - Example of event listeners
    const circuitButtons = document.querySelectorAll('.circuit-more-details');
    circuitButtons.forEach(button => {
        button.addEventListener('click', function () {
            const circuitName = button.getAttribute('data-circuit-name');
            const circuitDescription = button.getAttribute('data-circuit-description');
            setCircuitDetails(circuitName, circuitDescription);
            showModal('circuitModal');
        });
    });

    // Initialize DataTable for Constructors Championship and Drivers Championship (on page load)
    if (typeof $ !== 'undefined' && $.fn.DataTable) {
        $('table').each(function () {
            $(this).DataTable({
                paging: false,
                searching: false,
                ordering: true,
                info: false
            });
        });
    }
});
