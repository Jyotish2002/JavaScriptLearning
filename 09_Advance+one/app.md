
# 📄 XMLHttpRequest Example Explanation

This example sends an **AJAX request** to the GitHub API using the classic **XMLHttpRequest** method and logs information about a GitHub user.

---

## ✅ HTML Part

```html
<body style="background-color: #212121; color: skyblue">
  0 UNSENT Client has been created. open() not called yet.<br />
  1 OPENED open() has been called.<br />
  2 HEADERS_RECEIVED send() has been called, and headers and status are available.<br />
  3 LOADING Downloading; responseText holds partial data.<br />
  4 DONE The operation is complete.
</body>
```

**What it does:**  
- Displays the meaning of each `readyState` of an `XMLHttpRequest`:
  - **0 UNSENT:** Request created but not opened yet.
  - **1 OPENED:** `open()` has been called.
  - **2 HEADERS_RECEIVED:** `send()` has been called, response headers are available.
  - **3 LOADING:** The response is downloading.
  - **4 DONE:** The request is finished.

---

## ✅ JavaScript Part

```js
const requestUrl = "https://api.github.com/users/Jyotish2002";

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Open a GET request to the API URL
xhr.open("GET", requestUrl);

// Define what happens when readyState changes
xhr.onreadystatechange = function () {
  console.log(xhr.readyState); // Log the current readyState

  // When the request is DONE (readyState 4)
  if (xhr.readyState === 4) {
    // Parse the JSON response text into a JS object
    const data = JSON.parse(this.responseText);

    console.log(typeof data); // Should log 'object'
    console.log(data.followers); // Logs the followers count
  }
};

// Send the request
xhr.send();
```

---

## ✅ What happens step by step

1. **Create URL:**  
   You define the GitHub API endpoint for the user `Jyotish2002`.

2. **Create XHR:**  
   `new XMLHttpRequest()` creates the XHR object.

3. **Open request:**  
   `.open("GET", requestUrl)` sets up the request, but doesn’t send it yet.

4. **Listen for state changes:**  
   `.onreadystatechange` runs every time `readyState` changes.

5. **Check for completion:**  
   When `readyState` is `4` (`DONE`), you parse the response JSON.

6. **Log data:**  
   `data.followers` shows how many followers that user has on GitHub.

7. **Send request:**  
   `.send()` actually sends the request to GitHub’s servers.

---

## ✅ Console output

Your console will log something like:
```
1
2
3
4
object
<number of followers>
```

---

## ✅ Note

`XMLHttpRequest` is the older way of making HTTP requests in JavaScript.  
Modern code usually uses `fetch()` or libraries like **Axios** instead — they are simpler and cleaner!

---

## ✅ Modern version (Bonus)

Same request using `fetch`:

```js
fetch("https://api.github.com/users/Jyotish2002")
  .then(response => response.json())
  .then(data => {
    console.log(typeof data); // 'object'
    console.log(data.followers);
  });
```

---

**📌 Summary:**  
You successfully learned how `XMLHttpRequest` works step by step, what `readyState` means, and how to handle JSON responses.

---
