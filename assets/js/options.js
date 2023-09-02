const hcatagory = localStorage.getItem('hcatagory');
const fileicon=`
<svg style="height: 19px; width:19px; opacity:0.9;" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
  <path fill="#FFA000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v8h40v-4C44,13.8,42.2,12,40,12z"/>
  <path fill="#FFCA28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z"/>
</svg>
`;

const cata1 =`
            <div class="rows file-icon subjs">${fileicon}<p>PHY 1st</p></div>  
            <div class="rows file-icon subjs">${fileicon}<p>PHY 2nd</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>HM 1st</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>HM 2nd</p></div>
            <div class="rows file-icon subjs">${fileicon}<p>Chem 1st</p></div>  
            <div class="rows file-icon subjs">${fileicon}<p>Chem 2nd</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>Bio 1st</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>Bio 2nd</p></div>
            <div class="rows file-icon subjs">${fileicon}<p>ICT</p></div>  
            <div class="rows file-icon subjs">${fileicon}<p>ENG</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>BAN</p></div> 
`;
const cata2 =`
            <div class="rows file-icon subjs">${fileicon}<p>PHY 1st</p></div>  
            <div class="rows file-icon subjs">${fileicon}<p>PHY 2nd</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>HM 1st</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>HM 2nd</p></div>
            <div class="rows file-icon subjs">${fileicon}<p>Chem 1st</p></div>  
            <div class="rows file-icon subjs">${fileicon}<p>Chem 2nd</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>Bio 1st</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>Bio 2nd</p></div>
            <div class="rows file-icon subjs">${fileicon}<p>ICT</p></div>   
`;
const cata3 =`
            <div class="rows file-icon subjs">${fileicon}<p>PHY 1st</p></div>  
            <div class="rows file-icon subjs">${fileicon}<p>PHY 2nd</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>HM 1st</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>HM 2nd</p></div>
            <div class="rows file-icon subjs">${fileicon}<p>Chem 1st</p></div>  
            <div class="rows file-icon subjs">${fileicon}<p>Chem 2nd</p></div> 
`;
const cata4 =`
            <div class="rows file-icon subjs">${fileicon}<p>PHY 1st</p></div>  
            <div class="rows file-icon subjs">${fileicon}<p>PHY 2nd</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>HM 1st</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>HM 2nd</p></div>
            <div class="rows file-icon subjs">${fileicon}<p>Chem 1st</p></div>  
            <div class="rows file-icon subjs">${fileicon}<p>Chem 2nd</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>Bio 1st</p></div> 
            <div class="rows file-icon subjs">${fileicon}<p>Bio 2nd</p></div>   
`;

const catacategories = {
    cata1: cata1,
    cata2: cata2,
    cata3: cata3,
    cata4: cata4
  };
  
  


  //chapters section
  const subjs1 = `
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০১ - ভৌতজগৎ ও পরিমাপ</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০২ - ভেক্টর</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৩ - গতিবিদ্যা</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৪ - নিউটনিয়ান বলবিদ্যা</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৫ - কাজ শক্তি ও ক্ষমতা</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৬ - মহাকর্ষ ও অভিকর্ষ</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৭ - পদার্থের গাঠনিক ধর্ম</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৮ - পর্যাবৃত্ত গতি</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৯ - তরঙ্গ</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ১০ - গ্যাসের গতি তত্ত্ব</p></div>
  `;

  const subjs2 = `
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০১ - তাপ গতি বিদ্যা</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০২ - স্থির তড়িৎ</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৩ - চল তড়িৎ</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৪ - তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৫ - তাড়িতচৌম্বকীয় অবেশ ও পরিবর্তী...</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৬ - জ্যামিতিক আলোকবিজ্ঞান</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৭ - ভৌত আলোকবিজ্ঞান</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৮ - আধুনিক পদার্থ বিজ্ঞান</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৯ - পরমাণুর মডেল এবং নিউক্লিয়ার</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ১০ - সেমিকন্ডাক্টটর ও ইলেক্ট্রনিক্স</p></div>
  `;
   /* HM 1st */
  const subjs3 =`
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০১ - ম্যাট্রিক্স ও নির্ণায়ক</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০২ - ভেক্টর</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৩ - সরলরেখা</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৪ - বৃত্ত</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৫ - বিন্যাস ও সমাবেশ</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৬ - ত্রিকোণমিতিক অনুপাত</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৭ - সংযুক্ত ও যৌগিক কোণের ত্রিকোন..</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৮ - ফাংশন ও ফাংশনের লেখচিত্র</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৯ - অন্তরীকরণ</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ১০ - যোগজীকরণ</p></div>
  `;
  /* HM 2nd */
  const subjs4 =` 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০১ - বাস্তব সংখ্যা ও অসমতা</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০২ - যোগাশ্রয়ী প্রোগ্রাম</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৩ - জটিল সংখ্যা</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৪ - বহুপদী ও বহুপদী সমীকরণ</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৫ - দ্বিপদী বিস্তৃতি</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৬ - কনিক</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৭ - বিপরীত ত্রিকোণমিতিক ফাংশন ও...</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৮ - স্থিতিবিদ্যা</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৯ - সমতলে বস্তুকনার গতি</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ১০ - বিস্তার পরিমাপ ও সম্ভাবনা</p></div>
  `;
  /* chem 1st */
  const subjs5 =`
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০১ - ল্যাবরেটরির নিরাপদ ব্যবহার</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০২ - গুণগত রসায়ন</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৩ - মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক ব..</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৪ - রাসায়নিক পরিবর্তন</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৫ - কর্মমুখী রসায়ন</p></div>  
  
  `;
