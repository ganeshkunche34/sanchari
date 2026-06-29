/* ==========================================================================
   SANCHARI WEB APP INTERACTIVE LOGIC (app.js)
   ========================================================================== */

// ---------------------------------------------------------
// 1. DATA LAYER (Trips & Initial Mock Data)
// ---------------------------------------------------------
const INITIAL_TRIPS = [
    {
        id: "spiti",
        title: "Spiti Valley Backpacker Expedition",
        category: "mountains",
        tag: "Himalayan Expedition",
        duration: "7 Days, 6 Nights",
        dates: "12 Jun - 18 Jun 2026",
        month: "june",
        boarding: "Delhi (Majnu Ka Tilla)",
        boardingPoints: [
            "Delhi - Majnu ka Tilla (06:00 PM)",
            "Chandigarh - Tribune Chowk (11:30 PM)"
        ],
        price: 14999,
        capacity: 24,
        slotsFilled: 15,
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80",
        inclusions: [
            "AC Sleeper Bus Ticket (Delhi-Manali-Delhi)",
            "Tempo Traveller for local valley transport",
            "4 nights stay in homestays, 2 nights in camps",
            "Daily Breakfast and Dinner",
            "Permits & Local Tour Leader guide fees",
            "Bonfire and stargazing night sessions"
        ],
        exclusions: [
            "Lunch and personal cafe expenses",
            "Adventure activities (Rafting, ATV ride)",
            "Any medical expenses or travel insurance"
        ],
        bookedSeats: ["1A", "2A", "2B", "3D", "4A", "4B", "5C", "5D", "6A", "6B", "6C", "6D", "8A", "8B", "10A"],
        coTravelers: [
            { name: "Aarav Mehta", age: 24, gender: "Male", interests: ["Photography", "Trekking"], seat: "1A" },
            { name: "Ananya Iyer", age: 27, gender: "Female", interests: ["Star Gazer", "Yoga Practitioner"], seat: "2A" },
            { name: "Rohan Das", age: 29, gender: "Male", interests: ["Foodie", "Guitarist"], seat: "3D" },
            { name: "Simran Kaur", age: 23, gender: "Female", interests: ["Trekking", "Photography"], seat: "4B" },
            { name: "Vikram Sen", age: 26, gender: "Male", interests: ["History Buff", "Guitarist"], seat: "6A" },
            { name: "Pooja Hegde", age: 25, gender: "Female", interests: ["Yoga Practitioner", "Star Gazer"], seat: "8A" },
            { name: "Kunal Kapoor", age: 28, gender: "Male", interests: ["Foodie", "Trekking"], seat: "10A" }
        ],
        itinerary: [
            { day: "Day 1: Departure from Delhi", desc: "Board the comfortable AC sleeper bus from Delhi in the evening. Meet your trip lead and fellow co-travelers during the onboarding ice-breaker session." },
            { day: "Day 2: Reach Manali & Acclimatization", desc: "Arrive in Manali, check-in to our backpacker hostel. Spend the day walking around Old Manali cafes, getting to know your crew, and prepping for the altitude." },
            { day: "Day 3: Manali to Kaza via Atal Tunnel", desc: "An epic drive through the Atal Tunnel and Kunzum Pass (14,931 ft). Reach Kaza by evening, check-in to a traditional Spitian homestay and enjoy hot local dinner." },
            { day: "Day 4: Key Monastery & Hikkim (Highest Post Office)", desc: "Visit the iconic Key Monastery. Later, drive to Hikkim to send postcards from the highest post office in the world, and visit Komic, the highest motorable village." },
            { day: "Day 5: Pin Valley National Park & Dhankar Lake", desc: "Explore the stunning Pin Valley, known for its unique wildlife and snowy peaks. Spend the afternoon hiking to Dhankar Lake for spectacular reflection views." },
            { day: "Day 6: Chandratal Lake Camping", desc: "Travel to the sacred, crescent-shaped Chandratal Lake. Set up luxury tents under the clear night sky for an unforgettable stargazing and bonfire experience." },
            { day: "Day 7: Drive to Manali & Return Bus to Delhi", desc: "Cross the rugged trails back to Manali. Board the evening sleeper bus back to Delhi with tons of new friends, memories, and photos." }
        ]
    },
    {
        id: "kerala",
        title: "Kerala Backwaters & Tea Hills Odyssey",
        category: "beaches",
        tag: "Nature & Hills",
        duration: "5 Days, 4 Nights",
        dates: "24 Jun - 28 Jun 2026",
        month: "june",
        boarding: "Bangalore (Indiranagar)",
        boardingPoints: [
            "Bangalore - Indiranagar Metro (07:00 PM)",
            "Bangalore - Silk Board Junction (08:00 PM)",
            "Mysore - KSRTC Bus Stand (11:00 PM)"
        ],
        price: 11499,
        capacity: 24,
        slotsFilled: 8,
        image: "https://images.unsplash.com/photo-1545638191-1df66fb329c2?auto=format&fit=crop&w=600&q=80",
        inclusions: [
            "AC Sleeper Bus Ticket (Bangalore-Munnar-Alleppey-Bangalore)",
            "Local transfers in comfortable private vehicle",
            "2 nights stay in Munnar tea-view resort, 1 night in Houseboat",
            "Daily Breakfast and Houseboat Meals",
            "Kayaking activity in Alleppey backwaters",
            "Spice plantation trail tickets"
        ],
        exclusions: [
            "Dinners in Munnar (explore local cafes together)",
            "Camera charges at attractions",
            "Personal boating and shopping"
        ],
        bookedSeats: ["1A", "1B", "3A", "3B", "5A", "5B", "7A", "7B"],
        coTravelers: [
            { name: "Devika Nair", age: 26, gender: "Female", interests: ["Yoga Practitioner", "Foodie"], seat: "1A" },
            { name: "Siddharth Raj", age: 28, gender: "Male", interests: ["Trekking", "Star Gazer"], seat: "3A" },
            { name: "Meera Joshi", age: 24, gender: "Female", interests: ["Photography", "Trekking"], seat: "5A" },
            { name: "Kabir Mehta", age: 27, gender: "Male", interests: ["Guitarist", "Foodie"], seat: "7A" }
        ],
        itinerary: [
            { day: "Day 1: Overnight Journey from Bangalore", desc: "Board the premium multi-axle sleeper bus from Bangalore. Introduce yourself to the team and play fun travel trivia games organized by our lead." },
            { day: "Day 2: Arrival in Munnar & Tea Plantation Trail", desc: "Arrive in Munnar, surrounded by lush green hills. Visit a spice plantation and take an evening walk through beautiful tea estates to capture sunset photos." },
            { day: "Day 3: Trek to Kolukkumalai Sunrise", desc: "An early morning 4x4 Jeep ride to Kolukkumalai, the highest tea estate in the world. Witness a breathtaking sunrise above the clouds. Afternoon sightseeing." },
            { day: "Day 4: Alleppey Houseboat Cruise & Kayaking", desc: "Drive to Alleppey. Board our private group Houseboat. Cruise through the palm-fringed backwaters, feast on traditional Kerala meals, and go kayaking in the narrow canals." },
            { day: "Day 5: Cochin Sightseeing & Return to Bangalore", desc: "Explore Fort Cochin, Chinese Fishing Nets, and cafes. Spend the evening shopping before boarding our overnight sleeper bus back to Bangalore." }
        ]
    },
    {
        id: "rajasthan",
        title: "Rajasthan Forts & Desert Dunes Trail",
        category: "heritage",
        tag: "Desert & Heritage",
        duration: "6 Days, 5 Nights",
        dates: "05 Jul - 10 Jul 2026",
        month: "july",
        boarding: "Delhi (ISBT Kashmiri Gate)",
        boardingPoints: [
            "Delhi - ISBT Kashmiri Gate (05:30 PM)",
            "Gurgaon - IFFCO Chowk (07:00 PM)",
            "Jaipur - Sindhi Camp (11:30 PM)"
        ],
        price: 12999,
        capacity: 24,
        slotsFilled: 18,
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80",
        inclusions: [
            "AC Sleeper Bus Ticket (Delhi-Jodhpur-Jaisalmer-Delhi)",
            "Local transfers in AC group travellers",
            "1 night boutique stay in Jodhpur, 2 nights desert camp in Jaisalmer",
            "Daily Breakfast and Desert Camp Buffet Dinner",
            "Camel Safari and Jeep Dune Bashing in Sam Dunes",
            "Rajasthani folk dance and music night around bonfire"
        ],
        exclusions: [
            "Fort entrance tickets and guide fees",
            "Lunch and personal souvenirs",
            "Mineral water and refreshments"
        ],
        bookedSeats: ["1A", "1B", "2C", "2D", "3A", "3B", "4C", "4D", "5A", "5B", "6A", "6B", "7A", "7B", "8C", "8D", "10A", "10B"],
        coTravelers: [
            { name: "Rahul Verma", age: 30, gender: "Male", interests: ["History Buff", "Photography"], seat: "1A" },
            { name: "Tanvi Shah", age: 25, gender: "Female", interests: ["Foodie", "Star Gazer"], seat: "2C" },
            { name: "Arjun Khanna", age: 29, gender: "Male", interests: ["Guitarist", "Trekking"], seat: "3A" },
            { name: "Shruti Rao", age: 26, gender: "Female", interests: ["History Buff", "Yoga Practitioner"], seat: "4C" },
            { name: "Nikhil Joshi", age: 27, gender: "Male", interests: ["Photography", "Foodie"], seat: "5A" },
            { name: "Shreya Gupta", age: 24, gender: "Female", interests: ["Star Gazer", "Guitarist"], seat: "6A" },
            { name: "Vivek Roy", age: 28, gender: "Male", interests: ["Trekking", "History Buff"], seat: "7A" },
            { name: "Preeti Singh", age: 26, gender: "Female", interests: ["Yoga Practitioner", "Foodie"], seat: "8C" }
        ],
        itinerary: [
            { day: "Day 1: Departure from Delhi", desc: "Depart from Kashmiri Gate, Delhi in our luxury sleeper bus. Break the ice with the group as we play travel cards and share previous travel memories." },
            { day: "Day 2: Blue City Jodhpur Exploration", desc: "Arrive in Jodhpur. Check into our heritage hotel. Visit Mehrangarh Fort (one of the largest in India) and Jaswant Thada. Dinner together at a rooftop overlooking the fort." },
            { day: "Day 3: Travel to the Golden City Jaisalmer", desc: "Travel across the Thar desert to Jaisalmer. Tour the golden Jaisalmer Fort (a living fort where locals reside). Have an evening stroll through Gadisar Lake." },
            { day: "Day 4: Sam Dunes Desert Camping & Bonfire", desc: "Explore Patwon ki Haveli. Afternoon transfer to desert camps. Experience camel safari, thrilling Jeep dune bashing, folk dances, and traditional Rajasthani dinner under stars." },
            { day: "Day 5: Haunted Kuldhara Village & Jodhpur Forts", desc: "Visit the mysterious abandoned village of Kuldhara. Travel back to Jodhpur. Spend the evening exploring blue streets and shopping for handicrafts." },
            { day: "Day 6: Jaipur Halt & Return to Delhi", desc: "Stop at the Pink City (Jaipur) for a brief photo walk at Hawa Mahal and a group lunch. Board the overnight return bus to Delhi." }
        ]
    }
];

