(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('google-libphonenumber'), require('@angular/core'), require('@angular/common'), require('ngx-bootstrap'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-intl-tel-input', ['exports', 'google-libphonenumber', '@angular/core', '@angular/common', 'ngx-bootstrap', '@angular/forms'], factory) :
    (factory((global['ngx-intl-tel-input'] = {}),global['^3']['2']['1'],global.ng.core,global.ng.common,global['^3']['1']['3'],global.ng.forms));
}(this, (function (exports,lpn,i0,common,ngxBootstrap,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxIntlTelInputService = /** @class */ (function () {
        function NgxIntlTelInputService() {
        }
        NgxIntlTelInputService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxIntlTelInputService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxIntlTelInputService.ngInjectableDef = i0.defineInjectable({ factory: function NgxIntlTelInputService_Factory() { return new NgxIntlTelInputService(); }, token: NgxIntlTelInputService, providedIn: "root" });
        return NgxIntlTelInputService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CountryCode = /** @class */ (function () {
        function CountryCode() {
            this.allCountries = [
                [
                    'Afghanistan (‫افغانستان‬‎)',
                    'af',
                    '93'
                ],
                [
                    'Albania (Shqipëri)',
                    'al',
                    '355'
                ],
                [
                    'Algeria (‫الجزائر‬‎)',
                    'dz',
                    '213'
                ],
                [
                    'American Samoa',
                    'as',
                    '1684'
                ],
                [
                    'Andorra',
                    'ad',
                    '376'
                ],
                [
                    'Angola',
                    'ao',
                    '244'
                ],
                [
                    'Anguilla',
                    'ai',
                    '1264'
                ],
                [
                    'Antigua and Barbuda',
                    'ag',
                    '1268'
                ],
                [
                    'Argentina',
                    'ar',
                    '54'
                ],
                [
                    'Armenia (Հայաստան)',
                    'am',
                    '374'
                ],
                [
                    'Aruba',
                    'aw',
                    '297'
                ],
                [
                    'Australia',
                    'au',
                    '61',
                    0
                ],
                [
                    'Austria (Österreich)',
                    'at',
                    '43'
                ],
                [
                    'Azerbaijan (Azərbaycan)',
                    'az',
                    '994'
                ],
                [
                    'Bahamas',
                    'bs',
                    '1242'
                ],
                [
                    'Bahrain (‫البحرين‬‎)',
                    'bh',
                    '973'
                ],
                [
                    'Bangladesh (বাংলাদেশ)',
                    'bd',
                    '880'
                ],
                [
                    'Barbados',
                    'bb',
                    '1246'
                ],
                [
                    'Belarus (Беларусь)',
                    'by',
                    '375'
                ],
                [
                    'Belgium (België)',
                    'be',
                    '32'
                ],
                [
                    'Belize',
                    'bz',
                    '501'
                ],
                [
                    'Benin (Bénin)',
                    'bj',
                    '229'
                ],
                [
                    'Bermuda',
                    'bm',
                    '1441'
                ],
                [
                    'Bhutan (འབྲུག)',
                    'bt',
                    '975'
                ],
                [
                    'Bolivia',
                    'bo',
                    '591'
                ],
                [
                    'Bosnia and Herzegovina (Босна и Херцеговина)',
                    'ba',
                    '387'
                ],
                [
                    'Botswana',
                    'bw',
                    '267'
                ],
                [
                    'Brazil (Brasil)',
                    'br',
                    '55'
                ],
                [
                    'British Indian Ocean Territory',
                    'io',
                    '246'
                ],
                [
                    'British Virgin Islands',
                    'vg',
                    '1284'
                ],
                [
                    'Brunei',
                    'bn',
                    '673'
                ],
                [
                    'Bulgaria (България)',
                    'bg',
                    '359'
                ],
                [
                    'Burkina Faso',
                    'bf',
                    '226'
                ],
                [
                    'Burundi (Uburundi)',
                    'bi',
                    '257'
                ],
                [
                    'Cambodia (កម្ពុជា)',
                    'kh',
                    '855'
                ],
                [
                    'Cameroon (Cameroun)',
                    'cm',
                    '237'
                ],
                [
                    'Canada',
                    'ca',
                    '1',
                    1,
                    [
                        '204', '226', '236', '249', '250', '289', '306', '343', '365', '387', '403', '416',
                        '418', '431', '437', '438', '450', '506', '514', '519', '548', '579', '581', '587',
                        '604', '613', '639', '647', '672', '705', '709', '742', '778', '780', '782', '807',
                        '819', '825', '867', '873', '902', '905'
                    ]
                ],
                [
                    'Cape Verde (Kabu Verdi)',
                    'cv',
                    '238'
                ],
                [
                    'Caribbean Netherlands',
                    'bq',
                    '599',
                    1
                ],
                [
                    'Cayman Islands',
                    'ky',
                    '1345'
                ],
                [
                    'Central African Republic (République centrafricaine)',
                    'cf',
                    '236'
                ],
                [
                    'Chad (Tchad)',
                    'td',
                    '235'
                ],
                [
                    'Chile',
                    'cl',
                    '56'
                ],
                [
                    'China (中国)',
                    'cn',
                    '86'
                ],
                [
                    'Christmas Island',
                    'cx',
                    '61',
                    2
                ],
                [
                    'Cocos (Keeling) Islands',
                    'cc',
                    '61',
                    1
                ],
                [
                    'Colombia',
                    'co',
                    '57'
                ],
                [
                    'Comoros (‫جزر القمر‬‎)',
                    'km',
                    '269'
                ],
                [
                    'Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)',
                    'cd',
                    '243'
                ],
                [
                    'Congo (Republic) (Congo-Brazzaville)',
                    'cg',
                    '242'
                ],
                [
                    'Cook Islands',
                    'ck',
                    '682'
                ],
                [
                    'Costa Rica',
                    'cr',
                    '506'
                ],
                [
                    'Côte d’Ivoire',
                    'ci',
                    '225'
                ],
                [
                    'Croatia (Hrvatska)',
                    'hr',
                    '385'
                ],
                [
                    'Cuba',
                    'cu',
                    '53'
                ],
                [
                    'Curaçao',
                    'cw',
                    '599',
                    0
                ],
                [
                    'Cyprus (Κύπρος)',
                    'cy',
                    '357'
                ],
                [
                    'Czech Republic (Česká republika)',
                    'cz',
                    '420'
                ],
                [
                    'Denmark (Danmark)',
                    'dk',
                    '45'
                ],
                [
                    'Djibouti',
                    'dj',
                    '253'
                ],
                [
                    'Dominica',
                    'dm',
                    '1767'
                ],
                [
                    'Dominican Republic (República Dominicana)',
                    'do',
                    '1',
                    2,
                    ['809', '829', '849']
                ],
                [
                    'Ecuador',
                    'ec',
                    '593'
                ],
                [
                    'Egypt (‫مصر‬‎)',
                    'eg',
                    '20'
                ],
                [
                    'El Salvador',
                    'sv',
                    '503'
                ],
                [
                    'Equatorial Guinea (Guinea Ecuatorial)',
                    'gq',
                    '240'
                ],
                [
                    'Eritrea',
                    'er',
                    '291'
                ],
                [
                    'Estonia (Eesti)',
                    'ee',
                    '372'
                ],
                [
                    'Ethiopia',
                    'et',
                    '251'
                ],
                [
                    'Falkland Islands (Islas Malvinas)',
                    'fk',
                    '500'
                ],
                [
                    'Faroe Islands (Føroyar)',
                    'fo',
                    '298'
                ],
                [
                    'Fiji',
                    'fj',
                    '679'
                ],
                [
                    'Finland (Suomi)',
                    'fi',
                    '358',
                    0
                ],
                [
                    'France',
                    'fr',
                    '33'
                ],
                [
                    'French Guiana (Guyane française)',
                    'gf',
                    '594'
                ],
                [
                    'French Polynesia (Polynésie française)',
                    'pf',
                    '689'
                ],
                [
                    'Gabon',
                    'ga',
                    '241'
                ],
                [
                    'Gambia',
                    'gm',
                    '220'
                ],
                [
                    'Georgia (საქართველო)',
                    'ge',
                    '995'
                ],
                [
                    'Germany (Deutschland)',
                    'de',
                    '49'
                ],
                [
                    'Ghana (Gaana)',
                    'gh',
                    '233'
                ],
                [
                    'Gibraltar',
                    'gi',
                    '350'
                ],
                [
                    'Greece (Ελλάδα)',
                    'gr',
                    '30'
                ],
                [
                    'Greenland (Kalaallit Nunaat)',
                    'gl',
                    '299'
                ],
                [
                    'Grenada',
                    'gd',
                    '1473'
                ],
                [
                    'Guadeloupe',
                    'gp',
                    '590',
                    0
                ],
                [
                    'Guam',
                    'gu',
                    '1671'
                ],
                [
                    'Guatemala',
                    'gt',
                    '502'
                ],
                [
                    'Guernsey',
                    'gg',
                    '44',
                    1,
                    [1481]
                ],
                [
                    'Guinea (Guinée)',
                    'gn',
                    '224'
                ],
                [
                    'Guinea-Bissau (Guiné Bissau)',
                    'gw',
                    '245'
                ],
                [
                    'Guyana',
                    'gy',
                    '592'
                ],
                [
                    'Haiti',
                    'ht',
                    '509'
                ],
                [
                    'Honduras',
                    'hn',
                    '504'
                ],
                [
                    'Hong Kong (香港)',
                    'hk',
                    '852'
                ],
                [
                    'Hungary (Magyarország)',
                    'hu',
                    '36'
                ],
                [
                    'Iceland (Ísland)',
                    'is',
                    '354'
                ],
                [
                    'India (भारत)',
                    'in',
                    '91'
                ],
                [
                    'Indonesia',
                    'id',
                    '62'
                ],
                [
                    'Iran (‫ایران‬‎)',
                    'ir',
                    '98'
                ],
                [
                    'Iraq (‫العراق‬‎)',
                    'iq',
                    '964'
                ],
                [
                    'Ireland',
                    'ie',
                    '353'
                ],
                [
                    'Isle of Man',
                    'im',
                    '44',
                    2,
                    [1624]
                ],
                [
                    'Israel (‫ישראל‬‎)',
                    'il',
                    '972'
                ],
                [
                    'Italy (Italia)',
                    'it',
                    '39',
                    0
                ],
                [
                    'Jamaica',
                    'jm',
                    '1876'
                ],
                [
                    'Japan (日本)',
                    'jp',
                    '81'
                ],
                [
                    'Jersey',
                    'je',
                    '44',
                    3,
                    [1534]
                ],
                [
                    'Jordan (‫الأردن‬‎)',
                    'jo',
                    '962'
                ],
                [
                    'Kazakhstan (Казахстан)',
                    'kz',
                    '7',
                    1
                ],
                [
                    'Kenya',
                    'ke',
                    '254'
                ],
                [
                    'Kiribati',
                    'ki',
                    '686'
                ],
                [
                    'Kosovo',
                    'xk',
                    '383'
                ],
                [
                    'Kuwait (‫الكويت‬‎)',
                    'kw',
                    '965'
                ],
                [
                    'Kyrgyzstan (Кыргызстан)',
                    'kg',
                    '996'
                ],
                [
                    'Laos (ລາວ)',
                    'la',
                    '856'
                ],
                [
                    'Latvia (Latvija)',
                    'lv',
                    '371'
                ],
                [
                    'Lebanon (‫لبنان‬‎)',
                    'lb',
                    '961'
                ],
                [
                    'Lesotho',
                    'ls',
                    '266'
                ],
                [
                    'Liberia',
                    'lr',
                    '231'
                ],
                [
                    'Libya (‫ليبيا‬‎)',
                    'ly',
                    '218'
                ],
                [
                    'Liechtenstein',
                    'li',
                    '423'
                ],
                [
                    'Lithuania (Lietuva)',
                    'lt',
                    '370'
                ],
                [
                    'Luxembourg',
                    'lu',
                    '352'
                ],
                [
                    'Macau (澳門)',
                    'mo',
                    '853'
                ],
                [
                    'Macedonia (FYROM) (Македонија)',
                    'mk',
                    '389'
                ],
                [
                    'Madagascar (Madagasikara)',
                    'mg',
                    '261'
                ],
                [
                    'Malawi',
                    'mw',
                    '265'
                ],
                [
                    'Malaysia',
                    'my',
                    '60'
                ],
                [
                    'Maldives',
                    'mv',
                    '960'
                ],
                [
                    'Mali',
                    'ml',
                    '223'
                ],
                [
                    'Malta',
                    'mt',
                    '356'
                ],
                [
                    'Marshall Islands',
                    'mh',
                    '692'
                ],
                [
                    'Martinique',
                    'mq',
                    '596'
                ],
                [
                    'Mauritania (‫موريتانيا‬‎)',
                    'mr',
                    '222'
                ],
                [
                    'Mauritius (Moris)',
                    'mu',
                    '230'
                ],
                [
                    'Mayotte',
                    'yt',
                    '262',
                    1
                ],
                [
                    'Mexico (México)',
                    'mx',
                    '52'
                ],
                [
                    'Micronesia',
                    'fm',
                    '691'
                ],
                [
                    'Moldova (Republica Moldova)',
                    'md',
                    '373'
                ],
                [
                    'Monaco',
                    'mc',
                    '377'
                ],
                [
                    'Mongolia (Монгол)',
                    'mn',
                    '976'
                ],
                [
                    'Montenegro (Crna Gora)',
                    'me',
                    '382'
                ],
                [
                    'Montserrat',
                    'ms',
                    '1664'
                ],
                [
                    'Morocco (‫المغرب‬‎)',
                    'ma',
                    '212',
                    0
                ],
                [
                    'Mozambique (Moçambique)',
                    'mz',
                    '258'
                ],
                [
                    'Myanmar (Burma) (မြန်မာ)',
                    'mm',
                    '95'
                ],
                [
                    'Namibia (Namibië)',
                    'na',
                    '264'
                ],
                [
                    'Nauru',
                    'nr',
                    '674'
                ],
                [
                    'Nepal (नेपाल)',
                    'np',
                    '977'
                ],
                [
                    'Netherlands (Nederland)',
                    'nl',
                    '31'
                ],
                [
                    'New Caledonia (Nouvelle-Calédonie)',
                    'nc',
                    '687'
                ],
                [
                    'New Zealand',
                    'nz',
                    '64'
                ],
                [
                    'Nicaragua',
                    'ni',
                    '505'
                ],
                [
                    'Niger (Nijar)',
                    'ne',
                    '227'
                ],
                [
                    'Nigeria',
                    'ng',
                    '234'
                ],
                [
                    'Niue',
                    'nu',
                    '683'
                ],
                [
                    'Norfolk Island',
                    'nf',
                    '672'
                ],
                [
                    'North Korea (조선 민주주의 인민 공화국)',
                    'kp',
                    '850'
                ],
                [
                    'Northern Mariana Islands',
                    'mp',
                    '1670'
                ],
                [
                    'Norway (Norge)',
                    'no',
                    '47',
                    0
                ],
                [
                    'Oman (‫عُمان‬‎)',
                    'om',
                    '968'
                ],
                [
                    'Pakistan (‫پاکستان‬‎)',
                    'pk',
                    '92'
                ],
                [
                    'Palau',
                    'pw',
                    '680'
                ],
                [
                    'Palestine (‫فلسطين‬‎)',
                    'ps',
                    '970'
                ],
                [
                    'Panama (Panamá)',
                    'pa',
                    '507'
                ],
                [
                    'Papua New Guinea',
                    'pg',
                    '675'
                ],
                [
                    'Paraguay',
                    'py',
                    '595'
                ],
                [
                    'Peru (Perú)',
                    'pe',
                    '51'
                ],
                [
                    'Philippines',
                    'ph',
                    '63'
                ],
                [
                    'Poland (Polska)',
                    'pl',
                    '48'
                ],
                [
                    'Portugal',
                    'pt',
                    '351'
                ],
                [
                    'Puerto Rico',
                    'pr',
                    '1',
                    3,
                    ['787', '939']
                ],
                [
                    'Qatar (‫قطر‬‎)',
                    'qa',
                    '974'
                ],
                [
                    'Réunion (La Réunion)',
                    're',
                    '262',
                    0
                ],
                [
                    'Romania (România)',
                    'ro',
                    '40'
                ],
                [
                    'Russia (Россия)',
                    'ru',
                    '7',
                    0
                ],
                [
                    'Rwanda',
                    'rw',
                    '250'
                ],
                [
                    'Saint Barthélemy (Saint-Barthélemy)',
                    'bl',
                    '590',
                    1
                ],
                [
                    'Saint Helena',
                    'sh',
                    '290'
                ],
                [
                    'Saint Kitts and Nevis',
                    'kn',
                    '1869'
                ],
                [
                    'Saint Lucia',
                    'lc',
                    '1758'
                ],
                [
                    'Saint Martin (Saint-Martin (partie française))',
                    'mf',
                    '590',
                    2
                ],
                [
                    'Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)',
                    'pm',
                    '508'
                ],
                [
                    'Saint Vincent and the Grenadines',
                    'vc',
                    '1784'
                ],
                [
                    'Samoa',
                    'ws',
                    '685'
                ],
                [
                    'San Marino',
                    'sm',
                    '378'
                ],
                [
                    'São Tomé and Príncipe (São Tomé e Príncipe)',
                    'st',
                    '239'
                ],
                [
                    'Saudi Arabia (‫المملكة العربية السعودية‬‎)',
                    'sa',
                    '966'
                ],
                [
                    'Senegal (Sénégal)',
                    'sn',
                    '221'
                ],
                [
                    'Serbia (Србија)',
                    'rs',
                    '381'
                ],
                [
                    'Seychelles',
                    'sc',
                    '248'
                ],
                [
                    'Sierra Leone',
                    'sl',
                    '232'
                ],
                [
                    'Singapore',
                    'sg',
                    '65'
                ],
                [
                    'Sint Maarten',
                    'sx',
                    '1721'
                ],
                [
                    'Slovakia (Slovensko)',
                    'sk',
                    '421'
                ],
                [
                    'Slovenia (Slovenija)',
                    'si',
                    '386'
                ],
                [
                    'Solomon Islands',
                    'sb',
                    '677'
                ],
                [
                    'Somalia (Soomaaliya)',
                    'so',
                    '252'
                ],
                [
                    'South Africa',
                    'za',
                    '27'
                ],
                [
                    'South Korea (대한민국)',
                    'kr',
                    '82'
                ],
                [
                    'South Sudan (‫جنوب السودان‬‎)',
                    'ss',
                    '211'
                ],
                [
                    'Spain (España)',
                    'es',
                    '34'
                ],
                [
                    'Sri Lanka (ශ්‍රී ලංකාව)',
                    'lk',
                    '94'
                ],
                [
                    'Sudan (‫السودان‬‎)',
                    'sd',
                    '249'
                ],
                [
                    'Suriname',
                    'sr',
                    '597'
                ],
                [
                    'Svalbard and Jan Mayen',
                    'sj',
                    '47',
                    1
                ],
                [
                    'Swaziland',
                    'sz',
                    '268'
                ],
                [
                    'Sweden (Sverige)',
                    'se',
                    '46'
                ],
                [
                    'Switzerland (Schweiz)',
                    'ch',
                    '41'
                ],
                [
                    'Syria (‫سوريا‬‎)',
                    'sy',
                    '963'
                ],
                [
                    'Taiwan (台灣)',
                    'tw',
                    '886'
                ],
                [
                    'Tajikistan',
                    'tj',
                    '992'
                ],
                [
                    'Tanzania',
                    'tz',
                    '255'
                ],
                [
                    'Thailand (ไทย)',
                    'th',
                    '66'
                ],
                [
                    'Timor-Leste',
                    'tl',
                    '670'
                ],
                [
                    'Togo',
                    'tg',
                    '228'
                ],
                [
                    'Tokelau',
                    'tk',
                    '690'
                ],
                [
                    'Tonga',
                    'to',
                    '676'
                ],
                [
                    'Trinidad and Tobago',
                    'tt',
                    '1868'
                ],
                [
                    'Tunisia (‫تونس‬‎)',
                    'tn',
                    '216'
                ],
                [
                    'Turkey (Türkiye)',
                    'tr',
                    '90'
                ],
                [
                    'Turkmenistan',
                    'tm',
                    '993'
                ],
                [
                    'Turks and Caicos Islands',
                    'tc',
                    '1649'
                ],
                [
                    'Tuvalu',
                    'tv',
                    '688'
                ],
                [
                    'U.S. Virgin Islands',
                    'vi',
                    '1340'
                ],
                [
                    'Uganda',
                    'ug',
                    '256'
                ],
                [
                    'Ukraine (Україна)',
                    'ua',
                    '380'
                ],
                [
                    'United Arab Emirates (‫الإمارات العربية المتحدة‬‎)',
                    'ae',
                    '971'
                ],
                [
                    'United Kingdom',
                    'gb',
                    '44',
                    0
                ],
                [
                    'United States',
                    'us',
                    '1',
                    0
                ],
                [
                    'Uruguay',
                    'uy',
                    '598'
                ],
                [
                    'Uzbekistan (Oʻzbekiston)',
                    'uz',
                    '998'
                ],
                [
                    'Vanuatu',
                    'vu',
                    '678'
                ],
                [
                    'Vatican City (Città del Vaticano)',
                    'va',
                    '39',
                    1
                ],
                [
                    'Venezuela',
                    've',
                    '58'
                ],
                [
                    'Vietnam (Việt Nam)',
                    'vn',
                    '84'
                ],
                [
                    'Wallis and Futuna',
                    'wf',
                    '681'
                ],
                [
                    'Western Sahara (‫الصحراء الغربية‬‎)',
                    'eh',
                    '212',
                    1
                ],
                [
                    'Yemen (‫اليمن‬‎)',
                    'ye',
                    '967'
                ],
                [
                    'Zambia',
                    'zm',
                    '260'
                ],
                [
                    'Zimbabwe',
                    'zw',
                    '263'
                ],
                [
                    'Åland Islands',
                    'ax',
                    '358',
                    1
                ]
            ];
        }
        return CountryCode;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var phoneNumberValidator = function (control) {
        /** @type {?} */
        var isRequired = control.errors && control.errors.required === true;
        /** @type {?} */
        var error = { validatePhoneNumber: { valid: false } };
        /** @type {?} */
        var number;
        try {
            number = lpn.PhoneNumberUtil.getInstance().parse(control.value.number, control.value.countryCode);
        }
        catch (e) {
            if (isRequired === true) {
                return error;
            }
        }
        if (control.value) {
            if (!number) {
                return error;
            }
            else {
                if (!lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(number, control.value.countryCode)) {
                    return error;
                }
            }
        }
        return;
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = phoneNumberValidator;
    var NgxIntlTelInputComponent = /** @class */ (function () {
        function NgxIntlTelInputComponent(countryCodeData) {
            this.countryCodeData = countryCodeData;
            this.value = '';
            this.preferredCountries = [];
            this.enablePlaceholder = true;
            this.cssClass = 'form-control';
            this.onlyCountries = [];
            this.enableAutoCountrySelect = false;
            this.phoneNumber = '';
            this.allCountries = [];
            this.preferredCountriesInDropDown = [];
            this.phoneUtil = lpn.PhoneNumberUtil.getInstance();
            this.disabled = false;
            this.errors = ['Phone number is required.'];
            this.onTouched = function () { };
            this.propagateChange = function (_) { };
        }
        /**
         * @return {?}
         */
        NgxIntlTelInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.fetchCountryData();
                if (this.preferredCountries.length) {
                    this.preferredCountries.forEach(function (iso2) {
                        /** @type {?} */
                        var preferredCountry = _this.allCountries.filter(function (c) {
                            return c.iso2 === iso2;
                        });
                        _this.preferredCountriesInDropDown.push(preferredCountry[0]);
                    });
                }
                if (this.onlyCountries.length) {
                    this.allCountries = this.allCountries.filter(function (c) { return _this.onlyCountries.includes(c.iso2); });
                }
                if (this.preferredCountriesInDropDown.length) {
                    this.selectedCountry = this.preferredCountriesInDropDown[0];
                }
                else {
                    this.selectedCountry = this.allCountries[0];
                }
            };
        /**
         * @return {?}
         */
        NgxIntlTelInputComponent.prototype.onPhoneNumberChange = /**
         * @return {?}
         */
            function () {
                this.value = this.phoneNumber;
                /** @type {?} */
                var number;
                try {
                    number = this.phoneUtil.parse(this.phoneNumber, this.selectedCountry.iso2.toUpperCase());
                }
                catch (e) {
                }
                /** @type {?} */
                var countryCode = this.selectedCountry.iso2;
                // auto select country based on the extension (and areaCode if needed) (e.g select Canada if number starts with +1 416)
                if (this.enableAutoCountrySelect) {
                    countryCode = number && number.getCountryCode()
                        ? this.getCountryIsoCode(number.getCountryCode(), number)
                        : this.selectedCountry.iso2;
                    if (countryCode !== this.selectedCountry.iso2) {
                        /** @type {?} */
                        var newCountry = this.allCountries.find(function (c) { return c.iso2 === countryCode; });
                        if (newCountry) {
                            this.selectedCountry = newCountry;
                        }
                    }
                }
                countryCode = countryCode ? countryCode : this.selectedCountry.iso2;
                if (!this.value) {
                    // tslint:disable-next-line:no-null-keyword
                    this.propagateChange(null);
                }
                else {
                    this.propagateChange({
                        number: this.value,
                        internationalNumber: number ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL) : '',
                        nationalNumber: number ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL) : '',
                        countryCode: countryCode.toUpperCase()
                    });
                }
            };
        /**
         * @param {?} country
         * @param {?} el
         * @return {?}
         */
        NgxIntlTelInputComponent.prototype.onCountrySelect = /**
         * @param {?} country
         * @param {?} el
         * @return {?}
         */
            function (country, el) {
                this.selectedCountry = country;
                if (this.phoneNumber.length > 0) {
                    this.value = this.phoneNumber;
                    /** @type {?} */
                    var number = void 0;
                    try {
                        number = this.phoneUtil.parse(this.phoneNumber, this.selectedCountry.iso2.toUpperCase());
                    }
                    catch (e) {
                    }
                    this.propagateChange({
                        number: this.value,
                        internationalNumber: number ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.INTERNATIONAL) : '',
                        nationalNumber: number ? this.phoneUtil.format(number, lpn.PhoneNumberFormat.NATIONAL) : '',
                        countryCode: this.selectedCountry.iso2.toUpperCase()
                    });
                }
                el.focus();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NgxIntlTelInputComponent.prototype.onInputKeyPress = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /** @type {?} */
                var pattern = /[0-9\+\-\ ]/;
                /** @type {?} */
                var inputChar = String.fromCharCode(event.charCode);
                if (!pattern.test(inputChar)) {
                    event.preventDefault();
                }
            };
        /**
         * @protected
         * @return {?}
         */
        NgxIntlTelInputComponent.prototype.fetchCountryData = /**
         * @protected
         * @return {?}
         */
            function () {
                var _this = this;
                this.countryCodeData.allCountries.forEach(function (c) {
                    /** @type {?} */
                    var country = {
                        name: c[0].toString(),
                        iso2: c[1].toString(),
                        dialCode: c[2].toString(),
                        priority: +c[3] || 0,
                        areaCodes: ( /** @type {?} */(c[4])) || undefined,
                        flagClass: c[1].toString().toLocaleLowerCase(),
                        placeHolder: ''
                    };
                    if (_this.enablePlaceholder) {
                        country.placeHolder = _this.getPhoneNumberPlaceHolder(country.iso2.toUpperCase());
                    }
                    _this.allCountries.push(country);
                });
            };
        /**
         * @protected
         * @param {?} countryCode
         * @return {?}
         */
        NgxIntlTelInputComponent.prototype.getPhoneNumberPlaceHolder = /**
         * @protected
         * @param {?} countryCode
         * @return {?}
         */
            function (countryCode) {
                try {
                    return this.phoneUtil.format(this.phoneUtil.getExampleNumber(countryCode), lpn.PhoneNumberFormat.INTERNATIONAL);
                }
                catch (e) {
                    return e;
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgxIntlTelInputComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.propagateChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgxIntlTelInputComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgxIntlTelInputComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
            };
        /**
         * @param {?} obj
         * @return {?}
         */
        NgxIntlTelInputComponent.prototype.writeValue = /**
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                var _this = this;
                if (obj) {
                    this.phoneNumber = obj;
                    setTimeout(function () {
                        _this.onPhoneNumberChange();
                    }, 1);
                }
            };
        /**
         * @private
         * @param {?} countryCode
         * @param {?} number
         * @return {?}
         */
        NgxIntlTelInputComponent.prototype.getCountryIsoCode = /**
         * @private
         * @param {?} countryCode
         * @param {?} number
         * @return {?}
         */
            function (countryCode, number) {
                // Will use this to match area code from the first numbers
                /** @type {?} */
                var rawNumber = number.values_['2'].toString();
                // List of all countries with countryCode (can be more than one. e.x. US, CA, DO, PR all have +1 countryCode)
                /** @type {?} */
                var countries = this.allCountries.filter(function (c) { return c.dialCode === countryCode.toString(); });
                // Main country is the country, which has no areaCodes specified in country-code.ts file.
                /** @type {?} */
                var mainCountry = countries.find(function (c) { return c.areaCodes === undefined; });
                // Secondary countries are all countries, which have areaCodes specified in country-code.ts file.
                /** @type {?} */
                var secondaryCountries = countries.filter(function (c) { return c.areaCodes !== undefined; });
                /** @type {?} */
                var matchedCountry = mainCountry ? mainCountry.iso2 : undefined;
                /*
                    Interate over each secondary country and check if nationalNumber starts with any of areaCodes available.
                    If no matches found, fallback to the main country.
                */
                secondaryCountries.forEach(function (country) {
                    country.areaCodes.forEach(function (areaCode) {
                        if (rawNumber.startsWith(areaCode)) {
                            matchedCountry = country.iso2;
                        }
                    });
                });
                return matchedCountry;
            };
        NgxIntlTelInputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-intl-tel-input',
                        template: "<div class=\"intl-tel-input allow-dropdown\">\r\n  <div class=\"flag-container\" dropdown [ngClass]=\"{'disabled': disabled}\">\r\n    <div class=\"selected-flag dropdown-toggle\" dropdownToggle>\r\n      <div class=\"iti-flag\" [ngClass]=\"selectedCountry.flagClass\"></div>\r\n      <div class=\"iti-arrow\"></div>\r\n    </div>\r\n    <ul class=\"country-list dropdown-menu\" *dropdownMenu>\r\n      <li class=\"country\" *ngFor=\"let country of preferredCountriesInDropDown\" (click)=\"onCountrySelect(country, focusable)\">\r\n        <div class=\"flag-box\">\r\n          <div class=\"iti-flag\" [ngClass]=\"country.flagClass\"></div>\r\n        </div>\r\n        <span class=\"country-name\">{{country.name}}</span>\r\n        <span class=\"dial-code\">+{{country.dialCode}}</span>\r\n      </li>\r\n      <li class=\"divider\" *ngIf=\"preferredCountriesInDropDown?.length\"></li>\r\n      <li class=\"country\" *ngFor=\"let country of allCountries\" (click)=\"onCountrySelect(country, focusable)\">\r\n        <div class=\"flag-box\">\r\n          <div class=\"iti-flag\" [ngClass]=\"country.flagClass\"></div>\r\n        </div>\r\n        <span class=\"country-name\">{{country.name}}</span>\r\n        <span class=\"dial-code\">+{{country.dialCode}}</span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <input type=\"tel\" id=\"phone\" autocomplete=\"off\"\r\n        [ngClass]=\"cssClass\"\r\n        (blur)=\"onTouched()\"\r\n        (keypress)=\"onInputKeyPress($event)\"\r\n        [(ngModel)]=\"phoneNumber\"\r\n        (ngModelChange)=\"onPhoneNumberChange()\"\r\n        [disabled]=\"disabled\"\r\n        [placeholder]=\"selectedCountry.placeHolder\" #focusable>\r\n</div>\r\n",
                        providers: [
                            CountryCode,
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                // tslint:disable-next-line:no-forward-ref
                                useExisting: i0.forwardRef(function () { return NgxIntlTelInputComponent; }),
                                multi: true
                            },
                            {
                                provide: forms.NG_VALIDATORS,
                                useValue: ɵ0,
                                multi: true,
                            }
                        ],
                        styles: ["li.country:hover{background-color:rgba(0,0,0,.05)}.selected-flag.dropdown-toggle:after{content:none}.flag-container.disabled{cursor:default!important}.intl-tel-input.allow-dropdown .flag-container.disabled:hover .selected-flag{background:0 0}"]
                    }] }
        ];
        /** @nocollapse */
        NgxIntlTelInputComponent.ctorParameters = function () {
            return [
                { type: CountryCode }
            ];
        };
        NgxIntlTelInputComponent.propDecorators = {
            value: [{ type: i0.Input }],
            preferredCountries: [{ type: i0.Input }],
            enablePlaceholder: [{ type: i0.Input }],
            cssClass: [{ type: i0.Input }],
            onlyCountries: [{ type: i0.Input }],
            enableAutoCountrySelect: [{ type: i0.Input }]
        };
        return NgxIntlTelInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxIntlTelInputModule = /** @class */ (function () {
        function NgxIntlTelInputModule() {
        }
        /**
         * @return {?}
         */
        NgxIntlTelInputModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: NgxIntlTelInputModule,
                    providers: [NgxIntlTelInputService]
                };
            };
        NgxIntlTelInputModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [NgxIntlTelInputComponent],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            ngxBootstrap.BsDropdownModule.forRoot()
                        ],
                        exports: [NgxIntlTelInputComponent]
                    },] }
        ];
        return NgxIntlTelInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxIntlTelInputService = NgxIntlTelInputService;
    exports.NgxIntlTelInputComponent = NgxIntlTelInputComponent;
    exports.NgxIntlTelInputModule = NgxIntlTelInputModule;
    exports.ɵa = CountryCode;
    exports.ɵb = phoneNumberValidator;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-intl-tel-input.umd.js.map