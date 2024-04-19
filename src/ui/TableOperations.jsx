/* eslint-disable react/prop-types */
import styled from 'styled-components';

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
function TableOperations1({children}) {
  return (
    <TableOperations>
      {children}
    </TableOperations>
  )
}

export default TableOperations1

