// {{projectName}} - JavaScript Experimental Project
// Created with Chasoft JS Explorer

console.log("🚀 Welcome to {{projectName}}!")

// Demo functionality
document.addEventListener("DOMContentLoaded", () => {
  const demoBtn = document.getElementById("demo-btn")
  const output = document.getElementById("output")

  if (demoBtn && output) {
    demoBtn.addEventListener("click", () => {
      const messages = [
        "🎉 Hello from {{projectName}}!",
        "⭐ JavaScript is awesome!",
        "🔥 Ready for experimentation!",
        "🚀 Let's build something cool!",
      ]

      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)]
      output.innerHTML = `<p class="message">${randomMessage}</p>`
    })
  }
})

// Your experimental code goes here
// Feel free to modify, add, or remove anything!

function experiment() {
  // Start your experiments here
  console.log("🧪 Time to experiment!")
}

// Uncomment to run your experiment
// experiment();
