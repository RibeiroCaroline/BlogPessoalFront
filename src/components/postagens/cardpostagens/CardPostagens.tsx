import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='bg-neutral-100
            flex flex-col rounded-md overflow-hidden justify-between shadow-md'>
                
            <div className="flex flex-col">
                <div className="flex w-full bg-teal-200 py-2 px-4 items-center gap-4">
                    {postagem.usuario?.foto && 
                        <img
                            src={postagem.usuario?.foto}
                            className='h-12 rounded-full text-neutral-900'
                            alt={postagem.usuario?.nome} />
                    }

                    {!postagem.usuario?.foto &&
                        <img
                        src={'src/assets/user-icon.svg'}
                        className='h-12 rounded-full text-neutral-900'
                        alt={postagem.usuario?.nome} />
                    }
                    <h3 className='text-neutral-900 text-lg font-bold text-center uppercase'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 text-neutral-900'>
                    <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p><b>Tema:</b> {postagem.tema?.descricao}</p>
                    <p><b>Data:</b> {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
                <div className="flex flex-row justify-end gap-3 mx-3 my-2 py-2">
                    <Link to={`/editarpostagem/${postagem.id}`}
                        className='text-slate-100 bg-teal-400 hover:bg-teal-700 px-5 py-2.5 rounded flex items-center'>
                        <button>Editar</button>
                    </Link>
                    <Link to={`/deletarpostagem/${postagem.id}`} 
                        className='text-white bg-error 
                            hover:bg-red-700 rounded flex items-center px-5 py-2.5'>
                        <button>Deletar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardPostagem