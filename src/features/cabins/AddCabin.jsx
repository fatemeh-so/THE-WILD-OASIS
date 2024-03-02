import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
// function AddCabin() {
//   const [showModal, SetShowModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => SetShowModal(!showModal)}>
//         {showModal ? "close form" : "Add New Cabin"}
//       </Button>
//       {showModal && <Modal onClose={()=>SetShowModal(false)}><CreateCabinForm onCloseModal={()=>SetShowModal(false)}/></Modal>}
//     </div>
//   );
// }
function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
