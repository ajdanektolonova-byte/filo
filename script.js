// ========================================
// ФИЛОСОФИЯ ОЮНУ — 30 СУРОО
// ========================================

const questions = [
    // 1-ТЕМА: АДАМ, АҢ-СЕЗИМ
    {
        category: "Адам жана аң-сезим",
        q: "Философияда адам кандай түшүнүк аркылуу мүнөздөлөт?",
        a: [
            "Биологиялык өзгөчөлүктөрү жана коомдук мамилелери биримдикте каралган жандык",
            "Табияттагы башка тирүү организмдерден эч айырмасы жок болгон биологиялык жандык",
            "Коомдук байланыштарга катышпастан өз алдынча жашай алган табигый организм",
            "Материалдык муктаждыктарын гана канааттандырууга багытталган тирүү организм"
        ],
        c: 0
    },
    {
        category: "Адам жана аң-сезим",
        q: "Аң-сезим деген эмне?",
        a: [
            "Адамдын айлана-чөйрөнү кабыл алуу жана өз иш-аракетин түшүнүү жөндөмү",
            "Адамдын организминде жүрүп, сырткы дүйнөгө байланышпаган физиологиялык процесс",
            "Жаратылыштагы бардык кубулуштарды өзгөртүп туруучу материалдык күчтөрдүн жыйындысы",
            "Адамдын мурунку тажрыйбасын сактап, аны өзгөртпөстөн кайталоо жөндөмү"
        ],
        c: 0
    },
    {
        category: "Адам жана аң-сезим",
        q: "Аң-сезимдин келип чыгышында кандай факторлор маанилүү роль ойнойт?",
        a: [
            "Эмгек, тил, коомдук жашоо жана адамдын мээси менен байланышкан өнүгүү",
            "Табияттагы климаттык өзгөрүүлөр жана адамдын сырткы көрүнүшүндөгү өзгөчөлүктөр",
            "Адамдын дене түзүлүшү жана тукум куучулук аркылуу берилген биологиялык белгилер",
            "Жаратылыштагы мезгилдик өзгөрүүлөр жана организмдин физиологиялык муктаждыктары"
        ],
        c: 0
    },
    {
        category: "Адам жана аң-сезим",
        q: "Адамды башка тирүү жандыктардан айырмалап турган негизги өзгөчөлүк кайсы?",
        a: [
            "Абстракттуу ой жүгүртүү, аң-сезимдүү эмгек жана тил аркылуу пикир алышуу",
            "Табигый чөйрөгө ыңгайлашып, жашоо үчүн керектүү азыктарды издөө жөндөмү",
            "Организмдин өзгөрүп турган шарттарга карата физиологиялык жооп кайтаруусу",
            "Жашоо чөйрөсүнөн көз каранды болуп, табигый муктаждыктарын канааттандыруусу"
        ],
        c: 0
    },
    {
        category: "Адам жана аң-сезим",
        q: "Өзүн-өзү аңдоо түшүнүгү эмнени билдирет?",
        a: [
            "Адамдын өзүнүн ким экенин, мүмкүнчүлүктөрүн жана коомдогу ордун түшүнүүсү",
            "Адамдын айлана-чөйрөдөгү бардык нерселерди сезүү органдары аркылуу кабыл алуусу",
            "Коомдо болуп жаткан окуяларды башка адамдардын көз карашы менен баалоосу",
            "Адамдын күнүмдүк жашоодо пайда болгон муктаждыктарын гана сезе билүүсү"
        ],
        c: 0
    },
    {
        category: "Адам жана аң-сезим",
        q: "Философиялык көз карашта адамдын жашоосунун маңызы эмнеге байланыштуу?",
        a: [
            "Максат коюу, баалуулуктарды тандоо жана өз жашоосуна жоопкерчилик алуу",
            "Материалдык байлыкты көбөйтүү жана коомдон мүмкүн болушунча обочолонуп жашоо",
            "Күнүмдүк муктаждыктарды аткарып, келечектеги өзгөрүүлөргө көңүл бурбоо",
            "Башкалардын чечимдерин кабыл алып, өз алдынча тандоодон баш тартуу"
        ],
        c: 0
    },
    {
        category: "Адам жана аң-сезим",
        q: "Адамдын коомдук жандык катары калыптанышына эмне таасир этет?",
        a: [
            "Тарбия, билим берүү, эмгек, тил жана коомдук мамилелердин өнүгүшү",
            "Жалаң гана организмдин табигый өсүшү жана физиологиялык өзгөрүүлөрдүн жүрүшү",
            "Адамдын туулганда эле калыптанган жеке өзгөчөлүктөрү жана сырткы көрүнүшү",
            "Айлана-чөйрөдөгү аба ырайынын өзгөрүшү жана табигый ресурстардын көлөмү"
        ],
        c: 0
    },
    {
        category: "Адам жана аң-сезим",
        q: "Идеализм философиялык багытында аң-сезим кандай каралат?",
        a: [
            "Руханий башат катары каралып, дүйнөнүн негизин түшүндүрүүдө биринчи орунга коюлат",
            "Материянын өнүгүшүнүн натыйжасы катары гана каралып, өз алдынча мааниге ээ болбойт",
            "Адамдын сезүү органдары аркылуу алынган маалыматтардын жөнөкөй жыйындысы катары каралат",
            "Коомдогу экономикалык мамилелердин өзгөрүшүнөн гана пайда болгон түшүнүк катары каралат"
        ],
        c: 0
    },

    // 2-ТЕМА: ДИАЛЕКТИКА
    {
        category: "Диалектика",
        q: "Диалектика деген эмне?",
        a: [
            "Дүйнөдөгү жалпы байланыштарды, карама-каршылыктарды жана өнүгүү мыйзамдарын изилдеген окуу",
            "Табияттагы өзгөрбөс нерселерди жана кубулуштардын туруктуу абалын гана түшүндүргөн окуу",
            "Адамдын сезимдерин, эмоцияларын жана жеке психологиялык абалын изилдеген илим",
            "Коомдогу саясий башкаруунун формаларын жана мамлекеттик түзүлүштү аныктаган теория"
        ],
        c: 0
    },
    {
        category: "Диалектика",
        q: "Диалектиканын негизги принциптеринин бири кайсы?",
        a: [
            "Дүйнөдөгү бардык нерселердин өз ара байланышы жана тынымсыз өнүгүүсү",
            "Бардык кубулуштардын бири-биринен толугу менен көз карандысыз жашоосу",
            "Табияттагы жана коомдогу өзгөрүүлөрдүн дайыма бирдей деңгээлде калышы",
            "Ар бир нерсенин өнүгүүсү алдын ала белгиленген чек менен гана чектелиши"
        ],
        c: 0
    },
    {
        category: "Диалектика",
        q: "Карама-каршылыктардын биримдиги жана күрөшү мыйзамы эмнени түшүндүрөт?",
        a: [
            "Нерселердин ичиндеги карама-каршы жактардын өз ара аракеттенүүсү өнүгүүгө түрткү берет",
            "Бардык нерселердин өнүгүүсү тышкы күчтөрдүн таасири менен гана ишке ашат",
            "Коомдогу ар кандай пикир келишпестиктер өнүгүүнү толугу менен токтотуп коёт",
            "Табияттагы өзгөрүүлөр бири-бирине карама-каршы келбеген шартта гана пайда болот"
        ],
        c: 0
    },
    {
        category: "Диалектика",
        q: "Сандык өзгөрүүлөрдүн сапаттык өзгөрүүлөргө өтүү мыйзамы эмнени билдирет?",
        a: [
            "Сандык өзгөрүүлөр белгилүү чекке жеткенде нерсенин жаңы сапаттык абалы пайда болот",
            "Нерсенин сапаты эч кандай шартта сандык көрсөткүчтөргө байланыштуу өзгөрбөйт",
            "Ар бир сандык өзгөрүү дароо эле карама-каршылыксыз жаңы көрүнүштү жаратат",
            "Нерсенин өнүгүүсү сандык көрсөткүчтөрдүн өзгөрүшүнө таптакыр көз каранды эмес"
        ],
        c: 0
    },
    {
        category: "Диалектика",
        q: "Танууну тануу мыйзамы кандай өнүгүү өзгөчөлүгүн көрсөтөт?",
        a: [
            "Өнүгүү эскинин айрым жактарын сактап, жаңы баскычтар аркылуу ишке ашат",
            "Өнүгүүдө мурунку абалга кайтып келүү эч кандай өзгөрүүсүз жана толук кайталанат",
            "Ар бир жаңы көрүнүш мурунку нерсенин бардык белгилерин толугу менен жок кылат",
            "Нерселердин өнүгүүсү дайыма түз сызык боюнча жана бирдей ылдамдыкта жүрөт"
        ],
        c: 0
    },
    {
        category: "Диалектика",
        q: "Метафизикалык ой жүгүртүүнүн диалектикадан айырмасы эмнеде?",
        a: [
            "Нерселерди көбүнчө өзгөрүүсүз, өз ара байланыштан бөлүнгөн абалда карайт",
            "Бардык кубулуштарды карама-каршылыктардын биримдиги аркылуу түшүндүрүүгө аракеттенет",
            "Дүйнөнүн өнүгүшүн жана өзгөрүшүн философиялык жактан терең изилдөөгө багытталат",
            "Нерселердин ортосундагы жалпы байланыштарды жана өз ара таасирлерди негизги орунга коёт"
        ],
        c: 0
    },
    {
        category: "Диалектика",
        q: "Диалектикалык өнүгүүнүн негизги булагы катары эмне эсептелет?",
        a: [
            "Нерселердин жана кубулуштардын ичиндеги карама-каршылыктардын өз ара аракеттенүүсү",
            "Адамдын жеке каалоолору жана анын күнүмдүк жашоодогу өзгөрүлмө чечимдери",
            "Табияттагы кубулуштардын бири-бирине таасир этпеген өз алдынча абалы",
            "Коомдогу бардык пикирлердин жана кызыкчылыктардын толук бирдей болушу"
        ],
        c: 0
    },

    // 3-ТЕМА: БОЛМУШ ЖАНА МАТЕРИЯ
    {
        category: "Болмуш жана материя",
        q: "Болмуш философияда кандай маанини билдирет?",
        a: [
            "Жашап турган нерселердин, кубулуштардын жана процесстердин жалпы бар болуусу",
            "Адамдын ой жүгүртүүсүндө гана пайда болгон элестетүүлөрдүн жана кыялдардын жыйындысы",
            "Табияттагы тирүү организмдердин биологиялык жашоосун гана камтыган түшүнүк",
            "Коомдун тарыхый өнүгүүсүндөгү саясий жана экономикалык өзгөрүүлөрдүн жыйындысы"
        ],
        c: 0
    },
    {
        category: "Болмуш жана материя",
        q: "Материя философиялык түшүнүктө эмнени билдирет?",
        a: [
            "Адамдын аң-сезиминен көз карандысыз жашаган объективдүү реалдуулукту",
            "Адамдын ойлорунда жана кыялдарында гана жашаган руханий түшүнүктөрдү",
            "Коомдогу адамдардын ортосунда түзүлгөн адеп-ахлактык эрежелердин жыйындысын",
            "Табияттагы бардык нерселердин адам тарабынан жасалган жасалма көрүнүштөрүн"
        ],
        c: 0
    },
    {
        category: "Болмуш жана материя",
        q: "Материализм философиялык багытында эмне биринчи орунга коюлат?",
        a: [
            "Материя биринчи, ал эми аң-сезим материянын өнүгүшүнүн натыйжасы деп эсептелет",
            "Аң-сезим биринчи, ал эми материалдык дүйнө руханий башаттын натыйжасы деп каралат",
            "Материя менен аң-сезимдин экөө тең эч кандай байланышы жок өз алдынча жашайт",
            "Дүйнөнүн болушу адамдын жеке сезимдерине жана каалоолоруна гана байланыштуу болот"
        ],
        c: 0
    },
    {
        category: "Болмуш жана материя",
        q: "Идеализмдин негизги көз карашы кандай?",
        a: [
            "Руханий башатты же аң-сезимди дүйнөнүн негизги башаты катары тааныйт",
            "Материалдык дүйнөнү гана чыныгы деп эсептеп, руханий түшүнүктөрдү четке кагат",
            "Табият менен коомдун бардык кубулуштарын биологиялык процесстер аркылуу түшүндүрөт",
            "Адамдын сезүү органдарынан тышкары эч кандай чындык жашабайт деп эсептейт"
        ],
        c: 0
    },
    {
        category: "Болмуш жана материя",
        q: "Материянын жашоо формалары катары эмнелер каралат?",
        a: [
            "Кыймыл, мейкиндик жана убакыт менен байланышкан жашоо формалары",
            "Адамдын сезимдери, жеке каалоолору жана коомдук мамилелеринин көрүнүштөрү",
            "Табияттагы тирүү организмдердин өсүшү жана көбөйүшү менен байланышкан процесстер",
            "Коомдун маданий өнүгүүсүн жана тарыхый өзгөрүүлөрүн мүнөздөгөн көрүнүштөр"
        ],
        c: 0
    },
    {
        category: "Болмуш жана материя",
        q: "Кыймыл философиялык мааниде эмнени түшүндүрөт?",
        a: [
            "Материянын жашоо ыкмасын жана бардык өзгөрүү процесстерин",
            "Денелердин мейкиндиктеги ордун гана алмаштыруучу механикалык аракетти",
            "Адамдын бир жерден экинчи жерге физикалык жактан көчүп жүрүү процессин",
            "Коомдогу саясий өзгөрүүлөрдүн жана мамлекеттик чечимдердин аткарылышын"
        ],
        c: 0
    },
    {
        category: "Болмуш жана материя",
        q: "Мейкиндик жана убакыт кандай философиялык түшүнүктөр болуп саналат?",
        a: [
            "Материянын жашоо формаларын жана анын бар болуу өзгөчөлүктөрүн чагылдырган түшүнүктөр",
            "Адамдын ой жүгүртүүсүндө гана пайда болуп, реалдуу дүйнөгө тиешеси жок түшүнүктөр",
            "Коомдун тарыхый өнүгүшүнө байланыштуу гана колдонулган саясий категориялар",
            "Табияттагы кубулуштарды сүрөттөө үчүн адамдар тарабынан ойлоп табылган жасалма белгилер"
        ],
        c: 0
    },

    // 4-ТЕМА: ФИЛОСОФИЯНЫН КООМДОГУ РОЛУ
    {
        category: "Философиянын коомдогу ролу",
        q: "Философия деген эмне?",
        a: [
            "Дүйнөнү, адамды, коомду жана алардын өз ара байланышын изилдеген жалпы теориялык илим",
            "Жаратылыштагы өсүмдүктөр менен жаныбарлардын түзүлүшүн изилдеген биологиялык илим",
            "Мамлекеттик башкаруунун жана укуктук мамилелердин практикалык эрежелерин аныктаган тармак",
            "Адамдын психологиялык абалын жана эмоцияларынын өзгөрүшүн изилдеген илимий багыт"
        ],
        c: 0
    },
    {
        category: "Философиянын коомдогу ролу",
        q: "Философиянын дүйнө таанымдык функциясы эмнени билдирет?",
        a: [
            "Адамга дүйнө, коом жана өзүнүн жашоодогу орду жөнүндө жалпы түшүнүк калыптандыруу",
            "Адамдын күнүмдүк иштерин уюштуруп, анын убактысын туура бөлүштүрүүгө жардам берүү",
            "Коомдогу укуктук эрежелердин аткарылышын көзөмөлдөп, тартипти камсыз кылуу",
            "Табияттагы бардык кубулуштарды эксперимент аркылуу гана изилдөөгө багытталуу"
        ],
        c: 0
    },
    {
        category: "Философиянын коомдогу ролу",
        q: "Философиянын методологиялык функциясы эмнеге багытталат?",
        a: [
            "Таанып билүүдө жана изилдөөдө колдонулуучу жалпы принциптер менен ыкмаларды иштеп чыгууга",
            "Адамдардын күнүмдүк жүрүм-турумун жана жеке кызыкчылыктарын жөнгө салууга",
            "Мамлекеттин саясий түзүлүшүн жана бийлик органдарынын ишмердүүлүгүн аныктоого",
            "Табияттагы материалдык ресурстарды бөлүштүрүп, экономикалык кирешени көбөйтүүгө"
        ],
        c: 0
    },
    {
        category: "Философиянын коомдогу ролу",
        q: "Философиянын сынчыл функциясы кандай милдетти аткарат?",
        a: [
            "Калыптанып калган көз караштарды талдап, алардын негиздүүлүгүн жана чындыгын текшерет",
            "Коомдо кабыл алынган бардык эрежелерди эч кандай талдоосуз туура деп кабыл алат",
            "Адамдардын ортосундагы пикир келишпестиктерди мыйзамдык жол менен гана чечет",
            "Илимий маалыматтарды өзгөртпөстөн сактап, жаңы көз караштардын пайда болушун чектейт"
        ],
        c: 0
    },
    {
        category: "Философиянын коомдогу ролу",
        q: "Философия илим менен кандай байланышта болот?",
        a: [
            "Илимий билимдин негиздерин, методдорун жана таанып билүүнүн мүмкүнчүлүктөрүн талдайт",
            "Илимий изилдөөлөрдү толугу менен алмаштырып, бардык практикалык тажрыйбаны жокко чыгарат",
            "Илимдин өнүгүшүнө тиешеси жок болуп, руханий маселелер менен гана чектелет",
            "Илимий ачылыштарды даяр түрүндө кабыл алып, алардын чындыгын текшерүүдөн баш тартат"
        ],
        c: 0
    },
    {
        category: "Философиянын коомдогу ролу",
        q: "Философиялык ой жүгүртүү адамга кандай мүмкүнчүлүк берет?",
        a: [
            "Окуяларды терең талдап, себептерин аныктап жана өз алдынча негиздүү чечим кабыл алууга",
            "Башкалардын пикирин өзгөртпөстөн кабыл алып, өзүнүн жеке көз карашын түзбөөгө",
            "Ар кандай маселелерди илимий талдоосуз жана далилдерсиз чечүүгө аракеттенүүгө",
            "Күнүмдүк турмуштагы бардык көйгөйлөрдү бир гана материалдык байлык менен чечүүгө"
        ],
        c: 0
    },
    {
        category: "Философиянын коомдогу ролу",
        q: "Философиянын практикалык мааниси эмнеде?",
        a: [
            "Адамдын жашоодогу максаттарын аныктоого жана коомдук маселелерге аң-сезимдүү мамиле кылууга жардам берет",
            "Адамдын бардык аракеттерин алдын ала аныктап, жеке тандоо мүмкүнчүлүгүн толугу менен жок кылат",
            "Коомдогу бардык көйгөйлөрдү мыйзамдар аркылуу гана чечүүнү негизги милдети катары эсептейт",
            "Адамдардын күнүмдүк турмушундагы материалдык муктаждыктарды гана канааттандырууга багытталат"
        ],
        c: 0
    },
    {
        category: "Философиянын коомдогу ролу",
        q: "Философиялык маданият коомдун өнүгүшүнө кандай таасир этет?",
        a: [
            "Сынчыл ой жүгүртүүнү, сабырдуулукту жана ар түрдүү көз караштарды түшүнүүнү өнүктүрөт",
            "Коомдогу адамдардын бирдей ойлонушун талап кылып, жеке пикирлердин болушуна жол бербейт",
            "Адамдардын ортосундагы бардык маданий айырмачылыктарды жок кылууга аракеттенет",
            "Коомдун өнүгүүсүн материалдык өндүрүштүн көлөмү менен гана өлчөөгө багытталат"
        ],
        c: 0
    }
];


