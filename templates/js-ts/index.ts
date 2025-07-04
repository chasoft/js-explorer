// {{projectName}} - TypeScript Experimental Project
// Created with Chasoft JS Explorer

interface ProjectInfo {
  name: string
  language: string
  features: string[]
}

interface DemoMessage {
  text: string
  type: "success" | "info" | "warning"
}

const projectInfo: ProjectInfo = {
  name: "{{projectName}}",
  language: "TypeScript",
  features: [
    "Type Safety",
    "Modern JavaScript",
    "IntelliSense",
    "Compile-time Checks",
  ],
}

console.log(`🚀 Welcome to ${projectInfo.name}!`)
console.log(`📝 Language: ${projectInfo.language}`)
console.log(`✨ Features: ${projectInfo.features.join(", ")}`)

// Demo functionality with types
document.addEventListener("DOMContentLoaded", (): void => {
  const demoBtn = document.getElementById("demo-btn") as HTMLButtonElement
  const output = document.getElementById("output") as HTMLDivElement
  const typeInfo = document.getElementById("type-info") as HTMLDivElement

  if (demoBtn && output && typeInfo) {
    demoBtn.addEventListener("click", (): void => {
      const messages: DemoMessage[] = [
        { text: "🎉 Hello from TypeScript!", type: "success" },
        { text: "⭐ Type safety is awesome!", type: "info" },
        { text: "🔥 Ready for typed experimentation!", type: "success" },
        { text: "🚀 Let's build something amazing!", type: "info" },
      ]

      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)]

      output.innerHTML = `<p class="message ${randomMessage.type}">${randomMessage.text}</p>`

      // Show type information
      typeInfo.innerHTML = `
                <small class="type-info">
                    Type: DemoMessage = { text: string, type: '${randomMessage.type}' }
                </small>
            `
    })
  }
})

// Typed experimental functions
class ExperimentalFeatures {
  private readonly experimentName: string

  constructor(name: string) {
    this.experimentName = name
  }

  public runExperiment<T>(experiment: () => T): T {
    console.log(`🧪 Running experiment: ${this.experimentName}`)
    return experiment()
  }

  public logResult<T>(result: T): void {
    console.log(`📊 Result:`, result)
  }
}

// Generic function example
function processData<T>(data: T[], processor: (item: T) => T): T[] {
  return data.map(processor)
}

// Your experimental code goes here
function experiment(): void {
  console.log("🧪 Time to experiment with TypeScript!")

  // Example: Using the experimental features class
  const exp = new ExperimentalFeatures("Type Safety Demo")

  const result = exp.runExperiment(() => {
    const numbers: number[] = [1, 2, 3, 4, 5]
    return processData(numbers, (n) => n * 2)
  })

  exp.logResult(result)
}

// Uncomment to run your experiment
// experiment();
