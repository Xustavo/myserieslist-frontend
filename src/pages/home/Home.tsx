import "./Home.css"

//icons
import { FaNewspaper } from "react-icons/fa6";

//shadcn
import { Separator } from "../../components/ui/separator";

function Home() {

    const information: SelectModel[] = [
        {
            friends: [
                
            ],
            movies: [

            ],
            series: [

            ]
        }
    ]

    return (
        <div className="home">
            <div className="news">
                <FaNewspaper /> <h3>Last Updates</h3>
            </div>
            <div className="personal_updates">
                <h1>Personal Updates</h1>
                <h2>Friends</h2>
                {information[0].friends.length > 0 ? (
                    information[0].friends.map((friend, index) => (
                        <div key={index}>
                            <p className="has-information">{friend}</p>
                        </div>
                    ))
                ) : (
                    <p>Você ainda não adicionou amigos.</p>
                )}
                <Separator className="separator"/>
                <h2>Last Movie</h2>
                {information[0].movies.length > 0 ? (
                    information[0].movies.map((movie, index) => (
                        <div key={index}>
                            <p className="has-information">{movie}</p>
                        </div>
                    ))
                ) : (
                    <p>Você ainda não adicionou Filmes.</p>
                )}
                <Separator className="separator"/>
                <h2>Last Serie</h2>
                {information[0].series.length > 0 ? (
                    information[0].series.map((serie, index) => (
                        <div key={index}>
                            <p className="has-information">{serie}</p>
                        </div>
                    ))
                ) : (
                    <p>Você ainda não adicionou Séries.</p>
                )}
                <Separator className="separator"/>
            </div>
        </div>
    )
}

export default Home

type SelectModel = {
    friends: string[]
    movies: string[]
    series: string[]
}