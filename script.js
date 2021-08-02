


    function test() {
        const rolarDados = () => {
            let dado1 = Math.floor(Math.random() * 6 + 1)
            let dado2 = Math.floor(Math.random() * 6 + 1)
            let soma = dado1 + dado2
            return soma
        }

        let frequencia = [0]

        for (let i = 0; i < 100; i++) {
            frequencia.push(rolarDados())
        }

        return frequencia
    }

