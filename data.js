const information = [
  {
    busName: "Achim Paribahan Bus Route (আছিম পরিবহন)",
    route:
      "Gabtoli ⇄ Technical ⇄ Ansar Camp ⇄ Mirpur 1 ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Jamuna Future Park ⇄ Bashundhara ⇄ Nadda ⇄ Notun Bazar ⇄ Bashtola ⇄ Shahjadpur ⇄ Uttar Badda ⇄ Badda – Madhya Badda ⇄ Merul ⇄ Rampura Bridge ⇄ Banasree ⇄ Demra Staff Quarter",
  },
  {
    busName: "Active Paribahan Bus Route (এক্টিভ পরিবহন)",
    route:
      "Shia Masjid ⇄ Adabor ⇄ Shyamoli ⇄ Technical ⇄ Ansar Camp ⇄ Mirpur 1 ⇄ Sony Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewrapara ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur",
  },
  {
    busName: "Agradut Bus Route (অগ্রদূত)",
    route:
      "Savar ⇄ Hemayetpur ⇄ Amin Bazar ⇄ Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ Agargaon ⇄ Zia Uddyan ⇄ Bijoy Sarani ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Wireless ⇄ Gulshan 1 ⇄ Badda Link Road ⇄ Bashtola ⇄ Shahjadpur ⇄ Uttar Badda ⇄ Notun Bazar",
  },
  {
    busName:
      "Airport Bangabandhu Avenue Bus Route (এয়ারপোর্ট বঙ্গবন্ধু এভিনিউ ট্রান্সপোর্ট)",
    route:
      "Fulbaria ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Bijoy Sarani ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Chairman Bari ⇄ Sainik Club ⇄ Banani ⇄ Kakali ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur",
  },
  {
    busName: "Azmeri Glory Bus Route (আজমেরী গ্লোরী)",
    route:
      "Sadarghat ⇄ Ray Saheb Bazar ⇄ Naya Bazar ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Nabisco ⇄ Mohakhali ⇄ Sainik Club ⇄ Banani ⇄ Kakali ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Station Road ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur Bypass ⇄ Konabari ⇄ Chandra",
  },
  {
    busName: "Ajmi Bus Route (আজমী বাস)",
    route:
      "Dhamrai ⇄ Savar ⇄ Hemayetpur ⇄ Aminbazar ⇄ Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad gate ⇄ Dhanmondi 27 ⇄ Dhanmondi 32 ⇄ Kalabagan ⇄ City College ⇄ New Market ⇄ Nilkhet ⇄ Azimpur ⇄ Bakshi Bazar ⇄ Gulistan ⇄ Chittagong Road",
  },
  {
    busName: "Akash Bus Route (আকাশ বাস)",
    route:
      "\nKadamtali ⇄ Keraniganj ⇄ Babubazar ⇄ Naya Bazar ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi",
  },
  {
    busName: "Akik Bus Route (আকিক বাস)",
    route:
      "Ansar Camp ⇄ Mirpur 1 ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Jamuna Future Park ⇄ Bashundhara ⇄ Nadda ⇄ Notun Bazar ⇄ Bashtola ⇄ Shahjadpur ⇄ Uttar Badda",
  },
  {
    busName: "Al Makka Bus Route(আল মক্কা বাস)",
    route:
      "Motijheel – Gulistan – GPO – Paltan – Kakrail – Shantinagar – Malibagh Moor – Mouchak – Mogbazar – Nabisco – Mohakhali – Chairman Bari – Kakali – Banani – ECB Square – Kalshi – Purobi – Mirpur 10 – Mirpur 2 – Mirpur 1",
  },
  {
    busName: "Al Madina Plus One Bus Route (আল মনিদা প্লাস ওয়ান)",
    route:
      "Nandan Park ⇄ Zirani Bazar ⇄ Baipayl ⇄ Nobinagar ⇄ Savar ⇄ Hemayetpur ⇄ Amin Bazar ⇄ Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Motijheel ⇄ Kamalapur",
  },
  {
    busName: "Alif Bus Route (আলিফ বাস)",
    route:
      "Mirpur 14 ⇄ Mirpur 10 ⇄ Mirpur 2 ⇄ Sony Cenema Hall ⇄ Mirpur 1 ⇄ Mazar Road ⇄ Konabari ⇄ Rupnagar ⇄ Beribadh ⇄ Birulia ⇄ Ashulia ⇄ Zirabo ⇄ Fantasy Kingdom ⇄ Nandan Park",
  },
  {
    busName: "Alif Bus Route (আলিফ বাস)",
    route:
      "Shia Mosque ⇄ Japan Garden City ⇄ Adabor ⇄ Shyamoli ⇄ Shishu Mela ⇄ Agargaon ⇄ Zia Uddyan ⇄ Bijoy Sarani ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Wireless ⇄ Gulshan 1 ⇄ Badda Link Road ⇄ Madhya Badda ⇄ Merul ⇄ Rampura Bridge ⇄ Banasree",
  },
  {
    busName: "Alif Bus Route (আলিফ বাস)",
    route:
      "Mirpur 1 ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Agargaon ⇄ Bijoy Sarani ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Wireless ⇄ Gulshan 1 ⇄ Badda Link Road ⇄ Madhya Badda ⇄ Merul ⇄ Rampura Bridge ⇄ Banasree",
  },
  {
    busName: "Alif Bus Route (আলিফ বাস)",
    route:
      "Japan Garden City ⇄ Ring Road ⇄ Adabor ⇄ Shyamoli ⇄ Shishu Mela ⇄ Agargaon ⇄ Zia Uddyan ⇄ Bijoy Sarani ⇄ Old Airport ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Chairman Bari ⇄ Sainik Club ⇄ kakali ⇄ Banani ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur",
  },
  {
    busName: "Anabil Super Bus Route (অনাবিল সুপার)",
    route:
      "Sign Board ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Mugdapara ⇄ Bashabo ⇄ Khilgaon ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Uttar Badda ⇄ Shahjadpur ⇄ Bashtola -⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Station Road ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur Bypass ⇄ Gazipur Chourasta",
  },
  {
    busName: "Arnob Bus Route (অরনব বাস)",
    route:
      "Hemayetpur – Amin Bazar ⇄ Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ Agargaon ⇄ Zia Uddyan ⇄ Bijoy Sarani ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Wireless ⇄ Gulshan 1 ⇄ Badda Link Road ⇄ Madhya Badda ⇄ Merul ⇄ Rampura Bridge ⇄ Banasree ⇄ Demra Staff Quarter",
  },
  {
    busName: "Ashirbad Pahibahan Bus Route (আশীর্বাদ পরিবহন)",
    route:
      "Duaripara ⇄ Rupnagar Abashik ⇄ Shiyal Bari ⇄ Proshika Moor ⇄ Mirpur 2 ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Dhanmondi 27 ⇄ Shukrabad ⇄ Dhanmondi 32 ⇄ Kalabagan ⇄ City College ⇄ New Market ⇄ Nilkhet ⇄ Azimpur",
  },
  {
    busName: "Ashulia Classic Bus Route (আশুলিয়া ক্লাসিক বাস)",
    route:
      "Nobinagar ⇄ Baipayl ⇄ Jamgora ⇄ Fantasy Kingdom ⇄ Zirabo ⇄ Ashulia Bazar ⇄ Kamarpara ⇄ Abdullahpur ⇄ House Building ⇄ Azampur ⇄ Rajlakshmi ⇄ Jashimuddin (Uttara) ⇄ Airport ⇄ Khilkhet ⇄ Kuril Bishwa Road ⇄ Shewra ⇄ MES ⇄ Kakali ⇄ Banani ⇄ Chairman Bari ⇄ Mohakhali ⇄ Nabisco ⇄ Sat rasta",
  },
  {
    busName: "Asmani Bus Route (আসমানী বাস)",
    route:
      "Dhour ⇄ Abdullahpur ⇄ House Building ⇄ Azampur ⇄ Rajlakshmi ⇄ Jashimuddin (Uttara) ⇄ Airport ⇄ Khilkhet ⇄ Kuril Bishwa Road ⇄ Jamuna Future Park ⇄ Bashundhara ⇄ Nadda ⇄ Notun Bazar ⇄ Bashtola ⇄ Shahjadpur ⇄ Uttar Badda ⇄ Badda ⇄ Madhya Badda ⇄ Merul ⇄ Rampura Bridge ⇄ Banasree ⇄ Demra Staff Quarter ⇄ Tarabo ⇄ Madanpur",
  },
  {
    busName: "ATCL Bus Route (এটিসিএল বাস)",
    route:
      "Mohammadpur Bus Stand ⇄ Asad Gate ⇄ Shukrabad ⇄ Kalabagan City College ⇄ Science Lab – Katabon ⇄ Bata Signal ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Arambagh Notre Dame College",
  },
  {
    busName: "Ayat Bus Route (আয়াত বাস)",
    route:
      "Chiriyakhana ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Taltola ⇄ Agargaon ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Mogbazar ⇄ Mouchak ⇄ Malibagh Moor ⇄ Rajarbag ⇄ Kamalapur",
  },
  {
    busName: "Bahon Bus Route (বাহন বাস)",
    route:
      "Mirpur 14 ⇄ Mirpur 10 ⇄ Mirpur 2 ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Bangla College ⇄ Technical ⇄ Darussalam ⇄ Kallyanpur ⇄ Shyamoli ⇄ Asad Gate ⇄ Dhanmondi 27 ⇄ Dhanmondi 32 Kalabagan ⇄ Science Lab ⇄ Katabon ⇄ Shahbag ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ Dainik Bangla Moor ⇄ Motijheel ⇄ Arambagh ⇄ Kamlapur – Mugdapara ⇄ Bashabo ⇄ Khilgaon",
  },
  {
    busName: "Baishakhi Bus Route (বৈশাখী বাস)",
    route:
      "Savar ⇄ Hemayetpur ⇄ Amin Bazar ⇄ Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ Agargaon ⇄ Bijoy Sarani ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Gulshan 1 ⇄ Badda Link Road ⇄ Bashtola ⇄ Uttar Badda ⇄ Notun Bazar",
  },
  {
    busName: "Balaka Bus Route (বলাকা বাস)",
    route:
      "Sayedabad ⇄ Manik Nagar ⇄ TT Para – Kamalapur ⇄ Malibagh Moor ⇄ Mouchak ⇄ Mogbazar ⇄ Satrasta ⇄ Nabisco ⇄ Mohakhali ⇄ Chairman Bari ⇄ Banani ⇄ Kakali ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Station Road ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur Bypass ⇄ Gazipur Chourasta",
  },
  {
    busName: "Basumati Bus Route (বাসুমতি বাস)",
    route:
      "Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Manik Mia Avenue ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Golap Shah Mazar ⇄ Naya Bazar ⇄ Babubazar ⇄ Keraniganj ⇄ Maowa",
  },
  {
    busName: "Basumati Transport Bus Route (বাসুমতি ট্রান্সপোর্ট)",
    route:
      "Gabtoli – Mirpur 1 ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Station Road ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur Chourasta",
  },
  {
    busName: "Best Satabdi AC Bus Route (বেষ্ট শতাব্দী এসি বাস)",
    route:
      "Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Khamar Bari ⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Chairman Bari ⇄ Sainik Club ⇄ Banani ⇄ Kakali ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Diabari",
  },
  {
    busName: "Best Transport Bus Route (বেষ্ট ট্রান্সপোর্ট বাস)",
    route:
      "Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Taltola ⇄ Agargaon ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Motijheel ⇄ Ittefaq Moor ⇄ Sayedabad ⇄ Jatrabari",
  },
  {
    busName: "Bhuiyan Paribahan Bus Route (ভূঁইয়া পরিবহন)",
    route:
      "Japan Garden City ⇄ Ring Road ⇄ Adabor ⇄ Shyamoli ⇄ Shishu Mela ⇄ Agargaon ⇄ Zia Uddyan ⇄ Bijoy Sarani ⇄ Old Airport ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Chairman Bari ⇄ Sainik Club ⇄ Kakali ⇄ Banani ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur",
  },
  {
    busName: "Bihanga Bus Route (বিহাঙ্গা বাস)",
    route:
      "Mirpur 12 ⇄ Mirpur 11 ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Agargaon ⇄ Bijoy Sarani ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Wireless ⇄ Gulshan Bridge ⇄ Gulshan 1 ⇄ Badda ⇄ Notun Bazar",
  },
  {
    busName: "Bikalpa Bus Auto Service (বিকল্প বাস অটো সার্ভিস)",
    route:
      "Mirpur 12 ⇄ Pallabi ⇄ Purobi ⇄ Mirpur 11 ⇄ Mirpur 1 ⇄ Kazipara ⇄ Shewrapara – Taltola – Agargaon – Bijoy Sarani – Farmgate – Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Motijheel",
  },
  {
    busName: "Bikalpa Bus City Super Service (বিকল্প বাস সিটি সুপার সার্ভিস)",
    route:
      "Mirpur 12 ⇄ Pallabi ⇄ Purobi ⇄ Mirpur 11 ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara – Taltola ⇄ Agargaon ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Dhanmondi 27 ⇄ Dhanmondi 32 ⇄ Kalabagan ⇄ City College ⇄ New Market ⇄ Nilkhet ⇄ Azimpur – Dhakeshwari",
  },
  {
    busName: "Bikash Bus Route (বিকাশ বাস)",
    route:
      "Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 27 ⇄ Dhanmondi 32 ⇄ Khamar Bari ⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Sainik Club ⇄ Banani ⇄ Kakali ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Abdullahpur ⇄ Kamarpara",
  },
  {
    busName: "Bikash Paribahan Bus Route (বিকাশ পরিবহন বাস)",
    route:
      "Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ Chankhar Pul ⇄ Bakshi Bazar ⇄ Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Khamar Bari ⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Chairman Bari ⇄ Sainik Club ⇄ Banani ⇄ Kakali ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Kamarpara – Dhour",
  },
  {
    busName: "Bondhu Paribahan Bus Route (বন্ধু পরিবহন বাস)",
    route:
      "Gulistan ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar",
  },
  {
    busName: "Borak Bus Route (বোরাক বাস)",
    route: "Palashi ⇄ Meghna Ghat",
  },
  {
    busName: "Bashumoti Bus Route (বসুমতি বাস)",
    route:
      "Gazipur Chourasta ⇄ Tongi ⇄ Airport ⇄ Khilkhet ⇄ Kalshi Pallabi ⇄ Mirpur 11 ⇄ Mirpur 10 ⇄ Mirpur 1 ⇄ Gabtoli",
  },
  {
    busName: "Brihottor Mirpur Bus Route (বৃহত্তর মিরপুর বাস)",
    route:
      "Chiriyakhana ⇄ Mirpur 1 ⇄ Gabtoli ⇄ Amin Bazar ⇄ Savar ⇄ Nobinagar Chandra",
  },
  {
    busName: "BRTC Bus Route (বি আর টিসি বাস)",
    route:
      "Madanpur ⇄ Kanchpur ⇄ Chittagong Road ⇄ Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Khamar Bari ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Savar",
  },
  {
    busName: "BRTC Bus Route (বি আর টিসি বাস)",
    route:
      "Motijheel ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Chairman Bari ⇄ Kakali ⇄ Banani ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi",
  },
  {
    busName: "BRTC Bus Route (বি আর টিসি বাস)",
    route:
      "Motijheel ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Khamar Bari – Asad Gate – College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Baipayl ⇄ Zirani Bazar ⇄ Chandra",
  },
  {
    busName: "BRTC Bus Route (বি আর টিসি বাস)",
    route:
      "Mohammadpur ⇄ Asad Gate ⇄ Khamar Bari -⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Wireless ⇄ Gulshan 1 ⇄ Badda Link Road ⇄ Uttar Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road",
  },
  {
    busName: "BRTC Bus Route (বি আর টিসি বাস)",
    route:
      "Kamalapur ⇄ Motijheel ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Wireless ⇄ Gulshan 1 ⇄ Badda Link Road ⇄ Uttar Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road",
  },
  {
    busName: "BRTC Bus Route (বি আর টিসি বাস)",
    route:
      "Vulta ⇄ Kanchan Bridge ⇄ Nila Market ⇄ 300 Feet ⇄ Bashundhara (300 Feet Gate) ⇄ Kuril Bishwa Road",
  },
  {
    busName: "BRTC Bus Route (বি আর টিসি বাস)",
    route:
      "Motijheel ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur",
  },
  {
    busName: "BRTC Bus Route (বি আর টিসি বাস)",
    route:
      "Mohammadpur ⇄ Shankar ⇄ Star Kabab ⇄ Dhanmondi 15 ⇄ Jigatola ⇄ City College ⇄ Science Lab ⇄ Bata Signal ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Motijheel",
  },
  {
    busName: "BRTC Bus Route (বি আর টিসি বাস)",
    route:
      "Gabtoli ⇄ Mirpur 1 ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur Bypass ⇄ Gazipur Chourasta",
  },
  {
    busName: "BRTC Articulated Bus Route (বি আর টিসি আরটিকুলেটেড বাস)",
    route:
      "Balughat ⇄ Cantonment ⇄ Bijoy Sarani ⇄ Farmgate ⇄ Bangla Motor ⇄ Shahbag ⇄ Paltan ⇄ Gulistan ⇄ Motijheel",
  },
  {
    busName: "Cantonment Bus Route (ক্যান্টনমেন্ট বাস সার্ভিস)",
    route:
      "Mirpur 14 ⇄ Mirpur 10 ⇄ Mirpur 2 ⇄ Sony Cinema Hall ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Savar",
  },
  {
    busName:
      "Cantonment Mini Service Bus Route (ক্যান্টনমেন্ট মিনি বাস সার্ভিস)",
    route: "Mirpur 14 ⇄ Kachukhet ⇄ Sainik Club ⇄ Kakali ⇄ Banani ⇄ Mohakhali",
  },
  {
    busName: "Champion Bus Route (চ্যাম্পিয়ন বাস)",
    route:
      "Vashantek ⇄ Mirpur 14 ⇄ Mirpur 10 ⇄ Mirpur 2 ⇄ Sony Cenema Hall ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Gabtoli",
  },
  {
    busName: "City Link Bus Route (সিটি লিংক বাস)",
    route:
      "Chittagong Road ⇄ Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bata Signal ⇄ Science Lab ⇄ City College ⇄ Jigatola ⇄ Dhanmondi 15 ⇄ Star Kabab ⇄ Shankar ⇄ Mohammadpur ⇄ Bosila ⇄ Ghatar Char",
  },
  {
    busName: "D Link Bus Route (ডি লিংক বাস)",
    route:
      "Fulbaria ⇄ Chankhar Pul ⇄ Bakshi Bazar ⇄ Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Darussalam ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Savar ⇄ Dhamra",
  },
  {
    busName: "D One Transport Bus Route (ডি ওয়ান বাস)",
    route:
      "Motijheel ⇄ Dainik Bangla Moor ⇄ Paltan ⇄ Press Club ⇄ Matsya Bhaban ⇄ High Court ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Nobinagar ⇄ Dhamrai ⇄ Kalampur",
  },
  {
    busName: "Deepan Bus Route (দিপান বাস)",
    route:
      "\nTajmahal Road ⇄ Shankar ⇄ Dhanmondi 15 ⇄ Jigatola ⇄ City College ⇄ Science Lab ⇄ Shahbag ⇄ Matsya Bhaban ⇄ Paltan ⇄ Gulistan ⇄ Motijheel ⇄ Arambagh",
  },
  {
    busName: "Desh Bangla Bus Route (দেশ বাংলা বাস)",
    route:
      "Postagola ⇄ Dholairpar ⇄ Jatrabari ⇄ Sayedabad ⇄ Mugdapara ⇄ Bashabo ⇄ Khilgaon ⇄ Malibagh ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Uttar Badda ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Chourasta ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Kamarpara",
  },
  {
    busName: "Dewan Bus Route (দেওয়ান বাস)",
    route:
      "Azimpur ⇄ Eden College ⇄ Nilkhet ⇄ New Market ⇄ Science Lab ⇄ City College ⇄ Science Lab ⇄ Katabon ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Wireless ⇄ Gulshan 1 ⇄ Badda ⇄ Badda Link Road ⇄ Uttar Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road",
  },
  {
    busName: "Dhakar Chaka Bus Route (ঢাকার চাকা বাস)",
    route: "Police Plaza ⇄ Gulshan 1 ⇄ Gulshan 2",
  },
  {
    busName: "Dhakar Chaka Bus Route (ঢাকার চাকা বাস)",
    route: "Banani ⇄ Gulshan 2 ⇄ Notun Bazar",
  },
  {
    busName: "Dhaka Metro Service Bus Route (ঢাকার মেট্রো সার্ভিস বাস)",
    route:
      "Mirpur 1 ⇄ Kallyanpur ⇄ Shyamoli ⇄ Asad Gate ⇄ Shukrabad Kalabagan ⇄ Science Lab ⇄ New Market ⇄ Nilkhet ⇄ Azimpur",
  },
  {
    busName: "Dhaka Paribahan Bus Route (ঢাকা পরিবহন বাস)",
    route:
      "Gulistan ⇄ Shahbag ⇄ Farmgate ⇄ Banani ⇄ Uttara ⇄ Gazipur ⇄ Shib Bari",
  },
  {
    busName: "Dipon Bus Route (দিপোন বাস)",
    route:
      "Tajmahal Road ⇄ Salimullah Road ⇄ Jakir Hossen Road ⇄ Shankar ⇄ Star Kabab ⇄ Dhanmondi 15 ⇄ Jigatola ⇄ City College ⇄ Science Lab ⇄ Bata Signal ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ Baitul Mukarram ⇄ Gulistan ⇄ Motijheel ⇄ Arambagh",
  },
  {
    busName: "Dip Paribahan Bus Route (দ্বীপ পরিবহন বাস)",
    route:
      "Azimpur ⇄ City College ⇄ Kolabagan ⇄ Panthopoth ⇄ Karwan Bazar ⇄ Nabisco ⇄ Gulshan Link Road ⇄ Gulshan 1 ⇄ Kuril Bissho Road",
  },
  {
    busName: "Dishari Bus Route (দিসারি বাস)",
    route:
      "Chiriyakhana ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Golap Shah Mazar ⇄ Naya Bazar ⇄ Babubazar ⇄ Keraniganj",
  },
  {
    busName: "Elite Bus Route (এলিট বাস)",
    route:
      "Agargaon ⇄ Taltola ⇄ Shewrapara ⇄ Kazipara ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Pallabi ⇄ Kalshi ⇄ Kuril Bishwa Road ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi House Building ⇄ Abdullahpur",
  },
  {
    busName: "ETC Bus Route (ইটিসি বাস)",
    route:
      "Golap Shah Mazar ⇄ Shahbag ⇄ Bangla Motor ⇄ Farmgate ⇄ Agargaon ⇄ Shewrapara ⇄ Kazipara ⇄ Mirpur 10 ⇄ Pallabi ⇄ Mirpur 12",
  },
  {
    busName: "ETC Transport Bus Route (ইটিসি ট্রান্সপোর্ট বাস)",
    route:
      "\nGolap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Khamar Bari ⇄ Agargaon ⇄ Taltola ⇄ Shewrapara ⇄ Kazipara ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Pallabi ⇄ Mirpur 12",
  },
  {
    busName: "Everest Paribahan Bus Route (এভারেস্ট পরিবহন বাস)",
    route:
      "Rupnagar Abashik ⇄ Mirpur 2 ⇄ Mirpur 1 ⇄ Khamar Bari Farmgate ⇄ Gulistan ⇄ Keraniganj",
  },
  {
    busName:
      "Falgun Art Transport Private Limited Bus Route (ফাল্গুন আর্ট ট্রান্সপোর্ট প্রাইভেট লিমিটেড বাস)",
    route:
      "Azimpur ⇄ Nilkhet ⇄ New Market ⇄ Science Lab ⇄ Bata Signal ⇄ Katabon ⇄ Shahbag ⇄ Motso Vobon ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagg Mor ⇄ Mouchak ⇄ Malibagh Rail Gate ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Madhya Badda ⇄ Badda ⇄ Shahjadpur ⇄ Natun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bissho Road ⇄ Khilkhet ⇄ Airport ⇄ Rajlakshmi ⇄ Uttara House Building",
  },
  {
    busName: "First Ten Bus Route (ফার্স্ট টেন বাস)",
    route:
      "Vashantek ⇄ Mirpur 14 ⇄ Mirpur 10 ⇄ Mirpur 2 ⇄ Sony Cenema Hall ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Gabtoli",
  },
  {
    busName: "FTCL Bus Route (এফটিসিএল বাস)",
    route:
      "Mohammadpur ⇄ Shankar ⇄ Star Kabab ⇄ Jigatola ⇄ City College ⇄ Science Lab ⇄ Bata Signal ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Sayedabad ⇄ Janapath Moor ⇄ Jatrabari ⇄ Shonir Akhra ⇄ Rayerbag ⇄ Matuail ⇄ Sign Board ⇄ Chittagong Road",
  },
  {
    busName: "FTCL Bus Route (এফটিসিএল বাস)",
    route:
      "\nMohammadpur ⇄ Shankar ⇄ Dhanmondi 15 ⇄ Jigatola ⇄ City College ⇄ Science Lab ⇄ Shahbag ⇄ Matsya Bhaban ⇄ Paltan ⇄ Gulistan ⇄ Motijheel ⇄ Arambagh",
  },
  {
    busName: "Gazipur Paribahan Bus Route (গাজীপুর পরিবহন বাস)",
    route:
      "Motijheel ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Mogbazar ⇄ Nabisco ⇄ Mohakhali ⇄ Chairman Bari ⇄ Sainik Club ⇄ Kakali ⇄ Banani ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Station Road ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur Chourasta ⇄ Shib Bari",
  },
  {
    busName: "Grameen Bus Route (গ্রামীণ বাস)",
    route:
      "Mirpur 14 ⇄ Mirpur 10 ⇄ Mirpur 2 ⇄ Sony Cinema Hall ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Gabtoli",
  },
  {
    busName: "Grameen Suveccha Bus Route (গ্রামীণ শুভেচ্ছা বাস)",
    route:
      "\nFulbaria ⇄ Chankhar Pul ⇄ Bakshi Bazar ⇄ Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Darussalam ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Savar ⇄ Baipayl ⇄ Zirani Bazar ⇄ Nandan Park ⇄ Chandra",
  },
  {
    busName: "Green Anabil Bus Route (গ্রীন অনাবিল বাস)",
    route:
      "Chashara ⇄ Shibu Market ⇄ Jalkuri ⇄ Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Mugdapara ⇄ Bashabo ⇄ Khilgaon ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Uttar Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Station Road ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur Bypass ⇄ Gazipur Chourasta",
  },
  {
    busName: "Green Dhaka Bus Route (গ্রীন ঢাকা বাস)",
    route:
      "Motijheel ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Uttar Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur",
  },
  {
    busName: "Gulshan Chaka Bus Route (গুলশান চাকা বাস)",
    route: "Banani ⇄ Gulshan 2 ⇄ Notun Bazar",
  },
  {
    busName: "Hazi Transport Bus Route (হাজি ট্রান্সপোর্ট বাস)",
    route:
      "Mirpur 12 ⇄ Pallabi ⇄ Purobi ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Agargaon ⇄ Bijoy Sarani ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Motijheel",
  },
  {
    busName: "Himachal Bus Route (হিমাচল বাস)",
    route:
      "Mirpur Sony Cinema Hall ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Mohakhali ⇄ Gulshan 1 ⇄ Badda ⇄ Rampura Bridge ⇄ Rampura Bazar ⇄ Khilgaon Khidma Hospital",
  },
  {
    busName: "Himachal Suveccha Bus Route (হিমাচল শুভেচ্ছা বাস)",
    route:
      "\nMetro Hall ⇄ Chashara ⇄ Shibu Market ⇄ Jalkuri ⇄ Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Janapath Moor ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate Bijoy Sarani ⇄ Agargaon ⇄ Taltola ⇄ Shewrapara ⇄ Kazipara ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi Pallabi ⇄ Mirpur 12",
  },
  {
    busName: "Himalay Bus Route (হিমালয় বাস)",
    route:
      "Madanpur ⇄ Jatrabari ⇄ Bangladesh Bank ⇄ Mogbazar Mohakhali ⇄ Tongi",
  },
  {
    busName: "Itihash Bus Route (ইতিহাস বাস)",
    route:
      "Mirpur 14 ⇄ Mirpur 10 ⇄ Mirpur 2 ⇄ Sony Cinema Hall Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Savar ⇄ Nobinagar Baipayl ⇄ Zirani Bazar ⇄ Nandan Park ⇄ Chandra",
  },
  {
    busName: "J M Super Paribahan Bus Route (জে এম সুপার পরিবহন বাস)",
    route:
      "Jatrabari ⇄ Sayedabad ⇄ Mugdapara ⇄ Bashabo ⇄ Khilgaon ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Uttar Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi",
  },
  {
    busName: "Jabale Noor Paribahan Bus Route (জাবালে নুর পরিবহন বাস)",
    route:
      "Agargaon ⇄ Taltola ⇄ Shewrapara ⇄ Kazipara ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Pallabi ⇄ Kalshi ⇄ Kuril Bishwa Road ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi House Building ⇄ Abdullahpur",
  },
  {
    busName: "Jabale Noor Paribahan Bus Route (জাবালে নুর পরিবহন বাস)",
    route:
      "\nGabtoli ⇄ Mirpur 1 ⇄ Mirpur 10 ⇄ Kalshi ⇄ Kuril Flyover ⇄ Notun Bazar",
  },
  {
    busName: "Janjabil Bus Route (জানযাবিল বাস)",
    route:
      "Gabtoli ⇄ Beribadh Tin Rastar Moor ⇄ Rayer Bazar ⇄ Sikder Medical College ⇄ Hazaribag ⇄ Nawabganj ⇄ Kamrangirchar ⇄ Showari Ghat ⇄ Mitford Ghat ⇄ Babubazar",
  },
  {
    busName: "Kamal Plus Paribahan Bus Route (কামাল প্লাস পরিবহন বাস)",
    route:
      "Chittagong Road ⇄ Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ Chankhar Pul ⇄ Bakshi Bazar ⇄ Azimpur ⇄ Nilkhet ⇄ New Market ⇄ Science Lab ⇄ City College ⇄ Jigatola ⇄ Dhanmondi 15 ⇄ Star Kabab ⇄ Shankar ⇄ Mohammadpur ⇄ Ghatar Char",
  },
  {
    busName: "kanak Bus Route (কনক বাস)",
    route:
      "Mirpur 1 ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdulla",
  },
  {
    busName: "Khajababa Bus Route (খাজা বাবা বাস)",
    route:
      "Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Khamar Bari ⇄ Agargaon ⇄ Taltola ⇄ Shewrapara ⇄ Kazipara ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Pallabi ⇄ Mirpur 12",
  },
  {
    busName: "Kironmala Paribahan Bus Route (কিরণমালা বাস)",
    route:
      "Chiriyakhana ⇄ Mirpur 1 ⇄ Sony Cinema Hall ⇄ Rupnagar ⇄ Birulia ⇄ Ashulia ⇄ Zirabo ⇄ Narshinghapur ⇄ Sura Bari ⇄ Kashimpur ⇄ Jarun ⇄ Konabari",
  },
  {
    busName: "Labbayek Bus Route (লাব্বাইক বাস)",
    route:
      "Savar ⇄ Hemayetpur ⇄ Amin Bazar ⇄ Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Mogbazar ⇄ Mouchak ⇄ Malibagh Moor ⇄ Rajarbag ⇄ Khilgaon Flyover ⇄ Bashabo ⇄ Mugdapara ⇄ Manik Nagar ⇄ Golapbag Chourasta ⇄ Sayedabad ⇄ Janapath Moor ⇄ Jatrabari ⇄ Kazla ⇄ Shonir Akhra ⇄ Rayerbag ⇄ Matuail ⇄ Sign Board",
  },
  {
    busName: "Lal Sabuj (AC) Bus Route (লাল সবুজ এসি বাস)",
    route:
      "Nandan Park ⇄ Zirani Bazar ⇄ Baipayl ⇄ Nobinagar ⇄ Savar ⇄ Hemayetpur ⇄ Amin Bazar ⇄ Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Motijheel",
  },
  {
    busName: "Lams Paribahan Bus Route (লামস পরিবহন বাস)",
    route:
      "Mirpur 12 ⇄ Pallabi ⇄ Purobi ⇄ Mirpur 11 ⇄ Mirpur 1 ⇄ Kazipara ⇄ Shewrapara ⇄ Taltola ⇄ Agargaon ⇄ Bijoy Sarani ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ Dainik Bangla Moor ⇄ Motijheel",
  },
  {
    busName: "Malancha Bus Route (মালঞ্চ বাস)",
    route:
      "Mohammadpur ⇄ Shankar ⇄ Star Kabab ⇄ Dhanmondi 15 ⇄ Jigatola ⇄ City College ⇄ Science Lab ⇄ Bata Signal ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Dayaganj ⇄ Dhupkhola",
  },
  {
    busName: "Manjil Express Bus Route (মাঞ্জিল এক্সপ্রেস বাস)",
    route:
      "Chittagong Road ⇄ Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Malibagh Moor ⇄ Mouchak ⇄ Mogbazar ⇄ Satrasta ⇄ Nabisco ⇄ Mohakhali ⇄ Chairman Bari ⇄ Banani ⇄ Kakali ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur",
  },
  {
    busName: "Meghla Transport Bus Route (মেঘলা ট্রান্সপোর্ট বাস)",
    route:
      "Kalabagan ⇄ Science Lab ⇄ Katabon ⇄ Bata Signal ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Sayedabad ⇄ Jatrabari ⇄ Shonir Akhra ⇄ Sign Board ⇄ Kanchpur ⇄ Vulta",
  },
  {
    busName: "Meshkat Bus Route (মেসকাত বাস)",
    route:
      "Mohammadpur ⇄ Asad Gate ⇄ Khamar Bari ⇄ Farmgate ⇄ Bangla Motor ⇄ Shahbag ⇄ Matsya Bhaban ⇄ Paltan ⇄ Dainik Bangla Moor ⇄ Motijheel ⇄ Ittefaq Moor Sayedabad ⇄ Jatrabari ⇄ Shanir Akhra ⇄ Rayerbag ⇄ Matuail ⇄ Sign Board ⇄ Chittagong Road",
  },
  {
    busName: "Midline Bus Route (মিডলাইন বাস)",
    route:
      "Mohammadpur ⇄ Shankar ⇄ Star Kabab ⇄ Dhanmondi 15 ⇄ Jigatola ⇄ City College ⇄ Science Lab ⇄ Bata Signal ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ Gulistan ⇄ Motijheel ⇄ Arambagh ⇄ Kamalapur ⇄ Bashabo ⇄ Khilgaon",
  },
  {
    busName: "Mirpur Metro Services Bus Route (মিরপুর মেট্রো সার্ভিস বাস)",
    route:
      "Azimpur ⇄ Nilkhet ⇄ New Market ⇄ Science Lab ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Darussalam ⇄ Technical ⇄ Bangla College ⇄ Tolarbag ⇄ Ansar Camp ⇄ Mirpur 1",
  },
  {
    busName: "Mirpur Link Bus Route (মিরপুর লিংক বাস)",
    route:
      "ECB Square ⇄ Purobi ⇄ Mirpur 11 ⇄ Mirpur 10 ⇄ Kazipara Shewrapara ⇄ Agargaon ⇄ Khamar Bari ⇄ Dhanmondi 27 ⇄ Dhanmondi 32 ⇄ City College ⇄ New Market Nilkhet ⇄ Azimpur",
  },
  {
    busName: "Mirpur Mission Bus Route (মিরপুর মিশন বাস)",
    route:
      "Chiriyakhana ⇄ Mirpur 1 ⇄ Khamar Bari ⇄ Farmgate ⇄ Press Club ⇄ Motijheel",
  },
  {
    busName:
      "Mirpur Transport Service Bus Route (মিরপুর ট্রান্সপোর্ট সার্ভিস বাস)",
    route:
      "Gulistan ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Khamar Bari ⇄ Agargaon ⇄ Taltola ⇄ Shewrapara ⇄ Kazipara ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Pallabi ⇄ Mirpur 12",
  },
  {
    busName: "Mirpur United Service Bus Route (মিরপুর ইউনাইটেড সার্ভিস বাস)",
    route:
      "Sadarghat ⇄- Ray Saheb Bazar ⇄ Naya Bazar ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Khamar Bari ⇄ Agargaon ⇄ Taltola ⇄ Shewrapara ⇄ Kazipara ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Pallabi ⇄ Mirpur 12",
  },
  {
    busName: "MM Lovely Bus Route (এম এম লাভলী বাস)",
    route:
      "Savar ⇄ Hemayetpur ⇄ Amin Bazar ⇄ Gabtoli ⇄ Technical -⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Mogbazar ⇄ Mouchak ⇄ Malibagh Moor ⇄ Rajarbag ⇄ Khilgaon Flyover ⇄ Bashabo ⇄ Mugdapara ⇄ Manik Nagar ⇄ Golapbag Chourasta ⇄ Sayedabad ⇄ Janapath Moor ⇄ Jatrabari ⇄ Kazla ⇄ Shonir Akhra ⇄ Rayerbag ⇄ Matuail ⇄ Sign Board",
  },
  {
    busName: "Modhumita Bus Route (মধুমিতা বাস)",
    route:
      "Chiriyakhana ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ Agargaon ⇄ Bijoy Sarani ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Wireless ⇄ Gulshan 1 ⇄ Badda Link Road ⇄ Merul ⇄ Rampura Bridge ⇄ Banasree ⇄ Demra Staff Quarter",
  },
  {
    busName: "Mohona Bus Route (মোহনা বাস)",
    route:
      "Mirpur 14 ⇄ Mirpur 10 ⇄ Mirpur 2 ⇄ Sony Cinema Hall ⇄ Mirpur 1 ⇄ Mazar Road ⇄ Konabari ⇄ Rupnagar ⇄ Beribadh ⇄ Birulia ⇄ Ashulia ⇄ Zirabo ⇄ Fantasy Kingdom",
  },
  {
    busName: "Moitri Bus Route (মৈত্রী বাস)",
    route:
      "Mohammadpur ⇄ Shankar ⇄ Star Kabab ⇄ Dhanmondi 15 ⇄ Jigatola ⇄ City College ⇄ Science Lab ⇄ Bata Signal ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Motijheel ⇄ Arambagh",
  },
  {
    busName: "Moumita Bus Route (মৌমিতা বাস)",
    route:
      "Chashara ⇄ Shibu Market ⇄ Jalkuri ⇄ Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ Chankhar Pul ⇄ Bakshi Bazar ⇄ Azimpur – Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Darussalam ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Savar ⇄ Baipayl ⇄ Zirani Bazar ⇄ Nandan Park ⇄ Chandra",
  },
  {
    busName: "MTCL-2 Bus Route (এমটিসিএল ২ বাস)",
    route:
      "Mohammadpur ⇄ Asad Gate ⇄ Dhanmondi 27 ⇄ Dhanmondi 32 ⇄ Shukrabad ⇄ Kalabagan ⇄ City College ⇄ Science Lab ⇄ Bata Signal ⇄ Shahbag ⇄ Matsya Bhaban – High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Motijheel ⇄ Arambagh Kingdom",
  },
  {
    busName: "Nur E Makka Bus Route\n(নূর এ মক্কা বাস)",
    route:
      "Chiriyakhana ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Jamuna Future Park ⇄ Bashundhara ⇄ Nadda ⇄ Notun Bazar ⇄ Bashtola ⇄ Shahjadpur ⇄ Uttar Badda ⇄ Badda ⇄ Madhya Badda ⇄ Merul ⇄ Rampura Bridge ⇄ Rampura Bazar ⇄ Hazipara ⇄ Malibagh Railgate",
  },
  {
    busName: "Nabakali Bus Route Dhaka (নবকালি বাস)",
    route:
      "Chiriyakhana ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Dhanmondi 27 ⇄ Shukrabad ⇄ Dhanmondi 32 ⇄ Kalabagan ⇄ Science Lab ⇄ Katabon ⇄ Shahbag ⇄ High Court ⇄ Fulbaria ⇄ Naya Bazar ⇄ Babubazar ⇄ Keraniganj",
  },
  {
    busName: "New Vision Bus Route Dhaka (নিউ ভিশন বাস)",
    route:
      "Chiriyakhana ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ Dainik Bangla Moor ⇄ Motijheel",
  },
  {
    busName: "Nilachol Bus Route Dhaka (নিলাচল বাস)",
    route:
      "Chittagong Road ⇄ Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ Chankhar Pul ⇄ Bakshi Bazar ⇄ Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Darussalam ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Savar ⇄ Nobinagar ⇄ Manikganj ⇄ Paturia",
  },
  {
    busName: "Nishorgo Bus Route Dhaka (নিসর্গ বাস)",
    route:
      "Mirpur 14 Bus Stand ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Taltola ⇄ Agargaon ⇄ Asad Gate ⇄ Shyamoli ⇄ Mohammadpur ⇄ Shankar ⇄ Dhanmondi 15 ⇄ Jigatola ⇄ Science Lab ⇄ Dhaka College ⇄ New Market ⇄ Nilkhet ⇄ Eden College ⇄ Azimpur",
  },
  {
    busName: "Omama International Bus Route (ওমামা ইন্টারন্যাশনাল বাস)",
    route:
      "Motijheel ⇄ Dainik Bangla Moor ⇄ Paltan ⇄ Press Club ⇄ Matsya Bhaban ⇄ High Court ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Jahangir Gate ⇄ Mohakhali ⇄ Chairman Bari ⇄ Sainik Club ⇄ Banani ⇄ Kakali ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport",
  },
  {
    busName: "One Transport Bus Route (ওয়ান ট্রান্সপোর্ট বাস)",
    route:
      "Nandan Park ⇄ Zirani Bazar ⇄ Baipayl ⇄ Nobinagar ⇄ Savar ⇄ Hemayetpur ⇄ Amin Bazar ⇄ Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Motijheel",
  },
  {
    busName: "Pallabi Local Service Bus Route (পল্লবী লোকাল সার্ভিস বাস)",
    route:
      "Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Technical ⇄ Mirpur 1 ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Chalantika Moor ⇄ Mirpur 6 ⇄ Mirpur 11 ⇄ Mirpur 12",
  },
  {
    busName: "Pallabi Super Bus Route (পল্লবী সুপার বাস)",
    route:
      "Gabtoli ⇄ Technical ⇄ Ansar Camp ⇄ Mirpur 1 ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Kamarpara",
  },
  {
    busName: "Paristhan Bus Route (পরিস্থান বাস)",
    route:
      "Bosila ⇄ Mohammadpur ⇄ Asad Gate ⇄ College Gate ⇄ Shyamoli ⇄ Kallyanpur ⇄ Darussalam ⇄ Technical ⇄ Bangla College ⇄ Tolarbag ⇄ Ansar Camp ⇄ Mirpur 1 ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ House Building ⇄ Abdullahpur",
  },
  {
    busName: "Power Paribahan Bus Route (পাওয়ার পরিবহন বাস)",
    route:
      "Mirpur 14 ⇄ Mirpur 10 ⇄ Mirpur 2 ⇄ Sony Cinema Hall ⇄ Mirpur 1 ⇄ Mazar Road ⇄ Konabari ⇄ Rupnagar ⇄ Beribadh ⇄ Birulia ⇄ Ashulia ⇄ Zirabo ⇄ Narshinghapur ⇄ Sura Bari ⇄ Kashimpur ⇄ Jarun ⇄ Konabari",
  },
  {
    busName: "Prattay Bus Route (প্রত্যয় বাস)",
    route:
      "Gabtoli ⇄ Beribadh Tin Rastar Moor ⇄ Rayer Bazar ⇄ Sikder Medical College ⇄ Hazaribag ⇄ Nawabganj ⇄ Kamrangirchar ⇄ Showari Ghat ⇄ Mitford Ghat ⇄ Babubazar",
  },
  {
    busName: "Prochesta Bus Route (প্রচেষ্টা বাস)",
    route:
      "Maowa ⇄ Keraniganj ⇄ Babubazar ⇄ Naya Bazar ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Uttar Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur",
  },
  {
    busName: "Projapati Bus Route (প্রজাপতি বাস)",
    route:
      "Bosila ⇄ Mohammadpur ⇄ Asad Gate ⇄ College Gate ⇄ Shyamoli ⇄ Kallyanpur – Darussalam ⇄ Technical ⇄ Bangla College ⇄ Ansar Camp ⇄ Mirpur 1 ⇄ Mirpur 2 Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ House Building ⇄ Abdullahpur ⇄ Kamarpara",
  },
  {
    busName: "Provati Banasree Bus Route (প্রভাতী বনশ্রী বাস)",
    route:
      "Fulbaria ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mogbazar ⇄ Satrasta ⇄ Nabisco ⇄ Mohakhali ⇄ Chairman Bari ⇄ Banani ⇄ Kakali ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Station Road ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur Chourasta ⇄ Joydebpur ⇄ Sreepur ⇄ Baromi",
  },
  {
    busName:
      "Purbachol Logistics and Transport Bus Route (পূর্বাচল লজিস্টিকস বাস)",
    route:
      "Vashantek ⇄ Mirpur 14 ⇄ Mirpur 10 ⇄ Mirpur 2 ⇄ Sony Cinema Hall ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Savar ⇄ Baipayl ⇄ Zirani Bazar ⇄ Nandan Park ⇄ Chandra",
  },
  {
    busName: "Raida Bus Route Dhaka (রাইদা বাস)",
    route:
      "Postagola ⇄ Dholairpar ⇄ Jatrabari ⇄ Janapath Moor ⇄ Sayedabad ⇄ Mugdapara ⇄ Bashabo ⇄ Khilgaon ⇄ Malibagh Railgate ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Uttar Badda ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Chourasta ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Dia Bari",
  },
  {
    busName: "Raja City Bus Route Dhaka (রাজা সিটি বাস)",
    route:
      "Postagola ⇄ Jurain ⇄ Dayaganj ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Shahbag ⇄ Bata Signal ⇄ Science Lab ⇄ City College ⇄ Jigatola ⇄ Dhanmondi 15 ⇄ Star Kabab ⇄ Shankar ⇄ Mohammadpur ⇄ Bosila ⇄ Ghatar Char",
  },
  {
    busName: "Rajanigandha Bus Route Dhaka (রজনীগন্ধা বাস)",
    route:
      "Chittagong Road ⇄ Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari -⇄ Sayedabad ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Shahbag ⇄ Bata Signal ⇄ Science Lab ⇄ Jigatola ⇄ Dhanmondi 15 ⇄ Star Kabab ⇄ Shankar ⇄ Mohammadpur",
  },
  {
    busName: "Rajdhani Super Bus Route Dhaka (রাজধানী বাস)",
    route:
      "Hemayetpur ⇄ Gabtoli ⇄ Technical ⇄ Ansar Camp ⇄ Mirpur 1 ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Jamuna Future Park ⇄ Bashundhara ⇄ Nadda ⇄ Notun Bazar ⇄ Bashtola ⇄ Shahjadpur ⇄ Uttar Badda ⇄ Badda ⇄ Madhya Badda ⇄ Merul ⇄ Rampura Bridge ⇄ Banasree ⇄ Demra Staff Quarter",
  },
  {
    busName: "Ramjan Bus Route Dhaka (রমযান বাস)",
    route:
      "Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Mohammadpur ⇄ Shankar ⇄ Star Kabab ⇄ Dhanmondi 15 ⇄ Jigatola ⇄ City College ⇄ Science Lab ⇄ Bata Signal ⇄ Shahbag ⇄ Matsya Bhaban ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Banasree ⇄ Demra Staff Quarter",
  },
  {
    busName: "Robrob Bus Route Dhaka ( রবরব বাস)",
    route:
      "Gabtoli ⇄ Technical ⇄ Ansar Camp ⇄ Mirpur 1 ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Banani ⇄ Kakali ⇄ Gulshan 2 ⇄ Gulshan 1 ⇄ Badda Link Road ⇄ Merul ⇄ Rampura Bridge ⇄ Banasree",
  },
  {
    busName: "Rois Bus Route Dhaka (রাইস বাস)",
    route:
      "Mirpur Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Agargaon ⇄ Mohakhali ⇄ Gulshan 1 ⇄ Badda ⇄ Rampura Bridge ⇄ Banasree",
  },
  {
    busName: "Rongdhonu Express Bus Route Dhaka (রংধনু এক্সপ্রেস বাস)",
    route:
      "Adabor ⇄ Mohammadpur ⇄ Shia Mosque ⇄ Shyamoli ⇄ College Gate ⇄ Asad Gate ⇄ Kalabagan ⇄ Science Lab ⇄ Katabon ⇄ Bata Signal ⇄ Shahbag ⇄ Kakrail ⇄ Fakirapul ⇄ Motijheel ⇄ Dayaganj ⇄ Postagola",
  },
  {
    busName: "Runway Express Bus Route Dhaka (রানওয়ে এক্সপ্রেস বাস)",
    route:
      "Keraniganj ⇄ Kadamtali ⇄ Babubazar ⇄ Naya Bazar ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Agargaon ⇄ Shewrapara ⇄ Kazipara ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Mirpur 12 ⇄ ECB Square",
  },
  {
    busName: "Rupa Paribahan Bus Route Dhaka (রুপা পরিবহন বাস)",
    route:
      "Gabtoli ⇄ Technical ⇄ Ansar Camp ⇄ Mirpur 1 ⇄ Sony CInema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 14 ⇄ Vashantek",
  },
  {
    busName: "Rupkotha Bus Route Dhaka (রুপকথা বাস)",
    route:
      "Gabtoli ⇄ Mirpur 1 ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur",
  },
  {
    busName: "Safety Druti Bus Route (সেফটি দ্রুতি বাস)",
    route:
      "Mirpur 12 ⇄ Pallabi ⇄ Purobi ⇄ Mirpur 11 ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Taltola ⇄ Agargaon ⇄ Khamar Bari ⇄ Dhanmondi 27 ⇄ Dhanmondi 32 ⇄ Kalabagan ⇄ City College ⇄ New Market ⇄ Nilkhet ⇄ Azimpur",
  },
  {
    busName: "Sakalpa Transport Bus Route (স্বকল্প ট্রান্সপোর্ট বাস)",
    route:
      "Chiriyakhana ⇄ Mirpur 1 ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Agargaon ⇄ Bijoy Sarani ⇄ Farmgate ⇄ Bangla Motor ⇄ Mogbazar ⇄ Malibagh Moor ⇄ Kamalapur",
  },
  {
    busName: "Salsabil Bus Route (ছালছাবিল বাস)",
    route:
      "Postagola ⇄ Dholairpar ⇄ Jatrabari ⇄ Sayedabad ⇄ Mugdapara ⇄ Bashabo ⇄ Khilgaon ⇄ Malibagh Railgate ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Uttar Badda ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Chourasta ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Station Road ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur Bypass ⇄ Gazipur Chourasta",
  },
  {
    busName: "Savar Paribahan Bus Route (সাভার পরিবহন বাস)",
    route:
      "Sadarghat ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Science Lab ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Darussalam ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Savar ⇄ Baipayl ⇄ Zirani Bazar ⇄ Nandan Park",
  },
  {
    busName: "Shadhin Bus Route (স্বাধীন বাস)",
    route:
      "Bosila ⇄ Mohammadpur ⇄ Asad Gate ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Mogbazar ⇄ Mouchak ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Banasree ⇄ Demra Staff Quarter",
  },
  {
    busName: "Shadhin Express Bus Route (স্বাধীন এক্সপ্রেস বাস)",
    route:
      "Mirpur 12 ⇄ Pallabi ⇄ Purobi ⇄ Mirpur 11 ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Taltola ⇄ Agargaon ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Golap Shah Mazar ⇄ Naya Bazar ⇄ Babubazar ⇄ Keraniganj ⇄ Kadamtali ⇄ Rajendrapur ⇄ Maowa",
  },
  {
    busName: "Shahria Enterprise Bus Route (শাহরিয়া এন্টারপ্রাইজ বাস)",
    route:
      "Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Dhanmondi 27 ⇄ Dhanmondi 32 ⇄ Shukrabad ⇄ Kalabagan ⇄ City College ⇄ Science Lab ⇄ Katabon ⇄ Shahbag ⇄ Matsya Bhaban ⇄ Kakrail ⇄ Fakirapul ⇄ Arambagh ⇄ Motijheel ⇄ Ittefaq Moor ⇄ Tikatuli ⇄ Dayaganj ⇄ Gandaria ⇄ Jurain ⇄ Postagola",
  },
  {
    busName: "Shatabdi Bus Route (শতাব্দি বাস)",
    route:
      "Motijheel ⇄ Paltan ⇄ Kakrail ⇄ Malibagh Moor ⇄ Mouchak ⇄ Mogbazar ⇄ Satrasta ⇄ Nabisco ⇄ Mohakhali ⇄ Chairman Bari ⇄ Banani ⇄ Kakali ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Kamarpara",
  },
  {
    busName: "Shikhor Paribahan Bus Route (শিখর পরিবহন বাস)",
    route:
      "Mirpur 12 ⇄ Pallabi ⇄ Purobi ⇄ Mirpur 11 ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Taltola ⇄ Agargaon ⇄ Bijoy Sarani ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Janapath Moor ⇄ Jatrabari",
  },
  {
    busName: "Shikhor Paribahan Bus Route (শিখর পরিবহন বাস)",
    route:
      "Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Bijoy Sarani ⇄ Agargaon ⇄ IDB ⇄ Taltola ⇄ Shewrapara ⇄ Kazipara ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Pallabi ⇄ Purobi ⇄ Mirpur 12",
  },
  {
    busName: "Suveccha Bus Route (শুভেচ্ছা বাস)",
    route:
      "Chittagong Road ⇄ Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ Chankhar Pul ⇄ Bakshi Bazar ⇄ Dhakeshwari ⇄ Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Darussalam ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Savar ⇄ Nobinagar ⇄ Baipayl ⇄ Zirani Bazar ⇄ Nandan Park ⇄ Chandra",
  },
  {
    busName: "Suvojatri Bus (শুভযাত্রী বাস)",
    route:
      "Fulbaria ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bata Signal ⇄ Science Lab ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Darussalam ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Manikganj",
  },
  {
    busName: "Siam Transport Bus Route (সিয়াম ট্রান্সপোর্ট বাস)",
    route:
      "Banasree ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Kamarpara ⇄ Dhour ⇄ Beribadh ⇄ Ashulia ⇄ Zirabo ⇄ Fantasy Kingdom ⇄ Jamgora ⇄ Shimultola ⇄ Baipayl ⇄ Palli Bidyut ⇄ Savar Cantonment ⇄ Nobinagar",
  },
  {
    busName: "Skyline Bus Route (স্কাই লাইন বাস)",
    route:
      "Sadarghat ⇄ Ray Saheb Bazar ⇄ Naya Bazar ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Nabisco ⇄ Mohakhali ⇄ Chairman Bari ⇄ Sainik Club ⇄ Banani ⇄ Kakali ⇄ Staff Road ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Station Road ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur Chourasta",
  },
  {
    busName: "Somota Paribahan Bus Route (সমতা পরিবহন বাস)",
    route:
      "Chittagong Road ⇄ Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ Chankhar Pul ⇄ Bakshi Bazar ⇄ Dhakeshwari ⇄ Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Darussalam ⇄ Technical ⇄ Ansar Camp ⇄ Mirpur 1 ⇄ Rainkhola ⇄ Chiriyakhana",
  },
  {
    busName: "Somoy Bus Route (সময় বাস)",
    route:
      "Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad Janapath Moor ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Press Club ⇄ High Court ⇄ Matsya Bhaban ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Bijoy Sarani ⇄ Agargaon ⇄ IDB ⇄ Taltola ⇄ Shewrapara ⇄ Kazipara ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Pallabi ⇄ Purobi ⇄ Mirpur 12",
  },
  {
    busName: "Somoy Niyantran Bus Route (সময় নিয়ন্ত্রণ বাস)",
    route:
      "Mirpur 12 ⇄ Pallabi ⇄ Purobi ⇄ Mirpur 11 ⇄ Mirpur 10 ⇄ Kazipara ⇄ Shewrapara ⇄ Taltola ⇄ Agargaon ⇄ Bijoy Sarani ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Golap Shah Mazar ⇄ Naya Bazar ⇄ Babubazar ⇄ Keraniganj",
  },
  {
    busName: "Super Bus Route (সুপার বাস)",
    route:
      "Gulistan ⇄ Shahbag ⇄ Farmgate ⇄ Shyamoli ⇄ Gabtoli ⇄ Savar ⇄ Nobinagar",
  },
  {
    busName: "Supravat Bus Route (সুপ্রভাত বাস)",
    route:
      "Victoria Park ⇄ Sadarghat ⇄ Ray Saheb Bazar ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi",
  },
  {
    busName: "Swajan Paribahan Bus Route (স্বজন পরিবহন বাস)",
    route:
      "Savar ⇄ Hemayetpur ⇄ Amin Bazar ⇄ Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Golap Shah Mazar ⇄ Naya Bazar ⇄ Ray Saheb Bazar ⇄ Sadarghat",
  },
  {
    busName: "Talukdar Bus Route (তালুকদার বাস)",
    route:
      "Chiriyakhana ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Mogbazar ⇄ Mouchak ⇄ Malibagh Moor ⇄ Rajarbag ⇄ Khilgaon Flyover ⇄ Bashabo ⇄ Mugdapara ⇄ Manik Nagar ⇄ Golapbag Chourasta ⇄ Sayedabad ⇄ Janapath Moor ⇄ Jatrabari ⇄ Kazla ⇄ Shonir Akhra ⇄ Rayerbag ⇄ Matuail ⇄ Sign Board ⇄ Sanarpar ⇄ Chittagong Road",
  },
  {
    busName: "Tanjil Paribahan Bus Route (তানজিল পরিবহন বাস)",
    route:
      "Chiriyakhana ⇄ Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Golap Shah Mazar ⇄ Naya Bazar ⇄ Ray Saheb Bazar ⇄ Sadarghat",
  },
  {
    busName: "Taranga Plus Bus Route (তরঙ্গ প্লাস বাস)",
    route:
      "Mohammadpur Bus Stand ⇄ Shankar ⇄ Star Kabab ⇄ Dhanmondi 15 ⇄ Jigatola ⇄ City College ⇄ Science Lab ⇄ Bata Signal ⇄ Shahbag ⇄ Matsya Bhaban ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Banasree ⇄ South Banasree",
  },
  {
    busName: "Tetulia Bus Route (তেতুলিয়া বাস)",
    route:
      "Shia Mosque ⇄ Japan Garden City ⇄ Ring road ⇄ Adabor Shyamoli ⇄ Shishu Mela ⇄ Agargaon ⇄ Taltola ⇄ Shewrapara ⇄ Kazipara ⇄ Mirpur 10 ⇄ Mirpur 11 ⇄ Purobi ⇄ Pallabi ⇄ Kalshi ⇄ ECB Square ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ House Building ⇄ Abdullahpur",
  },
  {
    busName: "Thikana Bus Route (ঠিকানা বাস)",
    route:
      "Sign Board ⇄ Matuail ⇄ Rayerbag ⇄ Shonir Akhra ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ Chankhar Pul ⇄ Bakshi Bazar ⇄ Dhakeshwari ⇄ Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Darussalam ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Savar ⇄ Baipayl ⇄ Zirani Bazar ⇄ Nandan Park ⇄ Chandra",
  },
  {
    busName: "Thikana Express Bus Route (ঠিকানা এক্সপ্রেস বাস)",
    route:
      "Shonbari Sreenagar ⇄ Nimtola ⇄ Kuchimura ⇄ Rajendrapur ⇄ Hasnabad ⇄ Postagola ⇄ Jurain ⇄ Dholairpar ⇄ Jatrabari ⇄ Sayedabad ⇄ Gulistan ⇄ Chankhar Pul ⇄ Bakshi Bazar ⇄ Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Dhanmondi 32 ⇄ Dhanmondi 27 ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Darussalam ⇄ Technical ⇄ Gabtoli ⇄ Amin Bazar ⇄ Hemayetpur ⇄ Savar ⇄ Baipayl ⇄ Zirani Bazar ⇄ Nandan Park ⇄ Chandra",
  },
  {
    busName: "Titas Bus Route (তিতাস বাস)",
    route: "Chiriyakhana ⇄ Mirpur 1 ⇄ Gabtoli ⇄ Savar ⇄ Nobinagar Chandra",
  },
  {
    busName: "Transilva Bus Route (ট্রান্সিল্ভা বাস)",
    route:
      "Mirpur 1 ⇄ Ansar Camp ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Dhanmondi 27 ⇄ Dhanmondi 32 ⇄ Kalabagan ⇄ Science Lab ⇄ Bata Signal ⇄ Shahbag ⇄ Matsya Bhaban ⇄ High Court ⇄ Press Club Paltan ⇄ GPO ⇄ Gulistan ⇄ Motijheel ⇄ Sayedabad ⇄ Janapath Moor ⇄ Jatrabari",
  },
  {
    busName: "Trust Transport Services Bus Route (ট্রাষ্ট ট্রান্সপোর্ট বাস)",
    route:
      "Mirpur 10 ⇄ Mirpur 13 ⇄ Mirpur 14 ⇄ Kachukhet ⇄ Sainik Club ⇄ Banani",
  },
  {
    busName: "Trust Transport Services Bus Route (ট্রাষ্ট ট্রান্সপোর্ট বাস)",
    route:
      "Mirpur 10 ⇄ Mirpur 13 ⇄ Mirpur 14 ⇄ Kachukhet ⇄ Workshop ⇄ Saudi Colony ⇄ Jahangir Gate ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag",
  },
  {
    busName: "Trust Transport Services Bus Route (ট্রাষ্ট ট্রান্সপোর্ট বাস)",
    route:
      "Mirpur DOHS ⇄ Kalshi ⇄ ECB Square ⇄ Garrison (Cantonment) ⇄ Adamjee School ⇄ Workshop ⇄ Saudi Colony ⇄ Jahangir Gate ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ Dainik Bangla Moor ⇄ Motijheel",
  },
  {
    busName:
      "Trust Transport Services (AC) Bus Route (ট্রাষ্ট ট্রান্সপোর্ট বাস)",
    route:
      "Mirpur DOHS ⇄ Kalshi ⇄ ECB Square ⇄ Garrison (Cantonment) ⇄ Adamjee School ⇄ Workshop ⇄ Saudi Colony ⇄ Jahangir Gate ⇄ Farmgate ⇄ Kawran Bazar",
  },
  {
    busName: "Turag Bus Route (তুরাগ ট্রান্সপোর্ট বাস)",
    route:
      "Jatrabari ⇄ Sayedabad ⇄ Mugdapara ⇄ Bashabo ⇄ Khilgaon ⇄ Malibagh Moor ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Uttar Badda ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Chourasta ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi",
  },
  {
    busName: "Victor Classic Bus Route (ভিক্টর ক্লাসিক বাস)",
    route:
      "Sadarghat ⇄ Ray Saheb Bazar ⇄ Naya Bazar ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Diabari",
  },
  {
    busName: "Victor Paribahan Bus Route (ভিক্টর পরিবহন বাস)",
    route:
      "Sadarghat ⇄ Ray Saheb Bazar ⇄ Naya Bazar ⇄ Golap Shah Mazar ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Malibagh Railgate ⇄ Hazipara ⇄ Rampura Bazar ⇄ Rampura Bridge ⇄ Merul ⇄ Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road",
  },
  {
    busName: "VIP 27 Bus Route (ভিআইপি ২৭ বাস)",
    route:
      "Azimpur ⇄ Nilkhet ⇄ New Market ⇄ City College ⇄ Kalabagan ⇄ Banani ⇄ Kakali ⇄ MES ⇄ Shewra ⇄ Kuril Bishwa Road ⇄ Khilkhet ⇄ Airport ⇄ Jashimuddin (Uttara) ⇄ Rajlakshmi ⇄ Azampur ⇄ House Building ⇄ Abdullahpur ⇄ Tongi ⇄ Station Road ⇄ Mill Gate ⇄ Board Bazar ⇄ Gazipur Chourasta",
  },
  {
    busName: "Welcome Bus Route (ওয়েলকাম বাস)",
    route:
      "Nandan Park ⇄ Zirani Bazar ⇄ Baipayl ⇄ Nobinagar ⇄ Savar ⇄ Hemayetpur ⇄ Amin Bazar ⇄ Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Khamar Bari ⇄ Farmgate ⇄ Kawran Bazar ⇄ Bangla Motor ⇄ Shahbag ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Gulistan ⇄ Motijheel",
  },
  {
    busName: "Winner Bus Route (উইনার বাস)",
    route:
      "Azimpur ⇄ Eden College ⇄ Nilkhet ⇄ New Market ⇄ Science Lab ⇄ City College ⇄ Kalabagan ⇄ Panthapath ⇄ Kawran Bazar ⇄ Bot tola ⇄ Nabisco ⇄ Mohakhali ⇄ Wireless ⇄ Gulshan 1 ⇄ Badda ⇄ Badda Link Road ⇄ Uttar Badda ⇄ Shahjadpur ⇄ Bashtola ⇄ Notun Bazar ⇄ Nadda ⇄ Bashundhara ⇄ Jamuna Future Park ⇄ Kuril Bishwa Road",
  },
  {
    busName: "13 No. Bus Route Dhaka (১৩নং বাস)",
    route:
      "Mohammadpur ⇄ Shankar ⇄ Star Kabab ⇄ Dhanmondi 15 ⇄ Jigatola ⇄ City College ⇄ Science Lab ⇄ New Market ⇄ Nilkhet ⇄ Azimpur",
  },
  {
    busName: "4 No. Alike Bus Route Dhaka (৪নং বাস)",
    route:
      "Balughat ⇄ Signal ⇄ CMH ⇄ Garrison (Cantonment) ⇄ Adamjee College ⇄ Workshop ⇄ Jahangir Gate ⇄ Bijoy Sarani ⇄ Farmgate ⇄ Bangla Motor ⇄ Shahbag ⇄ Paltan ⇄ Gulistan ⇄ Motijheel",
  },
  {
    busName: "6 No. Bus Route Dhaka (৬নং বাস)",
    route:
      "Kamalapur ⇄ Motijheel ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Mogbazar ⇄ Kawran Bazar ⇄ Farmgate ⇄ Jahangir Gate ⇄ Bijoy Sarani ⇄ Mohakhali ⇄ Gulshan 1 ⇄ Gulshan 2 ⇄ Notun Bazar",
  },
  {
    busName:
      "6 No. Motijheel Banani Transport Bus Route Dhaka (৬নং মতিঝিল বনানী ট্রান্সপোর্ট বাস)",
    route:
      "Kamalapur ⇄ Motijheel ⇄ Gulistan ⇄ GPO ⇄ Paltan ⇄ Kakrail ⇄ Shantinagar ⇄ Malibagh Moor ⇄ Mouchak ⇄ Mogbazar ⇄ Kawran Bazar ⇄ Farmgate ⇄ Jahangir Gate ⇄ Bijoy Sarani ⇄ Mohakhali ⇄ Gulshan 1 ⇄ Gulshan 2 ⇄ Notun Bazar",
  },
  {
    busName: "7 No. Bus Route Dhaka (৭নং বাস)",
    route:
      "Gabtoli ⇄ Technical ⇄ Kallyanpur ⇄ Shyamoli ⇄ Shishu Mela ⇄ College Gate ⇄ Asad Gate ⇄ Dhanmondi 27 ⇄ Dhanmondi 32 ⇄ Kalabagan ⇄ Science Lab ⇄ Katabon ⇄ Shahbag ⇄ High Court ⇄ Press Club ⇄ Paltan ⇄ GPO ⇄ Golap Shah Mazar ⇄ Gulistan ⇄ Naya Bazar ⇄ Ray Saheb Bazar ⇄ Sadarghat",
  },
  {
    busName: "8 No. Bus Route Dhaka (৮নং বাস)",
    route:
      "Jatrabari ⇄ Janapath Moor ⇄ Sayedabad ⇄ Motijheel ⇄ Dainik Bangla Moor ⇄ Paltan ⇄ Press Club ⇄ Matsya Bhaban ⇄ High Court ⇄ Shahbag ⇄ Bangla Motor ⇄ Kawran Bazar ⇄ Farmgate ⇄ Khamar Bari ⇄ Asad Gate ⇄ College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Technical ⇄ Gabtoli",
  },
  {
    busName: "9 No. Bus Route Dhaka (৯নং বাস)",
    route:
      "College Gate ⇄ Shishu Mela ⇄ Shyamoli ⇄ Kallyanpur ⇄ Darussalam ⇄ Technical ⇄ Bangla College ⇄ Tolarbag ⇄ Ansar Camp ⇄ Mirpur 1 ⇄ Sony Cinema Hall ⇄ Mirpur 2 ⇄ Proshika Moor ⇄ Pallabi ⇄ Mirpur 12",
  },
];