// ========================================
// HTML ЭЛЕМЕНТТЕРИ
// ========================================

const homeScreen = document.getElementById("homeScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");
const leaderboardScreen = document.getElementById("leaderboardScreen");

const startForm = document.getElementById("startForm");
const studentNameInput = document.getElementById("studentName");

const playerNameElement = document.getElementById("playerName");
const scoreElement = document.getElementById("score");
const questionNumberElement = document.getElementById("questionNumber");
const categoryNameElement = document.getElementById("categoryName");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const timerElement = document.getElementById("timer");
const feedbackElement = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

const soundToggle = document.getElementById("soundToggle");
const soundIcon = document.getElementById("soundIcon");
const soundText = document.getElementById("soundText");


// ========================================
// ОЮНДУН ӨЗГӨРМӨЛӨРҮ
// ========================================

let studentName = "";
let score = 0;
let currentQuestion = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let timeLeft = 15;
let timerInterval = null;
let answered = false;
let soundEnabled = true;
let gameQuestions = [];


// ========================================
// ЖАРДАМЧЫ ФУНКЦИЯЛАР
// ========================================

function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(item => {
        item.classList.remove("active");
    });

    screen.classList.add("active");
}

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function playSound(frequency, duration = 150) {
    if (!soundEnabled) return;

    try {
        const audioContext = new (
            window.AudioContext || window.webkitAudioContext
        )();

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = "sine";

        gain.gain.setValueAtTime(0.08, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            audioContext.currentTime + duration / 1000
        );

        oscillator.start();
        oscillator.stop(audioContext.currentTime + duration / 1000);
    } catch (error) {
        console.log("Үн иштеген жок");
    }
}


