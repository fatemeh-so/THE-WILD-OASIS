/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
function CabinRow({ cabin }) {
  const {
    name,
    image,
    discount,
    regularPrice,
    maxCapacity,
    id: cabinId,
    description,
  } = cabin;

  const [showForm, setShowForm] = useState(false);
  const { createCabin1, isCreating } = useCreateCabin();
  function handelDuplicate() {
    createCabin1({
      name: `copy of ${name}`,
      image,
      discount,
      regularPrice,
      maxCapacity,
      description,
    });
  }

  const { isLoading, mutate: deleteCabin } = useDeleteCabin();

  return (
    <div>
      <Table.Row >
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up tp {maxCapacity} quests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <div>
          <button disabled={isCreating} onClick={handelDuplicate}>
            dup
          </button>
          <Modal>
            <Modal.Open opens="edit">
              <button>/Edit/</button>
            </Modal.Open>
            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>
            <Modal.Open opens="delete">
              <button>delete</button>
            </Modal.Open>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isLoading}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Window>
          </Modal>
        </div>
      </Table.Row>
    </div>
  );
}

export default CabinRow;
