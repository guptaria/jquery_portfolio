

var rootEl = $('#root');
var h1El=$('<h1>');
h1El.text("Portfolio");
var h2El=$('<h2>');
h2El.text("My Name is Priya");
rootEl.append(h1El);
rootEl.append(h2El);
// rootEl.css(‘color’,‘pink’);
var ulEl=$('<ul>');
var li1El=$('<li>');
var li2El=$('<li>');
var li3El=$('<li>');
ulEl.text("Languages i know: ");
li1El.text("HTML");
li2El.text("CSS");
li3El.text("Bootstrap");
ulEl.append(li1El);
ulEl.append(li2El);
ulEl.append(li3El);
rootEl.append(ulEl);

var imgEl=$('#img').attr('src',"butterfly.jpg");
rootEl.append(imgEl);