const INITIAL_CHATS = {
    global: [
        { name: "Admin Lead", message: "Welcome to Sanchari Global Lounge! Ask questions, connect, and let's explore India together.", time: "10:00 AM", isSystem: true },
        { name: "Aarav", message: "Hey everyone! Anyone booked on the Spiti trip starting June 12?", time: "10:15 AM", isSystem: false },
        { name: "Devika", message: "Hi! I am booked on the Kerala Backwaters trip in late June. Super excited for Munnar sunrise!", time: "11:20 AM", isSystem: false }
    ],
    spiti: [
        { name: "Trip Lead Raj", message: "Hello Spiti crew! I'll be your lead. Make sure to pack heavy woollens as Chandratal gets very cold at night.", time: "Yesterday", isSystem: true },
        { name: "Rohan", message: "Hey crew! I am bringing my guitar. We are going to have a fantastic time around the campfire at Chandratal!", time: "10:30 AM", isSystem: false },
        { name: "Ananya", message: "Awesome Rohan! I love campfire singing. Also, is anyone bringing a DSLR? I need to get some portraits done.", time: "10:45 AM", isSystem: false },
        { name: "Aarav", message: "Yes Ananya! I am bringing my Sony Mirrorless. Count me in for group portraits!", time: "11:02 AM", isSystem: false }
    ],
    kerala: [
        { name: "Trip Lead Arya", message: "Hi backwater explorers! Welcome to the group. Don't forget your sandals and raincoats—it's monsoon time!", time: "Yesterday", isSystem: true },
        { name: "Devika", message: "Who else is boarding from Silk Board, Bangalore? We can share a cab or meet early at the bus stop.", time: "09:15 AM", isSystem: false },
        { name: "Kabir", message: "Hi Devika, I'm boarding from Silk Board too. Let's coordinate near the metro/junction point.", time: "09:30 AM", isSystem: false }
    ],
    rajasthan: [
        { name: "Trip Lead Kabir", message: "Welcome desert rangers! Make sure to bring sunglasses, sunscreen, and light cotton clothes for day visits.", time: "Yesterday", isSystem: true },
        { name: "Rahul", message: "Hey guys! Excited for dune bashing. Anyone down to explore Jodhpur's blue streets together during our free time?", time: "08:15 AM", isSystem: false },
        { name: "Shreya", message: "Definitely Rahul! I have a list of local food places to try in Jodhpur, especially the famous Mawa Kachori.", time: "09:00 AM", isSystem: false }
    ]
};

