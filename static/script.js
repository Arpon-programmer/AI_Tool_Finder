// Firebase Analytics integration
// Remove ES module imports for Firebase Analytics
// Use global window.firebaseAnalytics and window.firebaseApp set in index.html

let analytics;
document.addEventListener('DOMContentLoaded', () => {
    if (window.firebaseApp && window.firebaseAnalytics) {
        analytics = window.firebaseAnalytics;
        // Log user engagement event
        if (typeof firebase !== 'undefined' && typeof firebase.analytics !== 'undefined') {
            // Defensive: for older Firebase versions
            firebase.analytics();
        }
        if (typeof analytics !== 'undefined') {
            if (typeof logEvent !== 'undefined') {
                logEvent(analytics, 'user_engagement');
            } else if (typeof analytics.logEvent === 'function') {
                analytics.logEvent('user_engagement');
            }
        }
    }
});

// Animated background color transitions
document.addEventListener('DOMContentLoaded', () => {
    function randomLightColor() {
        const r = 200 + Math.floor(Math.random() * 56);
        const g = 200 + Math.floor(Math.random() * 56);
        const b = 200 + Math.floor(Math.random() * 56);
        return `rgb(${r},${g},${b})`;
    }
    function setRandomGradient() {
        const color1 = randomLightColor();
        const color2 = randomLightColor();
        document.body.style.background = `radial-gradient(circle at 50% 50%, ${color1}, ${color2} 80%)`;
    }
    setInterval(setRandomGradient, 2000);
});

