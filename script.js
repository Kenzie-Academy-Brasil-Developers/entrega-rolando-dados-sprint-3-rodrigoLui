
function test() {
    

    let arrayTest = []

        const rolarDados = () => {
            let dado1 = Math.floor(Math.random() * 6 + 1)
            let dado2 = Math.floor(Math.random() * 6 + 1)
            let soma = dado1 + dado2
            return soma
        }
        for (let i = 0; i < 100; i++) {
            let aux = rolarDados()

            if (arrayTest[i] === null) {
                arrayTest.push(aux)                
            }
            
        }

        console.log(arrayTest)
}

