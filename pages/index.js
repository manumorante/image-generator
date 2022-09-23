import { toJpeg } from 'html-to-image'

export default function Index() {
  function generate({ fromElem, toContainer }) {
    toJpeg(fromElem)
      .then(function (dataUrl) {
        var img = new Image()
        img.src = dataUrl
        toContainer.innerHTML = img.outerHTML
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error)
      })
  }

  const handleClick = () => {
    const fromElem = document.getElementById('fromElem')
    const toContainer = document.getElementById('toContainer')

    if (fromElem && toContainer) {
      generate({ fromElem, toContainer })
    } else {
      console.error('error')
    }
  }

  return (
    <div className='p-6 flex flex-col items-start gap-4'>
      <div
        id='fromElem'
        className='w-[600px] h-[315px] flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <div className='text-white font-extrabold text-2xl'>Manu Morante</div>
      </div>

      <div id='toContainer'>...</div>

      <button onClick={handleClick}>Generate</button>
    </div>
  )
}
