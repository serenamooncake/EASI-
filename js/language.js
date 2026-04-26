var slang = navigator.language || navigator.userLanguage; 
//sprache = slang.substring(0,2);
console.log("Browser Language: " + slang)

const languages = ["es", "en","fr_BE","nl_BE","nl_NL","fr_FR","es_CL","es_AR","en_MY","en_SG","en_TH"];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const lang = urlParams.get("lang");


sprache = "es";
if (languages.includes(lang)) {
    sprache = lang;
}

console.log(sprache)


default_configuration = {
    has_poem: true,
    has_viga: false,
    show_pdf_logo: true,
    selection_color: '#C6C5C4',
    thumb_selection_rule: 'easi-selection',
    has_children_scorad: false,
    has_children_easi: false,
    has_prurigo_section: false,
    has_alopecia: false,
    has_aas: false,
}


i18n = {};



//Chinese
i18n["es"] = {};

i18n["es"]["country"] = 'zh'
i18n["es"]["has_poem"] = true
i18n["es"]["show_pdf_logo"] = true
i18n["es"]["selection_color"] = '#C6C5C4'
i18n["es"]["has_viga"] = true
i18n["es"]["has_children_scorad"] = false
i18n["es"]["has_children_easi"] = false
i18n["es"]["has_prurigo_section"] = true
i18n["es"]["has_t2"] = false
i18n["es"]["has_adct"] = false
i18n["es"]["has_salt"] = false
i18n["es"]["has_alopecia"] = false
i18n["es"]["has_aas"] = false

i18n["es"]["show_home_logos"] = true
i18n["es"]["show_only_sanofi_logo"] = true

i18n["es"]["configuration"] = default_configuration
i18n["es"]["configuration"].has_viga = true
i18n["es"]["configuration"].has_prurigo_section= true

i18n["es"]["main_title"] = "皮肤评分计算器";
i18n["es"]["ausrechnen"] = "计算";
i18n["es"]["mild_result"] = "结果";
i18n["es"]["beschreibung"] = "请在下方图像中选择受影响的身体部位，然后选择患者检测到的不同强度和症状。";
i18n["es"]["oberflache"] = "受影响面积%";
i18n["es"]["intensitat"] = "强度";
i18n["es"]["symptome"] = "症状";
i18n["es"]["schlaf"] = "睡眠障碍";
i18n["es"]["pruritus"] = "瘙痒";
i18n["es"]["area"] = "面积";

i18n["es"]["nichts"] = "无";
i18n["es"]["unbedeutend"] = "轻微";
i18n["es"]["beachtlich"] = "相当";
i18n["es"]["sehrbeachtlich"] = "非常相当";

i18n["es"]["mild"] = "轻度";
i18n["es"]["gemassigt"] = "中度";
i18n["es"]["ernst"] = "重度";
i18n["es"]["sehrernst"] = "非常重度";

i18n["es"]["beschreibung_easi"] = "请在下方选择每个身体部位的受影响百分比，然后选择患者检测到的不同症状的强度。";
i18n["es"]["beschreibung_dlqi"] = "请选择您的皮肤问题在过去一周对您生活的影响程度。为每个问题勾选相应的方框。";

i18n["es"]["kopf"] = "头部和颈部";
i18n["es"]["obere"] = "上肢";
i18n["es"]["tronk"] = "躯干";
i18n["es"]["beine"] = "下肢";

i18n["es"]["weissmachen"] = "变白";
i18n["es"]["weissmachen"] = "几乎变白";

i18n["es"]["title_dlqi_picor"] = "您的皮肤是否发痒、疼痛或刺痛？";
i18n["es"]["title_dlqi_incomodo"] = "您的皮肤问题是否让您感到尴尬或难为情？";
i18n["es"]["title_dlqi_compra"] = "您的皮肤问题是否干扰您购物或照顾家庭？";
i18n["es"]["title_dlqi_ropa"] = "您的皮肤问题是否影响了您穿的衣服？";
i18n["es"]["title_dlqi_social"] = "您的皮肤问题是否干扰了您的社交活动或休闲娱乐？";
i18n["es"]["title_dlqi_deporte"] = "您的皮肤问题是否干扰您进行运动？";
i18n["es"]["title_dlqi_trabajo"] = "您的皮肤问题是否阻止您工作或学习？";
i18n["es"]["title_dlqi_familiar"] = "您的皮肤问题是否导致您与伴侣或亲密朋友或家人出现问题？";
i18n["es"]["title_dlqi_sexo"] = "您的皮肤问题是否使您的性生活困难？";
i18n["es"]["title_dlqi_tratamiento"] = "您的皮肤治疗对您来说是否成为问题？";

i18n["es"]["dlqi_result_0_1"] = "无";
i18n["es"]["dlqi_result_2_5"] = "轻微";
i18n["es"]["dlqi_result_6_10"] = "中度";
i18n["es"]["dlqi_result_11_20"] = "相当";
i18n["es"]["dlqi_result_21_30"] = "非常相当";

i18n["es"]["<10"] = "< 10%";
i18n["es"]["10-30"] = "10-30%";
i18n["es"]["30-50"] = "30-49%";
i18n["es"]["50-70"] = "50-70%";
i18n["es"]["70-90"] = "70-90%";
i18n["es"][">90"] = "> 90%";

i18n["es"]["nada"] = "无";
i18n["es"]["poco"] = "一点";
i18n["es"]["bastante"] = "相当多";
i18n["es"]["mucho"] = "非常多";

i18n["es"]["nrs_title"] = "瘙痒NRS";
i18n["es"]["beschreibung_nrs"] = "在0（无瘙痒）到10（无法想象的瘙痒）的范围内，患者过去24小时最严重时的瘙痒程度如何？请选择一个数字。";
i18n["es"]["nrs_picor_title"] = "瘙痒程度";

i18n["es"]["beschreibung_poem"] = "请选择患者在过去一周出现以下症状的天数。对于无法回答的问题请留空。";
i18n["es"]["poem_picor_title"] = "• 因湿疹皮肤发痒多少天？";
i18n["es"]["poem_sangrado_title"] = "• 因湿疹皮肤出血多少天？";
i18n["es"]["poem_exudacion_title"] = "• 因湿疹皮肤潮湿或弄湿衣物多少天？";
i18n["es"]["poem_grietas_title"] = "• 因湿疹皮肤皲裂多少天？";
i18n["es"]["poem_descamacion_title"] = "• 因湿疹皮肤脱屑多少天？";
i18n["es"]["poem_sequedad_title"] = "• 因湿疹皮肤干燥或粗糙多少天？";
i18n["es"]["poem_sueno_title"] = "• 因湿疹影响睡眠多少个夜晚？";

i18n["es"]["ningun_dia"] = "无";
i18n["es"]["1-2_dia"] = "1-2天";
i18n["es"]["3-4_dia"] = "3-4天";
i18n["es"]["5-6_dia"] = "5-6天";
i18n["es"]["todos_dia"] = "每天";

i18n["es"]["pdf_title"] = "EASI-SCORAD 结果";
i18n["es"]["pdf_generated_date"] = "报告生成日期：";
i18n["es"]["pdf_surface_affected"] = "受影响体表面积百分比";
i18n["es"]["pdf_dlqi_info"] = "您的皮肤问题在过去一周对您生活的影响程度：";
i18n["es"]["pdf_dlqi_values"] = ["无", "一点", "相当多", "非常多"];
i18n["es"]["pdf_easi_values"] = ["< 10%","10-30%","30-49%","50-70%","70-90%","> 90%"];
i18n["es"]["print_page"] = "versions/ZH/print.html";

i18n["es"]["info_page"] = "versions/ZH/TJDosis_Info.html";
i18n["es"]["info_title"] = "皮肤评分计算器";
i18n["es"]["info_terms_button"] = "使用条款";
i18n["es"]["terms_page"] = "versions/ZH/TJDosis_terminos.html";

i18n["es"]["derma_section"] = "成人特应性皮炎";
i18n["es"]["prurigo_section"] = "结节性痒疹";

i18n["es"]["scorad_title"] = "SCORAD";
i18n["es"]["easi_title"] = "EASI";
i18n["es"]["viga_page_title"] = "vIGA-AD™";
i18n["es"]["dlqi_page_title"] = "DLQI";
i18n["es"]["nrs_page_title"] = "NRS";
i18n["es"]["poem_title"] = "POEM";

i18n["es"]["beschreibung_viga"] = "请选择整体评估等级。";
i18n["es"]["viga_title"] = "整体评估";
i18n["es"]["viga_clara"] = "清除";
i18n["es"]["viga_casi"] = "几乎清除";
i18n["es"]["viga_leve"] = "轻度";
i18n["es"]["viga_moderada"] = "中度";
i18n["es"]["viga_grave"] = "重度";
i18n["es"]["viga_clara_info"] = "无特应性皮炎体征";
i18n["es"]["viga_casi_info"] = "几乎无特应性皮炎体征";
i18n["es"]["viga_leve_info"] = "轻微特应性皮炎体征";
i18n["es"]["viga_moderada_info"] = "中度特应性皮炎体征";
i18n["es"]["viga_grave_info"] = "严重特应性皮炎体征";

i18n["es"]["beschreibung_pct"] = "请在0（无瘙痒）到10（无法想象的瘙痒）的范围内，选择过去24小时最严重时的瘙痒程度。";
i18n["es"]["pct_picor_title"] = "瘙痒峰值";

i18n["es"]["pct_title"] = "PCT";
i18n["es"]["pct_page_title"] = "PCT";
i18n["es"]["pct_controlled"] = "控制良好的瘙痒症";
i18n["es"]["pct_uncontrolled"] = "未控制的瘙痒症";
i18n["es"]["pct_description"] = "您患有引起瘙痒的疾病（瘙痒症）。以下问题旨在评估您目前的疾病状态。请仔细阅读每个问题，并从五个选项中选择最适合您情况的答案。回答时请仅考虑过去两周的情况。";
i18n["es"]["pct_title_1"] = "1. 总体而言，过去两周您的皮肤病变严重程度如何？";
i18n["es"]["pct_title_2"] = "2. 过去两周，您因皮肤疾病需要抓挠的频率如何？";
i18n["es"]["pct_title_3"] = "3. 过去两周，您的皮肤疾病让您无法正常入睡的频率如何？";
i18n["es"]["pct_title_4"] = "4. 过去两周，您的皮肤疾病在多大程度上影响了您的生活质量？";
i18n["es"]["pct_title_5"] = "5. 过去两周，您的治疗在多大程度上控制了您的皮肤疾病？";
i18n["es"]["pct_options_1"] = "非常严重,严重,中度,轻度,无皮肤病变";
i18n["es"]["pct_options_2"] = "非常频繁,频繁,有时,很少,完全无";
i18n["es"]["pct_options_3"] = "非常频繁,频繁,有时,很少,完全无";
i18n["es"]["pct_options_4"] = "非常严重,严重,有些,轻微,完全无";
i18n["es"]["pct_options_5"] = "完全无,轻微,有些,良好,非常好";

i18n["es"]["beschreibung_t2"] = "请回答以下关于您的症状的问题。";

i18n["es"]["erythema"] = "红斑";
i18n["es"]["edema"] = "水肿";
i18n["es"]["excoriation"] = "抓痕";
i18n["es"]["lichenification"] = "苔藓样变";
i18n["es"]["costras"] = "渗出/结痂";
i18n["es"]["xerosis"] = "干燥";

i18n["es"]["scorad-after-body"] = "SCORAD 评分范围为 0 到 103，分数越高表示疾病越严重。";


//English
i18n["en"] = {};

