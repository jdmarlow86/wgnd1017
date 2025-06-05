# 📻 WGND-LP 101.7 FM – 3ABN Radio LaFollette, TN

Welcome to the official website repository for **WGND-LP 101.7 FM**, a 3ABN Radio affiliate broadcasting from **LaFollette, Tennessee**. This site is designed to provide listeners with easy access to streaming content, donation links, contact info, and spiritual resources — all through a clean, responsive, and static website hosted on GitHub Pages.

---

## 🌐 Live Website

**🔗 https://jdmarlow86.github.io/wgnd1017/**

---

## 📁 Project Structure

```bash
wgnd1017/
├── index.html              # Main landing page
├── thankyou.html           # Redirect page after contact form submission
├── css/
│   └── styles.css          # All custom site styles
├── js/
│   └── main.js             # Script section (currently used for optional interactivity)
├── images/                 # (Optional) Folder for icons or future images
├── README.md               # This file

---
🎯 Features
🎧 Embedded Radio Player from myTuner Radio
✝️ Station Overview and Spiritual Mission
📬 Contact Form powered by Formspree
💬 Live Chat support via Tawk.to
❤️ Links to trusted Seventh-day Adventist resources
💰 Optional PayPal donation link
📱 Fully responsive layout using clean HTML/CSS (no frameworks)
---

🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/wgnd1017.git
cd wgnd1017
2. Customize or Edit
You can edit content using any code editor (e.g., VS Code). Layout and style are handled in:

index.html – structure and content

css/styles.css – appearance

js/main.js – optional scripts (e.g. for animations or custom features)

3. Deploy to GitHub Pages
To publish the site on GitHub Pages:

Push your code to a GitHub repository.

Go to the Settings tab → Pages.

Under "Source," select the main branch and / (root) folder.

Save and wait for GitHub to build your site.

📬 Contact Form Setup (Formspree)
The contact form uses Formspree for backend-free submissions.

To configure:

Create a free Formspree account at https://formspree.io.

Create a new form and copy your form endpoint.

In index.html, replace this line:

html
Copy
Edit
<form action="https://formspree.io/f/myzjzwoo" method="POST">
with your unique Formspree URL.

Also ensure this redirect line matches your actual GitHub Pages thank you page:

html
Copy
Edit
<input type="hidden" name="_redirect" value="https://yourusername.github.io/wgnd1017/thankyou.html">
💬 Live Chat Integration (Tawk.to)
Sign up for a free account at https://tawk.to.

Set up your widget and copy the embed code.

Replace the Tawk script at the bottom of index.html with your own code:

html
Copy
Edit
<script type="text/javascript">
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function() {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = 'https://embed.tawk.to/YOUR_ID/default';
  s1.charset = 'UTF-8';
  s1.setAttribute('crossorigin', '*');
  s0.parentNode.insertBefore(s1, s0);
})();
</script>
💰 Donation Button (PayPal)
There’s a small PayPal “Support” button added in the footer. To personalize:

Go to PayPal Button Generator.

Get your hosted PayPal link.

Replace the placeholder in index.html:

html
Copy
Edit
<a href="https://www.paypal.com/donate?hosted_button_id=YOUR_ID" target="_blank">
It appears as:

html
Copy
Edit
<img src="https://img.icons8.com/ios-filled/50/000000/paypal.png" alt="PayPal Icon" />
Support
📱 Mobile Responsive Design
This site uses semantic HTML5 and vanilla CSS with media queries to scale gracefully on all screen sizes. No external libraries or frameworks like Bootstrap are used — just clean, minimal design.

👨‍💻 Developer Notes
All icons used are sourced from Icons8.

All styles are contained in css/styles.css. You can freely add class selectors and reorganize styles.

JavaScript is currently minimal but the structure (js/main.js) is ready for expansion.

📦 Future Enhancements
Add podcast or sermon archive

Include a newsletter subscription option

Social media embedding or sharing buttons

Event calendar integration

Prayer request form
