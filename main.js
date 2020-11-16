function IfStatement (s, a) {
  if (s && (typeof s === 'string') && s.length) {
    s = s.replace(/{if\s(.+?)}(.+?){\/if}/g, function (match, variable, content) {
      return ((typeof a[variable] !== "undefined") && a[variable]) ? content : "";
    });
  }

  return s;
}

function main () {
  var el = document.getElementById("label");
  var lst = {
    name: true
  };

  el.innerHTML = IfStatement(el.innerHTML, lst);
}

window.onload=main;
