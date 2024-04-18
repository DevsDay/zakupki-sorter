if ((document.querySelector(".st-block")) && (!document.getElementById("get_filter_custom"))) {
    let response = confirm("Запустить скрипт?");
    if (response == true) {
        console.log("Пользователь выбрал запустить скрипт");

        // add buttons for the first time
        if (!document.getElementById("get_filter_custom")) {
            $('#all').prepend('<div class="custom-wrapper"><div class="custom-buttons"><button class="justfilter" id="get_filter_custom" style="font-size: 14px; cursor: pointer">Применить фильтр</button><button class="justfilter" id="get_links_custom" style="font-size: 14px; cursor: pointer">Открыть все ссылки</button><div class="custom-recycle">♺</div></div></div>');
            $("<style type='text/css'>.custom-recycle:hover {background: #f6f6f8;} .custom-recycle:active {background: #f1f1f1;} .custom-recycle {user-drag:none; user-select: none; cursor: pointer; font-size: 28px; line-height: 1.2445; display: inline-block; right: 0; top: 50%; position: absolute; width: 40px; height: 40px; background: #fff; transform: translate(50%, -50%); border-radius: 50px; border: 1px solid #e3e3e3; box-sizing: border-box;} .custom-highlight-good-underline, .custom-highlight-bad-underline {text-decoration: underline;} .purchase-card {border-radius: 0px;} .custom-wrapper {z-index: 1; display: inline-block; position: fixed; bottom: 0; left: 0; height: 240px; width: 240px; text-align: center; background: rgba(255,255,255,0.8); border-radius: 0px 24px 24px 0; margin: 24px 24px 50px 0px; border: 1px solid #e3e3e3;} button.justfilter { position: relative; display: inline-block; cursor: pointer; outline: none; border: 0; vertical-align: middle; text-decoration: none; font-size: inherit; font-family: inherit; } button.justfilter { min-width: 155px; padding: 10px 12px; background: #fff; border: 1px solid #d3d3d3; border-radius: 12px; transform-style: preserve-3d; transition: transform 50ms cubic-bezier(0, 0, 0.58, 1), background 50ms cubic-bezier(0, 0, 0.58, 1); } button.justfilter:hover { background: #f6f6f8 } button.justfilter:active { background: #f1f1f1 } #ExcelContainer {display: inline-block; vertical-align: bottom;} .custom-buttons {height: auto; width: 100%; display: inline-block; position: absolute; top: 50%; left: 0; transform: translateY(-50%);} .excel-wrap {margin-left: 10px;} #GridToExcel {top: -6px;} .custom-info {display: inline-block; text-align: center; margin-top: 24px;} .custom-info-total, .custom-info-filtered {padding: 1px; display: inline-block;} .custom-info-total-span-count {font-weight: 600;} .custom-info-filtered-span-count {font-weight: 600; color: #f06844;} #get_links_custom {color: #f06844; margin-top: 8px;} #get_filter_custom {color: #007AFF; margin-bottom: 8px} .custom-info {pointer-events: none!important; user-select:none; margin-left: auto;} .arrgood {box-shadow: -4px 0px 0px 0px rgba(29, 161, 242, 0.6), 0 1px 6px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 8%)!important;} </style>").appendTo('head');
            customresultscalc();

            // "open all links" function
            $("#get_links_custom").click(function() {
                $('.purchase-card').each(function() {
                    if (!$(this).hasClass('arrbad')) {
                        $(this).parent().find('.purchase-card__order-name').each(function() {
                            window.open($(this).attr('href'));
                        });
                    };
                });
                $('.purchase-card').each(function() {
                    if ($(this).is('.arrgood.arrbad')) {
                        $(this).parent().find('.purchase-card__order-name').each(function() {
                            window.open($(this).attr('href'));
                        });
                    };
                });
            });
            //
            // "filter links" function
            var IsExecutingFc = false;
            $("#get_filter_custom").click(function() {
                IsExecutingFc = true;
                $.extend($.expr[':'], {
                    'containsi': function(elem, i, match, array) {
                        return (elem.textContent || elem.innerText || '').toLowerCase()
                            .indexOf((match[3] || "").toLowerCase()) >= 0;
                    }
                });
                //
                var x = 0;
                var i = 0;
                //
                // highlighted links
                var arrgood = ['стент', 'коронарн', 'рентген', 'васкулярн', 'сосудист', 'микросфер', 'РХМДЛ', 'РХМДиЛ', 'баллон', 'рассасывающ', 'кардио', 'манометр', 'эндоваск', 'ангиограф', 'эмболизац', 'интродьюсер', 'катетер', 'периферич', 'сонных', 'эмболии', 'артери', 'РЭДЛ', 'РЭДиЛ', 'РХМД'];
                //
                // filtered links
                var arrbad = ['жилых помещений', 'лаборатор', 'офтальмолог', 'ремонт', 'водитель', 'стоматолог', 'отход', 'вирус', 'осмотр', 'реагент', 'обслуживан', 'дыхательн', 'перевязочн', 'анализатор', 'пилы',
                    'реактив', 'лекарственных препаратов', 'картридж', 'зубопротезирован', 'липосакци', 'стерилизаци', 'диализатор', 'наконечник', 'перчатки', 'шовный материал', 'шовного материала', 'травматолог',
                    'адеметионин', 'панкреатин', 'атропин', 'периндоприл', 'моче', 'сустав', 'тренажер', 'karl', 'спина', 'кислота', 'электрохирургическ', 'дренирован', 'зонд', 'лазер', 'насос', 'контур', 'оборудования',
                    'канюля', 'перевязка', 'аппаратур', 'контейнер', 'увлажнител', 'гемодиализ', 'коагулометр', 'инсулин', 'уролог', 'анестезиолог', 'olympus', 'коагулограф', 'medrad', 'salient', 'пробирок', 'патологоанатом',
                    'вливания', 'аторвастатин', 'осветител', 'электрод', 'вентиляц', 'пцр', 'запасные', 'запасной', 'эпидураль', 'кассета', 'скорой медицинской', 'инвалид', 'philips', 'акушер', 'презерватив', 'глюкоз', 'тикагрелор',
                    'вакуум', 'холодильник', 'эндоскопическ', 'степлер', 'перчаток', 'гистологи', 'гистероскоп', 'музыкальн', 'world skill', 'аутотрансфуз', 'фотообработк', 'газов', 'зуботехнич', 'тонометр', 'стетоскоп', 'климатическ',
                    'проявитель', 'омепразол', 'икатибант', 'гастрофиброскоп', 'спид', 'лекарственного препарата', 'мебел', 'внутриматочн', 'ортопедическ', 'чехлов', 'сшивающих', 'генетическ', 'томограф', 'батарея', 'worldskills', 'окулярных',
                    'дезинфицирующее', 'ультразвук', 'внутривенных', 'новорожденны', 'rapidpoint', 'тест-систем', 'thorax', 'лекарственные препараты', 'к медицинскому оборудованию', 'системы инфузионные', 'лезвия микротома', 'перинатальн', 'гинекологич',
                    'трансфузионн', 'эндоскопи', 'экспресс-тест', 'плазмафарез', 'электропривод', 'фиксирующих жилетов', 'дезинфекционн', 'канюли, маски', 'научно-исследовательск', 'биопсийн', 'уретроскоп', 'medos', 'бумага для', 'пробирка', 'ветпрепарат',
                    'ветеринар', 'биопленок', 'биопленка', 'mirasol', 'функциональной диагностики', 'спирометр', 'гидроцефали', 'калоприемник', 'уроприемник', 'трахеальн', 'парентеральн', 'энтерально', 'уретральн', 'гинекологи',
                    'оксигенатор', 'набор для перфузий', 'наборы для перфузий', 'лекарственных средств', 'эналаприл', 'комплект белья', 'аппаратов ИВЛ', 'пробоотборник', 'fresenius', 'умерших', 'погибших', 'для переливания крови', 'поставка ланцетов',
                    'обогревом', 'охлаждением', 'дезинфицирующ', 'трахеостом', 'рентгеновская пленка', 'хранения трупов', 'шприцы одноразовые', 'забора крови', 'шприцев общего назначения', 'взятия проб крови', 'раствор цитрат', 'поставка раствора',
                    'tripath', 'переливания', 'туберкулин', 'поставка шприцев однораз', 'trima accel', 'микробиологически', 'трансплантации печен', 'митральног', 'электрокардиостимулятор', 'донор', 'подгузник', 'пеленки', 'гипсовой', 'гипсовая', 'диагностических препаратов',
                    'сшивающего', 'ликворного', 'Поставка изделий медицинского назначения: шприцы', 'гастро', 'для перевязки', 'набор экстренной помощи', 'тест-полоски', 'стола операционного', 'стол операционный', 'колоноскоп', 'пленка', 'алкометр', 'монитор больного',
                    'риноскоп', 'впитывающие полоски', 'по уходу за больными', 'материала шовного', 'чрескостного', 'остеосинтеза', 'Поставка изделий медицинского назначения (шприцы)', 'перитонеальн', 'пульсоксиметр', 'шовных материалов', 'диализирующ', 'клей биологический',
                    'Шунт хирургический', 'назальн', 'оказания услуг', 'Порт инфузионный', 'Закупка медикаментов', 'заготовки крови', 'Лекарственный препарат', 'SARS-CoV-2', 'COVID', 'Лейкопластырь', 'инфузионн', 'шприц медицинский', 'нитей хирургических', 'для эндоскопа',
                    'Полоски индикаторные', 'ввод в эксплуатацию', 'упаковочной машинки', 'недержания мочи', 'эндокринной патологией', 'Фрезениус', 'паллиативн', 'Plasauto', 'Скребок', 'строительных материалов', 'Поставка медикаментов', 'лапароскопи', 'Геронтологич', 'анестезирующ',
                    'репродуктивн', 'стекловолокон', 'STERRAD', 'реакционных планшетов', 'электрохимическ', 'запчаст', 'прикроватн', 'пробирки', 'Bond-maX', 'вагинальн', 'для бритья', 'хозяйственных', 'дефибриллятор', 'плевральной', 'Материалы шовные', 'тест-полосок', 'скальпель',
                    'шприцы общего назначения', 'трансфузиолог', 'лейкопластыр', 'салфетки', 'аппарата ИВЛ', 'бахилы', 'групп крови', 'Ворлдскиллс', 'ортодонт', 'ковид-19', 'shellab', 'гостиничн', 'санаторно', 'бактериальн', 'шпатели', 'стерилизатор', 'бланочн', 'одежды', 'кассеты',
                    'тест полоски', 'венозный', 'бумага', 'ультракаин', 'катаракты', 'катаракта', 'морозильник', 'маска', 'для КДЛ', 'для морга', 'жилого помещения'
                ];
                //
                // function for highlighted links
                for (; x < arrgood.length; x++) {
                    $(".purchase-card__order-name:containsi('" + arrgood[x] + "')").each(function() {
                        var regex = new RegExp('(' + arrgood[x] + ')', 'gi');
                        $(this).html($(this).html().replace(regex, '<span class="custom-highlight-good-underline">$1</span>'));
                        $(this).closest('.purchase-card').css({
                            'box-shadow': '-4px 0px 0px 0px rgba(29, 161, 242, 0.6), 0 1px 6px rgb(0 0 0 / 10%), 0 1px 1px rgb(0 0 0 / 8%)'
                        });
                        $(this).closest('.purchase-card').addClass('arrgood');
                    });
                }
                //
                // function for filtered links
                for (; i < arrbad.length; i++) {
                    $(".purchase-card__order-name:containsi('" + arrbad[i] + "')").each(function() {
                        var regexx = new RegExp('(' + arrbad[i] + ')', 'gi');
                        $(this).html($(this).html().replace(regexx, '<span class="custom-highlight-bad-underline">$1</span>'));
                        $(this).closest('.purchase-card').css({
                            'opacity': '0.5',
                            'box-shadow': 'none',
                            'cursor': 'default',
                            'text-decoration': 'none'
                        });
                        $(this).closest('.purchase-card').addClass('arrbad');
                        $(this).closest('.purchase-card a').css({
                            'cursor': 'default',
                            'text-decoration': 'none'
                        });
                    });
                }
                //
                // styles
                $('.side-icons-list').css({
                    'display': 'none'
                });
                //
                // results text
                var numItemsFiltered = $('.arrbad').not(".arrgood").length;
                $('.custom-info-filtered-span-count').html(numItemsFiltered);
                IsExecutingFc = false;
            });

            var numItemsFiltered = 0;
            //
            function customresultscalc() {
                console.log("customresultscalc");
                $(".purchaseListHeader, .custom-buttons").css({
                    "opacity": "0.5",
                    "pointer-events": "none"
                });
                var existCondition = setInterval(function() {
                    if ($('.purchase-card').length) {
                        clearInterval(existCondition);
                        var numItems = $('.purchase-card').length;
                        $('.custom-buttons').append('<div class="custom-info"><div class="custom-info-total"><span class="custom-info-total-span">Всего результатов: </span><span class="custom-info-total-span-count">' + numItems + '</span></div><div class="custom-info-filtered"><span class="custom-info-filtered-span">Отфильтровано: </span><span class="custom-info-filtered-span-count">' + numItemsFiltered + '</span></div></div>');
                        $(".purchaseListHeader, .custom-buttons").css({
                            "opacity": "1",
                            "pointer-events": "auto"
                        });
                    }
                }, 100);
            }
            //
            var debounceTimer;
            $("body").on('DOMSubtreeModified', ".resultsWrapper", function() {
                if (!IsExecutingFc) {
                    clearTimeout(debounceTimer);
                    debounceTimer = setTimeout(function() {
                        console.log("DOMSubtreeModified");
                        $(".purchaseListHeader, .custom-buttons").css({
                            "opacity": "0.5",
                            "pointer-events": "none"
                        });
                        var existCondition = setInterval(function() {
                            if ($('.purchase-card').length) {
                                clearInterval(existCondition);
                                var numItems = $('.purchase-card').length;
                                $('.custom-info-total-span-count').html(numItems);
                                $('.custom-info-filtered-span-count').html('0');
                                // results text
                                var numItemsFiltered = $('.arrbad').not(".arrgood").length;
                                $('.custom-info-filtered-span-count').html(numItemsFiltered);
                                $(".purchaseListHeader, .custom-buttons").css({
                                    "opacity": "1",
                                    "pointer-events": "auto"
                                });
                            }
                        }, 100);
                        console.log('Function executed after 5 milisecond delay');
                    }, 5);
                }
            });
            //
            $(".custom-recycle").click(function() {
                $('.purchase-card').each(function() {
                    if ($(this).is('.arrgood.arrbad') || !$(this).hasClass('arrbad')) {
                        $(this).parent().find('.purchase-card__order-name').not('.purchase-card__order-name_visited').each(function() {
                            window.open($(this).attr('href'));
                        });
                    };
                });
            });
            //
            $('body').on('click', '.paging-link', function() {
                $("html, body").animate({
                    scrollTop: 0
                }, "swing");
            });
            //
        } else {
            alert('Скрипт уже запущен');
        }

    } else {
        // do not run the script if the user answers no
        console.log("Пользователь выбрал не запускать скрипт");
    }
}
