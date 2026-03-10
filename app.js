// 1. Foydalanuvchi kiritgan matn ichidagi harflar sonini aniqlang. Misol: 'salom' → 5
let matn = prompt("Matn kiriting:");
console.log(matn.length);
//2. Matndagi oxirgi harfni chiqarib bering. Misol: 'hello' → o
console.log(matn.charAt(matn.length - 1));
//3. Matndagi birinchi harfni katta harfga o‘tkazing. Misol: 'salom' → Salom
let name = prompt("Ismingizni kiriting:");
let first = name[0].toUpperCase();
for (i = 1; i < name.length; i++) {
  first += name[i].toLowerCase();
}
console.log(first);
//4. Matn ichida nechta 'a' harfi borligini aniqlang. Misol: 'banana' → 3
let soz = prompt("So'z kiriting:").toLowerCase();
let a = 0;
for (i = 0; i < soz.length; i++) {
  if (soz[i] === "a") {
    a++;
  }
}
console.log(a);
// 5. Matndagi barcha harflarni katta harfga o‘tkazing. Misol: 'salom' → SALOM
console.log(matn.toUpperCase());
//6. Matndagi barcha harflarni kichik harfga o‘tkazing. Misol: 'HELLO' → hello
console.log(matn.toLowerCase());
// 7. Matnda 'js' so‘zi bor yoki yo‘qligini tekshiring. Misol: 'I love js' → true
let js = prompt("Matn kiriting:");
console.log(js.includes("js"));
// 8. Matndan faqat birinchi 5 ta belgini chiqarib bering. Misol: 'javascript' → javas
console.log(js.slice(0, 5));
//9. Matndan oxirgi 3 ta belgini chiqarib bering. Misol: 'javascript' → ipt
console.log(js.slice(-3));
// 10. Matndagi bo‘sh joylar sonini aniqlang. Misol: 'hello world js' → 2
let bosh = prompt("Matn kiriting:");
let count = 0;
for (let i = 0; i < bosh.length; i++) {
  if (bosh[i] === " ") {
    count++;
  }
}
console.log(count);
// 11. Matndagi unli harflar sonini aniqlang (a, e, i, o, u). Misol: 'hello' → 2
let matnunli = prompt("Matn kiriting:");
let unli = "aeiou";
let hisob = 0;
for (let i = 0; i < matnunli.length; i++) {
  if (unli.includes(matnunli[i])) {
    hisob++;
  }
}
console.log(hisob);
//12. Matndagi undosh harflar sonini aniqlang. Misol: 'hello' → 3
let natija = 0;
for (let i = 0; i < matnunli.length; i++) {
  if (!unli.includes(matnunli[i])) {
    natija++;
  }
}
console.log(natija);
//13. Matnni teskarisiga o‘girib chiqaring. Misol: 'hello' → olleh
let matn1 = prompt("Matn kiriting:");
let teskari = "";
for (let i = matn1.length - 1; i >= 0; i--) {
  teskari += matn1[i];
}
console.log(teskari);
// 14. Matn palindrom ekanligini tekshiring. Misol: 'level' → true
let matn2 = prompt("Matn kiriting:").toLowerCase();
let teskari2 = "";
for (let i = matn2.length - 1; i >= 0; i--) {
  teskari2 += matn2[i];
}
if (matn2 === teskari2) {
  console.log(true);
} else {
  console.log(false);
}
//15. Matndagi barcha 'a' harflarini '@' ga almashtiring. Misol: 'banana' → b@n@n@
let matn3 = prompt("Matn kiriting:");
let natija3 = "";
for (let i = 0; i < matn3.length; i++) {
  if (matn3[i] === "a") {
    natija3 += matn3[i].replace("a", "@");
  } else {
    natija3 += matn3[i];
  }
}
console.log(natija3);
//16. Matnda 'javascript' so‘zi nechta ekanligini aniqlang. Misol: 'javascript is good javascript' → 2
