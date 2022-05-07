import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { Loading } from '../Loading';

interface ScreensHotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screensHot: string | null;
}

export function ScreensHotButton({ 
  screensHot,
  onScreenshotTook 
}: ScreensHotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);
  
  async function handleTakeScreenshot(){
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');

    onScreenshotTook(base64Image);

    setIsTakingScreenshot(false); 
  }

  if(screensHot){
    return(
      <button
      type="button"
      className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      onClick={() => onScreenshotTook(null)}
      style={{
        backgroundImage: `url(${screensHot})`,
        backgroundPosition: 'right bottom',
        backgroundSize: 180,

      }}
      >
        <Trash weight='fill'/>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zing-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors  hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      { isTakingScreenshot ? <Loading/> : <Camera className="w-6 h-6" />}
    </button>
  )
}
