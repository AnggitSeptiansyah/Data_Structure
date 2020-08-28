// Stacks

// functions yang menggunakan Stacks :
// push = mendorong data dari tumpukan
// pop = menghilangkan data dari tumpukan
// peek = menampilkan data dari tumpukan
// length = menentukan berapa banyak elemen pada tumpukan

let Stack = function () {
  this.count = 0;
  this.storage = {};

  // Menambahkan nilai pada akhir stacks (tumpukan)
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Menghilangkan dan return nilai pada akhir stacks(tumpukan)
  this.pop = function () {
    if (this.count === 0) {
      return undefined
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function () {
    return this.count;
  }

  // mengembalikan nilai di akhir stacks
  this.peek = function (value) {
    return this.storage[this.count - 1];
  }
}

let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(5);
// Menampilkan nilai paling atas == 5
console.log(myStack.peek());
// Menghlangkan nilai paling atas (menghilangkan nilai 5)
console.log(myStack.pop());
// Menampilkan nilai paling atas (karena nilai 5 hilang, maka data paling atas yaitu 2)
console.log(myStack.peek());
// Menghilang nilai paling atas (menghilang nilai 2)
console.log(myStack.pop());

myStack.push("Anggit Septiansyah");

// Menampilkan nilai paling atas = Anggit Septiansyah
console.log(myStack.peek());
// Menghilagkan nilai paling atas tumpukan (menghilangkan Anggit Septiansyah)
console.log(myStack.pop());
// Menampilkan nilai paling atas = 1
console.log(myStack.peek());
console.log(myStack.size());








