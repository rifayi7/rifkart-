import { CreditCard, Truck, MessagesSquare, Gift } from "lucide-react";
export default function BlackContainer() {
  return (
    <div className="bg-tiddy-black min-h-[180px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-10">
      <div className="flex items-start gap-4">
        <CreditCard color="white" size={40} className="flex-shrink-0" />
        <div className="text-white">
          <h1 className="font-bold">Secure Payments</h1>
          <p className="text-sm">
            Tellus gravida ipsum aut facilisis tempus at et aliquam estsem.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Truck color="white" size={40} className="flex-shrink-0" />
        <div className="text-white">
          <h1 className="font-bold">Fast Delivery</h1>
          <p className="text-sm">
            Tellus gravida ipsum aut facilisis tempus at et aliquam estsem.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <MessagesSquare color="white" size={40} className="flex-shrink-0" />
        <div className="text-white">
          <h1 className="font-bold">24/7 Support</h1>
          <p className="text-sm">
            Tellus gravida ipsum aut facilisis tempus at et aliquam estsem.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Gift color="white" size={40} className="flex-shrink-0" />
        <div className="text-white">
          <h1 className="font-bold">Gift Cards</h1>
          <p className="text-sm">
            Tellus gravida ipsum aut facilisis tempus at et aliquam estsem.
          </p>
        </div>
      </div>
    </div>
  );
}
