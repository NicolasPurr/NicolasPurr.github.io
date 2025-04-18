// /js/index.js
const translations = {
  en: {
    title: "FIBA Referees Manual",
    subtitle: "Chapter 2: Individual Officiating Techniques",
    chapters: [

      { title: "2.1 INTRODUCTION",
      desc: "Primary coverage in obvious plays.",
      link: "01_introduction.html" },

      { title: "2.2 DISTANCE & STATIONARY",
      desc: "To identify and understand the key points and impact of maintaining a proper distance from the play and being " +
      "stationary when refereeing competitive match ups.",
      link: "02_distance_&_stationary.html" },
      
      { title: "2.3 REFEREEING THE DEFENCE",
      desc: "To identify the primary focus when analysing a 1 on 1 play.",
      link: "03_refereeing_the_defence.html" },

      { title: "2.4 STAY WITH THE PLAY",
      desc: "To understand how to increase quality control in play situations.",
      link: "04_stay_with_the_play.html" },

      { title: "2.5 POSITIONING, OPEN ANGLE & ADJUSTMENTS",
      desc: "To understand the impact and technique of maximising the number of the players within your field of vision at all " +
      "times.", 
      link: "05_positioning,_open_angle_and_adjustments.html" },

      { title: "2.6 PRE-GAME CONFERENCE",
      desc: "To know the topics that have to be covered during the pre-game conference and " +
      "what functionalities are offered by the App.",
      link: "06_pre-game_conference.html" },

      { title: "2.7 MAKING A CALL, DECISION MAKING & COMMUNICATION",
      desc: "To know how to make the call and being able to immediately communicate the decision verbally and with standard " +
      "hand signals.",
      link: "07_making_a_call,_decision_making_and_communication.html" },

      { title: "2.8 SIGNALS & REPORTING",
      desc: "To identify the different phases and techniques of having strong and decisive signals as part of court presence.",
      link: "08_signals_&_reporting.html" },
      
      { title: "2.9 JUMP BALL / ACTIVE REFEREE (TOSSING THE BALL)",
      desc: "To identify the different phases and correct techniques during the ball toss.",
      link: "09_jump_ball_-_active_referee_(tossing_the_ball).html" },

      { title: "2.10 JUMP BALL / NON-ACTIVE REFEREE(S)",
      desc: "To identify the different tasks and techniques for non-administrating (passive) referees during the ball toss.",
      link: "10_jump_ball_-_non-active_referee(s).html" },
      
      { title: "2.11 COVERING A SHOT (PROTECT THE SHOOTER)",
      desc: "To have full coverage on all act of shooting situations.",
      link: "11_covering_a_shot_(protect_the_shooter).html" },
      
      { title: "2.12 THROW-IN ADMINISTRATION",
      desc: "To identify the standard phases and correct administration procedure for all throw-in situations.",
      link: "12_throw-in_administration.html" },
      
      { title: "2.13 FAKE A FOUL",
      desc: "To know what is a fake and how to manage the situation when it occurs.",
      link: "13_fake_a_foul.html" },
      
      { title: "2.14 CONTROL OF THE GAME AND SHOT CLOCK",
      desc: "Identify the correct techniques of how to control the game & shot clock.\n" +
      "Identify the most common play situation where a possible error might occur.\n" + 
      "Identify the correct procedure and methods of how to re-set the game or shot clock.",
      link: "14_control_of_the_game_and_shot_clock.html" },
    ]
  },

  pl: {
    title: "Podręcznik Sędziów FIBA",
    subtitle: "Rozdział 2: Indywidualne Techniki Sędziowania",
    chapters: [
      { title: "2.1 WPROWADZENIE",
      desc: "Ocena oczywistych zagrań w podstawowej strefie odpowiedzialności.", 
      link: "01_introduction.html" },

      { title: "2.2 DYSTANS I STATYCZNA POZYCJA",
      desc: "Istota i techniki utrzymywania odpowiedniego dystansu od akcji "
      + "i statycznej pozycji podczas oceny aktywnych par zawodników.",
      link: "02_distance_&_stationary.html" },

      { title: "2.3 SĘDZIOWANIE OBRONY",
      desc: "Skupienie uwagi na legalności gry obrońcy w ocenie gry 1 na 1.", 
      link: "03_refereeing_the_defence.html" },
      
      { title: "2.4 POZOSTAŃ Z AKCJĄ",
      desc: "Zwiększenie kontroli jakości podczas akcji.",
      link: "04_stay_with_the_play.html" },
      
      { title: "2.5 POZYCJONOWANIE I OTWARTY KĄT",
      desc: "Istota i techniki utrzymywania jak największej liczby zawodników w polu widzenia.",
      link: "05_positioning,_open_angle_and_adjustments.html" },
    
      { title: "2.6 ROZMOWA PRZEDMECZOWA",
      desc: "Tematy do omówienia podczas rozmowy przedmeczowej i prezentacja aplikacji FIBA iRef Pre-Game",
      link: "06_pre-game_conference.html" },
      
      { title: "2.7 DECYZJE I KOMUNIKACJA",
      desc: "Techniki podejmowania decyzji i ich natychmiastowego komunikowania w sposób werbalny oraz używając standardowych " +
      "gestów.",
      link: "07_making_a_call,_decision_making_and_communication.html" },
      
      { title: "2.8 SYGNALIZACJA",
      desc: "Etapy i techniki sygnalizacji - fundamentu prezencji boiskowej.",
      link: "08_signals_&_reporting.html" },
      
      { title: "2.9 RZUT SĘDZIOWSKI - SĘDZIA AKTYWNY",
      desc: "Etapy i techniki wykonywania rzutu sędziowskiego.",
      link: "09_jump_ball_-_active_referee_(tossing_the_ball).html" },

      { title: "2.10 RZUT SĘDZIOWSKI - SĘDZIOWIE PASYWNI",
      desc: "Obowiązki i techniki sędziów pasywych podczas rzutu sędziowskiego.",
      link: "10_jump_ball_-_non-active_referee(s).html" },
      
      { title: "2.11 OCHRONA STRZELCA",
      desc: "Pełna kontrola i prawidłowa ocena wszystkich akcji rzutowych.",
      link: "11_covering_a_shot_(protect_the_shooter).html" },
      
      { title: "2.12 WPROWADZENIE PIŁKI",
      desc: "Administrowanie i identyfikacja standardowych etapów wprowadzenia piłki.",
      link: "12_throw-in_administration.html" },
      
      { title: "2.13 UDAWANIE FAULU",
      desc: "Identyfikacja i reakcja na udawanie faulu.",
      link: "13_fake_a_foul.html" },
      
      { title: "2.14 KONTROLA ZEGARÓW",
      desc: "Techniki kontroli zegara czasu gry i czasu akcji." +
      "Identyfikacja sytuacji, w których najczęściej zdarzają się błędy." +
      "Procedura korekty czasu gry i czasu akcji.",
      link: "14_control_of_the_game_and_shot_clock.html" },
    ]
  }
};

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Cookie expiration time
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

function switchLanguage(lang) {
  setCookie("language", lang, 30); // Save language preference for 30 days
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("subtitle").innerText = translations[lang].subtitle;

  const chapterContainer = document.getElementById("chapters");
  chapterContainer.classList.add("px-3", "md:px-6");

  chapterContainer.innerHTML = translations[lang].chapters.map((ch, i) => `
    <a href="${ch.link}" class="flex items-center justify-between w-full bg-amber-500 text-white text-left px-4 py-4 rounded-lg 
      shadow-md transition duration-300 transform group hover:scale-105 hover:bg-amber-600">
      <div>
        <h2 class="text-xl font-semibold">${ch.title}</h2>
        <p class="text-sm opacity-80">${ch.desc}</p>
      </div>
      <img src="assets/basketball.png" alt="Chapter Image" class="w-16 h-16 invert transition duration-300 group-hover:rotate-45">
    </a>
  `).join("");
}
  
document.addEventListener("DOMContentLoaded", function () {
  const savedLang = getCookie("language") || "en";
  switchLanguage(savedLang);
  fetch("partials/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));
});