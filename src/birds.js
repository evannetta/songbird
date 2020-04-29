const birdsData = [
    [       
      {
        id: 1,
        name: 'Ворон',
        species: 'Corvus corax',
        description: 'Ворон - великий птах. Довжина тіла досягає 70 сантиметрів, розмах крил - до півтора метрів. Ворони населяють околиці Тауера. В Англії існує повір\'я, що в день, коли чорні ворони відлетять від Тауера, монархія впаде.',
        image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
      },
      {
        id: 2,
        name: 'Журавель',
        species: 'Grus grus',
        description: 'Звуки, що видаються журавлем, схожі на дзвінке «кур-ли - кур-ли». Журавлі найчастіше співають дуетом - один птах починає заспів зі складу «кур», а другий підхоплює «ли». Якщо птах співає один, то він видає тільки звук «кур».',
        image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
      },
      {
        id: 3,
        name: 'Ластівка',
        species: 'Delichon urbicum',
        description: 'Для ластівок характерно неголосне щебетання. Пісні ластівок не змовкають протягом усього літа. Дослідники розрізняють у птахів до 6 щебечучих звуків: «віт», «ві-віт», «чівіт», «чірівіт» і т.п. Ластівки люблять співати дуетом.',
        image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
      },
      {
        id: 4,
        name: 'Козодой',
        species: 'Caprimulgus europaeus',
        description: 'Козодой - непримітний птах, відомий завдяки своєму голосу. Пісня козодою звучить як монотонна трель схожа на торохтіння мотоцикла. Таке деренчання чутно від заходу до світанку, його тональність, частота і гучність змінюються. ',
        image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
      },
      {
        id: 5,
        name: 'Зозуля',
        species: 'Cuculus canorus',
        description: 'Зозулю назвали так через особливості її пісень. Дзвінке «ку-ку» не сплутати ні з якою іншою птицею. Зозулі не будують гнізда, їх потомство вирощують інші види пернатих, яким зозулі підкидають свої яйця. ',
        image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
      },
      {
        id: 6,
        name: 'Синиця',
        species: 'Parus major',
        description: 'В щебетанні синиць розрізняють більше 40 різних звукових поєднань. Співають вони практично цілий рік, трохи затихаючи тільки взимку. Синиці справжні санітари лісу. Одна пара синиць в період гніздування оберігає від шкідників десятки дерев. ',
        image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Горобець',
        species: 'Passer domesticus',
        description: 'Горобці є найвідомішими і впізнаваними пернатими. Їх легко впізнати по строкатому оперенню і завзятому цвіріньканню. Горобці відносяться до сінатропного виду - вони селяться поблизу людського житла. ',
        image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
      },
      {
        id: 2,
        name: 'Грак',
        species: 'Corvus frugilegus',
        description: 'Граки дуже розумні і кмітливі птахи. За допомогою дзьоба вони створюють і використовують найпростіші знаряддя. У граків розвинений рефлекс на звуки трактора. Почувши «торохтіння», вони летять на звук - трактор оре землю, значить, в цьому місці багато корму. ',
        image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
      },
      {
        id: 3,
        name: 'Галка',
        species: 'Coloeus monedula',
        description: 'Слово «галка» відбулося зі старослов\'янської мови і перекладається як «чорний». Цим словом часто називають воронів або інших чорних птахів. Латинська назва галки «monedula» пов\'язують зі словами монета за любов птиці до блискучих і яскравих речей. ',
        image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
      },
      {
        id: 4,
        name: 'Дрізд',
        species: 'Turdus philomelos',
        description: 'Дрізд - кращий співак із ряду горобиних. Пісня складається тільки з красивих звучних свистів і коротких трелей. Найчастіше її можна почути в ранковий і вечірній час. Співають дрозди на протязі всього періоду гніздування. ',
        image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
      },
      {
        id: 5,
        name: 'Сорока',
        species: 'Pica pica',
        description: 'Сорока - дуже працьовитий птах. Вона будує до восьми гнізд, а потім вибирає з них найкраще. Вхід в гніздо сороки завжди звернений на південь, щоб в оселі було тепліше. Сороки є єдиними птахами, які впізнають себе в дзеркалі. ',
        image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
      },
      {
        id: 6,
        name: 'Сойка',
        species: 'Garrulus glandarius',
        description: 'Коли сойка хвилюється, чубчик на її голові наїжачується. Птах намагається створити страхітливе видовище. Сойки вміють імітувати голоси інших птахів, тварин і звуки, які створює людина. На зиму вони роблять великі запаси жолудів і горіхів. ',
        image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Зяблик',
        species: 'Fringilla coelebs',
        description: 'У дикій природі налічується 450 видів зябликів. Взимку зяблики ведуть стайний спосіб життя. Іноді в їх сім\'ях можна побачити горобців. Співають зяблики навесні, з настанням шлюбного періоду. Їх спів - це заливисті багатохвилинні рулади. ',
        image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
      },
      {
        id: 2,
        name: 'Клест',
        species: 'Loxia curvirostra',
        description: 'Клестів називають «різдвяними» птахами. У природних умовах вони дають потомство взимку - в січні. Ці птахи утеплюють свої гнізда мохом і шерстю тварин, тому пташенятам не холодно. У пошуках шишок клести можуть відлітати за 3500 км від гнізда. ',
        image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
      },
      {
        id: 3,
        name: 'Горлиця',
        species: 'Streptopelia turtur',
        description: 'Горлиця мешкає у змішаних і широколистяних лісах, а також в міських парках і селищах. Птахи часто вибирають місця життя поруч з людиною і легко звикають до людей. Завдяки мелодійному приємному співу, горлиць часто розводять в домашніх умовах. ',
        image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
      },
      {
        id: 4,
        name: 'Дятел',
        species: 'Dendrocopos major',
        description: 'Дятел - помітний і галасливий птах, часто живе поруч з людиною. З середини січня до кінця червня можна почути «барабанний дріб» дятлів - трель від вібрації гілок під швидкими ударами дзьоба птиці. У гарну погоду дріб чутний в радіусі 1,5 км. ',
        image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
      },
      {
        id: 5,
        name: 'Удод',
        species: 'Upupa epops',
        description: 'Удоди вважають за краще жити на відкритих ландшафтах з окремими деревами або гаями. Найбільш зручними для птиці є лісостеп і савана. Удод може вибирати місця проживання поруч з людиною: пасовища, виноградники, фруктові сади. ',
        image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
      },
      {
        id: 6,
        name: 'Стриж',
        species: 'Apus apus',
        description: 'Стрижа можна побачити практично в кожному куточку планети. Вони живуть як в лісових зонах, так і на відкритих місцевостях. Живуть стрижі великими зграями. Великі колонії цих птахів можна побачити в містах або на прибережних скелях. ',
        image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Жайворонок',
        species: 'Alauda arvensis',
        description: 'Жайворонки - перелітні птахи. З початку вересня вони відлітають на південь. Повертаються вони на початку березня, незалежно від того, зійшов сніг чи ні. По прильоту жайворонків визначали настання весни і пору, коли пора орати землю. ',
        image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
      },
      {
        id: 2,
        name: 'Соловей',
        species: 'Luscinia luscinia',
        description: 'Солов\'ї співають з початку травня і до кінця літа. Кожна пісня солов\'я складається з 12 елементів, що повторюються, які ще називають колінами. Крім власних трелей, солов\'ї легко і добре переймають спів інших птахів. ',
        image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
      },
      {
        id: 3,
        name: 'Шпак',
        species: 'Sturnus vulgaris',
        description: 'Шпаки - перелітні птахи. Синхронний переліт великих зграй шпаків називається мурмураціей. Це красиве і зачаровуюче явище - безліч птахів ніби танцюють в повітрі, утворюючи мудрі фігури, які зменшуються і збільшуються в небі. ',
        image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
      },
      {
        id: 4,
        name: 'Іволга',
        species: 'Oriolus oriolus',
        description: 'Мелодійність голосу іволги порівнюють зі звучанням флейти. Людині складно розгледіти іволгу, так як вона живе високо на деревах. Іволга не тільки дуже гарна, але і корисний птах. Вона знищує отруйних гусениць, яких не поїдають інші птахи. ',
        image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
      },
      {
        id: 5,
        name: 'Омелюха',
        species: 'Bombycilla garrulus',
        description: 'У омелюхи дуже чіпкі кігтики, що допомагає птахові утримуватися на гілках і скльовувати ягоди, які найважче дістати. У період залицянь самець пропонує самці ягоду або інше частування. Якщо самка його приймає, то птиці створюють пару. ',
        image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
      },
      {
        id: 6,
        name: 'Щиголь',
        species: 'Carduelis carduelis',
        description: 'Щиглі співають красиво і мелодійно. І в природі, і в неволі вони щебечуть майже цілий рік. У співі щигля розрізняють більше 20 переливчастих трелей. Щиглики звикають до людей, і навіть можуть повернутися до господаря після того, як їх випустили на волю ',
        image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Орел',
        species: 'Aquila nipalensis',
        description: 'В давні часи орел був символом сонця. Орли часто парять над землею, при цьому швидкість їх переміщення може досягати 240 км / год. Ілюзія повільного руху відбувається через висоту польоту - понад 700 метрів ',
        image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
      },
      {
        id: 2,
        name: 'Шуліка',
        species: 'Milvus migrans',
        description: 'Шуліки - великі хижаки, в висоту вони досягають близько півметра, а вага дорослих особ досягає 1 кг. Крила вузькі і довгі, їх розмах становить 1,5 м. Шуліки часто гніздяться великими зграями і навіть утворюють великі колонії. ',
        image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
      },
      {
        id: 3,
        name: 'Лунь',
        species: 'Circus cyaneus',
        description: 'Лунь - це невеликий сокіл. Харчується в основному гризунами, основа його раціону - полівки, хом\'яки, миші. Оперення луня може бути попелясто-сірим. З таким птахом пов\'язано порівняння «сивий, як лунь». ',
        image: 'https://live.staticflickr.com/65535/49322743903_32f3922d9e.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
      },
      {
        id: 4,
        name: 'Сокіл',
        species: 'Falco peregrinus',
        description: 'Латинська назва сокола Falco походить від слова «серп» через серповидну форму крил. Довгі і широкі крила дозволяють соколу високо підніматися в небо і вільно парити. Швидкість польоту сокола досягає 280-320 кілометрів на годину. ',
        image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
      },
      {
        id: 5,
        name: 'Яструб',
        species: 'Accipiter gentilis',
        description: 'Для всіх яструбів характерні широкі і короткі крила. Ще одна відмінна ознака - білі «брови» над очима. Слов\'янські дружинники розміщували зображення яструба на своїх прапорах, як символ відваги, могутності і безжалісність до ворогів. ',
        image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
      },
      {
        id: 6,
        name: 'Пугач',
        species: 'Bubo bubo',
        description: 'Політ пугача безшумний, зір дуже гострий. Ці особливості роблять птицю неперевершеним нічним мисливцем. У пугача немає природних ворогів, жоден звір не полює на дорослих птахів. А ось на пташенят нападають лисиці і вовки. ',
        image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Альбатрос',
        species: 'Diomedea exulans',
        description: 'Альбатрос - найбільший літаючий птах в світі. Розмах крил досягає три з половиною метра, вага - десять кілограмів. Більшу частину життя альбатроси проводять в повітрі, покриваючи над океанськими просторами величезні відстані ',
        image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
      },
      {
        id: 2,
        name: 'Олуша',
        species: 'Sula nebouxii',
        description: 'Особливістю блакитноногої олуші є не тільки насичений яскраво-синій колір лапок, але ще і той факт, що вони дуже теплі. У той час як інші види птахів гріють кладки своїм тілом, блакитнонога олуша робить це за допомогою лапок ',
        image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
      },    
      {
        id: 3,
        name: 'Буревісник',
        species: 'Puffinus griseus',
        description: 'Розміри буревісників різні. Найменші з них в довжину становлять до 25 см, найбільші - до 1 м, при розмаху крил близько 2 м. Існує повір\'я, що поява буревісника в повітрі віщує бурю, про що говорить сама назва птиці. ',
        image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
      },
      {
        id: 4,
        name: 'Пелікан',
        species: 'Pelecanus',
        description: 'Пелікани - мешканці морів і річок. Ходять вони незграбно, але добре літають і плавають. Харчуються в основному рибою, влаштовують колективні полювання - вишикувавшись півколом ляскають по воді крилами і дзьобами і витісняють налякану рибу на мілководдя. ',
        image: 'https://live.staticflickr.com/7885/46523771945_9496c2a191.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
      },
      {
        id: 5,
        name: 'Пінгвін',
        species: 'Aptenodytes forsteri',
        description: 'Самець імператорського пінгвіна досягає 130 см, його маса може наближатися до 50 кг. З усіх сучасних пінгвінів цей вид - найбільший. Харчування пінгвіна складається з риби, кальмарів і криля. Полюють птиці в океані великими групами. ',
        image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
      },
      {
        id: 6,
        name: 'Чайка',
        species: 'Larus argentatus',
        description: 'Чайки населяють берега морів, озер, річок, водосховищ, боліт, часто гніздяться на островах. З кінця минулого століття чайки стали з\'являтися у великих містах, де влаштовують гнізда на дахах будівель. Всі чайки ведуть колоніальний спосіб життя. ',
        image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
      }
    ]
  ];
  
  export default birdsData;