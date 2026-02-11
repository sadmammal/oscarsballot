"use strict";

const categories = [
    { id: 1, name: "Best Picture", nominees: [{ n: "Bugonia" }, { n: "F1" }, { n: "Frankenstein" }, { n: "Hamnet" }, { n: "Marty Supreme" }, { n: "One Battle After Another" }, { n: "The Secret Agent" }, { n: "Sentimental Value" }, { n: "Sinners" }, { n: "Train Dreams" }] },
    { id: 2, name: "Best Director", nominees: [{ n: "Paul Thomas Anderson", i: "One Battle After Another" }, { n: "Ryan Coogler", i: "Sinners" }, { n: "Josh Safdie", i: "Marty Supreme" }, { n: "Joachim Trier", i: "Sentimental Value" }, { n: "Chloé Zhao", i: "Hamnet" }] },
    { id: 3, name: "Best Actor", nominees: [{ n: "Timothée Chalamet", i: "Marty Supreme" }, { n: "Leonardo DiCaprio", i: "One Battle After Another" }, { n: "Ethan Hawke", i: "Blue Moon" }, { n: "Michael B. Jordan", i: "Sinners" }, { n: "Wagner Moura", i: "The Secret Agent" }] },
    { id: 4, name: "Best Actress", nominees: [{ n: "Jessie Buckley", i: "Hamnet" }, { n: "Rose Byrne", i: "If I Had Legs I’d Kick You" }, { n: "Kate Hudson", i: "Song Sung Blue" }, { n: "Renate Reinsve", i: "Sentimental Value" }, { n: "Emma Stone", i: "Bugonia" }] },
    { id: 5, name: "Best Supporting Actor", nominees: [{ n: "Benicio Del Toro", i: "One Battle After Another" }, { n: "Jacob Elordi", i: "Frankenstein" }, { n: "Delroy Lindo", i: "Sinners" }, { n: "Sean Penn", i: "One Battle After Another" }, { n: "Stellan Skarsgård", i: "Sentimental Value" }] },
    { id: 6, name: "Best Supporting Actress", nominees: [{ n: "Elle Fanning", i: "Sentimental Value" }, { n: "Inga Ibsdotter Lilleaas", i: "Sentimental Value" }, { n: "Amy Madigan", i: "Weapons" }, { n: "Wunmi Mosaku", i: "Sinners" }, { n: "Teyana Taylor", i: "One Battle After Another" }] },
    { id: 7, name: "Best Original Screenplay", nominees: [{ n: "Blue Moon" }, { n: "It Was Just an Accident" }, { n: "Marty Supreme" }, { n: "Sentimental Value" }, { n: "Sinners" }] },
    { id: 8, name: "Best Adapted Screenplay", nominees: [{ n: "Bugonia" }, { n: "Frankenstein" }, { n: "Hamnet" }, { n: "One Battle After Another" }, { n: "Train Dreams" }] },
    { id: 9, name: "Best Animated Feature", nominees: [{ n: "Arco" }, { n: "Elio" }, { n: "KPop Demon Hunters" }, { n: "Little Amélie or the Character of Rain" }, { n: "Zootopia 2" }] },
    { id: 10, name: "Best International Feature", nominees: [{ n: "The Secret Agent", i: "Brazil" }, { n: "It Was Just an Accident", i: "France" }, { n: "Sentimental Value", i: "Norway" }, { n: "Sirāt", i: "Spain" }, { n: "The Voice of Hind Rajab", i: "Tunisia" }] },
    { id: 11, name: "Best Documentary Feature", nominees: [{ n: "The Alabama Solution" }, { n: "Come See Me in the Good Light" }, { n: "Cutting Through Rocks" }, { n: "Mr. Nobody Against Putin" }, { n: "The Perfect Neighbor" }] },
    { id: 12, name: "Best Casting", nominees: [{ n: "Hamnet" }, { n: "Marty Supreme" }, { n: "The Secret Agent" }, { n: "Sinners" }, { n: "Wicked: For Good" }] },
    { id: 13, name: "Best Cinematography", nominees: [{ n: "Frankenstein" }, { n: "Marty Supreme" }, { n: "One Battle After Another" }, { n: "Sinners" }, { n: "Train Dreams" }] },
    { id: 14, name: "Best Film Editing", nominees: [{ n: "F1" }, { n: "Marty Supreme" }, { n: "One Battle After Another" }, { n: "Sentimental Value" }, { n: "Sinners" }] },
    { id: 15, name: "Best Production Design", nominees: [{ n: "Frankenstein" }, { n: "Hamnet" }, { n: "Marty Supreme" }, { n: "One Battle After Another" }, { n: "Sinners" }] },
    { id: 16, name: "Best Costume Design", nominees: [{ n: "Avatar: Fire and Ash" }, { n: "Frankenstein" }, { n: "Hamnet" }, { n: "Sinners" }, { n: "Wicked: For Good" }] },
    { id: 17, name: "Best Makeup and Hairstyling", nominees: [{ n: "Frankenstein" }, { n: "Kokuho" }, { n: "Sinners" }, { n: "The Smashing Machine" }, { n: "The Ugly Stepsister" }] },
    { id: 18, name: "Best Original Score", nominees: [{ n: "Bugonia" }, { n: "Frankenstein" }, { n: "Hamnet" }, { n: "One Battle After Another" }, { n: "Sinners" }] },
    { id: 19, name: "Best Original Song", nominees: [{ n: "Dear Me", i: "Diane Warren: Relentless" }, { n: "Golden", i: "KPop Demon Hunters" }, { n: "I Lied to You", i: "Sinners" }, { n: "Sweet Dreams of Joy", i: "Viva Verdi" }, { n: "Train Dreams", i: "Train Dreams" }] },
    { id: 20, name: "Best Sound", nominees: [{ n: "F1" }, { n: "Frankenstein" }, { n: "One Battle After Another" }, { n: "Sinners" }, { n: "Sirāt" }] },
    { id: 21, name: "Best Visual Effects", nominees: [{ n: "Avatar: Fire and Ash" }, { n: "F1" }, { n: "Jurassic World Rebirth" }, { n: "The Lost Bus" }, { n: "Sinners" }] },
    { id: 22, name: "Best Animated Short Film", nominees: [{ n: "Butterfly" }, { n: "Forever Green" }, { n: "The Girl Who Cried Pearls" }, { n: "Retirement Plan" }, { n: "The Three Sisters" }] },
    { id: 23, name: "Best Live Action Short Film", nominees: [{ n: "Butcher’s Stain" }, { n: "A Friend of Dorothy" }, { n: "Jane Austen’s Period Drama" }, { n: "The Singers" }, { n: "Two People Exchanging Saliva" }] },
    { id: 24, name: "Best Documentary Short Film", nominees: [{ n: "All the Empty Rooms" }, { n: "Armed Only with a Camera" }, { n: "Children No More" }, { n: "The Devil Is Busy" }, { n: "Perfectly a Strangeness" }] }
];