//i18n["en"]["main_title"] = "Calculadora<br>EASI-SCORAD"

//i18n["en"]["erythema"] = "Eritema"
i18n["en"]["edema"] = "Edema"
i18n["en"]["excoriation"] = "Excoriación"
i18n["en"]["lichenification"] = "Linquenificación"

i18n["en"] = {};

i18n["en"]["country"] = 'gb'
i18n["en"]["has_poem"] = true
i18n["en"]["show_pdf_logo"] = true
i18n["en"]["selection_color"] = '#C6C5C4'
i18n["en"]["configuration"] = default_configuration
i18n["en"]["has_children_scorad"] = false
i18n["en"]["has_children_easi"] = false
i18n["en"]["has_t2"] = false

i18n["en"]["ausrechnen"] = "Calculate";
i18n["en"]["mild_result"] = "Result";
i18n["en"]["beschreibung"] = "Select the parts of the body affected in the images below and then select the different intensities and symptoms detected in the patient.";
i18n["en"]["oberflache"] = "% of surface affected"
i18n["en"]["intensitat"] = "Intensity"
i18n["en"]["symptome"] = "Symptoms"
i18n["en"]["schlaf"] = "Sleep disorder"
i18n["en"]["pruritus"] = "Pruritus"
i18n["en"]["area"] = "Area"

i18n["en"]["mild"] = "Low"
i18n["en"]["gemassigt"] = "Moderate"
i18n["en"]["ernst"] = "Serious"
i18n["en"]["sehrernst"] = "Very serious"

i18n["en"]["beschreibung_easi"] = "For each body part, select the percentage of surface area affected in the sections below and then the intensity of the different symptoms detected in the patient."
i18n["en"]["kopf"] = "Head and neck"
i18n["en"]["obere"] = "Upper limbs"
i18n["en"]["tronk"] = "Trunk"
i18n["en"]["beine"] = "Lower limbs"

i18n["en"]["beschreibung_dlqi"] = "The aim of this questionnaire is to measure how much your skin problem has affected your life OVER THE LAST WEEK. Please tick one box for each question."

i18n["en"]["weissmachen"] = "Blanqueado"
i18n["en"]["weissmachen"] = "Casi blanqueado"

i18n["en"]["erythema"] = "Erythema"
i18n["en"]["edema"] = "Edema"
i18n["en"]["excoriation"] = "Excoriation"
i18n["en"]["lichenification"] = "Lichenification"
i18n["en"]["costras"] = "Oozing/cursts"
i18n["en"]["xerosis"] = "Dryness"


i18n["en"]["main_title"] = "EASI-SCORAD<br>Calculator"


i18n["en"]["title_dlqi_picor"] = "Over the last week, how itchy, sore, painful or stinging has your skin been?"
i18n["en"]["title_dlqi_incomodo"] = "Over the last week, how embarrassed or self conscious have you been because of your skin?"
i18n["en"]["title_dlqi_compra"] = "Over the last week, how much has your skin interfered with you going shopping or looking after your home or garden?"
i18n["en"]["title_dlqi_ropa"] = "Over the last week, how much has your skin influenced the clothes you wear?"
i18n["en"]["title_dlqi_social"] = "Over the last week, how much has your skin affected any social or leisure activities?"
i18n["en"]["title_dlqi_deporte"] = "Over the last week, how much has your skin made it difficult for you to do any sport?"
i18n["en"]["title_dlqi_trabajo"] = "Over the last week, has your skin prevented you from working or studying?"
i18n["en"]["title_dlqi_familiar"] = "Over the last week, how much has your skin created problems with your partner or any of your close friends or relatives?"
i18n["en"]["title_dlqi_sexo"] = "Over the last week, how much has your skin caused any sexual difficulties?"
i18n["en"]["title_dlqi_tratamiento"] = "Over the last week, how much of a problem has the treatment for your skin been, for example by making your home messy, or by taking up time?"

i18n["en"]["<10"] = "1 -<br/> 9%"
i18n["en"]["10-30"] = "10 - 29%"
i18n["en"]["30-50"] = "30 - 49%"
i18n["en"]["50-70"] = "50 - 69%"
i18n["en"]["70-90"] = "70 - 89%"
i18n["en"][">90"] = "90 - 100%"

i18n["en"]["nada"] = "Not at all"
i18n["en"]["poco"] = "A little"
i18n["en"]["bastante"] = "A lot"
i18n["en"]["mucho"] = "Very much"

i18n["en"]["beschreibung_nrs"] = "On scale from 0 (no itch) to 10 (worst imaginable itch), how was your worst itch in the past 24 hours? Please select a number."
i18n["en"]["nrs_picor_title"] = "Itching degree"


i18n["en"]["beschreibung_poem"] = "Please select one response for each of the seven questions below. Young children should complete the questionnaire with the help of their parents. Please leave blank any questions you feel unable to answer."
i18n["en"]["poem_picor_title"] = "• Over the last week, on how many days has your/your child's skin been itchy because of the eczema?"
i18n["en"]["poem_sangrado_title"] = "• Over the last week, on how many nights has your/your child's sleep been disturbed because of the eczema?"
i18n["en"]["poem_exudacion_title"] = "• Over the last week, on how many days has your/your child's skin been bleeding because of the eczema?"
i18n["en"]["poem_grietas_title"] = "• Over the last week, on how many days has your/your child's skin been weeping or oozing clear fluid because of the eczema?"
i18n["en"]["poem_descamacion_title"] = "• Over the last week, on how many days has your/your child's skin been cracked because of the eczema?"
i18n["en"]["poem_sequedad_title"] = "• Over the last week, on how many days has your/your child's skin been flaking off because of the eczema?"
i18n["en"]["poem_sueno_title"] = "• Over the last week, on how many days has your/your child's skin felt dry or rough because of the eczema?"

i18n["en"]["ningun_dia"] = "No days"
i18n["en"]["1-2_dia"] = "1 - 2 days"
i18n["en"]["3-4_dia"] = "3 - 4 days"
i18n["en"]["5-6_dia"] = "5 - 6 days"
i18n["en"]["todos_dia"] = "Every day"

i18n["en"]["pdf_title"] = "EASI-SCORAD RESULTS"
i18n["en"]["pdf_generated_date"] = "Report generated on "
i18n["en"]["pdf_surface_affected"] = "Percentage of body surface affected"
i18n["en"]["pdf_dlqi_info"] = "How much your skin problem has affected your life OVER THE LAST WEEK:"
i18n["en"]["pdf_dlqi_values"] = ["Not at all", "A little", "A lot", "Very much"]
i18n["en"]["pdf_easi_values"] = ["1 - 9%","10 - 29%","30 - 49%","50 - 69%","70 - 89%","90 - 100%"]

i18n["en"]["derma_section"] = "Atopic Dermatitis"


//BELGIUM - FRENCN
i18n["fr_BE"] = {main_title:"Calculatrice"}
i18n["fr_BE"]["has_poem"] = false
i18n["fr_BE"]["show_pdf_logo"] = false
i18n["fr_BE"]["selection_color"] = '#73A208' //'#008064'
i18n["fr_BE"]["configuration"] = default_configuration
i18n["fr_BE"]["country"] = 'be'
i18n["fr_BE"]["has_children_scorad"] = true
i18n["fr_BE"]["has_children_easi"] = true
i18n["fr_BE"]["has_t2"] = false

i18n["fr_BE"]["easi_children"] = "Ce patient a-t-il moins de 7 ans ?"
i18n["fr_BE"]["scorad_children"] = "Ce patient a-t-il moins de 2 ans ?"

i18n["fr_BE"]["ausrechnen"] = "Calculer";
i18n["fr_BE"]["mild_result"] = "Résultat";
i18n["fr_BE"]["beschreibung"] = "Sélectionnez les parties du corps touchées sur les images ci-dessous, puis les différents cas d’intensité et les symptômes détectés chez le (la) patient(e)";
i18n["fr_BE"]["oberflache"] = "% de surface touchée"
i18n["fr_BE"]["intensitat"] = "Intensité"
i18n["fr_BE"]["symptome"] = "Symptômes"
i18n["fr_BE"]["schlaf"] = "Troubles du sommeil"
i18n["fr_BE"]["pruritus"] = "Prurit"
i18n["fr_BE"]["area"] = "Surface"

i18n["fr_BE"]["mild"] = "Léger"
i18n["fr_BE"]["gemassigt"] = "Modéré"
i18n["fr_BE"]["ernst"] = "Sévère"
i18n["fr_BE"]["sehrernst"] = "Very serious"

i18n["fr_BE"]["nichts"] = "Rien"
i18n["fr_BE"]["unbedeutend"] = "Insignifiant"
i18n["fr_BE"]["beachtlich"] = "Considérable"
i18n["fr_BE"]["sehrbeachtlich"] = "Très considérable"

i18n["fr_BE"]["beschreibung_easi"] = "Sélectionnez le % de chaque partie du corps touchée ci-dessous, puis l'intensité des différents symptômes détectés chez le (la) patient(e)."
i18n["fr_BE"]["kopf"] = "Tête et cou"
i18n["fr_BE"]["obere"] = "Membres supérieurs"
i18n["fr_BE"]["tronk"] = "Tronc"
i18n["fr_BE"]["beine"] = "Membres inférieurs"

i18n["fr_BE"]["erythema"] = "Érythème"
i18n["fr_BE"]["edema"] = "Œdème ou papules"
i18n["fr_BE"]["excoriation"] = "Excoriation"
i18n["fr_BE"]["lichenification"] = "Lichénification"
i18n["fr_BE"]["costras"] = "Exsudation/croûtes"
i18n["fr_BE"]["xerosis"] = "Xérose"

i18n["fr_BE"]["<10"] = "1 -<br/> 9%"
i18n["fr_BE"]["10-30"] = "10 -\n 29%"
i18n["fr_BE"]["30-50"] = "30 -\n 49%"
i18n["fr_BE"]["50-70"] = "50 -\n69%"
i18n["fr_BE"]["70-90"] = "70 -\n 89%"
i18n["fr_BE"][">90"] = "90 -\n 100%"

i18n["fr_BE"]["nada"] = "Pas du tout"
i18n["fr_BE"]["poco"] = "Un peu"
i18n["fr_BE"]["bastante"] = "Beaucoup"
i18n["fr_BE"]["mucho"] = "Énormément"

i18n["fr_BE"]["beschreibung_dlqi"] = "Au cours des 7 derniers jours, ..."
i18n["fr_BE"]["title_dlqi_picor"] = "Votre peau vous a-t-elle démangé(e), fait souffrir ou brûlé(e) ?"
i18n["fr_BE"]["title_dlqi_incomodo"] = "Vous êtes-vous senti(e) gêné(e) ou complexé(e) par votre problème de peau ?"
i18n["fr_BE"]["title_dlqi_compra"] = "Votre problème de peau vous a-t-il gêné(e) pour faire des courses, vous occuper de votre maison ou pour jardiner ?"
i18n["fr_BE"]["title_dlqi_ropa"] = "Votre problème de peau vous a-t-il influencé(e) dans le choix de vos vêtements que vous portiez ?"
i18n["fr_BE"]["title_dlqi_social"] = "Votre problème de peau a-t-il affecté vos activités avec les autres ou vos loisirs ?"
i18n["fr_BE"]["title_dlqi_deporte"] = "Avez-vous eu du mal à faire du sport à cause de votre problème de peau ?"
i18n["fr_BE"]["title_dlqi_trabajo"] = "Votre problème de peau vous a-t-il complètement empêché de travailler ou étudier ?"
i18n["fr_BE"]["title_dlqi_familiar"] = "Votre problème de peau a-t-il rendu difficile vos relations avec votre conjoint(e), vos amis ou votre famille ?"
i18n["fr_BE"]["title_dlqi_sexo"] = "Votre problème de peau a-t-il rendu votre vie sexuelle difficile ?"
i18n["fr_BE"]["title_dlqi_tratamiento"] = "Le traitement que vous utilisez pour votre peau a-t-il été un problème par exemple en prenant trop de votre temps ou en salissant votre maison ?"

