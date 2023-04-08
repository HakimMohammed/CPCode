import logo from './assets/Logo.png'
import person from './assets/Person.svg'

export default function Introduction()
{
    return(
        <div className="w-50 container text-center" style={{height:'100vh',marginLeft:'0',padding:0}}>
            <div className=" w-100 h-25 row row-cols-1 ">
                <div className='col  h-50 w-100'>
                    <div className='d-flex justify-content-center'>
                        <img src={logo} className='h-100 w-25 mt-5'/>
                    </div>
                </div>
                <div className='col h-50 mt-5 w-100 px-5 text-center '>
                    On offrent un ensemble de composants réutilisables et prêts à l'emploi pour la création de sites web.<br/>
                    Elle est conçue pour aider les développeurs à gagner du temps et à améliorer leur efficacité en leur fournissant des éléments de base pour la création d'interfaces utilisateur.
                </div>
            </div>
            <div className=" row h-75">
                <div className='col'>
                    <img src={person} className='h-75 w-50 mt-5 pt-2' />
                </div>
            </div>
        </div>
    )
}