// ---------------------------------------------------------
// 2. STATE MANAGEMENT
// ---------------------------------------------------------
let trips = [];
let bookings = [];
let currentTrip = null;
let currentStep = 1;
let selectedSeat = null;
let activeChatGroup = "global";
let selectedInterestTags = [];

// Initialize data from localStorage if available
function initApp() {
    // Version check — clears stale empty bookings from old sessions
    const APP_VERSION = "v2.1";
    if (localStorage.getItem("sanchari_version") !== APP_VERSION) {
        localStorage.removeItem("sanchari_bookings");
        localStorage.setItem("sanchari_version", APP_VERSION);
    }

    if (!localStorage.getItem("sanchari_trips")) {
        localStorage.setItem("sanchari_trips", JSON.stringify(INITIAL_TRIPS));
    }
    if (!localStorage.getItem("sanchari_chats")) {
        localStorage.setItem("sanchari_chats", JSON.stringify(INITIAL_CHATS));
    }

    // Seed a DEMO booking if none exist, so My Bookings page always shows content
    if (!localStorage.getItem("sanchari_bookings") || JSON.parse(localStorage.getItem("sanchari_bookings")).length === 0) {
        const demoBooking = {
            id: "SCH-738291",
            tripId: "spiti",
            tripTitle: "Spiti Valley Backpacker Expedition",
            dates: "12 Jun - 18 Jun 2026",
            boardingPoint: "Delhi - Majnu ka Tilla",
            amountPaid: 15749,
            baseFare: 14999,
            seat: "3C",
            invoiceNo: "INV-2026-582910",
            paymentDate: "10 Jun 2026, 09:30 AM",
            transactionId: "TXN582910384",
            phonepeRefId: "PPR948271056",
            passenger: {
                name: "Ganes",
                age: 24,
                gender: "Male",
                interests: ["Photography", "Trekking"]
            }
        };
        localStorage.setItem("sanchari_bookings", JSON.stringify([demoBooking]));
    }

    trips = JSON.parse(localStorage.getItem("sanchari_trips"));
    bookings = JSON.parse(localStorage.getItem("sanchari_bookings"));

    // Render components
    renderTripCards("all");
    updateBookingCountBadge();
    initViewRouter();
    initFilterHandlers();
    initDetailsModalHandlers();
    initBookingDrawerHandlers();
    initCommunityForum();
}

// ---------------------------------------------------------
// 3. ROUTER / NAVIGATION ENGINE
// ---------------------------------------------------------
function initViewRouter() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".view-section");

    function navigate() {
        const hash = window.location.hash || "#explore";
        const sectionId = "section-" + hash.replace("#", "");

        // Check if destination exists
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            sections.forEach(s => s.classList.remove("active"));
            targetSection.classList.add("active");

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === hash) {
                    link.classList.add("active");
                }
            });

            // Specific route setups
            if (hash === "#bookings") {
                renderBookings();
            } else if (hash === "#community") {
                renderCommunityGroups();
                loadChatMessages(activeChatGroup);
            }
            
            // Scroll to top of section
            window.scrollTo(0, 0);
        }
    }

    // Bind hash change events
    window.addEventListener("hashchange", navigate);
    // Initial routing
    navigate();

    // Bind logo action
    document.getElementById("nav-logo").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.hash = "#explore";
    });
}

function showSection(name) {
    window.location.hash = "#" + name;
}

