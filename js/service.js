const serviceData = {
    "residential-projects": {
        "title": "Residential Projects",
        "image": "assets/service-img-1.jpg",
        "description1": "We offer complete residential construction services tailored to your needs, including:",
        "services": [
            "Independent Villas",
            "Apartments",
            "Independent Floor Apartments",
            "Custom-Designed Homes",
            "Duplex & Triplex Houses",
            "Turnkey Homes (Design to Handover)",
            "Farmhouses / Weekend Retreats",
            "Landowner Joint Developments"
        ],
    },

    "institutional-projects": {
        "title": "Institutional Projects",
        "image": "assets/service-img-2.jpg",
        "description1": "We undertake construction of institutional buildings with proper planning, safety, and compliance:",
        "services": [
            "Schools & Colleges construction",
            "Hospitals & Clinics construction",
            "Government Buildings & Offices", 
            "Community Halls & Training Centers",
            "Hostels & Staff Quarters",
            "Auditoriums and campus planning",
            "Turnkey institutional solutions"
        ],
    },


    "commercial-projects": {
        "title": "Commercial Projects",
        "image": "assets/service-img-3.jpg",
        "description1": "We take up a wide range of commercial building projects with focus on functionality, space efficiency, and brand aesthetics.",
        "services": [
            "Office Buildings construction",
            "Retail Shops & Showrooms",
            "Shopping Complexes / Mini-Malls",
            "Restaurants & Cafes",
            "Warehouses & Storage Spaces",
            "Turnkey Commercial Interiors",
            "Parking and access planning",
            "Brand-aligned interior design"
        ],
    },


    "pile-foundation-works": {
        "title": "Piling Works",
        "image": "assets/Piling.jpg",
        "description1": "We provide all types of piling services needed for buildings, bridges, roads, and industrial structures:",
        "services": [
            "DMC and Bored Piles – Deep foundations using rotary rigs",
            "Cast-in-Situ Piles – Concrete poured directly into drilled holes",
            "Auger Piles & Under-Reamed Piles – For low to medium load-bearing structures",
            "Pile Testing – Static, dynamic, and integrity testing",
            "Sheet Piling & Soil Stabilization – For retaining walls and weak ground"
        ],
    },


    // "interior-fit-outs": {
    //     "title": "Interior Design & Execution",
    //     "image": "assets/Interior Design.jpg",
    //     "description1": "We provide end-to-end interior solutions that are both functional and visually appealing.",
    //     "services": [
    //         "Modular Kitchens & Wardrobes",
    //         "False Ceilings & Lighting Design",
    //         "TV Units, Partitions & Storage Solutions",
    //         "Bathroom & Kitchen Fittings",
    //         "Color Themes, Textures & Finishes",
    //         "Complete Turnkey Interiors"
    //     ],
    // },

    "industrial-projects": {
        "title": "Industrial Projects",
        "image": "assets/services-11.jpg",
        "description1": "We provide end-to-end construction solutions for various industrial needs, including:",
        "services": [
            "Warehouses & Godowns construction",
            "Industrial Sheds (PEB & RCC) development",
            "Factories & Workshops setup",
            "Cold Storage Buildings construction",
            "Foundation Works & RCC Structures",
            "Boundary Walls & Site Infrastructure"
        ]
    },
    "turnkey-projects": {
        "title": "Turnkey Projects",
        "image": "assets/service-img-4.jpg",
        "description1": "We handle everything from start to finish, so you don’t have to worry about any stage of the project.",
        "services": [
            "Design & Planning",
            "Building Approvals & Permissions",
            "Construction Execution",
            "Interior Works (if required)",
            "Final Handover – Ready to Use"
        ],
    },
    "joint-dev": {
        "title": "Joint Development & Site Partnerships",
        "image": "assets/Joint Development.jpg",
        "description1": "We collaborate with landowners and clients to develop their land through fair and transparent agreements.",
        "description2": "Joint Venture Construction – Share-based building partnerships Site Development for Owners – Construction done on fixed cost or profit-sharing model",
        "services": [
            "Joint Venture Construction – Share-based building partnerships",
            "Site Development for Owners – Fixed cost or profit-sharing model",
            "Planning & Layout Finalization",
            "Building Approvals & Legal Support",
            "Execution & Marketing Support"
        ],
    },

    "civil-infrastructure": {
        "title": "Civil & Infrastructure Works",
        "image": "assets/Civil Works.jpg",
        "description1": "We take up all types of major and minor civil works with proper equipment, skilled teams, and site safety.",
        "description2": "RCC Foundations – Industrial, commercial, and heavy-duty base structures Cement Concrete Roads – Internal roads, approach roads, and site pavements",
        "services": [
            "RCC Foundations – Industrial, commercial, and heavy-duty base structures",
            "Cement Concrete Roads – Internal roads, approach roads, and site pavements",
            "NH & BT Roadworks – Side drains, culverts, shoulder works, and finishing",
            "Retaining Walls – For elevation control and land protection",
            "Site Development – Earthwork, filling, leveling, and boundary works"
        ],
    }


};
function getServiceFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('service') || 'residential-projects'; // Default
}