/*   CHEM 2ND */
  const subjs6 =`
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০১ - পরিবেশ রসায়ন</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০২ - জৈব রসায়ন</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৩ - পরিমাণগত রসায়ন</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৪ - তড়িৎ রসায়ন</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৫ - অর্থনৈতিক রসায়ন</p></div>  

  `;
  /* bio 1st */
  const subjs7 =`
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০১ - কোষ ও এর গঠন</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০২ - কোষ বিভাজন</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৩ - কোষ রসায়ন</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৪ - অণুজীব</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৫ - শৈবাল ও ছত্রাক</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৬ - ব্রায়োফাইটা ও টেরিডোফাইটা</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৭ - নগ্মবীজী ও আবৃতবীজী উদ্ভিদ</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৮ - টিসু ও টিসুতন্ত্র</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৯ - উদ্ভিদ শরীরতত্ত্ব </p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ১০ - উদ্ভিদ প্রজনন</p></div>
  `;
/*   bio 2nd */
  const subjs8 =`
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০১ - প্রাণীর বিভিন্নতা ও শ্রেণীবিন্যাস</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০২ - প্রাণীর পরিচিতি</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৩ - মানব শরীরতত্ব: পরিপাক ও শোষণ</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৪ - মানব শরীরতত্ব: রক্ত ও সঞ্চালন</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৫ - মানব শরীরতত্ব: শ্বশনক্রিয়া ও শ্বশন</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৬ - মানব শরীরতত্ব: বর্জ্য ও নিষ্কাশন</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৭ - মানব শরীরতত্ব: চলন ও অংঙ্গচলনা</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৮ - মানব শরীরতত্ব: সমন্বয় ও নিয়ন্ত্রণ </p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৯ - মানব জীবনের ধারাবাহিকতা</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ১০ - মানবদেহের প্রতিরক্ষা</p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ১১ - জীনতত্ব ও বিবর্তন</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ১২ - প্রাণীর আচরণ</p></div>
  `;
/*  ICT */
  const subjs9 =`
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০১ - বিশ্ব ও বাংলাদেশ প্রেক্ষিত</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০২ - কমিউনিকেশন সিস্টেম ও নেটওয়ার্ক</p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৩ - সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস </p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৪ - ওয়েব ডিজাইন পরিচিতি ও HTML </p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৫ - প্রোগ্রামিং ভাষা</p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"> ০৬ - ডেটাবেজ ম্যানেজমেন্ট সিস্টেম</p></div> 
 
  `;
  const subjs10 =`
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"></p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"></p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"></p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"></p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"></p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"></p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"></p></div> 
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"></p></div>
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"></p></div>  
  <div class="rows file-icon chapt">${fileicon}<p class="cpt"></p></div>
  `;

  const subjscategories = {
    subjs1: subjs1,
    subjs2: subjs2,
    subjs3: subjs3,
    subjs4: subjs4,
    subjs5: subjs5,
    subjs6: subjs6,
    subjs7: subjs7,
    subjs8: subjs8,
    subjs9: subjs9,
    subjs10: subjs10
  };
  