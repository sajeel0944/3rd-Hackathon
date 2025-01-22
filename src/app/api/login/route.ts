import { NextRequest, NextResponse } from "next/server";


interface varifyData {
    user: string;
    password: number;
  }

const saveData:varifyData[]=[
    {
        user:"wgey",
        password:27346
    }

]


export function GET(){
    return NextResponse.json(saveData)
}



export async function POST(request:NextRequest){

    const get=await request.json();

 saveData.push(get);

 try{
    if(get.user=="sajeel" && get.password ==55555){
        return NextResponse.json(
            {
                valify:"yes",
                user:"/dashboard/admin"
            }
        )
    }else{
        return NextResponse.json(
            {
                valify:"yes",
                user:"home"
            }
        )
    }
 }catch (eoore:any){
    return NextResponse.json({
        message:"invalidation"
    })
}

    return NextResponse.json({})
}
