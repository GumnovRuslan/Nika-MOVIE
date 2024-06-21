import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import { ModalSearch } from "../popups/ModalSearch/ModalSearch"
import { Trailers } from "../popups/Trailers/Trailers"
import { useEffect } from "react"

interface Props {
    children: React.ReactNode
}

export function Template(props: Props) {
    useEffect(() => window.scrollTo(0, 0), []);

    return (<>
        <ModalSearch />
        <Trailers />

        <Header/>
        <main style={{ flex: 'content' }}>
            {props.children}
        </main>
        <Footer />
    </>)
}