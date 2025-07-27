# 🛍️ Front End - User UI

This is the **User-facing Front End** of the project, built with [React.js](https://reactjs.org/) and styled using [MUI](https://mui.com/). It allows users to interact with the e-commerce system, browse products, and perform common user operations.

---

## 📁 Project Structure

```
frontend_User/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   ├── contexts/         # React context (e.g., Auth, User)
│   ├── pages/            # Page components (Search Bar, Product Panel, etc.)
│   ├── services/         # API calls (e.g., authService, productService)
│   ├── App.js
│   └── main.jsx
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:phuongle841/thesisFrontEnd_User.git
cd frontend_User
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173)

---

## 🔑 Features

- 📟 User Authentication (Login, Register)
- 🛒 Product Browsing
- 🛍️ Add to Cart / View Product Details
- ✅ Responsive UI with MUI

---

## 🧹 Tech Stack

- **React.js**
- **Vite**
- **MUI (Material-UI)**
- **React Router v6**
- **React Context API** for state management

---

## 📌 To Do / Future Improvements

- [ ] Add support for pagination
- [ ] Hook up product updates to server
- [ ] Improve loading/error states
- [ ] Add tests (e.g., with Vitest or Jest)

---

## 🤝 Contribution

Feel free to fork this project and make your own enhancements. PRs are welcome!
