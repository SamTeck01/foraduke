import { useState } from 'react';
import ReactWhatsapp from 'react-whatsapp';
import 'boxicons';
import './App.css'
import TheModal from './theModal';
import sunflower from './assets/sunflower.gif';
import aishainfo from './assets/aisha-info.jpg';
import samteck from './assets/samteckLogo.png'
import samteckProfile from './assets/SamTeck Profile.jpg'

function App() {
  const messages = [
    <p className='text-3xl font-indie'>Hey! Just wanted to say that you were on my mind today. Hope you’re having a great day!</p>,
    <div className='text-3xl font-indie'><h2 className='text-center text-4xl font-indie' >Aduke, Much Loved</h2> In a world where moments shine,
    Aduke, pookie, you’re simply divine.
    A name that brightens up my day,
    In your laughter, worries fade away.
    
    Much loved, you spark a gentle light,
    Turning shadows into pure delight.
    With every chat, my heart takes flight,
    Aduke, cherished, you feel so right.</div>,
    "Hey! I just wanted to say that you are truly amazing. Your intelligence and bravery never cease to impress me!",
    <div className='text-3xl font-indie'><h2 className='text-center text-4xl font-indie' >Aisha, Alive and Well    </h2> In a world where hopes collide,
    Aisha shines, my heart’s bright guide.
    A name that dances in the air,
    Bringing joy that’s sweet and rare.
    
    Alive and well, you light the way,
    In every smile, you brighten my day.
    With each word, my spirits soar,
    Aisha, cherished, I adore.</div>,
    "What’s the best thing that happened to you today? I’d love to hear about it!",
    <div className='text-3xl font-indie'><h2 className='text-center text-4xl font-indie' >Aisha, My Muse
    </h2> In every word, your wisdom gleams,
Aisha, you inspire my dreams.
With a cute voice that gently calls,
You brighten my days, you break down walls.

Alive and well, you’re a breath of fresh air,
With each clever thought, you show how much you care.
In your presence, time gracefully flows,
Aisha, my crush, how my admiration grows.</div>,
'I love You pookie'
  ]
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('')
  const changeMessage = () => {
    setIndex(prevIndex=> (prevIndex + 1)% messages.length )
  };
  const date = new Date()

  const infoElement = <div className='flex flex-col items-center relative'>
    <h1 className='text-center h3 font-indie'>Info Page</h1>
    <img src={aishainfo} alt={`infos`} width={200} />
    <img src={samteck} alt="SamTeck Logo" width={100} className='absolute -bottom-6 right-2' />
  </div>

  const chatHimUp = <div className='flex flex-col items-center relative'>
    <h1 className='text-center h3 font-indie'>Chat SamTeck</h1>

    <div className='relative flex gap-4 items-center ' >
      <div className='absolute -left-3 w-28 p-0 h-28 rounded-full m-0 -z-50 ' style={{backgroundColor: '#f3e0d0', boxShadow: '0px 0px 10px grey' }} ></div>
      <img src={samteckProfile} alt={`infos`} width={110} className='rounded-full'/>
      <div className='flex flex-col gap-2'>
        <input type="text" id="text" placeholder="Message" onChange={(e)=> setInput(e.target.value) }
          className="font-indie shadow appearance-none border rounded h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
        required />

        <div className="flex justify-end">
          <ReactWhatsapp number='+2349023036748' message={input} >
            <button className='bg-green-500 w-fit p-2.5 rounded-full float-right flex'><box-icon type='solid' name='send' color='white' ></box-icon> </button>
          </ReactWhatsapp>
        </div>
      </div>
    </div>
    
    <img src={samteck} alt="SamTeck Logo" width={100} className='absolute -bottom-7 right-2' />
    <p className='mt-4 text-xl font-indie'><span className='text-black italic underline '>Note:</span> Message sent here are sent to Abdul Samads Whatsapp and if the message didn't send you can comeback and resend it </p>
  </div>

  return (
    <div className="flex flex-col items-center font-indie min-h-screen">
      <TheModal element={infoElement} height={520}>
        <div className="absolute border-2 400px:p-4 400px:py-0 top-6 border-black rounded-full top-4 left-4 hover:bg-gray-50 messageIcon">
          <span className='font-indie text-5xl'>i</span>
        </div>
      </TheModal>

      <h1 className="400px:text-5xl mb-3 400px:-mt-0 font-indie">For Aduke</h1>

      <TheModal element={chatHimUp} height={370} width={350}>
        <div className="absolute border-2 400px:p-2 flex top-6 border-black rounded-full right-4 hover:bg-gray-50 messageIcon">
          <box-icon name='message-dots' size='sm' ></box-icon>
        </div>
      </TheModal>

      <div className="flex justify-between flex-col items-center h-[600px] bg-primary ">
        <img src={sunflower} width={400} alt="Two sunflowers with green stems and leaves" className="mb-5" />

        <footer className='w-full relative flex justify-center flex-col '>
          <div className=" w-full border-solid border-y-2 text-center p-4 border-black font-indie cursor-pointer" onClick={()=>changeMessage() } >
              <p className="text-3xl font-indie ">{messages[index] }</p>
          </div>
          <div className="w-full px-6 flex justify-between items-center mt-2">
              <p className="text-2xl font-bold font-indie">{`${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()} `}</p>
              <p className="text-2xl font-bold font-indie"> {index + 1 }/{messages.length } </p>
          </div>
          
        </footer>
      </div>
    </div>
  );
}

export default App
