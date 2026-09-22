/* ============================================
   SWEETY AKTER — PORTFOLIO SCRIPT
   8 Languages | Theme Toggle | Background Sound
   ============================================ */

// ===== TRANSLATIONS =====
const translations = {
  en: {
    nav_about: "About", nav_education: "Education", nav_experience: "Experience",
    nav_research: "Research", nav_publications: "Publications", nav_skills: "Skills",
    nav_awards: "Awards", nav_contact: "Contact",
    hero_subtitle: "Computational Biology · Machine Learning · Bioinformatics",
    hero_tagline: "Biotechnology student at BRAC University · Peer Reviewer, Oxford University Press · GCI World 2026 Scholar",
    hero_cv: "Download CV",
    about_title: "About Me",
    about_p1: "I am a biotechnology student at BRAC University, Bangladesh, with a strong research focus on bioinformatics, machine learning, and multi-omics integration. My work spans computational biology, antimicrobial resistance, cancer genomics, and precision medicine.",
    about_p2: "My current thesis involves developing a Graph Neural Network framework for patient similarity network integration to predict disease progression using multi-omics data. I am passionate about applying interpretable AI to solve real-world biomedical problems.",
    about_p3: "I serve as a Research Assistant at the Innovative Research Center and am an Associate Member of UNYSAB Bangladesh. I also serve as a peer reviewer for Briefings in Bioinformatics (Oxford University Press) and was selected for the GCI World 2026 AI & Data Science Programme at The University of Tokyo.",
    edu_title: "Education",
    edu_coursework: "Relevant Coursework: Bioinformatics, Molecular Biology, Genetics, Biostatistics, Computational Biology, Data Structures, Machine Learning Fundamentals.",
    edu_gci: "Selected from applicants across 100+ countries.",
    exp_title: "Experience",
    exp_reviewer: "Serving as a peer reviewer for Briefings in Bioinformatics, a Q1 journal (Impact Factor: 9.5) published by Oxford University Press, specializing in computational biology, bioinformatics, and biomedical research.",
    exp_r1: "Critically evaluated manuscripts on AI and deep learning applications in antimicrobial peptide discovery",
    exp_r2: "Assessed methodological rigor, experimental design, statistical analysis, and scientific novelty",
    exp_r3: "Provided detailed, constructive feedback to authors to improve manuscript quality",
    exp_r4: "Recommended editorial decisions based on technical merit and significance",
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
    skill_title: "Skills",
    award_title: "Awards & Achievements",
    cert_title: "Certifications & Courses",
    extra_title: "Extracurricular Activities",
    contact_title: "Get in Touch",
    contact_intro: "I am open to research collaborations, graduate opportunities, and quantitative finance roles.",
    contact_email: "Email",
    contact_uni_email: "University Email",
    contact_phone: "Phone"
  },
  de: {
    nav_about: "Über mich", nav_education: "Ausbildung", nav_experience: "Erfahrung",
    nav_research: "Forschung", nav_publications: "Publikationen", nav_skills: "Fähigkeiten",
    nav_awards: "Auszeichnungen", nav_contact: "Kontakt",
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
    exp_reviewer: "Peer Reviewer für Briefings in Bioinformatics, eine Q1-Zeitschrift (Impact Factor: 9,5) von Oxford University Press.",
    exp_r1: "Kritische Bewertung von Manuskripten zu KI und Deep Learning in der antimikrobiellen Peptidforschung",
    exp_r2: "Bewertung methodischer Strenge, experimentellem Design und statistischer Analyse",
    exp_r3: "Detailliertes, konstruktives Feedback zur Verbesserung der Manuskriptqualität",
    exp_r4: "Empfehlung redaktioneller Entscheidungen basierend auf technischer Qualität",
    exp_ra: "Beitrag zu laufenden Forschungsprojekten durch Literaturrecherchen und Datenorganisation.",
    exp_deepbio: "Förderung des Wissens über Bioinformatik und KI in den Biowissenschaften.",
    res_title: "Forschung",
    res_thesis: "Entwicklung eines Graph Neural Network Frameworks zur Integration von Patient-Ähnlichkeitsnetzwerken.",
    res_bayes: "Entwicklung eines hierarchischen Bayesian Beta-Mixture Modells zur Ableitung klonaler Evolutionsmuster aus DNA-Methylierungsdaten.",
    res_amr: "Entwicklung und Validierung eines Machine-Learning-Frameworks zur Vorhersage antimikrobieller Resistenz.",
    res_egfr: "Integratives Multi-Omics-Framework zur Stratifizierung von Patienten mit EGFR-mutiertem Lungenadenokarzinom.",
    res_crispr: "Integratives computationales Design und Off-Target-Profiling einer CRISPR-Cas9-Guide-RNA.",
    res_amp: "Systematische Übersicht über Architekturen und Aktivitätserhalt für antimikrobielle Peptide.",
    pub_title: "Publikationen",
    pub_intro: "Ausgewählte peer-reviewte Arbeiten in Machine Learning und Bioinformatik.",
    pub_more: "Alle Publikationen auf ORCID",
    skill_title: "Fähigkeiten",
    award_title: "Auszeichnungen",
    cert_title: "Zertifikate & Kurse",
    extra_title: "Außerschulische Aktivitäten",
    contact_title: "Kontakt aufnehmen",
    contact_intro: "Ich bin offen für Forschungskooperationen und Graduiertenmöglichkeiten.",
    contact_email: "E-Mail",
    contact_uni_email: "Universitäts-E-Mail",
    contact_phone: "Telefon"
  },
  fr: {
    nav_about: "À propos", nav_education: "Formation", nav_experience: "Expérience",
    nav_research: "Recherche", nav_publications: "Publications", nav_skills: "Compétences",
    nav_awards: "Distinctions", nav_contact: "Contact",
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
    exp_reviewer: "Réviseure pour Briefings in Bioinformatics, une revue Q1 (Facteur d'impact : 9,5) publiée par Oxford University Press.",
    exp_r1: "Évaluation critique de manuscrits sur l'IA et l'apprentissage profond",
    exp_r2: "Évaluation de la rigueur méthodologique et de l'analyse statistique",
    exp_r3: "Retours détaillés et constructifs aux auteurs",
    exp_r4: "Recommandation de décisions éditoriales",
    exp_ra: "Contribution à des projets de recherche en cours.",
    exp_deepbio: "Promotion des connaissances en bioinformatique et IA.",
    res_title: "Recherche",
    res_thesis: "Développement d'un cadre de réseau de neurones graphiques pour l'intégration des réseaux de similarité des patients.",
    res_bayes: "Développement d'un modèle bayésien hiérarchique Beta-Mixture pour l'inférence de l'évolution clonale.",
    res_amr: "Développement et validation d'un cadre d'apprentissage automatique pour la prédiction de la résistance antimicrobienne.",
    res_egfr: "Cadre multi-omique intégratif pour la stratification des patients atteints d'adénocarcinome pulmonaire EGFR-mutant.",
    res_crispr: "Conception computationnelle et profilage hors cible d'un ARN guide CRISPR-Cas9.",
    res_amp: "Revue systématique des architectures et de la rétention d'activité des peptides antimicrobiens.",
    pub_title: "Publications",
    pub_intro: "Travaux sélectionnés évalués par les pairs en apprentissage automatique et bioinformatique.",
    pub_more: "Toutes les publications sur ORCID",
    skill_title: "Compétences",
    award_title: "Distinctions",
    cert_title: "Certifications & Cours",
    extra_title: "Activités parascolaires",
    contact_title: "Me contacter",
    contact_intro: "Je suis ouverte aux collaborations de recherche et aux opportunités d'études supérieures.",
    contact_email: "E-mail",
    contact_uni_email: "E-mail universitaire",
    contact_phone: "Téléphone"
  },
  no: {
    nav_about: "Om meg", nav_education: "Utdanning", nav_experience: "Erfaring",
    nav_research: "Forskning", nav_publications: "Publikasjoner", nav_skills: "Ferdigheter",
    nav_awards: "Priser", nav_contact: "Kontakt",
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
    exp_reviewer: "Fagfellevurderer for Briefings in Bioinformatics, et Q1-tidsskrift (Impact Factor: 9,5) utgitt av Oxford University Press.",
    exp_r1: "Kritisk vurdering av manuskripter om AI og dyp læring",
    exp_r2: "Vurdering av metodisk strenghet og statistisk analyse",
    exp_r3: "Detaljert, konstruktiv tilbakemelding til forfattere",
    exp_r4: "Anbefaling av redaksjonelle beslutninger",
    exp_ra: "Bidrag til pågående forskningsprosjekter.",
    exp_deepbio: "Fremme kunnskap om bioinformatikk og AI.",
    res_title: "Forskning",
    res_thesis: "Utvikling av et Graph Neural Network-rammeverk for integrasjon av pasientlikhetsnettverk.",
    res_bayes: "Utvikling av en hierarkisk bayesiansk Beta-Mixture-modell for inferens av klonal evolusjon.",
    res_amr: "Utvikling og validering av et maskinlæringsrammeverk for prediksjon av antimikrobiell resistens.",
    res_egfr: "Integrativt multi-omics-rammeverk for stratifisering av pasienter med EGFR-mutant lungeadenokarsinom.",
    res_crispr: "Integrativt beregningsdesign og off-target-profilering av en CRISPR-Cas9-guide-RNA.",
    res_amp: "Systematisk gjennomgang av arkitekturer og aktivitetsretensjon for antimikrobielle peptider.",
    pub_title: "Publikasjoner",
    pub_intro: "Utvalgte fagfellevurderte arbeider innen maskinlæring og bioinformatikk.",
    pub_more: "Alle publikasjoner på ORCID",
    skill_title: "Ferdigheter",
    award_title: "Priser",
    cert_title: "Sertifiseringer & Kurs",
    extra_title: "Fritidsaktiviteter",
    contact_title: "Ta kontakt",
    contact_intro: "Jeg er åpen for forskningssamarbeid og muligheter for videreutdanning.",
    contact_email: "E-post",
    contact_uni_email: "Universitets-e-post",
    contact_phone: "Telefon"
  },
  es: {
    nav_about: "Sobre mí", nav_education: "Educación", nav_experience: "Experiencia",
    nav_research: "Investigación", nav_publications: "Publicaciones", nav_skills: "Habilidades",
    nav_awards: "Premios", nav_contact: "Contacto",
    hero_subtitle: "Biología Computacional · Aprendizaje Automático · Bioinformática",
    hero_tagline: "Estudiante de biotecnología en BRAC University · Revisora, Oxford University Press · GCI World 2026 Scholar",
    hero_cv: "Descargar CV",
    about_title: "Sobre mí",
    about_p1: "Soy estudiante de biotecnología en BRAC University, Bangladesh, con un fuerte enfoque en bioinformática, aprendizaje automático e integración multi-ómica.",
    about_p2: "Mi tesis actual implica desarrollar un marco de Red Neuronal de Grafos para la integración de redes de similitud de pacientes.",
    about_p3: "Trabajo como Asistente de Investigación en el Innovative Research Center y soy miembro asociada de UNYSAB Bangladesh.",
    edu_title: "Educación",
    edu_coursework: "Cursos relevantes: Bioinformática, Biología Molecular, Genética, Bioestadística.",
    edu_gci: "Seleccionada entre solicitantes de más de 100 países.",
    exp_title: "Experiencia",
    exp_reviewer: "Revisora para Briefings in Bioinformatics, una revista Q1 (Factor de Impacto: 9,5) publicada por Oxford University Press.",
    exp_r1: "Evaluación crítica de manuscritos sobre IA y aprendizaje profundo",
    exp_r2: "Evaluación del rigor metodológico y análisis estadístico",
    exp_r3: "Comentarios detallados y constructivos a los autores",
    exp_r4: "Recomendación de decisiones editoriales",
    exp_ra: "Contribución a proyectos de investigación en curso.",
    exp_deepbio: "Promoción del conocimiento sobre bioinformática e IA.",
    res_title: "Investigación",
    res_thesis: "Desarrollo de un marco de Red Neuronal de Grafos para la integración de redes de similitud de pacientes.",
    res_bayes: "Desarrollo de un modelo bayesiano jerárquico Beta-Mixture para la inferencia de evolución clonal.",
    res_amr: "Desarrollo y validación de un marco de aprendizaje automático para la predicción de resistencia antimicrobiana.",
    res_egfr: "Marco multi-ómico integrador para la estratificación de pacientes con adenocarcinoma pulmonar EGFR-mutante.",
    res_crispr: "Diseño computacional integrador y perfilado off-target de un ARN guía CRISPR-Cas9.",
    res_amp: "Revisión sistemática de arquitecturas y retención de actividad para péptidos antimicrobianos.",
    pub_title: "Publicaciones",
    pub_intro: "Trabajos seleccionados revisados por pares en aprendizaje automático y bioinformática.",
    pub_more: "Todas las publicaciones en ORCID",
    skill_title: "Habilidades",
    award_title: "Premios y Logros",
    cert_title: "Certificaciones y Cursos",
    extra_title: "Actividades Extracurriculares",
    contact_title: "Ponte en Contacto",
    contact_intro: "Estoy abierta a colaboraciones de investigación y oportunidades de posgrado.",
    contact_email: "Correo",
    contact_uni_email: "Correo Universitario",
    contact_phone: "Teléfono"
  },
  it: {
    nav_about: "Chi sono", nav_education: "Formazione", nav_experience: "Esperienza",
    nav_research: "Ricerca", nav_publications: "Pubblicazioni", nav_skills: "Competenze",
    nav_awards: "Premi", nav_contact: "Contatto",
    hero_subtitle: "Biologia Computazionale · Apprendimento Automatico · Bioinformatica",
    hero_tagline: "Studentessa di biotecnologie alla BRAC University · Revisore, Oxford University Press · GCI World 2026 Scholar",
    hero_cv: "Scarica CV",
    about_title: "Chi sono",
    about_p1: "Sono una studentessa di biotecnologie alla BRAC University, Bangladesh, con un forte focus su bioinformatica, apprendimento automatico e integrazione multi-omica.",
    about_p2: "La mia tesi attuale riguarda lo sviluppo di un framework di Graph Neural Network per l'integrazione di reti di similarità tra pazienti.",
    about_p3: "Lavoro come Assistente di Ricerca presso l'Innovative Research Center e sono membro associato di UNYSAB Bangladesh.",
    edu_title: "Formazione",
    edu_coursework: "Corsi rilevanti: Bioinformatica, Biologia Molecolare, Genetica, Biostatistica.",
    edu_gci: "Selezionata tra candidati da oltre 100 paesi.",
    exp_title: "Esperienza",
    exp_reviewer: "Revisore per Briefings in Bioinformatics, una rivista Q1 (Impact Factor: 9,5) pubblicata da Oxford University Press.",
    exp_r1: "Valutazione critica di manoscritti su IA e deep learning",
    exp_r2: "Valutazione del rigore metodologico e dell'analisi statistica",
    exp_r3: "Feedback dettagliato e costruttivo agli autori",
    exp_r4: "Raccomandazione di decisioni editoriali",
    exp_ra: "Contributo a progetti di ricerca in corso.",
    exp_deepbio: "Promozione della conoscenza su bioinformatica e IA.",
    res_title: "Ricerca",
    res_thesis: "Sviluppo di un framework di Graph Neural Network per l'integrazione di reti di similarità tra pazienti.",
    res_bayes: "Sviluppo di un modello bayesiano gerarchico Beta-Mixture per l'inferenza dell'evoluzione clonale.",
    res_amr: "Sviluppo e validazione di un framework di machine learning per la previsione della resistenza antimicrobica.",
    res_egfr: "Framework multi-omico integrativo per la stratificazione dei pazienti con adenocarcinoma polmonare EGFR-mutante.",
    res_crispr: "Progettazione computazionale integrativa e profilazione off-target di un RNA guida CRISPR-Cas9.",
    res_amp: "Revisione sistematica di architetture e ritenzione di attività per peptidi antimicrobici.",
    pub_title: "Pubblicazioni",
    pub_intro: "Lavori selezionati peer-reviewed in machine learning e bioinformatica.",
    pub_more: "Tutte le pubblicazioni su ORCID",
    skill_title: "Competenze",
    award_title: "Premi e Riconoscimenti",
    cert_title: "Certificazioni e Corsi",
    extra_title: "Attività Extracurriculari",
    contact_title: "Contattami",
    contact_intro: "Sono aperta a collaborazioni di ricerca e opportunità di specializzazione.",
    contact_email: "Email",
    contact_uni_email: "Email Universitaria",
    contact_phone: "Telefono"
  },
  pt: {
    nav_about: "Sobre mim", nav_education: "Educação", nav_experience: "Experiência",
    nav_research: "Pesquisa", nav_publications: "Publicações", nav_skills: "Habilidades",
    nav_awards: "Prêmios", nav_contact: "Contato",
    hero_subtitle: "Biologia Computacional · Aprendizado de Máquina · Bioinformática",
    hero_tagline: "Estudante de biotecnologia na BRAC University · Revisora, Oxford University Press · GCI World 2026 Scholar",
    hero_cv: "Baixar CV",
    about_title: "Sobre mim",
    about_p1: "Sou estudante de biotecnologia na BRAC University, Bangladesh, com forte foco em bioinformática, aprendizado de máquina e integração multi-ômica.",
    about_p2: "Minha tese atual envolve o desenvolvimento de uma estrutura de Rede Neural de Grafos para integração de redes de similaridade de pacientes.",
    about_p3: "Trabalho como Assistente de Pesquisa no Innovative Research Center e sou membro associado da UNYSAB Bangladesh.",
    edu_title: "Educação",
    edu_coursework: "Cursos relevantes: Bioinformática, Biologia Molecular, Genética, Bioestatística.",
    edu_gci: "Selecionada entre candidatos de mais de 100 países.",
    exp_title: "Experiência",
    exp_reviewer: "Revisora para Briefings in Bioinformatics, uma revista Q1 (Fator de Impacto: 9,5) publicada pela Oxford University Press.",
    exp_r1: "Avaliação crítica de manuscritos sobre IA e aprendizado profundo",
    exp_r2: "Avaliação do rigor metodológico e análise estatística",
    exp_r3: "Feedback detalhado e construtivo aos autores",
    exp_r4: "Recomendação de decisões editoriais",
    exp_ra: "Contribuição para projetos de pesquisa em andamento.",
    exp_deepbio: "Promoção do conhecimento sobre bioinformática e IA.",
    res_title: "Pesquisa",
    res_thesis: "Desenvolvimento de uma estrutura de Rede Neural de Grafos para integração de redes de similaridade de pacientes.",
    res_bayes: "Desenvolvimento de um modelo bayesiano hierárquico Beta-Mixture para inferência de evolução clonal.",
    res_amr: "Desenvolvimento e validação de uma estrutura de aprendizado de máquina para previsão de resistência antimicrobiana.",
    res_egfr: "Estrutura multi-ômica integrativa para estratificação de pacientes com adenocarcinoma pulmonar EGFR-mutante.",
    res_crispr: "Design computacional integrativo e perfil off-target de um RNA guia CRISPR-Cas9.",
    res_amp: "Revisão sistemática de arquiteturas e retenção de atividade para peptídeos antimicrobianos.",
    pub_title: "Publicações",
    pub_intro: "Trabalhos selecionados revisados por pares em aprendizado de máquina e bioinformática.",
    pub_more: "Todas as publicações no ORCID",
    skill_title: "Habilidades",
    award_title: "Prêmios e Conquistas",
    cert_title: "Certificações e Cursos",
    extra_title: "Atividades Extracurriculares",
    contact_title: "Entre em Contato",
    contact_intro: "Estou aberta a colaborações de pesquisa e oportunidades de pós-graduação.",
    contact_email: "E-mail",
    contact_uni_email: "E-mail Universitário",
    contact_phone: "Telefone"
  },
  nl: {
    nav_about: "Over mij", nav_education: "Opleiding", nav_experience: "Ervaring",
    nav_research: "Onderzoek", nav_publications: "Publicaties", nav_skills: "Vaardigheden",
    nav_awards: "Prijzen", nav_contact: "Contact",
    hero_subtitle: "Computationele Biologie · Machine Learning · Bioinformatica",
    hero_tagline: "Biotecnologie-studente aan BRAC University · Peer Reviewer, Oxford University Press · GCI World 2026 Scholar",
    hero_cv: "CV downloaden",
    about_title: "Over mij",
    about_p1: "Ik ben een biotechnologie-studente aan BRAC University, Bangladesh, met een sterke focus op bioinformatica, machine learning en multi-omics-integratie.",
    about_p2: "Mijn huidige thesis betreft de ontwikkeling van een Graph Neural Network-framework voor de integratie van patiëntsimilariteitsnetwerken.",
    about_p3: "Ik werk als Research Assistant bij het Innovative Research Center en ben geassocieerd lid van UNYSAB Bangladesh.",
    edu_title: "Opleiding",
    edu_coursework: "Relevante vakken: Bioinformatica, Moleculaire Biologie, Genetica, Biostatistiek.",
    edu_gci: "Geselecteerd uit kandidaten uit meer dan 100 landen.",
    exp_title: "Ervaring",
    exp_reviewer: "Peer reviewer voor Briefings in Bioinformatics, een Q1-tijdschrift (Impact Factor: 9,5) uitgegeven door Oxford University Press.",
    exp_r1: "Kritische beoordeling van manuscripten over AI en deep learning",
    exp_r2: "Beoordeling van methodologische nauwkeurigheid en statistische analyse",
    exp_r3: "Gedetailleerde, constructieve feedback aan auteurs",
    exp_r4: "Aanbeveling van redactionele beslissingen",
    exp_ra: "Bijdrage aan lopende onderzoeksprojecten.",
    exp_deepbio: "Bevordering van kennis over bioinformatica en AI.",
    res_title: "Onderzoek",
    res_thesis: "Ontwikkeling van een Graph Neural Network-framework voor de integratie van patiëntsimilariteitsnetwerken.",
    res_bayes: "Ontwikkeling van een hiërarchisch Bayesiaans Beta-Mixture-model voor inferentie van klonale evolutie.",
    res_amr: "Ontwikkeling en validatie van een machine learning-framework voor antimicrobiële resistentievoorspelling.",
    res_egfr: "Integratief multi-omics-framework voor stratificatie van patiënten met EGFR-mutant longadenocarcinoom.",
    res_crispr: "Integratief computationeel ontwerp en off-target-profilering van een CRISPR-Cas9-guide-RNA.",
    res_amp: "Systematische review van architecturen en activiteitsbehoud voor antimicrobiële peptiden.",
    pub_title: "Publicaties",
    pub_intro: "Geselecteerde peer-reviewed werken in machine learning en bioinformatica.",
    pub_more: "Alle publicaties op ORCID",
    skill_title: "Vaardigheden",
    award_title: "Prijzen en Prestaties",
    cert_title: "Certificeringen en Cursussen",
    extra_title: "Buitenschoolse Activiteiten",
    contact_title: "Neem Contact Op",
    contact_intro: "Ik sta open voor onderzoekssamenwerkingen en graduate-opportuniteiten.",
    contact_email: "E-mail",
    contact_uni_email: "Universiteits-e-mail",
    contact_phone: "Telefoon"
  }
};

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function () {

  // ===== LANGUAGE SWITCH =====
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    const savedLang = localStorage.getItem('lang') || 'en';
    langSelect.value = savedLang;
    applyLanguage(savedLang);

    langSelect.addEventListener('change', function (e) {
      const lang = e.target.value;
      localStorage.setItem('lang', lang);
      applyLanguage(lang);
    });
  }

  function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    document.documentElement.lang = lang;
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
      volumeSlider.value = bgAudio.volume;
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
          .catch(function () {
            alert('Could not play audio. Please make sure background.mp3 exists in the repository.');
          });
      } else {
        bgAudio.pause();
        soundOn = false;
        if (icon) icon.className = 'fas fa-volume-mute';
      }
    });
  }
});
