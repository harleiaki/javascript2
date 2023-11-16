var conta = 0;

document.write("Iniciado Loop" + "<br />");

// Inicia um loop do-while
do {
    document.write("Contagem atual:" + conta + "<br />");
    conta++;
} while (conta < 5);  // A condição é verificada após a execução do bloco

document.write("Loop interrompido!");