// ---------------------------------------------------------
// 4. RENDERING & FILTERING TRIPS
// ---------------------------------------------------------
function renderTripCards(categoryFilter = "all", destFilter = "all", monthFilter = "all") {
    const grid = document.getElementById("trips-grid-container");
    grid.innerHTML = "";

    const filtered = trips.filter(trip => {
        const matchCategory = (categoryFilter === "all" || trip.category === categoryFilter);
        const matchDest = (destFilter === "all" || trip.id === destFilter);
        const matchMonth = (monthFilter === "all" || trip.month === monthFilter);
        return matchCategory && matchDest && matchMonth;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state-view" style="grid-column: 1 / -1; max-width: 100%;">
                <i class="fa-solid fa-map-location empty-icon"></i>
                <h3>No Matching Trips</h3>
                <p>We couldn't find any trips that match your selection. Try changing the filters.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(trip => {
        // Calculate dynamic values
        const occupancy = Math.round((trip.slotsFilled / trip.capacity) * 100);
        const slotsLeft = trip.capacity - trip.slotsFilled;

        // Render Co-Traveler miniature avatars
        let avatarsHTML = "";
        const maxAvatars = 4;
        const showingTravelers = trip.coTravelers.slice(0, maxAvatars);
        
        showingTravelers.forEach(c => {
            const initials = getInitials(c.name);
            avatarsHTML += `<span class="avatar-mini" title="${c.name} (${c.gender}, ${c.age})">${initials}</span>`;
        });
        if (trip.slotsFilled > maxAvatars) {
            avatarsHTML += `<span class="avatar-mini avatar-count" title="${trip.slotsFilled - maxAvatars} more travelers">+${trip.slotsFilled - maxAvatars}</span>`;
        }

        const card = document.createElement("div");
        card.className = "trip-card";
        card.innerHTML = `
            <div class="trip-card-image">
                <img src="${trip.image}" alt="${trip.title}">
                <div class="trip-card-overlay"></div>
                <span class="badge badge-primary card-category-badge">${trip.tag}</span>
            </div>
            <div class="trip-card-body">
                <span class="trip-duration-tag">${trip.duration}</span>
                <h3>${trip.title}</h3>
                <ul class="trip-meta-list">
                    <li><i class="fa-solid fa-calendar-day"></i> Departure: ${trip.dates}</li>
                    <li><i class="fa-solid fa-bus"></i> Boarding: ${trip.boarding}</li>
                    <li><i class="fa-solid fa-users"></i> ${slotsLeft} out of ${trip.capacity} spots left (${occupancy}% full)</li>
                </ul>
                <div class="card-footer">
                    <div class="price-tag">
                        <span>Price starts from</span>
                        <strong>₹${trip.price.toLocaleString("en-IN")}</strong>
                    </div>
                    <div class="avatar-group">
                        ${avatarsHTML}
                    </div>
                </div>
                <button class="btn btn-primary btn-sm btn-full" style="margin-top: 16px;" onclick="openDetailsModal('${trip.id}')">
                    <i class="fa-solid fa-eye"></i> View Details & Plans
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function getInitials(name) {
    const parts = name.split(" ");
    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
}

function initFilterHandlers() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    let currentCategory = "all";

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-filter");
            applyAllFilters();
        });
    });

    const searchBtn = document.getElementById("btn-search-trips");
    searchBtn.addEventListener("click", () => {
        applyAllFilters();
    });

    function applyAllFilters() {
        const dest = document.getElementById("search-destination").value;
        const month = document.getElementById("search-month").value;
        renderTripCards(currentCategory, dest, month);
    }
}

// ---------------------------------------------------------
// 5. TRIP DETAILS MODAL MANAGEMENT
// ---------------------------------------------------------
function initDetailsModalHandlers() {
    const modal = document.getElementById("details-modal");
    const closeBtn = document.getElementById("btn-close-details");

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    });

    // Close on background click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    // Tab buttons handler
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const tabId = tab.getAttribute("data-tab");
            document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
            document.getElementById(tabId).classList.add("active");
        });
    });
}

window.openDetailsModal = function(tripId) {
    const trip = trips.find(t => t.id === tripId);
    if (!trip) return;

    currentTrip = trip;

    // Load static values
    document.getElementById("modal-trip-title").innerText = trip.title;
    document.getElementById("modal-trip-dates").innerText = trip.dates;
    document.getElementById("modal-trip-duration").innerText = trip.duration;
    document.getElementById("modal-trip-boarding").innerText = trip.boarding;
    document.getElementById("modal-trip-category").innerText = trip.tag;
    document.getElementById("modal-trip-price").innerText = trip.price.toLocaleString("en-IN");
    
    const slotsLeft = trip.capacity - trip.slotsFilled;
    const occupancy = Math.round((trip.slotsFilled / trip.capacity) * 100);
    document.getElementById("modal-trip-slots").innerText = `${slotsLeft} of ${trip.capacity} spots left`;
    document.getElementById("modal-trip-capacity-percent").innerText = `${occupancy}% seat occupancy`;

    // Banner image background
    const banner = document.getElementById("modal-hero-bg");
    banner.style.backgroundImage = `url('${trip.image}')`;

    // Render Itinerary Timeline
    const timeline = document.getElementById("modal-itinerary-timeline");
    timeline.innerHTML = "";
    trip.itinerary.forEach(it => {
        const el = document.createElement("div");
        el.className = "timeline-item";
        el.innerHTML = `
            <span class="timeline-day">${it.day.split(":")[0]}</span>
            <h4>${it.day.split(":")[1]?.trim() || it.day}</h4>
            <p>${it.desc}</p>
        `;
        timeline.appendChild(el);
    });

    // Render Travelers Grid
    const travelersGrid = document.getElementById("modal-travelers-grid");
    travelersGrid.innerHTML = "";
    trip.coTravelers.forEach(c => {
        const initials = getInitials(c.name);
        const tags = c.interests.map(t => `<span class="interest-tag">${t}</span>`).join("");
        const el = document.createElement("div");
        el.className = "traveler-card";
        el.innerHTML = `
            <div class="traveler-avatar">${initials}</div>
            <div class="traveler-info">
                <h5>${c.name}</h5>
                <span>${c.gender}, Age ${c.age} (Seat ${c.seat})</span>
                <div class="traveler-interests">${tags}</div>
            </div>
        `;
        travelersGrid.appendChild(el);
    });

    // Render Inclusions / Exclusions
    const incList = document.getElementById("modal-inclusions-list");
    incList.innerHTML = "";
    trip.inclusions.forEach(inc => {
        const el = document.createElement("li");
        el.innerText = inc;
        incList.appendChild(el);
    });

    const excList = document.getElementById("modal-exclusions-list");
    excList.innerHTML = "";
    trip.exclusions.forEach(exc => {
        const el = document.createElement("li");
        el.innerText = exc;
        excList.appendChild(el);
    });

    // Default to first tab
    document.querySelectorAll(".tab-btn").forEach(t => t.classList.remove("active"));
    document.querySelector("[data-tab='tab-itinerary']").classList.add("active");
    document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
    document.getElementById("tab-itinerary").classList.add("active");

    // Open Modal
    const modal = document.getElementById("details-modal");
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent scrolling main page
};

// ---------------------------------------------------------
// 6. BOOKING DRAWER & SEAT LAYOUT SYSTEM
// ---------------------------------------------------------
function initBookingDrawerHandlers() {
    const drawer = document.getElementById("booking-drawer");
    const openBtn = document.getElementById("btn-open-booking-drawer");
    const closeBtn = document.getElementById("btn-close-booking");
    
    // Close Details Modal & Open Booking Drawer
    openBtn.addEventListener("click", () => {
        document.getElementById("details-modal").classList.remove("active");
        
        // Reset Drawer State
        currentStep = 1;
        selectedSeat = null;
        selectedInterestTags = [];
        document.querySelectorAll(".tag-choice").forEach(tc => tc.classList.remove("selected"));
        
        // Set trip subtitle in drawer
        document.getElementById("drawer-trip-subtitle").innerText = currentTrip.title;
        
        // Populate Boarding Points Dropdown
        const boardingSelect = document.getElementById("passenger-boarding");
        boardingSelect.innerHTML = '<option value="" disabled selected>Choose Boarding Point</option>';
        currentTrip.boardingPoints.forEach(bp => {
            const opt = document.createElement("option");
            opt.value = bp;
            opt.innerText = bp;
            boardingSelect.appendChild(opt);
        });

        // Clear Name/Age/Gender
        document.getElementById("passenger-name").value = "";
        document.getElementById("passenger-age").value = "";
        document.getElementById("passenger-gender").value = "";

        showBookingStep(1);
        
        drawer.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        drawer.classList.remove("active");
        document.body.style.overflow = "";
    });

    // Interest tags selection (limit to 2)
    const tagChoices = document.querySelectorAll(".tag-choice");
    tagChoices.forEach(tag => {
        tag.addEventListener("click", () => {
            const tagName = tag.getAttribute("data-tag");
            const index = selectedInterestTags.indexOf(tagName);
            
            if (index > -1) {
                selectedInterestTags.splice(index, 1);
                tag.classList.remove("selected");
            } else {
                if (selectedInterestTags.length >= 2) {
                    showToast("Selection Limit", "You can choose a maximum of 2 tags.");
                    return;
                }
                selectedInterestTags.push(tagName);
                tag.classList.add("selected");
            }
        });
    });

    // Step 1 Form Submission
    const detailsForm = document.getElementById("passenger-details-form");
    detailsForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const pName = document.getElementById("passenger-name").value;
        const pAge = document.getElementById("passenger-age").value;
        const pBoarding = document.getElementById("passenger-boarding").value;
        
        if (!pBoarding) {
            showToast("Required Field", "Please select a boarding point.");
            return;
        }

        // Fill Step 2 summaries
        document.getElementById("summary-trip-title").innerText = currentTrip.title;
        document.getElementById("summary-boarding-point").innerText = pBoarding.split(" - ")[0];
        document.getElementById("summary-passenger-name").innerText = pName;
        document.getElementById("summary-selected-seat").innerText = "None";

        const basePrice = currentTrip.price;
        const taxPrice = Math.round(basePrice * 0.05); // 5% GST
        const totalPrice = basePrice + taxPrice;

        document.getElementById("summary-base-price").innerText = basePrice.toLocaleString("en-IN");
        document.getElementById("summary-tax-price").innerText = taxPrice.toLocaleString("en-IN");
        document.getElementById("summary-total-price").innerText = totalPrice.toLocaleString("en-IN");

        // Build Seat Layout Grid
        generateBusSeats();

        // Advance to Step 2
        showBookingStep(2);
    });

    // Back to Step 1 Button
    document.getElementById("btn-back-to-step1").addEventListener("click", () => {
        showBookingStep(1);
    });

    // Step 2 Proceed to Pay -> Transitions to Step 3 PhonePe simulation
    document.getElementById("btn-proceed-to-pay").addEventListener("click", () => {
        if (!selectedSeat) return;

        // Grand total calculations
        const basePrice = currentTrip.price;
        const taxPrice = Math.round(basePrice * 0.05);
        const totalPaid = basePrice + taxPrice;

        document.getElementById("phonepe-grand-total").innerText = totalPaid.toLocaleString("en-IN");

        // Initial view shows PhonePe redirect screen and hides options
        document.getElementById("phonepe-redirect-screen").style.display = "block";
        document.getElementById("phonepe-checkout-box").style.display = "none";
        document.getElementById("phonepe-actions-back").style.display = "none";

        showBookingStep(3);

        // Simulate connecting to PhonePe Gateway
        setTimeout(() => {
            document.getElementById("phonepe-redirect-screen").style.display = "none";
            document.getElementById("phonepe-checkout-box").style.display = "block";
            document.getElementById("phonepe-actions-back").style.display = "grid";
        }, 1500);
    });

    // Back to Step 2 Button (PhonePe checkout back)
    document.getElementById("btn-back-to-step2").addEventListener("click", () => {
        showBookingStep(2);
    });

    // Interactive PhonePe payment methods choice toggle
    const phonepeOptions = document.querySelectorAll(".phonepe-option-card");
    phonepeOptions.forEach(opt => {
        opt.addEventListener("click", () => {
            phonepeOptions.forEach(o => o.classList.remove("active"));
            opt.classList.add("active");
        });
    });

    // PhonePe Payment Submit button handler (simulates PhonePe checkout pin verification)
    document.getElementById("btn-phonepe-submit").addEventListener("click", () => {
        const btn = document.getElementById("btn-phonepe-submit");
        btn.disabled = true;
        btn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing UPI payment...`;

        setTimeout(() => {
            completeBooking();
        }, 2000);
    });
}

