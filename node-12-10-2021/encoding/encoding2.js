const fs = require(`fs`)

fs.writeFileSync(`test2`,`שלום עולם`)
data = fs.readFileSync(`test2`)

console.log(data);

// כן התקבלה מחרוזת אך בבסיס 16 ,להמיר כל מספר מבסיס 16 לבסיס עשרוני 
// ולבדוק בטבלת הUTF8 
// מהי האות בעברית בעלת הערך הזה

// עמ לקבל מחרוזת תקינה נצטרך להוסיף פרמטר של קידוד הUTF8