// AI tool recommendations by profession
const aiTools = {
    'Software Developer': [
        { name: 'GitHub Copilot', desc: 'AI pair programmer for code completion and suggestions.', link: 'tools/github-copilot.html' },
        { name: 'Tabnine', desc: 'AI code assistant for multiple languages.', link: 'tools/tabnine.html' },
        { name: 'DeepCode', desc: 'AI-powered code review tool.', link: 'tools/deepcode.html' },
        { name: 'Amazon CodeWhisperer', desc: 'AI coding companion for code generation and recommendations.', link: 'tools/amazon-codewhisperer.html' },
        { name: 'Kite', desc: 'AI-powered code completions for Python and more.', link: 'tools/kite.html' }
    ],
    'Data Scientist': [
        { name: 'ChatGPT', desc: 'Conversational AI for data exploration and code help.', link: 'tools/chatgpt.html' },
        { name: 'DataRobot', desc: 'Automated machine learning platform.', link: 'tools/datarobot.html' },
        { name: 'MonkeyLearn', desc: 'Text analysis with AI.', link: 'tools/monkeylearn.html' },
        { name: 'IBM Watson Studio', desc: 'AI-powered data science and machine learning platform.', link: 'tools/ibm-watson-studio.html' },
        { name: 'Google AutoML', desc: 'Custom machine learning model training with Google AI.', link: 'tools/google-automl.html' }
    ],
    'Graphic Designer': [
        { name: 'DALL·E', desc: 'AI image generation from text.', link: 'tools/dalle.html' },
        { name: 'Canva Magic Design', desc: 'AI-powered design suggestions.', link: 'tools/canva-magic-design.html' },
        { name: 'Remove.bg', desc: 'AI background remover for images.', link: 'tools/remove-bg.html' },
        { name: 'Adobe Firefly', desc: 'AI generative art and design tools by Adobe.', link: 'tools/adobe-firefly.html' },
        { name: 'Fotor AI', desc: 'AI photo editing and enhancement.', link: 'tools/fotor-ai.html' }
    ],
    'Content Writer': [
        { name: 'Jasper', desc: 'AI writing assistant for content creation.', link: 'tools/jasper.html' },
        { name: 'Grammarly', desc: 'AI grammar and style checker.', link: 'tools/grammarly.html' },
        { name: 'Copy.ai', desc: 'AI-powered copywriting tool.', link: 'tools/copy-ai.html' },
        { name: 'Writesonic', desc: 'AI content generator for blogs, ads, and more.', link: 'tools/writesonic.html' },
        { name: 'Quillbot', desc: 'AI paraphrasing and summarization tool.', link: 'tools/quillbot.html' }
    ],
    'Digital Marketer': [
        { name: 'SurferSEO', desc: 'AI for SEO optimization.', link: 'tools/surferseo.html' },
        { name: 'AdCreative.ai', desc: 'AI ad creative generator.', link: 'tools/adcreative-ai.html' },
        { name: 'Copy.ai', desc: 'AI-powered copywriting tool.', link: 'tools/copy-ai.html' },
        { name: 'Jasper', desc: 'AI writing assistant for marketing content.', link: 'tools/jasper.html' },
        { name: 'MarketMuse', desc: 'AI content research and optimization platform.', link: 'tools/marketmuse.html' }
    ],
    'Teacher': [
        { name: 'ChatGPT', desc: 'Conversational AI for education and Q&A.', link: 'tools/chatgpt.html' },
        { name: 'Quillionz', desc: 'AI question generator for teachers.', link: 'tools/quillionz.html' },
        { name: 'Grammarly', desc: 'AI grammar and writing assistant.', link: 'tools/grammarly.html' },
        { name: 'ScribeSense', desc: 'AI grading and assessment tool.', link: 'tools/scribesense.html' },
        { name: 'Otter.ai', desc: 'AI-powered transcription and note-taking.', link: 'tools/otter-ai.html' }
    ],
    'Doctor': [
        { name: 'IBM Watson Health', desc: 'AI for medical data analysis and diagnostics.', link: 'tools/ibm-watson-health.html' },
        { name: 'Google Health AI', desc: 'AI-powered healthcare solutions by Google.', link: 'tools/google-health-ai.html' },
        { name: 'PathAI', desc: 'AI for pathology and disease detection.', link: 'tools/pathai.html' },
        { name: 'Aidoc', desc: 'AI for medical imaging and radiology.', link: 'tools/aidoc.html' },
        { name: 'Buoy Health', desc: 'AI health assistant for symptom checking.', link: 'tools/buoy-health.html' }
    ],
    'Lawyer': [
        { name: 'Casetext CoCounsel', desc: 'AI legal research and drafting assistant.', link: 'tools/casetext-cocounsel.html' },
        { name: 'Harvey AI', desc: 'AI for legal document review and analysis.', link: 'tools/harvey-ai.html' },
        { name: 'Luminance', desc: 'AI-powered contract analysis and due diligence.', link: 'tools/luminance.html' },
        { name: 'ROSS Intelligence', desc: 'AI legal research platform.', link: 'tools/ross-intelligence.html' },
        { name: 'DoNotPay', desc: 'AI legal chatbot for consumer rights.', link: 'tools/donotpay.html' }
    ],
    'Accountant': [
        { name: 'Vic.ai', desc: 'AI for accounting automation and invoice processing.', link: 'tools/vic-ai.html' },
        { name: 'Docyt AI', desc: 'AI-powered bookkeeping and expense management.', link: 'tools/docyt-ai.html' },
        { name: 'MindBridge Ai', desc: 'AI for financial anomaly detection.', link: 'tools/mindbridge-ai.html' },
        { name: 'Botkeeper', desc: 'AI bookkeeping for businesses.', link: 'tools/botkeeper.html' },
        { name: 'QuickBooks AI', desc: 'AI features in QuickBooks for smart accounting.', link: 'tools/quickbooks-ai.html' }
    ],
    'Engineer': [
        { name: 'GitHub Copilot', desc: 'AI pair programmer for code completion and suggestions.', link: 'tools/github-copilot.html' },
        { name: 'MathWorks MATLAB AI', desc: 'AI and ML tools for engineering analysis.', link: 'tools/matlab-ai.html' },
        { name: 'Ansys AI', desc: 'AI-powered simulation and engineering analysis.', link: 'tools/ansys-ai.html' },
        { name: 'DeepCode', desc: 'AI-powered code review tool.', link: 'tools/deepcode.html' },
        { name: 'SimScale AI', desc: 'Cloud-based engineering simulation with AI.', link: 'tools/simscale-ai.html' }
    ],
    'Product Manager': [
        { name: 'Notion AI', desc: 'AI-powered productivity and writing assistant.', link: 'tools/notion-ai.html' },
        { name: 'Productboard AI', desc: 'AI for product management and roadmaps.', link: 'tools/productboard-ai.html' },
        { name: 'Aha! AI', desc: 'AI features for product strategy and planning.', link: 'tools/aha-ai.html' },
        { name: 'ClickUp AI', desc: 'AI-powered project and product management.', link: 'tools/clickup-ai.html' },
        { name: 'Coda AI', desc: 'AI for docs, wikis, and product workflows.', link: 'tools/coda-ai.html' }
    ],
    'HR Specialist': [
        { name: 'HireVue AI', desc: 'AI for candidate screening and interviews.', link: 'tools/hirevue-ai.html' },
        { name: 'Pymetrics', desc: 'AI-powered talent assessment and matching.', link: 'tools/pymetrics.html' },
        { name: 'X0PA AI', desc: 'AI for recruitment and talent management.', link: 'tools/x0pa-ai.html' },
        { name: 'Eightfold AI', desc: 'AI talent intelligence platform.', link: 'tools/eightfold-ai.html' },
        { name: 'Paradox AI', desc: 'AI assistant for HR and recruiting.', link: 'tools/paradox-ai.html' }
    ],
    'Financial Analyst': [
        { name: 'AlphaSense', desc: 'AI-powered market intelligence and search.', link: 'tools/alphasense.html' },
        { name: 'Kensho AI', desc: 'AI for financial analytics and forecasting.', link: 'tools/kensho-ai.html' },
        { name: 'Bloomberg Terminal AI', desc: 'AI features in Bloomberg Terminal for finance.', link: 'tools/bloomberg-terminal-ai.html' },
        { name: 'Kavout', desc: 'AI-driven investment analytics platform.', link: 'tools/kavout.html' },
        { name: 'Sentieo', desc: 'AI-powered financial research platform.', link: 'tools/sentieo.html' }
    ],
    'UX/UI Designer': [
        { name: 'Uizard', desc: 'AI-powered UI design and prototyping.', link: 'tools/uizard.html' },
        { name: 'Figma AI plugins', desc: 'AI plugins for Figma design tool.', link: 'tools/figma-ai-plugins.html' },
        { name: 'DALL·E', desc: 'AI image generation for creative design.', link: 'tools/dalle.html' },
        { name: 'Remove.bg', desc: 'AI background remover for design assets.', link: 'tools/remove-bg.html' },
        { name: 'Adobe Firefly', desc: 'AI generative art and design tools by Adobe.', link: 'tools/adobe-firefly.html' }
    ],
    'Researcher': [
        { name: 'Elicit', desc: 'AI research assistant for literature review.', link: 'tools/elicit.html' },
        { name: 'Semantic Scholar AI', desc: 'AI-powered academic search engine.', link: 'tools/semantic-scholar.html' },
        { name: 'Iris.ai', desc: 'AI for scientific research and discovery.', link: 'tools/iris-ai.html' },
        { name: 'Scite.ai', desc: 'AI-powered citation and evidence analysis.', link: 'tools/scite-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for research and Q&A.', link: 'tools/chatgpt.html' }
    ],
    'Sales Manager': [
        { name: 'Gong.io', desc: 'AI-powered sales conversation analytics.', link: 'tools/gong-io.html' },
        { name: 'Salesforce Einstein', desc: 'AI for CRM and sales forecasting.', link: 'tools/salesforce-einstein.html' },
        { name: 'Outreach AI', desc: 'AI-driven sales engagement platform.', link: 'tools/outreach-ai.html' },
        { name: 'Drift AI', desc: 'AI chatbots and automation for sales.', link: 'tools/drift-ai.html' },
        { name: 'People.ai', desc: 'AI for sales productivity and insights.', link: 'tools/people-ai.html' }
    ],
    'Customer Support': [
        { name: 'Ada Support', desc: 'AI-powered customer service automation.', link: 'tools/ada-support.html' },
        { name: 'Intercom Fin AI', desc: 'AI for customer messaging and support.', link: 'tools/intercom-fin-ai.html' },
        { name: 'Zendesk AI', desc: 'AI features for customer support.', link: 'tools/zendesk-ai.html' },
        { name: 'Freshdesk AI', desc: 'AI-powered helpdesk and support.', link: 'tools/freshdesk-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for customer queries.', link: 'tools/chatgpt.html' }
    ],
    'Project Manager': [
        { name: 'Notion AI', desc: 'AI-powered productivity and project management.', link: 'tools/notion-ai.html' },
        { name: 'ClickUp AI', desc: 'AI for project and task management.', link: 'tools/clickup-ai.html' },
        { name: 'Asana AI', desc: 'AI features for project tracking.', link: 'tools/asana-ai.html' },
        { name: 'Trello AI', desc: 'AI-powered boards and automation.', link: 'tools/trello-ai.html' },
        { name: 'Monday.com AI', desc: 'AI for workflow and project management.', link: 'tools/monday-ai.html' }
    ],
    'Business Analyst': [
        { name: 'Tableau AI', desc: 'AI-powered analytics and visualization.', link: 'tools/tableau-ai.html' },
        { name: 'Power BI AI', desc: 'AI features in Power BI for business insights.', link: 'tools/powerbi-ai.html' },
        { name: 'Sisense AI', desc: 'AI-driven business intelligence platform.', link: 'tools/sisense-ai.html' },
        { name: 'ThoughtSpot', desc: 'AI analytics and search-driven insights.', link: 'tools/thoughtspot.html' },
        { name: 'Qlik Sense AI', desc: 'AI for data analytics and dashboards.', link: 'tools/qlik-sense-ai.html' }
    ],
    'Entrepreneur': [
        { name: 'ChatGPT', desc: 'Conversational AI for business ideation.', link: 'tools/chatgpt.html' },
        { name: 'Copy.ai', desc: 'AI-powered copywriting for startups.', link: 'tools/copy-ai.html' },
        { name: 'Jasper', desc: 'AI writing assistant for entrepreneurs.', link: 'tools/jasper.html' },
        { name: 'Notion AI', desc: 'AI for productivity and planning.', link: 'tools/notion-ai.html' },
        { name: 'Canva Magic Design', desc: 'AI-powered design for branding.', link: 'tools/canva-magic-design.html' }
    ],
    'Photographer': [
        { name: 'Remove.bg', desc: 'AI background remover for photos.', link: 'tools/remove-bg.html' },
        { name: 'Luminar AI', desc: 'AI photo editing and enhancement.', link: 'tools/luminar-ai.html' },
        { name: 'Topaz AI', desc: 'AI-powered image upscaling and noise reduction.', link: 'tools/topaz-ai.html' },
        { name: 'Adobe Photoshop AI', desc: 'AI features in Adobe Photoshop for photographers.', link: 'tools/adobe-photoshop-ai.html' },
        { name: 'ImagenAI', desc: 'AI photo editing workflow automation.', link: 'tools/imagenai.html' }
    ],
    'Video Editor': [
        { name: 'Descript', desc: 'AI-powered video and audio editing.', link: 'tools/descript.html' },
        { name: 'RunwayML', desc: 'AI video editing and creative tools.', link: 'tools/runwayml.html' },
        { name: 'Magisto', desc: 'AI video creation and editing platform.', link: 'tools/magisto.html' },
        { name: 'Wisecut', desc: 'AI video editing for jump cuts and pacing.', link: 'tools/wisecut.html' },
        { name: 'Adobe Premiere Pro AI', desc: 'AI features in Adobe Premiere Pro.', link: 'tools/adobe-premiere-pro-ai.html' }
    ],
    'Translator': [
        { name: 'DeepL', desc: 'AI-powered language translation.', link: 'tools/deepl.html' },
        { name: 'Google Translate AI', desc: 'AI translation by Google.', link: 'tools/google-translate-ai.html' },
        { name: 'Microsoft Translator AI', desc: 'AI translation by Microsoft.', link: 'tools/microsoft-translator-ai.html' },
        { name: 'Unbabel', desc: 'AI-powered translation for business.', link: 'tools/unbabel.html' },
        { name: 'Smartling AI', desc: 'AI translation management platform.', link: 'tools/smartling-ai.html' }
    ],
    'Architect': [
        { name: 'Spacemaker AI', desc: 'AI for urban and building design.', link: 'tools/spacemaker-ai.html' },
        { name: 'TestFit AI', desc: 'AI-powered building design and feasibility.', link: 'tools/testfit-ai.html' },
        { name: 'Autodesk Revit AI', desc: 'AI features in Autodesk Revit.', link: 'tools/autodesk-revit-ai.html' },
        { name: 'Cove.tool', desc: 'AI for sustainable building design.', link: 'tools/cove-tool.html' },
        { name: 'Archistar', desc: 'AI for property and site analysis.', link: 'tools/archistar.html' }
    ],
    'Consultant': [
        { name: 'ChatGPT', desc: 'Conversational AI for consulting and research.', link: 'tools/chatgpt.html' },
        { name: 'Notion AI', desc: 'AI-powered productivity and note-taking.', link: 'tools/notion-ai.html' },
        { name: 'Tableau AI', desc: 'AI-powered analytics and visualization.', link: 'tools/tableau-ai.html' },
        { name: 'AlphaSense', desc: 'AI-powered market intelligence.', link: 'tools/alphasense.html' },
        { name: 'Grammarly', desc: 'AI grammar and writing assistant.', link: 'tools/grammarly.html' }
    ],
    'Social Media Manager': [
        { name: 'Lately AI', desc: 'AI-powered social media content generator.', link: 'tools/lately-ai.html' },
        { name: 'Buffer AI', desc: 'AI features for social media scheduling.', link: 'tools/buffer-ai.html' },
        { name: 'Hootsuite AI', desc: 'AI-powered social media management.', link: 'tools/hootsuite-ai.html' },
        { name: 'Copy.ai', desc: 'AI-powered copywriting for social posts.', link: 'tools/copy-ai.html' },
        { name: 'Canva Magic Design', desc: 'AI-powered design for social graphics.', link: 'tools/canva-magic-design.html' }
    ],
    'SEO Specialist': [
        { name: 'SurferSEO', desc: 'AI for SEO optimization.', link: 'tools/surferseo.html' },
        { name: 'SEMrush AI', desc: 'AI-powered SEO and marketing analytics.', link: 'tools/semrush-ai.html' },
        { name: 'Ahrefs AI', desc: 'AI features in Ahrefs for SEO.', link: 'tools/ahrefs-ai.html' },
        { name: 'Clearscope', desc: 'AI content optimization for SEO.', link: 'tools/clearscope.html' },
        { name: 'MarketMuse', desc: 'AI content research and optimization.', link: 'tools/marketmuse.html' }
    ],
    'Copywriter': [
        { name: 'Jasper', desc: 'AI writing assistant for copywriting.', link: 'tools/jasper.html' },
        { name: 'Copy.ai', desc: 'AI-powered copywriting tool.', link: 'tools/copy-ai.html' },
        { name: 'Writesonic', desc: 'AI content generator for copy.', link: 'tools/writesonic.html' },
        { name: 'Anyword', desc: 'AI copywriting and performance prediction.', link: 'tools/anyword.html' },
        { name: 'Grammarly', desc: 'AI grammar and style checker.', link: 'tools/grammarly.html' }
    ],
    'Animator': [
        { name: 'RunwayML', desc: 'AI video and animation tools.', link: 'tools/runwayml.html' },
        { name: 'Adobe Animate AI', desc: 'AI features in Adobe Animate.', link: 'tools/adobe-animate-ai.html' },
        { name: 'DeepMotion', desc: 'AI motion capture and animation.', link: 'tools/deepmotion.html' },
        { name: 'Animaker AI', desc: 'AI-powered animation creation.', link: 'tools/animaker-ai.html' },
        { name: 'D-ID', desc: 'AI for talking avatars and animation.', link: 'tools/d-id.html' }
    ],
    'Game Developer': [
        { name: 'Inworld AI', desc: 'AI for NPCs and game dialogue.', link: 'tools/inworld-ai.html' },
        { name: 'Promethean AI', desc: 'AI for game world building.', link: 'tools/promethean-ai.html' },
        { name: 'Scenario.gg', desc: 'AI asset generation for games.', link: 'tools/scenario-gg.html' },
        { name: 'Ludo AI', desc: 'AI game ideation and research.', link: 'tools/ludo-ai.html' },
        { name: 'Unity ML-Agents', desc: 'AI for game development in Unity.', link: 'tools/unity-ml-agents.html' }
    ],
    'Biologist': [
        { name: 'AlphaFold', desc: 'AI for protein structure prediction.', link: 'tools/alphafold.html' },
        { name: 'BenchSci', desc: 'AI-powered biomedical research platform.', link: 'tools/benchsci.html' },
        { name: 'Deep Genomics', desc: 'AI for genetic medicine discovery.', link: 'tools/deep-genomics.html' },
        { name: 'Insilico Medicine', desc: 'AI for drug discovery and biology.', link: 'tools/insilico-medicine.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for research and Q&A.', link: 'tools/chatgpt.html' }
    ],
    'Chemist': [
        { name: 'IBM RXN for Chemistry', desc: 'AI for chemical reaction prediction.', link: 'tools/ibm-rxn.html' },
        { name: 'ChemAI', desc: 'AI-powered chemical data analysis.', link: 'tools/chemai.html' },
        { name: 'DeepChem', desc: 'AI toolkit for drug discovery and chemistry.', link: 'tools/deepchem.html' },
        { name: 'Chematica', desc: 'AI for synthetic route planning.', link: 'tools/chematica.html' },
        { name: 'ChemRxiv AI', desc: 'AI-powered chemistry preprint search.', link: 'tools/chemrxiv-ai.html' }
    ],
    'Physicist': [
        { name: 'Wolfram Alpha', desc: 'AI-powered computational knowledge engine.', link: 'tools/wolfram-alpha.html' },
        { name: 'DeepMind AI', desc: 'AI for scientific discovery and physics.', link: 'tools/deepmind-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for science and Q&A.', link: 'tools/chatgpt.html' },
        { name: 'SciNote AI', desc: 'AI-powered lab management and research.', link: 'tools/scinote-ai.html' },
        { name: 'IBM Quantum AI', desc: 'AI for quantum computing research.', link: 'tools/ibm-quantum-ai.html' }
    ],
    'Mathematician': [
        { name: 'Wolfram Alpha', desc: 'AI-powered computational knowledge engine.', link: 'tools/wolfram-alpha.html' },
        { name: 'Mathpix', desc: 'AI for math OCR and LaTeX conversion.', link: 'tools/mathpix.html' },
        { name: 'Symbolab AI', desc: 'AI math solver and step-by-step explanations.', link: 'tools/symbolab-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for math and Q&A.', link: 'tools/chatgpt.html' },
        { name: 'Maple AI', desc: 'AI-powered math computation and visualization.', link: 'tools/maple-ai.html' }
    ],
    'Statistician': [
        { name: 'IBM SPSS AI', desc: 'AI features in SPSS for statistics.', link: 'tools/ibm-spss-ai.html' },
        { name: 'RapidMiner AI', desc: 'AI-powered data science and analytics.', link: 'tools/rapidminer-ai.html' },
        { name: 'DataRobot', desc: 'Automated machine learning for statistics.', link: 'tools/datarobot.html' },
        { name: 'KNIME AI', desc: 'AI for data analytics and workflow automation.', link: 'tools/knime-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for statistics and Q&A.', link: 'tools/chatgpt.html' }
    ],
    'Economist': [
        { name: 'EconoML', desc: 'AI for economic modeling and causal inference.', link: 'tools/economl.html' },
        { name: 'AlphaSense', desc: 'AI-powered market intelligence and economic research.', link: 'tools/alphasense.html' },
        { name: 'Bloomberg Terminal AI', desc: 'AI features in Bloomberg Terminal for economic data.', link: 'tools/bloomberg-terminal-ai.html' },
        { name: 'Prevedere', desc: 'AI-driven economic forecasting platform.', link: 'tools/prevedere.html' },
        { name: 'Quandl AI', desc: 'AI-powered economic and financial data analytics.', link: 'tools/quandl-ai.html' }
    ],
    'Actuary': [
        { name: 'Akur8', desc: 'AI-powered insurance pricing and actuarial modeling.', link: 'tools/akur8.html' },
        { name: 'DataRobot', desc: 'Automated machine learning for actuarial analysis.', link: 'tools/datarobot.html' },
        { name: 'Emblem AI', desc: 'AI for actuarial risk modeling.', link: 'tools/emblem-ai.html' },
        { name: 'Tableau AI', desc: 'AI-powered analytics for actuarial data.', link: 'tools/tableau-ai.html' },
        { name: 'RISK AI', desc: 'AI for insurance and risk management.', link: 'tools/risk-ai.html' }
    ],
    'Marine Biologist': [
        { name: 'Wildbook AI', desc: 'AI for marine animal identification and tracking.', link: 'tools/wildbook-ai.html' },
        { name: 'OceanMind', desc: 'AI for marine conservation and monitoring.', link: 'tools/oceanmind.html' },
        { name: 'DeepSea AI', desc: 'AI-powered ocean data analysis.', link: 'tools/deepsea-ai.html' },
        { name: 'FathomNet', desc: 'AI for marine imagery and biodiversity.', link: 'tools/fathomnet.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for marine biology research.', link: 'tools/chatgpt.html' }
    ],
    'Geologist': [
        { name: 'Petro.ai', desc: 'AI for geological data and oil exploration.', link: 'tools/petro-ai.html' },
        { name: 'Seequent AI', desc: 'AI-powered geoscience modeling.', link: 'tools/seequent-ai.html' },
        { name: 'Earth AI', desc: 'AI for mineral exploration and geology.', link: 'tools/earth-ai.html' },
        { name: 'RockEval AI', desc: 'AI for rock and soil analysis.', link: 'tools/rockeval-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for geology research.', link: 'tools/chatgpt.html' }
    ],
    'Urban Planner': [
        { name: 'UrbanFootprint AI', desc: 'AI for urban planning and scenario modeling.', link: 'tools/urbanfootprint-ai.html' },
        { name: 'Spacemaker AI', desc: 'AI for urban and building design.', link: 'tools/spacemaker-ai.html' },
        { name: 'CityFormLab AI', desc: 'AI for city data and planning.', link: 'tools/cityformlab-ai.html' },
        { name: 'UrbanLogiq', desc: 'AI-powered urban analytics platform.', link: 'tools/urbanlogiq.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for urban planning.', link: 'tools/chatgpt.html' }
    ],
    'Event Planner': [
        { name: 'Allseated AI', desc: 'AI-powered event planning and visualization.', link: 'tools/allseated-ai.html' },
        { name: 'Social Tables AI', desc: 'AI for event diagramming and guest management.', link: 'tools/social-tables-ai.html' },
        { name: 'Bizzabo AI', desc: 'AI event management and analytics.', link: 'tools/bizzabo-ai.html' },
        { name: 'Zkipster AI', desc: 'AI for guest list and event check-in.', link: 'tools/zkipster-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for event planning.', link: 'tools/chatgpt.html' }
    ],
    'Chef': [
        { name: 'Plant Jammer', desc: 'AI-powered recipe generator and meal planner.', link: 'tools/plant-jammer.html' },
        { name: 'Chef Watson', desc: 'AI for creative recipe suggestions.', link: 'tools/chef-watson.html' },
        { name: 'Cookpad AI', desc: 'AI-powered cooking assistant.', link: 'tools/cookpad-ai.html' },
        { name: 'Yummly AI', desc: 'AI recipe recommendations and meal planning.', link: 'tools/yummly-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for cooking advice.', link: 'tools/chatgpt.html' }
    ],
    'Nutritionist': [
        { name: 'Nutrino AI', desc: 'AI-powered nutrition insights and meal planning.', link: 'tools/nutrino-ai.html' },
        { name: 'Suggestic', desc: 'AI for personalized nutrition guidance.', link: 'tools/suggestic.html' },
        { name: 'Foodvisor AI', desc: 'AI nutrition tracking and analysis.', link: 'tools/foodvisor-ai.html' },
        { name: 'Lumen AI', desc: 'AI for metabolic health and nutrition.', link: 'tools/lumen-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for nutrition advice.', link: 'tools/chatgpt.html' }
    ],
    'Fitness Trainer': [
        { name: 'Freeletics AI', desc: 'AI-powered fitness coaching and workouts.', link: 'tools/freeletics-ai.html' },
        { name: 'Fitbod AI', desc: 'AI workout planner and tracker.', link: 'tools/fitbod-ai.html' },
        { name: 'Aaptiv Coach', desc: 'AI fitness and wellness coaching.', link: 'tools/aaptiv-coach-ai.html' },
        { name: 'Vi Trainer AI', desc: 'AI running and fitness assistant.', link: 'tools/vi-trainer-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for fitness advice.', link: 'tools/chatgpt.html' }
    ],
    'Psychologist': [
        { name: 'Woebot', desc: 'AI-powered mental health chatbot.', link: 'tools/woebot.html' },
        { name: 'Wysa', desc: 'AI mental health support and self-care.', link: 'tools/wysa.html' },
        { name: 'Tess AI', desc: 'AI for psychological support and therapy.', link: 'tools/tess-ai.html' },
        { name: 'Replika', desc: 'AI companion for mental wellness.', link: 'tools/replika.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for psychology Q&A.', link: 'tools/chatgpt.html' }
    ],
    'Therapist': [
        { name: 'Wysa', desc: 'AI mental health support and therapy.', link: 'tools/wysa.html' },
        { name: 'Woebot', desc: 'AI-powered mental health chatbot.', link: 'tools/woebot.html' },
        { name: 'Tess AI', desc: 'AI for psychological support and therapy.', link: 'tools/tess-ai.html' },
        { name: 'Ginger AI', desc: 'AI for behavioral health coaching.', link: 'tools/ginger-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for therapy Q&A.', link: 'tools/chatgpt.html' }
    ],
    'Veterinarian': [
        { name: 'Vetology AI', desc: 'AI for veterinary radiology and diagnostics.', link: 'tools/vetology-ai.html' },
        { name: 'Petriage AI', desc: 'AI-powered pet triage and advice.', link: 'tools/petriage-ai.html' },
        { name: 'SignalPET', desc: 'AI for pet X-ray analysis.', link: 'tools/signalpet.html' },
        { name: 'Animalytics', desc: 'AI analytics for animal health.', link: 'tools/animalytics.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for veterinary questions.', link: 'tools/chatgpt.html' }
    ],
    'Pharmacist': [
        { name: 'MedWhat', desc: 'AI-powered medical and drug information.', link: 'tools/medwhat.html' },
        { name: 'Pharma.AI', desc: 'AI for drug discovery and pharmacy.', link: 'tools/pharma-ai.html' },
        { name: 'IBM Watson Health', desc: 'AI for pharmacy and healthcare.', link: 'tools/ibm-watson-health.html' },
        { name: 'MediSage AI', desc: 'AI for pharmacy education and updates.', link: 'tools/medisage-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for pharmacy Q&A.', link: 'tools/chatgpt.html' }
    ],
    'Dentist': [
        { name: 'Pearl AI', desc: 'AI for dental imaging and diagnostics.', link: 'tools/pearl-ai.html' },
        { name: 'Overjet AI', desc: 'AI-powered dental X-ray analysis.', link: 'tools/overjet-ai.html' },
        { name: 'VideaHealth', desc: 'AI for dental disease detection.', link: 'tools/videahealth.html' },
        { name: 'Denti.AI', desc: 'AI for dental charting and analysis.', link: 'tools/denti-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for dental questions.', link: 'tools/chatgpt.html' }
    ],
    'Nurse': [
        { name: 'Florence AI', desc: 'AI-powered virtual nurse assistant.', link: 'tools/florence-ai.html' },
        { name: 'Sensely', desc: 'AI for patient triage and nursing support.', link: 'tools/sensely.html' },
        { name: 'Care Angel', desc: 'AI health assistant for patient monitoring.', link: 'tools/care-angel.html' },
        { name: 'NurseLogic AI', desc: 'AI for nursing education and simulation.', link: 'tools/nurselogic-ai.html' },
        { name: 'ChatGPT', desc: 'Conversational AI for nursing Q&A.', link: 'tools/chatgpt.html' }
    ],
    'Student': [
        { name: 'ChatGPT', desc: 'Conversational AI for homework help, explanations, and study support.', link: 'tools/chatgpt.html' },
        { name: 'Grammarly', desc: 'AI grammar and writing assistant for essays and assignments.', link: 'tools/grammarly.html' },
        { name: 'Quillionz', desc: 'AI tool for generating quiz questions and study materials.', link: 'tools/quillionz.html' },
        { name: 'Otter.ai', desc: 'AI-powered transcription and note-taking for lectures.', link: 'tools/otter-ai.html' },
        { name: 'Wolfram Alpha', desc: 'AI-powered computational engine for math and science problems.', link: 'tools/wolfram-alpha.html' }
    ],
    'Journalist': [
        { name: 'ChatGPT', desc: 'Conversational AI for research, interview prep, and content drafting.', link: 'tools/chatgpt.html' },
        { name: 'Grammarly', desc: 'AI grammar and style checker for articles and reports.', link: 'tools/grammarly.html' },
        { name: 'Quillbot', desc: 'AI paraphrasing and summarization tool for rewriting and condensing news.', link: 'tools/quillbot.html' },
        { name: 'Otter.ai', desc: 'AI-powered transcription for interviews and press conferences.', link: 'tools/otter-ai.html' },
        { name: 'Primer AI', desc: 'AI for automated news summarization and real-time event monitoring.', link: 'tools/primer-ai.html' }
    ],
    'Music Producer': [
        { name: 'AIVA', desc: 'AI music composition assistant for creating original scores and tracks.', link: 'tools/aiva.html' },
        { name: 'LANDR', desc: 'AI-powered mastering and music distribution platform.', link: 'tools/landr.html' },
        { name: 'Endlesss', desc: 'Collaborative AI-powered music creation and live jamming tool.', link: 'tools/endlesss.html' },
        { name: 'Amper Music', desc: 'AI music generator for royalty-free tracks and soundscapes.', link: 'tools/amper-music.html' },
        { name: 'Magenta Studio', desc: 'Google’s AI tools for music generation and creative workflows.', link: 'tools/magenta-studio.html' }
    ],
    'Fashion Designer': [
        { name: 'Fashwell', desc: 'AI-powered visual search and trend analysis for fashion design.', link: 'tools/fashwell.html' },
        { name: 'Vue.ai', desc: 'AI for product tagging, catalog management, and design inspiration.', link: 'tools/vue-ai.html' },
        { name: 'Heuritech', desc: 'AI trend forecasting and consumer insights for fashion brands.', link: 'tools/heuritech.html' },
        { name: 'Designify', desc: 'AI tool for automating fashion design visuals and mockups.', link: 'tools/designify.html' },
        { name: 'CLO 3D', desc: 'AI-assisted 3D garment visualization and virtual prototyping.', link: 'tools/clo3d.html' }
    ],
    'Data Engineer': [
        { name: 'DataRobot', desc: 'Automated machine learning and data pipeline management.', link: 'tools/datarobot.html' },
        { name: 'Trifacta', desc: 'AI-powered data wrangling and preparation platform.', link: 'tools/trifacta.html' },
        { name: 'Paxata', desc: 'AI-driven data integration and quality management.', link: 'tools/paxata.html' },
        { name: 'Talend', desc: 'AI-enhanced data integration and ETL platform.', link: 'tools/talend.html' },
        { name: 'Alteryx', desc: 'AI-powered analytics, data prep, and automation for engineers.', link: 'tools/alteryx.html' }
    ],
    'Supply Chain Manager': [
        { name: 'Llamasoft', desc: 'AI-powered supply chain analytics and optimization platform.', link: 'tools/llamasoft.html' },
        { name: 'o9 Solutions', desc: 'AI-driven supply chain planning and forecasting.', link: 'tools/o9-solutions.html' },
        { name: 'Project44', desc: 'AI-powered supply chain visibility, real-time tracking, and predictive analytics.', link: 'tools/project44.html' },
        { name: 'Kinaxis RapidResponse', desc: 'AI-enhanced supply chain management and scenario planning.', link: 'tools/kinaxis-rapidresponse.html' },
        { name: 'Blue Yonder', desc: 'AI and ML for end-to-end supply chain optimization.', link: 'tools/blue-yonder.html' }
    ],
    'Real Estate Agent': [
        { name: 'Zillow Premier Agent', desc: 'AI-powered real estate lead generation and CRM.', link: 'tools/zillow-premier-agent.html' },
        { name: 'Revaluate', desc: 'AI for predicting real estate leads most likely to move.', link: 'tools/revaluate.html' },
        { name: 'Rex', desc: 'AI-driven real estate marketing and transaction management.', link: 'tools/rex.html' },
        { name: 'HouseCanary', desc: 'AI for property valuation and market analytics.', link: 'tools/housecanary.html' },
        { name: 'Restb.ai', desc: 'AI image recognition for real estate listings.', link: 'tools/restb-ai.html' }
    ],
    'Customer Success Manager': [
        { name: 'Gainsight', desc: 'AI-powered customer success platform for retention and growth.', link: 'tools/gainsight.html' },
        { name: 'Totango', desc: 'AI-driven customer health scoring and engagement.', link: 'tools/totango.html' },
        { name: 'ChurnZero', desc: 'AI for churn prediction and customer lifecycle management.', link: 'tools/churnzero.html' },
        { name: 'Planhat', desc: 'AI-powered customer insights and workflow automation.', link: 'tools/planhat.html' },
        { name: 'ClientSuccess', desc: 'AI tools for customer relationship management and analytics.', link: 'tools/clientsuccess.html' }
    ],
    'Operations Manager': [
        { name: 'ProcessMaker', desc: 'AI-powered workflow automation and process management.', link: 'tools/processmaker.html' },
        { name: 'Celonis', desc: 'AI-driven process mining and operational analytics.', link: 'tools/celonis.html' },
        { name: 'UiPath', desc: 'AI and RPA for business process automation.', link: 'tools/uipath.html' },
        { name: 'Kissflow', desc: 'AI-enhanced operations and workflow management.', link: 'tools/kissflow.html' },
        { name: 'Workato', desc: 'AI-powered integration and automation platform.', link: 'tools/workato.html' }
    ],
    'Mechanical Engineer': [
        { name: 'Ansys AI', desc: 'AI-powered simulation and engineering analysis.', link: 'tools/ansys-ai.html' },
        { name: 'SimScale AI', desc: 'Cloud-based engineering simulation with AI.', link: 'tools/simscale-ai.html' },
        { name: 'Autodesk Fusion 360 AI', desc: 'AI features for CAD and mechanical design.', link: 'tools/autodesk-fusion360-ai.html' },
        { name: 'Altair HyperWorks AI', desc: 'AI-driven product design and optimization.', link: 'tools/altair-hyperworks-ai.html' },
        { name: 'nTopology AI', desc: 'AI-powered generative design for engineering.', link: 'tools/ntopology-ai.html' }
    ],
    'Electrical Engineer': [
        { name: 'Cadence Cerebrus', desc: 'AI-driven chip design and EDA automation.', link: 'tools/cadence-cerebrus.html' },
        { name: 'Siemens EDA AI', desc: 'AI for electronic design automation and simulation.', link: 'tools/siemens-eda-ai.html' },
        { name: 'Altium Designer AI', desc: 'AI features for PCB design and electronics.', link: 'tools/altium-designer-ai.html' },
        { name: 'Keysight PathWave AI', desc: 'AI-powered test and measurement analytics.', link: 'tools/keysight-pathwave-ai.html' },
        { name: 'Synopsys DSO.ai', desc: 'AI for semiconductor design and optimization.', link: 'tools/synopsys-dso-ai.html' }
    ],
    'Civil Engineer': [
        { name: 'Bentley iTwin AI', desc: 'AI-powered infrastructure digital twins.', link: 'tools/bentley-itwin-ai.html' },
        { name: 'Autodesk Civil 3D AI', desc: 'AI features for civil engineering design.', link: 'tools/autodesk-civil3d-ai.html' },
        { name: 'Trimble SiteVision AI', desc: 'AI for construction site visualization.', link: 'tools/trimble-sitevision-ai.html' },
        { name: 'CityFormLab AI', desc: 'AI for city data and planning.', link: 'tools/cityformlab-ai.html' },
        { name: 'OpenRoads Designer AI', desc: 'AI-driven road and infrastructure design.', link: 'tools/openroads-designer-ai.html' }
    ],
    'Biomedical Engineer': [
        { name: 'Deep Genomics', desc: 'AI for genetic medicine discovery.', link: 'tools/deep-genomics.html' },
        { name: 'PathAI', desc: 'AI for pathology and disease detection.', link: 'tools/pathai.html' },
        { name: 'Aidoc', desc: 'AI for medical imaging and radiology.', link: 'tools/aidoc.html' },
        { name: 'Insilico Medicine', desc: 'AI for drug discovery and biology.', link: 'tools/insilico-medicine.html' },
        { name: 'Atomwise', desc: 'AI-powered drug discovery platform.', link: 'tools/atomwise.html' }
    ],
    'Social Worker': [
        { name: 'X2AI', desc: 'AI-powered mental health and support chatbots.', link: 'tools/x2ai.html' },
        { name: 'Woebot', desc: 'AI-powered mental health chatbot.', link: 'tools/woebot.html' },
        { name: 'Wysa', desc: 'AI mental health support and self-care.', link: 'tools/wysa.html' },
        { name: 'Tess AI', desc: 'AI for psychological support and therapy.', link: 'tools/tess-ai.html' },
        { name: 'Talkspace AI', desc: 'AI-enhanced online therapy and support.', link: 'tools/talkspace-ai.html' }
    ],
    'Librarian': [
        { name: 'Yewno Discover', desc: 'AI-powered knowledge discovery for libraries.', link: 'tools/yewno-discover.html' },
        { name: 'Ex Libris Alma AI', desc: 'AI features for library management.', link: 'tools/ex-libris-alma-ai.html' },
        { name: 'Clarivate Web of Science AI', desc: 'AI-powered research discovery and analytics.', link: 'tools/clarivate-web-of-science-ai.html' },
        { name: 'Semantic Scholar AI', desc: 'AI-powered academic search engine.', link: 'tools/semantic-scholar.html' },
        { name: 'OCLC Wise AI', desc: 'AI-driven library engagement and analytics.', link: 'tools/oclc-wise-ai.html' }
    ],
    'Museum Curator': [
        { name: 'CollectiveAccess AI', desc: 'Collection management and cataloging with AI-driven metadata.', link: 'tools/collectiveaccess-ai.html' },
        { name: 'MuseumPlus AI', desc: 'AI-powered museum information and workflow management.', link: 'tools/museumplus-ai.html' },
        { name: 'Articheck AI', desc: 'AI for condition reporting and conservation documentation.', link: 'tools/articheck-ai.html' },
        { name: 'Smartify', desc: 'AI-powered digital guides and visitor engagement for museums.', link: 'tools/smartify.html' },
        { name: 'Cuseum AI', desc: 'AI for digital membership, engagement, and AR experiences.', link: 'tools/cuseum-ai.html' }
    ],
    'Policy Analyst': [
        { name: 'Quorum AI', desc: 'AI-powered legislative tracking and policy analysis.', link: 'tools/quorum-ai.html' },
        { name: 'PolicyMap AI', desc: 'AI-driven data mapping and policy research.', link: 'tools/policymap-ai.html' },
        { name: 'FiscalNote AI', desc: 'AI for government relations and policy monitoring.', link: 'tools/fiscalnote-ai.html' },
        { name: 'Elicit', desc: 'AI research assistant for literature review and evidence synthesis.', link: 'tools/elicit.html' },
        { name: 'Polis AI', desc: 'AI for public opinion analysis and policy feedback.', link: 'tools/polis-ai.html' }
    ],
    'Public Relations Specialist': [
        { name: 'PRophet AI', desc: 'AI-driven media outreach and pitch prediction.', link: 'tools/prophet-ai.html' },
        { name: 'Signal AI', desc: 'AI-powered media monitoring and reputation management.', link: 'tools/signal-ai.html' },
        { name: 'Meltwater AI', desc: 'AI for social listening and PR analytics.', link: 'tools/meltwater-ai.html' },
        { name: 'Onclusive AI', desc: 'AI-driven PR performance measurement and insights.', link: 'tools/onclusive-ai.html' },
        { name: 'Lately AI', desc: 'AI-powered social media content generator for PR.', link: 'tools/lately-ai.html' }
    ],
    'Insurance Agent': [
        { name: 'Lemonade AI', desc: 'AI-powered insurance underwriting and claims.', link: 'tools/lemonade-ai.html' },
        { name: 'Shift Technology AI', desc: 'AI for insurance fraud detection and claims automation.', link: 'tools/shift-technology-ai.html' },
        { name: 'Planck AI', desc: 'AI-driven commercial insurance data and risk analysis.', link: 'tools/planck-ai.html' },
        { name: 'Akur8', desc: 'AI-powered insurance pricing and actuarial modeling.', link: 'tools/akur8.html' },
        { name: 'Emblem AI', desc: 'AI for actuarial risk modeling and insurance analytics.', link: 'tools/emblem-ai.html' }
    ],
    'Retail Manager': [
        { name: 'Afresh AI', desc: 'AI for fresh food inventory and waste reduction.', link: 'tools/afresh-ai.html' },
        { name: 'Focal Systems AI', desc: 'AI-powered shelf monitoring and retail automation.', link: 'tools/focal-systems-ai.html' },
        { name: 'Standard AI', desc: 'AI for autonomous checkout and retail analytics.', link: 'tools/standard-ai.html' },
        { name: 'Vue.ai', desc: 'AI for product tagging, personalization, and retail automation.', link: 'tools/vue-ai.html' },
        { name: 'Blue Yonder', desc: 'AI and ML for end-to-end retail supply chain optimization.', link: 'tools/blue-yonder.html' }
    ],
    'Logistics Coordinator': [
        { name: 'FourKites AI', desc: 'AI-powered supply chain visibility and predictive tracking.', link: 'tools/fourkites-ai.html' },
        { name: 'Project44', desc: 'AI-powered supply chain visibility and analytics.', link: 'tools/project44.html' },
        { name: 'Llamasoft', desc: 'AI-powered supply chain analytics and optimization.', link: 'tools/llamasoft.html' },
        { name: 'Shipwell AI', desc: 'AI for freight management and logistics automation.', link: 'tools/shipwell-ai.html' },
        { name: 'Flexport AI', desc: 'AI-driven supply chain management and logistics optimization.', link: 'tools/flexport-ai.html' }
    ]
};

