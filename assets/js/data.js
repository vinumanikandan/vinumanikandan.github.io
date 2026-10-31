// Site content — edit this file to update the page; no HTML changes needed.
window.SITE = {
  roles: [
    "Bioinformatics Research Associate",
    "Population & Statistical Genomics",
    "NGS Pipeline Developer",
    "Single-cell & Multi-omics Analyst",
    "Machine Learning for Health Data"
  ],

  skills: [
    { name: "Python", cat: "Programming", level: 5 },
    { name: "R", cat: "Programming", level: 5 },
    { name: "Perl", cat: "Programming", level: 5 },
    { name: "Bash / Shell", cat: "Programming", level: 5 },
    { name: "R Shiny", cat: "Programming", level: 4 },
    { name: "SQL / MySQL", cat: "Programming", level: 4 },
    { name: "PHP / CGI", cat: "Programming", level: 3 },
    { name: "HTML / CSS / JS", cat: "Programming", level: 3 },

    { name: "WGS", cat: "Genomics", level: 5 },
    { name: "RNA-seq", cat: "Genomics", level: 5 },
    { name: "GWAS", cat: "Genomics", level: 5 },
    { name: "eQTL / meQTL", cat: "Genomics", level: 4 },
    { name: "scRNA-seq", cat: "Genomics", level: 4 },
    { name: "scATAC-seq", cat: "Genomics", level: 3 },
    { name: "Variant Calling", cat: "Genomics", level: 5 },
    { name: "EPIC Methylation", cat: "Genomics", level: 4 },
    { name: "Metagenomics", cat: "Genomics", level: 4 },
    { name: "De novo Assembly", cat: "Genomics", level: 4 },

    { name: "GATK", cat: "Tools", level: 5 },
    { name: "PLINK", cat: "Tools", level: 5 },
    { name: "bcftools", cat: "Tools", level: 5 },
    { name: "samtools", cat: "Tools", level: 5 },
    { name: "BWA", cat: "Tools", level: 5 },
    { name: "Bowtie2", cat: "Tools", level: 4 },
    { name: "STAR / HISAT2", cat: "Tools", level: 4 },
    { name: "DESeq2", cat: "Tools", level: 4 },
    { name: "Seurat / Signac", cat: "Tools", level: 4 },
    { name: "ANNOVAR", cat: "Tools", level: 4 },
    { name: "ADMIXTURE", cat: "Tools", level: 4 },
    { name: "SKAT / SKAT-O", cat: "Tools", level: 4 },
    { name: "MatrixQTL", cat: "Tools", level: 4 },
    { name: "Axiom Suite", cat: "Tools", level: 4 },

    { name: "Snakemake", cat: "Pipelines & HPC", level: 5 },
    { name: "Nextflow / nf-core", cat: "Pipelines & HPC", level: 3 },
    { name: "SLURM", cat: "Pipelines & HPC", level: 5 },
    { name: "LSF", cat: "Pipelines & HPC", level: 4 },
    { name: "Linux", cat: "Pipelines & HPC", level: 5 },
    { name: "Git", cat: "Pipelines & HPC", level: 4 },
    { name: "REDCap", cat: "Pipelines & HPC", level: 4 },

    { name: "scikit-learn", cat: "ML & AI", level: 3 },
    { name: "Supervised learning", cat: "ML & AI", level: 3 },
    { name: "Unsupervised learning", cat: "ML & AI", level: 3 },
    { name: "Regression & Classification", cat: "ML & AI", level: 3 },
    { name: "Feature engineering", cat: "ML & AI", level: 3 },
    { name: "Model evaluation", cat: "ML & AI", level: 3 },

    { name: "Training & workshops", cat: "Leadership", level: 5 },
    { name: "Project coordination", cat: "Leadership", level: 4 },
    { name: "Lean Six Sigma (Green Belt)", cat: "Leadership", level: 4 }
  ],

  experience: [
    {
      role: "Research Associate",
      org: "Public Health Research Center, NYU Abu Dhabi",
      short: "NYUAD · PHRC",
      where: "Abu Dhabi, UAE",
      dates: "Sep 2021 – Present",
      tags: ["GWAS", "WGS", "Snakemake", "R Shiny", "ML"],
      points: [
        "Led QC and analysis of <b>10,000</b> Axiom array genotyping datasets (Axiom Suite, PLINK) for the UAE Healthy Future Study, improving dataset accuracy.",
        "Coordinated sequencing of <b>1,000 whole genomes</b> on Illumina for the UAE Healthy Future Study.",
        "Developed and deployed end-to-end <b>GWAS pipelines</b> for 10K UAEHFS samples.",
        "Built a <b>Snakemake</b> pipeline for gene-wide rare-variant analysis of lipid profiles on WGS data (Burden, SKAT, SKAT-O), plus an R Shiny app for dynamic visualization.",
        "Performed population structure and fine-scale genetic structure analysis with PLINK.",
        "Wrote Python QC automation for data validation and error detection — reducing missing datasets and catching duplicate samples.",
        "Moroccan GWAS: phenotype processing, cleaning and database creation; WGS analysis including PopGen.",
        "Mongolian GWAS: WGS analysis and PopGen comparisons with 1000 Genomes and HGDP samples.",
        "Exploring machine-learning models on RNA-seq data for predictive insights.",
        "Installed and maintain REDCap; built R Shiny apps for internal database management.",
        "Train students and staff in bioinformatics pipelines, software and R."
      ]
    },
    {
      role: "Research Technician (Bioinformatics)",
      org: "NYU Abu Dhabi",
      short: "NYUAD",
      where: "Abu Dhabi, UAE",
      dates: "Jan 2016 – Aug 2021",
      tags: ["RNA-seq", "scRNA-seq", "eQTL", "Epigenetics"],
      points: [
        "Developed pipelines for RNA-seq, WGS and epigenetic analysis.",
        "Conducted GWAS, variant calling and population stratification for genomic data.",
        "Analyzed human single-cell RNA-seq data in malaria response (<i>AJHG</i> 2025).",
        "Systems genetics, miRNA-mediated regulation and mRNA-QTL analysis of host response in COVID-19 (<i>Human Genomics</i> 2023).",
        "Methylation profiling of human response to <i>P. falciparum</i> before and after infection and treatment.",
        "scATAC-seq (Seurat, Signac) and bulk ATAC-seq (MACS2, bedtools, HOMER) analyses.",
        "Exome and RNA-seq analysis of a hyper-IgE syndrome affected family."
      ]
    },
    {
      role: "Technical Specialist (Bioinformatics)",
      org: "King Abdullah University of Science and Technology",
      short: "KAUST",
      where: "Saudi Arabia",
      dates: "Mar 2014 – Dec 2015",
      tags: ["Metagenomics", "Comparative genomics", "Perl"],
      points: [
        "Comparative genomics and metabolic pathway analysis of Red Sea microbial communities.",
        "Automated Perl workflows for metagenomic and metatranscriptomic data processing.",
        "Transcriptome analysis of <i>Epulopiscium fishelsoni</i> from surgeonfish gut (<i>PNAS</i> 2017).",
        "Metabolic traits of the uncultured archaeal MSBL1 lineage from Red Sea brine pools (<i>Scientific Reports</i> 2016).",
        "Studies of methanogens, SAR11 and <i>Prochlorococcus</i> distribution in the Red Sea."
      ]
    },
    {
      role: "Associate Bioinformatics Analyst",
      org: "SciGenom Labs",
      short: "SciGenom",
      where: "India",
      dates: "Feb 2011 – Jan 2014",
      tags: ["Bacterial WGS", "Clinical reports", "Tool dev"],
      points: [
        "Whole genome sequencing analysis of plant growth-promoting bacteria (<i>PLOS ONE</i> 2014).",
        "Downstream analysis of patient Sanger data for oncogenes and cardiology drug response (Sequencher, Mutation Surveyor) with customized clinical reports.",
        "Built <b>PrimeMe</b> — a primer-design tool for any Entrez gene or custom coordinates (PHP, Perl, MySQL, Linux)."
      ]
    },
    {
      role: "Senior Bioinformatics Programmer",
      org: "Genome Life Science",
      short: "Genome Life Sci.",
      where: "India",
      dates: "Jul 2007 – Jan 2011",
      tags: ["Databases", "Perl/CGI", "MySQL"],
      points: [
        "<b>RoBuST</b> — integrated genomics resource for root and bulb crop families Apiaceae and Alliaceae (<i>BMC Plant Biology</i> 2010).",
        "<b>ExDom</b> — database for comparative visualization of exon–intron structures of protein domains across seven eukaryotic genomes (<i>Nucleic Acids Research</i> 2009)."
      ]
    }
  ],

  // topics drive the filter chips
  publications: [
    { y: 2025, t: "Single-cell transcriptomics reveals inter-ethnic variation in immune response to Falciparum malaria", a: "Shahin T, Jurkovic J, Dieng MM, Manikandan V, et al.", j: "The American Journal of Human Genetics", doi: "10.1016/j.ajhg.2025.01.020", topics: ["Malaria", "Single-cell"] },
    { y: 2025, t: "The two sub-genomes of the allotetraploid frog Xenopus laevis are evolving under similar selective pressure in extant populations", a: "Almojil D, Manikandan V, Drou N, Measey J, Boissinot S.", j: "BMC Genomics", doi: "10.1186/s12864-025-12036-4", topics: ["Evolution", "Population genomics"] },
    { y: 2025, t: "Loss of STIM1 and STIM2 in salivary glands disrupts ANO1 function but does not induce Sjogren's disease", a: "Son GY, Zou A, Wahl A, …, Vinu M, …, Idaghdour Y, Yule DI, Feske S, Lacruz RS.", j: "Function (Oxford)", doi: "10.1093/function/zqae047", topics: ["Calcium signaling"] },
    { y: 2024, t: "Pregnenolone sulfate induces transcriptional and immunoregulatory effects on T cells", a: "El Hajj Y, Shahin T, Dieng MM, …, Manikandan V, Idaghdour Y.", j: "Scientific Reports", doi: "10.1038/s41598-024-57327-0", topics: ["Immunology", "Transcriptomics"] },
    { y: 2023, t: "The Ca2+ channel ORAI1 is a regulator of oral cancer growth and nociceptive pain", a: "Son GY, Tu NH, …, Vinu M, …, Idaghdour Y, …, Lacruz RS.", j: "Science Signaling", doi: "10.1126/scisignal.adf9535", topics: ["Calcium signaling", "Cancer"] },
    { y: 2023, t: "Impact of Plasmodium falciparum infection on DNA methylation of circulating immune cells", a: "Almojil D, Diawara A, …, Manikandan V, …, Idaghdour Y.", j: "Frontiers in Genetics", doi: "10.3389/fgene.2023.1197933", topics: ["Malaria", "Epigenetics"] },
    { y: 2023, t: "Systems genetics identifies miRNA-mediated regulation of host response in COVID-19", a: "Gjorgjieva T, Chaloemtoem A, …, Manikandan V, …, Idaghdour Y.", j: "Human Genomics", doi: "10.1186/s40246-023-00494-4", topics: ["COVID-19", "QTL"] },
    { y: 2021, t: "Metabolome modulation of the host adaptive immunity in human malaria", a: "Abdrabou W, Dieng MM, …, Manikandan V, …, Idaghdour Y.", j: "Nature Metabolism", doi: "10.1038/s42255-021-00404-9", topics: ["Malaria", "Immunology"] },
    { y: 2020, t: "Integrative genomic analysis reveals mechanisms of immune evasion in P. falciparum malaria", a: "Dieng MM, Diawara A, Manikandan V, …, Idaghdour Y.", j: "Nature Communications", topics: ["Malaria", "QTL"] },
    { y: 2020, t: "Fluoride exposure alters Ca2+ signaling and mitochondrial function in enamel cells", a: "Aulestia FJ, …, Manikandan V, …, Idaghdour Y, Yule DI, Lacruz RS.", j: "Science Signaling", topics: ["Calcium signaling", "Transcriptomics"] },
    { y: 2020, t: "Beyond the greenhouse: coupling environmental and salt stress response in Salicornia bigelovii", a: "Chelaifa H, Manikandan V, …, Idaghdour Y, Hasan A, Hernandez HH.", j: "bioRxiv", topics: ["Plants", "Transcriptomics"] },
    { y: 2018, t: "Comparative Genomics of the Genus Methanohalophilus", a: "Guan Y, Ngugi DK, Vinu M, …, Stingl U.", j: "Frontiers in Microbiology", topics: ["Microbial genomics", "Red Sea"] },
    { y: 2018, t: "Complete Genome Sequence of Methanohalophilus portucalensis Strain FDF-1T", a: "L'Haridon S, Corre E, Guan Y, Vinu M, …, Jebbar M.", j: "Genome Announcements", topics: ["Microbial genomics"] },
    { y: 2017, t: "Genomic diversification of giant enteric symbionts reflects host dietary lifestyles", a: "Ngugi DK, Miyake S, …, Vinu M, …, Stingl U.", j: "PNAS", doi: "10.1073/pnas.1703070114", topics: ["Microbial genomics", "Red Sea", "Transcriptomics"] },
    { y: 2017, t: "Store-operated Ca2+ entry (SOCE) controls ameloblast cell function and enamel development", a: "Eckstein M, Vaeth M, …, Vinu M, …, Idaghdour Y, Feske S, Lacruz RS.", j: "JCI Insight", topics: ["Calcium signaling"] },
    { y: 2017, t: "Environmental Extremes Are Associated with Dietary Patterns in Arabian Gulf Reef Fishes", a: "Shraim R, Dieng MM, Vinu M, …, Idaghdour Y, Burt JA.", j: "Frontiers in Marine Science", topics: ["Evolution"] },
    { y: 2017, t: "Genomic characterization of two novel SAR11 isolates from the Red Sea", a: "Jimenez-Infante F, Ngugi DK, Vinu M, …, Stingl U.", j: "FEMS Microbiology Ecology", topics: ["Microbial genomics", "Red Sea"] },
    { y: 2017, t: "Complete Genome Sequence of Methanohalophilus halophilus DSM 3094T", a: "L'Haridon S, Corre E, Guan Y, Vinu M, …, Jebbar M.", j: "Genome Announcements", topics: ["Microbial genomics"] },
    { y: 2016, t: "Metabolic traits of an uncultured archaeal lineage – MSBL1 – from brine pools of the Red Sea", a: "Mwirichia R, Alam I, …, Vinu M, …, Stingl U.", j: "Scientific Reports", doi: "10.1038/srep19181", topics: ["Microbial genomics", "Red Sea"] },
    { y: 2015, t: "Comprehensive Genomic Analyses of the OM43 Clade", a: "Jimenez-Infante F, Ngugi DK, Vinu M, …, Stingl U.", j: "Applied and Environmental Microbiology", topics: ["Microbial genomics", "Red Sea"] },
    { y: 2014, t: "Whole Genome Sequencing and Analysis of Plant Growth Promoting Bacteria Isolated from Plantation Crops", a: "Gupta A, Gopal M, Thomas GV, Manikandan V, et al.", j: "PLOS ONE", doi: "10.1371/journal.pone.0104259", topics: ["Microbial genomics", "Plants"] },
    { y: 2013, t: "Chapter 13: Applications of Next Generation Sequencing", a: "Beena PS, Manikandan V.", j: "Recent Developments in Biotechnology Vol. 5 (book chapter)", topics: ["NGS methods"] },
    { y: 2010, t: "RoBuST: An Integrated Resource of Genomics Information for Plants in the Root and Bulb Crop Families Apiaceae and Alliaceae", a: "Bhasi A, …, Manikandan V, …, Senapathy P.", j: "BMC Plant Biology", doi: "10.1186/1471-2229-10-161", topics: ["Databases", "Plants"] },
    { y: 2009, t: "ExDom: an integrated database for comparative analysis of the exon–intron structures of protein domains in eukaryotes", a: "Bhasi A, Philip P, Manikandan V, Senapathy P.", j: "Nucleic Acids Research", doi: "10.1093/nar/gkn746", topics: ["Databases"] }
  ],

  talks: [
    { y: "2024", kind: "Workshop", t: "Bioinformatics Training — Center for Brain Health (CBH)", where: "UAE", d: "Delivered hands-on workshops on NGS data analysis, pipeline development, bioinformatics tools and GWAS." },
    { y: "2024", kind: "Workshop", t: "Variant Detection & Annotation", where: "NYU Abu Dhabi, UAE", d: "Hands-on workshop from raw reads to gVCFs, annotation and downstream interpretation." },
    { y: "2019", kind: "Invited talk", t: "Bridging Gaps Between Genomics and Medicine in Africa", where: "Morocco", d: "Guest speaker at the 1st International Congress of the Moroccan Society of Genomics and Human Genetics." },
    { y: "2019", kind: "Organizer", t: "Winter Institute of Statistical Genetics", where: "Abu Dhabi, UAE", d: "Attended workshops; member of the organizing committee." },
    { y: "2017", kind: "Organizer", t: "Winter Institute of Statistical Genetics", where: "Abu Dhabi, UAE", d: "Attended workshops; member of the organizing committee." },
    { y: "2013", kind: "Conference", t: "NextGen Genomics & Bioinformatics Technologies (NGBT)", where: "CSIR-IGIB, India", d: "" },
    { y: "2012", kind: "Poster", t: "NGS & Bioinformatics for Genomics & Healthcare", where: "IIT Madras, India", d: "Presented a poster on PrimeMe; member of the organizing committee." },
    { y: "2011", kind: "Conference", t: "NextGen Genomics & Bioinformatics Technologies (NGBT)", where: "RGCB, India", d: "" }
  ],

  certs: [
    { t: "Biomedical Research (IRB)", by: "CITI Program", y: "" },
    { t: "Managing Multiple Projects", by: "LinkedIn", y: "2024" },
    { t: "Tools for Data Science", by: "IBM · Coursera", y: "2024" },
    { t: "Introduction to Nextflow", by: "Physalia", y: "2023" },
    { t: "Python Programming for Biologists", by: "Physalia", y: "2023" },
    { t: "Version Control for Researchers", by: "Physalia", y: "2023" },
    { t: "R Essential Training: Wrangling & Visualizing Data", by: "LinkedIn", y: "2022" },
    { t: "Fundamentals of Immunology: Innate Immunity & B-Cell Function", by: "Rice University · Coursera", y: "2021" },
    { t: "What is Data Science?", by: "IBM · Coursera", y: "2019" },
    { t: "MalariaX: Defeating Malaria from the Genes to the Globe", by: "HarvardX", y: "2019" },
    { t: "Lean Six Sigma Green Belt", by: "KAUST", y: "2015" }
  ]
};
