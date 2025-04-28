import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo ao site de adoção!</h1>

     
      <h2 className="text-xl font-semibold mb-4">Encontre seu novo melhor amigo</h2>

      
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        
        <div className="md:w-1/2">
        <h3 className="text-xl font-semibold mb-4">Nossa história</h3>
          <p className="text-lg mb-4">
            Nossa história começou com o amor por animais abandonados. Desde 2015, ajudamos centenas de
            cachorros e gatos a encontrarem novos lares cheios de amor. Aqui, cada adoção é feita com
            responsabilidade e carinho!
          </p>
          <p className="text-lg">
            Navegue pelas nossas opções de adoção e ajude-nos a transformar vidas — inclusive a sua!
          </p>
        </div>

       
        <div className="md:w-1/2">
          <img
            src="gatinho.png" 
            alt="Animais para adoção"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>

      
      <Link href="/sobre">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Adote Aqui!
        </button>
      </Link>
    </main>
  );
}
