export default function Service(list, form, typeB, elem) {
  if(!form) {return list.res;}
  const {date, wayy} = form;
  const newEntryDat = fromDateToString(date.dat);
  let flag = 0;
  if (newEntryDat || elem) {
    list.res.forEach((el) => {
      if (el.date === newEntryDat) {
        if (typeB === 'popup') { el.way = wayy.way*1; } else { el.way += wayy.way*1; } 
        flag = 1;
      }
      if (el.date === elem) {
        list.res.splice(list.res.indexOf(el), 1);
        flag = 1;
      }
    });
    if(flag === 1) {return list.res;}
  }
  
  const newEntry = {date: newEntryDat, way: wayy.way*1};
  list.res.push(newEntry);
  list.res.sort(compareDate);
  return list.res;
}

function fromStringToDate(date) {
  return date.split('.').reverse().join('-');
}
function fromDateToString(str) {
  return str.split('-').reverse().join('.');
}
function compareDate(a, b) {
  const Aa = Date.parse(fromStringToDate(a.date));
  const Bb = Date.parse(fromStringToDate(b.date));
  if (Aa > Bb) return -1;
  if (Aa === Bb) return 0;
  if (Aa < Bb) return 1;
}
