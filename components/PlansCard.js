import { useState } from "react";
import Backdrop from "../components/Backdrop";
import Modal from "../components/Modal";
import styles from "../styles/PlansCard.module.css";

function PlansCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className={styles.plans_card}>
      <h2>{props.text}</h2>
      <div>
        <button className="btn" onClick={deleteHandler}>
          read more
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} img={props.img} />}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default PlansCard;