function showBookingStep(stepNum) {
    currentStep = stepNum;
    
    // Toggle contents
    document.querySelectorAll(".booking-step-content").forEach(c => c.classList.remove("active"));
    document.getElementById(`step-content-${stepNum}`).classList.add("active");

    // Toggle indicator classes
    document.querySelectorAll(".step-indicator").forEach(ind => ind.classList.remove("active"));
    for (let i = 1; i <= stepNum; i++) {
        document.getElementById(`indicator-step${i}`).classList.add("active");
    }
}

// Generates the bus 2x2 grid seating arrangement
function generateBusSeats() {
    const container = document.getElementById("bus-seats-container");
    container.innerHTML = "";
    
    // We will generate 6 rows of seats. Row layout: Left side (A, B) - Aisle - Right side (C, D)
    const rows = 6;
    const columns = ["A", "B", "C", "D"];

    for (let r = 1; r <= rows; r++) {
        columns.forEach((col, idx) => {
            const seatNum = `${r}${col}`;
            const isOccupied = currentTrip.bookedSeats.includes(seatNum);
            
            const seatEl = document.createElement("div");
            
            if (isOccupied) {
                seatEl.className = "bus-seat occupied";
                seatEl.innerText = seatNum;
                seatEl.title = "Booked by a stranger";
            } else {
                seatEl.className = "bus-seat available";
                if (selectedSeat === seatNum) {
                    seatEl.className = "bus-seat available selected";
                }
                seatEl.innerText = seatNum;
                seatEl.title = "Available seat";

                // Click event to toggle select
                seatEl.addEventListener("click", () => {
                    document.querySelectorAll(".bus-seat.available").forEach(s => s.classList.remove("selected"));
                    
                    if (selectedSeat === seatNum) {
                        selectedSeat = null;
                        document.getElementById("summary-selected-seat").innerText = "None";
                        document.getElementById("btn-proceed-to-pay").disabled = true;
                    } else {
                        selectedSeat = seatNum;
                        seatEl.classList.add("selected");
                        document.getElementById("summary-selected-seat").innerText = seatNum;
                        document.getElementById("btn-proceed-to-pay").disabled = false;
                    }
                });
            }

            // Put spacing margin for the aisle gap after the second seat (B column)
            if (col === "B") {
                seatEl.classList.add("aisle-gap");
            }

            container.appendChild(seatEl);
        });
    }
}

