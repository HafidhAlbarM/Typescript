function tambah(n1: number, n2: number, showResult: boolean, pharse: string) {
  if (showResult) {
    let hasilPenjuamlahan = n1 + n2;
    let output = pharse + hasilPenjuamlahan;
    console.log(output);
  } else {
    return n1 + n2;
  }
}

const nomor1 = 5;
const nomor2 = 2.8;

const hasil = tambah(nomor1, nomor2, true, "hasilnya adalah ");
// console.log(hasil);
