/* ============================================
   SWEETY AKTER — PORTFOLIO SCRIPT
   Language Switch | Theme Toggle | Background Sound
   ============================================ */

// ===== TRANSLATIONS =====
const translations = {
  en: {
    nav_about: "About",
    nav_education: "Education",
    nav_experience: "Experience",
    nav_research: "Research",
    nav_publications: "Publications",
    nav_skills: "Skills",
    nav_awards: "Awards",
    nav_contact: "Contact",
    hero_subtitle: "Computational Biology · Machine Learning · Bioinformatics",
    hero_tagline: "Biotechnology student at BRAC University · Peer Reviewer, Oxford University Press · GCI World 2026 Scholar",
    hero_cv: "Download CV",
    about_title: "About Me",
    about_p1: "I am a biotechnology student at BRAC University, Bangladesh, with a strong research focus on bioinformatics, machine learning, and multi-omics integration. My work spans computational biology, antimicrobial resistance, cancer genomics, and precision medicine.",
    about_p2: "My current thesis involves developing a Graph Neural Network framework for patient similarity network integration to predict disease progression using multi-omics data. I am passionate about applying interpretable AI to solve real-world biomedical problems and am committed to advancing research in genomic medicine and therapeutic target discovery.",
    about_p3: "I serve as a Research Assistant at the Innovative Research Center and am an Associate Member of UNYSAB Bangladesh. I also serve as a peer reviewer for Briefings in Bioinformatics (Oxford University Press) and was selected for the GCI World 2026 AI & Data Science Programme at The University of Tokyo.",
    edu_title: "Education",
    edu_coursework: "Relevant Coursework: Bioinformatics, Molecular Biology, Genetics, Biostatistics, Computational Biology, Data Structures, Machine Learning Fundamentals.",
    edu_gci: "Selected from applicants across 100+ countries.",
    exp_title: "Experience",
    exp_reviewer: "Serving as a peer reviewer for Briefings in Bioinformatics, a Q1 journal (Impact Factor: 9.5) published by Oxford University Press, specializing in computational biology, bioinformatics, and biomedical research.",
    exp_ra: "Contributing to ongoing research projects through literature searches, data organization, and collaborative analysis. Building practical research experience in computational biology and bioinformatics workflows.",
    exp_deepbio: "Promoting knowledge about bioinformatics and AI in life sciences among university students.",
    res_title: "Research",
    res_thesis: "Developing a Graph Neural Network framework to integrate patient similarity networks for predicting disease progression using multi-omics data. The project aims to improve interpretability and predictive accuracy in genomic medicine.",
    res_bayes: "Developed a hierarchical Bayesian Beta-Mixture model to infer clonal evolution patterns from high-dimensional DNA methylation data in haematological cancers. Implemented MCMC sampling for posterior inference and validated against simulated datasets.",
    res_amr: "Built and independently validated a machine learning framework for antimicrobial resistance risk prediction using multi-omics data from 18,916 bacterial isolates. Identified key genomic features driving resistance through SHAP-based interpretability analysis.",
    res_egfr: "Implemented an integrative multi-omics machine learning framework combining genomics, transcriptomics, and epigenomics data to stratify patients with EGFR-mutant lung adenocarcinoma.",
    res_crispr: "Integrative computational design and off-target profiling of a CRISPR-Cas9 guide RNA for precision targeting of the TP53 R175H mutation.",
    res_amp: "Systematic review of architectures, serum conditions, and activity retention for deep learning-driven de novo design of antimicrobial peptides active in human serum.",
    pub_title: "Publications",
    pub_intro: "Selected peer-reviewed work in machine learning, computational biology, and bioinformatics.",
    pub_more: "See all publications on ORCID",
    skill_title: "Skills",
    award_title: "Awards & Achievements",
    cert_title: "Certifications & Courses",
    extra_title: "Extracurricular Activities",
    contact_title: "Get in Touch",
    contact_intro: "I am open to research collaborations, graduate opportunities, and quantitative finance roles."
  },
  de: {
    nav_about: "Über mich",
    nav_education: "Ausbildung",
    nav_experience: "Erfahrung",
    nav_research: "Forschung",
    nav_publications: "Publikationen",
    nav_skills: "Fähigkeiten",
    nav_awards: "Auszeichnungen",
    nav_contact: "Kontakt",
    hero_subtitle: "Computational Biology · Maschinelles Lernen · Bioinformatik",
    hero_tagline: "Biotechnologie-Studentin an der BRAC University · Peer Reviewer, Oxford University Press · GCI World 2026 Scholar",
    hero_cv: "Lebenslauf herunterladen",
    about_title: "Über mich",
    about_p1: "Ich bin Biotechnologie-Studentin an der BRAC University, Bangladesch, mit Forschungsschwerpunkt auf Bioinformatik, maschinellem Lernen und Multi-Omics-Integration.",
    about_p2: "Meine aktuelle Thesis befasst sich mit der Entwicklung eines Graph Neural Network Frameworks zur Integration von Patient-Ähnlichkeitsnetzwerken.",
    about_p3: "Ich arbeite als Research Assistant am Innovative Research Center und bin assoziiertes Mitglied von UNYSAB Bangladesh. Außerdem bin ich Peer Reviewer für Briefings in Bioinformatics (Oxford University Press).",
    edu_title: "Ausbildung",
    edu_coursework: "Relevante Kurse: Bioinformatik, Molekularbiologie, Genetik, Biostatistik, Computational Biology.",
    edu_gci: "Ausgewählt aus Bewerbern aus über 100 Ländern.",
    exp_title: "Erfahrung",
    res_title: "Forschung",
    pub_title: "Publikationen",
    pub_intro: "Ausgewählte peer-reviewte Arbeiten.",
    pub_more: "Alle Publikationen auf ORCID",
    skill_title: "Fähigkeiten",
    award_title: "Auszeichnungen",
    cert_title: "Zertifikate & Kurse",
    extra_title: "Außerschulische Aktivitäten",
    contact_title: "Kontakt aufnehmen",
    contact_intro: "Ich bin offen für Forschungskooperationen und Graduiertenmöglichkeiten."
  },
  fr: {
    nav_about: "À propos",
    nav_education: "Formation",
    nav_experience: "Expérience",
    nav_research: "Recherche",
    nav_publications: "Publications",
    nav_skills: "Compétences",
    nav_awards: "Distinctions",
    nav_contact: "Contact",
    hero_subtitle: "Biologie Computationnelle · Apprentissage Automatique · Bioinformatique",
    hero_tagline: "Étudiante en biotechnologie à BRAC University · Réviseure, Oxford University Press · GCI World 2026 Scholar",
    hero_cv: "Télécharger le CV",
    about_title: "À propos de moi",
    about_p1: "Je suis étudiante en biotechnologie à BRAC University, au Bangladesh, avec un fort accent sur la bioinformatique, l'apprentissage automatique et l'intégration multi-omique.",
    about_p2: "Ma thèse actuelle porte sur le développement d'un cadre de réseau de neurones graphiques pour l'intégration des réseaux de similarité des patients.",
    about_p3: "Je travaille comme assistante de recherche à l'Innovative Research Center et suis membre associée de UNYSAB Bangladesh.",
    edu_title: "Formation",
    edu_coursework: "Cours pertinents : Bioinformatique, Biologie Moléculaire, Génétique, Biostatistique.",
    edu_gci: "Sélectionnée parmi des candidats de plus de 100 pays.",
    exp_title: "Expérience",
    res_title: "Recherche",
    pub_title: "Publications",
    pub_intro: "Travaux sélectionnés évalués par les pairs.",
    pub_more: "Toutes les publications sur ORCID",
    skill_title: "Compétences",
    award_title: "Distinctions",
    cert_title: "Certifications & Cours",
    extra_title: "Activités parascolaires",
    contact_title: "Me contacter",
    contact_intro: "Je suis ouverte aux collaborations de recherche et aux opportunités d'études supérieures."
  },
  no: {
    nav_about: "Om meg",
    nav_education: "Utdanning",
    nav_experience: "Erfaring",
    nav_research: "Forskning",
    nav_publications: "Publikasjoner",
    nav_skills: "Ferdigheter",
    nav_awards: "Priser",
    nav_contact: "Kontakt",
    hero_subtitle: "Beregningsbiologi · Maskinlæring · Bioinformatikk",
    hero_tagline: "Bioteknologistudent ved BRAC University · Fagfellevurderer, Oxford University Press · GCI World 2026 Scholar",
    hero_cv: "Last ned CV",
    about_title: "Om meg",
    about_p1: "Jeg er en bioteknologistudent ved BRAC University, Bangladesh, med sterkt forskningsfokus på bioinformatikk, maskinlæring og multi-omics-integrasjon.",
    about_p2: "Min nåværende avhandling innebærer å utvikle et Graph Neural Network-rammeverk for integrasjon av pasientlikhetsnettverk.",
    about_p3: "Jeg jobber som forskningsassistent ved Innovative Research Center og er assosiert medlem av UNYSAB Bangladesh.",
    edu_title: "Utdanning",
    edu_coursework: "Relevante emner: Bioinformatikk, Molekylærbiologi, Genetikk, Biostatistikk.",
    edu_gci: "Valgt ut blant søkere fra over 100 land.",
    exp_title: "Erfaring",
    res_title: "Forskning",
    pub_title: "Publikasjoner",
    pub_intro: "Utvalgte fagfellevurderte arbeider.",
    pub_more: "Alle publikasjoner på ORCID",
    skill_title: "Ferdigheter",
    award_title: "Priser",
    cert_title: "Sertifiseringer & Kurs",
    extra_title: "Fritidsaktiviteter",
    contact_title: "Ta kontakt",
    contact_intro: "Jeg er åpen for forskningssamarbeid og muligheter for videreutdanning."
  }
};

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function () {

  console.log('Portfolio script loaded');

  // ===== LANGUAGE SWITCH =====
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.addEventListener('change', function (e) {
      const lang = e.target.value;
      console.log('Language switched to:', lang);
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
      document.documentElement.lang = lang;
    });
  }

  // ===== THEME TOGGLE =====
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', savedTheme);

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }
  }
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = html.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
      console.log('Theme switched to:', next);
    });
  }

  // ===== BACKGROUND SOUND =====
  const soundToggle = document.getElementById('soundToggle');
  const bgAudio = document.getElementById('bgAudio');

  console.log('soundToggle found:', !!soundToggle);
  console.log('bgAudio found:', !!bgAudio);

  if (!soundToggle) {
    console.error('ERROR: soundToggle button not found in HTML');
  }
  if (!bgAudio) {
    console.error('ERROR: bgAudio element not found in HTML');
  }

  if (soundToggle && bgAudio) {
    let soundOn = false;
    bgAudio.volume = 0.7; // 70% volume

    // Volume slider
    const volumeSlider = document.getElementById('volumeSlider');
    if (volumeSlider) {
      volumeSlider.addEventListener('input', function () {
        bgAudio.volume = parseFloat(this.value);
        console.log('Volume set to:', bgAudio.volume);
      });
    }

    soundToggle.addEventListener('click', function () {
      console.log('Sound button clicked. soundOn =', soundOn);
      const icon = soundToggle.querySelector('i');

      if (!soundOn) {
        bgAudio.play()
          .then(function () {
            soundOn = true;
            if (icon) icon.className = 'fas fa-volume-up';
            console.log('Music is playing');
          })
          .catch(function (err) {
            console.error('Audio play failed:', err);
            alert('Could not play audio.\nError: ' + err.message);
          });
      } else {
        bgAudio.pause();
        soundOn = false;
        if (icon) icon.className = 'fas fa-volume-mute';
        console.log('Music paused');
      }
    });
  }
});
