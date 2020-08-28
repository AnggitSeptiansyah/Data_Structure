// Stacks

// functions yang menggunakan Stacks :
// push = mendorong data dari tumpukan
// pop = menghilangkan data dari tumpukan
// peek = menampilkan data dari tumpukan
// length = menentukan berapa banyak elemen pada tumpukan

let letters = []; //ini adalah stacks

let word = "ketek"

let rword = "";

// Meletakkan ejaan huruf pada stacks (tumpukan)
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// menghilangkan data dari tumpukan dalam urutan terbalik
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword == word) {
  console.log(word + " is a polindrome");
} else {
  console.log(word + " is not polindrome");
}