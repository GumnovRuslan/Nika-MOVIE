import classes from './Trailers.module.scss'
import { PopupContainer } from '../../containers/PopupContainer/PopupContainer'

export function openModalSearch(): void {
    const popup: HTMLElement | null = document.getElementById('popupTrailer')
    popup && (popup as HTMLDialogElement).showModal()
}

export function closeModal(): void {
    const popup: HTMLElement | null = document.getElementById('popupTrailer')
    popup && (popup as HTMLDialogElement).close()
}

interface Props {
}

export function Trailers(props: Props) {
    return (
        <PopupContainer id='popupTrailer' closeOutside={true}>
            <div className={classes.popup}>
                <div className={classes.popup__video} >
                    <video src="https://www.youtube.com/embed/7DuYZtU-GP0?si=PkhFYSD7ERTE6Rta" controls width={'100%'} height={'100%'}></video>
                </div>
            </div>
        </PopupContainer>
    )
}