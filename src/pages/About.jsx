import Layout from '../components/Layout.jsx';

export default function About() {
  return (
    <Layout theme="turquoise">
      <h2 className="page-title">Sobre nós</h2>
      <div className="prose">
        <p>
          A Ecodar nasceu com a missão de tornar a energia limpa acessível para famílias e
          pequenos negócios.
        </p>
        <p>
          Trabalhamos com geradores, baterias e painéis solares escolhidos por eficiência,
          durabilidade e baixo impacto ambiental.
        </p>
        <p>
          Cada produto ajuda a reduzir a dependência de combustíveis fósseis e a apoiar uma
          rotina mais sustentável.
        </p>
      </div>
    </Layout>
  );
}
