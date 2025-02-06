const tipo = "Orçamento";
const tipo2 = "Recibo";
const razaosicial = "Souza Poda e Cortes";
const cnpj = "33.754.816/0001-60";
const separador = "———————————————————————————————————————————";

const dataAtual = new Date();
const opcoesFormatacao = { day: "numeric", month: "2-digit", year: "numeric" };
const dataFormatada = dataAtual.toLocaleDateString("pt-BR", opcoesFormatacao);

const imageURL = 'https://drive.google.com/file/d/17q0mHQAZuItv9N8fJi5dfWB_913jNFS6/view?usp=sharing'


function Orcamento() {
  const clienteNome = "Marcelinho Mamute Mamador"; //document.getElementById("clienteNome").value;
  const descricaoServico = "Mamador de piroca Profissional"; //document.getElementById("descricaoServico").value;
  const precoServico = "2,50"; //document.getElementById("precoServico").value;
  const dataValidade = "10/10/1010"; //document.getElementById("dataValidade").value;
  const endereco = "Rua Dos Vagabundos"; //document.getElementById("endereco")

  document.getElementById("orcamentoResult").style.display = "block";
  document.getElementById("baixarPdf").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const img = new Image()
    img.src = imageURL
    img.onload = function () { 
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (img.height * imgWidth) / img.width;
      pdf.addImage(imageDataURL, 'JPEG', 10, 10, imgWidth - 20, imgHeight);

      doc.text(tipo, 140, 20);
      doc.text(razaosicial, 140, 27);
      doc.text(cnpj, 140, 35);
      doc.text(separador, 0, 50);
      doc.text(`Orçamento Gerado em: ${dataFormatada}. Valido ate: ${dataValidade}`, 60, 55);
      doc.text(separador, 0, 60);

      // DADOS CLIENTE
      doc.text(`Cliente: ${clienteNome}`, 5, 90);
      doc.text(`Endereço: ${endereco}`, 5, 97);

      doc.text(`Serviço Solicitado: ${descricaoServico}`, 5, 120);
      doc.text(`Preço do Serviço: R$ ${precoServico}`, 5, 127);

      doc.save("orcamento.pdf");
    }
  });
}


function Recibo() {
  const clienteNome = "Marcelinho Mamute Mamador"; //document.getElementById("clienteNome").value;
  const descricaoServico = "Mamador de piroca Profissional"; //document.getElementById("descricaoServico").value;
  const precoServico = "2,50"; //document.getElementById("precoServico").value;
  const dataValidade = "10/10/1010"; //document.getElementById("dataValidade").value;
  const endereco = "Rua Dos Vagabundos"; //document.getElementById("endereco")


    document.getElementById("orcamentoResult").style.display = "block";

    document.getElementById("baixarPdf").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
      doc.text(tipo2, 140, 20);
    doc.text(razaosicial, 140, 27);
    doc.text(cnpj, 140, 35);
    doc.text(separador, 0, 50);
    doc.text(`Orçamento Gerado em: ${dataFormatada}. Valido ate: ${dataValidade}`, 60, 55);
    doc.text(separador, 0, 60);

    // DADOS CLIENTE
    doc.text(`Cliente: ${clienteNome}`, 5, 90);
    doc.text(`Endereço: ${endereco}`, 5, 97);
      
    doc.text(`Serviço Solicitado: ${descricaoServico}`, 5, 120);
    doc.text(`Preço do Serviço: R$ ${precoServico}`, 5, 127);
      doc.save(`Recibo.pdf`);
    });
  }