// ========================================
// ОЮНДУ БАШТОО
// ========================================

startForm.addEventListener("submit", function(event) {
    event.preventDefault();

    studentName = studentNameInput.value.trim();

    if (studentName.length < 2) {
        alert("Сураныч, аты-жөнүңдү туура жаз!");
        return;
    }

    startGame();
});

function startGame() {
    score = 0;
    currentQuestion = 0;
    correctAnswers = 0;
    wrongAnswers = 0;

    gameQuestions = shuffle(questions).map(item => {
        const answers = item.a.map((answer, index) => ({
            text: answer,
            correct: index === item.c
        }));

        return {
            category: item.category,
            q: item.q,
            answers: shuffle(answers)
        };
    });

    playerNameElement.textContent = studentName;
    scoreElement.textContent = score;

    showScreen(gameScreen);
    loadQuestion();
}


// ========================================
// СУРООНУ ЧЫГАРУУ
// ========================================

function loadQuestion() {
    clearInterval(timerInterval);

    answered = false;
    timeLeft = 15;

    const question = gameQuestions[currentQuestion];

    questionNumberElement.textContent =
        `${currentQuestion + 1} / ${gameQuestions.length}`;

    categoryNameElement.textContent = question.category;

    progressBar.style.width =
        `${((currentQuestion + 1) / gameQuestions.length) * 100}%`;

    questionText.textContent = question.q;

    answersContainer.innerHTML = "";
    feedbackElement.textContent = "";
    feedbackElement.className = "feedback";

    nextBtn.disabled = true;

    timerElement.textContent = timeLeft;
    timerElement.parentElement.classList.remove("danger");

    const letters = ["A", "B", "C", "D"];

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer-btn";

        button.innerHTML = `
            <span class="answer-letter">${letters[index]}</span>
            ${answer.text}
        `;

        button.addEventListener("click", () => {
            selectAnswer(button, answer);
        });

        answersContainer.appendChild(button);
    });

    startTimer();
}