function renderServiceContent(serviceKey) {
    const data = serviceData[serviceKey];
    if (!data) return;

    const serviceSection = document.querySelector('.service-content');
    const serviceImage = document.querySelector('.service-image img');

    serviceSection.classList.add('fade-out');

    setTimeout(() => {
        // Update main content
        serviceImage.src = data.image || 'assets/default.jpg';
        serviceSection.querySelector('h2').textContent = data.title || '';
        serviceSection.querySelectorAll('p')[0].textContent = data.description1 || '';
        serviceSection.querySelectorAll('p')[1].textContent = data.description2 || '';

        // Optional description3
        if (data.description3) {
            if (!serviceSection.querySelector('.description3')) {
                const p3 = document.createElement('p');
                p3.classList.add('mb-4', 'description3');
                serviceSection.querySelectorAll('p')[1].after(p3);
            }
            serviceSection.querySelector('.description3').textContent = data.description3;
        } else {
            const p3 = serviceSection.querySelector('.description3');
            if (p3) p3.remove();
        }

        // Update Service List
        const listContainer = document.querySelector('.service-list ul');
        listContainer.innerHTML = '';
        if (data.services && data.services.length > 0) {
            data.services.forEach(item => {
                listContainer.innerHTML += `
                  <li class="col-md-6 mb-2">
                    <i class="bi bi-check-circle-fill text-success me-2"></i> ${item}
                  </li>`;
            });
        }

        // Update Steps
        const stepsContainer = document.querySelector('.service-steps .row');
        if (data.steps && data.steps.length > 0) {
            // Make sure steps container exists
            if (!stepsContainer) return;

            stepsContainer.innerHTML = ''; // Clear old steps
            data.steps.forEach(step => {
                stepsContainer.innerHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="service-step p-3 border rounded h-100">
                            <img src="${step.img}" alt="${step.title}" class="mb-3" width="70">
                            <h6>${step.title}</h6>
                            <p>${step.desc}</p>
                        </div>
                    </div>`;
            });

            document.querySelector('.service-steps').style.display = 'block';
        } else {
            // Hide steps section if no steps
            document.querySelector('.service-steps').style.display = 'none';
        }

        // Animate in
        serviceSection.classList.remove('fade-out');
        serviceSection.classList.add('fade-in');

        setTimeout(() => {
            serviceSection.classList.remove('fade-in');
        }, 300);
    }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
    renderServiceContent(getServiceFromURL());

    document.querySelectorAll(".sidebar-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const key = this.dataset.service;
            history.pushState({}, "", `?service=${key}`);
            renderServiceContent(key);
        });
    });

    // Handle browser back/forward navigation
    window.addEventListener('popstate', () => {
        renderServiceContent(getServiceFromURL());
    });
});
