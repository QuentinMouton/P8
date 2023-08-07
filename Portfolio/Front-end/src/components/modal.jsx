import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

import ModalContent from "./ModalContent"

const Modal = (props) => {
  const modalVeilRef = useRef(null)
  const modalDialogRef = useRef(null)
  const modalContentRef = useRef(null)
  const modalTween = useRef(null)

  useEffect(() => {
    modalTween.current = gsap.timeline({ paused: true })
      .to(modalDialogRef.current, { duration: 0.25, autoAlpha: 1 })
      .from(
        modalContentRef.current.children,
        { duration: 0.35, y: 15, opacity: 1, stagger: 0.1 },
        "-=0.15"
      )
      .reverse()
  }, [])

  useEffect(() => {
    if (props.visible) {
      modalTween.current.play()
    } else {
      modalTween.current.reverse()
    }
  }, [props.visible])

  const closeModal = () => {
    modalTween.current.reverse()
    setTimeout(props.close, 350) // Appel de la fonction de fermeture après la durée de l'animation
  }

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/90 z-50 ${props.visible ? "show" : ""}`}>
      <div
        className="absolute top-0 left-0 w-full h-full bg-transparent cursor-pointer"
        ref={modalVeilRef}
        onClick={closeModal}
      />
      <div className="bg-pricol p-5 overflow-y-auto max-h-[70vh] w-[90vh] thid:w-[70vw] foud:w-[90vw] foud:p-2" ref={modalDialogRef}>
        <ModalContent ref={modalContentRef} id={props.id} name={props.name} pictures={props.pictures} desc1={props.desc1} desc2={props.desc2} skills={props.skills} repo={props.repo} site={props.site} />
      </div>
    </div>
  )
}

export default Modal