// ---------------------------------------------------------
// 7. COMPLETE BOOKING (LOCALSTORAGE PERSISTENCE & PHONEPE INVOICE)
// ---------------------------------------------------------
function completeBooking() {
    const pName = document.getElementById("passenger-name").value;
    const pAge = parseInt(document.getElementById("passenger-age").value);
    const pGender = document.getElementById("passenger-gender").value;
    const pBoarding = document.getElementById("passenger-boarding").value.split(" - ")[0];

    // Create New Booking object with PhonePe Invoice identifiers
    const bookingId = "SCH-" + Math.floor(100000 + Math.random() * 900000);
    const basePrice = currentTrip.price;
    const taxPrice = Math.round(basePrice * 0.05); // 5% GST total
    const totalAmount = basePrice + taxPrice;

    // Generated tax date
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) + " " + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newBooking = {
        id: bookingId,
        tripId: currentTrip.id,
        tripTitle: currentTrip.title,
        dates: currentTrip.dates,
        boardingPoint: pBoarding,
        amountPaid: totalAmount,
        baseFare: basePrice,
        seat: selectedSeat,
        invoiceNo: "INV-2026-" + Math.floor(100000 + Math.random() * 900000),
        paymentDate: dateStr,
        transactionId: "TXN" + Math.floor(100000000 + Math.random() * 900000000),
        phonepeRefId: "PPR" + Math.floor(100000000 + Math.random() * 900000000),
        passenger: {
            name: pName,
            age: pAge,
            gender: pGender,
            interests: selectedInterestTags.length > 0 ? selectedInterestTags : ["Adventure Lover"]
        }
    };

    // 1. Update Booking list in state and LocalStorage
    bookings.push(newBooking);
    localStorage.setItem("sanchari_bookings", JSON.stringify(bookings));

    // 2. Update specific trip data in LocalStorage: increment slots, add passenger to co-travelers and bookedSeats
    const tripIndex = trips.findIndex(t => t.id === currentTrip.id);
    if (tripIndex > -1) {
        trips[tripIndex].slotsFilled += 1;
        trips[tripIndex].bookedSeats.push(selectedSeat);
        trips[tripIndex].coTravelers.push({
            name: pName,
            age: pAge,
            gender: pGender,
            interests: newBooking.passenger.interests,
            seat: selectedSeat
        });

        localStorage.setItem("sanchari_trips", JSON.stringify(trips));
    }

    // 3. Add greeting message to the trip's community forum automatically!
    const chats = JSON.parse(localStorage.getItem("sanchari_chats"));
    const chatKey = currentTrip.id;
    if (chats[chatKey]) {
        chats[chatKey].push({
            name: "Sanchari Bot",
            message: `🎉 Let's welcome ${pName} to the bus crew! Booked seat ${selectedSeat} and enjoys ${newBooking.passenger.interests.join(" & ")}.`,
            time: "Just Now",
            isSystem: true
        });
        localStorage.setItem("sanchari_chats", JSON.stringify(chats));
    }

    // Refresh application states & lists
    updateBookingCountBadge();
    renderTripCards("all");
    
    // Close Drawer
    document.getElementById("booking-drawer").classList.remove("active");
    document.body.style.overflow = "";

    // Reset payment button state
    const btn = document.getElementById("btn-phonepe-submit");
    btn.disabled = false;
    btn.innerHTML = `<i class="fa-solid fa-lock"></i> Pay securely via PhonePe`;

    // Show Toast
    showToast("Booking Successful!", `Payment processed via PhonePe. Invoice is ready.`);

    // Redirect to bookings view
    setTimeout(() => {
        showSection("bookings");
    }, 800);
}

function updateBookingCountBadge() {
    const badge = document.getElementById("booking-count");
    badge.innerText = bookings.length;
}

