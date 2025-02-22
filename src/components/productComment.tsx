// "use client";

// import { useEffect, useState } from "react";
// import { SignedOut, SignInButton, useUser } from "@clerk/nextjs";
// import { client } from "@/sanity/lib/client";

// type data = {
//   title: string;
// };


// const ProductComment = (props: data) => {
//   // is ky nadar input field ki value arahe hai or setComment is ky andar hai
//   let [comment, setComment] = useState("");

//   // is ky andar sanity sy bata araha hai comment ka 
//   const [comments, setComments] = useState([]);

//   let [filterData, setFilterData] = useState([])

//   useEffect(()=>{
//     async function FetchData (){
//         let sanityComment = await client.fetch(`*[_type =="comment"]`)
//         // is ky andar sy filterData ko setcomments ky andar data dy raha ho
//         setFilterData(sanityComment)
//     }
//     FetchData()
//   },[])

//   useEffect(()=>{
//     function jj(){
//      // is ky nadar filter karar hai ho ky jo title arahe hai wo props ky title ky match karaha ho ky dono same hai
//      let getFilter = filterData.filter((data:any)=> data.title == props.title)
//     //  console.log(getFilter)
//      setComments(getFilter)
//     }
//     jj()
//   },[filterData])

//   // is ko form ky kia hai jab form submit ho ga to ye chaly ga
//   const handleSubmit =async (e: React.FormEvent) => {
//     e.preventDefault();
//     // is ky andar sanity ky andar data jaraha ahi
//     let pushComment ={
//         _type : "comment",
//         comment : comment,
//         // is ky andar clerk sy email arahe hai
//         email : user?.primaryEmailAddress?.emailAddress,
//         // is ky andar clerk sy name arahe hai
//         name : user?.fullName,
//         title : props.title
//     }
//     const pushData = await client.create(pushComment);

//     setComment(comment = "")
//   };

//   console.log(comment)
//   // ye clerk sy araha hai is ko is liye dia hai agar user sign in nhi hoga to ye bataye ga
//   const { isSignedIn, user } = useUser();

// //   agar user sign in nhi hoye ga to ye show ho ye ga
//   if (!isSignedIn)
//     return (
//         <div className="text-center ">
//           <SignedOut>
//             <div className=" ">
//               <span className="text-xl font-medium mr-2">Please</span>
//               <SignInButton>
//                 <button className="text-blue-700 underline">Sign In</button>
//               </SignInButton>
//             </div>
//           </SignedOut>
//         </div>
//     )
//     // is ko is liye dia hai ky agar comments ki length 0 ho to ye show ho ye ga
//     else if(comments.length == 0){
//         return(
//             // <div className=" max-w-xl mx-auto -mt-5 h-[250px] flex justify-center items-center ">
//             //   <p className="text-xl font-semibold text-center">Loading...</p>
//             // </div>
//             <div className="max-w-xl mx-auto -mt-5">
     
//             {/* Comment Input */}
//             <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
//               <input
//                 type="text"
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//                 placeholder="Write your comment..."
//                 className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//               >
//                 Post
//               </button>
//             </form>
      
//             {/* Comments Display */}
//             <div className="h-[250px] overflow-y-auto border rounded-lg">
//                 <div
//                   className="p-3 border-b last:border-b-0 hover:bg-gray-50"
//                 >
//                  <h3>No comment</h3>
//                 </div>
//             </div>
//           </div>
//         )

//     }

//     // user sign in hoga to ye show ho ye ga
//   return (
//     <div className="max-w-xl mx-auto -mt-5">
     
//       {/* Comment Input */}
//       <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
//         <input
//           type="text"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Write your comment..."
//           className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//         />
//         <button
//           type="submit"
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//         >
//           Post
//         </button>
//       </form>

//       {/* Comments Display */}
//       <div className="h-[250px] overflow-y-auto border rounded-lg">
//         {comments.map((text:any, index) => (
//           <div
//             key={index}
//             className="p-3 border-b last:border-b-0 hover:bg-gray-50"
//           >
//             <h3 className="font-medium">{text.name}</h3>
//            <h3>{text.comment}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductComment;









"use client";

import { useEffect, useState } from "react";
import { SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import { client } from "@/sanity/lib/client";

type data = {
  title: string;
};

const ProductComment = (props: data) => {
  
  const [livecomment, setlivecomment] = useState(""); // is ky andar nichy input filed sy value arahe hai
  const [comments, setComments] = useState<any[]>([]); //is ky andar sary product ky comment ka daat aye gy sanity sy
  const { isSignedIn, user } = useUser(); // is ky andar clerk.js sy user ka bata aye ga

  // Fetch comments from Sanity
  useEffect(() => {
    //  dircet jo product hai us ka he comment aye gy or order(_createdAt desc) se comments ko latest se oldest order mein fetch kiya jayega. matarab ky ulta baat hojaye ga
    const query = `*[_type == "comment" && title == "${props.title}"] | order(_createdAt desc)`;

    const fetchComments = async () => {
      const data = await client.fetch(query); // Sanity se data fetch karein
      setComments(data); // Fetched data ko setComments mein dy raha ho
    };

    fetchComments(); // Fetch comments initially

    // Real-time updates ke liye subscribe karein
    const subscription = client.listen(query).subscribe((update) => {
      // Jab bhi naya comment add ho, usko state mein add karein
      setComments((prevComments) => [update.result, ...prevComments]);
    });

    // Cleanup function
    return () => subscription.unsubscribe();
  }, [props.title]); // props.title ke change par useEffect dobara run hoga

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let manage_date = new Date()
    let current_date = manage_date.toLocaleDateString(); // is ky andar live date arahe hai
    let current_time = manage_date.toLocaleTimeString(); // is ky andar live time arahe hai

    const pushComment = {
      _type: "comment",
      comment: livecomment,
      email: user?.primaryEmailAddress?.emailAddress,
      name: user?.fullName,
      title: props.title,
      date:current_date,
      time:current_time
    };
    await client.create(pushComment);
    setlivecomment("");
  };

  if (!isSignedIn)  //   agar user sign in nhi hoye ga to ye show ho ye ga
    return (
      <div className="text-center">
        <SignedOut>
          <div>
            <span className="text-xl font-medium mr-2">Please</span>
            <SignInButton>
              <button className="text-blue-700 underline">Sign In</button>
            </SignInButton>
          </div>
        </SignedOut>
      </div>
    );

  // user sign in hoga to ye show ho ye ga
  return ( 
    <div className="max-w-xl mx-auto -mt-5">
      {/* Comment Input */}
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          value={livecomment}
          onChange={(e) => setlivecomment(e.target.value)}
          placeholder="Write your comment..."
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Post
        </button>
      </form>

      {/* Comments Display */}
      <div className="h-[250px] overflow-y-auto border rounded-lg">
        {comments.length === 0 ? (
          // is ko is liye dia hai ky agar comments ki length 0 ho to comments false hoye ga to ye show ho ye ga
          <div className="p-3 border-b last:border-b-0 hover:bg-gray-50">
            <h3>No comments yet</h3>
          </div>
        ) : (
          // is ko is liye dia hai ky agar comments ki length 0 sy bary ho to comments True hoye ga to ye show ho ye ga
          comments.map((comme: any, index) => (
            <div
              key={index}
              className="p-3 border-b last:border-b-0 hover:bg-gray-50"
            >
              <h3 className="font-medium">{comme.name}</h3>
              <h3>{comme.comment}</h3>
              <div className="text-sm"><span>{comme.date}</span>/<span>{comme.time}</span></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductComment;