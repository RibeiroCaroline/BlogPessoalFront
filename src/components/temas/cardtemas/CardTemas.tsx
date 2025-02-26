import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemasProps{
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='bg-neutral-100 border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-teal-500 text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl h-full'>{tema.descricao}</p>
            
            <div className="flex flex-row justify-end gap-3 mx-3 my-2 py-2">
            <Link to={`/editartema/${tema.id}`}
	            className='text-slate-100 bg-teal-400 hover:bg-teal-700 
                    px-5 py-2.5 rounded flex items-center'>
	            <button>Editar</button>
            </Link>
            <Link to={`/deletartema/${tema.id}`} 
	                className='text-slate-100 bg-error hover:bg-red-700 
		                px-5 py-2.5 rounded flex items-center'>
	            <button>Deletar</button>
            </Link>
            </div>

        </div>
    )
}

export default CardTemas