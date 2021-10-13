const fs = require(`fs`)

fs.writeFileSync(`test.txt`,`node is great`)
const data = fs.readFileSync(`test.txt`)

console.log(data);

// כן התקבלה מחרוזת אך בבסיס 16 ,להמיר כל מספר מבסיס 16 לבסיס עשרוני 
// ולבדוק בטבלת הUTF8 
// מהי האות בעברית בעלת הערך הזה

// עמ לקבל מחרוזת תקינה נצטרך להוסיף פרמטר של קידוד הUTF8


