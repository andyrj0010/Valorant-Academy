// ===============================
// FIREBASE IMPORTS
// ===============================

import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
}
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

// ===============================
// FIREBASE CONFIG
// ===============================

const firebaseConfig = {

  apiKey: "AIzaSyBCYDp0xCH1NVQqrPfkz5-bC1lSkVjyOH4",

  authDomain:
    "valorant-academy-56c80.firebaseapp.com",

  projectId:
    "valorant-academy-56c80",

  storageBucket:
    "valorant-academy-56c80.firebasestorage.app",

  messagingSenderId:
    "929335593907",

  appId:
    "1:929335593907:web:9511f75cf5a112b3bb99c6"

};

// ===============================
// INIT FIREBASE
// ===============================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// ===============================
// MODALES
// ===============================

const openBooking =
  document.getElementById("openBooking");

const bookingModal =
  document.getElementById("bookingModal");

const closeModal =
  document.getElementById("closeModal");

const planModal =
  document.getElementById("planModal");

const closePlanModal =
  document.getElementById("closePlanModal");

const closePlanButton =
  document.getElementById("closePlanButton");

const planButtons =
  document.querySelectorAll(".openPlanModal");

const openAuth =
  document.getElementById("openAuth");

const authModal =
  document.getElementById("authModal");

const closeAuth =
  document.getElementById("closeAuth");

const accountModal =
  document.getElementById("accountModal");

const closeAccountModal =
  document.getElementById("closeAccountModal");

// ===============================
// OPEN / CLOSE MODALS
// ===============================

openBooking?.addEventListener(
  "click",
  () => {

    bookingModal.classList.remove(
      "hidden"
    );

  }
);

closeModal?.addEventListener(
  "click",
  () => {

    bookingModal.classList.add(
      "hidden"
    );

  }
);

planButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      planModal.classList.remove(
        "hidden"
      );

    }
  );

});

closePlanModal?.addEventListener(
  "click",
  () => {

    planModal.classList.add(
      "hidden"
    );

  }
);

closePlanButton?.addEventListener(
  "click",
  () => {

    planModal.classList.add(
      "hidden"
    );

  }
);

openAuth?.addEventListener(
  "click",
  () => {

    authModal.classList.remove(
      "hidden"
    );

  }
);

closeAuth?.addEventListener(
  "click",
  () => {

    authModal.classList.add(
      "hidden"
    );

  }
);

closeAccountModal?.addEventListener(
  "click",
  () => {

    accountModal.classList.add(
      "hidden"
    );

  }
);

// ===============================
// CLICK OUTSIDE
// ===============================

window.addEventListener(
  "click",
  (e) => {

    if (e.target === bookingModal) {

      bookingModal.classList.add(
        "hidden"
      );

    }

    if (e.target === planModal) {

      planModal.classList.add(
        "hidden"
      );

    }

    if (e.target === authModal) {

      authModal.classList.add(
        "hidden"
      );

    }

    if (e.target === accountModal) {

      accountModal.classList.add(
        "hidden"
      );

    }

  }
);

// ===============================
// HEADER EFFECT
// ===============================

window.addEventListener(
  "scroll",
  () => {

    const header =
      document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {

      header.style.background =
        "rgba(0,0,0,0.9)";

    } else {

      header.style.background =
        "rgba(0,0,0,0.4)";

    }

  }
);

// ===============================
// BUTTON EFFECTS
// ===============================

const buttons =
  document.querySelectorAll("button");

buttons.forEach((button) => {

  button.addEventListener(
    "mouseenter",
    () => {

      button.style.boxShadow =
        "0 0 20px rgba(124,58,237,0.5)";

    }
  );

  button.addEventListener(
    "mouseleave",
    () => {

      button.style.boxShadow =
        "none";

    }
  );

});

// ===============================
// COPY BIZUM
// ===============================

window.copyBizum = function () {

  navigator.clipboard.writeText(
    "+34 600 000 000"
  );

  alert(
    "Número de Bizum copiado"
  );

};

// ===============================
// AUTH ELEMENTS
// ===============================

const createAccount =
  document.getElementById("createAccount");

const loginAccount =
  document.getElementById("loginAccount");

const authMessage =
  document.getElementById("authMessage");

const authEmail =
  document.getElementById("authEmail");

const authPassword =
  document.getElementById("authPassword");

const guestView =
  document.getElementById("guestView");

const userProfile =
  document.getElementById("userProfile");

const logoutBtn =
  document.getElementById("logoutBtn");

const googleLogin =
  document.getElementById("googleLogin");

// ===============================
// CREATE ACCOUNT
// ===============================

createAccount?.addEventListener(
  "click",
  async () => {

    const email =
      authEmail.value.trim();

    const password =
      authPassword.value.trim();

    if (!email || !password) {

      authMessage.innerHTML =
        "Completa todos los campos";

      authMessage.style.color =
        "#ff4d4d";

      return;

    }

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      authMessage.innerHTML =
        "Cuenta creada correctamente";

      authMessage.style.color =
        "#00ff88";

    } catch (error) {

      authMessage.innerHTML =
        error.message;

      authMessage.style.color =
        "#ff4d4d";

      console.log(error);

    }

  }
);

// ===============================
// LOGIN
// ===============================