// ========================================
// ТАЙМЕР
// ========================================

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;

        timerElement.textContent = timeLeft;

        if (timeLeft <= 5) {
            timerElement.parentElement.classList.add("danger");
            playSound(300, 80);
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeExpired();
        }
    }, 1000);
}

function timeExpired() {
    if (answered) return;

    answered = true;
    wrongAnswers++;

    const buttons = answersContainer.querySelectorAll(".answer-btn");

    const currentAnswers = gameQuestions[currentQuestion].answers;

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (currentAnswers[index].correct) {
            button.classList.add("correct");
        }
    });

    feedbackElement.textContent =
        "⏰ Убакыт бүттү! Туура жооп жашыл түс менен көрсөтүлдү.";

    feedbackElement.classList.add("wrong-text");

    nextBtn.disabled = false;
    playSound(200, 300);
}


// ========================================
// ЖООПТУ ТЕКШЕРҮҮ
// ========================================

function selectAnswer(button, answer) {
    if (answered) return;

    answered = true;
    clearInterval(timerInterval);

    const buttons = answersContainer.querySelectorAll(".answer-btn");

    buttons.forEach(item => {
        item.disabled = true;
    });

    if (answer.correct) {
        score += 10;
        correctAnswers++;

        button.classList.add("correct");

        feedbackElement.textContent =
            "✓ Туура жооп! Сен 10 упай алдың.";

        feedbackElement.classList.add("correct-text");

        playSound(700, 200);
    } else {
        wrongAnswers++;

        button.classList.add("wrong");

        const currentAnswers = gameQuestions[currentQuestion].answers;

        const correctIndex = currentAnswers.findIndex(item => item.correct);

        buttons[correctIndex].classList.add("correct");

        feedbackElement.textContent =
            "✕ Туура эмес жооп. Жашыл түс туура жоопту көрсөтөт.";

        feedbackElement.classList.add("wrong-text");

        playSound(200, 250);
    }

    scoreElement.textContent = score;

    nextBtn.disabled = false;
}


