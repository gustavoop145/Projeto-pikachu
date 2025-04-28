import Link from "next/link";

export default function Sobre() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Adoção de Animais</h1>
      <p className="mb-4">
        Aqui você pode escolher qual animal e raça combina com vc, Aproveite!
      </p>
      <Link href="/">
        <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Voltar para a Home
        </button>
      </Link>
    </main>
  );
}
