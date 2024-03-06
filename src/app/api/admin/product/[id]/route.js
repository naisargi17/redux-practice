import { NextResponse } from "next/server";
import Product from "@/models/productModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(req) {
    try {
        const id = req.url.split("/").pop();
        const product = await Product.findById(id);

        if (!product) {
            return NextResponse.json({ error: "Product Not Found" }, { status: 404 })
        }

        return NextResponse.json({
            success: true,
            product
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}