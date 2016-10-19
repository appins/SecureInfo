# Secure Info
#### Encode phone numbers and email addresses in more secure ways

---

## Setting up
(You must have node.js installed)

Fire up a terminal and type

```
  git clone git@github.com:AppIns/SecureInfo.git
```

Then edit `setup.js` and change the phone number to your own

Then just type `make` and copy the output

---

## Deploying

Add `browser.js` into your webserver or whatever you run then add it in the head tag
```html
  <head>
    <script src="browser.js" charset="utf-8"></script>
</head>
```

Somewhere where you need the phone number just call
```js
  pndc(""); // Place the output you got from setting up inside the quotes
```