i18n["fr_BE"]["dlqi_result_0_1"] = "Rien";
i18n["fr_BE"]["dlqi_result_2_5"] = "Insignifiant";
i18n["fr_BE"]["dlqi_result_6_10"] = "Modéré";
i18n["fr_BE"]["dlqi_result_11_20"] = "Considérable";
i18n["fr_BE"]["dlqi_result_21_30"] = "Très considérable";


i18n["fr_BE"]["beschreibung_nrs"] = "Sur une échelle de 0 à 10, comment évalueriez-vous (en moyenne) votre prurit au cours des 24 dernières heures ? Sachant que 0 correspond à “aucune gène due au prurit” et que 10 correspond à une “gêne insupportable“ ? Veuillez choisir une seule réponse"
i18n["fr_BE"]["nrs_picor_title"] = "Degré de démangeaison"


i18n["fr_BE"]["pdf_title"] = "RÉSULTATS"
i18n["fr_BE"]["pdf_generated_date"] = "Rapport généré le "
i18n["fr_BE"]["pdf_surface_affected"] = "Pourcentage de surface corporelle affectée "
i18n["fr_BE"]["pdf_dlqi_info"] = "Au cours des 7 derniers jours, ..."
i18n["fr_BE"]["pdf_dlqi_values"] = ["Pas du tout", "Un peu", "Beaucoup", "Énormément"]
i18n["fr_BE"]["pdf_easi_values"] = ["1 - 9%","10 - 29%","30 - 49%","50 - 69%","70 - 89%","90 - 100%"]
i18n["fr_BE"]["print_page"] = "versions/BE/print_fr.html"

i18n["fr_BE"]["info_page"] = "versions/BE/TJDosis_Info_fr.html"
i18n["fr_BE"]["info_title"] = "Calculatrice EASI-SCORAD"
i18n["fr_BE"]["info_terms_button"] = "CONDITIONS D’UTILISATION"
i18n["fr_BE"]["terms_page"] = "versions/BE/TJDosis_terminos_fr.html"

i18n["fr_BE"]["derma_section"] = "Dermatite atopique"


//BELGIUM - DUTCH
i18n["nl_BE"] = {main_title:"Rekenmachine"}
i18n["nl_BE"]["has_poem"] = false
i18n["nl_BE"]["show_pdf_logo"] = false
i18n["nl_BE"]["selection_color"] = '#73A208' //'#008064'

i18n["nl_BE"]["configuration"] = default_configuration
i18n["nl_BE"]["configuration"]["image_selection_color"] = '#02835f'
i18n["nl_BE"]["country"] = 'be'

i18n["nl_BE"]["easi_children"] = "Is deze patiënt jonger dan 7 jaar?"
i18n["nl_BE"]["scorad_children"] = "Is deze patiënt jonger dan 2 jaar?"

i18n["nl_BE"]["has_children_scorad"] = true
i18n["nl_BE"]["has_children_easi"] = true
i18n["nl_BE"]["has_t2"] = false

i18n["nl_BE"]["ausrechnen"] = "Berekenen";
i18n["nl_BE"]["mild_result"] = "Resultaat";
i18n["nl_BE"]["beschreibung"] = "Selecteer de aangetaste lichaamsdelen in onderstaande afbeeldingen en vervolgens de verschillende gradaties in ernst van de waargenomen symptomen bij de patiënt";
i18n["nl_BE"]["oberflache"] = "% aangetast oppervlak"
i18n["nl_BE"]["intensitat"] = "Gradaties"
i18n["nl_BE"]["symptome"] = "Symptomen"
i18n["nl_BE"]["schlaf"] = "Slaapstoornissen"
i18n["nl_BE"]["pruritus"] = "Pruritus"
i18n["nl_BE"]["area"] = "Oppervlakte"

i18n["nl_BE"]["mild"] = "Mild"
i18n["nl_BE"]["gemassigt"] = "Matig"
i18n["nl_BE"]["ernst"] = "Ernstig"
i18n["nl_BE"]["sehrernst"] = "Very serious"

i18n["nl_BE"]["nichts"] = "Niets"
i18n["nl_BE"]["unbedeutend"] = "Onbelangrijk"
i18n["nl_BE"]["beachtlich"] = "Aanzienlijk"
i18n["nl_BE"]["sehrbeachtlich"] = "Heel aanzienlijk"

i18n["nl_BE"]["beschreibung_easi"] = "Selecteer het percentage aangetast oppervlak voor elk lichaamsdeel in onderstaande paragrafen en vervolgens de ernst van de verschillende symptomen waargenomen bij de patiënt."
i18n["nl_BE"]["kopf"] = "Hoofd en hals"
i18n["nl_BE"]["obere"] = "Bovenste extremiteiten"
i18n["nl_BE"]["tronk"] = "Romp"
i18n["nl_BE"]["beine"] = "Onderste extremiteiten"

i18n["nl_BE"]["erythema"] = "Erytheem"
i18n["nl_BE"]["edema"] = "Oedeem/papel"
i18n["nl_BE"]["excoriation"] = "Excoriatie"
i18n["nl_BE"]["lichenification"] = "Lichenificatie"
i18n["nl_BE"]["costras"] = "Exsudaat/Korstvorming"
i18n["nl_BE"]["xerosis"] = "Xerosis"

i18n["nl_BE"]["<10"] = "1 -<br/> 9% "
i18n["nl_BE"]["10-30"] = "10 -\n 29%"
i18n["nl_BE"]["30-50"] = "30 -\n 49%"
i18n["nl_BE"]["50-70"] = "50 -\n69%"
i18n["nl_BE"]["70-90"] = "70 -\n 89%"
i18n["nl_BE"][">90"] = "90 -\n 100%"

i18n["nl_BE"]["nada"] = "Geheel niet"
i18n["nl_BE"]["poco"] = "Een beetje"
i18n["nl_BE"]["bastante"] = "Veel"
i18n["nl_BE"]["mucho"] = "Heel veel"

i18n["nl_BE"]["beschreibung_dlqi"] = "Gedurende de afgelopen 7 dagen"
i18n["nl_BE"]["title_dlqi_picor"] = "Hoe jeukerig, pijnlijk of branderig was uw huid?"
i18n["nl_BE"]["title_dlqi_incomodo"] = "In welke mate heeft u zich vanwege uw huid beschaamd of ongemakkelijk gevoeld?"
i18n["nl_BE"]["title_dlqi_compra"] = "In welke mate heeft uw huid u gehinderd bij het winkelen of het werken in uw huis of tuin?"
i18n["nl_BE"]["title_dlqi_ropa"] = "In welke mate heeft uw huid invloed gehad op de kleren die u droeg?"
i18n["nl_BE"]["title_dlqi_social"] = "In welke mate heeft uw huid invloed gehad op uw sociale activiteiten of vrijetijdsbesteding?"
i18n["nl_BE"]["title_dlqi_deporte"] = "In welke mate heeft uw huid u bemoeilijkt om te sporten?"
i18n["nl_BE"]["title_dlqi_trabajo"] = "In welke mate heeft uw huid u ervan weerhouden om te werken of studeren?"
i18n["nl_BE"]["title_dlqi_familiar"] = "In welke mate heeft uw huid problemen veroorzaakt in de relatie met uw partner, goede vrienden of familie?"
i18n["nl_BE"]["title_dlqi_sexo"] = "In welke mate heeft uw huid voor seksuele problemen gezorgd?"
i18n["nl_BE"]["title_dlqi_tratamiento"] = "In welke mate is de behandeling van uw huid een probleem geweest, bijvoorbeeld omdat de behandeling veel tijd kost of doordat uw huid er vies van wordt?"

i18n["nl_BE"]["dlqi_result_0_1"] = "Niets";
i18n["nl_BE"]["dlqi_result_2_5"] = "Onbelangrijk";
i18n["nl_BE"]["dlqi_result_6_10"] = "Matig";
i18n["nl_BE"]["dlqi_result_11_20"] = "Aanzienlijk";
i18n["nl_BE"]["dlqi_result_21_30"] = "Heel aanzienlijk";

i18n["nl_BE"]["beschreibung_nrs"] = "Hoe beoordeelt u (gemiddeld) op een schaal van 0 tot 10 uw jeuk in de voorbije 24 uur als u weet dat 0 overeenkomt met “helemaal niet gestoord“ en 10 met “uitgesproken gestoord“, waardoor slapen onmogelijk was? Selecteer op nummer"
i18n["nl_BE"]["nrs_picor_title"] = "Graad van jeuken"


i18n["nl_BE"]["pdf_title"] = "RESULTATEN"
i18n["nl_BE"]["pdf_generated_date"] = "Rapport gegenereerd op "
i18n["nl_BE"]["pdf_surface_affected"] = "Percentage aangetast lichaamsoppervlak"
i18n["nl_BE"]["pdf_dlqi_info"] = "Gedurende de afgelopen 7 dagen:"
i18n["nl_BE"]["pdf_dlqi_values"] = ["Geheel niet", "Een beetje", "Veel", "Heel veel"]
i18n["nl_BE"]["pdf_easi_values"] = ["1 - 9%","10 - 29%","30 - 49%","50 - 69%","70 - 89%","90 - 100%"]
i18n["nl_BE"]["print_page"] = "versions/BE/print_nl.html"

i18n["nl_BE"]["info_page"] = "versions/BE/TJDosis_Info_nl.html"
i18n["nl_BE"]["info_title"] = "Rekenmachine EASI-SCORAD"
i18n["nl_BE"]["info_terms_button"] = "GEBRUIKSVOORWAARDEN"
i18n["nl_BE"]["terms_page"] = "versions/BE/TJDosis_terminos_nl.html"

i18n["nl_BE"]["derma_section"] = "Atopische dermatitis"


//NETHERLANDS DUTCH
i18n["nl_NL"] = {main_title:"Rekenmachine"}
i18n["nl_NL"]["has_poem"] = false
i18n["nl_NL"]["show_pdf_logo"] = false
i18n["nl_NL"]["selection_color"] = '#73A208' //'#008064'
i18n["nl_NL"]["has_viga"] = true
i18n["nl_NL"]["has_adct"] = true
i18n["nl_NL"]["show_home_logos"] = true
i18n["nl_NL"]["has_children_scorad"] = false
i18n["nl_NL"]["has_children_easi"] = false
i18n["nl_NL"]["has_t2"] = false


i18n["nl_NL"]["configuration"] = default_configuration
i18n["nl_NL"]["configuration"]["image_selection_color"] = '#02835f'
i18n["nl_NL"]["country"] = 'nl'

i18n["nl_NL"]["ausrechnen"] = "Berekenen";
i18n["nl_NL"]["mild_result"] = "Resultaat";
i18n["nl_NL"]["beschreibung"] = "Selecteer de aangetaste lichaamsdelen in onderstaande afbeeldingen en vervolgens de verschillende gradaties in ernst van de waargenomen symptomen bij de patiënt";
i18n["nl_NL"]["oberflache"] = "% aangetast oppervlak"
i18n["nl_NL"]["intensitat"] = "Gradaties"
i18n["nl_NL"]["symptome"] = "Symptomen"
i18n["nl_NL"]["schlaf"] = "Slaapstoornissen"
i18n["nl_NL"]["pruritus"] = "Pruritus"
i18n["nl_NL"]["area"] = "Oppervlakte"

