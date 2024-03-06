import { NextResponse } from "next/server";
import Product from "@/models/productModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function PUT(req) {
    try {
        const id = req.url.split("/").pop();
        const reqBody = await req.json();

        let product = await Product.findById(id);

        if (!product) {
            return NextResponse.json({ error: "Product Not Found" }, { status: 404 })
        }

        product = await Product.findByIdAndUpdate(id , reqBody, {
            new: true,
            runValidators: true,
            useFindAndModify: false
          });

        return NextResponse.json({
            success: true,
            message : "Product Updated Successfully!!!",
            product
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}