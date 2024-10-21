export default function Benefits() {
    return (
      <div className="bg-gray-900 text-white py-20 mx-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center -mt-8 mb-12">Benefits of BasedPay</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Interoperability */}
            <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold">Save on Every Purchase</h3>
              </div>
              <p className="text-gray-400">
              Why pay full price when you can save? Basedpay rewards you with instant discounts just for participating in simple campaigns, putting money back into your pocket on every transaction.
              </p>
            </div>
  
            {/* High-Yield Staking */}
            <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold">Empower Service Providers</h3>
              </div>
              <p className="text-gray-400">
              Service providers can boost their revenue by offering Basedpay discounts to their customers. Plus, with our data insights, providers can access collateral-free loans based on purchase volume, helping them grow their businesses with ease.
              </p>
            </div>
  
            {/* Efficient Liquidity Provision */}
            <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold">New Customer Base for Web3 Projects</h3>
              </div>
              <p className="text-gray-400">
              Basedpay introduces Web3 projects to a whole new audience outside of traditional platforms like Twitter and Telegram. Our platform expands user acquisition, making it easier for projects to find and engage new users who may not be familiar with blockchain technology.
              </p>
            </div>
  
            {/* Cutting-Edge Security */}
            <div className="bg-gray-800 rounded-lg p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-xl font-semibold">High-Value User Identification</h3>
              </div>
              <p className="text-gray-400">
              Users who return to Web3 projects beyond their initial engagement are identified as high-interest users, allowing projects to target them with further promotions such as airdrops and NFTs, boosting long-term engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }