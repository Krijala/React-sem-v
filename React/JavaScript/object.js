const object = { 
    // key: value
    name: "Kree",
    address: "123 Street",
    age: 20,
    sum() {
      this.age += 1;
      return this.age;
    }
}
console.log(object.sum());
console.log(`${object.name}`);
console.log(object.address, "object");