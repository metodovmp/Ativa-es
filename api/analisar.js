export default async function handler(req, res) {
  if (req.method!== 'POST') return res.status(405).end();
  const { tipo, conteudo } = req.body;
  const prompt = `
  Você é o AXIS, analista sênior de funis.
  Tipo: ${tipo}
  Conteúdo: ${conteudo}
  Retorne APENAS um JSON válido nesse formato:
  {
    "gargalo1_titulo": "título curto",
    "gargalo1_desc": "explicação 2 linhas",
    "gargalo2_titulo": "título curto",
    "gargalo2_desc": "explicação 2 linhas",
    "solucao_bloqueada1": "título solução paga",
    "solucao_bloqueada2": "título solução paga"
  }`;

  const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });

  const data = await geminiRes.json();
  const texto = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
  const jsonLimpo = texto.replace(/```json|```/g, "").trim();
  res.status(200).json(JSON.parse(jsonLimpo));
      }
