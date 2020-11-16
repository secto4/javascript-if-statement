/*
* If statement function
*
* {!String} s Text content
* {!Object} o List of variables
*/
function IfStatement (s, o) {
  if (s && (typeof s === 'string') && s.length) {
    s = s.replace(/{if\s(.+?)}(.+?){\/if}/g, function (match, variable, content) {
      return ((typeof o[variable] !== 'undefined') && o[variable]) ? content : '';
    });
  }

  return s;
}

/*
* Main function
*/
function main () {
  var el = document.getElementById('label');
  var lst = {
    name: true
  };

  el.innerHTML = IfStatement(el.innerHTML, lst);
}

window.onload=main;