let selections = {};
let movieData = {}; // Store movie metadata

// Load movie data from JSON file
async function loadMovieData() {
    try {
        const response = await fetch('data/movies.json');
        const data = await response.json();
        movieData = data.movies;
        console.log('Movie data loaded:', Object.keys(movieData).length, 'movies');
    } catch (error) {
        console.warn('Could not load movie data:', error);
    }
}

function getMovieInfo(filmTitle) {
    // Extract just the film name (remove person names for acting categories)
    const cleanTitle = filmTitle.split(' - ')[0].trim();
    return movieData[cleanTitle] || null;
}

async function init() {
    // Load movie data first
    await loadMovieData();

    const container = document.getElementById('mainBallot');
    if (!container) return;

    categories.forEach(cat => {
        const section = document.createElement('section');
        section.id = `cat-${cat.id}`;

        const isCompact = window.COMPACT_MODE === true;
        section.className = isCompact ? "category-block fade-in scroll-mt-24 mb-6" : "category-block fade-in scroll-mt-32";

        const gridClass = isCompact ? "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";
        const cardClass = isCompact ? "nominee-card p-3 rounded-lg cursor-pointer group flex flex-col justify-between h-full min-h-[75px] relative" : "nominee-card p-6 rounded-2xl cursor-pointer group relative";
        const headerClass = isCompact ? "mb-4 flex items-baseline gap-3 border-b border-white/10 pb-2" : "mb-10 text-center md:text-left";

        const titleHtml = isCompact
            ? `<span class="text-gold text-sm opacity-60">0${cat.id}</span><h2 class="text-lg md:text-xl font-bold tracking-tight uppercase" style="font-family: 'Bluee Next', sans-serif;">${cat.name}</h2>`
            : `<span class="text-gold serif italic text-xl">Category ${cat.id.toString().padStart(2, '0')}</span><h2 class="text-4xl md:text-5xl font-bold tracking-tight mt-2 uppercase">${cat.name}</h2>`;

        section.innerHTML = `
            <div class="${headerClass}">
                ${titleHtml}
            </div>
            <div class="${gridClass}" id="grid-cat-${cat.id}"></div>
        `;

        container.appendChild(section);

        // Build nominee cards using DOM methods to avoid unsafe innerHTML
        const grid = section.querySelector(`#grid-cat-${cat.id}`);
        cat.nominees.forEach(nom => {
            const filmTitle = nom.i || nom.n;
            const movieInfo = getMovieInfo(filmTitle);

            const card = document.createElement('div');
            card.className = cardClass;
            card.setAttribute('role', 'button');
            card.tabIndex = 0;

            // Tooltip (if available)
            if (movieInfo && (movieInfo.director || movieInfo.cast?.length || movieInfo.synopsis)) {
                const tooltipContent = [];
                if (movieInfo.director) tooltipContent.push(`Dir: ${movieInfo.director}`);
                if (movieInfo.cast && movieInfo.cast.length > 0) tooltipContent.push(`Cast: ${movieInfo.cast.slice(0, 2).join(', ')}`);
                if (movieInfo.synopsis) tooltipContent.push(movieInfo.synopsis.substring(0, 100) + '...');

                const tooltip = document.createElement('div');
                tooltip.className = 'movie-tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-black/95 text-white text-xs p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-64 z-50 hidden md:block';
                tooltipContent.forEach(line => {
                    const p = document.createElement('p');
                    p.className = 'text-[10px] leading-relaxed';
                    p.textContent = line;
                    tooltip.appendChild(p);
                });
                card.appendChild(tooltip);
            }

            const h3 = document.createElement('h3');
            h3.className = isCompact ? "text-sm font-semibold leading-tight group-hover:text-gold transition relative z-10" : "text-lg font-bold group-hover:text-gold transition relative z-10";
            h3.textContent = nom.n;
            card.appendChild(h3);

            if (nom.i) {
                const pinfo = document.createElement('p');
                pinfo.className = isCompact ? "text-[10px] text-white/40 mt-1 uppercase tracking-wider truncate relative z-10" : "text-xs text-white/40 mt-1 uppercase tracking-widest relative z-10";
                pinfo.textContent = nom.i;
                card.appendChild(pinfo);
            }

            card.addEventListener('click', () => select(card, cat.id, nom.n));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    select(card, cat.id, nom.n);
                }
            });

            grid.appendChild(card);
        });
    });

    setupStickyNav();
    window.addEventListener('scroll', updateProgress);

    // Explicitly attach listeners
    const btnData = document.getElementById('btnGenerate');
    if (btnData) {
        btnData.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Button clicked via listener");
            showFinalSummary();
        });
    }

    const btnExport = document.getElementById('btnExport');
    if (btnExport) {
        btnExport.addEventListener('click', (e) => {
            e.preventDefault();
            exportImage();
        });
    }

    const btnPrint = document.getElementById('btnPrint');
    if (btnPrint) {
        btnPrint.addEventListener('click', (e) => {
            e.preventDefault();
            window.print();
        });
    }

    const btnEdit = document.getElementById('btnEdit');
    if (btnEdit) {
        btnEdit.addEventListener('click', (e) => {
            e.preventDefault();
            backToEdit();
        });
    }
}



