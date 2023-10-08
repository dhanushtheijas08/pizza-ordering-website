import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
export default function UpdateOrder({ orders }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH">
      <Button type="small">Make Priority</Button>
    </fetcher.Form>
  );
}
export async function action({ _, params }) {
  const newData = { priority: true };
  await updateOrder(params.orderId, newData);
  return null;
}
