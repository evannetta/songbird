const birdsData = [
  [       
    {
      id: 1,
      name: 'Raven',
      species: 'Corvus corax',
      description: 'The common raven can mimic sounds from their environment, including human speech. Non-vocal sounds produced by the common raven include wing whistles and bill snapping. Clapping or clicking has been observed more often in females than in males.',
      image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
    },
    {
      id: 2,
      name: 'Crane',
      species: 'Grus grus',
      description: 'Every two years, before migration, the adult common crane undergoes a complete moult, remaining flightless for six weeks, until the new feathers grow.',
      image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
    },
    {
      id: 3,
      name: 'House martin',
      species: 'Delichon urbicum',
      description: 'The common house martin is a noisy species, especially at its breeding colonies. The male\'s song, given throughout the year, is a soft twitter of melodious chirps.',
      image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
    },
    {
      id: 4,
      name: 'European nightjar',
      species: 'Caprimulgus europaeus',
      description: 'The preferred habitat is dry, open country with some trees and small bushes, such as heaths, forest clearings or newly planted woodland. The male European nightjar occupies a territory in spring and advertises his presence with a distinctive sustained churring trill from a perch.',
      image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
    },
    {
      id: 5,
      name: 'Cuckoo',
      species: 'Cuculus canorus',
      description: 'This species is a widespread summer migrant to Europe and Asia, and winters in Africa. It is a brood parasite, which means it lays eggs in the nests of other bird species, particularly of dunnocks, meadow pipits, and reed warblers.',
      image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
    },
    {
      id: 6,
      name: 'Great tit',
      species: 'Parus major',
      description: 'Great tit is a cavity nester, usually nesting in a hole in a tree. The female lays around 12 eggs and incubates them alone, although both parents raise the chicks. In most years the pair will raise two broods.',
      image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Sparrow',
      species: 'Passer domesticus',
      description: 'The house sparrow is strongly associated with human habitation, and can live in urban or rural settings. Though found in widely varied habitats and climates, it typically avoids extensive woodlands, grasslands, and deserts away from human development.',
      image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
    },
    {
      id: 2,
      name: 'Rook',
      species: 'Corvus frugilegus',
      description: 'Rooks are mainly resident birds, but the northernmost populations may move southwards to avoid the harshest winter conditions. The birds form flocks in winter, often in the company of other Corvus species or jackdaws. They return to their rookeries and breeding takes place in spring.',
      image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
    },
    {
      id: 3,
      name: 'Jackdaw',
      species: 'Coloeus monedula',
      description: 'It eats a wide variety of plant material and invertebrates, as well as food waste from urban areas. Western jackdaws are monogamous and build simple nests of sticks in cavities in trees, cliffs, or buildings. About five pale blue or blue-green eggs with brown speckles are laid and incubated by the female. The young fledge in four to five weeks.',
      image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
    },
    {
      id: 4,
      name: 'Song thrush',
      species: 'Turdus philomelos',
      description: 'The song thrush builds a neat mud-lined cup nest in a bush or tree and lays four to five dark-spotted blue eggs. It is omnivorous and has the habit of using a favourite stone as an "anvil" on which to break open the shells of snails.',
      image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
    },
    {
      id: 5,
      name: 'Eurasian magpie',
      species: 'Pica pica',
      description: 'The Eurasian magpie is one of the most intelligent birds, and it is believed to be one of the most intelligent of all non-human animals. The expansion of its nidopallium is approximately the same in its relative size as the brain of chimpanzees, gorillas, orangutans and humans. It is the only bird known to pass the mirror test, along with very few other non-avian species.',
      image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
    },
    {
      id: 6,
      name: 'Eurasian jay',
      species: 'Garrulus glandarius',
      description: 'It has pinkish brown plumage with a black stripe on each side of a whitish throat, a bright blue panel on the upper wing and a black tail. The most characteristic call is a harsh, rasping screech that is used upon sighting various predators and as a advertising call.',
      image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Chaffinch',
      species: 'Fringilla coelebs',
      description: 'The male is brightly coloured with a blue-grey cap and rust-red underparts. The female is more subdued in colouring, but both sexes have two contrasting white wing bars and white sides to the tail. The male bird has a strong voice and sings from exposed perches to attract a mate.',
      image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
    },
    {
      id: 2,
      name: 'Red crossbill',
      species: 'Loxia curvirostra',
      description: 'Adults are often brightly coloured, with red or orange males and green or yellow females, but there is wide variation in beak size and shape, and call types, leading to different classifications of variants, some of which have been named as subspecies. The species is known as "red crossbill" in North America and "common crossbill" in Europe.',
      image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
    },
    {
      id: 3,
      name: 'Turtle dove',
      species: 'Streptopelia turtur',
      description: 'Smaller and slighter in build than many other doves, it measures 26–28 cm (10–11 in) in length, 47–53 cm (19–21 in) in wingspan and weighs 100–156 g (3.5–5.5 oz). The European turtle dove may be recognised by its browner colour, and the black-and-white-striped patch on the side of its neck.',
      image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
    },
    {
      id: 4,
      name: 'Woodpecker',
      species: 'Dendrocopos major',
      description: 'This woodpecker occurs in all types of woodlands and eats a variety of foods, being capable of extracting seeds from pine cones, insect larvae from inside trees or eggs and chicks of other birds from their nests. It breeds in holes excavated in living or dead trees, unlined apart from wood chips. ',
      image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
    },
    {
      id: 5,
      name: 'Hoopoe',
      species: 'Upupa epops',
      description: 'It is a distinctive cinnamon coloured bird with black and white wings, a tall erectile crest, a broad white band across a black tail, and a long narrow downcurved bill. Its call is a soft "oop-oop-oop". It is native to Europe, Asia and the northern half of Africa. ',
      image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
    },
    {
      id: 6,
      name: 'Swift',
      species: 'Apus apus',
      description: 'Swifts have very short legs which they use primarily for clinging to vertical surfaces (hence the German name Mauersegler, literally meaning "wall-glider"). They never settle voluntarily on the ground, where they would be vulnerable to accidents and predation, and non-breeding individuals may spend up to ten months in continuous flight.',
      image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Eurasian skylark',
      species: 'Alauda arvensis',
      description: 'The female Eurasian skylark builds an open nest in a shallow depression on open ground well away from trees, bushes and hedges. She lays three to five eggs which she incubates for around 11 days. The chicks are fed by both parents but leave the nest after eight to ten days, well before they can fly. They scatter and hide in the vegetation but continue to be fed by the parents until they can fly at 18 to 20 days of age. Nests are subject to high predation rates by larger birds and small mammals. The parents can have several broods in a single season.',
      image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
    },
    {
      id: 2,
      name: 'Luscinia',
      species: 'Luscinia luscinia',
      description: 'It is a migratory insectivorous species breeding in forests in Europe and the Palearctic and overwintering in Africa. The distribution is more northerly than the very closely related common nightingale, Luscinia megarhynchos, which it closely resembles in appearance. It nests near the ground in dense undergrowth.',
      image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
    },
    {
      id: 3,
      name: 'Starling',
      species: 'Sturnus vulgaris',
      description: 'The common starling builds an untidy nest in a natural or artificial cavity in which four or five glossy, pale blue eggs are laid. These take two weeks to hatch and the young remain in the nest for another three weeks. There are normally one or two breeding attempts each year. This species is omnivorous, taking a wide range of invertebrates, as well as seeds and fruit. It is hunted by various mammals and birds of prey, and is host to a range of external and internal parasites.',
      image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
    },
    {
      id: 4,
      name: 'Oriole',
      species: 'Oriolus oriolus',
      description: 'The male is striking in the typical oriole black and yellow plumage, but the female is a drabber green bird. Orioles are shy, and even the male is remarkably difficult to see in the dappled yellow and green leaves of the canopy. In flight they look somewhat like a thrush, strong and direct with some shallow dips over longer distances. ',
      image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
    },
    {
      id: 5,
      name: 'Bohemian waxwing',
      species: 'Bombycilla garrulus',
      description: 'It has mainly buff-grey plumage, black face markings and a pointed crest. Its wings are patterned with white and bright yellow, and some feather tips have the red waxy appearance that give this species its English name. The three subspecies show only minor differences in appearance. Females are similar to males, although young birds are less well-marked and have few or no waxy wingtips. ',
      image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
    },
    {
      id: 6,
      name: 'Goldfinch',
      species: 'Carduelis carduelis',
      description: 'The breeding male has a red face with black markings around the eyes, and a black-and-white head. The back and flanks are buff or chestnut brown. The black wings have a broad yellow bar. The tail is black and the rump is white. Males and females are very similar, but females have a slightly smaller red area on the face.',
      image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Steppe eagle',
      species: 'Aquila nipalensis',
      description: 'The steppe eagle is in many ways a peculiar species of eagle. It is a specialized predator of ground squirrels on the breeding ground, also taking other rather small mammals and other prey, doing so more often when ground squirrels are less consistently found.',
      image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
    },
    {
      id: 2,
      name: 'Black kite',
      species: 'Milvus migrans',
      description: 'Unlike others of the group, black kites are opportunistic hunters and are more likely to scavenge. They spend much time soaring and gliding in thermals in search of food. Their angled wing and distinctive forked tail make them easy to identify. They are also vociferous with a shrill whinnying call.',
      image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
    },
    {
      id: 3,
      name: 'Hen harrier',
      species: 'Circus cyaneus',
      description: 'These, are the one of the few raptorial birds known to practice polygyny – one male mates with several females. Up to five females have been known to mate with one male in a season. A supplementary feeding experiment on the Orkney islands showed that rates of polygyny were influenced by food levels; males provided with extra food had more breeding females than \'control\' males that received no extra food.',
      image: 'https://images.immediate.co.uk/production/volatile/sites/22/2020/01/Hen-Harrier-568cceb-scaled.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
    },
    {
      id: 4,
      name: 'Peregrine falcon',
      species: 'Falco peregrinus',
      description: 'The peregrine falcon is a well-respected falconry bird due to its strong hunting ability, high trainability, versatility, and availability via captive breeding. It is effective on most game bird species, from small to large. It has also been used as a religious, royal, or national symbol across multiple eras and areas of human civilization.',
      image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
    },
    {
      id: 5,
      name: 'Northern goshawk',
      species: 'Accipiter gentilis',
      description: 'Goshawks tend to show clinal variation in color, with most goshawks further north being paler and those in warmer areas being darker but individuals can be either dark in the north or pale in the south. Individuals that live a long life may gradually become paler as they age, manifesting in mottling and a lightening of the back from a darker shade to a bluer pale color.',
      image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
    },
    {
      id: 6,
      name: 'Eagle-owl',
      species: 'Bubo bubo',
      description: 'The female incubates the eggs and broods the young, and the male provides food for her, and when they hatch, for the nestlings, as well. Continuing parental care for the young is provided by both adults for about five months.',
      image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Albatross',
      species: 'Diomedea exulans',
      description: 'The wandering albatross is the whitest of the wandering albatross species complex, the other species having a great deal more brown and black on the wings and body as breeding adults, very closely resembling immature wandering albatrosses. The large bill is pink, as are the feet. They also have a salt gland that is situated above the nasal passage and helps desalinate their bodies, due to the high amount of ocean water that they imbibe. They excrete a high saline solution from their nose, which is a probable cause for the pink-yellow stain seen on some animals\' necks.',
      image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
    },
    {
      id: 2,
      name: 'Blue-footed booby',
      species: 'Sula nebouxii',
      description: 'The blue-footed booby usually lays one to three eggs at a time. The species practices asynchronous hatching, in contrast to many other species whereby incubation begins when the last egg is laid and all chicks hatch together. This results in a growth inequality and size disparity between siblings, leading to facultative siblicide in times of food scarcity. This makes the blue-footed booby an important model for studying parent–offspring conflict and sibling rivalry.',
      image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
    },    
    {
      id: 3,
      name: 'Sooty shearwater',
      species: 'Puffinus griseus',
      description: 'Usually loud, sooty shearwaters coo and croak while on the breeding grounds. In the Atlantic, it is the only such bird, whereas, in the Pacific part of its range, other all-dark large shearwaters are found. The short-tailed shearwater in particular is almost impossible to tell apart from the present species at a distance.',
      image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
    },
    {
      id: 4,
      name: 'Pelican',
      species: 'Pelecanus',
      description: 'Pelicans frequent inland and coastal waters, where they feed principally on fish, catching them at or near the water surface. They are gregarious birds, travelling in flocks, hunting cooperatively, and breeding colonially. Four white-plumaged species tend to nest on the ground, and four brown or grey-plumaged species nest mainly in trees. The relationship between pelicans and people has often been contentious. The birds have been persecuted because of their perceived competition with commercial and recreational fishing.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Pelican_lakes_entrance02.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
    },
    {
      id: 5,
      name: 'Emperor penguin',
      species: 'Aptenodytes forsteri',
      description: 'The only penguin species that breeds during the Antarctic winter, emperor penguins trek 50–120 km (31–75 mi) over the ice to breeding colonies which can contain up to several thousand individuals. The female lays a single egg, which is incubated for just over two months by the male while the female returns to the sea to feed; parents subsequently take turns foraging at sea and caring for their chick in the colony. The lifespan is typically 20 years in the wild, although observations suggest that some individuals may live to 50 years of age.',
      image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
    },
    {
      id: 6,
      name: 'Herring gull',
      species: 'Larus argentatus',
      description: 'The warning to their chicks sounds almost like a bark from a small dog. If the danger closes in, the bark is repeated, and when very close, the warning is three quick barks. If a chick is "grounded", the bird makes itself appear bigger to intimidate the threat. If other adult birds are present, they will help in the same way. For instance, a person with a dog (or someone who chases the chick) may be attacked by many adult birds, even if just one chick is in danger.',
      image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
      audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
    }
  ]
];
  
export default birdsData;