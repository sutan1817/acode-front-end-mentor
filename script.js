class person{
  constructor(nama,age,country){
    this.name = name;
    this.age = age;
    this.country = country;
  }
  default() {
  console.log(`name: ${this.name} `);
  console.log(`age: ${this.age}`);
  console.log(`country:${this.country}`);
 }
}
person1 =new person('fransisco',23,'italia');
person2 =new person('hera',21,'greeks');
person1.default();