// ========================================
// КИЙИНКИ СУРОО
// ========================================

nextBtn.addEventListener("click", function() {
    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < gameQuestions.length) {
        loadQuestion();
    } else {
        finishGame();
    }
});


// ========================================
// ОЮНДУ АЯКТОО
// ========================================

function finishGame() {
    clearInterval(timerInterval);

    const accuracy = Math.round(
        (correctAnswers / questions.length) * 100
    );

    document.getElementById("resultName").textContent =
        studentName;

    document.getElementById("finalScore").textContent = score;

    document.getElementById("correctCount").textContent =
        correctAnswers;

    document.getElementById("wrongCount").textContent =
        wrongAnswers;

    document.getElementById("accuracy").textContent =
        accuracy + "%";

    let message = "";

    if (score >= 270) {
        message = "🌟 Эң сонун! Сен философияны мыкты өздөштүрүпсүң!";
    } else if (score >= 220) {
        message = "👏 Абдан жакшы! Сенин билимиң жогорку деңгээлде!";
    } else if (score >= 160) {
        message = "👍 Жакшы аракет! Дагы бир аз даярдансаң мыкты болот!";
    } else if (score >= 100) {
        message = "📚 Жакшы башталыш! Философияны дагы кайталап көр!";
    } else {
        message = "💪 Багынба! Билимди кайталоо менен жыйынтыгыңды жакшырта аласың!";
    }

    document.getElementById("resultMessage").textContent = message;

    saveResult();

    showScreen(resultScreen);
}


