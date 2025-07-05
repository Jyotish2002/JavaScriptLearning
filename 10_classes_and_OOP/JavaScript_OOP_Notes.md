
# 📌 JavaScript and Classes

---

## ✅ What is OOP?

**OOP** (Object-Oriented Programming) ek programming style hai jo real-world objects aur unke behavior ke around design hoti hai.  
JavaScript mein OOP ka use kar ke hum:
- Complex code ko simple aur manageable bana sakte hain.
- Code ko reuse kar sakte hain.
- Badi applications ko easily organize kar sakte hain.

---

## ✅ What is an Object?

- **Object** = Ek collection of **properties** aur **methods**.
  - **Properties**: Data (e.g., `name`, `age`).
  - **Methods**: Functions jo object pe kaam karte hain (e.g., `toLowerCase()`).

**Example:**  
\`\`\`javascript
const str = "Hello";
console.log(str.toLowerCase()); // Output: hello
\`\`\`
- \"Hello\" ek **String Object** hai.
- \`toLowerCase()\` uska method hai.

---

## ✅ Why Use OOP?

- **Reusability:** Ek baar likho, baar-baar use karo.
- **Organization:** Code ko structure aur flow milta hai.
- **Maintainability:** Bada project bhi aasani se handle ho jata hai.
- **Real-world mapping:** Real world cheezon ko directly code mein represent karna easy hota hai.

---

## ✅ Main Parts of OOP in JavaScript

---

### 🔹 Object Literal

Sabse simple tareeka object banane ka.

```javascript
const person = {
  name: "Jyotish",
  age: 21,
  greet: function() {
    console.log(\`Hello, \${this.name}\`);
  }
};

person.greet(); // Output: Hello, Jyotish
```

---

### 🔹 Constructor Function

Ek template banane ka tareeka jisse multiple objects bana sakte hain.

\`\`\`javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("Jyotish", 21);
console.log(user1); // Output: User { name: 'Jyotish', age: 21 }
\`\`\`

---

### 🔹 Prototype

JavaScript mein har function aur object ke saath ek hidden \`prototype\` hota hai.  
Usme common methods define kar sakte hain jo sab instances share karenge.

\`\`\`javascript
User.prototype.greet = function() {
  console.log(\`Hello, \${this.name}\`);
};

user1.greet(); // Output: Hello, Jyotish
\`\`\`

---

### 🔹 Classes

Modern JavaScript mein \`class\` ka use hota hai jo constructor aur prototype ko simple banata hai.

\`\`\`javascript
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Hello, \${this.name}\`);
  }
}

const user2 = new User("Jyotish", 21);
user2.greet(); // Output: Hello, Jyotish
\`\`\`

---

### 🔹 Instances, \`new\` aur \`this\`

- **\`new\` keyword:** Constructor ya class ko call karke **naya object (instance)** banata hai.
- **\`this\` keyword:** Us current instance ko refer karta hai.

Example:
\`\`\`javascript
const user3 = new User("Chai", 25);
user3.greet(); // Hello, Chai
\`\`\`

---

## ✅ The 4 Pillars of OOP

| Pillar | Description |
|-----------------|--------------------------------------------------------------|
| **Abstraction** | Complex details ko hide karke sirf zaroori cheez dikhana. |
| **Encapsulation** | Data aur methods ko ek box (object) mein band karna. Direct access rokna, methods se hi access dena. |
| **Inheritance** | Ek class dusri class ke features inherit karti hai (reuse kar sakte hain). |
| **Polymorphism** | Ek hi method ya function alag-alag tareeke se kaam karta hai. |

---

## ✅ Full Example (Combining All)

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} makes a sound.\`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(\`\${this.name} barks.\`);
  }
}

const dog1 = new Dog("Sheru");
dog1.speak(); // Output: Sheru barks.
```

**Is example mein:**  
- **Inheritance:** \`Dog\` class \`Animal\` se extend karti hai.
- **Polymorphism:** \`speak\` method ko override kiya gaya.
- **Abstraction:** User ko sirf \`speak()\` ka interface dikhta hai, andar ka implementation chhupa rehta hai.
- **Encapsulation:** \`name\` property aur \`speak\` method ek hi object mein band hain.

---

## ✅ Summary

✔️ JavaScript mein OOP ke core parts:
- Object Literal
- Constructor Function
- Prototype
- Classes
- Instance (\`new\`, \`this\`)

✔️ **4 Pillars**: Abstraction, Encapsulation, Inheritance, Polymorphism

✔️ OOP se code reusable, organized aur real-world friendly ban jata hai.

---


