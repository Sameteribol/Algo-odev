/*SORU 1
function listNumbers(X, N)
{
    let numbers = []
    for (let i = X; i <= N; i++ ){
        if(i >= 0) {
            numbers.push(i)
        }
    }
    return numbers;
}

console.log(listNumbers(11, 27)) */

/*SORU 2
function fibonacci(n){
    let fib = [1, 1];
    for(let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[ i-2 ];
    }
    return fib;
}

console.log(fibonacci(10))*/
/*SORU 3
function tamBolenleriBul(sayi){
    var tamBolenler = [];
    for(var i = 1; i <= sayi; i++) {
        if(sayi % i === 0) {
            tamBolenler.push(i);
        }
    }
    return tamBolenler;
}
var sayi = prompt("Bir sayi Girin");
var tamBolenler = tamBolenleriBul(sayi);
console.log("tam bölenler: "+ tamBolenler.join(",")); */


/*SORU 4
function findMiddle(a, b, c) {  
     if ((b <= a && a <= c) || (c <= a && a <= b))
     { return a;

     } else if ((a <= b && b <= c) || (c <= b && b <= a))

      { return b;

     } else { 
    return c; 
 } 
}
console.log(findMiddle((-5),(5), 10))*/

/*SORU 5
function splitRem (A, B) {
    let bolum = 0;
    while (A >= B){
        A = A - B;
        bolum++;
    }
    return{
        bolum:bolum,
        kalan: A
    };
}

console.log(splitRem(25,4)); */

/*SORU 6
function carpmaYap (a, b) {
    var sonuc = 0;
    for(var i = 0; i< Math.abs(b); i++){
        sonuc += Math.abs(a);
    }
    if ((a < 0 && b > 0)||(a > 0 && b < 0)){
        sonuc = -sonuc;
    }
    return sonuc;
}
var a = prompt(" Bir sayı girin");
var b = prompt ( "Bir sayı daha girin");
var sonuc = carpmaYap(a, b);
console.log("sonuç:"+sonuc)*/


/*SORU 7
function ortalamaHesapla(){
    var toplam = 0;
    var sayac = 0;
    var sayi =
    parseInt(prompt("Bir sayı girin(0 çıkmak için)"));
    while(sayi !==0){
        toplam += sayi;
        sayac++;
        sayi =
        parseInt(prompt("bir sayı daha girin(0 çıkmak için)"));
    }
    if(sayac === 0){
        console.log("hiç sayı girilmedi");
    } else {
        var ortalama = toplam / sayac;
        console.log("Girilen sayıların ortalaması:" + ortalama);
    }
}
ortalamaHesapla(); */




/*SORU 8
function toplamHesapla(){
    var tekToplam = 0;
    var ciftToplam = 0;
    for (var i = 0; i < 20; i++) {
        var sayi = parseInt(prompt((i + 1)+". sayı girinizz"));
        if (!isNaN(sayi)) {
            if (sayi % 2 === 0) {
                ciftToplam += sayi;
            } else {
                tekToplam += sayi;
            }
        } else {
            console.log("Geçersiz bir sayı girdinz tekrar deneyin:");
            i--;
        }
    }
    console.log("tek sayılaırn toplamı:" + tekToplam)
    console.log("cift sayılaırn toplamı:" + ciftToplam)
}
toplamHesapla(); */

/*SORU 9
function obebBul (a, b){
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

var sayi1 = 
parseInt(prompt("birinci sayıyı girin"));
var sayi2 =
parseInt(prompt("ikinci sayıyı girin"));
if(isNaN (sayi1)|| isNaN(sayi2)) {
console.log("Geçerli sayılar girilmedi tekrar deneyin");
} else {
    var obeb = obebBul(sayi1, sayi2);
    console.log("OBEB:" + obeb);
} */


/*function tekMiCiftMi() {
    var sayi = 
    parseInt(prompt("bir sayı girin"));
    if(sayi % 2 === 0) {
        console.log(sayi + "çift bir sayıdır");
    } else {
        console.log(sayi + "tek bir sayıdır");
    }
}
tekMiCiftMi();
- girilen sayının bir tam sayı olduğu varsaydım
- sayının pozitif negatf veya sıfır olabileceğini var saydım
- geçerli bir sayı girilceğini varsaydım */