i18n["nl_NL"]["mild"] = "Mild"
i18n["nl_NL"]["gemassigt"] = "Matig"
i18n["nl_NL"]["ernst"] = "Ernstig"
i18n["nl_NL"]["sehrernst"] = "Very serious"

i18n["nl_NL"]["nichts"] = "Niets"
i18n["nl_NL"]["unbedeutend"] = "Onbelangrijk"
i18n["nl_NL"]["beachtlich"] = "Aanzienlijk"
i18n["nl_NL"]["sehrbeachtlich"] = "Heel aanzienlijk"

i18n["nl_NL"]["beschreibung_easi"] = "Selecteer het percentage aangetast oppervlak voor elk lichaamsdeel in onderstaande paragrafen en vervolgens de ernst van de verschillende symptomen waargenomen bij de patiënt."
i18n["nl_NL"]["kopf"] = "Hoofd en hals"
i18n["nl_NL"]["obere"] = "Bovenste extremiteiten"
i18n["nl_NL"]["tronk"] = "Romp"
i18n["nl_NL"]["beine"] = "Onderste extremiteiten"

i18n["nl_NL"]["erythema"] = "Erytheem"
i18n["nl_NL"]["edema"] = "Oedeem/papel"
i18n["nl_NL"]["excoriation"] = "Excoriatie"
i18n["nl_NL"]["lichenification"] = "Lichenificatie"
i18n["nl_NL"]["costras"] = "Exsudaat/Korstvorming"
i18n["nl_NL"]["xerosis"] = "Xerosis"

i18n["nl_NL"]["<10"] = "1 -<br/> 9% "
i18n["nl_NL"]["10-30"] = "10 -\n 29%"
i18n["nl_NL"]["30-50"] = "30 -\n 49%"
i18n["nl_NL"]["50-70"] = "50 -\n69%"
i18n["nl_NL"]["70-90"] = "70 -\n 89%"
i18n["nl_NL"][">90"] = "90 -\n 100%"

i18n["nl_NL"]["nada"] = "Geheel niet"
i18n["nl_NL"]["poco"] = "Een beetje"
i18n["nl_NL"]["bastante"] = "Veel"
i18n["nl_NL"]["mucho"] = "Heel veel"

i18n["nl_NL"]["beschreibung_dlqi"] = "Gedurende de afgelopen 7 dagen"
i18n["nl_NL"]["title_dlqi_picor"] = "Hoe jeukerig, pijnlijk of branderig was uw huid?"
i18n["nl_NL"]["title_dlqi_incomodo"] = "In welke mate heeft u zich vanwege uw huid beschaamd of ongemakkelijk gevoeld?"
i18n["nl_NL"]["title_dlqi_compra"] = "In welke mate heeft uw huid u gehinderd bij het winkelen of het werken in uw huis of tuin?"
i18n["nl_NL"]["title_dlqi_ropa"] = "In welke mate heeft uw huid invloed gehad op de kleren die u droeg?"
i18n["nl_NL"]["title_dlqi_social"] = "In welke mate heeft uw huid invloed gehad op uw sociale activiteiten of vrijetijdsbesteding?"
i18n["nl_NL"]["title_dlqi_deporte"] = "In welke mate heeft uw huid u bemoeilijkt om te sporten?"
i18n["nl_NL"]["title_dlqi_trabajo"] = "In welke mate heeft uw huid u ervan weerhouden om te werken of studeren?"
i18n["nl_NL"]["title_dlqi_familiar"] = "In welke mate heeft uw huid problemen veroorzaakt in de relatie met uw partner, goede vrienden of familie?"
i18n["nl_NL"]["title_dlqi_sexo"] = "In welke mate heeft uw huid voor seksuele problemen gezorgd?"
i18n["nl_NL"]["title_dlqi_tratamiento"] = "In welke mate is de behandeling van uw huid een probleem geweest, bijvoorbeeld omdat de behandeling veel tijd kost of doordat uw huid er vies van wordt?"

i18n["nl_NL"]["beschreibung_nrs"] = "Hoe beoordeelt u (gemiddeld) op een schaal van 0 tot 10 uw jeuk in de voorbije 24 uur als u weet dat 0 overeenkomt met “helemaal niet gestoord“ en 10 met “uitgesproken gestoord“, waardoor slapen onmogelijk was? Selecteer op nummer"
i18n["nl_NL"]["nrs_picor_title"] = "Graad van jeuken"


i18n["nl_NL"]["pdf_title"] = "RESULTATEN"
i18n["nl_NL"]["pdf_generated_date"] = "Rapport gegenereerd op "
i18n["nl_NL"]["pdf_surface_affected"] = "Percentage aangetast lichaamsoppervlak"
i18n["nl_NL"]["pdf_dlqi_info"] = "Gedurende de afgelopen 7 dagen:"
i18n["nl_NL"]["pdf_dlqi_values"] = ["Geheel niet", "Een beetje", "Veel", "Heel veel"]
i18n["nl_NL"]["pdf_easi_values"] = ["1 - 9%","10 - 29%","30 - 49%","50 - 69%","70 - 89%","90 - 100%"]
i18n["nl_NL"]["print_page"] = "versions/NL/print_nl.html"

i18n["nl_NL"]["info_page"] = "versions/NL/TJDosis_Info_nl.html"
i18n["nl_NL"]["info_title"] = "Rekenmachine EASI-SCORAD"
i18n["nl_NL"]["info_terms_button"] = "GEBRUIKSVOORWAARDEN"
i18n["nl_NL"]["terms_page"] = "versions/NL/TJDosis_terminos_nl.html"
i18n["nl_NL"]["accept"] = "Accepteren"
i18n["nl_NL"]["disclaimer_title"] = "Gebruiksvoorwaarden en het Privacystatement"

i18n["nl_NL"]["beschreibung_adct"] = "De ADCT (Aopic Dermatitis Control Tool) is gevalideerd voor gebruik bij volwassenen en adolescente patiënten (12 jaar en ouder) met atopisch eczeem.<br>Om de ADCT op de juiste manier te gebruiken, moet uw patiënt de zes ADCT-vragen beantwoorden en het meest toepasselijke antwoord kiezen.<br>Beantwoord de volgende vragen, waarbij u uw ervaringen met atopisch eczeem, ook wel “atopische dermatitis” genoemd, in gedachten houdt:"
i18n["nl_NL"]["adct_title_1"] = "1. Hoe zou u uw symptomen in verband met uw eczeem in de afgelopen week beschrijven?"
i18n["nl_NL"]["adct_title_2"] = "2. Op hoeveel dagen had u de afgelopen week last van intense jeukaanvallen als gevolg van uw eczeem?"
i18n["nl_NL"]["adct_title_3"] = "3. Hoeveel hinder had u de afgelopen week van uw eczeem?"
i18n["nl_NL"]["adct_title_4"] = "4. Hoeveel nachten had u de afgelopen week moeite met in slaap vallen of in slaap blijven als gevolg van uw eczeem?"
i18n["nl_NL"]["adct_title_5"] = "5. In welke mate had uw eczeem de afgelopen week invloed op uw dagelijkse activiteiten?"
i18n["nl_NL"]["adct_title_6"] = "6. In hoeverre had uw eczeem de afgelopen week invloed op uw stemming of emoties?"

i18n["nl_NL"]["adct_none"] = "Geen"
i18n["nl_NL"]["adct_mild"] = "Mild"
i18n["nl_NL"]["adct_moderate"] = "Matig"
i18n["nl_NL"]["adct_severe"] = "Ernstig"
i18n["nl_NL"]["adct_very_severe"] = "Zeer ernstig"



i18n["nl_NL"]["no_days"] = "Geen dagen"
i18n["nl_NL"]["1-2_dia"] = "1 - 2 dagen"
i18n["nl_NL"]["3-4_dia"] = "3 - 4 dagen"
i18n["nl_NL"]["5-6_dia"] = "5 - 6 dagen"
i18n["nl_NL"]["todos_dia"] = "Elke dag"

i18n["nl_NL"]["not_at_all"] = "Geen"
i18n["nl_NL"]["a_little"] = "Een beetje"
i18n["nl_NL"]["moderately"] = "Matig"
i18n["nl_NL"]["very"] = "Veel"
i18n["nl_NL"]["extremely"] = "Extreem veel"
i18n["nl_NL"]["a_lot"] = "Veel"

i18n["nl_NL"]["no_nights"] = "Geen nachten"
i18n["nl_NL"]["1-2_nights"] = "1 - 2 nachten"
i18n["nl_NL"]["3-4_nights"] = "3 - 4 nachten"
i18n["nl_NL"]["5-6_nights"] = "5 - 6 nachten"
i18n["nl_NL"]["every_night"] = "Elke nacht"

//5 & 6
i18n["nl_NL"]["adct_5_1"] = "Geen"
i18n["nl_NL"]["adct_5_2"] = "Een beetje"
i18n["nl_NL"]["adct_5_3"] = "Matig"
i18n["nl_NL"]["adct_5_4"] = "Veel"
i18n["nl_NL"]["adct_5_5"] = "Extreem veel"

i18n["nl_NL"]["adct_notes"] = "IINTERPRETATIE VAN DE TOTALE ADCT-SCORE"
i18n["nl_NL"]["adct_point_title"] = "HUIDIGE BEHEERSINGSSTATUS"
i18n["nl_NL"]["adct_point_text"] = "Een hogere score duidt op een lagere beheersing van atopisch eczeem<br><br>De beheersing van atopisch eczeem van de patiënt kan als onvoldoende worden beoordeeld als:<br><br>• de totale ADCT-score 7 punten of meer bedraagt<br>"
i18n["nl_NL"]["adct_changes_title"] = "VERANDERINGEN IN DE BEHEERSINGSSTATUS IN DE LOOP VAN DE TIJD"
i18n["nl_NL"]["adct_changes_text"] = "Een wijziging van 5 punten is de drempel voor een significante verandering bij een persoon<br><br>• Daling van 5 punten of meer: indicatie van klinisch relevante verbetering van beheersing van atopisch eczeem<br>• Stijging van 5 punten of meer: indicatie van klinisch relevante verslechtering van beheersing van atopisch eczeem"

i18n["nl_NL"]["adct_well_controlled"] = "Beoordeeld"
i18n["nl_NL"]["adct_not_well_controlled"] = "Onvoldoende beoordeeld"

i18n["nl_NL"]["derma_section"] = "Atopisch eczeem"


//FRANCE - FRENCH
i18n["fr_FR"] = {main_title:"Calculatrice<span class='subtitle'><br>Scores d'évaluation de la dermatite atopique</span>"}
i18n["fr_FR"]["has_poem"] = false
i18n["fr_FR"]["show_pdf_logo"] = false
i18n["fr_FR"]["selection_color"] = '#7079BD' //'#008064'
i18n["fr_FR"]["configuration"] = default_configuration
i18n["fr_FR"]["country"] = 'fr'
i18n["fr_FR"]["has_adct"] = true
i18n["fr_FR"]["job_code"] = "7000040303 - 11/2022";
i18n["fr_FR"]["has_children_scorad"] = false
i18n["fr_FR"]["has_children_easi"] = false
i18n["fr_FR"]["has_t2"] = false

i18n["fr_FR"]["tooltip_12"] = "<p class=\"text\">1. Hanifin JM, Thurson M, Omoto M, et al. The eczema area and severity index (EASI): assessment of reliability in atopic dermatitis. Exp Dermatol. 2001;10:11-18.</p><bras<p class=\"text\">2. Images provided by Dr. Esther Serra, Hospital de Sant Pau i Santa Creu de Barcelona and the Sanofi Genzyme and Regeneron Patient Photo Catalog</p>";

i18n["fr_FR"]["export_tooltip"] = "Génère une page<br>de résultats imprimable."

i18n["fr_FR"]["scorad_title"] = "SCORAD ⁽²⁾⁽⁴⁾";
i18n["fr_FR"]["ausrechnen"] = "Calculer";
i18n["fr_FR"]["mild_result"] = "Résultat";
i18n["fr_FR"]["beschreibung"] = "Sélectionnez les parties du corps touchées sur les images ci-dessous, puis les différents cas d’intensité et les signes observés chez le (la) patient(e)";
i18n["fr_FR"]["scorad-after-body"] = "Echelle de 0 à 103, scores croissants avec la sévérité de la maladie.";
i18n["fr_FR"]["oberflache"] = "% de surface touchée"
i18n["fr_FR"]["intensitat"] = "Intensité"
i18n["fr_FR"]["symptome"] = "Symptômes"
i18n["fr_FR"]["schlaf"] = "Troubles du sommeil"
i18n["fr_FR"]["pruritus"] = "Prurit"
i18n["fr_FR"]["area"] = "Surface"

i18n["fr_FR"]["mild"] = "Léger"
i18n["fr_FR"]["gemassigt"] = "Modéré"
i18n["fr_FR"]["ernst"] = "Sévère"
i18n["fr_FR"]["sehrernst"] = "Very serious"

i18n["fr_FR"]["nichts"] = "Rien"
i18n["fr_FR"]["unbedeutend"] = "Insignifiant"
i18n["fr_FR"]["beachtlich"] = "Important"
i18n["fr_FR"]["sehrbeachtlich"] = "Très important"

i18n["fr_FR"]["easi_title"] = "EASI ⁽¹⁾⁽²⁾";
i18n["fr_FR"]["beschreibung_easi"] = "Sélectionnez le % de chaque partie du corps touchée ci-dessous, puis l'intensité des différents symptômes observés chez le (la) patient(e)."
i18n["fr_FR"]["img_head"] = "img/easi_cap_fr.png";
i18n["fr_FR"]["img_arms"] = "img/easi_brazos_fr.png";
i18n["fr_FR"]["img_trunk"] = "img/easi_tronco_fr.png";
i18n["fr_FR"]["img_legs"] = "img/easi_piernas_fr.png";

i18n["fr_FR"]["kopf"] = "Tête et cou"
i18n["fr_FR"]["obere"] = "Membres supérieurs"
i18n["fr_FR"]["tronk"] = "Tronc"
i18n["fr_FR"]["beine"] = "Membres inférieurs"

i18n["fr_FR"]["erythema"] = "Érythème"
i18n["fr_FR"]["edema"] = "Œdème ou papules"
i18n["fr_FR"]["excoriation"] = "Excoriation"
i18n["fr_FR"]["lichenification"] = "Lichénification"
i18n["fr_FR"]["costras"] = "Exsudation/croûtes"
i18n["fr_FR"]["xerosis"] = "Xérose"

i18n["fr_FR"]["<10"] = "1 -<br/> 9%"
i18n["fr_FR"]["10-30"] = "10 -\n 29%"
i18n["fr_FR"]["30-50"] = "30 -\n 49%"
i18n["fr_FR"]["50-70"] = "50 -\n69%"
i18n["fr_FR"]["70-90"] = "70 -\n 89%"
i18n["fr_FR"][">90"] = "90 -\n 100%"

i18n["fr_FR"]["nada"] = "Pas du tout"
i18n["fr_FR"]["poco"] = "Un peu"
i18n["fr_FR"]["bastante"] = "Beaucoup"
i18n["fr_FR"]["mucho"] = "Énormément"

i18n["fr_FR"]["dlqi_page_title"] = "DLQI ⁽⁶⁾"
i18n["fr_FR"]["beschreibung_dlqi"] = "Au cours des 7 derniers jours, ..."
i18n["fr_FR"]["title_dlqi_picor"] = "Votre peau vous a-t-elle démangé(e), fait souffrir ou brûlé(e) ?"
i18n["fr_FR"]["title_dlqi_incomodo"] = "Vous êtes-vous senti(e) gêné(e) ou complexé(e) par votre problème de peau ?"
i18n["fr_FR"]["title_dlqi_compra"] = "Votre problème de peau vous a-t-il gêné(e) pour faire des courses, vous occuper de votre maison ou pour jardiner ?"
i18n["fr_FR"]["title_dlqi_ropa"] = "Votre problème de peau vous a-t-il influencé(e) dans le choix de vos vêtements que vous portiez ?"
i18n["fr_FR"]["title_dlqi_social"] = "Votre problème de peau a-t-il affecté vos activités avec les autres ou vos loisirs ?"
i18n["fr_FR"]["title_dlqi_deporte"] = "Avez-vous eu du mal à faire du sport à cause de votre problème de peau ?"
i18n["fr_FR"]["title_dlqi_trabajo"] = "Votre problème de peau vous a-t-il complètement empêché de travailler ou étudier ?"
i18n["fr_FR"]["title_dlqi_familiar"] = "Votre problème de peau a-t-il rendu difficile vos relations avec votre conjoint(e), vos amis ou votre famille ?"
i18n["fr_FR"]["title_dlqi_sexo"] = "Votre problème de peau a-t-il rendu votre vie sexuelle difficile ?"
i18n["fr_FR"]["title_dlqi_tratamiento"] = "Le traitement que vous utilisez pour votre peau a-t-il été un problème par exemple en prenant trop de votre temps ou en salissant votre maison ?"

i18n["fr_FR"]["dlqi_result_0_1"] = "Aucun effet sur la vie du patient";
i18n["fr_FR"]["dlqi_result_2_5"] = "Faible effet sur la vie du patient";
i18n["fr_FR"]["dlqi_result_6_10"] = "Effet modéré sur la vie du patient";
i18n["fr_FR"]["dlqi_result_11_20"] = "Effet important sur la vie du patient";
i18n["fr_FR"]["dlqi_result_21_30"] = "Effet extrêmement important sur la vie du patient";


i18n["fr_FR"]["nrs_page_title"] = "NRS ⁽⁵⁾"
i18n["fr_FR"]["beschreibung_nrs"] = "Sur une échelle de 0 à 10, comment évalueriez-vous (en moyenne) votre prurit au cours des 24 dernières heures ? Sachant que 0 correspond à “aucune gène due au prurit” et que 10 correspond à une “gêne insupportable“ ? Veuillez choisir une seule réponse"
i18n["fr_FR"]["nrs_picor_title"] = "Degré de prurit"


i18n["fr_FR"]["pdf_title"] = "RÉSULTATS"
i18n["fr_FR"]["pdf_generated_date"] = "Rapport généré le "
i18n["fr_FR"]["pdf_surface_affected"] = "Pourcentage de surface corporelle affectée "
i18n["fr_FR"]["pdf_dlqi_info"] = "Au cours des 7 derniers jours, ..."
i18n["fr_FR"]["pdf_dlqi_values"] = ["Pas du tout", "Un peu", "Beaucoup", "Énormément"]
i18n["fr_FR"]["pdf_easi_values"] = ["1 - 9%","10 - 29%","30 - 49%","50 - 69%","70 - 89%","90 - 100%"]
i18n["fr_FR"]["print_page"] = "versions/FR/print_fr.html"

i18n["fr_FR"]["info_page"] = "versions/FR/TJDosis_Info_fr.html"
i18n["fr_FR"]["info_title"] = "Calculatrice EASI-SCORAD"
i18n["fr_FR"]["info_terms_button"] = "CONDITIONS D’UTILISATION"
i18n["fr_FR"]["terms_page"] = "versions/FR/TJDosis_terminos_fr.html"


i18n["fr_FR"]["adct_title"] = "ADCT ⁽³⁾";
i18n["fr_FR"]["beschreibung_adct"] = "L’ADCT (Atopic Dermatitis Control Tool) est le premier score dédié, développé et validé par des dermatologues, pour évaluer le contrôle de la dermatite atopique.<br>Ce score peut être réalisé directement avec vous ou par le patient lui-même.<br>Veuillez répondre aux questions suivantes:"
i18n["fr_FR"]["adct_title_1"] = "1. Au cours de la semaine dernière, comment évalueriez-vous vos symptômes liés à l’eczéma (p. ex., démangeaisons, sécheresse et irritations cutanées) ?"
i18n["fr_FR"]["adct_title_2"] = "2. Au cours de la dernière semaine, pendant combien de jours avez-vous eu des <b>épisodes intenses de démangeaisons</b> à cause de votre eczéma ?"
i18n["fr_FR"]["adct_title_3"] = "3. Au cours de la dernière semaine, à quel point avez-vous été <b>gêné(e)</b> par votre eczéma ?"
i18n["fr_FR"]["adct_title_4"] = "4. Au cours de la dernière semaine, pendant combien de nuits avez-vous eu des <b>difficultés à vous endormir ou à rester endormi(e)</b> à cause de votre eczéma ?"
i18n["fr_FR"]["adct_title_5"] = "5. Au cours de la semaine dernière, votre eczéma at-il eu des <b>conséquences sur vos activités quotidiennes</b> ?"
i18n["fr_FR"]["adct_title_6"] = "6. Au cours de la semaine dernière, à quel point votre eczéma a-t-il eu des <b>conséquences sur votre humeur ou vos émotions</b> ?"

i18n["fr_FR"]["adct_none"] = "Aucun symptôme"
i18n["fr_FR"]["adct_mild"] = "Symptômes légers"
i18n["fr_FR"]["adct_moderate"] = "Symptômes modérés"
i18n["fr_FR"]["adct_severe"] = "Symptômes sévères"
i18n["fr_FR"]["adct_very_severe"] = "Symptômes très sévères"

i18n["fr_FR"]["no_days"] = "Aucun jour"
i18n["fr_FR"]["1-2_dia"] = "1 à 2 jours"
i18n["fr_FR"]["3-4_dia"] = "3 à 4 jours"
i18n["fr_FR"]["5-6_dia"] = "5 à 6 jours "
i18n["fr_FR"]["todos_dia"] = "Tous les jours"

i18n["fr_FR"]["not_at_all"] = "Aucune gêne"
i18n["fr_FR"]["a_little"] = "Gêne légère"
i18n["fr_FR"]["moderately"] = "Gêne modérée"
i18n["fr_FR"]["very"] = "Gêne importante"
i18n["fr_FR"]["extremely"] = "Gêne extrêmement importante"
i18n["fr_FR"]["a_lot"] = "Veel"

i18n["fr_FR"]["no_nights"] = "Aucune nuit"
i18n["fr_FR"]["1-2_nights"] = "1 à 2 nuits"
i18n["fr_FR"]["3-4_nights"] = "3 à 4 nuits"
i18n["fr_FR"]["5-6_nights"] = "5 à 6 nuits"
i18n["fr_FR"]["every_night"] = "Toutes les nuits"

//5 & 6
i18n["fr_FR"]["adct_5_1"] = "Aucune conséquence"
i18n["fr_FR"]["adct_5_2"] = "Conséquences légères"
i18n["fr_FR"]["adct_5_3"] = "Conséquences modérées"
i18n["fr_FR"]["adct_5_4"] = "Conséquences importantes"
i18n["fr_FR"]["adct_5_5"] = "Conséquences extrêmement importantes"

i18n["fr_FR"]["adct_notes"] = "EN PRATIQUE"
i18n["fr_FR"]["adct_point_title"] = "CALCUL DU SCORE :"
i18n["fr_FR"]["adct_point_text"] = "ADCT :<br><br>Étape 1 : Chaque question est notée de 0 à 4.<br>Étape 2 : La somme des scores des 6 questions forme le score total ADCT.<br><br>Le score minimum est de 0, le score maximum est de 24."
i18n["fr_FR"]["adct_changes_title"] = "INTERPRETATION DU SCORE TOTAL ADCT :"
i18n["fr_FR"]["adct_changes_text"] = "La DA de votre patient peut être inadéquatement contrôlée si :<br><br>- Son score ADCT total est au moins égal à 7 OU<br>- Son score ADCT total a augmenté de 5 points ou plus depuis la dernière utilisation de l’ADCT"

i18n["fr_FR"]["adct_well_controlled"] = "DA bien contrôlée"
i18n["fr_FR"]["adct_not_well_controlled"] = "DA inadéquatement contrôlée"

i18n["fr_FR"]["derma_section"] = "Dermatite atopique"


// CHILE
i18n["es_CL"] = {};

i18n["es_CL"]["country"] = 'cl'
i18n["es_CL"]["has_poem"] = true
i18n["es_CL"]["show_pdf_logo"] = true
i18n["es_CL"]["selection_color"] = '#7079BD'
i18n["es_CL"]["has_viga"] = false
i18n["es_CL"]["has_adct"] = true
i18n["es_CL"]["has_children_scorad"] = true
i18n["es_CL"]["has_children_easi"] = true
i18n["es_CL"]["show_home_logos"] = true
i18n["es_CL"]["show_only_sanofi_logo"] = true
i18n["es_CL"]["has_t2"] = false

i18n["es_CL"]["scorad_children"] = "El paciente es menor de 2 años de edad?"
i18n["es_CL"]["easi_children"] = "El paciente es menor de 8 años de edad?"

i18n["es_CL"]["export_tooltip"] = "Genera un página<br>de resultados imprimible."

i18n["es_CL"]["configuration"] = default_configuration
i18n["es_CL"]["configuration"].has_viga = false
i18n["es_CL"]["configuration"].has_children_scorad = true
i18n["es_CL"]["configuration"].has_children_easi = true

i18n["es_CL"]["main_title"] = "Calculadora<br><br>EASI-SCORAD"
i18n["es_CL"]["ausrechnen"] = "Calcular";
i18n["es_CL"]["mild_result"] = "Resultado";
i18n["es_CL"]["beschreibung"] = "Seleccione las partes del cuerpo afectadas en las imágenes inferiores y a continuación los diferentes casos de intensidad y síntomas detectados en el/la paciente.";
i18n["es_CL"]["oberflache"] = "%superfície afectada"
i18n["es_CL"]["intensitat"] = "Intensidad"
i18n["es_CL"]["symptome"] = "Síntomas"
i18n["es_CL"]["schlaf"] = "Trastorno del sueño"
i18n["es_CL"]["pruritus"] = "Prurito"
i18n["es_CL"]["area"] = "Area"

i18n["es_CL"]["nichts"] = "Nada"
i18n["es_CL"]["unbedeutend"] = "Insignificante"
i18n["es_CL"]["beachtlich"] = "Considerable"
i18n["es_CL"]["sehrbeachtlich"] = "Muy considerable"

i18n["es_CL"]["mild"] = "Leve"
i18n["es_CL"]["gemassigt"] = "Moderado"
i18n["es_CL"]["ernst"] = "Grave"
i18n["es_CL"]["sehrernst"] = "Muy grave"

i18n["es_CL"]["beschreibung_easi"] = "Seleccione el % afectado de cada parte del cuerpo en los apartados inferiores y a continuación la intensidad de los diferentes síntomas detectados en el/la paciente."
i18n["es_CL"]["beschreibung_dlqi"] = "Seleccione en qué medida, su problema de piel ha afectado a su vida durante la última semana. Marque la casilla correspondiente para cada pregunta."

i18n["es_CL"]["kopf"] = "Cabeza y cuello"
i18n["es_CL"]["obere"] = "Extremidades superiores"
i18n["es_CL"]["tronk"] = "Tronco"
i18n["es_CL"]["beine"] = "Piernas"

i18n["es_CL"]["img_head"] = "img/easi_cap_fr.png";
i18n["es_CL"]["img_arms"] = "img/easi_brazos_fr.png";
i18n["es_CL"]["img_trunk"] = "img/easi_tronco_fr.png";
i18n["es_CL"]["img_legs"] = "img/easi_piernas_fr.png";

i18n["es_CL"]["weissmachen"] = "Blanqueado"
i18n["es_CL"]["weissmachen"] = "Casi blanqueado"

i18n["es_CL"]["title_dlqi_picor"] = "¿Ha tenido prurito, dolor o escozor en su piel?"
i18n["es_CL"]["title_dlqi_incomodo"] = "¿Ha sentido vergüenza a causa de sus problemas de piel?"
i18n["es_CL"]["title_dlqi_compra"] = "¿Sus problemas de piel le han interferido en ir de compras o cuidar de la casa?"
i18n["es_CL"]["title_dlqi_ropa"] = "¿Sus problemas de piel le han interferido en la ropa que se ha puesto?"
i18n["es_CL"]["title_dlqi_social"] = "¿Sus problemas de piel le han interferido en alguna actividad social o de tiempo libre?"
i18n["es_CL"]["title_dlqi_deporte"] = "¿Sus problemas de piel le han interferido en practicar algún deporte?"
i18n["es_CL"]["title_dlqi_trabajo"] = "¿Sus problemas de piel le han interferido e han impedido trabajar o estudiar?"
i18n["es_CL"]["title_dlqi_familiar"] = "¿Sus problemas de piel le han interferido le han causado problemas con su pareja o con algún amigo/a íntimo/a o familiar?"
i18n["es_CL"]["title_dlqi_sexo"] = "¿Sus problemas de piel le han interferido han dificultado su vida sexual?"
i18n["es_CL"]["title_dlqi_tratamiento"] = "¿El tratamiento de su piel ha sido un problema para usted?"

i18n["es_CL"]["dlqi_result_0_1"] = "Nada";
i18n["es_CL"]["dlqi_result_2_5"] = "Insignificante";
i18n["es_CL"]["dlqi_result_6_10"] = "Moderado";
i18n["es_CL"]["dlqi_result_11_20"] = "Considerable";
i18n["es_CL"]["dlqi_result_21_30"] = "Muy considerable";

i18n["es_CL"]["<10"] = "< del 10%"
i18n["es_CL"]["10-30"] = "de 10 a 30%"
i18n["es_CL"]["30-50"] = "de 30 a 49%"
i18n["es_CL"]["50-70"] = "de 50 a 70%"
i18n["es_CL"]["70-90"] = "de 70 - 90%"
i18n["es_CL"][">90"] = "> del 90%"



i18n["es_CL"]["nada"] = "Nada"
i18n["es_CL"]["poco"] = "Un poco"
i18n["es_CL"]["bastante"] = "Mucho"
i18n["es_CL"]["mucho"] = "Muchísimo"

i18n["es_CL"]["nrs_title"] = "Prurito NRS"
i18n["es_CL"]["beschreibung_nrs"] = "En una escala de 0 (sin prurito) a 10 (prurito inimaginable), ¿cómo fue el prurito del paciente en el peor momento en las últimas 24h? Por favor seleccione un número."
i18n["es_CL"]["nrs_picor_title"] = "Grado de prurito"

i18n["es_CL"]["beschreibung_poem"] = "Seleccione cuantos días, durante la última semana, el paciente ha presentado los siguientes síntomas. Deje en blanco las preguntas que no pueda responder."
i18n["es_CL"]["poem_picor_title"] = "• ¿Cuántos días ha tenido prurito a causa del eccema?"
i18n["es_CL"]["poem_sangrado_title"] = "• ¿Cuántos días le ha sangrado la piel a causa del eccema?"
i18n["es_CL"]["poem_exudacion_title"] = "• ¿Cuántos días el eccema estuvo húmedo o mojó la ropa?"
i18n["es_CL"]["poem_grietas_title"] = "• ¿Cuántos días se ha agrietado la piel por el eccema?"
i18n["es_CL"]["poem_descamacion_title"] = "• ¿Cuántos días se ha descamado la piel a causa del eccema?"
i18n["es_CL"]["poem_sequedad_title"] = "• ¿Cuántos días ha estado la piel seca o áspera a causa del eccema?"
i18n["es_CL"]["poem_sueno_title"] = "• ¿Cuántas noches se ha alterado el sueño a causa del eccema?"
i18n["es_CL"]["ningun_dia"] = "Ningún día"
i18n["es_CL"]["no_days"] = "Ningún día"
i18n["es_CL"]["1-2_dia"] = "1-2 días"
i18n["es_CL"]["3-4_dia"] = "3-4 días"
i18n["es_CL"]["5-6_dia"] = "5-6 días"
i18n["es_CL"]["todos_dia"] = "Todos los días"

i18n["es_CL"]["pdf_title"] = "RESULTADOS EASI-SCORAD"
i18n["es_CL"]["pdf_generated_date"] = "Informe generado el "
i18n["es_CL"]["pdf_surface_affected"] = "Porcentaje de superfície corporal afectada"
i18n["es_CL"]["pdf_dlqi_info"] = "En qué medida, su problema de piel ha afectado a su vida durante la última semana:"
i18n["es_CL"]["pdf_dlqi_values"] = ["Nada", "Un poco", "Mucho", "Muchísimo"]
i18n["es_CL"]["pdf_easi_values"] = ["< 10%","de 10 a 30%","de 30 a 49%","de 50 a 70%","de 70 - 90%","> del 90%"]
i18n["es_CL"]["print_page"] = "versions/CL/print.html"

i18n["es_CL"]["info_page"] = "versions/CL/TJDosis_Info.html"
i18n["es_CL"]["info_title"] = "Calculadora EASI-SCORAD"
i18n["es_CL"]["info_terms_button"] = "CONDICIONES DE USO"
i18n["es_CL"]["terms_page"] = "versions/CL/TJDosis_terminos.html"


i18n["es_CL"]["adct_title"] = "ADCT";
i18n["es_CL"]["beschreibung_adct"] = "Cuestionario para evaluar el control de la Dermatitis Atópica (ADCT).<br>Por favor responda las siguientes preguntas acerca de su experiencia con su eccema, también llamado dermatitis atópica."
i18n["es_CL"]["adct_title_1"] = "1. Durante la última semana, ¿cómo calificaría sus síntomas relacionados con el eccema (por ejemplo: picazón, piel seca, erupción)?"
i18n["es_CL"]["adct_title_2"] = "2. Durante la última semana, ¿cuántos días tuvo episodios intensos de picazón debido al eccema?"
i18n["es_CL"]["adct_title_3"] = "3. Durante la última semana, ¿cuánto lo ha fastidiado (molestado) su eccema?"
i18n["es_CL"]["adct_title_4"] = "4. Durante la última semana, ¿cuántas noches tuvo problemas para conciliar el sueño o permanecer dormido debido a su eccema?"
i18n["es_CL"]["adct_title_5"] = "5. Durante la última semana, ¿cuánto ha afectado el eccema sus actividades diarias?"
i18n["es_CL"]["adct_title_6"] = "6. Durante la última semana, ¿cuánto ha afectado el eccema su estado de ánimo o sus emociones?"

