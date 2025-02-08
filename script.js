const tipo = "Orçamento";
const tipo2 = "Recibo";
const razaosicial = "Souza Poda e Cortes";
const cnpj = "33.754.816/0001-60";
const separador = "———————————————————————————————————————————";

const dataAtual = new Date();
const opcoesFormatacao = { day: "numeric", month: "2-digit", year: "numeric" };
const dataFormatada = dataAtual.toLocaleDateString("pt-BR", opcoesFormatacao);

function Orcamento() {
  const clienteNome = document.getElementById("clienteNome").value;
  const descricaoServico = document.getElementById("descricaoServico").value
  const precoServico = document.getElementById("precoServico").value;
  const dataValidade = document.getElementById("dataValidade").value;
  const endereco = document.getElementById("endereco").value
  const obsPrestador = document.getElementById("obsPrestador").value

  const showImg = document.getElementById('showImg')
  document.getElementById("orcamentoResult").style.display = "block";
  document.getElementById("baixarPdf").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.addImage(showImg, 0, 0, 210, 50)
  doc.text(separador, 0, 52);
  doc.text(`Orçamento Gerado em: ${dataFormatada}. Valido ate: ${dataValidade}`, 60, 56);
  
      // DADOS CLIENTE
  doc.text(`Dados Cliente`, 5, 70)
            doc.text(separador, 43, 70);
      doc.text(`${clienteNome}`, 10, 77);
      doc.text(`Endereço: ${endereco}`, 10, 85);

      // DADOS SERVIÇO
  doc.text(`Serviço Solicitado`, 5, 105)
            doc.text(separador, 52, 105);
      doc.text(`${descricaoServico}`, 10, 112);
      doc.text(`Preço do Serviço ---------------------------------------------------------------`, 5, 150)
      doc.text(` R$ ${precoServico}`, 170, 150);

      doc.text(`------------------------------------ AVISOS IMPORTANTES ------------------------------------`, 5, 170)
      doc.text(`${obsPrestador}`, 10, 177)

  doc.save(`Orçamento_${clienteNome}.pdf`);
  });  
}

function Recibo() {
  const clienteNome = document.getElementById("clienteNome").value;
  const descricaoServico = document.getElementById("descricaoServico").value
  const precoServico = document.getElementById("precoServico").value;
  const dataValidade = document.getElementById("dataValidade").value;
  const endereco = document.getElementById("endereco").value
  const obsPrestador = document.getElementById("obsPrestador").value

  const showImg = document.getElementById('showImg')
  document.getElementById("orcamentoResult").style.display = "block";
  document.getElementById("baixarPdf").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.addImage(showImg, 0, 0, 210, 50)
  doc.text(separador, 0, 52);
  doc.text(`Recibo Gerado em: ${dataFormatada}. Valido ate: ${dataValidade}`, 60, 56);

      // DADOS CLIENTE
  doc.text(`Dados Cliente`, 5, 70)
            doc.text(separador, 43, 70);
      doc.text(`${clienteNome}`, 10, 77);
      doc.text(`Endereço: ${endereco}`, 10, 85);

      // DADOS SERVIÇO
  doc.text(`Serviço Solicitado`, 5, 105)
            doc.text(separador, 52, 105);
      doc.text(`${descricaoServico}`, 10, 112);
      doc.text(`Preço do Serviço ---------------------------------------------------------------`, 5, 150)
      doc.text(` R$ ${precoServico}`, 170, 150);

      doc.text(`------------------------------------ AVISOS IMPORTANTES ------------------------------------`, 5, 170)
        doc.text(`${obsPrestador}`, 10, 175)

      doc.text(`Ass: —————————————`, 5, 275)
      doc.text(`Souza Poda e Cortes`, 20, 280)

  doc.save(`Recibo_${clienteNome}.pdf`);
  });  
}