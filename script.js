function colocaNaTela() {
    




    const bnt = document.getElementById('bnt')
    bnt.addEventListener('click', function () {
        let count = [0,0,0,0,0,0,0,0,0,0,0,0,0]

        const rolarDados = () => {
            let dado1 = Math.floor(Math.random() * 6 + 1)
            let dado2 = Math.floor(Math.random() * 6 + 1)
            let soma = dado1 + dado2
            return soma
        }

        for (let i = 0; i < 1000; i++) {
            let rollOfDice = rolarDados()
            count[rollOfDice] = count[rollOfDice] + 1
        }

        const box = document.getElementById('box')

        for (let i = 2; i <= 12; i++) {
            const div = document.createElement('div')
            div.setAttribute('id', `miniBox${i}`)
            div.innerText = `${i}:${count[i]}`
            div.style.width = `${count[i] + 50}px`
            div.style.height = '30px'
            div.style.backgroundColor = 'grey'
            box.appendChild(div)
        }
        
    })
} colocaNaTela()