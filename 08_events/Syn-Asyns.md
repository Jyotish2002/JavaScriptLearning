# 📚 Synchronous vs Asynchronous JavaScript

---

## ✅ Synchronous JavaScript

**Definition:**  
JavaScript by default **synchronous** aur **single-threaded** hota hai. Ye code ko ek line mein ek karke chalata hai, top se bottom tak.

**Kaise kaam karta hai:**  
Har line ko complete hona zaroori hai tabhi next line chalegi.

**Example:**

```javascript
console.log("1");
console.log("2");
console.log("3"); 
```
# ✅ Asynchronous JavaScript

---

## 📌 Definition

Asynchronous JavaScript kuch tasks ko **background mein** chala sakta hai bina main code ko roke rakhe.  
Isse JavaScript **non-blocking** ban jati hai — jab tak background task chal raha hota hai, baaki code aage badh sakta hai.

---

## 📌 Kaise kaam karta hai?

Asynchronous ka magic hota hai **JavaScript Runtime**, jo use karta hai:
- **Web APIs** (Browser ya Node.js provide karta hai)
- **Callback Queue**
- **Event Loop**

Ye sab milkar async tasks ko manage karte hain.  
Common async features:
- `setTimeout`
- `setInterval`
- `fetch` / AJAX requests
- Promises
- `async/await`
- Event Listeners (`click`, `keydown`, etc.)

---

## 📌 Example

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");