function setupStickyNav() {
    const nav = document.getElementById('stickyNav');
    if (!nav) return;

    // Clear existing
    nav.innerHTML = '<div class="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black/80 to-transparent pointer-events-none"></div>';

    categories.forEach(cat => {
        const dot = document.createElement('a');
        dot.className = "w-3 h-3 rounded-full bg-white/30 hover:bg-gold transition-all duration-300 cursor-pointer pointer-events-auto relative group";
        dot.onclick = () => {
            const el = document.getElementById(`cat-${cat.id}`);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        };

        // Tooltip
        const tip = document.createElement('span');
        tip.className = 'absolute right-6 top-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap';
        tip.textContent = cat.name;
        dot.appendChild(tip);

        nav.appendChild(dot);
    });

    // Show nav immediately (always visible)
    nav.classList.remove('opacity-0');
    nav.classList.add('opacity-100');
}

function updateActiveNav() {
    const navDots = document.querySelectorAll('#stickyNav a');

    navDots.forEach((dot, idx) => {
        dot.classList.remove('bg-gold', 'scale-150');

        // Check if this category has a selection
        if (categories[idx] && selections[categories[idx].id]) {
            dot.classList.add('bg-gold', 'scale-150');
        }
    });
}

function select(el, catId, name) {
    const parent = el.parentElement;

    // If this card is already selected, deselect it
    const wasSelected = el.classList.contains('selected');
    if (wasSelected) {
        el.classList.remove('selected');
        delete selections[catId];
        updateProgress();
        updateActiveNav();
        return;
    }

    parent.querySelectorAll('.nominee-card').forEach(c => c.classList.remove('selected'));
    el.classList.add('selected');

    // Feedback Animation
    el.animate([
        { transform: 'translateY(-2px) scale(1)' },
        { transform: 'translateY(-2px) scale(1.05)' },
        { transform: 'translateY(-2px) scale(1)' }
    ], {
        duration: 300,
        easing: 'ease-out'
    });

    selections[catId] = name;
    updateProgress();
    updateActiveNav(); // Update navigation dots to show gold when selected
}

