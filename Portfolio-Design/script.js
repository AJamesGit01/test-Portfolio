function handleSubmit(e) {
    e.preventDefault();
    alert("Thanks for your message!");
  }
  function toggleMobileMenu() {
    const menu = document.getElementById("mobileSidebar");
    menu.classList.toggle("translate-x-full");
  }

  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        }
      }
    }
  }