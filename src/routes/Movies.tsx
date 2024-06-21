import { Section } from "../containers/Section/Section"
import { Template } from "./Template"
import { SectionMovies } from "../containers/SectionMovies/SectionMovies"
import CardMovie from "../components/CardMovie/CardMovie"
import movies from "../assets/movies"

export function Movies() {
    return (
        <Template>
            <Section>
                <SectionMovies>
                    {movies.map((movie, i) => <CardMovie data={movie} key={'movie'+i}/>)}
                </SectionMovies>
            </Section>
        </Template>
    )
}