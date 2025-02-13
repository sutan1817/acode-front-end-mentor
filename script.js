person{
  constructor(nama,age,country){
    this.name=name;
    this.age=age;
    this.country=country;
  }
}
default(){
  console.log('name: ${this.name}');
  console.log('age: ${this.age}');
  console.log('country: ${this.country}');
}