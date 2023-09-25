import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import {
  increaseItemQuanitiy,
  decreaseItemQuanitiy,
  getOrderQuantityId,
} from './cartSlice';

export default function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();
  const quantity = useSelector(getOrderQuantityId(id));
  return (
    <div className="flex items-center gap-1 md:gap-3 ">
      <Button type="small" onClick={() => dispatch(decreaseItemQuanitiy(id))}>
        -
      </Button>
      <p>{quantity}</p>
      <Button type="small" onClick={() => dispatch(increaseItemQuanitiy(id))}>
        +
      </Button>
    </div>
  );
}
