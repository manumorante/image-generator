const packageJson = require('../package.json')
export default function Index() {
  return (
    <div className='p-6'>
      <h1 className='font-bold mb-3'>Next.js + Tailwind CSS</h1>
      {/* Mostrar el archivo package.json en formato texto: */}
      <pre>{JSON.stringify(packageJson, null, 2)}</pre>
    </div>
  )
}
