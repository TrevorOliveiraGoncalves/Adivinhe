// geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);
// contagem de tentativas
var guess = 1
// até acerto    
if(x == y) 
{
    alert("CONGRATS!!!!"+player_name+", voce acertou em "
              + guess + " tentativa(s)! ");
     guess= 1;
}
else if(x > y)
{
    guess++;
    alert("Opa, errou!!!! Tente menor!");
}
else
{
    guess++;
    alert("Opa, errou!!!! Tente maior!");
}
// função para o número enviado pelo usuário

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1)
}