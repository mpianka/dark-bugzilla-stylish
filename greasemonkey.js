// nadaj klasy do rozróżniania emaili
let email_list = document.getElementsByClassName('email');

for (let el of email_list) {
	let regexp_softax = /\@softax(.com.pl|.pl)$/;
  let regexp_bot = /\@softax.local$/;
  
  if (regexp_softax.test(el.attributes['href']['value'])) {
    el.className += " email__softax";
  } else if (regexp_bot.test(el.attributes['href']['value'])) {
    el.className += " email__bot";
  } else {
    el.className += " email__client";
  }
};

// klasy bugów
let bug_type = document.getElementById('static_bug_status');
let bug_type_text = bug_type.textContent.split('\n')[0].trim().toLowerCase();
let bug_type_text_second = bug_type.textContent.split('\n')[1].trim().toLowerCase();

bug_type.className += (" bugtype__" + bug_type_text)

if (bug_type_text_second !== "(edit)") {
  bug_type.className += (" bugtype__" + bug_type_text + "_" + bug_type_text_second);
}