// ========================================
// РЕЙТИНГДИ САКТОО
// ========================================

function saveResult() {
    let leaderboard = JSON.parse(
        localStorage.getItem("philosophyLeaderboard")
    ) || [];

    leaderboard.push({
        name: studentName,
        score: score,
        correct: correctAnswers,
        date: new Date().toLocaleDateString("ky-KG")
    });

    leaderboard.sort((a, b) => b.score - a.score);

    leaderboard = leaderboard.slice(0, 10);

    localStorage.setItem(
        "philosophyLeaderboard",
        JSON.stringify(leaderboard)
    );
}


// ========================================
// РЕЙТИНГДИ КӨРСӨТҮҮ
// ========================================

function showLeaderboard() {
    const leaderboardList = document.getElementById("leaderboardList");

    const leaderboard = JSON.parse(
        localStorage.getItem("philosophyLeaderboard")
    ) || [];

    leaderboardList.innerHTML = "";

    if (leaderboard.length === 0) {
        leaderboardList.innerHTML =
            '<div class="empty-ranking">Азырынча катышуучулар жок.</div>';

    } else {
        leaderboard.forEach((player, index) => {
            const item = document.createElement("div");

            item.className = "leaderboard-item";

            const name = document.createElement("strong");
            name.textContent = `${index + 1}. ${player.name}`;

            const points = document.createElement("span");
            points.textContent = `${player.score} упай`;

            item.appendChild(name);
            item.appendChild(points);

            leaderboardList.appendChild(item);
        });
    }

    showScreen(leaderboardScreen);
}


