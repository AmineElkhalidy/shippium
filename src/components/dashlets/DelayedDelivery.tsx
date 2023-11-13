interface DelayedDeliveryProps {
  destination: string;
  truck: string;
  timeArrive: Date;
  timeDelay: Date;
}

export default function DelayedDelivery() {
  return (
    <div className="grid grid-cols-dashlet gap-2 p-6 py-4 hover:bg-slate-200 hover:cursor-pointer">
      <h5 className="text-gray-600">Casablanca, Morocco</h5>
      <h5 className="text-gray-600">AX-124578</h5>
      <h5 className="text-gray-600">07:05 AM</h5>
      <h5 className="text-gray-600">2:05 h</h5>
    </div>
  );
}
