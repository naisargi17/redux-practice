import { NextRequest , NextResponse } from "next/server";
import Product from "@/models/productModel";
import {connect} from "@/dbConfig/dbConfig";

connect();

export async function POST(request){
    try {
      
        const reqBody = await request.json();
        const {name,description,price,category,stock} = reqBody;

        const product = await Product.create({
            name,
            description,
            price,
            category,
            stock,
          }); 
        console.log(product);
        return NextResponse.json({
            message: "Product created successfully!!!",
            success: true,
            product
        })

    } catch (error) {
        console.log( error.message + "error1");
        return NextResponse.json({error: error.message}, {status: 500})

    }
}