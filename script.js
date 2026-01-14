// رفع جزء من كود الدوال مع اضافات عليه لاعطاء 
// العمر هل هو كبير صغير باستخدام اف الشرطية مع الزام المستخدم بادخال رقم لا غير 

// 6 "Minor" "إذا كان 18 فما فوق، وغير ذلك "Adult "فنكشن تأخذ العمر وتعيد . 
let age = prompt("enter ur age");
age = Number(age);
function checkAge(age) {
    if (isNaN(age)) {
        return "PLEASE ENTER YOUR AGE AS A NUMBER";
    }
    return age >= 18 ? "adult" : "minor";
}
console.log(checkAge(age));