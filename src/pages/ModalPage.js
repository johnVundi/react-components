import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = ()=>{
        setShowModal(true)
    }

    const handleClose =() =>{
        setShowModal(false);
    }

    const actionBar =<div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
        Accept or we'll deal with you
        </p>
    </Modal>

  return (
    <div>
        <Button onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}
    </div>
  )
}

export default ModalPage