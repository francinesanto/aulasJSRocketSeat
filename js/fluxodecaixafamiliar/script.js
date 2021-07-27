
let familia = {
 receitas:[2500,3200,250,360],
 despesas:[320,128,176,1400]
}

function sum(array){
    let total = 0;
    for(let value of array){
        total += value
    }
    return total
}
function FinaldoMes(){
  const totalReceitas = sum(familia.receitas)
  const totalDespesas= sum(familia.despesas)

  const total =  totalReceitas - totalDespesas

  const saldoPositivo= total >= 0

  let mensagem = "Negativo"

  if(saldoPositivo){
    mensagem ="Positivo"
  }
  console.log(`Seu Saldo é ${mensagem}: ${total.toFixed(2)}`)
} 

FinaldoMes()