i18n["es_CL"]["adct_none"] = "Ningunos"
i18n["es_CL"]["adct_mild"] = "Leves"
i18n["es_CL"]["adct_moderate"] = "Moderados"
i18n["es_CL"]["adct_severe"] = "Severos"
i18n["es_CL"]["adct_very_severe"] = "Muy severos"



i18n["es_CL"]["not_at_all"] = "Nada"
i18n["es_CL"]["a_little"] = "Un poco"
i18n["es_CL"]["moderately"] = "Moderada-mente"
i18n["es_CL"]["very"] = "Mucho"
i18n["es_CL"]["extremely"] = "Extremada-mente"
i18n["es_CL"]["a_lot"] = "Veel"

i18n["es_CL"]["no_nights"] = "Ningun día"
i18n["es_CL"]["1-2_nights"] = "1-2 noches"
i18n["es_CL"]["3-4_nights"] = "3-4 noches"
i18n["es_CL"]["5-6_nights"] = "5-6 noches"
i18n["es_CL"]["every_night"] = "Todas las noches"

//5 & 6
i18n["es_CL"]["adct_5_1"] = "Nada"
i18n["es_CL"]["adct_5_2"] = "Un poco"
i18n["es_CL"]["adct_5_3"] = "Moderada-mente"
i18n["es_CL"]["adct_5_4"] = "Mucho"
i18n["es_CL"]["adct_5_5"] = "Extremada-mente"

i18n["es_CL"]["adct_notes"] = "INTERPRETACIÓN DEL PUNTAJE TOTAL DEL ADCT"
i18n["es_CL"]["adct_point_title"] = "ESTADO DE CONTROL EN UN MOMENTO DADO:"
i18n["es_CL"]["adct_point_text"] = "Un puntaje más alto indica un menor control de la DA.<br><br>Es posible que no haya un control adecuado de la DA de un paciente si:<br>• El puntaje total del ADCT es de 7 puntos o más"
i18n["es_CL"]["adct_changes_title"] = "CAMBIOS EN EL ESTADO DEL CONTROL EN EL TRANSCURSO DEL TIEMPO"
i18n["es_CL"]["adct_changes_text"] = "Un cambio de 5 puntos es el umbral para un cambio significativo en una persona.<br><br>• Disminución de 5 puntos o más: indica una mejoría de relevancia clínica en el control de la DA.<br>• Aumento de 5 puntos o más: indica un empeoramiento de relevancia clínica en el control de la DA"

i18n["es_CL"]["adct_well_controlled"] = "Control adecuado"
i18n["es_CL"]["adct_not_well_controlled"] = "Control no adecuado"

i18n["es_CL"]["derma_section"] = "Dermatitis Atópica"


// ARGENTINA
i18n["es_AR"] = {};

i18n["es_AR"]["country"] = 'ar'
i18n["es_AR"]["has_poem"] = true
i18n["es_AR"]["show_pdf_logo"] = true
i18n["es_AR"]["selection_color"] = '#7079BD'
i18n["es_AR"]["has_viga"] = false
i18n["es_AR"]["has_adct"] = true
i18n["es_AR"]["has_children_scorad"] = true
i18n["es_AR"]["has_children_easi"] = true
i18n["es_AR"]["show_home_logos"] = true
i18n["es_AR"]["show_only_sanofi_logo"] = true
i18n["es_AR"]["has_t2"] = false

i18n["es_AR"]["scorad_children"] = "El paciente es menor de 2 años de edad?"
i18n["es_AR"]["easi_children"] = "El paciente es menor de 8 años de edad?"

i18n["es_AR"]["export_tooltip"] = "Genera un página<br>de resultados imprimible."

i18n["es_AR"]["configuration"] = default_configuration
i18n["es_AR"]["configuration"].has_viga = false
i18n["es_AR"]["configuration"].has_children_scorad = true
i18n["es_AR"]["configuration"].has_children_easi = true

i18n["es_AR"]["main_title"] = "Calculadora<br><br>EASI-SCORAD"
i18n["es_AR"]["ausrechnen"] = "Calcular";
i18n["es_AR"]["mild_result"] = "Resultado";
i18n["es_AR"]["beschreibung"] = "Seleccione las partes del cuerpo afectadas en las imágenes inferiores y a continuación los diferentes casos de intensidad y síntomas detectados en el/la paciente.";
i18n["es_AR"]["oberflache"] = "%superfície afectada"
i18n["es_AR"]["intensitat"] = "Intensidad"
i18n["es_AR"]["symptome"] = "Síntomas"
i18n["es_AR"]["schlaf"] = "Trastorno del sueño"
i18n["es_AR"]["pruritus"] = "Prurito"
i18n["es_AR"]["area"] = "Area"

i18n["es_AR"]["nichts"] = "Nada"
i18n["es_AR"]["unbedeutend"] = "Insignificante"
i18n["es_AR"]["beachtlich"] = "Considerable"
i18n["es_AR"]["sehrbeachtlich"] = "Muy considerable"

i18n["es_AR"]["mild"] = "Leve"
i18n["es_AR"]["gemassigt"] = "Moderado"
i18n["es_AR"]["ernst"] = "Grave"
i18n["es_AR"]["sehrernst"] = "Muy grave"

i18n["es_AR"]["beschreibung_easi"] = "Seleccione el % afectado de cada parte del cuerpo en los apartados inferiores y a continuación la intensidad de los diferentes síntomas detectados en el/la paciente."
i18n["es_AR"]["beschreibung_dlqi"] = "Seleccione en qué medida, su problema de piel ha afectado a su vida durante la última semana. Marque la casilla correspondiente para cada pregunta."

i18n["es_AR"]["kopf"] = "Cabeza y cuello"
i18n["es_AR"]["obere"] = "Extremidades superiores"
i18n["es_AR"]["tronk"] = "Tronco"
i18n["es_AR"]["beine"] = "Piernas"

i18n["es_AR"]["img_head"] = "img/easi_cap_fr.png";
i18n["es_AR"]["img_arms"] = "img/easi_brazos_fr.png";
i18n["es_AR"]["img_trunk"] = "img/easi_tronco_fr.png";
i18n["es_AR"]["img_legs"] = "img/easi_piernas_fr.png";

i18n["es_AR"]["weissmachen"] = "Blanqueado"
i18n["es_AR"]["weissmachen"] = "Casi blanqueado"

i18n["es_AR"]["title_dlqi_picor"] = "¿Ha tenido prurito, dolor o escozor en su piel?"
i18n["es_AR"]["title_dlqi_incomodo"] = "¿Ha sentido vergüenza a causa de sus problemas de piel?"
i18n["es_AR"]["title_dlqi_compra"] = "¿Sus problemas de piel le han interferido en ir de compras o cuidar de la casa?"
i18n["es_AR"]["title_dlqi_ropa"] = "¿Sus problemas de piel le han interferido en la ropa que se ha puesto?"
i18n["es_AR"]["title_dlqi_social"] = "¿Sus problemas de piel le han interferido en alguna actividad social o de tiempo libre?"
i18n["es_AR"]["title_dlqi_deporte"] = "¿Sus problemas de piel le han interferido en practicar algún deporte?"
i18n["es_AR"]["title_dlqi_trabajo"] = "¿Sus problemas de piel le han interferido e han impedido trabajar o estudiar?"
i18n["es_AR"]["title_dlqi_familiar"] = "¿Sus problemas de piel le han interferido le han causado problemas con su pareja o con algún amigo/a íntimo/a o familiar?"
i18n["es_AR"]["title_dlqi_sexo"] = "¿Sus problemas de piel le han interferido han dificultado su vida sexual?"
i18n["es_AR"]["title_dlqi_tratamiento"] = "¿El tratamiento de su piel ha sido un problema para usted?"

i18n["es_AR"]["dlqi_result_0_1"] = "Nada";
i18n["es_AR"]["dlqi_result_2_5"] = "Insignificante";
i18n["es_AR"]["dlqi_result_6_10"] = "Moderado";
i18n["es_AR"]["dlqi_result_11_20"] = "Considerable";
i18n["es_AR"]["dlqi_result_21_30"] = "Muy considerable";

i18n["es_AR"]["<10"] = "< del 10%"
i18n["es_AR"]["10-30"] = "de 10 a 30%"
i18n["es_AR"]["30-50"] = "de 30 a 49%"
i18n["es_AR"]["50-70"] = "de 50 a 70%"
i18n["es_AR"]["70-90"] = "de 70 - 90%"
i18n["es_AR"][">90"] = "> del 90%"



i18n["es_AR"]["nada"] = "Nada"
i18n["es_AR"]["poco"] = "Un poco"
i18n["es_AR"]["bastante"] = "Mucho"
i18n["es_AR"]["mucho"] = "Muchísimo"

i18n["es_AR"]["nrs_title"] = "Prurito NRS"
i18n["es_AR"]["beschreibung_nrs"] = "En una escala de 0 (sin prurito) a 10 (prurito inimaginable), ¿cómo fue el prurito del paciente en el peor momento en las últimas 24h? Por favor seleccione un número."
i18n["es_AR"]["nrs_picor_title"] = "Grado de prurito"

i18n["es_AR"]["beschreibung_poem"] = "Seleccione cuantos días, durante la última semana, el paciente ha presentado los siguientes síntomas. Deje en blanco las preguntas que no pueda responder."
i18n["es_AR"]["poem_picor_title"] = "• ¿Cuántos días ha tenido prurito a causa del eccema?"
i18n["es_AR"]["poem_sangrado_title"] = "• ¿Cuántos días le ha sangrado la piel a causa del eccema?"
i18n["es_AR"]["poem_exudacion_title"] = "• ¿Cuántos días el eccema estuvo húmedo o mojó la ropa?"
i18n["es_AR"]["poem_grietas_title"] = "• ¿Cuántos días se ha agrietado la piel por el eccema?"
i18n["es_AR"]["poem_descamacion_title"] = "• ¿Cuántos días se ha descamado la piel a causa del eccema?"
i18n["es_AR"]["poem_sequedad_title"] = "• ¿Cuántos días ha estado la piel seca o áspera a causa del eccema?"
i18n["es_AR"]["poem_sueno_title"] = "• ¿Cuántas noches se ha alterado el sueño a causa del eccema?"

i18n["es_AR"]["ningun_dia"] = "Ningún día"
i18n["es_AR"]["no_days"] = "Ningún día"
i18n["es_AR"]["1-2_dia"] = "1-2 días"
i18n["es_AR"]["3-4_dia"] = "3-4 días"
i18n["es_AR"]["5-6_dia"] = "5-6 días"
i18n["es_AR"]["todos_dia"] = "Todos los días"

i18n["es_AR"]["pdf_title"] = "RESULTADOS EASI-SCORAD"
i18n["es_AR"]["pdf_generated_date"] = "Informe generado el "
i18n["es_AR"]["pdf_surface_affected"] = "Porcentaje de superfície corporal afectada"
i18n["es_AR"]["pdf_dlqi_info"] = "En qué medida, su problema de piel ha afectado a su vida durante la última semana:"
i18n["es_AR"]["pdf_dlqi_values"] = ["Nada", "Un poco", "Mucho", "Muchísimo"]
i18n["es_AR"]["pdf_easi_values"] = ["< 10%","de 10 a 30%","de 30 a 49%","de 50 a 70%","de 70 - 90%","> del 90%"]
i18n["es_AR"]["print_page"] = "versions/AR/print.html"

i18n["es_AR"]["info_page"] = "versions/AR/TJDosis_Info.html"
i18n["es_AR"]["info_title"] = "Calculadora EASI-SCORAD"
i18n["es_AR"]["info_terms_button"] = "CONDICIONES DE USO"
i18n["es_AR"]["terms_page"] = "versions/AR/TJDosis_terminos.html"


