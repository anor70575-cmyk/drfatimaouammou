window.SLUGS=["regles-douloureuses", "regles-trop-abondantes", "regles-irregulieres", "absence-de-regles", "saignements-entre-les-regles", "syndrome-premenstruel", "ovaires-polykystiques-sopk", "retarder-ses-regles-ramadan-omra-voyage", "puberte-trop-precoce-ou-trop-tardive", "mycose-vaginale", "odeur-intime-vaginose", "pertes-vaginales-anormales", "infection-urinaire-cystite", "infections-sexuellement-transmissibles-ist", "herpes-genital", "condylomes-verrues-genitales", "trichomonase", "kyste-ou-abces-de-bartholin", "demangeaisons-et-irritations-intimes", "lichen-sclereux-de-la-vulve", "infection-de-l-uterus-et-des-trompes-salpingite", "endometriose", "adenomyose", "fibrome-de-l-uterus", "polype-de-l-uterus", "kyste-de-l-ovaire", "torsion-d-annexe-de-l-ovaire", "douleurs-du-bas-ventre", "descente-d-organes-prolapsus", "fuites-urinaires", "syndrome-d-asherman", "malformations-de-l-uterus", "syndrome-de-mrkh", "rupture-de-l-uterus", "difficulte-a-tomber-enceinte", "infertilite-inexpliquee", "troubles-de-l-ovulation", "trompes-bouchees", "reserve-ovarienne-basse-menopause-precoce", "fausses-couches-a-repetition", "hyperprolactinemie", "fertilite-de-l-homme", "suivi-de-grossesse", "nausees-et-vomissements", "saignements-pendant-la-grossesse", "grossesse-extra-uterine", "diabete-de-grossesse", "tension-et-pre-eclampsie", "anemie-pendant-la-grossesse", "contractions-trop-tot-menace-d-accouchement-premature", "bebe-qui-bouge-moins", "placenta-bas-placenta-praevia", "rhesus-negatif", "cholestase-de-la-grossesse", "grossesse-molaire", "peur-de-l-accouchement", "saignements-apres-l-accouchement", "baby-blues-et-depression-apres-bebe", "douleur-de-cicatrice", "problemes-d-allaitement", "contraception-apres-bebe", "boule-dans-le-sein", "douleurs-des-seins", "ecoulement-du-mamelon", "frottis-de-depistage", "frottis-anormal", "cancer-du-col-de-l-uterus", "saignement-apres-la-menopause", "cancer-de-l-ovaire", "depistage-du-cancer-du-sein", "choisir-sa-contraception", "sterilet-diu", "oubli-de-pilule-contraception-d-urgence", "douleurs-pendant-les-rapports", "vaginisme", "baisse-du-desir", "saignement-apres-les-rapports", "esthetique-et-confort-intime", "bouffees-de-chaleur", "secheresse-vaginale", "os-fragiles-osteoporose", "premenopause", "echographie-de-grossesse-3d-4d", "symptomes-du-debut-de-grossesse", "grossesse-a-risque", "accouchement-voie-basse-ou-cesarienne", "insemination-et-fiv", "exces-de-poils-hirsutisme", "chirurgie-par-coelioscopie", "hysteroscopie"];
const CATS={
regles:{fr:"Règles & cycle",ar:"الدورة الشهرية",i:"🩸"},
infect:{fr:"Infections & intimité",ar:"الالتهابات والصحة الحميمية",i:"🌸"},
uterus:{fr:"Utérus & ovaires",ar:"الرحم والمبيضان",i:"🌺"},
fert:{fr:"Avoir un bébé",ar:"الخصوبة والإنجاب",i:"🤍"},
gros:{fr:"Grossesse",ar:"الحمل",i:"🤰"},
post:{fr:"Après l'accouchement",ar:"ما بعد الولادة",i:"👶"},
seins:{fr:"Seins",ar:"الثدي",i:"🎀"},
cancer:{fr:"Dépistage & cancers",ar:"الكشف المبكر والسرطانات",i:"🔬"},
contra:{fr:"Contraception & couple",ar:"منع الحمل والحياة الزوجية",i:"💞"},
meno:{fr:"Ménopause",ar:"سن اليأس",i:"🌿"}
};
// c=catégorie, u=urgence, r=rare, v=vidéo, k=mots-clés de recherche
const PB=[
// ===== RÈGLES =====
{c:"regles",k:"dysmenorrhee mal ventre crampes",
fr:["Règles douloureuses","Des douleurs fortes pendant les règles, qui empêchent parfois d'aller au travail ou à l'école.","Crampes dans le bas du ventre, douleurs dans le dos, nausées, malaise.","Avoir très mal n'est pas normal : on cherche une cause (endométriose, adénomyose, fibrome) et on propose un traitement efficace contre la douleur."],
ar:["الدورة الشهرية المؤلمة","آلام قوية أثناء الدورة، تمنع أحياناً من الذهاب إلى العمل أو الدراسة.","تشنجات أسفل البطن، ألم في الظهر، غثيان، دوخة.","الألم الشديد ليس أمراً عادياً: نبحث عن السبب (بطانة الرحم المهاجرة، العضال الغدي، ورم ليفي) ونقترح علاجاً فعالاً."]},
{c:"regles",k:"menorragie hemorragie caillots abondantes",
fr:["Règles trop abondantes","Des règles très fortes ou trop longues, qui peuvent fatiguer et provoquer une anémie.","Changer de protection toutes les heures, caillots, règles de plus de 7 jours, grande fatigue.","Échographie et prise de sang pour trouver la cause (fibrome, polype, trouble hormonal) et traiter, y compris l'anémie."],
ar:["الدورة الشهرية الغزيرة","دورة قوية جداً أو طويلة، قد تسبب التعب وفقر الدم.","تغيير الفوطة كل ساعة، خثرات دم، دورة تتجاوز 7 أيام، تعب شديد.","فحص بالصدى وتحليل دم لمعرفة السبب (ورم ليفي، زائدة لحمية، اضطراب هرموني) والعلاج، بما في ذلك فقر الدم."]},
{c:"regles",k:"cycle irregulier retard",
fr:["Règles irrégulières","Un cycle qui change beaucoup d'un mois à l'autre, ou des règles qui arrivent tous les deux ou trois mois.","Cycles de moins de 21 jours ou de plus de 35 jours, dates imprévisibles.","On cherche la cause : ovaires polykystiques, thyroïde, stress, poids, prolactine. Un traitement simple suffit souvent."],
ar:["الدورة الشهرية غير المنتظمة","دورة تتغير كثيراً من شهر لآخر، أو تأتي كل شهرين أو ثلاثة.","دورة أقل من 21 يوماً أو أكثر من 35 يوماً، مواعيد غير متوقعة.","نبحث عن السبب: تكيس المبايض، الغدة الدرقية، التوتر، الوزن، هرمون الحليب. غالباً ما يكفي علاج بسيط."]},
{c:"regles",k:"amenorrhee pas de regles absence",
fr:["Absence de règles","Plus de règles depuis 3 mois ou plus (sans grossesse), ou jamais de règles à 15 ans.","Pas de règles, parfois bouffées de chaleur, écoulement des seins, acné, prise de poids.","Test de grossesse, bilan hormonal et échographie pour comprendre et rétablir le cycle."],
ar:["انقطاع الدورة الشهرية","غياب الدورة لمدة 3 أشهر أو أكثر (دون حمل)، أو عدم ظهورها أبداً في سن 15.","غياب الدورة، أحياناً هبات ساخنة، إفرازات من الثدي، حب الشباب، زيادة الوزن.","اختبار الحمل، تحاليل هرمونية وفحص بالصدى لفهم السبب وإعادة انتظام الدورة."]},
{c:"regles",k:"metrorragie spotting saignement",
fr:["Saignements entre les règles","Des pertes de sang en dehors des règles, parfois juste quelques gouttes.","Saignements légers ou plus forts entre deux cycles, après un effort ou sans raison.","Toujours à vérifier : examen, frottis et échographie pour éliminer un polype, une infection ou une lésion du col."],
ar:["نزيف بين الدورتين","نزول دم خارج أيام الدورة، أحياناً مجرد قطرات.","نزيف خفيف أو أقوى بين دورتين، بعد مجهود أو دون سبب.","يجب دائماً فحصه: فحص سريري، لطاخة وفحص بالصدى لاستبعاد زائدة لحمية أو التهاب أو إصابة في عنق الرحم."]},
{c:"regles",k:"spm syndrome premenstruel humeur seins gonfles",
fr:["Syndrome prémenstruel","Des troubles physiques et d'humeur dans les jours qui précèdent les règles.","Irritabilité, tristesse, seins gonflés et douloureux, ventre gonflé, maux de tête.","Conseils de vie, et si besoin un traitement hormonal ou adapté pour que ces jours soient plus faciles."],
ar:["متلازمة ما قبل الدورة","اضطرابات جسدية ونفسية في الأيام التي تسبق الدورة.","عصبية، حزن، انتفاخ وألم في الثديين، انتفاخ البطن، صداع.","نصائح لنمط الحياة، وعند الحاجة علاج هرموني أو مناسب لتصبح هذه الأيام أسهل."]},
{c:"regles",k:"sopk ovaires polykystiques pcos poils acne",v:"1953376152301331",
fr:["Ovaires polykystiques (SOPK)","Un trouble hormonal très fréquent qui dérègle l'ovulation.","Règles irrégulières, acné, poils en excès, prise de poids, difficulté à tomber enceinte.","Échographie et bilan hormonal. Traitement selon votre objectif : régulariser les règles, la peau, ou avoir un bébé."],
ar:["تكيس المبايض","اضطراب هرموني شائع جداً يعرقل الإباضة.","دورة غير منتظمة، حب الشباب، زيادة الشعر، زيادة الوزن، صعوبة في الحمل.","فحص بالصدى وتحاليل هرمونية. العلاج حسب هدفكِ: تنظيم الدورة، البشرة، أو الإنجاب."]},
{c:"regles",k:"ramadan retarder decaler regles pilule voyage hajj omra",v:"526841377110756",
fr:["Retarder ses règles (Ramadan, Omra, voyage)","Il est possible de décaler ses règles pour une occasion importante, avec un traitement adapté.","Envie de jeûner tout le Ramadan, d'accomplir la Omra ou de voyager sans règles.","Venez consulter quelques semaines avant : le docteur vous indique la méthode qui vous convient."],
ar:["تأخير الدورة الشهرية (رمضان، العمرة، السفر)","يمكن تأجيل الدورة لمناسبة مهمة بعلاج مناسب.","الرغبة في صيام رمضان كاملاً، أداء العمرة أو السفر دون دورة.","استشيري قبل بضعة أسابيع: تشرح لكِ الطبيبة الطريقة المناسبة لكِ."]},
{c:"regles",r:1,k:"puberte precoce tardive fille enfant",
fr:["Puberté trop précoce ou trop tardive","Des signes de puberté avant 8 ans, ou aucun signe après 13-14 ans chez la jeune fille.","Seins ou poils très tôt, règles avant 10 ans, ou absence totale de développement.","Un bilan hormonal et une échographie, avec beaucoup de douceur, pour la jeune fille et sa maman."],
ar:["البلوغ المبكر أو المتأخر","علامات البلوغ قبل 8 سنوات، أو غيابها بعد 13-14 سنة عند الفتاة.","نمو الثدي أو الشعر مبكراً جداً، دورة قبل 10 سنوات، أو غياب تام للنمو.","تحاليل هرمونية وفحص بالصدى، بكل لطف، للفتاة وأمها."]},
// ===== INFECTIONS & INTIMITÉ =====
{c:"infect",k:"mycose candida demangeaisons pertes blanches lait caille",
fr:["Mycose vaginale","Une infection par un champignon, très fréquente et sans gravité.","Démangeaisons, brûlures, pertes blanches épaisses, rougeur.","Un traitement simple (ovule, crème). Si elle revient souvent, on cherche pourquoi."],
ar:["الفطريات المهبلية","التهاب بالفطريات، شائع جداً وغير خطير.","حكة، حرقة، إفرازات بيضاء سميكة، احمرار.","علاج بسيط (تحاميل، كريم). إذا تكررت، نبحث عن السبب."]},
{c:"infect",k:"vaginose odeur poisson pertes grises",
fr:["Odeur intime, vaginose","Un déséquilibre de la flore vaginale qui donne une mauvaise odeur.","Odeur forte (souvent après les rapports), pertes grises ou fluides.","Un traitement antibiotique adapté et des conseils d'hygiène (éviter les douches vaginales)."],
ar:["رائحة حميمية كريهة","اختلال في البكتيريا الطبيعية للمهبل يسبب رائحة كريهة.","رائحة قوية (غالباً بعد العلاقة)، إفرازات رمادية أو سائلة.","علاج بالمضادات الحيوية ونصائح للنظافة (تجنب الغسول المهبلي الداخلي)."]},
{c:"infect",k:"pertes anormales ecoulement jaune vert",
fr:["Pertes vaginales anormales","Des pertes qui changent de couleur, d'odeur ou de quantité.","Pertes jaunes, vertes, marron, mousseuses, ou avec une odeur inhabituelle.","Un examen et parfois un prélèvement pour trouver le bon traitement."],
ar:["إفرازات مهبلية غير طبيعية","إفرازات يتغير لونها أو رائحتها أو كميتها.","إفرازات صفراء، خضراء، بنية، رغوية، أو برائحة غير معتادة.","فحص وأحياناً أخذ عينة لإيجاد العلاج المناسب."]},
{c:"infect",k:"infection urinaire cystite brulure uriner pipi",
fr:["Infection urinaire (cystite)","Une infection de la vessie, fréquente chez la femme.","Brûlures en urinant, envies fréquentes, urines troubles ou avec du sang.","Analyse d'urine et traitement. En cas de fièvre ou de douleur au dos, consultez vite."],
ar:["التهاب المسالك البولية","التهاب في المثانة، شائع عند المرأة.","حرقة عند التبول، رغبة متكررة في التبول، بول عكر أو به دم.","تحليل البول والعلاج. في حالة الحمى أو ألم الظهر، استشيري بسرعة."]},
{c:"infect",k:"ist mst chlamydia gonocoque infection sexuellement transmissible",
fr:["Infections sexuellement transmissibles (IST)","Des infections transmises lors des rapports, parfois sans aucun symptôme.","Pertes inhabituelles, brûlures, douleurs pendant les rapports, ou rien du tout.","Dépistage confidentiel et traitement, pour vous et votre conjoint, afin de protéger votre fertilité."],
ar:["الأمراض المنقولة جنسياً","التهابات تنتقل أثناء العلاقة، أحياناً دون أي أعراض.","إفرازات غير معتادة، حرقة، ألم أثناء العلاقة، أو لا شيء على الإطلاق.","كشف سري وعلاج لكِ ولزوجكِ، لحماية خصوبتكِ."]},
{c:"infect",k:"herpes genital boutons vesicules",
fr:["Herpès génital","Un virus qui provoque de petites cloques douloureuses, qui peuvent revenir.","Petites vésicules, brûlures, démangeaisons au niveau intime.","Un traitement calme les crises et réduit leur fréquence. À signaler en cas de grossesse."],
ar:["الهربس التناسلي","فيروس يسبب فقاعات صغيرة مؤلمة، قد تعود.","فقاعات صغيرة، حرقة، حكة في المنطقة الحميمية.","العلاج يهدئ النوبات ويقلل تكرارها. يجب إخبار الطبيبة في حالة الحمل."]},
{c:"infect",k:"condylomes verrues hpv papillomavirus laser",
fr:["Condylomes (verrues génitales)","De petites verrues dues au papillomavirus (HPV).","Petites excroissances sur la vulve, le vagin ou autour de l'anus.","Traitement au laser au cabinet, et surveillance du col de l'utérus par frottis."],
ar:["الثآليل التناسلية","ثآليل صغيرة يسببها فيروس الورم الحليمي (HPV).","نتوءات صغيرة على الفرج أو المهبل أو حول الشرج.","علاج بالليزر في العيادة، ومراقبة عنق الرحم باللطاخة."]},
{c:"infect",k:"trichomonas pertes mousseuses",
fr:["Trichomonase","Une infection par un parasite, transmise lors des rapports.","Pertes jaunes-vertes mousseuses, odeur, démangeaisons.","Un traitement court, à prendre aussi par le conjoint."],
ar:["داء المشعرات","التهاب بطفيلي ينتقل أثناء العلاقة.","إفرازات صفراء مخضرة رغوية، رائحة، حكة.","علاج قصير، يجب أن يأخذه الزوج أيضاً."]},
{c:"infect",k:"bartholin kyste boule levre abces",
fr:["Kyste ou abcès de Bartholin","Une glande à l'entrée du vagin qui gonfle et peut s'infecter.","Boule sur une lèvre, parfois très douloureuse et chaude.","Traitement médical ou petit geste pour le vider, sans laisser la douleur durer."],
ar:["كيس أو خراج غدة بارتولين","غدة عند مدخل المهبل تنتفخ وقد تلتهب.","كتلة على أحد الشفرين، أحياناً مؤلمة جداً وساخنة.","علاج دوائي أو تدخل بسيط لإفراغها، دون ترك الألم يستمر."]},
{c:"infect",k:"demangeaisons vulve irritation",
fr:["Démangeaisons et irritations intimes","Des démangeaisons qui peuvent venir d'une infection, d'une allergie ou d'un problème de peau.","Envie de se gratter, rougeur, sensation de brûlure, peau qui pique.","Un examen pour trouver la vraie cause, au lieu d'enchaîner les crèmes sans résultat."],
ar:["الحكة والتهيج في المنطقة الحميمية","حكة قد تكون بسبب التهاب أو حساسية أو مشكل جلدي.","رغبة في الحك، احمرار، إحساس بالحرقة، جلد يلسع.","فحص لمعرفة السبب الحقيقي، بدل تجربة الكريمات دون نتيجة."]},
{c:"infect",r:1,k:"lichen scleroatrophique peau blanche vulve",
fr:["Lichen scléreux de la vulve","Une maladie de peau rare qui touche la vulve, souvent méconnue.","Démangeaisons tenaces, peau blanche et fine, fissures, douleurs aux rapports.","Un diagnostic précis et un traitement local efficace, avec un suivi régulier."],
ar:["الحزاز المتصلب في الفرج","مرض جلدي نادر يصيب الفرج، غالباً غير معروف.","حكة مستمرة، جلد أبيض ورقيق، تشققات، ألم أثناء العلاقة.","تشخيص دقيق وعلاج موضعي فعال، مع متابعة منتظمة."]},
{c:"infect",u:1,k:"salpingite infection genitale haute fievre douleur",
fr:["Infection de l'utérus et des trompes (salpingite)","Une infection qui remonte vers l'utérus et les trompes, et peut menacer la fertilité.","Douleur du bas-ventre, fièvre, pertes anormales, douleurs pendant les rapports.","Un traitement antibiotique rapide pour protéger les trompes. Ne tardez pas."],
ar:["التهاب الرحم وقناتي فالوب","التهاب يصعد نحو الرحم والقناتين، وقد يهدد الخصوبة.","ألم أسفل البطن، حمى، إفرازات غير طبيعية، ألم أثناء العلاقة.","علاج سريع بالمضادات الحيوية لحماية القناتين. لا تتأخري."]},
// ===== UTÉRUS & OVAIRES =====
{c:"uterus",k:"endometriose douleur regles rapports infertilite",
fr:["Endométriose","Du tissu semblable à celui de l'utérus se développe en dehors, et provoque des douleurs.","Règles très douloureuses, douleurs pendant les rapports, difficulté à tomber enceinte.","Échographie spécialisée, traitement hormonal, et cœlioscopie si nécessaire."],
ar:["بطانة الرحم المهاجرة","نسيج يشبه بطانة الرحم ينمو خارجه ويسبب آلاماً.","دورة مؤلمة جداً، ألم أثناء العلاقة، صعوبة في الحمل.","فحص بالصدى متخصص، علاج هرموني، وجراحة بالمنظار عند الحاجة."]},
{c:"uterus",k:"adenomyose uterus gros douloureux",
fr:["Adénomyose","L'endomètre pénètre dans le muscle de l'utérus, qui devient plus gros et douloureux.","Règles abondantes et douloureuses, utérus sensible.","Diagnostic par échographie et traitement adapté à votre âge et à votre désir d'enfant."],
ar:["العضال الغدي","تتغلغل بطانة الرحم في عضلة الرحم، فيكبر ويصبح مؤلماً.","دورة غزيرة ومؤلمة، رحم حساس.","تشخيص بالصدى وعلاج مناسب لسنكِ ورغبتكِ في الإنجاب."]},
{c:"uterus",k:"fibrome myome uterus boule",
fr:["Fibrome de l'utérus","Une boule non cancéreuse dans le muscle de l'utérus, très fréquente après 35 ans.","Souvent aucun signe ; parfois règles abondantes, ventre gonflé, envie fréquente d'uriner.","Surveillance, médicaments, ou chirurgie (cœlioscopie, hystéroscopie) en gardant l'utérus quand c'est possible."],
ar:["الورم الليفي في الرحم","كتلة غير سرطانية في عضلة الرحم، شائعة جداً بعد 35 سنة.","غالباً دون أعراض؛ أحياناً دورة غزيرة، انتفاخ البطن، تبول متكرر.","مراقبة، أدوية، أو جراحة (بالمنظار أو تنظير الرحم) مع الحفاظ على الرحم كلما أمكن."]},
{c:"uterus",k:"polype endometre uterus saignement",
fr:["Polype de l'utérus","Une petite excroissance bénigne dans la cavité de l'utérus.","Saignements entre les règles ou après la ménopause, difficulté à concevoir.","Retrait simple par hystéroscopie, par les voies naturelles, sans cicatrice."],
ar:["الزائدة اللحمية في الرحم","نتوء صغير حميد داخل تجويف الرحم.","نزيف بين الدورتين أو بعد سن اليأس، صعوبة في الحمل.","إزالة بسيطة بتنظير الرحم، عبر المسالك الطبيعية، دون ندبة."]},
{c:"uterus",k:"kyste ovaire ovarien",
fr:["Kyste de l'ovaire","Une poche de liquide sur l'ovaire, le plus souvent bénigne et qui disparaît seule.","Souvent aucun signe ; parfois douleur d'un côté, ventre lourd.","Échographie de contrôle. Ablation par cœlioscopie seulement s'il persiste ou grossit."],
ar:["كيس المبيض","جيب من السائل على المبيض، غالباً حميد ويختفي تلقائياً.","غالباً دون أعراض؛ أحياناً ألم في جهة واحدة، ثقل في البطن.","فحص بالصدى للمراقبة. الإزالة بالمنظار فقط إذا استمر أو كبر."]},
{c:"uterus",u:1,r:1,k:"torsion ovaire annexe trompe douleur brutale",v:"1723759615276253",
fr:["Torsion d'annexe (de l'ovaire)","L'ovaire (parfois avec la trompe) tourne sur lui-même et n'est plus irrigué. C'est rare mais urgent.","Douleur brutale et très forte d'un côté, vomissements.","Une intervention rapide permet souvent de sauver l'ovaire."],
ar:["التواء الملحقات (المبيض)","يلتف المبيض حول نفسه وينقطع عنه الدم. نادر لكنه مستعجل.","ألم مفاجئ وقوي جداً في جهة واحدة، قيء.","التدخل السريع يسمح غالباً بإنقاذ المبيض."]},
{c:"uterus",k:"douleur pelvienne chronique bas ventre",
fr:["Douleurs du bas-ventre","Des douleurs pelviennes qui durent ou reviennent, sans explication claire.","Douleurs depuis plusieurs mois, parfois liées au cycle ou aux rapports.","On prend le temps de chercher : endométriose, kyste, adhérences, infection… pour enfin soulager."],
ar:["آلام أسفل البطن","آلام في الحوض تدوم أو تتكرر دون تفسير واضح.","آلام منذ عدة أشهر، أحياناً مرتبطة بالدورة أو العلاقة.","نأخذ الوقت للبحث: بطانة مهاجرة، كيس، التصاقات، التهاب… لتخفيف الألم أخيراً."]},
{c:"uterus",k:"prolapsus descente organes vessie boule vagin",
fr:["Descente d'organes (prolapsus)","La vessie, l'utérus ou le rectum descendent dans le vagin, souvent après des accouchements.","Sensation de boule ou de pesanteur dans le vagin, gêne pour uriner.","Rééducation, pessaire, ou chirurgie par voie vaginale selon la gêne."],
ar:["هبوط الأعضاء","نزول المثانة أو الرحم أو المستقيم نحو المهبل، غالباً بعد الولادات.","إحساس بكتلة أو ثقل في المهبل، صعوبة في التبول.","ترويض، حلقة داعمة، أو جراحة عبر المهبل حسب الإزعاج."]},
{c:"uterus",k:"incontinence fuites urinaires toux rire",
fr:["Fuites urinaires","Perdre des urines en toussant, en riant, ou ne pas pouvoir se retenir.","Petites fuites à l'effort, envies urgentes, besoin de protections.","Ce n'est pas une fatalité : rééducation du périnée, traitements, et chirurgie si besoin."],
ar:["سلس البول","فقدان البول عند السعال أو الضحك، أو عدم القدرة على التحكم.","تسربات صغيرة عند المجهود، رغبة ملحة، الحاجة إلى فوطات.","ليس قدراً محتوماً: ترويض عضلات العجان، علاجات، وجراحة عند الحاجة."]},
{c:"uterus",r:1,k:"asherman synechies adherences uterus curetage",
fr:["Syndrome d'Asherman","Des adhérences à l'intérieur de l'utérus, souvent après un curetage. C'est rare.","Règles très faibles ou absentes après un geste sur l'utérus, difficulté à concevoir.","Diagnostic et traitement par hystéroscopie pour libérer la cavité de l'utérus."],
ar:["متلازمة أشرمان","التصاقات داخل الرحم، غالباً بعد عملية كحت. حالة نادرة.","دورة ضعيفة جداً أو غائبة بعد تدخل على الرحم، صعوبة في الحمل.","تشخيص وعلاج بتنظير الرحم لتحرير تجويفه."]},
{c:"uterus",r:1,k:"malformation uterus cloison bicorne",
fr:["Malformations de l'utérus","Un utérus de forme différente depuis la naissance (cloisonné, bicorne…). C'est rare.","Souvent découvert lors de fausses couches, de douleurs ou d'un bilan de fertilité.","Échographie 3D ou IRM, et correction par hystéroscopie quand c'est utile."],
ar:["تشوهات الرحم","رحم بشكل مختلف منذ الولادة (بحاجز، ذو قرنين…). حالة نادرة.","غالباً يُكتشف بسبب إجهاض أو آلام أو فحوصات الخصوبة.","فحص بالصدى ثلاثي الأبعاد أو بالرنين المغناطيسي، وتصحيح بتنظير الرحم عند الحاجة."]},
{c:"uterus",r:1,k:"mrkh absence uterus vagin regles jamais",
fr:["Syndrome de MRKH","Une absence d'utérus et d'une partie du vagin depuis la naissance. Très rare.","Jamais de règles alors que la poitrine et les poils se sont développés normalement.","Un diagnostic avec beaucoup de délicatesse, un accompagnement et des solutions pour la vie de couple."],
ar:["متلازمة MRKH","غياب الرحم وجزء من المهبل منذ الولادة. نادرة جداً.","غياب الدورة تماماً رغم نمو الثدي والشعر بشكل طبيعي.","تشخيص بكل لطف، مرافقة وحلول للحياة الزوجية."]},
{c:"uterus",u:1,r:1,k:"rupture uterine cicatrice cesarienne",
fr:["Rupture de l'utérus","L'utérus se déchire pendant la grossesse ou l'accouchement, souvent sur une ancienne cicatrice. Rare mais grave.","Douleur brutale et intense du ventre, saignement, malaise, bébé qui bouge moins.","Une urgence absolue : allez immédiatement à la maternité."],
ar:["تمزق الرحم","يتمزق الرحم أثناء الحمل أو الولادة، غالباً على ندبة قديمة. نادر لكنه خطير.","ألم مفاجئ وشديد في البطن، نزيف، دوخة، حركة أقل للجنين.","حالة مستعجلة جداً: توجهي فوراً إلى دار الولادة."]},
// ===== FERTILITÉ =====
{c:"fert",k:"infertilite sterilite bebe enceinte tomber",v:"4069933566645951",
fr:["Difficulté à tomber enceinte","Pas de grossesse après un an d'essais (6 mois après 35 ans).","Rapports réguliers sans grossesse, cycles irréguliers, inquiétude.","Bilan du couple, recherche des causes et traitement par étapes, jusqu'à l'insémination."],
ar:["صعوبة الحمل","عدم حدوث حمل بعد سنة من المحاولة (6 أشهر بعد 35 سنة).","علاقات منتظمة دون حمل، دورة غير منتظمة، قلق.","فحوصات للزوجين، البحث عن الأسباب وعلاج تدريجي، حتى التلقيح الاصطناعي."]},
{c:"fert",k:"retard grossesse inexplique bilan normal",v:"4069933566645951",
fr:["Infertilité « inexpliquée »","Tous les examens sont normaux, et pourtant la grossesse ne vient pas.","Bilans normaux chez la femme et chez l'homme, mais pas de grossesse.","Il existe des pistes et des solutions : le docteur l'explique dans sa vidéo la plus vue."],
ar:["تأخر الحمل دون سبب واضح","كل الفحوصات سليمة، ومع ذلك لا يحدث الحمل.","تحاليل سليمة عند المرأة والرجل، لكن دون حمل.","توجد حلول: تشرح الطبيبة ذلك في الفيديو الأكثر مشاهدة."]},
{c:"fert",k:"ovulation anovulation stimulation",
fr:["Troubles de l'ovulation","Les ovaires ne libèrent pas d'ovule chaque mois.","Cycles irréguliers ou absents, souvent lié aux ovaires polykystiques ou à la thyroïde.","Suivi de l'ovulation par échographie et stimulation douce si nécessaire."],
ar:["اضطرابات الإباضة","المبيضان لا يطلقان بويضة كل شهر.","دورة غير منتظمة أو غائبة، غالباً بسبب تكيس المبايض أو الغدة الدرقية.","تتبع الإباضة بالصدى وتحفيز خفيف عند الحاجة."]},
{c:"fert",k:"trompes bouchees obstruction hystérosalpingographie",
fr:["Trompes bouchées","Les trompes ne laissent plus passer l'ovule, souvent après une infection.","Souvent aucun signe ; découvert lors du bilan de fertilité.","Examen des trompes, cœlioscopie, ou orientation vers la FIV selon le cas."],
ar:["انسداد قناتي فالوب","القناتان لا تسمحان بمرور البويضة، غالباً بعد التهاب.","غالباً دون أعراض؛ يُكتشف أثناء فحوصات الخصوبة.","فحص القناتين، جراحة بالمنظار، أو التوجيه نحو أطفال الأنابيب حسب الحالة."]},
{c:"fert",k:"reserve ovarienne amh insuffisance ovarienne prematuree menopause precoce",
fr:["Réserve ovarienne basse / ménopause précoce","Les ovaires contiennent moins d'ovules que prévu pour l'âge, parfois avant 40 ans.","Cycles qui raccourcissent, bouffées de chaleur, difficulté à concevoir.","Bilan hormonal (AMH) et échographie, puis une stratégie rapide et adaptée."],
ar:["ضعف المخزون المبيضي / سن اليأس المبكر","المبيضان يحتويان على بويضات أقل من المتوقع، أحياناً قبل 40 سنة.","دورة تقصر، هبات ساخنة، صعوبة في الحمل.","تحاليل هرمونية (AMH) وفحص بالصدى، ثم خطة سريعة ومناسبة."]},
{c:"fert",k:"fausse couche repetition avortement spontane",v:"1953376152301331",
fr:["Fausses couches à répétition","Perdre plusieurs grossesses de suite. Une épreuve très douloureuse.","Deux ou trois fausses couches ou plus, souvent au premier trimestre.","Un bilan complet (utérus, hormones, sang, ovaires polykystiques) pour comprendre et protéger la prochaine grossesse."],
ar:["الإجهاض المتكرر","فقدان عدة حمول متتالية. تجربة مؤلمة جداً.","إجهاضان أو ثلاثة أو أكثر، غالباً في الأشهر الأولى.","فحوصات شاملة (الرحم، الهرمونات، الدم، تكيس المبايض) للفهم وحماية الحمل القادم."]},
{c:"fert",k:"prolactine hyperprolactinemie ecoulement lait seins",
fr:["Hyperprolactinémie","Trop d'hormone du lait (prolactine), qui bloque les règles et l'ovulation.","Règles absentes ou irrégulières, écoulement de lait sans grossesse.","Une prise de sang et un traitement qui rétablissent souvent le cycle et la fertilité."],
ar:["ارتفاع هرمون الحليب (البرولاكتين)","زيادة هرمون الحليب الذي يوقف الدورة والإباضة.","غياب الدورة أو عدم انتظامها، إفراز الحليب دون حمل.","تحليل دم وعلاج يعيدان غالباً انتظام الدورة والخصوبة."]},
{c:"fert",k:"homme sperme spermogramme mari conjoint",
fr:["Fertilité de l'homme","Dans près d'un couple sur deux, la cause vient aussi de l'homme.","Aucun signe visible ; seul le spermogramme permet de savoir.","Le bilan se fait à deux : le docteur oriente le conjoint pour un spermogramme."],
ar:["خصوبة الرجل","في حوالي نصف الحالات، يكون السبب أيضاً عند الرجل.","لا علامات ظاهرة؛ فقط تحليل السائل المنوي يسمح بالمعرفة.","الفحوصات تتم للزوجين معاً: توجه الطبيبة الزوج لتحليل السائل المنوي."]},
// ===== GROSSESSE =====
{c:"gros",k:"suivi grossesse echographie 3d 4d premiere visite enceinte",v:"3144009519120933",
fr:["Suivi de grossesse","Accompagner chaque étape, du test positif jusqu'à l'accouchement.","Vous êtes enceinte, ou pensez l'être.","Consultations mensuelles, échographies (dont 3D/4D), analyses, et les réponses à toutes vos questions."],
ar:["تتبع الحمل","مرافقة كل مرحلة، من الاختبار الإيجابي حتى الولادة.","أنتِ حامل، أو تظنين ذلك.","استشارات شهرية، فحوصات بالصدى (منها 3D/4D)، تحاليل، وأجوبة لكل أسئلتكِ."]},
{c:"gros",k:"nausees vomissements hyperemese",
fr:["Nausées et vomissements","Très fréquents au début de la grossesse, parfois très forts.","Nausées le matin ou toute la journée, vomissements, impossibilité de manger.","Conseils et traitement. Si vous ne gardez rien, il faut consulter rapidement."],
ar:["الغثيان والقيء","شائعان جداً في بداية الحمل، وأحياناً قويان جداً.","غثيان صباحي أو طوال اليوم، قيء، عدم القدرة على الأكل.","نصائح وعلاج. إذا كنتِ لا تحتفظين بأي شيء، يجب الاستشارة بسرعة."]},
{c:"gros",u:1,k:"saignement debut grossesse menace fausse couche",
fr:["Saignements pendant la grossesse","Du sang pendant la grossesse doit toujours être vérifié.","Saignements légers ou abondants, avec ou sans douleurs.","Une échographie rapide pour vérifier que tout va bien et agir si besoin."],
ar:["النزيف أثناء الحمل","نزول الدم أثناء الحمل يجب فحصه دائماً.","نزيف خفيف أو غزير، مع أو دون آلام.","فحص سريع بالصدى للتأكد أن كل شيء بخير والتدخل عند الحاجة."]},
{c:"gros",u:1,k:"grossesse extra uterine geu trompe",
fr:["Grossesse extra-utérine","L'embryon s'implante en dehors de l'utérus, souvent dans une trompe.","Retard de règles, douleur d'un côté du ventre, petits saignements, malaise.","Une urgence : diagnostic par échographie et prise de sang, traitement médical ou cœlioscopie."],
ar:["الحمل خارج الرحم","تنغرس البويضة الملقحة خارج الرحم، غالباً في قناة فالوب.","تأخر الدورة، ألم في جهة من البطن، نزيف خفيف، دوخة.","حالة مستعجلة: تشخيص بالصدى وتحليل دم، علاج دوائي أو جراحة بالمنظار."]},
{c:"gros",k:"diabete gestationnel sucre glycemie",
fr:["Diabète de grossesse","Un taux de sucre trop élevé qui apparaît pendant la grossesse.","Souvent aucun signe ; dépisté par une prise de sang vers 24-28 semaines.","Alimentation adaptée, surveillance du bébé, et traitement si nécessaire."],
ar:["سكري الحمل","ارتفاع نسبة السكر يظهر أثناء الحمل.","غالباً دون أعراض؛ يُكشف بتحليل دم حوالي الأسبوع 24-28.","نظام غذائي مناسب، مراقبة الجنين، وعلاج عند الحاجة."]},
{c:"gros",u:1,k:"tension preeclampsie hypertension oedeme maux tete",
fr:["Tension et pré-éclampsie","Une tension trop haute pendant la grossesse, qui peut devenir dangereuse.","Maux de tête, mouches devant les yeux, gonflement brutal du visage et des mains.","Contrôle de la tension à chaque visite. Ces signes = consultez en urgence."],
ar:["ارتفاع الضغط وتسمم الحمل","ضغط دم مرتفع أثناء الحمل، قد يصبح خطيراً.","صداع، رؤية نقاط أمام العينين، انتفاخ مفاجئ للوجه واليدين.","قياس الضغط في كل زيارة. هذه العلامات = استشارة مستعجلة."]},
{c:"gros",k:"anemie fer fatigue",
fr:["Anémie pendant la grossesse","Un manque de fer, fréquent quand on est enceinte.","Fatigue, pâleur, essoufflement, vertiges.","Prise de sang et supplément en fer adapté."],
ar:["فقر الدم أثناء الحمل","نقص الحديد، شائع أثناء الحمل.","تعب، شحوب، ضيق التنفس، دوخة.","تحليل دم ومكمل حديد مناسب."]},
{c:"gros",u:1,k:"contractions premature accouchement premature",
fr:["Contractions trop tôt (menace d'accouchement prématuré)","Des contractions avant 37 semaines de grossesse.","Ventre qui durcit régulièrement, douleurs dans le dos, perte de liquide.","Consultez vite : repos, traitement, et surveillance du col."],
ar:["تقلصات مبكرة (خطر الولادة المبكرة)","تقلصات قبل الأسبوع 37 من الحمل.","تصلب البطن بانتظام، ألم في الظهر، نزول سائل.","استشيري بسرعة: راحة، علاج، ومراقبة عنق الرحم."]},
{c:"gros",u:1,k:"bebe bouge moins mouvements actifs foetus",
fr:["Bébé qui bouge moins","Une diminution des mouvements du bébé doit toujours alerter.","Moins de mouvements que d'habitude, surtout au 3e trimestre.","Allez consulter le jour même pour un monitoring et une échographie."],
ar:["الجنين يتحرك أقل","انخفاض حركة الجنين يجب أن يُنبه دائماً.","حركات أقل من المعتاد، خاصة في الأشهر الأخيرة.","استشيري في نفس اليوم لمراقبة القلب وفحص بالصدى."]},
{c:"gros",k:"placenta praevia bas insere",
fr:["Placenta bas (placenta prævia)","Le placenta est placé trop bas, près du col de l'utérus.","Souvent découvert à l'échographie ; parfois saignements sans douleur.","Surveillance par échographie et un plan d'accouchement adapté."],
ar:["المشيمة المنزاحة","المشيمة منخفضة جداً، قرب عنق الرحم.","غالباً تُكتشف بالصدى؛ أحياناً نزيف دون ألم.","مراقبة بالصدى وخطة ولادة مناسبة."]},
{c:"gros",k:"rhesus negatif incompatibilite groupe sanguin",
fr:["Rhésus négatif","Si vous êtes rhésus négatif, une protection est parfois nécessaire pour le bébé.","Groupe sanguin « négatif » (O-, A-, B-, AB-).","Suivi et injection préventive au bon moment."],
ar:["فصيلة الدم السالبة (الريزوس)","إذا كانت فصيلتكِ سالبة، قد تكون الحماية ضرورية للجنين.","فصيلة دم « سالبة » (-O، -A، -B، -AB).","متابعة وحقنة وقائية في الوقت المناسب."]},
{c:"gros",r:1,k:"cholestase demangeaisons mains pieds grossesse",
fr:["Cholestase de la grossesse","Une maladie rare du foie pendant la grossesse.","Démangeaisons intenses, surtout des paumes et des plantes des pieds, la nuit.","Prise de sang et surveillance rapprochée du bébé."],
ar:["الركود الصفراوي أثناء الحمل","مرض نادر في الكبد أثناء الحمل.","حكة شديدة، خاصة في راحتي اليدين والقدمين، ليلاً.","تحليل دم ومراقبة دقيقة للجنين."]},
{c:"gros",r:1,k:"mole hydatiforme grossesse molaire",
fr:["Grossesse molaire","Une grossesse anormale où le placenta se développe mal. Rare.","Saignements, vomissements très forts, ventre plus gros que prévu.","Diagnostic par échographie, évacuation et suivi par prises de sang."],
ar:["الحمل العنقودي","حمل غير طبيعي تنمو فيه المشيمة بشكل خاطئ. نادر.","نزيف، قيء شديد جداً، بطن أكبر من المتوقع.","تشخيص بالصدى، إفراغ الرحم ومتابعة بتحاليل الدم."]},
{c:"gros",k:"accouchement cesarienne voie basse peur",
fr:["Peur de l'accouchement","Voie basse ou césarienne : beaucoup de femmes ont peur, et c'est normal.","Angoisse, mauvaise expérience précédente, questions sans réponse.","On en parle ensemble pour préparer un accouchement serein et sûr."],
ar:["الخوف من الولادة","طبيعية أو قيصرية: كثير من النساء يخفن، وهذا طبيعي.","قلق، تجربة سابقة سيئة، أسئلة دون أجوبة.","نتحدث معاً للتحضير لولادة مطمئنة وآمنة."]},
// ===== APRÈS ACCOUCHEMENT =====
{c:"post",u:1,k:"hemorragie post partum saignement apres accouchement",
fr:["Saignements après l'accouchement","Des pertes de sang sont normales, mais pas si elles sont très fortes.","Saignements qui augmentent, gros caillots, fièvre, mauvaise odeur.","Consultez rapidement : examen et échographie."],
ar:["النزيف بعد الولادة","نزول الدم طبيعي، لكن ليس إذا كان غزيراً جداً.","نزيف يزداد، خثرات كبيرة، حمى، رائحة كريهة.","استشيري بسرعة: فحص سريري وبالصدى."]},
{c:"post",k:"baby blues depression post partum tristesse pleurs",
fr:["Baby blues et dépression après bébé","Tristesse, pleurs ou angoisse après la naissance. Vous n'êtes pas une mauvaise mère.","Pleurs, fatigue extrême, perte de plaisir, idées noires qui durent plus de deux semaines.","Parlez-en sans honte : écoute, soutien, et orientation vers une aide adaptée."],
ar:["الكآبة والاكتئاب بعد الولادة","حزن أو بكاء أو قلق بعد الولادة. لستِ أماً سيئة.","بكاء، تعب شديد، فقدان المتعة، أفكار سوداء تدوم أكثر من أسبوعين.","تحدثي دون خجل: إصغاء، دعم، وتوجيه نحو المساعدة المناسبة."]},
{c:"post",k:"cicatrice cesarienne episiotomie douleur",
fr:["Douleur de cicatrice","Une cicatrice de césarienne ou d'épisiotomie qui fait encore mal.","Douleur, rougeur, écoulement, douleur pendant les rapports.","Examen de la cicatrice et soins adaptés."],
ar:["ألم الندبة","ندبة القيصرية أو شق العجان لا تزال تؤلم.","ألم، احمرار، سيلان، ألم أثناء العلاقة.","فحص الندبة وعلاج مناسب."]},
{c:"post",k:"allaitement mastite engorgement crevasses sein",
fr:["Problèmes d'allaitement","Seins engorgés, crevasses ou infection du sein (mastite).","Sein dur, rouge, chaud, douloureux, fièvre.","Conseils pratiques et traitement si infection, pour continuer à allaiter si vous le souhaitez."],
ar:["مشاكل الرضاعة","احتقان الثدي، تشققات أو التهاب الثدي.","ثدي صلب، أحمر، ساخن، مؤلم، حمى.","نصائح عملية وعلاج في حالة الالتهاب، لمواصلة الرضاعة إذا رغبتِ."]},
{c:"post",k:"contraception apres bebe allaitement",
fr:["Contraception après bébé","Une grossesse peut revenir vite, même en allaitant.","Vous ne souhaitez pas de nouvelle grossesse tout de suite.","Choisir ensemble une méthode compatible avec l'allaitement."],
ar:["منع الحمل بعد الولادة","قد يحدث حمل بسرعة، حتى أثناء الرضاعة.","لا ترغبين في حمل جديد مباشرة.","نختار معاً وسيلة تتوافق مع الرضاعة."]},
// ===== SEINS =====
{c:"seins",k:"boule sein nodule kyste",
fr:["Boule dans le sein","La plupart des boules sont bénignes, mais il faut toujours vérifier.","Boule palpable, sein qui change de forme, peau qui se rétracte.","Examen des seins, échographie ou mammographie, et retrait si nécessaire."],
ar:["كتلة في الثدي","معظم الكتل حميدة، لكن يجب التحقق دائماً.","كتلة محسوسة، تغير شكل الثدي، انكماش الجلد.","فحص الثديين، فحص بالصدى أو بالأشعة، والإزالة عند الحاجة."]},
{c:"seins",k:"douleur seins mastodynie",
fr:["Douleurs des seins","Souvent liées au cycle et sans gravité.","Seins tendus et sensibles avant les règles.","Examen rassurant et traitement si la douleur gêne."],
ar:["ألم الثديين","غالباً مرتبط بالدورة وغير خطير.","ثديان مشدودان وحساسان قبل الدورة.","فحص مطمئن وعلاج إذا كان الألم مزعجاً."]},
{c:"seins",k:"ecoulement mamelon lait sang",
fr:["Écoulement du mamelon","Du liquide qui sort du mamelon en dehors de l'allaitement.","Écoulement laiteux, clair ou avec du sang.","Examen, bilan hormonal et imagerie selon le type d'écoulement."],
ar:["إفرازات من الحلمة","سائل يخرج من الحلمة خارج فترة الرضاعة.","إفرازات حليبية، شفافة أو بها دم.","فحص، تحاليل هرمونية وأشعة حسب نوع الإفرازات."]},
// ===== DÉPISTAGE & CANCERS =====
{c:"cancer",k:"frottis depistage col",
fr:["Frottis de dépistage","Un examen simple et rapide qui protège du cancer du col de l'utérus.","Recommandé régulièrement à partir de 25 ans, même sans symptôme.","Fait au cabinet en quelques minutes, presque sans gêne."],
ar:["اللطاخة (مسحة عنق الرحم)","فحص بسيط وسريع يحمي من سرطان عنق الرحم.","يُنصح به بانتظام ابتداءً من 25 سنة، حتى دون أعراض.","يُجرى في العيادة في دقائق، دون إزعاج تقريباً."]},
{c:"cancer",k:"frottis anormal dysplasie colposcopie hpv",
fr:["Frottis anormal","Un résultat anormal ne veut pas dire cancer : il signale des cellules à surveiller.","Résultat avec « HPV », « ASCUS », « lésion »…","Colposcopie au cabinet (le docteur est diplômée en colposcopie et pathologie cervico-vaginale à Lille) et traitement des lésions."],
ar:["لطاخة غير طبيعية","نتيجة غير طبيعية لا تعني السرطان: إنها تشير إلى خلايا يجب مراقبتها.","نتيجة بها « HPV »، « ASCUS »، « إصابة »…","تنظير مهبلي في العيادة (الطبيبة حاصلة على دبلوم فيه من ليل بفرنسا) وعلاج الإصابات."]},
{c:"cancer",k:"cancer col uterus vaccin hpv",
fr:["Cancer du col de l'utérus","Un cancer qu'on peut éviter grâce au frottis et au vaccin HPV.","Souvent aucun signe au début ; plus tard, saignements après les rapports.","Dépistage régulier, et conseils sur la vaccination de vos filles."],
ar:["سرطان عنق الرحم","سرطان يمكن تجنبه بفضل اللطاخة واللقاح ضد HPV.","غالباً دون أعراض في البداية؛ لاحقاً، نزيف بعد العلاقة.","كشف منتظم، ونصائح حول تلقيح بناتكِ."]},
{c:"cancer",u:1,k:"cancer endometre saignement apres menopause",
fr:["Saignement après la ménopause","Tout saignement après la ménopause doit être vérifié rapidement.","Saignement, même léger, plus d'un an après les dernières règles.","Échographie et, si besoin, hystéroscopie pour éliminer un cancer de l'endomètre."],
ar:["النزيف بعد سن اليأس","أي نزيف بعد سن اليأس يجب فحصه بسرعة.","نزيف، حتى لو كان خفيفاً، بعد أكثر من سنة من آخر دورة.","فحص بالصدى، وعند الحاجة تنظير الرحم، لاستبعاد سرطان بطانة الرحم."]},
{c:"cancer",k:"cancer ovaire ventre gonfle",
fr:["Cancer de l'ovaire","Un cancer discret, souvent découvert tard.","Ventre gonflé qui dure, sensation de satiété rapide, douleurs du bas-ventre.","Échographie et bilan au moindre doute, surtout s'il y a des cas dans la famille."],
ar:["سرطان المبيض","سرطان خفي، غالباً يُكتشف متأخراً.","انتفاخ البطن لمدة طويلة، الشبع بسرعة، آلام أسفل البطن.","فحص بالصدى وتحاليل عند أدنى شك، خاصة إذا وُجدت حالات في العائلة."]},
{c:"cancer",k:"cancer sein mammographie depistage autopalpation",
fr:["Dépistage du cancer du sein","Détecté tôt, le cancer du sein se soigne très bien.","Recommandé à partir de 40-45 ans, plus tôt s'il y a des cas dans la famille.","Examen des seins à chaque visite, mammographie, et apprendre l'autopalpation."],
ar:["الكشف عن سرطان الثدي","عند اكتشافه مبكراً، يُعالج سرطان الثدي بشكل جيد جداً.","يُنصح به ابتداءً من 40-45 سنة، وقبل ذلك إذا وُجدت حالات في العائلة.","فحص الثديين في كل زيارة، تصوير الثدي بالأشعة، وتعلم الفحص الذاتي."]},
// ===== CONTRACEPTION & COUPLE =====
{c:"contra",k:"contraception pilule choisir methode",
fr:["Choisir sa contraception","Pilule, stérilet, implant, injection… il existe une méthode pour chaque femme.","Vous voulez espacer les naissances ou ne pas avoir d'enfant pour le moment.","On choisit ensemble selon votre santé, votre âge et votre projet."],
ar:["اختيار وسيلة منع الحمل","الحبوب، اللولب، الغرسة، الحقنة… توجد وسيلة لكل امرأة.","ترغبين في المباعدة بين الولادات أو عدم الإنجاب حالياً.","نختار معاً حسب صحتكِ وسنكِ ومشروعكِ."]},
{c:"contra",k:"sterilet diu pose retrait",
fr:["Stérilet (DIU)","Une contraception longue durée, posée au cabinet en quelques minutes.","Envie d'une contraception sans y penser chaque jour.","Pose, contrôle et retrait au cabinet, avec douceur."],
ar:["اللولب","وسيلة منع حمل طويلة المدى، تُركب في العيادة في دقائق.","الرغبة في وسيلة دون التفكير فيها كل يوم.","تركيب، مراقبة وإزالة في العيادة، بكل لطف."]},
{c:"contra",k:"oubli pilule contraception urgence lendemain",
fr:["Oubli de pilule, contraception d'urgence","Un oubli ou un rapport non protégé : il existe des solutions si on agit vite.","Pilule oubliée, préservatif déchiré, rapport non prévu.","Appelez rapidement : plus la contraception d'urgence est prise tôt, mieux elle marche."],
ar:["نسيان الحبة، منع الحمل الطارئ","نسيان أو علاقة غير محمية: توجد حلول إذا تصرفتِ بسرعة.","نسيان الحبة، تمزق الواقي، علاقة غير مخطط لها.","اتصلي بسرعة: كلما أُخذت وسيلة الطوارئ مبكراً، كانت أكثر فعالية."]},
{c:"contra",k:"dyspareunie douleur rapports",
fr:["Douleurs pendant les rapports","Avoir mal pendant les rapports n'est pas normal, et on peut le soigner.","Douleur à l'entrée du vagin ou au fond, brûlures après.","Recherche de la cause (infection, sécheresse, endométriose, cicatrice) et traitement."],
ar:["الألم أثناء العلاقة الزوجية","الألم أثناء العلاقة ليس طبيعياً، ويمكن علاجه.","ألم عند مدخل المهبل أو في العمق، حرقة بعد العلاقة.","البحث عن السبب (التهاب، جفاف، بطانة مهاجرة، ندبة) والعلاج."]},
{c:"contra",k:"vaginisme penetration impossible nuit noces",
fr:["Vaginisme","Une contraction involontaire qui rend la pénétration difficile ou impossible.","Impossibilité d'avoir des rapports, peur intense, parfois depuis le mariage.","Une prise en charge douce, sans jugement, souvent avec de très bons résultats."],
ar:["التشنج المهبلي","انقباض لا إرادي يجعل الإيلاج صعباً أو مستحيلاً.","استحالة العلاقة، خوف شديد، أحياناً منذ الزواج.","تكفل لطيف ودون أحكام، غالباً بنتائج جيدة جداً."]},
{c:"contra",k:"baisse desir libido",
fr:["Baisse du désir","Un sujet tabou mais fréquent, qui peut avoir des causes hormonales ou médicales.","Moins d'envie, fatigue, douleurs, tensions dans le couple.","On en parle en confiance et on cherche les causes qui peuvent se soigner."],
ar:["ضعف الرغبة","موضوع مسكوت عنه لكنه شائع، وقد تكون له أسباب هرمونية أو طبية.","رغبة أقل، تعب، آلام، توتر في العلاقة الزوجية.","نتحدث بثقة ونبحث عن الأسباب القابلة للعلاج."]},
{c:"contra",k:"saignement apres rapport",
fr:["Saignement après les rapports","Un saignement après les rapports doit être examiné.","Quelques gouttes ou plus de sang après un rapport.","Examen du col et frottis pour trouver la cause (infection, polype, lésion)."],
ar:["النزيف بعد العلاقة","النزيف بعد العلاقة يجب فحصه.","بضع قطرات أو أكثر من الدم بعد العلاقة.","فحص عنق الرحم ولطاخة لمعرفة السبب (التهاب، زائدة لحمية، إصابة)."]},
{c:"contra",k:"esthetique gynecologique laser relachement",
fr:["Esthétique et confort intime","Des soins pour le relâchement ou l'inconfort intime, après des accouchements ou avec l'âge.","Sensation de relâchement, gêne, perte de confiance.","Des solutions adaptées, dont le laser, en toute discrétion."],
ar:["التجميل والراحة الحميمية","علاجات للارتخاء أو عدم الراحة الحميمية، بعد الولادات أو مع التقدم في السن.","إحساس بالارتخاء، إزعاج، فقدان الثقة.","حلول مناسبة، منها الليزر، بكل سرية."]},
// ===== MÉNOPAUSE =====
{c:"meno",k:"bouffees chaleur sueurs nuit",
fr:["Bouffées de chaleur","Le signe le plus connu de la ménopause.","Chaleur soudaine, sueurs la nuit, réveils, irritabilité.","Conseils et traitements, hormonaux ou non, selon votre santé."],
ar:["الهبات الساخنة","العلامة الأكثر شهرة لسن اليأس.","حرارة مفاجئة، تعرق ليلي، استيقاظ، عصبية.","نصائح وعلاجات، هرمونية أو غير هرمونية، حسب صحتكِ."]},
{c:"meno",k:"secheresse vaginale atrophie laser",
fr:["Sécheresse vaginale","Avec la baisse des hormones, le vagin devient plus sec et fragile.","Sécheresse, brûlures, douleurs pendant les rapports, infections urinaires.","Soins locaux et traitement de l'atrophie vulvo-vaginale au laser au cabinet."],
ar:["الجفاف المهبلي","مع انخفاض الهرمونات، يصبح المهبل أكثر جفافاً وهشاشة.","جفاف، حرقة، ألم أثناء العلاقة، التهابات بولية.","علاجات موضعية وعلاج الضمور المهبلي بالليزر في العيادة."]},
{c:"meno",k:"osteoporose os fragiles",
fr:["Os fragiles (ostéoporose)","Après la ménopause, les os perdent de leur solidité.","Souvent aucun signe avant une fracture.","Conseils (calcium, vitamine D, activité), et examens si nécessaire."],
ar:["هشاشة العظام","بعد سن اليأس، تفقد العظام من صلابتها.","غالباً دون أعراض قبل حدوث كسر.","نصائح (الكالسيوم، فيتامين د، النشاط البدني)، وفحوصات عند الحاجة."]},
{c:"meno",k:"premenopause perimenopause 45 ans cycles",
fr:["Préménopause","Les années avant la ménopause, où le cycle se dérègle.","Règles irrégulières, plus abondantes, humeur changeante, sommeil perturbé.","Faire le point et traiter les symptômes gênants pour bien vivre cette transition."],
ar:["ما قبل سن اليأس","السنوات التي تسبق سن اليأس، حيث تضطرب الدورة.","دورة غير منتظمة أو أغزر، تقلب المزاج، اضطراب النوم.","تقييم الوضع وعلاج الأعراض المزعجة لتعيشي هذه المرحلة بشكل جيد."]},
{c:"gros",k:"echographie 3d 4d grossesse visage bebe sexe",
fr:["Échographie de grossesse 3D/4D","Une échographie qui montre le bébé en relief (3D) et en mouvement (4D), en plus des échographies de suivi.","Vous êtes enceinte et souhaitez voir votre bébé en détail, ou une échographie de contrôle est prévue.","Échographies de suivi au cabinet, avec images 3D/4D quand la position du bébé le permet, et explication de chaque mesure."],
ar:["الفحص بالصدى للحامل 3D/4D","فحص بالصدى يُظهر الجنين بشكل مجسم (3D) وفي حركة (4D)، إضافة إلى فحوصات المتابعة.","أنتِ حامل وترغبين في رؤية جنينكِ بالتفصيل، أو لديكِ فحص مراقبة.","فحوصات المتابعة بالصدى في العيادة، مع صور 3D/4D حسب وضعية الجنين، وشرح كل قياس."]},
{c:"gros",k:"symptomes debut grossesse enceinte test",
fr:["Symptômes du début de grossesse","Les premiers signes qui peuvent faire penser à une grossesse, avant même le test.","Retard de règles, seins tendus, nausées, fatigue, envies fréquentes d'uriner, petites pertes de sang.","Un test de grossesse, puis une première consultation et une échographie pour dater la grossesse et vérifier qu'elle est bien dans l'utérus."],
ar:["أعراض بداية الحمل","العلامات الأولى التي قد تدل على الحمل، حتى قبل الاختبار.","تأخر الدورة، انتفاخ وألم الثديين، الغثيان، التعب، كثرة التبول، نزول قطرات دم خفيفة.","اختبار الحمل، ثم استشارة أولى وفحص بالصدى لتحديد عمر الحمل والتأكد من أنه داخل الرحم."]},
{c:"gros",k:"grossesse a risque haut risque surveillance",
fr:["Grossesse à risque","Une grossesse qui demande une surveillance plus rapprochée, à cause de la santé de la maman ou du bébé.","Diabète, tension, antécédent de fausse couche ou de césarienne, jumeaux, grossesse après 40 ans, maladie chronique.","Un suivi plus fréquent, des examens adaptés et un plan clair pour la fin de grossesse et l'accouchement."],
ar:["الحمل عالي الخطورة","حمل يحتاج إلى مراقبة أدق بسبب صحة الأم أو الجنين.","السكري، ارتفاع الضغط، سوابق إجهاض أو قيصرية، توأم، حمل بعد 40 سنة، مرض مزمن.","متابعة أكثر انتظاماً، فحوصات مناسبة وخطة واضحة لنهاية الحمل والولادة."]},
{c:"gros",k:"accouchement cesarienne voie basse naturelle",
fr:["Accouchement : voie basse ou césarienne","Le docteur suit votre grossesse jusqu'à l'accouchement, par voie naturelle ou par césarienne selon votre situation.","Fin de grossesse, ancienne césarienne, bébé mal positionné, ou simplement des questions sur le jour J.","On choisit ensemble le mode d'accouchement le plus sûr, on prépare le jour J, puis on suit la maman après la naissance."],
ar:["الولادة: طبيعية أو قيصرية","تتابع الطبيبة حملكِ حتى الولادة، طبيعية أو قيصرية حسب حالتكِ.","نهاية الحمل، قيصرية سابقة، وضعية غير مناسبة للجنين، أو أسئلة حول يوم الولادة.","نختار معاً طريقة الولادة الأكثر أماناً، نحضّر ليوم الولادة، ثم نتابع الأم بعد الولادة."]},
{c:"fert",k:"insemination fiv fecondation in vitro pma",
fr:["Insémination et FIV","Les techniques d'aide médicale à la procréation, quand la grossesse ne vient pas malgré les traitements simples.","Infertilité qui dure, trompes bouchées, problème de sperme, endométriose, âge.","Le bilan du couple et la stimulation sont faits au cabinet ; le docteur, diplômée en stérilité du couple et FIV, explique les options et oriente vers la technique adaptée."],
ar:["التلقيح الاصطناعي وأطفال الأنابيب","تقنيات المساعدة الطبية على الإنجاب، عندما لا يحدث الحمل رغم العلاجات البسيطة.","عقم مستمر، انسداد القناتين، مشكل في السائل المنوي، بطانة الرحم المهاجرة، التقدم في السن.","فحوصات الزوجين والتحفيز في العيادة؛ والطبيبة، الحاصلة على دبلوم في عقم الزوجين وأطفال الأنابيب، تشرح الخيارات وتوجه نحو التقنية المناسبة."]},
{c:"regles",k:"hirsutisme poils pilosite excessive menton hormones",
fr:["Excès de poils (hirsutisme)","Des poils plus nombreux ou plus épais que d'habitude, souvent liés aux hormones.","Poils sur le menton, la lèvre, la poitrine ou le ventre, souvent avec acné et règles irrégulières.","Un bilan hormonal et une échographie pour chercher la cause (souvent des ovaires polykystiques) et un traitement adapté."],
ar:["كثرة الشعر (الشعرانية)","شعر أكثر أو أكثف من المعتاد، غالباً بسبب الهرمونات.","شعر في الذقن أو الشفة أو الصدر أو البطن، غالباً مع حب الشباب واضطراب الدورة.","تحاليل هرمونية وفحص بالصدى لمعرفة السبب (غالباً تكيس المبايض) وعلاج مناسب."]},
{c:"uterus",k:"coelioscopie laparoscopie chirurgie mini invasive",
fr:["Chirurgie par cœlioscopie","Une chirurgie par de petites incisions, avec une caméra, pour opérer sans ouvrir le ventre.","Kyste de l'ovaire, fibrome, endométriose, grossesse extra-utérine, bilan des trompes.","Le docteur, diplômée en cœlioscopie, explique l'intervention ; les cicatrices sont petites et la récupération plus rapide."],
ar:["الجراحة بالمنظار","جراحة عبر فتحات صغيرة بالكاميرا، دون فتح البطن.","كيس المبيض، الورم الليفي، بطانة الرحم المهاجرة، الحمل خارج الرحم، فحص القناتين.","الطبيبة الحاصلة على دبلوم في الجراحة بالمنظار تشرح العملية؛ الندوب صغيرة والتعافي أسرع."]},
{c:"uterus",k:"hysteroscopie camera uterus polype cloison",
fr:["Hystéroscopie","Un examen avec une petite caméra passée par les voies naturelles pour voir et traiter l'intérieur de l'utérus.","Saignements anormaux, polype, fibrome dans la cavité, difficulté à concevoir, fausses couches.","Le docteur, diplômée en hystéroscopie, peut voir et traiter dans le même temps, sans cicatrice sur le ventre."],
ar:["تنظير الرحم","فحص بكاميرا صغيرة عبر المسالك الطبيعية لرؤية داخل الرحم وعلاجه.","نزيف غير طبيعي، زائدة لحمية، ورم ليفي داخل الرحم، صعوبة الحمل، إجهاض متكرر.","الطبيبة الحاصلة على دبلوم في تنظير الرحم يمكنها التشخيص والعلاج في نفس الوقت، دون ندبة في البطن."]}

];
const UI={
fr:{all:"Tout",found:n=>n+" problème"+(n>1?"s":""),none:"Aucun résultat. Écrivez-nous sur WhatsApp : le docteur vous répondra.",
what:"C'est quoi ?",signs:"Les signes",do:"Ce que fait le docteur",urg:"⚠️ Urgence : consultez immédiatement ou allez aux urgences.",rare:"Rare",
video:"▶ Voir sa vidéo sur ce sujet",page:"Lire la page complète →",rdv:"Prendre rendez-vous pour ce problème",msg:"Bonjour Docteur, je souhaite un rendez-vous pour : "},
ar:{all:"الكل",found:n=>"عدد المشاكل: "+n,none:"لا توجد نتيجة. راسلينا على واتساب: ستجيبكِ الطبيبة.",
what:"ما هو؟",signs:"العلامات",do:"ما تقوم به الطبيبة",urg:"⚠️ حالة مستعجلة: استشيري فوراً أو توجهي إلى المستعجلات.",rare:"نادر",
video:"▶ شاهدي فيديو الطبيبة حول هذا الموضوع",page:"اقرئي الصفحة الكاملة ←",rdv:"احجزي موعداً لهذه المشكلة",msg:"السلام عليكم دكتورة، أرغب في موعد بخصوص: "}
};
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[أإآ]/g,"ا").replace(/ة/g,"ه").replace(/ى/g,"ي").replace(/[ً-ٰٟ]/g,"");
function pageUrl(i,lang){return (window.SITE_BASE||'')+(lang==='ar'?'ar/':'')+'problemes/'+window.SLUGS[i]+'.html';}
function buildGuide(lang){
  const root=document.querySelector('.lang-root[data-lang="'+lang+'"]');if(!root)return;
  const box=root.querySelector('.guide'); if(!box)return;
  const T=UI[lang]; let cat="all";
  const chips=box.querySelector('.cats'); const list=box.querySelector('.plist'); const cnt=box.querySelector('.count');
  const input=box.querySelector('.gsearch');
  chips.innerHTML='<button class="cat on" data-c="all">'+T.all+'</button>'+Object.entries(CATS).map(([k,v])=>'<button class="cat" data-c="'+k+'">'+v.i+' '+v[lang]+'</button>').join('');
  list.innerHTML=PB.map((p,i)=>{const t=p[lang];
    const wa='https://wa.me/212632956931?text='+encodeURIComponent(T.msg+t[0]);
    return '<details class="pb" data-c="'+p.c+'" data-s="'+norm(p.fr[0]+' '+p.ar[0]+' '+p.k+' '+p.fr[2]+' '+p.ar[2]+' '+CATS[p.c].fr+' '+CATS[p.c].ar)+'">'+
    '<summary><span class="pi">'+CATS[p.c].i+'</span><span class="pt">'+t[0]+'</span>'+(p.r?'<span class="badge rare">'+T.rare+'</span>':'')+(p.u?'<span class="badge urg">!</span>':'')+'</summary>'+
    '<div class="pbody">'+(p.u?'<p class="urgent">'+T.urg+'</p>':'')+
    '<div class="pgrid"><div><h5>'+T.what+'</h5><p>'+t[1]+'</p></div><div><h5>'+T.signs+'</h5><p>'+t[2]+'</p></div><div><h5>'+T.do+'</h5><p>'+t[3]+'</p></div></div>'+
    '<div class="pact">'+(window.SLUGS?'<a class="plink" href="'+pageUrl(i,lang)+'">'+T.page+'</a>':'')+(p.v?'<a class="vlink" target="_blank" rel="noopener" href="https://www.facebook.com/reel/'+p.v+'/">'+T.video+'</a>':'')+
    '<a class="btn btn-wa sm" target="_blank" rel="noopener" href="'+wa+'">'+T.rdv+'</a></div></div></details>';}).join('')+
    '<p class="noresult" hidden>'+T.none+'</p>';
  const items=[...list.querySelectorAll('.pb')];
  function apply(){const q=norm(input.value.trim());let n=0;
    items.forEach(it=>{const ok=(cat==="all"||it.dataset.c===cat)&&(!q||q.split(/\s+/).every(w=>it.dataset.s.includes(w)));it.hidden=!ok;if(ok)n++;});
    cnt.textContent=T.found(n);list.querySelector('.noresult').hidden=n>0;}
  chips.onclick=e=>{const b=e.target.closest('.cat');if(!b)return;cat=b.dataset.c;chips.querySelectorAll('.cat').forEach(x=>x.classList.toggle('on',x===b));apply();};
  input.oninput=apply;
  // recherche du haut
  const hs=root.querySelector('.hsearch');
  if(hs){const go=v=>{input.value=v;cat="all";chips.querySelectorAll('.cat').forEach(x=>x.classList.toggle('on',x.dataset.c==="all"));apply();box.scrollIntoView({behavior:'smooth'});
      const first=items.find(i=>!i.hidden);if(first&&v)first.open=true;};
    hs.querySelector('form').onsubmit=e=>{e.preventDefault();go(hs.querySelector('input').value);};
    hs.querySelectorAll('.quick button').forEach(b=>b.onclick=()=>go(b.dataset.q));}
  apply();
}