// ---------------------------------------------------------
function renderBookings() {
    const emptyView = document.getElementById("no-bookings-view");
    const container = document.getElementById("bookings-list-container");

    bookings = JSON.parse(localStorage.getItem("sanchari_bookings") || "[]");

    if (bookings.length === 0) {
        emptyView.style.display = "block";
        container.style.display = "none";
        return;
    }

    emptyView.style.display = "none";
    container.style.display = "flex";
    container.innerHTML = "";

    bookings.forEach((bk, idx) => {
        // Find matching trip data from trips array for full details
        const tripData = trips.find(t => t.id === bk.tripId) || {};

        // Route cities
        let fromCity = bk.boardingPoint || "Delhi";
        let toCity = "Kaza, Spiti Valley";
        if (bk.tripId === "kerala")    toCity = "Munnar & Alleppey, Kerala";
        if (bk.tripId === "rajasthan") toCity = "Jodhpur & Jaisalmer, Rajasthan";

        // QR Code
        const qrDataUrl = `https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=SANCHARI-${bk.id}`;

        // Tax breakdowns
        const cgst = Math.round(bk.baseFare * 0.025);
        const sgst = Math.round(bk.baseFare * 0.025);

        // Build itinerary rows (first 3 days max for the card)
        const itineraryRows = (tripData.itinerary || []).slice(0, 4).map(it => `
            <div class="bk-itinerary-row">
                <div class="bk-it-dot"></div>
                <div class="bk-it-content">
                    <strong>${it.day.split(":")[0]}</strong>
                    <span>${it.day.split(":").slice(1).join(":").trim() || it.day}</span>
                </div>
            </div>
        `).join("");

        // Build inclusions chips (first 4)
        const inclusionChips = (tripData.inclusions || []).slice(0, 4).map(inc =>
            `<span class="bk-inclusion-chip"><i class="fa-solid fa-circle-check"></i> ${inc}</span>`
        ).join("");

        // Build co-traveler mini avatars
        const crewAvatars = (tripData.coTravelers || []).slice(0, 6).map(c =>
            `<div class="bk-crew-avatar" title="${c.name} — Seat ${c.seat}">${getInitials(c.name)}</div>`
        ).join("");
        const extraCrew = (tripData.coTravelers || []).length > 6
            ? `<div class="bk-crew-avatar bk-crew-more">+${(tripData.coTravelers.length - 6)}</div>` : "";

        // Passenger interest tags
        const interestTags = (bk.passenger.interests || []).map(tag =>
            `<span class="interest-tag">${tag}</span>`
        ).join("");

        const block = document.createElement("div");
        block.className = "booking-detail-card";
        block.innerHTML = `

            <!-- ══ HERO BANNER ══ -->
            <div class="bk-hero-banner" style="background-image: url('${tripData.image || ""}');">
                <div class="bk-hero-overlay"></div>
                <div class="bk-hero-content">
                    <div class="bk-hero-badges">
                        <span class="bk-status-badge"><i class="fa-solid fa-circle-check"></i> Booking Confirmed</span>
                        <span class="bk-id-badge">${bk.id}</span>
                    </div>
                    <h2 class="bk-hero-title">${bk.tripTitle}</h2>
                    <div class="bk-hero-meta">
                        <span><i class="fa-solid fa-calendar-days"></i> ${bk.dates}</span>
                        <span><i class="fa-solid fa-clock"></i> ${tripData.duration || ""}</span>
                        <span><i class="fa-solid fa-tag"></i> ${tripData.tag || ""}</span>
                    </div>
                </div>
            </div>

            <!-- ══ QUICK STATS ROW ══ -->
            <div class="bk-stats-row">
                <div class="bk-stat-item">
                    <i class="fa-solid fa-user"></i>
                    <div>
                        <span>Traveler</span>
                        <strong>${bk.passenger.name}</strong>
                    </div>
                </div>
                <div class="bk-stat-item">
                    <i class="fa-solid fa-chair"></i>
                    <div>
                        <span>Seat No.</span>
                        <strong class="bk-stat-seat">${bk.seat}</strong>
                    </div>
                </div>
                <div class="bk-stat-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <div>
                        <span>Boarding Point</span>
                        <strong>${bk.boardingPoint}</strong>
                    </div>
                </div>
                <div class="bk-stat-item">
                    <i class="fa-solid fa-indian-rupee-sign"></i>
                    <div>
                        <span>Amount Paid</span>
                        <strong>₹${bk.amountPaid.toLocaleString("en-IN")}</strong>
                    </div>
                </div>
            </div>

            <!-- ══ TWO COLUMN BODY ══ -->
            <div class="bk-body-columns">

                <!-- LEFT: Trip Details -->
                <div class="bk-col-left">

                    <!-- Route Card -->
                    <div class="bk-section-card">
                        <h4 class="bk-section-title"><i class="fa-solid fa-route"></i> Your Journey Route</h4>
                        <div class="bk-route-vis">
                            <div class="bk-route-city">
                                <div class="bk-route-dot bk-dot-start"></div>
                                <strong>${fromCity}</strong>
                                <span>Boarding Point</span>
                            </div>
                            <div class="bk-route-line">
                                <div class="bk-route-bus-icon"><i class="fa-solid fa-bus"></i></div>
                            </div>
                            <div class="bk-route-city" style="text-align:right;">
                                <div class="bk-route-dot bk-dot-end"></div>
                                <strong>${toCity}</strong>
                                <span>Destination</span>
                            </div>
                        </div>
                    </div>

                    <!-- Passenger Profile Card -->
                    <div class="bk-section-card">
                        <h4 class="bk-section-title"><i class="fa-solid fa-id-card"></i> Passenger Profile</h4>
                        <div class="bk-passenger-profile">
                            <div class="bk-passenger-avatar">${getInitials(bk.passenger.name)}</div>
                            <div class="bk-passenger-info">
                                <strong class="bk-passenger-name">${bk.passenger.name}</strong>
                                <div class="bk-passenger-meta">
                                    <span><i class="fa-solid fa-cake-candles"></i> Age ${bk.passenger.age}</span>
                                    <span><i class="fa-solid fa-venus-mars"></i> ${bk.passenger.gender}</span>
                                </div>
                                <div class="bk-passenger-interests">${interestTags}</div>
                            </div>
                        </div>
                    </div>

                    <!-- Trip Itinerary -->
                    <div class="bk-section-card">
                        <h4 class="bk-section-title"><i class="fa-solid fa-map-location-dot"></i> Trip Itinerary (${(tripData.itinerary || []).length}-Day Plan)</h4>
                        <div class="bk-itinerary-list">
                            ${itineraryRows}
                            ${(tripData.itinerary || []).length > 4 ? `<p class="bk-more-days">+ ${(tripData.itinerary || []).length - 4} more days in your trip plan</p>` : ""}
                        </div>
                    </div>

                </div>

                <!-- RIGHT: Boarding Pass + Bill + Inclusions + Crew -->
                <div class="bk-col-right">

                    <!-- Boarding Pass Stub -->
                    <div class="bk-boarding-pass">
                        <div class="bk-pass-header">
                            <span class="bk-pass-logo">🚌 SANCHARI</span>
                            <span class="bk-pass-label">SOCIAL BOARDING PASS</span>
                        </div>
                        <div class="bk-pass-route">
                            <div class="bk-pass-city">
                                <strong>${fromCity.split(",")[0]}</strong>
                                <small>From</small>
                            </div>
                            <div class="bk-pass-arrow"><i class="fa-solid fa-plane-departure" style="transform: rotate(0deg);"></i></div>
                            <div class="bk-pass-city" style="text-align:right;">
                                <strong>${toCity.split(",")[0]}</strong>
                                <small>To</small>
                            </div>
                        </div>
                        <div class="bk-pass-details">
                            <div class="bk-pass-detail-item">
                                <small>PASSENGER</small>
                                <span>${bk.passenger.name}</span>
                            </div>
                            <div class="bk-pass-detail-item">
                                <small>SEAT</small>
                                <span class="bk-pass-seat">${bk.seat}</span>
                            </div>
                            <div class="bk-pass-detail-item">
                                <small>DATE</small>
                                <span>${bk.dates.split(" - ")[0]}</span>
                            </div>
                            <div class="bk-pass-detail-item">
                                <small>CLASS</small>
                                <span>AC Sleeper</span>
                            </div>
                        </div>
                        <div class="bk-pass-footer">
                            <div class="bk-pass-qr">
                                <img src="${qrDataUrl}" alt="QR Code" width="90">
                                <small>Scan at boarding</small>
                            </div>
                            <div class="bk-pass-barcode">
                                <div class="bk-barcode-lines"></div>
                                <small>${bk.id}</small>
                            </div>
                        </div>
                    </div>

                    <!-- What's Included -->
                    <div class="bk-section-card">
                        <h4 class="bk-section-title"><i class="fa-solid fa-circle-check"></i> What's Included in Your Pack</h4>
                        <div class="bk-inclusions-wrap">
                            ${inclusionChips}
                            ${(tripData.inclusions || []).length > 4
                                ? `<span class="bk-inclusion-chip bk-more-chip">+${(tripData.inclusions.length - 4)} more perks</span>` : ""}
                        </div>
                    </div>

                    <!-- Bus Crew -->
                    <div class="bk-section-card">
                        <h4 class="bk-section-title"><i class="fa-solid fa-users"></i> Your Bus Crew (${(tripData.coTravelers || []).length} Travelers)</h4>
                        <div class="bk-crew-avatars-wrap">
                            ${crewAvatars}${extraCrew}
                        </div>
                        <p class="bk-crew-tagline">You're traveling with amazing strangers who share your love for exploration!</p>
                    </div>

                </div>
            </div>

            <!-- ══ FULL INVOICE ══ -->
            <div class="bk-invoice-panel">
                <div class="bk-invoice-header">
                    <div>
                        <h4>🧾 Tax Invoice &amp; Payment Receipt</h4>
                        <p>Invoice No: <strong>${bk.invoiceNo}</strong> &nbsp;|&nbsp; Issued: <strong>${bk.paymentDate}</strong></p>
                    </div>
                    <div class="bk-invoice-paid-stamp">
                        <i class="fa-solid fa-circle-check"></i>
                        <div>
                            <strong>PAID</strong>
                            <small>via PhonePe</small>
                        </div>
                    </div>
                </div>

                <div class="bk-invoice-refs">
                    <div class="bk-ref-item"><span>Booking Ref</span><strong>${bk.id}</strong></div>
                    <div class="bk-ref-item"><span>Transaction ID</span><strong>${bk.transactionId}</strong></div>
                    <div class="bk-ref-item"><span>PhonePe Ref</span><strong>${bk.phonepeRefId}</strong></div>
                    <div class="bk-ref-item"><span>Traveler Age</span><strong>${bk.passenger.age} yrs / ${bk.passenger.gender}</strong></div>
                </div>

                <table class="bk-invoice-table">
                    <thead>
                        <tr><th>Description</th><th>HSN/SAC</th><th>Amount</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${bk.tripTitle} — Tour Package + AC Sleeper Bus</td>
                            <td>998551</td>
                            <td>₹${bk.baseFare.toLocaleString("en-IN")}</td>
                        </tr>
                        <tr class="bk-invoice-tax-row">
                            <td>CGST @ 2.5%</td>
                            <td>—</td>
                            <td>₹${cgst.toLocaleString("en-IN")}</td>
                        </tr>
                        <tr class="bk-invoice-tax-row">
                            <td>SGST @ 2.5%</td>
                            <td>—</td>
                            <td>₹${sgst.toLocaleString("en-IN")}</td>
                        </tr>
                        <tr class="bk-invoice-total-row">
                            <td colspan="2"><strong>Total Amount Paid (All Inclusive)</strong></td>
                            <td><strong>₹${bk.amountPaid.toLocaleString("en-IN")}</strong></td>
                        </tr>
                    </tbody>
                </table>

                <div class="bk-invoice-footer">
                    <span><i class="fa-solid fa-shield-halved" style="color:#5f259f;"></i> Payment secured &amp; verified by PhonePe Payment Gateway. GSTIN: 27AAACS1234B1Z5</span>
                    <div class="bk-invoice-actions">
                        <button class="btn btn-secondary btn-sm" onclick="window.print()"><i class="fa-solid fa-print"></i> Print</button>
                        <button class="btn btn-primary btn-sm" onclick="showToast('Download', 'Downloading your PDF invoice...')"><i class="fa-solid fa-file-pdf"></i> Download PDF</button>
                    </div>
                </div>
            </div>

        `;
        container.appendChild(block);
    });
}

