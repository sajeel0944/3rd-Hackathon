"use client"

// is ky componeny shadcn sy arahy hai
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionLast from "@/components/SectionLast";
import { Package, Truck, CheckCircle, Clock, Search, Box, MapPin, Calendar, DollarSign, Mail, User, Phone } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { client } from '@/sanity/lib/client';

const OrderInformation = () => {

    // is ky andar user ka id aye or is ko nichy use kia hai
    const [orderNumber, setOrderNumber] = useState('');

    // is ky andar sanity sy data araha hai user ka
    let [sanity_data,setSanity_data] =useState<any>([])

    useEffect(() => {
        async function push_data() {
            try{
            let fetch_data = await client.fetch(`*[_type=="customer"]`)
            // setSanity_data ky andar fetch_data ka data ja raha hai
            setSanity_data(fetch_data)
            } catch(err){
                console.log(err+"error")
            }
        }
        push_data()
    }, [])

    //  is filter hoky daat araha hai 
    let [getFilter , setgetFilter] = useState<any>([])
    // console.log(getFilter)

    // is ko nichy dia hai ky search button py click hony py ye fuction call ho raha hai
    const searchData = ()=>{
      // is ky andar sanity ka bata ky andar jo bhi array main order number wo bata filter hojaye ga  
      let filter_sanity_data = sanity_data.filter((data:any) =>  String(data._id) == String(orderNumber) )
      // is ky andar filter data ko setgetfilter ky nadar dy raha ho
      setgetFilter(filter_sanity_data) 
    }



    
    // is ky andar Tracking Progress ka data araha hai 
    let [Tracking_Progress , setTracking_Progress] = useState<any>([])

    useEffect(() => {
      // agar getfilter ky andar data araha hai to ye chaly ga
      if (getFilter.length > 0) {

        // is ky andar Order Received ki date arahe hai
        let date = getFilter[0].Date ;
        let parts = date.split("/"); // is ky andar date ko split kia hai

        // is ky andar Packaging Complete ki time arahe hai
        parts[1] = Number(parts[1]) + 2; // isky andar jo date hai us ko 2 sy plus karry hy hai
        let Packaging = parts.join("/"); // is ky andar date ko split kia hai

        // is ky andar In Transit ki date arahe hai
        parts[1] = Number(parts[1]) + 2; // isky andar jo date hai us ko 2 sy plus karry hy hai
        let transit = parts.join("/"); // is ky andar date ko split kia hai

        // is ky andar Out for Delivery ki date arahe hai
        parts[1] = Number(parts[1]) + 2; // isky andar jo date hai us ko 2 sy plus karry hy hai
        let delivery = parts.join("/"); // is ky andar date ko split kia hai

        const trackingData = [
          { id: 1, title: "Order Received", completed: true, time: getFilter[0].Time, date: getFilter[0].Date, icon: Package },
          { id: 2, title: "Packaging Complete", completed: false, time: "2:00 PM", date: Packaging , icon: Box },
          { id: 3, title: "In Transit", completed: false, time: "4:30 PM", date: transit, icon: Truck },
          { id: 4, title: "Out for Delivery", completed: false, time: "Pending", date: delivery, icon: MapPin }
        ];
        // settTracking_Progress ky andar trackingData ka data ja raha hai
        setTracking_Progress(trackingData);
      } else {
        console.log("No data found");
      }
    }, [getFilter]); // Runs only when getFilter changes
    
    return (
        <>
            <Header/>
            <Hero put="Order Information" />

            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Track Your Order</h1>
          <p className="text-gray-600">Enter your order Id to track your package</p>
        </div>

        {/* Search Section */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="Enter your order number (e.g., ORD-12345)"
                  className="w-full pl-12 pr-4 py-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
              </div>
              <button onClick={searchData} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
                Track Order
              </button>
            </div>
          </CardContent>
        </Card>

        {/* agar getfilter bata ky andar value nhi ho gi to ye false hoye ga or agar hoye gi to true hoga */}
        {getFilter.length > 0 ? 
        <div>  
          {/* Order Summary customer ka information is main show ho rahe hai */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <User  className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-semibold">{getFilter[0].firstName} {getFilter[0].lastName}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order Number</p>
                    <p className="font-semibold">{getFilter[0]._id}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>
                    <p className="font-semibold">{getFilter[0].Date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Shipping To</p>
                    <p className="font-semibold truncate">{getFilter[0].address} , {getFilter[0].City} , {getFilter[0].Country}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-semibold truncate">{getFilter[0].Email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone  className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-semibold truncate">{getFilter[0].Phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Items and Tracking */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Order Items  is ky andar customer ny jo buy kia hai wo product is main araha hai*/}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Box className="h-5 w-5" />
                  Order Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {getFilter[0].cart.map((item:any, index:number) => {
                    return(
                      <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <Image src={item.imageUrl} alt={item.title} width={100} height={100} className="w-20 h-20 object-cover rounded-md" />
                        <div className="flex-1">
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-gray-500">Quantity: {getFilter[0].productquality[index].quality}</p>
                        </div>
                        <div className="text-right">
                          {/*item.price ky andar price arahe hai us ko multiply getFilter[0].productquality[index].quality is ky waraha ho is ky andar product ki quality arahe hai  */}
                          <p className="font-medium text-blue-600">{item.price * getFilter[0].productquality[index].quality}</p>
                        </div>
                      </div>
                    )
                })}
                </div>
              </CardContent>
            </Card>

            {/* Tracking Progress  is ky andar order ki progress arahe hai*/}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Tracking Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {Tracking_Progress.map((step:any, index:number) => (
                    <div key={step.id} className="flex items-center mb-8 last:mb-0">
                      <div className="mr-4 relative">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed ? 'bg-green-500' : 'bg-gray-200'
                        }`}>
                          {step.completed ? (
                            <CheckCircle className="w-6 h-6 text-white" />
                          ) : (
                            <step.icon className="w-6 h-6 text-gray-400" />
                          )}
                        </div>
                        {index < Tracking_Progress.length - 1 && (
                          <div className={`absolute top-10 left-5 w-0.5 h-12 -ml-px ${
                            step.completed ? 'bg-green-500' : 'bg-gray-200'
                          }`} />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium flex items-center gap-2">
                          {step.title}
                          {step.completed && <CheckCircle className="w-4 h-4 text-green-500" />}
                        </h3>
                        <p className="text-sm text-gray-500">{step.time} - {step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        :
        <div className="text-center text-gray-500">No order found with the provided order Id</div>
        }
      </div>
    </div>
            <SectionLast />
            <Footer/>
        </>
    );
};

export default OrderInformation;    