function updateProgress() {
    const selectedCount = Object.keys(selections).length;
    const percentage = (selectedCount / categories.length) * 100;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) progressBar.style.width = percentage + '%';
}

function scrollToContent() {
    const el = document.getElementById('mainBallot');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function showFinalSummary() {
    console.log("Generating summary...", selections);
    try {
        const nameInput = document.getElementById('voterName');
        const name = nameInput ? (nameInput.value || 'MEMBER OF THE ACADEMY') : 'MEMBER OF THE ACADEMY';

        const voterDisplay = document.getElementById('voterDisplayName');
        if (voterDisplay) voterDisplay.innerText = name;

        const summaryList = document.getElementById('summaryList');
        if (summaryList) {
            summaryList.innerHTML = '';
            categories.forEach(cat => {
                const item = document.createElement('div');
                item.className = 'ballot-category';

                const labelSpan = document.createElement('span');
                labelSpan.className = 'category-name';
                labelSpan.textContent = cat.name;

                const selectedBox = document.createElement('div');
                selectedBox.className = 'selected-box';
                if (selections[cat.id]) {
                    selectedBox.textContent = selections[cat.id];
                } else {
                    const empty = document.createElement('span');
                    empty.textContent = 'Sin seleccionar';
                    empty.style.color = '#9b9b9b';
                    selectedBox.appendChild(empty);
                }

                item.appendChild(labelSpan);
                item.appendChild(selectedBox);
                summaryList.appendChild(item);
            });
        } else {
            console.error('Summary list element not found!');
        }

        const mainUI = document.getElementById('mainUI');
        const printView = document.getElementById('printView');

        if (mainUI) {
            mainUI.style.display = 'none';
        }
        if (printView) {
            printView.style.display = 'block';
            printView.style.opacity = '1'; // Force visibility
            printView.style.visibility = 'visible'; // Force visibility
        }

        window.scrollTo(0, 0);
    } catch (e) {
        console.error("Error in showFinalSummary", e);
        alert("Error generating results: " + e.message);
    }
}

function backToEdit() {
    const mainUI = document.getElementById('mainUI');
    const printView = document.getElementById('printView');

    if (mainUI) mainUI.style.display = 'block';
    if (printView) printView.style.display = 'none';
}

// ... existing functions ...

function exportImage() {
    // 1. Get the source element
    const original = document.getElementById('printView');
    if (!original) {
        alert("Error: Results view not found.");
        return;
    }

    // 2. Clone the element to avoid modifying the live view
    const clone = original.cloneNode(true);

    // 3. Style the clone to match print layout exactly
    const width = 1200;

    Object.assign(clone.style, {
        position: 'absolute',
        top: '10px',
        left: '10px',
        display: 'block',
        visibility: 'visible',
        width: `${width}px`,
        height: 'auto',
        background: 'white',
        color: 'black',
        zIndex: '10000',
        overflow: 'visible',
        padding: '40px'
    });

    // Keep the border and styling to match PDF
    const inner = clone.querySelector('.max-w-4xl');
    if (inner) {
        // Keep all the original styling - don't remove border
        inner.style.maxWidth = '100%';
        inner.style.width = '100%';
        inner.style.margin = '0 auto';
    }

    // 4. Append to body so it renders
    document.body.appendChild(clone);

    // Remove any elements that should not appear in the exported image
    clone.querySelectorAll('.no-print').forEach(n => n.remove());
    // Remove any buttons left behind
    clone.querySelectorAll('button').forEach(b => b.remove());

    // No inline print-style injection here; the main stylesheet defines ballot styles.

    // Wait for fonts and styles to be ready before rendering
    const renderCanvas = () => {
        html2canvas(clone, {
            scale: 2,
            backgroundColor: "#ffffff",
            width: width,
            windowWidth: width,
            logging: false,
            useCORS: true
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'my-oscars-2026-ballot.png';
            link.href = canvas.toDataURL('image/png');
            link.click();

            // Cleanup
            if (document.body.contains(clone)) document.body.removeChild(clone);
        }).catch(err => {
            console.error("Image export failed:", err);
            alert("Image generation failed. Please use 'Imprimir PDF' instead.");
            if (document.body.contains(clone)) document.body.removeChild(clone);
        });
    };

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => setTimeout(renderCanvas, 200)).catch(() => setTimeout(renderCanvas, 300));
    } else {
        setTimeout(renderCanvas, 300);
    }
}

window.select = select;
window.scrollToContent = scrollToContent;
window.showFinalSummary = showFinalSummary;
window.exportImage = exportImage;
window.backToEdit = backToEdit;

document.addEventListener('DOMContentLoaded', init);
