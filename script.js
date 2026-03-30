// Simple SPA navigation for Dental Radiology Website

document.addEventListener('DOMContentLoaded', function() {
    function setActiveNav(id) {
        document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
        if (id) document.getElementById(id).classList.add('active');
    }

    function loadPage(page) {
        const content = document.getElementById('content');
        switch(page) {
            case 'title':
                setActiveNav('nav-title');
                content.innerHTML = `
                <section class="hero">
                    <div class="hero-left">
                        <div class="hero-title">Dental Radiology</div>
                        <div class="hero-subtitle">Imaging Techniques for Oral Diagnosis</div>
                        <div class="hero-desc">Dental radiology is a specialized area of dentistry that uses imaging techniques—such as X-rays—to examine the teeth, jaws, and surrounding oral structures that cannot be seen during a regular visual examination. It plays a crucial role in diagnosing and monitoring conditions like cavities, infections, bone loss, impacted teeth, and other abnormalities. By providing detailed images of both hard and soft tissues, dental radiology helps dentists create accurate treatment plans and ensures early detection of oral health issues, while maintaining patient safety through controlled and minimal radiation exposure.</div>
                        <button class="hero-btn" id="explore-info-btn">Explore Information</button>
                    </div>
                    <div class="hero-right">
                        <img src="https://www.divadentistry.com/wp-content/uploads/2024/08/Paronamic-x-ray-AdobeStock_432851378-1024x646.jpeg" alt="Dental X-ray" class="hero-img"/>
                        <ul class="hero-list">
                            <li><i class="fa-solid fa-tooth icon"></i> Cavities</li>
                            <li><i class="fa-solid fa-bone icon"></i> Bone loss</li>
                            <li><i class="fa-solid fa-teeth-open icon"></i> Impacted teeth</li>
                            <li><i class="fa-solid fa-virus icon"></i> Infections</li>
                        </ul>
                    </div>
                </section>
                `;
                setTimeout(() => {
                    const btn = document.getElementById('explore-info-btn');
                    if (btn) btn.onclick = () => loadPage('info');
                }, 0);
                break;
            case 'info':
                setActiveNav('nav-info');
                content.innerHTML = `
                <div class="title center mb-2">Dental Radiology Information</div>
                <div class="card-grid">
                    <div class="info-card">
                        <span class="icon"><i class="fa-solid fa-tooth"></i></span>
                        <div class="info-card-title">Types of Dental Radiographs</div>
                        <div class="info-card-desc">
                            <b>Intraoral:</b> Inside the mouth<br/>
                            <b>Extraoral:</b> Outside the mouth
                        </div>
                    </div>
                    <div class="info-card">
                        <span class="icon"><i class="fa-solid fa-x-ray"></i></span>
                        <div class="info-card-title">Common Types</div>
                        <div class="info-card-desc">
                            Bitewing<br/>
                            Periapical<br/>
                            Panoramic
                        </div>
                    </div>
                    <div class="info-card">
                        <span class="icon"><i class="fa-solid fa-microscope"></i></span>
                        <div class="info-card-title">Uses</div>
                        <div class="info-card-desc">
                            Detect decay<br/>
                            Evaluate bone structure<br/>
                            Check infections
                        </div>
                    </div>
                    <div class="info-card">
                        <span class="icon"><i class="fa-solid fa-shield-halved"></i></span>
                        <div class="info-card-title">Safety</div>
                        <div class="info-card-desc">
                            Low radiation exposure<br/>
                            Lead apron protection
                        </div>
                    </div>
                    <div class="info-card">
                        <span class="icon"><i class="fa-solid fa-lightbulb"></i></span>
                        <div class="info-card-title">Digital Advancements</div>
                        <div class="info-card-desc">
                            Digital radiography offers faster results,<br/>
                            improved image quality, and easier storage.<br/>
                            It also reduces radiation exposure.
                        </div>
                    </div>
                    <div class="info-card">
                        <span class="icon"><i class="fa-solid fa-people-group"></i></span>
                        <div class="info-card-title">Role in Dental Care</div>
                        <div class="info-card-desc">
                            Radiographs help dentists plan treatments,<br/>
                            monitor progress, and educate patients<br/>
                            about their oral health.
                        </div>
                    </div>
                    `;
                    break;
            case 'image':
                setActiveNav('nav-image');
                content.innerHTML = `
                <div class="title center mb-2">Dental Radiology Visuals</div>
                <div class="gallery-grid">
                    <div class="gallery-card">
                        <img src="https://tse1.mm.bing.net/th/id/OIP.QtF0le9V_PZ3fy6geos4JAHaFV?pid=Api&P=0&h=180" alt="Normal vs Decayed Tooth X-ray" class="gallery-img"/>
                        <div class="gallery-caption">Normal vs Decayed Tooth X-ray</div>
                    </div>
                    <div class="gallery-card">
                        <img src="https://th.bing.com/th/id/OIP.6-8fZrutRqIsonmqbdoQWAHaEJ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Panoramic Radiograph" class="gallery-img"/>
                        <div class="gallery-caption">Panoramic Radiograph</div>
                    </div>
                    <div class="gallery-card">
                        <img src="https://tse1.mm.bing.net/th/id/OIP.TxqQtuTItDkQGrZ14wQPPQHaFd?pid=Api&P=0&h=180" alt="Periapical View" class="gallery-img"/>
                        <div class="gallery-caption">Periapical View</div>
                    </div>
                </div>
                `;
                break;
            case 'infographic':
                setActiveNav('nav-infographic');
                content.innerHTML = `
                <div class="title center mb-2">Dental Radiology Infographic</div>
                <div class="center mt-2">
                    <img id="myinfographic.jpg" src="myinfographic.jpg" alt="Infographic" style="max-width:100%;border-radius:16px;box-shadow:0 4px 24px rgba(30,90,180,0.13);margin-bottom:1.5rem;"/>
                    <div style="color:#888;font-size:0.98rem;">INFOGRAPHIC</div>
                </div>
                `;
                // You can set the src of #infographic-img to your image URL
                break;
            case 'authors':
                setActiveNav('nav-authors');
                content.innerHTML = `
                <div class="authors-title">About the Authors</div>
                <div class="authors-grid">
                    <div class="author-card">
                        <span class="icon"><i class="fa-solid fa-user-doctor"></i></span>
                        <div class="author-name">Kriztel Kaye Maude</div>
                        <div class="author-role">Radiologic Technologist / BSRT2A</div>
                        <div class="author-desc">Focused on coding and dental studies</div>
                    </div>
                    <div class="author-card">
                        <span class="icon"><i class="fa-solid fa-user-graduate"></i></span>
                        <div class="author-name">John Dwayne Manalo</div>
                        <div class="author-role">Radiologic Technologist / BSRT2A</div>
                        <div class="author-desc">Assisted in content and research</div>
                    </div>
                    <div class="author-card">
                        <span class="icon"><i class="fa-solid fa-user-nurse"></i></span>
                        <div class="author-name">Kaye Shan Mapi-ot</div>
                        <div class="author-role">Radiologic Technologist / BSRT2A</div>
                        <div class="author-desc">Created visual layouts and infographics</div>
                    </div>
                    <div class="author-card">
                        <span class="icon"><i class="fa-solid fa-user"></i></span>
                        <div class="author-name">Kyla Sophia Montajes</div>
                        <div class="author-role">Radiologic Technologist / BSRT2A</div>
                        <div class="author-desc">Compiled and organized project documentation</div>
                    </div>
                    <div class="author-card">
                        <span class="icon"><i class="fa-solid fa-user"></i></span>
                        <div class="author-name">Katherine Khet Luna</div>
                        <div class="author-role">Radiologic Technologist / BSRT2A</div>
                        <div class="author-desc">Reviewed and edited written content</div>
                    </div>
                </div>
                `;
                break;
        }
    }
    // Initial load
    loadPage('title');
    // Navigation events
    document.getElementById('nav-title').onclick = function(e) { e.preventDefault(); loadPage('title'); };
    document.getElementById('nav-info').onclick = function(e) { e.preventDefault(); loadPage('info'); };
    document.getElementById('nav-image').onclick = function(e) { e.preventDefault(); loadPage('image'); };
    document.getElementById('nav-authors').onclick = function(e) { e.preventDefault(); loadPage('authors'); };
    document.getElementById('nav-infographic').onclick = function(e) { e.preventDefault(); loadPage('infographic'); };
});
