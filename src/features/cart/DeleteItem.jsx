import { deleteItem } from './cartSlice';
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
export default function DeleteItem({ id }) {
  const dispatch = useDispatch();
  const handleOrderDelete = function () {
    dispatch(deleteItem(id));
  };
  return (
    <Button type="small" onClick={handleOrderDelete}>
      Delete
    </Button>
  );
}
