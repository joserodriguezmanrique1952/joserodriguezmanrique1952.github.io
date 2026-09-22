/* ============================================
   SWEETY AKTER — PORTFOLIO SCRIPT
   ============================================ */

// ===== TRANSLATIONS =====
const translations = {
  en: {
    nav_about: "About", nav_education: "Education", nav_experience: "Experience",
    nav_research: "Research", nav_publications: "Publications", nav_skills: "Skills",
    nav_awards: "Awards", nav_contact: "Contact",
    hero_subtitle: "Computational Biology · Machine Learning · Bioinformatics",
    hero_tagline: "Biotechnology student at BRAC University · Peer Reviewer, Oxford University Press · GCI World 2026 Scholar",
    hero_cv: "Download CV", about_title: "About Me",
    about_p1: "I am a biotechnology student at BRAC University, Bangladesh, with a strong research focus on bioinformatics, machine learning, and multi-omics integration. My work spans computational biology, antimicrobial resistance, cancer genomics, and precision medicine.",
    about_p2: "My current thesis involves developing a Graph Neural Network framework for patient similarity network integration to predict disease progression using multi-omics data.",
    about_p3: "I serve as a Research Assistant at the Innovative Research Center and am an Associate Member of UNYSAB Bangladesh. I also serve as a peer reviewer for Briefings in Bioinformatics (Oxford University Press).",
    edu_title: "Education",
    edu_coursework: "Relevant Coursework: Bioinformatics, Molecular Biology, Genetics, Biostatistics, Computational Biology, Data Structures, Machine Learning Fundamentals.",
    edu_gci: "Selected from applicants across 100+ countries.",
    exp_title: "Experience",
    exp_reviewer: "Serving as a peer reviewer for Briefings in Bioinformatics, a Q1 journal (Impact Factor: 9.5) published by Oxford University Press.",
    exp_ra: "Contributing to ongoing research projects through literature searches, data organization, and collaborative analysis.",
    exp_deepbio: "Promoting knowledge about bioinformatics and AI in life sciences among university students.",
    res_title: "Research",
    res_thesis: "Developing a Graph Neural Network framework to integrate patient similarity networks for predicting disease progression using multi-omics data.",
    res_bayes: "Developed a hierarchical Bayesian Beta-Mixture model to infer clonal evolution patterns from high-dimensional DNA methylation data in haematological cancers.",
    res_amr: "Built and independently validated a machine learning framework for antimicrobial resistance risk prediction using multi-omics data from 18,916 bacterial isolates.",
    res_egfr: "Implemented an integrative multi-omics machine learning framework combining genomics, transcriptomics, and epigenomics data to stratify patients with EGFR-mutant lung adenocarcinoma.",
    res_crispr: "Integrative computational design and off-target profiling of a CRISPR-Cas9 guide RNA for precision targeting of the TP53 R175H mutation.",
    res_amp: "Systematic review of architectures, serum conditions, and activity retention for deep learning-driven de novo design of antimicrobial peptides.",
    pub_title: "Publications",
    pub_intro: "Selected peer-reviewed work in machine learning, computational biology, and bioinformatics.",
    pub_more: "See all publications on ORCID",
    skill_title: "Skills", award_title: "Awards & Achievements",
    cert_title: "Certifications & Courses", extra_title: "Extracurricular Activities",
    contact_title: "Get in Touch",
    contact_intro: "I am open to research collaborations, graduate opportunities, and quantitative finance roles."
  },
  de: {
    nav_about: "Über mich", nav_education: "Ausbildung", nav_experience: "Erfahrung",
    nav_research: "Forschung", nav_publications: "Publikationen", nav_skills: "Fähigkeiten",
    nav_awards: "Auszeichnungen", nav_contact: "Kontakt",
    hero_subtitle: "Computational Biology · Maschinelles Lernen · Bioinformatik",
    hero_tagline: "Biotechnologie-Studentin an der BRAC University · Peer Reviewer · GCI World 2026",
    hero_cv: "Lebenslauf herunterladen", about_title: "Über mich",
    about_p1: "Ich bin Biotechnologie-Studentin an der BRAC University, Bangladesch.",
    edu_title: "Ausbildung", exp_title: "Erfahrung",
    res_title: "Forschung", pub_title: "Publikationen", skill_title: "Fähigkeiten",
    award_title: "Auszeichnungen", cert_title: "Zertifikate & Kurse",
    extra_title: "Außerschulische Aktivitäten", contact_title: "Kontakt aufnehmen"
  },
  fr: {
    nav_about: "À propos", nav_education: "Formation", nav_experience: "Expérience",
    nav_research: "Recherche", nav_publications: "Publications", nav_skills: "Compétences",
    nav_awards: "Distinctions", nav_contact: "Contact",
    hero_subtitle: "Biologie Computationnelle · Apprentissage Automatique · Bioinformatique",
    hero_cv: "Télécharger le CV", about_title: "À propos de moi",
    edu_title: "Formation", exp_title: "Expérience",
    res_title: "Recherche", pub_title: "Publications", skill_title: "Compétences",
    award_title: "Distinctions", cert_title: "Certifications & Cours",
    extra_title: "Activités parascolaires", contact_title: "Me contacter"
  },
  no: {
    nav_about: "Om meg", nav_education: "Utdanning", nav_experience: "Erfaring",
    nav_research: "Forskning", nav_publications: "Publikasjoner", nav_skills: "Ferdigheter",
    nav_awards: "Priser", nav_contact: "Kontakt",
    hero_subtitle: "Beregningsbiologi · Maskinlæring · Bioinformatikk",
    hero_cv: "Last ned CV", about_title: "Om meg",
    edu_title: "Utdanning", exp_title: "Erfaring",
    res_title: "Forskning", pub_title: "Publikasjoner", skill_title: "Ferdigheter",
    award_title: "Priser", cert_title: "Sertifiseringer & Kurs",
    extra_title: "Fritidsaktiviteter", contact_title: "Ta kontakt"
  }
};

document.addEventListener('DOMContentLoaded', function () {

  // ===== LANGUAGE SWITCH =====
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    langSelect.addEventListener('change', function (e) {
      const lang = e.target.value;
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
    if (icon) icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = html.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  }

  // ===== BACKGROUND SOUND =====
  const soundToggle = document.getElementById('soundToggle');
  const bgAudio = document.getElementById('bgAudio');

  if (soundToggle && bgAudio) {
    let soundOn = false;
    bgAudio.volume = 0.7;

    const volumeSlider = document.getElementById('volumeSlider');
    if (volumeSlider) {
      volumeSlider.addEventListener('input', function () {
        bgAudio.volume = parseFloat(this.value);
      });
    }

    soundToggle.addEventListener('click', function () {
      const icon = soundToggle.querySelector('i');
      if (!soundOn) {
        bgAudio.play()
          .then(function () {
            soundOn = true;
            if (icon) icon.className = 'fas fa-volume-up';
          })
          .catch(function (err) {
            alert('Could not play audio. Please make sure background.mp3 exists.');
          });
      } else {
        bgAudio.pause();
        soundOn = false;
        if (icon) icon.className = 'fas fa-volume-mute';
      }
    });
  }
});
