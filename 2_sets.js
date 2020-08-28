// Sets

function mySet() {
  // variable ini akan menangkap the set
  let collection = [];

  // Method ini akan mengecek untuk adanya elemen dan mengembalikan nilai true atau false
  this.has = function (element) {
    return (collection.indexOf(element) !== -1);
  }

  // Method ini akan mengembalikan semua nilai dalam sets
  this.values = function () {
    return collection
  }

  // Method ini akan menambahkan elemen dalam sets
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // Method ini akan menghilangkan elemen dalam sets
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false
  }

  // Method ini akan mengembalikan ukuran dari collection
  this.size = function () {
    return collection.length;
  };

  // Method ini akan mengembalikan gabungan 2 sets
  this.union = function (otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });

    secondSet.forEach(function (e) {
      unionSet.add(e);
    });

    return unionSet;
  }

  // Method ini akan mengenbalikan intersection dari 2 set sebagai set yang baru
  this.intersection = function (otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }

  // Method ini akan mengembalikan perbedaan dari 2 sets sebagai set yang baru
  this.difference = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    })
    return differenceSet;
  }

  // Method ini akan menguji jika sebuah set adalah subset (bagian) dari set yang berbeda
  this.subset = function (otherSet) {
    let firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  }
}

let setA = new mySet();
let setB = new mySet();
let setC = new mySet();
let setD = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
setC.add("d");

setD.add("a");
setD.add("b");
setD.add("c");
setD.add("d");
setD.add("e");
setD.add("f");
setD.add("g");

// Subset
console.log(setC.subset(setB));
console.log(setA.subset(setB));
console.log(setB.subset(setD));

// Intersection
console.log(setA.intersection(setB).values());
console.log(setB.intersection(setD).size());

// Has
console.log(setD.has("a"));

// Difference
console.log(setC.difference(setA).values());
console.log(setC.difference(setA).values());
setD.remove("a");
console.log(setA.difference(setD).values());


// Union
console.log(setA.union(setC).values());