// ========================================
// БАШКАРУУ КНОПКАЛАРЫ
// ========================================

document.getElementById("restartBtn").addEventListener("click", function() {
    startGame();
});

document.getElementById("leaderboardBtn").addEventListener("click", function() {
    showLeaderboard();
});

document.getElementById("homeBtn").addEventListener("click", function() {
    showScreen(homeScreen);
});

document.getElementById("backToResultBtn").addEventListener("click", function() {
    showScreen(resultScreen);
});

document.getElementById("clearLeaderboardBtn").addEventListener("click", function() {
    const confirmed = confirm("Бардык рейтинг маалыматтарын өчүрүүнү каалайсыңбы?");

    if (confirmed) {
        localStorage.removeItem("philosophyLeaderboard");
        showLeaderboard();
    }
});


// ========================================
// ҮНДҮ КҮЙГҮЗҮҮ / ӨЧҮРҮҮ
// ========================================

soundToggle.addEventListener("click", function() {
    soundEnabled = !soundEnabled;

    soundIcon.textContent = soundEnabled ? "🔊" : "🔇";
    soundText.textContent = soundEnabled ? "Үн күйүк" : "Үн өчүк";

    soundToggle.style.borderColor =
        soundEnabled ? "#303956" : "#ef4444";

    if (soundEnabled) {
        playSound(600, 150);
    }
});

console.log("Философия оюну даяр!");
console.log("Суроолордун саны:", questions.length);