// ====== Clé Web3Forms (à remplir) ======
const W3F_KEY=""; // ← coller ici la clé Web3Forms
const FORM_READY=W3F_KEY.length>10;

// ====== Formulaire ======
document.querySelectorAll('.askform').forEach(f=>{
  f.addEventListener('submit',async e=>{
    e.preventDefault();
    const msg=f.querySelector('.form-msg'), btn=f.querySelector('button[type=submit]');
    const data=Object.fromEntries(new FormData(f).entries());
    if(data.botcheck)return;
    const waText=f.dataset.wa+(data["Prénom"]||"")+" — "+(data["Message"]||"");
    const waLink='https://wa.me/212632956931?text='+encodeURIComponent(waText);
    if(!FORM_READY){ // pas encore de clé : on passe par WhatsApp
      window.open(waLink,'_blank');return;
    }
    btn.disabled=true;
    try{
      data.access_key=W3F_KEY; data.from_name="Site Dr Ouammou";
      const r=await fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)});
      const j=await r.json();
      if(j.success){msg.className='form-msg ok';msg.textContent=f.dataset.ok;f.reset();}
      else throw new Error();
    }catch(err){msg.className='form-msg err';msg.innerHTML=f.dataset.err+' <a target="_blank" rel="noopener" href="'+waLink+'">WhatsApp →</a>';}
    msg.hidden=false;btn.disabled=false;
  });
});

