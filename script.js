


    function test() {
        
        const botao = document.getElementById('bnt')
        botao.addEventListener('click', function () {
            
            const rolarDados = () => {
                let dado1 = Math.floor(Math.random() * 6 + 1)
                let dado2 = Math.floor(Math.random() * 6 + 1)
                let soma = dado1 + dado2
                return soma
            }
            let arrayTest = []
            for (let i = 0; i < 100; i++) {
                
                let valDados = rolarDados()
                arrayTest.push(valDados)
            }
            
            const box = document.getElementById('box')
            const div = document.createElement('div')
            
            for (let i = 0; i < array.length; i++) {
                
                const element = array[i];
                
            }
    



        })

        return frequencia
    }

