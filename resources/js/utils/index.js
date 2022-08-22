const airportCodes = {
   "Aalborg, Denmark Aalborg": "AAL",
   "Aalesund, Norway Vigra": "AES",
   "Aarhus, Denmark Tirstrup": "AAR",
   "Fraser Valley/Abbotsford, Canada - Abbotsford Airport": "YXX",
   "Aberdeen, Scotland, United Kingdom Dyce": "ABZ",
   "Aberdeen, SD, USA Aberdeen Regional Airport": "ABR",
   "Abha, Saudi Arabia - Abha Airport": "AHB",
   "Abidjan, Cote D'ivoire Port Bouet": "ABJ",
   "Abilene, TX, USA Municipal": "ABI",
   "Abu Dhabi, United Arab Emirates Abu Dhabi International": "AUH",
   "Abu Simbel, Egypt Abu Simbel": "ABS",
   "Abuja, Nigeria - Abuja International Airport": "ABV",
   "Acapulco, Guerrero, Mexico Alvarez International": "ACA",
   "Accra, Ghana Kotoka": "ACC",
   "Adak Island, Alaska, USA, Adak Island Airport": "ADK",
   "Adana, Turkey Adana": "ADA",
   "Addis Ababa, Ethiopia Bole": "ADD",
   "Adelaide, South Australia, Australia Adelaide": "ADL",
   "Aden, Yemen - Aden International Airport": "ADE",
   "Agadir, Morocco Inezgane": "AGA",
   "Guam, Guam Ab Wonpat Intl Airport": "GUM",
   "Agartala, India Singerbhil": "IXA",
   "Agedabia, Libya": "QGG",
   "Agen, France La Garenne": "AGF",
   "Agra, India Kheria": "AGR",
   "Agri, Turkey - Agri Airport": "AJI",
   "Aguadilla, PR, USA": "BQN",
   "Aguascalientes, Aguascalientes, Mexico": "AGU",
   "Tehran (Ahmadabad), Iran - Imam Khomeini International Airport": "IKA",
   "Ahmedabad, India Ahmedabad": "AMD",
   "Ahwaz, Iran - Ahwaz Airport": "AWZ",
   "Aix-En-Provence, France - Aix-En-Provence Airport": "QXB",
   "Ajaccio, Corsica, France Campo Dell Oro": "AJA",
   "Akita, Japan - Akita Airport": "AXT",
   "Akron/Canton, OH, USA AkronCanton Regional Airport": "CAK",
   "Aksu, China - Aksu Airport": "AKU",
   "Preveza, Greece - Preveza-Lefkas Airport": "PVK",
   "Akulivik, Canada - Akulivik Airport": "AKV",
   "Akureyri, Iceland Akureyri": "AEY",
   "Akutan, Alaska, USA - Akutan Airport": "KQA",
   "Al Ain, United Arab Emirates - Al Ain Airport": "AAN",
   "Al Arish, Egypt - Al Arish Airport": "AAC",
   "Al-Baha, Saudi Arabia - Al Baha-Al Aqiq Airport": "ABT",
   "Al Hoceima, Morocco - Al Hoceima Airport": "AHU",
   "Alamogordo, NM, USA": "ALM",
   "Alamosa, CO, USA Bergman Field": "ALS",
   "Albacete, Spain - Albacete Airport": "ABC",
   "Albany, GA, USA Dougherty County": "ABY",
   "Albany, NY, USA Albany County Airport": "ALB",
   "Albenga, Italy - Albenga Airport": "ALL",
   "Albuquerque, NM, USA Albuquerque International Airport": "ABQ",
   "Albury, New South Wales, Australia Albury": "ABX",
   "Alderney, Channel Islands, United Kingdom The Blaye": "ACI",
   "Aleknagik, Alaska, USA - Aleknagik Airport": "WKK",
   "Aleneva, Alaska, USA - Aleneva Airport": "AED",
   "Aleppo, Syria Nejrab": "ALP",
   "Alexandria, Egypt Alexandria": "ALY",
   "Borg El Arab/Alexandria, Egypt Borg El Arab Airport": "HBE",
   "Alexandria, LA, USA Alexandria Intl Airport": "AEX",
   "Alexandria, Ontario, Canada Alexandria / Via Rail Service": "XFS",
   "Alexandroupolis, Greece Alexandroupolis": "AXD",
   "Alghero, Sardinia, Italy Fertilia": "AHO",
   "Algiers, Algeria Houari Boumedienne": "ALG",
   "Alicante, Spain Alicante": "ALC",
   "Alice Springs, Northern Territory, Australia Alice Springs": "ASP",
   "Allahabad, India Bamrauli": "IXD",
   "Allakaket, AK, USA": "AET",
   "Allentown, PA, USA AllentownBethlehemEaston Airport": "ABE",
   "Alliance, NE, USA": "AIA",
   "Almaty, Kazakhstan Almaty": "ALA",
   "Almeria, Spain Almeria": "LEI",
   "Along, India Along": "IXV",
   "Alor Setar, Malaysia Sultan Abdul Halim": "AOR",
   "Alotau, Papua New Guinea Gurney": "GUR",
   "Alpena, MI, USA Alpena Regional Airport": "APN",
   "Alpine, TX, USA Alpine Texas": "ALE",
   "Alta, Norway Elvebakken": "ALF",
   "Altamira, Brazil - Altamira Airport": "ATM",
   "Altai, Govi-Altai, Mongolia - Altai Airport": "LTI",
   "Altay, China - Altay Airport": "AAT",
   "Altenrhein, Switzerland - Altenrhein Airport": "ACH",
   "Altoona / Martinsburg, PA, USA Blair County": "AOO",
   "Amami O Shima, Japan - Amami O Shima Airport": "ASJ",
   "Amarillo, TX, USA Amarillo International Airport": "AMA",
   "Ambler, AK, USA": "ABL",
   "Ambon, Indonesia Pattimura": "AMQ",
   "Amman, Jordan Civil": "ADJ",
   "Amman, Jordan Queen Alia International": "AMM",
   "Amos, Quebec, Canada": "YEY",
   "Amritsar, Punjab, India - Raja Sansi International Airport": "ATQ",
   "Amsterdam, Netherlands Schiphol": "AMS",
   "Anapa Airport - Russia": "AAQ",
   "Anchorage, AK, USA Anchorage International": "ANC",
   "Ancona, Italy Falconara": "AOI",
   "Andizhan, Uzbekistan - Andizhan Airport": "AZN",
   "Andros Town, Bahamas": "ASD",
   "Angouleme, France GelAir": "ANG",
   "Angoon, Alaska, USA - Angoon Airport": "AGN",
   "Anguilla, Anguilla": "AXA",
   "Aniak, AK, USA": "ANI",
   "Anjouan,Comoros": "AJN",
   "Ankara, Turkey Esenboga": "ESB",
   "Annaba, Algeria Les Salines": "AAE",
   "Annecy, France - AnnecyMeythe": "NCY",
   "Anniston, AL, USA - Municipal": "ANB",
   "Anqing, China - Anqing": "AQG",
   "Anshan, Liaoning Province, China - Anshan": "AOG",
   "Antalya, Turkey Antalya": "AYT",
   "Antananarivo, Madagascar Ivato": "TNR",
   "St Johns / Antigua, Antigua And Barbuda Vc Bird International": "ANU",
   "Antofagasta, Chile - Cerro Moreno": "ANF",
   "Antwerp, Belgium Deurne": "ANR",
   "Anvik, AK, USA": "ANV",
   "Aomori, Japan": "AOJ",
   "Apia, Samoa Faleolo": "APW",
   "Appleton, WI, USA Outagamie County Airport": "ATW",
   "Aqaba, Jordan Aqaba": "AQJ",
   "Aracaju, Sergipe, Brazil": "AJU",
   "Araguaina, Brazil - Araguaina Airport": "AUX",
   "Arar, Saudi Arabia - Arar Airport": "RAE",
   "Arauca, Colombia": "AUC",
   "Araxa, Brazil - Araxa Airport": "AAX",
   "Arba Mintch, Ethiopia - Arba Mintch Airport": "AMH",
   "Arcata, CA, USA Arcata/Eureka Airport": "ACV",
   "Arequipa, Peru Rodriguez Ballon": "AQP",
   "Arica, Chile Chacalluta": "ARI",
   "Arkhangelsk, Russia Arkhangelsk": "ARH",
   "Armenia, Colombia - El Eden Airport": "AXM",
   "Armidale, New South Wales, Australia Armidale": "ARM",
   "Arthurs Town, Bahamas": "ATC",
   "Aruba, Aruba Reina Beatrix": "AUA",
   "Arvaikheer, Ovorhkangai, Mongolia - Arvaikheer Airport": "AVK",
   "Arviat, Canada - Arviat Airport": "YEK",
   "Arvidsjaur, Sweden - Arvidsjaur Airport": "AJR",
   "Asahikawa, Japan Asahikawa": "AKJ",
   "Asheville / Hendersonville, NC, USA Asheville Regional Airport": "AVL",
   "Ashgabat, Turkmenistan - Ashgabad Airport": "ASB",
   "Asmara, Eritrea Asmara Intl/Yohannes Iv": "ASM",
   "Asosa, Ethiopia - Asosa Airport": "ASO",
   "Aspen, CO, USA Pitkin County Airport Sardy Field": "ASE",
   "Assiut, Egypt - Assiut Airport": "ATZ",
   "Astana, Kazakhstan - Astana Airport": "TSE",
   "Astrakhan Airport - Russia": "ASF",
   "Oviedo/Asturias, Spain - Oviedo Airport": "OVD",
   "Astypalea Island, Greece - Astypalea Airport": "JTY",
   "Asuncion, Paraguay Silvio Pettirossi": "ASU",
   "Aswan, Egypt Daraw": "ASW",
   "Athens, GA, USA": "AHN",
   "Athens, Greece - Venizelos": "ATH",
   "Atikokan, Ontario, Canada": "YIB",
   "Atlanta, GA, USA Hartsfield International": "ATL",
   "Atlantic City /Atlantic Cty, NJ, USA Atlantic City International": "ACY",
   "Atlantic City International, NJ, USA": "AIY",
   "Attawapiskat, Canada - Attawapiskat Airport": "YAT",
   "Attopeu, Laos - Attopeu Airport": "AOU",
   "Atwater/Merced, California, USA - Castle Airport": "MER",
   "Auckland, New Zealand Auckland International Airport": "AKL",
   "Augsburg, Germany Muehlhausen": "AGB",
   "Augusta, GA, USA Bush Field": "AGS",
   "Augusta, ME, USA Maine State": "AUG",
   "Aupaluk, Canada - Aupaluk Airport": "YPJ",
   "Aurangabad, India Chikkalthana": "IXU",
   "Austin, TX, USA - Austin-Bergstrom International Airport (ABIA)": "AUS",
   "Avalon, Australia - Avalon Airport": "AVV",
   "Avignon, France Caumont": "AVN",
   "Ayers Rock, Northern Territory, Australia Connellan": "AYQ",
   "Bacolod, Philippines Bacolod": "BCD",
   "Bagdogra, India Bagdogra": "IXB",
   "Bagotville, Canada - Bagotville Airport": "YBG",
   "Bahar Dar, Ethiopia - Bahar Dar Airport": "BJR",
   "Bahawalpur Airport - Vahawalpur, Pakistan": "BHV",
   "Bahia Blanca, Buenos Aires, Argentina Commandante": "BHI",
   "Bahrain, Bahrain Bahrain International Bahrain": "BAH",
   "Baia Mare, Romania - Baia Mare Airport": "BAY",
   "Baie Comeau, Quebec, Canada": "YBC",
   "Bakalalan, Malaysia - Bakalalan Airport": "BKM",
   "Bakersfield, CA, USA Meadows Field": "BFL",
   "Baku, Azerbaijan - Baku (old code)": "BAK",
   "Baku, Azerbaijan - Geydar Aliyev Airport": "GYD",
   "Denpasar Bali, Indonesia Ngurah Rai": "DPS",
   "Balikpapan, Indonesia - Palikpapan-Sepinggan Airport": "BPN",
   "Ballina, Australia - Ballina Airport": "BNK",
   "Balmaceda, Chile - Balmaceda-Teniente Vidal Airport": "BBA",
   "Baltimore, MD, USA BaltimoreWashington International": "BWI",
   "Bamaga, Queensland, Australia": "ABM",
   "Bamako, Mali Senou": "BKO",
   "Ban Hat Tai, Laos - Ban Huoeisay Airport (Ban Houei Sai/Ban Houay Xay": "OUI",
   "Ban Me Thuot, Vietnam - Ban Me Thuot Airport": "BMV",
   "Bandar Abbas, Iran - Bandar Abbas Airport": "BND",
   "Brunei/Bandar Seri Begawan, Brunei Darussalam - Brunei International": "BWN",
   "Bandung, Indonesia Husein Sastranegara": "BDO",
   "Banff, Alberta, Canada": "YBA",
   "Bengalooru (Bangalore), India Hindustan": "BLR",
   "Bangda, China - Bangda": "BPX",
   "Bangkok, Thailand Bangkok International Airport": "BKK",
   "Bangor, ME, USA Bangor International Airport": "BGR",
   "Bangui, Central African Republic Bangui": "BGF",
   "Bani Walid, Libya": "QBL",
   "Banja Luka, Bosnia and Herzegovina - Banja Luka Airport": "BNX",
   "Banjarmasin, Indonesia Syamsudin Noor": "BDJ",
   "Banjul, Gambia Yundum International": "BJL",
   "Baotou, China - Baotou": "BAV",
   "Bar Harbor, ME, USA": "BHB",
   "Bridgetown, Barbados Grantley Adams International": "BGI",
   "Barcaldine, Australia - Barcaldine Airport": "BCI",
   "Barcelona, Spain Barcelona": "BCN",
   "Barcelona, Venezuela Gral Jose Antonio Anzoategui": "BLA",
   "Bardufoss, Norway - Bardufoss Airport": "BDU",
   "Bari, Italy": "BRI",
   "Barinas, Venezuela Barinas": "BNS",
   "Bario,Malaysia - Bario Airport": "BBN",
   "Barnaul, Russia Barnaul Airport": "BAX",
   "Barquisimeto, Venezuela Barquisimeto": "BRM",
   "Barra / Hebrides Islands, Scotland, United Kingdom North Bay": "BRR",
   "Barrancabermeja, Colombia Variguies": "EJA",
   "Barranquilla, Colombia E Cortissoz": "BAQ",
   "Barrow, Alaska, USA Barrow": "BRW",
   "Barter Island, Alaska, USA - Barter Island Airport [LRRS]": "BTI",
   "Baruun-Urt, Sukhbaatar, Mongolia - Baruun-Urt Airport": "UUN",
   "Basel, Switzerland - Basel Euro Airport": "BSL",
   "Bastia, Corsica, France Poretta": "BIA",
   "Batam, Indonesia - Hang Nadim Airport": "BTH",
   "Bathurst, New Brunswick, Canada - Bathurst Airport": "ZBF",
   "Bathurst, New South Wales, Australia Raglan": "BHS",
   "Bathurst Island, Northern Territory, Australia": "BRT",
   "Batman, Turkey Nearest Air Service Through Diyarbakir": "BAL",
   "Baton Rouge, LA, USA": "BTR",
   "Bauru, Brazil- Bauru Airport": "BAU",
   "Saginaw / Bay City / Midland, MI, USA - TriCity Airport": "MBS",
   "Bayankhongor, Bayankhongor, Mongolia - Bayankhongor Airport": "BYN",
   "Bayreuth, Germany Bindlacher Berg": "BYU",
   "Beaumont, TX, USA Jefferson County": "BPT",
   "Beckley, WV, USA": "BKW",
   "Bedford, MA, USA Bedford": "BED",
   "Bedwell Harbor, canada - Bedwell Harbor Airport": "YBW",
   "Tortola/Beef Island, Virgin Islands (British) Beef Island": "EIS",
   "Beica, Ethiopia Beica": "BEI",
   "Beihai, China - Beihai": "BHY",
   "Beijing, China - Beijing International": "NAY",
   "Beijing, China Peking Capital Airport": "PEK",
   "Beida, Libya": "LAQ",
   "Beira, Mozambique Beira": "BEW",
   "Beirut, Lebanon International": "BEY",
   "Belaga, Malaysia Airport": "BLG",
   "Belem, Para, Brazil Val De Cans": "BEL",
   "Belfast, Northern Ireland, United Kingdom Belfast Harbor": "BHD",
   "Belfast, Northern Ireland, United Kingdom Belfast International": "BFS",
   "Belgaum, India Sambre": "IXG",
   "Belgorod, Russia - Belgorod Airport": "EGO",
   "Belgrade, Yugoslavia BelgradeBeograd": "BEG",
   "Belize City, Belize Belize International": "BZE",
   "Belize City, Belize Belize Municipal": "TZA",
   "Belleville, Ontario, Canada Belleville / Via Rail Service": "XVV",
   "Bellingham, WA, USA Bellingham International": "BLI",
   "Belo Horizonte /Belo Horizon, Minas Gerais, Brazil Aeropuerto Internacional Tancredo Neves": "CNF",
   "Belo Horizonte /Belo Horizon, Minas Gerais, Brazil Confins/Pampulha": "PLU",
   "Bemidji, MN, USA Bemidji Municipal Airport": "BJI",
   "Benbecula, United Kingdom - Benbecula Airport": "BEB",
   "Redmond/Bend, OR, USA - Roberts Field": "RDM",
   "Benghazi, Libya - Benina International Airport": "BEN",
   "Benton Harbor, MI, USA Ross Field": "BEH",
   "Bergen, Norway Flesland": "BGO",
   "Bergerac, France - Aeroport de Bergerac Perigord Dordogne": "EGC",
   "Berlevag, Norway - Berlevag Airport": "BVG",
   "Berlin, Germany Schoenefeld": "BER",
   "Berlin, Germany Tegel": "TXL",
   "Berlin, Germany Tempelhof": "THF",
   "Bermuda/Hamilton, Bermuda Kindley Airfield/Civil Air Terminal": "BDA",
   "Berne, Switzerland Belp": "BRN",
   "Berne, Switzerland BerneRr Station": "ZDJ",
   "Bethel, AK, USA Bethel": "BET",
   "Beziers, France BeziersVias": "BZR",
   "Bhairawa, Nepal Bhairawa": "BWA",
   "Bhavnagar, India - Bhavnagar Airport": "BHU",
   "Bhopal, India - Bhopal Airport": "BHO",
   "Bhubaneswar, India Bhubaneswar": "BBI",
   "Biak, Indonesia Mokmer": "BIK",
   "Biarritz, France Parme": "BIQ",
   "Big Creek, Belize Big Creek": "BGK",
   "Bilbao, Spain Sondica": "BIO",
   "Billings, MT, USA Billings Logan Intnl Airport": "BIL",
   "Billund, Denmark Billund": "BLL",
   "Bimini, Bahamas Bimini Island International": "BIM",
   "Bimini, Bahamas North Seaplane Base": "NSB",
   "Binghamton/Endicott/Johnson City, NY, USA Edwin Alink Field": "BGM",
   "Bintulu, Sarawak, Malaysia Bintulu": "BTU",
   "Birdsville, Queensland, Australia Birdsville": "BVI",
   "Birmingham, AL, USA Seibels/Bryan Airport": "BHM",
   "Birmingham, England, United Kingdom International": "BHX",
   "Bisha, Saudi Arabia - Bisha Airport": "BHH",
   "Bishkek, Kyrgyzstan Bishkek Airport": "FRU",
   "Biskra, Algeria Biskra": "BSK",
   "Bismarck, ND, USA Bismarck Mannan Municipal": "BIS",
   "Bissau, GuineaBissau Osvaldo Vieira": "OXB",
   "Blackall, Australia - Blackall Airport": "BKQ",
   "Blackpool, England, United Kingdom Blackpool": "BLK",
   "Blackwater, Australia - Blackwater Airport": "BLT",
   "Blanc Sablon, Quebec, Canada Blanc Sablon Airport": "YBX",
   "Blantyre, Malawi Chileka": "BLZ",
   "Blenheim, New Zealand - Woodbourne Airport": "BHE",
   "Bloemfontein, South Africa Jbm Hertzog": "BFN",
   "Bloomington, IL, USA Normal": "BMI",
   "Bloomington, IN, USA Monroe County Airport": "BMG",
   "Bluefield, WV, USA - Mercer Country Airport": "BLF",
   "Blytheville, Arkansas, USA - Arkansas International Airport": "BYH",
   "Boa Vista, Roraima, Brazil": "BVB",
   "Bodo, Norway Bodo": "BOO",
   "Bodrum, Turkey Imsik Airport": "BXN",
   "Seattle Kings County International/Boeing Field, WA, USA": "BFI",
   "Bogota, Colombia Eldorado": "BOG",
   "Boise, ID, USA Boise Municipal Arpt (Gowen Field)": "BOI",
   "Bologna, Italy Guglielmo Marconi": "BLQ",
   "Bolzano, Italy - Bolzano Airport": "BZO",
   "Mumbai (Bombay), India - Mumbai": "BOM",
   "Bonaire, Netherlands Antilles Flamingo Field": "BON",
   "Bonaventure, Quebec, Canada": "YVB",
   "Bonn, Germany Train Main Railroad Station": "BNJ",
   "Bora Bora, French Polynesia - Motu Mute Airport": "BOB",
   "Bordeaux, France Merignac": "BOD",
   "Borlange,Sweden - Dala Airport": "BLE",
   "Ronne/Bornholm, Denmark - Arnager Airport": "RNN",
   "Boston, MA, USA Logan International Airport": "BOS",
   "Boulder, CO, USA": "WBU",
   "Bourgas, Bulgaria - Bourgas Airport": "BOJ",
   "Bozeman, MT, USA Gallatin Field": "BZN",
   "Bradford, PA, USA Bradford Regional": "BFD",
   "Brainerd, MN, USA": "BRD",
   "Brampton, Ontario, Canada Brampton / Via Rail Service": "XPN",
   "Brampton Island, Australia - Brampton Island Airport": "BMP",
   "Brandon, Manitoba, Canada": "YBR",
   "Brantford, Ontario, Canada Brantford / Via Rail Service": "XFV",
   "Brasilia, Distrito Federal, Brazil International": "BSB",
   "Bratislava, Slovakia Ivanka": "BTS",
   "Brazzaville, COngo - Maya Maya Airport": "BZV",
   "Breckenridge, CO, USA": "QKB",
   "Bremen, Germany Bremen": "BRE",
   "Bremerton, WA, USA Municipal": "PWT",
   "Brescia, Italy - Brescia Airport": "VBS",
   "Brest, France Guipavas": "BES",
   "Bridgeport, CT, USA Sikorsky Memorial": "BDR",
   "Brindisi, Italy - Brindisi Airport": "BDS",
   "Brisbane, Queensland, Australia Brisbane International Airport": "BNE",
   "Bristol, England, United Kingdom Bristol": "BRS",
   "Bristol/Johnson City/Kingsport, TN, USA Municipal TriCity Airport": "TRI",
   "BriveLaGaillarde, France Laroche": "BVE",
   "Brno, Czech Republic Turany": "BRQ",
   "Brockville, Ontario, Canada": "XBR",
   "Broken Hill, New South Wales, Australia Broken Hill": "BHQ",
   "Bronnoysund, Norway Bronnoy": "BNN",
   "Brookings, SD, USA Brookings Municipal Airport": "BKX",
   "Broome, Australia - Broome Airport": "BME",
   "Broughton Island, Canada - Broughton Island Airport": "YVM",
   "Brownsville, TX, USA South Padre Island Intl": "BRO",
   "Brownwood, Texas, USA - Brownwood Airport": "BWD",
   "Ostend, Belgium - Ostend/Bruges International Airport": "OST",
   "Brunswick, GA, USA Glynco Jetport": "BQK",
   "Brussels, Belgium National": "BRU",
   "Bucaramanga, Colombia Palo Negro": "BGA",
   "Bucharest, Romania Baneasa": "BBU",
   "Bucharest, Romania Otopeni": "OTP",
   "Budapest, Hungary Ferihegy": "BUD",
   "Buenos Aires, Buenos Aires, Argentina - Ezeiza Ministro Pistarini International Airport": "EZE",
   "Buenos Aires, Buenos Aires, Argentina - Jorge Newberry": "AEP",
   "Buffalo, NY, USA - Buffalo Niagara International Airport (formerly Greater Buffalo Intl Airport)": "BUF",
   "Bujumbura, Burundi - Bujumbura Airport": "BJM",
   "Bukhara, Uzbekistan": "BHK",
   "Bulawayo, Zimbabwe Bulawayo": "BUQ",
   "Bulgan, Bulgan, Mongolia - Bulgan Airport": "UGA",
   "Bullhead City, AZ, USA Bullhead": "IFP",
   "Bundaberg, Australia - Bundaberg Airport": "BDB",
   "Bunia, Democratic Republic of the Congo (Zaire) - Bunia Airport": "BUX",
   "Burbank, CA, USA Burbank Glendale Pasadena Airport": "BUR",
   "Burlington, IA, USA Burlington Municipal Airport": "BRL",
   "Burlington, VT, USA Burlington International Airport": "BTV",
   "Burnie, Australia - Burnie Airport": "BWT",
   "Burns Lake, British Columbia, Canada": "YPZ",
   "Bushehr, Iran Bushehr": "BUZ",
   "Butte, MT, USA": "BTM",
   "Buttonville, Canada - Buttonville Municipal Airport": "YKZ",
   "Butuan, Philippines Butuan": "BXU",
   "Bydgoszcz, Poland": "BZG",
   "Caen, France Carpiquet": "CFR",
   "Cagayan De Oro, Philippines - Lumbia Airport": "CGY",
   "Cagliari, Sardinia, Italy Elmas": "CAG",
   "Providenciales, Turks And Caicos Islands": "PLS",
   "Cairns, Queensland, Australia - Cairns International Airport": "CNS",
   "Cairo, Egypt International": "CAI",
   "Cajamarca, Peru - Cjamarca Airport": "CJA",
   "Calama, Chile - El Loa Airport": "CJC",
   "Kolkata (Calcutta), India - Calcutta International Airport": "CCU",
   "Caldwell, New Jersey, USA - Caldwell Airport": "CDW",
   "Calgary, Alberta, Canada Calgary Intl Airport": "YYC",
   "Cali, Colombia Alfonso Bonilla Aragon": "CLO",
   "Calicut, India": "CCJ",
   "Calvi, Corsica, France Ste Catherine": "CLY",
   "Cambellton, New Brunswick, Canada Campbellton": "XAZ",
   "Cambridge, England, United Kingdom Cambridge": "CBG",
   "Cambridge Bay, Canada - Cambridge Bay Airport": "YCB",
   "Camden, AR, USA": "CDH",
   "Campbell River /Campbell Rvr, British Columbia, Canada Metropolitan Area": "YBL",
   "Campbell River Harbor, Canada - Campbell River Harbor": "YHH",
   "Campbeltown, United Kindgom - Campbeltown Airport": "CAL",
   "Campeche, Mexico - Campeche Airport": "CPE",
   "Campina Grande, Brazil - Campita Grande Airport": "CPV",
   "Campinas, Sao Paulo, Brazil Campinas International": "CPQ",
   "Campo Grande, Mato Grosso Do Sul, Brazil": "CGR",
   "Canaima, Venezuela": "CAJ",
   "Gran Canaria, Canary Islands, Spain Aeropuerto De Gran Canaria": "LPA",
   "Canberra, Australian Capital Territory, Australia Canberra": "CBR",
   "Cancun, Mexico": "CUN",
   "Cannes, France Mandelieu": "JCA",
   "Cape Dorset, Canada - Cape Dorset Airport": "YTE",
   "Canouan Island, St Vincent and the Grenadines - Canouan Island Airport": "CIW",
   "Moab, UT, USA": "CNY",
   "Cape Girardeau, MO, USA Municipal Airport": "CGI",
   "Cape Newenham, Alaska, USA - Cape Newenham Airport": "EHM",
   "Cape Town, South Africa D F Malan": "CPT",
   "Capreol, Ontario, Canada Capreol / Via Rail Service": "XAW",
   "Capri,Italy - Capri Airport": "PRJ",
   "Caracas, Venezuela Simon Bolivar International": "CCS",
   "Carajas, Para, Brazil International / Brasilia Brazil": "CKS",
   "Carbondale, IL, USA Southern Illinois Airport": "MDH",
   "Carcassonne, France Salvaza Airport": "CCF",
   "Cardiff, Wales, United Kingdom CardiffWales": "CWL",
   "Carlsbad, CA, USA Carlsbad/Palomar Airport": "CLD",
   "Carlsbad, NM, USA": "CNM",
   "Carriacou Island, Grenada": "CRU",
   "Cartagena, Colombia Rafael Nunez": "CTG",
   "Carupano, Venezuela Carupano": "CUP",
   "La Romana, Dominican Republic - La Romana-Casa De Campo Airport": "LRM",
   "Casablanca, Morocco Anfa": "CAS",
   "Casablanca, Morocco Mohamed V": "CMN",
   "Cascavel, Brazil, Cascavel Airport": "CAC",
   "Casper, WY, USA Natrona County Intl Airport": "CPR",
   "Casselman, Ontario, Canada Casselman / Via Rail Service": "XZB",
   "Castlegar, British Columbia, Canada": "YCG",
   "Catania, Sicily, Italy Fontanarossa": "CTA",
   "Santo Domingo, Dominican Republic Las Americas": "SDQ",
   "Caxias Do Sul, Brazil - Caxias Do Sul Airport": "CXJ",
   "Cayenne, French Guiana Rochambeau": "CAY",
   "Cayman Brac Island, Cayman Islands": "CYB",
   "Grand Cayman Island, Cayman Islands Owen Roberts Intl Airport": "GCM",
   "Cebu, Philippines International": "CEB",
   "Cedar City, UT, USA": "CDC",
   "Cedar Rapids, IA, USA Municipal": "CID",
   "Chadron, NE, USA - Chadron Airport": "CDR",
   "Ceduna, Australia - Ceduna Airport": "CED",
   "Sanford/Orlando, FL, USA - Central Florida Regional Airport": "SFB",
   "Chambery, France Chambery AixLesBains": "CMF",
   "Chambord, Quebec, Canada Chambord / Via Rail Service": "XCI",
   "Champaign, IL, USA Univ Of IllinoisWillard Airport": "CMI",
   "Chandigarh, India Chandigarh": "IXC",
   "Chandler, Quebec, Canada Chandler / Via Rail Service": "XDL",
   "Changchun, China": "CGQ",
   "Changde, China - Changde": "CGD",
   "Changsha, China": "CSX",
   "Changzhi, China": "CIH",
   "Changzhu, China": "CZX",
   "Chania, Crete Island, Greece Souda": "CHQ",
   "Chapada Diamantina, Brazil - Chapada Diamantina Airport": "LEC",
   "Chapeco, Brazil - Chapeco Airport": "XAP",
   "San Martin De Los Andes, Neuquen, Argentina": "CPC",
   "Chapleau, Ontario, Canada": "YLD",
   "Charleston, SC, USA Charleston International Airport": "CHS",
   "Charleston, WV, USA Yeager Airport": "CRW",
   "Charleville, Queensland, Australia Charleville": "CTL",
   "Charlotte, NC, USA Charlotte/Douglas Intl Airport": "CLT",
   "St Thomas Island, VI, USA Cyril E King Arpt": "STT",
   "Charlottesville, VA, USA Charlottesville/Albemarle": "CHO",
   "Charlottetown, Prince Edward Island/, Canada Charlottetown": "YYG",
   "Chatham, Ontario, Canada": "XCM",
   "Chattanooga, TN, USA Cha Lovell Field": "CHA",
   "Chefornak, Alaska, USA - Chefornak Airport": "CYF",
   "Cheju, South Korea Cheju": "CJU",
   "Chelyabinsk, Russia - Chelyabinsk Airport": "CEK",
   "Chemainus, British Columbia, Canada Chemainus / Via Rail Service": "XHS",
   "Chengdu, China": "CTU",
   "Madras (Chennai), India- Chenai-Meenambarkkam Airport": "MAA",
   "Cheong Ju City, Republic of Korea - Cheong Ju City Airport": "CJJ",
   "Cherbourg, France Maupertus": "CER",
   "Chetumal, Mexico - Chetumal Airport": "CTM",
   "Chevak, ALaska - Chevak Airport": "VAK",
   "Chevery, Canada - Chevery Airport": "YHR",
   "Cheyenne, WY, USA Cheyenne Municipal Airport": "CYS",
   "Chiang Mai, Thailand International": "CNX",
   "Chiang Rai, Thailand Chiang Rai": "CEI",
   "Chiayi, Taiwan - Chiayi Airport": "CYI",
   "Chibougamau, Quebec, Canada Chibougamau": "YMT",
   "Chicago, IL, USA - Merrill C. Meigs Field": "CGX",
   "Chicago, IL, USA - Chicago FSS": "CHI",
   "Chicago, IL, USA - Dupage County": "DPA",
   "Gary, IN, USA - Gary Regional": "GYY",
   "Chicago, IL, USA - Midway": "MDW",
   "Chicago, IL, USA - Chicago NAS": "NOH",
   "Chicago, IL, USA - O'hare International Airport": "ORD",
   "Chicago, IL, USA Pal-Waukee Airport": "PWK",
   "Rockford, IL, USA Greater Rockford": "RFD",
   "Chiclayo, Peru Cornel Ruiz": "CIX",
   "Chico, CA, USA Chico Municipal Air Terminal": "CIC",
   "Chifeng, China": "KIF",
   "Chignik, AK, USA Fisheries": "KCG",
   "Chignik, AK, USA Lagoon": "KCL",
   "Chignik Lake, ALaska, USA - Chignik Lake Airport": "KCQ",
   "Chihuahua, Chihuahua, Mexico Genvillalobos": "CUU",
   "Chillan, Chile - Chillan Airport": "YAI",
   "Chinju, Republic of Korea - Chinju Airport": "HIN",
   "Chios, Greece - Chios Airport": "JKH",
   "Chisasibi, Canada - Chisasibi Airport": "YKU",
   "Kishinev, Moldova Kishinev": "KIV",
   "Chitral, Pakistan - Chitral Airport": "CJL",
   "Chittagong, Bangladesh Patenga": "CGP",
   "Choibalsan, Dornod, Mongolia - Choibalsan Airport": "COQ",
   "Chongqing, China": "CKG",
   "Christchurch, New Zealand International": "CHC",
   "St Croix Island, VI, USA": "STX",
   "Christmas Island, Australia - Cassidy Airport": "CXI",
   "Churchill, Manitoba, Canada Churchill Airport": "YYQ",
   "Rome, Italy Ciampino": "CIA",
   "Cincinnati, OH, USA Greater Cincinnati Intl Airport": "CVG",
   "Cincinnati, Ohio, USA - Lunken Field Airport": "LUK",
   "Ciudad Bolivar, Venezuela": "CBL",
   "Ciudad Del Carmen, Campeche, Mexico": "CME",
   "Ciudad Juarez, Chihuahua, Mexico International Abraham Gonzalez": "CJS",
   "Ciudad Obregon, Sonora, Mexico": "CEN",
   "Ciudad Victoria, Mexico - Ciudad Victoria Airport": "CVM",
   "Clarksburg, WV, USA ClarksburgBenedum Airport": "CKB",
   "Clermont-Ferrand, France - Aulnat": "CFE",
   "Cleveland, OH, USA Hopkins International Airport": "CLE",
   "Cleveland Lakefront, OH, USA": "BKL",
   "Cloncurry, Australia - Cloncurry Airport": "CNJ",
   "Clovis, NM, USA": "CVN",
   "Cluj, Romania Cluj": "CLJ",
   "Clyde River, Canada - Clyde River Airport": "YCY",
   "Cobourg, Ontario, Canada Cobourg / Via Rail Service": "XGJ",
   "Cochabamba, Bolivia - Jorge Wilstermann International Airport (formerly San Jose De La Banda)": "CBB",
   "Cochin, India Naval Air Station": "COK",
   "Yellowstone, Cody, Wyoming, USA - Yellowstone Regional Airport": "COD",
   "Coffee Point, Alaska, USA - Coffee Point Airport": "CFA",
   "Coffs Harbour, Australia - Coffs Harbour Airport": "CFS",
   "Coimbatore, India Peelamedu": "CJB",
   "Cold Bay, Alaska, USA - Cold Bay Airport": "CDB",
   "Colima, Colima, Mexico": "CLQ",
   "College Station, TX, USA": "CLL",
   "Cologne, Germany Train Main Railroad Station": "QKL",
   "Cologne/Bonn, Germany Koeln/Bonn": "CGN",
   "Colombo, Sri Lanka Katunayake International": "CMB",
   "Colonia, Uruguay": "CYR",
   "Colorado Springs, CO, USA Colorado Springs Municipal": "COS",
   "Columbia, MO, USA Columbia Regional": "COU",
   "Columbia, SC, USA Columbia Sc Airport Metropolitan": "CAE",
   "Columbus, GA, USA Columbus Metropolitan / Fort Benning": "CSG",
   "Columbus, MS, USA Golden": "GTR",
   "Columbus, OH, USA Port Columbus Intl Airport": "CMH",
   "Comitan, Mexico - Comitan Airport": "CJT",
   "Comodoro Rivadavia, Chubut, Argentina Comodoro Rivadavia": "CRD",
   "Comox, British Columbia, Canada Comox Civil Air Terminal": "YQQ",
   "Conakry, Guinea Conakry": "CKY",
   "Concepcion, Chile Carriel Sur": "CCP",
   "Connaught, Ireland Rep Of Ireland": "NOC",
   "Constanta, Romania Kogalniceanu": "CND",
   "Constantine, Algeria - Ain El Bey Airport": "CZL",
   "Coober Pedy, Australia - Coober Pedy Airport": "CPD",
   "Cooma, New South Wales, Australia": "OOM",
   "Copenhagen, Denmark Copenhagen": "CPH",
   "Copiapo, Chile - Chamonate Airport": "CPO",
   "Coppermine, Northwest Territories, Canada": "YCO",
   "Cordoba, Cordoba, Argentina - Pajas Blancas": "COR",
   "Cordova, AK, USA": "CDV",
   "Kerkyra, Greece Kerkyra": "CFU",
   "Cork, Ireland Cork": "ORK",
   "Cornwall, Ontario, Canada Regional": "YCC",
   "Coro, Venezuela - Coro Airport": "CZE",
   "Corpus Christi, TX, USA Corpus Christi International Airport": "CRP",
   "Corrientes, Argentina - Corrientes Airport": "CNQ",
   "Cortez, CO, USA Montezuma County": "CEZ",
   "Corumba, Mato Grosso Do Sul, Brazil Corumba": "CMG",
   "Olbia, Italy - Costa Smeralda": "OLB",
   "Cotabato, Philippines - Cotabato Airport": "CBO",
   "Coteau, Quebec, Canada Coteau / Via Rail Service": "XGK",
   "Cotonou, Benin Cotonou": "COO",
   "Courtenay, British Columbia, Canada": "YCA",
   "Cowra, New South Wales, Australia Cowra": "CWT",
   "Coyhaique, Chile Teniente Vidal": "GXQ",
   "Cozumel, Quintana Roo, Mexico Aeropuerto Intl De Cozumel": "CZM",
   "Craig, AK, USA": "CGA",
   "Cranbrook, British Columbia, Canada - Cranbrook-Kimberley Airport": "YXC",
   "Crescent City, CA, USA Crescent City Municipal Airport": "CEC",
   "Crooked Island, Bahamas": "CRI",
   "Crotone, Italy - Crotone Airport": "CRV",
   "Cruzeiro Do Sul, Brazil - Cruzeiro Do Sul-Campo International Airport": "CZS",
   "Cucuta, Colombia Camilo Daza": "CUC",
   "Cuenca, Ecuador Mariscal La Mar": "CUE",
   "Cuernavaca, Mexico - Cuernavaca Airport": "CVJ",
   "Cuiaba, Mato Grosso, Brazil - Cuiaba - Marechal Rondon Airport": "CGB",
   "Cuidad Del Este, Paraguay - Cuidad Del Este Airport": "AGT",
   "Culebra, Puerto Rico - Culebra Airport": "CPX",
   "Culiacan, Sinaloa, Mexico": "CUL",
   "Cumana, Venezuela": "CUM",
   "Cumberland, MD, USA Municipal": "CBE",
   "Curitiba, Parana, Brazil Afonso Pena": "CWB",
   "Cuzco, Peru Tte Velazco Astete": "CUZ",
   "Da Nang, Vietnam Da Nang": "DAD",
   "Dakar, Senegal Yoff": "DKR",
   "Dakhla, Morocco - Dakla Airport": "VIL",
   "Dalaman, Turkey Dalaman": "DLM",
   "Dalanzadgad, Omnogovi, Mongolia - Dalanzadgad Airport": "DLZ",
   "Dalat, Vietnam - Dalat Airport": "DLI",
   "Dali City, China - Dali City": "DLU",
   "Dalian, China": "DLC",
   "Dallas, TX, USA Love Field": "DAL",
   "Dallas/Ft Worth, TX, USA Dallas Ft Worth International": "DFW",
   "Damascus, Syria Damascus Intl": "DAM",
   "Damman, Saudi Arabia - King Fahad Airport Airport": "DMM",
   "Dandong, China - Dandong": "DDG",
   "Dangriga, Belize Dangriga": "DGA",
   "Danville, IL, USA Vermilion County Airport": "DNV",
   "Danville, VA, USA": "DAN",
   "Dar Es Salaam, Tanzania International": "DAR",
   "Darwin, Northern Territory, Australia": "DRW",
   "Dauphin, Manitoba, Canada": "YDN",
   "Davao, Philippines Mati": "DVO",
   "Davis Inlet, Canada - Davis Inlet Airport": "YDI",
   "Dawadmi, Saudi Arabia - Dawadmi Airport": "DWD",
   "Dawson Creek, British Columbia, Canada": "YDQ",
   "Dayong, China - Dayong": "DYG",
   "Dayton, OH, USA James M Cox Dayton International": "DAY",
   "Daytona Beach, FL, USA Daytona Beach International Airport": "DAB",
   "Deadmans Cay / Long Island, Bahamas Deadmans Cay": "LGI",
   "Deauville, France Saint Gatien": "DOL",
   "Debre Marcos, Ethiopia - Debre Marcos Airport": "DBM",
   "Debrechen, Hungary - Debrechen Airport": "DEB",
   "Decatur, IL, USA Decatur Municiple Airport": "DEC",
   "Deer Lake, Newfoundland, Canada Deer Lake": "YDF",
   "Deer Lake, Ontario, Canada": "YVZ",
   "Del Rio, TX, USA": "DRT",
   "Delhi, India - Indira Gandhi International Airport": "DEL",
   "Dembidollo, Ethiopia Dembidollo": "DEM",
   "Denham, Western Australia, Australia": "DNM",
   "Denizli, Turkey - Denizli Airport": "DNZ",
   "Denver, CO, USA Denver International": "DEN",
   "Dera Ghazi Khan, Pakistan - Dera Ghazi Khan Airport": "DEA",
   "Dera Ismail Khan, Pakistan - Dera Ismail Khan Airport": "DSK",
   "Derna, Libya": "DNF",
   "Des Moines, IA, USA": "DSM",
   "Desolation Sound, Canada - Desolation Sound Airport": "YDS",
   "Dessie, Ethiopia - Dessie Airport": "DSE",
   "Destin, FL, USA": "DSI",
   "Detroit, MI, USA Detroit-Wayne County Metropolitan Airport": "DTW",
   "Detroit City, MI, USA": "DET",
   "Ypsilanti/Detroit, MI, USA - Willow Run Airport, Ypsilanti": "YIP",
   "Devils Lake, North Dakota, USA - Devils Lake Airport": "DVL",
   "Devonport, Tasmania, Australia Devonport": "DPO",
   "Dhahran, Saudi Arabia Dhahran Intl": "DHA",
   "Dhaka, Bangladesh Zia International Airport": "DAC",
   "Kangra, Himachal Pradesh, India - Kangra Gaggal Dharamsala Airport": "DHM",
   "Dibrugarh, India Chabua": "DIB",
   "Dijon, France Longvic": "DIJ",
   "Dickinson, North Dakota, USA - Dickinson Airport": "DIK",
   "Dien Bien Phu, Vietnam - Dien Bien Phy Airport": "DIN",
   "Dili, East Timor - Timor-Leste": "DIL",
   "Dillingham, Alaska, USA - Dillingham Airport": "DLG",
   "Dipolog, Philippines Dipolog": "DPL",
   "Diqing, China - Diqing": "DIG",
   "Dire Dawa, Ethiopia - Dire Dawa Airport": "DIR",
   "Diu, India - Diu Airort": "DIU",
   "Diyarbakir, Turkey Diyarbakia": "DIY",
   "Djerba, Tunisia - Melita Airport": "DJE",
   "Djibouti, Djibouti Ambouli": "JIB",
   "Dnepropetrovsk, Ukraine - Dnepropetrovsk Airport": "DNK",
   "Dodge City, KS, USA Dodge City Municipal": "DDC",
   "Doha, Qatar Doha": "DOH",
   "Dominica, Dominica Cane Field": "DCF",
   "Dominica, Dominica Melville HalDom": "DOM",
   "Doncaster, Sheffield, UK - Robin Hood Airport": "DSA",
   "Donetsk, Ukraine Donetsk": "DOK",
   "Dortmund, Germany Wickede": "DTM",
   "Dothan, AL, USA Municipal": "DHN",
   "Douala, Cameroon Douala": "DLA",
   "Dresden, Germany Dresden": "DRS",
   "Drummondville, Quebec, Canada": "XDM",
   "Dryden, Ontario, Canada Dryden Airport": "YHD",
   "Du Bois, PA, USA Jefferson County": "DUJ",
   "Dubai, United Arab Emirates Dubai International Airport": "DXB",
   "Dubbo, New South Wales, Australia Dubbo": "DBO",
   "Dublin, Ireland Dublin": "DUB",
   "Dubrovnik, Croatia Hrvatska": "DBV",
   "Dubuque, IA, USA Dubuque Municipal Airport": "DBQ",
   "Duesseldorf, Germany Main Train Station": "QDU",
   "Duluth, MN, USA Duluth International Airport": "DLH",
   "Dumaguete, Philippines - Dumaguete Airport": "DGT",
   "Duncan / Quam, British Columbia, Canada Quamichan Lake": "DUQ",
   "Dundee, Scotland, United Kingdom Dundee": "DND",
   "Dunedin, New Zealand Momona": "DUD",
   "Dunhuang, China - Dunhuang": "DNH",
   "Durango, CO, USA Durango La Plata County Airport": "DRO",
   "Durango, Durango, Mexico Gen Guadalupe Victoria": "DGO",
   "Durban / La Mercy, South Africa - King Shaka International Airport (La Mercy Airport, Replaced Louis Botha airport)": "DUR",
   "Dusseldorf, Germany Dusseldorf": "DUS",
   "Dutch Harbor, AK, USA Dutch Harbor": "DUT",
   "East London, South Africa Ben Shoeman": "ELS",
   "East Midlands, England, United Kingdom East Midlands": "EMA",
   "Easter Island, Chile Mataveri": "IPC",
   "Eastsound, WA, USA Eastsound/Orcas Island Airport": "ESD",
   "Eau Claire, WI, USA Eau Claire Municipal": "EAU",
   "Echuca, Australia": "ECH",
   "Edinburgh, Scotland, United Kingdom Turnhouse": "EDI",
   "Edmonton, Alberta, Canada Edmonton International": "YEG",
   "Edmonton, Alberta, Canada Edmonton Municipal": "YXD",
   "Edward River, Queensland, Australia Edward River": "EDR",
   "Eindhoven, Netherlands Welschap": "EIN",
   "Ekaterinburg, Russia - Sheremtyevo Airport": "SVX",
   "El Beida / La Braq,Libya": "BCQ",
   "El Calafate, Argentina - El Calafate Airport": "FTE",
   "Samana/El Catey, Dominican Republic - Samana El Catey International Airport": "AZS",
   "El Dorado, AR, USA": "ELD",
   "El Paso, TX, USA El Paso International Airport": "ELP",
   "El Salvador, Chile": "ESR",
   "Elat, Israel Elat": "ETH",
   "Elba Island, Italy Marina Di Campo": "EBA",
   "Elgarhbolli, Libya": "QEJ",
   "Elko, NV, USA J C Harris Field": "EKO",
   "Elliot Lake, Ontario, Canada": "YEL",
   "Elmarj City, Libya": "QEC",
   "Elmira / Corning, NY, USA Elmira Corning Regional Arpt": "ELM",
   "Ely, NV, USA Yelland Field": "ELY",
   "Emerald, Queensland, Australia Emerald": "EMD",
   "Enid, OK, USA Woodring Municipal": "WDG",
   "Enschede, Netherlands Twente": "ENS",
   "Entebbe/Kampala, Uganda Entebbe": "EBB",
   "Erfurt, Germany Erfurt": "ERF",
   "Erie, PA, USA Erie International": "ERI",
   "Erzurum, Turkey Erzurum": "ERZ",
   "Esbjerg, Denmark Esbjerg": "EBJ",
   "Escanaba, MI, USA Delta County Airport": "ESC",
   "Esquel, Argentina - Esquel Airport": "EQS",
   "Esperance, Western Australia, Australia Esperance": "EPR",
   "Esquimalt, British Columbia, Canada": "YPF",
   "Eugene, OR, USA Eugene Airport": "EUG",
   "Evansville, IN, USA Evansville Regional Airport": "EVV",
   "Evenes, Norway Evenes": "EVE",
   "Exeter, England, United Kingdom Exeter": "EXT",
   "Fairbanks, AK, USA Fairbanks International Airport": "FAI",
   "Fairmont, MN, USA Fairmont Municipal": "FRM",
   "Faisalabad, Pakistan Lyallpur": "LYP",
   "Fargo, ND, USA Hector Airport": "FAR",
   "Farmingdale, Long Island, NY, USA - Republic Airport": "FRG",
   "Farmington, NM, USA Four Corners Regional Airport": "FMN",
   "Faro, Portugal Faro": "FAO",
   "Faroe Islands, Faroe Islands Faeroe Islands": "FAE",
   "Fayetteville, AR, USA Municipal": "FYV",
   "Fayetteville, AR, USA - Northwest Arkansas Regional": "XNA",
   "Fayetteville, NC, USA Fayetteville Municipal": "FAY",
   "Fergus Falls, MN, USA Fergus Falls Municipal Airport": "FFM",
   "Fernando De Noronha, Brazil - Fernando De Noronha Airport": "FEN",
   "Fez, Morocco Fez": "FEZ",
   "Flagstaff, AZ, USA Flagstaff": "FLG",
   "Flin Flon, Canada - Flin Flon Airport": "YFO",
   "Flint, MI, USA Bishop Int'l Airport": "FNT",
   "Florence, Italy": "FLR",
   "Florence, SC, USA Gilbert Field": "FLO",
   "Flores, Guatemala Flores": "FRS",
   "Florianopolis, Santa Catarina, Brazil Florianopolis Hercilio Luz Airport": "FLN",
   "Floro, Norway Floro": "FRO",
   "Forde, Norway Forde": "FDE",
   "Formosa, Formosa, Argentina Formosa": "FMA",
   "Ft Albany, Canada - Fort Albany Airport": "YFA",
   "Kuujjuaq, Quebec, Canada Fort Chimo Airport": "YVP",
   "Ft Collins/Loveland, CO, USA Fort Collins / Loveland Airport": "FNL",
   "Ft De France, Martinique Fort De France": "FDF",
   "Ft Dodge, IA, USA Fort Dodge Regional Airport": "FOD",
   "Ft Huachuca/Sierra Vista, AZ, USA": "FHU",
   "Ft Lauderdale, FL, USA Ft Lauderdale/Hollywood Intl Apt": "FLL",
   "Waynesville-Ft Leonard Wood, MO, USA - Forney Field": "TBN",
   "Ft Mcmurray, Alberta, Canada Fort Mcmurray Municipal": "YMM",
   "Ft Myers, FL, USA Regional Southwest Airport": "RSW",
   "Ft Nelson, Canada - Fort Nelson Airport": "YYE",
   "Ft St John, British Columbia, Canada Fort St John": "YXJ",
   "Ft Simpson, Northwest Territories, Canada Fort Simpson Airport": "YFS",
   "Ft Smith, AR, USA Fort Smith Municipal": "FSM",
   "Ft Smith, Northwest Territories, Canada": "YSM",
   "Ft Wayne, IN, USA Baer Field": "FWA",
   "Fortaleza, Ceara, Brazil Fortaleza-Pinto Martins Airport": "FOR",
   "Frankfurt, Germany Frankfurt International": "FRA",
   "Frankfurt, Germany - Hahn": "HHN",
   "Franklin, PA, USA Chess Lamberton": "FKL",
   "Fredericksburg, Virginia, USA - Shannon Airport": "EZF",
   "Fredericton, New Brunswick, Canada Fredericton Municipal Apt": "YFC",
   "Freeport, Bahamas Freeport Intl Airport": "FPO",
   "Fresno, CA, USA Fresno Air Terminal": "FAT",
   "Friday Harbor, WA, USA Friday Harbor Airport": "FRD",
   "Friedrichshafen, Germany Friedrichshafen Lowenthal": "FDH",
   "Fuerteventura / Puerto Del Rosario, Canary Islands/Fuerteventura Island, Spain Fuerteventura": "FUE",
   "Fukuoka, Japan Itazuke": "FUK",
   "Funafuti, Funafuti Atol, Tuvalu - International": "FUN",
   "Funchal, Madeira Islands, Portugal Funchal": "FNC",
   "Fuyang, China - Fuyang": "FUG",
   "Fuzhou, China - Fuzhou": "FOC",
   "Gaborone, Botswana Gaborone": "GBE",
   "Gainesville, FL, USA Jr Alison Municipal": "GNV",
   "Galapagos Islands, Ecuador Baltra": "GPS",
   "Galena, AK, USA": "GAL",
   "Galesburg, IL, USA Galesburg Municiple Airport": "GBG",
   "Gallup, NM, USA Gallup Municipal": "GUP",
   "Galveston, TX, USA Scholes Field": "GLS",
   "Galway, Ireland Carnmore": "GWY",
   "Gander, Newfoundland, Canada Gander Intl Airport": "YQX",
   "Ganges Harbor, Canada - Ganges Harbor Airport": "YGG",
   "Ganzhou, China - Ganzhou": "KOW",
   "Garden City, KS, USA Garden City Municipal Airport": "GCK",
   "Gaspe, Quebec, Canada": "YGP",
   "Gassim, Saudi Arabia - Gassim Airport": "ELQ",
   "Gatineau, Quebec, Canada Gatineau": "YND",
   "Gauhati, India Borjhar": "GAU",
   "Gdansk, Poland Rebiechowo": "GDN",
   "Geneva, Switzerland Geneva": "GVA",
   "Genoa, Italy Christoforo Colombo": "GOA",
   "George Town, Bahamas Exuma International": "GGT",
   "George, South Africa George": "GRJ",
   "Georgetown, Guyana Timehri": "GEO",
   "Georgetown, Ontario, Canada Georgetown / Via Rail Service": "XHM",
   "Geraldton, Western Australia, Australia Geraldton": "GET",
   "Gerona, Spain Costa Brava": "GRO",
   "Ghadames, Libya": "LTD",
   "Ghat, Libya": "GHT",
   "Gherian, Libya": "QGH",
   "Gibraltar, Gibraltar Gibraltar": "GIB",
   "Gilgit, Pakistan, Gilgit Airport": "GIL",
   "Gillette, WY, USA Campbell County Airport": "GCC",
   "Gillies Bay, British Columbia, Canada": "YGB",
   "Jizan (Gizan), Jizan province, Saudi Arabia - Gizan Airport": "GIZ",
   "Gjoa Haven, Canada - Gjoa Haven Airport": "YHK",
   "Gladstone, Australia - Gladstone Airport": "GLT",
   "Glasgow, MT, USA": "GGW",
   "Glasgow, Scotland, United Kingdom Glasgow Scotland": "GLA",
   "Glasgow, Scotland, United Kingdom Prestwick": "PIK",
   "Glencoe, Ontario, Canada Glencoe / Via Rail Service": "XZC",
   "Glendive, MT, USA": "GDV",
   "Goa, India Dabolim": "GOI",
   "Gods Narrows, Canada - Gods Narrows Airport": "YGO",
   "Gods River, Manitoba, Canada": "ZGI",
   "Goiania, Brazil - Goiania-Santa Genoveva Airport": "GYN",
   "Gold Coast, Queensland, Australia Coolangatta": "OOL",
   "Golfito, Costa Rica Golfito": "GLF",
   "Golovin, AK, USA": "GLV",
   "Goodland, KS, USA Renner Field": "GLD",
   "Goose Bay, Newfoundland, Canada Goose Bay Municipal Airpt": "YYR",
   "Goroka, Papua New Guinea Goroka": "GKA",
   "Gorontalo, Indonesia Tolotio": "GTO",
   "Gothenburg, Sweden Landvetter": "GOT",
   "Gove, Northern Territory, Australia Nhulunbuy": "GOV",
   "Governors Harbour, Bahamas": "GHB",
   "Granada, Spain Granada": "GRX",
   "Grand Canyon, AZ, USA": "GCN",
   "Grand Forks, ND, USA Grand Forks International Airport": "GFK",
   "Grand Island, NE, USA Central Nebraska Regional Airport": "GRI",
   "Grand Junction, CO, USA Walker Field": "GJT",
   "Grand Rapids, MI, USA Kent County International Airport": "GRR",
   "Grand Turk Is, Turks And Caicos Islands": "GDT",
   "Grande Prairie, Alberta, Canada Grande Prairie Airport": "YQU",
   "Graz, Austria Thalerhof": "GRZ",
   "Great Bend, Kansas, USA - Airport": "GBD",
   "Great Falls, MT, USA Great Falls International": "GTF",
   "Green Bay, WI, USA - Austin Straubel International Airport (Austin/Straybel Field)": "GRB",
   "Lewisburg, WV, USA - Lewisburg-Greenbrier Valley Airport": "LWB",
   "Greensboro / High Point, NC, USA Piedmont Triad Intl Airport": "GSO",
   "Greenville, IL, USA - Municipal": "GRE",
   "Greenville, NC, USA - Pitt-Greenville": "PGV",
   "Greenville, MS, USA - Greenville": "GLH",
   "Greenville, SC, USA - Donaldson Center": "GDC",
   "Greenville, SC, USA - Downtown": "GMU",
   "Greenville, SC, USA - Greenville-Spartanburg Metro": "GSP",
   "Greenville, TN, USA - Municipal": "GCY",
   "Greenville, TX, USA - Majors Field": "GVT",
   "Greenway Sound, Canada - Greenway Sound Airport": "YGN",
   "Grenoble, France St Geoirs": "GNB",
   "Griffith, Australia - Griffith Airport": "GFF",
   "Grimsby, Ontario, Canada Grimsby / Via Rail Service": "XGY",
   "Groningen, Netherlands Eelde": "GRQ",
   "Groton / New London, CT, USA GrotonNew London": "GON",
   "Guadalajara, Jalisco, Mexico Miguel Hidalgo Intl": "GDL",
   "Guangzhou, China - Baiyun": "CAN",
   "Guatemala City, Guatemala La Aurora Intl Airport": "GUA",
   "Guayaquil, Ecuador Simon Bolivar": "GYE",
   "Guayaramerin, Bolivia - Buayaramerin Airport": "GYA",
   "Guaymas, Sonora, Mexico": "GYM",
   "Guelph, Ontario, Canada Guelph / Via Rail Service": "XIA",
   "Guernsey, Channel Islands, United Kingdom Guernsey": "GCI",
   "Guerrero Negro, Baja California Sur, Mexico Guerrero Negro Airport": "GUB",
   "Guilin, China": "KWL",
   "Guiyang, China - Guiyang": "KWE",
   "Gulfport, MS, USA Gulfport/Biloxi": "GPT",
   "Gunnison, CO, USA Gunnison County Airport": "GUC",
   "Gurayat, Saudi Arabia - Gurayat Airport": "URY",
   "Gustavus, Alaska, USA - Gustavus Airport": "GST",
   "Gwadar, Pakistan": "GWD",
   "Ha'Apai, Tonga - Ha'Apai Airport": "HPA",
   "Hafr Albatin, Saudi Arabia - Hafr Albatin Airport": "HBT",
   "Hagerstown, MD, USA Washington County Regional Airport": "HGR",
   "Haifa, Israel - Haifa Airport": "HFA",
   "Haikou, China Haikou": "HAK",
   "Hail, Saudi Arabia - Hail Airport": "HAS",
   "Hailar, China - Hailar": "HLD",
   "Haines, AK, USA": "HNS",
   "Haiphong, Vietnam - Haiphong Airport": "HPH",
   "Hachijo Jima, Japan - Hachijo Jima Airport": "HAC",
   "Hakodate, Japan Hakodate": "HKD",
   "Halifax, Nova Scotia, Canada Halifax International": "YHZ",
   "Hall Beach, Canada - Hall Beach Airport": "YUX",
   "Halmstad, Sweden Halmstad": "HAD",
   "Hamburg, Germany Fuhlsbuttel": "HAM",
   "Hamilton Island, Queensland, Australia": "HTI",
   "Hamilton, New Zealand Hamilton": "HLZ",
   "Hamilton, Ontario, Canada Hamilton Civic Airport": "YHM",
   "Hammerfest, Norway": "HFT",
   "Hana, Hawaii, USA - Hana Airport": "HNM",
   "Hancock, MI, USA Houghton County / Memorial": "CMX",
   "Hangzhou, China": "HGH",
   "Hanoi, Vietnam Noibai Airport": "HAN",
   "Hanover, Germany Langenhagen": "HAJ",
   "Harare, Zimbabwe Harare": "HRE",
   "Nanaimo, British Columbia, Canada": "ZNA",
   "Harbin, China": "HRB",
   "Hargeisa, Somalia - Hargeisa Airport": "HGA",
   "Harlingen, TX, USA": "HRL",
   "Harrisburg, PA, USA Harrisburg International Airport": "MDT",
   "Harrison, AR, USA Boone County": "HRO",
   "Hartford, CT, USA Bradley International Airport": "BDL",
   "Hastings, NE, USA": "HSI",
   "Hat Yai, Thailand": "HDY",
   "Haugesund, Norway Karmoy": "HAU",
   "Havana, Cuba Jose Marti": "HAV",
   "Havre, MT, USA City County": "HVR",
   "Hay River, Northwest Territories, Canada": "YHY",
   "Steamboat Springs Hayden, Colorado, USA - Steamboat Springs Hayden/Yampa Valley Regional Airport": "HDN",
   "Hayman Island, Queensland, Australia Hayman Island Airport": "HIS",
   "Hays, KS, USA Hays Municipal Airport": "HYS",
   "Hefei, China - Hefei": "HFE",
   "Heho, Myanmar (Burma) - Heho Airport": "HEH",
   "Heidelberg, Germany": "HDB",
   "Helena, MT, USA": "HLN",
   "Helsingborg, Sweden Angelholm/Helsingborg": "AGH",
   "Helsingborg, Sweden Heliport": "JHE",
   "Helsinki, Finland Helsinki": "HEL",
   "Heraklion, Crete Island, Greece Heraklion": "HER",
   "Herat, Afghanistan - Herat": "HEA",
   "Heringsdorf, Germany - Heringsdorf Airport": "HDF",
   "Hermosillo, Sonora, Mexico General Ignacio Pesqueira Garcia": "HMO",
   "Hervey Bay, Queensland, Australia": "HVB",
   "Hervey, Quebec, Canada Hervey / Via Rail Service": "XDU",
   "Hibbing / Chisholm, MN, USA HibbingChisholm": "HIB",
   "Hickory, NC, USA": "HKY",
   "High Level, Alberta, Canada Footner Lake Muncpl": "YOJ",
   "Hilo, HI, USA Hilo Hawaii:HawaiiInternational Usa": "ITO",
   "Hilton Head, SC, USA Municipal": "HHH",
   "Hiroshima, Japan Hiroshima": "HIJ",
   "Ho Chi Minh City, Vietnam Tan Son Nhut": "SGN",
   "Hobart, Tasmania, Australia - Hobart Cambridge Airport": "HBA",
   "Hobbs, NM, USA Lea County": "HOB",
   "Hoedspruit, South Africa - Hoedspruit Airport": "HDS",
   "Hof Airport": "HOQ",
   "Hofuf, Saudi Arabia - Hofuf Airport": "HOF",
   "Hohhot, China": "HET",
   "Hokitika, New Zealand Hokitika": "HKK",
   "Holman Island, Northwest Territories, Canada": "YHI",
   "Homer, AK, USA Homer Airport": "HOM",
   "Hong Kong, Hong Kong": "HKG",
   "Honiara/Guadalcanal, Solomon Islands Henderson International": "HIR",
   "Honningsvag, Norway - Honningsvag-Valan Airport": "HVG",
   "Honolulu, HI, USA Honolulu International": "HNL",
   "Kaunakakai/Hoolehua, HI, USA - Molokai Municipal Airport": "MKK",
   "Hoonah, AK, USA": "HNH",
   "Hooper Bay, AK, USA": "HPB",
   "Horn Island, Australia - Horn Island Airport": "HID",
   "Hornepayne, Ontario, Canada": "YHN",
   "Horsham, Australia": "HSM",
   "Horta, Portugal - Horta Airport": "HOR",
   "Hoskins, Papua New Guinea Hoskins": "HKN",
   "Hot Springs, AR, USA Memorial Field": "HOT",
   "Hotan, China - Hotan": "HTN",
   "Houma, LA, USA Terrebonne": "HUM",
   "Houn, Libya": "HUQ",
   "Houston, British Columbia, Canada": "ZHO",
   "Houston, TX, USA Houston Intercontinental": "IAH",
   "Houston, TX, USA Ellington Field": "EFD",
   "Houston, TX, USA Houston Hobby Airport": "HOU",
   "Huahine, French Polynesia - Huahine Airport": "HUH",
   "Hualien, Taiwan Hualien": "HUN",
   "Huangyan, China - Huangyan": "HYN",
   "Huatulco, Oaxaca, Mexico": "HUX",
   "Hudson Bay, Saskatchewan, Canada": "YHB",
   "Hue, Vietnam": "HUI",
   "Humberside, England, United Kingdom Humberside": "HUY",
   "Huntington / Ashland, WV, USA TriState": "HTS",
   "Huntsville/Decatur, AL, USA HuntsvilleMadison County Jetplex": "HSV",
   "Hurghada, Egypt": "HRG",
   "Huron, SD, USA Huron Regional Airport": "HON",
   "Hwange National Park, Zimbabwe Hwange National Park": "HWN",
   "Hyannis, MA, USA Barnstable County": "HYA",
   "Hydaburg, AK, USA": "HYG",
   "Hyderabad, India Begumpet": "HYD",
   "Iasi, Romania Iasi": "IAS",
   "Ibiza, Spain Ibiza": "IBZ",
   "Idaho Falls, ID, USA": "IDA",
   "Igiugig, Alaska, USA - Iguigig Airport": "IGG",
   "Igloolik, Northwest Territories, Canada": "YGT",
   "Iguassu Falls, Parana, Brazil - Igaussu Falls - Cataratas Airport": "IGU",
   "Iguazu, Misiones, Argentina Iguazu International": "IGR",
   "Ikaria Island, Greece - Ikaria Airport": "JIK",
   "Iles De La Madeleine, Quebec, Canada House Harbour Airport": "YGR",
   "Ilford, Manitoba, Canada": "ILF",
   "Ilheus, Bahia, Brazil - Eduardo Gomes": "IOS",
   "Iliamna, AK, USA": "ILI",
   "Ilo, Moquegua, Peru Ilo Airport": "ILQ",
   "Iloilo, Philippines Mandurriao": "ILO",
   "Ilulissat, Greenland": "JAV",
   "Imperatriz, Maranhao, Brazil": "IMP",
   "Imphal, India Municipal": "IMF",
   "Inagua, Bahamas": "IGA",
   "Seoul, South Korea - Incheon International Airport": "ICN",
   "Indaselassie, Ethiopia - Shire Indaselassie Airport": "SHC",
   "Indianapolis, IN, USA Indianapolis International Airport": "IND",
   "Indore, India - Indore Airport": "IDR",
   "Ingersoll, Ontario, Canada Ingersoll / Via Rail Service": "XIB",
   "Innsbruck, Austria Kranebitten": "INN",
   "International Falls, MN, USA Falls International": "INL",
   "Inukjuak, Canada - Inukjuak Airport": "YPH",
   "Inuvik, Northwest Territories, Canada Inuvik International Arpt": "YEV",
   "Invercargill, New Zealand - Invercargill Airport": "IVC",
   "Inverness, Scotland, United Kingdom Inverness": "INV",
   "Inyokern, CA, USA Inyokern Airport": "IYK",
   "Ioannina, Greece Ioannina": "IOA",
   "Ipiales, Colombia San Luis": "IPI",
   "Ipoh, Malaysia Ipoh": "IPH",
   "Iqaluit, Northwest Territories, Canada - Iqaluit-Frobisher Bay Airport": "YFB",
   "Iquique, Chile Chucumata": "IQQ",
   "Iquitos, Peru Cf Secada": "IQT",
   "Irkutsk, Russia - Irkutsk-Southeast Airport": "IKT",
   "Iron Mountain, MI, USA Ford Airport": "IMT",
   "Ironwood, MI, USA Gogebic County Airport": "IWD",
   "Ischia, Italy - Ischia Airport": "ISH",
   "Isfahan, Iran - Isfahan Airport": "IFN",
   "Ishigaki, Japan - Ishigaki Airport": "ISG",
   "Islamabad, Pakistan International": "ISB",
   "Islay, Scotland, United Kingdom Glenegedale": "ILY",
   "Isle Of Man, Isle Of Man, United Kingdom Ronaldsway": "IOM",
   "Isles Of Scilly, Isles Of Scilly, United Kingdom Tresco": "ISC",
   "Islip, NY, USA Long IslandMacarthur Airport": "ISP",
   "Istanbul, Turkey Ataturk": "IST",
   "Istres, France - Le Tube airport": "QIE",
   "Itaituba, Brazil - Itaituba Airport": "ITB",
   "Ithaca, NY, USA Tompkins County": "ITH",
   "Ivalo, Finland - Ivalo Airport": "IVL",
   "Ivano-Frankovsk, Ukraine - Ivano-Frankovsk Airport": "IFO",
   "Ivujivik, Canada - Ivujivik Airport": "YIK",
   "Iwami, Japan - Iwami Airport": "IWJ",
   "Ixtapa/Zihuatanejo, Guerrero, Mexico International": "ZIH",
   "Izhevsk, Russia": "IJK",
   "Izmir, Turkey Adnan Menderes": "ADB",
   "Izumo, Japan": "IZO",
   "Jacobabad, Pakistan - Jacobabad Airport": "JAG",
   "Jabat, Marshall Islands Jabat Intl": "JAT",
   "Jackson Hole, WY, USA Jackson Hole Airport": "JAC",
   "Jackson, MS, USA Allen C Thompson Field": "JAN",
   "Jackson, TN, USA Mc Kellar Field": "MKL",
   "Jacksonville, FL, USA Jacksonville International Airport": "JAX",
   "Jacksonville, Florida, USA - Craig Municipal Airport": "CRG",
   "Jacksonville, NC, USA": "OAJ",
   "Jaipur, India Sanganeer": "JAI",
   "Jakarta, Indonesia Halim Perdana Kusama": "HLP",
   "Jakarta, Indonesia Soekarno Hatta International": "CGK",
   "Jalapa, Mexico - Jalapa Airport": "JAL",
   "Jamestown, ND, USA Jamestown Municipal Airport": "JMS",
   "Jamestown, NY, USA Chautauqua County Airport": "JHW",
   "Jammu, India Satwari": "IXJ",
   "Jamnagar, India Govardhanpur": "JGA",
   "Jamshedpur, India Sonari": "IXW",
   "Jasper, Alberta, Canada": "YJA",
   "Sentani, Indonesia - Sentani-Jayapura Airport": "DJJ",
   "Jeddah, Saudi Arabia Jeddah International": "JED",
   "Jerez De La Frontera, Spain La Parra": "XRY",
   "Jersey, Channel Islands, United Kingdom States": "JER",
   "Jijiga, Ethiopia - Jijiga Airport": "JIJ",
   "Jilin, China - Jilin": "JIL",
   "Jimma, Ethiopia - Jimma Airport": "JIM",
   "Jinan, China - Jinan": "TNA",
   "Jinghong, China - Jinghong": "JHG",
   "Jinjiang, China - Jinjiang": "JJN",
   "Joao Pessoa, Brazil - Castro Pinto Airport": "JPA",
   "Jodhpur, India": "JDH",
   "Joensuu, Finland - Joensuu Airport": "JOE",
   "Johannesburg, South Africa - O R Tambo International Airport (formerly Jan Smuts)": "JNB",
   "Johnston Island, US, Outlying Islands": "JON",
   "Johnstown, PA, USA Johnstown Cambria": "JST",
   "Johor Bahru, Malaysia Sultan Ismail International": "JHB",
   "Joinville, Santa Catarina, Brazil Federal/Cubatao Airport": "JOI",
   "Joliette, Quebec, Canada Joliette / Via Rail Service": "XJL",
   "Jomsom, Nepal": "JMO",
   "Jonesboro, AR, USA Municipal": "JBR",
   "Jonkoping, Sweden Axamo": "JKG",
   "Jonquiere, Quebec, Canada Jonquiere / Via Rail Service": "XJQ",
   "Joplin, MO, USA Municipal Airport": "JLN",
   "Jorhat, India - Jorhat Airport": "JRH",
   "Jos, Nigeria - Jos Airport": "JOS",
   "Jouf, Saudi Arabia - Jouf Airport": "AJF",
   "Juazeiro Do Norte, Brazil - Juazeiro Do Norte Airport": "JDO",
   "Jujuy, Provincia Jujuy, Argentina El Cadillal": "JUJ",
   "Juliaca, Peru Juliaca": "JUL",
   "Juneau, AK, USA Juneau": "JNU",
   "Jyvaskyla, Finland - Jyvaskyla Airport": "JYV",
   "Kabri Dar, Ethiopia - Kabri Dar Airport": "ABK",
   "Kabul, Afghanistan - Khwaja Rawash": "KBL",
   "Kadena AFB, Okinawa, Japan - Kadena Air Force Base-Okinawa Airport": "DNA",
   "Kagoshima, Japan Kagoshima": "KOJ",
   "Kahului, HI, USA Kahului Airport": "OGG",
   "Kailashahar, India Kailashahar": "IXH",
   "Kaitaia, New Zealand Kaitaia": "KAT",
   "Kajaani, Finland - Kajaani Airport": "KAJ",
   "Kake, AK, USA": "KAE",
   "Kalamazoo, MI, USA Kalamazoo/Battle Creek Intl": "AZO",
   "Kalaupapa, Hawaii, USA, Kalaupapa Airport": "LUP",
   "Kalgoorlie, Australia - Kalgoorlie Airport": "KGI",
   "Kalibo, Philippines Kalibo": "KLO",
   "Kaliningrad, Russia Kaliningrad Airport": "KGD",
   "Kalispell, MT, USA Glacier Park International": "FCA",
   "Kalispell, MT, USA - Glacier Park International": "GPI",
   "Kalmar, Sweden Kalmar": "KLR",
   "Kaltag, AK, USA": "KAL",
   "Kamalpur, India Kamalpur": "IXQ",
   "Kamloops, British Columbia, Canada Fulton Field": "YKA",
   "Kamuela, Hawaii, USA - Waimea-Kohala-Kamuela Airport": "MUE",
   "Kandahar, Afghanistan - Kandahar": "KDH",
   "Kandla, India Kandla": "IXY",
   "Kangerlussuaq, Greenland Sondre Stromfjord": "SFJ",
   "Kangiqsualujjuaq, Canada - Kangiqsualujjuaq Airport": "XGR",
   "Kangiqsujuaq, Canada - Kangiqsujuaq Airport": "YWB",
   "Kangirsuk, Canada - Kangirsuk Airport": "YKG",
   "Kangnung, Republic of Korea - Kangnung Airport": "KAG",
   "Kano, Nigeria Aminu Kano International": "KAN",
   "Kansas City, MO, USA Downtown": "MKC",
   "Kansas City, MO, USA Kansas City International Airport": "MCI",
   "Kaohsiung, Taiwan": "KHH",
   "Kapalua, HI, USA Kapalua": "JHM",
   "Kapuskasing, Ontario, Canada": "YYU",
   "Karachi, Pakistan - Quaid-E-Azam International Airport": "KHI",
   "Kariba, Zimbabwe Kariba": "KAB",
   "Karlovy Vary, Czech Republic - Karlovy Vary Airport": "KLV",
   "Karlsruhe/Baden, Germany - Karlsruhe-Baden Airport": "FKB",
   "Karlstad, Sweden - Karlstad Airport": "KSD",
   "Karpathos, Greece Karpathos": "AOK",
   "Karratha, Australia - Karratha Airport": "KTA",
   "Kars, Turkey - Kars Airport": "KSY",
   "Karshi, Uzbekistan - Karshi Airport": "KSQ",
   "Karup, Denmark Karup": "KRP",
   "Kasane, Botswana Kasane": "BBK",
   "Kaschechewan, Canada - Kaschechewan Airport": "ZKE",
   "Kashi, China - Kashi": "KHG",
   "Kasos Island, Greece Kasos Island": "KSJ",
   "Kassel, Germany - Kassel Airport": "KSF",
   "Kastelorizo Island, Greece - Kastelorizo Airport": "KZS",
   "Kastoria,Greece - Kastoria Airport": "KSO",
   "Katherine, Northern Territory, Australia Tindal": "KTR",
   "Kathmandu, Nepal Tribhuvan": "KTM",
   "Katowice, Poland Pyrzowice": "KTW",
   "Lihue, Kauai Island, HI, USA Lihue Municipal Airport": "LIH",
   "Kauai Island, HI, USA Princeville": "HPV",
   "Kaunas, Lithuania Kaunas": "KUN",
   "Kavala, Greece Kavala": "KVA",
   "Kayseri, Turkey - Kayseri Airport": "ASR",
   "Kazan, Russia Kazan": "KZN",
   "Kearney, NE, USA Kearney Municipal Airport": "EAR",
   "Keene / Brattleboro, NH, USA Dillant Hopkins": "EEN",
   "Kefallinia Island, Greece - Kefallinia Airport": "EFL",
   "Kelowna, British Columbia, Canada Ellison Field Airport": "YLW",
   "Kemerovo, Russia Kemerovo": "KEJ",
   "Kemi/Tornio, Finland Kemi": "KEM",
   "Kempsey, Australia - Kempsey Airport": "KPS",
   "Kenai, AK, USA Kenai Municipal Airport": "ENA",
   "Kenmore Air Harbor, WA, USA": "KEH",
   "Kenora, Ontario, Canada": "YQK",
   "Kerema, Papua New Guinea - Kerema Airport": "KMA",
   "Kerman, Iran Kerman": "KER",
   "Kermanshah, Iran Bakhtaran Iran": "KSH",
   "Kerikeri, New Zealand - Kerikeri Airport": "KKE",
   "Kerry County, Ireland Kerry County": "KIR",
   "Keshod, India Keshod": "IXK",
   "Ketchikan, AK, USA Ketchikan International": "KTN",
   "Key West, FL, USA": "EYW",
   "Khabarovsk, Russia - Novy": "KHV",
   "Khajuraho, India - Khajuraho Airport": "HJR",
   "Kharkhorin, Ovorkhangai, Mongolia - Kharkhorin Airport": "KHR",
   "Kharkov, Ukraine Kharkov": "HRK",
   "Khartoum, Sudan Civil": "KRT",
   "Khoms (Al Khums), Libya": "QKO",
   "Khon Kaen, Thailand - Khon Kaen Airport": "KKC",
   "Khong Island, Laos - Khong Island Airport": "KOG",
   "Khovd, Khovd, Mongolia - Khovd Airport": "HVD",
   "Khowai, India Khowai": "IXN",
   "Khujirt, Ovorkhangai, Mongolia - Khujirt Airport": "HJT",
   "Kiel, Germany Holtenau": "KEL",
   "Kiev, Ukraine Borispol": "KBP",
   "Kiev, Ukraine Zhulhany": "IEV",
   "Kigali, Rwanda - Kigali-Kayibanda International Airport": "KGL",
   "Kigoma, Tanzania": "TKQ",
   "Moshi, Tanzania - Kilimanjaro Airport": "JRO",
   "Killeen, TX, USA": "ILE",
   "Kimberley, South Africa - B J Vorster Airport": "KIM",
   "King Cove, Alaska, USA - King Cove Airport": "KVC",
   "King Island, Tasmania, Australia King Island": "KNS",
   "King Salmon, Alaska, USA - King Salmon Airport": "AKN",
   "Kingman, AZ, USA Mohave County": "IGM",
   "Kingscote, South Australia, Australia": "KGC",
   "Kingston, Jamaica": "KIN",
   "Kingston, Ontario, Canada Kingston Airport": "YGK",
   "Kinmen, Taiwan - Kinmen Island Airport": "KNH",
   "Kinshasa, Zaire Kinshasa": "FIH",
   "Kinston, NC, USA": "ISO",
   "Kipnuk, AK, USA": "KPN",
   "Kirkenes, Norway Hoeyburtmoen": "KKN",
   "Kirksville, Missouri, USA - Kirksville Airport": "IRK",
   "Kirkwall / Orkney Island, Scotland, United Kingdom Kirkwall": "KOI",
   "Kiruna, Sweden Kiruna": "KRN",
   "Kitakyushu, Japan - Kitakyushu Airport": "KKJ",
   "Kitchener, Ontario, Canada Kitchener": "YKF",
   "Kithira Island, Greece - Kithira Airport": "KIT",
   "Kittila, Finland - Kittila Airport": "KTT",
   "Kivalina, Alaska, USA - Kivalina Airport": "KVL",
   "Klagenfurt, Austria Klagenfurt": "KLU",
   "Klamath Falls, OR, USA Kingsley Field Airport": "LMT",
   "Klawock, AK, USA": "KLW",
   "Knoxville, TN, USA Mcghee Tyson": "TYS",
   "Kochi, Japan - Kochi Airport": "KCZ",
   "Kodiak, AK, USA": "ADQ",
   "Koh Samui, Thailand": "USM",
   "Kokkola/Pietarsaari, Finland Kruunupyy": "KOK",
   "Kolhapur (Ujlaiwadi), Maharashtra, India - Kolhapur Airport": "KLH",
   "Koliganek, Alaska, USA - Koliganek Airport": "KGK",
   "Komatsu, Japan - Komatsu Airport": "KMQ",
   "Kona, HI, USA Keahole": "KOA",
   "Kongiganak, Alaska, USA - Kongiganak Airport": "KKH",
   "Konya, Turkey - Konya Airport": "KYA",
   "Korla, China - Korla": "KRL",
   "Koror, Palau Airai": "ROR",
   "Kos Island, Greece - Kos Airport": "KGS",
   "Kosice, Slovakia Barca": "KSC",
   "Kosrae, Caroline Islands, Micronesia": "KSA",
   "Koszalin, Poland - Koszalin Airport": "OSZ",
   "Kota Bharu, Malaysia Sultan Ismail Petra": "KBR",
   "Kota Kinabalu, Sabah, Malaysia Kota Kinabalu": "BKI",
   "Kotzebue, AK, USA": "OTZ",
   "Kozani, Macedonia, Greece - Kozani Airport": "KZI",
   "Krabi, Thailand - Krabi Airport": "KBV",
   "Krakow, Poland Balice": "KRK",
   "Kramfors, Sweden Kramfors": "KRF",
   "Krasnodar, Russia Krasnodar": "KRR",
   "Krasnojarsk, Russia": "KJA",
   "Kristiansand, Norway Kjevik": "KRS",
   "Kristianstad, Sweden - Kristianstad Airport": "KID",
   "Kristiansund, Norway Kvernberget": "KSU",
   "Krugersdorp, South Africa - Lanseria International Airport": "HLA",
   "Kuala Lumpur, Malaysia - KLIA Kuala Lumpur International": "KUL",
   "Kuala Lumpur - Subang, Malaysia": "SZB",
   "Kuala Terengganu, Malaysia Sultan Mahmood": "TGG",
   "Kuantan, Malaysia Padang Geroda": "KUA",
   "Kuching, Sarawak, Malaysia Kuching": "KCH",
   "Kudat, Malaysia - Kudat Airport": "KUD",
   "Kufrah, Libya": "AKF",
   "Kulusuk, Greenland Metropolitan Area": "KUS",
   "Kumamoto, Japan Kumamoto": "KMJ",
   "Kume Jima, Japan - Kume Jima Airport": "UEO",
   "Kunming, China Kunming": "KMG",
   "Kunsan, South Korea": "KUV",
   "Kununurra, Australia - Kununurra Airport": "KNX",
   "Kuopio, Finland Kuopio": "KUO",
   "Kuqa, China - Kuqa": "KCA",
   "Kushiro, Japan - Kushiro Airport": "KUH",
   "Kuujjuarapik, Quebec, Canada Kuujjuarapik": "YGW",
   "Kuusamo, Finland - Kuusamo Airport": "KAO",
   "Kuwait, Kuwait International": "KWI",
   "Kwajalein, Marshall Islands": "KWA",
   "Kwangju, Republic of Korea - Kwangju Airport": "KWJ",
   "La Ceiba, Honduras International": "LCE",
   "La Coruna, Spain La Coruna": "LCG",
   "La Crosse, WI, USA La Crosse Municipal": "LSE",
   "La Grande, Canada - La Grande Airport": "YGL",
   "La Paz, Baja California Sur, Mexico Aeropuerto General Marquez De Leon": "LAP",
   "La Paz, Bolivia El Alto": "LPB",
   "La Rioja, Argentina - La Rioja Airport": "IRJ",
   "La Rochelle, France Laleu": "LRH",
   "La Ronge, Saskatchewan, Canada La Ronge": "YVC",
   "La Sarre, Quebec, Canada": "SSQ",
   "La Serena, Chile La Florida": "LSC",
   "La Tuque, Quebec, Canada La Tuque": "YLQ",
   "Laayoune, Morocco LaayouneHassan I Morocco": "EUN",
   "Labasa, Fiji - Labasa Airport": "LBS",
   "Labuan, Sabah, Malaysia": "LBU",
   "Lac Edouard, Quebec, Canada Lac Edouard / Via Rail Service": "XEE",
   "Ladysmith, British Columbia, Canada Ladysmith / Via Rail Service": "XEH",
   "Lae, Papua New Guinea - Lae-Nadzab Airport": "LAE",
   "Lafayette / New Iberia, LA, USA Municipal": "LFT",
   "Lafayette, IN, USA Purdue University Airport": "LAF",
   "Lagos, Nigeria Murtala Muhammed": "LOS",
   "Lahad Datu, Sabah, Malaysia Lahad Datu": "LDU",
   "Lahore, Pakistan Lahore": "LHE",
   "Lake Charles, LA, USA Municipal": "LCH",
   "Lake Harbour, Canada - Lake Harbour Airport": "YLC",
   "Lake Havasu City, AZ, USA - Lake Havasu City Municipal Airport": "HII",
   "Seattle, WA, USA Lake Union Sea Plane Base": "LKE",
   "Lakselv, Norway - Banak": "LKL",
   "Lalibela, Ethiopia - Lalibela Airport": "LLI",
   "Lamezia-Terme, Italy - Lamezia-Terme Airport": "SUF",
   "Lampang, Thailand - Lampang Airport": "LPT",
   "Lampedusa Island, Italy - Lampedusa Airport": "LMP",
   "Lanai City, HI, USA Lanai": "LNY",
   "Lancaster, PA, USA Lancaster": "LNS",
   "Langford, British Columbia, Canada Langford / Via Rail Service": "XEJ",
   "Langkawi, Malaysia": "LGK",
   "Lannion, France - Lannion Airport": "LAI",
   "Lansing, MI, USA Capital City Airport": "LAN",
   "Lanzarote, Canary Islands, Spain Lanzarote": "ACE",
   "Lanzhou, China - Metropolitan Area": "LHW",
   "Lanzhou, China - Zhongchuan-Lanzhou West Airport": "ZGC",
   "Laoag, Philippines - Laoag Airport": "LAO",
   "Lappeenranta, Finland - Lappeenranta Airport": "LPP",
   "Laramie, WY, USA General Brees Field": "LAR",
   "Laredo, TX, USA International": "LRD",
   "Larnaca, Cyprus Intl": "LCA",
   "Las Cruces, NM, USA": "LRU",
   "Las Piedras, Venezuela Josefa Camejo": "LSP",
   "Las Vegas, NV, USA Mccarran International Airport": "LAS",
   "Las Vegas, NV, USA North Air Terminal": "VGT",
   "Latrobe, PA, USA Westmoreland County": "LBE",
   "Launceston, Tasmania, Australia Launceston": "LST",
   "Laurel, MS, USA Laurel Hattiesburg/Camp Shelby": "PIB",
   "Nadi, Fiji International": "NAN",
   "Lawas, Sarawak, Malaysia Lawas": "LWY",
   "Lawton, OK, USA Municipal": "LAW",
   "Lazaro Cardenas, Michoacan, Mexico Na": "LZC",
   "Le Havre, France Le Havre": "LEH",
   "Learmonth, Western Australia, Australia": "LEA",
   "Lebanon/Hanover/White River, NH, USA Lebanon Regional": "LEB",
   "Leeds/Bradford, England, United Kingdom": "LBA",
   "Legaspi, Philippines Legaspi": "LGP",
   "Leh, India Leh": "IXL",
   "Leipzig, Germany Leipzig": "LEJ",
   "Leknes, Norway Leknes": "LKN",
   "Leon, Spain - Leon Airport": "LEN",
   "Leon/Guanajuato, Guanajuato, Mexico Del Bajio": "BJX",
   "Leros, Greece Leros": "LRS",
   "Lethbridge, Alberta, Canada Lethbridge Airport": "YQL",
   "Leticia, Colombia Gen Av Cob0": "LET",
   "Levelock, Alaska, USA - Levelock Airport": "KLL",
   "Lewiston, ID, USA LewistonNez Perce Airport": "LWS",
   "Lewistown, MT, USA Municipal": "LWT",
   "Lexington, KY, USA Blue Grass Field": "LEX",
   "Lhasa, Tibet Autonomous Region, China - Lhasa": "LXA",
   "Lianyungang, China - Lianyungang": "LYG",
   "Liberal, KS, USA Glenn L Martin Terminal": "LBL",
   "Liberia, Costa Rica Liberia": "LIR",
   "Libreville, Gabon Libreville": "LBV",
   "Liege, Belgium Bierset": "LGG",
   "Lifou Island, New Caledonia - Lifou Airport": "LIF",
   "Lijiang, China - Lijiang City Airport": "LJG",
   "Lilabari, India Lilabari": "IXI",
   "Lille, France Lille-Lesquin Airport": "LIL",
   "Lilongwe, Malawi Kamuzu Intl": "LLW",
   "Lima, Peru Intl Jorge Chavez": "LIM",
   "Limbang, Sarawak, Malaysia Limbang": "LMN",
   "Limoges, France Bellegarde": "LIG",
   "Lincang, China - Lincang": "LNJ",
   "Lincoln, NE, USA Municipal Airport": "LNK",
   "Linkoping, Sweden Saab": "LPI",
   "Linz, Austria Linz": "LNZ",
   "Lisbon, Portugal Lisboa": "LIS",
   "Lismore, New South Wales, Australia Lismore": "LSY",
   "Little Rock, AR, USA Little Rock Regional Airport": "LIT",
   "Liuzhou, China - Liuzhou": "LZH",
   "Liverpool, England, United Kingdom Liverpool": "LPL",
   "Livingstone, Zambia Livingstone": "LVI",
   "Ljubljana, Slovenia Brnik": "LJU",
   "Lome, Togo Lome": "LFW",
   "Londolovit, Papua New Guinea Londolovit": "LNV",
   "London, England, United Kingdom Gatwick": "LGW",
   "London, England, United Kingdom Heathrow": "LHR",
   "London, England, United Kingdom London City": "LCY",
   "London, England, United Kingdom Luton International": "LTN",
   "London, England, United Kingdom Stansted": "STN",
   "London, Ontario, Canada - London Municipal": "YXU",
   "Londrina, Parana, Brazil - Londrina": "LDB",
   "Long Beach, CA, USA Long Beach Municipal Airport": "LGB",
   "Longreach, Australia - Longreach Airport": "LRE",
   "Longview/Gladewater/Kilgore, TX, USA Gregg County": "GGG",
   "Longyearbyen, Norway Svalbard": "LYR",
   "Lord Howe Island, Australia - Lord Howe Island Airport": "LDH",
   "Loreto, Baja California Sur, Mexico": "LTO",
   "Lorient, France LannBihoue": "LRT",
   "Los Angeles, CA, USA Los Angeles Intl Airport": "LAX",
   "Los Angeles, Chile Maria Dolores": "LSQ",
   "Los Mochis, Sinaloa, Mexico": "LMM",
   "Louisville, KY, USA Standiford Field": "SDF",
   "Lourdes/Tarbes, France Tarbes International": "LDE",
   "Luanda, Angola Fevereiro": "LAD",
   "Lubbock, TX, USA Lubbock International Airport": "LBB",
   "Lucknow, India - Lucknow-Amausi Airport": "LKO",
   "Luderitz, Namibia Luderitz": "LUD",
   "Lugano, Switzerland Agno": "LUG",
   "Lugansk, Ukraine": "VSG",
   "Lukla, Nepal Lukla": "LUA",
   "Lulea, Sweden Kallax": "LLA",
   "Luoyang, China - Luoyang": "LYA",
   "Lusaka, Zambia Lusaka": "LUN",
   "Luxembourg, Luxembourg Findel": "LUX",
   "Luxi, China - Luxi": "LUM",
   "Luxor, Egypt - Luxor": "LXR",
   "Luzhou, China - Luzhou": "LZO",
   "Luzon Is, Clark Field, Philippines": "CRK",
   "Lvov, Ukraine Snilow": "LWO",
   "Little Cayman, Cayman Islands - Little Cayman Airport": "LYB",
   "Lodz, Poland - Lodz Airport": "LCJ",
   "Logrono, Spain - Logrono Airport": "RJL",
   "Londonderry, Northern Ireland, United Kingdom - Londonderry Airport": "LDY",
   "Long Akah, Malaysia - Long Akah Airport": "LKH",
   "Long Banga, Malaysia - Long Banga Airport": "LBP",
   "Long Lellang, Malaysia - Long Lellang Airport": "LGL",
   "Long Seridan, Malaysia - Long Seridan Airport": "ODN",
   "Lopez Island, Washington, USA - Lopez Island Airport": "LPS",
   "San Jose Del Cabo, Baja California Sur, Mexico Los Cabos Intl Airport": "SJD",
   "Luang Namtha, Laos - Luang Namtha Airport": "LXG",
   "Luang Prabang, Laos - Luang Prabang International Airport": "LPQ",
   "Lycksele, Sweden - Lycksele Airport": "LYC",
   "Lynchburg, VA, USA Municipal Airport": "LYH",
   "Lyon, France Satolas": "LYS",
   "Maastricht, Netherlands ZuidLimburg": "MST",
   "Macapa, Amapa, Brazil": "MCP",
   "Macau, Macau SAR, China": "MFM",
   "Maceio, Brazil - Palmares Airport": "MCZ",
   "Mackay, Queensland, Australia Mackay": "MKY",
   "Macon, GA, USA Lewis B Wilson": "MCN",
   "Madang, Papua New Guinea Madang": "MAG",
   "Medinah, Saudi Arabia - Madinah Prince Mohammad Bin Abdulaziz": "MED",
   "Madison, WI, USA Dane County Regional Airport": "MSN",
   "Madrid, Spain Barajas": "MAD",
   "Madurai, India Madurai": "IXM",
   "Mae Hong Son, Thailand Mae Hong Son": "HGN",
   "Magadan, Russia Magadan": "GDX",
   "Mahe Island, Seychelles Mahe Island Seychelles Intl": "SEZ",
   "Maio, Cape Verde - Maio Airport": "MMO",
   "Majuro, Marshall Islands International": "MAJ",
   "Makale, Ethiopia - Makale Airport": "MQX",
   "Makung, Taiwan Airport": "MZG",
   "Mala Mala Airport": "AAM",
   "Malabo, Equatorial Guinea Santa Isabel": "SSG",
   "Malaga, Spain Malaga": "AGP",
   "Malang, Indonesia": "MLG",
   "Malatya, Turkey - Malatya Airport": "MLX",
   "Male, Maldives Male International": "MLE",
   "Malmo, Sweden Malmo Harbour": "HMA",
   "Malmo, Sweden Malmo Harbour Heliport": "JMM",
   "Malmo, Sweden Sturup": "MMX",
   "Malololailai, Fiji Malololailai": "PTF",
   "Malta, Malta Luqa": "MLA",
   "Mammoth Lakes, CA, USA Mammoth Lakes Airport": "MMH",
   "Mana Island, Fiji - Mana Airport": "MNF",
   "Manado, Indonesia Samratulang": "MDC",
   "Managua, Nicaragua": "MGA",
   "Manaus, Amazonas, Brazil Eduardo Gomes": "MAO",
   "Manchester, England, United Kingdom International": "MAN",
   "Manchester, NH, USA Manchester": "MHT",
   "Mandalay, Myanmar (Burma) - Annisaton Airport": "MDL",
   "Mandalgovi, Dundgovi, Mongolia - Mandalgovi Airport": "MXW",
   "Mangalore, India Bajpe": "IXE",
   "Mangrove Cay, Bahamas": "MAY",
   "Manhattan, KS, USA Manhattan Municipal": "MHK",
   "Manila, Philippines Ninoy Aquino International": "MNL",
   "Manistee, MI, USA Manistee Blacker Airport": "MBL",
   "Thompson, Manitoba, Canada - Manitoba-Thompson Airport": "YTH",
   "Manizales, Colombia Santaguida": "MZL",
   "Mannheim, Germany - Mannheim Airport": "MHG",
   "Manokotak, Alaska, USA - Manokotak Airport": "KMO",
   "Manokwari, Indonesia Rendani": "MKW",
   "Manston, Kent, United Kingdom - Kent International Airport": "MSE",
   "Manzanillo, Colima, Mexico Aeropuerto International": "ZLO",
   "Manzini, Swaziland - Manzini Airport": "MTS",
   "Maotoa, (Western) Samoa - Savaii Airport": "MXS",
   "Maputo, Mozambique Maputo International": "MPM",
   "Mar Del Plata, Buenos Aires, Argentina": "MDQ",
   "Maraba, Brazil - Maraba Airport": "MAB",
   "Maracaibo, Venezuela La Chinita": "MAR",
   "Marathon, FL, USA": "MTH",
   "Marathon, Ontario, Canada": "YSP",
   "Marco Island, FL, USA": "MRK",
   "Mardin, Turkey - Mardin Airport": "MQM",
   "Margate, South Africa - Margate Airport": "MGH",
   "Slivnica/Orehova Vas, Slovenia - Maribor Airport": "MBX",
   "Mariehamn, Aland Island, Finland": "MHQ",
   "Maringa, Brazil - Maringa Airport": "MGF",
   "Marion, IL, USA": "MWA",
   "Marquette, MI, USA Marquette County Airport": "MQT",
   "Marrakech, Morocco Menara": "RAK",
   "Marseille, France MarseilleProvence": "MRS",
   "Marsh Harbour, Bahamas": "MHH",
   "Marsa Alam, Egypt - Marsa Alam Airport": "RMF",
   "Marsa Brega, Libya": "LMQ",
   "Martha's Vineyard, MA, USA": "MVY",
   "Marudi, Malaysia - Marudi Airport": "MUR",
   "Maseru, Lesotho Maseru": "MSU",
   "Mashad, Iran - Mashad Airport": "MHD",
   "Mason City, IA, USA Mason City Municipal Airport": "MCW",
   "Massena, NY, USA": "MSS",
   "Matamoros, Tamaulipas, Mexico Servando Canales": "MAM",
   "Mataram, Indonesia Selaparang": "AMI",
   "Matsumoto, Japan - Matsumoto Airport": "MMJ",
   "Matsuyama, Japan Matsuyama": "MYJ",
   "Maturin, Venezuela": "MUN",
   "Maun, Botswana": "MUB",
   "Mauritius, Mauritius Plaisance": "MRU",
   "Maxville, Ontario, Canada Maxville / Via Rail Service": "XID",
   "Mayaguana, Bahamas - Mayaguana Airport": "MYG",
   "Mayaguez, PR, USA El Maui": "MAZ",
   "Mazatlan, Sinaloa, Mexico Buelna": "MZT",
   "Mc Allen/Mission, TX, USA": "MFE",
   "Mc Cook, NE, USA - Municipal": "MCK",
   "Mc Grath, AK, USA - Mc Grath": "MCG",
   "Medan, Indonesia - Polonia": "MES",
   "Medellin, Colombia - Enrique Olaya Herrera": "EOH",
   "Medellin, Colombia - Jose Maria Cordova/Metropolitan Area": "MDE",
   "Medford, OR, USA - Medford/Jackson County Airport": "MFR",
   "Medicine Hat, Alberta, Canada - Medicine Hat Airport": "YXH",
   "Meghauli, Nepal Meghauli": "MEY",
   "Mehamn, Norway - Mehamn Airport": "MEH",
   "Meixian, China - Meixian": "MXZ",
   "Mekane Selam, Ethiopia - Mekane Selam Airport": "MKS",
   "Mekoryuk, Alaska, USA - Mekoryuk Airport": "MYU",
   "Melbourne, FL, USA Melbourne International Airport": "MLB",
   "Melbourne, Victoria, Australia - Tullamarine": "MEL",
   "Melilla, Spain - Melilla Airport": "MLN",
   "Melville, Saskatchewan, Canada - Melville / Via Rail Service": "XEK",
   "Memanbetsu, Japan": "MMB",
   "Memphis, TN, USA Memphis International Airport": "MEM",
   "Mendoza, Mendoza, Argentina - El Plumerillo": "MDZ",
   "Menominee, MI, USA - Twin County Airport": "MNM",
   "Menorca, Spain - Aerop De Menorca": "MAH",
   "Merced, California - Merced Airport": "MCE",
   "Merida, Venezuela - Alberto Carnevalli": "MRD",
   "Merida, Yucatan, Mexico - Merida Internationl": "MID",
   "Meridian, MS, USA Key Field": "MEI",
   "Merimbula, Australia - Merimbula Airport": "MIM",
   "Williams Gateway Airport - Mesa, Arizona, USA": "AZA",
   "Metz/Nancy, France Frescaty": "ETZ",
   "Mexicali, Baja California, Mexico Rodolfo Sanchez Taboada": "MXL",
   "Mexico City, Distrito Federal, Mexico Juarez Intl Airport": "MEX",
   "Miami, FL, USA Miami International Airport": "MIA",
   "Miami, FL, USA Miami Public Seaplane Base": "MPB",
   "Miami, FL, USA Opa Locka": "OPF",
   "Midland/Odessa, TX, USA Midland Intl Airport": "MAF",
   "Mikake Jima, Japan - Mikake Jima Airport": "MYE",
   "Mikonos, Greece Mikonos": "JMK",
   "Milan, Italy Linate": "LIN",
   "Milan, Italy Malpensa": "MXP",
   "Milan, Italy Orio Al Serio": "BGY",
   "Mildura, Victoria, Australia Mildura": "MQL",
   "Miles City, MT, USA Miles City": "MLS",
   "Milford Sound, New Zealand": "MFN",
   "Millinocket, Maine, USA - Millinocket airport": "MLT",
   "Milos, Greece Milos": "MLO",
   "Milwaukee, WI, USA General Mitchell Field": "MKE",
   "Minatitlan, Mexico - Minatitlan Airport": "MTT",
   "Minneapolis, MN, USA Minneapolis/St Paul Intl Airport": "MSP",
   "Minot, ND, USA Minot International Airport": "MOT",
   "Min Vody, Russia - Min Vody Airport": "MRV",
   "Minsk, Belarus Minsk": "MSQ",
   "Miri, Sarawak, Malaysia Miri": "MYY",
   "Misawa, Japan": "MSJ",
   "Miskolc, Hungary - Miskolc Airport": "MCQ",
   "Missoula, MT, USA Missoula International": "MSO",
   "Misurata, Libya": "MRA",
   "Miyazaki, Japan Miyazaki": "KMI",
   "Miyako Jima, Japan - Miyako Jima Airport": "MMY",
   "Mizan Teferi, Ethiopia - Mizan Teferi Airport": "MTF",
   "Mmabatho, South Africa - Mmabatho Airport": "MBD",
   "Mo I Rana, Norway Rossvoll": "MQN",
   "Mobile, AL, USA Mobile Municipal": "MOB",
   "Modesto, CA, USA Harry Sham Feild": "MOD",
   "Moenchengladbach, Germany - Moenchengladbach Airport": "MGL",
   "Mogadishu, Somalia": "MGQ",
   "Moheli, Comoros": "NWA",
   "Mohenjodaro, Pakistan - Mohenjodaro Airport": "MJD",
   "Mokpo, Republic of Korea - Mokpo Airport": "MPK",
   "Molde, Norway Aro": "MOL",
   "Moline, IL, USA Quad City Airport": "MLI",
   "Mombasa, Kenya Moi International": "MBA",
   "Monastir, Tunisia Skanes": "MIR",
   "Monbetsu, Japan - Monbetsu Airport": "MBE",
   "Monclova, Coahuila, Mexico Monclova Airport": "LOV",
   "Moncton, New Brunswick, Canada - Greater Moncton International Airport": "YQM",
   "Monroe, LA, USA": "MLU",
   "Monrovia, Liberia - Roberts International Airport": "ROB",
   "Monrovia, Liberia - Spriggs Payne Airport": "MLW",
   "Mont Joli, Quebec, Canada": "YYY",
   "Monte Carlo, Monaco Hel De Monte Carlo": "MCM",
   "Monte Dourado, Brazil - Monte Dourado Airport": "MEU",
   "Montego Bay, Jamaica Sangster": "MBJ",
   "Monterey / Carmel, CA, USA Monterey Peninsula Airport": "MRY",
   "Monterrey, Nuevo Leon, Mexico Escobedo": "MTY",
   "Montes Claros, Brazil - Montes Claros Airport": "MOC",
   "Montevideo, Uruguay Carrasco": "MVD",
   "Montgomery, AL, USA Dannelly Field": "MGM",
   "Montpellier, France Frejorgues": "MPL",
   "Montreal, QC (Quebec), Canada": "YMQ",
   "Montreal - Mirabel, Quebec, Canada": "YMX",
   "Montreal - Dorval, Quebec, Canada - Montreal?Pierre Elliott Trudeau International Airport": "YUL",
   "Montreal, Canada - St. Hubert Airport": "YHU",
   "Montrose, CO, USA Montrose County Airport": "MTJ",
   "Montserrat, Montserrat - Blackburne": "MNI",
   "Moorea Island, French Polynesia - Temae Airport": "MOZ",
   "Moosonee, Ontario, Canada - Moosonee": "YMO",
   "Moree, Australia - Moree Airport": "MRZ",
   "Morelia, Michoacan, Mexico Municipal": "MLM",
   "Morgantown, WV, USA Morgantown Municipal Airport": "MGW",
   "Morioka, Japan Hanamaki": "HNA",
   "Mornington, Queensland, Australia Mornington Is": "ONG",
   "Moron, Khovsgol, Mongolia - Moron Airport": "MXV",
   "Moroni (Hahaya), Comoros": "HAH",
   "Moroni (Hahaya/Iconi)Comoros": "YVA",
   "Morristown, NJ, USA Morristown": "MMU",
   "Moruya, New South Wales, Australia Moruya": "MYA",
   "Moscow, Russia": "MOW",
   "Moscow, Russia - Domodedovo": "DME",
   "Moscow, Russia - Sheremetyevo": "SVO",
   "Moscow, Russia - Vnukovo": "VKO",
   "Moses Lake, Washington, USA - Grant County Airport": "MWH",
   "Wausau, WI, USA Central Wisconsin Airport": "CWA",
   "Mosjoen, Norway - Kjaerstad Airport": "MJF",
   "Mount Gambier, Australia - Mt Gambier Airport": "MGB",
   "Mount Hagen, Papua New Guinea - Kagamuga Airport": "HGU",
   "Mount Holly, NJ, USA Mt Holly": "LLY",
   "Mount Hotham, Australia - Mt Hotham Airport": "MHU",
   "Mount Isa, Australia - Mt Isa Airport": "ISA",
   "Mount Pleasant, Falkland Islands (Islas Malvinas) - Mounr Pleasant Airport": "MPN",
   "Mount Tom Price, Australia - Mt Tom Price Airport": "TPR",
   "Mount Vernon, IL, USA Mount Vernon Outland Airport": "MVN",
   "Mountain Home, AR, USA": "WMH",
   "Mpacha, Namibia": "MPA",
   "Muang Xay, Laos - Oudomsay Airport": "ODY",
   "Mudanjiang, China - Mudanjiang": "MDG",
   "Muenster, Germany Muenster": "FMO",
   "Mukah, Sarawak, Malaysia": "MKM",
   "Mulhouse, France - Basel-Mulhouse Euro Airport": "MLH",
   "Multan, Pakistan - Multan Airport": "MUX",
   "Mulu, Malaysia Mulu Airport": "MZV",
   "Muncie, IN, USA Delaware County Airport": "MIE",
   "Munich, Germany Franz Josef Strauss": "MUC",
   "Munich, Germany - Neubiberg Air Base Airport": "MIG",
   "Murcia, Spain San Javier": "MJV",
   "Murmansk, Russia Murmansk": "MMK",
   "Murzuq (Marzuq), Libya": "QMQ",
   "Mus, Turkey - Mus Airport": "MSR",
   "Muscat, Oman Seeb": "MCT",
   "Muscle Shoals / Florence / Sheffield, AL, USA Muscle Shoals": "MSL",
   "Muskegon, MI, USA Muskegon County Intl Airport": "MKG",
   "Mustique, Saint Vincent and The Grenadines - Mustique Airport": "MQS",
   "Mwanza, Tanzania - Mwanza Airport": "MWZ",
   "Myrtle Beach, SC, USA": "MYR",
   "Mytilene, Greece Mytilene": "MJT",
   "N Djamena, Chad N'djamena": "NDJ",
   "Nador, Morocco - Nador Airport": "NDR",
   "Naga, Philippines - Naga Airport": "WNP",
   "Nagasaki, Japan Nagasaki": "NGS",
   "Nagoya, Japan - Chubu Centrair International Airport": "NGO",
   "Nagoya/Komaki, Japan - Nagoya Airfield": "NKM",
   "Nagpur, India Sonegaon": "NAG",
   "Naha, Indonesia": "NAH",
   "Nairobi, Kenya Jomo Kenyatta Internatonal": "NBO",
   "Nairobi, Kenya Wilson Arpt": "WIL",
   "Nakashibetsu, Japan - Nakashibetsu Airport": "SHB",
   "Nakhon Ratchasima, Thailand Nakhon Ratchasima": "NAK",
   "Nakhon Si Thammarat, Thailand - Nakhon Si Thammarat Airport": "NST",
   "Namangan, Uzbekistan - Namangan Airport": "NMA",
   "NampulaMozambique": "APL",
   "Nanaimo, British Columbia, Canada Cassidy Airport": "YCD",
   "Nanchang, China - Nanchang": "KHN",
   "Nanisivik, Canada - Nanisivik Airport": "YSR",
   "Nanjing, China": "NKG",
   "Nanyang, China - Nanyang": "NNY",
   "Nanki Shirahama, Japan - Nanki-Shirahama Airport": "SHM",
   "Nanning, China": "NNG",
   "Nantes, France NantesChateau Bougon": "NTE",
   "Nantong, China - Nantong": "NTG",
   "Nantucket, MA, USA": "ACK",
   "Napakiak, AK, USA Napakiak": "WNA",
   "Napier-Hastings, New Zealand - Napier-Hawkes Bay Airport": "NPE",
   "Naples, FL, USA": "APF",
   "Naples, Italy Capodichino": "NAP",
   "Narrabri, Australia - Narrabri Airport": "NAA",
   "Narrandera, Australia - Narrandera Airport": "NRA",
   "Narsarsuaq, Greenland Narssarssuaq": "UAK",
   "Narssaq, Greenland": "JNS",
   "Naryan-Mar, Russia - Naryan-Mar Airport": "NNM",
   "Nashville, TN, USA Nashville Metropolitan Airport": "BNA",
   "Nassau, Bahamas Nassau International Airport": "NAS",
   "Nassau, Bahamas Paradise Island": "PID",
   "Natal, Rio Grande Do Norte, Brazil Agusto Severo": "NAT",
   "Natashquan, Canada - Natashquan Airport": "YNA",
   "Nauru, Nauru": "INU",
   "Navegantes, Santa Catarina, Brazil": "NVT",
   "Naxos, Cyclades Islands, Greece Naxos Airport": "JNX",
   "Ndola, Zambia Ndola": "NLA",
   "Necochea, Buenos Aires, Argentina Necochea": "NEC",
   "Nejran, Saudi Arabia - Nejran Airport": "EAM",
   "Nelson, New Zealand Nelson": "NSN",
   "Nelson Lagoon, Alaska, USA - Nelson Lagoon Airport": "NLG",
   "Nelspruit, South Africa": "NLP",
   "Nelspruit, South Africa - Kruger Mpumalanga Airport": "MQP",
   "Neryungri, Russia - Neryungri Airport": "NER",
   "Nepalganj, Nepal Nepalganj": "KEP",
   "Neuquen, Argentina - Airport": "NQN",
   "Nevis, Leeward Islands, Saint Kitts And Nevis": "NEV",
   "New Bedford/Fall River, MA, USA New Bedford Municipal": "EWB",
   "New Bern, NC, USA SimmonsNott Airport": "EWN",
   "New Carlisle, Quebec, Canada New Carlisle / Via Rail Service": "XEL",
   "New Haven, CT, USA Tweed New Haven": "HVN",
   "New Orleans, LA, USA - Louis Armstrong New Orleans International Airport (Moisant International Airport)": "MSY",
   "New Plymouth, New Zealand New Plymouth": "NPL",
   "New Richmond, Quebec, Canada New Richmond / Via Rail Service": "XEM",
   "New Stuyahok, Alaska, USA - New Stuyahok Airport": "KNW",
   "New York City, NY, USA": "JRA",
   "New York, NY, USA East 34Th Street Heliport": "TSS",
   "New York, NY, USA John F Kennedy Intl Airport": "JFK",
   "New York, NY, USA Laguardia": "LGA",
   "Newark, NJ, USA Newark International Airport": "EWR",
   "Newburgh/Poughkeepsie, NY, USA Stewart": "SWF",
   "Newcastle, England, United Kingdom International": "NCL",
   "Newcastle, New Brunswick, Canada Newcastle / Via Rail Service": "XEY",
   "Newcastle, New South Wales, Australia Belmont": "BEO",
   "Newcastle, New South Wales, Australia Williamtown": "NTL",
   "Newman, Western Australia, Australia Newman": "ZNE",
   "Newport News/Williamsburg/Hampton, VA, USA Patrick Henry Intl": "PHF",
   "Newquay, England, United Kingdom Newquay Civil": "NQY",
   "Newtok, Alaska, USA - Newtok Airport": "WWT",
   "Nha-Trang, Vietnam - Nha-Trang Airport": "NHA",
   "Niagara Falls, Ontario, Canada": "XLV",
   "Niamey, Niger - Niamey Airport": "NIM",
   "Nice, France Cote D'azur": "NCE",
   "Nightmute, Alaska, USA - Nightmute Airport": "NME",
   "Niigata, Japan - Niigata Airport": "KIJ",
   "Nikolski, Alaska, USA - Nikolski Airport": "IKO",
   "Nimes, France - Nimes Airport": "FNI",
   "Ningbo, China - Ningbo": "NGB",
   "Nioro, Mali - Nioro Airport": "NIX",
   "Niuafo'Ou, Tonga - Niuafo-ou Airport": "NFO",
   "Niuatoputapu, Tonga - Niuatoputapu Airport": "NTT",
   "Niue, Niue - Niue Airport": "IUE",
   "Nizhnevartovsk, Russia Nizhnevartovsk": "NJC",
   "Nizhniy Novgorod, Russia Nizhniy": "GOJ",
   "Nome, AK, USA": "OME",
   "Norfolk, NE, USA Karl Stefan Memorial Airport": "OFK",
   "Norfolk, VA, USA Norfolk International Airport": "ORF",
   "Norfolk Island, Australia - Norfolk Island Airport": "NLK",
   "Norilsk, Russia - Norilsk Airport": "NSK",
   "Norrkoping, Sweden - Kungsangen Airport": "NRK",
   "North Bay, Ontario, Canada Jack Garland Airport": "YYB",
   "North Bend, OR, USA": "OTH",
   "North Caicos, Turks And Caicos Islands": "NCA",
   "North Eleuthera, Bahamas": "ELH",
   "North Platte, NE, USA Lee Bird Field": "LBF",
   "Norwich, England, United Kingdom Norwich": "NWI",
   "Norwood, MA, USA Memorial Code: Owd": "OWD",
   "Nouakchott, Mauritania Nouakchott": "NKC",
   "Noumea, New Caledonia - Magenta Airport": "GEA",
   "Noumea, New Caledonia - Tontouta": "NOU",
   "Novosibirsk, Russia Tolmachevo": "OVB",
   "Novy Urengoy, Russia - Novy Urengoy Airport": "NUX",
   "Nuevo Laredo, Tamaulipas, Mexico": "NLD",
   "Nuku Alofa/Tongatapu, Tonga - International": "TBU",
   "Nukus, Uzbekistan - Nukus Airport": "NCU",
   "Nuremberg, Germany Nuremberg": "NUE",
   "Nuuk, Greenland": "GOH",
   "Nyaung-U, Myanmar (Burma) - Nyaung-U Airport": "NYU",
   "Oak Harbor, WA, USA": "ODW",
   "Oakland, CA, USA Metropolitan Oakland Intl Apt": "OAK",
   "Oakville, Ontario, Canada Oakville / Via Rail Service": "XOK",
   "Oaxaca, Oaxaca, Mexico Xoxocotlan": "OAX",
   "Obihiro, Japan Obihiro": "OBO",
   "Ochos Rios, Jamaica - Ochos Rios Airport": "OCJ",
   "Odate Noshiro, Japan - Odate Noshiro Airport": "ONJ",
   "Odense, Denmark Odense": "ODE",
   "Odessa, Ukraine Central": "ODS",
   "Ogdensburg, NY, USA": "OGS",
   "Ohrid, Macedonia Ohrid": "OHD",
   "Oita, Japan Oita": "OIT",
   "Valparaiso, FL, USA - Fort Walton Beach": "VPS",
   "Okayama, Japan Okayama": "OKJ",
   "Okinawa, Ryukyu Islands, Japan Naha Field": "OKA",
   "Oklahoma City, OK, USA Will Rogers World Airport": "OKC",
   "Olgii, Bayan Olgii, Mongolia - Olgii Airport": "ULG",
   "Olympia, WA, USA": "OLM",
   "Olympic Dam, Australia - Olympic Dam Airport": "OLP",
   "Omaha, NE, USA Eppley Airfield": "OMA",
   "Omsk, Russia - Omsk Airport": "OMS",
   "Ondorkhaan, Khentii, Mongolia - Ondorkhaan Airport": "UNR",
   "Ontario, CA, USA Ontario International": "ONT",
   "Oradea, Romania Oradea": "OMR",
   "Oran, Algeria Es Senia": "ORN",
   "Orange, New South Wales, Australia Springhill": "OAG",
   "Orebro, Sweden Orebro": "ORB",
   "Orlando, FL, USA Herndon": "ORL",
   "Orlando, FL, USA Orlando International Airport": "MCO",
   "Ornskoldsvik, Sweden - Ornskoldsvik Airport": "OER",
   "Osaka, Japan Itami International Was Osaka": "ITM",
   "Osaka, Japan Kansai International": "KIX",
   "Osaka, Japan Osaka International": "OSA",
   "Oshawa, Ontario, Canada": "YOO",
   "Oshima, Japan - Oshima Airport": "OIM",
   "Oshkosh, WI, USA Wittman Field": "OSH",
   "Oslo, Norway": "OSL",
   "Osorno, Chile - Osorno Airport": "ZOS",
   "Ostersund, Sweden Froesoe": "OSD",
   "Ostrava, Czech Republic - Ostrava-Mosnov Airport": "OSR",
   "Ottawa, Ontario, Canada Ottawa International": "YOW",
   "Ottumwa, IA, USA Ottumwa Industrial Airport": "OTM",
   "Ouagadougou, Burkina Faso Ouagadougou": "OUA",
   "Ouarzazate, Morocco Ouarzazate": "OZZ",
   "Oujda, Morocco - Oujda-Les Angades Airport": "OUD",
   "Oulu, Finland Oulu": "OUL",
   "Ovda, Israel": "VDA",
   "Owensboro, KY, USA": "OWB",
   "Oxnard / Ventura, CA, USA Oxnard Airport": "OXR",
   "Padang, Indonesia Tabing": "PDG",
   "Paderborn, Germany Paderborn": "PAD",
   "Paducah, KY, USA": "PAH",
   "Page, AZ, USA": "PGA",
   "Pago Pago, American Samoa International": "PPG",
   "Pakse, Laos - Pakse International Airport": "PKZ",
   "Pakuashipi, Canada - Pakuashipi Airport": "YIF",
   "Palanga, Lithuania Palanga": "PLQ",
   "Palembang, Indonesia Sultan Mahmud Badaruddin Ii": "PLM",
   "Palermo, Sicily, Italy Punta Raisi": "PMO",
   "West Palm Beach, FL, USA Palm Beach International Airport": "PBI",
   "Palm Springs, CA, USA Palm Springs Municipal": "PSP",
   "Palma Mallorca, Mallorca Island, Spain Palma Mallorca": "PMI",
   "Palmas, Brazil - Palmas Airport": "PMW",
   "Palmdale, CA, USA Air Force 42": "PMD",
   "Palmerston North, New Zealand Palmerstown North": "PMR",
   "Santa Clara County, California, United States - Palo Alto of Santa Clara County Airport": "PAO",
   "Palu, Indonesia Mutiara": "PLW",
   "Pamplona, Spain Pamplona Noain": "PNA",
   "Panama City, FL, USA - Bay County Airport": "PFN",
   "Panama City, Panama - Paitilla Airport": "PAC",
   "Panama City, Panama Tocumen International Airport": "PTY",
   "Tyndall Air Force Base - Panama City, Florida, USA - Tyndall AFB-Panama City Airport": "PAM",
   "Pangnirtung, Canada - Pangnirtung Airport": "YXP",
   "Panjgur, Pakistan": "PJG",
   "Pantelleria, Italy Pantelleria": "PNL",
   "Papeete, French Polynesia Intl TahitiFaaa": "PPT",
   "Paphos, Cyprus International": "PFO",
   "Paraburdoo, Western Australia, Australia Paraburdoo": "PBO",
   "Paramaribo, Suriname Zanderij Intl": "PBM",
   "Parent, Quebec, Canada Parent / Via Rail Service": "XFE",
   "Paris, France": "PAR",
   "Paris, France Charles De Gaulle": "CDG",
   "Paris, France Issy Les Moulineaux": "JDP",
   "Paris, France - Le Bourget Airport": "LBG",
   "Paris, France Orly": "ORY",
   "Parkersburg / Marietta, WV, USA Wood County": "PKB",
   "Parkes, New South Wales, Australia Parkes": "PKE",
   "Parksville, British Columbia, Canada Parksville / Via Rail Service": "XPB",
   "Parma, Italy - Parma Airport": "PMF",
   "Paros, Greece Paros Community": "PAS",
   "Pasco, Washington, USA - Pasco Airport": "PSC",
   "Pasighat, India Pasighat": "IXT",
   "Pasni, Pakistan - Pasni Airport": "PSI",
   "Passo Fundo, Brazil - Passo Fundo Airport": "PFB",
   "Pasto, Colombia Cano": "PSO",
   "Pathankot, India Pathankot": "IXP",
   "Patna, India Patna": "PAT",
   "Pau, France Pau-Uzein- Pyrenees Airport": "PUF",
   "Peace River, Alberta, Canada Peace River": "YPE",
   "Pekanbaru, Indonesia Simpang Tiga": "PKU",
   "Pellston, MI, USA Pellston Regional Airport": "PLN",
   "Pelly Bay, Canada - Townsite Airport": "YBB",
   "Pembroke, Ontario, Canada Pem And Area Apt": "YTA",
   "Penang, Malaysia Penang International": "PEN",
   "Pender Harbor, Canada - Pender Harbor Airport": "YPT",
   "Pendleton, OR, USA": "PDT",
   "Pensacola, FL, USA": "PNS",
   "Penticton, British Columbia, Canada": "YYF",
   "Penzance, England, United Kingdom Penzance": "PZE",
   "Peoria, IL, USA Greater Peoria Airport": "PIA",
   "Perce, Quebec, Canada Perce / Via Rail Service": "XFG",
   "Pereira, Colombia Matecana": "PEI",
   "Perigueux, France": "PGX",
   "Perm, Russia Perm": "PEE",
   "Perryville, Alaska, USA - Perryville Airport": "KPV",
   "Perpignan, France Llabanere": "PGF",
   "Perth, Western Australia, Australia Perth": "PER",
   "Perugia, Italy Na": "PEG",
   "Pescara, Italy Liberi": "PSR",
   "Peshawar, Pakistan Peshawar": "PEW",
   "Petersburg, AK, USA Municipal": "PSG",
   "Petrolina, Brazil - Petrolina International Airport": "PNZ",
   "Petropavlovsk, Russia Petropavlovsk Kamchatsky Airport": "PKC",
   "Petrozavodsk, Russia Petrozavodsk-Kamchatsky Airport": "PES",
   "Phalaborwa, South Africa - Phalaborwa Airport": "PHW",
   "Philadelphia, PA, USA Philadelphia International Airport": "PHL",
   "Phitsanulok, Thailand": "PHS",
   "Phnom Penh, Cambodia Pochentong": "PNH",
   "Phoenix, AZ, USA Sky Harbor International Airport": "PHX",
   "Phonsavan, Laos - Xieng Khouang Airport": "XKH",
   "Phuket, Thailand Phuket": "HKT",
   "Phuquoc, Vietnam - Phuquoc Airport": "PQC",
   "Piedras Negras, Mexico - Piedras Negras Airport": "PDS",
   "Pierre, SD, USA Pierre Municipal Airport": "PIR",
   "Pietersburg, South Africa": "PTG",
   "Pietermaritzburg, South Africa - Pietermaritzburg Airport": "PZB",
   "Pikwitonei, Manitoba, Canada": "PIW",
   "Pilot Point, Alaska, USA - Pilot Point Airport": "PIP",
   "Pilot Point, Alaska, USA - Ugashik Bay Airport": "UGB",
   "Pisa, Italy G Galilei": "PSA",
   "Pittsburgh/Allegheny County, PA, USA": "AGC",
   "Pittsburgh, PA, USA Greater Pit Intnl Airport": "PIT",
   "Pituffik, Greenland Thule Airport": "THU",
   "Piura, Peru - Piura Airport": "PIU",
   "Platinum, Alaska, USA - Platinum Airport": "PTU",
   "Plattsburgh, NY, USA": "PLB",
   "Pleiku, Vietnam - Pleiku Airport": "PXU",
   "Plymouth, England, United Kingdom Plymouth Airport": "PLH",
   "Pocatello, ID, USA": "PIH",
   "Podgorica, Yugoslavia Golubovci": "TGD",
   "Pohang, South Korea Na": "KPO",
   "Pohnpei, Caroline Islands, Micronesia Pohnpei International": "PNI",
   "Point Hope, AK, USA Point Hope": "PHO",
   "Pointe A Pitre, Guadeloupe Le Raizet": "PTP",
   "Pointe Noire, Congo Pointe Noire": "PNR",
   "PointeAuxTrembles, Quebec, Canada Pointe Aux Trembles / Via Rail Service": "XPX",
   "Poitiers, France - Poitiers-Biard Airport": "PIS",
   "Pokhara, Nepal Pokhara": "PKR",
   "Ponca City, OK, USA": "PNC",
   "Ponce, PR, USA Mercedita": "PSE",
   "Pond Inlet, Canada - Pond Inlet Airport": "YIO",
   "Ponta Delgada, Azores Islands, Portugal Nordela": "PDL",
   "Pontianak, Indonesia Supadio": "PNK",
   "Poona, India Lohegaon Poona": "PNQ",
   "Tatry/Poprad, Slovakia Tatry/Poprad": "TAT",
   "Porbandar, India - Porbandar Airport": "PBD",
   "Pori, Finland Pori": "POR",
   "Porlamar, Venezuela Gral Santiago Marino": "PMV",
   "Port Angeles, WA, USA Wm Fairchild Intl Airport": "CLM",
   "Port Au Prince, Haiti Mais Gate": "PAP",
   "Port Blair, India Port Blair": "IXZ",
   "Port Elizabeth, South Africa Hf Verwoerd": "PLZ",
   "Port Elizabeth, Saint Vincent and the Grenadines - Port Elizabeth Airport": "BQU",
   "Port Gentil, Gabon Port Gentil": "POG",
   "Port Harcourt, Nigeria - Port Harcourt Airport": "PHC",
   "Port Hardy, British Columbia, Canada Port Hardy Airport": "YZT",
   "Port Hedland, Western Australia, Australia - Pt Hedlan": "PHE",
   "Port Heiden, Alaska, USA - Port Heiden Airport": "PTH",
   "Port Lincoln, South Australia, Australia - Pt Lincoln": "PLO",
   "Port Macquarie, New South Wales, Australia - Pt Macquarie": "PQQ",
   "Port Mcneil, Canada - Port Mcneil Airport": "YMP",
   "Port Moller, Alaska, USA - Port Moller Airport": "PML",
   "Port Moresby, Papua New Guinea Jackson": "POM",
   "Port Of Spain, Trinidad, Trinidad And Tobago Piarco International Airport": "POS",
   "Port Vila, Vanuatu Bauerfield": "VLI",
   "Portage Creek, Alaska, USA - Portage Creek Airport": "PCA",
   "Portland, Australia - Portland Airport": "PTJ",
   "Portland, ME, USA Portland International Jetport": "PWM",
   "Portland, OR, USA Portland International Airport": "PDX",
   "Porto, Portugal Porto": "OPO",
   "Porto Alegre, Rio Grande Do Sul, Brazil Salgado Filho": "POA",
   "Porto Santo, Madeira Islands, Portugal Porto Santo": "PXO",
   "Porto Seguro, Bahia, Brazil Porto Seguro": "BPS",
   "Porto Velho, Brazil - Belmonte Airport": "PVH",
   "Portsmouth, NH, USA Pease Intl Tradeport": "PSM",
   "Posadas, Argentina - Posadas Airport": "PSS",
   "Poughkeepsie, NY, USA Dutchess County": "POU",
   "Povungnituk, Canada - Poungnituk Airport": "YPX",
   "Powell River, British Columbia, Canada": "YPW",
   "Poza Rica, Veracruz, Mexico": "PAZ",
   "Poznan, Poland Lawica": "POZ",
   "Prague, Czech Republic Ruzyne": "PRG",
   "Praia, Cape Verde - Mendes Airport": "RAI",
   "Praslin Island, Seychelles": "PRI",
   "Prescott, AZ, USA": "PRC",
   "Presque Isle, ME, USA": "PQI",
   "Prince Albert, Canada - Prince Albert Airport": "YPA",
   "Prince George, British Columbia, Canada Prince George B C": "YXS",
   "Prince Rupert /Princ Rupert, British Columbia, Canada Digby Island": "YPR",
   "Princeton, NJ, USA Princeton Municipal": "PCT",
   "Pristina, Kosovo, Serbia - Pristina Airport": "PRN",
   "Procida Harbour, Italy - Procida Harbour Airport": "ZJJ",
   "Proserpine, Australia - Proserpine Airport": "PPP",
   "Providence, RI, USA Tf Green State Airport": "PVD",
   "Provincetown, MA, USA Provincetown Municipal Airport": "PVC",
   "Provo, UT, USA Provo": "PVU",
   "Prudhoe Bay, Alaska - Deadhorse Airport": "SCC",
   "Pucallpa, Peru Captain Rolden": "PCL",
   "Puebla, Puebla, Mexico": "PBC",
   "Pueblo, CO, USA Pueblo Memorial Airport": "PUB",
   "Puerto Cabezas, Nicaragua Puerto Cabezas": "PUZ",
   "Puerto Escondido, Oaxaca, Mexico": "PXM",
   "Puerto Maldonado, Peru - Puerto Maldonado Airport": "PEM",
   "Puerto Montt, Chile Tepual": "PMC",
   "Puerto Ordaz, Venezuela Puerto Ordaz": "PZO",
   "Puerto Plata, Dominican Republic La Union": "POP",
   "Puerto Princesa, Philippines Puerto Princesa": "PPS",
   "Puerto Suarez, Bolivia": "PSZ",
   "Puerto Vallarta, Jalisco, Mexico Gustavo Diaz Ordaz": "PVR",
   "Pula, Croatia (Hrvatska) Pula": "PUY",
   "Pullman, WA, USA Pullman": "PUW",
   "Punta Arenas, Chile Presidente Ibanez": "PUQ",
   "Punta Cana, Dominican Republic": "PUJ",
   "Punta del Este, Uruguay - Punta Del Este Airport": "PDP",
   "Pusan, South Korea Kimhae": "PUS",
   "Qaisumah, Saudi Arabia - Qaisumah Airport": "AQI",
   "Qiemo, China - Qiemo": "IQM",
   "Qingdao, China - Qingdao Airport": "TAO",
   "Qinhuangdao, China - Qinhuangdao": "SHP",
   "Qiqihar, China - Qiqihar": "NDG",
   "Qualicum, British Columbia, Canada": "XQU",
   "Quaqtaq, Quebec, Canada - Quaqtaq Airport": "YQC",
   "Quebec, Quebec, Canada Sainte Foy Airport": "YQB",
   "Queenstown, New Zealand Frankton": "ZQN",
   "Quelimane, Mozambique": "UEL",
   "Quepos, Costa Rica": "XQP",
   "Queretaro, Queretaro, Mexico": "QRO",
   "Quesnel, British Columbia, Canada": "YQZ",
   "Quetta, Pakistan": "UET",
   "Quibdo, Colombia": "UIB",
   "Quimper, France Pluguffan": "UIP",
   "Quincy, IL, USA Baldwin Field": "UIN",
   "Quinhagak, Alaska, USA - Quinhagak Airport": "KWN",
   "Quinhon, Vietnam - Quinhon Airport": "UIH",
   "Quito, Ecuador Mariscal": "UIO",
   "Rabat, Morocco Sale": "RBA",
   "Rabaul, Papua New Guinea Lakunai": "RAB",
   "Rabil, Cape Verde - Rabil Airport": "BVC",
   "Rachgia, Vietnam - Rachgia Airport": "VKG",
   "Rae Bareli, Uttar Pradesh, India - Raebareli Fursatganj Airfield": "BEK",
   "Rafha, Saudi Arabia - Rafha Airport": "RAH",
   "Rahim Yar Khan, Pakistan - Rahim Yar Khan Airport": "RYK",
   "Raiatea, French Polynesia - Raiatea-Uturoa Airport": "RFP",
   "Rainbow Lake, Alberta, Canada Rainbow Lake": "YOP",
   "Raipur, India": "RPR",
   "Rajkot, India Rajkot": "RAJ",
   "Raleigh/Durham, NC, USA Raleigh Durham International Arpt": "RDU",
   "Ranchi, India Ranchi": "IXR",
   "Rankin Inlet, Canada - Rankin Inlet Airport": "YRT",
   "Rapid City, SD, USA Rapid City Regional Airport": "RAP",
   "Rarotonga, Cook Islands Rarotonga": "RAR",
   "Ras Al Khaimah, United Arab Emirates - Ras Al Khaimah Airport": "RKT",
   "Rasht, Iran - Rasht Airport": "RAS",
   "Reading, PA, USA Municipal / Spaatz Field": "RDG",
   "Recife, Pernambuco, Brazil Guararapes International": "REC",
   "Red Lake, Ontario, Canada - Red Lake-Federal Airport": "YRL",
   "Redding, CA, USA Redding Municipal Airport": "RDD",
   "Reggio Calabria, Italy Tito Menniti": "REG",
   "Regina, Saskatchewan, Canada Regina International": "YQR",
   "Rennes, France St Jacques": "RNS",
   "Tahoe/Reno, NV, USA - Reno-Tahoe International Airport (formerly Reno-Cannon International Apt)": "RNO",
   "Resistencia, Chaco, Argentina": "RES",
   "Resolute, Northwest Territories, Canada Resolute Bay": "YRB",
   "Reus, Spain Reus": "REU",
   "Reykjavik, Iceland Keflavik": "KEF",
   "Reykjavik, Iceland - Metropolitan Area": "REK",
   "Reykjavik, Iceland Reykjavik Domestic Airport": "RKV",
   "Reynosa, Tamaulipas, Mexico General Lucio Blanco Airport": "REX",
   "Rhinelander, WI, USA Rhinelander Oneida County Airport": "RHI",
   "Rhodes, Greece Paradisi": "RHO",
   "Ribeirao Preto, Brazil - Ribeirao Preto Airport": "RAO",
   "Richards Bay, South Africa Richards Bay": "RCB",
   "Richmond, VA, USA Richmond International Airport": "RIC",
   "Riga, Latvia Riga": "RIX",
   "Rimini, Italy - Rimini Airport": "RMI",
   "Tirana (Rinas), Albania - Tirana International Airport Nene Tereza": "TIA",
   "Rio Branco, Brazil - Presidente Medici Airport": "RBR",
   "Rio De Janeiro, Rio De Janeiro, Brazil": "RIO",
   "Rio De Janeiro, Rio De Janeiro, Brazil International Airport": "GIG",
   "Rio De Janeiro, Rio De Janeiro, Brazil Santos Dumont": "SDU",
   "Rio Gallegos, Santa Cruz, Argentina Rio GallegosInternacional": "RGL",
   "Rio Grande, Tierra Del Fuego, Argentina": "RGA",
   "Rishiri, Japan - Rishiri Airport": "RIS",
   "Riverton, WY, USA Riverton Regional Airport": "RIW",
   "Riviere A Pierre, Quebec, Canada Riviere A Pierre / Via Rail Service": "XRP",
   "Riviere du Loup, Quebec, Canada - Ville de Riviere-du-Loup Airport": "YRI",
   "Riyadh, Saudi Arabia King Khaled Intl": "RUH",
   "Roanoke, VA, USA Roanoke Regional Airport": "ROA",
   "Roatan, Honduras Roatan": "RTB",
   "Roberval, Canada - Roberval Airport": "YRJ",
   "Roche Harbor, WA, USA Roche Harbor": "RCE",
   "Rochester, MN, USA Rochester Municipal": "RST",
   "Rochester, NY, USA Monroe County Airport": "ROC",
   "Rock Sound, Bahamas": "RSD",
   "Rock Springs, WY, USA Rock Springs Sweetwater Cty Arpt": "RKS",
   "Rockford, IL, USA": "ZRF",
   "Rockhampton, Australia - Rockhampton Airport": "ROK",
   "Rockland, ME, USA Rockland": "RKD",
   "Rocky Mount, NC, USA Wilson": "RWI",
   "Rodez, France - Rodez Airport": "RDZ",
   "Rodrigues Island, Mauritius Rodrigues": "RRG",
   "Roma, Queensland, Australia Roma": "RMA",
   "Rome, Italy Leonardo Da Vinci / Fiumicino": "ROM",
   "Rome, Italy Leonardo Da Vinci/Fiumicino": "FCO",
   "Ronneby, Sweden Kallinge": "RNB",
   "Rosario, Santa Fe, Argentina Fisherton": "ROS",
   "Rosh-Pina, Israel - Rosh-Pina Airport": "RPN",
   "Rostock-Laage, Germany - Rostock-Laage Airport": "RLG",
   "Rostov, Russia Rostov": "ROV",
   "Roswell, NM, USA Industrial Air Center": "ROW",
   "Rota, Northern Mariana Islands Rota": "ROP",
   "Rotorua, New Zealand - Rotorua Airport": "ROT",
   "Rotterdam, Netherlands Rotterdam": "RTM",
   "Rouen, France Rouen /Boos Airport": "URO",
   "Rouyn Noranda, Canada - Rouyn-Noranda Airport": "YUY",
   "Rovaniemi, Finland - Rovaniemi Airport": "RVN",
   "Roxas, Philippines - Roxas Airport": "RXS",
   "Ruidoso, NM, USA": "RUI",
   "Rutland, VT, USA": "RUT",
   "Rzeszow, Poland - Rzeszow Airport": "RZE",
   "Saarbruecken, Germany Ensheim": "SCN",
   "Saba Island, Netherlands Antilles": "SAB",
   "Sacramento, CA, USA Sacramento Metropolitan": "SMF",
   "Saga, Japan - Saga Airport": "HSG",
   "Saidpur, Bangladesh": "SPD",
   "St Anthony, Canada - St Anthony Airport": "YAY",
   "St Barthelemy, Guadeloupe": "SBH",
   "St Catharines, Ontario, Canada": "YCM",
   "St Cloud, MN, USA Saint Cloud": "STC",
   "St Croix Island, VI, USA Sea Plane Base": "SSB",
   "St Denis De La Reunion, Reunion Gillot": "RUN",
   "St George, Queensland, Australia St George": "SGO",
   "St George, UT, USA St George": "SGU",
   "St Georges/Grenada, Grenada Pt Saline": "GND",
   "St John, New Brunswick, Canada Turnbull Field": "YSJ",
   "St John's, Newfoundland, Canada St John's International": "YYT",
   "St Hyacinthe, Quebec, Canada Saint Hyacinthe / Via Rail Service": "XIM",
   "St Kitts, Saint Kitts And Nevis Golden Rock": "SKB",
   "St Leonard, New Brunswick, Canada St Leonard Apt": "YSL",
   "St Louis, MO, USA LambertSt Louis Internatl": "STL",
   "St Lucia, Saint Lucia Hewanorra": "UVF",
   "St Lucia, Saint Lucia Vigie Field": "SLU",
   "St Maarten, Netherlands Antilles Juliana": "SXM",
   "St Marie, Madagascar": "SMS",
   "St Martin, Netherlands Antilles Esperance": "SFG",
   "St Marys, Ontario, Canada St Marys / Via Rail Service": "XIO",
   "St Paul, MN, USA Downtown Airport": "STP",
   "St Paul Island, Alaska, USA - St Paul Island Airport": "SNP",
   "St Petersburg, Russia Pulkovo": "LED",
   "St Petersburg/Clearwater, FL, USA St Petersburg/Clearwater Intl": "PIE",
   "St Pierre, St. Pierre And Miquelon": "FSP",
   "St Thomas Island, VI, USA Seaplane Base": "SPB",
   "St Vincent, St. Vincent And The Grenadines": "SVD",
   "Saipan, Northern Mariana Islands Saipan Intl Northrn Mariana Isles": "SPN",
   "Sakon Nakhon, Thailand": "SNO",
   "Sal, Cape Verde Amilcar Cabral International": "SID",
   "Salalah, Oman - Salalah International Airport": "SLL",
   "Salamanca, Spain - Salamanca Airport": "SLM",
   "Salina, KS, USA Salina Municipal": "SLN",
   "Salina Cruz, Mexico - Salina Cruz Airport": "SCX",
   "Salisbury, MD, USA SalisburyWicomico County Arpt": "SBY",
   "Salluit, Canada - Salluit Airport": "YZG",
   "Salmon Arm, British Columbia, Canada": "YSN",
   "Salt Lake City, UT, USA Salt Lake City International Arpt": "SLC",
   "Salta, Salta, Argentina International": "SLA",
   "Saltillo, Coahuila, Mexico Saltillo": "SLW",
   "Salvador, Bahia, Brazil Dois De Julho": "SSA",
   "Salzburg, Austria Salzburg": "SZG",
   "Sam Neua, Laos - Sam Neua Airport": "NEU",
   "Samara, Russia Samara": "KUF",
   "Samarkand, Uzbekistan": "SKD",
   "Samos Island, Greece - Samos Airport": "SMI",
   "Samsun, Turkey - Samsun Airport": "SZF",
   "San Andres Island, Colombia": "ADZ",
   "San Andros, Bahamas - San Andros Airport": "SAQ",
   "San Angelo, TX, USA": "SJT",
   "San Antonio, TX, USA San Antonio International": "SAT",
   "San Antonio, Venezuela": "SVZ",
   "San Carlos, California, United States - San Carlos Airport": "SQL",
   "San Carlos De Bariloche, Rio Negro, Argentina International": "BRC",
   "San Cristobel de las Casas, Mexico - San Cristobal de las Casas Airport": "SZT",
   "San Diego, CA, USA Lindbergh International Airport": "SAN",
   "San Francisco, CA, USA San Francisco Intl Airport": "SFO",
   "San Jose, CA, USA San Jose International Airport": "SJC",
   "San Jose, Costa Rica Juan Santamaria International": "SJO",
   "San Jose, Philippines Mcguire Field": "SJI",
   "San Juan, Puerto Rico - Isla Grande Airport": "SIG",
   "San Juan, PR, USA Luis Munoz Marin International": "SJU",
   "San Juan, San Juan, Argentina": "UAQ",
   "San Luis, Argentina - San Luis Airport": "LUQ",
   "San Luis Obispo, CA, USA San Luis Obispo County Airport": "SBP",
   "San Luis Potosi, San Luis Potosi, Mexico": "SLP",
   "San Pedro Sula, Honduras La Mesa": "SAP",
   "San Pedro, Belize San Pedro": "SPR",
   "San Rafael, Argentina - San Rafael Airport": "AFA",
   "San Salvador, Bahamas": "ZSA",
   "San Salvador, El Salvador El Salvadore Intl Airport": "SAL",
   "San Sebastian, Spain Fuenterrabia": "EAS",
   "San Tome, Venezuela": "SOM",
   "Sanaa, Yemen International": "SAH",
   "Sand Point, Alaska, USA - Sand Point Airport": "SDP",
   "Sandakan, Sabah, Malaysia": "SDK",
   "Sandane, Norway": "SDN",
   "Sandefjord, Norway Torf": "TRF",
   "Sandnessjoen, Norway Stokka": "SSJ",
   "Sandspit, Canada - Sandspit Airport": "YZP",
   "Sanikiluaq, Canada - Sanikiluaq Airport": "YSK",
   "Sanliurfa, Turkey - Sanliurga Airport": "SFQ",
   "Santa Ana, CA, USA John Wayne Airport": "SNA",
   "Santa Barbara, CA, USA Santa Barbara Airport": "SBA",
   "Santa Clara, Cuba - Abel Santa Maria Airport": "SNU",
   "Santa Cruz La Palma, Canary Islands, Spain La Palma": "SPC",
   "Santa Cruz, Bolivia Viru Viru International": "VVI",
   "Santa Fe, NM, USA Santa Fe Municipal Airport": "SAF",
   "Santa Fe, Santa Fe, Argentina": "SFN",
   "Santa Maria, CA, USA Santa Maria Public Airport": "SMX",
   "Santa Marta, Colombia - Simon Bolivar Airport": "SMR",
   "Santa Rosa, CA, USA Sonoma County Airport": "STS",
   "Santa Rosa, La Pampa, Argentina": "RSA",
   "Santander, Spain Santander": "SDR",
   "Santarem, Para, Brazil - Santarem International Airport": "STM",
   "Santiago De Compostela, Spain Santiago": "SCQ",
   "Santiago Del Estero, Argentina - Sandiago Del Estero Airport": "SDE",
   "Santiago, Chile Aeropuerto Comodoro Arturo Merino Benitez": "SCL",
   "Santiago, Cuba SantiagoAntonio Maceo Cuba": "SCU",
   "Santiago, Dominican Republic Municipal": "STI",
   "Santo Domingo, Venezuela Mayor Humberto Vivas Guerrero": "STD",
   "Santorini/Thira Is, Greece Santorini": "JTR",
   "Sanya, China": "SYX",
   "Sao Filipe, Cape Verde - Sao Filipe Airport": "SFL",
   "Sao Jose Do Rio Preto, Brazil - Sao Jose Do Rio Preto Airport": "SJP",
   "Sao Jose Dos Campos, Sao Paulo, Brazil - Sao Jose Dos Campos Airport": "SJK",
   "Sao Luiz, Maranhao, Brazil Tirirical": "SLZ",
   "Sao Nicolau, Cape Verde - Sao Nicolau Airport": "SNE",
   "Sao Paulo, Sao Paulo, Brazil Congonhas": "CGH",
   "Sao Paulo, Sao Paulo, Brazil Guarulhos International": "GRU",
   "Sao Paulo Viracopos, Brazil - Sao Paulo Viracopos Airport": "VCP",
   "Sao Tome, Sao Tome and Principe - Sao Tome Airport": "TMS",
   "Sapporo, Japan Chitose": "CTS",
   "Sapporo, Japan - Okadama Airport": "OKD",
   "Sarajevo, Bosnia And Herzegowina Butmir": "SJJ",
   "Saranac Lake, NY, USA Adirondack": "SLK",
   "Sarasota/Bradenton, FL, USA SarasotaBradenton": "SRQ",
   "Saravane, Laos - Saravane Airport": "VNA",
   "Sarnia, Canada - Sarnia Airport": "YZR",
   "Saskatoon, Saskatchewan, Canada Saskatoon": "YXE",
   "Satu Mare, Romania - Satu Mare Airport": "SUJ",
   "Sault Ste Marie, MI, USA Chippewa County Intl Airport": "CIU",
   "Sault Ste Marie, Ontario, Canada Sault Ste Marie Arpt": "YAM",
   "Sausalito, CA, USA Marin County": "JMC",
   "Savannah, GA, USA Travis Field": "SAV",
   "Savannakhet, Laos - Savannakhet Airport": "ZVK",
   "Savonlinna, Finland Savonlinna": "SVL",
   "Savusavu, Fiji Savusavu": "SVU",
   "Scammon Bay, Alaska, USA - Scammon Bay Airport": "SCM",
   "Schefferville, Quebec, Canada Schefferville": "YKL",
   "Scottsbluff, NE, USA William B Heiling Field": "BFF",
   "Seattle, WA, USA Seattle Tacoma Intl Airport": "SEA",
   "Sebha, Libya": "SEB",
   "Sedona, AZ, USA": "SDX",
   "Semarang, Indonesia - Yani Airport": "SRG",
   "Semporna, Sabah, Malaysia Semporna": "SMM",
   "Sendai, Japan Sendai": "SDJ",
   "Seoul, South Korea Kimpo International": "SEL",
   "Sept-Iles, Quebec, Canada": "YZV",
   "Sert, Libya": "SRX",
   "Sevilla, Spain": "SVQ",
   "Sfax, Tunisia Sfax Airport": "SFA",
   "Shanghai, China - Pudong Shanghai Airport": "PVG",
   "Shanghai, China - Shanghai Intl /Hongqiao/": "SHA",
   "Shannon, Ireland Shannon": "SNN",
   "Shantou, China": "SWA",
   "Sharjah, United Arab Emirates Sharjah": "SHJ",
   "Sharm El Sheikh, Egypt Ophira": "SSH",
   "Sharurah, Saudi Arabia - Sharurah Airport": "SHW",
   "Shawinigan, Quebec, Canada Shawinigan / Via Rail Service": "XFL",
   "Shawnigan, British Columbia, Canada Shawnigan / Via Rail Service": "XFM",
   "Shenyang, China Shenyang": "SHE",
   "Shenzhen, China Shenzhen": "SZX",
   "Sheridan, WY, USA Sheridan County Airport": "SHR",
   "Shetland Islands /Shetland Isd, Scotland, United Kingdom Shetland Islands": "LSI",
   "Shetland Islands /Shetland Isd, Scotland, United Kingdom Tingwall": "LWK",
   "Shijiazhuang, China Shijiazhuang": "SJW",
   "Shillavo, Ethiopia - Shillavo Airport": "HIL",
   "Shiraz, Iran Shiraz": "SYZ",
   "Shonai, Japan Shonai": "SYO",
   "Show Low, AZ, USA": "SOW",
   "Shreveport, LA, USA Regional Airport": "SHV",
   "Siam Reap/Angkor Wat, Cambodia, Siem Reap International Airport": "REP",
   "Sibiu, Romania - Sibiu Airport": "SBZ",
   "Sibu, Sarawak, Malaysia Sibu": "SBW",
   "Sidney, MT, USA": "SDY",
   "Siena, Italy - Siena Airport": "SAY",
   "Silchar, India Kumbhirgram": "IXS",
   "Silver City, New Mexico, USA - Silver City Airport": "SVC",
   "Simao, China - Simao": "SYM",
   "Simferopol, Ukraine Simferopol": "SIP",
   "Singapore, Singapore Changi International Airport": "SIN",
   "Sion, Switzerland - Sion Airport": "SIR",
   "Sioux City, Iowa, USA - Sioux Gateway International Airport": "SUX",
   "Sioux Falls, SD, USA Joe Foss Field": "FSD",
   "Sioux Lookout, Ontario, Canada": "YXL",
   "Sitia, Greece - Sitia Airport": "JSH",
   "Sitka, AK, USA Sitka": "SIT",
   "Sivas, Turkey Sivas": "VAS",
   "Skagway, AK, USA": "SGY",
   "Skardu, Pakistan - Skardu Airport": "KDU",
   "Skelleftea, Sweden Skelleftea": "SFT",
   "Skiathos, Greece Skiathos": "JSI",
   "Skien, Norway - Skien-Geiteryggen Airport": "SKE",
   "Skiros, Greece - Skiros Airport": "SKU",
   "Skopje, FYROM (Former Yugoslav Republic of Macedonia) - Skopje Airport": "SKP",
   "Sliac, Slovakia - Sliac Airport": "SLD",
   "Sligo, Ireland Collooney": "SXL",
   "Smith Falls, Ontario, Canada": "YSH",
   "Smithers, British Columbia, Canada Smithers International": "YYD",
   "Snake Bay, Northern Territory, Australia": "SNB",
   "Sochi, Russia - Sochi Airport": "AER",
   "Sofia, Bulgaria Sofia Intl": "SOF",
   "Sogndal, Norway Haukasen": "SOG",
   "Sokcho, South Korea": "SHO",
   "Son-La, Vietnam - Son-La Airport": "SQH",
   "Sonderborg, Denmark Sonderborg": "SGD",
   "Songpan Jiuzhai, China": "JZH",
   "Sorrento, Italy - Sorrento Airport": "RRO",
   "South Andros, Bahamas Congo Town": "TZN",
   "South Bend, IN, USA Michiana Regional Airport": "SBN",
   "South Caicos, Turks And Caicos Islands": "XSC",
   "South Lake Tahoe, CA, USA Lake Tahoe": "TVL",
   "South Naknek, Alaska, USA - South Naknek Airport": "WSN",
   "Southampton, England, United Kingdom Eastleigh": "SOU",
   "Southern Pines, NC, USA Pinehurst": "SOP",
   "Spencer, IA, USA Spencer Municipal Airport": "SPW",
   "Split, Croatia (Hrvatska) Split": "SPU",
   "Spokane, WA, USA International/Geiger Field": "GEG",
   "Spring Point, Bahamas - Spring Point Airport": "AXP",
   "Springfield, IL, USA Capital Airport": "SPI",
   "Springfield, MO, USA Springfield Regional Airport": "SGF",
   "Srinagar, India": "SXR",
   "State College, PA, USA University Park Arpt": "SCE",
   "Staunton, VA, USA Shenandoah Valley Regional": "SHD",
   "Stavanger, Norway Sola": "SVG",
   "Stella Maris, Bahamas": "SML",
   "Stephenville, Newfoundland, Canada Stephenville": "YJT",
   "Stockholm, Sweden Arlanda International": "ARN",
   "Stockholm, Sweden Bromma Arpt": "BMA",
   "Stockton, California, USA - Stockton Airport": "SCK",
   "Stokmarknes, Norway - Skagen Airport": "SKN",
   "Stony Rapids, Saskatchewan, Canada Stony Rapids": "YSF",
   "Stornoway, Scotland, United Kingdom Stornoway": "SYY",
   "Storuman, Sweden - Storuman Airport": "SQO",
   "Strasbourg, France Entzheim": "SXB",
   "Stratford, Ontario, Canada": "XFD",
   "Strathroy, Ontario, Canada Strathroy / Via Rail Service": "XTY",
   "Stronsay, Orkney Islands, Scotland, United Kingdom - Stronsay Airport": "SOY",
   "Stuart Island, Canada - Stuart Island Airport": "YRR",
   "Sturgeon Bay, WI, USA": "SUE",
   "Stuttgart, Germany Echterdingen": "STR",
   "Sucre, Bolivia Sucre": "SRE",
   "Sudbury, Ontario, Canada": "YSB",
   "Sui, Pakistan - Sui Airport": "SUL",
   "Sukkur, Pakistan - Sukkur Airport": "SKZ",
   "Sullivan Bay, Canada - Sullivan Bay Airport": "YTG",
   "Sumbawa Island, Indonesia Brang Bidji": "SWQ",
   "Sun City, South Africa - Pilansberg Airport": "NTY",
   "Sun Valley/Hailey, ID, USA": "SUN",
   "Sundsvall, Sweden Sundsvall": "SDL",
   "Sunshine Coast, Queensland, Australia Maroochydore": "MCY",
   "Surabaya, Indonesia Juanda Airport": "SUB",
   "Surat Thani, Thailand": "URT",
   "Surgut, Russia": "SGC",
   "Suva, Fiji Nausori": "SUV",
   "Svolvaer, Norway - Helle Airport": "SVJ",
   "Swakopmund, Namibia": "SWP",
   "Sydney, New South Wales, Australia": "QSY",
   "Sydney, New South Wales, Australia Sydney /KingsfordSmith/ Airport": "SYD",
   "Sydney, Nova Scotia, Canada Sydney Municipal": "YQY",
   "Sylhet, Bangladesh - Sylhet Airport": "ZYL",
   "Syracuse, NY, USA Hancock International": "SYR",
   "Syros Island, Greece - Syros Airport": "JSY",
   "Szczecin, Poland Goleniow": "SZZ",
   "Tabatinga, Amazonas, Brazil, Tabatinga International Airport": "TBT",
   "Tabriz, Iran - Tabriz Airport": "TBZ",
   "Tabuk, Saudi Arabia - Tabuk Airport": "TUU",
   "Tacheng, China - Tacheng": "TCG",
   "Tacloban, Philippines Dz Romualdez": "TAC",
   "Tacna, Peru - Tacna Airport": "TCQ",
   "Taegu, South Korea": "TAE",
   "Tagbilaran, Philippines Tagbilaran": "TAG",
   "Taichung, Taiwan - Taichung Airport": "TXG",
   "Taif, Saudi Arabia - Taif Airport": "TIF",
   "Tainan, Taiwan - Tainan Airport": "TNN",
   "Taipei, Taiwan - Taiwan Taoyuan International Airport (formerly Chiang Kai Shek Airport)": "TPE",
   "Taipei, Taiwan Sung Shan": "TSA",
   "Taitung, Taiwan - Taitung Airport": "TTT",
   "Taiyuan, China": "TYN",
   "Taiz, Yemen AlJanad": "TAI",
   "Takamatsu, Japan - Takamatsu Airport": "TAK",
   "Tallahassee, FL, USA": "TLH",
   "Tallinn, Estonia Ulemiste": "TLL",
   "Taloyak, Canada - Taloyak Airport": "YYH",
   "Tampa, FL, USA Tampa International": "TPA",
   "Tampere, Finland TamperePirkkala": "TMP",
   "Tampico, Tamaulipas, Mexico": "TAM",
   "Tamworth, New South Wales, Australia Tamworth": "TMW",
   "Tangier, Morocco Boukhalef Souahel": "TNG",
   "Taos, New Mexico, USA - Taos Regional Apt Airport": "TSM",
   "Tapachula, Chiapas, Mexico Tapachula International": "TAP",
   "Tarakan, Indonesia Tarakan": "TRK",
   "Tarapoto, Peru Tarapoto": "TPP",
   "Taree, New South Wales, Australia - Taree Airport": "TRO",
   "Tari, Papua New Guinea": "TIZ",
   "Tarija, Bolivia": "TJA",
   "Taschereau, Quebec, Canada Taschereau / Via Rail Service": "XFO",
   "Tashkent, Uzbekistan Tashkent": "TAS",
   "Tasiujuaq, Canada - Tasiujuaq Airport": "YTQ",
   "Tau, American Samoa - Tau Airport": "TAV",
   "Taupo, New Zealand Taupo": "TUO",
   "Tauranga, New Zealand Tauranga": "TRG",
   "Taveuni Island, Fiji - Matei Airport": "TVU",
   "Tbilisi, Georgia Novo Alexeyevka": "TBS",
   "Teesside, England, United Kingdom TeesSide": "MME",
   "Tefe, Brazil - Tefe Airport": "TFF",
   "Tegucigalpa, Honduras Toncontin": "TGU",
   "Tehran, Iran Mehrabad": "THR",
   "Tel Aviv Yafo, Israel BenGurion International": "TLV",
   "Tel Aviv, Israel - Sde Dov Airport": "SDV",
   "Telluride, CO, USA Telluride Municipal Airport": "TEX",
   "Tembagapura, Indonesia - Tembagapura Airport": "TIM",
   "Temple, TX, USA": "TPL",
   "Temuco, Chile Manquehue": "ZCO",
   "Tenakee, Alaska, United States of America - Tenakee Airport": "TKE",
   "Tenerife, Canary Islands, Spain Reina Sofia": "TFS",
   "Tenerife, Canary Islands, Spain Tenerife Norte Los Rodeos": "TFN",
   "Tepic, Nayarit, Mexico": "TPQ",
   "Terceira Island, Azores Islands, Portugal Lajes": "TER",
   "Teresina, Piaui, Brazil Teresina": "THE",
   "Termez, Uzbekistan - Termez Airport": "TMJ",
   "Ternate, Indonesia Babullah": "TTE",
   "Terrace, British Columbia, Canada Terrace": "YXT",
   "Terre Haute, IN, USA Hulman Field": "HUF",
   "TerreDeHaut, Guadeloupe": "LSS",
   "Teterboro, New Jersey, United States of America - Teterboro Airport": "TEB",
   "Texarkana, AR, USA Municipal": "TXK",
   "Tezpur, India Salonbari": "TEZ",
   "Thakhek, Laos - Thakhek Airport": "THK",
   "The Hague, Netherlands": "HAG",
   "The Pas, Manitoba, Canada The Pas": "YQD",
   "Thessaloniki, Greece Thessaloniki": "SKG",
   "Thicket Portage, Manitoba, Canada": "YTD",
   "Thief River Falls, MN, USA Thief River Falls Municipal": "TVF",
   "Thisted, Denmark": "TED",
   "Thunder Bay, Ontario, Canada": "YQT",
   "Thursday Island, Queensland, Australia Horn Island": "TIS",
   "Tianjin, China - Tianjin": "TSN",
   "Tijuana, Baja California, Mexico General Abelardo L Rodriguez": "TIJ",
   "Timaru, New Zealand - Timaru Airport": "TIU",
   "Timisoara, Romania Timisoara": "TSR",
   "Timmins, Ontario, Canada Timmins Municipal Airport": "YTS",
   "Tinian, Northern Mariana Islands Tinian": "TIQ",
   "Tinson Pen-Kingston Airport, Kingston, Jamaica": "KTP",
   "Tippi, Ethiopia - Tippi Airport": "TIE",
   "Tiree, Scotland, United Kingdom Tiree Island": "TRE",
   "Tirgu Mures, Romania Tirgu Mures": "TGM",
   "Tiruchirapally, India Civil": "TRZ",
   "Tivat, Yugoslavia Tivat": "TIV",
   "Tobago, Tobago, Trinidad And Tobago Crown Point": "TAB",
   "Tobruk, Libya": "TOB",
   "Tofino, British Columbia, Canada Tofino Airport": "YAZ",
   "Togiak, Alaska, USA - Togiak Airport": "TOG",
   "Toksook Bay, AK, USA": "OOK",
   "Tokunoshima, Japan - Tokunoshima Airport": "TKN",
   "Tokushima, Japan Tokushima": "TKS",
   "Tokyo, Japan - Narita": "NRT",
   "Toledo, OH, USA Toledo Express Airport": "TOL",
   "Toluca, Mexico - Toluca Airport": "TLC",
   "Tomanggong, Malaysia - Tomanggong Airport": "TMG",
   "Tongren, China": "TEN",
   "Toowoomba, Queensland, Australia Toowoomba": "TWB",
   "Topeka, KS, USA Forbes Field": "FOE",
   "Toronto, Ontario, Canada - Toronto - City Center (Island) Airport": "YTZ",
   "Toronto, Ontario, Canada - Lester B Pearson International Airport": "YYZ",
   "Torreon, Coahuila, Mexico": "TRC",
   "Tortoli, Italy - Tortoli-Arbatax Airport": "TTB",
   "Tottori, Japan Tottori": "TTJ",
   "Toulon, France - Toulon Airport": "TLN",
   "Toulouse, France Blagnac": "TLS",
   "Tours, France St Symphorien": "TUF",
   "Townsville, Queensland, Australia Townsville": "TSV",
   "Toyama, Japan Toyama": "TOY",
   "Trabzon, Turkey Trabzon": "TZX",
   "Trang, Thailand - Trang Airport": "TST",
   "Trapani, Sicily, Italy Birgi": "TPS",
   "Traverse City, MI, USA Cherry Capital Airport": "TVC",
   "Treasure Cay, Bahamas - Treasure Cay Airport": "TCB",
   "Trelew, Chubut, Argentina - Trelew-Almirante Zar Airport": "REL",
   "Trenton, NJ, USA Mercer County": "TTN",
   "Treviso, Italy Treviso": "TSF",
   "Trieste, Italy Ronchi Dei Legionari": "TRS",
   "Trinidad, Bolivia": "TDD",
   "Tripoli, Libya - Idris Airport": "TIP",
   "Trivandrum, India - Trivandrum International Airport": "TRV",
   "Trollhattan, Sweden - Trollhattan Airport": "THN",
   "Trombetas, Brazil - Trombetas Airport": "TMT",
   "Tromso, Norway Tromso/Langes": "TOS",
   "Trondheim, Norway TrondheimVaernes": "TRD",
   "Trujillo, Peru Trujillo": "TRU",
   "Truk, Caroline Islands, Micronesia Truk": "TKK",
   "Truro, Nova Scotia, Canada": "XLZ",
   "Tsetserleg, Arkhangai, Mongolia - Tsetserleg Airport": "TSZ",
   "Tsushima, Japan - Tsushima Airport": "TSJ",
   "Tucson, AZ, USA Tucson International Airport": "TUS",
   "Tucuman, Tucuman, Argentina Benjamin Matienzo": "TUC",
   "Tucurui, Brazil - Tucurui Airport": "TUR",
   "Tuguegarao, Philippines Airport": "TUG",
   "Tulsa, OK, USA Tulsa International": "TUL",
   "Tumbes, Peru Tumbes": "TBP",
   "Tunis, Tunisia Carthage": "TUN",
   "Tuntutuliak, Alaska, USA - Tuntutuliak Airport": "WTL",
   "Tununak, Alaska - Tununak Airport": "TNK",
   "Tunxi, China": "TXN",
   "Tupelo, MS, USA Cd Lemons Municipal": "TUP",
   "Turaif, Saudi Arabia - Turaif Airport": "TUI",
   "Turbat Airport": "TUK",
   "Turin, Italy Caselle": "TRN",
   "Turku, Finland Turku": "TKU",
   "Tuscaloosa, AL, USA Van De Graff": "TCL",
   "Tuxtla Gutierrez, Chiapas, Mexico Llano San Juan": "TGZ",
   "Tuyhoa, VIetnam - Tuyhoa Airport": "TBB",
   "Twin Falls, ID, USA": "TWF",
   "Twin Hills, Alaska, USA - Twin Hills Airport": "TWA",
   "Tyler, TX, USA Pounds Field": "TYR",
   "Tyumen, Russia Tyumen": "TJM",
   "Ubari, Libya": "QUB",
   "Ube, Japan": "UBJ",
   "Uberaba, Brazil - Uberaba Airport": "UBA",
   "Uberlandia, Brazil - Gomes Airport": "UDI",
   "Ubon Ratchathani, Thailand - Ubon Ratchathani Airport": "UBP",
   "Udaipur, India - Udaipur-Dabok Airport": "UDR",
   "Udon Thani, Thailand Udon": "UTH",
   "Ufa, Russia - Ufa Airport": "UFA",
   "Ujung Pandang, Indonesia Hasanudin": "UPG",
   "Ulaangom, Uvs, Mongolia - Ulaangom Airport": "ULO",
   "Ulan Bator, Mongolia Ulan Bator": "ULN",
   "UlanUde, Russia": "UUD",
   "Uliastai, Zavkhan, Mongolia - Uliastai, Airport": "ULZ",
   "Ulsan, South Korea": "USN",
   "Ulundi, South Africa - Ulundi Airport": "ULD",
   "Ulyanovsk, Russia Ulyanoysk": "ULY",
   "Umea, Sweden Umea": "UME",
   "Umiujaq, Canada - Umiujaq Airport": "YUD",
   "Umtata, South Africa - Umtata Airport": "UTT",
   "Una, Brazil - Una Airport": "UNA",
   "Unalakleet, ALaska, USA - Unalakleet Airport": "UNK",
   "Union Island, Saint Vincent and the Grenadines - Union Island Airport": "UNI",
   "Unst Shetland Islands, Scotland, United Kingdom": "UNT",
   "Upington, South Africa Municipal": "UTN",
   "Urgench, Uzbekistan": "UGC",
   "Uruapan, Michoacan, Mexico": "UPN",
   "Urumqi, China - Urumqi-Diwopu": "URC",
   "Ushuaia, Tierra Del Fuego, Argentina": "USH",
   "Utica, NY, USA Oneida County": "UCA",
   "Uzhgorod, Ukraine - Uzhgorod Airport": "UDJ",
   "Vaasa, Finland Vaasa": "VAA",
   "Vadodara, India Vadodara": "BDQ",
   "Vadso, Norway Vadso": "VDS",
   "Vail/Eagle, CO, USA": "ZBV",
   "Vail/Eagle, CO, USA Eagle County Regional": "EGE",
   "Val D'Or, Canada - Val D'Or Airport": "YVO",
   "Valdez, AK, USA": "VDZ",
   "Valdivia, Chile Pichoy": "ZAL",
   "Valdosta, GA, USA - Valdosta Regional": "VLD",
   "Valencia, Spain - Valencia": "VLC",
   "Valencia, Venezuela - Valencia": "VLN",
   "Valladolid, Spain - Valladolid": "VLL",
   "Valledupar, Colombia": "VUP",
   "Valverde, El Hierro, Canary Islands, Spain - El Hierro Airport": "VDE",
   "Van, Turkey - Van Airport": "VAN",
   "Vancouver, British Columbia, Canada Vancouver Harbour Airport": "CXH",
   "Vancouver, British Columbia, Canada Vancouver International": "YVR",
   "Vanimo, Papua New Guinea - Vanimo Airport": "VAI",
   "Vannes, France - Vannes-Meucon airport (Vannes - Golfe du Morbihan airport)": "VNE",
   "Varadero, Cuba Juan Gualberto Gomez": "VRA",
   "Varanasi, India Babatpur": "VNS",
   "Varkaus, Finland Varkaus": "VRK",
   "Varna, Bulgaria Varna": "VAR",
   "Vasteras, Sweden Hasslo": "VST",
   "Vava'U, Tonga - Vava'U Airport": "VAV",
   "Vaxjo, Sweden Vaxjo": "VXO",
   "Venice, Italy Marco Polo": "VCE",
   "Veracruz, Veracruz, Mexico Las Bajadas / General Heriberto Jara": "VER",
   "Vero Beach, FL, USA Vero Beach Municipal": "VRB",
   "Verona, Italy Verona": "VRN",
   "Vestmannaeyjar, Iceland Vestmannaeyjar": "VEY",
   "Vichy, France - Vichy-Charmeil Airport": "VHY",
   "Victoria, British Columbia, Canada Victoria International Airport": "YYJ",
   "Victoria, British Columbia, Canada Victoria Inner Harbour": "YWH",
   "Victoria, TX, USA": "VCT",
   "Victoria Falls, Zimbabwe": "VFA",
   "Viedma, Argentina - Viedma Airport": "VDM",
   "Vienna, Austria Schwechat": "VIE",
   "Vientiane, Laos - Vientiane Airport": "LVT",
   "Vientiane, Laos Wattay": "VTE",
   "Vieques, Puerto Rico - Vieques Airport": "VQS",
   "Vigo, Spain": "VGO",
   "Villa Gesell, Buenos Aires, Argentina Villa Gesell": "VLG",
   "Villahermosa, Tabasco, Mexico Carlos R Perez": "VSA",
   "Vilhelmina, Sweden - VIlhelmina Airport": "VHM",
   "Vilnius, Lithuania Vilnius Airport": "VNO",
   "Vinh City, Vietnam - Vinh City Airport": "VII",
   "Virgin Gorda, Virgin Islands (British)": "VIJ",
   "Visalia, CA, USA Visalia Municipal Airport": "VIS",
   "Visby, Sweden Visby": "VBY",
   "Vishakhapatnam, India Vishakhapatnam": "VTZ",
   "Vitoria, Espirito Santo, Brazil Eureco Sales": "VIX",
   "Vitoria, Spain Vitoria": "VIT",
   "Vitoria Da Conquista, Brazil - Vitoria Da Conquista Airport": "VDC",
   "Vladivostok, Russia Vladivostok Airport": "VVO",
   "Vojens Lufthavn, Denmark Jojens": "SKS",
   "Volgograd, Russia Volgograd": "VOG",
   "Wabush, Newfoundland, Canada Wabush Municipal": "YWK",
   "Waco, TX, USA Madison Cooper": "ACT",
   "Wadi Ad Dawasir, Saudi Arabia - Wadi Ad Dawasir Airport": "WAE",
   "WaggaWagga, New South Wales, Australia Forest Hill": "WGA",
   "Wainwright, AK, USA": "AIN",
   "Wajima, Japan - Wajima Airport": "NTQ",
   "Wakkanai, Japan - Wakkanai Airport": "WKJ",
   "Walgett, New South Wales, Australia Walgett": "WGE",
   "Walla Walla, WA, USA": "ALW",
   "Walvis Bay, South Africa - Walvis Bay Airport": "WVB",
   "Wanaka, New Zealand - Wanaka Airport": "WKA",
   "Wanganui, New Zealand - Wanganui Airport": "WAG",
   "Wanxian, China": "WXN",
   "Warsaw, Poland Okecie": "WAW",
   "Washington, DC, USA WashingtonDulles International": "IAD",
   "Washington, DC, USA Ronald Reagan National Airport": "DCA",
   "Waskaganish, Quebec, Canada Waskaganish": "YKQ",
   "Waterford, Ireland": "WAT",
   "Waterloo, IA, USA Waterloo Municipal Airport": "ALO",
   "Watertown, NY, USA Watertown": "ART",
   "Watertown, SD, USA": "ATY",
   "Watson Lake, Yukon Territory, Canada Watson Lake Airport": "YQH",
   "Wawa, Ontario, Canada": "YXZ",
   "Wedjh, Saudi Arabia - Wedjh Airport": "EJH",
   "Weeze, Germany - Niederrhein Airport": "NRN",
   "Weihai, China": "WEH",
   "Weipa, Australia - Weipa Airport": "WEI",
   "Wellington, New Zealand International": "WLG",
   "Wenatchee, WA, USA Pangborn Memorial Field": "EAT",
   "Wendover, Utah, USA - Wendover Airport": "ENV",
   "Wenzhou, China": "WNZ",
   "West Yellowstone, Montana, USA - West Yellowstone Airport": "WYS",
   "Westerland, Germany Westerland": "GWT",
   "Westerly, Rhode Island, USA - Westerly Airport": "WST",
   "Westport, New Zealand - Westport Airport": "WSZ",
   "Westsound, Washington, USA - Westsound Airport": "WSX",
   "Wewak, Papua New Guinea - Wewak-Boram Airport": "WWK",
   "Weymont, Quebec, Canada Weymont / Via Rail Service": "XFQ",
   "Whakatane, New Zealand - Whakatane Airport": "WHK",
   "Whangarei, New Zealand - Whangarei Airport": "WRE",
   "Whistler, Canada - Whistler Airport": "YWS",
   "White Plains, NY, USA Westchester County Airport": "HPN",
   "White River, Ontario, Canada White River": "YWR",
   "Whitehorse, Yukon Territory, Canada Whitehorse Airport": "YXY",
   "Whyalla, Australia - Ahyalla Airport": "WYA",
   "Wichita, KS, USA MidContinent Airport": "ICT",
   "Wichita Falls, TX, USA Wichita Falls Municipal": "SPS",
   "Wick, Scotland, United Kingdom Wick": "WIC",
   "Wilkes Barre/Scranton, PA, USA WilkesBarre/Scranton Intl": "AVP",
   "Willemstad / Curacao Island, Netherlands Antilles Areopuerto Hato": "CUR",
   "Williams Lake, British Columbia, Canada": "YWL",
   "Williamsport, PA, USA Williamsport Lycoming Municipal": "IPT",
   "Williston, ND, USA Sloulin Field International": "ISN",
   "Wilmington, NC, USA New Hanover County Airport": "ILM",
   "Wilmington/New Castle County, DE, USA": "ILG",
   "Windhoek, Namibia Eros": "ERS",
   "Windhoek, Namibia - Hosea Kutako International Airport (formerly Jg Strijdom airport)": "WDH",
   "Windsor, Ontario, Canada Windsor International": "YQG",
   "Winnipeg, Manitoba, Canada Winnipeg International": "YWG",
   "WinstonSalem, NC, USA Smith Reynolds": "INT",
   "Winton, Queensland, Australia Winton": "WIN",
   "Wolf Point, MT, USA": "OLF",
   "Won-ju, Republic of Korea - Won-ju Airport": "WJU",
   "Woodstock, Ontario, Canada Woodstock / Via Rail Service": "XIP",
   "Woomera, South Australia, Australia Woomera": "UMR",
   "Worcester, MA, USA Worcester /James D O'brien Field": "ORH",
   "Worland, WY, USA Worland": "WRL",
   "Wrangell, Alaska, USA - Wrangell Airport": "WRG",
   "Wrightstown NJ [McGuire Air Force Base] USA": "WRI",
   "Wroclaw, Poland Strachowice": "WRO",
   "Wuhan, China": "WUH",
   "Wuyishan, China": "WUS",
   "Wyoming, Ontario, Canada - Wyoming / Via Rail Service": "XWY",
   "Xi An, China - Xianyang": "XIY",
   "Xiamen, China - Xiamen International": "XMN",
   "Xiangfan, China": "XFN",
   "Xilinhot, China": "XIL",
   "Xining, China": "XNN",
   "Xuzhou, China": "XUZ",
   "Yakima, WA, USA Yakima Air Terminal": "YKM",
   "Yakutat, Alaska, USA - Yakutat Airport": "YAK",
   "Yakutsk, Russia": "YKS",
   "Yamagata, Japan Junmachi": "GAJ",
   "Yanbo, Saudi Arabia - Yanbo Airport": "YNB",
   "Yancheng, China": "YNZ",
   "Yangon, Myanmar Mingaladon": "RGN",
   "Yangyang, Republic of Korea - Yangyang Airport": "YNY",
   "Yanji, China - Yanji": "YNJ",
   "Yantai, China - Laishan": "YNT",
   "Yaounde, Cameroon Nsimalen": "NSI",
   "Yap, Caroline Islands, Micronesia": "YAP",
   "Yarmouth, Nova Scotia, Canada": "YQI",
   "Yazd, Iran - Yazd Airport": "AZD",
   "Yechon, South Korea Yechon": "YEC",
   "Yellowknife, Northwest Territories, Canada": "YZF",
   "Yerevan, Armenia": "EVN",
   "Yibin, China - Yibin": "YBP",
   "Yichang, China - Yichang Airport": "YIH",
   "Yinchuan, China - Yinchuan Airport": "INC",
   "Yining, China - Yining Airport": "YIN",
   "Yiwu, China - Yiwu Airport": "YIW",
   "Yogyakarta, Indonesia": "JOG",
   "Yonago, Japan - Yonago Airport": "YGJ",
   "Yosu, South Korea Yosu Airport": "RSU",
   "Youngstown, OH, USA Youngstown Municipal Airport": "YNG",
   "Yuma, AZ, USA Yuma International Airport": "YUM",
   "Yurimaguas, Peru - Yurimaquas Airport": "YMS",
   "Yuzhno-Sakhalinsk, Russia, Yuzno-Sakhalinsk Airport": "UUS",
   "Zacatecas, Zacatecas, Mexico": "ZCL",
   "Zadar, Croatia - Zadar Airport": "ZAD",
   "Zagreb, Croatia (Hrvatska) Zagreb": "ZAG",
   "Zahedan, Iran Zahedan": "ZAH",
   "Zakinthos, Greece Zakinthos": "ZTH",
   "Zamboanga, Philippines Zamboanga Airport": "ZAM",
   "Zanzibar, Tanzania Kisauni": "ZNZ",
   "Zaporozhye, Ukraine - Zaporozhye Airport": "OZH",
   "Zaragoza, Spain Zaragoza": "ZAZ",
   "Zawia Town (Zawiat al Mukhayla), Libya": "QZT",
   "Zhanjiang, China": "ZHA",
   "Zhaotong, China - Zhaotong Airport": "ZAT",
   "Zhengzhou, China": "CGO",
   "Zhob, Pakistan - Zhob Airport": "PZH",
   "Zhoushan, China - Zhoushan Airport": "HSN",
   "Zhuhai, China - Zhuhai Airport": "ZUH",
   "Zielona Gora, Poland - Zielona Gora Airport": "IEG",
   "Zliten (Zlitan), Libya": "QZL",
   "Zurich, Switzerland Zurich": "ZRH",
   "Zweibruecken, Germany": "ZQW"
}

function swapKeysAndValues(obj) {
   // 👇️ [{color: 'blue'}, {fruit: 'apple'}]
   const swapped = Object.entries(obj).map(
     ([key, value]) => ({[value]: key})
   );
 
   return Object.assign({}, ...swapped);
 }
// TODO switch case

const convertIATAToCityAndCountry = (IATACode) => {
  
   switch (IATACode) {
   case "AAL": 
      return "Aalborg, Denmark Aalborg"
   case "AES":
      return "Aalesund, Norway Vigra"
   case "AAR":
      return "Aarhus, Denmark Tirstrup"
   case "YXX":
      return "Abbotsford, Canada - Abbotsford Airport"
   case "ABZ":
      return "Aberdeen, Scotland, United Kingdom Dyce"
   case "ABR":
      return "Aberdeen, SD, USA Aberdeen Regional Airport"
   case "AHB":
      return "Abha, Saudi Arabia - Abha Airport"
   case "ABJ":
      return "Abidjan, Cote D'ivoire Port Bouet"
   case "ABI":
      return "Abilene, TX, USA Municipal"
   case "AUH":
      return "Abu Dhabi, United Arab Emirates Abu Dhabi International"
   case "ABS":
      return "Abu Simbel, Egypt Abu Simbel"
   case "ABV":
      return "Abuja, Nigeria - Abuja International Airport"
   case "ACA":
      return "Acapulco, Guerrero, Mexico Alvarez International"
   case "ACC":
      return "Accra, Ghana Kotoka"
   case "ADK":
      return "Adak Island, Alaska, USA, Adak Island Airport"
   case "ADA":
      return "Adana, Turkey Adana"
   case "ADD":
      return "Addis Ababa, Ethiopia Bole"
   case "ADL":
      return "Adelaide, South Australia, Australia Adelaide"
   case "ADE":
      return "Aden, Yemen - Aden International Airport"
   case "AGA":
      return "Agadir, Morocco Inezgane"
   case "GUM":
      return "Agana, Guam, Guam Ab Wonpat Intl Airport"
   case "IXA":
      return "Agartala, India Singerbhil"
   case "QGG":
      return "Agedabia, Libya"
   case "AGF":
      return "Agen, France La Garenne"
   case "AGR":
      return "Agra, India Kheria"
   case "AJI":
      return "Agri, Turkey - Agri Airport"
   case "BQN":
      return "Aguadilla, PR, USA"
   case "AGU":
      return "Aguascalientes, Aguascalientes, Mexico"
   case "IKA":
   return "Ahmadabad (Tehran), Iran - Imam Khomeini International Airport"
   case "AMD":
      return "Ahmedabad, India Ahmedabad"
   case "AWZ":
      return "Ahwaz, Iran - Ahwaz Airport"
   case "QXB":
      return "Aix-En-Provence, France - Aix-En-Provence Airport"
   case "AJA":
      return "Ajaccio, Corsica, France Campo Dell Oro"
   case "AXT":
      return "Akita, Japan - Akita Airport"
   case "CAK":
      return "Akron/Canton, OH, USA AkronCanton Regional Airport"
   case "AKU":
      return "Aksu, China - Aksu Airport"
   case "PVK":
      return "Aktion, Greece - Preveza-Lefkas Airport"
   case "AKV":
      return "Akulivik, Canada - Akulivik Airport"
   case "AEY":
      return "Akureyri, Iceland Akureyri"
   case "KQA":
      return "Akutan, Alaska, USA - Akutan Airport"
   case "AAN":
      return "Al Ain, United Arab Emirates - Al Ain Airport"
   case "AAC":
      return "Al Arish, Egypt - Al Arish Airport"
   case "ABT":
      return "Al-Baha, Saudi Arabia - Al Baha-Al Aqiq Airport"
   case "AHU":
      return "Al Hoceima, Morocco - Al Hoceima Airport"
   case "ALM":
      return "Alamogordo, NM, USA"
   case "ALS":
      return "Alamosa, CO, USA Bergman Field"
   case "ABC":
      return "Albacete, Spain - Albacete Airport"
   case "ABY":
      return "Albany, GA, USA Dougherty County"
   case "ALB":
      return "Albany, NY, USA Albany County Airport"
   case "ALL":
      return "Albenga, Italy - Albenga Airport"
   case "ABQ":
      return "Albuquerque, NM, USA Albuquerque International Airport"
   case "ABX":
      return "Albury, New South Wales, Australia Albury"
   case "ACI":
      return "Alderney, Channel Islands, United Kingdom The Blaye"
   case "WKK":
      return "Aleknagik, Alaska, USA - Aleknagik Airport"
   case "AED":
      return "Aleneva, Alaska, USA - Aleneva Airport"
   case "ALP":
      return "Aleppo, Syria Nejrab"
   case "ALY":
      return "Alexandria, Egypt Alexandria"
   case "HBE":
      return "ALexandria, Egypt Borg El Arab Airport"
   case "AEX":
      return "Alexandria, LA, USA Alexandria Intl Airport"
   case "XFS":
      return "Alexandria, Ontario, Canada Alexandria / Via Rail Service"
   case "AXD":
      return "Alexandroupolis, Greece Alexandroupolis"
   case "AHO":
      return "Alghero, Sardinia, Italy Fertilia"
   case "ALG":
      return "Algiers, Algeria Houari Boumedienne"
   case "ALC":
      return "Alicante, Spain Alicante"
   case "ASP":
      return "Alice Springs, Northern Territory, Australia Alice Springs"
   case "IXD":
      return "Allahabad, India Bamrauli"
   case "AET":
      return "Allakaket, AK, USA"
   case "ABE":
      return "Allentown-Bethlehem-Easton International, PA, USA"
   case "ABE":
      return "Allentown, PA, USA AllentownBethlehemEaston Airport"
   case "AIA":
      return "Alliance, NE, USA"
   case "ALA":
      return "Almaty, Kazakhstan Almaty"
   case "LEI":
      return "Almeria, Spain Almeria"
   case "IXV":
      return "Along, India Along"
   case "AOR":
      return "Alor Setar, Malaysia Sultan Abdul Halim"
   case "GUR":
      return "Alotau, Papua New Guinea Gurney"
   case "APN":
      return "Alpena, MI, USA Alpena Regional Airport"
   case "ALE":
      return "Alpine, TX, USA Alpine Texas"
   case "ALF":
      return "Alta, Norway Elvebakken"
   case "ATM":
      return "Altamira, Brazil - Altamira Airport"
   case "LTI":
      return "Altai, Govi-Altai, Mongolia - Altai Airport"
   case "AAT":
      return "Altay, China - Altay Airport"
   case "ACH":
      return "Altenrhein, Switzerland - Altenrhein Airport"
   case "AOO":
      return "Altoona / Martinsburg, PA, USA Blair County"
   case "ASJ":
      return "Amami O Shima, Japan - Amami O Shima Airport"
   case "AMA":
      return "Amarillo, TX, USA Amarillo International Airport"
   case "ABL":
      return "Ambler, AK, USA"
   case "AMQ":
      return "Ambon, Indonesia Pattimura"
   case "ADJ":
      return "Amman, Jordan Civil"
   case "AMM":
      return "Amman, Jordan Queen Alia International"
   case "YEY":
      return "Amos, Quebec, Canada"
   case "ATQ":
      return "Amritsar, Punjab, India - Raja Sansi International Airport"
   case "AMS":
      return "Amsterdam, Netherlands Schiphol"
   case "AAQ":
      return "Anapa Airport - Russia"
   case "ANC":
      return "Anchorage, AK, USA Anchorage International"
   case "AOI":
      return "Ancona, Italy Falconara"
   case "AZN":
      return "Andizhan, Uzbekistan - Andizhan Airport"
   case "ASD":
      return "Andros Town, Bahamas"
   case "ANG":
      return "Angouleme, France GelAir"
   case "AGN":
      return "Angoon, Alaska, USA - Angoon Airport"
   case "AXA":
      return "Anguilla, Anguilla"
   case "ANI":
      return "Aniak, AK, USA"
   case "AJN":
      return "Anjouan,Comoros"
   case "ESB":
      return "Ankara, Turkey Esenboga"
   case "AAE":
      return "Annaba, Algeria Les Salines"
   case "NCY":
      return "Annecy, France - AnnecyMeythe"
   case "ANB":
      return "Anniston, AL, USA - Municipal"
   case "AQG":
      return "Anqing, China - Anqing"
   case "AOG":
      return "Anshan, Liaoning Province, China - Anshan"
   case "AYT":
      return "Antalya, Turkey Antalya"
   case "TNR":
      return "Antananarivo, Madagascar Ivato"
   case "ANU":
      return "Antigua,Saint Johns, Antigua And Barbuda - Vc Bird International"
   case "ANF":
      return "Antofagasta, Chile - Cerro Moreno"
   case "ANR":
      return "Antwerp, Belgium Deurne"
   case "ANV":
      return "Anvik, AK, USA"
   case "AOJ":
      return "Aomori, Japan"
   case "APW":
      return "Apia, Samoa Faleolo"
   case "ATW":
      return "Appleton, WI, USA Outagamie County Airport"
   case "AQJ":
      return "Aqaba, Jordan Aqaba"
   case "AJU":
      return "Aracaju, Sergipe, Brazil"
   case "AUX":
      return "Araguaina, Brazil - Araguaina Airport"
   case "RAE":
      return "Arar, Saudi Arabia - Arar Airport"
   case "AUC":
      return "Arauca, Colombia"
   case "AAX":
      return "Araxa, Brazil - Araxa Airport"
   case "AMH":
      return "Arba Mintch, Ethiopia - Arba Mintch Airport"
   case "ACV":
      return "Arcata, CA, USA Arcata/Eureka Airport"
   case "AQP":
      return "Arequipa, Peru Rodriguez Ballon"
   case "ARI":
      return "Arica, Chile Chacalluta"
   case "ARH":
      return "Arkhangelsk, Russia Arkhangelsk"
   case "AXM":
      return "Armenia, Colombia - El Eden Airport"
   case "ARM":
      return "Armidale, New South Wales, Australia Armidale"
   case "ATC":
      return "Arthurs Town, Bahamas"
   case "AUA":
      return "Aruba, Aruba Reina Beatrix"
   case "AVK":
      return "Arvaikheer, Ovorhkangai, Mongolia - Arvaikheer Airport"
   case "YEK":
      return "Arviat, Canada - Arviat Airport"
   case "AJR":
      return "Arvidsjaur, Sweden - Arvidsjaur Airport"
   case "AKJ":
      return "Asahikawa, Japan Asahikawa"
   case "AVL":
      return "Asheville / Hendersonville, NC, USA Asheville Regional Airport"
   case "ASB":
      return "Ashgabat, Turkmenistan - Ashgabad Airport"
   case "ASM":
      return "Asmara, Eritrea Asmara Intl/Yohannes Iv"
   case "ASO":
      return "Asosa, Ethiopia - Asosa Airport"
   case "ASE":
      return "Aspen, CO, USA Pitkin County Airport Sardy Field"
   case "ATZ":
      return "Assiut, Egypt - Assiut Airport"
   case "TSE":
      return "Astana, Kazakhstan - Astana Airport"
   case "ASF":
      return "Astrakhan Airport - Russia"
   case "OVD":
      return "Asturias, Spain Asturias"
   case "JTY":
      return "Astypalea Island, Greece - Astypalea Airport"
   case "ASU":
      return "Asuncion, Paraguay Silvio Pettirossi"
   case "ASW":
      return "Aswan, Egypt Daraw"
   case "AHN":
      return "Athens, GA, USA"
   case "ATH":
      return "Athens, Greece - Venizelos"
   case "YIB":
      return "Atikokan, Ontario, Canada"
   case "ATL":
      return "Atlanta, GA, USA Hartsfield International"
   case "ACY":
      return "Atlantic City /Atlantic Cty, NJ, USA Atlantic City International"
   case "AIY":
      return "Atlantic City International, NJ, USA"
   case "YAT":
      return "Attawapiskat, Canada - Attawapiskat Airport"
   case "AOU":
      return "Attopeu, Laos - Attopeu Airport"
   case "MER":
      return "Atwater/Merced, California, USA - Castle Airport"
   case "AKL":
      return "Auckland, New Zealand Auckland International Airport"
   case "AGB":
      return "Augsburg, Germany Muehlhausen"
   case "AGS":
      return "Augusta, GA, USA Bush Field"
   case "AUG":
      return "Augusta, ME, USA Maine State"
   case "YPJ":
      return "Aupaluk, Canada - Aupaluk Airport"
   case "IXU":
      return "Aurangabad, India Chikkalthana"
   case "AUS":
      return "Austin, TX, USA - Austin-Bergstrom International Airport (ABIA)"
   case "AVV":
      return "Avalon, Australia - Avalon Airport"
   case "AVN":
      return "Avignon, France Caumont"
   case "AYQ":
      return "Ayers Rock, Northern Territory, Australia Connellan"
   case "BCD":
      return "Bacolod, Philippines Bacolod"
   case "IXB":
      return "Bagdogra, India Bagdogra"
   case "YBG":
      return "Bagotville, Canada - Bagotville Airport"
   case "BJR":
      return "Bahar Dar, Ethiopia - Bahar Dar Airport"
   case "BHV":
      return "Bahawalpur Airport - Vahawalpur, Pakistan"
   case "BHI":
      return "Bahia Blanca, Buenos Aires, Argentina Commandante"
   case "BAH":
      return "Bahrain, Bahrain Bahrain International Bahrain"
   case "BAY":
      return "Baia Mare, Romania - Baia Mare Airport"
   case "YBC":
      return "Baie Comeau, Quebec, Canada"
   case "BKM":
      return "Bakalalan, Malaysia - Bakalalan Airport"
   case "BFL":
      return "Bakersfield, CA, USA Meadows Field"
   case "BAK":
      return "Baku, Azerbaijan - Baku (old code)"
   case "GYD":
      return "Baku, Azerbaijan - Geydar Aliyev Airport"
   case "DPS":
      return "Bali (Denpasar), Indonesia Ngurah Rai"
   case "BPN":
      return "Balikpapan, Indonesia - Palikpapan-Sepinggan Airport"
   case "BNK":
      return "Ballina, Australia - Ballina Airport"
   case "BBA":
      return "Balmaceda, Chile - Balmaceda-Teniente Vidal Airport"
   case "BWI":
      return "Baltimore, MD, USA BaltimoreWashington International"
   case "ABM":
      return "Bamaga, Queensland, Australia"
   case "BKO":
      return "Bamako, Mali Senou"
   case "HOE":
      return "Ban Hat Tai, Laos - Ban Huoeisay Airport (Ban Houei Sai/Ban Houay Xay"
   case "OUI":
      return "Ban Hat Tai, Laos - Ban Huoeisay Airport (Ban Houei Sai/Ban Houay Xay"
   case "BMV":
      return "Ban Me Thuot, Vietnam - Ban Me Thuot Airport"
   case "BND":
      return "Bandar Abbas, Iran - Bandar Abbas Airport"
   case "BWN":
      return "Bandar Seri Begawan, Brunei Darussalam Brunei International"
   case "BDO":
      return "Bandung, Indonesia Husein Sastranegara"
   case "YBA":
      return "Banff, Alberta, Canada"
   case "BLR":
      return "Bangalore (Bengalooru), India Hindustan"
   case "BPX":
      return "Bangda, China - Bangda"
   case "BKK":
      return "Bangkok, Thailand Bangkok International Airport"
   case "BGR":
      return "Bangor, ME, USA Bangor International Airport"
   case "BGF":
      return "Bangui, Central African Republic Bangui"
   case "QBL":
      return "Bani Walid, Libya"
   case "BNX":
      return "Banja Luka, Bosnia and Herzegovina - Banja Luka Airport"
   case "BDJ":
      return "Banjarmasin, Indonesia Syamsudin Noor"
   case "BJL":
      return "Banjul, Gambia Yundum International"
   case "BAV":
      return "Baotou, China - Baotou"
   case "BHB":
      return "Bar Harbor, ME, USA"
   case "BGI":
      return "Barbados (Bridgetown, Barbados) - Grantley Adams International"
   case "BCI":
      return "Barcaldine, Australia - Barcaldine Airport"
   case "BCN":
      return "Barcelona, Spain Barcelona"
   case "BLA":
      return "Barcelona, Venezuela Gral Jose Antonio Anzoategui"
   case "BDU":
      return "Bardufoss, Norway - Bardufoss Airport"
   case "BRI":
      return "Bari, Italy"
   case "BNS":
      return "Barinas, Venezuela Barinas"
   case "BBN":
      return "Bario,Malaysia - Bario Airport"
   case "BAX":
      return "Barnaul, Russia Barnaul Airport"
   case "BRM":
      return "Barquisimeto, Venezuela Barquisimeto"
   case "BRR":
      return "Barra / Hebrides Islands, Scotland, United Kingdom North Bay"
   case "EJA":
      return "Barrancabermeja, Colombia Variguies"
   case "BAQ":
      return "Barranquilla, Colombia E Cortissoz"
   case "BRW":
      return "Barrow, Alaska, USA Barrow"
   case "BTI":
      return "Barter Island, Alaska, USA - Barter Island Airport [LRRS]"
   case "UUN":
      return "Baruun-Urt, Sukhbaatar, Mongolia - Baruun-Urt Airport"
   case "BSL":
      return "Basel, Switzerland - Basel Euro Airport"
   case "BIA":
      return "Bastia, Corsica, France Poretta"
   case "BTH":
      return "Batam, Indonesia - Hang Nadim Airport"
   case "ZBF":
      return "Bathurst, New Brunswick, Canada - Bathurst Airport"
   case "BHS":
      return "Bathurst, New South Wales, Australia Raglan"
   case "BRT":
      return "Bathurst Island, Northern Territory, Australia"
   case "BAL":
      return "Batman, Turkey Nearest Air Service Through Diyarbakir"
   case "BTR":
      return "Baton Rouge, LA, USA"
   case "BAU":
      return "Bauru, Brazil- Bauru Airport"
   case "MBS":
      return "Bay City / Midland / Saginaw, MI, USA TriCity Airport"
   case "BYN":
      return "Bayankhongor, Bayankhongor, Mongolia - Bayankhongor Airport"
   case "BYU":
      return "Bayreuth, Germany Bindlacher Berg"
   case "BPT":
      return "Beaumont, TX, USA Jefferson County"
   case "BKW":
      return "Beckley, WV, USA"
   case "BED":
      return "Bedford, MA, USA Bedford"
   case "YBW":
      return "Bedwell Harbor, canada - Bedwell Harbor Airport"
   case "EIS":
      return "Beef Island, British Virgin Islands, Tortola/Beef Island - Beef Island Airport"
   case "BEI":
      return "Beica, Ethiopia Beica"
   case "BHY":
      return "Beihai, China - Beihai"
   case "NAY":
      return "Beijing, China - Beijing International"
   case "PEK":
      return "Beijing, China Peking Capital Airport"
   case "LAQ":
      return "Beida, Libya"
   case "BEW":
      return "Beira, Mozambique Beira"
   case "BEY":
      return "Beirut, Lebanon International"
   case "BLG":
      return "Belaga, Malaysia Airport"
   case "BEL":
      return "Belem, Para, Brazil Val De Cans"
   case "BHD":
      return "Belfast, Northern Ireland, United Kingdom Belfast Harbor"
   case "BFS":
      return "Belfast, Northern Ireland, United Kingdom Belfast International"
   case "IXG":
      return "Belgaum, India Sambre"
   case "EGO":
      return "Belgorod, Russia - Belgorod Airport"
   case "BEG":
      return "Belgrade, Yugoslavia BelgradeBeograd"
   case "BZE":
      return "Belize City, Belize Belize International"
   case "TZA":
      return "Belize City, Belize Belize Municipal"
   case "XVV":
      return "Belleville, Ontario, Canada Belleville / Via Rail Service"
   case "BLI":
      return "Bellingham, WA, USA Bellingham International"
   case "CNF":
      return "Belo Horizonte /Belo Horizon, Minas Gerais, Brazil Aeropuerto Internacional Tancredo Neves"
   case "PLU":
      return "Belo Horizonte /Belo Horizon, Minas Gerais, Brazil Confins/Pampulha"
   case "BJI":
      return "Bemidji, MN, USA Bemidji Municipal Airport"
   case "BEB":
      return "Benbecula, United Kingdom - Benbecula Airport"
   case "RDM":
      return "Bend, OR, USA - Roberts Field, Redmond, OR"
   case "BLR":
      return "Bengalooru (Bangalore), India Hindustan"
   case "BEN":
      return "Benghazi, Libya - Benina International Airport"
   case "BEH":
      return "Benton Harbor, MI, USA Ross Field"
   case "BGO":
      return "Bergen, Norway Flesland"
   case "EGC":
      return "Bergerac, France - Aeroport de Bergerac Perigord Dordogne"
   case "BVG":
      return "Berlevag, Norway - Berlevag Airport"
   case "BER":
      return "Berlin, Germany Schoenefeld"
   case "SXF":
      return "Berlin, Germany Schoenefeld"
   case "TXL":
      return "Berlin, Germany Tegel"
   case "THF":
      return "Berlin, Germany Tempelhof"
   case "BDA":
      return "Bermuda/Hamilton, Bermuda Kindley Airfield/Civil Air Terminal"
   case "BRN":
      return "Berne, Switzerland Belp"
   case "ZDJ":
      return "Berne, Switzerland BerneRr Station"
   case "BET":
      return "Bethel, AK, USA Bethel"
   case "BZR":
      return "Beziers, France BeziersVias"
   case "BWA":
      return "Bhairawa, Nepal Bhairawa"
   case "BHU":
      return "Bhavnagar, India - Bhavnagar Airport"
   case "BHO":
      return "Bhopal, India - Bhopal Airport"
   case "BBI":
      return "Bhubaneswar, India Bhubaneswar"
   case "BIK":
      return "Biak, Indonesia Mokmer"
   case "BIQ":
      return "Biarritz, France Parme"
   case "BGK":
      return "Big Creek, Belize Big Creek"
   case "BIO":
      return "Bilbao, Spain Sondica"
   case "BIL":
      return "Billings, MT, USA Billings Logan Intnl Airport"
   case "BLL":
      return "Billund, Denmark Billund"
   case "BIM":
      return "Bimini, Bahamas Bimini Island International"
   case "NSB":
      return "Bimini, Bahamas North Seaplane Base"
   case "BGM":
      return "Binghamton/Endicott/Johnson City, NY, USA Edwin Alink Field"
   case "BTU":
      return "Bintulu, Sarawak, Malaysia Bintulu"
   case "BVI":
      return "Birdsville, Queensland, Australia Birdsville"
   case "BHM":
      return "Birmingham, AL, USA Seibels/Bryan Airport"
   case "BHX":
      return "Birmingham, England, United Kingdom International"
   case "BHH":
      return "Bisha, Saudi Arabia - Bisha Airport"
   case "FRU":
      return "Bishkek, Kyrgyzstan Bishkek Airport"
   case "BSK":
      return "Biskra, Algeria Biskra"
   case "BIS":
      return "Bismarck, ND, USA Bismarck Mannan Municipal"
   case "OXB":
      return "Bissau, GuineaBissau Osvaldo Vieira"
   case "BKQ":
      return "Blackall, Australia - Blackall Airport"
   case "BLK":
      return "Blackpool, England, United Kingdom Blackpool"
   case "BLT":
      return "Blackwater, Australia - Blackwater Airport"
   case "YBX":
      return "Blanc Sablon, Quebec, Canada Blanc Sablon Airport"
   case "BLZ":
      return "Blantyre, Malawi Chileka"
   case "BHE":
      return "Blenheim, New Zealand - Woodbourne Airport"
   case "BFN":
      return "Bloemfontein, South Africa Jbm Hertzog"
   case "BMI":
      return "Bloomington, IL, USA Normal"
   case "BMG":
      return "Bloomington, IN, USA Monroe County Airport"
   case "BLF":
      return "Bluefield, WV, USA - Mercer Country Airport"
   case "BYH":
      return "Blytheville, Arkansas, USA - Arkansas International Airport"
   case "BVB":
      return "Boa Vista, Roraima, Brazil"
   case "BOO":
      return "Bodo, Norway Bodo"
   case "BXN":
      return "Bodrum, Turkey Imsik Airport"
   case "BFI":
      return "Boeing Field/Seattle Kings County International, Seattle WA, USA"
   case "BOG":
      return "Bogota, Colombia Eldorado"
   case "BOI":
      return "Boise, ID, USA Boise Municipal Arpt (Gowen Field)"
   case "BLQ":
      return "Bologna, Italy Guglielmo Marconi"
   case "BZO":
      return "Bolzano, Italy - Bolzano Airport"
   case "BOM":
      return "Bombay, India - Mumbai"
   case "BON":
      return "Bonaire, Netherlands Antilles Flamingo Field"
   case "YVB":
      return "Bonaventure, Quebec, Canada"
   case "BNJ":
      return "Bonn, Germany Train Main Railroad Station"
   case "BOB":
      return "Bora Bora, French Polynesia - Motu Mute Airport"
   case "BOD":
      return "Bordeaux, France Merignac"
   case "HBE":
      return "Borg El Arab/Alexandria, Egypt Borg El Arab Airport"
   case "BLE":
      return "Borlange,Sweden - Dala Airport"
   case "RNN":
      return "Bornholm, Denmark Arnager"
   case "BOS":
      return "Boston, MA, USA Logan International Airport"
   case "WBU":
      return "Boulder, CO, USA"
   case "BOJ":
      return "Bourgas, Bulgaria - Bourgas Airport"
   case "BZN":
      return "Bozeman, MT, USA Gallatin Field"
   case "BFD":
      return "Bradford, PA, USA Bradford Regional"
   case "BRD":
      return "Brainerd, MN, USA"
   case "XPN":
      return "Brampton, Ontario, Canada Brampton / Via Rail Service"
   case "BMP":
      return "Brampton Island, Australia - Brampton Island Airport"
   case "YBR":
      return "Brandon, Manitoba, Canada"
   case "XFV":
      return "Brantford, Ontario, Canada Brantford / Via Rail Service"
   case "BSB":
      return "Brasilia, Distrito Federal, Brazil International"
   case "BTS":
      return "Bratislava, Slovakia Ivanka"
   case "BZV":
      return "Brazzaville, COngo - Maya Maya Airport"
   case "QKB":
      return "Breckenridge, CO, USA"
   case "BRE":
      return "Bremen, Germany Bremen"
   case "PWT":
      return "Bremerton, WA, USA Municipal"
   case "VBS":
      return "Brescia, Italy - Brescia Airport"
   case "BES":
      return "Brest, France Guipavas"
   case "BDR":
      return "Bridgeport, CT, USA Sikorsky Memorial"
   case "BGI":
      return "Bridgetown, Barbados Grantley Adams International"
   case "BDS":
      return "Brindisi, Italy - Brindisi Airport"
   case "BNE":
      return "Brisbane, Queensland, Australia Brisbane International Airport"
   case "BRS":
      return "Bristol, England, United Kingdom Bristol"
   case "TRI":
      return "Bristol/Johnson City/Kingsport, TN, USA Municipal TriCity Airport"
   case "BVE":
      return "BriveLaGaillarde, France Laroche"
   case "BRQ":
      return "Brno, Czech Republic Turany"
   case "XBR":
      return "Brockville, Ontario, Canada"
   case "BHQ":
      return "Broken Hill, New South Wales, Australia Broken Hill"
   case "BNN":
      return "Bronnoysund, Norway Bronnoy"
   case "BKX":
      return "Brookings, SD, USA Brookings Municipal Airport"
   case "BME":
      return "Broome, Australia - Broome Airport"
   case "YVM":
      return "Broughton Island, Canada - Broughton Island Airport"
   case "BRO":
      return "Brownsville, TX, USA South Padre Island Intl"
   case "BWD":
      return "Brownwood, Texas, USA - Brownwood Airport"
   case "OST":
      return "Bruges, Belgium - Ostend/Bruges International Airport"
   case "BWN":
      return "Brunei/Bandar Seri Begawan, Brunei Darussalam - Brunei International"
   case "BQK":
      return "Brunswick, GA, USA Glynco Jetport"
   case "BRU":
      return "Brussels, Belgium National"
   case "BGA":
      return "Bucaramanga, Colombia Palo Negro"
   case "BBU":
      return "Bucharest, Romania Baneasa"
   case "OTP":
      return "Bucharest, Romania Otopeni"
   case "BUD":
      return "Budapest, Hungary Ferihegy"
   case "EZE":
      return "Buenos Aires, Buenos Aires, Argentina - Ezeiza Ministro Pistarini International Airport"
   case "AEP":
      return "Buenos Aires, Buenos Aires, Argentina - Jorge Newberry"
   case "BUF":
      return "Buffalo, NY, USA - Buffalo Niagara International Airport (formerly Greater Buffalo Intl Airport)"
   case "BJM":
      return "Bujumbura, Burundi - Bujumbura Airport"
   case "BHK":
      return "Bukhara, Uzbekistan"
   case "BUQ":
      return "Bulawayo, Zimbabwe Bulawayo"
   case "UGA":
      return "Bulgan, Bulgan, Mongolia - Bulgan Airport"
   case "IFP":
      return "Bullhead City, AZ, USA Bullhead"
   case "BDB":
      return "Bundaberg, Australia - Bundaberg Airport"
   case "BUX":
      return "Bunia, Democratic Republic of the Congo (Zaire) - Bunia Airport"
   case "BUR":
      return "Burbank, CA, USA Burbank Glendale Pasadena Airport"
   case "BRL":
      return "Burlington, IA, USA Burlington Municipal Airport"
   case "BTV":
      return "Burlington, VT, USA Burlington International Airport"
   case "BWT":
      return "Burnie, Australia - Burnie Airport"
   case "YPZ":
      return "Burns Lake, British Columbia, Canada"
   case "BUZ":
      return "Bushehr, Iran Bushehr"
   case "BTM":
      return "Butte, MT, USA"
   case "YKZ":
      return "Buttonville, Canada - Buttonville Municipal Airport"
   case "BXU":
      return "Butuan, Philippines Butuan"
   case "BZG":
      return "Bydgoszcz, Poland"
   case "CFR":
      return "Caen, France Carpiquet"
   case "CGY":
      return "Cagayan De Oro, Philippines - Lumbia Airport"
   case "CAG":
      return "Cagliari, Sardinia, Italy Elmas"
   case "PLS":
      return "Caicos, Turks And Caicos Islands - Providenciales"
   case "CNS":
      return "Cairns, Queensland, Australia - Cairns International Airport"
   case "CAI":
      return "Cairo, Egypt International"
   case "CJA":
      return "Cajamarca, Peru - Cjamarca Airport"
   case "CJC":
      return "Calama, Chile - El Loa Airport"
   case "CCU":
      return "Calcutta (Kolkata), India - Calcutta International Airport"
   case "CDW":
      return "Caldwell, New Jersey, USA - Caldwell Airport"
   case "YYC":
      return "Calgary, Alberta, Canada Calgary Intl Airport"
   case "CLO":
      return "Cali, Colombia Alfonso Bonilla Aragon"
   case "CCJ":
      return "Calicut, India"
   case "CLY":
      return "Calvi, Corsica, France Ste Catherine"
   case "XAZ":
      return "Cambellton, New Brunswick, Canada Campbellton"
   case "CBG":
      return "Cambridge, England, United Kingdom Cambridge"
   case "YCB":
      return "Cambridge Bay, Canada - Cambridge Bay Airport"
   case "CDH":
      return "Camden, AR, USA"
   case "YBL":
      return "Campbell River /Campbell Rvr, British Columbia, Canada Metropolitan Area"
   case "YHH":
      return "Campbell River Harbor, Canada - Campbell River Harbor"
   case "CAL":
      return "Campbeltown, United Kindgom - Campbeltown Airport"
   case "CPE":
      return "Campeche, Mexico - Campeche Airport"
   case "CPV":
      return "Campina Grande, Brazil - Campita Grande Airport"
   case "CPQ":
      return "Campinas, Sao Paulo, Brazil Campinas International"
   case "CGR":
      return "Campo Grande, Mato Grosso Do Sul, Brazil"
   case "CAJ":
      return "Canaima, Venezuela"
   case "LPA":
      return "Canary Islands, Gran Canaria, Canary Islands, Spain - Aeropuerto De Gran Canaria"
   case "CBR":
      return "Canberra, Australian Capital Territory, Australia Canberra"
   case "CUN":
      return "Cancun, Mexico"
   case "JCA":
      return "Cannes, France Mandelieu"
   case "YTE":
      return "Cape Dorset, Canada - Cape Dorset Airport"
   case "CIW":
      return "Canouan Island, St Vincent and the Grenadines - Canouan Island Airport"
   case "CNY":
      return "Canyonlands, UT, USA - Canyonlands-Moab Airport"
   case "CGI":
      return "Cape Girardeau, MO, USA Municipal Airport"
   case "EHM":
      return "Cape Newenham, Alaska, USA - Cape Newenham Airport"
   case "CPT":
      return "Cape Town, South Africa D F Malan"
   case "XAW":
      return "Capreol, Ontario, Canada Capreol / Via Rail Service"
   case "PRJ":
      return "Capri,Italy - Capri Airport"
   case "CCS":
      return "Caracas, Venezuela Simon Bolivar International"
   case "CKS":
      return "Carajas, Para, Brazil International / Brasilia Brazil"
   case "MDH":
      return "Carbondale, IL, USA Southern Illinois Airport"
   case "CCF":
      return "Carcassonne, France Salvaza Airport"
   case "CWL":
      return "Cardiff, Wales, United Kingdom CardiffWales"
   case "CLD":
      return "Carlsbad, CA, USA Carlsbad/Palomar Airport"
   case "CNM":
      return "Carlsbad, NM, USA"
   case "CRU":
      return "Carriacou Island, Grenada"
   case "CTG":
      return "Cartagena, Colombia Rafael Nunez"
   case "CUP":
      return "Carupano, Venezuela Carupano"
   case "LRM":
      return "Casa De Campo, Dominican Republic"
   case "CAS":
      return "Casablanca, Morocco Anfa"
   case "CMN":
      return "Casablanca, Morocco Mohamed V"
   case "CAC":
      return "Cascavel, Brazil, Cascavel Airport"
   case "CPR":
      return "Casper, WY, USA Natrona County Intl Airport"
   case "XZB":
      return "Casselman, Ontario, Canada Casselman / Via Rail Service"
   case "YCG":
      return "Castlegar, British Columbia, Canada"
   case "CTA":
      return "Catania, Sicily, Italy Fontanarossa"
   case "SDQ":
      return "Causedo/Santo Domingo, Dominican Republic - Las Americas International Airport"
   case "CXJ":
      return "Caxias Do Sul, Brazil - Caxias Do Sul Airport"
   case "CAY":
      return "Cayenne, French Guiana Rochambeau"
   case "CYB":
      return "Cayman Brac Island, Cayman Islands"
   case "GCM":
      return "Cayman Islands, Grand Cayman Island - Owen Roberts Intl Airport"
   case "CEB":
      return "Cebu, Philippines International"
   case "CDC":
      return "Cedar City, UT, USA"
   case "CID":
      return "Cedar Rapids, IA, USA Municipal"
   case "CDR":
      return "Chadron, NE, USA"
   case "CED":
      return "Ceduna, Australia - Ceduna Airport"
   case "SFB":
      return "Cantral Florida, Orlando, FL, USA - Sanford Central Florida Regional Airport"
   case "CDR":
      return "Chadron, NE, USA - Chadron Airport"
   case "CMF":
      return "Chambery, France Chambery AixLesBains"
   case "XCI":
      return "Chambord, Quebec, Canada Chambord / Via Rail Service"
   case "CMI":
      return "Champaign, IL, USA Univ Of IllinoisWillard Airport"
   case "IXC":
      return "Chandigarh, India Chandigarh"
   case "XDL":
      return "Chandler, Quebec, Canada Chandler / Via Rail Service"
   case "CGQ":
      return "Changchun, China"
   case "CGD":
      return "Changde, China - Changde"
   case "CSX":
      return "Changsha, China"
   case "CIH":
      return "Changzhi, China"
   case "CZX":
      return "Changzhu, China"
   case "CHQ":
      return "Chania, Crete Island, Greece Souda"
   case "LEC":
      return "Chapada Diamantina, Brazil - Chapada Diamantina Airport"
   case "XAP":
      return "Chapeco, Brazil - Chapeco Airport"
   case "CPC":
      return "Chapelco - San Martin De Los Andes, Neuquen, Argentina - Chapelco Airport"
   case "YLD":
      return "Chapleau, Ontario, Canada"
   case "CHS":
      return "Charleston, SC, USA Charleston International Airport"
   case "CRW":
      return "Charleston, WV, USA Yeager Airport"
   case "CTL":
      return "Charleville, Queensland, Australia Charleville"
   case "CLT":
      return "Charlotte, NC, USA Charlotte/Douglas Intl Airport"
   case "STT":
      return "Charlotte, St Thomas Island, VI, USA - Cyril E King Arpt"
   case "CHO":
      return "Charlottesville, VA, USA Charlottesville/Albemarle"
   case "YYG":
      return "Charlottetown, Prince Edward Island/, Canada Charlottetown"
   case "XCM":
      return "Chatham, Ontario, Canada"
   case "CHA":
      return "Chattanooga, TN, USA Cha Lovell Field"
   case "CYF":
      return "Chefornak, Alaska, USA - Chefornak Airport"
   case "CJU":
      return "Cheju, South Korea Cheju"
   case "CEK":
      return "Chelyabinsk, Russia - Chelyabinsk Airport"
   case "XHS":
      return "Chemainus, British Columbia, Canada Chemainus / Via Rail Service"
   case "CTU":
      return "Chengdu, China"
   case "MAA":
      return "Chennai (Madras), India- Chenai-Meenambarkkam Airport"
   case "CJJ":
      return "Cort"
   case "STT":
      return "Charlotte, St Thomas Island, VI, USA - Cyril E King Arpt"
   case "CHO":
      return "Charlottesville, VA, USA Charlottesville/Albemarle"
   case "YYG":
      return "Charlottetown, Prince Edward Island/, Canada Charlottetown"
   case "XCM":
      return "Chatham, Ontario, Canada"
   case "CHA":
      return "Chattanooga, TN, USA Cha Lovell Field"
   case "CYF":
      return "Chefornak, Alaska, USA - Chefornak Airport"
   case "CJU":
      return "Cheju, South Korea Cheju"
   case "CEK":
      return "Chelyabinsk, Russia - Chelyabinsk Airport"
   case "XHS":
      return "Chemainus, British Columbia, Canada Chemainus / Via Rail Service"
   case "CTU":
      return "Chengdu, China"
   case "MAA":
      return "Chennai (Madras), India- Chenai-Meenambarkkam Airport"
   case "CJJ":
      return "Cheong Ju City, Republic of Korea - Cheong Ju City Airport"
   case "CER":
      return "Cherbourg, France Maupertus"
   case "CTM":
      return "Chetumal, Mexico - Chetumal Airport"
   case "VAK":
      return "Chevak, ALaska - Chevak Airport"
   case "YHR":
      return "Chevery, Canada - Chevery Airport"
   case "CYS":
      return "Cheyenne, WY, USA Cheyenne Municipal Airport"
   case "CNX":
      return "Chiang Mai, Thailand International"
   case "CEI":
      return "Chiang Rai, Thailand Chiang Rai"
   case "CYI":
      return "Chiayi, Taiwan - Chiayi Airport"
   case "YMT":
      return "Chibougamau, Quebec, Canada Chibougamau"
   case "CGX":
      return "Chicago, IL, USA - Merrill C. Meigs Field"
   case "CHI":
      return "Chicago, IL, USA - Chicago FSS"
   case "DPA":
      return "Chicago, IL, USA - Dupage County"
   case "GYY":
      return "Chicago - Gary, IN, USA - Gary Regional"
   case "MDW":
      return "Chicago, IL, USA - Midway"
   case "NOH":
      return "Chicago, IL, USA - Chicago NAS"
   case "ORD":
      return "Chicago, IL, USA - O'hare International Airport"
   case "PWK":
      return "Chicago, IL, USA Pal-Waukee Airport"
   case "RFD":
      return "Chicago/Rockford, IL, USA - Chicago Rockford International Airport"
   case "CIX":
      return "Chiclayo, Peru Cornel Ruiz"
   case "CIC":
      return "Chico, CA, USA Chico Municipal Air Terminal"
   case "KIF":
      return "Chifeng, China"
   case "KCG":
      return "Chignik, AK, USA Fisheries"
   case "KCL":
      return "Chignik, AK, USA Lagoon"
   case "KCQ":
      return "Chignik Lake, ALaska, USA - Chignik Lake Airport"
   case "CUU":
      return "Chihuahua, Chihuahua, Mexico Genvillalobos"
   case "YAI":
      return "Chillan, Chile - Chillan Airport"
   case "HIN":
      return "Chinju, Republic of Korea - Chinju Airport"
   case "JKH":
      return "Chios, Greece - Chios Airport"
   case "YKU":
      return "Chisasibi, Canada - Chisasibi Airport"
   case "KIV":
      return "Chisinau (Kishinev), Moldova - Chisinau (Kishinev)"
   case "CJL":
      return "Chitral, Pakistan - Chitral Airport"
   case "CGP":
      return "Chittagong, Bangladesh Patenga"
   case "COQ":
      return "Choibalsan, Dornod, Mongolia - Choibalsan Airport"
   case "CKG":
      return "Chongqing, China"
   case "CHC":
      return "Christchurch, New Zealand International"
   case "STX":
      return "Christiansted, St Croix Island, VI, USA - ALexander Hamilton Airport"
   case "CXI":
      return "Christmas Island, Australia - Cassidy Airport"
   case "YYQ":
      return "Churchill, Manitoba, Canada Churchill Airport"
   case "CIA":
      return "Ciampino, Rome, Italy - Ciampino Airport"
   case "CVG":
      return "Cincinnati, OH, USA Greater Cincinnati Intl Airport"
   case "LUK":
      return "Cincinnati, Ohio, USA - Lunken Field Airport"
   case "CBL":
      return "Ciudad Bolivar, Venezuela"
   case "CME":
      return "Ciudad Del Carmen, Campeche, Mexico"
   case "CJS":
      return "Ciudad Juarez, Chihuahua, Mexico International Abraham Gonzalez"
   case "CEN":
      return "Ciudad Obregon, Sonora, Mexico"
   case "CVM":
      return "Ciudad Victoria, Mexico - Ciudad Victoria Airport"
   case "CKB":
      return "Clarksburg, WV, USA ClarksburgBenedum Airport"
   case "CFE":
      return "Clermont-Ferrand, France - Aulnat"
   case "CLE":
      return "Cleveland, OH, USA Hopkins International Airport"
   case "BKL":
      return "Cleveland Lakefront, OH, USA"
   case "CNJ":
      return "Cloncurry, Australia - Cloncurry Airport"
   case "CVN":
      return "Clovis, NM, USA"
   case "CLJ":
      return "Cluj, Romania Cluj"
   case "YCY":
      return "Clyde River, Canada - Clyde River Airport"
   case "XGJ":
      return "Cobourg, Ontario, Canada Cobourg / Via Rail Service"
   case "CBB":
      return "Cochabamba, Bolivia - Jorge Wilstermann International Airport (formerly San Jose De La Banda)"
   case "COK":
      return "Cochin, India Naval Air Station"
   case "COD":
      return "Cody, Wyoming, USA - Yellowstone Regional Airport"
   case "CFA":
      return "Coffee Point, Alaska, USA - Coffee Point Airport"
   case "CFS":
      return "Coffs Harbour, Australia - Coffs Harbour Airport"
   case "CJB":
      return "Coimbatore, India Peelamedu"
   case "CDB":
      return "Cold Bay, Alaska, USA - Cold Bay Airport"
   case "CLQ":
      return "Colima, Colima, Mexico"
   case "CLL":
      return "College Station, TX, USA"
   case "QKL":
      return "Cologne, Germany Train Main Railroad Station"
   case "CGN":
      return "Cologne/Bonn, Germany Koeln/Bonn"
   case "CMB":
      return "Colombo, Sri Lanka Katunayake International"
   case "CYR":
      return "Colonia, Uruguay"
   case "COS":
      return "Colorado Springs, CO, USA Colorado Springs Municipal"
   case "COU":
      return "Columbia, MO, USA Columbia Regional"
   case "CAE":
      return "Columbia, SC, USA Columbia Sc Airport Metropolitan"
   case "CSG":
      return "Columbus, GA, USA Columbus Metropolitan / Fort Benning"
   case "GTR":
      return "Columbus, MS, USA Golden"
   case "CMH":
      return "Columbus, OH, USA Port Columbus Intl Airport"
   case "CJT":
      return "Comitan, Mexico - Comitan Airport"
   case "CRD":
      return "Comodoro Rivadavia, Chubut, Argentina Comodoro Rivadavia"
   case "YQQ":
      return "Comox, British Columbia, Canada Comox Civil Air Terminal"
   case "CKY":
      return "Conakry, Guinea Conakry"
   case "CCP":
      return "Concepcion, Chile Carriel Sur"
   case "NOC":
      return "Connaught, Ireland Rep Of Ireland"
   case "CND":
      return "Constanta, Romania Kogalniceanu"
   case "CZL":
      return "Constantine, Algeria - Ain El Bey Airport"
   case "CPD":
      return "Coober Pedy, Australia - Coober Pedy Airport"
   case "OOM":
      return "Cooma, New South Wales, Australia"
   case "CPH":
      return "Copenhagen, Denmark Copenhagen"
   case "CPO":
      return "Copiapo, Chile - Chamonate Airport"
   case "YCO":
      return "Coppermine, Northwest Territories, Canada"
   case "COR":
      return "Cordoba, Cordoba, Argentina - Pajas Blancas"
   case "CDV":
      return "Cordova, AK, USA"
   case "CFU":
      return "Corfu (Kerkyra), Greece - Kerkyra"
   case "ORK":
      return "Cork, Ireland Cork"
   case "YCC":
      return "Cornwall, Ontario, Canada Regional"
   case "CZE":
      return "Coro, Venezuela - Coro Airport"
   case "CRP":
      return "Corpus Christi, TX, USA Corpus Christi International Airport"
   case "CNQ":
      return "Corrientes, Argentina - Corrientes Airport"
   case "CEZ":
      return "Cortez, CO, USA Montezuma County"
   case "CMG":
      return "Corumba, Mato Grosso Do Sul, Brazil Corumba"
   case "OLB":
      return "Costa Smeralda - Olbia, Italy"
   case "CBO":
      return "Cotabato, Philippines - Cotabato Airport"
   case "XGK":
      return "Coteau, Quebec, Canada Coteau / Via Rail Service"
   case "COO":
      return "Cotonou, Benin Cotonou"
   case "YCA":
      return "Courtenay, British Columbia, Canada"
   case "CWT":
      return "Cowra, New South Wales, Australia Cowra"
   case "GXQ":
      return "Coyhaique, Chile Teniente Vidal"
   case "CZM":
      return "Cozumel, Quintana Roo, Mexico Aeropuerto Intl De Cozumel"
   case "CGA":
      return "Craig, AK, USA"
   case "YXC":
      return "Cranbrook, British Columbia, Canada - Cranbrook-Kimberley Airport"
   case "CEC":
      return "Crescent City, CA, USA Crescent City Municipal Airport"
   case "CRI":
      return "Crooked Island, Bahamas"
   case "CRV":
      return "Crotone, Italy - Crotone Airport"
   case "CZS":
      return "Cruzeiro Do Sul, Brazil - Cruzeiro Do Sul-Campo International Airport"
   case "CUC":
      return "Cucuta, Colombia Camilo Daza"
   case "CUE":
      return "Cuenca, Ecuador Mariscal La Mar"
   case "CVJ":
      return "Cuernavaca, Mexico - Cuernavaca Airport"
   case "CGB":
      return "Cuiaba, Mato Grosso, Brazil - Cuiaba - Marechal Rondon Airport"
   case "AGT":
      return "Cuidad Del Este, Paraguay - Cuidad Del Este Airport"
   case "CPX":
      return "Culebra, Puerto Rico - Culebra Airport"
   case "CUL":
      return "Culiacan, Sinaloa, Mexico"
   case "CUM":
      return "Cumana, Venezuela"
   case "CBE":
      return "Cumberland, MD, USA Municipal"
   case "CWB":
      return "Curitiba, Parana, Brazil Afonso Pena"
   case "CUZ":
      return "Cuzco, Peru Tte Velazco Astete"
   case "DAD":
      return "Da Nang, Vietnam Da Nang"
   case "DKR":
      return "Dakar, Senegal Yoff"
   case "VIL":
      return "Dakhla, Morocco - Dakla Airport"
   case "DLM":
      return "Dalaman, Turkey Dalaman"
   case "DLZ":
      return "Dalanzadgad, Omnogovi, Mongolia - Dalanzadgad Airport"
   case "DLI":
      return "Dalat, Vietnam - Dalat Airport"
   case "DLU":
      return "Dali City, China - Dali City"
   case "DLC":
      return "Dalian, China"
   case "DAL":
      return "Dallas, TX, USA Love Field"
   case "DFW":
      return "Dallas/Ft Worth, TX, USA Dallas Ft Worth International"
   case "DAM":
      return "Damascus, Syria Damascus Intl"
   case "DMM":
      return "Damman, Saudi Arabia - King Fahad Airport Airport"
   case "DDG":
      return "Dandong, China - Dandong"
   case "DGA":
      return "Dangriga, Belize Dangriga"
   case "DNV":
      return "Danville, IL, USA Vermilion County Airport"
   case "DAN":
      return "Danville, VA, USA"
   case "DAR":
      return "Dar Es Salaam, Tanzania International"
   case "DRW":
      return "Darwin, Northern Territory, Australia"
   case "YDN":
      return "Dauphin, Manitoba, Canada"
   case "DVO":
      return "Davao, Philippines Mati"
   case "YDI":
      return "Davis Inlet, Canada - Davis Inlet Airport"
   case "DWD":
      return "Dawadmi, Saudi Arabia - Dawadmi Airport"
   case "YDQ":
      return "Dawson Creek, British Columbia, Canada"
   case "DYG":
      return "Dayong, China - Dayong"
   case "DAY":
      return "Dayton, OH, USA James M Cox Dayton International"
   case "DAB":
      return "Daytona Beach, FL, USA Daytona Beach International Airport"
   case "LGI":
      return "Deadmans Cay / Long Island, Bahamas Deadmans Cay"
   case "DOL":
      return "Deauville, France Saint Gatien"
   case "DBM":
      return "Debre Marcos, Ethiopia - Debre Marcos Airport"
   case "DEB":
      return "Debrechen, Hungary - Debrechen Airport"
   case "DEC":
      return "Decatur, IL, USA Decatur Municiple Airport"
   case "YDF":
      return "Deer Lake, Newfoundland, Canada Deer Lake"
   case "YVZ":
      return "Deer Lake, Ontario, Canada"
   case "DRT":
      return "Del Rio, TX, USA"
   case "DEL":
      return "Delhi, India - Indira Gandhi International Airport"
   case "DEM":
      return "Dembidollo, Ethiopia Dembidollo"
   case "DNM":
      return "Denham, Western Australia, Australia"
   case "DNZ":
      return "Denizli, Turkey - Denizli Airport"
   case "DPS":
      return "Denpasar Bali, Indonesia Ngurah Rai"
   case "DEN":
      return "Denver, CO, USA Denver International"
   case "DEA":
      return "Dera Ghazi Khan, Pakistan - Dera Ghazi Khan Airport"
   case "DSK":
      return "Dera Ismail Khan, Pakistan - Dera Ismail Khan Airport"
   case "DNF":
      return "Derna, Libya"
   case "DSM":
      return "Des Moines, IA, USA"
   case "YDS":
      return "Desolation Sound, Canada - Desolation Sound Airport"
   case "DSE":
      return "Dessie, Ethiopia - Dessie Airport"
   case "DSI":
      return "Destin, FL, USA"
   case "DTW":
      return "Detroit, MI, USA Detroit-Wayne County Metropolitan Airport"
   case "DET":
      return "Detroit City, MI, USA"
   case "YIP":
      return "Detroit, MI, USA - Willow Run Airport, Ypsilanti"
   case "DVL":
      return "Devils Lake, North Dakota, USA - Devils Lake Airport"
   case "DPO":
      return "Devonport, Tasmania, Australia Devonport"
   case "DHA":
      return "Dhahran, Saudi Arabia Dhahran Intl"
   case "DAC":
      return "Dhaka, Bangladesh Zia International Airport"
   case "DHM":
      return "Dharamsala/Kangra, Himachal Pradesh, India - Kangra Gaggal Dharamsala Airport"
   case "DIB":
      return "Dibrugarh, India Chabua"
   case "DIJ":
      return "Dijon, France Longvic"
   case "DIK":
      return "Dickinson, North Dakota, USA - Dickinson Airport"
   case "DIN":
      return "Dien Bien Phu, Vietnam - Dien Bien Phy Airport"
   case "DIL":
      return "Dili, East Timor - Timor-Leste"
   case "DLG":
      return "Dillingham, Alaska, USA - Dillingham Airport"
   case "DPL":
      return "Dipolog, Philippines Dipolog"
   case "DIG":
      return "Diqing, China - Diqing"
   case "DIR":
      return "Dire Dawa, Ethiopia - Dire Dawa Airport"
   case "DIU":
      return "Diu, India - Diu Airort"
   case "DIY":
      return "Diyarbakir, Turkey Diyarbakia"
   case "DJE":
      return "Djerba, Tunisia - Melita Airport"
   case "JIB":
      return "Djibouti, Djibouti Ambouli"
   case "DNK":
      return "Dnepropetrovsk, Ukraine - Dnepropetrovsk Airport"
   case "DDC":
      return "Dodge City, KS, USA Dodge City Municipal"
   case "DOH":
      return "Doha, Qatar Doha"
   case "DCF":
      return "Dominica, Dominica Cane Field"
   case "DOM":
      return "Dominica, Dominica Melville HalDom"
   case "DSA":
      return "Doncaster, Sheffield, UK - Robin Hood Airport"
   case "DOK":
      return "Donetsk, Ukraine Donetsk"
   case "DTM":
      return "Dortmund, Germany Wickede"
   case "DHN":
      return "Dothan, AL, USA Municipal"
   case "DLA":
      return "Douala, Cameroon Douala"
   case "DRS":
      return "Dresden, Germany Dresden"
   case "XDM":
      return "Drummondville, Quebec, Canada"
   case "YHD":
      return "Dryden, Ontario, Canada Dryden Airport"
   case "DUJ":
      return "Du Bois, PA, USA Jefferson County"
   case "DXB":
      return "Dubai, United Arab Emirates Dubai International Airport"
   case "DBO":
      return "Dubbo, New South Wales, Australia Dubbo"
   case "DUB":
      return "Dublin, Ireland Dublin"
   case "DBV":
      return "Dubrovnik, Croatia Hrvatska"
   case "DBQ":
      return "Dubuque, IA, USA Dubuque Municipal Airport"
   case "QDU":
      return "Duesseldorf, Germany Main Train Station"
   case "DLH":
      return "Duluth, MN, USA Duluth International Airport"
   case "DGT":
      return "Dumaguete, Philippines - Dumaguete Airport"
   case "DUQ":
      return "Duncan / Quam, British Columbia, Canada Quamichan Lake"
   case "DND":
      return "Dundee, Scotland, United Kingdom Dundee"
   case "DUD":
      return "Dunedin, New Zealand Momona"
   case "DNH":
      return "Dunhuang, China - Dunhuang"
   case "DRO":
      return "Durango, CO, USA Durango La Plata County Airport"
   case "DGO":
      return "Durango, Durango, Mexico Gen Guadalupe Victoria"
   case "DUR":
      return "Durban / La Mercy, South Africa - King Shaka International Airport (La Mercy Airport, Replaced Louis Botha airport)"
   case "DUS":
      return "Dusseldorf, Germany Dusseldorf"
   case "DUT":
      return "Dutch Harbor, AK, USA Dutch Harbor"
   case "ELS":
      return "East London, South Africa Ben Shoeman"
   case "EMA":
      return "East Midlands, England, United Kingdom East Midlands"
   case "IPC":
      return "Easter Island, Chile Mataveri"
   case "ESD":
      return "Eastsound, WA, USA Eastsound/Orcas Island Airport"
   case "EAU":
      return "Eau Claire, WI, USA Eau Claire Municipal"
   case "ECH":
      return "Echuca, Australia"
   case "EDI":
      return "Edinburgh, Scotland, United Kingdom Turnhouse"
   case "YEG":
      return "Edmonton, Alberta, Canada Edmonton International"
   case "YXD":
      return "Edmonton, Alberta, Canada Edmonton Municipal"
   case "EDR":
      return "Edward River, Queensland, Australia Edward River"
   case "EIN":
      return "Eindhoven, Netherlands Welschap"
   case "SVX":
      return "Ekaterinburg, Russia - Sheremtyevo Airport"
   case "BCQ":
      return "El Beida / La Braq,Libya"
   case "FTE":
      return "El Calafate, Argentina - El Calafate Airport"
   case "AZS":
      return "El Catey, Dominican Republic - Samana El Catey International Airport"
   case "ELD":
      return "El Dorado, AR, USA"
   case "ELP":
      return "El Paso, TX, USA El Paso International Airport"
   case "ESR":
      return "El Salvador, Chile"
   case "ETH":
      return "Elat, Israel Elat"
   case "EBA":
      return "Elba Island, Italy Marina Di Campo"
   case "QEJ":
      return "Elgarhbolli, Libya"
   case "EKO":
      return "Elko, NV, USA J C Harris Field"
   case "YEL":
      return "Elliot Lake, Ontario, Canada"
   case "QEC":
      return "Elmarj City, Libya"
   case "ELM":
      return "Elmira / Corning, NY, USA Elmira Corning Regional Arpt"
   case "ELY":
      return "Ely, NV, USA Yelland Field"
   case "EMD":
      return "Emerald, Queensland, Australia Emerald"
   case "WDG":
      return "Enid, OK, USA Woodring Municipal"
   case "ENS":
      return "Enschede, Netherlands Twente"
   case "EBB":
      return "Entebbe/Kampala, Uganda Entebbe"
   case "ERF":
      return "Erfurt, Germany Erfurt"
   case "ERI":
      return "Erie, PA, USA Erie International"
   case "ERZ":
      return "Erzurum, Turkey Erzurum"
   case "EBJ":
      return "Esbjerg, Denmark Esbjerg"
   case "ESC":
      return "Escanaba, MI, USA Delta County Airport"
   case "EQS":
      return "Esquel, Argentina - Esquel Airport"
   case "EPR":
      return "Esperance, Western Australia, Australia Esperance"
   case "YPF":
      return "Esquimalt, British Columbia, Canada"
   case "EUG":
      return "Eugene, OR, USA Eugene Airport"
   case "EVV":
      return "Evansville, IN, USA Evansville Regional Airport"
   case "EVE":
      return "Evenes, Norway Evenes"
   case "EXT":
      return "Exeter, England, United Kingdom Exeter"
   case "FAI":
      return "Fairbanks, AK, USA Fairbanks International Airport"
   case "FRM":
      return "Fairmont, MN, USA Fairmont Municipal"
   case "LYP":
      return "Faisalabad, Pakistan Lyallpur"
   case "FAR":
      return "Fargo, ND, USA Hector Airport"
   case "FRG":
      return "Farmingdale, Long Island, NY, USA - Republic Airport"
   case "FMN":
      return "Farmington, NM, USA Four Corners Regional Airport"
   case "FAO":
      return "Faro, Portugal Faro"
   case "FAE":
      return "Faroe Islands, Faroe Islands Faeroe Islands"
   case "FYV":
      return "Fayetteville, AR, USA Municipal"
   case "XNA":
      return "Fayetteville, AR, USA - Northwest Arkansas Regional"
   case "FAY":
      return "Fayetteville, NC, USA Fayetteville Municipal"
   case "FFM":
      return "Fergus Falls, MN, USA Fergus Falls Municipal Airport"
   case "FEN":
      return "Fernando De Noronha, Brazil - Fernando De Noronha Airport"
   case "FEZ":
      return "Fez, Morocco Fez"
   case "FLG":
      return "Flagstaff, AZ, USA Flagstaff"
   case "YFO":
      return "Flin Flon, Canada - Flin Flon Airport"
   case "FNT":
      return "Flint, MI, USA Bishop Int'l Airport"
   case "FLR":
      return "Florence, Italy"
   case "FLO":
      return "Florence, SC, USA Gilbert Field"
   case "FRS":
      return "Flores, Guatemala Flores"
   case "FLN":
      return "Florianopolis, Santa Catarina, Brazil Florianopolis Hercilio Luz Airport"
   case "FRO":
      return "Floro, Norway Floro"
   case "FDE":
      return "Forde, Norway Forde"
   case "FMA":
      return "Formosa, Formosa, Argentina Formosa"
   case "YFA":
      return "Fort Albany, Canada - Fort Albany Airport"
   case "YVP":
      return "Fort Chimo (Kuujjuaq), Quebec, Canada - Fort Chimo Airport"
   case "FNL":
      return "Fort Collins/Loveland, CO, USA Fort Collins / Loveland Airport"
   case "FDF":
      return "Fort De France, Martinique Fort De France"
   case "FOD":
      return "Fort Dodge, IA, USA Fort Dodge Regional Airport"
   case "FHU":
      return "Fort Huachuca/Sierra Vista, AZ, USA"
   case "FLL":
      return "Fort Lauderdale, FL, USA Ft Lauderdale/Hollywood Intl Apt"
   case "TBN":
      return "Fort Leonard Wood, MO, USA Forney Field"
   case "YMM":
      return "Fort Mcmurray, Alberta, Canada Fort Mcmurray Municipal"
   case "RSW":
      return "Fort Myers, FL, USA Regional Southwest Airport"
   case "YYE":
      return "Fort Nelson, Canada - Fort Nelson Airport"
   case "YXJ":
      return "Fort Saint John, British Columbia, Canada Fort St John"
   case "YFS":
      return "Fort Simpson, Northwest Territories, Canada Fort Simpson Airport"
   case "FSM":
      return "Fort Smith, AR, USA Fort Smith Municipal"
   case "YSM":
      return "Fort Smith, Northwest Territories, Canada"
   case "YXJ":
      return "Fort St John, British Columbia, Canada Fort St John"
   case "FWA":
      return "Fort Wayne, IN, USA Baer Field"
   case "FOR":
      return "Fortaleza, Ceara, Brazil Fortaleza-Pinto Martins Airport"
   case "FRA":
      return "Frankfurt, Germany Frankfurt International"
   case "HHN":
      return "Frankfurt, Germany - Hahn"
   case "FKL":
      return "Franklin, PA, USA Chess Lamberton"
   case "YXX":
      return "Fraser Valley/Abbotsford, Canada - Abbotsford Airport"
   case "EZF":
      return "Fredericksburg, Virginia, USA - Shannon Airport"
   case "YFC":
      return "Fredericton, New Brunswick, Canada Fredericton Municipal Apt"
   case "FPO":
      return "Freeport, Bahamas Freeport Intl Airport"
   case "FAT":
      return "Fresno, CA, USA Fresno Air Terminal"
   case "FRD":
      return "Friday Harbor, WA, USA Friday Harbor Airport"
   case "FDH":
      return "Friedrichshafen, Germany Friedrichshafen Lowenthal"
   case "YFA":
      return "Ft Albany, Canada - Fort Albany Airport"
   case "YVP":
      return "Ft Chimo (Kuujjuaq), Quebec, Canada - Fort Chimo Airport"
   case "FNL":
      return "Ft Collins/Loveland, CO, USA Fort Collins / Loveland Airport"
   case "FDF":
      return "Ft De France, Martinique Fort De France"
   case "FOD":
      return "Ft Dodge, IA, USA Fort Dodge Regional Airport"
   case "FHU":
      return "Ft Huachuca/Sierra Vista, AZ, USA"
   case "FLL":
      return "Ft Lauderdale, FL, USA Ft Lauderdale/Hollywood Intl Apt"
   case "TBN":
      return "Ft Leonard Wood, MO, USA Forney Field"
   case "YMM":
      return "Ft Mcmurray, Alberta, Canada Fort Mcmurray Municipal"
   case "RSW":
      return "Ft Myers, FL, USA Regional Southwest Airport"
   case "YYE":
      return "Ft Nelson, Canada - Fort Nelson Airport"
   case "YXJ":
      return "Ft Saint John, British Columbia, Canada Fort St John"
   case "YFS":
      return "Ft Simpson, Northwest Territories, Canada Fort Simpson Airport"
   case "FSM":
      return "Ft Smith, AR, USA Fort Smith Municipal"
   case "YSM":
      return "Ft Smith, Northwest Territories, Canada"
   case "YXJ":
      return "Ft St John, British Columbia, Canada Fort St John"
   case "FWA":
      return "Ft Wayne, IN, USA Baer Field"
   case "FUE":
      return "Fuerteventura / Puerto Del Rosario, Canary Islands/Fuerteventura Island, Spain Fuerteventura"
   case "FUK":
      return "Fukuoka, Japan Itazuke"
   case "FUN":
      return "Funafuti, Funafuti Atol, Tuvalu - International"
   case "FNC":
      return "Funchal, Madeira Islands, Portugal Funchal"
   case "FUG":
      return "Fuyang, China - Fuyang"
   case "FOC":
      return "Fuzhou, China - Fuzhou"
   case "GBE":
      return "Gaborone, Botswana Gaborone"
   case "GNV":
      return "Gainesville, FL, USA Jr Alison Municipal"
   case "GPS":
      return "Galapagos Islands, Ecuador Baltra"
   case "GAL":
      return "Galena, AK, USA"
   case "GBG":
      return "Galesburg, IL, USA Galesburg Municiple Airport"
   case "GUP":
      return "Gallup, NM, USA Gallup Municipal"
   case "GLS":
      return "Galveston, TX, USA Scholes Field"
   case "GWY":
      return "Galway, Ireland Carnmore"
   case "YQX":
      return "Gander, Newfoundland, Canada Gander Intl Airport"
   case "YGG":
      return "Ganges Harbor, Canada - Ganges Harbor Airport"
   case "KOW":
      return "Ganzhou, China - Ganzhou"
   case "GCK":
      return "Garden City, KS, USA Garden City Municipal Airport"
   case "GYY":
      return "Gary, IN, USA - Gary Regional"
   case "YGP":
      return "Gaspe, Quebec, Canada"
   case "ELQ":
      return "Gassim, Saudi Arabia - Gassim Airport"
   case "YND":
      return "Gatineau, Quebec, Canada Gatineau"
   case "GAU":
      return "Gauhati, India Borjhar"
   case "GDN":
      return "Gdansk, Poland Rebiechowo"
   case "GVA":
      return "Geneva, Switzerland Geneva"
   case "GOA":
      return "Genoa, Italy Christoforo Colombo"
   case "GGT":
      return "George Town, Bahamas Exuma International"
   case "GRJ":
      return "George, South Africa George"
   case "GEO":
      return "Georgetown, Guyana Timehri"
   case "XHM":
      return "Georgetown, Ontario, Canada Georgetown / Via Rail Service"
   case "GET":
      return "Geraldton, Western Australia, Australia Geraldton"
   case "GRO":
      return "Gerona, Spain Costa Brava"
   case "LTD":
      return "Ghadames, Libya"
   case "GHT":
      return "Ghat, Libya"
   case "QGH":
      return "Gherian, Libya"
   case "GIB":
      return "Gibraltar, Gibraltar Gibraltar"
   case "GIL":
      return "Gilgit, Pakistan, Gilgit Airport"
   case "GCC":
      return "Gillam, Manitoba, Canada"
   case "GCC":
      return "Gillette, WY, USA Campbell County Airport"
   case "YGB":
      return "Gillies Bay, British Columbia, Canada"
   case "GIZ":
      return "Gizan (Jizan), Jizan province, Saudi Arabia - Gizan Airport"
   case "YHK":
      return "Gjoa Haven, Canada - Gjoa Haven Airport"
   case "GLT":
      return "Gladstone, Australia - Gladstone Airport"
   case "GGW":
      return "Glasgow, MT, USA"
   case "GLA":
      return "Glasgow, Scotland, United Kingdom Glasgow Scotland"
   case "PIK":
      return "Glasgow, Scotland, United Kingdom Prestwick"
   case "XZC":
      return "Glencoe, Ontario, Canada Glencoe / Via Rail Service"
   case "GDV":
      return "Glendive, MT, USA"
   case "GOI":
      return "Goa, India Dabolim"
   case "YGO":
      return "Gods Narrows, Canada - Gods Narrows Airport"
   case "ZGI":
      return "Gods River, Manitoba, Canada"
   case "GYN":
      return "Goiania, Brazil - Goiania-Santa Genoveva Airport"
   case "OOL":
      return "Gold Coast, Queensland, Australia Coolangatta"
   case "GLF":
      return "Golfito, Costa Rica Golfito"
   case "GLV":
      return "Golovin, AK, USA"
   case "GLD":
      return "Goodland, KS, USA Renner Field"
   case "YYR":
      return "Goose Bay, Newfoundland, Canada Goose Bay Municipal Airpt"
   case "GKA":
      return "Goroka, Papua New Guinea Goroka"
   case "GTO":
      return "Gorontalo, Indonesia Tolotio"
   case "GOT":
      return "Gothenburg, Sweden Landvetter"
   case "GOV":
      return "Gove, Northern Territory, Australia Nhulunbuy"
   case "GHB":
      return "Governors Harbour, Bahamas"
   case "LPA":
      return "Gran Canaria, Canary Islands, Spain Aeropuerto De Gran Canaria"
   case "GRX":
      return "Granada, Spain Granada"
   case "GCN":
      return "Grand Canyon, AZ, USA"
   case "GCM":
      return "Grand Cayman Island, Cayman Islands Owen Roberts Intl Airport"
   case "GFK":
      return "Grand Forks, ND, USA Grand Forks International Airport"
   case "GRI":
      return "Grand Island, NE, USA Central Nebraska Regional Airport"
   case "GJT":
      return "Grand Junction, CO, USA Walker Field"
   case "GRR":
      return "Grand Rapids, MI, USA Kent County International Airport"
   case "GDT":
      return "Grand Turk Is, Turks And Caicos Islands"
   case "YQU":
      return "Grande Prairie, Alberta, Canada Grande Prairie Airport"
   case "GRZ":
      return "Graz, Austria Thalerhof"
   case "GBD":
      return "Great Bend, Kansas, USA - Airport"
   case "GTF":
      return "Great Falls, MT, USA Great Falls International"
   case "GRB":
      return "Green Bay, WI, USA - Austin Straubel International Airport (Austin/Straybel Field)"
   case "LWB":
      return "Greenbrier, WV, USA Greenbrier Valley Airport"
   case "GSO":
      return "Greensboro / High Point, NC, USA Piedmont Triad Intl Airport"
   case "GRE":
      return "Greenville, IL, USA - Municipal"
   case "PGV":
      return "Greenville, NC, USA - Pitt-Greenville"
   case "GLH":
      return "Greenville, MS, USA - Greenville"
   case "GDC":
      return "Greenville, SC, USA - Donaldson Center"
   case "GMU":
      return "Greenville, SC, USA - Downtown"
   case "GSP":
      return "Greenville, SC, USA - Greenville-Spartanburg Metro"
   case "GCY":
      return "Greenville, TN, USA - Municipal"
   case "GVT":
      return "Greenville, TX, USA - Majors Field"
   case "YGN":
      return "Greenway Sound, Canada - Greenway Sound Airport"
   case "GNB":
      return "Grenoble, France St Geoirs"
   case "GFF":
      return "Griffith, Australia - Griffith Airport"
   case "XGY":
      return "Grimsby, Ontario, Canada Grimsby / Via Rail Service"
   case "GRQ":
      return "Groningen, Netherlands Eelde"
   case "GON":
      return "Groton / New London, CT, USA GrotonNew London"
   case "GDL":
      return "Guadalajara, Jalisco, Mexico Miguel Hidalgo Intl"
   case "GUM":
      return "Guam, Guam Ab Wonpat Intl Airport"
   case "CAN":
      return "Guangzhou, China - Baiyun"
   case "GUA":
      return "Guatemala City, Guatemala La Aurora Intl Airport"
   case "GYE":
      return "Guayaquil, Ecuador Simon Bolivar"
   case "GYA":
      return "Guayaramerin, Bolivia - Buayaramerin Airport"
   case "GYM":
      return "Guaymas, Sonora, Mexico"
   case "XIA":
      return "Guelph, Ontario, Canada Guelph / Via Rail Service"
   case "GCI":
      return "Guernsey, Channel Islands, United Kingdom Guernsey"
   case "GUB":
      return "Guerrero Negro, Baja California Sur, Mexico Guerrero Negro Airport"
   case "KWL":
      return "Guilin, China"
   case "KWE":
      return "Guiyang, China - Guiyang"
   case "GPT":
      return "Gulfport, MS, USA Gulfport/Biloxi"
   case "GUC":
      return "Gunnison, CO, USA Gunnison County Airport"
   case "URY":
      return "Gurayat, Saudi Arabia - Gurayat Airport"
   case "GST":
      return "Gustavus, Alaska, USA - Gustavus Airport"
   case "GWD":
      return "Gwadar, Pakistan"
   case "HPA":
      return "Ha'Apai, Tonga - Ha'Apai Airport"
   case "HBT":
      return "Hafr Albatin, Saudi Arabia - Hafr Albatin Airport"
   case "HGR":
      return "Hagerstown, MD, USA Washington County Regional Airport"
   case "HFA":
      return "Haifa, Israel - Haifa Airport"
   case "HAK":
      return "Haikou, China Haikou"
   case "HAS":
      return "Hail, Saudi Arabia - Hail Airport"
   case "HLD":
      return "Hailar, China - Hailar"
   case "HNS":
      return "Haines, AK, USA"
   case "HPH":
      return "Haiphong, Vietnam - Haiphong Airport"
   case "HAC":
      return "Hachijo Jima, Japan - Hachijo Jima Airport"
   case "HKD":
      return "Hakodate, Japan Hakodate"
   case "YHZ":
      return "Halifax, Nova Scotia, Canada Halifax International"
   case "YUX":
      return "Hall Beach, Canada - Hall Beach Airport"
   case "HAD":
      return "Halmstad, Sweden Halmstad"
   case "HAM":
      return "Hamburg, Germany Fuhlsbuttel"
   case "HTI":
      return "Hamilton Island, Queensland, Australia"
   case "HLZ":
      return "Hamilton, New Zealand Hamilton"
   case "YHM":
      return "Hamilton, Ontario, Canada Hamilton Civic Airport"
   case "HFT":
      return "Hammerfest, Norway"
   case "HNM":
      return "Hana, Hawaii, USA - Hana Airport"
   case "CMX":
      return "Hancock, MI, USA Houghton County / Memorial"
   case "HGH":
      return "Hangzhou, China"
   case "HAN":
      return "Hanoi, Vietnam Noibai Airport"
   case "HAJ":
      return "Hanover, Germany Langenhagen"
   case "HRE":
      return "Harare, Zimbabwe Harare"
   case "ZNA":
      return "Harbour/Nanaimo, British Columbia, Canada - Harbor Airport"
   case "HRB":
      return "Harbin, China"
   case "HGA":
      return "Hargeisa, Somalia - Hargeisa Airport"
   case "HRL":
      return "Harlingen, TX, USA"
   case "MDT":
      return "Harrisburg, PA, USA Harrisburg International Airport"
   case "HRO":
      return "Harrison, AR, USA Boone County"
   case "BDL":
      return "Hartford, CT, USA Bradley International Airport"
   case "HSI":
      return "Hastings, NE, USA"
   case "HDY":
      return "Hat Yai, Thailand"
   case "HAU":
      return "Haugesund, Norway Karmoy"
   case "HAV":
      return "Havana, Cuba Jose Marti"
   case "HVR":
      return "Havre, MT, USA City County"
   case "YHY":
      return "Hay River, Northwest Territories, Canada"
   case "HDN":
      return "Hayden, CO, USA Yampa Valley Regional Airport"
   case "HIS":
      return "Hayman Island, Queensland, Australia Hayman Island Airport"
   case "HYS":
      return "Hays, KS, USA Hays Municipal Airport"
   case "HFE":
      return "Hefei, China - Hefei"
   case "HEH":
      return "Heho, Myanmar (Burma) - Heho Airport"
   case "HDB":
      return "Heidelberg, Germany"
   case "HLN":
      return "Helena, MT, USA"
   case "AGH":
      return "Helsingborg, Sweden Angelholm/Helsingborg"
   case "JHE":
      return "Helsingborg, Sweden Heliport"
   case "HEL":
      return "Helsinki, Finland Helsinki"
   case "HER":
      return "Heraklion, Crete Island, Greece Heraklion"
   case "HEA":
      return "Herat, Afghanistan - Herat"
   case "HDF":
      return "Heringsdorf, Germany - Heringsdorf Airport"
   case "HMO":
      return "Hermosillo, Sonora, Mexico General Ignacio Pesqueira Garcia"
   case "HVB":
      return "Hervey Bay, Queensland, Australia"
   case "XDU":
      return "Hervey, Quebec, Canada Hervey / Via Rail Service"
   case "HIB":
      return "Hibbing / Chisholm, MN, USA HibbingChisholm"
   case "HKY":
      return "Hickory, NC, USA"
   case "YOJ":
      return "High Level, Alberta, Canada Footner Lake Muncpl"
   case "ITO":
      return "Hilo, HI, USA Hilo Hawaii:HawaiiInternational Usa"
   case "HHH":
      return "Hilton Head, SC, USA Municipal"
   case "HIJ":
      return "Hiroshima, Japan Hiroshima"
   case "SGN":
      return "Ho Chi Minh City, Vietnam Tan Son Nhut"
   case "HBA":
      return "Hobart, Tasmania, Australia - Hobart Cambridge Airport"
   case "HOB":
      return "Hobbs, NM, USA Lea County"
   case "HDS":
      return "Hoedspruit, South Africa - Hoedspruit Airport"
   case "HOQ":
      return "Hof Airport"
   case "HOF":
      return "Hofuf, Saudi Arabia - Hofuf Airport"
   case "HET":
      return "Hohhot, China"
   case "HKK":
      return "Hokitika, New Zealand Hokitika"
   case "YHI":
      return "Holman Island, Northwest Territories, Canada"
   case "HOM":
      return "Homer, AK, USA Homer Airport"
   case "HKG":
      return "Hong Kong, Hong Kong"
   case "HIR":
      return "Honiara/Guadalcanal, Solomon Islands Henderson International"
   case "HVG":
      return "Honningsvag, Norway - Honningsvag-Valan Airport"
   case "HNL":
      return "Honolulu, HI, USA Honolulu International"
   case "MKK":
      return "Hoolehua, HI, USA Municipal"
   case "HNH":
      return "Hoonah, AK, USA"
   case "HPB":
      return "Hooper Bay, AK, USA"
   case "HID":
      return "Horn Island, Australia - Horn Island Airport"
   case "YHN":
      return "Hornepayne, Ontario, Canada"
   case "HSM":
      return "Horsham, Australia"
   case "HOR":
      return "Horta, Portugal - Horta Airport"
   case "HKN":
      return "Hoskins, Papua New Guinea Hoskins"
   case "HOT":
      return "Hot Springs, AR, USA Memorial Field"
   case "HTN":
      return "Hotan, China - Hotan"
   case "HUM":
      return "Houma, LA, USA Terrebonne"
   case "HUQ":
      return "Houn, Libya"
   case "ZHO":
      return "Houston, British Columbia, Canada"
   case "IAH":
      return "Houston, TX, USA"
   case "EFD":
      return "Houston, TX, USA Ellington Field"
   case "HOU":
      return "Houston, TX, USA Houston Hobby Airport"
   case "HOU":
      return "Houston, TX, USA Houston Hobby Airport"
   case "IAH":
      return "Houston, TX, USA Houston Intercontinental"
   case "HUH":
      return "Huahine, French Polynesia - Huahine Airport"
   case "HUN":
      return "Hualien, Taiwan Hualien"
   case "HYN":
      return "Huangyan, China - Huangyan"
   case "HUX":
      return "Huatulco, Oaxaca, Mexico"
   case "YHB":
      return "Hudson Bay, Saskatchewan, Canada"
   case "HUI":
      return "Hue, Vietnam"
   case "HUY":
      return "Humberside, England, United Kingdom Humberside"
   case "HTS":
      return "Huntington / Ashland, WV, USA TriState"
   case "HSV":
      return "Huntsville/Decatur, AL, USA HuntsvilleMadison County Jetplex"
   case "HRG":
      return "Hurghada, Egypt"
   case "HON":
      return "Huron, SD, USA Huron Regional Airport"
   case "HWN":
      return "Hwange National Park, Zimbabwe Hwange National Park"
   case "HYA":
      return "Hyannis, MA, USA Barnstable County"
   case "HYG":
      return "Hydaburg, AK, USA"
   case "HYD":
      return "Hyderabad, India Begumpet"
   case "IAS":
      return "Iasi, Romania Iasi"
   case "IBZ":
      return "Ibiza, Spain Ibiza"
   case "IDA":
      return "Idaho Falls, ID, USA"
   case "IGG":
      return "Igiugig, Alaska, USA - Iguigig Airport"
   case "YGT":
      return "Igloolik, Northwest Territories, Canada"
   case "IGU":
      return "Iguassu Falls, Parana, Brazil - Igaussu Falls - Cataratas Airport"
   case "IGR":
      return "Iguazu, Misiones, Argentina Iguazu International"
   case "JIK":
      return "Ikaria Island, Greece - Ikaria Airport"
   case "YGR":
      return "Iles De La Madeleine, Quebec, Canada House Harbour Airport"
   case "ILF":
      return "Ilford, Manitoba, Canada"
   case "IOS":
      return "Ilheus, Bahia, Brazil - Eduardo Gomes"
   case "ILI":
      return "Iliamna, AK, USA"
   case "ILQ":
      return "Ilo, Moquegua, Peru Ilo Airport"
   case "ILO":
      return "Iloilo, Philippines Mandurriao"
   case "JAV":
      return "Ilulissat, Greenland"
   case "IMP":
      return "Imperatriz, Maranhao, Brazil"
   case "IMF":
      return "Imphal, India Municipal"
   case "IGA":
      return "Inagua, Bahamas"
   case "ICN":
      return "Incheon [Seoul], South Korea - Incheon International Airport"
   case "SHC":
      return "Indaselassie, Ethiopia"
   case "IND":
      return "Indianapolis, IN, USA Indianapolis International Airport"
   case "IDR":
      return "Indore, India - Indore Airport"
   case "XIB":
      return "Ingersoll, Ontario, Canada Ingersoll / Via Rail Service"
   case "INN":
      return "Innsbruck, Austria Kranebitten"
   case "INL":
      return "International Falls, MN, USA Falls International"
   case "YPH":
      return "Inukjuak, Canada - Inukjuak Airport"
   case "YEV":
      return "Inuvik, Northwest Territories, Canada Inuvik International Arpt"
   case "IVC":
      return "Invercargill, New Zealand - Invercargill Airport"
   case "INV":
      return "Inverness, Scotland, United Kingdom Inverness"
   case "IYK":
      return "Inyokern, CA, USA Inyokern Airport"
   case "IOA":
      return "Ioannina, Greece Ioannina"
   case "IPI":
      return "Ipiales, Colombia San Luis"
   case "IPH":
      return "Ipoh, Malaysia Ipoh"
   case "YFB":
      return "Iqaluit, Northwest Territories, Canada - Iqaluit-Frobisher Bay Airport"
   case "IQQ":
      return "Iquique, Chile Chucumata"
   case "IQT":
      return "Iquitos, Peru Cf Secada"
   case "IKT":
      return "Irkutsk, Russia - Irkutsk-Southeast Airport"
   case "IMT":
      return "Iron Mountain, MI, USA Ford Airport"
   case "IWD":
      return "Ironwood, MI, USA Gogebic County Airport"
   case "ISH":
      return "Ischia, Italy - Ischia Airport"
   case "IFN":
      return "Isfahan, Iran - Isfahan Airport"
   case "ISG":
      return "Ishigaki, Japan - Ishigaki Airport"
   case "ISB":
      return "Islamabad, Pakistan International"
   case "ILY":
      return "Islay, Scotland, United Kingdom Glenegedale"
   case "IOM":
      return "Isle Of Man, Isle Of Man, United Kingdom Ronaldsway"
   case "ISC":
      return "Isles Of Scilly, Isles Of Scilly, United Kingdom Tresco"
   case "ISP":
      return "Islip, NY, USA Long IslandMacarthur Airport"
   case "IST":
      return "Istanbul, Turkey Ataturk"
   case "QIE":
      return "Istres, France - Le Tube airport"
   case "ITB":
      return "Itaituba, Brazil - Itaituba Airport"
   case "ITH":
      return "Ithaca, NY, USA Tompkins County"
   case "IVL":
      return "Ivalo, Finland - Ivalo Airport"
   case "IFO":
      return "Ivano-Frankovsk, Ukraine - Ivano-Frankovsk Airport"
   case "YIK":
      return "Ivujivik, Canada - Ivujivik Airport"
   case "IWJ":
      return "Iwami, Japan - Iwami Airport"
   case "ZIH":
      return "Ixtapa/Zihuatanejo, Guerrero, Mexico International"
   case "IJK":
      return "Izhevsk, Russia"
   case "ADB":
      return "Izmir, Turkey Adnan Menderes"
   case "IZO":
      return "Izumo, Japan"
   case "JAG":
      return "Jacobabad, Pakistan - Jacobabad Airport"
   case "JAT":
      return "Jabat, Marshall Islands Jabat Intl"
   case "JAC":
      return "Jackson Hole, WY, USA Jackson Hole Airport"
   case "JAN":
      return "Jackson, MS, USA Allen C Thompson Field"
   case "MKL":
      return "Jackson, TN, USA Mc Kellar Field"
   case "JAX":
      return "Jacksonville, FL, USA Jacksonville International Airport"
   case "CRG":
      return "Jacksonville, Florida, USA - Craig Municipal Airport"
   case "OAJ":
      return "Jacksonville, NC, USA"
   case "JAI":
      return "Jaipur, India Sanganeer"
   case "HLP":
      return "Jakarta, Indonesia Halim Perdana Kusama"
   case "CGK":
      return "Jakarta, Indonesia Soekarno Hatta International"
   case "JAL":
      return "Jalapa, Mexico - Jalapa Airport"
   case "JMS":
      return "Jamestown, ND, USA Jamestown Municipal Airport"
   case "JHW":
      return "Jamestown, NY, USA Chautauqua County Airport"
   case "IXJ":
      return "Jammu, India Satwari"
   case "JGA":
      return "Jamnagar, India Govardhanpur"
   case "IXW":
      return "Jamshedpur, India Sonari"
   case "YJA":
      return "Jasper, Alberta, Canada"
   case "DJJ":
      return "Jayapura, Indonesia - Sentani-Jayapura Airport"
   case "JED":
      return "Jeddah, Saudi Arabia Jeddah International"
   case "XRY":
      return "Jerez De La Frontera, Spain La Parra"
   case "JER":
      return "Jersey, Channel Islands, United Kingdom States"
   case "JIJ":
      return "Jijiga, Ethiopia - Jijiga Airport"
   case "JIL":
      return "Jilin, China - Jilin"
   case "JIM":
      return "Jimma, Ethiopia - Jimma Airport"
   case "TNA":
      return "Jinan, China - Jinan"
   case "JHG":
      return "Jinghong, China - Jinghong"
   case "JJN":
      return "Jinjiang, China - Jinjiang"
   case "GIZ":
      return "Jizan (Gizan), Jizan province, Saudi Arabia - Gizan Airport"
   case "JPA":
      return "Joao Pessoa, Brazil - Castro Pinto Airport"
   case "JDH":
      return "Jodhpur, India"
   case "JOE":
      return "Joensuu, Finland - Joensuu Airport"
   case "JNB":
      return "Johannesburg, South Africa - O R Tambo International Airport (formerly Jan Smuts)"
   case "JON":
      return "Johnston Island, US, Outlying Islands"
   case "JST":
      return "Johnstown, PA, USA Johnstown Cambria"
   case "JHB":
      return "Johor Bahru, Malaysia Sultan Ismail International"
   case "JOI":
      return "Joinville, Santa Catarina, Brazil Federal/Cubatao Airport"
   case "XJL":
      return "Joliette, Quebec, Canada Joliette / Via Rail Service"
   case "JMO":
      return "Jomsom, Nepal"
   case "JBR":
      return "Jonesboro, AR, USA Municipal"
   case "JKG":
      return "Jonkoping, Sweden Axamo"
   case "XJQ":
      return "Jonquiere, Quebec, Canada Jonquiere / Via Rail Service"
   case "JLN":
      return "Joplin, MO, USA Municipal Airport"
   case "JRH":
      return "Jorhat, India - Jorhat Airport"
   case "JOS":
      return "Jos, Nigeria - Jos Airport"
   case "AJF":
      return "Jouf, Saudi Arabia - Jouf Airport"
   case "JDO":
      return "Juazeiro Do Norte, Brazil - Juazeiro Do Norte Airport"
   case "JUJ":
      return "Jujuy, Provincia Jujuy, Argentina El Cadillal"
   case "JUL":
      return "Juliaca, Peru Juliaca"
   case "JNU":
      return "Juneau, AK, USA Juneau"
   case "JYV":
      return "Jyvaskyla, Finland - Jyvaskyla Airport"
   case "ABK":
      return "Kabri Dar, Ethiopia - Kabri Dar Airport"
   case "KBL":
      return "Kabul, Afghanistan - Khwaja Rawash"
   case "DNA":
      return "Kadena AFB, Okinawa, Japan - Kadena Air Force Base-Okinawa Airport"
   case "KOJ":
      return "Kagoshima, Japan Kagoshima"
   case "OGG":
      return "Kahului, HI, USA Kahului Airport"
   case "IXH":
      return "Kailashahar, India Kailashahar"
   case "KAT":
      return "Kaitaia, New Zealand Kaitaia"
   case "KAJ":
      return "Kajaani, Finland - Kajaani Airport"
   case "KAE":
      return "Kake, AK, USA"
   case "AZO":
      return "Kalamazoo, MI, USA Kalamazoo/Battle Creek Intl"
   case "LUP":
      return "Kalaupapa, Hawaii, USA, Kalaupapa Airport"
   case "KGI":
      return "Kalgoorlie, Australia - Kalgoorlie Airport"
   case "KLO":
      return "Kalibo, Philippines Kalibo"
   case "KGD":
      return "Kaliningrad, Russia Kaliningrad Airport"
   case "FCA":
      return "Kalispell, MT, USA Glacier Park International"
   case "GPI":
      return "Kalispell, MT, USA - Glacier Park International"
   case "KLR":
      return "Kalmar, Sweden Kalmar"
   case "KAL":
      return "Kaltag, AK, USA"
   case "IXQ":
      return "Kamalpur, India Kamalpur"
   case "YKA":
      return "Kamloops, British Columbia, Canada Fulton Field"
   case "MUE":
      return "Kamuela, Hawaii, USA - Waimea-Kohala-Kamuela Airport"
   case "KDH":
      return "Kandahar, Afghanistan - Kandahar"
   case "IXY":
      return "Kandla, India Kandla"
   case "SFJ":
      return "Kangerlussuaq, Greenland Sondre Stromfjord"
   case "XGR":
      return "Kangiqsualujjuaq, Canada - Kangiqsualujjuaq Airport"
   case "YWB":
      return "Kangiqsujuaq, Canada - Kangiqsujuaq Airport"
   case "YKG":
      return "Kangirsuk, Canada - Kangirsuk Airport"
   case "KAG":
      return "Kangnung, Republic of Korea - Kangnung Airport"
   case "DHM":
      return "Kangra, Himachal Pradesh, India - Kangra Gaggal Dharamsala Airport"
   case "KAN":
      return "Kano, Nigeria Aminu Kano International"
   case "MKC":
      return "Kansas City, MO, USA Downtown"
   case "MCI":
      return "Kansas City, MO, USA Kansas City International Airport"
   case "KHH":
      return "Kaohsiung, Taiwan"
   case "JHM":
      return "Kapalua, HI, USA Kapalua"
   case "YYU":
      return "Kapuskasing, Ontario, Canada"
   case "KHI":
      return "Karachi, Pakistan - Quaid-E-Azam International Airport"
   case "KAB":
      return "Kariba, Zimbabwe Kariba"
   case "KLV":
      return "Karlovy Vary, Czech Republic - Karlovy Vary Airport"
   case "FKB":
      return "Karlsruhe/Baden, Germany - Karlsruhe-Baden Airport"
   case "KSD":
      return "Karlstad, Sweden - Karlstad Airport"
   case "AOK":
      return "Karpathos, Greece Karpathos"
   case "KTA":
      return "Karratha, Australia - Karratha Airport"
   case "KSY":
      return "Kars, Turkey - Kars Airport"
   case "KSQ":
      return "Karshi, Uzbekistan - Karshi Airport"
   case "KRP":
      return "Karup, Denmark Karup"
   case "BBK":
      return "Kasane, Botswana Kasane"
   case "ZKE":
      return "Kaschechewan, Canada - Kaschechewan Airport"
   case "KHG":
      return "Kashi, China - Kashi"
   case "KSJ":
      return "Kasos Island, Greece Kasos Island"
   case "KSF":
      return "Kassel, Germany - Kassel Airport"
   case "KZS":
      return "Kastelorizo Island, Greece - Kastelorizo Airport"
   case "KSO":
      return "Kastoria,Greece - Kastoria Airport"
   case "KTR":
      return "Katherine, Northern Territory, Australia Tindal"
   case "KTM":
      return "Kathmandu, Nepal Tribhuvan"
   case "KTW":
      return "Katowice, Poland Pyrzowice"
   case "LIH":
      return "Lihue, Kauai Island, HI, USA Lihue Municipal Airport"
   case "HPV":
      return "Kauai Island, HI, USA Princeville"
   case "KUN":
      return "Kaunas, Lithuania Kaunas"
   case "KVA":
      return "Kavala, Greece Kavala"
   case "MKK":
      return "Kaunakakai/Hoolehua, HI, USA - Molokai Municipal Airport"
   case "ASR":
      return "Kayseri, Turkey - Kayseri Airport"
   case "KZN":
      return "Kazan, Russia Kazan"
   case "EAR":
      return "Kearney, NE, USA Kearney Municipal Airport"
   case "EEN":
      return "Keene / Brattleboro, NH, USA Dillant Hopkins"
   case "EFL":
      return "Kefallinia Island, Greece - Kefallinia Airport"
   case "YLW":
      return "Kelowna, British Columbia, Canada Ellison Field Airport"
   case "KEJ":
      return "Kemerovo, Russia Kemerovo"
   case "KEM":
      return "Kemi/Tornio, Finland Kemi"
   case "KPS":
      return "Kempsey, Australia - Kempsey Airport"
   case "ENA":
      return "Kenai, AK, USA Kenai Municipal Airport"
   case "KEH":
      return "Kenmore Air Harbor, WA, USA"
   case "YQK":
      return "Kenora, Ontario, Canada"
   case "KMA":
      return "Kerema, Papua New Guinea - Kerema Airport"
   case "CFU":
      return "Kerkyra, Greece Kerkyra"
   case "KER":
      return "Kerman, Iran Kerman"
   case "KSH":
      return "Kermanshah, Iran Bakhtaran Iran"
   case "KKE":
      return "Kerikeri, New Zealand - Kerikeri Airport"
   case "KIR":
      return "Kerry County, Ireland Kerry County"
   case "IXK":
      return "Keshod, India Keshod"
   case "KTN":
      return "Ketchikan, AK, USA Ketchikan International"
   case "EYW":
      return "Key West, FL, USA"
   case "KHV":
      return "Khabarovsk, Russia - Novy"
   case "HJR":
      return "Khajuraho, India - Khajuraho Airport"
   case "KHR":
      return "Kharkhorin, Ovorkhangai, Mongolia - Kharkhorin Airport"
   case "HRK":
      return "Kharkov, Ukraine Kharkov"
   case "KRT":
      return "Khartoum, Sudan Civil"
   case "QKO":
      return "Khoms (Al Khums), Libya"
   case "KKC":
      return "Khon Kaen, Thailand - Khon Kaen Airport"
   case "KOG":
      return "Khong Island, Laos - Khong Island Airport"
   case "HVD":
      return "Khovd, Khovd, Mongolia - Khovd Airport"
   case "IXN":
      return "Khowai, India Khowai"
   case "HJT":
      return "Khujirt, Ovorkhangai, Mongolia - Khujirt Airport"
   case "KEL":
      return "Kiel, Germany Holtenau"
   case "KBP":
      return "Kiev, Ukraine Borispol"
   case "IEV":
      return "Kiev, Ukraine Zhulhany"
   case "KGL":
      return "Kigali, Rwanda - Kigali-Kayibanda International Airport"
   case "TKQ":
      return "Kigoma, Tanzania"
   case "JRO":
      return "Kilimanjaro, Tanzania Kilimanjaro"
   case "ILE":
      return "Killeen, TX, USA"
   case "KIM":
      return "Kimberley, South Africa - B J Vorster Airport"
   case "KVC":
      return "King Cove, Alaska, USA - King Cove Airport"
   case "KNS":
      return "King Island, Tasmania, Australia King Island"
   case "AKN":
      return "King Salmon, Alaska, USA - King Salmon Airport"
   case "IGM":
      return "Kingman, AZ, USA Mohave County"
   case "KGC":
      return "Kingscote, South Australia, Australia"
   case "KIN":
      return "Kingston, Jamaica"
   case "YGK":
      return "Kingston, Ontario, Canada Kingston Airport"
   case "KNH":
      return "Kinmen, Taiwan - Kinmen Island Airport"
   case "FIH":
      return "Kinshasa, Zaire Kinshasa"
   case "ISO":
      return "Kinston, NC, USA"
   case "KPN":
      return "Kipnuk, AK, USA"
   case "KKN":
      return "Kirkenes, Norway Hoeyburtmoen"
   case "IRK":
      return "Kirksville, Missouri, USA - Kirksville Airport"
   case "KOI":
      return "Kirkwall / Orkney Island, Scotland, United Kingdom Kirkwall"
   case "KRN":
      return "Kiruna, Sweden Kiruna"
   case "KIV":
      return "Kishinev, Moldova Kishinev"
   case "KKJ":
      return "Kitakyushu, Japan - Kitakyushu Airport"
   case "YKF":
      return "Kitchener, Ontario, Canada Kitchener"
   case "KIT":
      return "Kithira Island, Greece - Kithira Airport"
   case "KTT":
      return "Kittila, Finland - Kittila Airport"
   case "KVL":
      return "Kivalina, Alaska, USA - Kivalina Airport"
   case "KLU":
      return "Klagenfurt, Austria Klagenfurt"
   case "LMT":
      return "Klamath Falls, OR, USA Kingsley Field Airport"
   case "KLW":
      return "Klawock, AK, USA"
   case "TYS":
      return "Knoxville, TN, USA Mcghee Tyson"
   case "KCZ":
      return "Kochi, Japan - Kochi Airport"
   case "ADQ":
      return "Kodiak, AK, USA"
   case "USM":
      return "Koh Samui, Thailand"
   case "KOK":
      return "Kokkola/Pietarsaari, Finland Kruunupyy"
   case "KLH":
      return "Kolhapur (Ujlaiwadi), Maharashtra, India - Kolhapur Airport"
   case "KGK":
      return "Koliganek, Alaska, USA - Koliganek Airport"
   case "CCU":
      return "Kolkata (Calcutta), India - Calcutta International Airport"
   case "KMQ":
      return "Komatsu, Japan - Komatsu Airport"
   case "KOA":
      return "Kona, HI, USA Keahole"
   case "KKH":
      return "Kongiganak, Alaska, USA - Kongiganak Airport"
   case "KYA":
      return "Konya, Turkey - Konya Airport"
   case "KRL":
      return "Korla, China - Korla"
   case "ROR":
      return "Koror, Palau Airai"
   case "KGS":
      return "Kos Island, Greece - Kos Airport"
   case "KSC":
      return "Kosice, Slovakia Barca"
   case "KSA":
      return "Kosrae, Caroline Islands, Micronesia"
   case "OSZ":
      return "Koszalin, Poland - Koszalin Airport"
   case "KBR":
      return "Kota Bharu, Malaysia Sultan Ismail Petra"
   case "BKI":
      return "Kota Kinabalu, Sabah, Malaysia Kota Kinabalu"
   case "OTZ":
      return "Kotzebue, AK, USA"
   case "KZI":
      return "Kozani, Macedonia, Greece - Kozani Airport"
   case "KBV":
      return "Krabi, Thailand - Krabi Airport"
   case "KRK":
      return "Krakow, Poland Balice"
   case "KRF":
      return "Kramfors, Sweden Kramfors"
   case "KRR":
      return "Krasnodar, Russia Krasnodar"
   case "KJA":
      return "Krasnojarsk, Russia"
   case "KRS":
      return "Kristiansand, Norway Kjevik"
   case "KID":
      return "Kristianstad, Sweden - Kristianstad Airport"
   case "KSU":
      return "Kristiansund, Norway Kvernberget"
   case "HLA":
      return "Krugersdorp, South Africa - Lanseria International Airport"
   case "KUL":
      return "Kuala Lumpur, Malaysia - KLIA Kuala Lumpur International"
   case "SZB":
      return "Kuala Lumpur - Subang, Malaysia"
   case "TGG":
      return "Kuala Terengganu, Malaysia Sultan Mahmood"
   case "KUA":
      return "Kuantan, Malaysia Padang Geroda"
   case "KCH":
      return "Kuching, Sarawak, Malaysia Kuching"
   case "KUD":
      return "Kudat, Malaysia - Kudat Airport"
   case "AKF":
      return "Kufrah, Libya"
   case "KUS":
      return "Kulusuk, Greenland Metropolitan Area"
   case "KMJ":
      return "Kumamoto, Japan Kumamoto"
   case "UEO":
      return "Kume Jima, Japan - Kume Jima Airport"
   case "KMG":
      return "Kunming, China Kunming"
   case "KUV":
      return "Kunsan, South Korea"
   case "KNX":
      return "Kununurra, Australia - Kununurra Airport"
   case "KUO":
      return "Kuopio, Finland Kuopio"
   case "KCA":
      return "Kuqa, China - Kuqa"
   case "KUH":
      return "Kushiro, Japan - Kushiro Airport"
   case "YVP":
      return "Kuujjuaq, Quebec, Canada Fort Chimo Airport"
   case "YGW":
      return "Kuujjuarapik, Quebec, Canada Kuujjuarapik"
   case "KAO":
      return "Kuusamo, Finland - Kuusamo Airport"
   case "KWI":
      return "Kuwait, Kuwait International"
   case "KWA":
      return "Kwajalein, Marshall Islands"
   case "KWJ":
      return "Kwangju, Republic of Korea - Kwangju Airport"
   case "LCE":
      return "La Ceiba, Honduras International"
   case "LCG":
      return "La Coruna, Spain La Coruna"
   case "LSE":
      return "La Crosse, WI, USA La Crosse Municipal"
   case "YGL":
      return "La Grande, Canada - La Grande Airport"
   case "LAP":
      return "La Paz, Baja California Sur, Mexico Aeropuerto General Marquez De Leon"
   case "LPB":
      return "La Paz, Bolivia El Alto"
   case "IRJ":
      return "La Rioja, Argentina - La Rioja Airport"
   case "LRH":
      return "La Rochelle, France Laleu"
   case "LRM":
      return "La Romana, Dominican Republic - La Romana-Casa De Campo Airport"
   case "YVC":
      return "La Ronge, Saskatchewan, Canada La Ronge"
   case "SSQ":
      return "La Sarre, Quebec, Canada"
   case "LSC":
      return "La Serena, Chile La Florida"
   case "YLQ":
      return "La Tuque, Quebec, Canada La Tuque"
   case "EUN":
      return "Laayoune, Morocco LaayouneHassan I Morocco"
   case "LBS":
      return "Labasa, Fiji - Labasa Airport"
   case "LBU":
      return "Labuan, Sabah, Malaysia"
   case "XEE":
      return "Lac Edouard, Quebec, Canada Lac Edouard / Via Rail Service"
   case "XEH":
      return "Ladysmith, British Columbia, Canada Ladysmith / Via Rail Service"
   case "LAE":
      return "Lae, Papua New Guinea - Lae-Nadzab Airport"
   case "LFT":
      return "Lafayette / New Iberia, LA, USA Municipal"
   case "LAF":
      return "Lafayette, IN, USA Purdue University Airport"
   case "LOS":
      return "Lagos, Nigeria Murtala Muhammed"
   case "LDU":
      return "Lahad Datu, Sabah, Malaysia Lahad Datu"
   case "LHE":
      return "Lahore, Pakistan Lahore"
   case "LCH":
      return "Lake Charles, LA, USA Municipal"
   case "YLC":
      return "Lake Harbour, Canada - Lake Harbour Airport"
   case "HII":
      return "Lake Havasu City, AZ, USA - Lake Havasu City Municipal Airport"
   case "LKE":
      return "Lake Union Sea Plane Base, Seattle, WA, USA"
   case "LKL":
      return "Lakselv, Norway - Banak"
   case "LLI":
      return "Lalibela, Ethiopia - Lalibela Airport"
   case "SUF":
      return "Lamezia-Terme, Italy - Lamezia-Terme Airport"
   case "LPT":
      return "Lampang, Thailand - Lampang Airport"
   case "LMP":
      return "Lampedusa Island, Italy - Lampedusa Airport"
   case "LNY":
      return "Lanai City, HI, USA Lanai"
   case "LNS":
      return "Lancaster, PA, USA Lancaster"
   case "XEJ":
      return "Langford, British Columbia, Canada Langford / Via Rail Service"
   case "LGK":
      return "Langkawi, Malaysia"
   case "LAI":
      return "Lannion, France - Lannion Airport"
   case "LAN":
      return "Lansing, MI, USA Capital City Airport"
   case "ACE":
      return "Lanzarote, Canary Islands, Spain Lanzarote"
   case "LHW":
      return "Lanzhou, China - Metropolitan Area"
   case "ZGC":
      return "Lanzhou, China - Zhongchuan-Lanzhou West Airport"
   case "LAO":
      return "Laoag, Philippines - Laoag Airport"
   case "LPP":
      return "Lappeenranta, Finland - Lappeenranta Airport"
   case "LAR":
      return "Laramie, WY, USA General Brees Field"
   case "LRD":
      return "Laredo, TX, USA International"
   case "LCA":
      return "Larnaca, Cyprus Intl"
   case "LRU":
      return "Las Cruces, NM, USA"
   case "LSP":
      return "Las Piedras, Venezuela Josefa Camejo"
   case "LAS":
      return "Las Vegas, NV, USA Mccarran International Airport"
   case "VGT":
      return "Las Vegas, NV, USA North Air Terminal"
   case "LBE":
      return "Latrobe, PA, USA Westmoreland County"
   case "LST":
      return "Launceston, Tasmania, Australia Launceston"
   case "PIB":
      return "Laurel, MS, USA Laurel Hattiesburg/Camp Shelby"
   case "NAN":
      return "Lautoka/Nadi, Fiji - International"
   case "LWY":
      return "Lawas, Sarawak, Malaysia Lawas"
   case "LAW":
      return "Lawton, OK, USA Municipal"
   case "LZC":
      return "Lazaro Cardenas, Michoacan, Mexico Na"
   case "LEH":
      return "Le Havre, France Le Havre"
   case "LEA":
      return "Learmonth, Western Australia, Australia"
   case "LEB":
      return "Lebanon/Hanover/White River, NH, USA Lebanon Regional"
   case "LBA":
      return "Leeds/Bradford, England, United Kingdom"
   case "PVK":
      return "Lefkas, Greece - Preveza-Lefkas Airport"
   case "LGP":
      return "Legaspi, Philippines Legaspi"
   case "IXL":
      return "Leh, India Leh"
   case "LEJ":
      return "Leipzig, Germany Leipzig"
   case "LKN":
      return "Leknes, Norway Leknes"
   case "LEN":
      return "Leon, Spain - Leon Airport"
   case "BJX":
      return "Leon/Guanajuato, Guanajuato, Mexico Del Bajio"
   case "LRS":
      return "Leros, Greece Leros"
   case "YQL":
      return "Lethbridge, Alberta, Canada Lethbridge Airport"
   case "LET":
      return "Leticia, Colombia Gen Av Cob0"
   case "KLL":
      return "Levelock, Alaska, USA - Levelock Airport"
   case "LWB":
      return "Lewisburg, WV, USA - Lewisburg-Greenbrier Valley Airport"
   case "LWS":
      return "Lewiston, ID, USA LewistonNez Perce Airport"
   case "LWT":
      return "Lewistown, MT, USA Municipal"
   case "LEX":
      return "Lexington, KY, USA Blue Grass Field"
   case "LXA":
      return "Lhasa, Tibet Autonomous Region, China - Lhasa"
   case "LYG":
      return "Lianyungang, China - Lianyungang"
   case "LBL":
      return "Liberal, KS, USA Glenn L Martin Terminal"
   case "LIR":
      return "Liberia, Costa Rica Liberia"
   case "LBV":
      return "Libreville, Gabon Libreville"
   case "LGG":
      return "Liege, Belgium Bierset"
   case "LIF":
      return "Lifou Island, New Caledonia - Lifou Airport"
   case "LJG":
      return "Lijiang, China - Lijiang City Airport"
   case "IXI":
      return "Lilabari, India Lilabari"
   case "LIL":
      return "Lille, France Lille-Lesquin Airport"
   case "LLW":
      return "Lilongwe, Malawi Kamuzu Intl"
   case "LIM":
      return "Lima, Peru Intl Jorge Chavez"
   case "LMN":
      return "Limbang, Sarawak, Malaysia Limbang"
   case "LIG":
      return "Limoges, France Bellegarde"
   case "LNJ":
      return "Lincang, China - Lincang"
   case "LNK":
      return "Lincoln, NE, USA Municipal Airport"
   case "LPI":
      return "Linkoping, Sweden Saab"
   case "LNZ":
      return "Linz, Austria Linz"
   case "LIS":
      return "Lisbon, Portugal Lisboa"
   case "LSY":
      return "Lismore, New South Wales, Australia Lismore"
   case "LIT":
      return "Little Rock, AR, USA Little Rock Regional Airport"
   case "LZH":
      return "Liuzhou, China - Liuzhou"
   case "LPL":
      return "Liverpool, England, United Kingdom Liverpool"
   case "LVI":
      return "Livingstone, Zambia Livingstone"
   case "LJU":
      return "Ljubljana, Slovenia Brnik"
   case "LFW":
      return "Lome, Togo Lome"
   case "LNV":
      return "Londolovit, Papua New Guinea Londolovit"
   case "LGW":
      return "London, England, United Kingdom Gatwick"
   case "LHR":
      return "London, England, United Kingdom Heathrow"
   case "LCY":
      return "London, England, United Kingdom London City"
   case "LTN":
      return "London, England, United Kingdom Luton International"
   case "STN":
      return "London, England, United Kingdom Stansted"
   case "YXU":
      return "London, Ontario, Canada - London Municipal"
   case "LDB":
      return "Londrina, Parana, Brazil - Londrina"
   case "LGB":
      return "Long Beach, CA, USA Long Beach Municipal Airport"
   case "LRE":
      return "Longreach, Australia - Longreach Airport"
   case "GGG":
      return "Longview/Gladewater/Kilgore, TX, USA Gregg County"
   case "LYR":
      return "Longyearbyen, Norway Svalbard"
   case "LDH":
      return "Lord Howe Island, Australia - Lord Howe Island Airport"
   case "LTO":
      return "Loreto, Baja California Sur, Mexico"
   case "LRT":
      return "Lorient, France LannBihoue"
   case "LAX":
      return "Los Angeles, CA, USA Los Angeles Intl Airport"
   case "LAX":
      return "Los Angeles, CA, USA Los Angeles Intl Airport"
   case "LSQ":
      return "Los Angeles, Chile Maria Dolores"
   case "LMM":
      return "Los Mochis, Sinaloa, Mexico"
   case "SDF":
      return "Louisville, KY, USA Standiford Field"
   case "LDE":
      return "Lourdes/Tarbes, France Tarbes International"
   case "LAD":
      return "Luanda, Angola Fevereiro"
   case "LBB":
      return "Lubbock, TX, USA Lubbock International Airport"
   case "LKO":
      return "Lucknow, India - Lucknow-Amausi Airport"
   case "LUD":
      return "Luderitz, Namibia Luderitz"
   case "LUG":
      return "Lugano, Switzerland Agno"
   case "VSG":
      return "Lugansk, Ukraine"
   case "LUA":
      return "Lukla, Nepal Lukla"
   case "LLA":
      return "Lulea, Sweden Kallax"
   case "LYA":
      return "Luoyang, China - Luoyang"
   case "LUN":
      return "Lusaka, Zambia Lusaka"
   case "LUX":
      return "Luxembourg, Luxembourg Findel"
   case "LUM":
      return "Luxi, China - Luxi"
   case "LXR":
      return "Luxor, Egypt Luxor"
   case "LZO":
      return "Luzhou, China - Luzhou"
   case "CRK":
      return "Luzon Is, Clark Field, Philippines"
   case "LWO":
      return "Lvov, Ukraine Snilow"
   case "LYB":
      return "Little Cayman, Cayman Islands - Little Cayman Airport"
   case "LCJ":
      return "Lodz, Poland - Lodz Airport"
   case "RJL":
      return "Logrono, Spain - Logrono Airport"
   case "LDY":
      return "Londonderry, Northern Ireland, United Kingdom - Londonderry Airport"
   case "LKH":
      return "Long Akah, Malaysia - Long Akah Airport"
   case "LBP":
      return "Long Banga, Malaysia - Long Banga Airport"
   case "LGL":
      return "Long Lellang, Malaysia - Long Lellang Airport"
   case "ODN":
      return "Long Seridan, Malaysia - Long Seridan Airport"
   case "LPS":
      return "Lopez Island, Washington, USA - Lopez Island Airport"
   case "SJD":
      return "Los Cabos, San Jose Del Cabo, Baja California Sur, Mexico - Los Cabos Intl Airport"
   case "LXG":
      return "Luang Namtha, Laos - Luang Namtha Airport"
   case "LPQ":
      return "Luang Prabang, Laos - Luang Prabang International Airport"
   case "LXR":
      return "Luxor, Egypt - Luxor"
   case "LYC":
      return "Lycksele, Sweden - Lycksele Airport"
   case "LYH":
      return "Lynchburg, VA, USA Municipal Airport"
   case "LYS":
      return "Lyon, France Satolas"
   case "MST":
      return "Maastricht, Netherlands ZuidLimburg"
   case "MCP":
      return "Macapa, Amapa, Brazil"
   case "MFM":
      return "Macau, Macau SAR, China"
   case "MCZ":
      return "Maceio, Brazil - Palmares Airport"
   case "MKY":
      return "Mackay, Queensland, Australia Mackay"
   case "MCN":
      return "Macon, GA, USA Lewis B Wilson"
   case "MAG":
      return "Madang, Papua New Guinea Madang"
   case "MED":
      return "Madinah, Saudi Arabia - Prince Mohammad Bin Abdulaziz"
   case "MSN":
      return "Madison, WI, USA Dane County Regional Airport"
   case "MAA":
      return "Madras (Chennai), India- Chenai-Meenambarkkam Airport"
   case "MAD":
      return "Madrid, Spain Barajas"
   case "IXM":
      return "Madurai, India Madurai"
   case "HGN":
      return "Mae Hong Son, Thailand Mae Hong Son"
   case "GDX":
      return "Magadan, Russia Magadan"
   case "SEZ":
      return "Mahe Island, Seychelles Mahe Island Seychelles Intl"
   case "MMO":
      return "Maio, Cape Verde - Maio Airport"
   case "MAJ":
      return "Majuro, Marshall Islands International"
   case "MQX":
      return "Makale, Ethiopia - Makale Airport"
   case "MZG":
      return "Makung, Taiwan Airport"
   case "AAM":
      return "Mala Mala Airport"
   case "SSG":
      return "Malabo, Equatorial Guinea Santa Isabel"
   case "AGP":
      return "Malaga, Spain Malaga"
   case "MLG":
      return "Malang, Indonesia"
   case "MLX":
      return "Malatya, Turkey - Malatya Airport"
   case "MLE":
      return "Male, Maldives Male International"
   case "HMA":
      return "Malmo, Sweden Malmo Harbour"
   case "JMM":
      return "Malmo, Sweden Malmo Harbour Heliport"
   case "MMX":
      return "Malmo, Sweden Sturup"
   case "PTF":
      return "Malololailai, Fiji Malololailai"
   case "MLA":
      return "Malta, Malta Luqa"
   case "MMH":
      return "Mammoth Lakes, CA, USA Mammoth Lakes Airport"
   case "MNF":
      return "Mana Island, Fiji - Mana Airport"
   case "MDC":
      return "Manado, Indonesia Samratulang"
   case "MGA":
      return "Managua, Nicaragua"
   case "MAO":
      return "Manaus, Amazonas, Brazil Eduardo Gomes"
   case "MAN":
      return "Manchester, England, United Kingdom International"
   case "MHT":
      return "Manchester, NH, USA Manchester"
   case "MDL":
      return "Mandalay, Myanmar (Burma) - Annisaton Airport"
   case "MXW":
      return "Mandalgovi, Dundgovi, Mongolia - Mandalgovi Airport"
   case "IXE":
      return "Mangalore, India Bajpe"
   case "MAY":
      return "Mangrove Cay, Bahamas"
   case "MHK":
      return "Manhattan, KS, USA Manhattan Municipal"
   case "MNL":
      return "Manila, Philippines Ninoy Aquino International"
   case "MBL":
      return "Manistee, MI, USA Manistee Blacker Airport"
   case "YTH":
      return "Manitoba-Thompson Airport, Manitoba, Canada - Manitoba-Thompson Airport"
   case "MZL":
      return "Manizales, Colombia Santaguida"
   case "MHG":
      return "Mannheim, Germany - Mannheim Airport"
   case "KMO":
      return "Manokotak, Alaska, USA - Manokotak Airport"
   case "MKW":
      return "Manokwari, Indonesia Rendani"
   case "MSE":
      return "Manston, Kent, United Kingdom - Kent International Airport"
   case "ZLO":
      return "Manzanillo, Colima, Mexico Aeropuerto International"
   case "MTS":
      return "Manzini, Swaziland - Manzini Airport"
   case "MXS":
      return "Maotoa, (Western) Samoa - Savaii Airport"
   case "MPM":
      return "Maputo, Mozambique Maputo International"
   case "MDQ":
      return "Mar Del Plata, Buenos Aires, Argentina"
   case "MAB":
      return "Maraba, Brazil - Maraba Airport"
   case "MAR":
      return "Maracaibo, Venezuela La Chinita"
   case "MTH":
      return "Marathon, FL, USA"
   case "YSP":
      return "Marathon, Ontario, Canada"
   case "MRK":
      return "Marco Island, FL, USA"
   case "MQM":
      return "Mardin, Turkey - Mardin Airport"
   case "MGH":
      return "Margate, South Africa - Margate Airport"
   case "MBX":
      return "Maribor Airport - Orehova Vas/Slivnica, Slovenia"
   case "MHQ":
      return "Mariehamn, Aland Island, Finland"
   case "MGF":
      return "Maringa, Brazil - Maringa Airport"
   case "MWA":
      return "Marion, IL, USA"
   case "MQT":
      return "Marquette, MI, USA Marquette County Airport"
   case "RAK":
      return "Marrakech, Morocco Menara"
   case "MRS":
      return "Marseille, France MarseilleProvence"
   case "MHH":
      return "Marsh Harbour, Bahamas"
   case "RMF":
      return "Marsa Alam, Egypt - Marsa Alam Airport"
   case "LMQ":
      return "Marsa Brega, Libya"
   case "MVY":
      return "Martha's Vineyard, MA, USA"
   case "MUR":
      return "Marudi, Malaysia - Marudi Airport"
   case "MSU":
      return "Maseru, Lesotho Maseru"
   case "MHD":
      return "Mashad, Iran - Mashad Airport"
   case "MCW":
      return "Mason City, IA, USA Mason City Municipal Airport"
   case "MSS":
      return "Massena, NY, USA"
   case "MAM":
      return "Matamoros, Tamaulipas, Mexico Servando Canales"
   case "AMI":
      return "Mataram, Indonesia Selaparang"
   case "MMJ":
      return "Matsumoto, Japan - Matsumoto Airport"
   case "MYJ":
      return "Matsuyama, Japan Matsuyama"
   case "MUN":
      return "Maturin, Venezuela"
   case "MUB":
      return "Maun, Botswana"
   case "MRU":
      return "Mauritius, Mauritius Plaisance"
   case "XID":
      return "Maxville, Ontario, Canada Maxville / Via Rail Service"
   case "MYG":
      return "Mayaguana, Bahamas - Mayaguana Airport"
   case "MAZ":
      return "Mayaguez, PR, USA El Maui"
   case "MZT":
      return "Mazatlan, Sinaloa, Mexico Buelna"
   case "MFE":
      return "Mc Allen/Mission, TX, USA"
   case "MCK":
      return "Mc Cook, NE, USA - Municipal"
   case "MCG":
      return "Mc Grath, AK, USA - Mc Grath"
   case "MES":
      return "Medan, Indonesia - Polonia"
   case "EOH":
      return "Medellin, Colombia - Enrique Olaya Herrera"
   case "MDE":
      return "Medellin, Colombia - Jose Maria Cordova/Metropolitan Area"
   case "MFR":
      return "Medford, OR, USA - Medford/Jackson County Airport"
   case "YXH":
      return "Medicine Hat, Alberta, Canada - Medicine Hat Airport"
   case "MED":
      return "Medinah, Saudi Arabia - Madinah Prince Mohammad Bin Abdulaziz"
   case "MEY":
      return "Meghauli, Nepal Meghauli"
   case "MEH":
      return "Mehamn, Norway - Mehamn Airport"
   case "MXZ":
      return "Meixian, China - Meixian"
   case "MKS":
      return "Mekane Selam, Ethiopia - Mekane Selam Airport"
   case "MYU":
      return "Mekoryuk, Alaska, USA - Mekoryuk Airport"
   case "MLB":
      return "Melbourne, FL, USA Melbourne International Airport"
   case "MEL":
      return "Melbourne, Victoria, Australia - Tullamarine"
   case "MLN":
      return "Melilla, Spain - Melilla Airport"
   case "XEK":
      return "Melville, Saskatchewan, Canada - Melville / Via Rail Service"
   case "MMB":
      return "Memanbetsu, Japan"
   case "MEM":
      return "Memphis, TN, USA Memphis International Airport"
   case "MDZ":
      return "Mendoza, Mendoza, Argentina - El Plumerillo"
   case "MNM":
      return "Menominee, MI, USA - Twin County Airport"
   case "MAH":
      return "Menorca, Spain - Aerop De Menorca"
   case "MCE":
      return "Merced, California - Merced Airport"
   case "MRD":
      return "Merida, Venezuela - Alberto Carnevalli"
   case "MID":
      return "Merida, Yucatan, Mexico - Merida Internationl"
   case "MEI":
      return "Meridian, MS, USA Key Field"
   case "MIM":
      return "Merimbula, Australia - Merimbula Airport"
   case "AZA":
      return "Mesa, Arizona, USA - Phoenix-Mesa Gateway Airport (formerly Williams Gateway Airport)"
   case "ETZ":
      return "Metz/Nancy, France Frescaty"
   case "MXL":
      return "Mexicali, Baja California, Mexico Rodolfo Sanchez Taboada"
   case "MEX":
      return "Mexico City, Distrito Federal, Mexico Juarez Intl Airport"
   case "MIA":
      return "Miami, FL, USA Miami International Airport"
   case "MPB":
      return "Miami, FL, USA Miami Public Seaplane Base"
   case "OPF":
      return "Miami, FL, USA Opa Locka"
   case "MBS":
      return "Midland / Bay City / Saginaw, MI, USA TriCity Airport"
   case "MAF":
      return "Midland/Odessa, TX, USA Midland Intl Airport"
   case "MYE":
      return "Mikake Jima, Japan - Mikake Jima Airport"
   case "JMK":
      return "Mikonos, Greece Mikonos"
   case "LIN":
      return "Milan, Italy Linate"
   case "MXP":
      return "Milan, Italy Malpensa"
   case "BGY":
      return "Milan, Italy Orio Al Serio"
   case "MQL":
      return "Mildura, Victoria, Australia Mildura"
   case "MLS":
      return "Miles City, MT, USA Miles City"
   case "MFN":
      return "Milford Sound, New Zealand"
   case "MLT":
      return "Millinocket, Maine, USA - Millinocket airport"
   case "MLO":
      return "Milos, Greece Milos"
   case "MKE":
      return "Milwaukee, WI, USA General Mitchell Field"
   case "MTT":
      return "Minatitlan, Mexico - Minatitlan Airport"
   case "MSP":
      return "Minneapolis, MN, USA Minneapolis/St Paul Intl Airport"
   case "MOT":
      return "Minot, ND, USA Minot International Airport"
   case "MRV":
      return "Min Vody, Russia - Min Vody Airport"
   case "MSQ":
      return "Minsk, Belarus Minsk"
   case "MYY":
      return "Miri, Sarawak, Malaysia Miri"
   case "MSJ":
      return "Misawa, Japan"
   case "MCQ":
      return "Miskolc, Hungary - Miskolc Airport"
   case "MSO":
      return "Missoula, MT, USA Missoula International"
   case "MRA":
      return "Misurata, Libya"
   case "KMI":
      return "Miyazaki, Japan Miyazaki"
   case "MMY":
      return "Miyako Jima, Japan - Miyako Jima Airport"
   case "MTF":
      return "Mizan Teferi, Ethiopia - Mizan Teferi Airport"
   case "MBD":
      return "Mmabatho, South Africa - Mmabatho Airport"
   case "MQN":
      return "Mo I Rana, Norway Rossvoll"
   case "CNY":
      return "Moab, UT, USA"
   case "MOB":
      return "Mobile, AL, USA Mobile Municipal"
   case "MOD":
      return "Modesto, CA, USA Harry Sham Feild"
   case "MGL":
      return "Moenchengladbach, Germany - Moenchengladbach Airport"
   case "MGQ":
      return "Mogadishu, Somalia"
   case "NWA":
      return "Moheli, Comoros"
   case "MJD":
      return "Mohenjodaro, Pakistan - Mohenjodaro Airport"
   case "MPK":
      return "Mokpo, Republic of Korea - Mokpo Airport"
   case "MOL":
      return "Molde, Norway Aro"
   case "MLI":
      return "Moline, IL, USA Quad City Airport"
   case "MBA":
      return "Mombasa, Kenya Moi International"
   case "MIR":
      return "Monastir, Tunisia Skanes"
   case "MBE":
      return "Monbetsu, Japan - Monbetsu Airport"
   case "LOV":
      return "Monclova, Coahuila, Mexico Monclova Airport"
   case "YQM":
      return "Moncton, New Brunswick, Canada - Greater Moncton International Airport"
   case "MLU":
      return "Monroe, LA, USA"
   case "ROB":
      return "Monrovia, Liberia - Roberts International Airport"
   case "MLW":
      return "Monrovia, Liberia - Spriggs Payne Airport"
   case "YYY":
      return "Mont Joli, Quebec, Canada"
   case "MCM":
      return "Monte Carlo, Monaco Hel De Monte Carlo"
   case "MEU":
      return "Monte Dourado, Brazil - Monte Dourado Airport"
   case "MBJ":
      return "Montego Bay, Jamaica Sangster"
   case "MRY":
      return "Monterey / Carmel, CA, USA Monterey Peninsula Airport"
   case "MTY":
      return "Monterrey, Nuevo Leon, Mexico Escobedo"
   case "MOC":
      return "Montes Claros, Brazil - Montes Claros Airport"
   case "MVD":
      return "Montevideo, Uruguay Carrasco"
   case "MGM":
      return "Montgomery, AL, USA Dannelly Field"
   case "MPL":
      return "Montpellier, France Frejorgues"
   case "YMQ":
      return "Montreal, QC (Quebec), Canada"
   case "YMX":
      return "Montreal - Mirabel, Quebec, Canada"
   case "YUL":
      return "Montreal - Dorval, Quebec, Canada - Montreal?Pierre Elliott Trudeau International Airport"
   case "YHU":
      return "Montreal, Canada - St. Hubert Airport"
   case "MTJ":
      return "Montrose, CO, USA Montrose County Airport"
   case "MNI":
      return "Montserrat, Montserrat - Blackburne"
   case "MOZ":
      return "Moorea Island, French Polynesia - Temae Airport"
   case "YMO":
      return "Moosonee, Ontario, Canada - Moosonee"
   case "MRZ":
      return "Moree, Australia - Moree Airport"
   case "MLM":
      return "Morelia, Michoacan, Mexico Municipal"
   case "MGW":
      return "Morgantown, WV, USA Morgantown Municipal Airport"
   case "HNA":
      return "Morioka, Japan Hanamaki"
   case "ONG":
      return "Mornington, Queensland, Australia Mornington Is"
   case "MXV":
      return "Moron, Khovsgol, Mongolia - Moron Airport"
   case "HAH":
      return "Moroni (Hahaya), Comoros"
   case "YVA":
      return "Moroni (Hahaya/Iconi)Comoros"
   case "MMU":
      return "Morristown, NJ, USA Morristown"
   case "MYA":
      return "Moruya, New South Wales, Australia Moruya"
   case "MOW":
      return "Moscow, Russia"
   case "DME":
      return "Moscow, Russia - Domodedovo"
   case "SVO":
      return "Moscow, Russia - Sheremetyevo"
   case "VKO":
      return "Moscow, Russia - Vnukovo"
   case "MWH":
      return "Moses Lake, Washington, USA - Grant County Airport"
   case "JRO":
      return "Moshi, Tanzania - Kilimanjaro Airport"
   case "CWA":
      return "Mosinee/Wausau, WI, USA - Central Wisconsin Airport"
   case "MJF":
      return "Mosjoen, Norway - Kjaerstad Airport"
   case "MGB":
      return "Mount Gambier, Australia - Mt Gambier Airport"
   case "HGU":
      return "Mount Hagen, Papua New Guinea - Kagamuga Airport"
   case "LLY":
      return "Mount Holly, NJ, USA Mt Holly"
   case "MHU":
      return "Mount Hotham, Australia - Mt Hotham Airport"
   case "ISA":
      return "Mount Isa, Australia - Mt Isa Airport"
   case "MPN":
      return "Mount Pleasant, Falkland Islands (Islas Malvinas) - Mounr Pleasant Airport"
   case "TPR":
      return "Mount Tom Price, Australia - Mt Tom Price Airport"
   case "MVN":
      return "Mount Vernon, IL, USA Mount Vernon Outland Airport"
   case "WMH":
      return "Mountain Home, AR, USA"
   case "MPA":
      return "Mpacha, Namibia"
   case "ODY":
      return "Muang Xay, Laos - Oudomsay Airport"
   case "MDG":
      return "Mudanjiang, China - Mudanjiang"
   case "FMO":
      return "Muenster, Germany Muenster"
   case "MKM":
      return "Mukah, Sarawak, Malaysia"
   case "MLH":
      return "Mulhouse, France - Basel-Mulhouse Euro Airport"
   case "MUX":
      return "Multan, Pakistan - Multan Airport"
   case "MZV":
      return "Mulu, Malaysia Mulu Airport"
   case "BOM":
      return "Mumbai (Bombay), India - Mumbai"
   case "MIE":
      return "Muncie, IN, USA Delaware County Airport"
   case "MUC":
      return "Munich, Germany Franz Josef Strauss"
   case "MIG":
      return "Munich, Germany - Neubiberg Air Base Airport"
   case "MJV":
      return "Murcia, Spain San Javier"
   case "MMK":
      return "Murmansk, Russia Murmansk"
   case "QMQ":
      return "Murzuq (Marzuq), Libya"
   case "MSR":
      return "Mus, Turkey - Mus Airport"
   case "MCT":
      return "Muscat, Oman Seeb"
   case "MSL":
      return "Muscle Shoals / Florence / Sheffield, AL, USA Muscle Shoals"
   case "MKG":
      return "Muskegon, MI, USA Muskegon County Intl Airport"
   case "MQS":
      return "Mustique, Saint Vincent and The Grenadines - Mustique Airport"
   case "MWZ":
      return "Mwanza, Tanzania - Mwanza Airport"
   case "MYR":
      return "Myrtle Beach, SC, USA"
   case "MJT":
      return "Mytilene, Greece Mytilene"
   case "NDJ":
      return "N Djamena, Chad N'djamena"
   case "NAN":
      return "Nadi, Fiji International"
   case "NDR":
      return "Nador, Morocco - Nador Airport"
   case "WNP":
      return "Naga, Philippines - Naga Airport"
   case "NGS":
      return "Nagasaki, Japan Nagasaki"
   case "NGO":
      return "Nagoya, Japan - Chubu Centrair International Airport"
   case "NKM":
      return "Nagoya/Komaki, Japan - Nagoya Airfield"
   case "NAG":
      return "Nagpur, India Sonegaon"
   case "NAH":
      return "Naha, Indonesia"
   case "NBO":
      return "Nairobi, Kenya Jomo Kenyatta Internatonal"
   case "WIL":
      return "Nairobi, Kenya Wilson Arpt"
   case "SHB":
      return "Nakashibetsu, Japan - Nakashibetsu Airport"
   case "NAK":
      return "Nakhon Ratchasima, Thailand Nakhon Ratchasima"
   case "NST":
      return "Nakhon Si Thammarat, Thailand - Nakhon Si Thammarat Airport"
   case "NMA":
      return "Namangan, Uzbekistan - Namangan Airport"
   case "APL":
      return "NampulaMozambique"
   case "ZNA":
      return "Nanaimo, British Columbia, Canada"
   case "YCD":
      return "Nanaimo, British Columbia, Canada Cassidy Airport"
   case "KHN":
      return "Nanchang, China - Nanchang"
   case "YSR":
      return "Nanisivik, Canada - Nanisivik Airport"
   case "NKG":
      return "Nanjing, China"
   case "NNY":
      return "Nanyang, China - Nanyang"
   case "SHM":
      return "Nanki Shirahama, Japan - Nanki-Shirahama Airport"
   case "NNG":
      return "Nanning, China"
   case "NTE":
      return "Nantes, France NantesChateau Bougon"
   case "NTG":
      return "Nantong, China - Nantong"
   case "ACK":
      return "Nantucket, MA, USA"
   case "WNA":
      return "Napakiak, AK, USA Napakiak"
   case "NPE":
      return "Napier-Hastings, New Zealand - Napier-Hawkes Bay Airport"
   case "APF":
      return "Naples, FL, USA"
   case "NAP":
      return "Naples, Italy Capodichino"
   case "NAA":
      return "Narrabri, Australia - Narrabri Airport"
   case "NRA":
      return "Narrandera, Australia - Narrandera Airport"
   case "UAK":
      return "Narsarsuaq, Greenland Narssarssuaq"
   case "JNS":
      return "Narssaq, Greenland"
   case "NNM":
      return "Naryan-Mar, Russia - Naryan-Mar Airport"
   case "BNA":
      return "Nashville, TN, USA Nashville Metropolitan Airport"
   case "NAS":
      return "Nassau, Bahamas Nassau International Airport"
   case "PID":
      return "Nassau, Bahamas Paradise Island"
   case "NAT":
      return "Natal, Rio Grande Do Norte, Brazil Agusto Severo"
   case "YNA":
      return "Natashquan, Canada - Natashquan Airport"
   case "INU":
      return "Nauru, Nauru"
   case "NVT":
      return "Navegantes, Santa Catarina, Brazil"
   case "JNX":
      return "Naxos, Cyclades Islands, Greece Naxos Airport"
   case "NLA":
      return "Ndola, Zambia Ndola"
   case "NEC":
      return "Necochea, Buenos Aires, Argentina Necochea"
   case "EAM":
      return "Nejran, Saudi Arabia - Nejran Airport"
   case "NSN":
      return "Nelson, New Zealand Nelson"
   case "NLG":
      return "Nelson Lagoon, Alaska, USA - Nelson Lagoon Airport"
   case "NLP":
      return "Nelspruit, South Africa"
   case "MQP":
      return "Nelspruit, South Africa - Kruger Mpumalanga Airport"
   case "NER":
      return "Neryungri, Russia - Neryungri Airport"
   case "KEP":
      return "Nepalganj, Nepal Nepalganj"
   case "NQN":
      return "Neuquen, Argentina - Airport"
   case "NEV":
      return "Nevis, Leeward Islands, Saint Kitts And Nevis"
   case "EWB":
      return "New Bedford/Fall River, MA, USA New Bedford Municipal"
   case "EWN":
      return "New Bern, NC, USA SimmonsNott Airport"
   case "XEL":
      return "New Carlisle, Quebec, Canada New Carlisle / Via Rail Service"
   case "HVN":
      return "New Haven, CT, USA Tweed New Haven"
   case "MSY":
      return "New Orleans, LA, USA - Louis Armstrong New Orleans International Airport (Moisant International Airport)"
   case "NPL":
      return "New Plymouth, New Zealand New Plymouth"
   case "XEM":
      return "New Richmond, Quebec, Canada New Richmond / Via Rail Service"
   case "KNW":
      return "New Stuyahok, Alaska, USA - New Stuyahok Airport"
   case "JRA":
      return "New York City, NY, USA"
   case "TSS":
      return "New York, NY, USA East 34Th Street Heliport"
   case "JFK":
      return "New York, NY, USA John F Kennedy Intl Airport"
   case "LGA":
      return "New York, NY, USA Laguardia"
   case "EWR":
      return "Newark, NJ, USA Newark International Airport"
   case "SWF":
      return "Newburgh/Poughkeepsie, NY, USA Stewart"
   case "NCL":
      return "Newcastle, England, United Kingdom International"
   case "XEY":
      return "Newcastle, New Brunswick, Canada Newcastle / Via Rail Service"
   case "BEO":
      return "Newcastle, New South Wales, Australia Belmont"
   case "NTL":
      return "Newcastle, New South Wales, Australia Williamtown"
   case "ZNE":
      return "Newman, Western Australia, Australia Newman"
   case "PHF":
      return "Newport News/Williamsburg/Hampton, VA, USA Patrick Henry Intl"
   case "NQY":
      return "Newquay, England, United Kingdom Newquay Civil"
   case "WWT":
      return "Newtok, Alaska, USA - Newtok Airport"
   case "NHA":
      return "Nha-Trang, Vietnam - Nha-Trang Airport"
   case "XLV":
      return "Niagara Falls, Ontario, Canada"
   case "NIM":
      return "Niamey, Niger - Niamey Airport"
   case "NCE":
      return "Nice, France Cote D'azur"
   case "NME":
      return "Nightmute, Alaska, USA - Nightmute Airport"
   case "KIJ":
      return "Niigata, Japan - Niigata Airport"
   case "IKO":
      return "Nikolski, Alaska, USA - Nikolski Airport"
   case "FNI":
      return "Nimes, France - Nimes Airport"
   case "NGB":
      return "Ningbo, China - Ningbo"
   case "NIX":
      return "Nioro, Mali - Nioro Airport"
   case "NFO":
      return "Niuafo'Ou, Tonga - Niuafo-ou Airport"
   case "NTT":
      return "Niuatoputapu, Tonga - Niuatoputapu Airport"
   case "IUE":
      return "Niue, Niue - Niue Airport"
   case "NJC":
      return "Nizhnevartovsk, Russia Nizhnevartovsk"
   case "GOJ":
      return "Nizhniy Novgorod, Russia Nizhniy"
   case "OME":
      return "Nome, AK, USA"
   case "OFK":
      return "Norfolk, NE, USA Karl Stefan Memorial Airport"
   case "ORF":
      return "Norfolk, VA, USA Norfolk International Airport"
   case "NLK":
      return "Norfolk Island, Australia - Norfolk Island Airport"
   case "NSK":
      return "Norilsk, Russia - Norilsk Airport"
   case "NRK":
      return "Norrkoping, Sweden - Kungsangen Airport"
   case "YYB":
      return "North Bay, Ontario, Canada Jack Garland Airport"
   case "OTH":
      return "North Bend, OR, USA"
   case "NCA":
      return "North Caicos, Turks And Caicos Islands"
   case "ELH":
      return "North Eleuthera, Bahamas"
   case "LBF":
      return "North Platte, NE, USA Lee Bird Field"
   case "NWI":
      return "Norwich, England, United Kingdom Norwich"
   case "OWD":
      return "Norwood, MA, USA Memorial Code: Owd"
   case "NKC":
      return "Nouakchott, Mauritania Nouakchott"
   case "GEA":
      return "Noumea, New Caledonia - Magenta Airport"
   case "NOU":
      return "Noumea, New Caledonia - Tontouta"
   case "OVB":
      return "Novosibirsk, Russia Tolmachevo"
   case "NUX":
      return "Novy Urengoy, Russia - Novy Urengoy Airport"
   case "NLD":
      return "Nuevo Laredo, Tamaulipas, Mexico"
   case "TBU":
      return "Nuku Alofa/Tongatapu, Tonga - International"
   case "NCU":
      return "Nukus, Uzbekistan - Nukus Airport"
   case "NUE":
      return "Nuremberg, Germany Nuremberg"
   case "GOH":
      return "Nuuk, Greenland"
   case "NYU":
      return "Nyaung-U, Myanmar (Burma) - Nyaung-U Airport"
   case "ODW":
      return "Oak Harbor, WA, USA"
   case "OAK":
      return "Oakland, CA, USA Metropolitan Oakland Intl Apt"
   case "XOK":
      return "Oakville, Ontario, Canada Oakville / Via Rail Service"
   case "OAX":
      return "Oaxaca, Oaxaca, Mexico Xoxocotlan"
   case "OBO":
      return "Obihiro, Japan Obihiro"
   case "OCJ":
      return "Ochos Rios, Jamaica - Ochos Rios Airport"
   case "ONJ":
      return "Odate Noshiro, Japan - Odate Noshiro Airport"
   case "ODE":
      return "Odense, Denmark Odense"
   case "ODS":
      return "Odessa, Ukraine Central"
   case "OGS":
      return "Ogdensburg, NY, USA"
   case "OHD":
      return "Ohrid, Macedonia Ohrid"
   case "OIT":
      return "Oita, Japan Oita"
   case "VPS":
      return "Okaloosa County/Valparaiso, FL, USA - Fort Walton Beach/Okaloosa County Regional Airport"
   case "OKJ":
      return "Okayama, Japan Okayama"
   case "OKA":
      return "Okinawa, Ryukyu Islands, Japan Naha Field"
   case "OKC":
      return "Oklahoma City, OK, USA Will Rogers World Airport"
   case "OLB":
      return "Olbia, Italy - Costa Smeralda"
   case "ULG":
      return "Olgii, Bayan Olgii, Mongolia - Olgii Airport"
   case "OLM":
      return "Olympia, WA, USA"
   case "OLP":
      return "Olympic Dam, Australia - Olympic Dam Airport"
   case "OMA":
      return "Omaha, NE, USA Eppley Airfield"
   case "OMS":
      return "Omsk, Russia - Omsk Airport"
   case "UNR":
      return "Ondorkhaan, Khentii, Mongolia - Ondorkhaan Airport"
   case "ONT":
      return "Ontario, CA, USA Ontario International"
   case "OMR":
      return "Oradea, Romania Oradea"
   case "ORN":
      return "Oran, Algeria Es Senia"
   case "OAG":
      return "Orange, New South Wales, Australia Springhill"
   case "ORB":
      return "Orebro, Sweden Orebro"
   case "MBX":
      return "Orehova Vas/Slivnica, Slovenia - Maribor Airport"
   case "ORL":
      return "Orlando, FL, USA Herndon"
   case "MCO":
      return "Orlando, FL, USA Orlando International Airport"
   case "SFB":
      return "Orlando, FL, USA - Sanford Central Florida Regional Airport"
   case "OER":
      return "Ornskoldsvik, Sweden - Ornskoldsvik Airport"
   case "ITM":
      return "Osaka, Japan Itami International Was Osaka"
   case "KIX":
      return "Osaka, Japan Kansai International"
   case "OSA":
      return "Osaka, Japan Osaka International"
   case "YOO":
      return "Oshawa, Ontario, Canada"
   case "OIM":
      return "Oshima, Japan - Oshima Airport"
   case "OSH":
      return "Oshkosh, WI, USA Wittman Field"
   case "OSL":
      return "Oslo, Norway"
   case "ZOS":
      return "Osorno, Chile - Osorno Airport"
   case "OST":
      return "Ostend, Belgium - Ostend/Bruges International Airport"
   case "OSD":
      return "Ostersund, Sweden Froesoe"
   case "OSR":
      return "Ostrava, Czech Republic - Ostrava-Mosnov Airport"
   case "YOW":
      return "Ottawa, Ontario, Canada Ottawa International"
   case "OTM":
      return "Ottumwa, IA, USA Ottumwa Industrial Airport"
   case "OUA":
      return "Ouagadougou, Burkina Faso Ouagadougou"
   case "OZZ":
      return "Ouarzazate, Morocco Ouarzazate"
   case "OUD":
      return "Oujda, Morocco - Oujda-Les Angades Airport"
   case "OUL":
      return "Oulu, Finland Oulu"
   case "VDA":
      return "Ovda, Israel"
   case "OVD":
      return "Oviedo/Asturias, Spain - Oviedo Airport"
   case "OWB":
      return "Owensboro, KY, USA"
   case "OXR":
      return "Oxnard / Ventura, CA, USA Oxnard Airport"
   case "PDG":
      return "Padang, Indonesia Tabing"
   case "PAD":
      return "Paderborn, Germany Paderborn"
   case "PAH":
      return "Paducah, KY, USA"
   case "PGA":
      return "Page, AZ, USA"
   case "PPG":
      return "Pago Pago, American Samoa International"
   case "PKZ":
      return "Pakse, Laos - Pakse International Airport"
   case "YIF":
      return "Pakuashipi, Canada - Pakuashipi Airport"
   case "PLQ":
      return "Palanga, Lithuania Palanga"
   case "PLM":
      return "Palembang, Indonesia Sultan Mahmud Badaruddin Ii"
   case "PMO":
      return "Palermo, Sicily, Italy Punta Raisi"
   case "PBI":
      return "Palm Beach/West Palm Beach, FL, USA Palm Beach International Airport"
   case "PSP":
      return "Palm Springs, CA, USA Palm Springs Municipal"
   case "PMI":
      return "Palma Mallorca, Mallorca Island, Spain Palma Mallorca"
   case "PMW":
      return "Palmas, Brazil - Palmas Airport"
   case "PMD":
      return "Palmdale, CA, USA Air Force 42"
   case "PMR":
      return "Palmerston North, New Zealand Palmerstown North"
   case "PAO":
      return "Palo Alto, California, United States - Palo Alto of Santa Clara County Airport"
   case "PLW":
      return "Palu, Indonesia Mutiara"
   case "PNA":
      return "Pamplona, Spain Pamplona Noain"
   case "PFN":
      return "Panama City, FL, USA - Bay County Airport"
   case "PAC":
      return "Panama City, Panama - Paitilla Airport"
   case "PTY":
      return "Panama City, Panama Tocumen International Airport"
   case "PAM":
      return "Panama City, Florida, USA - Tyndall AFB-Panama City Airport"
   case "YXP":
      return "Pangnirtung, Canada - Pangnirtung Airport"
   case "PJG":
      return "Panjgur, Pakistan"
   case "PNL":
      return "Pantelleria, Italy Pantelleria"
   case "PPT":
      return "Papeete, French Polynesia Intl TahitiFaaa"
   case "PFO":
      return "Paphos, Cyprus International"
   case "PBO":
      return "Paraburdoo, Western Australia, Australia Paraburdoo"
   case "PBM":
      return "Paramaribo, Suriname Zanderij Intl"
   case "XFE":
      return "Parent, Quebec, Canada Parent / Via Rail Service"
   case "PAR":
      return "Paris, France"
   case "CDG":
      return "Paris, France Charles De Gaulle"
   case "JDP":
      return "Paris, France Issy Les Moulineaux"
   case "LBG":
      return "Paris, France - Le Bourget Airport"
   case "ORY":
      return "Paris, France Orly"
   case "PKB":
      return "Parkersburg / Marietta, WV, USA Wood County"
   case "PKE":
      return "Parkes, New South Wales, Australia Parkes"
   case "XPB":
      return "Parksville, British Columbia, Canada Parksville / Via Rail Service"
   case "PMF":
      return "Parma, Italy - Parma Airport"
   case "PAS":
      return "Paros, Greece Paros Community"
   case "PSC":
      return "Pasco, Washington, USA - Pasco Airport"
   case "IXT":
      return "Pasighat, India Pasighat"
   case "PSI":
      return "Pasni, Pakistan - Pasni Airport"
   case "PFB":
      return "Passo Fundo, Brazil - Passo Fundo Airport"
   case "PSO":
      return "Pasto, Colombia Cano"
   case "IXP":
      return "Pathankot, India Pathankot"
   case "PAT":
      return "Patna, India Patna"
   case "PUF":
      return "Pau, France Pau-Uzein- Pyrenees Airport"
   case "YPE":
      return "Peace River, Alberta, Canada Peace River"
   case "PKU":
      return "Pekanbaru, Indonesia Simpang Tiga"
   case "PLN":
      return "Pellston, MI, USA Pellston Regional Airport"
   case "YBB":
      return "Pelly Bay, Canada - Townsite Airport"
   case "YTA":
      return "Pembroke, Ontario, Canada Pem And Area Apt"
   case "PEN":
      return "Penang, Malaysia Penang International"
   case "YPT":
      return "Pender Harbor, Canada - Pender Harbor Airport"
   case "PDT":
      return "Pendleton, OR, USA"
   case "PNS":
      return "Pensacola, FL, USA"
   case "YYF":
      return "Penticton, British Columbia, Canada"
   case "PZE":
      return "Penzance, England, United Kingdom Penzance"
   case "PIA":
      return "Peoria, IL, USA Greater Peoria Airport"
   case "XFG":
      return "Perce, Quebec, Canada Perce / Via Rail Service"
   case "PEI":
      return "Pereira, Colombia Matecana"
   case "PGX":
      return "Perigueux, France"
   case "PEE":
      return "Perm, Russia Perm"
   case "KPV":
      return "Perryville, Alaska, USA - Perryville Airport"
   case "PGF":
      return "Perpignan, France Llabanere"
   case "PER":
      return "Perth, Western Australia, Australia Perth"
   case "PEG":
      return "Perugia, Italy Na"
   case "PSR":
      return "Pescara, Italy Liberi"
   case "PEW":
      return "Peshawar, Pakistan Peshawar"
   case "PSG":
      return "Petersburg, AK, USA Municipal"
   case "PNZ":
      return "Petrolina, Brazil - Petrolina International Airport"
   case "PKC":
      return "Petropavlovsk, Russia Petropavlovsk Kamchatsky Airport"
   case "PES":
      return "Petrozavodsk, Russia Petrozavodsk-Kamchatsky Airport"
   case "PHW":
      return "Phalaborwa, South Africa - Phalaborwa Airport"
   case "PHL":
      return "Philadelphia, PA, USA Philadelphia International Airport"
   case "PHS":
      return "Phitsanulok, Thailand"
   case "PNH":
      return "Phnom Penh, Cambodia Pochentong"
   case "PHX":
      return "Phoenix, AZ, USA Sky Harbor International Airport"
   case "AZA":
      return "Phoenix/Messa, Arizona, USA - Phoenix-Mesa Gateway Airport (formerly Williams Gateway Airport)"
   case "XKH":
      return "Phonsavan, Laos - Xieng Khouang Airport"
   case "HKT":
      return "Phuket, Thailand Phuket"
   case "PQC":
      return "Phuquoc, Vietnam - Phuquoc Airport"
   case "PDS":
      return "Piedras Negras, Mexico - Piedras Negras Airport"
   case "PIR":
      return "Pierre, SD, USA Pierre Municipal Airport"
   case "PTG":
      return "Pietersburg, South Africa"
   case "PZB":
      return "Pietermaritzburg, South Africa - Pietermaritzburg Airport"
   case "PIW":
      return "Pikwitonei, Manitoba, Canada"
   case "PIP":
      return "Pilot Point, Alaska, USA - Pilot Point Airport"
   case "UGB":
      return "Pilot Point, Alaska, USA - Ugashik Bay Airport"
   case "PSA":
      return "Pisa, Italy G Galilei"
   case "AGC":
      return "Pittsburgh/Allegheny County, PA, USA"
   case "PIT":
      return "Pittsburgh, PA, USA Greater Pit Intnl Airport"
   case "THU":
      return "Pituffik, Greenland Thule Airport"
   case "PIU":
      return "Piura, Peru - Piura Airport"
   case "PTU":
      return "Platinum, Alaska, USA - Platinum Airport"
   case "PLB":
      return "Plattsburgh, NY, USA"
   case "PXU":
      return "Pleiku, Vietnam - Pleiku Airport"
   case "PLH":
      return "Plymouth, England, United Kingdom Plymouth Airport"
   case "PIH":
      return "Pocatello, ID, USA"
   case "TGD":
      return "Podgorica, Yugoslavia Golubovci"
   case "KPO":
      return "Pohang, South Korea Na"
   case "PNI":
      return "Pohnpei, Caroline Islands, Micronesia Pohnpei International"
   case "PHO":
      return "Point Hope, AK, USA Point Hope"
   case "PTP":
      return "Pointe A Pitre, Guadeloupe Le Raizet"
   case "PNR":
      return "Pointe Noire, Congo Pointe Noire"
   case "XPX":
      return "PointeAuxTrembles, Quebec, Canada Pointe Aux Trembles / Via Rail Service"
   case "PIS":
      return "Poitiers, France - Poitiers-Biard Airport"
   case "PKR":
      return "Pokhara, Nepal Pokhara"
   case "PNC":
      return "Ponca City, OK, USA"
   case "PSE":
      return "Ponce, PR, USA Mercedita"
   case "YIO":
      return "Pond Inlet, Canada - Pond Inlet Airport"
   case "PDL":
      return "Ponta Delgada, Azores Islands, Portugal Nordela"
   case "PNK":
      return "Pontianak, Indonesia Supadio"
   case "PNQ":
      return "Poona, India Lohegaon Poona"
   case "TAT":
      return "Poprad, Slovakia - Tatry/Poprad"
   case "PBD":
      return "Porbandar, India - Porbandar Airport"
   case "POR":
      return "Pori, Finland Pori"
   case "PMV":
      return "Porlamar, Venezuela Gral Santiago Marino"
   case "CLM":
      return "Port Angeles, WA, USA Wm Fairchild Intl Airport"
   case "PAP":
      return "Port Au Prince, Haiti Mais Gate"
   case "IXZ":
      return "Port Blair, India Port Blair"
   case "PLZ":
      return "Port Elizabeth, South Africa Hf Verwoerd"
   case "BQU":
      return "Port Elizabeth, Saint Vincent and the Grenadines - Port Elizabeth Airport"
   case "POG":
      return "Port Gentil, Gabon Port Gentil"
   case "PHC":
      return "Port Harcourt, Nigeria - Port Harcourt Airport"
   case "YZT":
      return "Port Hardy, British Columbia, Canada Port Hardy Airport"
   case "PHE":
      return "Port Hedland, Western Australia, Australia - Pt Hedlan"
   case "PTH":
      return "Port Heiden, Alaska, USA - Port Heiden Airport"
   case "PLO":
      return "Port Lincoln, South Australia, Australia - Pt Lincoln"
   case "PQQ":
      return "Port Macquarie, New South Wales, Australia - Pt Macquarie"
   case "YMP":
      return "Port Mcneil, Canada - Port Mcneil Airport"
   case "PML":
      return "Port Moller, Alaska, USA - Port Moller Airport"
   case "POM":
      return "Port Moresby, Papua New Guinea Jackson"
   case "POS":
      return "Port Of Spain, Trinidad, Trinidad And Tobago Piarco International Airport"
   case "VLI":
      return "Port Vila, Vanuatu Bauerfield"
   case "PCA":
      return "Portage Creek, Alaska, USA - Portage Creek Airport"
   case "PTJ":
      return "Portland, Australia - Portland Airport"
   case "PWM":
      return "Portland, ME, USA Portland International Jetport"
   case "PDX":
      return "Portland, OR, USA Portland International Airport"
   case "OPO":
      return "Porto, Portugal Porto"
   case "POA":
      return "Porto Alegre, Rio Grande Do Sul, Brazil Salgado Filho"
   case "PXO":
      return "Porto Santo, Madeira Islands, Portugal Porto Santo"
   case "BPS":
      return "Porto Seguro, Bahia, Brazil Porto Seguro"
   case "PVH":
      return "Porto Velho, Brazil - Belmonte Airport"
   case "PSM":
      return "Portsmouth, NH, USA Pease Intl Tradeport"
   case "PSS":
      return "Posadas, Argentina - Posadas Airport"
   case "POU":
      return "Poughkeepsie, NY, USA Dutchess County"
   case "YPX":
      return "Povungnituk, Canada - Poungnituk Airport"
   case "YPW":
      return "Powell River, British Columbia, Canada"
   case "PAZ":
      return "Poza Rica, Veracruz, Mexico"
   case "POZ":
      return "Poznan, Poland Lawica"
   case "PRG":
      return "Prague, Czech Republic Ruzyne"
   case "RAI":
      return "Praia, Cape Verde - Mendes Airport"
   case "PRI":
      return "Praslin Island, Seychelles"
   case "PRC":
      return "Prescott, AZ, USA"
   case "PQI":
      return "Presque Isle, ME, USA"
   case "PVK":
      return "Preveza, Greece - Preveza-Lefkas Airport"
   case "YPA":
      return "Prince Albert, Canada - Prince Albert Airport"
   case "YXS":
      return "Prince George, British Columbia, Canada Prince George B C"
   case "YPR":
      return "Prince Rupert /Princ Rupert, British Columbia, Canada Digby Island"
   case "PCT":
      return "Princeton, NJ, USA Princeton Municipal"
   case "PRN":
      return "Pristina, Kosovo, Serbia - Pristina Airport"
   case "ZJJ":
      return "Procida Harbour, Italy - Procida Harbour Airport"
   case "PPP":
      return "Proserpine, Australia - Proserpine Airport"
   case "PVD":
      return "Providence, RI, USA Tf Green State Airport"
   case "PLS":
      return "Providenciales, Turks And Caicos Islands"
   case "PVC":
      return "Provincetown, MA, USA Provincetown Municipal Airport"
   case "PVU":
      return "Provo, UT, USA Provo"
   case "SCC":
      return "Prudhoe Bay, Alaska - Deadhorse Airport"
   case "PCL":
      return "Pucallpa, Peru Captain Rolden"
   case "PBC":
      return "Puebla, Puebla, Mexico"
   case "PUB":
      return "Pueblo, CO, USA Pueblo Memorial Airport"
   case "PUZ":
      return "Puerto Cabezas, Nicaragua Puerto Cabezas"
   case "PXM":
      return "Puerto Escondido, Oaxaca, Mexico"
   case "PEM":
      return "Puerto Maldonado, Peru - Puerto Maldonado Airport"
   case "PMC":
      return "Puerto Montt, Chile Tepual"
   case "PZO":
      return "Puerto Ordaz, Venezuela Puerto Ordaz"
   case "POP":
      return "Puerto Plata, Dominican Republic La Union"
   case "PPS":
      return "Puerto Princesa, Philippines Puerto Princesa"
   case "PSZ":
      return "Puerto Suarez, Bolivia"
   case "PVR":
      return "Puerto Vallarta, Jalisco, Mexico Gustavo Diaz Ordaz"
   case "PUY":
      return "Pula, Croatia (Hrvatska) Pula"
   case "PUW":
      return "Pullman, WA, USA Pullman"
   case "PUQ":
      return "Punta Arenas, Chile Presidente Ibanez"
   case "PUJ":
      return "Punta Cana, Dominican Republic"
   case "SDQ":
      return "Punta Causedo-Santo Domingo, Dominican Republic - Las Americas International Airport"
   case "PDP":
      return "Punta del Este, Uruguay - Punta Del Este Airport"
   case "PUS":
      return "Pusan, South Korea Kimhae"
   case "AQI":
      return "Qaisumah, Saudi Arabia - Qaisumah Airport"
   case "IQM":
      return "Qiemo, China - Qiemo"
   case "TAO":
      return "Qingdao, China - Qingdao Airport"
   case "SHP":
      return "Qinhuangdao, China - Qinhuangdao"
   case "NDG":
      return "Qiqihar, China - Qiqihar"
   case "XQU":
      return "Qualicum, British Columbia, Canada"
   case "YQC":
      return "Quaqtaq, Quebec, Canada - Quaqtaq Airport"
   case "YQB":
      return "Quebec, Quebec, Canada Sainte Foy Airport"
   case "ZQN":
      return "Queenstown, New Zealand Frankton"
   case "UEL":
      return "Quelimane, Mozambique"
   case "XQP":
      return "Quepos, Costa Rica"
   case "QRO":
      return "Queretaro, Queretaro, Mexico"
   case "YQZ":
      return "Quesnel, British Columbia, Canada"
   case "UET":
      return "Quetta, Pakistan"
   case "UIB":
      return "Quibdo, Colombia"
   case "UIP":
      return "Quimper, France Pluguffan"
   case "UIN":
      return "Quincy, IL, USA Baldwin Field"
   case "KWN":
      return "Quinhagak, Alaska, USA - Quinhagak Airport"
   case "UIH":
      return "Quinhon, Vietnam - Quinhon Airport"
   case "UIO":
      return "Quito, Ecuador Mariscal"
   case "RBA":
      return "Rabat, Morocco Sale"
   case "RAB":
      return "Rabaul, Papua New Guinea Lakunai"
   case "BVC":
      return "Rabil, Cape Verde - Rabil Airport"
   case "VKG":
      return "Rachgia, Vietnam - Rachgia Airport"
   case "BEK":
      return "Rae Bareli, Uttar Pradesh, India - Raebareli Fursatganj Airfield"
   case "RAH":
      return "Rafha, Saudi Arabia - Rafha Airport"
   case "RYK":
      return "Rahim Yar Khan, Pakistan - Rahim Yar Khan Airport"
   case "RFP":
      return "Raiatea, French Polynesia - Raiatea-Uturoa Airport"
   case "YOP":
      return "Rainbow Lake, Alberta, Canada Rainbow Lake"
   case "RPR":
      return "Raipur, India"
   case "RAJ":
      return "Rajkot, India Rajkot"
   case "RDU":
      return "Raleigh/Durham, NC, USA Raleigh Durham International Arpt"
   case "IXR":
      return "Ranchi, India Ranchi"
   case "YRT":
      return "Rankin Inlet, Canada - Rankin Inlet Airport"
   case "RAP":
      return "Rapid City, SD, USA Rapid City Regional Airport"
   case "RAR":
      return "Rarotonga, Cook Islands Rarotonga"
   case "RKT":
      return "Ras Al Khaimah, United Arab Emirates - Ras Al Khaimah Airport"
   case "RAS":
      return "Rasht, Iran - Rasht Airport"
   case "RDG":
      return "Reading, PA, USA Municipal / Spaatz Field"
   case "REC":
      return "Recife, Pernambuco, Brazil Guararapes International"
   case "YRL":
      return "Red Lake, Ontario, Canada - Red Lake-Federal Airport"
   case "RDD":
      return "Redding, CA, USA Redding Municipal Airport"
   case "RDM":
      return "Redmond/Bend, OR, USA - Roberts Field"
   case "REG":
      return "Reggio Calabria, Italy Tito Menniti"
   case "YQR":
      return "Regina, Saskatchewan, Canada Regina International"
   case "RNS":
      return "Rennes, France St Jacques"
   case "RNO":
      return "Reno/Tahoe, NV, USA - Reno-Tahoe International Airport (formerly Reno-Cannon International Apt)"
   case "RES":
      return "Resistencia, Chaco, Argentina"
   case "YRB":
      return "Resolute, Northwest Territories, Canada Resolute Bay"
   case "REU":
      return "Reus, Spain Reus"
   case "KEF":
      return "Reykjavik, Iceland Keflavik"
   case "REK":
      return "Reykjavik, Iceland - Metropolitan Area"
   case "RKV":
      return "Reykjavik, Iceland Reykjavik Domestic Airport"
   case "REX":
      return "Reynosa, Tamaulipas, Mexico General Lucio Blanco Airport"
   case "RHI":
      return "Rhinelander, WI, USA Rhinelander Oneida County Airport"
   case "RHO":
      return "Rhodes, Greece Paradisi"
   case "RAO":
      return "Ribeirao Preto, Brazil - Ribeirao Preto Airport"
   case "RCB":
      return "Richards Bay, South Africa Richards Bay"
   case "RIC":
      return "Richmond, VA, USA Richmond International Airport"
   case "RIX":
      return "Riga, Latvia Riga"
   case "RMI":
      return "Rimini, Italy - Rimini Airport"
   case "TIA":
      return "Rinas (Tirana), Albania - Tirana International Airport Nene Tereza"
   case "RBR":
      return "Rio Branco, Brazil - Presidente Medici Airport"
   case "RIO":
      return "Rio De Janeiro, Rio De Janeiro, Brazil"
   case "GIG":
      return "Rio De Janeiro, Rio De Janeiro, Brazil International Airport"
   case "SDU":
      return "Rio De Janeiro, Rio De Janeiro, Brazil Santos Dumont"
   case "RGL":
      return "Rio Gallegos, Santa Cruz, Argentina Rio GallegosInternacional"
   case "RGA":
      return "Rio Grande, Tierra Del Fuego, Argentina"
   case "RIS":
      return "Rishiri, Japan - Rishiri Airport"
   case "RIW":
      return "Riverton, WY, USA Riverton Regional Airport"
   case "XRP":
      return "Riviere A Pierre, Quebec, Canada Riviere A Pierre / Via Rail Service"
   case "YRI":
      return "Riviere du Loup, Quebec, Canada - Ville de Riviere-du-Loup Airport"
   case "RUH":
      return "Riyadh, Saudi Arabia King Khaled Intl"
   case "ROA":
      return "Roanoke, VA, USA Roanoke Regional Airport"
   case "RTB":
      return "Roatan, Honduras Roatan"
   case "YRJ":
      return "Roberval, Canada - Roberval Airport"
   case "RCE":
      return "Roche Harbor, WA, USA Roche Harbor"
   case "RST":
      return "Rochester, MN, USA Rochester Municipal"
   case "ROC":
      return "Rochester, NY, USA Monroe County Airport"
   case "RSD":
      return "Rock Sound, Bahamas"
   case "RKS":
      return "Rock Springs, WY, USA Rock Springs Sweetwater Cty Arpt"
   case "ZRF":
      return "Rockford, IL, USA"
   case "RFD":
      return "Rockford, IL, USA Greater Rockford"
   case "ROK":
      return "Rockhampton, Australia - Rockhampton Airport"
   case "RKD":
      return "Rockland, ME, USA Rockland"
   case "RWI":
      return "Rocky Mount, NC, USA Wilson"
   case "RDZ":
      return "Rodez, France - Rodez Airport"
   case "RRG":
      return "Rodrigues Island, Mauritius Rodrigues"
   case "RMA":
      return "Roma, Queensland, Australia Roma"
   case "CIA":
      return "Rome, Italy Ciampino"
   case "ROM":
      return "Rome, Italy Leonardo Da Vinci / Fiumicino"
   case "FCO":
      return "Rome, Italy Leonardo Da Vinci/Fiumicino"
   case "RNN":
      return "Ronne/Bornholm, Denmark - Arnager Airport"
   case "RNB":
      return "Ronneby, Sweden Kallinge"
   case "ROS":
      return "Rosario, Santa Fe, Argentina Fisherton"
   case "RPN":
      return "Rosh-Pina, Israel - Rosh-Pina Airport"
   case "RLG":
      return "Rostock-Laage, Germany - Rostock-Laage Airport"
   case "ROV":
      return "Rostov, Russia Rostov"
   case "ROW":
      return "Roswell, NM, USA Industrial Air Center"
   case "ROP":
      return "Rota, Northern Mariana Islands Rota"
   case "ROT":
      return "Rotorua, New Zealand - Rotorua Airport"
   case "RTM":
      return "Rotterdam, Netherlands Rotterdam"
   case "URO":
      return "Rouen, France Rouen /Boos Airport"
   case "YUY":
      return "Rouyn Noranda, Canada - Rouyn-Noranda Airport"
   case "RVN":
      return "Rovaniemi, Finland - Rovaniemi Airport"
   case "RXS":
      return "Roxas, Philippines - Roxas Airport"
   case "RUI":
      return "Ruidoso, NM, USA"
   case "RUT":
      return "Rutland, VT, USA"
   case "RZE":
      return "Rzeszow, Poland - Rzeszow Airport"
   case "SCN":
      return "Saarbruecken, Germany Ensheim"
   case "SAB":
      return "Saba Island, Netherlands Antilles"
   case "SMF":
      return "Sacramento, CA, USA Sacramento Metropolitan"
   case "HSG":
      return "Saga, Japan - Saga Airport"
   case "MBS":
      return "Saginaw / Bay City / Midland, MI, USA - TriCity Airport"
   case "SPD":
      return "Saidpur, Bangladesh"
   case "YAY":
      return "Saint Anthony, Canada - St Anthony Airport"
   case "SBH":
      return "Saint Barthelemy, Guadeloupe"
   case "YCM":
      return "Saint Catharines, Ontario, Canada"
   case "STC":
      return "Saint Cloud, MN, USA Saint Cloud"
   case "STX":
      return "Saint Croix Island, VI, USA"
   case "SSB":
      return "Saint Croix Island, VI, USA Sea Plane Base"
   case "RUN":
      return "Saint Denis De La Reunion, Reunion Gillot"
   case "SGO":
      return "Saint George, Queensland, Australia St George"
   case "SGU":
      return "Saint George, UT, USA St George"
   case "GND":
      return "Saint Georges/Grenada, Grenada Pt Saline"
   case "YSJ":
      return "Saint John, New Brunswick, Canada Turnbull Field"
   case "YYT":
      return "Saint John's, Newfoundland, Canada St John's International"
   case "ANU":
      return "Saint Johns / Antigua, Antigua And Barbuda Vc Bird International"
   case "XIM":
      return "Saint Hyacinthe, Quebec, Canada Saint Hyacinthe / Via Rail Service"
   case "SKB":
      return "Saint Kitts, Saint Kitts And Nevis Golden Rock"
   case "YSL":
      return "Saint Leonard, New Brunswick, Canada St Leonard Apt"
   case "STL":
      return "Saint Louis, MO, USA LambertSt Louis Internatl"
   case "UVF":
      return "Saint Lucia, Saint Lucia Hewanorra"
   case "SLU":
      return "Saint Lucia, Saint Lucia Vigie Field"
   case "SXM":
      return "Saint Maarten, Netherlands Antilles Juliana"
   case "SMS":
      return "Saint Marie, Madagascar"
   case "SFG":
      return "Saint Martin, Netherlands Antilles Esperance"
   case "XIO":
      return "Saint Marys, Ontario, Canada St Marys / Via Rail Service"
   case "STP":
      return "Saint Paul, MN, USA Downtown Airport"
   case "SNP":
      return "Saint Paul Island, Alaska, USA - St Paul Island Airport"
   case "LED":
      return "Saint Petersburg, Russia Pulkovo"
   case "PIE":
      return "Saint Petersburg/Clearwater, FL, USA St Petersburg/Clearwater Intl"
   case "FSP":
      return "Saint Pierre, St. Pierre And Miquelon"
   case "STT":
      return "Saint Thomas Island, VI, USA Cyril E King Arpt"
   case "SPB":
      return "Saint Thomas Island, VI, USA Seaplane Base"
   case "SVD":
      return "Saint Vincent, St. Vincent And The Grenadines"
   case "SPN":
      return "Saipan, Northern Mariana Islands Saipan Intl Northrn Mariana Isles"
   case "SNO":
      return "Sakon Nakhon, Thailand"
   case "SID":
      return "Sal, Cape Verde Amilcar Cabral International"
   case "SLL":
      return "Salalah, Oman - Salalah International Airport"
   case "SLM":
      return "Salamanca, Spain - Salamanca Airport"
   case "SLN":
      return "Salina, KS, USA Salina Municipal"
   case "SCX":
      return "Salina Cruz, Mexico - Salina Cruz Airport"
   case "SBY":
      return "Salisbury, MD, USA SalisburyWicomico County Arpt"
   case "YZG":
      return "Salluit, Canada - Salluit Airport"
   case "YSN":
      return "Salmon Arm, British Columbia, Canada"
   case "SLC":
      return "Salt Lake City, UT, USA Salt Lake City International Arpt"
   case "SLA":
      return "Salta, Salta, Argentina International"
   case "SLW":
      return "Saltillo, Coahuila, Mexico Saltillo"
   case "SSA":
      return "Salvador, Bahia, Brazil Dois De Julho"
   case "SZG":
      return "Salzburg, Austria Salzburg"
   case "NEU":
      return "Sam Neua, Laos - Sam Neua Airport"
   case "AZS":
      return "Samana/El Catey, Dominican Republic - Samana El Catey International Airport"
   case "KUF":
      return "Samara, Russia Samara"
   case "SKD":
      return "Samarkand, Uzbekistan"
   case "SMI":
      return "Samos Island, Greece - Samos Airport"
   case "SZF":
      return "Samsun, Turkey - Samsun Airport"
   case "ADZ":
      return "San Andres Island, Colombia"
   case "SAQ":
      return "San Andros, Bahamas - San Andros Airport"
   case "SJT":
      return "San Angelo, TX, USA"
   case "SAT":
      return "San Antonio, TX, USA San Antonio International"
   case "SVZ":
      return "San Antonio, Venezuela"
   case "SQL":
      return "San Carlos, California, United States - San Carlos Airport"
   case "BRC":
      return "San Carlos De Bariloche, Rio Negro, Argentina International"
   case "SZT":
      return "San Cristobel de las Casas, Mexico - San Cristobal de las Casas Airport"
   case "SAN":
      return "San Diego, CA, USA Lindbergh International Airport"
   case "SFO":
      return "San Francisco, CA, USA San Francisco Intl Airport"
   case "SJD":
      return "San Jose Del Cabo, Baja California Sur, Mexico Los Cabos Intl Airport"
   case "SJC":
      return "San Jose, CA, USA San Jose International Airport"
   case "SJO":
      return "San Jose, Costa Rica Juan Santamaria International"
   case "SJI":
      return "San Jose, Philippines Mcguire Field"
   case "SIG":
      return "San Juan, Puerto Rico - Isla Grande Airport"
   case "SJU":
      return "San Juan, PR, USA Luis Munoz Marin International"
   case "UAQ":
      return "San Juan, San Juan, Argentina"
   case "LUQ":
      return "San Luis, Argentina - San Luis Airport"
   case "SBP":
      return "San Luis Obispo, CA, USA San Luis Obispo County Airport"
   case "SLP":
      return "San Luis Potosi, San Luis Potosi, Mexico"
   case "CPC":
      return "San Martin De Los Andes, Neuquen, Argentina"
   case "SAP":
      return "San Pedro Sula, Honduras La Mesa"
   case "SPR":
      return "San Pedro, Belize San Pedro"
   case "AFA":
      return "San Rafael, Argentina - San Rafael Airport"
   case "ZSA":
      return "San Salvador, Bahamas"
   case "SAL":
      return "San Salvador, El Salvador El Salvadore Intl Airport"
   case "EAS":
      return "San Sebastian, Spain Fuenterrabia"
   case "SOM":
      return "San Tome, Venezuela"
   case "SAH":
      return "Sanaa, Yemen International"
   case "SDP":
      return "Sand Point, Alaska, USA - Sand Point Airport"
   case "SDK":
      return "Sandakan, Sabah, Malaysia"
   case "SDN":
      return "Sandane, Norway"
   case "TRF":
      return "Sandefjord, Norway Torf"
   case "SSJ":
      return "Sandnessjoen, Norway Stokka"
   case "YZP":
      return "Sandspit, Canada - Sandspit Airport"
   case "SFB":
      return "Sanford/Orlando, FL, USA - Central Florida Regional Airport"
   case "YSK":
      return "Sanikiluaq, Canada - Sanikiluaq Airport"
   case "SFQ":
      return "Sanliurfa, Turkey - Sanliurga Airport"
   case "SNA":
      return "Santa Ana, CA, USA John Wayne Airport"
   case "SBA":
      return "Santa Barbara, CA, USA Santa Barbara Airport"
   case "SNU":
      return "Santa Clara, Cuba - Abel Santa Maria Airport"
   case "PAO":
      return "Santa Clara County, California, United States - Palo Alto of Santa Clara County Airport"
   case "SPC":
      return "Santa Cruz La Palma, Canary Islands, Spain La Palma"
   case "VVI":
      return "Santa Cruz, Bolivia Viru Viru International"
   case "SAF":
      return "Santa Fe, NM, USA Santa Fe Municipal Airport"
   case "SFN":
      return "Santa Fe, Santa Fe, Argentina"
   case "SMX":
      return "Santa Maria, CA, USA Santa Maria Public Airport"
   case "SMR":
      return "Santa Marta, Colombia - Simon Bolivar Airport"
   case "STS":
      return "Santa Rosa, CA, USA Sonoma County Airport"
   case "RSA":
      return "Santa Rosa, La Pampa, Argentina"
   case "SDR":
      return "Santander, Spain Santander"
   case "STM":
      return "Santarem, Para, Brazil - Santarem International Airport"
   case "SCQ":
      return "Santiago De Compostela, Spain Santiago"
   case "SDE":
      return "Santiago Del Estero, Argentina - Sandiago Del Estero Airport"
   case "SCL":
      return "Santiago, Chile Aeropuerto Comodoro Arturo Merino Benitez"
   case "SCU":
      return "Santiago, Cuba SantiagoAntonio Maceo Cuba"
   case "STI":
      return "Santiago, Dominican Republic Municipal"
   case "SDQ":
      return "Santo Domingo, Dominican Republic Las Americas"
   case "STD":
      return "Santo Domingo, Venezuela Mayor Humberto Vivas Guerrero"
   case "JTR":
      return "Santorini/Thira Is, Greece Santorini"
   case "SYX":
      return "Sanya, China"
   case "SFL":
      return "Sao Filipe, Cape Verde - Sao Filipe Airport"
   case "SJP":
      return "Sao Jose Do Rio Preto, Brazil - Sao Jose Do Rio Preto Airport"
   case "SJK":
      return "Sao Jose Dos Campos, Sao Paulo, Brazil - Sao Jose Dos Campos Airport"
   case "SLZ":
      return "Sao Luiz, Maranhao, Brazil Tirirical"
   case "SNE":
      return "Sao Nicolau, Cape Verde - Sao Nicolau Airport"
   case "CGH":
      return "Sao Paulo, Sao Paulo, Brazil Congonhas"
   case "GRU":
      return "Sao Paulo, Sao Paulo, Brazil Guarulhos International"
   case "VCP":
      return "Sao Paulo Viracopos, Brazil - Sao Paulo Viracopos Airport"
   case "TMS":
      return "Sao Tome, Sao Tome and Principe - Sao Tome Airport"
   case "CTS":
      return "Sapporo, Japan Chitose"
   case "OKD":
      return "Sapporo, Japan - Okadama Airport"
   case "SJJ":
      return "Sarajevo, Bosnia And Herzegowina Butmir"
   case "SLK":
      return "Saranac Lake, NY, USA Adirondack"
   case "SRQ":
      return "Sarasota/Bradenton, FL, USA SarasotaBradenton"
   case "VNA":
      return "Saravane, Laos - Saravane Airport"
   case "YZR":
      return "Sarnia, Canada - Sarnia Airport"
   case "YXE":
      return "Saskatoon, Saskatchewan, Canada Saskatoon"
   case "SUJ":
      return "Satu Mare, Romania - Satu Mare Airport"
   case "CIU":
      return "Sault Ste Marie, MI, USA Chippewa County Intl Airport"
   case "YAM":
      return "Sault Ste Marie, Ontario, Canada Sault Ste Marie Arpt"
   case "JMC":
      return "Sausalito, CA, USA Marin County"
   case "SAV":
      return "Savannah, GA, USA Travis Field"
   case "ZVK":
      return "Savannakhet, Laos - Savannakhet Airport"
   case "SVL":
      return "Savonlinna, Finland Savonlinna"
   case "SVU":
      return "Savusavu, Fiji Savusavu"
   case "SCM":
      return "Scammon Bay, Alaska, USA - Scammon Bay Airport"
   case "YKL":
      return "Schefferville, Quebec, Canada Schefferville"
   case "BFF":
      return "Scottsbluff, NE, USA William B Heiling Field"
   case "LKE":
      return "Seattle, WA, USA Lake Union Sea Plane Base"
   case "SEA":
      return "Seattle, WA, USA Seattle Tacoma Intl Airport"
   case "BFI":
      return "Seattle Kings County International/Boeing Field, WA, USA"
   case "SEB":
      return "Sebha, Libya"
   case "SDX":
      return "Sedona, AZ, USA"
   case "SRG":
      return "Semarang, Indonesia - Yani Airport"
   case "SMM":
      return "Semporna, Sabah, Malaysia Semporna"
   case "SDJ":
      return "Sendai, Japan Sendai"
   case "DJJ":
      return "Sentani, Indonesia - Sentani-Jayapura Airport"
   case "ICN":
      return "Seoul, South Korea - Incheon International Airport"
   case "SEL":
      return "Seoul, South Korea Kimpo International"
   case "YZV":
      return "Sept-Iles, Quebec, Canada"
   case "SRX":
      return "Sert, Libya"
   case "SVQ":
      return "Sevilla, Spain"
   case "SFA":
      return "Sfax, Tunisia Sfax Airport"
   case "PVG":
      return "Shanghai, China - Pudong Shanghai Airport"
   case "SHA":
      return "Shanghai, China - Shanghai Intl /Hongqiao/"
   case "SNN":
      return "Shannon, Ireland Shannon"
   case "SWA":
      return "Shantou, China"
   case "SHJ":
      return "Sharjah, United Arab Emirates Sharjah"
   case "SSH":
      return "Sharm El Sheikh, Egypt Ophira"
   case "SHW":
      return "Sharurah, Saudi Arabia - Sharurah Airport"
   case "XFL":
      return "Shawinigan, Quebec, Canada Shawinigan / Via Rail Service"
   case "XFM":
      return "Shawnigan, British Columbia, Canada Shawnigan / Via Rail Service"
   case "SHE":
      return "Shenyang, China Shenyang"
   case "SZX":
      return "Shenzhen, China Shenzhen"
   case "SHR":
      return "Sheridan, WY, USA Sheridan County Airport"
   case "LSI":
      return "Shetland Islands /Shetland Isd, Scotland, United Kingdom Shetland Islands"
   case "LWK":
      return "Shetland Islands /Shetland Isd, Scotland, United Kingdom Tingwall"
   case "SJW":
      return "Shijiazhuang, China Shijiazhuang"
   case "HIL":
      return "Shillavo, Ethiopia - Shillavo Airport"
   case "SYZ":
      return "Shiraz, Iran Shiraz"
   case "SHC":
      return "Indaselassie, Ethiopia - Shire Indaselassie Airport"
   case "SYO":
      return "Shonai, Japan Shonai"
   case "SOW":
      return "Show Low, AZ, USA"
   case "SHV":
      return "Shreveport, LA, USA Regional Airport"
   case "REP":
      return "Siam Reap/Angkor Wat, Cambodia, Siem Reap International Airport"
   case "SBZ":
      return "Sibiu, Romania - Sibiu Airport"
   case "SBW":
      return "Sibu, Sarawak, Malaysia Sibu"
   case "SDY":
      return "Sidney, MT, USA"
   case "SAY":
      return "Siena, Italy - Siena Airport"
   case "IXS":
      return "Silchar, India Kumbhirgram"
   case "SVC":
      return "Silver City, New Mexico, USA - Silver City Airport"
   case "SYM":
      return "Simao, China - Simao"
   case "SIP":
      return "Simferopol, Ukraine Simferopol"
   case "SIN":
      return "Singapore, Singapore Changi International Airport"
   case "SIR":
      return "Sion, Switzerland - Sion Airport"
   case "SUX":
      return "Sioux City, Iowa, USA - Sioux Gateway International Airport"
   case "FSD":
      return "Sioux Falls, SD, USA Joe Foss Field"
   case "YXL":
      return "Sioux Lookout, Ontario, Canada"
   case "JSH":
      return "Sitia, Greece - Sitia Airport"
   case "SIT":
      return "Sitka, AK, USA Sitka"
   case "VAS":
      return "Sivas, Turkey Sivas"
   case "SGY":
      return "Skagway, AK, USA"
   case "KDU":
      return "Skardu, Pakistan - Skardu Airport"
   case "SFT":
      return "Skelleftea, Sweden Skelleftea"
   case "JSI":
      return "Skiathos, Greece Skiathos"
   case "SKE":
      return "Skien, Norway - Skien-Geiteryggen Airport"
   case "SKU":
      return "Skiros, Greece - Skiros Airport"
   case "SKP":
      return "Skopje, FYROM (Former Yugoslav Republic of Macedonia) - Skopje Airport"
   case "SLD":
      return "Sliac, Slovakia - Sliac Airport"
   case "SXL":
      return "Sligo, Ireland Collooney"
   case "MBX":
      return "Slivnica/Orehova Vas, Slovenia - Maribor Airport"
   case "YSH":
      return "Smith Falls, Ontario, Canada"
   case "YYD":
      return "Smithers, British Columbia, Canada Smithers International"
   case "SNB":
      return "Snake Bay, Northern Territory, Australia"
   case "AER":
      return "Sochi, Russia - Sochi Airport"
   case "SOF":
      return "Sofia, Bulgaria Sofia Intl"
   case "SOG":
      return "Sogndal, Norway Haukasen"
   case "SHO":
      return "Sokcho, South Korea"
   case "SQH":
      return "Son-La, Vietnam - Son-La Airport"
   case "SGD":
      return "Sonderborg, Denmark Sonderborg"
   case "JZH":
      return "Songpan Jiuzhai, China"
   case "RRO":
      return "Sorrento, Italy - Sorrento Airport"
   case "TZN":
      return "South Andros, Bahamas Congo Town"
   case "SBN":
      return "South Bend, IN, USA Michiana Regional Airport"
   case "XSC":
      return "South Caicos, Turks And Caicos Islands"
   case "TVL":
      return "South Lake Tahoe, CA, USA Lake Tahoe"
   case "WSN":
      return "South Naknek, Alaska, USA - South Naknek Airport"
   case "SOU":
      return "Southampton, England, United Kingdom Eastleigh"
   case "SOP":
      return "Southern Pines, NC, USA Pinehurst"
   case "SPW":
      return "Spencer, IA, USA Spencer Municipal Airport"
   case "SPU":
      return "Split, Croatia (Hrvatska) Split"
   case "GEG":
      return "Spokane, WA, USA International/Geiger Field"
   case "AXP":
      return "Spring Point, Bahamas - Spring Point Airport"
   case "SPI":
      return "Springfield, IL, USA Capital Airport"
   case "SGF":
      return "Springfield, MO, USA Springfield Regional Airport"
   case "SXR":
      return "Srinagar, India"
   case "YAY":
      return "St Anthony, Canada - St Anthony Airport"
   case "SBH":
      return "St Barthelemy, Guadeloupe"
   case "YCM":
      return "St Catharines, Ontario, Canada"
   case "STC":
      return "St Cloud, MN, USA Saint Cloud"
   case "STX":
      return "St Croix Island, VI, USA"
   case "SSB":
      return "St Croix Island, VI, USA Sea Plane Base"
   case "RUN":
      return "St Denis De La Reunion, Reunion Gillot"
   case "SGO":
      return "St George, Queensland, Australia St George"
   case "GND":
      return "St Georges/Grenada, Grenada Pt Saline"
   case "SGU":
      return "St George, UT, USA St George"
   case "YSJ":
      return "St John, New Brunswick, Canada Turnbull Field"
   case "YYT":
      return "St John's, Newfoundland, Canada St John's International"
   case "ANU":
      return "St Johns / Antigua, Antigua And Barbuda Vc Bird International"
   case "XIM":
      return "St Hyacinthe, Quebec, Canada Saint Hyacinthe / Via Rail Service"
   case "SKB":
      return "St Kitts, Saint Kitts And Nevis Golden Rock"
   case "YSL":
      return "St Leonard, New Brunswick, Canada St Leonard Apt"
   case "STL":
      return "St Louis, MO, USA LambertSt Louis Internatl"
   case "UVF":
      return "St Lucia, Saint Lucia Hewanorra"
   case "SLU":
      return "St Lucia, Saint Lucia Vigie Field"
   case "SXM":
      return "St Maarten, Netherlands Antilles Juliana"
   case "SMS":
      return "St Marie, Madagascar"
   case "SFG":
      return "St Martin, Netherlands Antilles Esperance"
   case "XIO":
      return "St Marys, Ontario, Canada St Marys / Via Rail Service"
   case "STP":
      return "St Paul, MN, USA Downtown Airport"
   case "SNP":
      return "St Paul Island, Alaska, USA - St Paul Island Airport"
   case "LED":
      return "St Petersburg, Russia Pulkovo"
   case "PIE":
      return "St Petersburg/Clearwater, FL, USA St Petersburg/Clearwater Intl"
   case "FSP":
      return "St Pierre, St. Pierre And Miquelon"
   case "STT":
      return "St Thomas Island, VI, USA Cyril E King Arpt"
   case "SPB":
      return "St Thomas Island, VI, USA Seaplane Base"
   case "SVD":
      return "St Vincent, St. Vincent And The Grenadines"
   case "SCE":
      return "State College, PA, USA University Park Arpt"
   case "SHD":
      return "Staunton, VA, USA Shenandoah Valley Regional"
   case "SVG":
      return "Stavanger, Norway Sola"
   case "RUN":
      return "St Denis De La Reunion, Reunion Gillot"
   case "HDN":
      return "Steamboat Springs Hayden, Colorado, USA - Steamboat Springs Hayden/Yampa Valley Regional Airport"
   case "SML":
      return "Stella Maris, Bahamas"
   case "YJT":
      return "Stephenville, Newfoundland, Canada Stephenville"
   case "ARN":
      return "Stockholm, Sweden Arlanda International"
   case "BMA":
      return "Stockholm, Sweden Bromma Arpt"
   case "SCK":
      return "Stockton, California, USA - Stockton Airport"
   case "SKN":
      return "Stokmarknes, Norway - Skagen Airport"
   case "YSF":
      return "Stony Rapids, Saskatchewan, Canada Stony Rapids"
   case "SYY":
      return "Stornoway, Scotland, United Kingdom Stornoway"
   case "SQO":
      return "Storuman, Sweden - Storuman Airport"
   case "SXB":
      return "Strasbourg, France Entzheim"
   case "XFD":
      return "Stratford, Ontario, Canada"
   case "XTY":
      return "Strathroy, Ontario, Canada Strathroy / Via Rail Service"
   case "SOY":
      return "Stronsay, Orkney Islands, Scotland, United Kingdom - Stronsay Airport"
   case "YRR":
      return "Stuart Island, Canada - Stuart Island Airport"
   case "SUE":
      return "Sturgeon Bay, WI, USA"
   case "STR":
      return "Stuttgart, Germany Echterdingen"
   case "SRE":
      return "Sucre, Bolivia Sucre"
   case "YSB":
      return "Sudbury, Ontario, Canada"
   case "SUL":
      return "Sui, Pakistan - Sui Airport"
   case "SKZ":
      return "Sukkur, Pakistan - Sukkur Airport"
   case "YTG":
      return "Sullivan Bay, Canada - Sullivan Bay Airport"
   case "SWQ":
      return "Sumbawa Island, Indonesia Brang Bidji"
   case "NTY":
      return "Sun City, South Africa - Pilansberg Airport"
   case "SUN":
      return "Sun Valley/Hailey, ID, USA"
   case "SDL":
      return "Sundsvall, Sweden Sundsvall"
   case "MCY":
      return "Sunshine Coast, Queensland, Australia Maroochydore"
   case "SUB":
      return "Surabaya, Indonesia Juanda Airport"
   case "URT":
      return "Surat Thani, Thailand"
   case "SGC":
      return "Surgut, Russia"
   case "SUV":
      return "Suva, Fiji Nausori"
   case "SVJ":
      return "Svolvaer, Norway - Helle Airport"
   case "SWP":
      return "Swakopmund, Namibia"
   case "QSY":
      return "Sydney, New South Wales, Australia"
   case "SYD":
      return "Sydney, New South Wales, Australia Sydney /KingsfordSmith/ Airport"
   case "YQY":
      return "Sydney, Nova Scotia, Canada Sydney Municipal"
   case "ZYL":
      return "Sylhet, Bangladesh - Sylhet Airport"
   case "SYR":
      return "Syracuse, NY, USA Hancock International"
   case "JSY":
      return "Syros Island, Greece - Syros Airport"
   case "SZZ":
      return "Szczecin, Poland Goleniow"
   case "TBT":
      return "Tabatinga, Amazonas, Brazil, Tabatinga International Airport"
   case "TBZ":
      return "Tabriz, Iran - Tabriz Airport"
   case "TUU":
      return "Tabuk, Saudi Arabia - Tabuk Airport"
   case "TCG":
      return "Tacheng, China - Tacheng"
   case "TAC":
      return "Tacloban, Philippines Dz Romualdez"
   case "TCQ":
      return "Tacna, Peru - Tacna Airport"
   case "TAE":
      return "Taegu, South Korea"
   case "TAG":
      return "Tagbilaran, Philippines Tagbilaran"
   case "RNO":
      return "Tahoe/Reno, NV, USA - Reno-Tahoe International Airport (formerly Reno-Cannon International Apt)"
   case "TXG":
      return "Taichung, Taiwan - Taichung Airport"
   case "TIF":
      return "Taif, Saudi Arabia - Taif Airport"
   case "TNN":
      return "Tainan, Taiwan - Tainan Airport"
   case "TPE":
      return "Taipei, Taiwan - Taiwan Taoyuan International Airport (formerly Chiang Kai Shek Airport)"
   case "TSA":
      return "Taipei, Taiwan Sung Shan"
   case "TTT":
      return "Taitung, Taiwan - Taitung Airport"
   case "TYN":
      return "Taiyuan, China"
   case "TAI":
      return "Taiz, Yemen AlJanad"
   case "TAK":
      return "Takamatsu, Japan - Takamatsu Airport"
   case "TLH":
      return "Tallahassee, FL, USA"
   case "TLL":
      return "Tallinn, Estonia Ulemiste"
   case "YYH":
      return "Taloyak, Canada - Taloyak Airport"
   case "TPA":
      return "Tampa, FL, USA Tampa International"
   case "TMP":
      return "Tampere, Finland TamperePirkkala"
   case "TAM":
      return "Tampico, Tamaulipas, Mexico"
   case "TMW":
      return "Tamworth, New South Wales, Australia Tamworth"
   case "TNG":
      return "Tangier, Morocco Boukhalef Souahel"
   case "TSM":
      return "Taos, New Mexico, USA - Taos Regional Apt Airport"
   case "TAP":
      return "Tapachula, Chiapas, Mexico Tapachula International"
   case "TRK":
      return "Tarakan, Indonesia Tarakan"
   case "TPP":
      return "Tarapoto, Peru Tarapoto"
   case "TRO":
      return "Taree, New South Wales, Australia - Taree Airport"
   case "TIZ":
      return "Tari, Papua New Guinea"
   case "TJA":
      return "Tarija, Bolivia"
   case "XFO":
      return "Taschereau, Quebec, Canada Taschereau / Via Rail Service"
   case "TAS":
      return "Tashkent, Uzbekistan Tashkent"
   case "YTQ":
      return "Tasiujuaq, Canada - Tasiujuaq Airport"
   case "TAT":
      return "Tatry/Poprad, Slovakia Tatry/Poprad"
   case "TAV":
      return "Tau, American Samoa - Tau Airport"
   case "TUO":
      return "Taupo, New Zealand Taupo"
   case "TRG":
      return "Tauranga, New Zealand Tauranga"
   case "TVU":
      return "Taveuni Island, Fiji - Matei Airport"
   case "TBS":
      return "Tbilisi, Georgia Novo Alexeyevka"
   case "MME":
      return "Teesside, England, United Kingdom TeesSide"
   case "TFF":
      return "Tefe, Brazil - Tefe Airport"
   case "TGU":
      return "Tegucigalpa, Honduras Toncontin"
   case "THR":
      return "Tehran, Iran Mehrabad"
   case "TLV":
      return "Tel Aviv Yafo, Israel BenGurion International"
   case "SDV":
      return "Tel Aviv, Israel - Sde Dov Airport"
   case "TEX":
      return "Telluride, CO, USA Telluride Municipal Airport"
   case "TIM":
      return "Tembagapura, Indonesia - Tembagapura Airport"
   case "TPL":
      return "Temple, TX, USA"
   case "ZCO":
      return "Temuco, Chile Manquehue"
   case "TKE":
      return "Tenakee, Alaska, United States of America - Tenakee Airport"
   case "TFS":
      return "Tenerife, Canary Islands, Spain Reina Sofia"
   case "TCI":
      return "Tenerife, Canary Islands, Spain Tenerife Norte Los Rodeos"
   case "TFN":
      return "Tenerife, Canary Islands, Spain Tenerife Norte Los Rodeos"
   case "TPQ":
      return "Tepic, Nayarit, Mexico"
   case "TER":
      return "Terceira Island, Azores Islands, Portugal Lajes"
   case "THE":
      return "Teresina, Piaui, Brazil Teresina"
   case "TMJ":
      return "Termez, Uzbekistan - Termez Airport"
   case "TTE":
      return "Ternate, Indonesia Babullah"
   case "YXT":
      return "Terrace, British Columbia, Canada Terrace"
   case "HUF":
      return "Terre Haute, IN, USA Hulman Field"
   case "LSS":
      return "TerreDeHaut, Guadeloupe"
   case "TEB":
      return "Teterboro, New Jersey, United States of America - Teterboro Airport"
   case "TXK":
      return "Texarkana, AR, USA Municipal"
   case "TEZ":
      return "Tezpur, India Salonbari"
   case "THK":
      return "Thakhek, Laos - Thakhek Airport"
   case "HAG":
      return "The Hague, Netherlands"
   case "YQD":
      return "The Pas, Manitoba, Canada The Pas"
   case "SKG":
      return "Thessaloniki, Greece Thessaloniki"
   case "YTD":
      return "Thicket Portage, Manitoba, Canada"
   case "TVF":
      return "Thief River Falls, MN, USA Thief River Falls Municipal"
   case "TED":
      return "Thisted, Denmark"
   case "YTH":
      return "Thompson, Manitoba, Canada - Manitoba-Thompson Airport"
   case "YQT":
      return "Thunder Bay, Ontario, Canada"
   case "TIS":
      return "Thursday Island, Queensland, Australia Horn Island"
   case "TSN":
      return "Tianjin, China - Tianjin"
   case "TIJ":
      return "Tijuana, Baja California, Mexico General Abelardo L Rodriguez"
   case "TIU":
      return "Timaru, New Zealand - Timaru Airport"
   case "TSR":
      return "Timisoara, Romania Timisoara"
   case "YTS":
      return "Timmins, Ontario, Canada Timmins Municipal Airport"
   case "TIQ":
      return "Tinian, Northern Mariana Islands Tinian"
   case "KTP":
      return "Tinson Pen-Kingston Airport, Kingston, Jamaica"
   case "TIE":
      return "Tippi, Ethiopia - Tippi Airport"
   case "TIA":
      return "Tirana (Rinas), Albania - Tirana International Airport Nene Tereza"
   case "TRE":
      return "Tiree, Scotland, United Kingdom Tiree Island"
   case "TGM":
      return "Tirgu Mures, Romania Tirgu Mures"
   case "TRZ":
      return "Tiruchirapally, India Civil"
   case "TIV":
      return "Tivat, Yugoslavia Tivat"
   case "TAB":
      return "Tobago, Tobago, Trinidad And Tobago Crown Point"
   case "TOB":
      return "Tobruk, Libya"
   case "YAZ":
      return "Tofino, British Columbia, Canada Tofino Airport"
   case "TOG":
      return "Togiak, Alaska, USA - Togiak Airport"
   case "OOK":
      return "Toksook Bay, AK, USA"
   case "TKN":
      return "Tokunoshima, Japan - Tokunoshima Airport"
   case "TKS":
      return "Tokushima, Japan Tokushima"
   case "NRT":
      return "Tokyo, Japan"
   case "NRT":
      return "Tokyo, Japan - Narita"
   case "TOL":
      return "Toledo, OH, USA Toledo Express Airport"
   case "TLC":
      return "Toluca, Mexico - Toluca Airport"
   case "TMG":
      return "Tomanggong, Malaysia - Tomanggong Airport"
   case "TEN":
      return "Tongren, China"
   case "TWB":
      return "Toowoomba, Queensland, Australia Toowoomba"
   case "FOE":
      return "Topeka, KS, USA Forbes Field"
   case "YTZ":
      return "Toronto, Ontario, Canada - Toronto - City Center (Island) Airport"
   case "YYZ":
      return "Toronto, Ontario, Canada - Lester B Pearson International Airport"
   case "TRC":
      return "Torreon, Coahuila, Mexico"
   case "EIS":
      return "Tortola/Beef Island, Virgin Islands (British) Beef Island"
   case "TTB":
      return "Tortoli, Italy - Tortoli-Arbatax Airport"
   case "TTJ":
      return "Tottori, Japan Tottori"
   case "TLN":
      return "Toulon, France - Toulon Airport"
   case "TLS":
      return "Toulouse, France Blagnac"
   case "TUF":
      return "Tours, France St Symphorien"
   case "TSV":
      return "Townsville, Queensland, Australia Townsville"
   case "TOY":
      return "Toyama, Japan Toyama"
   case "TZX":
      return "Trabzon, Turkey Trabzon"
   case "TST":
      return "Trang, Thailand - Trang Airport"
   case "TPS":
      return "Trapani, Sicily, Italy Birgi"
   case "TVC":
      return "Traverse City, MI, USA Cherry Capital Airport"
   case "TCB":
      return "Treasure Cay, Bahamas - Treasure Cay Airport"
   case "REL":
      return "Trelew, Chubut, Argentina - Trelew-Almirante Zar Airport"
   case "TTN":
      return "Trenton, NJ, USA Mercer County"
   case "TSF":
      return "Treviso, Italy Treviso"
   case "TRS":
      return "Trieste, Italy Ronchi Dei Legionari"
   case "TDD":
      return "Trinidad, Bolivia"
   case "TIP":
      return "Tripoli, Libya - Idris Airport"
   case "TRV":
      return "Trivandrum, India - Trivandrum International Airport"
   case "THN":
      return "Trollhattan, Sweden - Trollhattan Airport"
   case "TMT":
      return "Trombetas, Brazil - Trombetas Airport"
   case "TOS":
      return "Tromso, Norway Tromso/Langes"
   case "TRD":
      return "Trondheim, Norway TrondheimVaernes"
   case "TRU":
      return "Trujillo, Peru Trujillo"
   case "TKK":
      return "Truk, Caroline Islands, Micronesia Truk"
   case "XLZ":
      return "Truro, Nova Scotia, Canada"
   case "TSZ":
      return "Tsetserleg, Arkhangai, Mongolia - Tsetserleg Airport"
   case "TSJ":
      return "Tsushima, Japan - Tsushima Airport"
   case "TUS":
      return "Tucson, AZ, USA Tucson International Airport"
   case "TUC":
      return "Tucuman, Tucuman, Argentina Benjamin Matienzo"
   case "TUR":
      return "Tucurui, Brazil - Tucurui Airport"
   case "TUG":
      return "Tuguegarao, Philippines Airport"
   case "TUL":
      return "Tulsa, OK, USA Tulsa International"
   case "TBP":
      return "Tumbes, Peru Tumbes"
   case "TUN":
      return "Tunis, Tunisia Carthage"
   case "WTL":
      return "Tuntutuliak, Alaska, USA - Tuntutuliak Airport"
   case "TNK":
      return "Tununak, Alaska - Tununak Airport"
   case "TXN":
      return "Tunxi, China"
   case "TUP":
      return "Tupelo, MS, USA Cd Lemons Municipal"
   case "TUI":
      return "Turaif, Saudi Arabia - Turaif Airport"
   case "TUK":
      return "Turbat Airport"
   case "TRN":
      return "Turin, Italy Caselle"
   case "TKU":
      return "Turku, Finland Turku"
   case "TCL":
      return "Tuscaloosa, AL, USA Van De Graff"
   case "TGZ":
      return "Tuxtla Gutierrez, Chiapas, Mexico Llano San Juan"
   case "TBB":
      return "Tuyhoa, VIetnam - Tuyhoa Airport"
   case "TWF":
      return "Twin Falls, ID, USA"
   case "TWA":
      return "Twin Hills, Alaska, USA - Twin Hills Airport"
   case "TYR":
      return "Tyler, TX, USA Pounds Field"
   case "PAM":
      return "Tyndall Air Force Base - Panama City, Florida, USA - Tyndall AFB-Panama City Airport"
   case "TJM":
      return "Tyumen, Russia Tyumen"
   case "QUB":
      return "Ubari, Libya"
   case "UBJ":
      return "Ube, Japan"
   case "UBA":
      return "Uberaba, Brazil - Uberaba Airport"
   case "UDI":
      return "Uberlandia, Brazil - Gomes Airport"
   case "UBP":
      return "Ubon Ratchathani, Thailand - Ubon Ratchathani Airport"
   case "UDR":
      return "Udaipur, India - Udaipur-Dabok Airport"
   case "UTH":
      return "Udon Thani, Thailand Udon"
   case "UFA":
      return "Ufa, Russia - Ufa Airport"
   case "UPG":
      return "Ujung Pandang, Indonesia Hasanudin"
   case "ULO":
      return "Ulaangom, Uvs, Mongolia - Ulaangom Airport"
   case "ULN":
      return "Ulan Bator, Mongolia Ulan Bator"
   case "UUD":
      return "UlanUde, Russia"
   case "ULZ":
      return "Uliastai, Zavkhan, Mongolia - Uliastai, Airport"
   case "USN":
      return "Ulsan, South Korea"
   case "ULD":
      return "Ulundi, South Africa - Ulundi Airport"
   case "ULY":
      return "Ulyanovsk, Russia Ulyanoysk"
   case "UME":
      return "Umea, Sweden Umea"
   case "YUD":
      return "Umiujaq, Canada - Umiujaq Airport"
   case "UTT":
      return "Umtata, South Africa - Umtata Airport"
   case "UNA":
      return "Una, Brazil - Una Airport"
   case "UNK":
      return "Unalakleet, ALaska, USA - Unalakleet Airport"
   case "UNI":
      return "Union Island, Saint Vincent and the Grenadines - Union Island Airport"
   case "UNT":
      return "Unst Shetland Islands, Scotland, United Kingdom"
   case "UTN":
      return "Upington, South Africa Municipal"
   case "UGC":
      return "Urgench, Uzbekistan"
   case "UPN":
      return "Uruapan, Michoacan, Mexico"
   case "URC":
      return "Urumqi, China - Urumqi-Diwopu"
   case "USH":
      return "Ushuaia, Tierra Del Fuego, Argentina"
   case "UCA":
      return "Utica, NY, USA Oneida County"
   case "UDJ":
      return "Uzhgorod, Ukraine - Uzhgorod Airport"
   case "VAA":
      return "Vaasa, Finland Vaasa"
   case "BDQ":
      return "Vadodara, India Vadodara"
   case "VDS":
      return "Vadso, Norway Vadso"
   case "QBF":
      return "Vail/Eagle, CO, USA"
   case "ZBV":
      return "Vail/Eagle, CO, USA"
   case "EGE":
      return "Vail/Eagle, CO, USA Eagle County Regional"
   case "YVO":
      return "Val D'Or, Canada - Val D'Or Airport"
   case "VDZ":
      return "Valdez, AK, USA"
   case "ZAL":
      return "Valdivia, Chile Pichoy"
   case "VLD":
      return "Valdosta, GA, USA - Valdosta Regional"
   case "VLC":
      return "Valencia, Spain - Valencia"
   case "VLN":
      return "Valencia, Venezuela - Valencia"
   case "VLL":
      return "Valladolid, Spain - Valladolid"
   case "VUP":
      return "Valledupar, Colombia"
   case "VPS":
      return "Valparaiso, FL, USA - Fort Walton Beach"
   case "VDE":
      return "Valverde, El Hierro, Canary Islands, Spain - El Hierro Airport"
   case "VAN":
      return "Van, Turkey - Van Airport"
   case "CXH":
      return "Vancouver, British Columbia, Canada Vancouver Harbour Airport"
   case "YVR":
      return "Vancouver, British Columbia, Canada Vancouver International"
   case "VAI":
      return "Vanimo, Papua New Guinea - Vanimo Airport"
   case "VNE":
      return "Vannes, France - Vannes-Meucon airport (Vannes - Golfe du Morbihan airport)"
   case "VRA":
      return "Varadero, Cuba Juan Gualberto Gomez"
   case "VNS":
      return "Varanasi, India Babatpur"
   case "VRK":
      return "Varkaus, Finland Varkaus"
   case "VAR":
      return "Varna, Bulgaria Varna"
   case "VST":
      return "Vasteras, Sweden Hasslo"
   case "VAV":
      return "Vava'U, Tonga - Vava'U Airport"
   case "VXO":
      return "Vaxjo, Sweden Vaxjo"
   case "VCE":
      return "Venice, Italy Marco Polo"
   case "VER":
      return "Veracruz, Veracruz, Mexico Las Bajadas / General Heriberto Jara"
   case "VRB":
      return "Vero Beach, FL, USA Vero Beach Municipal"
   case "VRN":
      return "Verona, Italy Verona"
   case "VEY":
      return "Vestmannaeyjar, Iceland Vestmannaeyjar"
   case "VHY":
      return "Vichy, France - Vichy-Charmeil Airport"
   case "YYJ":
      return "Victoria, British Columbia, Canada Victoria International Airport"
   case "YWH":
      return "Victoria, British Columbia, Canada Victoria Inner Harbour"
   case "VCT":
      return "Victoria, TX, USA"
   case "VFA":
      return "Victoria Falls, Zimbabwe"
   case "VDM":
      return "Viedma, Argentina - Viedma Airport"
   case "VIE":
      return "Vienna, Austria Schwechat"
   case "LVT":
      return "Vientiane, Laos - Vientiane Airport"
   case "VTE":
      return "Vientiane, Laos Wattay"
   case "VQS":
      return "Vieques, Puerto Rico - Vieques Airport"
   case "VGO":
      return "Vigo, Spain"
   case "VLG":
      return "Villa Gesell, Buenos Aires, Argentina Villa Gesell"
   case "VSA":
      return "Villahermosa, Tabasco, Mexico Carlos R Perez"
   case "VHM":
      return "Vilhelmina, Sweden - VIlhelmina Airport"
   case "VNO":
      return "Vilnius, Lithuania Vilnius Airport"
   case "VII":
      return "Vinh City, Vietnam - Vinh City Airport"
   case "VIJ":
      return "Virgin Gorda, Virgin Islands (British)"
   case "VIS":
      return "Visalia, CA, USA Visalia Municipal Airport"
   case "VBY":
      return "Visby, Sweden Visby"
   case "VTZ":
      return "Vishakhapatnam, India Vishakhapatnam"
   case "VIX":
      return "Vitoria, Espirito Santo, Brazil Eureco Sales"
   case "VIT":
      return "Vitoria, Spain Vitoria"
   case "VDC":
      return "Vitoria Da Conquista, Brazil - Vitoria Da Conquista Airport"
   case "VVO":
      return "Vladivostok, Russia Vladivostok Airport"
   case "SKS":
      return "Vojens Lufthavn, Denmark Jojens"
   case "VOG":
      return "Volgograd, Russia Volgograd"
   case "YWK":
      return "Wabush, Newfoundland, Canada Wabush Municipal"
   case "ACT":
      return "Waco, TX, USA Madison Cooper"
   case "WAE":
      return "Wadi Ad Dawasir, Saudi Arabia - Wadi Ad Dawasir Airport"
   case "WGA":
      return "WaggaWagga, New South Wales, Australia Forest Hill"
   case "AIN":
      return "Wainwright, AK, USA"
   case "NTQ":
      return "Wajima, Japan - Wajima Airport"
   case "WKJ":
      return "Wakkanai, Japan - Wakkanai Airport"
   case "WGE":
      return "Walgett, New South Wales, Australia Walgett"
   case "ALW":
      return "Walla Walla, WA, USA"
   case "WVB":
      return "Walvis Bay, South Africa - Walvis Bay Airport"
   case "WKA":
      return "Wanaka, New Zealand - Wanaka Airport"
   case "WAG":
      return "Wanganui, New Zealand - Wanganui Airport"
   case "WXN":
      return "Wanxian, China"
   case "WAW":
      return "Warsaw, Poland Okecie"
   case "IAD":
      return "Washington, DC, USA Dulles"
   case "DCA":
      return "Washington, DC, USA Ronald Reagan National Airport"
   case "IAD":
      return "Washington, DC, USA WashingtonDulles International"
   case "YKQ":
      return "Waskaganish, Quebec, Canada Waskaganish"
   case "WAT":
      return "Waterford, Ireland"
   case "ALO":
      return "Waterloo, IA, USA Waterloo Municipal Airport"
   case "ART":
      return "Watertown, NY, USA Watertown"
   case "ATY":
      return "Watertown, SD, USA"
   case "YQH":
      return "Watson Lake, Yukon Territory, Canada Watson Lake Airport"
   case "CWA":
      return "Wausau, WI, USA Central Wisconsin Airport"
   case "YXZ":
      return "Wawa, Ontario, Canada"
   case "TBN":
      return "Waynesville-Ft Leonard Wood, MO, USA - Forney Field"
   case "EJH":
      return "Wedjh, Saudi Arabia - Wedjh Airport"
   case "NRN":
      return "Weeze, Germany - Niederrhein Airport"
   case "WEH":
      return "Weihai, China"
   case "WEI":
      return "Weipa, Australia - Weipa Airport"
   case "WLG":
      return "Wellington, New Zealand International"
   case "EAT":
      return "Wenatchee, WA, USA Pangborn Memorial Field"
   case "ENV":
      return "Wendover, Utah, USA - Wendover Airport"
   case "WNZ":
      return "Wenzhou, China"
   case "PBI":
      return "West Palm Beach, FL, USA Palm Beach International Airport"
   case "WYS":
      return "West Yellowstone, Montana, USA - West Yellowstone Airport"
   case "GWT":
      return "Westerland, Germany Westerland"
   case "WST":
      return "Westerly, Rhode Island, USA - Westerly Airport"
   case "WSZ":
      return "Westport, New Zealand - Westport Airport"
   case "WSX":
      return "Westsound, Washington, USA - Westsound Airport"
   case "WWK":
      return "Wewak, Papua New Guinea - Wewak-Boram Airport"
   case "XFQ":
      return "Weymont, Quebec, Canada Weymont / Via Rail Service"
   case "WHK":
      return "Whakatane, New Zealand - Whakatane Airport"
   case "WRE":
      return "Whangarei, New Zealand - Whangarei Airport"
   case "YWS":
      return "Whistler, Canada - Whistler Airport"
   case "HPN":
      return "White Plains, NY, USA Westchester County Airport"
   case "YWR":
      return "White River, Ontario, Canada White River"
   case "YXY":
      return "Whitehorse, Yukon Territory, Canada Whitehorse Airport"
   case "WYA":
      return "Whyalla, Australia - Ahyalla Airport"
   case "ICT":
      return "Wichita, KS, USA MidContinent Airport"
   case "SPS":
      return "Wichita Falls, TX, USA Wichita Falls Municipal"
   case "WIC":
      return "Wick, Scotland, United Kingdom Wick"
   case "AVP":
      return "Wilkes Barre/Scranton, PA, USA WilkesBarre/Scranton Intl"
   case "CUR":
      return "Willemstad / Curacao Island, Netherlands Antilles Areopuerto Hato"
   case "AZA":
      return "Williams Gateway Airport - Mesa, Arizona, USA"
   case "YWL":
      return "Williams Lake, British Columbia, Canada"
   case "IPT":
      return "Williamsport, PA, USA Williamsport Lycoming Municipal"
   case "ISN":
      return "Williston, ND, USA Sloulin Field International"
   case "ILM":
      return "Wilmington, NC, USA New Hanover County Airport"
   case "ILG":
      return "Wilmington/New Castle County, DE, USA"
   case "ERS":
      return "Windhoek, Namibia Eros"
   case "WDH":
      return "Windhoek, Namibia - Hosea Kutako International Airport (formerly Jg Strijdom airport)"
   case "YQG":
      return "Windsor, Ontario, Canada Windsor International"
   case "YWG":
      return "Winnipeg, Manitoba, Canada Winnipeg International"
   case "INT":
      return "WinstonSalem, NC, USA Smith Reynolds"
   case "WIN":
      return "Winton, Queensland, Australia Winton"
   case "OLF":
      return "Wolf Point, MT, USA"
   case "WJU":
      return "Won-ju, Republic of Korea - Won-ju Airport"
   case "XIP":
      return "Woodstock, Ontario, Canada Woodstock / Via Rail Service"
   case "UMR":
      return "Woomera, South Australia, Australia Woomera"
   case "ORH":
      return "Worcester, MA, USA Worcester /James D O'brien Field"
   case "WRL":
      return "Worland, WY, USA Worland"
   case "WRG":
      return "Wrangell, Alaska, USA - Wrangell Airport"
   case "WRI":
      return "Wrightstown NJ [McGuire Air Force Base] USA"
   case "WRO":
      return "Wroclaw, Poland Strachowice"
   case "WUH":
      return "Wuhan, China"
   case "WUS":
      return "Wuyishan, China"
   case "XWY":
      return "Wyoming, Ontario, Canada - Wyoming / Via Rail Service"
   case "XIY":
      return "Xi An, China - Xianyang"
   case "XMN":
      return "Xiamen, China - Xiamen International"
   case "XFN":
      return "Xiangfan, China"
   case "XIL":
      return "Xilinhot, China"
   case "XNN":
      return "Xining, China"
   case "XUZ":
      return "Xuzhou, China"
   case "YKM":
      return "Yakima, WA, USA Yakima Air Terminal"
   case "YAK":
      return "Yakutat, Alaska, USA - Yakutat Airport"
   case "YKS":
      return "Yakutsk, Russia"
   case "GAJ":
      return "Yamagata, Japan Junmachi"
   case "YNB":
      return "Yanbo, Saudi Arabia - Yanbo Airport"
   case "YNZ":
      return "Yancheng, China"
   case "RGN":
      return "Yangon, Myanmar Mingaladon"
   case "YNY":
      return "Yangyang, Republic of Korea - Yangyang Airport"
   case "YNJ":
      return "Yanji, China - Yanji"
   case "YNT":
      return "Yantai, China - Laishan"
   case "NSI":
      return "Yaounde, Cameroon Nsimalen"
   case "YAP":
      return "Yap, Caroline Islands, Micronesia"
   case "YQI":
      return "Yarmouth, Nova Scotia, Canada"
   case "AZD":
      return "Yazd, Iran - Yazd Airport"
   case "YEC":
      return "Yechon, South Korea Yechon"
   case "YZF":
      return "Yellowknife, Northwest Territories, Canada"
   case "COD":
      return "Yellowstone, Cody, Wyoming, USA - Yellowstone Regional Airport"
   case "EVN":
      return "Yerevan, Armenia"
   case "YBP":
      return "Yibin, China - Yibin"
   case "YIH":
      return "Yichang, China - Yichang Airport"
   case "INC":
      return "Yinchuan, China - Yinchuan Airport"
   case "YIN":
      return "Yining, China - Yining Airport"
   case "YIW":
      return "Yiwu, China - Yiwu Airport"
   case "JOG":
      return "Yogyakarta, Indonesia"
   case "YGJ":
      return "Yonago, Japan - Yonago Airport"
   case "RSU":
      return "Yosu, South Korea Yosu Airport"
   case "YNG":
      return "Youngstown, OH, USA Youngstown Municipal Airport"
   case "YIP":
      return "Ypsilanti/Detroit, MI, USA - Willow Run Airport, Ypsilanti"
   case "YUM":
      return "Yuma, AZ, USA Yuma International Airport"
   case "YMS":
      return "Yurimaguas, Peru - Yurimaquas Airport"
   case "UUS":
      return "Yuzhno-Sakhalinsk, Russia, Yuzno-Sakhalinsk Airport"
   case "ZCL":
      return "Zacatecas, Zacatecas, Mexico"
   case "ZAD":
      return "Zadar, Croatia - Zadar Airport"
   case "ZAG":
      return "Zagreb, Croatia (Hrvatska) Zagreb"
   case "ZAH":
      return "Zahedan, Iran Zahedan"
   case "ZTH":
      return "Zakinthos, Greece Zakinthos"
   case "ZAM":
      return "Zamboanga, Philippines Zamboanga Airport"
   case "ZNZ":
      return "Zanzibar, Tanzania Kisauni"
   case "OZH":
      return "Zaporozhye, Ukraine - Zaporozhye Airport"
   case "ZAZ":
      return "Zaragoza, Spain Zaragoza"
   case "QZT":
      return "Zawia Town (Zawiat al Mukhayla), Libya"
   case "ZHA":
      return "Zhanjiang, China"
   case "ZAT":
      return "Zhaotong, China - Zhaotong Airport"
   case "CGO":
      return "Zhengzhou, China"
   case "PZH":
      return "Zhob, Pakistan - Zhob Airport"
   case "HSN":
      return "Zhoushan, China - Zhoushan Airport"
   case "ZUH":
      return "Zhuhai, China - Zhuhai Airport"
   case "IEG":
      return "Zielona Gora, Poland - Zielona Gora Airport"
   case "QZL":
      return "Zliten (Zlitan), Libya"
   case "ZRH":
      return "Zurich, Switzerland Zurich"
   case "ZQW":
      return "Zweibruecken, Germany"

   default: 
      return "Unknown IATA code."
   }
}

const getUrlImageFromIATACode = (iataCode) => {
   switch(iataCode) {
      case "AAL": 
      return "Aalborg, Denmark Aalborg"
   case "AES":
      return "Aalesund, Norway Vigra"
   case "AAR":
      return "Aarhus, Denmark Tirstrup"
   case "YXX":
      return "Abbotsford, Canada - Abbotsford Airport"
   case "ABZ":
      return "Aberdeen, Scotland, United Kingdom Dyce"
   case "ABR":
      return "Aberdeen, SD, USA Aberdeen Regional Airport"
   case "AHB":
      return "Abha, Saudi Arabia - Abha Airport"
   case "ABJ":
      return "Abidjan, Cote D'ivoire Port Bouet"
   case "ABI":
      return "Abilene, TX, USA Municipal"
   case "AUH":
      return "Abu Dhabi, United Arab Emirates Abu Dhabi International"
   case "ABS":
      return "Abu Simbel, Egypt Abu Simbel"
   case "ABV":
      return "Abuja, Nigeria - Abuja International Airport"
   case "ACA":
      return "Acapulco, Guerrero, Mexico Alvarez International"
   case "ACC":
      return "Accra, Ghana Kotoka"
   case "ADK":
      return "Adak Island, Alaska, USA, Adak Island Airport"
   case "ADA":
      return "Adana, Turkey Adana"
   case "ADD":
      return "Addis Ababa, Ethiopia Bole"
   case "ADL":
      return "Adelaide, South Australia, Australia Adelaide"
   case "ADE":
      return "Aden, Yemen - Aden International Airport"
   case "AGA":
      return "Agadir, Morocco Inezgane"
   case "GUM":
      return "Agana, Guam, Guam Ab Wonpat Intl Airport"
   case "IXA":
      return "Agartala, India Singerbhil"
   case "QGG":
      return "Agedabia, Libya"
   case "AGF":
      return "Agen, France La Garenne"
   case "AGR":
      return "Agra, India Kheria"
   case "AJI":
      return "Agri, Turkey - Agri Airport"
   case "BQN":
      return "Aguadilla, PR, USA"
   case "AGU":
      return "Aguascalientes, Aguascalientes, Mexico"
   case "IKA":
   return "Ahmadabad (Tehran), Iran - Imam Khomeini International Airport"
   case "AMD":
      return "Ahmedabad, India Ahmedabad"
   case "AWZ":
      return "Ahwaz, Iran - Ahwaz Airport"
   case "QXB":
      return "Aix-En-Provence, France - Aix-En-Provence Airport"
   case "AJA":
      return "Ajaccio, Corsica, France Campo Dell Oro"
   case "AXT":
      return "Akita, Japan - Akita Airport"
   case "CAK":
      return "Akron/Canton, OH, USA AkronCanton Regional Airport"
   case "AKU":
      return "Aksu, China - Aksu Airport"
   case "PVK":
      return "Aktion, Greece - Preveza-Lefkas Airport"
   case "AKV":
      return "Akulivik, Canada - Akulivik Airport"
   case "AEY":
      return "Akureyri, Iceland Akureyri"
   case "KQA":
      return "Akutan, Alaska, USA - Akutan Airport"
   case "AAN":
      return "Al Ain, United Arab Emirates - Al Ain Airport"
   case "AAC":
      return "Al Arish, Egypt - Al Arish Airport"
   case "ABT":
      return "Al-Baha, Saudi Arabia - Al Baha-Al Aqiq Airport"
   case "AHU":
      return "Al Hoceima, Morocco - Al Hoceima Airport"
   case "ALM":
      return "Alamogordo, NM, USA"
   case "ALS":
      return "Alamosa, CO, USA Bergman Field"
   case "ABC":
      return "Albacete, Spain - Albacete Airport"
   case "ABY":
      return "Albany, GA, USA Dougherty County"
   case "ALB":
      return "Albany, NY, USA Albany County Airport"
   case "ALL":
      return "Albenga, Italy - Albenga Airport"
   case "ABQ":
      return "Albuquerque, NM, USA Albuquerque International Airport"
   case "ABX":
      return "Albury, New South Wales, Australia Albury"
   case "ACI":
      return "Alderney, Channel Islands, United Kingdom The Blaye"
   case "WKK":
      return "Aleknagik, Alaska, USA - Aleknagik Airport"
   case "AED":
      return "Aleneva, Alaska, USA - Aleneva Airport"
   case "ALP":
      return "Aleppo, Syria Nejrab"
   case "ALY":
      return "Alexandria, Egypt Alexandria"
   case "HBE":
      return "ALexandria, Egypt Borg El Arab Airport"
   case "AEX":
      return "Alexandria, LA, USA Alexandria Intl Airport"
   case "XFS":
      return "Alexandria, Ontario, Canada Alexandria / Via Rail Service"
   case "AXD":
      return "Alexandroupolis, Greece Alexandroupolis"
   case "AHO":
      return "Alghero, Sardinia, Italy Fertilia"
   case "ALG":
      return "Algiers, Algeria Houari Boumedienne"
   case "ALC":
      return "Alicante, Spain Alicante"
   case "ASP":
      return "Alice Springs, Northern Territory, Australia Alice Springs"
   case "IXD":
      return "Allahabad, India Bamrauli"
   case "AET":
      return "Allakaket, AK, USA"
   case "ABE":
      return "Allentown-Bethlehem-Easton International, PA, USA"
   case "ABE":
      return "Allentown, PA, USA AllentownBethlehemEaston Airport"
   case "AIA":
      return "Alliance, NE, USA"
   case "ALA":
      return "Almaty, Kazakhstan Almaty"
   case "LEI":
      return "Almeria, Spain Almeria"
   case "IXV":
      return "Along, India Along"
   case "AOR":
      return "Alor Setar, Malaysia Sultan Abdul Halim"
   case "GUR":
      return "Alotau, Papua New Guinea Gurney"
   case "APN":
      return "Alpena, MI, USA Alpena Regional Airport"
   case "ALE":
      return "Alpine, TX, USA Alpine Texas"
   case "ALF":
      return "Alta, Norway Elvebakken"
   case "ATM":
      return "Altamira, Brazil - Altamira Airport"
   case "LTI":
      return "Altai, Govi-Altai, Mongolia - Altai Airport"
   case "AAT":
      return "Altay, China - Altay Airport"
   case "ACH":
      return "Altenrhein, Switzerland - Altenrhein Airport"
   case "AOO":
      return "Altoona / Martinsburg, PA, USA Blair County"
   case "ASJ":
      return "Amami O Shima, Japan - Amami O Shima Airport"
   case "AMA":
      return "Amarillo, TX, USA Amarillo International Airport"
   case "ABL":
      return "Ambler, AK, USA"
   case "AMQ":
      return "Ambon, Indonesia Pattimura"
   case "ADJ":
      return "Amman, Jordan Civil"
   case "AMM":
      return "Amman, Jordan Queen Alia International"
   case "YEY":
      return "Amos, Quebec, Canada"
   case "ATQ":
      return "Amritsar, Punjab, India - Raja Sansi International Airport"
   case "AMS":
      return "Amsterdam, Netherlands Schiphol"
   case "AAQ":
      return "Anapa Airport - Russia"
   case "ANC":
      return "Anchorage, AK, USA Anchorage International"
   case "AOI":
      return "Ancona, Italy Falconara"
   case "AZN":
      return "Andizhan, Uzbekistan - Andizhan Airport"
   case "ASD":
      return "Andros Town, Bahamas"
   case "ANG":
      return "Angouleme, France GelAir"
   case "AGN":
      return "Angoon, Alaska, USA - Angoon Airport"
   case "AXA":
      return "Anguilla, Anguilla"
   case "ANI":
      return "Aniak, AK, USA"
   case "AJN":
      return "Anjouan,Comoros"
   case "ESB":
      return "Ankara, Turkey Esenboga"
   case "AAE":
      return "Annaba, Algeria Les Salines"
   case "NCY":
      return "Annecy, France - AnnecyMeythe"
   case "ANB":
      return "Anniston, AL, USA - Municipal"
   case "AQG":
      return "Anqing, China - Anqing"
   case "AOG":
      return "Anshan, Liaoning Province, China - Anshan"
   case "AYT":
      return "Antalya, Turkey Antalya"
   case "TNR":
      return "Antananarivo, Madagascar Ivato"
   case "ANU":
      return "Antigua,Saint Johns, Antigua And Barbuda - Vc Bird International"
   case "ANF":
      return "Antofagasta, Chile - Cerro Moreno"
   case "ANR":
      return "Antwerp, Belgium Deurne"
   case "ANV":
      return "Anvik, AK, USA"
   case "AOJ":
      return "Aomori, Japan"
   case "APW":
      return "Apia, Samoa Faleolo"
   case "ATW":
      return "Appleton, WI, USA Outagamie County Airport"
   case "AQJ":
      return "Aqaba, Jordan Aqaba"
   case "AJU":
      return "Aracaju, Sergipe, Brazil"
   case "AUX":
      return "Araguaina, Brazil - Araguaina Airport"
   case "RAE":
      return "Arar, Saudi Arabia - Arar Airport"
   case "AUC":
      return "Arauca, Colombia"
   case "AAX":
      return "Araxa, Brazil - Araxa Airport"
   case "AMH":
      return "Arba Mintch, Ethiopia - Arba Mintch Airport"
   case "ACV":
      return "Arcata, CA, USA Arcata/Eureka Airport"
   case "AQP":
      return "Arequipa, Peru Rodriguez Ballon"
   case "ARI":
      return "Arica, Chile Chacalluta"
   case "ARH":
      return "Arkhangelsk, Russia Arkhangelsk"
   case "AXM":
      return "Armenia, Colombia - El Eden Airport"
   case "ARM":
      return "Armidale, New South Wales, Australia Armidale"
   case "ATC":
      return "Arthurs Town, Bahamas"
   case "AUA":
      return "Aruba, Aruba Reina Beatrix"
   case "AVK":
      return "Arvaikheer, Ovorhkangai, Mongolia - Arvaikheer Airport"
   case "YEK":
      return "Arviat, Canada - Arviat Airport"
   case "AJR":
      return "Arvidsjaur, Sweden - Arvidsjaur Airport"
   case "AKJ":
      return "Asahikawa, Japan Asahikawa"
   case "AVL":
      return "Asheville / Hendersonville, NC, USA Asheville Regional Airport"
   case "ASB":
      return "Ashgabat, Turkmenistan - Ashgabad Airport"
   case "ASM":
      return "Asmara, Eritrea Asmara Intl/Yohannes Iv"
   case "ASO":
      return "Asosa, Ethiopia - Asosa Airport"
   case "ASE":
      return "Aspen, CO, USA Pitkin County Airport Sardy Field"
   case "ATZ":
      return "Assiut, Egypt - Assiut Airport"
   case "TSE":
      return "Astana, Kazakhstan - Astana Airport"
   case "ASF":
      return "Astrakhan Airport - Russia"
   case "OVD":
      return "Asturias, Spain Asturias"
   case "JTY":
      return "Astypalea Island, Greece - Astypalea Airport"
   case "ASU":
      return "Asuncion, Paraguay Silvio Pettirossi"
   case "ASW":
      return "Aswan, Egypt Daraw"
   case "AHN":
      return "Athens, GA, USA"
   case "ATH":
      return "Athens, Greece - Venizelos"
   case "YIB":
      return "Atikokan, Ontario, Canada"
   case "ATL":
      return "Atlanta, GA, USA Hartsfield International"
   case "ACY":
      return "Atlantic City /Atlantic Cty, NJ, USA Atlantic City International"
   case "AIY":
      return "Atlantic City International, NJ, USA"
   case "YAT":
      return "Attawapiskat, Canada - Attawapiskat Airport"
   case "AOU":
      return "Attopeu, Laos - Attopeu Airport"
   case "MER":
      return "Atwater/Merced, California, USA - Castle Airport"
   case "AKL":
      return "Auckland, New Zealand Auckland International Airport"
   case "AGB":
      return "Augsburg, Germany Muehlhausen"
   case "AGS":
      return "Augusta, GA, USA Bush Field"
   case "AUG":
      return "Augusta, ME, USA Maine State"
   case "YPJ":
      return "Aupaluk, Canada - Aupaluk Airport"
   case "IXU":
      return "Aurangabad, India Chikkalthana"
   case "AUS":
      return "Austin, TX, USA - Austin-Bergstrom International Airport (ABIA)"
   case "AVV":
      return "Avalon, Australia - Avalon Airport"
   case "AVN":
      return "Avignon, France Caumont"
   case "AYQ":
      return "Ayers Rock, Northern Territory, Australia Connellan"
   case "BCD":
      return "Bacolod, Philippines Bacolod"
   case "IXB":
      return "Bagdogra, India Bagdogra"
   case "YBG":
      return "Bagotville, Canada - Bagotville Airport"
   case "BJR":
      return "Bahar Dar, Ethiopia - Bahar Dar Airport"
   case "BHV":
      return "Bahawalpur Airport - Vahawalpur, Pakistan"
   case "BHI":
      return "Bahia Blanca, Buenos Aires, Argentina Commandante"
   case "BAH":
      return "Bahrain, Bahrain Bahrain International Bahrain"
   case "BAY":
      return "Baia Mare, Romania - Baia Mare Airport"
   case "YBC":
      return "Baie Comeau, Quebec, Canada"
   case "BKM":
      return "Bakalalan, Malaysia - Bakalalan Airport"
   case "BFL":
      return "Bakersfield, CA, USA Meadows Field"
   case "BAK":
      return "Baku, Azerbaijan - Baku (old code)"
   case "GYD":
      return "Baku, Azerbaijan - Geydar Aliyev Airport"
   case "DPS":
      return "Bali (Denpasar), Indonesia Ngurah Rai"
   case "BPN":
      return "Balikpapan, Indonesia - Palikpapan-Sepinggan Airport"
   case "BNK":
      return "Ballina, Australia - Ballina Airport"
   case "BBA":
      return "Balmaceda, Chile - Balmaceda-Teniente Vidal Airport"
   case "BWI":
      return "Baltimore, MD, USA BaltimoreWashington International"
   case "ABM":
      return "Bamaga, Queensland, Australia"
   case "BKO":
      return "Bamako, Mali Senou"
   case "HOE":
      return "Ban Hat Tai, Laos - Ban Huoeisay Airport (Ban Houei Sai/Ban Houay Xay"
   case "OUI":
      return "Ban Hat Tai, Laos - Ban Huoeisay Airport (Ban Houei Sai/Ban Houay Xay"
   case "BMV":
      return "Ban Me Thuot, Vietnam - Ban Me Thuot Airport"
   case "BND":
      return "Bandar Abbas, Iran - Bandar Abbas Airport"
   case "BWN":
      return "Bandar Seri Begawan, Brunei Darussalam Brunei International"
   case "BDO":
      return "Bandung, Indonesia Husein Sastranegara"
   case "YBA":
      return "Banff, Alberta, Canada"
   case "BLR":
      return "Bangalore (Bengalooru), India Hindustan"
   case "BPX":
      return "Bangda, China - Bangda"
   case "BKK":
      return "Bangkok, Thailand Bangkok International Airport"
   case "BGR":
      return "Bangor, ME, USA Bangor International Airport"
   case "BGF":
      return "Bangui, Central African Republic Bangui"
   case "QBL":
      return "Bani Walid, Libya"
   case "BNX":
      return "Banja Luka, Bosnia and Herzegovina - Banja Luka Airport"
   case "BDJ":
      return "Banjarmasin, Indonesia Syamsudin Noor"
   case "BJL":
      return "Banjul, Gambia Yundum International"
   case "BAV":
      return "Baotou, China - Baotou"
   case "BHB":
      return "Bar Harbor, ME, USA"
   case "BGI":
      return "Barbados (Bridgetown, Barbados) - Grantley Adams International"
   case "BCI":
      return "Barcaldine, Australia - Barcaldine Airport"
   case "BCN":
      return "Barcelona, Spain Barcelona"
   case "BLA":
      return "Barcelona, Venezuela Gral Jose Antonio Anzoategui"
   case "BDU":
      return "Bardufoss, Norway - Bardufoss Airport"
   case "BRI":
      return "Bari, Italy"
   case "BNS":
      return "Barinas, Venezuela Barinas"
   case "BBN":
      return "Bario,Malaysia - Bario Airport"
   case "BAX":
      return "Barnaul, Russia Barnaul Airport"
   case "BRM":
      return "Barquisimeto, Venezuela Barquisimeto"
   case "BRR":
      return "Barra / Hebrides Islands, Scotland, United Kingdom North Bay"
   case "EJA":
      return "Barrancabermeja, Colombia Variguies"
   case "BAQ":
      return "Barranquilla, Colombia E Cortissoz"
   case "BRW":
      return "Barrow, Alaska, USA Barrow"
   case "BTI":
      return "Barter Island, Alaska, USA - Barter Island Airport [LRRS]"
   case "UUN":
      return "Baruun-Urt, Sukhbaatar, Mongolia - Baruun-Urt Airport"
   case "BSL":
      return "Basel, Switzerland - Basel Euro Airport"
   case "BIA":
      return "Bastia, Corsica, France Poretta"
   case "BTH":
      return "Batam, Indonesia - Hang Nadim Airport"
   case "ZBF":
      return "Bathurst, New Brunswick, Canada - Bathurst Airport"
   case "BHS":
      return "Bathurst, New South Wales, Australia Raglan"
   case "BRT":
      return "Bathurst Island, Northern Territory, Australia"
   case "BAL":
      return "Batman, Turkey Nearest Air Service Through Diyarbakir"
   case "BTR":
      return "Baton Rouge, LA, USA"
   case "BAU":
      return "Bauru, Brazil- Bauru Airport"
   case "MBS":
      return "Bay City / Midland / Saginaw, MI, USA TriCity Airport"
   case "BYN":
      return "Bayankhongor, Bayankhongor, Mongolia - Bayankhongor Airport"
   case "BYU":
      return "Bayreuth, Germany Bindlacher Berg"
   case "BPT":
      return "Beaumont, TX, USA Jefferson County"
   case "BKW":
      return "Beckley, WV, USA"
   case "BED":
      return "Bedford, MA, USA Bedford"
   case "YBW":
      return "Bedwell Harbor, canada - Bedwell Harbor Airport"
   case "EIS":
      return "Beef Island, British Virgin Islands, Tortola/Beef Island - Beef Island Airport"
   case "BEI":
      return "Beica, Ethiopia Beica"
   case "BHY":
      return "Beihai, China - Beihai"
   case "NAY":
      return "Beijing, China - Beijing International"
   case "PEK":
      return "Beijing, China Peking Capital Airport"
   case "LAQ":
      return "Beida, Libya"
   case "BEW":
      return "Beira, Mozambique Beira"
   case "BEY":
      return "Beirut, Lebanon International"
   case "BLG":
      return "Belaga, Malaysia Airport"
   case "BEL":
      return "Belem, Para, Brazil Val De Cans"
   case "BHD":
      return "Belfast, Northern Ireland, United Kingdom Belfast Harbor"
   case "BFS":
      return "Belfast, Northern Ireland, United Kingdom Belfast International"
   case "IXG":
      return "Belgaum, India Sambre"
   case "EGO":
      return "Belgorod, Russia - Belgorod Airport"
   case "BEG":
      return "Belgrade, Yugoslavia BelgradeBeograd"
   case "BZE":
      return "Belize City, Belize Belize International"
   case "TZA":
      return "Belize City, Belize Belize Municipal"
   case "XVV":
      return "Belleville, Ontario, Canada Belleville / Via Rail Service"
   case "BLI":
      return "Bellingham, WA, USA Bellingham International"
   case "CNF":
      return "Belo Horizonte /Belo Horizon, Minas Gerais, Brazil Aeropuerto Internacional Tancredo Neves"
   case "PLU":
      return "Belo Horizonte /Belo Horizon, Minas Gerais, Brazil Confins/Pampulha"
   case "BJI":
      return "Bemidji, MN, USA Bemidji Municipal Airport"
   case "BEB":
      return "Benbecula, United Kingdom - Benbecula Airport"
   case "RDM":
      return "Bend, OR, USA - Roberts Field, Redmond, OR"
   case "BLR":
      return "Bengalooru (Bangalore), India Hindustan"
   case "BEN":
      return "Benghazi, Libya - Benina International Airport"
   case "BEH":
      return "Benton Harbor, MI, USA Ross Field"
   case "BGO":
      return "Bergen, Norway Flesland"
   case "EGC":
      return "Bergerac, France - Aeroport de Bergerac Perigord Dordogne"
   case "BVG":
      return "Berlevag, Norway - Berlevag Airport"
   case "BER":
      return "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
   case "SXF":
      return "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
   case "TXL":
      return "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
   case "THF":
      return "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
   case "BDA":
      return "Bermuda/Hamilton, Bermuda Kindley Airfield/Civil Air Terminal"
   case "BRN":
      return "Berne, Switzerland Belp"
   case "ZDJ":
      return "Berne, Switzerland BerneRr Station"
   case "BET":
      return "Bethel, AK, USA Bethel"
   case "BZR":
      return "Beziers, France BeziersVias"
   case "BWA":
      return "Bhairawa, Nepal Bhairawa"
   case "BHU":
      return "Bhavnagar, India - Bhavnagar Airport"
   case "BHO":
      return "Bhopal, India - Bhopal Airport"
   case "BBI":
      return "Bhubaneswar, India Bhubaneswar"
   case "BIK":
      return "Biak, Indonesia Mokmer"
   case "BIQ":
      return "Biarritz, France Parme"
   case "BGK":
      return "Big Creek, Belize Big Creek"
   case "BIO":
      return "Bilbao, Spain Sondica"
   case "BIL":
      return "Billings, MT, USA Billings Logan Intnl Airport"
   case "BLL":
      return "Billund, Denmark Billund"
   case "BIM":
      return "Bimini, Bahamas Bimini Island International"
   case "NSB":
      return "Bimini, Bahamas North Seaplane Base"
   case "BGM":
      return "Binghamton/Endicott/Johnson City, NY, USA Edwin Alink Field"
   case "BTU":
      return "Bintulu, Sarawak, Malaysia Bintulu"
   case "BVI":
      return "Birdsville, Queensland, Australia Birdsville"
   case "BHM":
      return "Birmingham, AL, USA Seibels/Bryan Airport"
   case "BHX":
      return "Birmingham, England, United Kingdom International"
   case "BHH":
      return "Bisha, Saudi Arabia - Bisha Airport"
   case "FRU":
      return "Bishkek, Kyrgyzstan Bishkek Airport"
   case "BSK":
      return "Biskra, Algeria Biskra"
   case "BIS":
      return "Bismarck, ND, USA Bismarck Mannan Municipal"
   case "OXB":
      return "Bissau, GuineaBissau Osvaldo Vieira"
   case "BKQ":
      return "Blackall, Australia - Blackall Airport"
   case "BLK":
      return "Blackpool, England, United Kingdom Blackpool"
   case "BLT":
      return "Blackwater, Australia - Blackwater Airport"
   case "YBX":
      return "Blanc Sablon, Quebec, Canada Blanc Sablon Airport"
   case "BLZ":
      return "Blantyre, Malawi Chileka"
   case "BHE":
      return "Blenheim, New Zealand - Woodbourne Airport"
   case "BFN":
      return "Bloemfontein, South Africa Jbm Hertzog"
   case "BMI":
      return "Bloomington, IL, USA Normal"
   case "BMG":
      return "Bloomington, IN, USA Monroe County Airport"
   case "BLF":
      return "Bluefield, WV, USA - Mercer Country Airport"
   case "BYH":
      return "Blytheville, Arkansas, USA - Arkansas International Airport"
   case "BVB":
      return "Boa Vista, Roraima, Brazil"
   case "BOO":
      return "Bodo, Norway Bodo"
   case "BXN":
      return "Bodrum, Turkey Imsik Airport"
   case "BFI":
      return "Boeing Field/Seattle Kings County International, Seattle WA, USA"
   case "BOG":
      return "Bogota, Colombia Eldorado"
   case "BOI":
      return "Boise, ID, USA Boise Municipal Arpt (Gowen Field)"
   case "BLQ":
      return "Bologna, Italy Guglielmo Marconi"
   case "BZO":
      return "Bolzano, Italy - Bolzano Airport"
   case "BOM":
      return "Bombay, India - Mumbai"
   case "BON":
      return "Bonaire, Netherlands Antilles Flamingo Field"
   case "YVB":
      return "Bonaventure, Quebec, Canada"
   case "BNJ":
      return "Bonn, Germany Train Main Railroad Station"
   case "BOB":
      return "Bora Bora, French Polynesia - Motu Mute Airport"
   case "BOD":
      return "Bordeaux, France Merignac"
   case "HBE":
      return "Borg El Arab/Alexandria, Egypt Borg El Arab Airport"
   case "BLE":
      return "Borlange,Sweden - Dala Airport"
   case "RNN":
      return "Bornholm, Denmark Arnager"
   case "BOS":
      return "Boston, MA, USA Logan International Airport"
   case "WBU":
      return "Boulder, CO, USA"
   case "BOJ":
      return "Bourgas, Bulgaria - Bourgas Airport"
   case "BZN":
      return "Bozeman, MT, USA Gallatin Field"
   case "BFD":
      return "Bradford, PA, USA Bradford Regional"
   case "BRD":
      return "Brainerd, MN, USA"
   case "XPN":
      return "Brampton, Ontario, Canada Brampton / Via Rail Service"
   case "BMP":
      return "Brampton Island, Australia - Brampton Island Airport"
   case "YBR":
      return "Brandon, Manitoba, Canada"
   case "XFV":
      return "Brantford, Ontario, Canada Brantford / Via Rail Service"
   case "BSB":
      return "Brasilia, Distrito Federal, Brazil International"
   case "BTS":
      return "Bratislava, Slovakia Ivanka"
   case "BZV":
      return "Brazzaville, COngo - Maya Maya Airport"
   case "QKB":
      return "Breckenridge, CO, USA"
   case "BRE":
      return "Bremen, Germany Bremen"
   case "PWT":
      return "Bremerton, WA, USA Municipal"
   case "VBS":
      return "Brescia, Italy - Brescia Airport"
   case "BES":
      return "Brest, France Guipavas"
   case "BDR":
      return "Bridgeport, CT, USA Sikorsky Memorial"
   case "BGI":
      return "Bridgetown, Barbados Grantley Adams International"
   case "BDS":
      return "Brindisi, Italy - Brindisi Airport"
   case "BNE":
      return "Brisbane, Queensland, Australia Brisbane International Airport"
   case "BRS":
      return "Bristol, England, United Kingdom Bristol"
   case "TRI":
      return "Bristol/Johnson City/Kingsport, TN, USA Municipal TriCity Airport"
   case "BVE":
      return "BriveLaGaillarde, France Laroche"
   case "BRQ":
      return "Brno, Czech Republic Turany"
   case "XBR":
      return "Brockville, Ontario, Canada"
   case "BHQ":
      return "Broken Hill, New South Wales, Australia Broken Hill"
   case "BNN":
      return "Bronnoysund, Norway Bronnoy"
   case "BKX":
      return "Brookings, SD, USA Brookings Municipal Airport"
   case "BME":
      return "Broome, Australia - Broome Airport"
   case "YVM":
      return "Broughton Island, Canada - Broughton Island Airport"
   case "BRO":
      return "Brownsville, TX, USA South Padre Island Intl"
   case "BWD":
      return "Brownwood, Texas, USA - Brownwood Airport"
   case "OST":
      return "Bruges, Belgium - Ostend/Bruges International Airport"
   case "BWN":
      return "Brunei/Bandar Seri Begawan, Brunei Darussalam - Brunei International"
   case "BQK":
      return "Brunswick, GA, USA Glynco Jetport"
   case "BRU":
      return "Brussels, Belgium National"
   case "BGA":
      return "Bucaramanga, Colombia Palo Negro"
   case "BBU":
      return "Bucharest, Romania Baneasa"
   case "OTP":
      return "Bucharest, Romania Otopeni"
   case "BUD":
      return "Budapest, Hungary Ferihegy"
   case "EZE":
      return "Buenos Aires, Buenos Aires, Argentina - Ezeiza Ministro Pistarini International Airport"
   case "AEP":
      return "Buenos Aires, Buenos Aires, Argentina - Jorge Newberry"
   case "BUF":
      return "Buffalo, NY, USA - Buffalo Niagara International Airport (formerly Greater Buffalo Intl Airport)"
   case "BJM":
      return "Bujumbura, Burundi - Bujumbura Airport"
   case "BHK":
      return "Bukhara, Uzbekistan"
   case "BUQ":
      return "Bulawayo, Zimbabwe Bulawayo"
   case "UGA":
      return "Bulgan, Bulgan, Mongolia - Bulgan Airport"
   case "IFP":
      return "Bullhead City, AZ, USA Bullhead"
   case "BDB":
      return "Bundaberg, Australia - Bundaberg Airport"
   case "BUX":
      return "Bunia, Democratic Republic of the Congo (Zaire) - Bunia Airport"
   case "BUR":
      return "Burbank, CA, USA Burbank Glendale Pasadena Airport"
   case "BRL":
      return "Burlington, IA, USA Burlington Municipal Airport"
   case "BTV":
      return "Burlington, VT, USA Burlington International Airport"
   case "BWT":
      return "Burnie, Australia - Burnie Airport"
   case "YPZ":
      return "Burns Lake, British Columbia, Canada"
   case "BUZ":
      return "Bushehr, Iran Bushehr"
   case "BTM":
      return "Butte, MT, USA"
   case "YKZ":
      return "Buttonville, Canada - Buttonville Municipal Airport"
   case "BXU":
      return "Butuan, Philippines Butuan"
   case "BZG":
      return "Bydgoszcz, Poland"
   case "CFR":
      return "Caen, France Carpiquet"
   case "CGY":
      return "Cagayan De Oro, Philippines - Lumbia Airport"
   case "CAG":
      return "Cagliari, Sardinia, Italy Elmas"
   case "PLS":
      return "Caicos, Turks And Caicos Islands - Providenciales"
   case "CNS":
      return "Cairns, Queensland, Australia - Cairns International Airport"
   case "CAI":
      return "Cairo, Egypt International"
   case "CJA":
      return "Cajamarca, Peru - Cjamarca Airport"
   case "CJC":
      return "Calama, Chile - El Loa Airport"
   case "CCU":
      return "Calcutta (Kolkata), India - Calcutta International Airport"
   case "CDW":
      return "Caldwell, New Jersey, USA - Caldwell Airport"
   case "YYC":
      return "Calgary, Alberta, Canada Calgary Intl Airport"
   case "CLO":
      return "Cali, Colombia Alfonso Bonilla Aragon"
   case "CCJ":
      return "Calicut, India"
   case "CLY":
      return "Calvi, Corsica, France Ste Catherine"
   case "XAZ":
      return "Cambellton, New Brunswick, Canada Campbellton"
   case "CBG":
      return "Cambridge, England, United Kingdom Cambridge"
   case "YCB":
      return "Cambridge Bay, Canada - Cambridge Bay Airport"
   case "CDH":
      return "Camden, AR, USA"
   case "YBL":
      return "Campbell River /Campbell Rvr, British Columbia, Canada Metropolitan Area"
   case "YHH":
      return "Campbell River Harbor, Canada - Campbell River Harbor"
   case "CAL":
      return "Campbeltown, United Kindgom - Campbeltown Airport"
   case "CPE":
      return "Campeche, Mexico - Campeche Airport"
   case "CPV":
      return "Campina Grande, Brazil - Campita Grande Airport"
   case "CPQ":
      return "Campinas, Sao Paulo, Brazil Campinas International"
   case "CGR":
      return "Campo Grande, Mato Grosso Do Sul, Brazil"
   case "CAJ":
      return "Canaima, Venezuela"
   case "LPA":
      return "Canary Islands, Gran Canaria, Canary Islands, Spain - Aeropuerto De Gran Canaria"
   case "CBR":
      return "Canberra, Australian Capital Territory, Australia Canberra"
   case "CUN":
      return "Cancun, Mexico"
   case "JCA":
      return "Cannes, France Mandelieu"
   case "YTE":
      return "Cape Dorset, Canada - Cape Dorset Airport"
   case "CIW":
      return "Canouan Island, St Vincent and the Grenadines - Canouan Island Airport"
   case "CNY":
      return "Canyonlands, UT, USA - Canyonlands-Moab Airport"
   case "CGI":
      return "Cape Girardeau, MO, USA Municipal Airport"
   case "EHM":
      return "Cape Newenham, Alaska, USA - Cape Newenham Airport"
   case "CPT":
      return "Cape Town, South Africa D F Malan"
   case "XAW":
      return "Capreol, Ontario, Canada Capreol / Via Rail Service"
   case "PRJ":
      return "Capri,Italy - Capri Airport"
   case "CCS":
      return "Caracas, Venezuela Simon Bolivar International"
   case "CKS":
      return "Carajas, Para, Brazil International / Brasilia Brazil"
   case "MDH":
      return "Carbondale, IL, USA Southern Illinois Airport"
   case "CCF":
      return "Carcassonne, France Salvaza Airport"
   case "CWL":
      return "Cardiff, Wales, United Kingdom CardiffWales"
   case "CLD":
      return "Carlsbad, CA, USA Carlsbad/Palomar Airport"
   case "CNM":
      return "Carlsbad, NM, USA"
   case "CRU":
      return "Carriacou Island, Grenada"
   case "CTG":
      return "Cartagena, Colombia Rafael Nunez"
   case "CUP":
      return "Carupano, Venezuela Carupano"
   case "LRM":
      return "Casa De Campo, Dominican Republic"
   case "CAS":
      return "Casablanca, Morocco Anfa"
   case "CMN":
      return "Casablanca, Morocco Mohamed V"
   case "CAC":
      return "Cascavel, Brazil, Cascavel Airport"
   case "CPR":
      return "Casper, WY, USA Natrona County Intl Airport"
   case "XZB":
      return "Casselman, Ontario, Canada Casselman / Via Rail Service"
   case "YCG":
      return "Castlegar, British Columbia, Canada"
   case "CTA":
      return "Catania, Sicily, Italy Fontanarossa"
   case "SDQ":
      return "Causedo/Santo Domingo, Dominican Republic - Las Americas International Airport"
   case "CXJ":
      return "Caxias Do Sul, Brazil - Caxias Do Sul Airport"
   case "CAY":
      return "Cayenne, French Guiana Rochambeau"
   case "CYB":
      return "Cayman Brac Island, Cayman Islands"
   case "GCM":
      return "Cayman Islands, Grand Cayman Island - Owen Roberts Intl Airport"
   case "CEB":
      return "Cebu, Philippines International"
   case "CDC":
      return "Cedar City, UT, USA"
   case "CID":
      return "Cedar Rapids, IA, USA Municipal"
   case "CDR":
      return "Chadron, NE, USA"
   case "CED":
      return "Ceduna, Australia - Ceduna Airport"
   case "SFB":
      return "Cantral Florida, Orlando, FL, USA - Sanford Central Florida Regional Airport"
   case "CDR":
      return "Chadron, NE, USA - Chadron Airport"
   case "CMF":
      return "Chambery, France Chambery AixLesBains"
   case "XCI":
      return "Chambord, Quebec, Canada Chambord / Via Rail Service"
   case "CMI":
      return "Champaign, IL, USA Univ Of IllinoisWillard Airport"
   case "IXC":
      return "Chandigarh, India Chandigarh"
   case "XDL":
      return "Chandler, Quebec, Canada Chandler / Via Rail Service"
   case "CGQ":
      return "Changchun, China"
   case "CGD":
      return "Changde, China - Changde"
   case "CSX":
      return "Changsha, China"
   case "CIH":
      return "Changzhi, China"
   case "CZX":
      return "Changzhu, China"
   case "CHQ":
      return "Chania, Crete Island, Greece Souda"
   case "LEC":
      return "Chapada Diamantina, Brazil - Chapada Diamantina Airport"
   case "XAP":
      return "Chapeco, Brazil - Chapeco Airport"
   case "CPC":
      return "Chapelco - San Martin De Los Andes, Neuquen, Argentina - Chapelco Airport"
   case "YLD":
      return "Chapleau, Ontario, Canada"
   case "CHS":
      return "Charleston, SC, USA Charleston International Airport"
   case "CRW":
      return "Charleston, WV, USA Yeager Airport"
   case "CTL":
      return "Charleville, Queensland, Australia Charleville"
   case "CLT":
      return "Charlotte, NC, USA Charlotte/Douglas Intl Airport"
   case "STT":
      return "Charlotte, St Thomas Island, VI, USA - Cyril E King Arpt"
   case "CHO":
      return "Charlottesville, VA, USA Charlottesville/Albemarle"
   case "YYG":
      return "Charlottetown, Prince Edward Island/, Canada Charlottetown"
   case "XCM":
      return "Chatham, Ontario, Canada"
   case "CHA":
      return "Chattanooga, TN, USA Cha Lovell Field"
   case "CYF":
      return "Chefornak, Alaska, USA - Chefornak Airport"
   case "CJU":
      return "Cheju, South Korea Cheju"
   case "CEK":
      return "Chelyabinsk, Russia - Chelyabinsk Airport"
   case "XHS":
      return "Chemainus, British Columbia, Canada Chemainus / Via Rail Service"
   case "CTU":
      return "Chengdu, China"
   case "MAA":
      return "Chennai (Madras), India- Chenai-Meenambarkkam Airport"
   case "CJJ":
      return "Cort"
   case "STT":
      return "Charlotte, St Thomas Island, VI, USA - Cyril E King Arpt"
   case "CHO":
      return "Charlottesville, VA, USA Charlottesville/Albemarle"
   case "YYG":
      return "Charlottetown, Prince Edward Island/, Canada Charlottetown"
   case "XCM":
      return "Chatham, Ontario, Canada"
   case "CHA":
      return "Chattanooga, TN, USA Cha Lovell Field"
   case "CYF":
      return "Chefornak, Alaska, USA - Chefornak Airport"
   case "CJU":
      return "Cheju, South Korea Cheju"
   case "CEK":
      return "Chelyabinsk, Russia - Chelyabinsk Airport"
   case "XHS":
      return "Chemainus, British Columbia, Canada Chemainus / Via Rail Service"
   case "CTU":
      return "Chengdu, China"
   case "MAA":
      return "Chennai (Madras), India- Chenai-Meenambarkkam Airport"
   case "CJJ":
      return "Cheong Ju City, Republic of Korea - Cheong Ju City Airport"
   case "CER":
      return "Cherbourg, France Maupertus"
   case "CTM":
      return "Chetumal, Mexico - Chetumal Airport"
   case "VAK":
      return "Chevak, ALaska - Chevak Airport"
   case "YHR":
      return "Chevery, Canada - Chevery Airport"
   case "CYS":
      return "Cheyenne, WY, USA Cheyenne Municipal Airport"
   case "CNX":
      return "Chiang Mai, Thailand International"
   case "CEI":
      return "Chiang Rai, Thailand Chiang Rai"
   case "CYI":
      return "Chiayi, Taiwan - Chiayi Airport"
   case "YMT":
      return "Chibougamau, Quebec, Canada Chibougamau"
   case "CGX":
      return "Chicago, IL, USA - Merrill C. Meigs Field"
   case "CHI":
      return "Chicago, IL, USA - Chicago FSS"
   case "DPA":
      return "Chicago, IL, USA - Dupage County"
   case "GYY":
      return "Chicago - Gary, IN, USA - Gary Regional"
   case "MDW":
      return "Chicago, IL, USA - Midway"
   case "NOH":
      return "Chicago, IL, USA - Chicago NAS"
   case "ORD":
      return "Chicago, IL, USA - O'hare International Airport"
   case "PWK":
      return "Chicago, IL, USA Pal-Waukee Airport"
   case "RFD":
      return "Chicago/Rockford, IL, USA - Chicago Rockford International Airport"
   case "CIX":
      return "Chiclayo, Peru Cornel Ruiz"
   case "CIC":
      return "Chico, CA, USA Chico Municipal Air Terminal"
   case "KIF":
      return "Chifeng, China"
   case "KCG":
      return "Chignik, AK, USA Fisheries"
   case "KCL":
      return "Chignik, AK, USA Lagoon"
   case "KCQ":
      return "Chignik Lake, ALaska, USA - Chignik Lake Airport"
   case "CUU":
      return "Chihuahua, Chihuahua, Mexico Genvillalobos"
   case "YAI":
      return "Chillan, Chile - Chillan Airport"
   case "HIN":
      return "Chinju, Republic of Korea - Chinju Airport"
   case "JKH":
      return "Chios, Greece - Chios Airport"
   case "YKU":
      return "Chisasibi, Canada - Chisasibi Airport"
   case "KIV":
      return "Chisinau (Kishinev), Moldova - Chisinau (Kishinev)"
   case "CJL":
      return "Chitral, Pakistan - Chitral Airport"
   case "CGP":
      return "Chittagong, Bangladesh Patenga"
   case "COQ":
      return "Choibalsan, Dornod, Mongolia - Choibalsan Airport"
   case "CKG":
      return "Chongqing, China"
   case "CHC":
      return "Christchurch, New Zealand International"
   case "STX":
      return "Christiansted, St Croix Island, VI, USA - ALexander Hamilton Airport"
   case "CXI":
      return "Christmas Island, Australia - Cassidy Airport"
   case "YYQ":
      return "Churchill, Manitoba, Canada Churchill Airport"
   case "CIA":
      return "Ciampino, Rome, Italy - Ciampino Airport"
   case "CVG":
      return "Cincinnati, OH, USA Greater Cincinnati Intl Airport"
   case "LUK":
      return "Cincinnati, Ohio, USA - Lunken Field Airport"
   case "CBL":
      return "Ciudad Bolivar, Venezuela"
   case "CME":
      return "Ciudad Del Carmen, Campeche, Mexico"
   case "CJS":
      return "Ciudad Juarez, Chihuahua, Mexico International Abraham Gonzalez"
   case "CEN":
      return "Ciudad Obregon, Sonora, Mexico"
   case "CVM":
      return "Ciudad Victoria, Mexico - Ciudad Victoria Airport"
   case "CKB":
      return "Clarksburg, WV, USA ClarksburgBenedum Airport"
   case "CFE":
      return "Clermont-Ferrand, France - Aulnat"
   case "CLE":
      return "Cleveland, OH, USA Hopkins International Airport"
   case "BKL":
      return "Cleveland Lakefront, OH, USA"
   case "CNJ":
      return "Cloncurry, Australia - Cloncurry Airport"
   case "CVN":
      return "Clovis, NM, USA"
   case "CLJ":
      return "Cluj, Romania Cluj"
   case "YCY":
      return "Clyde River, Canada - Clyde River Airport"
   case "XGJ":
      return "Cobourg, Ontario, Canada Cobourg / Via Rail Service"
   case "CBB":
      return "Cochabamba, Bolivia - Jorge Wilstermann International Airport (formerly San Jose De La Banda)"
   case "COK":
      return "Cochin, India Naval Air Station"
   case "COD":
      return "Cody, Wyoming, USA - Yellowstone Regional Airport"
   case "CFA":
      return "Coffee Point, Alaska, USA - Coffee Point Airport"
   case "CFS":
      return "Coffs Harbour, Australia - Coffs Harbour Airport"
   case "CJB":
      return "Coimbatore, India Peelamedu"
   case "CDB":
      return "Cold Bay, Alaska, USA - Cold Bay Airport"
   case "CLQ":
      return "Colima, Colima, Mexico"
   case "CLL":
      return "College Station, TX, USA"
   case "QKL":
      return "Cologne, Germany Train Main Railroad Station"
   case "CGN":
      return "Cologne/Bonn, Germany Koeln/Bonn"
   case "CMB":
      return "Colombo, Sri Lanka Katunayake International"
   case "CYR":
      return "Colonia, Uruguay"
   case "COS":
      return "Colorado Springs, CO, USA Colorado Springs Municipal"
   case "COU":
      return "Columbia, MO, USA Columbia Regional"
   case "CAE":
      return "Columbia, SC, USA Columbia Sc Airport Metropolitan"
   case "CSG":
      return "Columbus, GA, USA Columbus Metropolitan / Fort Benning"
   case "GTR":
      return "Columbus, MS, USA Golden"
   case "CMH":
      return "Columbus, OH, USA Port Columbus Intl Airport"
   case "CJT":
      return "Comitan, Mexico - Comitan Airport"
   case "CRD":
      return "Comodoro Rivadavia, Chubut, Argentina Comodoro Rivadavia"
   case "YQQ":
      return "Comox, British Columbia, Canada Comox Civil Air Terminal"
   case "CKY":
      return "Conakry, Guinea Conakry"
   case "CCP":
      return "Concepcion, Chile Carriel Sur"
   case "NOC":
      return "Connaught, Ireland Rep Of Ireland"
   case "CND":
      return "Constanta, Romania Kogalniceanu"
   case "CZL":
      return "Constantine, Algeria - Ain El Bey Airport"
   case "CPD":
      return "Coober Pedy, Australia - Coober Pedy Airport"
   case "OOM":
      return "Cooma, New South Wales, Australia"
   case "CPH":
      return "Copenhagen, Denmark Copenhagen"
   case "CPO":
      return "Copiapo, Chile - Chamonate Airport"
   case "YCO":
      return "Coppermine, Northwest Territories, Canada"
   case "COR":
      return "Cordoba, Cordoba, Argentina - Pajas Blancas"
   case "CDV":
      return "Cordova, AK, USA"
   case "CFU":
      return "Corfu (Kerkyra), Greece - Kerkyra"
   case "ORK":
      return "Cork, Ireland Cork"
   case "YCC":
      return "Cornwall, Ontario, Canada Regional"
   case "CZE":
      return "Coro, Venezuela - Coro Airport"
   case "CRP":
      return "Corpus Christi, TX, USA Corpus Christi International Airport"
   case "CNQ":
      return "Corrientes, Argentina - Corrientes Airport"
   case "CEZ":
      return "Cortez, CO, USA Montezuma County"
   case "CMG":
      return "Corumba, Mato Grosso Do Sul, Brazil Corumba"
   case "OLB":
      return "Costa Smeralda - Olbia, Italy"
   case "CBO":
      return "Cotabato, Philippines - Cotabato Airport"
   case "XGK":
      return "Coteau, Quebec, Canada Coteau / Via Rail Service"
   case "COO":
      return "Cotonou, Benin Cotonou"
   case "YCA":
      return "Courtenay, British Columbia, Canada"
   case "CWT":
      return "Cowra, New South Wales, Australia Cowra"
   case "GXQ":
      return "Coyhaique, Chile Teniente Vidal"
   case "CZM":
      return "Cozumel, Quintana Roo, Mexico Aeropuerto Intl De Cozumel"
   case "CGA":
      return "Craig, AK, USA"
   case "YXC":
      return "Cranbrook, British Columbia, Canada - Cranbrook-Kimberley Airport"
   case "CEC":
      return "Crescent City, CA, USA Crescent City Municipal Airport"
   case "CRI":
      return "Crooked Island, Bahamas"
   case "CRV":
      return "Crotone, Italy - Crotone Airport"
   case "CZS":
      return "Cruzeiro Do Sul, Brazil - Cruzeiro Do Sul-Campo International Airport"
   case "CUC":
      return "Cucuta, Colombia Camilo Daza"
   case "CUE":
      return "Cuenca, Ecuador Mariscal La Mar"
   case "CVJ":
      return "Cuernavaca, Mexico - Cuernavaca Airport"
   case "CGB":
      return "Cuiaba, Mato Grosso, Brazil - Cuiaba - Marechal Rondon Airport"
   case "AGT":
      return "Cuidad Del Este, Paraguay - Cuidad Del Este Airport"
   case "CPX":
      return "Culebra, Puerto Rico - Culebra Airport"
   case "CUL":
      return "Culiacan, Sinaloa, Mexico"
   case "CUM":
      return "Cumana, Venezuela"
   case "CBE":
      return "Cumberland, MD, USA Municipal"
   case "CWB":
      return "Curitiba, Parana, Brazil Afonso Pena"
   case "CUZ":
      return "Cuzco, Peru Tte Velazco Astete"
   case "DAD":
      return "Da Nang, Vietnam Da Nang"
   case "DKR":
      return "Dakar, Senegal Yoff"
   case "VIL":
      return "Dakhla, Morocco - Dakla Airport"
   case "DLM":
      return "Dalaman, Turkey Dalaman"
   case "DLZ":
      return "Dalanzadgad, Omnogovi, Mongolia - Dalanzadgad Airport"
   case "DLI":
      return "Dalat, Vietnam - Dalat Airport"
   case "DLU":
      return "Dali City, China - Dali City"
   case "DLC":
      return "Dalian, China"
   case "DAL":
      return "Dallas, TX, USA Love Field"
   case "DFW":
      return "Dallas/Ft Worth, TX, USA Dallas Ft Worth International"
   case "DAM":
      return "Damascus, Syria Damascus Intl"
   case "DMM":
      return "Damman, Saudi Arabia - King Fahad Airport Airport"
   case "DDG":
      return "Dandong, China - Dandong"
   case "DGA":
      return "Dangriga, Belize Dangriga"
   case "DNV":
      return "Danville, IL, USA Vermilion County Airport"
   case "DAN":
      return "Danville, VA, USA"
   case "DAR":
      return "Dar Es Salaam, Tanzania International"
   case "DRW":
      return "Darwin, Northern Territory, Australia"
   case "YDN":
      return "Dauphin, Manitoba, Canada"
   case "DVO":
      return "Davao, Philippines Mati"
   case "YDI":
      return "Davis Inlet, Canada - Davis Inlet Airport"
   case "DWD":
      return "Dawadmi, Saudi Arabia - Dawadmi Airport"
   case "YDQ":
      return "Dawson Creek, British Columbia, Canada"
   case "DYG":
      return "Dayong, China - Dayong"
   case "DAY":
      return "Dayton, OH, USA James M Cox Dayton International"
   case "DAB":
      return "Daytona Beach, FL, USA Daytona Beach International Airport"
   case "LGI":
      return "Deadmans Cay / Long Island, Bahamas Deadmans Cay"
   case "DOL":
      return "Deauville, France Saint Gatien"
   case "DBM":
      return "Debre Marcos, Ethiopia - Debre Marcos Airport"
   case "DEB":
      return "Debrechen, Hungary - Debrechen Airport"
   case "DEC":
      return "Decatur, IL, USA Decatur Municiple Airport"
   case "YDF":
      return "Deer Lake, Newfoundland, Canada Deer Lake"
   case "YVZ":
      return "Deer Lake, Ontario, Canada"
   case "DRT":
      return "Del Rio, TX, USA"
   case "DEL":
      return "Delhi, India - Indira Gandhi International Airport"
   case "DEM":
      return "Dembidollo, Ethiopia Dembidollo"
   case "DNM":
      return "Denham, Western Australia, Australia"
   case "DNZ":
      return "Denizli, Turkey - Denizli Airport"
   case "DPS":
      return "Denpasar Bali, Indonesia Ngurah Rai"
   case "DEN":
      return "Denver, CO, USA Denver International"
   case "DEA":
      return "Dera Ghazi Khan, Pakistan - Dera Ghazi Khan Airport"
   case "DSK":
      return "Dera Ismail Khan, Pakistan - Dera Ismail Khan Airport"
   case "DNF":
      return "Derna, Libya"
   case "DSM":
      return "Des Moines, IA, USA"
   case "YDS":
      return "Desolation Sound, Canada - Desolation Sound Airport"
   case "DSE":
      return "Dessie, Ethiopia - Dessie Airport"
   case "DSI":
      return "Destin, FL, USA"
   case "DTW":
      return "Detroit, MI, USA Detroit-Wayne County Metropolitan Airport"
   case "DET":
      return "Detroit City, MI, USA"
   case "YIP":
      return "Detroit, MI, USA - Willow Run Airport, Ypsilanti"
   case "DVL":
      return "Devils Lake, North Dakota, USA - Devils Lake Airport"
   case "DPO":
      return "Devonport, Tasmania, Australia Devonport"
   case "DHA":
      return "Dhahran, Saudi Arabia Dhahran Intl"
   case "DAC":
      return "Dhaka, Bangladesh Zia International Airport"
   case "DHM":
      return "Dharamsala/Kangra, Himachal Pradesh, India - Kangra Gaggal Dharamsala Airport"
   case "DIB":
      return "Dibrugarh, India Chabua"
   case "DIJ":
      return "Dijon, France Longvic"
   case "DIK":
      return "Dickinson, North Dakota, USA - Dickinson Airport"
   case "DIN":
      return "Dien Bien Phu, Vietnam - Dien Bien Phy Airport"
   case "DIL":
      return "Dili, East Timor - Timor-Leste"
   case "DLG":
      return "Dillingham, Alaska, USA - Dillingham Airport"
   case "DPL":
      return "Dipolog, Philippines Dipolog"
   case "DIG":
      return "Diqing, China - Diqing"
   case "DIR":
      return "Dire Dawa, Ethiopia - Dire Dawa Airport"
   case "DIU":
      return "Diu, India - Diu Airort"
   case "DIY":
      return "Diyarbakir, Turkey Diyarbakia"
   case "DJE":
      return "Djerba, Tunisia - Melita Airport"
   case "JIB":
      return "Djibouti, Djibouti Ambouli"
   case "DNK":
      return "Dnepropetrovsk, Ukraine - Dnepropetrovsk Airport"
   case "DDC":
      return "Dodge City, KS, USA Dodge City Municipal"
   case "DOH":
      return "Doha, Qatar Doha"
   case "DCF":
      return "Dominica, Dominica Cane Field"
   case "DOM":
      return "Dominica, Dominica Melville HalDom"
   case "DSA":
      return "Doncaster, Sheffield, UK - Robin Hood Airport"
   case "DOK":
      return "Donetsk, Ukraine Donetsk"
   case "DTM":
      return "Dortmund, Germany Wickede"
   case "DHN":
      return "Dothan, AL, USA Municipal"
   case "DLA":
      return "Douala, Cameroon Douala"
   case "DRS":
      return "Dresden, Germany Dresden"
   case "XDM":
      return "Drummondville, Quebec, Canada"
   case "YHD":
      return "Dryden, Ontario, Canada Dryden Airport"
   case "DUJ":
      return "Du Bois, PA, USA Jefferson County"
   case "DXB":
      return "Dubai, United Arab Emirates Dubai International Airport"
   case "DBO":
      return "Dubbo, New South Wales, Australia Dubbo"
   case "DUB":
      return "Dublin, Ireland Dublin"
   case "DBV":
      return "Dubrovnik, Croatia Hrvatska"
   case "DBQ":
      return "Dubuque, IA, USA Dubuque Municipal Airport"
   case "QDU":
      return "Duesseldorf, Germany Main Train Station"
   case "DLH":
      return "Duluth, MN, USA Duluth International Airport"
   case "DGT":
      return "Dumaguete, Philippines - Dumaguete Airport"
   case "DUQ":
      return "Duncan / Quam, British Columbia, Canada Quamichan Lake"
   case "DND":
      return "Dundee, Scotland, United Kingdom Dundee"
   case "DUD":
      return "Dunedin, New Zealand Momona"
   case "DNH":
      return "Dunhuang, China - Dunhuang"
   case "DRO":
      return "Durango, CO, USA Durango La Plata County Airport"
   case "DGO":
      return "Durango, Durango, Mexico Gen Guadalupe Victoria"
   case "DUR":
      return "Durban / La Mercy, South Africa - King Shaka International Airport (La Mercy Airport, Replaced Louis Botha airport)"
   case "DUS":
      return "Dusseldorf, Germany Dusseldorf"
   case "DUT":
      return "Dutch Harbor, AK, USA Dutch Harbor"
   case "ELS":
      return "East London, South Africa Ben Shoeman"
   case "EMA":
      return "East Midlands, England, United Kingdom East Midlands"
   case "IPC":
      return "Easter Island, Chile Mataveri"
   case "ESD":
      return "Eastsound, WA, USA Eastsound/Orcas Island Airport"
   case "EAU":
      return "Eau Claire, WI, USA Eau Claire Municipal"
   case "ECH":
      return "Echuca, Australia"
   case "EDI":
      return "Edinburgh, Scotland, United Kingdom Turnhouse"
   case "YEG":
      return "Edmonton, Alberta, Canada Edmonton International"
   case "YXD":
      return "Edmonton, Alberta, Canada Edmonton Municipal"
   case "EDR":
      return "Edward River, Queensland, Australia Edward River"
   case "EIN":
      return "Eindhoven, Netherlands Welschap"
   case "SVX":
      return "Ekaterinburg, Russia - Sheremtyevo Airport"
   case "BCQ":
      return "El Beida / La Braq,Libya"
   case "FTE":
      return "El Calafate, Argentina - El Calafate Airport"
   case "AZS":
      return "El Catey, Dominican Republic - Samana El Catey International Airport"
   case "ELD":
      return "El Dorado, AR, USA"
   case "ELP":
      return "El Paso, TX, USA El Paso International Airport"
   case "ESR":
      return "El Salvador, Chile"
   case "ETH":
      return "Elat, Israel Elat"
   case "EBA":
      return "Elba Island, Italy Marina Di Campo"
   case "QEJ":
      return "Elgarhbolli, Libya"
   case "EKO":
      return "Elko, NV, USA J C Harris Field"
   case "YEL":
      return "Elliot Lake, Ontario, Canada"
   case "QEC":
      return "Elmarj City, Libya"
   case "ELM":
      return "Elmira / Corning, NY, USA Elmira Corning Regional Arpt"
   case "ELY":
      return "Ely, NV, USA Yelland Field"
   case "EMD":
      return "Emerald, Queensland, Australia Emerald"
   case "WDG":
      return "Enid, OK, USA Woodring Municipal"
   case "ENS":
      return "Enschede, Netherlands Twente"
   case "EBB":
      return "Entebbe/Kampala, Uganda Entebbe"
   case "ERF":
      return "Erfurt, Germany Erfurt"
   case "ERI":
      return "Erie, PA, USA Erie International"
   case "ERZ":
      return "Erzurum, Turkey Erzurum"
   case "EBJ":
      return "Esbjerg, Denmark Esbjerg"
   case "ESC":
      return "Escanaba, MI, USA Delta County Airport"
   case "EQS":
      return "Esquel, Argentina - Esquel Airport"
   case "EPR":
      return "Esperance, Western Australia, Australia Esperance"
   case "YPF":
      return "Esquimalt, British Columbia, Canada"
   case "EUG":
      return "Eugene, OR, USA Eugene Airport"
   case "EVV":
      return "Evansville, IN, USA Evansville Regional Airport"
   case "EVE":
      return "Evenes, Norway Evenes"
   case "EXT":
      return "Exeter, England, United Kingdom Exeter"
   case "FAI":
      return "Fairbanks, AK, USA Fairbanks International Airport"
   case "FRM":
      return "Fairmont, MN, USA Fairmont Municipal"
   case "LYP":
      return "Faisalabad, Pakistan Lyallpur"
   case "FAR":
      return "Fargo, ND, USA Hector Airport"
   case "FRG":
      return "Farmingdale, Long Island, NY, USA - Republic Airport"
   case "FMN":
      return "Farmington, NM, USA Four Corners Regional Airport"
   case "FAO":
      return "Faro, Portugal Faro"
   case "FAE":
      return "Faroe Islands, Faroe Islands Faeroe Islands"
   case "FYV":
      return "Fayetteville, AR, USA Municipal"
   case "XNA":
      return "Fayetteville, AR, USA - Northwest Arkansas Regional"
   case "FAY":
      return "Fayetteville, NC, USA Fayetteville Municipal"
   case "FFM":
      return "Fergus Falls, MN, USA Fergus Falls Municipal Airport"
   case "FEN":
      return "Fernando De Noronha, Brazil - Fernando De Noronha Airport"
   case "FEZ":
      return "Fez, Morocco Fez"
   case "FLG":
      return "Flagstaff, AZ, USA Flagstaff"
   case "YFO":
      return "Flin Flon, Canada - Flin Flon Airport"
   case "FNT":
      return "Flint, MI, USA Bishop Int'l Airport"
   case "FLR":
      return "Florence, Italy"
   case "FLO":
      return "Florence, SC, USA Gilbert Field"
   case "FRS":
      return "Flores, Guatemala Flores"
   case "FLN":
      return "Florianopolis, Santa Catarina, Brazil Florianopolis Hercilio Luz Airport"
   case "FRO":
      return "Floro, Norway Floro"
   case "FDE":
      return "Forde, Norway Forde"
   case "FMA":
      return "Formosa, Formosa, Argentina Formosa"
   case "YFA":
      return "Fort Albany, Canada - Fort Albany Airport"
   case "YVP":
      return "Fort Chimo (Kuujjuaq), Quebec, Canada - Fort Chimo Airport"
   case "FNL":
      return "Fort Collins/Loveland, CO, USA Fort Collins / Loveland Airport"
   case "FDF":
      return "Fort De France, Martinique Fort De France"
   case "FOD":
      return "Fort Dodge, IA, USA Fort Dodge Regional Airport"
   case "FHU":
      return "Fort Huachuca/Sierra Vista, AZ, USA"
   case "FLL":
      return "Fort Lauderdale, FL, USA Ft Lauderdale/Hollywood Intl Apt"
   case "TBN":
      return "Fort Leonard Wood, MO, USA Forney Field"
   case "YMM":
      return "Fort Mcmurray, Alberta, Canada Fort Mcmurray Municipal"
   case "RSW":
      return "Fort Myers, FL, USA Regional Southwest Airport"
   case "YYE":
      return "Fort Nelson, Canada - Fort Nelson Airport"
   case "YXJ":
      return "Fort Saint John, British Columbia, Canada Fort St John"
   case "YFS":
      return "Fort Simpson, Northwest Territories, Canada Fort Simpson Airport"
   case "FSM":
      return "Fort Smith, AR, USA Fort Smith Municipal"
   case "YSM":
      return "Fort Smith, Northwest Territories, Canada"
   case "YXJ":
      return "Fort St John, British Columbia, Canada Fort St John"
   case "FWA":
      return "Fort Wayne, IN, USA Baer Field"
   case "FOR":
      return "Fortaleza, Ceara, Brazil Fortaleza-Pinto Martins Airport"
   case "FRA":
      return "Frankfurt, Germany Frankfurt International"
   case "HHN":
      return "Frankfurt, Germany - Hahn"
   case "FKL":
      return "Franklin, PA, USA Chess Lamberton"
   case "YXX":
      return "Fraser Valley/Abbotsford, Canada - Abbotsford Airport"
   case "EZF":
      return "Fredericksburg, Virginia, USA - Shannon Airport"
   case "YFC":
      return "Fredericton, New Brunswick, Canada Fredericton Municipal Apt"
   case "FPO":
      return "Freeport, Bahamas Freeport Intl Airport"
   case "FAT":
      return "Fresno, CA, USA Fresno Air Terminal"
   case "FRD":
      return "Friday Harbor, WA, USA Friday Harbor Airport"
   case "FDH":
      return "Friedrichshafen, Germany Friedrichshafen Lowenthal"
   case "YFA":
      return "Ft Albany, Canada - Fort Albany Airport"
   case "YVP":
      return "Ft Chimo (Kuujjuaq), Quebec, Canada - Fort Chimo Airport"
   case "FNL":
      return "Ft Collins/Loveland, CO, USA Fort Collins / Loveland Airport"
   case "FDF":
      return "Ft De France, Martinique Fort De France"
   case "FOD":
      return "Ft Dodge, IA, USA Fort Dodge Regional Airport"
   case "FHU":
      return "Ft Huachuca/Sierra Vista, AZ, USA"
   case "FLL":
      return "Ft Lauderdale, FL, USA Ft Lauderdale/Hollywood Intl Apt"
   case "TBN":
      return "Ft Leonard Wood, MO, USA Forney Field"
   case "YMM":
      return "Ft Mcmurray, Alberta, Canada Fort Mcmurray Municipal"
   case "RSW":
      return "Ft Myers, FL, USA Regional Southwest Airport"
   case "YYE":
      return "Ft Nelson, Canada - Fort Nelson Airport"
   case "YXJ":
      return "Ft Saint John, British Columbia, Canada Fort St John"
   case "YFS":
      return "Ft Simpson, Northwest Territories, Canada Fort Simpson Airport"
   case "FSM":
      return "Ft Smith, AR, USA Fort Smith Municipal"
   case "YSM":
      return "Ft Smith, Northwest Territories, Canada"
   case "YXJ":
      return "Ft St John, British Columbia, Canada Fort St John"
   case "FWA":
      return "Ft Wayne, IN, USA Baer Field"
   case "FUE":
      return "Fuerteventura / Puerto Del Rosario, Canary Islands/Fuerteventura Island, Spain Fuerteventura"
   case "FUK":
      return "Fukuoka, Japan Itazuke"
   case "FUN":
      return "Funafuti, Funafuti Atol, Tuvalu - International"
   case "FNC":
      return "Funchal, Madeira Islands, Portugal Funchal"
   case "FUG":
      return "Fuyang, China - Fuyang"
   case "FOC":
      return "Fuzhou, China - Fuzhou"
   case "GBE":
      return "Gaborone, Botswana Gaborone"
   case "GNV":
      return "Gainesville, FL, USA Jr Alison Municipal"
   case "GPS":
      return "Galapagos Islands, Ecuador Baltra"
   case "GAL":
      return "Galena, AK, USA"
   case "GBG":
      return "Galesburg, IL, USA Galesburg Municiple Airport"
   case "GUP":
      return "Gallup, NM, USA Gallup Municipal"
   case "GLS":
      return "Galveston, TX, USA Scholes Field"
   case "GWY":
      return "Galway, Ireland Carnmore"
   case "YQX":
      return "Gander, Newfoundland, Canada Gander Intl Airport"
   case "YGG":
      return "Ganges Harbor, Canada - Ganges Harbor Airport"
   case "KOW":
      return "Ganzhou, China - Ganzhou"
   case "GCK":
      return "Garden City, KS, USA Garden City Municipal Airport"
   case "GYY":
      return "Gary, IN, USA - Gary Regional"
   case "YGP":
      return "Gaspe, Quebec, Canada"
   case "ELQ":
      return "Gassim, Saudi Arabia - Gassim Airport"
   case "YND":
      return "Gatineau, Quebec, Canada Gatineau"
   case "GAU":
      return "Gauhati, India Borjhar"
   case "GDN":
      return "Gdansk, Poland Rebiechowo"
   case "GVA":
      return "Geneva, Switzerland Geneva"
   case "GOA":
      return "Genoa, Italy Christoforo Colombo"
   case "GGT":
      return "George Town, Bahamas Exuma International"
   case "GRJ":
      return "George, South Africa George"
   case "GEO":
      return "Georgetown, Guyana Timehri"
   case "XHM":
      return "Georgetown, Ontario, Canada Georgetown / Via Rail Service"
   case "GET":
      return "Geraldton, Western Australia, Australia Geraldton"
   case "GRO":
      return "Gerona, Spain Costa Brava"
   case "LTD":
      return "Ghadames, Libya"
   case "GHT":
      return "Ghat, Libya"
   case "QGH":
      return "Gherian, Libya"
   case "GIB":
      return "Gibraltar, Gibraltar Gibraltar"
   case "GIL":
      return "Gilgit, Pakistan, Gilgit Airport"
   case "GCC":
      return "Gillam, Manitoba, Canada"
   case "GCC":
      return "Gillette, WY, USA Campbell County Airport"
   case "YGB":
      return "Gillies Bay, British Columbia, Canada"
   case "GIZ":
      return "Gizan (Jizan), Jizan province, Saudi Arabia - Gizan Airport"
   case "YHK":
      return "Gjoa Haven, Canada - Gjoa Haven Airport"
   case "GLT":
      return "Gladstone, Australia - Gladstone Airport"
   case "GGW":
      return "Glasgow, MT, USA"
   case "GLA":
      return "Glasgow, Scotland, United Kingdom Glasgow Scotland"
   case "PIK":
      return "Glasgow, Scotland, United Kingdom Prestwick"
   case "XZC":
      return "Glencoe, Ontario, Canada Glencoe / Via Rail Service"
   case "GDV":
      return "Glendive, MT, USA"
   case "GOI":
      return "Goa, India Dabolim"
   case "YGO":
      return "Gods Narrows, Canada - Gods Narrows Airport"
   case "ZGI":
      return "Gods River, Manitoba, Canada"
   case "GYN":
      return "Goiania, Brazil - Goiania-Santa Genoveva Airport"
   case "OOL":
      return "Gold Coast, Queensland, Australia Coolangatta"
   case "GLF":
      return "Golfito, Costa Rica Golfito"
   case "GLV":
      return "Golovin, AK, USA"
   case "GLD":
      return "Goodland, KS, USA Renner Field"
   case "YYR":
      return "Goose Bay, Newfoundland, Canada Goose Bay Municipal Airpt"
   case "GKA":
      return "Goroka, Papua New Guinea Goroka"
   case "GTO":
      return "Gorontalo, Indonesia Tolotio"
   case "GOT":
      return "Gothenburg, Sweden Landvetter"
   case "GOV":
      return "Gove, Northern Territory, Australia Nhulunbuy"
   case "GHB":
      return "Governors Harbour, Bahamas"
   case "LPA":
      return "Gran Canaria, Canary Islands, Spain Aeropuerto De Gran Canaria"
   case "GRX":
      return "Granada, Spain Granada"
   case "GCN":
      return "Grand Canyon, AZ, USA"
   case "GCM":
      return "Grand Cayman Island, Cayman Islands Owen Roberts Intl Airport"
   case "GFK":
      return "Grand Forks, ND, USA Grand Forks International Airport"
   case "GRI":
      return "Grand Island, NE, USA Central Nebraska Regional Airport"
   case "GJT":
      return "Grand Junction, CO, USA Walker Field"
   case "GRR":
      return "Grand Rapids, MI, USA Kent County International Airport"
   case "GDT":
      return "Grand Turk Is, Turks And Caicos Islands"
   case "YQU":
      return "Grande Prairie, Alberta, Canada Grande Prairie Airport"
   case "GRZ":
      return "Graz, Austria Thalerhof"
   case "GBD":
      return "Great Bend, Kansas, USA - Airport"
   case "GTF":
      return "Great Falls, MT, USA Great Falls International"
   case "GRB":
      return "Green Bay, WI, USA - Austin Straubel International Airport (Austin/Straybel Field)"
   case "LWB":
      return "Greenbrier, WV, USA Greenbrier Valley Airport"
   case "GSO":
      return "Greensboro / High Point, NC, USA Piedmont Triad Intl Airport"
   case "GRE":
      return "Greenville, IL, USA - Municipal"
   case "PGV":
      return "Greenville, NC, USA - Pitt-Greenville"
   case "GLH":
      return "Greenville, MS, USA - Greenville"
   case "GDC":
      return "Greenville, SC, USA - Donaldson Center"
   case "GMU":
      return "Greenville, SC, USA - Downtown"
   case "GSP":
      return "Greenville, SC, USA - Greenville-Spartanburg Metro"
   case "GCY":
      return "Greenville, TN, USA - Municipal"
   case "GVT":
      return "Greenville, TX, USA - Majors Field"
   case "YGN":
      return "Greenway Sound, Canada - Greenway Sound Airport"
   case "GNB":
      return "Grenoble, France St Geoirs"
   case "GFF":
      return "Griffith, Australia - Griffith Airport"
   case "XGY":
      return "Grimsby, Ontario, Canada Grimsby / Via Rail Service"
   case "GRQ":
      return "Groningen, Netherlands Eelde"
   case "GON":
      return "Groton / New London, CT, USA GrotonNew London"
   case "GDL":
      return "Guadalajara, Jalisco, Mexico Miguel Hidalgo Intl"
   case "GUM":
      return "Guam, Guam Ab Wonpat Intl Airport"
   case "CAN":
      return "Guangzhou, China - Baiyun"
   case "GUA":
      return "Guatemala City, Guatemala La Aurora Intl Airport"
   case "GYE":
      return "Guayaquil, Ecuador Simon Bolivar"
   case "GYA":
      return "Guayaramerin, Bolivia - Buayaramerin Airport"
   case "GYM":
      return "Guaymas, Sonora, Mexico"
   case "XIA":
      return "Guelph, Ontario, Canada Guelph / Via Rail Service"
   case "GCI":
      return "Guernsey, Channel Islands, United Kingdom Guernsey"
   case "GUB":
      return "Guerrero Negro, Baja California Sur, Mexico Guerrero Negro Airport"
   case "KWL":
      return "Guilin, China"
   case "KWE":
      return "Guiyang, China - Guiyang"
   case "GPT":
      return "Gulfport, MS, USA Gulfport/Biloxi"
   case "GUC":
      return "Gunnison, CO, USA Gunnison County Airport"
   case "URY":
      return "Gurayat, Saudi Arabia - Gurayat Airport"
   case "GST":
      return "Gustavus, Alaska, USA - Gustavus Airport"
   case "GWD":
      return "Gwadar, Pakistan"
   case "HPA":
      return "Ha'Apai, Tonga - Ha'Apai Airport"
   case "HBT":
      return "Hafr Albatin, Saudi Arabia - Hafr Albatin Airport"
   case "HGR":
      return "Hagerstown, MD, USA Washington County Regional Airport"
   case "HFA":
      return "Haifa, Israel - Haifa Airport"
   case "HAK":
      return "Haikou, China Haikou"
   case "HAS":
      return "Hail, Saudi Arabia - Hail Airport"
   case "HLD":
      return "Hailar, China - Hailar"
   case "HNS":
      return "Haines, AK, USA"
   case "HPH":
      return "Haiphong, Vietnam - Haiphong Airport"
   case "HAC":
      return "Hachijo Jima, Japan - Hachijo Jima Airport"
   case "HKD":
      return "Hakodate, Japan Hakodate"
   case "YHZ":
      return "Halifax, Nova Scotia, Canada Halifax International"
   case "YUX":
      return "Hall Beach, Canada - Hall Beach Airport"
   case "HAD":
      return "Halmstad, Sweden Halmstad"
   case "HAM":
      return "Hamburg, Germany Fuhlsbuttel"
   case "HTI":
      return "Hamilton Island, Queensland, Australia"
   case "HLZ":
      return "Hamilton, New Zealand Hamilton"
   case "YHM":
      return "Hamilton, Ontario, Canada Hamilton Civic Airport"
   case "HFT":
      return "Hammerfest, Norway"
   case "HNM":
      return "Hana, Hawaii, USA - Hana Airport"
   case "CMX":
      return "Hancock, MI, USA Houghton County / Memorial"
   case "HGH":
      return "Hangzhou, China"
   case "HAN":
      return "Hanoi, Vietnam Noibai Airport"
   case "HAJ":
      return "Hanover, Germany Langenhagen"
   case "HRE":
      return "Harare, Zimbabwe Harare"
   case "ZNA":
      return "Harbour/Nanaimo, British Columbia, Canada - Harbor Airport"
   case "HRB":
      return "Harbin, China"
   case "HGA":
      return "Hargeisa, Somalia - Hargeisa Airport"
   case "HRL":
      return "Harlingen, TX, USA"
   case "MDT":
      return "Harrisburg, PA, USA Harrisburg International Airport"
   case "HRO":
      return "Harrison, AR, USA Boone County"
   case "BDL":
      return "Hartford, CT, USA Bradley International Airport"
   case "HSI":
      return "Hastings, NE, USA"
   case "HDY":
      return "Hat Yai, Thailand"
   case "HAU":
      return "Haugesund, Norway Karmoy"
   case "HAV":
      return "Havana, Cuba Jose Marti"
   case "HVR":
      return "Havre, MT, USA City County"
   case "YHY":
      return "Hay River, Northwest Territories, Canada"
   case "HDN":
      return "Hayden, CO, USA Yampa Valley Regional Airport"
   case "HIS":
      return "Hayman Island, Queensland, Australia Hayman Island Airport"
   case "HYS":
      return "Hays, KS, USA Hays Municipal Airport"
   case "HFE":
      return "Hefei, China - Hefei"
   case "HEH":
      return "Heho, Myanmar (Burma) - Heho Airport"
   case "HDB":
      return "Heidelberg, Germany"
   case "HLN":
      return "Helena, MT, USA"
   case "AGH":
      return "Helsingborg, Sweden Angelholm/Helsingborg"
   case "JHE":
      return "Helsingborg, Sweden Heliport"
   case "HEL":
      return "Helsinki, Finland Helsinki"
   case "HER":
      return "Heraklion, Crete Island, Greece Heraklion"
   case "HEA":
      return "Herat, Afghanistan - Herat"
   case "HDF":
      return "Heringsdorf, Germany - Heringsdorf Airport"
   case "HMO":
      return "Hermosillo, Sonora, Mexico General Ignacio Pesqueira Garcia"
   case "HVB":
      return "Hervey Bay, Queensland, Australia"
   case "XDU":
      return "Hervey, Quebec, Canada Hervey / Via Rail Service"
   case "HIB":
      return "Hibbing / Chisholm, MN, USA HibbingChisholm"
   case "HKY":
      return "Hickory, NC, USA"
   case "YOJ":
      return "High Level, Alberta, Canada Footner Lake Muncpl"
   case "ITO":
      return "Hilo, HI, USA Hilo Hawaii:HawaiiInternational Usa"
   case "HHH":
      return "Hilton Head, SC, USA Municipal"
   case "HIJ":
      return "Hiroshima, Japan Hiroshima"
   case "SGN":
      return "Ho Chi Minh City, Vietnam Tan Son Nhut"
   case "HBA":
      return "Hobart, Tasmania, Australia - Hobart Cambridge Airport"
   case "HOB":
      return "Hobbs, NM, USA Lea County"
   case "HDS":
      return "Hoedspruit, South Africa - Hoedspruit Airport"
   case "HOQ":
      return "Hof Airport"
   case "HOF":
      return "Hofuf, Saudi Arabia - Hofuf Airport"
   case "HET":
      return "Hohhot, China"
   case "HKK":
      return "Hokitika, New Zealand Hokitika"
   case "YHI":
      return "Holman Island, Northwest Territories, Canada"
   case "HOM":
      return "Homer, AK, USA Homer Airport"
   case "HKG":
      return "Hong Kong, Hong Kong"
   case "HIR":
      return "Honiara/Guadalcanal, Solomon Islands Henderson International"
   case "HVG":
      return "Honningsvag, Norway - Honningsvag-Valan Airport"
   case "HNL":
      return "Honolulu, HI, USA Honolulu International"
   case "MKK":
      return "Hoolehua, HI, USA Municipal"
   case "HNH":
      return "Hoonah, AK, USA"
   case "HPB":
      return "Hooper Bay, AK, USA"
   case "HID":
      return "Horn Island, Australia - Horn Island Airport"
   case "YHN":
      return "Hornepayne, Ontario, Canada"
   case "HSM":
      return "Horsham, Australia"
   case "HOR":
      return "Horta, Portugal - Horta Airport"
   case "HKN":
      return "Hoskins, Papua New Guinea Hoskins"
   case "HOT":
      return "Hot Springs, AR, USA Memorial Field"
   case "HTN":
      return "Hotan, China - Hotan"
   case "HUM":
      return "Houma, LA, USA Terrebonne"
   case "HUQ":
      return "Houn, Libya"
   case "ZHO":
      return "Houston, British Columbia, Canada"
   case "IAH":
      return "Houston, TX, USA"
   case "EFD":
      return "Houston, TX, USA Ellington Field"
   case "HOU":
      return "Houston, TX, USA Houston Hobby Airport"
   case "HOU":
      return "Houston, TX, USA Houston Hobby Airport"
   case "IAH":
      return "Houston, TX, USA Houston Intercontinental"
   case "HUH":
      return "Huahine, French Polynesia - Huahine Airport"
   case "HUN":
      return "Hualien, Taiwan Hualien"
   case "HYN":
      return "Huangyan, China - Huangyan"
   case "HUX":
      return "Huatulco, Oaxaca, Mexico"
   case "YHB":
      return "Hudson Bay, Saskatchewan, Canada"
   case "HUI":
      return "Hue, Vietnam"
   case "HUY":
      return "Humberside, England, United Kingdom Humberside"
   case "HTS":
      return "Huntington / Ashland, WV, USA TriState"
   case "HSV":
      return "Huntsville/Decatur, AL, USA HuntsvilleMadison County Jetplex"
   case "HRG":
      return "Hurghada, Egypt"
   case "HON":
      return "Huron, SD, USA Huron Regional Airport"
   case "HWN":
      return "Hwange National Park, Zimbabwe Hwange National Park"
   case "HYA":
      return "Hyannis, MA, USA Barnstable County"
   case "HYG":
      return "Hydaburg, AK, USA"
   case "HYD":
      return "Hyderabad, India Begumpet"
   case "IAS":
      return "Iasi, Romania Iasi"
   case "IBZ":
      return "Ibiza, Spain Ibiza"
   case "IDA":
      return "Idaho Falls, ID, USA"
   case "IGG":
      return "Igiugig, Alaska, USA - Iguigig Airport"
   case "YGT":
      return "Igloolik, Northwest Territories, Canada"
   case "IGU":
      return "Iguassu Falls, Parana, Brazil - Igaussu Falls - Cataratas Airport"
   case "IGR":
      return "Iguazu, Misiones, Argentina Iguazu International"
   case "JIK":
      return "Ikaria Island, Greece - Ikaria Airport"
   case "YGR":
      return "Iles De La Madeleine, Quebec, Canada House Harbour Airport"
   case "ILF":
      return "Ilford, Manitoba, Canada"
   case "IOS":
      return "Ilheus, Bahia, Brazil - Eduardo Gomes"
   case "ILI":
      return "Iliamna, AK, USA"
   case "ILQ":
      return "Ilo, Moquegua, Peru Ilo Airport"
   case "ILO":
      return "Iloilo, Philippines Mandurriao"
   case "JAV":
      return "Ilulissat, Greenland"
   case "IMP":
      return "Imperatriz, Maranhao, Brazil"
   case "IMF":
      return "Imphal, India Municipal"
   case "IGA":
      return "Inagua, Bahamas"
   case "ICN":
      return "Incheon [Seoul], South Korea - Incheon International Airport"
   case "SHC":
      return "Indaselassie, Ethiopia"
   case "IND":
      return "Indianapolis, IN, USA Indianapolis International Airport"
   case "IDR":
      return "Indore, India - Indore Airport"
   case "XIB":
      return "Ingersoll, Ontario, Canada Ingersoll / Via Rail Service"
   case "INN":
      return "Innsbruck, Austria Kranebitten"
   case "INL":
      return "International Falls, MN, USA Falls International"
   case "YPH":
      return "Inukjuak, Canada - Inukjuak Airport"
   case "YEV":
      return "Inuvik, Northwest Territories, Canada Inuvik International Arpt"
   case "IVC":
      return "Invercargill, New Zealand - Invercargill Airport"
   case "INV":
      return "Inverness, Scotland, United Kingdom Inverness"
   case "IYK":
      return "Inyokern, CA, USA Inyokern Airport"
   case "IOA":
      return "Ioannina, Greece Ioannina"
   case "IPI":
      return "Ipiales, Colombia San Luis"
   case "IPH":
      return "Ipoh, Malaysia Ipoh"
   case "YFB":
      return "Iqaluit, Northwest Territories, Canada - Iqaluit-Frobisher Bay Airport"
   case "IQQ":
      return "Iquique, Chile Chucumata"
   case "IQT":
      return "Iquitos, Peru Cf Secada"
   case "IKT":
      return "Irkutsk, Russia - Irkutsk-Southeast Airport"
   case "IMT":
      return "Iron Mountain, MI, USA Ford Airport"
   case "IWD":
      return "Ironwood, MI, USA Gogebic County Airport"
   case "ISH":
      return "Ischia, Italy - Ischia Airport"
   case "IFN":
      return "Isfahan, Iran - Isfahan Airport"
   case "ISG":
      return "Ishigaki, Japan - Ishigaki Airport"
   case "ISB":
      return "Islamabad, Pakistan International"
   case "ILY":
      return "Islay, Scotland, United Kingdom Glenegedale"
   case "IOM":
      return "Isle Of Man, Isle Of Man, United Kingdom Ronaldsway"
   case "ISC":
      return "Isles Of Scilly, Isles Of Scilly, United Kingdom Tresco"
   case "ISP":
      return "Islip, NY, USA Long IslandMacarthur Airport"
   case "IST":
      return "Istanbul, Turkey Ataturk"
   case "QIE":
      return "Istres, France - Le Tube airport"
   case "ITB":
      return "Itaituba, Brazil - Itaituba Airport"
   case "ITH":
      return "Ithaca, NY, USA Tompkins County"
   case "IVL":
      return "Ivalo, Finland - Ivalo Airport"
   case "IFO":
      return "Ivano-Frankovsk, Ukraine - Ivano-Frankovsk Airport"
   case "YIK":
      return "Ivujivik, Canada - Ivujivik Airport"
   case "IWJ":
      return "Iwami, Japan - Iwami Airport"
   case "ZIH":
      return "Ixtapa/Zihuatanejo, Guerrero, Mexico International"
   case "IJK":
      return "Izhevsk, Russia"
   case "ADB":
      return "Izmir, Turkey Adnan Menderes"
   case "IZO":
      return "Izumo, Japan"
   case "JAG":
      return "Jacobabad, Pakistan - Jacobabad Airport"
   case "JAT":
      return "Jabat, Marshall Islands Jabat Intl"
   case "JAC":
      return "Jackson Hole, WY, USA Jackson Hole Airport"
   case "JAN":
      return "Jackson, MS, USA Allen C Thompson Field"
   case "MKL":
      return "Jackson, TN, USA Mc Kellar Field"
   case "JAX":
      return "Jacksonville, FL, USA Jacksonville International Airport"
   case "CRG":
      return "Jacksonville, Florida, USA - Craig Municipal Airport"
   case "OAJ":
      return "Jacksonville, NC, USA"
   case "JAI":
      return "Jaipur, India Sanganeer"
   case "HLP":
      return "Jakarta, Indonesia Halim Perdana Kusama"
   case "CGK":
      return "Jakarta, Indonesia Soekarno Hatta International"
   case "JAL":
      return "Jalapa, Mexico - Jalapa Airport"
   case "JMS":
      return "Jamestown, ND, USA Jamestown Municipal Airport"
   case "JHW":
      return "Jamestown, NY, USA Chautauqua County Airport"
   case "IXJ":
      return "Jammu, India Satwari"
   case "JGA":
      return "Jamnagar, India Govardhanpur"
   case "IXW":
      return "Jamshedpur, India Sonari"
   case "YJA":
      return "Jasper, Alberta, Canada"
   case "DJJ":
      return "Jayapura, Indonesia - Sentani-Jayapura Airport"
   case "JED":
      return "Jeddah, Saudi Arabia Jeddah International"
   case "XRY":
      return "Jerez De La Frontera, Spain La Parra"
   case "JER":
      return "Jersey, Channel Islands, United Kingdom States"
   case "JIJ":
      return "Jijiga, Ethiopia - Jijiga Airport"
   case "JIL":
      return "Jilin, China - Jilin"
   case "JIM":
      return "Jimma, Ethiopia - Jimma Airport"
   case "TNA":
      return "Jinan, China - Jinan"
   case "JHG":
      return "Jinghong, China - Jinghong"
   case "JJN":
      return "Jinjiang, China - Jinjiang"
   case "GIZ":
      return "Jizan (Gizan), Jizan province, Saudi Arabia - Gizan Airport"
   case "JPA":
      return "Joao Pessoa, Brazil - Castro Pinto Airport"
   case "JDH":
      return "Jodhpur, India"
   case "JOE":
      return "Joensuu, Finland - Joensuu Airport"
   case "JNB":
      return "Johannesburg, South Africa - O R Tambo International Airport (formerly Jan Smuts)"
   case "JON":
      return "Johnston Island, US, Outlying Islands"
   case "JST":
      return "Johnstown, PA, USA Johnstown Cambria"
   case "JHB":
      return "Johor Bahru, Malaysia Sultan Ismail International"
   case "JOI":
      return "Joinville, Santa Catarina, Brazil Federal/Cubatao Airport"
   case "XJL":
      return "Joliette, Quebec, Canada Joliette / Via Rail Service"
   case "JMO":
      return "Jomsom, Nepal"
   case "JBR":
      return "Jonesboro, AR, USA Municipal"
   case "JKG":
      return "Jonkoping, Sweden Axamo"
   case "XJQ":
      return "Jonquiere, Quebec, Canada Jonquiere / Via Rail Service"
   case "JLN":
      return "Joplin, MO, USA Municipal Airport"
   case "JRH":
      return "Jorhat, India - Jorhat Airport"
   case "JOS":
      return "Jos, Nigeria - Jos Airport"
   case "AJF":
      return "Jouf, Saudi Arabia - Jouf Airport"
   case "JDO":
      return "Juazeiro Do Norte, Brazil - Juazeiro Do Norte Airport"
   case "JUJ":
      return "Jujuy, Provincia Jujuy, Argentina El Cadillal"
   case "JUL":
      return "Juliaca, Peru Juliaca"
   case "JNU":
      return "Juneau, AK, USA Juneau"
   case "JYV":
      return "Jyvaskyla, Finland - Jyvaskyla Airport"
   case "ABK":
      return "Kabri Dar, Ethiopia - Kabri Dar Airport"
   case "KBL":
      return "Kabul, Afghanistan - Khwaja Rawash"
   case "DNA":
      return "Kadena AFB, Okinawa, Japan - Kadena Air Force Base-Okinawa Airport"
   case "KOJ":
      return "Kagoshima, Japan Kagoshima"
   case "OGG":
      return "Kahului, HI, USA Kahului Airport"
   case "IXH":
      return "Kailashahar, India Kailashahar"
   case "KAT":
      return "Kaitaia, New Zealand Kaitaia"
   case "KAJ":
      return "Kajaani, Finland - Kajaani Airport"
   case "KAE":
      return "Kake, AK, USA"
   case "AZO":
      return "Kalamazoo, MI, USA Kalamazoo/Battle Creek Intl"
   case "LUP":
      return "Kalaupapa, Hawaii, USA, Kalaupapa Airport"
   case "KGI":
      return "Kalgoorlie, Australia - Kalgoorlie Airport"
   case "KLO":
      return "Kalibo, Philippines Kalibo"
   case "KGD":
      return "Kaliningrad, Russia Kaliningrad Airport"
   case "FCA":
      return "Kalispell, MT, USA Glacier Park International"
   case "GPI":
      return "Kalispell, MT, USA - Glacier Park International"
   case "KLR":
      return "Kalmar, Sweden Kalmar"
   case "KAL":
      return "Kaltag, AK, USA"
   case "IXQ":
      return "Kamalpur, India Kamalpur"
   case "YKA":
      return "Kamloops, British Columbia, Canada Fulton Field"
   case "MUE":
      return "Kamuela, Hawaii, USA - Waimea-Kohala-Kamuela Airport"
   case "KDH":
      return "Kandahar, Afghanistan - Kandahar"
   case "IXY":
      return "Kandla, India Kandla"
   case "SFJ":
      return "Kangerlussuaq, Greenland Sondre Stromfjord"
   case "XGR":
      return "Kangiqsualujjuaq, Canada - Kangiqsualujjuaq Airport"
   case "YWB":
      return "Kangiqsujuaq, Canada - Kangiqsujuaq Airport"
   case "YKG":
      return "Kangirsuk, Canada - Kangirsuk Airport"
   case "KAG":
      return "Kangnung, Republic of Korea - Kangnung Airport"
   case "DHM":
      return "Kangra, Himachal Pradesh, India - Kangra Gaggal Dharamsala Airport"
   case "KAN":
      return "Kano, Nigeria Aminu Kano International"
   case "MKC":
      return "Kansas City, MO, USA Downtown"
   case "MCI":
      return "Kansas City, MO, USA Kansas City International Airport"
   case "KHH":
      return "Kaohsiung, Taiwan"
   case "JHM":
      return "Kapalua, HI, USA Kapalua"
   case "YYU":
      return "Kapuskasing, Ontario, Canada"
   case "KHI":
      return "Karachi, Pakistan - Quaid-E-Azam International Airport"
   case "KAB":
      return "Kariba, Zimbabwe Kariba"
   case "KLV":
      return "Karlovy Vary, Czech Republic - Karlovy Vary Airport"
   case "FKB":
      return "Karlsruhe/Baden, Germany - Karlsruhe-Baden Airport"
   case "KSD":
      return "Karlstad, Sweden - Karlstad Airport"
   case "AOK":
      return "Karpathos, Greece Karpathos"
   case "KTA":
      return "Karratha, Australia - Karratha Airport"
   case "KSY":
      return "Kars, Turkey - Kars Airport"
   case "KSQ":
      return "Karshi, Uzbekistan - Karshi Airport"
   case "KRP":
      return "Karup, Denmark Karup"
   case "BBK":
      return "Kasane, Botswana Kasane"
   case "ZKE":
      return "Kaschechewan, Canada - Kaschechewan Airport"
   case "KHG":
      return "Kashi, China - Kashi"
   case "KSJ":
      return "Kasos Island, Greece Kasos Island"
   case "KSF":
      return "Kassel, Germany - Kassel Airport"
   case "KZS":
      return "Kastelorizo Island, Greece - Kastelorizo Airport"
   case "KSO":
      return "Kastoria,Greece - Kastoria Airport"
   case "KTR":
      return "Katherine, Northern Territory, Australia Tindal"
   case "KTM":
      return "Kathmandu, Nepal Tribhuvan"
   case "KTW":
      return "Katowice, Poland Pyrzowice"
   case "LIH":
      return "Lihue, Kauai Island, HI, USA Lihue Municipal Airport"
   case "HPV":
      return "Kauai Island, HI, USA Princeville"
   case "KUN":
      return "Kaunas, Lithuania Kaunas"
   case "KVA":
      return "Kavala, Greece Kavala"
   case "MKK":
      return "Kaunakakai/Hoolehua, HI, USA - Molokai Municipal Airport"
   case "ASR":
      return "Kayseri, Turkey - Kayseri Airport"
   case "KZN":
      return "Kazan, Russia Kazan"
   case "EAR":
      return "Kearney, NE, USA Kearney Municipal Airport"
   case "EEN":
      return "Keene / Brattleboro, NH, USA Dillant Hopkins"
   case "EFL":
      return "Kefallinia Island, Greece - Kefallinia Airport"
   case "YLW":
      return "Kelowna, British Columbia, Canada Ellison Field Airport"
   case "KEJ":
      return "Kemerovo, Russia Kemerovo"
   case "KEM":
      return "Kemi/Tornio, Finland Kemi"
   case "KPS":
      return "Kempsey, Australia - Kempsey Airport"
   case "ENA":
      return "Kenai, AK, USA Kenai Municipal Airport"
   case "KEH":
      return "Kenmore Air Harbor, WA, USA"
   case "YQK":
      return "Kenora, Ontario, Canada"
   case "KMA":
      return "Kerema, Papua New Guinea - Kerema Airport"
   case "CFU":
      return "Kerkyra, Greece Kerkyra"
   case "KER":
      return "Kerman, Iran Kerman"
   case "KSH":
      return "Kermanshah, Iran Bakhtaran Iran"
   case "KKE":
      return "Kerikeri, New Zealand - Kerikeri Airport"
   case "KIR":
      return "Kerry County, Ireland Kerry County"
   case "IXK":
      return "Keshod, India Keshod"
   case "KTN":
      return "Ketchikan, AK, USA Ketchikan International"
   case "EYW":
      return "Key West, FL, USA"
   case "KHV":
      return "Khabarovsk, Russia - Novy"
   case "HJR":
      return "Khajuraho, India - Khajuraho Airport"
   case "KHR":
      return "Kharkhorin, Ovorkhangai, Mongolia - Kharkhorin Airport"
   case "HRK":
      return "Kharkov, Ukraine Kharkov"
   case "KRT":
      return "Khartoum, Sudan Civil"
   case "QKO":
      return "Khoms (Al Khums), Libya"
   case "KKC":
      return "Khon Kaen, Thailand - Khon Kaen Airport"
   case "KOG":
      return "Khong Island, Laos - Khong Island Airport"
   case "HVD":
      return "Khovd, Khovd, Mongolia - Khovd Airport"
   case "IXN":
      return "Khowai, India Khowai"
   case "HJT":
      return "Khujirt, Ovorkhangai, Mongolia - Khujirt Airport"
   case "KEL":
      return "Kiel, Germany Holtenau"
   case "KBP":
      return "Kiev, Ukraine Borispol"
   case "IEV":
      return "Kiev, Ukraine Zhulhany"
   case "KGL":
      return "Kigali, Rwanda - Kigali-Kayibanda International Airport"
   case "TKQ":
      return "Kigoma, Tanzania"
   case "JRO":
      return "Kilimanjaro, Tanzania Kilimanjaro"
   case "ILE":
      return "Killeen, TX, USA"
   case "KIM":
      return "Kimberley, South Africa - B J Vorster Airport"
   case "KVC":
      return "King Cove, Alaska, USA - King Cove Airport"
   case "KNS":
      return "King Island, Tasmania, Australia King Island"
   case "AKN":
      return "King Salmon, Alaska, USA - King Salmon Airport"
   case "IGM":
      return "Kingman, AZ, USA Mohave County"
   case "KGC":
      return "Kingscote, South Australia, Australia"
   case "KIN":
      return "Kingston, Jamaica"
   case "YGK":
      return "Kingston, Ontario, Canada Kingston Airport"
   case "KNH":
      return "Kinmen, Taiwan - Kinmen Island Airport"
   case "FIH":
      return "Kinshasa, Zaire Kinshasa"
   case "ISO":
      return "Kinston, NC, USA"
   case "KPN":
      return "Kipnuk, AK, USA"
   case "KKN":
      return "Kirkenes, Norway Hoeyburtmoen"
   case "IRK":
      return "Kirksville, Missouri, USA - Kirksville Airport"
   case "KOI":
      return "Kirkwall / Orkney Island, Scotland, United Kingdom Kirkwall"
   case "KRN":
      return "Kiruna, Sweden Kiruna"
   case "KIV":
      return "Kishinev, Moldova Kishinev"
   case "KKJ":
      return "Kitakyushu, Japan - Kitakyushu Airport"
   case "YKF":
      return "Kitchener, Ontario, Canada Kitchener"
   case "KIT":
      return "Kithira Island, Greece - Kithira Airport"
   case "KTT":
      return "Kittila, Finland - Kittila Airport"
   case "KVL":
      return "Kivalina, Alaska, USA - Kivalina Airport"
   case "KLU":
      return "Klagenfurt, Austria Klagenfurt"
   case "LMT":
      return "Klamath Falls, OR, USA Kingsley Field Airport"
   case "KLW":
      return "Klawock, AK, USA"
   case "TYS":
      return "Knoxville, TN, USA Mcghee Tyson"
   case "KCZ":
      return "Kochi, Japan - Kochi Airport"
   case "ADQ":
      return "Kodiak, AK, USA"
   case "USM":
      return "Koh Samui, Thailand"
   case "KOK":
      return "Kokkola/Pietarsaari, Finland Kruunupyy"
   case "KLH":
      return "Kolhapur (Ujlaiwadi), Maharashtra, India - Kolhapur Airport"
   case "KGK":
      return "Koliganek, Alaska, USA - Koliganek Airport"
   case "CCU":
      return "Kolkata (Calcutta), India - Calcutta International Airport"
   case "KMQ":
      return "Komatsu, Japan - Komatsu Airport"
   case "KOA":
      return "Kona, HI, USA Keahole"
   case "KKH":
      return "Kongiganak, Alaska, USA - Kongiganak Airport"
   case "KYA":
      return "Konya, Turkey - Konya Airport"
   case "KRL":
      return "Korla, China - Korla"
   case "ROR":
      return "Koror, Palau Airai"
   case "KGS":
      return "Kos Island, Greece - Kos Airport"
   case "KSC":
      return "Kosice, Slovakia Barca"
   case "KSA":
      return "Kosrae, Caroline Islands, Micronesia"
   case "OSZ":
      return "Koszalin, Poland - Koszalin Airport"
   case "KBR":
      return "Kota Bharu, Malaysia Sultan Ismail Petra"
   case "BKI":
      return "Kota Kinabalu, Sabah, Malaysia Kota Kinabalu"
   case "OTZ":
      return "Kotzebue, AK, USA"
   case "KZI":
      return "Kozani, Macedonia, Greece - Kozani Airport"
   case "KBV":
      return "Krabi, Thailand - Krabi Airport"
   case "KRK":
      return "Krakow, Poland Balice"
   case "KRF":
      return "Kramfors, Sweden Kramfors"
   case "KRR":
      return "Krasnodar, Russia Krasnodar"
   case "KJA":
      return "Krasnojarsk, Russia"
   case "KRS":
      return "Kristiansand, Norway Kjevik"
   case "KID":
      return "Kristianstad, Sweden - Kristianstad Airport"
   case "KSU":
      return "Kristiansund, Norway Kvernberget"
   case "HLA":
      return "Krugersdorp, South Africa - Lanseria International Airport"
   case "KUL":
      return "Kuala Lumpur, Malaysia - KLIA Kuala Lumpur International"
   case "SZB":
      return "Kuala Lumpur - Subang, Malaysia"
   case "TGG":
      return "Kuala Terengganu, Malaysia Sultan Mahmood"
   case "KUA":
      return "Kuantan, Malaysia Padang Geroda"
   case "KCH":
      return "Kuching, Sarawak, Malaysia Kuching"
   case "KUD":
      return "Kudat, Malaysia - Kudat Airport"
   case "AKF":
      return "Kufrah, Libya"
   case "KUS":
      return "Kulusuk, Greenland Metropolitan Area"
   case "KMJ":
      return "Kumamoto, Japan Kumamoto"
   case "UEO":
      return "Kume Jima, Japan - Kume Jima Airport"
   case "KMG":
      return "Kunming, China Kunming"
   case "KUV":
      return "Kunsan, South Korea"
   case "KNX":
      return "Kununurra, Australia - Kununurra Airport"
   case "KUO":
      return "Kuopio, Finland Kuopio"
   case "KCA":
      return "Kuqa, China - Kuqa"
   case "KUH":
      return "Kushiro, Japan - Kushiro Airport"
   case "YVP":
      return "Kuujjuaq, Quebec, Canada Fort Chimo Airport"
   case "YGW":
      return "Kuujjuarapik, Quebec, Canada Kuujjuarapik"
   case "KAO":
      return "Kuusamo, Finland - Kuusamo Airport"
   case "KWI":
      return "Kuwait, Kuwait International"
   case "KWA":
      return "Kwajalein, Marshall Islands"
   case "KWJ":
      return "Kwangju, Republic of Korea - Kwangju Airport"
   case "LCE":
      return "La Ceiba, Honduras International"
   case "LCG":
      return "La Coruna, Spain La Coruna"
   case "LSE":
      return "La Crosse, WI, USA La Crosse Municipal"
   case "YGL":
      return "La Grande, Canada - La Grande Airport"
   case "LAP":
      return "La Paz, Baja California Sur, Mexico Aeropuerto General Marquez De Leon"
   case "LPB":
      return "La Paz, Bolivia El Alto"
   case "IRJ":
      return "La Rioja, Argentina - La Rioja Airport"
   case "LRH":
      return "La Rochelle, France Laleu"
   case "LRM":
      return "La Romana, Dominican Republic - La Romana-Casa De Campo Airport"
   case "YVC":
      return "La Ronge, Saskatchewan, Canada La Ronge"
   case "SSQ":
      return "La Sarre, Quebec, Canada"
   case "LSC":
      return "La Serena, Chile La Florida"
   case "YLQ":
      return "La Tuque, Quebec, Canada La Tuque"
   case "EUN":
      return "Laayoune, Morocco LaayouneHassan I Morocco"
   case "LBS":
      return "Labasa, Fiji - Labasa Airport"
   case "LBU":
      return "Labuan, Sabah, Malaysia"
   case "XEE":
      return "Lac Edouard, Quebec, Canada Lac Edouard / Via Rail Service"
   case "XEH":
      return "Ladysmith, British Columbia, Canada Ladysmith / Via Rail Service"
   case "LAE":
      return "Lae, Papua New Guinea - Lae-Nadzab Airport"
   case "LFT":
      return "Lafayette / New Iberia, LA, USA Municipal"
   case "LAF":
      return "Lafayette, IN, USA Purdue University Airport"
   case "LOS":
      return "Lagos, Nigeria Murtala Muhammed"
   case "LDU":
      return "Lahad Datu, Sabah, Malaysia Lahad Datu"
   case "LHE":
      return "Lahore, Pakistan Lahore"
   case "LCH":
      return "Lake Charles, LA, USA Municipal"
   case "YLC":
      return "Lake Harbour, Canada - Lake Harbour Airport"
   case "HII":
      return "Lake Havasu City, AZ, USA - Lake Havasu City Municipal Airport"
   case "LKE":
      return "Lake Union Sea Plane Base, Seattle, WA, USA"
   case "LKL":
      return "Lakselv, Norway - Banak"
   case "LLI":
      return "Lalibela, Ethiopia - Lalibela Airport"
   case "SUF":
      return "Lamezia-Terme, Italy - Lamezia-Terme Airport"
   case "LPT":
      return "Lampang, Thailand - Lampang Airport"
   case "LMP":
      return "Lampedusa Island, Italy - Lampedusa Airport"
   case "LNY":
      return "Lanai City, HI, USA Lanai"
   case "LNS":
      return "Lancaster, PA, USA Lancaster"
   case "XEJ":
      return "Langford, British Columbia, Canada Langford / Via Rail Service"
   case "LGK":
      return "Langkawi, Malaysia"
   case "LAI":
      return "Lannion, France - Lannion Airport"
   case "LAN":
      return "Lansing, MI, USA Capital City Airport"
   case "ACE":
      return "Lanzarote, Canary Islands, Spain Lanzarote"
   case "LHW":
      return "Lanzhou, China - Metropolitan Area"
   case "ZGC":
      return "Lanzhou, China - Zhongchuan-Lanzhou West Airport"
   case "LAO":
      return "Laoag, Philippines - Laoag Airport"
   case "LPP":
      return "Lappeenranta, Finland - Lappeenranta Airport"
   case "LAR":
      return "Laramie, WY, USA General Brees Field"
   case "LRD":
      return "Laredo, TX, USA International"
   case "LCA":
      return "Larnaca, Cyprus Intl"
   case "LRU":
      return "Las Cruces, NM, USA"
   case "LSP":
      return "Las Piedras, Venezuela Josefa Camejo"
   case "LAS":
      return "Las Vegas, NV, USA Mccarran International Airport"
   case "VGT":
      return "Las Vegas, NV, USA North Air Terminal"
   case "LBE":
      return "Latrobe, PA, USA Westmoreland County"
   case "LST":
      return "Launceston, Tasmania, Australia Launceston"
   case "PIB":
      return "Laurel, MS, USA Laurel Hattiesburg/Camp Shelby"
   case "NAN":
      return "Lautoka/Nadi, Fiji - International"
   case "LWY":
      return "Lawas, Sarawak, Malaysia Lawas"
   case "LAW":
      return "Lawton, OK, USA Municipal"
   case "LZC":
      return "Lazaro Cardenas, Michoacan, Mexico Na"
   case "LEH":
      return "Le Havre, France Le Havre"
   case "LEA":
      return "Learmonth, Western Australia, Australia"
   case "LEB":
      return "Lebanon/Hanover/White River, NH, USA Lebanon Regional"
   case "LBA":
      return "Leeds/Bradford, England, United Kingdom"
   case "PVK":
      return "Lefkas, Greece - Preveza-Lefkas Airport"
   case "LGP":
      return "Legaspi, Philippines Legaspi"
   case "IXL":
      return "Leh, India Leh"
   case "LEJ":
      return "Leipzig, Germany Leipzig"
   case "LKN":
      return "Leknes, Norway Leknes"
   case "LEN":
      return "Leon, Spain - Leon Airport"
   case "BJX":
      return "Leon/Guanajuato, Guanajuato, Mexico Del Bajio"
   case "LRS":
      return "Leros, Greece Leros"
   case "YQL":
      return "Lethbridge, Alberta, Canada Lethbridge Airport"
   case "LET":
      return "Leticia, Colombia Gen Av Cob0"
   case "KLL":
      return "Levelock, Alaska, USA - Levelock Airport"
   case "LWB":
      return "Lewisburg, WV, USA - Lewisburg-Greenbrier Valley Airport"
   case "LWS":
      return "Lewiston, ID, USA LewistonNez Perce Airport"
   case "LWT":
      return "Lewistown, MT, USA Municipal"
   case "LEX":
      return "Lexington, KY, USA Blue Grass Field"
   case "LXA":
      return "Lhasa, Tibet Autonomous Region, China - Lhasa"
   case "LYG":
      return "Lianyungang, China - Lianyungang"
   case "LBL":
      return "Liberal, KS, USA Glenn L Martin Terminal"
   case "LIR":
      return "Liberia, Costa Rica Liberia"
   case "LBV":
      return "Libreville, Gabon Libreville"
   case "LGG":
      return "Liege, Belgium Bierset"
   case "LIF":
      return "Lifou Island, New Caledonia - Lifou Airport"
   case "LJG":
      return "Lijiang, China - Lijiang City Airport"
   case "IXI":
      return "Lilabari, India Lilabari"
   case "LIL":
      return "Lille, France Lille-Lesquin Airport"
   case "LLW":
      return "Lilongwe, Malawi Kamuzu Intl"
   case "LIM":
      return "Lima, Peru Intl Jorge Chavez"
   case "LMN":
      return "Limbang, Sarawak, Malaysia Limbang"
   case "LIG":
      return "Limoges, France Bellegarde"
   case "LNJ":
      return "Lincang, China - Lincang"
   case "LNK":
      return "Lincoln, NE, USA Municipal Airport"
   case "LPI":
      return "Linkoping, Sweden Saab"
   case "LNZ":
      return "Linz, Austria Linz"
   case "LIS":
      return "Lisbon, Portugal Lisboa"
   case "LSY":
      return "Lismore, New South Wales, Australia Lismore"
   case "LIT":
      return "Little Rock, AR, USA Little Rock Regional Airport"
   case "LZH":
      return "Liuzhou, China - Liuzhou"
   case "LPL":
      return "Liverpool, England, United Kingdom Liverpool"
   case "LVI":
      return "Livingstone, Zambia Livingstone"
   case "LJU":
      return "Ljubljana, Slovenia Brnik"
   case "LFW":
      return "Lome, Togo Lome"
   case "LNV":
      return "Londolovit, Papua New Guinea Londolovit"
   case "LGW":
      return "London, England, United Kingdom Gatwick"
   case "LHR":
      return "London, England, United Kingdom Heathrow"
   case "LCY":
      return "London, England, United Kingdom London City"
   case "LTN":
      return "London, England, United Kingdom Luton International"
   case "STN":
      return "London, England, United Kingdom Stansted"
   case "YXU":
      return "London, Ontario, Canada - London Municipal"
   case "LDB":
      return "Londrina, Parana, Brazil - Londrina"
   case "LGB":
      return "Long Beach, CA, USA Long Beach Municipal Airport"
   case "LRE":
      return "Longreach, Australia - Longreach Airport"
   case "GGG":
      return "Longview/Gladewater/Kilgore, TX, USA Gregg County"
   case "LYR":
      return "Longyearbyen, Norway Svalbard"
   case "LDH":
      return "Lord Howe Island, Australia - Lord Howe Island Airport"
   case "LTO":
      return "Loreto, Baja California Sur, Mexico"
   case "LRT":
      return "Lorient, France LannBihoue"
   case "LAX":
      return "Los Angeles, CA, USA Los Angeles Intl Airport"
   case "LAX":
      return "Los Angeles, CA, USA Los Angeles Intl Airport"
   case "LSQ":
      return "Los Angeles, Chile Maria Dolores"
   case "LMM":
      return "Los Mochis, Sinaloa, Mexico"
   case "SDF":
      return "Louisville, KY, USA Standiford Field"
   case "LDE":
      return "Lourdes/Tarbes, France Tarbes International"
   case "LAD":
      return "Luanda, Angola Fevereiro"
   case "LBB":
      return "Lubbock, TX, USA Lubbock International Airport"
   case "LKO":
      return "Lucknow, India - Lucknow-Amausi Airport"
   case "LUD":
      return "Luderitz, Namibia Luderitz"
   case "LUG":
      return "Lugano, Switzerland Agno"
   case "VSG":
      return "Lugansk, Ukraine"
   case "LUA":
      return "Lukla, Nepal Lukla"
   case "LLA":
      return "Lulea, Sweden Kallax"
   case "LYA":
      return "Luoyang, China - Luoyang"
   case "LUN":
      return "Lusaka, Zambia Lusaka"
   case "LUX":
      return "Luxembourg, Luxembourg Findel"
   case "LUM":
      return "Luxi, China - Luxi"
   case "LXR":
      return "Luxor, Egypt Luxor"
   case "LZO":
      return "Luzhou, China - Luzhou"
   case "CRK":
      return "Luzon Is, Clark Field, Philippines"
   case "LWO":
      return "Lvov, Ukraine Snilow"
   case "LYB":
      return "Little Cayman, Cayman Islands - Little Cayman Airport"
   case "LCJ":
      return "Lodz, Poland - Lodz Airport"
   case "RJL":
      return "Logrono, Spain - Logrono Airport"
   case "LDY":
      return "Londonderry, Northern Ireland, United Kingdom - Londonderry Airport"
   case "LKH":
      return "Long Akah, Malaysia - Long Akah Airport"
   case "LBP":
      return "Long Banga, Malaysia - Long Banga Airport"
   case "LGL":
      return "Long Lellang, Malaysia - Long Lellang Airport"
   case "ODN":
      return "Long Seridan, Malaysia - Long Seridan Airport"
   case "LPS":
      return "Lopez Island, Washington, USA - Lopez Island Airport"
   case "SJD":
      return "Los Cabos, San Jose Del Cabo, Baja California Sur, Mexico - Los Cabos Intl Airport"
   case "LXG":
      return "Luang Namtha, Laos - Luang Namtha Airport"
   case "LPQ":
      return "Luang Prabang, Laos - Luang Prabang International Airport"
   case "LXR":
      return "Luxor, Egypt - Luxor"
   case "LYC":
      return "Lycksele, Sweden - Lycksele Airport"
   case "LYH":
      return "Lynchburg, VA, USA Municipal Airport"
   case "LYS":
      return "Lyon, France Satolas"
   case "MST":
      return "Maastricht, Netherlands ZuidLimburg"
   case "MCP":
      return "Macapa, Amapa, Brazil"
   case "MFM":
      return "Macau, Macau SAR, China"
   case "MCZ":
      return "Maceio, Brazil - Palmares Airport"
   case "MKY":
      return "Mackay, Queensland, Australia Mackay"
   case "MCN":
      return "Macon, GA, USA Lewis B Wilson"
   case "MAG":
      return "Madang, Papua New Guinea Madang"
   case "MED":
      return "Madinah, Saudi Arabia - Prince Mohammad Bin Abdulaziz"
   case "MSN":
      return "Madison, WI, USA Dane County Regional Airport"
   case "MAA":
      return "Madras (Chennai), India- Chenai-Meenambarkkam Airport"
   case "MAD":
      return "Madrid, Spain Barajas"
   case "IXM":
      return "Madurai, India Madurai"
   case "HGN":
      return "Mae Hong Son, Thailand Mae Hong Son"
   case "GDX":
      return "Magadan, Russia Magadan"
   case "SEZ":
      return "Mahe Island, Seychelles Mahe Island Seychelles Intl"
   case "MMO":
      return "Maio, Cape Verde - Maio Airport"
   case "MAJ":
      return "Majuro, Marshall Islands International"
   case "MQX":
      return "Makale, Ethiopia - Makale Airport"
   case "MZG":
      return "Makung, Taiwan Airport"
   case "AAM":
      return "Mala Mala Airport"
   case "SSG":
      return "Malabo, Equatorial Guinea Santa Isabel"
   case "AGP":
      return "Malaga, Spain Malaga"
   case "MLG":
      return "Malang, Indonesia"
   case "MLX":
      return "Malatya, Turkey - Malatya Airport"
   case "MLE":
      return "Male, Maldives Male International"
   case "HMA":
      return "Malmo, Sweden Malmo Harbour"
   case "JMM":
      return "Malmo, Sweden Malmo Harbour Heliport"
   case "MMX":
      return "Malmo, Sweden Sturup"
   case "PTF":
      return "Malololailai, Fiji Malololailai"
   case "MLA":
      return "Malta, Malta Luqa"
   case "MMH":
      return "Mammoth Lakes, CA, USA Mammoth Lakes Airport"
   case "MNF":
      return "Mana Island, Fiji - Mana Airport"
   case "MDC":
      return "Manado, Indonesia Samratulang"
   case "MGA":
      return "Managua, Nicaragua"
   case "MAO":
      return "Manaus, Amazonas, Brazil Eduardo Gomes"
   case "MAN":
      return "Manchester, England, United Kingdom International"
   case "MHT":
      return "Manchester, NH, USA Manchester"
   case "MDL":
      return "Mandalay, Myanmar (Burma) - Annisaton Airport"
   case "MXW":
      return "Mandalgovi, Dundgovi, Mongolia - Mandalgovi Airport"
   case "IXE":
      return "Mangalore, India Bajpe"
   case "MAY":
      return "Mangrove Cay, Bahamas"
   case "MHK":
      return "Manhattan, KS, USA Manhattan Municipal"
   case "MNL":
      return "Manila, Philippines Ninoy Aquino International"
   case "MBL":
      return "Manistee, MI, USA Manistee Blacker Airport"
   case "YTH":
      return "Manitoba-Thompson Airport, Manitoba, Canada - Manitoba-Thompson Airport"
   case "MZL":
      return "Manizales, Colombia Santaguida"
   case "MHG":
      return "Mannheim, Germany - Mannheim Airport"
   case "KMO":
      return "Manokotak, Alaska, USA - Manokotak Airport"
   case "MKW":
      return "Manokwari, Indonesia Rendani"
   case "MSE":
      return "Manston, Kent, United Kingdom - Kent International Airport"
   case "ZLO":
      return "Manzanillo, Colima, Mexico Aeropuerto International"
   case "MTS":
      return "Manzini, Swaziland - Manzini Airport"
   case "MXS":
      return "Maotoa, (Western) Samoa - Savaii Airport"
   case "MPM":
      return "Maputo, Mozambique Maputo International"
   case "MDQ":
      return "Mar Del Plata, Buenos Aires, Argentina"
   case "MAB":
      return "Maraba, Brazil - Maraba Airport"
   case "MAR":
      return "Maracaibo, Venezuela La Chinita"
   case "MTH":
      return "Marathon, FL, USA"
   case "YSP":
      return "Marathon, Ontario, Canada"
   case "MRK":
      return "Marco Island, FL, USA"
   case "MQM":
      return "Mardin, Turkey - Mardin Airport"
   case "MGH":
      return "Margate, South Africa - Margate Airport"
   case "MBX":
      return "Maribor Airport - Orehova Vas/Slivnica, Slovenia"
   case "MHQ":
      return "Mariehamn, Aland Island, Finland"
   case "MGF":
      return "Maringa, Brazil - Maringa Airport"
   case "MWA":
      return "Marion, IL, USA"
   case "MQT":
      return "Marquette, MI, USA Marquette County Airport"
   case "RAK":
      return "Marrakech, Morocco Menara"
   case "MRS":
      return "Marseille, France MarseilleProvence"
   case "MHH":
      return "Marsh Harbour, Bahamas"
   case "RMF":
      return "Marsa Alam, Egypt - Marsa Alam Airport"
   case "LMQ":
      return "Marsa Brega, Libya"
   case "MVY":
      return "Martha's Vineyard, MA, USA"
   case "MUR":
      return "Marudi, Malaysia - Marudi Airport"
   case "MSU":
      return "Maseru, Lesotho Maseru"
   case "MHD":
      return "Mashad, Iran - Mashad Airport"
   case "MCW":
      return "Mason City, IA, USA Mason City Municipal Airport"
   case "MSS":
      return "Massena, NY, USA"
   case "MAM":
      return "Matamoros, Tamaulipas, Mexico Servando Canales"
   case "AMI":
      return "Mataram, Indonesia Selaparang"
   case "MMJ":
      return "Matsumoto, Japan - Matsumoto Airport"
   case "MYJ":
      return "Matsuyama, Japan Matsuyama"
   case "MUN":
      return "Maturin, Venezuela"
   case "MUB":
      return "Maun, Botswana"
   case "MRU":
      return "Mauritius, Mauritius Plaisance"
   case "XID":
      return "Maxville, Ontario, Canada Maxville / Via Rail Service"
   case "MYG":
      return "Mayaguana, Bahamas - Mayaguana Airport"
   case "MAZ":
      return "Mayaguez, PR, USA El Maui"
   case "MZT":
      return "Mazatlan, Sinaloa, Mexico Buelna"
   case "MFE":
      return "Mc Allen/Mission, TX, USA"
   case "MCK":
      return "Mc Cook, NE, USA - Municipal"
   case "MCG":
      return "Mc Grath, AK, USA - Mc Grath"
   case "MES":
      return "Medan, Indonesia - Polonia"
   case "EOH":
      return "Medellin, Colombia - Enrique Olaya Herrera"
   case "MDE":
      return "Medellin, Colombia - Jose Maria Cordova/Metropolitan Area"
   case "MFR":
      return "Medford, OR, USA - Medford/Jackson County Airport"
   case "YXH":
      return "Medicine Hat, Alberta, Canada - Medicine Hat Airport"
   case "MED":
      return "Medinah, Saudi Arabia - Madinah Prince Mohammad Bin Abdulaziz"
   case "MEY":
      return "Meghauli, Nepal Meghauli"
   case "MEH":
      return "Mehamn, Norway - Mehamn Airport"
   case "MXZ":
      return "Meixian, China - Meixian"
   case "MKS":
      return "Mekane Selam, Ethiopia - Mekane Selam Airport"
   case "MYU":
      return "Mekoryuk, Alaska, USA - Mekoryuk Airport"
   case "MLB":
      return "Melbourne, FL, USA Melbourne International Airport"
   case "MEL":
      return "Melbourne, Victoria, Australia - Tullamarine"
   case "MLN":
      return "Melilla, Spain - Melilla Airport"
   case "XEK":
      return "Melville, Saskatchewan, Canada - Melville / Via Rail Service"
   case "MMB":
      return "Memanbetsu, Japan"
   case "MEM":
      return "Memphis, TN, USA Memphis International Airport"
   case "MDZ":
      return "Mendoza, Mendoza, Argentina - El Plumerillo"
   case "MNM":
      return "Menominee, MI, USA - Twin County Airport"
   case "MAH":
      return "Menorca, Spain - Aerop De Menorca"
   case "MCE":
      return "Merced, California - Merced Airport"
   case "MRD":
      return "Merida, Venezuela - Alberto Carnevalli"
   case "MID":
      return "Merida, Yucatan, Mexico - Merida Internationl"
   case "MEI":
      return "Meridian, MS, USA Key Field"
   case "MIM":
      return "Merimbula, Australia - Merimbula Airport"
   case "AZA":
      return "Mesa, Arizona, USA - Phoenix-Mesa Gateway Airport (formerly Williams Gateway Airport)"
   case "ETZ":
      return "Metz/Nancy, France Frescaty"
   case "MXL":
      return "Mexicali, Baja California, Mexico Rodolfo Sanchez Taboada"
   case "MEX":
      return "Mexico City, Distrito Federal, Mexico Juarez Intl Airport"
   case "MIA":
      return "Miami, FL, USA Miami International Airport"
   case "MPB":
      return "Miami, FL, USA Miami Public Seaplane Base"
   case "OPF":
      return "Miami, FL, USA Opa Locka"
   case "MBS":
      return "Midland / Bay City / Saginaw, MI, USA TriCity Airport"
   case "MAF":
      return "Midland/Odessa, TX, USA Midland Intl Airport"
   case "MYE":
      return "Mikake Jima, Japan - Mikake Jima Airport"
   case "JMK":
      return "Mikonos, Greece Mikonos"
   case "LIN":
      return "Milan, Italy Linate"
   case "MXP":
      return "Milan, Italy Malpensa"
   case "BGY":
      return "Milan, Italy Orio Al Serio"
   case "MQL":
      return "Mildura, Victoria, Australia Mildura"
   case "MLS":
      return "Miles City, MT, USA Miles City"
   case "MFN":
      return "Milford Sound, New Zealand"
   case "MLT":
      return "Millinocket, Maine, USA - Millinocket airport"
   case "MLO":
      return "Milos, Greece Milos"
   case "MKE":
      return "Milwaukee, WI, USA General Mitchell Field"
   case "MTT":
      return "Minatitlan, Mexico - Minatitlan Airport"
   case "MSP":
      return "Minneapolis, MN, USA Minneapolis/St Paul Intl Airport"
   case "MOT":
      return "Minot, ND, USA Minot International Airport"
   case "MRV":
      return "Min Vody, Russia - Min Vody Airport"
   case "MSQ":
      return "Minsk, Belarus Minsk"
   case "MYY":
      return "Miri, Sarawak, Malaysia Miri"
   case "MSJ":
      return "Misawa, Japan"
   case "MCQ":
      return "Miskolc, Hungary - Miskolc Airport"
   case "MSO":
      return "Missoula, MT, USA Missoula International"
   case "MRA":
      return "Misurata, Libya"
   case "KMI":
      return "Miyazaki, Japan Miyazaki"
   case "MMY":
      return "Miyako Jima, Japan - Miyako Jima Airport"
   case "MTF":
      return "Mizan Teferi, Ethiopia - Mizan Teferi Airport"
   case "MBD":
      return "Mmabatho, South Africa - Mmabatho Airport"
   case "MQN":
      return "Mo I Rana, Norway Rossvoll"
   case "CNY":
      return "Moab, UT, USA"
   case "MOB":
      return "Mobile, AL, USA Mobile Municipal"
   case "MOD":
      return "Modesto, CA, USA Harry Sham Feild"
   case "MGL":
      return "Moenchengladbach, Germany - Moenchengladbach Airport"
   case "MGQ":
      return "Mogadishu, Somalia"
   case "NWA":
      return "Moheli, Comoros"
   case "MJD":
      return "Mohenjodaro, Pakistan - Mohenjodaro Airport"
   case "MPK":
      return "Mokpo, Republic of Korea - Mokpo Airport"
   case "MOL":
      return "Molde, Norway Aro"
   case "MLI":
      return "Moline, IL, USA Quad City Airport"
   case "MBA":
      return "Mombasa, Kenya Moi International"
   case "MIR":
      return "Monastir, Tunisia Skanes"
   case "MBE":
      return "Monbetsu, Japan - Monbetsu Airport"
   case "LOV":
      return "Monclova, Coahuila, Mexico Monclova Airport"
   case "YQM":
      return "Moncton, New Brunswick, Canada - Greater Moncton International Airport"
   case "MLU":
      return "Monroe, LA, USA"
   case "ROB":
      return "Monrovia, Liberia - Roberts International Airport"
   case "MLW":
      return "Monrovia, Liberia - Spriggs Payne Airport"
   case "YYY":
      return "Mont Joli, Quebec, Canada"
   case "MCM":
      return "Monte Carlo, Monaco Hel De Monte Carlo"
   case "MEU":
      return "Monte Dourado, Brazil - Monte Dourado Airport"
   case "MBJ":
      return "Montego Bay, Jamaica Sangster"
   case "MRY":
      return "Monterey / Carmel, CA, USA Monterey Peninsula Airport"
   case "MTY":
      return "Monterrey, Nuevo Leon, Mexico Escobedo"
   case "MOC":
      return "Montes Claros, Brazil - Montes Claros Airport"
   case "MVD":
      return "Montevideo, Uruguay Carrasco"
   case "MGM":
      return "Montgomery, AL, USA Dannelly Field"
   case "MPL":
      return "Montpellier, France Frejorgues"
   case "YMQ":
      return "Montreal, QC (Quebec), Canada"
   case "YMX":
      return "Montreal - Mirabel, Quebec, Canada"
   case "YUL":
      return "Montreal - Dorval, Quebec, Canada - Montreal?Pierre Elliott Trudeau International Airport"
   case "YHU":
      return "Montreal, Canada - St. Hubert Airport"
   case "MTJ":
      return "Montrose, CO, USA Montrose County Airport"
   case "MNI":
      return "Montserrat, Montserrat - Blackburne"
   case "MOZ":
      return "Moorea Island, French Polynesia - Temae Airport"
   case "YMO":
      return "Moosonee, Ontario, Canada - Moosonee"
   case "MRZ":
      return "Moree, Australia - Moree Airport"
   case "MLM":
      return "Morelia, Michoacan, Mexico Municipal"
   case "MGW":
      return "Morgantown, WV, USA Morgantown Municipal Airport"
   case "HNA":
      return "Morioka, Japan Hanamaki"
   case "ONG":
      return "Mornington, Queensland, Australia Mornington Is"
   case "MXV":
      return "Moron, Khovsgol, Mongolia - Moron Airport"
   case "HAH":
      return "Moroni (Hahaya), Comoros"
   case "YVA":
      return "Moroni (Hahaya/Iconi)Comoros"
   case "MMU":
      return "Morristown, NJ, USA Morristown"
   case "MYA":
      return "Moruya, New South Wales, Australia Moruya"
   case "MOW":
      return "Moscow, Russia"
   case "DME":
      return "Moscow, Russia - Domodedovo"
   case "SVO":
      return "Moscow, Russia - Sheremetyevo"
   case "VKO":
      return "Moscow, Russia - Vnukovo"
   case "MWH":
      return "Moses Lake, Washington, USA - Grant County Airport"
   case "JRO":
      return "Moshi, Tanzania - Kilimanjaro Airport"
   case "CWA":
      return "Mosinee/Wausau, WI, USA - Central Wisconsin Airport"
   case "MJF":
      return "Mosjoen, Norway - Kjaerstad Airport"
   case "MGB":
      return "Mount Gambier, Australia - Mt Gambier Airport"
   case "HGU":
      return "Mount Hagen, Papua New Guinea - Kagamuga Airport"
   case "LLY":
      return "Mount Holly, NJ, USA Mt Holly"
   case "MHU":
      return "Mount Hotham, Australia - Mt Hotham Airport"
   case "ISA":
      return "Mount Isa, Australia - Mt Isa Airport"
   case "MPN":
      return "Mount Pleasant, Falkland Islands (Islas Malvinas) - Mounr Pleasant Airport"
   case "TPR":
      return "Mount Tom Price, Australia - Mt Tom Price Airport"
   case "MVN":
      return "Mount Vernon, IL, USA Mount Vernon Outland Airport"
   case "WMH":
      return "Mountain Home, AR, USA"
   case "MPA":
      return "Mpacha, Namibia"
   case "ODY":
      return "Muang Xay, Laos - Oudomsay Airport"
   case "MDG":
      return "Mudanjiang, China - Mudanjiang"
   case "FMO":
      return "Muenster, Germany Muenster"
   case "MKM":
      return "Mukah, Sarawak, Malaysia"
   case "MLH":
      return "Mulhouse, France - Basel-Mulhouse Euro Airport"
   case "MUX":
      return "Multan, Pakistan - Multan Airport"
   case "MZV":
      return "Mulu, Malaysia Mulu Airport"
   case "BOM":
      return "Mumbai (Bombay), India - Mumbai"
   case "MIE":
      return "Muncie, IN, USA Delaware County Airport"
   case "MUC":
      return "Munich, Germany Franz Josef Strauss"
   case "MIG":
      return "Munich, Germany - Neubiberg Air Base Airport"
   case "MJV":
      return "Murcia, Spain San Javier"
   case "MMK":
      return "Murmansk, Russia Murmansk"
   case "QMQ":
      return "Murzuq (Marzuq), Libya"
   case "MSR":
      return "Mus, Turkey - Mus Airport"
   case "MCT":
      return "Muscat, Oman Seeb"
   case "MSL":
      return "Muscle Shoals / Florence / Sheffield, AL, USA Muscle Shoals"
   case "MKG":
      return "Muskegon, MI, USA Muskegon County Intl Airport"
   case "MQS":
      return "Mustique, Saint Vincent and The Grenadines - Mustique Airport"
   case "MWZ":
      return "Mwanza, Tanzania - Mwanza Airport"
   case "MYR":
      return "Myrtle Beach, SC, USA"
   case "MJT":
      return "Mytilene, Greece Mytilene"
   case "NDJ":
      return "N Djamena, Chad N'djamena"
   case "NAN":
      return "Nadi, Fiji International"
   case "NDR":
      return "Nador, Morocco - Nador Airport"
   case "WNP":
      return "Naga, Philippines - Naga Airport"
   case "NGS":
      return "Nagasaki, Japan Nagasaki"
   case "NGO":
      return "Nagoya, Japan - Chubu Centrair International Airport"
   case "NKM":
      return "Nagoya/Komaki, Japan - Nagoya Airfield"
   case "NAG":
      return "Nagpur, India Sonegaon"
   case "NAH":
      return "Naha, Indonesia"
   case "NBO":
      return "Nairobi, Kenya Jomo Kenyatta Internatonal"
   case "WIL":
      return "Nairobi, Kenya Wilson Arpt"
   case "SHB":
      return "Nakashibetsu, Japan - Nakashibetsu Airport"
   case "NAK":
      return "Nakhon Ratchasima, Thailand Nakhon Ratchasima"
   case "NST":
      return "Nakhon Si Thammarat, Thailand - Nakhon Si Thammarat Airport"
   case "NMA":
      return "Namangan, Uzbekistan - Namangan Airport"
   case "APL":
      return "NampulaMozambique"
   case "ZNA":
      return "Nanaimo, British Columbia, Canada"
   case "YCD":
      return "Nanaimo, British Columbia, Canada Cassidy Airport"
   case "KHN":
      return "Nanchang, China - Nanchang"
   case "YSR":
      return "Nanisivik, Canada - Nanisivik Airport"
   case "NKG":
      return "Nanjing, China"
   case "NNY":
      return "Nanyang, China - Nanyang"
   case "SHM":
      return "Nanki Shirahama, Japan - Nanki-Shirahama Airport"
   case "NNG":
      return "Nanning, China"
   case "NTE":
      return "Nantes, France NantesChateau Bougon"
   case "NTG":
      return "Nantong, China - Nantong"
   case "ACK":
      return "Nantucket, MA, USA"
   case "WNA":
      return "Napakiak, AK, USA Napakiak"
   case "NPE":
      return "Napier-Hastings, New Zealand - Napier-Hawkes Bay Airport"
   case "APF":
      return "Naples, FL, USA"
   case "NAP":
      return "Naples, Italy Capodichino"
   case "NAA":
      return "Narrabri, Australia - Narrabri Airport"
   case "NRA":
      return "Narrandera, Australia - Narrandera Airport"
   case "UAK":
      return "Narsarsuaq, Greenland Narssarssuaq"
   case "JNS":
      return "Narssaq, Greenland"
   case "NNM":
      return "Naryan-Mar, Russia - Naryan-Mar Airport"
   case "BNA":
      return "Nashville, TN, USA Nashville Metropolitan Airport"
   case "NAS":
      return "Nassau, Bahamas Nassau International Airport"
   case "PID":
      return "Nassau, Bahamas Paradise Island"
   case "NAT":
      return "Natal, Rio Grande Do Norte, Brazil Agusto Severo"
   case "YNA":
      return "Natashquan, Canada - Natashquan Airport"
   case "INU":
      return "Nauru, Nauru"
   case "NVT":
      return "Navegantes, Santa Catarina, Brazil"
   case "JNX":
      return "Naxos, Cyclades Islands, Greece Naxos Airport"
   case "NLA":
      return "Ndola, Zambia Ndola"
   case "NEC":
      return "Necochea, Buenos Aires, Argentina Necochea"
   case "EAM":
      return "Nejran, Saudi Arabia - Nejran Airport"
   case "NSN":
      return "Nelson, New Zealand Nelson"
   case "NLG":
      return "Nelson Lagoon, Alaska, USA - Nelson Lagoon Airport"
   case "NLP":
      return "Nelspruit, South Africa"
   case "MQP":
      return "Nelspruit, South Africa - Kruger Mpumalanga Airport"
   case "NER":
      return "Neryungri, Russia - Neryungri Airport"
   case "KEP":
      return "Nepalganj, Nepal Nepalganj"
   case "NQN":
      return "Neuquen, Argentina - Airport"
   case "NEV":
      return "Nevis, Leeward Islands, Saint Kitts And Nevis"
   case "EWB":
      return "New Bedford/Fall River, MA, USA New Bedford Municipal"
   case "EWN":
      return "New Bern, NC, USA SimmonsNott Airport"
   case "XEL":
      return "New Carlisle, Quebec, Canada New Carlisle / Via Rail Service"
   case "HVN":
      return "New Haven, CT, USA Tweed New Haven"
   case "MSY":
      return "New Orleans, LA, USA - Louis Armstrong New Orleans International Airport (Moisant International Airport)"
   case "NPL":
      return "New Plymouth, New Zealand New Plymouth"
   case "XEM":
      return "New Richmond, Quebec, Canada New Richmond / Via Rail Service"
   case "KNW":
      return "New Stuyahok, Alaska, USA - New Stuyahok Airport"
   case "JRA":
      return "New York City, NY, USA"
   case "TSS":
      return "New York, NY, USA East 34Th Street Heliport"
   case "JFK":
      return "New York, NY, USA John F Kennedy Intl Airport"
   case "LGA":
      return "New York, NY, USA Laguardia"
   case "EWR":
      return "Newark, NJ, USA Newark International Airport"
   case "SWF":
      return "Newburgh/Poughkeepsie, NY, USA Stewart"
   case "NCL":
      return "Newcastle, England, United Kingdom International"
   case "XEY":
      return "Newcastle, New Brunswick, Canada Newcastle / Via Rail Service"
   case "BEO":
      return "Newcastle, New South Wales, Australia Belmont"
   case "NTL":
      return "Newcastle, New South Wales, Australia Williamtown"
   case "ZNE":
      return "Newman, Western Australia, Australia Newman"
   case "PHF":
      return "Newport News/Williamsburg/Hampton, VA, USA Patrick Henry Intl"
   case "NQY":
      return "Newquay, England, United Kingdom Newquay Civil"
   case "WWT":
      return "Newtok, Alaska, USA - Newtok Airport"
   case "NHA":
      return "Nha-Trang, Vietnam - Nha-Trang Airport"
   case "XLV":
      return "Niagara Falls, Ontario, Canada"
   case "NIM":
      return "Niamey, Niger - Niamey Airport"
   case "NCE":
      return "Nice, France Cote D'azur"
   case "NME":
      return "Nightmute, Alaska, USA - Nightmute Airport"
   case "KIJ":
      return "Niigata, Japan - Niigata Airport"
   case "IKO":
      return "Nikolski, Alaska, USA - Nikolski Airport"
   case "FNI":
      return "Nimes, France - Nimes Airport"
   case "NGB":
      return "Ningbo, China - Ningbo"
   case "NIX":
      return "Nioro, Mali - Nioro Airport"
   case "NFO":
      return "Niuafo'Ou, Tonga - Niuafo-ou Airport"
   case "NTT":
      return "Niuatoputapu, Tonga - Niuatoputapu Airport"
   case "IUE":
      return "Niue, Niue - Niue Airport"
   case "NJC":
      return "Nizhnevartovsk, Russia Nizhnevartovsk"
   case "GOJ":
      return "Nizhniy Novgorod, Russia Nizhniy"
   case "OME":
      return "Nome, AK, USA"
   case "OFK":
      return "Norfolk, NE, USA Karl Stefan Memorial Airport"
   case "ORF":
      return "Norfolk, VA, USA Norfolk International Airport"
   case "NLK":
      return "Norfolk Island, Australia - Norfolk Island Airport"
   case "NSK":
      return "Norilsk, Russia - Norilsk Airport"
   case "NRK":
      return "Norrkoping, Sweden - Kungsangen Airport"
   case "YYB":
      return "North Bay, Ontario, Canada Jack Garland Airport"
   case "OTH":
      return "North Bend, OR, USA"
   case "NCA":
      return "North Caicos, Turks And Caicos Islands"
   case "ELH":
      return "North Eleuthera, Bahamas"
   case "LBF":
      return "North Platte, NE, USA Lee Bird Field"
   case "NWI":
      return "Norwich, England, United Kingdom Norwich"
   case "OWD":
      return "Norwood, MA, USA Memorial Code: Owd"
   case "NKC":
      return "Nouakchott, Mauritania Nouakchott"
   case "GEA":
      return "Noumea, New Caledonia - Magenta Airport"
   case "NOU":
      return "Noumea, New Caledonia - Tontouta"
   case "OVB":
      return "Novosibirsk, Russia Tolmachevo"
   case "NUX":
      return "Novy Urengoy, Russia - Novy Urengoy Airport"
   case "NLD":
      return "Nuevo Laredo, Tamaulipas, Mexico"
   case "TBU":
      return "Nuku Alofa/Tongatapu, Tonga - International"
   case "NCU":
      return "Nukus, Uzbekistan - Nukus Airport"
   case "NUE":
      return "Nuremberg, Germany Nuremberg"
   case "GOH":
      return "Nuuk, Greenland"
   case "NYU":
      return "Nyaung-U, Myanmar (Burma) - Nyaung-U Airport"
   case "ODW":
      return "Oak Harbor, WA, USA"
   case "OAK":
      return "Oakland, CA, USA Metropolitan Oakland Intl Apt"
   case "XOK":
      return "Oakville, Ontario, Canada Oakville / Via Rail Service"
   case "OAX":
      return "Oaxaca, Oaxaca, Mexico Xoxocotlan"
   case "OBO":
      return "Obihiro, Japan Obihiro"
   case "OCJ":
      return "Ochos Rios, Jamaica - Ochos Rios Airport"
   case "ONJ":
      return "Odate Noshiro, Japan - Odate Noshiro Airport"
   case "ODE":
      return "Odense, Denmark Odense"
   case "ODS":
      return "Odessa, Ukraine Central"
   case "OGS":
      return "Ogdensburg, NY, USA"
   case "OHD":
      return "Ohrid, Macedonia Ohrid"
   case "OIT":
      return "Oita, Japan Oita"
   case "VPS":
      return "Okaloosa County/Valparaiso, FL, USA - Fort Walton Beach/Okaloosa County Regional Airport"
   case "OKJ":
      return "Okayama, Japan Okayama"
   case "OKA":
      return "Okinawa, Ryukyu Islands, Japan Naha Field"
   case "OKC":
      return "Oklahoma City, OK, USA Will Rogers World Airport"
   case "OLB":
      return "Olbia, Italy - Costa Smeralda"
   case "ULG":
      return "Olgii, Bayan Olgii, Mongolia - Olgii Airport"
   case "OLM":
      return "Olympia, WA, USA"
   case "OLP":
      return "Olympic Dam, Australia - Olympic Dam Airport"
   case "OMA":
      return "Omaha, NE, USA Eppley Airfield"
   case "OMS":
      return "Omsk, Russia - Omsk Airport"
   case "UNR":
      return "Ondorkhaan, Khentii, Mongolia - Ondorkhaan Airport"
   case "ONT":
      return "Ontario, CA, USA Ontario International"
   case "OMR":
      return "Oradea, Romania Oradea"
   case "ORN":
      return "Oran, Algeria Es Senia"
   case "OAG":
      return "Orange, New South Wales, Australia Springhill"
   case "ORB":
      return "Orebro, Sweden Orebro"
   case "MBX":
      return "Orehova Vas/Slivnica, Slovenia - Maribor Airport"
   case "ORL":
      return "Orlando, FL, USA Herndon"
   case "MCO":
      return "Orlando, FL, USA Orlando International Airport"
   case "SFB":
      return "Orlando, FL, USA - Sanford Central Florida Regional Airport"
   case "OER":
      return "Ornskoldsvik, Sweden - Ornskoldsvik Airport"
   case "ITM":
      return "Osaka, Japan Itami International Was Osaka"
   case "KIX":
      return "Osaka, Japan Kansai International"
   case "OSA":
      return "Osaka, Japan Osaka International"
   case "YOO":
      return "Oshawa, Ontario, Canada"
   case "OIM":
      return "Oshima, Japan - Oshima Airport"
   case "OSH":
      return "Oshkosh, WI, USA Wittman Field"
   case "OSL":
      return "Oslo, Norway"
   case "ZOS":
      return "Osorno, Chile - Osorno Airport"
   case "OST":
      return "Ostend, Belgium - Ostend/Bruges International Airport"
   case "OSD":
      return "Ostersund, Sweden Froesoe"
   case "OSR":
      return "Ostrava, Czech Republic - Ostrava-Mosnov Airport"
   case "YOW":
      return "Ottawa, Ontario, Canada Ottawa International"
   case "OTM":
      return "Ottumwa, IA, USA Ottumwa Industrial Airport"
   case "OUA":
      return "Ouagadougou, Burkina Faso Ouagadougou"
   case "OZZ":
      return "Ouarzazate, Morocco Ouarzazate"
   case "OUD":
      return "Oujda, Morocco - Oujda-Les Angades Airport"
   case "OUL":
      return "Oulu, Finland Oulu"
   case "VDA":
      return "Ovda, Israel"
   case "OVD":
      return "Oviedo/Asturias, Spain - Oviedo Airport"
   case "OWB":
      return "Owensboro, KY, USA"
   case "OXR":
      return "Oxnard / Ventura, CA, USA Oxnard Airport"
   case "PDG":
      return "Padang, Indonesia Tabing"
   case "PAD":
      return "Paderborn, Germany Paderborn"
   case "PAH":
      return "Paducah, KY, USA"
   case "PGA":
      return "Page, AZ, USA"
   case "PPG":
      return "Pago Pago, American Samoa International"
   case "PKZ":
      return "Pakse, Laos - Pakse International Airport"
   case "YIF":
      return "Pakuashipi, Canada - Pakuashipi Airport"
   case "PLQ":
      return "Palanga, Lithuania Palanga"
   case "PLM":
      return "Palembang, Indonesia Sultan Mahmud Badaruddin Ii"
   case "PMO":
      return "Palermo, Sicily, Italy Punta Raisi"
   case "PBI":
      return "Palm Beach/West Palm Beach, FL, USA Palm Beach International Airport"
   case "PSP":
      return "Palm Springs, CA, USA Palm Springs Municipal"
   case "PMI":
      return "Palma Mallorca, Mallorca Island, Spain Palma Mallorca"
   case "PMW":
      return "Palmas, Brazil - Palmas Airport"
   case "PMD":
      return "Palmdale, CA, USA Air Force 42"
   case "PMR":
      return "Palmerston North, New Zealand Palmerstown North"
   case "PAO":
      return "Palo Alto, California, United States - Palo Alto of Santa Clara County Airport"
   case "PLW":
      return "Palu, Indonesia Mutiara"
   case "PNA":
      return "Pamplona, Spain Pamplona Noain"
   case "PFN":
      return "Panama City, FL, USA - Bay County Airport"
   case "PAC":
      return "Panama City, Panama - Paitilla Airport"
   case "PTY":
      return "Panama City, Panama Tocumen International Airport"
   case "PAM":
      return "Panama City, Florida, USA - Tyndall AFB-Panama City Airport"
   case "YXP":
      return "Pangnirtung, Canada - Pangnirtung Airport"
   case "PJG":
      return "Panjgur, Pakistan"
   case "PNL":
      return "Pantelleria, Italy Pantelleria"
   case "PPT":
      return "Papeete, French Polynesia Intl TahitiFaaa"
   case "PFO":
      return "Paphos, Cyprus International"
   case "PBO":
      return "Paraburdoo, Western Australia, Australia Paraburdoo"
   case "PBM":
      return "Paramaribo, Suriname Zanderij Intl"
   case "XFE":
      return "Parent, Quebec, Canada Parent / Via Rail Service"
   case "PAR":
      return "Paris, France"
   case "CDG":
      return "Paris, France Charles De Gaulle"
   case "JDP":
      return "Paris, France Issy Les Moulineaux"
   case "LBG":
      return "Paris, France - Le Bourget Airport"
   case "ORY":
      return "Paris, France Orly"
   case "PKB":
      return "Parkersburg / Marietta, WV, USA Wood County"
   case "PKE":
      return "Parkes, New South Wales, Australia Parkes"
   case "XPB":
      return "Parksville, British Columbia, Canada Parksville / Via Rail Service"
   case "PMF":
      return "Parma, Italy - Parma Airport"
   case "PAS":
      return "Paros, Greece Paros Community"
   case "PSC":
      return "Pasco, Washington, USA - Pasco Airport"
   case "IXT":
      return "Pasighat, India Pasighat"
   case "PSI":
      return "Pasni, Pakistan - Pasni Airport"
   case "PFB":
      return "Passo Fundo, Brazil - Passo Fundo Airport"
   case "PSO":
      return "Pasto, Colombia Cano"
   case "IXP":
      return "Pathankot, India Pathankot"
   case "PAT":
      return "Patna, India Patna"
   case "PUF":
      return "Pau, France Pau-Uzein- Pyrenees Airport"
   case "YPE":
      return "Peace River, Alberta, Canada Peace River"
   case "PKU":
      return "Pekanbaru, Indonesia Simpang Tiga"
   case "PLN":
      return "Pellston, MI, USA Pellston Regional Airport"
   case "YBB":
      return "Pelly Bay, Canada - Townsite Airport"
   case "YTA":
      return "Pembroke, Ontario, Canada Pem And Area Apt"
   case "PEN":
      return "Penang, Malaysia Penang International"
   case "YPT":
      return "Pender Harbor, Canada - Pender Harbor Airport"
   case "PDT":
      return "Pendleton, OR, USA"
   case "PNS":
      return "Pensacola, FL, USA"
   case "YYF":
      return "Penticton, British Columbia, Canada"
   case "PZE":
      return "Penzance, England, United Kingdom Penzance"
   case "PIA":
      return "Peoria, IL, USA Greater Peoria Airport"
   case "XFG":
      return "Perce, Quebec, Canada Perce / Via Rail Service"
   case "PEI":
      return "Pereira, Colombia Matecana"
   case "PGX":
      return "Perigueux, France"
   case "PEE":
      return "Perm, Russia Perm"
   case "KPV":
      return "Perryville, Alaska, USA - Perryville Airport"
   case "PGF":
      return "Perpignan, France Llabanere"
   case "PER":
      return "Perth, Western Australia, Australia Perth"
   case "PEG":
      return "Perugia, Italy Na"
   case "PSR":
      return "Pescara, Italy Liberi"
   case "PEW":
      return "Peshawar, Pakistan Peshawar"
   case "PSG":
      return "Petersburg, AK, USA Municipal"
   case "PNZ":
      return "Petrolina, Brazil - Petrolina International Airport"
   case "PKC":
      return "Petropavlovsk, Russia Petropavlovsk Kamchatsky Airport"
   case "PES":
      return "Petrozavodsk, Russia Petrozavodsk-Kamchatsky Airport"
   case "PHW":
      return "Phalaborwa, South Africa - Phalaborwa Airport"
   case "PHL":
      return "Philadelphia, PA, USA Philadelphia International Airport"
   case "PHS":
      return "Phitsanulok, Thailand"
   case "PNH":
      return "Phnom Penh, Cambodia Pochentong"
   case "PHX":
      return "Phoenix, AZ, USA Sky Harbor International Airport"
   case "AZA":
      return "Phoenix/Messa, Arizona, USA - Phoenix-Mesa Gateway Airport (formerly Williams Gateway Airport)"
   case "XKH":
      return "Phonsavan, Laos - Xieng Khouang Airport"
   case "HKT":
      return "Phuket, Thailand Phuket"
   case "PQC":
      return "Phuquoc, Vietnam - Phuquoc Airport"
   case "PDS":
      return "Piedras Negras, Mexico - Piedras Negras Airport"
   case "PIR":
      return "Pierre, SD, USA Pierre Municipal Airport"
   case "PTG":
      return "Pietersburg, South Africa"
   case "PZB":
      return "Pietermaritzburg, South Africa - Pietermaritzburg Airport"
   case "PIW":
      return "Pikwitonei, Manitoba, Canada"
   case "PIP":
      return "Pilot Point, Alaska, USA - Pilot Point Airport"
   case "UGB":
      return "Pilot Point, Alaska, USA - Ugashik Bay Airport"
   case "PSA":
      return "Pisa, Italy G Galilei"
   case "AGC":
      return "Pittsburgh/Allegheny County, PA, USA"
   case "PIT":
      return "Pittsburgh, PA, USA Greater Pit Intnl Airport"
   case "THU":
      return "Pituffik, Greenland Thule Airport"
   case "PIU":
      return "Piura, Peru - Piura Airport"
   case "PTU":
      return "Platinum, Alaska, USA - Platinum Airport"
   case "PLB":
      return "Plattsburgh, NY, USA"
   case "PXU":
      return "Pleiku, Vietnam - Pleiku Airport"
   case "PLH":
      return "Plymouth, England, United Kingdom Plymouth Airport"
   case "PIH":
      return "Pocatello, ID, USA"
   case "TGD":
      return "Podgorica, Yugoslavia Golubovci"
   case "KPO":
      return "Pohang, South Korea Na"
   case "PNI":
      return "Pohnpei, Caroline Islands, Micronesia Pohnpei International"
   case "PHO":
      return "Point Hope, AK, USA Point Hope"
   case "PTP":
      return "Pointe A Pitre, Guadeloupe Le Raizet"
   case "PNR":
      return "Pointe Noire, Congo Pointe Noire"
   case "XPX":
      return "PointeAuxTrembles, Quebec, Canada Pointe Aux Trembles / Via Rail Service"
   case "PIS":
      return "Poitiers, France - Poitiers-Biard Airport"
   case "PKR":
      return "Pokhara, Nepal Pokhara"
   case "PNC":
      return "Ponca City, OK, USA"
   case "PSE":
      return "Ponce, PR, USA Mercedita"
   case "YIO":
      return "Pond Inlet, Canada - Pond Inlet Airport"
   case "PDL":
      return "Ponta Delgada, Azores Islands, Portugal Nordela"
   case "PNK":
      return "Pontianak, Indonesia Supadio"
   case "PNQ":
      return "Poona, India Lohegaon Poona"
   case "TAT":
      return "Poprad, Slovakia - Tatry/Poprad"
   case "PBD":
      return "Porbandar, India - Porbandar Airport"
   case "POR":
      return "Pori, Finland Pori"
   case "PMV":
      return "Porlamar, Venezuela Gral Santiago Marino"
   case "CLM":
      return "Port Angeles, WA, USA Wm Fairchild Intl Airport"
   case "PAP":
      return "Port Au Prince, Haiti Mais Gate"
   case "IXZ":
      return "Port Blair, India Port Blair"
   case "PLZ":
      return "Port Elizabeth, South Africa Hf Verwoerd"
   case "BQU":
      return "Port Elizabeth, Saint Vincent and the Grenadines - Port Elizabeth Airport"
   case "POG":
      return "Port Gentil, Gabon Port Gentil"
   case "PHC":
      return "Port Harcourt, Nigeria - Port Harcourt Airport"
   case "YZT":
      return "Port Hardy, British Columbia, Canada Port Hardy Airport"
   case "PHE":
      return "Port Hedland, Western Australia, Australia - Pt Hedlan"
   case "PTH":
      return "Port Heiden, Alaska, USA - Port Heiden Airport"
   case "PLO":
      return "Port Lincoln, South Australia, Australia - Pt Lincoln"
   case "PQQ":
      return "Port Macquarie, New South Wales, Australia - Pt Macquarie"
   case "YMP":
      return "Port Mcneil, Canada - Port Mcneil Airport"
   case "PML":
      return "Port Moller, Alaska, USA - Port Moller Airport"
   case "POM":
      return "Port Moresby, Papua New Guinea Jackson"
   case "POS":
      return "Port Of Spain, Trinidad, Trinidad And Tobago Piarco International Airport"
   case "VLI":
      return "Port Vila, Vanuatu Bauerfield"
   case "PCA":
      return "Portage Creek, Alaska, USA - Portage Creek Airport"
   case "PTJ":
      return "Portland, Australia - Portland Airport"
   case "PWM":
      return "Portland, ME, USA Portland International Jetport"
   case "PDX":
      return "Portland, OR, USA Portland International Airport"
   case "OPO":
      return "Porto, Portugal Porto"
   case "POA":
      return "Porto Alegre, Rio Grande Do Sul, Brazil Salgado Filho"
   case "PXO":
      return "Porto Santo, Madeira Islands, Portugal Porto Santo"
   case "BPS":
      return "Porto Seguro, Bahia, Brazil Porto Seguro"
   case "PVH":
      return "Porto Velho, Brazil - Belmonte Airport"
   case "PSM":
      return "Portsmouth, NH, USA Pease Intl Tradeport"
   case "PSS":
      return "Posadas, Argentina - Posadas Airport"
   case "POU":
      return "Poughkeepsie, NY, USA Dutchess County"
   case "YPX":
      return "Povungnituk, Canada - Poungnituk Airport"
   case "YPW":
      return "Powell River, British Columbia, Canada"
   case "PAZ":
      return "Poza Rica, Veracruz, Mexico"
   case "POZ":
      return "Poznan, Poland Lawica"
   case "PRG":
      return "Prague, Czech Republic Ruzyne"
   case "RAI":
      return "Praia, Cape Verde - Mendes Airport"
   case "PRI":
      return "Praslin Island, Seychelles"
   case "PRC":
      return "Prescott, AZ, USA"
   case "PQI":
      return "Presque Isle, ME, USA"
   case "PVK":
      return "Preveza, Greece - Preveza-Lefkas Airport"
   case "YPA":
      return "Prince Albert, Canada - Prince Albert Airport"
   case "YXS":
      return "Prince George, British Columbia, Canada Prince George B C"
   case "YPR":
      return "Prince Rupert /Princ Rupert, British Columbia, Canada Digby Island"
   case "PCT":
      return "Princeton, NJ, USA Princeton Municipal"
   case "PRN":
      return "Pristina, Kosovo, Serbia - Pristina Airport"
   case "ZJJ":
      return "Procida Harbour, Italy - Procida Harbour Airport"
   case "PPP":
      return "Proserpine, Australia - Proserpine Airport"
   case "PVD":
      return "Providence, RI, USA Tf Green State Airport"
   case "PLS":
      return "Providenciales, Turks And Caicos Islands"
   case "PVC":
      return "Provincetown, MA, USA Provincetown Municipal Airport"
   case "PVU":
      return "Provo, UT, USA Provo"
   case "SCC":
      return "Prudhoe Bay, Alaska - Deadhorse Airport"
   case "PCL":
      return "Pucallpa, Peru Captain Rolden"
   case "PBC":
      return "Puebla, Puebla, Mexico"
   case "PUB":
      return "Pueblo, CO, USA Pueblo Memorial Airport"
   case "PUZ":
      return "Puerto Cabezas, Nicaragua Puerto Cabezas"
   case "PXM":
      return "Puerto Escondido, Oaxaca, Mexico"
   case "PEM":
      return "Puerto Maldonado, Peru - Puerto Maldonado Airport"
   case "PMC":
      return "Puerto Montt, Chile Tepual"
   case "PZO":
      return "Puerto Ordaz, Venezuela Puerto Ordaz"
   case "POP":
      return "Puerto Plata, Dominican Republic La Union"
   case "PPS":
      return "Puerto Princesa, Philippines Puerto Princesa"
   case "PSZ":
      return "Puerto Suarez, Bolivia"
   case "PVR":
      return "Puerto Vallarta, Jalisco, Mexico Gustavo Diaz Ordaz"
   case "PUY":
      return "Pula, Croatia (Hrvatska) Pula"
   case "PUW":
      return "Pullman, WA, USA Pullman"
   case "PUQ":
      return "Punta Arenas, Chile Presidente Ibanez"
   case "PUJ":
      return "Punta Cana, Dominican Republic"
   case "SDQ":
      return "Punta Causedo-Santo Domingo, Dominican Republic - Las Americas International Airport"
   case "PDP":
      return "Punta del Este, Uruguay - Punta Del Este Airport"
   case "PUS":
      return "Pusan, South Korea Kimhae"
   case "AQI":
      return "Qaisumah, Saudi Arabia - Qaisumah Airport"
   case "IQM":
      return "Qiemo, China - Qiemo"
   case "TAO":
      return "Qingdao, China - Qingdao Airport"
   case "SHP":
      return "Qinhuangdao, China - Qinhuangdao"
   case "NDG":
      return "Qiqihar, China - Qiqihar"
   case "XQU":
      return "Qualicum, British Columbia, Canada"
   case "YQC":
      return "Quaqtaq, Quebec, Canada - Quaqtaq Airport"
   case "YQB":
      return "Quebec, Quebec, Canada Sainte Foy Airport"
   case "ZQN":
      return "Queenstown, New Zealand Frankton"
   case "UEL":
      return "Quelimane, Mozambique"
   case "XQP":
      return "Quepos, Costa Rica"
   case "QRO":
      return "Queretaro, Queretaro, Mexico"
   case "YQZ":
      return "Quesnel, British Columbia, Canada"
   case "UET":
      return "Quetta, Pakistan"
   case "UIB":
      return "Quibdo, Colombia"
   case "UIP":
      return "Quimper, France Pluguffan"
   case "UIN":
      return "Quincy, IL, USA Baldwin Field"
   case "KWN":
      return "Quinhagak, Alaska, USA - Quinhagak Airport"
   case "UIH":
      return "Quinhon, Vietnam - Quinhon Airport"
   case "UIO":
      return "Quito, Ecuador Mariscal"
   case "RBA":
      return "Rabat, Morocco Sale"
   case "RAB":
      return "Rabaul, Papua New Guinea Lakunai"
   case "BVC":
      return "Rabil, Cape Verde - Rabil Airport"
   case "VKG":
      return "Rachgia, Vietnam - Rachgia Airport"
   case "BEK":
      return "Rae Bareli, Uttar Pradesh, India - Raebareli Fursatganj Airfield"
   case "RAH":
      return "Rafha, Saudi Arabia - Rafha Airport"
   case "RYK":
      return "Rahim Yar Khan, Pakistan - Rahim Yar Khan Airport"
   case "RFP":
      return "Raiatea, French Polynesia - Raiatea-Uturoa Airport"
   case "YOP":
      return "Rainbow Lake, Alberta, Canada Rainbow Lake"
   case "RPR":
      return "Raipur, India"
   case "RAJ":
      return "Rajkot, India Rajkot"
   case "RDU":
      return "Raleigh/Durham, NC, USA Raleigh Durham International Arpt"
   case "IXR":
      return "Ranchi, India Ranchi"
   case "YRT":
      return "Rankin Inlet, Canada - Rankin Inlet Airport"
   case "RAP":
      return "Rapid City, SD, USA Rapid City Regional Airport"
   case "RAR":
      return "Rarotonga, Cook Islands Rarotonga"
   case "RKT":
      return "Ras Al Khaimah, United Arab Emirates - Ras Al Khaimah Airport"
   case "RAS":
      return "Rasht, Iran - Rasht Airport"
   case "RDG":
      return "Reading, PA, USA Municipal / Spaatz Field"
   case "REC":
      return "Recife, Pernambuco, Brazil Guararapes International"
   case "YRL":
      return "Red Lake, Ontario, Canada - Red Lake-Federal Airport"
   case "RDD":
      return "Redding, CA, USA Redding Municipal Airport"
   case "RDM":
      return "Redmond/Bend, OR, USA - Roberts Field"
   case "REG":
      return "Reggio Calabria, Italy Tito Menniti"
   case "YQR":
      return "Regina, Saskatchewan, Canada Regina International"
   case "RNS":
      return "Rennes, France St Jacques"
   case "RNO":
      return "Reno/Tahoe, NV, USA - Reno-Tahoe International Airport (formerly Reno-Cannon International Apt)"
   case "RES":
      return "Resistencia, Chaco, Argentina"
   case "YRB":
      return "Resolute, Northwest Territories, Canada Resolute Bay"
   case "REU":
      return "Reus, Spain Reus"
   case "KEF":
      return "Reykjavik, Iceland Keflavik"
   case "REK":
      return "Reykjavik, Iceland - Metropolitan Area"
   case "RKV":
      return "Reykjavik, Iceland Reykjavik Domestic Airport"
   case "REX":
      return "Reynosa, Tamaulipas, Mexico General Lucio Blanco Airport"
   case "RHI":
      return "Rhinelander, WI, USA Rhinelander Oneida County Airport"
   case "RHO":
      return "Rhodes, Greece Paradisi"
   case "RAO":
      return "Ribeirao Preto, Brazil - Ribeirao Preto Airport"
   case "RCB":
      return "Richards Bay, South Africa Richards Bay"
   case "RIC":
      return "Richmond, VA, USA Richmond International Airport"
   case "RIX":
      return "https://images.unsplash.com/photo-1609517760017-9b76ac28f0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80"
   case "RMI":
      return "Rimini, Italy - Rimini Airport"
   case "TIA":
      return "Rinas (Tirana), Albania - Tirana International Airport Nene Tereza"
   case "RBR":
      return "Rio Branco, Brazil - Presidente Medici Airport"
   case "RIO":
      return "Rio De Janeiro, Rio De Janeiro, Brazil"
   case "GIG":
      return "Rio De Janeiro, Rio De Janeiro, Brazil International Airport"
   case "SDU":
      return "Rio De Janeiro, Rio De Janeiro, Brazil Santos Dumont"
   case "RGL":
      return "Rio Gallegos, Santa Cruz, Argentina Rio GallegosInternacional"
   case "RGA":
      return "Rio Grande, Tierra Del Fuego, Argentina"
   case "RIS":
      return "Rishiri, Japan - Rishiri Airport"
   case "RIW":
      return "Riverton, WY, USA Riverton Regional Airport"
   case "XRP":
      return "Riviere A Pierre, Quebec, Canada Riviere A Pierre / Via Rail Service"
   case "YRI":
      return "Riviere du Loup, Quebec, Canada - Ville de Riviere-du-Loup Airport"
   case "RUH":
      return "Riyadh, Saudi Arabia King Khaled Intl"
   case "ROA":
      return "Roanoke, VA, USA Roanoke Regional Airport"
   case "RTB":
      return "Roatan, Honduras Roatan"
   case "YRJ":
      return "Roberval, Canada - Roberval Airport"
   case "RCE":
      return "Roche Harbor, WA, USA Roche Harbor"
   case "RST":
      return "Rochester, MN, USA Rochester Municipal"
   case "ROC":
      return "Rochester, NY, USA Monroe County Airport"
   case "RSD":
      return "Rock Sound, Bahamas"
   case "RKS":
      return "Rock Springs, WY, USA Rock Springs Sweetwater Cty Arpt"
   case "ZRF":
      return "Rockford, IL, USA"
   case "RFD":
      return "Rockford, IL, USA Greater Rockford"
   case "ROK":
      return "Rockhampton, Australia - Rockhampton Airport"
   case "RKD":
      return "Rockland, ME, USA Rockland"
   case "RWI":
      return "Rocky Mount, NC, USA Wilson"
   case "RDZ":
      return "Rodez, France - Rodez Airport"
   case "RRG":
      return "Rodrigues Island, Mauritius Rodrigues"
   case "RMA":
      return "Roma, Queensland, Australia Roma"
   case "CIA":
      return "Rome, Italy Ciampino"
   case "ROM":
      return "Rome, Italy Leonardo Da Vinci / Fiumicino"
   case "FCO":
      return "Rome, Italy Leonardo Da Vinci/Fiumicino"
   case "RNN":
      return "Ronne/Bornholm, Denmark - Arnager Airport"
   case "RNB":
      return "Ronneby, Sweden Kallinge"
   case "ROS":
      return "Rosario, Santa Fe, Argentina Fisherton"
   case "RPN":
      return "Rosh-Pina, Israel - Rosh-Pina Airport"
   case "RLG":
      return "Rostock-Laage, Germany - Rostock-Laage Airport"
   case "ROV":
      return "Rostov, Russia Rostov"
   case "ROW":
      return "Roswell, NM, USA Industrial Air Center"
   case "ROP":
      return "Rota, Northern Mariana Islands Rota"
   case "ROT":
      return "Rotorua, New Zealand - Rotorua Airport"
   case "RTM":
      return "Rotterdam, Netherlands Rotterdam"
   case "URO":
      return "Rouen, France Rouen /Boos Airport"
   case "YUY":
      return "Rouyn Noranda, Canada - Rouyn-Noranda Airport"
   case "RVN":
      return "Rovaniemi, Finland - Rovaniemi Airport"
   case "RXS":
      return "Roxas, Philippines - Roxas Airport"
   case "RUI":
      return "Ruidoso, NM, USA"
   case "RUT":
      return "Rutland, VT, USA"
   case "RZE":
      return "Rzeszow, Poland - Rzeszow Airport"
   case "SCN":
      return "Saarbruecken, Germany Ensheim"
   case "SAB":
      return "Saba Island, Netherlands Antilles"
   case "SMF":
      return "Sacramento, CA, USA Sacramento Metropolitan"
   case "HSG":
      return "Saga, Japan - Saga Airport"
   case "MBS":
      return "Saginaw / Bay City / Midland, MI, USA - TriCity Airport"
   case "SPD":
      return "Saidpur, Bangladesh"
   case "YAY":
      return "Saint Anthony, Canada - St Anthony Airport"
   case "SBH":
      return "Saint Barthelemy, Guadeloupe"
   case "YCM":
      return "Saint Catharines, Ontario, Canada"
   case "STC":
      return "Saint Cloud, MN, USA Saint Cloud"
   case "STX":
      return "Saint Croix Island, VI, USA"
   case "SSB":
      return "Saint Croix Island, VI, USA Sea Plane Base"
   case "RUN":
      return "Saint Denis De La Reunion, Reunion Gillot"
   case "SGO":
      return "Saint George, Queensland, Australia St George"
   case "SGU":
      return "Saint George, UT, USA St George"
   case "GND":
      return "Saint Georges/Grenada, Grenada Pt Saline"
   case "YSJ":
      return "Saint John, New Brunswick, Canada Turnbull Field"
   case "YYT":
      return "Saint John's, Newfoundland, Canada St John's International"
   case "ANU":
      return "Saint Johns / Antigua, Antigua And Barbuda Vc Bird International"
   case "XIM":
      return "Saint Hyacinthe, Quebec, Canada Saint Hyacinthe / Via Rail Service"
   case "SKB":
      return "Saint Kitts, Saint Kitts And Nevis Golden Rock"
   case "YSL":
      return "Saint Leonard, New Brunswick, Canada St Leonard Apt"
   case "STL":
      return "Saint Louis, MO, USA LambertSt Louis Internatl"
   case "UVF":
      return "Saint Lucia, Saint Lucia Hewanorra"
   case "SLU":
      return "Saint Lucia, Saint Lucia Vigie Field"
   case "SXM":
      return "Saint Maarten, Netherlands Antilles Juliana"
   case "SMS":
      return "Saint Marie, Madagascar"
   case "SFG":
      return "Saint Martin, Netherlands Antilles Esperance"
   case "XIO":
      return "Saint Marys, Ontario, Canada St Marys / Via Rail Service"
   case "STP":
      return "Saint Paul, MN, USA Downtown Airport"
   case "SNP":
      return "Saint Paul Island, Alaska, USA - St Paul Island Airport"
   case "LED":
      return "Saint Petersburg, Russia Pulkovo"
   case "PIE":
      return "Saint Petersburg/Clearwater, FL, USA St Petersburg/Clearwater Intl"
   case "FSP":
      return "Saint Pierre, St. Pierre And Miquelon"
   case "STT":
      return "Saint Thomas Island, VI, USA Cyril E King Arpt"
   case "SPB":
      return "Saint Thomas Island, VI, USA Seaplane Base"
   case "SVD":
      return "Saint Vincent, St. Vincent And The Grenadines"
   case "SPN":
      return "Saipan, Northern Mariana Islands Saipan Intl Northrn Mariana Isles"
   case "SNO":
      return "Sakon Nakhon, Thailand"
   case "SID":
      return "Sal, Cape Verde Amilcar Cabral International"
   case "SLL":
      return "Salalah, Oman - Salalah International Airport"
   case "SLM":
      return "Salamanca, Spain - Salamanca Airport"
   case "SLN":
      return "Salina, KS, USA Salina Municipal"
   case "SCX":
      return "Salina Cruz, Mexico - Salina Cruz Airport"
   case "SBY":
      return "Salisbury, MD, USA SalisburyWicomico County Arpt"
   case "YZG":
      return "Salluit, Canada - Salluit Airport"
   case "YSN":
      return "Salmon Arm, British Columbia, Canada"
   case "SLC":
      return "Salt Lake City, UT, USA Salt Lake City International Arpt"
   case "SLA":
      return "Salta, Salta, Argentina International"
   case "SLW":
      return "Saltillo, Coahuila, Mexico Saltillo"
   case "SSA":
      return "Salvador, Bahia, Brazil Dois De Julho"
   case "SZG":
      return "Salzburg, Austria Salzburg"
   case "NEU":
      return "Sam Neua, Laos - Sam Neua Airport"
   case "AZS":
      return "Samana/El Catey, Dominican Republic - Samana El Catey International Airport"
   case "KUF":
      return "Samara, Russia Samara"
   case "SKD":
      return "Samarkand, Uzbekistan"
   case "SMI":
      return "Samos Island, Greece - Samos Airport"
   case "SZF":
      return "Samsun, Turkey - Samsun Airport"
   case "ADZ":
      return "San Andres Island, Colombia"
   case "SAQ":
      return "San Andros, Bahamas - San Andros Airport"
   case "SJT":
      return "San Angelo, TX, USA"
   case "SAT":
      return "San Antonio, TX, USA San Antonio International"
   case "SVZ":
      return "San Antonio, Venezuela"
   case "SQL":
      return "San Carlos, California, United States - San Carlos Airport"
   case "BRC":
      return "San Carlos De Bariloche, Rio Negro, Argentina International"
   case "SZT":
      return "San Cristobel de las Casas, Mexico - San Cristobal de las Casas Airport"
   case "SAN":
      return "San Diego, CA, USA Lindbergh International Airport"
   case "SFO":
      return "San Francisco, CA, USA San Francisco Intl Airport"
   case "SJD":
      return "San Jose Del Cabo, Baja California Sur, Mexico Los Cabos Intl Airport"
   case "SJC":
      return "San Jose, CA, USA San Jose International Airport"
   case "SJO":
      return "San Jose, Costa Rica Juan Santamaria International"
   case "SJI":
      return "San Jose, Philippines Mcguire Field"
   case "SIG":
      return "San Juan, Puerto Rico - Isla Grande Airport"
   case "SJU":
      return "San Juan, PR, USA Luis Munoz Marin International"
   case "UAQ":
      return "San Juan, San Juan, Argentina"
   case "LUQ":
      return "San Luis, Argentina - San Luis Airport"
   case "SBP":
      return "San Luis Obispo, CA, USA San Luis Obispo County Airport"
   case "SLP":
      return "San Luis Potosi, San Luis Potosi, Mexico"
   case "CPC":
      return "San Martin De Los Andes, Neuquen, Argentina"
   case "SAP":
      return "San Pedro Sula, Honduras La Mesa"
   case "SPR":
      return "San Pedro, Belize San Pedro"
   case "AFA":
      return "San Rafael, Argentina - San Rafael Airport"
   case "ZSA":
      return "San Salvador, Bahamas"
   case "SAL":
      return "San Salvador, El Salvador El Salvadore Intl Airport"
   case "EAS":
      return "San Sebastian, Spain Fuenterrabia"
   case "SOM":
      return "San Tome, Venezuela"
   case "SAH":
      return "Sanaa, Yemen International"
   case "SDP":
      return "Sand Point, Alaska, USA - Sand Point Airport"
   case "SDK":
      return "Sandakan, Sabah, Malaysia"
   case "SDN":
      return "Sandane, Norway"
   case "TRF":
      return "Sandefjord, Norway Torf"
   case "SSJ":
      return "Sandnessjoen, Norway Stokka"
   case "YZP":
      return "Sandspit, Canada - Sandspit Airport"
   case "SFB":
      return "Sanford/Orlando, FL, USA - Central Florida Regional Airport"
   case "YSK":
      return "Sanikiluaq, Canada - Sanikiluaq Airport"
   case "SFQ":
      return "Sanliurfa, Turkey - Sanliurga Airport"
   case "SNA":
      return "Santa Ana, CA, USA John Wayne Airport"
   case "SBA":
      return "Santa Barbara, CA, USA Santa Barbara Airport"
   case "SNU":
      return "Santa Clara, Cuba - Abel Santa Maria Airport"
   case "PAO":
      return "Santa Clara County, California, United States - Palo Alto of Santa Clara County Airport"
   case "SPC":
      return "Santa Cruz La Palma, Canary Islands, Spain La Palma"
   case "VVI":
      return "Santa Cruz, Bolivia Viru Viru International"
   case "SAF":
      return "Santa Fe, NM, USA Santa Fe Municipal Airport"
   case "SFN":
      return "Santa Fe, Santa Fe, Argentina"
   case "SMX":
      return "Santa Maria, CA, USA Santa Maria Public Airport"
   case "SMR":
      return "Santa Marta, Colombia - Simon Bolivar Airport"
   case "STS":
      return "Santa Rosa, CA, USA Sonoma County Airport"
   case "RSA":
      return "Santa Rosa, La Pampa, Argentina"
   case "SDR":
      return "Santander, Spain Santander"
   case "STM":
      return "Santarem, Para, Brazil - Santarem International Airport"
   case "SCQ":
      return "Santiago De Compostela, Spain Santiago"
   case "SDE":
      return "Santiago Del Estero, Argentina - Sandiago Del Estero Airport"
   case "SCL":
      return "Santiago, Chile Aeropuerto Comodoro Arturo Merino Benitez"
   case "SCU":
      return "Santiago, Cuba SantiagoAntonio Maceo Cuba"
   case "STI":
      return "Santiago, Dominican Republic Municipal"
   case "SDQ":
      return "Santo Domingo, Dominican Republic Las Americas"
   case "STD":
      return "Santo Domingo, Venezuela Mayor Humberto Vivas Guerrero"
   case "JTR":
      return "Santorini/Thira Is, Greece Santorini"
   case "SYX":
      return "Sanya, China"
   case "SFL":
      return "Sao Filipe, Cape Verde - Sao Filipe Airport"
   case "SJP":
      return "Sao Jose Do Rio Preto, Brazil - Sao Jose Do Rio Preto Airport"
   case "SJK":
      return "Sao Jose Dos Campos, Sao Paulo, Brazil - Sao Jose Dos Campos Airport"
   case "SLZ":
      return "Sao Luiz, Maranhao, Brazil Tirirical"
   case "SNE":
      return "Sao Nicolau, Cape Verde - Sao Nicolau Airport"
   case "CGH":
      return "Sao Paulo, Sao Paulo, Brazil Congonhas"
   case "GRU":
      return "Sao Paulo, Sao Paulo, Brazil Guarulhos International"
   case "VCP":
      return "Sao Paulo Viracopos, Brazil - Sao Paulo Viracopos Airport"
   case "TMS":
      return "Sao Tome, Sao Tome and Principe - Sao Tome Airport"
   case "CTS":
      return "Sapporo, Japan Chitose"
   case "OKD":
      return "Sapporo, Japan - Okadama Airport"
   case "SJJ":
      return "Sarajevo, Bosnia And Herzegowina Butmir"
   case "SLK":
      return "Saranac Lake, NY, USA Adirondack"
   case "SRQ":
      return "Sarasota/Bradenton, FL, USA SarasotaBradenton"
   case "VNA":
      return "Saravane, Laos - Saravane Airport"
   case "YZR":
      return "Sarnia, Canada - Sarnia Airport"
   case "YXE":
      return "Saskatoon, Saskatchewan, Canada Saskatoon"
   case "SUJ":
      return "Satu Mare, Romania - Satu Mare Airport"
   case "CIU":
      return "Sault Ste Marie, MI, USA Chippewa County Intl Airport"
   case "YAM":
      return "Sault Ste Marie, Ontario, Canada Sault Ste Marie Arpt"
   case "JMC":
      return "Sausalito, CA, USA Marin County"
   case "SAV":
      return "Savannah, GA, USA Travis Field"
   case "ZVK":
      return "Savannakhet, Laos - Savannakhet Airport"
   case "SVL":
      return "Savonlinna, Finland Savonlinna"
   case "SVU":
      return "Savusavu, Fiji Savusavu"
   case "SCM":
      return "Scammon Bay, Alaska, USA - Scammon Bay Airport"
   case "YKL":
      return "Schefferville, Quebec, Canada Schefferville"
   case "BFF":
      return "Scottsbluff, NE, USA William B Heiling Field"
   case "LKE":
      return "Seattle, WA, USA Lake Union Sea Plane Base"
   case "SEA":
      return "Seattle, WA, USA Seattle Tacoma Intl Airport"
   case "BFI":
      return "Seattle Kings County International/Boeing Field, WA, USA"
   case "SEB":
      return "Sebha, Libya"
   case "SDX":
      return "Sedona, AZ, USA"
   case "SRG":
      return "Semarang, Indonesia - Yani Airport"
   case "SMM":
      return "Semporna, Sabah, Malaysia Semporna"
   case "SDJ":
      return "Sendai, Japan Sendai"
   case "DJJ":
      return "Sentani, Indonesia - Sentani-Jayapura Airport"
   case "ICN":
      return "Seoul, South Korea - Incheon International Airport"
   case "SEL":
      return "Seoul, South Korea Kimpo International"
   case "YZV":
      return "Sept-Iles, Quebec, Canada"
   case "SRX":
      return "Sert, Libya"
   case "SVQ":
      return "Sevilla, Spain"
   case "SFA":
      return "Sfax, Tunisia Sfax Airport"
   case "PVG":
      return "Shanghai, China - Pudong Shanghai Airport"
   case "SHA":
      return "Shanghai, China - Shanghai Intl /Hongqiao/"
   case "SNN":
      return "Shannon, Ireland Shannon"
   case "SWA":
      return "Shantou, China"
   case "SHJ":
      return "Sharjah, United Arab Emirates Sharjah"
   case "SSH":
      return "Sharm El Sheikh, Egypt Ophira"
   case "SHW":
      return "Sharurah, Saudi Arabia - Sharurah Airport"
   case "XFL":
      return "Shawinigan, Quebec, Canada Shawinigan / Via Rail Service"
   case "XFM":
      return "Shawnigan, British Columbia, Canada Shawnigan / Via Rail Service"
   case "SHE":
      return "Shenyang, China Shenyang"
   case "SZX":
      return "Shenzhen, China Shenzhen"
   case "SHR":
      return "Sheridan, WY, USA Sheridan County Airport"
   case "LSI":
      return "Shetland Islands /Shetland Isd, Scotland, United Kingdom Shetland Islands"
   case "LWK":
      return "Shetland Islands /Shetland Isd, Scotland, United Kingdom Tingwall"
   case "SJW":
      return "Shijiazhuang, China Shijiazhuang"
   case "HIL":
      return "Shillavo, Ethiopia - Shillavo Airport"
   case "SYZ":
      return "Shiraz, Iran Shiraz"
   case "SHC":
      return "Indaselassie, Ethiopia - Shire Indaselassie Airport"
   case "SYO":
      return "Shonai, Japan Shonai"
   case "SOW":
      return "Show Low, AZ, USA"
   case "SHV":
      return "Shreveport, LA, USA Regional Airport"
   case "REP":
      return "Siam Reap/Angkor Wat, Cambodia, Siem Reap International Airport"
   case "SBZ":
      return "Sibiu, Romania - Sibiu Airport"
   case "SBW":
      return "Sibu, Sarawak, Malaysia Sibu"
   case "SDY":
      return "Sidney, MT, USA"
   case "SAY":
      return "Siena, Italy - Siena Airport"
   case "IXS":
      return "Silchar, India Kumbhirgram"
   case "SVC":
      return "Silver City, New Mexico, USA - Silver City Airport"
   case "SYM":
      return "Simao, China - Simao"
   case "SIP":
      return "Simferopol, Ukraine Simferopol"
   case "SIN":
      return "Singapore, Singapore Changi International Airport"
   case "SIR":
      return "Sion, Switzerland - Sion Airport"
   case "SUX":
      return "Sioux City, Iowa, USA - Sioux Gateway International Airport"
   case "FSD":
      return "Sioux Falls, SD, USA Joe Foss Field"
   case "YXL":
      return "Sioux Lookout, Ontario, Canada"
   case "JSH":
      return "Sitia, Greece - Sitia Airport"
   case "SIT":
      return "Sitka, AK, USA Sitka"
   case "VAS":
      return "Sivas, Turkey Sivas"
   case "SGY":
      return "Skagway, AK, USA"
   case "KDU":
      return "Skardu, Pakistan - Skardu Airport"
   case "SFT":
      return "Skelleftea, Sweden Skelleftea"
   case "JSI":
      return "Skiathos, Greece Skiathos"
   case "SKE":
      return "Skien, Norway - Skien-Geiteryggen Airport"
   case "SKU":
      return "Skiros, Greece - Skiros Airport"
   case "SKP":
      return "Skopje, FYROM (Former Yugoslav Republic of Macedonia) - Skopje Airport"
   case "SLD":
      return "Sliac, Slovakia - Sliac Airport"
   case "SXL":
      return "Sligo, Ireland Collooney"
   case "MBX":
      return "Slivnica/Orehova Vas, Slovenia - Maribor Airport"
   case "YSH":
      return "Smith Falls, Ontario, Canada"
   case "YYD":
      return "Smithers, British Columbia, Canada Smithers International"
   case "SNB":
      return "Snake Bay, Northern Territory, Australia"
   case "AER":
      return "Sochi, Russia - Sochi Airport"
   case "SOF":
      return "Sofia, Bulgaria Sofia Intl"
   case "SOG":
      return "Sogndal, Norway Haukasen"
   case "SHO":
      return "Sokcho, South Korea"
   case "SQH":
      return "Son-La, Vietnam - Son-La Airport"
   case "SGD":
      return "Sonderborg, Denmark Sonderborg"
   case "JZH":
      return "Songpan Jiuzhai, China"
   case "RRO":
      return "Sorrento, Italy - Sorrento Airport"
   case "TZN":
      return "South Andros, Bahamas Congo Town"
   case "SBN":
      return "South Bend, IN, USA Michiana Regional Airport"
   case "XSC":
      return "South Caicos, Turks And Caicos Islands"
   case "TVL":
      return "South Lake Tahoe, CA, USA Lake Tahoe"
   case "WSN":
      return "South Naknek, Alaska, USA - South Naknek Airport"
   case "SOU":
      return "Southampton, England, United Kingdom Eastleigh"
   case "SOP":
      return "Southern Pines, NC, USA Pinehurst"
   case "SPW":
      return "Spencer, IA, USA Spencer Municipal Airport"
   case "SPU":
      return "Split, Croatia (Hrvatska) Split"
   case "GEG":
      return "Spokane, WA, USA International/Geiger Field"
   case "AXP":
      return "Spring Point, Bahamas - Spring Point Airport"
   case "SPI":
      return "Springfield, IL, USA Capital Airport"
   case "SGF":
      return "Springfield, MO, USA Springfield Regional Airport"
   case "SXR":
      return "Srinagar, India"
   case "YAY":
      return "St Anthony, Canada - St Anthony Airport"
   case "SBH":
      return "St Barthelemy, Guadeloupe"
   case "YCM":
      return "St Catharines, Ontario, Canada"
   case "STC":
      return "St Cloud, MN, USA Saint Cloud"
   case "STX":
      return "St Croix Island, VI, USA"
   case "SSB":
      return "St Croix Island, VI, USA Sea Plane Base"
   case "RUN":
      return "St Denis De La Reunion, Reunion Gillot"
   case "SGO":
      return "St George, Queensland, Australia St George"
   case "GND":
      return "St Georges/Grenada, Grenada Pt Saline"
   case "SGU":
      return "St George, UT, USA St George"
   case "YSJ":
      return "St John, New Brunswick, Canada Turnbull Field"
   case "YYT":
      return "St John's, Newfoundland, Canada St John's International"
   case "ANU":
      return "St Johns / Antigua, Antigua And Barbuda Vc Bird International"
   case "XIM":
      return "St Hyacinthe, Quebec, Canada Saint Hyacinthe / Via Rail Service"
   case "SKB":
      return "St Kitts, Saint Kitts And Nevis Golden Rock"
   case "YSL":
      return "St Leonard, New Brunswick, Canada St Leonard Apt"
   case "STL":
      return "St Louis, MO, USA LambertSt Louis Internatl"
   case "UVF":
      return "St Lucia, Saint Lucia Hewanorra"
   case "SLU":
      return "St Lucia, Saint Lucia Vigie Field"
   case "SXM":
      return "St Maarten, Netherlands Antilles Juliana"
   case "SMS":
      return "St Marie, Madagascar"
   case "SFG":
      return "St Martin, Netherlands Antilles Esperance"
   case "XIO":
      return "St Marys, Ontario, Canada St Marys / Via Rail Service"
   case "STP":
      return "St Paul, MN, USA Downtown Airport"
   case "SNP":
      return "St Paul Island, Alaska, USA - St Paul Island Airport"
   case "LED":
      return "St Petersburg, Russia Pulkovo"
   case "PIE":
      return "St Petersburg/Clearwater, FL, USA St Petersburg/Clearwater Intl"
   case "FSP":
      return "St Pierre, St. Pierre And Miquelon"
   case "STT":
      return "St Thomas Island, VI, USA Cyril E King Arpt"
   case "SPB":
      return "St Thomas Island, VI, USA Seaplane Base"
   case "SVD":
      return "St Vincent, St. Vincent And The Grenadines"
   case "SCE":
      return "State College, PA, USA University Park Arpt"
   case "SHD":
      return "Staunton, VA, USA Shenandoah Valley Regional"
   case "SVG":
      return "Stavanger, Norway Sola"
   case "RUN":
      return "St Denis De La Reunion, Reunion Gillot"
   case "HDN":
      return "Steamboat Springs Hayden, Colorado, USA - Steamboat Springs Hayden/Yampa Valley Regional Airport"
   case "SML":
      return "Stella Maris, Bahamas"
   case "YJT":
      return "Stephenville, Newfoundland, Canada Stephenville"
   case "ARN":
      return "https://images.unsplash.com/photo-1588653818221-2651ec1a6423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
   case "BMA":
      return "https://images.unsplash.com/photo-1588653818221-2651ec1a6423?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
   case "SCK":
      return "Stockton, California, USA - Stockton Airport"
   case "SKN":
      return "Stokmarknes, Norway - Skagen Airport"
   case "YSF":
      return "Stony Rapids, Saskatchewan, Canada Stony Rapids"
   case "SYY":
      return "Stornoway, Scotland, United Kingdom Stornoway"
   case "SQO":
      return "Storuman, Sweden - Storuman Airport"
   case "SXB":
      return "Strasbourg, France Entzheim"
   case "XFD":
      return "Stratford, Ontario, Canada"
   case "XTY":
      return "Strathroy, Ontario, Canada Strathroy / Via Rail Service"
   case "SOY":
      return "Stronsay, Orkney Islands, Scotland, United Kingdom - Stronsay Airport"
   case "YRR":
      return "Stuart Island, Canada - Stuart Island Airport"
   case "SUE":
      return "Sturgeon Bay, WI, USA"
   case "STR":
      return "Stuttgart, Germany Echterdingen"
   case "SRE":
      return "Sucre, Bolivia Sucre"
   case "YSB":
      return "Sudbury, Ontario, Canada"
   case "SUL":
      return "Sui, Pakistan - Sui Airport"
   case "SKZ":
      return "Sukkur, Pakistan - Sukkur Airport"
   case "YTG":
      return "Sullivan Bay, Canada - Sullivan Bay Airport"
   case "SWQ":
      return "Sumbawa Island, Indonesia Brang Bidji"
   case "NTY":
      return "Sun City, South Africa - Pilansberg Airport"
   case "SUN":
      return "Sun Valley/Hailey, ID, USA"
   case "SDL":
      return "Sundsvall, Sweden Sundsvall"
   case "MCY":
      return "Sunshine Coast, Queensland, Australia Maroochydore"
   case "SUB":
      return "Surabaya, Indonesia Juanda Airport"
   case "URT":
      return "Surat Thani, Thailand"
   case "SGC":
      return "Surgut, Russia"
   case "SUV":
      return "Suva, Fiji Nausori"
   case "SVJ":
      return "Svolvaer, Norway - Helle Airport"
   case "SWP":
      return "Swakopmund, Namibia"
   case "QSY":
      return "Sydney, New South Wales, Australia"
   case "SYD":
      return "Sydney, New South Wales, Australia Sydney /KingsfordSmith/ Airport"
   case "YQY":
      return "Sydney, Nova Scotia, Canada Sydney Municipal"
   case "ZYL":
      return "Sylhet, Bangladesh - Sylhet Airport"
   case "SYR":
      return "Syracuse, NY, USA Hancock International"
   case "JSY":
      return "Syros Island, Greece - Syros Airport"
   case "SZZ":
      return "Szczecin, Poland Goleniow"
   case "TBT":
      return "Tabatinga, Amazonas, Brazil, Tabatinga International Airport"
   case "TBZ":
      return "Tabriz, Iran - Tabriz Airport"
   case "TUU":
      return "Tabuk, Saudi Arabia - Tabuk Airport"
   case "TCG":
      return "Tacheng, China - Tacheng"
   case "TAC":
      return "Tacloban, Philippines Dz Romualdez"
   case "TCQ":
      return "Tacna, Peru - Tacna Airport"
   case "TAE":
      return "Taegu, South Korea"
   case "TAG":
      return "Tagbilaran, Philippines Tagbilaran"
   case "RNO":
      return "Tahoe/Reno, NV, USA - Reno-Tahoe International Airport (formerly Reno-Cannon International Apt)"
   case "TXG":
      return "Taichung, Taiwan - Taichung Airport"
   case "TIF":
      return "Taif, Saudi Arabia - Taif Airport"
   case "TNN":
      return "Tainan, Taiwan - Tainan Airport"
   case "TPE":
      return "Taipei, Taiwan - Taiwan Taoyuan International Airport (formerly Chiang Kai Shek Airport)"
   case "TSA":
      return "Taipei, Taiwan Sung Shan"
   case "TTT":
      return "Taitung, Taiwan - Taitung Airport"
   case "TYN":
      return "Taiyuan, China"
   case "TAI":
      return "Taiz, Yemen AlJanad"
   case "TAK":
      return "Takamatsu, Japan - Takamatsu Airport"
   case "TLH":
      return "Tallahassee, FL, USA"
   case "TLL":
      return "Tallinn, Estonia Ulemiste"
   case "YYH":
      return "Taloyak, Canada - Taloyak Airport"
   case "TPA":
      return "Tampa, FL, USA Tampa International"
   case "TMP":
      return "Tampere, Finland TamperePirkkala"
   case "TAM":
      return "Tampico, Tamaulipas, Mexico"
   case "TMW":
      return "Tamworth, New South Wales, Australia Tamworth"
   case "TNG":
      return "Tangier, Morocco Boukhalef Souahel"
   case "TSM":
      return "Taos, New Mexico, USA - Taos Regional Apt Airport"
   case "TAP":
      return "Tapachula, Chiapas, Mexico Tapachula International"
   case "TRK":
      return "Tarakan, Indonesia Tarakan"
   case "TPP":
      return "Tarapoto, Peru Tarapoto"
   case "TRO":
      return "Taree, New South Wales, Australia - Taree Airport"
   case "TIZ":
      return "Tari, Papua New Guinea"
   case "TJA":
      return "Tarija, Bolivia"
   case "XFO":
      return "Taschereau, Quebec, Canada Taschereau / Via Rail Service"
   case "TAS":
      return "Tashkent, Uzbekistan Tashkent"
   case "YTQ":
      return "Tasiujuaq, Canada - Tasiujuaq Airport"
   case "TAT":
      return "Tatry/Poprad, Slovakia Tatry/Poprad"
   case "TAV":
      return "Tau, American Samoa - Tau Airport"
   case "TUO":
      return "Taupo, New Zealand Taupo"
   case "TRG":
      return "Tauranga, New Zealand Tauranga"
   case "TVU":
      return "Taveuni Island, Fiji - Matei Airport"
   case "TBS":
      return "Tbilisi, Georgia Novo Alexeyevka"
   case "MME":
      return "Teesside, England, United Kingdom TeesSide"
   case "TFF":
      return "Tefe, Brazil - Tefe Airport"
   case "TGU":
      return "Tegucigalpa, Honduras Toncontin"
   case "THR":
      return "Tehran, Iran Mehrabad"
   case "TLV":
      return "Tel Aviv Yafo, Israel BenGurion International"
   case "SDV":
      return "Tel Aviv, Israel - Sde Dov Airport"
   case "TEX":
      return "Telluride, CO, USA Telluride Municipal Airport"
   case "TIM":
      return "Tembagapura, Indonesia - Tembagapura Airport"
   case "TPL":
      return "Temple, TX, USA"
   case "ZCO":
      return "Temuco, Chile Manquehue"
   case "TKE":
      return "Tenakee, Alaska, United States of America - Tenakee Airport"
   case "TFS":
      return "Tenerife, Canary Islands, Spain Reina Sofia"
   case "TCI":
      return "Tenerife, Canary Islands, Spain Tenerife Norte Los Rodeos"
   case "TFN":
      return "Tenerife, Canary Islands, Spain Tenerife Norte Los Rodeos"
   case "TPQ":
      return "Tepic, Nayarit, Mexico"
   case "TER":
      return "Terceira Island, Azores Islands, Portugal Lajes"
   case "THE":
      return "Teresina, Piaui, Brazil Teresina"
   case "TMJ":
      return "Termez, Uzbekistan - Termez Airport"
   case "TTE":
      return "Ternate, Indonesia Babullah"
   case "YXT":
      return "Terrace, British Columbia, Canada Terrace"
   case "HUF":
      return "Terre Haute, IN, USA Hulman Field"
   case "LSS":
      return "TerreDeHaut, Guadeloupe"
   case "TEB":
      return "Teterboro, New Jersey, United States of America - Teterboro Airport"
   case "TXK":
      return "Texarkana, AR, USA Municipal"
   case "TEZ":
      return "Tezpur, India Salonbari"
   case "THK":
      return "Thakhek, Laos - Thakhek Airport"
   case "HAG":
      return "The Hague, Netherlands"
   case "YQD":
      return "The Pas, Manitoba, Canada The Pas"
   case "SKG":
      return "Thessaloniki, Greece Thessaloniki"
   case "YTD":
      return "Thicket Portage, Manitoba, Canada"
   case "TVF":
      return "Thief River Falls, MN, USA Thief River Falls Municipal"
   case "TED":
      return "Thisted, Denmark"
   case "YTH":
      return "Thompson, Manitoba, Canada - Manitoba-Thompson Airport"
   case "YQT":
      return "Thunder Bay, Ontario, Canada"
   case "TIS":
      return "Thursday Island, Queensland, Australia Horn Island"
   case "TSN":
      return "Tianjin, China - Tianjin"
   case "TIJ":
      return "Tijuana, Baja California, Mexico General Abelardo L Rodriguez"
   case "TIU":
      return "Timaru, New Zealand - Timaru Airport"
   case "TSR":
      return "Timisoara, Romania Timisoara"
   case "YTS":
      return "Timmins, Ontario, Canada Timmins Municipal Airport"
   case "TIQ":
      return "Tinian, Northern Mariana Islands Tinian"
   case "KTP":
      return "Tinson Pen-Kingston Airport, Kingston, Jamaica"
   case "TIE":
      return "Tippi, Ethiopia - Tippi Airport"
   case "TIA":
      return "Tirana (Rinas), Albania - Tirana International Airport Nene Tereza"
   case "TRE":
      return "Tiree, Scotland, United Kingdom Tiree Island"
   case "TGM":
      return "Tirgu Mures, Romania Tirgu Mures"
   case "TRZ":
      return "Tiruchirapally, India Civil"
   case "TIV":
      return "Tivat, Yugoslavia Tivat"
   case "TAB":
      return "Tobago, Tobago, Trinidad And Tobago Crown Point"
   case "TOB":
      return "Tobruk, Libya"
   case "YAZ":
      return "Tofino, British Columbia, Canada Tofino Airport"
   case "TOG":
      return "Togiak, Alaska, USA - Togiak Airport"
   case "OOK":
      return "Toksook Bay, AK, USA"
   case "TKN":
      return "Tokunoshima, Japan - Tokunoshima Airport"
   case "TKS":
      return "Tokushima, Japan Tokushima"
   case "NRT":
      return "Tokyo, Japan"
   case "NRT":
      return "Tokyo, Japan - Narita"
   case "TOL":
      return "Toledo, OH, USA Toledo Express Airport"
   case "TLC":
      return "Toluca, Mexico - Toluca Airport"
   case "TMG":
      return "Tomanggong, Malaysia - Tomanggong Airport"
   case "TEN":
      return "Tongren, China"
   case "TWB":
      return "Toowoomba, Queensland, Australia Toowoomba"
   case "FOE":
      return "Topeka, KS, USA Forbes Field"
   case "YTZ":
      return "Toronto, Ontario, Canada - Toronto - City Center (Island) Airport"
   case "YYZ":
      return "Toronto, Ontario, Canada - Lester B Pearson International Airport"
   case "TRC":
      return "Torreon, Coahuila, Mexico"
   case "EIS":
      return "Tortola/Beef Island, Virgin Islands (British) Beef Island"
   case "TTB":
      return "Tortoli, Italy - Tortoli-Arbatax Airport"
   case "TTJ":
      return "Tottori, Japan Tottori"
   case "TLN":
      return "Toulon, France - Toulon Airport"
   case "TLS":
      return "Toulouse, France Blagnac"
   case "TUF":
      return "Tours, France St Symphorien"
   case "TSV":
      return "Townsville, Queensland, Australia Townsville"
   case "TOY":
      return "Toyama, Japan Toyama"
   case "TZX":
      return "Trabzon, Turkey Trabzon"
   case "TST":
      return "Trang, Thailand - Trang Airport"
   case "TPS":
      return "Trapani, Sicily, Italy Birgi"
   case "TVC":
      return "Traverse City, MI, USA Cherry Capital Airport"
   case "TCB":
      return "Treasure Cay, Bahamas - Treasure Cay Airport"
   case "REL":
      return "Trelew, Chubut, Argentina - Trelew-Almirante Zar Airport"
   case "TTN":
      return "Trenton, NJ, USA Mercer County"
   case "TSF":
      return "Treviso, Italy Treviso"
   case "TRS":
      return "Trieste, Italy Ronchi Dei Legionari"
   case "TDD":
      return "Trinidad, Bolivia"
   case "TIP":
      return "Tripoli, Libya - Idris Airport"
   case "TRV":
      return "Trivandrum, India - Trivandrum International Airport"
   case "THN":
      return "Trollhattan, Sweden - Trollhattan Airport"
   case "TMT":
      return "Trombetas, Brazil - Trombetas Airport"
   case "TOS":
      return "Tromso, Norway Tromso/Langes"
   case "TRD":
      return "Trondheim, Norway TrondheimVaernes"
   case "TRU":
      return "Trujillo, Peru Trujillo"
   case "TKK":
      return "Truk, Caroline Islands, Micronesia Truk"
   case "XLZ":
      return "Truro, Nova Scotia, Canada"
   case "TSZ":
      return "Tsetserleg, Arkhangai, Mongolia - Tsetserleg Airport"
   case "TSJ":
      return "Tsushima, Japan - Tsushima Airport"
   case "TUS":
      return "Tucson, AZ, USA Tucson International Airport"
   case "TUC":
      return "Tucuman, Tucuman, Argentina Benjamin Matienzo"
   case "TUR":
      return "Tucurui, Brazil - Tucurui Airport"
   case "TUG":
      return "Tuguegarao, Philippines Airport"
   case "TUL":
      return "Tulsa, OK, USA Tulsa International"
   case "TBP":
      return "Tumbes, Peru Tumbes"
   case "TUN":
      return "Tunis, Tunisia Carthage"
   case "WTL":
      return "Tuntutuliak, Alaska, USA - Tuntutuliak Airport"
   case "TNK":
      return "Tununak, Alaska - Tununak Airport"
   case "TXN":
      return "Tunxi, China"
   case "TUP":
      return "Tupelo, MS, USA Cd Lemons Municipal"
   case "TUI":
      return "Turaif, Saudi Arabia - Turaif Airport"
   case "TUK":
      return "Turbat Airport"
   case "TRN":
      return "Turin, Italy Caselle"
   case "TKU":
      return "Turku, Finland Turku"
   case "TCL":
      return "Tuscaloosa, AL, USA Van De Graff"
   case "TGZ":
      return "Tuxtla Gutierrez, Chiapas, Mexico Llano San Juan"
   case "TBB":
      return "Tuyhoa, VIetnam - Tuyhoa Airport"
   case "TWF":
      return "Twin Falls, ID, USA"
   case "TWA":
      return "Twin Hills, Alaska, USA - Twin Hills Airport"
   case "TYR":
      return "Tyler, TX, USA Pounds Field"
   case "PAM":
      return "Tyndall Air Force Base - Panama City, Florida, USA - Tyndall AFB-Panama City Airport"
   case "TJM":
      return "Tyumen, Russia Tyumen"
   case "QUB":
      return "Ubari, Libya"
   case "UBJ":
      return "Ube, Japan"
   case "UBA":
      return "Uberaba, Brazil - Uberaba Airport"
   case "UDI":
      return "Uberlandia, Brazil - Gomes Airport"
   case "UBP":
      return "Ubon Ratchathani, Thailand - Ubon Ratchathani Airport"
   case "UDR":
      return "Udaipur, India - Udaipur-Dabok Airport"
   case "UTH":
      return "Udon Thani, Thailand Udon"
   case "UFA":
      return "Ufa, Russia - Ufa Airport"
   case "UPG":
      return "Ujung Pandang, Indonesia Hasanudin"
   case "ULO":
      return "Ulaangom, Uvs, Mongolia - Ulaangom Airport"
   case "ULN":
      return "Ulan Bator, Mongolia Ulan Bator"
   case "UUD":
      return "UlanUde, Russia"
   case "ULZ":
      return "Uliastai, Zavkhan, Mongolia - Uliastai, Airport"
   case "USN":
      return "Ulsan, South Korea"
   case "ULD":
      return "Ulundi, South Africa - Ulundi Airport"
   case "ULY":
      return "Ulyanovsk, Russia Ulyanoysk"
   case "UME":
      return "Umea, Sweden Umea"
   case "YUD":
      return "Umiujaq, Canada - Umiujaq Airport"
   case "UTT":
      return "Umtata, South Africa - Umtata Airport"
   case "UNA":
      return "Una, Brazil - Una Airport"
   case "UNK":
      return "Unalakleet, ALaska, USA - Unalakleet Airport"
   case "UNI":
      return "Union Island, Saint Vincent and the Grenadines - Union Island Airport"
   case "UNT":
      return "Unst Shetland Islands, Scotland, United Kingdom"
   case "UTN":
      return "Upington, South Africa Municipal"
   case "UGC":
      return "Urgench, Uzbekistan"
   case "UPN":
      return "Uruapan, Michoacan, Mexico"
   case "URC":
      return "Urumqi, China - Urumqi-Diwopu"
   case "USH":
      return "Ushuaia, Tierra Del Fuego, Argentina"
   case "UCA":
      return "Utica, NY, USA Oneida County"
   case "UDJ":
      return "Uzhgorod, Ukraine - Uzhgorod Airport"
   case "VAA":
      return "Vaasa, Finland Vaasa"
   case "BDQ":
      return "Vadodara, India Vadodara"
   case "VDS":
      return "Vadso, Norway Vadso"
   case "QBF":
      return "Vail/Eagle, CO, USA"
   case "ZBV":
      return "Vail/Eagle, CO, USA"
   case "EGE":
      return "Vail/Eagle, CO, USA Eagle County Regional"
   case "YVO":
      return "Val D'Or, Canada - Val D'Or Airport"
   case "VDZ":
      return "Valdez, AK, USA"
   case "ZAL":
      return "Valdivia, Chile Pichoy"
   case "VLD":
      return "Valdosta, GA, USA - Valdosta Regional"
   case "VLC":
      return "Valencia, Spain - Valencia"
   case "VLN":
      return "Valencia, Venezuela - Valencia"
   case "VLL":
      return "Valladolid, Spain - Valladolid"
   case "VUP":
      return "Valledupar, Colombia"
   case "VPS":
      return "Valparaiso, FL, USA - Fort Walton Beach"
   case "VDE":
      return "Valverde, El Hierro, Canary Islands, Spain - El Hierro Airport"
   case "VAN":
      return "Van, Turkey - Van Airport"
   case "CXH":
      return "Vancouver, British Columbia, Canada Vancouver Harbour Airport"
   case "YVR":
      return "Vancouver, British Columbia, Canada Vancouver International"
   case "VAI":
      return "Vanimo, Papua New Guinea - Vanimo Airport"
   case "VNE":
      return "Vannes, France - Vannes-Meucon airport (Vannes - Golfe du Morbihan airport)"
   case "VRA":
      return "Varadero, Cuba Juan Gualberto Gomez"
   case "VNS":
      return "Varanasi, India Babatpur"
   case "VRK":
      return "Varkaus, Finland Varkaus"
   case "VAR":
      return "Varna, Bulgaria Varna"
   case "VST":
      return "Vasteras, Sweden Hasslo"
   case "VAV":
      return "Vava'U, Tonga - Vava'U Airport"
   case "VXO":
      return "Vaxjo, Sweden Vaxjo"
   case "VCE":
      return "Venice, Italy Marco Polo"
   case "VER":
      return "Veracruz, Veracruz, Mexico Las Bajadas / General Heriberto Jara"
   case "VRB":
      return "Vero Beach, FL, USA Vero Beach Municipal"
   case "VRN":
      return "Verona, Italy Verona"
   case "VEY":
      return "Vestmannaeyjar, Iceland Vestmannaeyjar"
   case "VHY":
      return "Vichy, France - Vichy-Charmeil Airport"
   case "YYJ":
      return "Victoria, British Columbia, Canada Victoria International Airport"
   case "YWH":
      return "Victoria, British Columbia, Canada Victoria Inner Harbour"
   case "VCT":
      return "Victoria, TX, USA"
   case "VFA":
      return "Victoria Falls, Zimbabwe"
   case "VDM":
      return "Viedma, Argentina - Viedma Airport"
   case "VIE":
      return "Vienna, Austria Schwechat"
   case "LVT":
      return "Vientiane, Laos - Vientiane Airport"
   case "VTE":
      return "Vientiane, Laos Wattay"
   case "VQS":
      return "Vieques, Puerto Rico - Vieques Airport"
   case "VGO":
      return "Vigo, Spain"
   case "VLG":
      return "Villa Gesell, Buenos Aires, Argentina Villa Gesell"
   case "VSA":
      return "Villahermosa, Tabasco, Mexico Carlos R Perez"
   case "VHM":
      return "Vilhelmina, Sweden - VIlhelmina Airport"
   case "VNO":
      return "Vilnius, Lithuania Vilnius Airport"
   case "VII":
      return "Vinh City, Vietnam - Vinh City Airport"
   case "VIJ":
      return "Virgin Gorda, Virgin Islands (British)"
   case "VIS":
      return "Visalia, CA, USA Visalia Municipal Airport"
   case "VBY":
      return "Visby, Sweden Visby"
   case "VTZ":
      return "Vishakhapatnam, India Vishakhapatnam"
   case "VIX":
      return "Vitoria, Espirito Santo, Brazil Eureco Sales"
   case "VIT":
      return "Vitoria, Spain Vitoria"
   case "VDC":
      return "Vitoria Da Conquista, Brazil - Vitoria Da Conquista Airport"
   case "VVO":
      return "Vladivostok, Russia Vladivostok Airport"
   case "SKS":
      return "Vojens Lufthavn, Denmark Jojens"
   case "VOG":
      return "Volgograd, Russia Volgograd"
   case "YWK":
      return "Wabush, Newfoundland, Canada Wabush Municipal"
   case "ACT":
      return "Waco, TX, USA Madison Cooper"
   case "WAE":
      return "Wadi Ad Dawasir, Saudi Arabia - Wadi Ad Dawasir Airport"
   case "WGA":
      return "WaggaWagga, New South Wales, Australia Forest Hill"
   case "AIN":
      return "Wainwright, AK, USA"
   case "NTQ":
      return "Wajima, Japan - Wajima Airport"
   case "WKJ":
      return "Wakkanai, Japan - Wakkanai Airport"
   case "WGE":
      return "Walgett, New South Wales, Australia Walgett"
   case "ALW":
      return "Walla Walla, WA, USA"
   case "WVB":
      return "Walvis Bay, South Africa - Walvis Bay Airport"
   case "WKA":
      return "Wanaka, New Zealand - Wanaka Airport"
   case "WAG":
      return "Wanganui, New Zealand - Wanganui Airport"
   case "WXN":
      return "Wanxian, China"
   case "WAW":
      return "Warsaw, Poland Okecie"
   case "IAD":
      return "Washington, DC, USA Dulles"
   case "DCA":
      return "Washington, DC, USA Ronald Reagan National Airport"
   case "IAD":
      return "Washington, DC, USA WashingtonDulles International"
   case "YKQ":
      return "Waskaganish, Quebec, Canada Waskaganish"
   case "WAT":
      return "Waterford, Ireland"
   case "ALO":
      return "Waterloo, IA, USA Waterloo Municipal Airport"
   case "ART":
      return "Watertown, NY, USA Watertown"
   case "ATY":
      return "Watertown, SD, USA"
   case "YQH":
      return "Watson Lake, Yukon Territory, Canada Watson Lake Airport"
   case "CWA":
      return "Wausau, WI, USA Central Wisconsin Airport"
   case "YXZ":
      return "Wawa, Ontario, Canada"
   case "TBN":
      return "Waynesville-Ft Leonard Wood, MO, USA - Forney Field"
   case "EJH":
      return "Wedjh, Saudi Arabia - Wedjh Airport"
   case "NRN":
      return "Weeze, Germany - Niederrhein Airport"
   case "WEH":
      return "Weihai, China"
   case "WEI":
      return "Weipa, Australia - Weipa Airport"
   case "WLG":
      return "Wellington, New Zealand International"
   case "EAT":
      return "Wenatchee, WA, USA Pangborn Memorial Field"
   case "ENV":
      return "Wendover, Utah, USA - Wendover Airport"
   case "WNZ":
      return "Wenzhou, China"
   case "PBI":
      return "West Palm Beach, FL, USA Palm Beach International Airport"
   case "WYS":
      return "West Yellowstone, Montana, USA - West Yellowstone Airport"
   case "GWT":
      return "Westerland, Germany Westerland"
   case "WST":
      return "Westerly, Rhode Island, USA - Westerly Airport"
   case "WSZ":
      return "Westport, New Zealand - Westport Airport"
   case "WSX":
      return "Westsound, Washington, USA - Westsound Airport"
   case "WWK":
      return "Wewak, Papua New Guinea - Wewak-Boram Airport"
   case "XFQ":
      return "Weymont, Quebec, Canada Weymont / Via Rail Service"
   case "WHK":
      return "Whakatane, New Zealand - Whakatane Airport"
   case "WRE":
      return "Whangarei, New Zealand - Whangarei Airport"
   case "YWS":
      return "Whistler, Canada - Whistler Airport"
   case "HPN":
      return "White Plains, NY, USA Westchester County Airport"
   case "YWR":
      return "White River, Ontario, Canada White River"
   case "YXY":
      return "Whitehorse, Yukon Territory, Canada Whitehorse Airport"
   case "WYA":
      return "Whyalla, Australia - Ahyalla Airport"
   case "ICT":
      return "Wichita, KS, USA MidContinent Airport"
   case "SPS":
      return "Wichita Falls, TX, USA Wichita Falls Municipal"
   case "WIC":
      return "Wick, Scotland, United Kingdom Wick"
   case "AVP":
      return "Wilkes Barre/Scranton, PA, USA WilkesBarre/Scranton Intl"
   case "CUR":
      return "Willemstad / Curacao Island, Netherlands Antilles Areopuerto Hato"
   case "AZA":
      return "Williams Gateway Airport - Mesa, Arizona, USA"
   case "YWL":
      return "Williams Lake, British Columbia, Canada"
   case "IPT":
      return "Williamsport, PA, USA Williamsport Lycoming Municipal"
   case "ISN":
      return "Williston, ND, USA Sloulin Field International"
   case "ILM":
      return "Wilmington, NC, USA New Hanover County Airport"
   case "ILG":
      return "Wilmington/New Castle County, DE, USA"
   case "ERS":
      return "Windhoek, Namibia Eros"
   case "WDH":
      return "Windhoek, Namibia - Hosea Kutako International Airport (formerly Jg Strijdom airport)"
   case "YQG":
      return "Windsor, Ontario, Canada Windsor International"
   case "YWG":
      return "Winnipeg, Manitoba, Canada Winnipeg International"
   case "INT":
      return "WinstonSalem, NC, USA Smith Reynolds"
   case "WIN":
      return "Winton, Queensland, Australia Winton"
   case "OLF":
      return "Wolf Point, MT, USA"
   case "WJU":
      return "Won-ju, Republic of Korea - Won-ju Airport"
   case "XIP":
      return "Woodstock, Ontario, Canada Woodstock / Via Rail Service"
   case "UMR":
      return "Woomera, South Australia, Australia Woomera"
   case "ORH":
      return "Worcester, MA, USA Worcester /James D O'brien Field"
   case "WRL":
      return "Worland, WY, USA Worland"
   case "WRG":
      return "Wrangell, Alaska, USA - Wrangell Airport"
   case "WRI":
      return "Wrightstown NJ [McGuire Air Force Base] USA"
   case "WRO":
      return "Wroclaw, Poland Strachowice"
   case "WUH":
      return "Wuhan, China"
   case "WUS":
      return "Wuyishan, China"
   case "XWY":
      return "Wyoming, Ontario, Canada - Wyoming / Via Rail Service"
   case "XIY":
      return "Xi An, China - Xianyang"
   case "XMN":
      return "Xiamen, China - Xiamen International"
   case "XFN":
      return "Xiangfan, China"
   case "XIL":
      return "Xilinhot, China"
   case "XNN":
      return "Xining, China"
   case "XUZ":
      return "Xuzhou, China"
   case "YKM":
      return "Yakima, WA, USA Yakima Air Terminal"
   case "YAK":
      return "Yakutat, Alaska, USA - Yakutat Airport"
   case "YKS":
      return "Yakutsk, Russia"
   case "GAJ":
      return "Yamagata, Japan Junmachi"
   case "YNB":
      return "Yanbo, Saudi Arabia - Yanbo Airport"
   case "YNZ":
      return "Yancheng, China"
   case "RGN":
      return "Yangon, Myanmar Mingaladon"
   case "YNY":
      return "Yangyang, Republic of Korea - Yangyang Airport"
   case "YNJ":
      return "Yanji, China - Yanji"
   case "YNT":
      return "Yantai, China - Laishan"
   case "NSI":
      return "Yaounde, Cameroon Nsimalen"
   case "YAP":
      return "Yap, Caroline Islands, Micronesia"
   case "YQI":
      return "Yarmouth, Nova Scotia, Canada"
   case "AZD":
      return "Yazd, Iran - Yazd Airport"
   case "YEC":
      return "Yechon, South Korea Yechon"
   case "YZF":
      return "Yellowknife, Northwest Territories, Canada"
   case "COD":
      return "Yellowstone, Cody, Wyoming, USA - Yellowstone Regional Airport"
   case "EVN":
      return "Yerevan, Armenia"
   case "YBP":
      return "Yibin, China - Yibin"
   case "YIH":
      return "Yichang, China - Yichang Airport"
   case "INC":
      return "Yinchuan, China - Yinchuan Airport"
   case "YIN":
      return "Yining, China - Yining Airport"
   case "YIW":
      return "Yiwu, China - Yiwu Airport"
   case "JOG":
      return "Yogyakarta, Indonesia"
   case "YGJ":
      return "Yonago, Japan - Yonago Airport"
   case "RSU":
      return "Yosu, South Korea Yosu Airport"
   case "YNG":
      return "Youngstown, OH, USA Youngstown Municipal Airport"
   case "YIP":
      return "Ypsilanti/Detroit, MI, USA - Willow Run Airport, Ypsilanti"
   case "YUM":
      return "Yuma, AZ, USA Yuma International Airport"
   case "YMS":
      return "Yurimaguas, Peru - Yurimaquas Airport"
   case "UUS":
      return "Yuzhno-Sakhalinsk, Russia, Yuzno-Sakhalinsk Airport"
   case "ZCL":
      return "Zacatecas, Zacatecas, Mexico"
   case "ZAD":
      return "Zadar, Croatia - Zadar Airport"
   case "ZAG":
      return "Zagreb, Croatia (Hrvatska) Zagreb"
   case "ZAH":
      return "Zahedan, Iran Zahedan"
   case "ZTH":
      return "Zakinthos, Greece Zakinthos"
   case "ZAM":
      return "Zamboanga, Philippines Zamboanga Airport"
   case "ZNZ":
      return "Zanzibar, Tanzania Kisauni"
   case "OZH":
      return "Zaporozhye, Ukraine - Zaporozhye Airport"
   case "ZAZ":
      return "Zaragoza, Spain Zaragoza"
   case "QZT":
      return "Zawia Town (Zawiat al Mukhayla), Libya"
   case "ZHA":
      return "Zhanjiang, China"
   case "ZAT":
      return "Zhaotong, China - Zhaotong Airport"
   case "CGO":
      return "Zhengzhou, China"
   case "PZH":
      return "Zhob, Pakistan - Zhob Airport"
   case "HSN":
      return "Zhoushan, China - Zhoushan Airport"
   case "ZUH":
      return "Zhuhai, China - Zhuhai Airport"
   case "IEG":
      return "Zielona Gora, Poland - Zielona Gora Airport"
   case "QZL":
      return "Zliten (Zlitan), Libya"
   case "ZRH":
      return "Zurich, Switzerland Zurich"
   case "ZQW":
      return "Zweibruecken, Germany"

   default: 
      return "Unknown IATA code"
   }
}

const convertAirlineCodeToFullName = (airlineCode) => {
   switch (airlineCode) {
      case "D8":
         return "Jotian"

      default: 
         return "Uknown airline"
   }
}

const getIATACityFromCityName = (cityName) => {

   console.log("CITY NAME", cityName)
   console.log("PERKELE-123", airportCodes[cityName])
   const IATACityCode = airportCodes[cityName]

   if (IATACityCode === undefined) {
      return "ÄÄÄ" // Magic IATA Code, provides response of 
      /**
      {
         "success": false,
         "data": null,
         "error": "bad request: unknown location code `SXF`",
         "status": 400
      }
       */
   }

   return IATACityCode

}



export default {
  convertIATAToCityAndCountry,
  getUrlImageFromIATACode,
  getIATACityFromCityName,
  swapKeysAndValues,
  airportCodes,
}