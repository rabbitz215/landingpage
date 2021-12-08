//Tugas 1
const nama = "Galang";
var uts,uas,rata;
uts = 75;
uas = 70;
rata = (uts+uas)/2;
document.write("Nama : "+nama+"<br>UTS : "+uts+"<br>UAS : "+uas+"<br>Nilai Rata : "+Math.ceil(rata));
if(rata >= 75){
    rata = "Lulus";
}else if(rata >= 50 ){
    rata = "Remidi";
}else{
    rata = "Tidak Lulus";
}
document.write("<br>*Note : Selamat Anda "+rata+"<hr>");

//Tugas 2
let harga = [20000, 40000, 65000, 80000];
let i =0;
document.write("====|Data Barang|====");
do{
    document.write("<br>Data Barang-"+i+" Harga : "+harga[i]);
    if(harga[i] >= 50000){
        diskon = harga[i]*0.05;
        document.write("<br>*Diskon 5% : "+diskon);
    }
    i++;
}while(i < harga.length);
document.write("<hr>");

//Tugas 3
let daftar,bayar;
daftar = "sudah";
bayar = 1;
if(daftar == "sudah" && bayar == 1){
    document.write("<br>Silahkan ikut OSPEK");
}else if(daftar == "sudah" && bayar == 0){
    document.write("<br>Silahkan bayar terlebih dahulu");
}else{
    document.write("<br>Silahkan hubungi administrasi");
}