// ====== Assistant ======
const AT={
fr:{ititle:"Posez votre question à l'assistant",isugg:["🩸 J'ai mal pendant mes règles","🤍 Je n'arrive pas à tomber enceinte","🌸 J'ai des démangeaisons","🌺 J'ai un kyste","🤰 Je suis enceinte et j'ai des nausées","🌿 Bouffées de chaleur","Fibrome","Endométriose","Ovaires polykystiques","Fausses couches"],title:"Assistant du cabinet",sub:"Répond avec les fiches validées par le docteur",open:"Une question ?",
hello:"Bonjour 👋 Décrivez votre problème avec vos mots (par exemple : « j'ai mal pendant mes règles »). Je vous montre les fiches du docteur qui correspondent.",
warn:"Je ne remplace pas une consultation et je ne pose pas de diagnostic.",
ph:"Écrivez votre question…",send:"Envoyer",
found:"Voici ce qui peut correspondre :",more:"Lire la fiche",rdv:"Rendez-vous",
none:"Je n'ai pas trouvé de fiche qui correspond. Le mieux est de poser votre question directement au docteur :",
write:"✉️ Écrire au docteur",wa:"💬 WhatsApp",
urgent:"⚠️ Ce que vous décrivez peut être une urgence. Appelez le cabinet ou allez immédiatement aux urgences.",call:"📞 Appeler",
hi:"Bonjour ! Comment puis-je vous aider ? Décrivez ce que vous ressentez.",thanks:"Avec plaisir 🌸 Prenez soin de vous.",
sugg:["J'ai mal pendant mes règles","Je n'arrive pas à tomber enceinte","J'ai des démangeaisons","Je suis enceinte et j'ai des nausées","Bouffées de chaleur"]},
ar:{ititle:"اطرحي سؤالكِ على المساعد",isugg:["🩸 عندي ألم في الدورة","🤍 تأخر الحمل","🌸 عندي حكة","🌺 عندي كيس في المبيض","🤰 أنا حامل وعندي غثيان","🌿 هبات ساخنة","الورم الليفي","بطانة الرحم المهاجرة","تكيس المبايض","الإجهاض المتكرر"],title:"مساعد العيادة",sub:"يجيب بالمعلومات التي صادقت عليها الطبيبة",open:"عندكِ سؤال؟",
hello:"مرحباً 👋 صفي مشكلتكِ بكلماتكِ (مثلاً: « عندي ألم في الدورة »). سأعرض عليكِ صفحات الطبيبة المناسبة.",
warn:"لا أعوض الاستشارة الطبية ولا أقدم تشخيصاً.",
ph:"اكتبي سؤالكِ…",send:"إرسال",
found:"إليكِ ما قد يناسب حالتكِ:",more:"اقرئي الصفحة",rdv:"حجز موعد",
none:"لم أجد صفحة تناسب سؤالكِ. الأفضل أن تطرحي سؤالكِ مباشرة على الطبيبة:",
write:"✉️ راسلي الطبيبة",wa:"💬 واتساب",
urgent:"⚠️ ما تصفينه قد يكون حالة مستعجلة. اتصلي بالعيادة أو توجهي فوراً إلى المستعجلات.",call:"📞 اتصال",
hi:"مرحباً! كيف يمكنني مساعدتكِ؟ صفي ما تشعرين به.",thanks:"العفو 🌸 اعتني بنفسكِ.",
sugg:["عندي ألم في الدورة","تأخر الحمل","عندي حكة","أنا حامل وعندي غثيان","هبات ساخنة"]}
};
const STOP=new Set("je j ai a au aux de des du la le les l un une et ou en est suis mon ma mes me m pour par avec sans que qui quoi quand comment pourquoi est-ce ce cette ces il elle on nous vous tres trop plus pas ne n y d s c qu bonjour docteur svp merci depuis avoir etre fait faire mal beaucoup peu bien tout tous toujours souvent jours jour mois ans an".split(" ").concat("انا عندي عندى في من على عن الى إلى هل ما ماذا كيف لماذا مع و او أو هذا هذه ذلك التي الذي كان يكون دكتورة السلام عليكم شكرا بزاف شوية واش علاش كيفاش راه را ديال لي فيا".split(" ")));
// mots du langage courant / darija -> mots des fiches
const SYN={
"ventre":"bas-ventre douleurs","regle":"regles","reglement":"regles","menstruation":"regles","sang":"saignement","saigne":"saignement","saignements":"saignement",
"gratte":"demangeaisons","gratter":"demangeaisons","demange":"demangeaisons","odeur":"odeur","pertes":"pertes",
"bebe":"grossesse enceinte","enfant":"enceinte","concevoir":"enceinte","enceinte":"enceinte grossesse","vomir":"vomissements","vomis":"vomissements",
"pipi":"urinaire uriner","uriner":"urinaire","brule":"brulures","brulure":"brulures",
"sein":"sein seins","seins":"sein","boule":"boule","chaleur":"bouffees","sueurs":"bouffees",
"rapport":"rapports","rapports":"rapports","relation":"rapports","mari":"rapports conjoint",
"الدوره":"الدوره الشهريه","الحيض":"الدوره","العاده":"الدوره","الدم":"نزيف","دم":"نزيف","كيدير":"",
"حكه":"حكه","كيحكني":"حكه","الحكه":"حكه","ريحه":"رائحه","الولاده":"الولاده","ولد":"الحمل","الولد":"الحمل","الحمل":"الحمل",
"نولد":"صعوبه الحمل","نحمل":"صعوبه الحمل","مابغاش":"صعوبه","ماجاش":"صعوبه","الكرش":"اسفل البطن","فالكرش":"اسفل البطن","كرشي":"اسفل البطن","كيضرني":"الم","ضرني":"الم","كتضرني":"الم","كيحكني":"حكه","كتحكني":"حكه","خايبه":"كريهه","الريحه":"رائحه","حامل":"الحمل حامل","غثيان":"الغثيان","التقيا":"القيء","البول":"البول","الصهد":"الهبات","السخانه":"الهبات",
"الثدي":"الثدي","البزول":"الثدي","الكرش":"البطن","الوجع":"الم","وجع":"الم","حريق":"حرقه"
};
const SYNN={};Object.entries(SYN).forEach(([k,v])=>{SYNN[norm(k)]=norm(v);});
const URG={
fr:[["saign","enceinte"],["sang","enceinte"],["hemorragie"],["beaucoup","sang"],["bouge","moins"],["bouge","plus"],["bouge","pas"],["douleur","brutale"],["evanoui"],["perte","connaissance"],["perd","eaux"],["poche","eaux"],["convulsion"],["fievre","enceinte"],["fievre","accouch"],["vision","floue"],["mouches","yeux"],["suicid"]],
ar:[["نزيف","حامل"],["دم","حامل"],["نزيف","قوي"],["نزيف","كثير"],["يتحرك","اقل"],["ماكيتحركش"],["لا","يتحرك"],["الم","مفاجئ"],["الم","شديد","بطن"],["اغماء"],["غبت"],["ماء","الراس"],["تشنج"],["حمى","حامل"],["انتحار"]]
};
function stem(w){
  if(/[؀-ۿ]/.test(w)){const p=w.replace(/^(وال|بال|فال|كال|ال|و)/,"");if(p.length>=3)w=p;const s=w.replace(/(ات|ين|ون|ه|ي)$/,"");if(s.length>=3)w=s;return w.length>=2?w:null;}
  if(w.length<3)return null; return w.length>5?w.slice(0,w.length-2):w;
}
function findProblems(q,lang){
  const nq=norm(q);
  let words=nq.split(/[^a-z0-9؀-ۿ]+/).filter(w=>w&&!STOP.has(w));
  let extra=[];words.forEach(w=>{const v=SYNN[w];if(v)extra.push(...v.split(" "));});
  words=words.concat(extra).filter(Boolean);
  const stems=[...new Set(words.map(stem).filter(Boolean))];
  if(!stems.length)return {list:[],stems};
  const scored=PB.map((p,i)=>{
    const t=norm(p.fr[0]+" "+p.ar[0]), k=norm(p.k), s=norm(p.fr[2]+" "+p.ar[2]+" "+p.fr[1]+" "+p.ar[1]);
    let sc=0,hit=0;stems.forEach(w=>{let h=0;if(t.includes(w)){sc+=4;h=1}if(k.includes(w)){sc+=3;h=1}if(s.includes(w)){sc+=1;h=1}hit+=h;});
    return {i,sc:sc+hit*2,hit};
  }).filter(x=>x.sc>0).sort((a,b)=>b.sc-a.sc);
  if(!scored.length)return {list:[],stems};
  const best=scored[0].sc;
  return {list:scored.filter(x=>x.sc>=Math.max(4,best*0.5)).slice(0,3),stems};
}
function isUrgent(q){const n=norm(q);return [...URG.fr,...URG.ar].some(g=>g.every(w=>n.includes(w)));}
function makeChat(root,lang,host,inline){
  const T=AT[lang];
  const w=document.createElement('div');w.className=inline?'chatw inline':'chatw';
  w.innerHTML=(inline?'':'<button class="chat-fab" aria-label="'+T.open+'"><span class="fab-ic">💬</span><span class="fab-t">'+T.open+'</span></button>')+
  '<div class="chat-panel"'+(inline?'':' hidden')+'><div class="chat-head"><div class="ch-av">👩‍⚕️</div><div class="ch-t"><b>'+(inline?T.ititle:T.title)+'</b><small><i class="dot"></i>'+T.sub+'</small></div>'+(inline?'':'<button class="chat-x" aria-label="Fermer">×</button>')+'</div>'+
  '<div class="chat-body"></div><div class="chat-sugg"></div>'+
  '<form class="chat-form"><input type="text" placeholder="'+T.ph+'" aria-label="'+T.ph+'"><button type="submit" class="btn btn-gold">'+T.send+'</button></form></div>';
  host.appendChild(w);
  const panel=w.querySelector('.chat-panel'),body=w.querySelector('.chat-body'),input=w.querySelector('.chat-form input'),sugg=w.querySelector('.chat-sugg');
  const add=(html,who)=>{const d=document.createElement('div');d.className='msg '+who;d.innerHTML=html;body.appendChild(d);
    if(who==='bot'&&inline){const prev=d.previousElementSibling;body.scrollTop=(prev?prev.offsetTop:d.offsetTop)-8;}else body.scrollTop=body.scrollHeight;return d;};
  const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const close=()=>{if(!inline){panel.hidden=true;w.classList.remove('open');}};
  const actions=()=>'<div class="m-act"><a class="m-btn" href="#'+(lang==='fr'?'ecrire':'ecrire-ar')+'" data-close>'+T.write+'</a><a class="m-btn wa" target="_blank" rel="noopener" href="https://wa.me/212632956931">'+T.wa+'</a></div>';
  function answer(q){
    add(esc(q),'me');
    const typing=add('<span class="typing"><i></i><i></i><i></i></span>','bot typing-msg');
    const nq=norm(q).trim();
    setTimeout(()=>{
      typing.remove();
      if(/^(bonjour|salut|salam|slm|bonsoir|السلام|سلام|مرحبا|اهلا)/.test(nq)&&nq.split(/\s+/).length<=3){add(T.hi,'bot');return;}
      if(/^(merci|شكرا|choukran|chokran)/.test(nq)){add(T.thanks,'bot');return;}
      const urg=isUrgent(q);
      if(urg)add('<div class="m-urg">'+T.urgent+'</div><div class="m-act"><a class="m-btn call" href="tel:+212632956931">'+T.call+'</a></div>','bot');
      const {list}=findProblems(q,lang);
      if(!list.length){if(!urg)add(T.none+actions(),'bot');return;}
      let h='<p>'+T.found+'</p>';
      list.forEach(({i})=>{const p=PB[i],t=p[lang];
        h+='<div class="m-card"><b>'+CATS[p.c].i+' '+t[0]+'</b><p>'+t[1]+'</p><p class="m-do">→ '+t[3]+'</p>'+(p.u?'<p class="m-u">'+UI[lang].urg+'</p>':'')+
        '<div class="m-act">'+(window.SLUGS?'<a class="m-btn" href="'+pageUrl(i,lang)+'">'+T.more+'</a>':'<button class="m-btn" data-open="'+i+'">'+T.more+'</button>')+'<a class="m-btn wa" target="_blank" rel="noopener" href="https://wa.me/212632956931?text='+encodeURIComponent(UI[lang].msg+t[0])+'">'+T.rdv+'</a></div></div>';});
      add(h+'<p class="m-warn">'+T.warn+'</p>','bot');
    },650);
  }
  add('<p>'+T.hello+'</p><p class="m-warn">'+T.warn+'</p>','bot');
  sugg.innerHTML=(inline?T.isugg:T.sugg).map(s=>'<button type="button">'+s+'</button>').join('');
  sugg.onclick=e=>{const b=e.target.closest('button');if(b){answer(b.textContent.replace(/^[^\p{L}]+/u,''));if(!inline)sugg.hidden=true;}};
  w.querySelector('.chat-form').onsubmit=e=>{e.preventDefault();const v=input.value.trim();if(!v)return;input.value='';if(!inline)sugg.hidden=true;answer(v);};
  if(!inline){
    w.querySelector('.chat-fab').onclick=()=>{panel.hidden=!panel.hidden;w.classList.toggle('open',!panel.hidden);if(!panel.hidden)input.focus();};
    w.querySelector('.chat-x').onclick=close;
  }
  body.addEventListener('click',e=>{
    const o=e.target.closest('[data-open]');
    if(o){const idx=+o.dataset.open;const det=root.querySelectorAll('.plist .pb')[idx];
      const gi=root.querySelector('.gsearch');if(gi){gi.value='';gi.dispatchEvent(new Event('input'));}
      root.querySelectorAll('.cats .cat').forEach(c=>c.dataset.c==='all'&&c.click());
      if(det){det.open=true;close();det.scrollIntoView({behavior:'smooth',block:'center'});}}
    if(e.target.closest('[data-close]'))close();
  });
  return w;
}
function buildChat(lang){
  const root=document.querySelector('.lang-root[data-lang="'+lang+'"]');if(!root)return;
  const host=root.querySelector('.hchat');
  if(host)makeChat(root,lang,host,true);
  const fl=makeChat(root,lang,root,false);
  // le bouton flottant n'apparaît que quand l'assistant du haut n'est plus visible
  if(host&&'IntersectionObserver' in window){fl.classList.add('away');
    new IntersectionObserver(es=>es.forEach(en=>fl.classList.toggle('away',(en.isIntersecting||en.boundingClientRect.top>0)&&!fl.classList.contains('open')))).observe(host);}
}


