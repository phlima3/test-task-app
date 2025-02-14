# 🎨 Random Background Color App

## 👋 Hey there!

Hello! My name is **Pedro**. I don’t know who you are, mysterious reviewer, but I’m honored to have you here evaluating my project. 🎩✨

I imagine you’ve probably seen **way too many** test tasks, so I’ll try to make this one at least **a little less boring**. If at any point you feel like sighing deeply and questioning life choices, I promise it’s **not intentional**. (Or is it? 🤔)

Anyway, let’s dive into this **amazing app that changes colors when you tap the screen** – I know, it’s revolutionary. 😆

---

## 📌 About the Project

This is a simple **React Native** app built with **Expo**, where:

- Tapping the screen **changes the background color randomly**
- It **saves a history of colors** so you can relive past choices (because nostalgia is important)
- You can **select a color from history** and set it as the background
- There’s a **reset button** in case you regret everything 😅

Oh, and yes, it works! No bugs, no magic tricks – just **pure, functional React Native sorcery**. 🔥

---

## 🎨 How Are Colors Generated?

I used a **random RGB generator** that I found on **Stack Overflow** because, let’s be honest, **99% of programming is Stack Overflow & Google**.  
🔗 [Reference](https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript)

```ts
const randomBetween = (min: number, max: number) =>
  min + Math.floor(Math.random() * (max - min + 1));

const getRandomColor = () => {
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r},${g},${b})`;
};
```

## 🛠️ Technologies Used

- React Native - Because native apps are cool
- Expo - Because setting up a full React Native project from scratch is painful
- FlashList - Because performance matters
- TypeScript - Because I enjoy catching errors before they break production

## 🧐 Design Decisions

- Minimalist UI → Since no Figma design was provided, I used my best judgment to make it intuitive.
- History limited to 20 colors → Because memory is precious.
- Automatic text color adjustment → To prevent text from disappearing into the background like a ninja.

## 📸 Pictures
<img width="340" alt="image" src="https://github.com/user-attachments/assets/821b7890-0283-441f-b1c9-7a7a4f264a3b" />
<img width="340" alt="image" src="https://github.com/user-attachments/assets/f1f79610-ca61-415e-88ab-a4c0dba8cca4" />
<img width="340" alt="image" src="https://github.com/user-attachments/assets/e3895525-75ae-4076-b3a9-664dc5a15faa" />



