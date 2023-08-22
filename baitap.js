// bai1
// let a=+prompt("Nhập tuổi bạn êi");
// if(a>=18){
//     console.log(alert("Đã đủ tuổi đi tù"));
// }else{
//     console.log(alert("Chưa đủ tuổi đi tù"));
// }



// bai2
// let a=+prompt("nhập time bạn êi");
// if(a<18){
//     console.log(alert("Good day"));
// }else{
//     console.log(alert("Good evening"));
// }


// bai3
// let time=+prompt("nhập time bạn êi");
// if(time<10){
//     console.log((alert("good morning")));
// }else if(time<20){
//     console.log(alert("good day"));
// }else if(time>20){
//     console.log(alertt("good evening"));
// }



// bai4
// let a=+prompt("Nhập số bạn êi");
// if(a%2){
//     alert("là số lẻ");
// }else{
//     alert("là số chẵn");
// }



// bai5
// let a=+prompt("nhạp số");
// switch(a%2==0){
//     case true: console.log(alert("là số chẵn"));   
//     break;

//     default: console.log(alert("là số lẻ"));
//     break;
// } 



/* bai 6
 let color=prompt("nhập màu đi con lợn");
 switch (color) {
     case "xanh":
         console.log(alert("xanh"));
         break;
     case "đỏ":
         console.log(alert("đỏ"));
         break;
     case "vàng":
         console.log(alert("vàng"));
         break;
     default:  console.log(alert("màu ko hợp lệ"));
        break;
/* }



/* bai 7
 let x=+prompt("nhập số nguyên");
 if(x==0){
     console.log(alert("là 0"));
 }else if(x>0){
     console.log(alert("là số nguyên dương"));
 }else if(x<0){
     console.log(alert("là số nguyên âm"));
 }
*/

/* bai8
 let weight=+prompt("nhập kg");
 let height=+prompt("nhập m");
 let bmi=weight/height**2;
 if(bmi<18.5){
     console.log(alert("cân nặng thấp"));
 }else if(bmi>=25){
     console.log(alert("thừa cân"));
 }
*/

/* bai 9
 let toan=+prompt("nhap diem toan");
 let li=+prompt("nhap diem li");
 let hoa=+prompt("nhap diem hoa");
 let van=+prompt("nhap diem van");
 let su=+prompt("nhap diem su");
 let dia=+prompt("nhap diem dia");
 let dtb=(toan+li+hoa+van+su+dia)/6;
 if(8<=dtb && dtb<=10){
     console.log(alert("học sinh giỏi"));
 }else if(6.5<=dtb && dtb<=7.9){
     console.log(alert("hoc sinh khá"));
 }else if(5<=dtb && dtb<=6.4){
    console.log(alert("hoc sinh tb"));
 }else if(dtb<5){
     console.log(alert("hoc sinh dốt"));
 }
*/

/* bai 10
    let month=+prompt(" tháng mấy?");
    switch (month) {
        case 1:
        case 11:
            console.log(alert("tháng có 31 ngày"));      
            break;
        case 2:console.log(alert("tháng có 28 ngày"));
            break;
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 12:
            console.log(alert("tháng có 30 ngày"));
    }
    */

        // bai 11:tính nhăm nhuận*****
    // let year=+prompt("năm ?");
    // if(year%4==0){
    //     if(year%100==0){
    //         if(year%400==0){
    //             console.log(alert("là năm nhuận"));
    //         }else{
    //             console.log(alert("ko phải năm nhuận"));
    //             }             
    //     }else{
    //         console.log(alert("là năm nhuận"));  
    //         }         
    // }else{
    //     alert("ko phải năm nhuận");
    // }


    // baitap:caulenh switch- case
    //  let month=+prompt("thang may ban ei");
    //  switch (month) {
    //     case 1:
    //         alert("thangs 1 co 31 ngay");
    //         break;
    //     case 2:
    //     case 3:
    //     case 4:
    //     case 5:
    //     case 6:
    //     case 7:
    //     case 8:
    //     case 9:
    //     case 10:
    //     case 11:
    //     case 12:
    //         alert("thang co 30 ngay")
    // }


    // baitap:may tinh don gian
    

    // let a = +prompt("nhap vao a");
    //   let b = +prompt("nhap vao b");
    //   let math = prompt("nhập các phép tính : +, -, *, /");
    //   let kq;
    //   switch (math) {
    //     case "+":
    //       kq = a + b;
    //       alert(`${kq}`);
    //       break;
    //     case "-":
    //       kq = a - b;
    //       alert(`${kq}`);
    //       break;
    //     case "*":
    //       kq = a * b;
    //       alert(`${kq}`);
    //       break;
    //     case "/":
    //       kq = a / b;
    //       alert(`${kq}`);
    //       break;
    //     default:
    //       break;}

    // baitap:tim max-min
    // let a=+prompt(" Nhập số a");
    // let b=+prompt(" Nhập số b");
    // let c=+prompt(" Nhập số c");
    // max=0
    // min=0
    // if(a>b){
    // max = a;
    // min =b;
    // }else{
    // max=b;
    // min=a;
    // }
    // if (c>max){
    // max=c;
    // }
    // else if(c<min){
    // min = c;
    // }
    // alert("max là " +max);
    // alert("min là " +min);