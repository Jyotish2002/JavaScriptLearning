# 📌 Understanding Promises with Real Life Example

## ✅ What is a Promise?

- Promise = Future mein hone wala kaam.  
- JavaScript mein Promises **asynchronous kaam** handle karne ke liye use hote hain.  
- Example: Chai banana, Pizza order karna — dono async hain!

---

## 🍵 **Example: Chai Banana**

### 🔹 Without Promise

1. Paani garam karo  
2. Paani garam ho jaaye toh chai patti daalo  
3. Chini daalo  
4. Doodh daalo  
5. Chai ready

Ye synchronous process hai — sab kaam line mein hota hai.

---

### 🔹 With Promise

Paani garam hone mein time lagta hai — isliye usko `Promise` bana dete hain.

```javascript
const garamPaani = new Promise(function(resolve, reject) {
  setTimeout(() => {
    let paaniGaramaGaya = true;

    if (paaniGaramaGaya) {
      resolve("Paani garam ho gaya!");
    } else {
      reject("Gas khatam ho gayi, paani nahi garam hua!");
    }
  }, 2000);
});

garamPaani
  .then((message) => {
    console.log(message);
    console.log("Ab chai patti daal raha hoon...");
    console.log("Chini daal raha hoon...");
    console.log("Doodh daal raha hoon...");
    console.log("Chai ban gayi!");
  })
  .catch((error) => {
    console.log(error);
    console.log("Chai nahi ban payi...");
  })
  .finally(() => {
    console.log("Process khatam!");
  });
