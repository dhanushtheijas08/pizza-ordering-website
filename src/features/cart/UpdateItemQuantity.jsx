import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { increaseItemQuanitiy, decreaseItemQuanitiy } from './cartSlice';

export default function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-1 md:gap-3">
      <Button type="small" onClick={() => dispatch(decreaseItemQuanitiy(id))}>
        -
      </Button>
      <Button type="small" onClick={() => dispatch(increaseItemQuanitiy(id))}>
        +
      </Button>
    </div>
  );
}
