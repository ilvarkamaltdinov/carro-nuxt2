module.exports = {
  apps : [
    {
      name: "carro-dev",
      script: "npm",
      args: "run dev"
    },
    {
      name: "carro-prod",
      script: "npm",
      args: "run start"
    }
  ]
}