const KWX={"regles-douloureuses": "mal au ventre pendant les règles crampes pendant les règles douleur bas du ventre et dos pendant les règles règles très douloureuses que faire dysménorrhée آلام الدورة الشهرية عسر الطمث مغص الدورة الشهرية ألم أسفل البطن والظهر أثناء الدورة وجع حق الشهر الكرش كتضرني فالدورة الحريق ديال الدورة wje3 7e9 chhar lkerch katdorni f dawra dwa l wje3 dyal dawra", "regles-trop-abondantes": "règles abondantes règles hémorragiques caillots pendant les règles règles qui durent longtemps anémie et règles abondantes غزارة الدورة الشهرية نزيف الدورة تجلطات أثناء الدورة كيجيني الدم بزاف الدورة كتطول بزاف kayjini dem bzaf dawra katṭowel bzaf", "regles-irregulieres": "cycle irrégulier règles irrégulières causes règles tous les 2 mois règles en avance عدم انتظام الدورة الشهرية اضطراب الدورة الشهرية حق الشهر مخربق الدورة ماشي منظمة 7e9 chhar mkherbe9 dawra machi mnaḍma", "absence-de-regles": "retard de règles pas de règles sans être enceinte aménorrhée plus de règles depuis 3 mois retard de règles test négatif تأخر الدورة الشهرية انقطاع الطمث غياب الدورة تعطل عليا حق الشهر ما جاتنيش الدورة t3eṭṭel 3liya 7e9 chhar ma jatnich dawra", "saignements-entre-les-regles": "saignement entre les règles spotting saignement sans raison petites pertes de sang نزيف بين الدورتين نزيف خارج موعد الدورة كينزل عليا الدم بلا وقتو kaynzel 3liya dem bla wa9to", "syndrome-premenstruel": "syndrome prémenstruel seins gonflés avant les règles irritabilité avant les règles ventre gonflé avant les règles متلازمة ما قبل الدورة أعراض ما قبل الحيض النرفزة قبل الدورة الصدر كيضرني قبل حق الشهر nerfza 9bel dawra ṣṣder kaydorni 9bel 7e9 chhar", "ovaires-polykystiques-sopk": "ovaires polykystiques SOPK SOPK et grossesse SOPK symptômes poils acné micro-polykystose ovarienne تكيس المبايض متلازمة تكيس المبايض تكيس المبايض والحمل تكيس المبيض عندي الكيستات فالمبيض tekayyos lmbiḍ 3ndi kystes f lmbiḍ", "retarder-ses-regles-ramadan-omra-voyage": "retarder ses règles ramadan décaler les règles omra pilule pour retarder les règles retarder règles hajj تأخير الدورة في رمضان حبوب تأخير الدورة للعمرة تأخير الحيض للحج نأخر حق الشهر فرمضان دوا باش نأخر الدورة n2ekher 7e9 chhar f ramadan dwa bach n2ekher dawra", "puberte-trop-precoce-ou-trop-tardive": "premières règles puberté précoce règles à 9 ans pas de règles à 15 ans adolescente gynécologue البلوغ المبكر تأخر البلوغ أول دورة شهرية بنتي جاتها الدورة بكري بنتي ما جاتهاش الدورة benti jatha dawra bekri awal dawra", "mycose-vaginale": "mycose vaginale mycose qui revient démangeaisons et pertes blanches candidose الفطريات المهبلية حكة وإفرازات بيضاء الشومبينيون الحكة والإفرازات البيضاء champignons l7ekka w ifrazat bayḍa", "odeur-intime-vaginose": "mauvaise odeur intime odeur de poisson vaginose bactérienne odeur après les rapports رائحة مهبلية كريهة التهاب المهبل البكتيري ريحة خايبة الريحة من التحت ri7a khayba lberd w ri7a", "pertes-vaginales-anormales": "pertes blanches pertes jaunes pertes vertes pertes marron écoulement vaginal إفرازات مهبلية غير طبيعية إفرازات صفراء إفرازات بيضاء الإفرازات الما كينزل مني الصفرة l ifrazat lma kaynzel menni", "infection-urinaire-cystite": "brûlure en urinant infection urinaire cystite envie d'uriner tout le temps sang dans les urines حرقة أثناء التبول التهاب المسالك البولية التهاب المثانة البول كيحرقني البرد فالمثانة lboul kay7er9ni lberd f lmathana", "infections-sexuellement-transmissibles-ist": "infection sexuellement transmissible IST dépistage MST chlamydia gonorrhée الأمراض المنقولة جنسيا فحص الأمراض الجنسية الكلاميديا الميكروب البرد من الراجل lmicrobe tahlil dyal lmard", "herpes-genital": "herpès génital boutons parties intimes cloques vagin الهربس التناسلي فقاعات في المنطقة الحساسة حبوب لتحت الحبوب فالبلاصة الحساسة 7bob lta7t", "condylomes-verrues-genitales": "condylomes verrues génitales HPV verrues laser condylomes الثآليل التناسلية فيروس الورم الحليمي الحبوب بحال الثآليل لتحت condylomes laser", "trichomonase": "trichomonas pertes mousseuses pertes vertes et odeur داء المشعرات إفرازات رغوية إفرازات خضرا وريحة ifrazat khaḍra", "kyste-ou-abces-de-bartholin": "kyste de bartholin boule sur la lèvre intime abcès vulve كيس غدة بارتولين خراج الفرج كورة لتحت حبة كبيرة فالشفرة koura lta7t", "demangeaisons-et-irritations-intimes": "démangeaisons intimes ça gratte en bas irritation vulve brûlure intime حكة مهبلية تهيج المنطقة الحساسة الحكة لتحت كيحكني l7ekka lta7t kay7okni", "lichen-sclereux-de-la-vulve": "lichen scléreux peau blanche vulve démangeaisons vulve chroniques الحزاز المتصلب بياض جلد الفرج الحكة ديما لتحت l7ekka dima", "infection-de-l-uterus-et-des-trompes-salpingite": "salpingite infection pelvienne fièvre et douleur bas ventre infection des trompes التهاب قناتي فالوب التهاب الحوض البرد فالرحم الحمى ووجع الكرش lberd f r7em", "endometriose": "endométriose endométriose symptômes endométriose et grossesse endométriose traitement kyste endométriosique spécialiste endométriose Témara بطانة الرحم المهاجرة أعراض بطانة الرحم المهاجرة بطانة الرحم المهاجرة والحمل علاج بطانة الرحم المهاجرة أندوميتريوز وجع حق الشهر كيطيحني واش نقدر نحمل وعندي أندوميتريوز endometriose wje3 7e9 chhar kayṭi7ni wach n9der n7mel b endometriose", "adenomyose": "adénomyose utérus gros et douloureux endométriose interne العضال الغدي تضخم الرحم المؤلم الرحم كبير وكيضرني adenomyose", "fibrome-de-l-uterus": "fibrome utérin myome fibrome et grossesse fibrome opération fibrome saignement الورم الليفي في الرحم ألياف الرحم الورم العضلي الأملس فيبروم لحمة فالرحم fibrome l7ma f r7em", "polype-de-l-uterus": "polype utérin polype endomètre polype et saignement لحمية الرحم زوائد بطانة الرحم لحيمة فالرحم polype", "kyste-de-l-ovaire": "kyste ovarien kyste ovaire douleur kyste ovaire opération kyste fonctionnel كيس المبيض أكياس المبيض كيس على المبيض الكيست فالمبيض عندي كيس فالمبيض kyste f lmbiḍ", "torsion-d-annexe-de-l-ovaire": "torsion de l'ovaire torsion d'annexe douleur brutale d'un côté du ventre التواء المبيض ألم مفاجئ في جهة من البطن وجع قوي فجنب الكرش wje3 9wi f jenb lkerch", "douleurs-du-bas-ventre": "mal au bas ventre douleur pelvienne douleur ovaire droit douleur ovaire gauche mal au ventre femme ألم أسفل البطن آلام الحوض ألم المبيض الكرش كتضرني لتحت وجع فالحوض lkerch katdorni lta7t wje3 f l7awḍ", "descente-d-organes-prolapsus": "descente d'organes prolapsus descente de vessie boule dans le vagin هبوط الرحم هبوط المثانة الرحم هابط حاجة هابطة لتحت r7em habeṭ", "fuites-urinaires": "fuites urinaires incontinence fuite en toussant rééducation périnée سلس البول تسرب البول البول كيهرب ليا lboul kayhreb lia", "syndrome-d-asherman": "syndrome d'Asherman synéchies utérines règles faibles après curetage متلازمة أشرمان التصاقات الرحم التصاقات فالرحم من بعد الكحت asherman", "malformations-de-l-uterus": "utérus cloisonné utérus bicorne malformation utérine تشوهات الرحم الرحم ذو الحاجز الرحم فيه حاجز uterus cloisonné", "syndrome-de-mrkh": "syndrome MRKH absence d'utérus jamais eu de règles متلازمة MRKH غياب الرحم عمرها ما جاتها الدورة MRKH", "rupture-de-l-uterus": "rupture utérine rupture utérus cicatrice césarienne تمزق الرحم تمزق ندبة القيصرية الرحم تقطع rupture uterine", "difficulte-a-tomber-enceinte": "difficulté à tomber enceinte infertilité stérilité traitement infertilité Témara bilan de fertilité PMA Maroc FIV تأخر الحمل العقم علاج العقم في تمارة أطفال الأنابيب التلقيح الاصطناعي تعطل عليا الحمل بغيت نولد ما بغاش يجي الحمل t3eṭṭel 3liya l7ml bghit nwled ma bghach yji l7ml", "infertilite-inexpliquee": "infertilité inexpliquée bilan normal mais pas de grossesse pas enceinte tout est normal العقم غير المبرر التحاليل سليمة ولا يوجد حمل كلشي مزيان والحمل ما جاش kolchi mzyan w l7ml ma jach", "troubles-de-l-ovulation": "problème d'ovulation stimulation ovarienne pas d'ovulation suivi d'ovulation ضعف التبويض تنشيط المبايض انعدام الإباضة ضعف التبويض دوا التبويض ḍo3f tabwiḍ", "trompes-bouchees": "trompes bouchées obstruction des trompes hystérosalpingographie انسداد قناتي فالوب انسداد الأنابيب الأنابيب مسدودين les trompes bouchées", "reserve-ovarienne-basse-menopause-precoce": "réserve ovarienne basse AMH basse ménopause précoce ضعف المخزون المبيضي انخفاض هرمون AMH سن اليأس المبكر AMH ناقص البويضات قلال AMH na9eṣ", "fausses-couches-a-repetition": "fausses couches à répétition fausse couche bilan fausse couche fausse couche précoce الإجهاض المتكرر الإجهاض التلقائي فقدان الحمل طاح ليا الحمل كيطيح ليا الحمل ديما ṭa7 lia l7ml kayṭi7 lia l7ml", "hyperprolactinemie": "prolactine élevée hyperprolactinémie écoulement de lait sans grossesse ارتفاع هرمون الحليب البرولاكتين المرتفع هرمون الحليب طالع prolactine tal3a", "fertilite-de-l-homme": "spermogramme infertilité masculine mari analyse sperme تحليل السائل المنوي العقم عند الرجال التحليلة ديال الراجل spermogramme", "suivi-de-grossesse": "suivi de grossesse Témara gynécologue femme enceinte échographie grossesse échographie 3D 4D Témara premier rendez-vous grossesse connaître le sexe du bébé تتبع الحمل طبيبة الحوامل في تمارة الفحص بالصدى للحامل الفحص بالصدى ثلاثي ورباعي الأبعاد معرفة جنس الجنين طبيبة الحوامل تمارة مراقبة الحمل الإيكو ديال الحمل tbiba dyal lḥwamel Temara echo dyal l7ml n3ref wach weld wla bent", "nausees-et-vomissements": "nausées grossesse vomissements enceinte vomissements début grossesse غثيان الحمل التقيؤ أثناء الحمل الوحم الوحم كنترد بزاف وأنا حاملة lwe7m kantred bzaf w ana 7amla", "saignements-pendant-la-grossesse": "saignement enceinte sang début de grossesse saignement pendant la grossesse que faire نزيف أثناء الحمل نزول دم مع الحمل الدم فالحمل حاملة وكينزل عليا الدم dem f l7ml 7amla w kaynzel 3liya dem", "grossesse-extra-uterine": "grossesse extra-utérine GEU symptômes grossesse dans la trompe الحمل خارج الرحم الحمل في قناة فالوب الحمل برا الرحم l7ml berra r7em", "diabete-de-grossesse": "diabète gestationnel diabète de grossesse test HGPO سكري الحمل السكري أثناء الحمل السكر ديال الحمل sokkar dyal l7ml", "tension-et-pre-eclampsie": "tension grossesse pré-éclampsie hypertension enceinte pieds gonflés grossesse ارتفاع ضغط الدم أثناء الحمل تسمم الحمل الطونسيو فالحمل رجليا مضيورين وأنا حاملة tension f l7ml", "anemie-pendant-la-grossesse": "anémie grossesse manque de fer enceinte fatigue grossesse فقر الدم أثناء الحمل نقص الحديد ناقصني الدم وأنا حاملة na9esni dem", "contractions-trop-tot-menace-d-accouchement-premature": "contractions grossesse menace d'accouchement prématuré ventre qui durcit تقلصات الرحم أثناء الحمل خطر الولادة المبكرة الكرش كتقصح الطلق قبل الوقت lkerch kat9ṣe7", "bebe-qui-bouge-moins": "bébé bouge moins bébé ne bouge plus mouvements du bébé قلة حركة الجنين توقف حركة الجنين الولد ما بقاش كيتحرك البيبي ما كيتحركش lbebe ma b9ach kayt7errek", "rhesus-negatif": "rhésus négatif grossesse injection anti-D فصيلة الدم السالبة والحمل الدم ديالي سالب rhesus negatif", "cholestase-de-la-grossesse": "démangeaisons grossesse mains pieds cholestase gravidique الحكة أثناء الحمل الركود الصفراوي الحكة فاليدين والرجلين وأنا حاملة l7ekka w ana 7amla", "grossesse-molaire": "grossesse molaire môle hydatiforme الحمل العنقودي الحمل العنقودي grossesse molaire", "peur-de-l-accouchement": "accouchement Témara césarienne accouchement naturel accouchement par voie basse peur d'accoucher الولادة الطبيعية الولادة القيصرية الخوف من الولادة الولادة بالعملية خايفة من الولادة lwilada b l3amaliya cesarienne", "saignements-apres-l-accouchement": "saignement après accouchement lochies retour de couches النزيف بعد الولادة النفاس الدم من بعد الولادة النفاس nfas", "baby-blues-et-depression-apres-bebe": "baby blues dépression post-partum tristesse après accouchement اكتئاب ما بعد الولادة حزن بعد الولادة الضيقة من بعد الولادة ḍi9a men b3d lwilada", "douleur-de-cicatrice": "douleur cicatrice césarienne épisiotomie douleur ألم ندبة القيصرية ألم شق العجان الجرح ديال العملية كيضرني jer7 dyal l3amaliya", "problemes-d-allaitement": "allaitement douleur mastite crevasses sein dur allaitement مشاكل الرضاعة التهاب الثدي تشقق الحلمة الصدر قاسح وأنا كنرضع rḍa3a", "contraception-apres-bebe": "contraception après accouchement pilule allaitement منع الحمل بعد الولادة الفانيد من بعد الولادة fanid b3d lwilada", "boule-dans-le-sein": "boule au sein nodule sein adénofibrome kyste au sein كتلة في الثدي ورم حميد في الثدي كورة فالصدر حبة فالبزولة koura f ṣṣder", "douleurs-des-seins": "douleur aux seins seins douloureux mastodynie ألم الثدي آلام الصدر الصدر كيضرني ṣṣder kaydorni", "ecoulement-du-mamelon": "écoulement mamelon lait sans être enceinte sang mamelon إفرازات الحلمة كيخرج الما من الصدر kaykhrej lma men ṣṣder", "frottis-de-depistage": "frottis frottis cervico-vaginal dépistage col utérus مسحة عنق الرحم اللطاخة التحليلة ديال الرحم frottis", "frottis-anormal": "frottis anormal HPV positif colposcopie Témara ASCUS نتيجة مسحة غير طبيعية فيروس الورم الحليمي التنظير المهبلي الفروتي ما خرجش مزيان frottis anormal", "cancer-du-col-de-l-uterus": "cancer du col vaccin HPV dépistage cancer col سرطان عنق الرحم لقاح فيروس الورم الحليمي سرطان فم الرحم cancer du col", "saignement-apres-la-menopause": "saignement après ménopause sang après ménopause نزيف بعد سن اليأس رجع ليا الدم من بعد سن اليأس rje3 lia dem", "cancer-de-l-ovaire": "cancer ovaire symptômes ventre gonflé ovaire سرطان المبيض سرطان المبيض cancer ovaire", "depistage-du-cancer-du-sein": "dépistage cancer du sein Témara mammographie échographie mammaire sénologie autopalpation الكشف المبكر عن سرطان الثدي تصوير الثدي بالأشعة فحص الثدي فحص الصدر الماموغرافي mammographie fa7ṣ ṣṣder", "choisir-sa-contraception": "contraception pilule contraceptive implant contraceptif injection contraceptive méthode contraceptive وسائل منع الحمل حبوب منع الحمل الغرسة حقنة منع الحمل الفانيد الإبرة ديال منع الحمل lfanid contraception", "sterilet-diu": "stérilet pose stérilet Témara stérilet cuivre stérilet hormonal retrait stérilet اللولب تركيب اللولب إزالة اللولب الستيريلي نحط اللولب sterilet", "oubli-de-pilule-contraception-d-urgence": "oubli pilule pilule du lendemain contraception d'urgence نسيان حبة منع الحمل حبة الطوارئ نسيت الفانيد nsit lfanid", "douleurs-pendant-les-rapports": "douleur pendant les rapports dyspareunie mal pendant les rapports ألم أثناء العلاقة الزوجية ألم الجماع كنتوجع فالعلاقة الزوجية wje3 f l3ala9a", "vaginisme": "vaginisme rapport impossible nuit de noces douleur التشنج المهبلي صعوبة الإيلاج ما قدرتش من نهار العرس vaginisme", "baisse-du-desir": "baisse de libido pas de désir baisse du désir femme ضعف الرغبة الجنسية عند المرأة ما بقاتش عندي الرغبة libido", "saignement-apres-les-rapports": "saignement après rapport sang après les rapports نزيف بعد العلاقة كينزل الدم من بعد العلاقة dem b3d l3ala9a", "esthetique-et-confort-intime": "gynécologie esthétique relâchement vaginal laser intime rajeunissement intime التجميل النسائي ارتخاء المهبل الليزر المهبلي التجميل لتحت laser intime", "bouffees-de-chaleur": "bouffées de chaleur ménopause symptômes sueurs nocturnes ménopause traitement الهبات الساخنة أعراض سن اليأس التعرق الليلي السخانة كتطلع ليا سن اليأس skhana katṭle3 lia menopause", "secheresse-vaginale": "sécheresse vaginale sécheresse intime ménopause atrophie vaginale laser جفاف المهبل ضمور المهبل الجفاف لتحت jfaf", "os-fragiles-osteoporose": "ostéoporose ménopause os fragiles densitométrie هشاشة العظام هشاشة العظام بعد سن اليأس العظام ضعاف osteoporose", "premenopause": "préménopause périménopause règles irrégulières à 45 ans ما قبل سن اليأس الدورة تخربقات فالأربعين premenopause"};PB.forEach((p,i)=>{const x=KWX[SLUGS[i]];if(x)p.k+=" "+x;});
buildGuide("fr");buildGuide("ar");buildChat("fr");buildChat("ar");