// Handle form submission
const form = document.getElementById('professionForm');
const recommendationsDiv = document.getElementById('recommendations');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const profession = document.getElementById('profession').value;
    // Log profession selection to Firebase Analytics
    if (analytics) {
        if (typeof logEvent !== 'undefined') {
            logEvent(analytics, 'profession_selected', { profession: profession });
        } else if (typeof analytics.logEvent === 'function') {
            analytics.logEvent('profession_selected', { profession: profession });
        }
    }
    const tools = aiTools[profession];
    let html = `<h3 class='mb-4'>Recommended AI Tools for <span class='text-primary'>${profession}</span></h3>`;
    html += '<ul class="list-group">';
    tools.forEach(tool => {
        html += `<li class='list-group-item'>
            <strong><a href='${tool.link}' target='_blank' rel='noopener' class='tool-link' data-tool='${tool.name}'>${tool.name}</a></strong><br>
            <span class='text-muted small'>${tool.desc}</span>
        </li>`;
    });
    html += '</ul>';
    recommendationsDiv.innerHTML = html;
    recommendationsDiv.scrollIntoView({ behavior: 'smooth' });

    // Add click event listeners for tool links
    document.querySelectorAll('.tool-link').forEach(link => {
        link.addEventListener('click', function() {
            if (analytics) {
                if (typeof logEvent !== 'undefined') {
                    logEvent(analytics, 'tool_click', { tool_name: this.dataset.tool, profession: profession });
                } else if (typeof analytics.logEvent === 'function') {
                    analytics.logEvent('tool_click', { tool_name: this.dataset.tool, profession: profession });
                }
            }
        });
    });
});