// ---------------------------------------------------------
// 9. COMMUNITY CHAT LOUNGE SYSTEM
// ---------------------------------------------------------
function initCommunityForum() {
    const form = document.getElementById("community-post-form");
    
    // Bind submission events
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const usernameInput = document.getElementById("community-username");
        const messageInput = document.getElementById("community-message");
        
        const uName = usernameInput.value.trim();
        const msg = messageInput.value.trim();
        
        if (!uName || !msg) return;

        // Retrieve current chats
        const chats = JSON.parse(localStorage.getItem("sanchari_chats"));
        
        // Push new message
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        chats[activeChatGroup].push({
            name: uName,
            message: msg,
            time: timeStr,
            isSystem: false,
            isUser: true // Mark to style as sender
        });

        localStorage.setItem("sanchari_chats", JSON.stringify(chats));

        // Clear message box, keep username
        messageInput.value = "";
        
        // Refresh chat messages window
        loadChatMessages(activeChatGroup);
    });
}

function renderCommunityGroups() {
    const listPanel = document.getElementById("community-group-list");
    listPanel.innerHTML = "";

    // Global lounge
    const globalEl = document.createElement("div");
    globalEl.className = `group-item ${activeChatGroup === 'global' ? 'active' : ''}`;
    globalEl.innerHTML = `
        <strong>🌍 Global Sanchari Lounge</strong>
        <span>All travelers chat room</span>
    `;
    globalEl.addEventListener("click", () => selectChatGroup("global", "Global Sanchari Lounge"));
    listPanel.appendChild(globalEl);

    // Dynamic loops through trips
    trips.forEach(trip => {
        const el = document.createElement("div");
        el.className = `group-item ${activeChatGroup === trip.id ? 'active' : ''}`;
        el.innerHTML = `
            <strong>🚍 ${trip.title.split(" ")[0]} Trail Crew</strong>
            <span>${trip.coTravelers.length} passengers booked</span>
        `;
        el.addEventListener("click", () => selectChatGroup(trip.id, `${trip.title.split(" ")[0]} Trail Crew`));
        listPanel.appendChild(el);
    });
}

function selectChatGroup(groupId, groupName) {
    activeChatGroup = groupId;
    
    // Re-render menu
    renderCommunityGroups();
    
    // Update headers
    document.getElementById("active-group-title").innerText = groupName;
    document.getElementById("active-group-tag").innerText = groupId === "global" ? "Global" : "Trip Crew";
    
    // Count active people
    let peopleCount = 24;
    if (groupId !== "global") {
        const tr = trips.find(t => t.id === groupId);
        peopleCount = tr ? tr.coTravelers.length : 0;
    }
    document.getElementById("active-group-members").innerText = `${peopleCount} crew members matched`;

    // Load messages
    loadChatMessages(groupId);
}

function loadChatMessages(groupId) {
    const box = document.getElementById("chat-messages-box");
    box.innerHTML = "";

    const chats = JSON.parse(localStorage.getItem("sanchari_chats"));
    const messages = chats[groupId] || [];

    if (messages.length === 0) {
        box.innerHTML = `<div class="empty-state-view" style="padding: 20px; box-shadow: none; border: none; background: transparent;"><p>No messages here yet. Break the ice and write first!</p></div>`;
        return;
    }

    messages.forEach(m => {
        const bubble = document.createElement("div");
        
        if (m.isSystem) {
            // System bot alert style
            bubble.className = "chat-bubble receiver";
            bubble.style.maxWidth = "90%";
            bubble.innerHTML = `
                <div class="chat-meta">
                    <span class="chat-meta-name"><i class="fa-solid fa-robot"></i> ${m.name}</span>
                    <span class="chat-meta-time">${m.time}</span>
                </div>
                <div class="chat-msg-text" style="background: rgba(13, 148, 136, 0.06); border-color: rgba(13, 148, 136, 0.15); color: var(--color-secondary); font-style: italic;">
                    ${m.message}
                </div>
            `;
        } else if (m.isUser) {
            // Self sent
            bubble.className = "chat-bubble sender";
            bubble.innerHTML = `
                <div class="chat-meta">
                    <span class="chat-meta-name">You</span>
                    <span class="chat-meta-time">${m.time}</span>
                </div>
                <div class="chat-msg-text">
                    ${m.message}
                </div>
            `;
        } else {
            // Other passengers
            bubble.className = "chat-bubble receiver";
            bubble.innerHTML = `
                <div class="chat-meta">
                    <span class="chat-meta-name">${m.name}</span>
                    <span class="chat-meta-time">${m.time}</span>
                </div>
                <div class="chat-msg-text">
                    ${m.message}
                </div>
            `;
        }
        box.appendChild(bubble);
    });

    // Auto scroll chat box to the bottom
    box.scrollTop = box.scrollHeight;
}

// ---------------------------------------------------------
// 10. SUCCESS TOAST UTILITY
// ---------------------------------------------------------
function showToast(title, body) {
    const toast = document.getElementById("toast-msg");
    document.getElementById("toast-title").innerText = title;
    document.getElementById("toast-body").innerText = body;

    toast.classList.add("active");
    
    // Hide toast after 4 seconds
    setTimeout(() => {
        toast.classList.remove("active");
    }, 4000);
}

// Start application
window.addEventListener("DOMContentLoaded", initApp);