loginAccount?.addEventListener(
  "click",
  async () => {

    const email =
      authEmail.value.trim();

    const password =
      authPassword.value.trim();

    if (!email || !password) {

      authMessage.innerHTML =
        "Completa todos los campos";

      authMessage.style.color =
        "#ff4d4d";

      return;

    }

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      authMessage.innerHTML =
        "Inicio de sesión correcto";

      authMessage.style.color =
        "#00ff88";

      setTimeout(() => {

        authModal.classList.add(
          "hidden"
        );

      }, 1000);

    } catch (error) {

      authMessage.innerHTML =
        "Correo o contraseña incorrectos";

      authMessage.style.color =
        "#ff4d4d";

      console.log(error);

    }

  }
);

// ===============================
// GOOGLE LOGIN
// ===============================

googleLogin?.addEventListener(
  "click",
  async () => {

    try {

      const provider =
        new GoogleAuthProvider();

      await signInWithPopup(
        auth,
        provider
      );

      authModal.classList.add(
        "hidden"
      );

    } catch (error) {

      console.log(error);

      authMessage.innerHTML =
        error.message;

      authMessage.style.color =
        "#ff4d4d";

    }

  }
);

// ===============================
// LOGIN STATUS
// ===============================

onAuthStateChanged(
  auth,
  (user) => {

    if (user) {

      guestView.classList.add(
        "hidden"
      );

      userProfile.classList.remove(
        "hidden"
      );

    } else {

      guestView.classList.remove(
        "hidden"
      );

      userProfile.classList.add(
        "hidden"
      );

    }

  }
);

// ===============================
// LOGOUT
// ===============================

logoutBtn?.addEventListener(
  "click",
  async (e) => {

    e.stopPropagation();

    await signOut(auth);

  }
);

// ===============================
// MI CUENTA
// ===============================

userProfile?.addEventListener(
  "click",
  () => {

    accountModal.classList.remove(
      "hidden"
    );

  }
);

// ===============================
// PERFIL
// ===============================

const profileImage =
  document.getElementById("profileImage");

const profileUpload =
  document.getElementById("profileUpload");

const accountName =
  document.getElementById("accountName");

const accountEmailEdit =
  document.getElementById("accountEmailEdit");

const saveAccount =
  document.getElementById("saveAccount");

const saveMessage =
  document.getElementById("saveMessage");

const headerAvatar =
  document.getElementById("headerAvatar");

// ===============================
// LOAD SAVED PROFILE
// ===============================

const savedImage =
  localStorage.getItem("profileImage");

if (savedImage) {

  profileImage.src =
    savedImage;

  headerAvatar.innerHTML = `
    <img src="${savedImage}">
  `;

}

// ===============================
// UPLOAD IMAGE
// ===============================

profileUpload?.addEventListener(
  "change",
  () => {

    const file =
      profileUpload.files[0];

    if (!file) return;

    const reader =
      new FileReader();

    reader.onload = (e) => {

      const image =
        e.target.result;

      profileImage.src =
        image;

      headerAvatar.innerHTML = `
        <img src="${image}">
      `;

      localStorage.setItem(
        "profileImage",
        image
      );

    };

    reader.readAsDataURL(file);

  }
);

// ===============================
// SAVE PROFILE
// ===============================

saveAccount?.addEventListener(
  "click",
  () => {

    localStorage.setItem(
      "profileName",
      accountName.value
    );

    localStorage.setItem(
      "profileEmail",
      accountEmailEdit.value
    );

    saveMessage.innerHTML =
      "Cambios guardados correctamente";

    saveMessage.style.color =
      "#00ff88";

  }
);

// ===============================
// BOOKING + DISCORD WEBHOOK
// ===============================

const bookingForm =
  document.querySelector(".booking-form");

bookingForm?.addEventListener(
  "submit",
  async (e) => {

    e.preventDefault();

    // DATOS FORMULARIO

    const inputs =
      bookingForm.querySelectorAll("input, select");

    const nombre =
      inputs[0].value;

    const apellidos =
      inputs[1].value;

    const discord =
      inputs[2].value;

    const rangoActual =
      inputs[3].value;

    const objetivo =
      inputs[4].value;

    // WEBHOOK

    const webhookURL =
      "https://discord.com/api/webhooks/1502947642894979162/4QCsivONHuFnfh7ujA4AugRqypaQXyZI3VHoueGwxoC-WLYrco1bXGKVc55OVkUwGdhS";

    // LOGO WEB

    const logo =
      "https://i.imgur.com/XgxXs1B.jpeg";

    // EMBED

    const payload = {

      username:
        "Valorant Academy",

      avatar_url:
        logo,

      embeds: [
        {

          title:
            "📩 Nueva Reserva de Coaching",

          color:
            8125871,

          thumbnail: {
            url: logo
          },

          fields: [

            {
              name: "👤 Nombre",
              value:
                `${nombre} ${apellidos}`,
              inline: false
            },

            {
              name: "🎮 Discord",
              value:
                discord,
              inline: true
            },

            {
              name: "🏆 Rango Actual",
              value:
                rangoActual,
              inline: true
            },

            {
              name: "🚀 Objetivo",
              value:
                objetivo,
              inline: true
            }

          ],

          footer: {
            text:
              "Valorant Academy"
          },

          timestamp:
            new Date()

        }
      ]
    };

    try {

      await fetch(
        webhookURL,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify(payload)
        }
      );

      alert(
        "Coaching reservado correctamente"
      );

      bookingModal.classList.add(
        "hidden"
      );

      bookingForm.reset();

    } catch (error) {

      console.log(error);

      alert(
        "Error al enviar reserva"
      );

    }

  }
);