import { useEffect } from 'react'
import classes from './PopupContainer.module.scss'

interface Props {
    children?: React.ReactNode
    id: string
    closeOutside?: boolean
    style?: {[key: string]: string}
}

function closeWhenClickingOnBackground(e: MouseEvent): void {
    const popup = e.currentTarget as HTMLDialogElement

    if (popup) {
        const popupSize: DOMRect = popup.getBoundingClientRect()
        const isClietX: boolean = !(popupSize.left < e.clientX && popupSize.right > e.clientX)
        const isClietY: boolean = !(popupSize.top < e.clientY && popupSize.bottom > e.clientY)
        if(isClietX || isClietY) popup.close()
    }
}

export function PopupContainer(props: Props) {
    useEffect(() => {
        if (props.closeOutside) document.getElementById(props.id)?.addEventListener('click', closeWhenClickingOnBackground)
        
        return () => {
            document.getElementById(props.id)?.removeEventListener('click', closeWhenClickingOnBackground);
        }
    }, [])

    return (
        <dialog id={props.id} className={classes.container} style={props.style}>
            {props.children}
        </dialog>
    )
}