i18n["es_AR"]["adct_title"] = "ADCT";
i18n["es_AR"]["beschreibung_adct"] = "Cuestionario para evaluar el control de la Dermatitis Atópica (ADCT).<br>Por favor responda las siguientes preguntas acerca de su experiencia con su eccema, también llamado dermatitis atópica."
i18n["es_AR"]["adct_title_1"] = "1. Durante la última semana, ¿cómo calificaría sus síntomas relacionados con el eccema (por ejemplo: picazón, piel seca, erupción)?"
i18n["es_AR"]["adct_title_2"] = "2. Durante la última semana, ¿cuántos días tuvo episodios intensos de picazón debido al eccema?"
i18n["es_AR"]["adct_title_3"] = "3. Durante la última semana, ¿cuánto lo ha fastidiado (molestado) su eccema?"
i18n["es_AR"]["adct_title_4"] = "4. Durante la última semana, ¿cuántas noches tuvo problemas para conciliar el sueño o permanecer dormido debido a su eccema?"
i18n["es_AR"]["adct_title_5"] = "5. Durante la última semana, ¿cuánto ha afectado el eccema sus actividades diarias?"
i18n["es_AR"]["adct_title_6"] = "6. Durante la última semana, ¿cuánto ha afectado el eccema su estado de ánimo o sus emociones?"

i18n["es_AR"]["adct_none"] = "Ningunos"
i18n["es_AR"]["adct_mild"] = "Leves"
i18n["es_AR"]["adct_moderate"] = "Moderados"
i18n["es_AR"]["adct_severe"] = "Severos"
i18n["es_AR"]["adct_very_severe"] = "Muy severos"



i18n["es_AR"]["not_at_all"] = "Nada"
i18n["es_AR"]["a_little"] = "Un poco"
i18n["es_AR"]["moderately"] = "Moderada-mente"
i18n["es_AR"]["very"] = "Mucho"
i18n["es_AR"]["extremely"] = "Extremada-mente"
i18n["es_AR"]["a_lot"] = "Veel"

i18n["es_AR"]["no_nights"] = "Ningun día"
i18n["es_AR"]["1-2_nights"] = "1-2 noches"
i18n["es_AR"]["3-4_nights"] = "3-4 noches"
i18n["es_AR"]["5-6_nights"] = "5-6 noches"
i18n["es_AR"]["every_night"] = "Todas las noches"

//5 & 6
i18n["es_AR"]["adct_5_1"] = "Nada"
i18n["es_AR"]["adct_5_2"] = "Un poco"
i18n["es_AR"]["adct_5_3"] = "Moderada-mente"
i18n["es_AR"]["adct_5_4"] = "Mucho"
i18n["es_AR"]["adct_5_5"] = "Extremada-mente"

i18n["es_AR"]["adct_notes"] = "INTERPRETACIÓN DEL PUNTAJE TOTAL DEL ADCT"
i18n["es_AR"]["adct_point_title"] = "ESTADO DE CONTROL EN UN MOMENTO DADO:"
i18n["es_AR"]["adct_point_text"] = "Un puntaje más alto indica un menor control de la DA.<br><br>Es posible que no haya un control adecuado de la DA de un paciente si:<br>• El puntaje total del ADCT es de 7 puntos o más"
i18n["es_AR"]["adct_changes_title"] = "CAMBIOS EN EL ESTADO DEL CONTROL EN EL TRANSCURSO DEL TIEMPO"
i18n["es_AR"]["adct_changes_text"] = "Un cambio de 5 puntos es el umbral para un cambio significativo en una persona.<br><br>• Disminución de 5 puntos o más: indica una mejoría de relevancia clínica en el control de la DA.<br>• Aumento de 5 puntos o más: indica un empeoramiento de relevancia clínica en el control de la DA"

i18n["es_AR"]["adct_well_controlled"] = "Control adecuado"
i18n["es_AR"]["adct_not_well_controlled"] = "Control no adecuado"


i18n["es_AR"]["derma_section"] = "Dermatitis Atópica"

// show

/*

$("#main_title").html(i18n[sprache]["main_title"])


$('*[id=mild_result]:visible').each(function () {
    $(this).html(i18n[sprache]["mild_result"])
});

$('*[id=area]:visible').each(function () {
    $(this).html(i18n[sprache]["area"])
});


$("#resultme").html(i18n[sprache]["ausrechnen"]);
$("#beschreibung").html(i18n[sprache]["beschreibung"]);
$("#oberflache").html(i18n[sprache]["oberflache"]);
$("#intensitat").html(i18n[sprache]["intensitat"]);
$("#symptome").html(i18n[sprache]["symptome"]);
$("#schlaf").html(i18n[sprache]["schlaf"]);
$("#pruritus").html(i18n[sprache]["pruritus"]);

//$("#erythema").each.html(i18n[sprache]["erythema"])
//$("#edema").html(i18n[sprache]["edema"])
//$("#excoriation").html(i18n[sprache]["excoriation"])
//$("#lichenification").html(i18n[sprache]["lichenification"])

$('*[id=erythema_title]:visible').each(function () {
    $(this).html(i18n[sprache]["erythema"])
});
$('*[id=edema_title]:visible').each(function () {
    $(this).html(i18n[sprache]["edema"])
});
$('*[id=lichenification_title]:visible').each(function () {
    $(this).html(i18n[sprache]["lichenification"])
});
$('*[id=excoriation_title]:visible').each(function () {
    $(this).html(i18n[sprache]["excoriation"])
});
$('*[id=costras_title]:visible').each(function () {
    $(this).html(i18n[sprache]["costras"])
});
$('*[id=xerosis_title]:visible').each(function () {
    $(this).html(i18n[sprache]["xerosis"])
});


$("#beschreibung_easi").html(i18n[sprache]["beschreibung_easi"]);
$("#kopf").html(i18n[sprache]["kopf"]);
$("#obere").html(i18n[sprache]["obere"]);
$("#tronk").html(i18n[sprache]["tronk"]);
$("#beine").html(i18n[sprache]["beine"]);


$("#beschreibung_dlqi").html(i18n[sprache]["beschreibung_dlqi"]);
$("#title_dlqi_picor").html(i18n[sprache]["title_dlqi_picor"]);
$("#title_dlqi_incomodo").html(i18n[sprache]["title_dlqi_incomodo"]);
$("#title_dlqi_compra").html(i18n[sprache]["title_dlqi_compra"]);
$("#title_dlqi_ropa").html(i18n[sprache]["title_dlqi_ropa"]);
$("#title_dlqi_social").html(i18n[sprache]["title_dlqi_social"]);
$("#title_dlqi_deporte").html(i18n[sprache]["title_dlqi_deporte"]);
$("#title_dlqi_trabajo").html(i18n[sprache]["title_dlqi_trabajo"]);
$("#title_dlqi_familiar").html(i18n[sprache]["title_dlqi_familiar"]);
$("#title_dlqi_sexo").html(i18n[sprache]["title_dlqi_sexo"]);
$("#title_dlqi_tratamiento").html(i18n[sprache]["title_dlqi_tratamiento"]);


//SCORAD
$("#scorad_children_label").html(i18n[sprache]["scorad_children"]);


//NRS
if (i18n[sprache]["nrs_title"]){
    $("#title_nrs").html(i18n[sprache]["nrs_title"]);
    $("#title_nrs_2").html(i18n[sprache]["nrs_title"]);
}
$("#beschreibung_nrs").html(i18n[sprache]["beschreibung_nrs"]);
$("#nrs_picor_title").html(i18n[sprache]["nrs_picor_title"]);



$("#beschreibung_poem").html(i18n[sprache]["beschreibung_poem"]);
$("#poem_picor_title").html(i18n[sprache]["poem_picor_title"]);
$("#poem_sangrado_title").html(i18n[sprache]["poem_sangrado_title"]);
$("#poem_exudacion_title").html(i18n[sprache]["poem_exudacion_title"]);
$("#poem_grietas_title").html(i18n[sprache]["poem_grietas_title"]);
$("#poem_descamacion_title").html(i18n[sprache]["poem_descamacion_title"]);
$("#poem_sequedad_title").html(i18n[sprache]["poem_sequedad_title"]);
$("#poem_sueno_title").html(i18n[sprache]["poem_sueno_title"]);
//$("#poem_option").css("display",i18n[sprache]["has_poem"] ? "block" : "none");


//PDF
$("#pdf_logo").css("display",i18n[sprache]["show_pdf_logo"] ? "block" : "none");
$("#pdf_title").html(i18n[sprache]["pdf_title"]);
$("#pdf_generated_date").html(i18n[sprache]["pdf_generated_date"]);
$("#pdf_surface_affected").html(i18n[sprache]["pdf_surface_affected"]);
$("#pdf_dlqi_info").html(i18n[sprache]["pdf_dlqi_info"]);


//HOME
$("#derma_section").html(i18n[sprache]["derma_section"]);
$("#prurigo_section").html(i18n[sprache]["prurigo_section"]);

//Answers
$('li a').each(function (i) {

    //Percent Easi

    if (this.textContent == '< 10%'){
        //this.textContent = i18n[sprache]["<10"]
        this.innerHTML = i18n[sprache]["<10"]
    }

    if (this.textContent == 'de 10% a 30%') {
        this.textContent = i18n[sprache]["10-30"]
    }

    if (this.textContent == 'de 30% a 50%') {
        this.textContent = i18n[sprache]["30-50"]
    }

    if (this.textContent == 'de 50% a 70%') {
        this.textContent = i18n[sprache]["50-70"]
    }

    if (this.textContent == 'de 70% a 90%') {
        this.textContent = i18n[sprache]["70-90"]
    }

    if (this.textContent == '> 90%') {
        this.textContent = i18n[sprache][">90"]
    }

    //DLQI Selectors New

    if (this.textContent == 'Nada') {
        this.textContent = i18n[sprache]["nada"]
    }

    if (this.textContent == 'Un poco') {
        this.textContent = i18n[sprache]["poco"]
    }

    if (this.textContent == 'Bastante_dlqi') {
        this.textContent = i18n[sprache]["bastante"]
    }

    if (this.textContent == 'Mucho_dlqi') {
        this.textContent = i18n[sprache]["mucho"]
    }

    //POEM Selectors
    if (this.textContent == 'Ningún día') {
        this.textContent = i18n[sprache]["ningun_dia"]
    }

    if (this.textContent == '1-2 días') {
        this.textContent = i18n[sprache]["1-2_dia"]
    }

    if (this.textContent == '3-4 días') {
        this.textContent = i18n[sprache]["3-4_dia"]
    }

    if (this.textContent == '5-6 días') {
        this.textContent = i18n[sprache]["5-6_dia"]
    }

    if (this.textContent == 'Todos los días') {
        this.textContent = i18n[sprache]["todos_dia"]
    }


});


//Index Order
if (sprache == "fr_BE" || sprache == "nl_BE"){

    $('#easi_option').css("order",0)
    $('#nrs_option').css("order",1)
    $('#scorad_option').css("order",2)
    $('#dlqi_option').css("order",3)

}

if (sprache == "nl_NL") {

    $('#easi_option').css("order",0)
    $('#scorad_option').css("order",1)
    $('#nrs_option').css("order",2)
    $('#dlqi_option').css("order",3)
    $('#viga_option').css("order",4)
    $('#adct_option').css("order",5)

}

if (sprache == "fr_FR"){
    $('#easi_option').css("order",0)
    $('#adct_option').css("order",1)
    $('#scorad_option').css("order",2)
    $('#nrs_option').css("order",3)
    $('#dlqi_option').css("order",4)
}

*/