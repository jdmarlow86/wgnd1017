# 📻 WGND-LP 101.7 FM – 3ABN Radio LaFollette, TN

Welcome to the official website for **WGND-LP 101.7 FM**, a 3ABN Radio station based in **LaFollette, Tennessee**.

This website is built using **HTML and CSS**, hosted for free on **GitHub Pages**, and is designed to be simple and easy for anyone to update or maintain.

---

## 📁 What's Inside?

```
wgnd1017/
├── index.html          → Main page of the website
├── thankyou.html       → Shown after sending a contact message
├── css/
│   └── styles.css      → The design and layout styles
├── js/
│   └── main.js         → Extra behavior or interactivity
├── images/             → Icons or images used on the site
├── README.md           → This guide
```

---

## ✨ Features

- 🎧 Built-in Radio Player
- 📬 Contact Form (no coding required)
- 💬 Live Chat Support (Tawk.to)
- ❤️ Links to trusted SDA resources
- 💰 Donate with PayPal
- 📱 Looks great on phones and tablets

---

## 🛠 Tools You’ll Need

Before you begin, make sure you have:

- A GitHub account
- A code editor (we recommend [Visual Studio Code](https://code.visualstudio.com/))
- Basic knowledge of HTML and CSS
- [Git](https://git-scm.com/) installed (optional but helpful)


## 🚀 How to Get Started

> You don’t need to be a programmer! Just follow these steps.

### 1. Make a Copy (Clone the Site)

You’ll need a [GitHub account](https://github.com) first.

Then:

```bash
git clone https://github.com/YOUR_USERNAME/wgnd1017.git
cd wgnd1017
```

### 2. Edit the Website

You can open the folder in **VS Code** or any text editor.  
Update content in:

- `index.html` – the main content
- `css/styles.css` – change colors and layout
- `js/main.js` – optional JavaScript for features

### 3. Publish It Online

Go to your GitHub repo and:

1. Click **Settings**
2. Scroll to **Pages**
3. Under **Source**, select `main` branch and `/ (root)`
4. Click **Save**

GitHub will give you a link to your live website!

---

## 📬 Set Up the Contact Form

The contact form works using [Formspree.io](https://formspree.io).

### To activate it:

1. Sign up at Formspree
2. Create a form and copy your action URL
3. In `index.html`, update:

```html
<form action="https://formspree.io/f/your-id" method="POST">
```

Also update the redirect:

```html
<input type="hidden" name="_redirect" value="https://yourusername.github.io/wgnd1017/thankyou.html">
```

---

## 💬 Live Chat (Tawk.to)

Want a live chat box on the website?

1. Go to [tawk.to](https://tawk.to)
2. Sign up and create a widget
3. Copy their code and replace the current `<script>` at the bottom of `index.html`

---

## 💰 Add Your PayPal Donate Link

To let visitors donate:

1. Use [PayPal button generator](https://www.paypal.com/buttons/)
2. Replace this link in `index.html`:

```html
<a href="https://www.paypal.com/donate?hosted_button_id=YOUR_ID" target="_blank">
```

---

## 📱 Mobile Friendly

This site is designed to work on all screen sizes using basic CSS — no extra frameworks like Bootstrap.

---

## 💡 Future Ideas

- 📖 Sermon archive or podcast
- 📰 Newsletter signup

---

## 🙋 Need Help?

If you’re not sure how to do something, feel free to open an [Issue](https://github.com/jdmarlow86/wgnd1017/issues) or email jonmarlow@gmail.com

Happy building and God bless! 🙏
