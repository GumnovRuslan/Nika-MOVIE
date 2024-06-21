import { useState } from 'react'
import classes from './ModalSearch.module.scss'
import { search, cross } from '../../assets/icons'
import { PopupContainer } from '../../containers/PopupContainer/PopupContainer'

export function openModalSearch(): void {
    const popup: HTMLElement | null = document.getElementById('popupSearch')
    popup && (popup as HTMLDialogElement).showModal()
}

export function closeModal(): void {
    const popup: HTMLElement | null = document.getElementById('popupSearch')
    popup && (popup as HTMLDialogElement).close()
}

export function ModalSearch() {
    const [value, setValue] = useState('')

    const style = {
        width: '700px',
        marginTop: '10vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
    }

    return (
        <PopupContainer id='popupSearch' style={style} closeOutside={true}>
            <div className={classes.modal_inner}>
                <div className={classes.modal__input_container}>
                    <input type="text" className={classes.modal__input} value={value} onInput={(e) => setValue((e.target as HTMLInputElement).value)} placeholder='Search ...'/>
                    <button className={classes.modal__input_icon}
                        dangerouslySetInnerHTML={{ __html: search }} />
                    <button className={classes.modal__input_icon} onClick={() => setValue('')}
                        dangerouslySetInnerHTML={{ __html: cross }} />
                </div>
            </div>
        </PopupContainer>
    )
}
